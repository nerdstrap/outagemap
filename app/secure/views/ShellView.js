define(function (require) {
    'use strict';

    var _ = require('underscore'),
        HeaderView = require('views/HeaderView'),
        ContentView = require('views/ContentView'),
        FooterView = require('views/FooterView'),
        template = require('hbs!templates/Shell');

    function ShellView(options) {
        console.debug('new ShellView()');
        options || (options = {});
        this.initialize.apply(this, arguments);
    };

    ShellView.prototype.initialize = function initialize(options) {
        options || (options = {});
        this.el = options.el;
        this.model = options.model;
    };

    ShellView.prototype.resources = function resources(culture) {
        return {};
    }

    ShellView.prototype.render = function render() {
        console.debug('ShellView.render()');
        var renderModel = _.assign({}, this.resources(), this.model);
        if (this.el) {
            this.el.innerHTML = template(renderModel);

            var headerView = new HeaderView({
                el: document.getElementById('header-view'),
                model: {}
            });
            headerView.render();

            var contentView = new ContentView({
                el: document.getElementById('content-view'),
                model: {}
            });
            contentView.render();

            var footerView = new FooterView({
                el: document.getElementById('footer-view'),
                model: {}
            });
            footerView.render();
        }
        return this;
    };

    return ShellView;
});