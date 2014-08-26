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

    var _countyPrefix = '_x3C_';
    var _countySuffix = '_x3E_';

    var OutageMapView = CompositeView.extend({
        initialize: function (options) {
            console.trace('OutageMapView.initialize()');
            options || (options = {});
            this.dispatcher = options.dispatcher || this;
            this.region = options.region || '';

            this.listenTo(this.model, 'sync', this.updateViewFromModel);

            this.listenTo(events, events.beforeShowOutageMap, this.beforeShowOutageMap);
            this.listenTo(events, events.beforeHideOutageMap, this.beforeHideOutageMap);
        },

        resources: function (culture) {
            return {
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
                    if (currentContext.model.getDisabled()) {
                        currentContext.renderServiceUnavailableTooltip(svgElement);
                    } else {
                        currentContext.renderIncidents();
                    }
                }
            });
        },

        beforeShowOutageMap: function () {
            var currentContext = this;
            if (currentContext.model.getDisabled()) {
                var svgElement = $('#svg-container');
                if (svgElement) {
                    svgElement.tooltipster('show');
                }
            }
        },

        beforeHideOutageMap: function () {
            var currentContext = this;
            if (currentContext.model.getDisabled()) {
                var svgElement = $('#svg-container');
                if (svgElement) {
                    svgElement.tooltipster('hide');
                }
            }
        },

        showOutageReport: function (event) {
            if (event) {
                event.preventDefault();
            }
            $(this).tooltipster('hide');
            events.trigger(events.showOutageReport, this.getAttribute('data-uuid'), this.getAttribute('data-class-name'));
        },

        renderIncidents: function () {
            var currentContext = this;
            var incidentTooltipFormatString = currentContext.region === 'swepco' ? appResources.getResource('swepcoIncidentTooltipFormatString').value : appResources.getResource('incidentTooltipFormatString').value;
            var states = currentContext.model.getStates();

            _.each(states, function (state) {
                if (state.customersAffected > 0) {
                    if (state.incidents && state.incidents.length > 0) {
                        _.each(state.incidents, function (incident) {
                            var countySvgElementId = _countyPrefix + incident.countyId + _countySuffix;
                            var countySvgElement = $('#' + countySvgElementId);
                            if (countySvgElement) {
                                currentContext.renderIncidentTooltip(countySvgElement, incident, incidentTooltipFormatString);
                            }
                        });
                    }
                }
            });
        },

        renderServiceUnavailableTooltip: function (svgElement) {
            var currentContext = this;
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
        },

        renderIncidentTooltip: function (countySvgElement, incident, tooltipFormatString) {
            var currentContext = this;
            var incidentLevelConfig = appIncidents.getIncidentLevel(incident.customersAffected);
            if (incidentLevelConfig) {
                var tooltipText = tooltipFormatString.format(incident.properCountyName, env.formatNumber(incident.customersAffected));
                countySvgElement.attr('cursor', 'pointer');
                countySvgElement.attr('fill', incidentLevelConfig.fillColor);
                countySvgElement.attr('data-uuid', incident.uuid);
                countySvgElement.attr('data-class-name', incidentLevelConfig.className);
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

    return OutageMapView;
});