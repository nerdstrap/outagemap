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

            for (var i = 0, len = incidents.length; i <= len; i++) {

                var incident = incidents[i];
                if (incident && incident.countyName && incident.customersAffected >= 100) {
                    //                    var el = document.getElementById('_x3C_' + incident.countyName + '_x3E_');
                    var el = document.getElementById(incident.countyName);
                    var backgroundColor = incidentHelpers.getIncidentLevel(incident.customersAffected).backgroundColor;
                    if (el) {
                        el.setAttribute('fill', backgroundColor);

                        el.onmouseover = function () {
                            
                        };

                        el.onclick = function () {
                            appEvents.trigger(appEvents.showOutageReport, this.id, this.getAttribute('fill'));
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
