define(function (require) {
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
            console.trace('HeaderView.initialize()');
            options || (options = {});
            this.dispatcher = options.dispatcher || this;
            this.requestedRegion = options.requestedRegion || '';

            this.listenTo(appEvents, appEvents.showOutageReport, this.showOutageMapButton);
        },

        resources: function (culture) {
            return {
                'showOutageMapViewButtonText': resourceHelpers.getResource('HeaderView.showOutageMapViewButtonText').value,
                'showOutageReportViewButtonText': resourceHelpers.getResource('HeaderView.showOutageReportViewButtonText').value,
                'twitterIconSrc': resourceHelpers.getResource('HeaderView.twitterIconSrc').value,
                'twitterIconSvgSrc': resourceHelpers.getResource('HeaderView.twitterIconSvgSrc').value,
                'twitterIconAlt': resourceHelpers.getResource('HeaderView.twitterIconAlt').value,
                'facebookIconSrc': resourceHelpers.getResource('HeaderView.facebookIconSrc').value,
                'facebookIconSvgSrc': resourceHelpers.getResource('HeaderView.facebookIconSvgSrc').value,
                'facebookIconAlt': resourceHelpers.getResource('HeaderView.facebookIconAlt').value,
                'twitterPostButtonText': resourceHelpers.getResource('HeaderView.twitterPostButtonText').value,
                'twitterFollowUsButtonText': resourceHelpers.getResource('HeaderView.twitterFollowUsButtonText').value,
                'facebookPostButtonText': resourceHelpers.getResource('HeaderView.facebookPostButtonText').value,
                'facebookFollowUsButtonText': resourceHelpers.getResource('HeaderView.facebookFollowUsButtonText').value
            };
        },

        events: {
            'click #twitter-post-button': 'twitterPostClick',
            'click #twitter-follow-us-button': 'twitterFollowClick',
            'click #facebook-post-button': 'facebookPostClick',
            'click #facebook-follow-us-button': 'facebookFollowClick',
            'click #show-outage-report-view-button': 'showOutageReportClick',
            'click #show-outage-map-view-button': 'showOutageMapClick'
        },

        render: function () {
            console.trace('HeaderView.render()');
            var currentContext = this;

            var renderModel = _.extend({}, this.resources(), this.model);
            this.$el.html(template(renderModel));

            return this;
        },

        twitterPostClick: function (event) {
            if (event) {
                event.preventDefault();
            }
            appEvents.trigger(appEvents.twitterPost);
        },

        twitterFollowClick: function (event) {
            if (event) {
                event.preventDefault();
            }
            appEvents.trigger(appEvents.twitterFollowUs);
        },

        facebookPostClick: function (event) {
            if (event) {
                event.preventDefault();
            }
            appEvents.trigger(appEvents.facebookPost);
        },

        facebookFollowClick: function (event) {
            if (event) {
                event.preventDefault();
            }
            appEvents.trigger(appEvents.facebookFollowUs);
        },

        showOutageReportClick: function (event) {
            if (event) {
                event.preventDefault();
            }
            this.showOutageMapButton();
            appEvents.trigger(appEvents.showOutageReport);
        },

        showOutageMapClick: function (event) {
            if (event) {
                event.preventDefault();
            }
            this.showOutageReportButton();
            appEvents.trigger(appEvents.showOutageMap);
        },

        showOutageReportButton: function () {
            this.$('#show-outage-map-view-button-container').addClass('hidden');
            this.$('#show-outage-report-view-button-container').removeClass('hidden');
        },

        showOutageMapButton: function () {
            this.$('#show-outage-report-view-button-container').addClass('hidden');
            this.$('#show-outage-map-view-button-container').removeClass('hidden');
        }
    });

    return HeaderView;
});