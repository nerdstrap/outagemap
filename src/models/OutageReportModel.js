define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        env = require('env'),
        regions = require('regions'),
        outageReportService = require('services/outageReportService');

    var _incidentTotalThreshold = env.getIncidentTotalThreshold();

    var parseOperatingCompany = function (operatingCompany) {
        var operatingCompanyInstance = {
            identifier: '',
            countiesServed: parseInt('0'),
            customersServed: parseInt('0'),
            customersAffected: parseInt('0'),
            repairIssues: parseInt('0'),
            percentageAffected: parseFloat('0')
        };

        // id
        if (operatingCompany.hasOwnProperty('id')) {
            operatingCompanyInstance.identifier = operatingCompany.id;
            var operatingCompanyConfig = regions.getOperatingCompanyByIdentifier(operatingCompanyInstance.identifier);
            operatingCompanyInstance.id = operatingCompanyConfig.id;
            operatingCompanyInstance.fullName = operatingCompanyConfig.fullName;
            operatingCompanyInstance.twitterProfile = operatingCompanyConfig.twitterProfile;
            operatingCompanyInstance.facebookProfile = operatingCompanyConfig.facebookProfile;
            operatingCompanyInstance.outageMapLink = operatingCompanyConfig.outageMapLink;
        }

        // disabled
        if (operatingCompany.hasOwnProperty('disabled')) {
            if (operatingCompany.disabled === "true") {
                operatingCompanyInstance.disabled = true;
                return operatingCompanyInstance;
            }
        }

        // states
        var states = [];
        if (operatingCompany.hasOwnProperty('state')) {
            var state = operatingCompany.state;
            if (state) {
                if (state.length && state.length > 0) {
                    _.each(state, function (element, index, list) {
                        var stateInstance = parseState(element);
                        operatingCompanyInstance.countiesServed += stateInstance.countiesServed;
                        operatingCompanyInstance.customersServed += stateInstance.customersServed;
                        operatingCompanyInstance.customersAffected += stateInstance.customersAffected;
                        operatingCompanyInstance.repairIssues += stateInstance.repairIssues;
                        states.push(stateInstance);
                    });
                } else {
                    var stateInstance = parseState(state);
                    operatingCompanyInstance.countiesServed += stateInstance.countiesServed;
                    operatingCompanyInstance.customersServed += stateInstance.customersServed;
                    operatingCompanyInstance.customersAffected += stateInstance.customersAffected;
                    operatingCompanyInstance.repairIssues += stateInstance.repairIssues;
                    states.push(stateInstance);
                }
            }
        }
        operatingCompanyInstance.states = states;

        // percentageAffected
        if (operatingCompanyInstance.customersAffected > 0 && operatingCompanyInstance.customersServed > 0) {
            operatingCompanyInstance.percentageAffected = operatingCompanyInstance.customersAffected / operatingCompanyInstance.customersServed;
        }

        return operatingCompanyInstance;
    };

    var parseState = function (state) {
        var stateInstance = {
            stateName: '',
            countiesServed: parseInt('0'),
            customersServed: parseInt('0'),
            customersAffected: parseInt('0'),
            repairIssues: parseInt('0'),
            percentageAffected: parseFloat('0')
        };

        // stateName
        if (state.hasOwnProperty('abbr')) {
            stateInstance.stateName = state.abbr;
        }

        // countiesServed
        if (state.hasOwnProperty('counties_served')) {
            stateInstance.countiesServed = parseInt(state.counties_served);
        }

        // customersServed
        if (state.hasOwnProperty('customers_served')) {
            stateInstance.customersServed = parseInt(state.customers_served);
        }

        // incidents
        var incidents = [];
        if (state.hasOwnProperty('incident')) {
            var incident = state.incident;
            if (incident) {
                if (incident.length && incident.length > 0) {
                    _.each(incident, function (element, index, list) {
                        var incidentInstance = parseIncident(element);
                        if (incidentInstance.customersAffected >= _incidentTotalThreshold) {
                            var serviceCountyConfig = regions.getServiceCounty(stateInstance.stateName, incidentInstance.countyId);
                            if (serviceCountyConfig) {
                                incidentInstance.properCountyName = serviceCountyConfig.properCountyName;
                            }
                            stateInstance.customersServed += incidentInstance.customersServed;
                            stateInstance.customersAffected += incidentInstance.customersAffected;
                            stateInstance.repairIssues += incidentInstance.repairIssues;
                            incidents.push(incidentInstance);
                        }
                    });
                } else {
                    var incidentInstance = parseIncident(incident);
                    if (incidentInstance.customersAffected >= _incidentTotalThreshold) {
                        var serviceCountyConfig = regions.getServiceCounty(stateInstance.stateName, incidentInstance.countyId);
                        if (serviceCountyConfig) {
                            incidentInstance.properCountyName = serviceCountyConfig.properCountyName;
                        }
                        stateInstance.customersServed += incidentInstance.customersServed;
                        stateInstance.customersAffected += incidentInstance.customersAffected;
                        stateInstance.repairIssues += incidentInstance.repairIssues;
                        incidents.push(incidentInstance);
                    }
                }
            }
        }
        stateInstance.incidents = incidents;

        // percentageAffected
        if (stateInstance.customersAffected > 0 && stateInstance.customersServed > 0) {
            stateInstance.percentageAffected = stateInstance.customersAffected / stateInstance.customersServed;
        }

        return stateInstance;
    };

    var parseIncident = function (incident) {
        var incidentInstance = {
            uuid: env.getNewGuid(),
            countyName: '',
            customersAffected: parseInt('0'),
            customersServed: parseInt('0'),
            repairIssues: parseInt('0'),
            percentageAffected: parseFloat('0')
        };

        // countyId
        if (incident.hasOwnProperty('county')) {
            incidentInstance.countyId = incident.county;
        }

        // customersAffected
        if (incident.hasOwnProperty('customers_affected')) {
            incidentInstance.customersAffected = parseInt(incident.customers_affected);
        }

        // customersServed
        if (incident.hasOwnProperty('customers_served')) {
            incidentInstance.customersServed = parseInt(incident.customers_served);
        }

        // repairIssues
        if (incident.hasOwnProperty('repair_issues')) {
            incidentInstance.repairIssues = parseInt(incident.repair_issues);
        }

        // percentageAffected
        if (incidentInstance.customersAffected > 0 && incidentInstance.customersServed > 0) {
            incidentInstance.percentageAffected = incidentInstance.customersAffected / incidentInstance.customersServed;
        }

        return incidentInstance;
    };

    var OutageReportModel = Backbone.Model.extend({
        idAttribute: 'outageReportId',
        initialize: function (options) {
            console.trace('OutageReportModel.initialize()');
            options || (options = {});
        },
        sync: function (method, model, options) {
            if (method === "read") {
                var xhr = options.xhr = outageReportService.getCurrentOutageReport().done(function (data) {
                    setTimeout(function () {
                        options.success(data, 'success', null);
                    }, 100);
                });
                model.trigger('request', model, xhr, options);
                return xhr;
            }
        },
        getCurrentOutageReport: function (region) {
            this.requestedRegion = region;
            var xhr = this.fetch({
                url: env.getApiUrl() + '/OutageXml.aspx?output=json',
                reset: true
            });

            return xhr;
        },
        set: function (key, val, options) {
            var currentContext = this;
            var attributes;
            if (typeof key === 'object') {
                attributes = key;
                options = val;
            } else {
                (attributes = {})[key] = val;
            }
            var derivedAttributes = {};
            if (attributes) {
                if (attributes.hasOwnProperty('NewDataSet')) {

                    var NewDataSet = attributes.NewDataSet;

                    if (NewDataSet.hasOwnProperty('OperatingCo')) {
                        var OperatingCo = NewDataSet.OperatingCo;
                        if (OperatingCo && OperatingCo.length > 0) {
                            _.every(OperatingCo, function (element, index, list) {
                                var operatingCompanyInstance = parseOperatingCompany(element);
                                if (operatingCompanyInstance.id === currentContext.requestedRegion) {
                                    derivedAttributes = operatingCompanyInstance;
                                    return false;
                                }
                                return true;
                            });
                        }
                    }

                    if (NewDataSet.hasOwnProperty('dataset')) {
                        var dataset = NewDataSet.dataset;
                        if (dataset.hasOwnProperty('timestamp')) {
                            try {
                                var timestamp = env.dateFromISO(dataset.timestamp);
                                derivedAttributes.timestamp = timestamp;
                            }
                            catch (e) {
                                if (e) {
                                    console.trace(e.message);
                                }
                            }
                        }
                    }
                }
            }
            return Backbone.Model.prototype.set.call(currentContext, derivedAttributes, options);
        },
        getTimestamp: function () {
            if (this.has('timestamp')) {
                return this.get('timestamp');
            }
            return new Date(0);
        },
        getOperatingCompanyName: function () {
            if (this.has('fullName')) {
                return this.get('fullName');
            }
            return '';
        },
        getId: function () {
            if (this.has('id')) {
                return this.get('id');
            }
            return '';
        },
        getIdentifier: function () {
            if (this.has('identifier')) {
                return this.get('identifier');
            }
            return '';
        },
        getTwitterProfile: function () {
            if (this.has('twitterProfile')) {
                return this.get('twitterProfile');
            }
            return '';
        },
        getFacebookProfile: function () {
            if (this.has('facebookProfile')) {
                return this.get('facebookProfile');
            }
            return '';
        },
        getOutageMapLink: function () {
            if (this.has('outageMapLink')) {
                return this.get('outageMapLink');
            }
            return '';
        },
        getDisabled: function () {
            return this.has('disabled') && this.get('disabled') === true;
        },
        getCountiesServed: function () {
            if (this.has('countiesServed')) {
                return this.get('countiesServed');
            }
            return parseInt('0');
        },
        getCustomersAffected: function () {
            if (this.has('customersAffected')) {
                return this.get('customersAffected');
            }
            return parseInt('0');
        },
        getCustomersServed: function () {
            if (this.has('customersServed')) {
                return this.get('customersServed');
            }
            return parseInt('0');
        },
        getPercentageAffected: function () {
            if (this.has('percentageAffected')) {
                return this.get('percentageAffected');
            }
            return parseFloat('0').toFixed(1);
        },
        getStates: function () {
            if (this.has('states')) {
                var states = this.get('states');
                if (states.length > 0) {
                    return states;
                }
            }
            return [];
        }
    });

    return OutageReportModel;
});