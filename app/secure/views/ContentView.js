define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        OutageMapView = require('views/OutageMapView'),
        OutageReportView = require('views/OutageReportView'),
        template = require('hbs!templates/Content');

    var ContentView = Backbone.View.extend({
        initialize: function (options) {
            console.debug('ContentView.initialize()');
            options || (options = {});
            this.dispatcher = options.dispatcher || this;
        },

        resources: function (culture) {
            return {
                'lastUpdatedTitleText': 'Last updated&#58;&#160;'
            };
        },

        render: function () {
            console.debug('ContentView.render()');
            var currentContext = this;

            var renderModel = _.extend({}, this.resources(), this.model);
            this.$el.html(template(renderModel));

            var outageMapView = new OutageMapView({
                el: $('#outage-map-view', currentContext.$el),
                model: currentContext.model,
                dispatcher: currentContext.dispatcher
            });
            outageMapView.render();

            var outageReportView = new OutageReportView({
                el: $('#outage-report-view', currentContext.$el),
                model: currentContext.model,
                dispatcher: currentContext.dispatcher
            });
            outageReportView.render();

            return this;
        }
    });

    return ContentView;
});