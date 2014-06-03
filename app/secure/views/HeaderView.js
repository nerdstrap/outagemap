define(function (require) {
    'use strict';

    var _ = require('underscore');
    var template = require('hbs!templates/Header');

    function HeaderView(options) {
        console.debug('new HeaderView()');
        options || (options = {});
        this.initialize.apply(this, arguments);
    };

    HeaderView.prototype.initialize = function initialize(options) {
        options || (options = {});
        this.el = options.el;
        this.model = options.model;
    };

    HeaderView.prototype.resources = function resources(culture) {
        return {
            'showOutageMapViewButtonText': 'View outage map',
            'showOutageReportViewButtonText': 'View outage report'
        };
    }

    HeaderView.prototype.render = function render() {
        console.debug('HeaderView.render()');
        var renderModel = _.assign({}, this.resources(), this.model);
        if (this.el) {
            this.el.innerHTML = template(renderModel);
        }
        return this;
    };

    return HeaderView;
});