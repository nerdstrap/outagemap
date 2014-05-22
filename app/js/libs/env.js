define(function (require) {
    'use strict';

    var module = require('module'),
            masterConfig = module.config(),
            apiUrl = masterConfig.apiUrl || '',
            siteRoot = masterConfig.siteRoot || '',
            refreshFrequency = masterConfig.refreshFrequency || 60000;

    var env = {
        getApiUrl: function () {
            return apiUrl;
        },
        getSiteRoot: function () {
            return siteRoot;
        },
        getRefreshFrequency: function () {
            return refreshFrequency;
        }
    };

    return env;
});
