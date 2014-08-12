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

            var contentViewInstance = new ContentView({
                region: region,
                model: currentContext.outageReportModelInstance
            });

            currentContext.router.swapContent(contentViewInstance);
            var fragmentAlreadyMatches = (Backbone.history.fragment === 'outageReport?region=' + region || Backbone.history.fragment === '');
            currentContext.router.navigate('outageReport?region=' + region, { replace: fragmentAlreadyMatches });
            deferred.resolve(contentViewInstance);

            return deferred.promise();
        },

        twitterPost: function () {
            var operatingCompany = regions.getOperatingCompanyById(env.getParameterByName('region'));
            if (operatingCompany) {
                var statusPostFormatString = appResources.getResource('twitterStatusPostFormatString').value;
                var twitterPostLinkFormatString = appResources.getResource('twitterPostLinkFormatString').value;
                var statusPost = statusPostFormatString.format(operatingCompany.fullName, operatingCompany.outageMapLink)
                var twitterPostLink = twitterPostLinkFormatString.format(statusPost);
                globals.window.open(twitterPostLink);
            }
        },

        twitterFollowUs: function () {
            var operatingCompany = regions.getOperatingCompanyById(env.getParameterByName('region'));
            if (operatingCompany) {
                var twitterFollowUsLinkFormatString = appResources.getResource('twitterFollowUsLinkFormatString').value;
                var twitterFollowUsLink = twitterFollowUsLinkFormatString.format(operatingCompany.twitterProfile);
                globals.window.open(twitterFollowUsLink);
            }
        },

        facebookPost: function () {
            var operatingCompany = regions.getOperatingCompanyById(env.getParameterByName('region'));
            if (operatingCompany) {
                var statusPostFormatString = appResources.getResource('facebookStatusPostFormatString').value;
                var facebookPostLinkFormatString = appResources.getResource('facebookPostLinkFormatString').value;
                var statusPost = statusPostFormatString.format(operatingCompany.fullName)
                var facebookPostLink = facebookPostLinkFormatString.format(operatingCompany.outageMapLink, statusPost);
                globals.window.open(facebookPostLink);
            }
        },

        facebookFollowUs: function () {
            var operatingCompany = regions.getOperatingCompanyById(env.getParameterByName('region'));
            if (operatingCompany) {
                var facebookFollowUsLinkFormatString = appResources.getResource('facebookFollowUsLinkFormatString').value;
                var facebookFollowUsLink = facebookFollowUsLinkFormatString.format(operatingCompany.facebookProfile);
                globals.window.open(facebookFollowUsLink);
            }
        }
    });

    return OutageReportController;
});