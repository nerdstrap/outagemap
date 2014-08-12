define(function (require) {
    'use strict';

    var _ = require('underscore'),
        Backbone = require('backbone');

    var Events = function (options) {
        if (this.initialize) {
            this.initialize.apply(this, arguments);
        }
    };

    _.extend(Events.prototype, Backbone.Events, {
        showOutageReport: 'showOutageReport',
        showOutageMap: 'showOutageMap',
        twitterPost: 'twitterPost',
        twitterFollowUs: 'twitterFollowUs',
        facebookPost: 'facebookPost',
        facebookFollowUs: 'facebookFollowUs'
    });

    var events = new Events();
    return events;
});