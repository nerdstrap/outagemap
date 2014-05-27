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

    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------

    var shellViewElement = document.getElementById('shell-view');
    if (shellViewElement) {
        console.debug('ShellView.render()');
        shellViewElement.innerHTML = shellTemplate(shellData);
    }

    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    var headerViewElement = document.getElementById('header-view');
    if (headerViewElement) {
        console.debug('HeaderView.render()');
        headerViewElement.innerHTML = headerTemplate(headerData);
    }

    var showOutageMapViewButton = document.getElementById('show-outage-map-view-button');
    var showOutageReportViewButton = document.getElementById('show-outage-report-view-button');

    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------

    var contentViewElement = document.getElementById('content-view');
    if (contentViewElement) {
        console.debug('ContentView.render()');
        contentViewElement.innerHTML = contentTemplate(contentData);
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

    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------

    var footerViewElement = document.getElementById('footer-view');
    if (footerViewElement) {
        console.debug('FooterView.render()');
        footerViewElement.innerHTML = footerTemplate(footerData);
    }

    var outageMapLegendElement = document.getElementById('outage-map-legend-view');
    if (outageMapLegendElement) {
        console.debug('OutageMapLegendView.render()');
        outageMapLegendElement.innerHTML = outageMapLegendTemplate(outageMapLegendData);
    }

    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------

    var showOutageMapView = function (event) {
        console.debug('showOutageMapView()');
        if (event) {
            event.preventDefault();
        }
        if (showOutageMapViewButton) {
            showOutageMapViewButton.classList.add('hidden');
        }
        if (showOutageReportViewButton) {
            showOutageReportViewButton.classList.remove('hidden');
        }
        if (outageMapElement) {
            outageMapElement.classList.remove('hidden');
        }
        if (outageReportElement) {
            outageReportElement.classList.add('hidden');
        }
    };

    if (showOutageMapViewButton) {
        showOutageMapViewButton.onclick = showOutageMapView;
    }

    var showOutageReportView = function (event) {
        console.debug('showOutageReportView()');
        if (event) {
            event.preventDefault();
        }
        if (showOutageMapViewButton) {
            showOutageMapViewButton.classList.remove('hidden');
        }
        if (showOutageReportViewButton) {
            showOutageReportViewButton.classList.add('hidden');
        }
        if (outageMapElement) {
            outageMapElement.classList.add('hidden');
        }
        if (outageReportElement) {
            outageReportElement.classList.remove('hidden');
        }
    };

    if (showOutageReportViewButton) {
        showOutageReportViewButton.onclick = showOutageReportView;
    }
});