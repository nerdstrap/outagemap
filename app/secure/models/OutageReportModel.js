define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        env = require('env'),
        outageReportService = require('services/outageReportService');

    var _incidentTotalThreshold = env.getIncidentTotalThreshold();

    var parseOperatingCompany = function (operatingCompany) {
        var operatingCompanyInstance = {
            identifier: '',
            countiesServed: parseInt('0'),
            customersServed: parseInt('0'),
            customersAffected: parseInt('0'),
            repairIssues: parseInt('0'),
            percentageAffected: parseFloat('0').toFixed(1),
        };

        // id
        if (operatingCompany.hasOwnProperty('id')) {
            operatingCompanyInstance.identifier = operatingCompany.id;
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
        if (operatingCompanyInstance.customersAffected > 0 && operatingCompanyInstance.customersServed > 0 ) {
            operatingCompanyInstance.percentageAffected = (operatingCompanyInstance.customersAffected.toFixed(1) / operatingCompanyInstance.customersServed.toFixed(1)).toFixed(1);
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
            percentageAffected: parseFloat('0').toFixed(1)
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
            _.each(incident, function (element, index, list) {
                var incidentInstance = parseIncident(element);
                if (incidentInstance.customersAffected >= _incidentTotalThreshold) {
                    stateInstance.customersServed += incidentInstance.customersServed;
                    stateInstance.customersAffected += incidentInstance.customersAffected;
                    stateInstance.repairIssues += incidentInstance.repairIssues;
                    incidents.push(incidentInstance);
                }
            });
        }
        stateInstance.incidents = incidents;

        // percentageAffected
        if (stateInstance.customersAffected > 0 && stateInstance.customersServed > 0) {
            stateInstance.percentageAffected = (stateInstance.customersAffected.toFixed(1) / stateInstance.customersServed.toFixed(1)).toFixed(1);
        }

        return stateInstance;
    };

    var parseIncident = function (incident) {
        var incidentInstance = {
            countyName: '',
            customersAffected: parseInt('0'),
            customersServed: parseInt('0'),
            repairIssues: parseInt('0'),
            percentageAffected: parseFloat('0').toFixed(1)
        };

        // countyName
        if (incident.hasOwnProperty('county')) {
            incidentInstance.countyName = incident.county;
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
        if (incidentInstance.customersAffected > 0 && incidentInstance.customersServed > 0 ) {
            incidentInstance.percentageAffected = (incidentInstance.customersAffected.toFixed(1) / incidentInstance.customersServed.toFixed(1)).toFixed(1);
        }

        return incidentInstance;
    };

    var OutageReportModel = Backbone.Model.extend({
        idAttribute: 'outageReportId',
        initialize: function (options) {
            console.trace('OutageReportModel.initialize()');
            options || (options = {});
        },
        //sync: function (method, model, options) {
        //    if (method === "read") {
        //        var xhr = options.xhr = outageReportService.getCurrentOutageReport().done(function (data) {
        //            setTimeout(function () {
        //                options.success(data, 'success', null);
        //            }, 100);
        //        });
        //        model.trigger('request', model, xhr, options);
        //        return xhr;
        //    }
        //},
        getCurrentOutageReport: function (region) {
            this.set({'requestedRegion': region});
            var xhr = this.fetch({
                url: env.getApiUrl() + '/OutageXml.aspx',
                reset: true
            });

            return xhr;
        },
        getOperatingCompany: function (identifier) {
            var result;
            var operatingCompanies = this.get('operatingCompanies');
            if (operatingCompanies && operatingCompanies.length > 0) {
                result = _.find(operatingCompanies, function (operatingCompany) { return operatingCompany.identifier === identifier; });
            }
            return result;
        },
        set: function (key, val, options) {
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
                    if (NewDataSet.hasOwnProperty('dataset')) {
                        var dataset = NewDataSet.dataset;
                        if (dataset.hasOwnProperty('timestamp')) {
                            var timestamp = dataset.timestamp;
                            derivedAttributes.timestamp = timestamp;
                        }
                    }

                    if (NewDataSet.hasOwnProperty('OperatingCo')) {
                        var OperatingCo = NewDataSet.OperatingCo;
                        if (OperatingCo && OperatingCo.length > 0) {
                            var operatingCompanies = [];
                            _.each(OperatingCo, function (element, index, list) {
                                var operatingCompanyInstance = parseOperatingCompany(element);
                                operatingCompanies.push(operatingCompanyInstance);
                            });
                            derivedAttributes.operatingCompanies = operatingCompanies;
                        }
                    }
                }
            }
            return Backbone.Model.prototype.set.call(this, derivedAttributes, options);
        }
    });

    return OutageReportModel;
});