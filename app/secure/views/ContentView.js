define(function (require) {
    'use strict';

    var _ = require('underscore'),
        View = require('View'),
        OutageMapView = require('views/OutageMapView'),
        OutageReportView = require('views/OutageReportView'),
        template = require('hbs!templates/Content');

    var ContentView = View.extend({
        initialize: function (options) {
            console.debug('ContentView.initialize()');
            options || (options = {});
            this.el = options.el;
            this.model = options.model;
            this.dispatcher = options.dispatcher || this;
        },

        resources: function (culture) {
            return {
                'lastUpdatedTitleText': 'Last updated&#58;&#160;'
            };
        },

        render: function () {
            console.debug('ContentView.render()');
            var renderModel = _.extend({}, this.resources(), this.model);
            if (this.el) {
                this.el.innerHTML = template(renderModel);
            }

            var outageMapView = new OutageMapView({
                el: document.getElementById('outage-map-view'),
                model: this.model
            });
            outageMapView.render();

            var outageReportView = new OutageReportView({
                el: document.getElementById('outage-report-view'),
                model: this.model
            });
            outageReportView.render();

            return this;
        }
    });

    return ContentView;
});