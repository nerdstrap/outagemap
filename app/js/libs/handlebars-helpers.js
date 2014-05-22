define(function (require) {
    'use strict';

    var Handlebars = require('Handlebars');

    Handlebars.registerHelper('defaultValue', function (value, defaultValue, options) {
        if (value) {
            if (options.safeString) {
                return new Handlebars.SafeString(value);
            } else {
                return value;
            }
        } else {
            return new Handlebars.SafeString(defaultValue);
        }
    });
});