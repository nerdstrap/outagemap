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
            this.outageMap = options.outageMap;
            this.useLegacy = options.useLegacy;

            this.listenTo(this.model, 'request', this.showLoading);
            this.listenTo(this.model, 'sync', this.updateViewFromModel);

            if (this.useLegacy) {
                this.listenTo(this, 'swapped', this._renderLegacy);
            } else {
                this.listenTo(this, 'swapped', this._render);
            }

            this.listenTo(events, events.beforeShowOutageMap, this.beforeShowOutageMap);
            this.listenTo(events, events.beforeHideOutageMap, this.beforeHideOutageMap);
        },

        resources: function (culture) {
            return {
                'loadingMessage': appResources.getResource('loadingMessage')
            };
        },

        render: function () {
            console.trace('OutageMapView.render()');
            var currentContext = this;

            var renderModel = _.extend({}, currentContext.resources(), currentContext.model);
            currentContext.$el.html(template(renderModel));

            return this;
        },

        _render: function () {
            var currentContext = this;
            if (!this.mapInitialized) {
                var svgElement = currentContext.$el.find('#svg-container');
                if (svgElement) {
                    svgElement.html(currentContext.outageMap);
                }
                this.svgRendered = true;
                this.trigger('svg-rendered');
            }
        },

        _renderLegacy: function () {
            var currentContext = this;
            if (!this.mapInitialized) {
                currentContext.outageMap.render('svg-container');
                this.svgRendered = true;
                this.trigger('svg-rendered');
            }
        },

        showLoading: function () {
            var currentContext = this;
            if (currentContext.useLegacy) {
                currentContext.outageMap.resetServiceCounties();
            } else {
                currentContext.resetServiceCounties();
            }
        },

        updateViewFromModel: function () {
            var currentContext = this;

            if (!this.svgRendered) {
                currentContext.listenToOnce(currentContext, 'svg-rendered', currentContext.updateViewFromModel)
            } else {
                if (currentContext.model.getDisabled()) {
                    currentContext.renderServiceUnavailableTooltip(svgElement);
                } else {
                    currentContext.renderIncidents();
                }
                this.trigger('data-loaded');
            }
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

        showOutageReportLegacy: function (event) {
            if (event) {
                event.preventDefault();
            }
            $(this.node).tooltipster('hide');
            events.trigger(events.showOutageReport, this.data('data-uuid'), this.data('data-class-name'));
        },

        renderIncidents: function () {
            var currentContext = this;
            var incidentTooltipFormatString = currentContext.region === 'swepco' ? appResources.getResource('swepcoIncidentTooltipFormatString') : appResources.getResource('incidentTooltipFormatString');
            var incidentLegacyTooltipFormatString = currentContext.region === 'swepco' ? appResources.getResource('swepcoIncidentLegacyTooltipFormatString') : appResources.getResource('incidentLegacyTooltipFormatString');
            var states = currentContext.model.getStates();

            currentContext.serviceCounties = [];

            _.each(states, function (state) {
                if (state.customersAffected > 0) {
                    if (state.incidents && state.incidents.length > 0) {
                        _.each(state.incidents, function (incident) {
                            var countySvgElementId = _countyPrefix + incident.countyId + _countySuffix;
                            if (currentContext.useLegacy) {
                                currentContext.renderLegacyIncidentTooltip(countySvgElementId, incident, incidentLegacyTooltipFormatString);
                            } else {
                                var countySvgElement = currentContext.$('#' + countySvgElementId);
                                if (countySvgElement) {
                                    currentContext.renderIncidentTooltip(countySvgElement, incident, incidentTooltipFormatString);
                                    currentContext.serviceCounties.push({ id: countySvgElementId, svgElement: countySvgElement });
                                }
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
        },

        renderLegacyIncidentTooltip: function (countySvgElementId, incident, tooltipFormatString) {
            var currentContext = this;
            var incidentLevelConfig = appIncidents.getIncidentLevel(incident.customersAffected);
            if (incidentLevelConfig) {
                var tooltipText = tooltipFormatString.format(incident.properCountyName, env.formatNumber(incident.customersAffected));
                var serviceCounty = currentContext.outageMap.getServiceCounty(countySvgElementId);
                if (serviceCounty) {
                    //serviceCounty.toFront();
                    serviceCounty.attr({
                        'cursor': 'pointer',
                        'fill': incidentLevelConfig.fillColor,
                        'title': tooltipText
                    });
                    serviceCounty.data('data-class-name', incidentLevelConfig.className);
                    serviceCounty.data('data-uuid', incident.uuid);
                    serviceCounty.title = tooltipText;
                    $(serviceCounty.node).tooltipster({
                        contentAsHTML: true,
                        touchDevices: false
                    });
                    serviceCounty.click(currentContext.showOutageReportLegacy);
                }
            }
        },

        resetServiceCounties: function () {
            var currentContext = this;
            _.each(currentContext.serviceCounties, function (s) {
                var svgElement = s.svgElement;
                svgElement.attr('cursor', 'default');
                svgElement.attr('fill', 'none');
                svgElement.removeAttr('data-uuid');
                svgElement.removeAttr('data-class-name');
                svgElement.title = '';
                svgElement.removeAttr('title');
                svgElement.tooltipster('destroy');
                svgElement.off('click');
            })
        }
    });

    return OutageMapView;
});