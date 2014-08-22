define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        CompositeView = require('views/CompositeView'),
        template = require('hbs!templates/OutageReport'),
        env = require('env'),
        appResources = require('resources'),
        regions = require('regions');

    var OutageReportView = CompositeView.extend({
        initialize: function (options) {
            console.trace('OutageReportView.initialize()');
            options || (options = {});
            this.region = options.region || '';
            this.dispatcher = options.dispatcher || this;

            this.listenTo(this.model, 'sync', this.updateViewFromModel);
        },

        resources: function (culture) {
            return {
                'titleText': appResources.getResource('OutageReportView.titleText').value,
                'countyNameTitleText': this.region === 'swepco' ? appResources.getResource('OutageReportView.swepcoCountyNameTitleText').value : appResources.getResource('OutageReportView.countyNameTitleText').value,
                'customersAffectedTitleText': appResources.getResource('OutageReportView.customersAffectedTitleText').value,
                'customersServedTitleText': appResources.getResource('OutageReportView.customersServedTitleText').value,
                'percentageAffectedTitleText': appResources.getResource('OutageReportView.percentageAffectedTitleText').value,
                'grandTotalTitleText': appResources.getResource('OutageReportView.grandTotalTitleText').value,
                'noOutagesMessage': appResources.getResource('noOutagesMessage').value,
                'serviceUnavailableMessage': appResources.getResource('serviceUnavailableMessage').value,
                'lastUpdatedTitleText': appResources.getResource('lastUpdatedTitleText').value,
                'disclaimer': appResources.getResource('disclaimerText').value
            };
        },

        render: function () {
            console.trace('OutageReportView.render()');
            var currentContext = this;

            var renderModel = _.extend({}, this.resources(), this.model);
            this.$el.html(template(renderModel));

            return this;
        },

        updateViewFromModel: function () {
            var currentContext = this;
            var operatingCompanyModel = this.model.getOperatingCompanyById(currentContext.region);
            var renderModel = {
                incidents: [],
                customersServed: parseInt('0'),
                customersAffected: parseInt('0'),
                percentageAffected: parseFloat('0'),
            };
            if (operatingCompanyModel) {
                if (operatingCompanyModel.disabled) {
                    renderModel.disabled = true;
                } else {
                    if (operatingCompanyModel.states && operatingCompanyModel.states.length > 0) {
                        renderModel.customersAffected = operatingCompanyModel.customersAffected;
                        renderModel.customersServed = operatingCompanyModel.customersServed;
                        renderModel.percentageAffected = (operatingCompanyModel.percentageAffected * 100).toFixed(1);

                        var countyNameFormatString = appResources.getResource('OutageReportView.countyNameFormatString').value;
                        var countyAbbreviation = appResources.getResource('OutageReportView.countyAbbreviation').value;
                        var parishAbbreviation = appResources.getResource('OutageReportView.parishAbbreviation').value;

                        var countyIncidents = [];
                        var stateIncidents = [];

                        _.each(operatingCompanyModel.states, function (state) {
                            var countyNamePostfix = state.stateName === 'LA' ? parishAbbreviation : countyAbbreviation;

                            if (state.customersAffected > 0) {
                                if (state.incidents && state.incidents.length > 0) {
                                    _.each(state.incidents, function (incident) {
                                        var incidentCopy = _.clone(incident);
                                        incidentCopy.percentageAffected = (incident.percentageAffected * 100).toFixed(1);
                                        incidentCopy.countyNameFormatted = countyNameFormatString.format(env.toTitleCase(incidentCopy.countyName), countyNamePostfix, state.stateName);
                                        countyIncidents.push(incidentCopy);
                                    });
                                }
                                var stateCopy = _.clone(state);
                                stateCopy.grandTotal = true,
                                stateCopy.percentageAffected = (stateCopy.percentageAffected * 100).toFixed(1);
                                stateIncidents.push(stateCopy);
                            }
                        });
                        
                        for (var i = 0; i < countyIncidents.length; i++) {
                            renderModel.incidents.push(countyIncidents[i]);
                        };
                        renderModel.incidents.push({});
                        if (stateIncidents.length > 1) {
                            for (var j = 0; j < stateIncidents.length; j++) {
                                renderModel.incidents.push(stateIncidents[j]);
                            };
                            renderModel.incidents.push({});
                        }
                        renderModel.incidents.push({ grandTotal: true, grandTotalTitleText: currentContext.resources().grandTotalTitleText, customersAffected: renderModel.customersAffected, customersServed: renderModel.customersServed, percentageAffected: renderModel.percentageAffected });
                    }
                }
            }

            _.extend(renderModel, this.resources());
            this.$el.html(template(renderModel));

            if (renderModel.disabled) {
                this.showServiceUnavailableMessage();
            } else if (renderModel.incidents.length === 0) {
                this.showNoOutagesMessage();
            }

            var timezoneAbbreviation = (currentContext.region === 'aeptexas' || currentContext.region === 'pso') ? appResources.getResource('OutageReportView.centralTimezoneAbbreviation').value : appResources.getResource('OutageReportView.easternTimezoneAbbreviation').value;
            this.$('#timestamp-label').html(env.formatDate(this.model.get('timestamp'), '%I:%M %p ' + timezoneAbbreviation + ' %m-%d-%Y'));
            this.$('#service-statistics-label').html(this.getServiceStatistics());
        },

        showNoOutagesMessage: function () {
            this.$('#outage-report-no-incidents-container').removeClass('hidden');
            this.$('.service-unavailable').addClass('hidden');
            this.$('.header').addClass('hidden');
            this.$('.incident').addClass('hidden');
            this.$('.footer').addClass('hidden');
        },

        showServiceUnavailableMessage: function () {
            this.$('#outage-report-no-incidents-container').addClass('hidden');
            this.$('#outage-report-service-unavailable-container').removeClass('hidden');
            this.$('.header').addClass('hidden');
            this.$('.incident').addClass('hidden');
            this.$('.footer').addClass('hidden');
        },

        getServiceStatistics: function (operatingCompanyIdentifier, fullName) {
            var operatingCompany = this.model.getOperatingCompanyById(this.region);
            if (operatingCompany && operatingCompany.states && operatingCompany.states.length > 0) {

                var serviceStatisticsFormatString = this.region === 'swepco' ? appResources.getResource('swepcoServiceStatisticsFormatString').value : appResources.getResource('serviceStatisticsFormatString').value;

                var operatingCompanyName = operatingCompany.fullName;

                var customersServed = 0;
                customersServed = _.reduce(operatingCompany.states, function (customersServed, state) {
                    return customersServed + parseInt(state.customersServed);
                }, 0);

                var countiesServed = 0;
                countiesServed = _.reduce(operatingCompany.states, function (countiesServed, state) {
                    return countiesServed + parseInt(state.countiesServed);
                }, 0);

                var stateNames = _.pluck(operatingCompany.states, 'stateName');
                if (stateNames.length < 2) {
                    stateNames = stateNames.join('&#32;&#38;&#32;');
                } else {
                    var lastState = _.last(stateNames);
                    stateNames = _.initial(stateNames).join('&#44;&#32;') + '&#32;&#38;&#32;' + lastState.toString();
                }

                var serviceStatistics = serviceStatisticsFormatString.format(operatingCompanyName, env.formatNumber(customersServed), env.formatNumber(countiesServed), stateNames);

                return serviceStatistics;
            }
        }
    });

    return OutageReportView;
});