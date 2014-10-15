define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        CompositeView = require('views/CompositeView'),
        OutageMapLegendView = require('views/OutageMapLegendView'),
        template = require('hbs!templates/Footer'),
        appResources = require('resources');

    var FooterView = CompositeView.extend({
        initialize: function (options) {
            console.trace('FooterView.initialize()');
            options || (options = {});
            this.dispatcher = options.dispatcher || this;
            this.requestedRegion = options.requestedRegion || '';
        },

        resources: function (culture) {
            return {
                'logoImageSrc': appResources.getResource(this.requestedRegion + '.logoImageSrc'),
                'logoImageSvgSrc': appResources.getResource(this.requestedRegion + '.logoImageSvgSrc'),
                'logoImageAlt': appResources.getResource(this.requestedRegion + '.logoImageAlt')
            };
        },

        render: function () {
            console.trace('FooterView.render()');
            var currentContext = this;

            var renderModel = _.extend({}, this.resources(), this.model);
            this.$el.html(template(renderModel));

            var outageMapLegendViewInstance = new OutageMapLegendView({
                el: $('#outage-map-legend-view', currentContext.$el),
                model: currentContext.model,
                dispatcher: currentContext.dispatcher
            });
            this.renderChild(outageMapLegendViewInstance);

            return this;
        }
    });

    return FooterView;
});