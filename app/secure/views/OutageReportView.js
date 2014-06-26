define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        CompositeView = require('views/CompositeView'),
        template = require('hbs!templates/OutageReport'),
        env = require('env'),
        resourceHelpers = require('resource-helpers'),
        regionHelpers = require('region-helpers');

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
                'titleText': resourceHelpers.getResource('OutageReportView.titleText').value,
                'countyNameTitleText': resourceHelpers.getResource('OutageReportView.countyNameTitleText').value,
                'customersAffectedTitleText': resourceHelpers.getResource('OutageReportView.customersAffectedTitleText').value,
                'customersServedTitleText': resourceHelpers.getResource('OutageReportView.customersServedTitleText').value,
                'percentageAffectedTitleText': resourceHelpers.getResource('OutageReportView.percentageAffectedTitleText').value,
                'grandTotalTitleText': resourceHelpers.getResource('OutageReportView.grandTotalTitleText').value,
                'noOutagesMessage': resourceHelpers.getResource('noOutagesMessage').value,
                'formattedCustomersAffected': this.model.customersAffected,
                'lastUpdatedTitleText': resourceHelpers.getResource('lastUpdatedTitleText').value,
                'serviceStatistics': '',
                'disclaimer': resourceHelpers.getResource('disclaimerText').value
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
            var operatingCompany = regionHelpers.getOperatingCompanyById(env.getParameterByName('region'));
            var operatingCompanyModel = this.model.getOperatingCompanyByIdentifier(operatingCompany.identifier);
            var renderModel = {
                incidentRows: [],
                customersServed: parseInt('0'),
                customersAffected: parseInt('0'),
                percentageAffected: parseFloat('0'),
            };
            if (operatingCompanyModel && operatingCompanyModel.states && operatingCompanyModel.states.length > 0) {

                renderModel.customersAffected = operatingCompanyModel.customersAffected;
                renderModel.customersServed = operatingCompanyModel.customersServed;
                renderModel.percentageAffected = operatingCompanyModel.percentageAffected;

                _.each(operatingCompanyModel.states, function (state) {
                    if (state.customersAffected > 0) {
                        if (state.incidents && state.incidents.length > 0) {
                            _.each(state.incidents, function (incident) {
                                var incidentCopy = _.clone(incident);
                                renderModel.incidentRows.push(incidentCopy);
                            });
                            renderModel.incidentRows.push({});
                        }
                        var stateCopy = _.clone(state);
                        renderModel.incidentRows.push(stateCopy);
                        renderModel.incidentRows.push({});
                    }
                });
            }

            _.extend(renderModel, this.resources());
            this.$el.html(template(renderModel));

            if (renderModel.incidentRows.length === 0) {
                this.showNoOutagesMessage();
            }

            this.$('#timestamp-label').html(env.formatUTCDate(this.model.get('timestamp')));
            this.$('#service-statistics-label').html(this.getServiceStatistics());
        },

        showNoOutagesMessage: function () {
            this.$('.no-incidents').removeClass('hidden');
            this.$('.header').addClass('hidden');
            this.$('.incident').addClass('hidden');
            this.$('.footer').addClass('hidden');
        },
        getServiceStatistics: function (operatingCompanyIdentifier, fullName) {
            var operatingCompany = this.model.getOperatingCompanyById(this.region);
            if (operatingCompany && operatingCompany.states && operatingCompany.states.length > 0) {

                var serviceStatisticsFormatString = resourceHelpers.getResource('serviceStatisticsFormatString').value;

                var operatingCompanyName = operatingCompany.fullName;

                var customersServed = 0;
                customersServed = _.reduce(operatingCompany.states, function (customersServed, state) {
                    return customersServed + parseInt(state.customersServed);
                }, 0);

                var countiesServed = 0;
                countiesServed = _.reduce(operatingCompany.states, function (countiesServed, state) {
                    return countiesServed + parseInt(state.countiesServed);
                }, 0);

                var stateNames = _.pluck(operatingCompany.states, 'stateName').join(' &#38; ');

                var serviceStatistics = serviceStatisticsFormatString.format(operatingCompanyName, env.formatNumber(customersServed), env.formatNumber(countiesServed), stateNames);

                return serviceStatistics;
            }
        }
    });

    return OutageReportView;
});