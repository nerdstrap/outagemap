define(function (require) {
    'use strict';

    var module = require('module'),
        globals = require('globals'),
        appEvents = require('app-events'),
        incidentHelpers = require('incident-helpers'),
        oms2aepwebData = require('data/oms2aepweb'),
        regionHelpers = require('region-helpers');

    var masterConfig = (module.config && module.config()) || {},
        apiUrl = masterConfig.apiUrl || '/global/data/omsdata/',
        appFolder = masterConfig.appFolder || '/secure',
        refreshInterval = masterConfig.refreshInterval || 30000,
        dataExpiration = masterConfig.dataExpiration || 3600000;

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
        attachEvents: function (incidents) {
            var fillColor = '#ffffff';
            var strokeColor = '#000000';
            var strokeWidth = '1';

            var fillColorHover = '#00ff00';
            var strokeColorHover = '#ffffff';
            var strokeWidthHover = '1';

            var fillColorSelected = '#ff0000';
            var strokeColorSelected = '#ffffff';
            var strokeWidthSelected = '1';

            for (var i = 0, len = incidents.length; i <= len; i++) {

                var incident = incidents[i];
                if (incident && incident.countyName) {
                    //                    var el = document.getElementById('_x3C_' + incident.countyName + '_x3E_');
                    var el = document.getElementById(incident.countyName);
                    if (el) {
                        el.setAttribute('fill', 'yellow');

                        el.onmouseover = function () {
                            this.setAttribute('fill', 'yellow');
                        };

                        el.onclick = function () {
                            appEvents.trigger(appEvents.showOutageReport, this.id);
                        };

                        el.onmouseout = function () {
                        };

                    }
                }
            }
        }
    };

    return env;
});
