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
            'key': 'swepcoServiceStatisticsFormatString',
            'value': '{0} serves {1} customers in {2} counties and parishes in {3}'
        },
        {
            'key': 'HeaderView.twitterIconSrc',
            'value': '/images/twitter_icon.png'
        },
        {
            'key': 'HeaderView.twitterIconSvgSrc',
            'value': '/images/twitter_icon.svg'
        },
        {
            'key': 'HeaderView.twitterIconAlt',
            'value': 'twitter logo'
        },
        {
            'key': 'HeaderView.facebookIconSrc',
            'value': '/images/facebook_icon.png'
        },
        {
            'key': 'HeaderView.facebookIconSvgSrc',
            'value': '/images/facebook_icon.svg'
        },
        {
            'key': 'HeaderView.facebookIconAlt',
            'value': 'facebook logo'
        },
        {
            'key': 'HeaderView.twitterPostButtonText',
            'value': 'Tweet This'
        },
        {
            'key': 'HeaderView.twitterFollowUsButtonText',
            'value': 'Follow Us For Updates'
        },
        {
            'key': 'HeaderView.facebookPostButtonText',
            'value': 'Post This'
        },
        {
            'key': 'HeaderView.facebookFollowUsButtonText',
            'value': 'Follow Us For Updates'
        },
        {
            'key': 'HeaderView.showOutageMapViewButtonText',
            'value': 'View Map'
        },
        {
            'key': 'HeaderView.showOutageReportViewButtonText',
            'value': 'View List'
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
            'value': 'We&#39;re sorry. This system is temporarily unavailable.<br/>We are working to fix technical problems.'
        },
        {
            'key': 'incidentTooltipFormatString',
            'value': '{0} County<br/>{1} customers affected.<br/>(click for details)'
        },
        {
            'key': 'swepcoIncidentTooltipFormatString',
            'value': '{0} County&#47;Parish<br/>{1} customers affected.<br/>(click for details)'
        },
        {
            'key': 'disclaimerText',
            'value': '<strong>NOTE</strong>&#58; This system uses outage information reported by our customers to create a computer projection of the total number of customers affected by an outage event. During fast&#45;changing situations &#8211; such as a major storm or similar event &#8211; the accuracy of this estimate can be affected by a large number of unusual situations that must be analyzed.'
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
            'key': 'OutageReportView.swepcoCountyNameTitleText',
            'value': 'County&#47;Parish'
        },
        {
            'key': 'OutageReportView.customersAffectedTitleText',
            'value': 'Customers<br/>Without Power'
        },
        {
            'key': 'OutageReportView.customersServedTitleText',
            'value': 'Total Customers'
        },
        {
            'key': 'OutageReportView.percentageAffectedTitleText',
            'value': 'Percentage'
        },
        {
            'key': 'OutageReportView.grandTotalTitleText',
            'value': 'Total Outages'
        },        
        {
            'key': 'OutageReportView.countyNameFormatString',
            'value': '{0} {1}, {2}'
        },
        {
            'key': 'OutageReportView.countyAbbreviation',
            'value': 'Co.'
        },
        {
            'key': 'OutageReportView.parishAbbreviation',
            'value': 'Parish'
        },
        {
            'key': 'OutageReportView.easternTimezoneAbbreviation',
            'value': 'ET'
        },
        {
            'key': 'OutageReportView.centralTimezoneAbbreviation',
            'value': 'CT'
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
            'key': 'OutageMapLegendView.serviceTerritoryIconSrc',
            'value': '/images/service_territory_icon.png'
        },
        {
            'key': 'OutageMapLegendView.serviceTerritoryIconSvgSrc',
            'value': '/images/service_territory_icon.svg'
        },
        {
            'key': 'OutageMapLegendView.countyLinesIconSrc',
            'value': '/images/county_lines_icon.png'
        },
        {
            'key': 'OutageMapLegendView.countyLinesIconSvgSrc',
            'value': '/images/county_lines_icon.svg'
        },
        {
            'key': 'OutageMapLegendView.majorHighwaysIconSrc',
            'value': '/images/major_highways_icon.png'
        },
        {
            'key': 'OutageMapLegendView.majorHighwaysIconSvgSrc',
            'value': '/images/major_highways_icon.svg'
        },
        {
            'key': 'aepohio.logoImageSrc',
            'value': '/images/aepohio_logo.png'
        },
        {
            'key': 'aepohio.logoImageSvgSrc',
            'value': '/images/aepohio_logo.svg'
        },
        {
            'key': 'aepohio.logoImageAlt',
            'value': 'AEP Ohio logo'
        },
        {
            'key': 'aeptexas.logoImageSrc',
            'value': '/images/aeptexas_logo.png'
        },
        {
            'key': 'aeptexas.logoImageSvgSrc',
            'value': '/images/aeptexas_logo.svg'
        },
        {
            'key': 'aeptexas.logoImageAlt',
            'value': 'AEP Texas logo'
        },
        {
            'key': 'apco.logoImageSrc',
            'value': '/images/apco_logo.png'
        },
        {
            'key': 'apco.logoImageSvgSrc',
            'value': '/images/apco_logo.svg'
        },
        {
            'key': 'apco.logoImageAlt',
            'value': 'Appalachian Power logo'
        },
        {
            'key': 'im.logoImageSrc',
            'value': '/images/im_logo.png'
        },
        {
            'key': 'im.logoImageSvgSrc',
            'value': '/images/im_logo.svg'
        },
        {
            'key': 'im.logoImageAlt',
            'value': 'Indiana&amp;Michigan Power logo'
        },
        {
            'key': 'kentucky.logoImageSrc',
            'value': '/images/kentucky_logo.png'
        },
        {
            'key': 'kentucky.logoImageSvgSrc',
            'value': '/images/kentucky_logo.svg'
        },
        {
            'key': 'kentucky.logoImageAlt',
            'value': 'Kentucky Power logo'
        },
        {
            'key': 'pso.logoImageSrc',
            'value': '/images/pso_logo.png'
        },
        {
            'key': 'pso.logoImageSvgSrc',
            'value': '/images/pso_logo.svg'
        },
        {
            'key': 'pso.logoImageAlt',
            'value': 'Public Service of Oklahoma logo'
        },
        {
            'key': 'swepco.logoImageSrc',
            'value': '/images/swepco_logo.png'
        },
        {
            'key': 'swepco.logoImageSvgSrc',
            'value': '/images/swepco_logo.svg'
        },
        {
            'key': 'swepco.logoImageAlt',
            'value': 'Southwestern Power Company logo'
        },
        {
            'key': 'twitterStatusPostFormatString',
            'value': 'Outage map of {0} service territory {1}'
        },
        {
            'key': 'facebookStatusPostFormatString',
            'value': 'Outage map of {0} service territory'
        },
        {
            'key': 'twitterPostLinkFormatString',
            'value': 'http://twitter.com/home?status={0}'
        },
        {
            'key': 'twitterFollowUsLinkFormatString',
            'value': 'http://twitter.com/intent/user?screen_name={0}'
        },
        {
            'key': 'facebookPostLinkFormatString',
            'value': 'http://www.facebook.com/sharer.php?u={0}&t={1}'
        },
        {
            'key': 'facebookFollowUsLinkFormatString',
            'value': 'http://www.facebook.com/{0}'
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