﻿define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        CompositeView = require('views/CompositeView'),
        events = require('events'),
        template = require('hbs!templates/Header'),
        appResources = require('resources');

    var HeaderView = CompositeView.extend({
        initialize: function (options) {
            console.trace('HeaderView.initialize()');
            options || (options = {});
            this.dispatcher = options.dispatcher || this;
            this.requestedRegion = options.requestedRegion || '';

            this.listenTo(events, events.showOutageReport, this.showOutageMapButton);
        },

        resources: function (culture) {
            return {
                'showOutageMapViewButtonText': appResources.getResource('HeaderView.showOutageMapViewButtonText'),
                'showOutageReportViewButtonText': appResources.getResource('HeaderView.showOutageReportViewButtonText'),
                'twitterIconSrc': appResources.getResource('HeaderView.twitterIconSrc'),
                'twitterIconSvgSrc': appResources.getResource('HeaderView.twitterIconSvgSrc'),
                'twitterIconAlt': appResources.getResource('HeaderView.twitterIconAlt'),
                'facebookIconSrc': appResources.getResource('HeaderView.facebookIconSrc'),
                'facebookIconSvgSrc': appResources.getResource('HeaderView.facebookIconSvgSrc'),
                'facebookIconAlt': appResources.getResource('HeaderView.facebookIconAlt'),
                'twitterPostButtonText': appResources.getResource('HeaderView.twitterPostButtonText'),
                'twitterFollowUsButtonText': appResources.getResource('HeaderView.twitterFollowUsButtonText'),
                'facebookPostButtonText': appResources.getResource('HeaderView.facebookPostButtonText'),
                'facebookFollowUsButtonText': appResources.getResource('HeaderView.facebookFollowUsButtonText')
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
            events.trigger(events.twitterPost);
        },

        twitterFollowClick: function (event) {
            if (event) {
                event.preventDefault();
            }
            events.trigger(events.twitterFollowUs);
        },

        facebookPostClick: function (event) {
            if (event) {
                event.preventDefault();
            }
            events.trigger(events.facebookPost);
        },

        facebookFollowClick: function (event) {
            if (event) {
                event.preventDefault();
            }
            events.trigger(events.facebookFollowUs);
        },
        showOutageReportClick: function (event) {
            if (event) {
                event.preventDefault();
            }
            this.showOutageMapButton();
            events.trigger(events.beforeHideOutageMap);
            events.trigger(events.showOutageReport);
        },

        showOutageMapClick: function (event) {
            if (event) {
                event.preventDefault();
            }
            this.showOutageReportButton();

            events.trigger(events.beforeShowOutageMap);
            events.trigger(events.showOutageMap);
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