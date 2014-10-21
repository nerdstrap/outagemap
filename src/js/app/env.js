define(function (require) {
    'use strict';

    var module = require('module'),
        globals = require('globals'),
        events = require('events'),
        incidents = require('incidents'),
        regions = require('regions'),
        dates = require('dates');

    var masterConfig = (module.config && module.config()) || {},
        apiUrl = masterConfig.apiUrl || '',
        appFolder = masterConfig.appFolder || '',
        refreshInterval = masterConfig.refreshInterval || 30000,
        dataExpiration = masterConfig.dataExpiration || 3600000,
        incidentTotalThreshold = incidentTotalThreshold || 100;

    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
                   .toString(16)
                   .substring(1);
    }

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
        },
        getNewGuid: function () {
            return s4() + s4();
            //return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            //        s4() + '-' + s4() + s4() + s4();
        },
        formatDate: function (date, format) {
            return dates.format(date, format);
        },
        formatNumber: function (value) {
            if (value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            } else {
                return '';
            }
        }
    };

    return env;
});
