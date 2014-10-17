require.config({
    config: {
        enforceDefine: true,
        'app': {
            'consoleLevel': 'off'
        },
        'env': {
            'apiUrl': '',
            'appFolder': '/src',
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
        'views/OutageMapView': {
            'svgWidth': 686,
            'svgHeight': 446
        }
    },
    paths: {
        /* Require */
        'require': 'libs/require.min',
        'text': 'libs/text',
        'hbs': 'libs/hbs',
        'svg': 'libs/svg',
        
        /* jQuery */
        'jquery': 'libs/jquery.min',
        'tooltipster': 'libs/jquery.tooltipster.min',
        
        /* Underscore */
        'underscore': 'libs/lodash.min',
        
        /* Backbone */
        'backbone': 'libs/backbone.min',
        
        /* Handlebars */
        'Handlebars-base': 'libs/handlebars',
        'Handlebars': 'libs/handlebars.helpers',

        /* Raphael */
        'raphael': 'libs/raphael.min',
        'raphael.svg.import': 'libs/raphael.svg.import.min',
        
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