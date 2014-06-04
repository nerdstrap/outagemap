define(function (require) {
    'use strict';

    var _ = require('underscore'),
        View = require('View'),
        HeaderView = require('views/HeaderView'),
        ContentView = require('views/ContentView'),
        FooterView = require('views/FooterView'),
        template = require('hbs!templates/Shell');

    var ShellView = View.extend({
        initialize: function (options) {
            console.debug('ShellView.initialize()');
            options || (options = {});
            this.el = options.el;
            this.model = options.model;
            this.dispatcher = options.dispatcher || this;
        },

        resources: function (culture) {
            return {};
        },

        render: function () {
            console.debug('ShellView.render()');
            var renderModel = _.extend({}, this.resources(), this.model);
            if (this.el) {
                this.el.innerHTML = template(renderModel);

                var headerView = new HeaderView({
                    el: document.getElementById('header-view'),
                    model: this.model
                });
                headerView.render();

                var contentView = new ContentView({
                    el: document.getElementById('content-view'),
                    model: this.model
                });
                contentView.render();

                var footerView = new FooterView({
                    el: document.getElementById('footer-view'),
                    model: this.model
                });
                footerView.render();
            }
            return this;
        }
    });

    return ShellView;
});