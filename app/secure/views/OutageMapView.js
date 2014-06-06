define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        CompositeView = require('views/CompositeView'),
        env = require('env'),
        template = require('hbs!templates/OutageMap');

    var OutageMapView = CompositeView.extend({
        initialize: function (options) {
            console.debug('OutageMapView.initialize()');
            options || (options = {});
            this.dispatcher = options.dispatcher || this;
            this.region = options.region || 'allofaep';
        },

        resources: function (culture) {
            return {};
        },

        render: function () {
            console.debug('OutageMapView.render()');
            var currentContext = this;

            var renderModel = _.extend({}, this.resources(), this.model);
            this.$el.html(template(renderModel));

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