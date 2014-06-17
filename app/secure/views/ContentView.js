define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        CompositeView = require('views/CompositeView'),
        appEvents = require('app-events'),
        OutageMapView = require('views/OutageMapView'),
        OutageReportView = require('views/OutageReportView'),
        env = require('env'),
        template = require('hbs!templates/Content'),
        regionHelpers = require('region-helpers'),
        resourceHelpers = require('resource-helpers');

    var ContentView = CompositeView.extend({
        initialize: function (options) {
            console.trace('ContentView.initialize()');
            options || (options = {});
            this.dispatcher = options.dispatcher || this;

            this.listenTo(this.model, 'sync', this.updateViewFromModel);
            this.listenTo(appEvents, appEvents.showOutageMap, this.showOutageMapView);
            this.listenTo(appEvents, appEvents.showOutageReport, this.showOutageReportView);
        },

        resources: function (culture) {
            return {
                'lastUpdatedTitleText': resourceHelpers.getResource('lastUpdatedTitleText').value,
                'serviceStatistics': ''
            };
        },

        render: function () {
            console.trace('ContentView.render()');
            var currentContext = this;

            var renderModel = _.extend({}, this.resources(), this.model.attributes);
            this.$el.html(template(renderModel));

            var outageMapView = new OutageMapView({
                el: $('#outage-map-view', currentContext.$el),
                model: currentContext.model,
                dispatcher: currentContext.dispatcher
            });
            this.renderChild(outageMapView);

            var outageReportView = new OutageReportView({
                el: $('#outage-report-view', currentContext.$el),
                model: currentContext.model,
                dispatcher: currentContext.dispatcher
            });
            this.renderChild(outageReportView);

            return this;
        },

        updateViewFromModel: function () {
            this.$('#timestamp').html(this.model.get('timestamp'));
            var operatingCompany = regionHelpers.getOperatingCompany(env.getParameterByName('region'));
            this.$('#serviceStatistics').html(this.getServiceStatistics(operatingCompany.identifier, operatingCompany.fullName));
        },

        showOutageReportView: function (countyName, backgroundColor) {
            this.$('#outage-map-view').addClass('hidden');
            this.$('#outage-report-view').removeClass('hidden');
            this.$(".row .countyName").each(function () {
                if ($(this).text() == countyName) {
                    $(this).parent().parent().css('background', backgroundColor);
                } else {
                    $(this).parent().parent().css('background', 'transparent');
                }
            });
        },

        showOutageMapView: function (event) {
            this.$('#outage-report-view').addClass('hidden');
            this.$('#outage-map-view').removeClass('hidden');
            //env.attachEvents(oms2aepwebData.operatingCompanies[3].states[0].incidents);
        },

        getServiceStatistics: function (operatingCompanyIdentifier, fullName) {
            var operatingCompany = this.model.getOperatingCompany(operatingCompanyIdentifier);
            if (operatingCompany && operatingCompany.states && operatingCompany.states.length > 0) {

                var serviceStatisticsFormatString = resourceHelpers.getResource('serviceStatisticsFormatString').value;

                var operatingCompanyName = fullName;

                var customersServed = 0;
                customersServed = _.reduce(operatingCompany.states, function (customersServed, state) {
                    return customersServed + parseInt(state.customersServed);
                }, 0);

                var countiesServed = 0;
                countiesServed = _.reduce(operatingCompany.states, function (countiesServed, state) {
                    return countiesServed + parseInt(state.countiesServed);
                }, 0);

                var stateNames = _.pluck(operatingCompany.states, 'stateName').join(' &#38; ');

                var serviceStatistics = serviceStatisticsFormatString.format(operatingCompanyName, customersServed.toLocaleString('en'), countiesServed.toLocaleString('en'), stateNames);

                return serviceStatistics;
            }
        }
    });

    return ContentView;
});