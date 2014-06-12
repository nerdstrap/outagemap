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
        oms2aepwebData = require('data/oms2aepweb'),
        template = require('hbs!templates/Content'),
        resourceHelpers = require('resource-helpers');

    var ContentView = CompositeView.extend({
        initialize: function (options) {
            console.debug('ContentView.initialize()');
            options || (options = {});
            this.dispatcher = options.dispatcher || this;

            this.listenTo(this.model, 'sync', this.updateViewFromModel);
            this.listenTo(appEvents, appEvents.showOutageMap, this.showOutageMapView);
            this.listenTo(appEvents, appEvents.showOutageReport, this.showOutageReportView);
        },

        resources: function (culture) {
            return {
                'lastUpdatedTitleText': resourceHelpers.getResource('lastUpdatedTitleText').value,
                'serviceStatistics': env.getServiceStatistics()
            };
        },

        render: function () {
            console.debug('ContentView.render()');
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
        },

        showOutageReportView: function (countyName) {
            this.$('#outage-map-view').addClass('hidden');
            this.$('#outage-report-view').removeClass('hidden');
            this.$(".row .countyName").each(function () {
                if ($(this).text() == countyName) {
                    $(this).parent().parent().addClass("highlight");
                } else {
                    $(this).parent().parent().removeClass("highlight");
                }
            });
        },

        showOutageMapView: function (event) {
            this.$('#outage-report-view').addClass('hidden');
            this.$('#outage-map-view').removeClass('hidden');
            env.attachEvents(oms2aepwebData.operatingCompanies[3].states[0].incidents);
        }
    });

    return ContentView;
});