define(function (require) {
    'use strict';

    var _ = require('underscore'),
        ShellView = require('views/ShellView');

    var apcoMap = require('svg!maps/apco');
    var aepohioMap = require('svg!maps/aepohio');

    var oms2aepwebData = require('data/oms2aepweb');

    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------

    var shellView = new ShellView({
        el: document.getElementById('shell-view'),
        model: {}
    });
    shellView.render();

    var showOutageMapViewButton = document.getElementById('show-outage-map-view-button');
    var showOutageReportViewButton = document.getElementById('show-outage-report-view-button');

    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------

    var outageMapElement = document.getElementById('outage-map-view');
    if (outageMapElement) {
        console.debug('OutageMapView.render()');
        /*outageMapElement.innerHTML = outageMapTemplate(outageMapData);*/
        outageMapElement.innerHTML = aepohioMap;
    }

    var outageReportElement = document.getElementById('outage-report-view');
    if (outageReportElement) {
        console.debug('OutageReportView.render()');
        //var region = globals.window.location.search;
        //if (region && region.length > 0) {
        //}
        var renderModel = _.assign({}, [outageReportData, oms2aepwebData]);
        outageReportElement.innerHTML = outageReportTemplate(outageReportData);
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