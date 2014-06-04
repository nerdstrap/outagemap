define(function (require) {
    'use strict';

    var _ = require('underscore'),
        View = require('View'),
        template = require('hbs!templates/Header');

    var HeaderView = View.extend({
        initialize: function (options) {
            console.debug('HeaderView.initialize()');
            options || (options = {});
            this.el = options.el;
            this.model = options.model;
            this.dispatcher = options.dispatcher || this;
        },

        resources: function (culture) {
            return {
                'showOutageMapViewButtonText': 'View outage map',
                'showOutageReportViewButtonText': 'View outage report'
            };
        },

        render: function () {
            console.debug('HeaderView.render()');
            var renderModel = _.extend({}, this.resources(), this.model);
            if (this.el) {
                this.el.innerHTML = template(renderModel);
            }



            return this;
        }
    });

    return HeaderView;
});