require.config({
    config: {
        'app': {
            'consoleLevel': 'off'
        },
        'env': {
            'apiUrl': '/global/data/omsdata/',
            'appFolder': '/secure',
            'refreshInterval': 30000, /*30 seconds*/
            'dataExpiration': 3600000,/*1 hour*/
            'disclaimer': 'NOTE&#58; This system uses outage information reported by our customers to create a computer projection of the total number of customers affected by an outage event. During fast&#45;changing situations &#8211; such as a major storm or similar event &#8211; the accuracy of this estimate can be affected by a large number of unusual situations that must be analyzed.',
            'noOutagesMessage': 'No counties currently have outages affecting more than 100 customers.',
            'swepcoNoOutagesMessage': 'No counties or parishes currently have outages affecting more than 100 customers.',
            'serviceUnavailableMessage': 'We&#39;re sorry. This system is temporarily unavailable. We are working to fix technical problems.'
        },
        'incident-helpers': {
            'incidentLevels': [
                {
                    'id': 0,
                    'color': '#FFFF54',
                    'backgroundColor': '#FFFFAB',
                    'min': 100,
                    'max': 500
                },
                {
                    'id': 1,
                    'color': '#FFA24F',
                    'backgroundColor': '#FFD1A8',
                    'min': 501,
                    'max': 2000
                },
                {
                    'id': 2,
                    'color': '#FF4444',
                    'backgroundColor': '#FFA3A3',
                    'min': 2001,
                    'max': Number.MAX_VALUE
                }
            ]
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
        'region-helpers': 'libs/region-helpers',
        'incident-helpers': 'libs/incident-helpers',
        'resource-helpers': 'libs/resource-helpers',
        /*directories*/
        'templates': '../templates',
        'routers': '../routers',
        'controllers': '../controllers',
        'models': '../models',
        'views': '../views',
        'maps': '../maps',
        'data': '../data'
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