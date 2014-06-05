require.config({
    config: {
        'env': {
            'apiUrl': '/resources',
            'appFolder': '/secure',
            'refreshFrequency': 60000
        },
        'require-hbs': {
            'extension': 'html'
        },
    },
    paths: {
        'require': 'libs/require',
        'jquery': 'libs/jquery',
        'underscore': 'libs/lodash',
        'backbone': 'libs/backbone',
        'Handlebars': 'libs/handlebars-helpers',
        'Handlebars-base': 'libs/handlebars',
        'json2': 'libs/json2',
        'console': 'libs/console',
        'dates': 'libs/dates',
        /*require plugins*/
        'text': 'libs/require-text',
        'hbs': 'libs/require-hbs',
        'svg': 'libs/require-svg',
        /*app-level items*/
        'globals': 'libs/globals',
        'env': 'libs/env',
        'app-events': 'libs/app-events',
        /*directories*/
        'templates': '../templates',
        'routers': '../routers',
        'controllers': '../controllers',
        'models': '../models',
        'views': '../views',
        'maps': '../maps'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
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