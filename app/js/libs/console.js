define(
        [
            'underscore'
        ],
        function (_) {
                        // In case we forget to take out console statements. IE becomes very unhappy when we forget. Let's not make IE unhappy
            if (typeof (window.console) === 'undefined') {
                window.console = {};
                window.console.log = window.console.error = window.console.info = window.console.debug = window.console.warn = window.console.trace = window.console.dir = window.console.dirxml = window.console.group = window.console.groupEnd = window.console.time = window.console.timeEnd = window.console.assert = window.console.profile = function () {
                };
                window.console.table = function () {
                };
            }

            var console = window.console;
            if (!(console.debug)) {
                console.debug = console.log;
            }

            // manage IE8 & 9
            var methods = ['log', 'debug', 'info', 'warn', 'error', 'assert', 'dir', 'clear', 'profile', 'profileEnd', 'table'];
            if (typeof console.log === 'object') {
                _.each(methods, function (method) {
                    console['_' + method] = console[method];
                    console[method] = function (msg) {
                        console['_' + method](msg);
                    };
                });
            }

            // Can be customized if needed
            console.serverUrl = 'api/log';
            console.levels = ['debug', 'info', 'warn', 'error'];
            // Disabled by default
            console.level = 'off';

            var enabledFor = function (level) {
                if (console.level === 'off') {
                    return false;
                }
                if (_.indexOf(console.levels, level) === -1) {
                    throw new Error('Invalid log level "' + strategy + '", must be one of ' + JSON.stringify(console.levels));
                }
                if (_.indexOf(console.levels, console.level) === -1) {
                    throw new Error('Invalid log console.level "' + strategy + '", must be one of ' + JSON.stringify(console.levels));
                }
                return _.indexOf(console.levels, level) >= _.indexOf(console.levels, console.level);
            };

            var log = console.log;
            var debug = console.debug;
            var info = console.info;
            var warn = console.warn;
            var error = console.error;
            var table = console.table;

            // console.log = console.debug
            console.log = function () {
                log.apply(this, Array.prototype.slice.call(arguments));
            };
            console.debug = function () {
                debug.apply(this, Array.prototype.slice.call(arguments));
            };
            console.info = function () {
                info.apply(this, Array.prototype.slice.call(arguments));
            };
            console.warn = function () {
                warn.apply(this, Array.prototype.slice.call(arguments));
            };
            console.error = function () {
                error.apply(this, Array.prototype.slice.call(arguments));
            };
            console.table = function () {
                table.apply(this, Array.prototype.slice.call(arguments));
            };

            // manage global JS errors
            window.onerror = function (message, url, linenumber) {
                if (enabledFor('error')) {
                    sendLogToServer('error', 'JavaScript error: ' + message + ' on line ' + linenumber + ' for ' + url);
                }
            };
        }
);