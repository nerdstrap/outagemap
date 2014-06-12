define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        CompositeView = require('views/CompositeView'),
        template = require('hbs!templates/OutageReport'),
        resourceHelpers = require('resource-helpers');

    var OutageReportView = CompositeView.extend({
        initialize: function (options) {
            console.trace('OutageReportView.initialize()');
            options || (options = {});
            this.dispatcher = options.dispatcher || this;

            this.listenTo(this.model, 'sync', this.updateViewFromModel);
        },

        resources: function (culture) {
            return {
                'titleText': resourceHelpers.getResource('OutageReportView.titleText').value,
                'countyNameTitleText': resourceHelpers.getResource('OutageReportView.countyNameTitleText').value,
                'customersAffectedTitleText': resourceHelpers.getResource('OutageReportView.customersAffectedTitleText').value,
                'customersServedTitleText': resourceHelpers.getResource('OutageReportView.customersServedTitleText').value,
                'percentageTitleText': resourceHelpers.getResource('OutageReportView.percentageTitleText').value,
                'grandTotalTitleText': resourceHelpers.getResource('OutageReportView.grandTotalTitleText').value
            };
        },

        render: function () {
            console.trace('OutageReportView.render()');
            var currentContext = this;

            var renderModel = _.extend({}, this.resources(), this.model);
            this.$el.html(template(renderModel));

            return this;
        },

        updateViewFromModel: function () {
            var operatingCompanyModel;
            var operatingCompanies = this.model.get('operatingCompanies');
            if (operatingCompanies) {
                var aepOH = _.findWhere(operatingCompanies, { companyName: 'AEP-OH' });
                if (aepOH) {
                    operatingCompanyModel = aepOH;
                    var OH = _.findWhere(aepOH.states, { stateName: 'OH' });
                    if (OH) {
                        var incidents = OH.incidents;
                    }
                }
            }

            var renderModel = _.extend({}, this.resources(), operatingCompanyModel);
            this.$el.html(template(renderModel));
        }
    });

    return OutageReportView;
});