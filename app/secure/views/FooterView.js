define(function (require) {
    'use strict';

    var _ = require('underscore'),
        OutageMapLegendView = require('views/OutageMapLegendView'),
        template = require('hbs!templates/Footer');

    function FooterView(options) {
        console.debug('new FooterView()');
        options || (options = {});
        this.initialize.apply(this, arguments);
    };

    FooterView.prototype.initialize = function initialize(options) {
        options || (options = {});
        this.el = options.el;
        this.model = options.model;
        this.dispatcher = options.dispatcher || this;
    };

    FooterView.prototype.resources = function resources(culture) {
        return {
            'disclaimer': 'NOTE&#58; This system uses outage information reported by our customers to create a computer projection of the total number of customers affected by an outage event. During fast&#45;changing situations &#8211; such as a major storm or similar event &#8211; the accuracy of this estimate can be affected by a large number of unusual situations that must be analyzed.'
        };
    }

    FooterView.prototype.render = function render() {
        console.debug('FooterView.render()');
        var renderModel = _.assign({}, this.resources(), this.model);
        if (this.el) {
            this.el.innerHTML = template(renderModel);
        }

        var outageMapLegendView = new OutageMapLegendView({
            el: document.getElementById('outage-map-legend-view'),
            model: this.model
        });

        return this;
    };

    return FooterView;
});