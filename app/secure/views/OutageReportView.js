define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        CompositeView = require('views/CompositeView'),
        template = require('hbs!templates/OutageReport'),
        env = require('env'),
        resourceHelpers = require('resource-helpers'),
        regionHelpers = require('region-helpers');

    var OutageReportView = CompositeView.extend({
        initialize: function (options) {
            console.trace('OutageReportView.initialize()');
            options || (options = {});
            this.dispatcher = options.dispatcher || this;
            this.region = options.region || '';

            this.listenTo(this.model, 'sync', this.updateViewFromModel);
        },

        resources: function (culture) {
            return {
                'titleText': resourceHelpers.getResource('OutageReportView.titleText').value,
                'countyNameTitleText': resourceHelpers.getResource('OutageReportView.countyNameTitleText').value,
                'customersAffectedTitleText': resourceHelpers.getResource('OutageReportView.customersAffectedTitleText').value,
                'customersServedTitleText': resourceHelpers.getResource('OutageReportView.customersServedTitleText').value,
                'percentageAffectedTitleText': resourceHelpers.getResource('OutageReportView.percentageAffectedTitleText').value,
                'grandTotalTitleText': resourceHelpers.getResource('OutageReportView.grandTotalTitleText').value,
                'noOutagesMessage': resourceHelpers.getResource('noOutagesMessage').value
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
            var operatingCompanyConfig = regionHelpers.getOperatingCompanyById(this.region);
            var operatingCompanyModel = this.model.getOperatingCompany(operatingCompanyConfig.identifier);
            var renderModel = {
                countiesServed: parseInt('0'),
                customersServed: parseInt('0'),
                customersAffected: parseInt('0'),
                repairIssues: parseInt('0'),
                percentageAffected: parseFloat('0'),
                incidents: [],
                states: []
            };
            if (operatingCompanyModel && operatingCompanyModel.states && operatingCompanyModel.states.length > 0) {
                 _.each (operatingCompanyModel.states, function(state) {
                    if (state.customersAffected > 0) {
                        renderModel.customersServed += state.customersServed;
                        renderModel.customersAffected += state.customersAffected;
                        if (state.incidents && state.incidents.length > 0) {
                            _.each (state.incidents, function(incident) {
                                var incidentCopy = _.clone(incident);
                                renderModel.incidents.push(incidentCopy);
                            });
                        }
                        var stateCopy = _.clone(state);
                        renderModel.states.push(stateCopy);
                    }
                 });
            }

            // percentageAffected
            if (renderModel.customersAffected > 0 && renderModel.customersServed > 0 ) {
                renderModel.percentageAffected = (renderModel.customersAffected.toFixed(1) / renderModel.customersServed.toFixed(1)).toFixed(1);
            }

            _.extend(renderModel, this.resources());
            this.$el.html(template(renderModel));
        },

        showNoOutagesMessage: function () {
            this.$('.row.no-incidents').removeClass('hidden');
            this.$('.row.incident').addClass('hidden');
            this.$('.row.state-total').addClass('hidden');
            this.$('.row.company-total').addClass('hidden');
        }
    });

    return OutageReportView;
});