define(function (require) {
    'use strict';

    var module = require('module'),
        globals = require('globals'),
        appEvents = require('app-events'),
        incidentHelpers = require('incident-helpers'),
        regionHelpers = require('region-helpers'),
        dates = require('dates');

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
        },
        formatDate: function (date, format) {
            date = new Date(date);
            return dates.format(date, format);
        },
        formatUTCDate: function (date) {
            date = new Date(date);
            return date.getUTCFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + date.getUTCHours() + ':' + date.getUTCMinutes() + ':' + date.getUTCSeconds() + ' GMT';
        },
        formatNumber: function (value) {
            if (value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            } else {
                return '';
            }
        },
        toTitleCase: function (str) {
            var strTitleCase = str.toLowerCase();
            return strTitleCase.replace(/(?:^|\s)\w/g, function (match) {
                return match.toUpperCase();
            });
        }
    };

    return env;
});
