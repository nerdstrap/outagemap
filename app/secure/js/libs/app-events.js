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
        showOutageMap: "showOutageMap"
    });

    var appEvents = new AppEvents();
    return appEvents;
});