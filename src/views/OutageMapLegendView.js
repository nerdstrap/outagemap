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
                'customerOutagesTitleText': appResources.getResource('OutageMapLegendView.customerOutagesTitleText'),
                'legendTitleText': appResources.getResource('OutageMapLegendView.legendTitleText'),
                'level0IncidentsTitleText': appResources.getResource('OutageMapLegendView.level0IncidentsTitleText'),
                'level1IncidentsTitleText': appResources.getResource('OutageMapLegendView.level1IncidentsTitleText'),
                'level2IncidentsTitleText': appResources.getResource('OutageMapLegendView.level2IncidentsTitleText'),
                'serviceTerritoryTitleText': appResources.getResource('OutageMapLegendView.serviceTerritoryTitleText'),
                'countyLinesTitleText': appResources.getResource('OutageMapLegendView.countyLinesTitleText'),
                'majorHighwaysTitleText': appResources.getResource('OutageMapLegendView.majorHighwaysTitleText'),
                'serviceTerritoryIconSrc': appResources.getResource('OutageMapLegendView.serviceTerritoryIconSrc'),
                'serviceTerritoryIconSvgSrc': appResources.getResource('OutageMapLegendView.serviceTerritoryIconSvgSrc'),
                'countyLinesIconSrc': appResources.getResource('OutageMapLegendView.countyLinesIconSrc'),
                'countyLinesIconSvgSrc': appResources.getResource('OutageMapLegendView.countyLinesIconSvgSrc'),
                'majorHighwaysIconSrc': appResources.getResource('OutageMapLegendView.majorHighwaysIconSrc'),
                'majorHighwaysIconSvgSrc': appResources.getResource('OutageMapLegendView.majorHighwaysIconSvgSrc')
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