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
        }
    };

    return env;
});
