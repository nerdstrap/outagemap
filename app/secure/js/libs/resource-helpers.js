define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    var resources = [
        {
            'key': 'disclaimer',
            'value': 'NOTE&#58; This system uses outage information reported by our customers to create a computer projection of the total number of customers affected by an outage event. During fast&#45;changing situations &#8211; such as a major storm or similar event &#8211; the accuracy of this estimate can be affected by a large number of unusual situations that must be analyzed.'
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
            'key': 'level0IncidentsTitleText',
            'value': '100&#8211;500'
        },
        {
            'key': 'level1IncidentsTitleText',
            'value': '501&#8211;2,000'
        },
        {
            'key': 'level2IncidentsTitleText',
            'value': '2&#44;001&#43;'
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
            'key': 'OutageReportView.percentageTitleText',
            'value': 'Percentage&#40;&#37;&#41;'
        },
        {
            'key': 'OutageReportView.grandTotalTitleText',
            'value': 'Grand Total&#58;'
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