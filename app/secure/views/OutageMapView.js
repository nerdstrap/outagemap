define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        CompositeView = require('views/CompositeView'),
        env = require('env'),
        events = require('events'),
        template = require('hbs!templates/OutageMap'),
        regions = require('regions'),
        appIncidents = require('incidents'),
        appResources = require('resources');

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
                'incidentTooltipFormatString': this.region === 'swepco' ? appResources.getResource('swepcoIncidentTooltipFormatString').value : appResources.getResource('incidentTooltipFormatString').value
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
            require(['svg!maps/' + currentContext.region + '.svg'], function (map) {
                var svgElement = $('#svg-container');
                if (svgElement) {
                    svgElement.html(map);
                    var operatingCompanyModel = currentContext.model.getOperatingCompanyById(currentContext.region);
                    if (operatingCompanyModel) {
                        if (operatingCompanyModel.disabled) {
                            var serviceUnavailableMessage = appResources.getResource('serviceUnavailableMessage').value;
                            svgElement.title = serviceUnavailableMessage;
                            svgElement.attr('title', serviceUnavailableMessage);
                            svgElement.tooltipster({
                                contentAsHTML: true,
                                touchDevices: false,
                                arrow: false,
                                autoClose: false,
                                offsetY: (svgElement.height() / 2) * -1
                            });
                            svgElement.tooltipster('show');
                        } else {
                            if (operatingCompanyModel.states && operatingCompanyModel.states.length > 0) {
                                _.each(operatingCompanyModel.states, function (state) {
                                    if (state.customersAffected > 0) {
                                        if (state.incidents && state.incidents.length > 0) {
                                            currentContext.delegateEvents(state.incidents);
                                        }
                                    }
                                });
                            }
                        }
                    }
                }
            });
        },

        showOutageReport: function (event) {
            if (event) {
                event.preventDefault();
            }
            $(this).tooltipster('hide');
            events.trigger(events.showOutageReport, this.getAttribute('data-county-name'), this.getAttribute('data-class-name'));
        },

        delegateEvents: function (incidents) {
            var currentContext = this;

            _.each(incidents, function (incident) {
                if (incident.customersAffected >= _incidentTotalThreshold) {
                    var countySvgElementId = countyPrefix + incident.countyName + countySuffix;
                    var countySvgElement = $('#' + countySvgElementId);
                    if (countySvgElement) {
                        var incidentLevelConfig = appIncidents.getIncidentLevel(incident.customersAffected);
                        var incidentTooltipFormatString = currentContext.resources().incidentTooltipFormatString;
                        var tooltipText = incidentTooltipFormatString.format(incident.countyName, incident.customersAffected);
                        countySvgElement.attr('fill', incidentLevelConfig.fillColor);
                        countySvgElement.attr('data-class-name', incidentLevelConfig.className);
                        countySvgElement.attr('data-county-name', incident.countyName);
                        countySvgElement.title = tooltipText;
                        countySvgElement.attr('title', tooltipText);
                        countySvgElement.tooltipster({
                            contentAsHTML: true,
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