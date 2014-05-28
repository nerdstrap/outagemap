require.config({
    config: {
        'env': {
            'apiUrl': '/outagemap/resources',
            'siteRoot': '/outagemap/app',
            'refreshFrequency': 60000
        },
        'require-hbs': {
            'extension': 'html'
        },
    },
    paths: {
        'require': 'libs/require',
        'text': 'libs/require-text',
        'hbs': 'libs/require-hbs',
        'svg': 'libs/require-svg',
        'console': 'libs/console',
        'underscore': 'libs/lodash',
        'dates': 'libs/dates',
        'Handlebars': 'libs/handlebars-helpers',
        'Handlebars-base': 'libs/handlebars',
        'json2': 'libs/json2',
        'globals': 'libs/globals',
        'env': 'libs/env',
        'templates': '../templates',
        'data': '../data',
        'maps': '../maps'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'Handlebars-base': {
            exports: 'Handlebars'
        }
    }
});

// Global error handler
requirejs.onError = function (err) {
    if (err) {
        console.log(err.message);
        if (err.originalError) {
            console.log(err.originalError.message);
        }
        if (err.requireType) {
            if (err.requireType === 'timeout') {
                console.log('modules: ' + err.requireModules);
            }
        }
    }

    throw err;
};

// Load our app module and pass it to our definition function
require(['console', 'app']);