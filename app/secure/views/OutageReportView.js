define(function (require) {
    'use strict';

    var _ = require('underscore');
    var template = require('hbs!templates/OutageReport');

    function OutageReportView(options) {
        console.debug('new OutageReportView()');
        options || (options = {});
        this.initialize.apply(this, arguments);
    };

    OutageReportView.prototype.initialize = function initialize(options) {
        options || (options = {});
        this.el = options.el;
        this.model = options.model;
    };

    OutageReportView.prototype.resources = function resources(culture) {
        return {
            'titleText': 'Customer Outages',
            'countyNameTitleText': 'County',
            'customersAffectedTitleText': 'Customers Without Power',
            'customersServedTitleText': 'Total Customers',
            'percentageTitleText': 'Percentage&#40;&#37;&#41;',
            'grandTotalTitleText': 'Grand Total&#58;'
        };
    }

    OutageReportView.prototype.render = function render() {
        console.debug('OutageReportView.render()');
        var renderModel = _.assign({}, this.resources(), this.model);
        if (this.el) {
            this.el.innerHTML = template(renderModel);
        }
        return this;
    };

    return OutageReportView;
});