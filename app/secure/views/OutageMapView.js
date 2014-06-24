define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        CompositeView = require('views/CompositeView'),
        env = require('env'),
        appEvents = require('app-events'),
        template = require('hbs!templates/OutageMap'),
        regionHelpers = require('region-helpers'),
        incidentHelpers = require('incident-helpers'),
        resourceHelpers = require('resource-helpers');

    var _incidentTotalThreshold = env.getIncidentTotalThreshold();

    var countyPrefix = '_x3C_';
    var countySuffix = '_x3E_';

    var OutageMapView = CompositeView.extend({
        initialize: function (options) {
            console.trace('OutageMapView.initialize()');
            options || (options = {});
            this.dispatcher = options.dispatcher || this;
            this.region = options.region || '';

            this.listenTo(this.model, 'sync', this.updateViewFromModel);
        },

        resources: function (culture) {
            return {
                'incidentTooltipFormatString': resourceHelpers.getResource('incidentTooltipFormatString').value,
                'swepcoIncidentTooltipFormatString': resourceHelpers.getResource('swepcoIncidentTooltipFormatString').value
            };
        },

        render: function () {
            console.trace('OutageMapView.render()');
            var currentContext = this;

            var renderModel = _.extend({}, this.resources(), this.model);
            this.$el.html(template(renderModel));

            return this;
        },

        updateViewFromModel: function () {
            var currentContext = this;
            require(['svg!maps/' + currentContext.region], function (map) {
                var svgElement = document.getElementById('svg-container');
                if (svgElement) {
                    svgElement.innerHTML = map;
                    var operatingCompanyModel = currentContext.model.getOperatingCompanyById(currentContext.region);
                    if (operatingCompanyModel && operatingCompanyModel.states && operatingCompanyModel.states.length > 0) {
                        _.each(operatingCompanyModel.states, function (state) {
                            if (state.customersAffected > 0) {
                                if (state.incidents && state.incidents.length > 0) {
                                    currentContext.delegateEvents(state.incidents);
                                }
                            }
                        });
                    }
                }
            });
        },

        showOutageReport: function(event) {
            if (event) {
                event.preventDefault();
            }
            appEvents.trigger(appEvents.showOutageReport, this.getAttribute('data-county-name'), this.getAttribute('data-class-name'));
        },

        delegateEvents: function (incidents) {
            var currentContext = this;

            _.each(incidents, function(incident) {
                if (incident.customersAffected >= _incidentTotalThreshold) {
                    var countySvgElementId = countyPrefix + incident.countyName + countySuffix;
                    var countySvgElement = $('#' + countySvgElementId);
                    if (countySvgElement) {
                        var incidentLevelConfig = incidentHelpers.getIncidentLevel(incident.customersAffected);
                        var incidentTooltipFormatString = currentContext.resources().incidentTooltipFormatString;
                        var tooltipText = incidentTooltipFormatString.format(incident.countyName, incident.customersAffected);
                        countySvgElement.attr('fill', incidentLevelConfig.fillColor);
                        countySvgElement.attr('data-class-name', incidentLevelConfig.className);
                        countySvgElement.attr('data-county-name', incident.countyName);
                        countySvgElement.title = tooltipText;
                        countySvgElement.attr('title', tooltipText);
                        countySvgElement.tooltipster({
                            contentAsHTML: true,
                            //autoClose: false,
                            interactive: true,
                            touchDevices: false
                        });
                        countySvgElement.click(currentContext.showOutageReport);
                    }
                }
            });
        }
    });

    return OutageMapView;
});