define(function (require) {
    'use strict';

    var module = require('module'),
        $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        masterConfig = (module.config && module.config()) || {};

    var incidentLevels = masterConfig.incidentLevels || [
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
    ];



    var incidentHelpers = {
        getAllIncidentLevels: function () {
            var deferred = $.Deferred(),
                results = incidentLevels;
            deferred.resolve(results);
            return deferred.promise();
        },

        getIncidentLevel: function (customersAffected) {
            var deferred = $.Deferred(),
                results = _.filter(incidentLevels, function (incidentLevel) { return customersAffected >= incidentLevel.min && customersAffected <= incidentLevel.max; });
            deferred.resolve(results);
            return deferred.promise();
        }
    };

    return incidentHelpers;

});