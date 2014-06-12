define(function (require) {
    'use strict';

    var module = require('module'),
        Backbone = require('backbone'),
        appRouter = require('routers/app-router');

    var masterConfig = (module.config && module.config()) || {},
        consoleLevel = masterConfig.consoleLevel || 'off';

    console.setLevel(consoleLevel);

    if (!String.prototype.format) {
        String.prototype.format = function () {
            var args = arguments;
            return this.replace(/{(\d+)}/g, function (match, number) {
                return typeof args[number] != 'undefined'
                    ? args[number]
                    : match
                ;
            });
        };
    }

    Backbone.history.start();
});