define(function (require) {
    'use strict';

    var module = require('module'),
            masterConfig = module.config(),
            apiUrl = masterConfig.apiUrl || '',
            appFolder = masterConfig.appFolder || '',
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
                results = regex.exec(window.location.search);
            return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
    };

    return env;
});
