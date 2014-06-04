define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        appEvents = require('app-events'),
        template = require('hbs!templates/Header');

    var HeaderView = Backbone.View.extend({
        initialize: function (options) {
            console.debug('HeaderView.initialize()');
            options || (options = {});
            this.dispatcher = options.dispatcher || this;
        },

        resources: function (culture) {
            return {
                'showOutageMapViewButtonText': 'View outage map',
                'showOutageReportViewButtonText': 'View outage report'
            };
        },

        events: {
            'click #show-outage-report-view-button': 'showOutageReportView',
            'click #show-outage-map-view-button': 'showOutageMapView'
        },

        render: function () {
            console.debug('HeaderView.render()');
            var currentContext = this;

            var renderModel = _.extend({}, this.resources(), this.model);
            this.$el.html(template(renderModel));

            return this;
        },

        showOutageReportView: function (event) {
            console.debug('HeaderView.showOutageReportView()');
            if (event) {
                event.preventDefault();
            }
            this.dispatcher.trigger(appEvents.showOutageReport);
        },

        showOutageMapView: function (event) {
            console.debug('HeaderView.showOutageMapView()');
            if (event) {
                event.preventDefault();
            }
            this.dispatcher.trigger(appEvents.showOutageMapView);
        }
    });

    return HeaderView;
});