define(function (require) {
    'use strict';

    var _ = require('underscore'),
        OutageMapView = require('views/OutageMapView'),
        OutageReportView = require('views/OutageReportView'),
        template = require('hbs!templates/Content');

    function ContentView(options) {
        console.debug('new ContentView()');
        options || (options = {});
        this.initialize.apply(this, arguments);
    };

    ContentView.prototype.initialize = function initialize(options) {
        options || (options = {});
        this.el = options.el;
        this.model = options.model;
        this.dispatcher = options.dispatcher || this;
    };

    ContentView.prototype.resources = function resources(culture) {
        return {
            'lastUpdatedTitleText': 'Last updated&#58;&#160;'
        };
    }

    ContentView.prototype.render = function render() {
        console.debug('ContentView.render()');
        var renderModel = _.assign({}, this.resources(), this.model);
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
    };

    return ContentView;
});