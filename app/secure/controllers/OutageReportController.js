define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        appEvents = require('app-events'),
        ContentView = require('views/ContentView'),
        globals = require('globals'),
        env = require('env'),
        regionHelpers = require('region-helpers'),
        resourceHelpers = require('resource-helpers');

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
            this.dispatcher = options.dispatcher || appEvents;

            this.listenTo(appEvents, appEvents.twitterPost, this.twitterPost);
            this.listenTo(appEvents, appEvents.twitterFollowUs, this.twitterFollowUs);
            this.listenTo(appEvents, appEvents.facebookPost, this.facebookPost);
            this.listenTo(appEvents, appEvents.facebookFollowUs, this.facebookFollowUs);
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
            var operatingCompany = regionHelpers.getOperatingCompanyById(env.getParameterByName('region'));
            if (operatingCompany) {
                var statusPostFormatString = resourceHelpers.getResource('statusPostFormatString').value;
                var twitterPostLinkFormatString = resourceHelpers.getResource('twitterPostLinkFormatString').value;
                var statusPost = statusPostFormatString.format(operatingCompany.fullName, operatingCompany.outageMapLink)
                var twitterPostLink = twitterPostLinkFormatString.format(statusPost);
                globals.window.open(twitterPostLink);
            }
        },

        twitterFollowUs: function () {
            var operatingCompany = regionHelpers.getOperatingCompanyById(env.getParameterByName('region'));
            if (operatingCompany) {
                var twitterFollowUsLinkFormatString = resourceHelpers.getResource('twitterFollowUsLinkFormatString').value;
                var twitterFollowUsLink = twitterFollowUsLinkFormatString.format(operatingCompany.twitterProfile);
                globals.window.open(twitterFollowUsLink);
            }
        },

        facebookPost: function () {
            var operatingCompany = regionHelpers.getOperatingCompanyById(env.getParameterByName('region'));
            if (operatingCompany) {
                var statusPostFormatString = resourceHelpers.getResource('statusPostFormatString').value;
                var facebookPostLinkFormatString = resourceHelpers.getResource('facebookPostLinkFormatString').value;
                var statusPost = statusPostFormatString.format(operatingCompany.fullName)
                var facebookPostLink = facebookPostLinkFormatString.format(operatingCompany.outageMapLink, statusPost);
                globals.window.open(facebookPostLink);
            }
        },

        facebookFollowUs: function () {
            var operatingCompany = regionHelpers.getOperatingCompanyById(env.getParameterByName('region'));
            if (operatingCompany) {
                var facebookFollowUsLinkFormatString = resourceHelpers.getResource('facebookFollowUsLinkFormatString').value;
                var facebookFollowUsLink = facebookFollowUsLinkFormatString.format(operatingCompany.facebookProfile);
                globals.window.open(facebookFollowUsLink);
            }
        }
    });

    return OutageReportController;
});