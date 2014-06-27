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
        },

        showOutageReportView: function (countyName, className) {
            this.$('#outage-map-view').addClass('hidden');
            this.$('#outage-report-view').removeClass('hidden');
            this.$('.row.incident .county-name').each(function () {
                if ($(this).text().indexOf(env.toTitleCase(countyName) > -1)) {
                    $(this).parent().parent().addClass(className);
                } else {
                    $(this).parent().parent().removeClass('level-0-incident').removeClass('level-1-incident').removeClass('level-2-incident');
                }
            });
        },

        showOutageMapView: function (event) {
            this.$('#outage-report-view').addClass('hidden');
            this.$('#outage-map-view').removeClass('hidden');
        }
    });

    return ContentView;
});