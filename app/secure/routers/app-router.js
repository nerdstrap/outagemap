define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        ShellView = require('views/ShellView'),
        oms2aepwebData = require('data/oms2aepweb');

    var AppRouter = Backbone.Router.extend({
        initialize: function (options) {
            console.debug('appRouter.initialize');
            options || (options = {});
            var currentContext = this;
            var shellView = new ShellView({
                el: $('shell-view'),
                model: oms2aepwebData
            });
            shellView.render();
        },
        routes: {
            '': 'outageMap'
        },
        outageMap: function () {
            console.debug('appRouter.outageMap');
        }
    });

    return new AppRouter();
});
