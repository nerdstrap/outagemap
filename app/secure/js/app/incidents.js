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
            ];

    var defaultIncidentLevel = { 'id': -1, 'fillColor': '#FFFFFF', 'highlightColor': '#FFFFFF', 'min': -1, 'max': -1, 'className': '' };

    var incidentHelper = {
        getAllIncidentLevels: function () {
            var results = incidentLevels;
            return results;
        },

        getIncidentLevel: function (customersAffected) {
            var result = _.find(incidentLevels, function (incidentLevel) { return customersAffected >= incidentLevel.min && customersAffected <= incidentLevel.max; });
            result = result || defaultIncidentLevel;
            return result;
        }
    };

    return incidentHelper;

});