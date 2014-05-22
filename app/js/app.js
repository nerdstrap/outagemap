define(function (require) {
    'use strict';

    var _ = require('underscore');

    var shellTemplate = require('hbs!templates/Shell');
    var headerTemplate = require('hbs!templates/Header');
    var contentTemplate = require('hbs!templates/Content');
    var footerTemplate = require('hbs!templates/Footer');

    var outageMapTemplate = require('hbs!templates/OutageMap');
    var outageReportTemplate = require('hbs!templates/OutageReport');

    var outageReportData = require('data/OutageReport');

    var bodyElements = document.getElementsByTagName('body');
    if (bodyElements && bodyElements.length > 0) {
        bodyElements[0].innerHTML = shellTemplate();
    }

    var shellViewElements = document.getElementsByClassName('shell-view');
    if (shellViewElements && shellViewElements.length > 0) {
        console.debug('ShellView.render()');
        
        var headerViewElement = document.getElementById('header-view');
        if (headerViewElement) {
            console.debug('HeaderView.render()');
            headerViewElement.innerHTML = headerTemplate();
        }

        var contentViewElement = document.getElementById('content-view');
        if (contentViewElement) {
            console.debug('ContentView.render()');
            contentViewElement.innerHTML = contentTemplate();
        }

        var footerViewElement = document.getElementById('footer-view');
        if (footerViewElement) {
            console.debug('FooterView.render()');
            footerViewElement.innerHTML = footerTemplate();
        }

        var outageReportElement = document.getElementById('outage-report-view');
        if (outageReportElement) {
            console.debug('OutageReportView.render()');
            outageReportElement.innerHTML = outageReportTemplate(outageReportData);
        }
    }
});