require.config({
    config: {
        enforceDefine: true,
        'app': {
            'consoleLevel': 'off'
        },
        'env': {
            'apiUrl': '',
            'appFolder': '/~michaelbaltic/outagemap/app/secure',
            'refreshInterval': 30000, /*30 seconds*/
            'dataExpiration': 3600000,/*1 hour*/
            'incidentTotalThreshold': 100
        },
        'hbs': {
            'extension': 'html'
        },
        'svg': {
            'extension': 'xml'
        },
    },
    paths: {
        /* Require */
        'require': 'libs/require',
        'text': 'libs/text',
        'hbs': 'libs/hbs',
        'svg': 'libs/svg',
        
        /* jQuery */
        'jquery': 'libs/jquery',
        'tooltipster': 'libs/jquery.tooltipster',
        
        /* Underscore */
        'underscore': 'libs/lodash',
        
        /* Backbone */
        'backbone': 'libs/backbone',
        
        /* Handlebars */
        'Handlebars-base': 'libs/handlebars',
        'Handlebars': 'libs/handlebars.helpers',
        
        /* Modernizr */
        'modernizr': 'libs/modernizr',
        
        /* Foundation */
        'foundation.core': 'libs/foundation',
        'foundation.abide': 'libs/foundation.abide',
        'foundation.accordion': 'libs/foundation.accordion',
        'foundation.alert': 'libs/foundation.alert',
        'foundation.clearing': 'libs/foundation.clearing',
        'foundation.dropdown': 'libs/foundation.dropdown',
        'foundation.equalizer': 'libs/foundation.equalizer',
        'foundation.interchange': 'libs/foundation.interchange',
        'foundation.joyride': 'libs/foundation.joyride',
        'foundation.magellan': 'libs/foundation.magellan',
        'foundation.offcanvas': 'libs/foundation.offcanvas',
        'foundation.orbit': 'libs/foundation.orbit',
        'foundation.reveal': 'libs/foundation.reveal',
        'foundation.tab': 'libs/foundation.tab',
        'foundation.tooltip': 'libs/foundation.tooltip',
        'foundation.topbar': 'libs/foundation.topbar',
        
        /* App */
        'console': 'app/console',
        'dates': 'app/dates',
        'env': 'app/env',
        'events': 'app/events',
        'globals': 'app/globals',
        'incidents': 'app/incidents',
        'regions': 'app/regions',
        'resources': 'app/resources',
        
        /* Convenience */
        'collections': '../collections',
        'controllers': '../controllers',
        'enums': '../enums',
        'maps': '../maps',
        'models': '../models',
        'routers': '../routers',
        'services': '../services',
        'templates': '../templates',
        'views': '../views'
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
        'tooltipster': {
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