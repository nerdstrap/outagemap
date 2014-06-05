define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        HeaderView = require('views/HeaderView'),
        ContentView = require('views/ContentView'),
        FooterView = require('views/FooterView'),
        template = require('hbs!templates/Shell');

    var ShellView = Backbone.View.extend({
        initialize: function (options) {
            console.debug('ShellView.initialize()');
            options || (options = {});
            this.dispatcher = options.dispatcher || this;
        },

        resources: function (culture) {
            return {};
        },

        render: function () {
            console.debug('ShellView.render()');
            var currentContext = this;

            var renderModel = _.extend({}, this.resources(), this.model);
            this.$el.html(template(renderModel));

            var headerView = new HeaderView({
                el: $('#header-view', currentContext.$el),
                model: currentContext.model
            });
            headerView.render();

            var footerView = new FooterView({
                el: $('#footer-view', currentContext.$el),
                model: currentContext.model
            });
            footerView.render();

            return this;
        },

        contentViewEl: function () {
            return $('#content-view', this.el);
        },
    });

    return ShellView;
});