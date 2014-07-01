define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        CompositeView = require('views/CompositeView'),
        template = require('hbs!templates/OutageMapLegend'),
        resourceHelpers = require('resource-helpers');

    var OutageMapLegendView = CompositeView.extend({
        initialize: function (options) {
            console.trace('OutageMapLegendView.initialize()');
            options || (options = {});
            this.dispatcher = options.dispatcher || this;
            this.region = options.region || '';
        },

        resources: function (culture) {
            return {
                'customerOutagesTitleText': resourceHelpers.getResource('OutageMapLegendView.customerOutagesTitleText').value,
                'legendTitleText': resourceHelpers.getResource('OutageMapLegendView.legendTitleText').value,
                'level0IncidentsTitleText': resourceHelpers.getResource('OutageMapLegendView.level0IncidentsTitleText').value,
                'level1IncidentsTitleText': resourceHelpers.getResource('OutageMapLegendView.level1IncidentsTitleText').value,
                'level2IncidentsTitleText': resourceHelpers.getResource('OutageMapLegendView.level2IncidentsTitleText').value,
                'serviceTerritoryTitleText': resourceHelpers.getResource('OutageMapLegendView.serviceTerritoryTitleText').value,
                'countyLinesTitleText': resourceHelpers.getResource('OutageMapLegendView.countyLinesTitleText').value,
                'majorHighwaysTitleText': resourceHelpers.getResource('OutageMapLegendView.majorHighwaysTitleText').value,
                'serviceTerritoryIconSrc': resourceHelpers.getResource('OutageMapLegendView.serviceTerritoryIconSrc').value,
                'serviceTerritoryIconSvgSrc': resourceHelpers.getResource('OutageMapLegendView.serviceTerritoryIconSvgSrc').value,
                'countyLinesIconSrc': resourceHelpers.getResource('OutageMapLegendView.countyLinesIconSrc').value,
                'countyLinesIconSvgSrc': resourceHelpers.getResource('OutageMapLegendView.countyLinesIconSvgSrc').value,
                'majorHighwaysIconSrc': resourceHelpers.getResource('OutageMapLegendView.majorHighwaysIconSrc').value,
                'majorHighwaysIconSvgSrc': resourceHelpers.getResource('OutageMapLegendView.majorHighwaysIconSvgSrc').value
            };
        },

        render: function () {
            console.trace('OutageMapLegendView.render()');
            var currentContext = this;

            var renderModel = _.extend({}, this.resources(), this.model);
            this.$el.html(template(renderModel));

            return this;
        }
    });

    return OutageMapLegendView;
});