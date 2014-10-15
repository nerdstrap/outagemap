define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    var resources = {
        'serviceStatisticsFormatString': '{0} serves {1} customers in {2} counties in {3}',
        'swepcoServiceStatisticsFormatString': '{0} serves {1} customers in {2} counties and parishes in {3}',
        'HeaderView.twitterIconSrc': '/images/twitter_icon.png',
        'HeaderView.twitterIconSvgSrc': '/images/twitter_icon.svg',
        'HeaderView.twitterIconAlt': 'twitter logo',
        'HeaderView.facebookIconSrc': '/images/facebook_icon.png',
        'HeaderView.facebookIconSvgSrc': '/images/facebook_icon.svg',
        'HeaderView.facebookIconAlt': 'facebook logo',
        'HeaderView.twitterPostButtonText': 'Tweet This',
        'HeaderView.twitterFollowUsButtonText': 'Follow Us For Updates',
        'HeaderView.facebookPostButtonText': 'Post This',
        'HeaderView.facebookFollowUsButtonText': 'Follow Us For Updates',
        'HeaderView.showOutageMapViewButtonText': 'View Map',
        'HeaderView.showOutageReportViewButtonText': 'View List',
        'noOutagesMessage': 'No counties currently have outages affecting more than 100 customers.',
        'swepcoNoOutagesMessage': 'No counties or parishes currently have outages affecting more than 100 customers.',
        'serviceUnavailableMessage': 'We&#39;re sorry. This system is temporarily unavailable.<br/>We are working to fix technical problems.',
        'incidentTooltipFormatString': '{0} <br/>{1} customers out.<br/>(click for details)',
        'swepcoIncidentTooltipFormatString': '{0} <br/>{1} customers out.<br/>(click for details)',
        'incidentLegacyTooltipFormatString': '{0} {1} customers out. (click for details)',
        'swepcoIncidentLegacyTooltipFormatString': '{0} {1} customers out. (click for details)',
        'disclaimerText': '<strong>Note&#58;</strong> This system uses outage information reported by our customers to create a computer projection of the total number of customers affected by an outage event. During fast&#45;changing situations &#8211; such as a major storm &#8211; the accuracy of this estimate can be affected by the large number of unusual situations that must be analyzed.',
        'loadingMessage': 'Updating outage data...',
        'loadingIconSrc': '/images/loading.gif',
        'OutageReportView.lastUpdatedFormatString': 'Last updated&#58;&#160; {0}',
        'OutageReportView.titleText': 'Customer Outages',
        'OutageReportView.countyNameTitleText': 'County',
        'OutageReportView.swepcoCountyNameTitleText': 'County&#47;Parish',
        'OutageReportView.customersAffectedTitleText': 'Customers<br/>Without Power',
        'OutageReportView.customersServedTitleText': 'Total Customers',
        'OutageReportView.percentageAffectedTitleText': 'Percentage',
        'OutageReportView.grandTotalTitleText': 'Total Outages',
        'OutageReportView.countyNameFormatString': '{0}, {1}',
        'OutageReportView.easternTimezoneAbbreviation': 'ET',
        'OutageReportView.centralTimezoneAbbreviation': 'CT',
        'OutageMapLegendView.customerOutagesTitleText': 'Customer Outages',
        'OutageMapLegendView.legendTitleText': 'Legend',
        'OutageMapLegendView.level0IncidentsTitleText': '100&#8211;500',
        'OutageMapLegendView.level1IncidentsTitleText': '501&#8211;2,000',
        'OutageMapLegendView.level2IncidentsTitleText': '2&#44;001&#43;',
        'OutageMapLegendView.serviceTerritoryTitleText': 'Service Area',
        'OutageMapLegendView.countyLinesTitleText': 'County Borders',
        'OutageMapLegendView.majorHighwaysTitleText': 'Major Highways',
        'OutageMapLegendView.serviceTerritoryIconSrc': '/images/service_territory_icon.png',
        'OutageMapLegendView.serviceTerritoryIconSvgSrc': '/images/service_territory_icon.svg',
        'OutageMapLegendView.countyLinesIconSrc': '/images/county_lines_icon.png',
        'OutageMapLegendView.countyLinesIconSvgSrc': '/images/county_lines_icon.svg',
        'OutageMapLegendView.majorHighwaysIconSrc': '/images/major_highways_icon.png',
        'OutageMapLegendView.majorHighwaysIconSvgSrc': '/images/major_highways_icon.svg',
        'aepohio.logoImageSrc': '/images/aepohio_logo.png',
        'aepohio.logoImageSvgSrc': '/images/aepohio_logo.svg',
        'aepohio.logoImageAlt': 'AEP Ohio logo',
        'aeptexas.logoImageSrc': '/images/aeptexas_logo.png',
        'aeptexas.logoImageSvgSrc': '/images/aeptexas_logo.svg',
        'aeptexas.logoImageAlt': 'AEP Texas logo',
        'apco.logoImageSrc': '/images/apco_logo.png',
        'apco.logoImageSvgSrc': '/images/apco_logo.svg',
        'apco.logoImageAlt': 'Appalachian Power logo',
        'im.logoImageSrc': '/images/im_logo.png',
        'im.logoImageSvgSrc': '/images/im_logo.svg',
        'im.logoImageAlt': 'Indiana&amp;Michigan Power logo',
        'kentucky.logoImageSrc': '/images/kentucky_logo.png',
        'kentucky.logoImageSvgSrc': '/images/kentucky_logo.svg',
        'kentucky.logoImageAlt': 'Kentucky Power logo',
        'pso.logoImageSrc': '/images/pso_logo.png',
        'pso.logoImageSvgSrc': '/images/pso_logo.svg',
        'pso.logoImageAlt': 'Public Service of Oklahoma logo',
        'swepco.logoImageSrc': '/images/swepco_logo.png',
        'swepco.logoImageSvgSrc': '/images/swepco_logo.svg',
        'swepco.logoImageAlt': 'Southwestern Power Company logo',
        'twitterStatusPostFormatString': 'Outage map of {0} service territory {1}',
        'facebookStatusPostFormatString': 'Outage map of {0} service territory',
        'twitterPostLinkFormatString': 'http://twitter.com/home?status={0}',
        'twitterFollowUsLinkFormatString': 'http://twitter.com/intent/user?screen_name={0}',
        'facebookPostLinkFormatString': 'http://www.facebook.com/sharer.php?u={0}&t={1}',
        'facebookFollowUsLinkFormatString': 'http://www.facebook.com/{0}'
    };

    var defaultResource = '';

    var resourceHelpers = {
        getResource: function (key) {
            if (resources.hasOwnProperty(key)) {
                return resources[key];
            }
            return defaultResource;
        }
    };

    return resourceHelpers;

});