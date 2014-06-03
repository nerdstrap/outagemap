define(function (require) {
    'use strict';

    var _ = require('underscore');
    var template = require('hbs!templates/OutageMap');

    function OutageMapView(options) {
        console.debug('new OutageMapView()');
        options || (options = {});
        this.initialize.apply(this, arguments);
    };

    OutageMapView.prototype.initialize = function initialize(options) {
        options || (options = {});
        this.el = options.el;
        this.model = options.model;
    };

    OutageMapView.prototype.resources = function resources(culture) {
        return {};
    }

    OutageMapView.prototype.render = function render() {
        console.debug('OutageMapView.render()');
        var renderModel = _.assign({}, this.resources(), this.model);
        if (this.el) {
            this.el.innerHTML = template(renderModel);
        }
        return this;
    };

    return OutageMapView;
});