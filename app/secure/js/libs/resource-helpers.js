define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    var resources = [
        {
            'key': 'lastUpdatedTitleText',
            'value': 'Last updated&#58;&#160;'
        },
        {
            'key': 'serviceStatisticsFormatString',
            'value': '{0} serves {1} customers in {2} counties in {3}'
        },
        {
            'key': 'serviceStatisticsFormatString',
            'value': '{0} serves {1} customers in {2} counties and parishes in {3}'
        },
        {
            'key': 'HeaderView.showOutageMapViewButtonText',
            'value': 'View outage map'
        },
        {
            'key': 'HeaderView.showOutageReportViewButtonText',
            'value': 'View outage report'
        },
        {
            'key': 'noOutagesMessage',
            'value': 'No counties currently have outages affecting more than 100 customers.'
        },
        {
            'key': 'swepcoNoOutagesMessage',
            'value': 'No counties or parishes currently have outages affecting more than 100 customers.'
        },
        {
            'key': 'serviceUnavailableMessage',
            'value': 'We&#39;re sorry. This system is temporarily unavailable. We are working to fix technical problems.'
        },
        {
            'key': 'logoImageSrc',
            'value': 'We&#39;re sorry. This system is temporarily unavailable. We are working to fix technical problems.'
        },
        {
            'key': 'disclaimerText',
            'value': 'NOTE&#58; This system uses outage information reported by our customers to create a computer projection of the total number of customers affected by an outage event. During fast&#45;changing situations &#8211; such as a major storm or similar event &#8211; the accuracy of this estimate can be affected by a large number of unusual situations that must be analyzed.'
        },
        {
            'key': 'OutageReportView.titleText',
            'value': 'Customer Outages'
        },
        {
            'key': 'OutageReportView.countyNameTitleText',
            'value': 'County'
        },
        {
            'key': 'OutageReportView.customersAffectedTitleText',
            'value': 'Customers Without Power'
        },
        {
            'key': 'OutageReportView.customersServedTitleText',
            'value': 'Total Customers'
        },
        {
            'key': 'OutageReportView.percentageAffectedTitleText',
            'value': 'Percentage&#40;&#37;&#41;'
        },
        {
            'key': 'OutageReportView.grandTotalTitleText',
            'value': 'Grand Total&#58;'
        },
        {
            'key': 'OutageMapLegendView.customerOutagesTitleText',
            'value': 'CUSTOMER OUTAGES'
        },
        {
            'key': 'OutageMapLegendView.legendTitleText',
            'value': 'LEGEND'
        },
        {
            'key': 'OutageMapLegendView.level0IncidentsTitleText',
            'value': '100&#8211;500'
        },
        {
            'key': 'OutageMapLegendView.level1IncidentsTitleText',
            'value': '501&#8211;2,000'
        },
        {
            'key': 'OutageMapLegendView.level2IncidentsTitleText',
            'value': '2&#44;001&#43;'
        },
        {
            'key': 'OutageMapLegendView.serviceTerritoryTitleText',
            'value': 'Service Territory'
        },
        {
            'key': 'OutageMapLegendView.countyLinesTitleText',
            'value': 'County Lines'
        },
        {
            'key': 'OutageMapLegendView.majorHighwaysTitleText',
            'value': 'Major Highways'
        },
        {
            'key': 'aepohio.logoImageSrc',
            'value': '/images/aepohio_logo.png'
        },
        {
            'key': 'aeptexas.logoImageSrc',
            'value': '/images/aeptexas_logo.png'
        },
        {
            'key': 'apco.logoImageSrc',
            'value': '/images/apco_logo.png'
        },
        {
            'key': 'im.logoImageSrc',
            'value': '/images/im_logo.png'
        },
        {
            'key': 'kentucky.logoImageSrc',
            'value': '/images/kentucky_logo.png'
        },
        {
            'key': 'pso.logoImageSrc',
            'value': '/images/pso_logo.png'
        },
        {
            'key': 'swepco.logoImageSrc',
            'value': '/images/swepco_logo.png'
        }
    ];

    var defaultResource = { 'key': '', 'value': '' };

    var resourceHelpers = {
        getResource : function (key) {
            var result = _.find(resources, function (resource) { return resource.key === key; });
            result = result || defaultResource;
            return result;
        }
    };

    return resourceHelpers;

});