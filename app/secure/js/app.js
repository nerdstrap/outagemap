define(function (require) {
    'use strict';

    var module = require('module'),
        Backbone = require('backbone'),
        appRouter = require('routers/app-router');

    var masterConfig = (module.config && module.config()) || {},
        consoleLevel = masterConfig.consoleLevel || 'off';

    console.setLevel(consoleLevel);

    Backbone.history.start();
});