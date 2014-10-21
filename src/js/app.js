define(function (require) {
    'use strict';

    var module = require('module'),
        $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        appRouter = require('routers/app-router'),
        tooltipster = require('tooltipster'),
        svg = require('svg');

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

    Date.prototype.addHours = function (h) {
        this.setHours(this.getHours() + h);
        return this;
    };

    Backbone.history.start();
});