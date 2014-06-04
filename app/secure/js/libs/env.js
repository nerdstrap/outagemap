define(function (require) {
    'use strict';

    var module = require('module'),
        globals = require('globals'),
        masterConfig = module.config(),
        apiUrl = masterConfig.apiUrl || '/resources',
        appFolder = masterConfig.appFolder || '/secure',
        refreshFrequency = masterConfig.refreshFrequency || 60000;

    var env = {
        getApiUrl: function () {
            return apiUrl;
        },
        getAppFolder: function () {
            return appFolder;
        },
        getRefreshFrequency: function () {
            return refreshFrequency;
        },
        getParameterByName: function (name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(globals.window.location.search);
            return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        },
        addEvent: function (el, eventType, handler) {
            if (el.addEventListener) { // DOM Level 2 browsers
                el.addEventListener(eventType, handler, false);
            } else if (el.attachEvent) { // IE <= 8
                el.attachEvent('on' + eventType, handler);
            } else { // ancient browsers
                el['on' + eventType] = handler;
            }
        }
    };

    return env;
});
