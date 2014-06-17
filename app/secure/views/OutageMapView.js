define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        CompositeView = require('views/CompositeView'),
        env = require('env'),
        template = require('hbs!templates/OutageMap'),
        regionHelpers = require('region-helpers');

    var OutageMapView = CompositeView.extend({
        initialize: function (options) {
            console.trace('OutageMapView.initialize()');
            options || (options = {});
            this.dispatcher = options.dispatcher || this;
            this.region = options.region || 'allofaep';
            this.listenTo(this.model, 'sync', this.updateViewFromModel);
        },

        resources: function (culture) {
            return {};
        },

        render: function () {
            console.trace('OutageMapView.render()');
            var currentContext = this;

            var renderModel = _.extend({}, this.resources(), this.model);
            this.$el.html(template(renderModel));


            return this;
        },
        showOutageReportView: function () {
            console.trace('OutageMapView.showOutageReportView()');
        },
        updateViewFromModel: function () {
            var currentContext = this;
            require(['svg!maps/' + this.region], function (map) {
                var svgElement = document.getElementById('svg-container');
                if (svgElement) {
                    svgElement.innerHTML = map;
                    var operatingCompany = regionHelpers.getOperatingCompanyById(env.getParameterByName('region'));
                    var operatingCompanyModel = currentContext.model.getOperatingCompany(operatingCompany.identifier);
                    if (operatingCompanyModel && operatingCompanyModel.states && operatingCompanyModel.states.length > 0) {
                        _.each(operatingCompanyModel.states, function (state) {
                            if (state.customersAffected > 0) {
                                if (state.incidents && state.incidents.length > 0) {
                                    env.attachEvents(state.incidents);
                                }
                                var stateCopy = _.clone(state);
                                renderModel.states.push(stateCopy);
                            }
                        });
                    }
                }
            });
        }
    });

    return OutageMapView;
});