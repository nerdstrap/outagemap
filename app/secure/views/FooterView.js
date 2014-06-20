define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        CompositeView = require('views/CompositeView'),
        OutageMapLegendView = require('views/OutageMapLegendView'),
        template = require('hbs!templates/Footer'),
        resourceHelpers = require('resource-helpers');

    var FooterView = CompositeView.extend({
        initialize: function (options) {
            console.trace('FooterView.initialize()');
            options || (options = {});
            this.dispatcher = options.dispatcher || this;
            this.requestedRegion = options.requestedRegion || '';
        },

        resources: function (culture) {
            return {
                'logoImageSrc': resourceHelpers.getResource(this.requestedRegion + '.logoImageSrc').value,
                'logoImageAlt': 'AEP',
                'disclaimer': resourceHelpers.getResource('disclaimerText').value
            };
        },

        render: function () {
            console.trace('FooterView.render()');
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