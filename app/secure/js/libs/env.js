define(function (require) {
    'use strict';

    var module = require('module'),
        globals = require('globals'),
        appEvents = require('app-events'),
        incidentHelpers = require('incident-helpers'),
        regionHelpers = require('region-helpers'),
        jqueryBalloon = require('balloon');

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
        attachEvents: function (incidents) {

            for (var i = 0, len = incidents.length; i <= len; i++) {

                var incident = incidents[i];
                if (incident && incident.countyName && incident.customersAffected >= 100) {
                    //                    var el = document.getElementById('_x3C_' + incident.countyName + '_x3E_');
                    var el = document.getElementById(incident.countyName);
                    var backgroundColor = incidentHelpers.getIncidentLevel(incident.customersAffected).color;
                    var className = incidentHelpers.getIncidentLevel(incident.customersAffected).className;
                    var balloonTxt = incident.countyName + ' Co.<br/>' + incident.customersAffected + ' customers affected <br/> (click for details)';
                    if (el) {
                        el.setAttribute('data-className', className);
                        el.setAttribute('fill', backgroundColor);
                        el.setAttribute('balloonTxt', balloonTxt);

                        el.onmouseover = function () {
                            $('#' + this.id).balloon({ offsetX: 0, offsetY: 0, contents: this.getAttribute('balloonTxt'), css: { backgroundColor: 'yellow', color: 'black', borderColor: 'red'} });
                        };

                        el.onclick = function () {
                            appEvents.trigger(appEvents.showOutageReport, this.id, this.getAttribute('data-className'));
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
