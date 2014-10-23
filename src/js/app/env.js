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
        dateFromISO: function(s){
            var day, tz,
            rx=/^(\d{4}\-\d\d\-\d\d([tT ][\d:\.]*)?)([zZ]|([+\-])(\d\d):(\d\d))?$/,
            p= rx.exec(s) || [];
            if(p[1]){
                day= p[1].split(/\D/);
                for(var i= 0, L= day.length; i<L; i++){
                    day[i]= parseInt(day[i], 10) || 0;
                };
                day[1]-= 1;
                day= new Date(Date.UTC.apply(Date, day));
                if(!day.getDate()) return NaN;
                if(p[5]){
                    tz= (parseInt(p[5], 10)*60);
                    if(p[6]) tz+= parseInt(p[6], 10);
                    if(p[4]== '+') tz*= -1;
                    if(tz) day.setUTCMinutes(day.getUTCMinutes()+ tz);
                }
                return day;
            }
            return NaN;
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
