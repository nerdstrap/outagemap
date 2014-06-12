﻿define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        CompositeView = require('views/CompositeView'),
        appEvents = require('app-events'),
        template = require('hbs!templates/Header'),
        resourceHelpers = require('resource-helpers');

    var HeaderView = CompositeView.extend({
        initialize: function (options) {
            console.debug('HeaderView.initialize()');
            options || (options = {});
            this.dispatcher = options.dispatcher || this;
            this.listenTo(appEvents, appEvents.showOutageReport, this.showOutageMapButton);
        },

        resources: function (culture) {
            return {
                'showOutageMapViewButtonText': resourceHelpers.getResource('HeaderView.showOutageMapViewButtonText').value,
                'showOutageReportViewButtonText': resourceHelpers.getResource('HeaderView.showOutageReportViewButtonText').value
            };
        },

        events: {
            'click #show-outage-report-view-button': 'showOutageReportClick',
            'click #show-outage-map-view-button': 'showOutageMapClick'
        },

        render: function () {
            console.debug('HeaderView.render()');
            var currentContext = this;

            var renderModel = _.extend({}, this.resources(), this.model);
            this.$el.html(template(renderModel));

            return this;
        },

        showOutageReportClick: function (event) {
            if (event) {
                event.preventDefault();
            }
            this.$('#show-outage-report-view-button').addClass('hidden');
            this.$('#show-outage-map-view-button').removeClass('hidden');
            appEvents.trigger(appEvents.showOutageReport);
        },

        showOutageMapClick: function (event) {
            if (event) {
                event.preventDefault();
            }
            this.$('#show-outage-map-view-button').addClass('hidden');
            this.$('#show-outage-report-view-button').removeClass('hidden');
            appEvents.trigger(appEvents.showOutageMap);
        },
        showOutageMapButton: function () {
            this.$('#show-outage-report-view-button').addClass('hidden');
            this.$('#show-outage-map-view-button').removeClass('hidden');
        },
    });

    return HeaderView;
});