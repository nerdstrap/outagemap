define(function (require) {
    'use strict';

    var module = require('module'),
        Handlebars = require('Handlebars-base'),
        globals = require('globals'),
        env = require('env'),
        dates = require('dates');

    var helpers = {
        /**
         * {{formatData}}
         * Port of formatDate-js library (http://bit.ly/18eo2xw)
         * @param  {[type]} date   [description]
         * @param  {[type]} format [description]
         * @return {[type]}        [description]
         */
        formatDate: function (date, format) {
            date = new Date(date);
            return dates.format(date, format);
        },
        getAppUri: function (relativeUri) {
            var appFolder = env.getAppFolder();
            var absoluteUri = appFolder + relativeUri;

            return absoluteUri;
        }
    };

    for (var helper in helpers) {
        if (helpers.hasOwnProperty(helper)) {
            Handlebars.registerHelper(helper, helpers[helper]);
        }
    }

    return Handlebars;
});
