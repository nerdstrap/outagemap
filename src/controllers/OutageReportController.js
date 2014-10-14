define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        events = require('events'),
        ContentView = require('views/ContentView'),
        globals = require('globals'),
        env = require('env'),
        regions = require('regions'),
        appResources = require('resources');

    /**
    * Creates a new OutageReportController with the specified attributes.
    * @constructor
    * @param {object} options
    */
    var OutageReportController = function (options) {
        console.trace('new OutageReportController()');
        options || (options = {});
        this.router = options.router;
        this.outageReportModelInstance = options.outageReportModelInstance;
        this.requestedRegion = options.requestedRegion || '';

        this.initialize.apply(this, arguments);
    };

    _.extend(OutageReportController.prototype, Backbone.Events, {
        /** @class OutageReportController
        * @contructs OutageReportController object
        * @param {object} options
        */
        initialize: function (options) {
            console.trace('OutageReportController.initialize');
            this.dispatcher = options.dispatcher || events;

            this.listenTo(events, events.twitterPost, this.twitterPost);
            this.listenTo(events, events.twitterFollowUs, this.twitterFollowUs);
            this.listenTo(events, events.facebookPost, this.facebookPost);
            this.listenTo(events, events.facebookFollowUs, this.facebookFollowUs);
        },
        /** Navigates to the outage map
         */
        goToOutageReport: function (region) {
            console.trace('ShellController.goToOutageReport');
            var currentContext = this,
                deferred = $.Deferred();

            require(['svg!maps/' + region + '.svg'], function (outageMap) {
                var contentViewInstance = new ContentView({
                    region: region,
                    model: currentContext.outageReportModelInstance,
                    outageMap : outageMap
                });

                currentContext.router.swapContent(contentViewInstance);
                currentContext.outageReportModelInstance.getCurrentOutageReport(region);
                setInterval(function () {
                    currentContext.refreshData();
                //}, 3000);
                }, env.getRefreshInterval());
                var fragmentAlreadyMatches = (Backbone.history.fragment === 'outageReport?region=' + region || Backbone.history.fragment === '');
                currentContext.router.navigate('outageReport?region=' + region, { replace: fragmentAlreadyMatches });
                deferred.resolve(contentViewInstance);
            });

            return deferred.promise();
        },

        twitterPost: function () {
            var statusPostFormatString = appResources.getResource('twitterStatusPostFormatString').value;
            var twitterPostLinkFormatString = appResources.getResource('twitterPostLinkFormatString').value;
            var statusPost = statusPostFormatString.format(this.outageReportModelInstance.getOperatingCompanyName(), this.outageReportModelInstance.getOutageMapLink())
            var twitterPostLink = twitterPostLinkFormatString.format(statusPost);
            globals.window.open(twitterPostLink);
        },

        twitterFollowUs: function () {
            var twitterFollowUsLinkFormatString = appResources.getResource('twitterFollowUsLinkFormatString').value;
            var twitterFollowUsLink = twitterFollowUsLinkFormatString.format(this.outageReportModelInstance.getTwitterProfile());
            globals.window.open(twitterFollowUsLink);
        },

        facebookPost: function () {
            var statusPostFormatString = appResources.getResource('facebookStatusPostFormatString').value;
            var facebookPostLinkFormatString = appResources.getResource('facebookPostLinkFormatString').value;
            var statusPost = statusPostFormatString.format(this.outageReportModelInstance.getOperatingCompanyName())
            var facebookPostLink = facebookPostLinkFormatString.format(this.outageReportModelInstance.getOutageMapLink(), statusPost);
            globals.window.open(facebookPostLink);
        },

        facebookFollowUs: function () {
            var facebookFollowUsLinkFormatString = appResources.getResource('facebookFollowUsLinkFormatString').value;
            var facebookFollowUsLink = facebookFollowUsLinkFormatString.format(this.outageReportModelInstance.getFacebookProfile());
            globals.window.open(facebookFollowUsLink);
        },
        refreshData: function () {
            var currentContext = this;
            currentContext.outageReportModelInstance.getCurrentOutageReport(currentContext.requestedRegion);
        }
    });

    return OutageReportController;
});