define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        SwappingRouter = require('routers/SwappingRouter'),
        env = require('env'),
        ShellView = require('views/ShellView'),
        OutageReportController = require('controllers/OutageReportController'),
        OutageReportModel = require('models/OutageReportModel');

    var AppRouter = SwappingRouter.extend({
        initialize: function (options) {
            console.trace('appRouter.initialize');
            options || (options = {});
            var currentContext = this;

            var outageReportModelInstance = new OutageReportModel();

            var requestedRegion = env.getParameterByName('region');
            
            var shellViewInstance = new ShellView({
                el: $('#shell-view'),
                model: outageReportModelInstance,
                requestedRegion: requestedRegion
            });
            shellViewInstance.render();
            currentContext.contentViewEl = shellViewInstance.contentViewEl();

            currentContext.outageReportControllerInstance = new OutageReportController({
                router: currentContext,
                outageReportModelInstance: outageReportModelInstance,
                requestedRegion: requestedRegion
            });
        },
        routes: {
            '': 'goToOutageReport',
            'outageReport?region=:region': 'goToOutageReport'
        },
        goToOutageReport: function (region) {
            console.trace('appRouter.goToOutageReport(' + region + ')');
            this.outageReportControllerInstance.goToOutageReport(region);
        },
        navigate: function (fragment, options) {
            SwappingRouter.prototype.navigate.call(this, fragment, options);
            this.trigger('after-navigate', fragment, options);
        }
    });

    return new AppRouter();
});
