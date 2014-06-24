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
            this.region = options.region || '';

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
                dispatcher: currentContext.dispatcher,
                region: this.region
            });
            this.renderChild(outageMapView);

            var outageReportView = new OutageReportView({
                el: $('#outage-report-view', currentContext.$el),
                model: currentContext.model,
                dispatcher: currentContext.dispatcher,
                region: this.region
            });
            this.renderChild(outageReportView);

            return this;
        },

        updateViewFromModel: function () {
            this.$('#timestamp-label').html(this.formatUTCDate(this.model.get('timestamp')));
            var operatingCompany = regionHelpers.getOperatingCompanyById(env.getParameterByName('region'));
            this.$('#service-statistics-label').html(this.getServiceStatistics(operatingCompany.identifier, operatingCompany.fullName));
        },

        showOutageReportView: function (countyName, className) {
            this.$('#outage-map-view').addClass('hidden');
            this.$('#outage-report-view').removeClass('hidden');
            this.$('.row.incident .county-name').each(function () {
                if ($(this).text() == countyName) {
                    $(this).parent().parent().addClass(className);
                } else {
                    $(this).parent().parent().removeClass('level-0-incident').removeClass('level-1-incident').removeClass('level-2-incident');
                }
            });
        },

        showOutageMapView: function (event) {
            this.$('#outage-report-view').addClass('hidden');
            this.$('#outage-map-view').removeClass('hidden');
        },
        formatUTCDate: function (date) {
            date = new Date(date);
            return date.getUTCFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + date.getUTCHours() + ':' + date.getUTCMinutes() + ':' + date.getUTCSeconds() + ' GMT';
        },
        getServiceStatistics: function (operatingCompanyIdentifier, fullName) {
            var operatingCompany = this.model.getOperatingCompanyByIdentifier(operatingCompanyIdentifier);
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