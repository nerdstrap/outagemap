define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        CompositeView = require('views/CompositeView'),
        OutageMapLegendView = require('views/OutageMapLegendView'),
        template = require('hbs!templates/Footer');

    var FooterView = CompositeView.extend({
        initialize: function (options) {
            console.debug('FooterView.initialize()');
            options || (options = {});
            this.dispatcher = options.dispatcher || this;
        },

        resources: function (culture) {
            return {
                'logoImageSrc': '/images/logo_apco_230x71.jpg',
                'logoImageAlt': 'APCO',
                'disclaimer': 'NOTE&#58; This system uses outage information reported by our customers to create a computer projection of the total number of customers affected by an outage event. During fast&#45;changing situations &#8211; such as a major storm or similar event &#8211; the accuracy of this estimate can be affected by a large number of unusual situations that must be analyzed.'
            };
        },

        render: function () {
            console.debug('FooterView.render()');
            var currentContext = this;

            var renderModel = _.extend({}, this.resources(), this.model);
            this.$el.html(template(renderModel));

            var outageMapLegendView = new OutageMapLegendView({
                el: $('#outage-map-legend-view', currentContext.$el),
                model: currentContext.model,
                dispatcher: currentContext.dispatcher
            });
            this.renderChild(outageMapLegendView);

            return this;
        }
    });

    return FooterView;
});