define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    var CompositeView = function (options) {
        this.children = _([]);
        Backbone.View.apply(this, [options]);
    };

    _.extend(CompositeView.prototype, Backbone.View.prototype, {
        leave: function () {
            this.trigger('leave');
            this.unbind();
            this.stopListening();
            this.remove();
            this._leaveChildren();
            this._removeFromParent();
        },
        renderChild: function (view) {
            view.render();
            this.children.push(view);
            view.parent = this;
        },
        renderChildInto: function (view, container) {
            this.renderChild(view);
            this.$(container).html(view.el);
        },
        replaceChild: function (view, container) {
            this.renderChild(view);
            this.$(container).replaceWith(view.el);
        },
        appendChild: function (view) {
            this.renderChild(view);
            this.$el.append(view.el);
        },
        appendChildTo: function (view, container) {
            this.renderChild(view);
            this.$(container).append(view.el);
        },
        prependChild: function (view) {
            this.renderChild(view);
            this.$el.prepend(view.el);
        },
        prependChildTo: function (view, container) {
            this.renderChild(view);
            this.$(container).prepend(view.el);
        },
        swapped: function () {
            this.trigger('swapped');
        },
        _leaveChildren: function () {
            this.children.chain().clone().each(function (view) {
                if (view.leave) {
                    view.leave();
                }
            });
        },
        _removeFromParent: function () {
            if (this.parent) {
                this.parent._removeChild(this);
            }
        },
        _removeChild: function (view) {
            var index = this.children.indexOf(view);
            this.children.splice(index, 1);
        }

    });

    CompositeView.extend = Backbone.View.extend;

    return CompositeView;
});