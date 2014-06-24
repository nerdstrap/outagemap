define(function (require) {
    'use strict';

    var module = require('module'),
        globals = require('globals');

    var masterConfig = (module.config && module.config()) || {},
        apiUrl = masterConfig.apiUrl || '',
        appFolder = masterConfig.appFolder || '/secure',
        refreshInterval = masterConfig.refreshInterval || 30000,
        dataExpiration = masterConfig.dataExpiration || 3600000,
        incidentTotalThreshold = incidentTotalThreshold || 100;

    var env = {
        getApiUrl: function () {
            return apiUrl;
        },
        getAppFolder: function () {
            return appFolder;
        },
        getRefreshInterval: function () {
            return refreshInterval;
        },
        getDataExpiration: function () {
            return dataExpiration;
        },
        getParameterByName: function (name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(globals.window.location.hash);
            return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        },
        getIncidentTotalThreshold: function () {
            return incidentTotalThreshold;
        }        
    };

    return env;
});
