define(function (require) {
    'use strict';

    var _ = require('underscore');
    var template = require('hbs!templates/Content');

    function ContentView(options) {
        console.debug('new ContentView()');
        options || (options = {});
        this.initialize.apply(this, arguments);
    };

    ContentView.prototype.initialize = function initialize(options) {
        options || (options = {});
        this.el = options.el;
        this.model = options.model;
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
        return this;
    };

    return ContentView;
});