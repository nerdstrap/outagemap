define(function (require) {
    'use strict';

    var _ = require('underscore');

    var shellTemplate = require('hbs!templates/Shell');

    var shellData = require('data/Shell');

    var headerTemplate = require('hbs!templates/Header');
    var contentTemplate = require('hbs!templates/Content');
    var footerTemplate = require('hbs!templates/Footer');

    var headerData = require('data/Header');
    var contentData = require('data/Content');
    var footerData = require('data/Footer');

    var outageMapTemplate = require('hbs!templates/OutageMap');
    var outageReportTemplate = require('hbs!templates/OutageReport');
    var outageMapLegendTemplate = require('hbs!templates/OutageMapLegend');

    var outageMapData = require('data/OutageMap');
    var outageReportData = require('data/OutageReport');
    var outageMapLegendData = require('data/OutageMapLegend');

    var bodyElements = document.getElementsByTagName('body');
    if (bodyElements && bodyElements.length > 0) {
        bodyElements[0].innerHTML = shellTemplate(shellData);
    }

    var shellViewElements = document.getElementsByClassName('shell-view');
    if (shellViewElements && shellViewElements.length > 0) {
        console.debug('ShellView.render()');
    }

    var headerViewElement = document.getElementById('header-view');
    if (headerViewElement) {
        console.debug('HeaderView.render()');
        headerViewElement.innerHTML = headerTemplate(headerData);
    }

    var contentViewElement = document.getElementById('content-view');
    if (contentViewElement) {
        console.debug('ContentView.render()');
        contentViewElement.innerHTML = contentTemplate(contentData);
    }

    var footerViewElement = document.getElementById('footer-view');
    if (footerViewElement) {
        console.debug('FooterView.render()');
        footerViewElement.innerHTML = footerTemplate(footerData);
    }

    var outageMapElement = document.getElementById('outage-map-view');
    if (outageMapElement) {
        console.debug('OutageMapView.render()');
        outageMapElement.innerHTML = outageMapTemplate(outageMapData);
    }

    var outageReportElement = document.getElementById('outage-report-view');
    if (outageReportElement) {
        console.debug('OutageReportView.render()');
        outageReportElement.innerHTML = outageReportTemplate(outageReportData);
    }

    var outageMapLegendElement = document.getElementById('outage-map-legend-view');
    if (outageMapLegendElement) {
        console.debug('OutageMapLegendView.render()');
        outageMapLegendElement.innerHTML = outageMapLegendTemplate(outageMapLegendData);
    }

    var showOutageMapView = function (event) {
        console.debug('showOutageMapView()');
        if (event) {
            event.preventDefault();
        }
        outageReportElement.classList.add('hidden');
        outageMapElement.classList.remove('hidden');
    };

    var showOutageReportView = function (event) {
        console.debug('showOutageReportView()');
        if (event) {
            event.preventDefault();
        }
        outageMapElement.classList.add('hidden');
        outageReportElement.classList.remove('hidden');
    };

    var showOutageMapViewButton = document.getElementById('show-outage-map-view-button');
    if (showOutageMapViewButton) {
        showOutageMapViewButton.onclick = showOutageMapView;
    }

    var showOutageReportViewButton = document.getElementById('show-outage-report-view-button');
    if (showOutageReportViewButton) {
        showOutageReportViewButton.onclick = showOutageReportView;
    }
});