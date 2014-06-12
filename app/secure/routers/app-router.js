define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        SwappingRouter = require('routers/SwappingRouter'),
        ShellView = require('views/ShellView'),
        OutageReportController = require('controllers/OutageReportController'),
        OutageReportModel = require('models/OutageReportModel');

    var AppRouter = SwappingRouter.extend({
        initialize: function (options) {
            console.trace('appRouter.initialize');
            options || (options = {});
            var currentContext = this;

            var outageReportModelInstance = new OutageReportModel();

            var shellViewInstance = new ShellView({
                el: $('#shell-view'),
                model: outageReportModelInstance
            });
            shellViewInstance.render();
            this.contentViewEl = shellViewInstance.contentViewEl();
            outageReportModelInstance.getCurrentOutageReport();

            this.outageReportControllerInstance = new OutageReportController({
                router: currentContext,
                outageReportModelInstance: outageReportModelInstance
            });
        },
        routes: {
            '': 'goToOutageReport',
            'outageReport?region=:region': 'goToOutageReport'
        },
        goToOutageReport: function (region) {
            region = region || 'aepohio';
            console.trace('appRouter.goToOutageReport()');
            this.outageReportControllerInstance.goToOutageReport(region);
        },
        navigate: function (fragment, options) {
            SwappingRouter.prototype.navigate.call(this, fragment, options);
            this.trigger('after-navigate', fragment, options);
        }
    });

    return new AppRouter();
});
