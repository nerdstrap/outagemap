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

            this.listenTo(this.model, 'request', this.showLoading);
            this.listenTo(this.model, 'sync', this.updateViewFromModel);
        },

        resources: function (culture) {
            return {
                'titleText': appResources.getResource('OutageReportView.titleText'),
                'countyNameTitleText': this.region === 'swepco' ? appResources.getResource('OutageReportView.swepcoCountyNameTitleText') : appResources.getResource('OutageReportView.countyNameTitleText'),
                'customersAffectedTitleText': appResources.getResource('OutageReportView.customersAffectedTitleText'),
                'customersServedTitleText': appResources.getResource('OutageReportView.customersServedTitleText'),
                'percentageAffectedTitleText': appResources.getResource('OutageReportView.percentageAffectedTitleText'),
                'noOutagesMessage': appResources.getResource('noOutagesMessage'),
                'serviceUnavailableMessage': appResources.getResource('serviceUnavailableMessage'),
                'disclaimer': appResources.getResource('disclaimerText'),
                'loadingMessage': appResources.getResource('loadingMessage'),
                'loadingIconSrc': appResources.getResource('loadingIconSrc')
            };
        },

        render: function () {
            console.trace('OutageReportView.render()');
            var currentContext = this;

            var renderModel = _.extend({}, this.resources(), this.model);
            this.$el.html(template(renderModel));

            return this;
        },

        showLoading: function () {
            this.$('#outage-report-data-container').addClass('hidden');
            this.$('#outage-report-loading-container').removeClass('hidden');
        },

        updateViewFromModel: function () {
            var currentContext = this;
            if (currentContext.model.getDisabled()) {
                this.showServiceUnavailableMessage();
            } else {
                currentContext.renderOutageReport();
            }
        },

        renderOutageReport: function () {
            var currentContext = this;
            var lastUpdatedFormatString = appResources.getResource('OutageReportView.lastUpdatedFormatString');
            var timezoneAbbreviation = (currentContext.region === 'aeptexas' || currentContext.region === 'pso') ? appResources.getResource('OutageReportView.centralTimezoneAbbreviation') : appResources.getResource('OutageReportView.easternTimezoneAbbreviation');
            var countyNameFormatString = appResources.getResource('OutageReportView.countyNameFormatString');
            var grandTotalTitleText = appResources.getResource('OutageReportView.grandTotalTitleText');
            var serviceStatisticsFormatString = this.region === 'swepco' ? appResources.getResource('swepcoServiceStatisticsFormatString') : appResources.getResource('serviceStatisticsFormatString');
            var reportRows = [];
            var stateReportRows = [];

            // timestamp
            var timestampValue = currentContext.model.getTimestamp();
            if ((currentContext.region === 'aeptexas' || currentContext.region === 'pso')) {
                timestampValue.addHours(-1);
            }
            var timestamp = lastUpdatedFormatString.format(env.formatDate(timestampValue, '%I:%M %p ' + timezoneAbbreviation + ' %m-%d-%Y'));

            // company statistics
            var operatingCompanyName = currentContext.model.getOperatingCompanyName();
            var customersAffected = env.formatNumber(currentContext.model.getCustomersAffected());
            var customersServed = env.formatNumber(currentContext.model.getCustomersServed());
            var percentageAffected = (currentContext.model.getPercentageAffected() * 100).toFixed(1);
            var countiesServed = env.formatNumber(currentContext.model.getCountiesServed());

            // report rows
            var states = currentContext.model.getStates();
            _.each(states, function (state) {
                if (state.customersAffected > 0) {
                    if (state.incidents && state.incidents.length > 0) {
                        _.each(state.incidents, function (incident) {
                            var incidentCopy = _.clone(incident);
                            incidentCopy.percentageAffected = (incident.percentageAffected * 100).toFixed(1);
                            incidentCopy.countyNameFormatted = countyNameFormatString.format(incidentCopy.properCountyName, state.stateName);
                            reportRows.push(incidentCopy);
                        });
                    }

                    var stateCopy = _.clone(state);
                    stateCopy.grandTotal = true,
                    stateCopy.percentageAffected = (stateCopy.percentageAffected * 100).toFixed(1);
                    stateReportRows.push(stateCopy);
                }
            });

            if (reportRows.length > 0) {
                reportRows.push({});
            }

            // #businessrule only show state totals when there is more than 1
            if (states.length > 1 && stateReportRows.length > 0) {
                for (var j = 0; j < stateReportRows.length; j++) {
                    reportRows.push(stateReportRows[j]);
                };
                reportRows.push({});
            }

            if (reportRows.length > 0) {
                reportRows.push({ grandTotal: true, grandTotalTitleText: grandTotalTitleText, customersAffected: customersAffected, customersServed: customersServed, percentageAffected: percentageAffected });
            }

            // servic statistics
            var stateNames = _.pluck(states, 'stateName');
            if (stateNames.length < 2) {
                stateNames = stateNames.join('&#32;&#38;&#32;');
            } else {
                var lastState = _.last(stateNames);
                stateNames = _.initial(stateNames).join('&#44;&#32;') + '&#32;&#38;&#32;' + lastState.toString();
            }
            var serviceStatistics = serviceStatisticsFormatString.format(operatingCompanyName, customersServed, countiesServed, stateNames);

            var renderModel = {
                timestamp: timestamp,
                reportRows: reportRows,
                serviceStatistics: serviceStatistics
            };
            _.extend(renderModel, this.resources());
            this.$el.html(template(renderModel));

            if (reportRows.length === 0) {
                this.showNoOutagesMessage();
            }
        },

        showNoOutagesMessage: function () {
            this.$('#outage-report-no-incidents-container').removeClass('hidden');
            this.$('#outage-report-service-unavailable-container').addClass('hidden');
            this.$('#outage-report-header-container').addClass('hidden');
            this.$('.incident').addClass('hidden');
        },

        showServiceUnavailableMessage: function () {
            this.$('#outage-report-no-incidents-container').addClass('hidden');
            this.$('#outage-report-service-unavailable-container').removeClass('hidden');
            this.$('#outage-report-header-container').addClass('hidden');
            this.$('.incident').addClass('hidden');
        }
    });

    return OutageReportView;
});