define(function (require) {
    'use strict';

    var _ = require('underscore'),
        Backbone = require('backbone');

    var AppEvents = function (options) {
        if (this.initialize) {
            this.initialize.apply(this, arguments);
        }
    };

    _.extend(AppEvents.prototype, Backbone.Events, {
        showOutageReport: "showOutageReport",
        showOutageMapView: "showOutageMapView"
    });

    var appEvents = new AppEvents();
    return appEvents;
});