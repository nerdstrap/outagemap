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

            this.listenTo(this.model, 'sync', this.updateViewFromModel);
        },

        resources: function (culture) {
            return {
                'titleText': resourceHelpers.getResource('OutageReportView.titleText').value,
                'countyNameTitleText': resourceHelpers.getResource('OutageReportView.countyNameTitleText').value,
                'customersAffectedTitleText': resourceHelpers.getResource('OutageReportView.customersAffectedTitleText').value,
                'customersServedTitleText': resourceHelpers.getResource('OutageReportView.customersServedTitleText').value,
                'percentageTitleText': resourceHelpers.getResource('OutageReportView.percentageTitleText').value,
                'grandTotalTitleText': resourceHelpers.getResource('OutageReportView.grandTotalTitleText').value,
                'noOutagesMessage': resourceHelpers.getResource('noOutagesMessage').value,
                'formattedCustomersAffected': this.model.customersAffected
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
            var operatingCompany = regionHelpers.getOperatingCompanyById(env.getParameterByName('region'));
            var operatingCompanyModel = this.model.getOperatingCompany(operatingCompany.identifier);
            var renderModel = {
                incidents: [],
                states: []
            };
            if (operatingCompanyModel && operatingCompanyModel.states && operatingCompanyModel.states.length > 0) {
                _.each(operatingCompanyModel.states, function (state) {
                    if (state.customersAffected > 0) {
                        if (state.incidents && state.incidents.length > 0) {
                            _.each(state.incidents, function (incident) {
                                var incidentCopy = _.clone(incident);
                                renderModel.incidents.push(incidentCopy);
                            });
                        }
                        var stateCopy = _.clone(state);
                        renderModel.states.push(stateCopy);
                    }
                });
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

    Handlebars.registerHelper('formatNumber', function (value) {
        if (value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
            return '';
        }
    });
    return OutageReportView;
});