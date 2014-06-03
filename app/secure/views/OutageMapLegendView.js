define(function (require) {
    'use strict';

    var _ = require('underscore');
    var template = require('hbs!templates/OutageMapLegend');

    function OutageMapLegendView(options) {
        console.debug('new OutageMapLegendView()');
        options || (options = {});
        this.initialize.apply(this, arguments);
    };

    OutageMapLegendView.prototype.initialize = function initialize(options) {
        options || (options = {});
        this.el = options.el;
        this.model = options.model;
    };

    OutageMapLegendView.prototype.resources = function resources(culture) {
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
    }

    OutageMapLegendView.prototype.render = function render() {
        console.debug('OutageMapLegendView.render()');
        var renderModel = _.assign({}, this.resources(), this.model);
        if (this.el) {
            this.el.innerHTML = template(renderModel);
        }
        return this;
    };

    return OutageMapLegendView;
});