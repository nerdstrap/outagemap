require.config({
    config: {
        'env': {
            apiUrl: '/outagemap/resources',
            siteRoot: '/outagemap/app',
            refreshFrequency: 60000
        },
        'require-hbs': {
            extension: "html"
        },
    },
    paths: {
        'require': 'libs/require',
        'text': 'libs/require-text',
        'hbs': 'libs/require-hbs',
        'console': 'libs/console',
        'underscore': 'libs/lodash',
        'Handlebars': 'libs/handlebars-helpers',
        'handlebars-base': 'libs/handlebars',
        'json2': 'libs/json2',
        'globals': 'libs/globals',
        'env': 'libs/env'
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