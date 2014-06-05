define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        env = require('env'),
        outageReportService = require('models/service/outageReportService');

    var OutageReportModel = Backbone.Model.extend({
        idAttribute: 'outageReportId',
        initialize: function (options) {
            console.debug('OutageReportModel.initialize()');
            options || (options = {});
        },
        sync: function (method, model, options) {
            if (method === "read") {
                var xhr = options.xhr = outageReportService.getCurrentOutageReport().done(function (data) {
                    setTimeout(function () {
                        options.success(data, 'success', null);
                    }, 2000);
                });
                model.trigger('request', model, xhr, options);
                return xhr;
            }
        },
        set: function (attributes, options) {
            if (typeof attributes === 'object') {
            }
            return Backbone.Model.prototype.set.call(this, attributes, options);
        },
        getCurrentOutageReport: function (successCallback, errorCallback) {
            var xhr = this.fetch({
                url: env.getApiUrl() + '/getCurrentOutageReport',
                reset: true,
                success: successCallback,
                error: errorCallback
            });

            return xhr;
        }
    });

    return OutageReportModel;
});