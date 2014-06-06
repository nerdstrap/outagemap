define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        CompositeView = require('views/CompositeView'),
        appEvents = require('app-events'),
        OutageMapView = require('views/OutageMapView'),
        OutageReportView = require('views/OutageReportView'),
        template = require('hbs!templates/Content');

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
                'lastUpdatedTitleText': 'Last updated&#58;&#160;'
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

        showOutageReportView: function (event) {
            this.$('#outage-map-view').addClass('hidden');
            this.$('#outage-report-view').removeClass('hidden');
        },

        showOutageMapView: function (event) {
            this.$('#outage-report-view').addClass('hidden');
            this.$('#outage-map-view').removeClass('hidden');
        }
    });

    return ContentView;
});