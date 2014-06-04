define(function (require) {
    'use strict';

    var _ = require('underscore'),
        View = require('View'),
        env = require('env'),
        template = require('hbs!templates/OutageMap');

    var OutageMapView = View.extend({
        initialize: function (options) {
            console.debug('OutageMapView.initialize()');
            options || (options = {});
            this.el = options.el;
            this.model = options.model;
            this.dispatcher = options.dispatcher || this;

            this.region = env.getParameterByName('region');
        },

        resources: function (culture) {
            return {};
        },

        render: function () {
            console.debug('OutageMapView.render()');
            var currentContext = this;
            var renderModel = _.extend({}, this.resources(), this.model);
            if (this.el) {
                this.el.innerHTML = template(renderModel);
            }

            require(['svg!maps/' + this.region], function (map) {
                var svgElement = document.getElementById('svg-container');
                if (svgElement) {
                    svgElement.innerHTML = map;
                }
            });

            return this;
        }
    });

    return OutageMapView;
});