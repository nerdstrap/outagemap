define(function (require) {
    'use strict';

    var module = require('module'),
        Handlebars = require('Handlebars-base'),
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
            return env.getAppFolder() + relativeUri;
        },
        formatNumber: function (value) {
            if (value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            } else {
                return '';
            }
        },
        stripeRows: function (rows, evenClass, oddClass, fn) {
            if (rows && rows.length > 0){
                var buffer = [],
                    i, len;
                for (i = 0, len = rows.length; i < len; ++i) {
                    var row = rows[i];
                    row.stripeClass = ((i + 1) % 2 === 0 ? evenClass : oddClass);
                    // Render the block once for each row.
                    buffer.push(fn.fn(row));
                }

                return buffer.join('');
            }
        }
    };

    for (var helper in helpers) {
        if (helpers.hasOwnProperty(helper)) {
            Handlebars.registerHelper(helper, helpers[helper]);
        }
    }

    return Handlebars;
});
