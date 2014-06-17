define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        env = require('env'),
        outageReportService = require('services/outageReportService');

    var getOperatingCompanyAttributes = function (operatingCompany) {
        var operatingCompanyInstance = {};

        // id
        if (operatingCompany.hasOwnProperty('id')) {
            operatingCompanyInstance.id = operatingCompany.id;
        }

        // states
        var states = [];
        if (operatingCompany.hasOwnProperty('state')) {
            var state = operatingCompany.state;
            _.each(state, function (element, index, list) {
                states.push(getStateAttributes(element));
            });
        }
        operatingCompanyInstance.states = states;

        return operatingCompanyInstance;
    };
    var getStateAttributes = function (state) {
        var stateInstance = {};

        // stateName
        if (state.hasOwnProperty('abbr')) {
            stateInstance.stateName = state.abbr;
        }

        // countiesServed
        if (state.hasOwnProperty('counties_served')) {
            stateInstance.countiesServed = state.counties_served;
        }

        // customersServed
        if (state.hasOwnProperty('customers_served')) {
            stateInstance.customersServed = state.customers_served;
        }

        // incidents
        var incidents = [];
        if (state.hasOwnProperty('incident')) {
            var incident = state.incident;
            _.each(incident, function (element, index, list) {
                incidents.push(getIncidentAttributes(element));
            });
        }
        stateInstance.incidents = incidents;

        return stateInstance;
    };

    var getIncidentAttributes = function (incident) {
        var incidentInstance = {};

        // countyName
        if (incident.hasOwnProperty('county')) {
            incidentInstance.countyName = incident.county;
        }

        // customersAffected
        if (incident.hasOwnProperty('customers_affected')) {
            incidentInstance.customersAffected = incident.customers_affected;
        }

        // customersServed
        if (incident.hasOwnProperty('customers_served')) {
            incidentInstance.customersServed = incident.customers_served;
        }

        // repairIssues
        if (incident.hasOwnProperty('repair_issues')) {
            incidentInstance.repairIssues = incident.repair_issues;
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
            var xhr = this.fetch({
                url: env.getApiUrl() + '/OutageXml.aspx',
                reset: true
            });

            return xhr;
        },
        getOperatingCompany: function (id) {
            var result;
            var operatingCompanies = this.get('operatingCompanies');
            if (operatingCompanies && operatingCompanies.length > 0) {
                result = _.find(operatingCompanies, function (operatingCompany) { return operatingCompany.id === id; });
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
                                operatingCompanies.push(getOperatingCompanyAttributes(element));
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