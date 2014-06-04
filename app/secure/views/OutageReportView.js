define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        template = require('hbs!templates/OutageReport');

    var OutageReportView = Backbone.View.extend({
        initialize: function (options) {
            console.debug('OutageReportView.initialize()');
            options || (options = {});
            this.dispatcher = options.dispatcher || this;
        },

        resources: function (culture) {
            return {
                'titleText': 'Customer Outages',
                'countyNameTitleText': 'County',
                'customersAffectedTitleText': 'Customers Without Power',
                'customersServedTitleText': 'Total Customers',
                'percentageTitleText': 'Percentage&#40;&#37;&#41;',
                'grandTotalTitleText': 'Grand Total&#58;'
            };
        },

        render: function () {
            console.debug('OutageReportView.render()');
            var currentContext = this;

            var renderModel = _.extend({}, this.resources(), this.model);
            this.$el.html(template(renderModel));

            return this;
        }
    });

    return OutageReportView;
});