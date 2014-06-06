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

            this.listenTo(appEvents, appEvents.showOutageMapView, this.showOutageMapView);
            this.listenTo(appEvents, appEvents.showOutageReportView, this.showOutageReportView);
        },

        resources: function (culture) {
            return {
                'lastUpdatedTitleText': 'Last updated&#58;&#160;'
            };
        },

        render: function () {
            console.debug('ContentView.render()');
            var currentContext = this;

            var renderModel = _.extend({}, this.resources(), this.model);
            this.$el.html(template(renderModel));

            this.outageMapView = new OutageMapView({
                el: $('#outage-map-view', currentContext.$el),
                model: currentContext.model,
                dispatcher: currentContext.dispatcher
            });
            this.renderChild(this.outageMapView);

            this.outageReportView = new OutageReportView({
                el: $('#outage-report-view', currentContext.$el),
                model: currentContext.model,
                dispatcher: currentContext.dispatcher
            });
            this.renderChild(this.outageReportView);

            return this;
        },

        showOutageReportView: function (event) {
            this.outageMapView.addClass('hidden');
            this.outageReportView.removeClass('hidden');
        },

        showOutageMapView: function (event) {
            this.outageReportView.addClass('hidden');
            this.outageMapView.removeClass('hidden');
        }
    });

    return ContentView;
});