require.config({
    config: {
        enforceDefine: true,
        'app': {
            'consoleLevel': 'off'
        },
        'env': {
            'apiUrl': '',
            'appFolder': '',
            'refreshInterval': 30000, /*30 seconds*/
            'dataExpiration': 3600000,/*1 hour*/
            'incidentTotalThreshold': 100
        },
        'incident-helpers': {
            'incidentLevels': [
                {
                    'id': 0,
                    'fillColor': '#FFFF54',
                    'highlightColor': '#FFFFAB',
                    'min': 100,
                    'max': 500,
                    'className': 'level-0-incident'
                },
                {
                    'id': 1,
                    'fillColor': '#FFA24F',
                    'highlightColor': '#FFD1A8',
                    'min': 501,
                    'max': 2000,
                    'className': 'level-1-incident'
                },
                {
                    'id': 2,
                    'fillColor': '#FF4444',
                    'highlightColor': '#FFA3A3',
                    'min': 2001,
                    'max': Number.MAX_VALUE,
                    'className': 'level-2-incident'
                }
            ]
        },
        'require-hbs': {
            'extension': 'html'
        },
        'require-svg': {
            'extension': 'xml'
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
        /*jquery plugins*/
        'jquery-tooltipster': 'libs/jquery-tooltipster',
        /*app-level items*/
        'globals': 'libs/globals',
        'env': 'libs/env',
        'app-events': 'libs/app-events',
        'region-helpers': 'libs/region-helpers',
        'incident-helpers': 'libs/incident-helpers',
        'resource-helpers': 'libs/resource-helpers',
        /*directories*/
        'templates': '../templates',
        'routers': '../routers',
        'controllers': '../controllers',
        'models': '../models',
        'services': '../services',
        'views': '../views',
        'maps': '../maps',
        'images': '../images',
        'fonts': '../fonts'
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
        },
        'jquery-tooltipster': {
            deps: ['jquery']
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