define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        appEvents = require('app-events'),
        ContentView = require('views/ContentView');

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

        //'twitterPostLinkFormatString': resourceHelpers.getResource('twitterPostLinkFormatString').value,
        //        'twitterFollowLinkFormatString': resourceHelpers.getResource('twitterFollowLinkFormatString').value,
        //        'facebookPostLinkFormatString': resourceHelpers.getResource('facebookPostLinkFormatString').value,
        //        'facebookFollowLinkFormatString': resourceHelpers.getResource('facebookFollowLinkFormatString').value,
        //        'outageMapDirectLinkFormatString': resourceHelpers.getResource('outageMapDirectLinkFormatString').value

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
        }
    });

    return OutageReportController;
});