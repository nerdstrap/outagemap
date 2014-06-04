define(function (require) {
    'use strict';

    var _ = require('underscore'),
        View = require('View'),
        template = require('hbs!templates/OutageReport');

    var OutageReportView = View.extend({
        initialize: function (options) {
            console.debug('OutageReportView.initialize()');
            options || (options = {});
            this.el = options.el;
            this.model = options.model;
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
            var renderModel = _.extend({}, this.resources(), this.model);
            if (this.el) {
                this.el.innerHTML = template(renderModel);
            }
            return this;
        }
    });

    return OutageReportView;
});