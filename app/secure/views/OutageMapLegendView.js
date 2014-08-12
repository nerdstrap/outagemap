define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        CompositeView = require('views/CompositeView'),
        template = require('hbs!templates/OutageMapLegend'),
        appResources = require('resources');

    var OutageMapLegendView = CompositeView.extend({
        initialize: function (options) {
            console.trace('OutageMapLegendView.initialize()');
            options || (options = {});
            this.dispatcher = options.dispatcher || this;
            this.region = options.region || '';
        },

        resources: function (culture) {
            return {
                'customerOutagesTitleText': appResources.getResource('OutageMapLegendView.customerOutagesTitleText').value,
                'legendTitleText': appResources.getResource('OutageMapLegendView.legendTitleText').value,
                'level0IncidentsTitleText': appResources.getResource('OutageMapLegendView.level0IncidentsTitleText').value,
                'level1IncidentsTitleText': appResources.getResource('OutageMapLegendView.level1IncidentsTitleText').value,
                'level2IncidentsTitleText': appResources.getResource('OutageMapLegendView.level2IncidentsTitleText').value,
                'serviceTerritoryTitleText': appResources.getResource('OutageMapLegendView.serviceTerritoryTitleText').value,
                'countyLinesTitleText': appResources.getResource('OutageMapLegendView.countyLinesTitleText').value,
                'majorHighwaysTitleText': appResources.getResource('OutageMapLegendView.majorHighwaysTitleText').value,
                'serviceTerritoryIconSrc': appResources.getResource('OutageMapLegendView.serviceTerritoryIconSrc').value,
                'serviceTerritoryIconSvgSrc': appResources.getResource('OutageMapLegendView.serviceTerritoryIconSvgSrc').value,
                'countyLinesIconSrc': appResources.getResource('OutageMapLegendView.countyLinesIconSrc').value,
                'countyLinesIconSvgSrc': appResources.getResource('OutageMapLegendView.countyLinesIconSvgSrc').value,
                'majorHighwaysIconSrc': appResources.getResource('OutageMapLegendView.majorHighwaysIconSrc').value,
                'majorHighwaysIconSvgSrc': appResources.getResource('OutageMapLegendView.majorHighwaysIconSvgSrc').value
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