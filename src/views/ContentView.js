﻿define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        CompositeView = require('views/CompositeView'),
        events = require('events'),
        OutageMapView = require('views/OutageMapView'),
        OutageReportView = require('views/OutageReportView'),
        globals = require('globals'),
        env = require('env'),
        template = require('hbs!templates/Content');

    var ContentView = CompositeView.extend({
        initialize: function (options) {
            console.trace('ContentView.initialize()');
            options || (options = {});
            this.dispatcher = options.dispatcher || this;
            this.region = options.region || '';
            this.outageMap = options.outageMap;

            this.listenTo(events, events.showOutageMap, this.showOutageMapView);
            this.listenTo(events, events.showOutageReport, this.showOutageReportView);
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

            var outageMapViewInstance = new OutageMapView({
                el: $('#outage-map-view', currentContext.$el),
                model: currentContext.model,
                dispatcher: currentContext.dispatcher,
                region: currentContext.region,
                outageMap: currentContext.outageMap
            });
            this.renderChild(outageMapViewInstance);

            var outageReportViewInstance = new OutageReportView({
                el: $('#outage-report-view', currentContext.$el),
                model: currentContext.model,
                dispatcher: currentContext.dispatcher,
                region: this.region
            });
            this.renderChild(outageReportViewInstance);

            return this;
        },

        showOutageReportView: function (uuid, className) {
            this.$('#outage-map-view').addClass('hidden');
            this.$('#outage-report-view').removeClass('hidden');
            this.$('#outage-report-view .incident').each(function (idx, row) {
                var rowObj = $(row);
                var rowId = rowObj.data('uuid');
                if (rowId && rowId === uuid) {
                    rowObj.addClass(className);
                } else {
                    rowObj.removeClass('level-0-incident').removeClass('level-1-incident').removeClass('level-2-incident');
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