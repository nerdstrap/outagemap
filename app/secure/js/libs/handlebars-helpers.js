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
        stripeRows: function (rows, fn) {
            var buffer = [],
                i, len;
            for (i = 0, len = rows.length; i < len; ++i) {
                var row = rows[i];
                var rowClass = 'row collapse incident';
                if (row.stateName) {
                    rowClass = rowClass + ' bold'
                };
                row.rowClass = (i + 1) % 2 === 0 ? rowClass : rowClass + ' alternate';
                // Render the block once for each row.
                buffer.push(fn.fn(row));
            }

            return buffer.join('');
        }
    };

    for (var helper in helpers) {
        if (helpers.hasOwnProperty(helper)) {
            Handlebars.registerHelper(helper, helpers[helper]);
        }
    }

    return Handlebars;
});
