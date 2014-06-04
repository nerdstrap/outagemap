define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        template = require('hbs!templates/OutageMapLegend');

    var OutageMapLegendView = Backbone.View.extend({
        initialize: function (options) {
            console.debug('OutageMapLegendView.initialize()');
            options || (options = {});
            this.dispatcher = options.dispatcher || this;
        },

        resources: function (culture) {
            return {
                'customerOutagesTitleText': 'CUSTOMER OUTAGES',
                'legendTitleText': 'LEGEND',
                'level0IncidentsTitleText': '100&#8211;500',
                'level0IncidentsColor': 'ff0000',
                'level1IncidentsTitleText': '501&#8211;2,000',
                'level1IncidentsColor': '00ff00',
                'level2IncidentsTitleText': '2&#44;001&#43;',
                'level2IncidentsColor': '0000ff',
                'serviceTerritoryTitleText': 'Service Territory',
                'countyLinesTitleText': 'County Lines',
                'majorHighwaysTitleText': 'Major Highways'
            };
        },

        render: function () {
            console.debug('OutageMapLegendView.render()');
            var currentContext = this;

            var renderModel = _.extend({}, this.resources(), this.model);
            this.$el.html(template(renderModel));

            return this;
        }
    });

    return OutageMapLegendView;
});