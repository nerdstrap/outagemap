define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    var map = {};

    map.render = function (rootElementId) {
        var rsr = Raphael(document.getElementById(rootElementId), '744', '484');

        var BASE_LAYER = rsr.set();
        var _x3C_BACKGROUND_x3E_ = rsr.rect(0, 0, 744, 484).attr({ id: '_x3C_BACKGROUND_x3E_', "fill-rule": 'evenodd', "clip-rule": 'evenodd', fill: '#EAE7D0', parent: 'BASE_LAYER', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', '_x3C_BACKGROUND_x3E_');
        var path_j = rsr.path("M368.8,0c-2.3,26.1-21.2,62.3-21.2,62.3c-3.7,3-8.6,8.4-8.9,8.6C330.2,83,324,99,323.8,99   c-3.4,9.6-20.9,27.1-21.2,27.4c-5.4,4.4-14.7,10.6-14.7,10.6H564v10.6l180-5.1V0H368.8z").attr({ opacity: '0.6', fill: '#FFF8CC', parent: 'BASE_LAYER', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'path_j');
        var _x3C_INDIANA_STATE_FILL_x3E_ = rsr.path("M564,484V137H287.9c0,0-8.9,4-16.3,8.1   c0,0.1-18,9.8-30.6,13c0,0-2,0.4-5.7,1c0,0-2.5,1.2-4.9,1.3c0,0-16.4,2.1-29.2-3.5c0,0-3-1.5-1.7-2.6c0.1,0,2.8-2.2,1.5-2.6   c-0.1,0.1-2.1,0.9-4.1,0.7c0,0.1-6.6-1.5-9.8-6.2c-0.1,0.1,0,281.4,0,337.6H564z").attr({ id: '_x3C_INDIANA_STATE_FILL_x3E_', opacity: '0.6', fill: '#FFF8CC', parent: 'BASE_LAYER', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', '_x3C_INDIANA_STATE_FILL_x3E_');
        var _x3C_INDIANA_MICHIGAN_SERVICE_AREA_FILL_x3E_ = rsr.path("M473.9,119.1V48.6h-40.6V35.7h-25.6V20.9   h-17.4v7.3h-28.1l-1.4,4.1l-1.5,4l-0.9,2.3l-0.9,2.3l-0.9,2.2l-1,2.3l-0.6,1.3l-1.2,2.8l-1.3,2.8l-0.8,1.6l-0.7,1.6l-0.8,1.6   l-2.5,5.1c-3.3,3-8.9,8.6-8.9,8.6c-1.6,2.6-5.7,9-5.6,8.9c-3.6,6-7.6,15.3-7.6,15.3l-1.7,3.7l-2,4.1l-2.7,4.2l-2.8,3.8l-4.5,5.5   l-5.2,5.7l-3.8,4l-1.1,0.9l-3.8,2.9l-3.4,2.5l-3.5,2.5l-3.3,2.2l-0.2,0.1l-0.8,0.4l-5.8,2.8l-3.4,1.7l-0.4,0.2v35.1h13.5v37.2v3.2   l6.3-6.1l0.7-3.1l1.1-1.9l0.5-3l1.6-2.9l0.4-2.4l4.9-3l4.2-2.8h23.9v24.2h7.8v-28.1h55.3v-17.6h12.8v-34.1H483v-17.8H473.9z").attr({ id: '_x3C_INDIANA_MICHIGAN_SERVICE_AREA_FILL_x3E_', opacity: '0.6', fill: '#FFFFFF', parent: 'BASE_LAYER', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', '_x3C_INDIANA_MICHIGAN_SERVICE_AREA_FILL_x3E_');
        var _x3C_SERVICE_AREA_FILL_x3E_ = rsr.path("M 551.5,154.7 512.2,177.2 447.9,177.2 447.9,189.9    468.5,220.7 468.5,307.2 449.9,307.2 438.6,322.5 418.8,322.5 418.8,337.6 402.8,337.6 402.8,395.8 394,395.8 394,414 414.3,414    414.3,423.2 437.6,423.2 437.6,413.6 451.3,413.6 451.3,419.5 508.4,419.5 508.4,431.4 564.4,431.4 564.4,154.7   z").attr({ id: '_x3C_SERVICE_AREA_FILL_x3E_', opacity: '0.6', fill: '#FFFFFF', parent: 'BASE_LAYER', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', '_x3C_SERVICE_AREA_FILL_x3E_');
        var _x3C_WATER_x3E_ = rsr.path("M149,21.9c0.4,6,0.8,12.3-1.2,18c-0.5,1.5-1.2,2.9-1.8,4.4   c-0.9,2.5-1.4,5.1-1.8,7.8c-0.4,3.1-0.7,6.4,0.9,9c0.8,1.2,1.9,2.2,2.5,3.6c0.4,0.8,0.5,1.7,0.8,2.6c0.8,2.8,2.5,5.2,4.3,7.4   c5,6.3,10.8,12.1,14.4,19.3c3.5,6.9,3.7,15.3,7.9,21.8c1,1.6,2.2,3.4,1.6,5.1c-0.4,1.1-1.3,2-1.8,3c-0.7,1.6-0.2,3.4,0.4,5   c2.4,6.5,6.3,12.3,11.4,17l0.3,0.3c-0.2,0.4,0.2,0.4,0,0.1c3.2,4.7,9.8,6.3,9.8,6.2c2,0.1,3.9-0.6,4.1-0.7c1.4,0.4-1.4,2.6-1.5,2.6   c-1.2,1.1,1.7,2.6,1.7,2.6c12.8,5.5,29.2,3.4,29.2,3.4c2.5-0.1,4.9-1.4,4.9-1.4c3.7-0.6,5.7-1,5.7-1c12.6-3.2,30.6-13,30.6-13.1   c7.4-4.1,16.3-8.1,16.3-8.1s9.4-6.3,14.8-10.7c0.2-0.2,17.7-17.7,21.2-27.3c0.2,0,6.4-16,15-28.1c0.2-0.2,5.2-5.7,8.9-8.6   c0,0,10.3-19.8,16.6-40.6l1.5-5.2l1.4-5.8l0.5-2.4l0.6-3.4l0.6-4.9L147.8,0l-1.1,3.9l0.7,2.7l1.1,5.4l0.6,4l0.3,3l-0.3,2.5v0.1   L149,21.9z").attr({ id: '_x3C_WATER_x3E_', opacity: '0.13', fill: '#231F20', parent: 'BASE_LAYER', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', '_x3C_WATER_x3E_');
        BASE_LAYER.attr({ 'id': 'BASE_LAYER', 'name': 'BASE_LAYER' });
        var MAJOR_HIGHWAYS = rsr.set();
        var _x3C_MAJOR_HIGHWAY1_x3E_ = rsr.path("   M392.3,465l11.1,1.6l7.6-4.4h51.5c0,0,0.4-4.8,11.3-4.8c0.6-0.2,30.4,0,30.4,0l21.9-0.1l17.2-1.5c0,0,5.6-3.8,13.3-2.8   c0.2,0.2,3.4,2,4.9,4.4c0,0.2,2.8,1.2,2.8,1.2").attr({ id: '_x3C_MAJOR_HIGHWAY1_x3E_', fill: 'none', stroke: '#EFCC9E', "stroke-width": '1.97', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'MAJOR_HIGHWAYS', 'stroke-opacity': '1' }).data('id', '_x3C_MAJOR_HIGHWAY1_x3E_');
        var _x3C_MAJOR_HIGHWAY2_x3E__2_ = rsr.path("   M743.9,61.6c-0.5,0-1.1-0.1-1.6-0.1c-5.6-0.5-11.3-1.1-16.9-1.6c-7.7-0.7-16.7-2.2-20.5-9c-0.6-1.1-1.1-2.5-2.2-3.2   c-1-0.7-2.2-0.7-3.4-0.7c-20.4-0.4-40.9-4-60,3.3c-5.7,2.2-11.4,4.4-17.1,6.5c-1.6,0.6-3.3,1.3-5.1,1.2c-1.8-0.1-3.4-1-5.1-1.8   c-8.7-4.1-18.8-5.1-28.1-2.9c-3.6,0.8-7.5,2.2-11,0.8c-2.2-0.9-3.9-2.7-6.2-3.4c-1.9-0.6-4-0.3-6-0.1c-8.2,0.8-19.4,3.6-25.9-1.5   c-2.5-2-6.3-1.5-9.2-0.1c-2.9,1.4-5.6,3.4-8.7,4.3c-3.4,0.9-7,0.4-10.5,0c-6.2-0.8-12.4-1.2-18.6-1.4c-10.2-0.3-15.2-1.9-31.7,5   c-10.2,0.6-17,1.4-27.9,3.1c-4.7,0.8-9.7,1.8-14.4,2.9c-2.8,0.7-5.6,0.5-8.5,1c-4.4,0.7-9.3,0.2-13.8-0.1   c-11.9-0.8-23.7,1.9-34.6,6.8c-2.7,1.2-5.3,3.6-8,4.2c-3.5,0.7-6.3-0.3-9.8,1.6c-3.2,1.8-5.7,4.8-6.9,8.3c-0.3,0.8-0.4,1.5-0.6,2.3   c-0.2,0.7-0.3,1.4-0.5,2.1c-2.7,11-12.6,19.4-18.5,29.1c-2.8,4.7-5.4,9.7-9.7,13.2c-5.5,4.4-13.5,6.2-16.6,12.6l-0.5,0.9   c-1.8,1.4-2,3.9-3.1,5.9c-1.8,3.2-5.8,4.4-9.4,4.7c-3.6,0.3-7.4,0-10.8,1.4c-2.6,1.1-4.9,3.1-7.7,3.3c-2.4,0.2-5.4-0.8-7.1,1   c-0.5,0.6-0.8,1.3-1.4,1.8c-0.7,0.7-1.8,0.8-2.8,0.8c-9.2,0.8-18.2,3.7-26.1,8.4l-0.7,0.3").attr({ id: '_x3C_MAJOR_HIGHWAY2_x3E__2_', fill: 'none', stroke: '#EFCC9E', "stroke-width": '1.97', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'MAJOR_HIGHWAYS', 'stroke-opacity': '1' }).data('id', '_x3C_MAJOR_HIGHWAY2_x3E__2_');
        var _x3C_MAJOR_HIGHWAY3_x3E_ = rsr.path("   M357,483.6c1.8-1.2,3.5-2.4,5.1-3.8").attr({ id: '_x3C_MAJOR_HIGHWAY3_x3E_', fill: 'none', stroke: '#EFCC9E', "stroke-width": '1.97', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'MAJOR_HIGHWAYS', 'stroke-opacity': '1' }).data('id', '_x3C_MAJOR_HIGHWAY3_x3E_');
        var _x3C_MAJOR_HIGHWAY4_x3E_ = rsr.path("   M379.4,474.3c0.8,2.8,3.7,4.3,5.3,6.8c0.4,0.6,0.7,1.3,1,1.9c0.1,0.3,0.3,0.6,0.4,0.9").attr({ id: '_x3C_MAJOR_HIGHWAY4_x3E_', fill: 'none', stroke: '#EFCC9E', "stroke-width": '1.97', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'MAJOR_HIGHWAYS', 'stroke-opacity': '1' }).data('id', '_x3C_MAJOR_HIGHWAY4_x3E_');
        var _x3C_MAJOR_HIGHWAY5_x3E_ = rsr.path("   M394,474.3c3.3,2.1,6.3,6.1,8.3,9.4").attr({ id: '_x3C_MAJOR_HIGHWAY5_x3E_', fill: 'none', stroke: '#EFCC9E', "stroke-width": '1.97', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'MAJOR_HIGHWAYS', 'stroke-opacity': '1' }).data('id', '_x3C_MAJOR_HIGHWAY5_x3E_');
        var _x3C_MAJOR_HIGHWAY6_x3E_ = rsr.path("   M186.9,412.3c0.2,0,42.5-4.9,78.7,4.2c0.1,0.2,16.9,4.9,16.9,4.9s5.9,3.2,8.8,7.1c0.5,0.2,2.7,2.7,7.1,2.8c0.5,0.6,9.6,5.5,9.6,5.5   l22.7,14.3h9.1c0,0,11.7,10.1,19.2,12.3c1.6,0.7,1.6,0.7,1.6,0.7").attr({ id: '_x3C_MAJOR_HIGHWAY6_x3E_', fill: 'none', stroke: '#EFCC9E', "stroke-width": '1.97', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'MAJOR_HIGHWAYS', 'stroke-opacity': '1' }).data('id', '_x3C_MAJOR_HIGHWAY6_x3E_');
        var _x3C_MAJOR_HIGHWAY8_x3E_ = rsr.path("   M371.8,482.5c1.5-0.4,3.2-0.1,4.7,0.1c3.6,0.5,7.4,0.6,10.8-0.6c3.4-1.3,6.4-4.4,6.6-8c0.1-1.6-0.4-3.2-0.7-4.8   c-0.9-4.5-0.5-9.1-0.3-13.6c0.1-1.8,0.1-3.9-1.1-5.2c-0.5-0.5-1.1-0.9-1.8-1.3c-4.5-2.6-8.7-3.5-13.1-6.7c0.2,1-1.7,1.3-2.8,2.3   c-0.8,0.7-1.3,0.6-2.3,0.6c-2.1,0.1-4.2-0.2-6.3-0.7c-1.1-0.3-2.4-0.7-3.4-0.1c-1.5,0.8-1.5,2.9-1,4.5c0.5,1.6,1.4,3.2,1,4.8   c-0.2,1-0.8,1.8-1.3,2.6c-2.4,4.9,1.3,10.4,1.4,15.8c0.1,2.4-0.6,4.9,0.2,7.2c1,2.8,4.2,4.6,7,3.9C370.3,483,371,482.7,371.8,482.5   z").attr({ id: '_x3C_MAJOR_HIGHWAY8_x3E_', fill: 'none', stroke: '#EFCC9E', "stroke-width": '1.97', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'MAJOR_HIGHWAYS', 'stroke-opacity': '1' }).data('id', '_x3C_MAJOR_HIGHWAY8_x3E_');
        var _x3C_MAJOR_HIGHWAY7_x3E_ = rsr.path("   M186.5,151.8c1.7,2.8,3.5,5.7,5.2,8.5c0.4,0.7,0.8,1.3,1.4,1.8c0.6,0.5,1.4,0.7,2.2,0.9c3.5,0.7,7.2-0.1,10.7,0.6   c3.5,0.6,7.7,1.3,10.5,2.8c1.7,1.1,1.4,3.7,0.6,5.5c-0.8,1.8-1.9,3.8-1.3,5.7c0.4,1.2,1.4,2.4,0.9,3.5c-0.2,0.6-0.8,1-1.1,1.5   c-1.4,1.8-0.5,4.3,0,6.4c0.5,2.5,0.4,5.2-0.5,7.7c-0.3,0.9-0.7,1.8-0.8,2.7c-0.3,2.2,1.1,4.3,2,6.3c0.9,2.1,1.4,4.4,1.3,6.7v11.3   c1.3,3.8,2.3,7.8,3.6,11.6c0.4,1.1,0.7,2.1,0.9,3.2c0.2,1.3,0.1,2.7,0.1,4.1c0.1,2.9,0.8,6.1-0.6,8.7c-1,1.8-3,3.1-3.2,5.2   c-0.4,2.9,2.9,4.9,4.3,7.5c0,0,7.3,14.5,12.5,26.2c0.2,0.6,9.4,14.3,9.4,14.3l13.8,19.7c0,0,9.6,17.5,22.2,25.4   c0.5,0.5,1,9.7,1,9.7l7.1,6.3c0,0,4.4,7.6,5.4,11.8c0.5,0.5,8.7,4.2,18,14c0.2,1,10.5,12.1,16.5,24.4c0.4,1.5,1.6,6.2,1.6,6.2   s0.1,4.7,4.3,4.9c0.3,0,3.9,0,3.9,0l15.8,17.4c0,0-0.4,8.6,5.9,12.3").attr({ id: '_x3C_MAJOR_HIGHWAY7_x3E_', fill: 'none', stroke: '#EFCC9E', "stroke-width": '1.97', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'MAJOR_HIGHWAYS', 'stroke-opacity': '1' }).data('id', '_x3C_MAJOR_HIGHWAY7_x3E_');
        var _x3C_MAJOR_HIGHWAY9_x3E_ = rsr.path("   M362.6,479.7c0.5-0.4,0.9-0.9,1.3-1.4c0.5-0.6,1-1.1,1.4-1.7c0.9-1.1,1.9-2.3,3.3-2.7c0.8-0.3,1.6-0.3,2.4-0.3c2.8,0,5.6,0,8.4,0").attr({ id: '_x3C_MAJOR_HIGHWAY9_x3E_', fill: 'none', stroke: '#EFCC9E', "stroke-width": '1.97', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'MAJOR_HIGHWAYS', 'stroke-opacity': '1' }).data('id', '_x3C_MAJOR_HIGHWAY9_x3E_');
        var _x3C_MAJOR_HIGHWAY10_x3E_ = rsr.path("   M360.2,456.5c3.4,3,7.7,4.8,12,6c6.7,1.9,13.7,2.8,20.6,2.7").attr({ id: '_x3C_MAJOR_HIGHWAY10_x3E_', fill: 'none', stroke: '#EFCC9E', "stroke-width": '1.97', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'MAJOR_HIGHWAYS', 'stroke-opacity': '1' }).data('id', '_x3C_MAJOR_HIGHWAY10_x3E_');
        var _x3C_MAJOR_HIGHWAY11_x3E_ = rsr.path("   M230,166.4c3.2,1.3,6.3,2.6,9.5,3.8c1.2,0.5,2.6,1,3.8,0.5c0.8-0.4,1.4-1.1,2.1-1.7c2.7-2.3,6.7-1.7,10.3-1.3   c12.3,1.4,25.2-2.4,34.7-10.4c2.2-1.8,4.3-3.9,7.1-4.6c4-1,8.9,1,12-1.8c1.7-1.5,2.1-4.1,3.8-5.6c1.3-1.1,3-1.5,4.7-1.9   c4.5-0.9,8.9-1.8,13.4-2.6c2.5-0.5,5.2-1,7.7-0.3c3.3,0.9,6.2,3.8,9.5,3.1c3.6-0.8,8.5-0.2,12.2-0.3c0.9,0,1.8,0,2.7,0.2   c1.3,0.3,2.5,1,3.7,1.5c2.2,0.9,4.6,1.2,6.9,0.7c2.7-0.5,5.2-1.9,7.9-2.6c3.5-0.9,7.1-0.4,10.6,0c11.6,1.4,23.7-0.5,35.3-0.3   c2.5,0,5,0.1,7.4-0.7c1.3-0.4,2.5-1,3.8-1.4c1.6-0.4,3.4-0.4,5-0.4c19.1,0,38.3,0,57.4,0.1c2.5-0.5,4.9-1,7.4-1.4   c18.7-2.7,38.5,3.3,52.6,15.9c2,1.8,2,1.8,2,1.8").attr({ id: '_x3C_MAJOR_HIGHWAY11_x3E_', fill: 'none', stroke: '#EFCC9E', "stroke-width": '1.97', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'MAJOR_HIGHWAYS', 'stroke-opacity': '1' }).data('id', '_x3C_MAJOR_HIGHWAY11_x3E_');
        var _x3C_MAJOR_HIGHWAY12_x3E_ = rsr.path("   M391.6,448.9c0.9-0.7,1.5-1.6,2-2.5c0.6-0.9,1.1-1.8,1.7-2.8c0.6-0.9,1.2-1.8,1.6-2.8c0.4-1,1.3-1.8,2.3-2.3c1-0.5,2.1-0.8,3.1-1.2   c1.3-0.5,2.5-1.1,3.6-1.8c1.2-0.8,2.3-1.7,3.6-2.3c1.3-0.7,3-0.7,4.3-0.4h14.5c2.3,0.1,3.8-2.1,5.4-3.7c4-4.1,10-5.7,15.7-6.2   c2.1-0.2,4.4-0.3,6.2-1.5c1.6-1.1,2.6-3,3.3-4.8c0.6-1.5,1.3-3.1,1.4-4.7c0.2-1.9-0.3-3.7-0.5-5.6c-0.2-1.9,0.2-3.9,1.5-5.3v-35.3   c-0.3-0.8-0.1-1.7,0.2-2.5c0.3-0.8,0.8-1.5,1-2.4c0.2-1,0.1-2.1-0.4-3c-0.2-0.3-0.4-0.6-0.5-0.9c-0.5-1.1-0.1-2.6,0.1-3.8   c0,0,0.2-14,0-14c0-3.9,1.1-7.3,1.1-7.3l1.6-2.5c0,0,19-24.3,18.9-24.5c1.2-1.8,2.7-5.5,2.5-5.3c0.5-3,4.8-6.2,4.8-6.2v-10.3   l11.2-17.4c1.4-1,1.8-2.9,1.8-4.6c0-1.7-0.4-3.4-0.2-5.1c0.8-4.9,4.8-8.5,8.2-12.1c1.4-1.5,3.8-0.8,5.8-1.1c3.7-0.5,6-4.4,6.2-8.1   c0.2-2.5-0.4-5.1,0.5-7.5c0.5-1.5,1.5-2.7,2.1-4.2c0.6-1.4,1.4-3.2,0.4-4.4v-14l4.5-12.3v-24c-0.3-1.2-0.1-2.5,0.6-3.5   c0.3-0.5,0.7-1,1-1.5c0.3-0.7,0.2-1.4,0.2-2.2c0-2.3,0.2-4.8,1.7-6.5c0.8-0.9,1.9-1.5,2.7-2.5c0.9-1.2,1-2.8,1.1-4.4   c0.3-4.5,0.5-8.9,0.8-13.4c1.3-7.1,1.1-8.9,0.8-13c-0.2-2.6-0.9-5.1-0.5-7.7c0.5-3.5,2.8-6.6,3.5-10c1-4.5-0.8-9.1-1.8-13.6   c-2-8.1-1.9-16.5-1.8-24.8c0-6.4,0.1-12.8,0.1-19.3c0-3.2,0.1-6.5,1.8-9.2c0.6-0.9,1.4-1.8,1.6-2.8c0.6-2.1-1-4.2-1.5-6.3   c-1-4.4,3.8-9.5,8.1-8.1c1.4,0.5,2.6,0.2,4-0.5c2.2-1.1,3.7-3.5,4.3-5.8c0.4-1.6,0.7-3.2,1-4.8c0.3-1.5,0.9-2.8,1.3-4.2   c0.2-1,0.2-2,0.2-3.1c0-0.4-0.1-0.8,0.1-1.1").attr({ id: '_x3C_MAJOR_HIGHWAY12_x3E_', fill: 'none', stroke: '#EFCC9E', "stroke-width": '1.97', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'MAJOR_HIGHWAYS', 'stroke-opacity': '1' }).data('id', '_x3C_MAJOR_HIGHWAY12_x3E_');
        var _x3C_MAJOR_HIGHWAY13_x3E_ = rsr.path("   M372.7,0c-0.4,1.4-0.7,3.3-1.1,6.2c-0.6,4.1-3.1,15.6-4.5,19.8c-4.8,14.1-7.4,20.4-14,32.6c0,0-7.1,5.7-2.9,15.7").attr({ id: '_x3C_MAJOR_HIGHWAY13_x3E_', fill: 'none', stroke: '#EFCC9E', "stroke-width": '1.97', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'MAJOR_HIGHWAYS', 'stroke-opacity': '1' }).data('id', '_x3C_MAJOR_HIGHWAY13_x3E_');
        var _x3C_MAJOR_HIGHWAY14_x3E_ = rsr.path("   M217,171.2c-3.4-0.6-6.8-0.9-10.3-1c0.1-0.3-0.4-0.5-0.7-0.5c-6.4-0.4-12.8-0.9-19.2-1.6").attr({ id: '_x3C_MAJOR_HIGHWAY14_x3E_', fill: 'none', stroke: '#EFCC9E', "stroke-width": '1.97', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'MAJOR_HIGHWAYS', 'stroke-opacity': '1' }).data('id', '_x3C_MAJOR_HIGHWAY14_x3E_');
        var _x3C_MAJOR_HIGHWAY15_x3E_ = rsr.path("   M331.1,90.1c4.1-0.5,7.2-4.1,11.2-5.1c3.7-2.4,6.6-6.1,8.1-10.2").attr({ id: '_x3C_MAJOR_HIGHWAY15_x3E_', fill: 'none', stroke: '#EFCC9E', "stroke-width": '1.97', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'MAJOR_HIGHWAYS', 'stroke-opacity': '1' }).data('id', '_x3C_MAJOR_HIGHWAY15_x3E_');
        var _x3C_MAJOR_HIGHWAY16_x3E_ = rsr.path("   M603.9,53.1c5.4-2.5,11.6-2.4,17.6-2.1c6,0.3,12.1,0.9,17.8-0.7").attr({ id: '_x3C_MAJOR_HIGHWAY16_x3E_', fill: 'none', stroke: '#EFCC9E', "stroke-width": '1.97', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'MAJOR_HIGHWAYS', 'stroke-opacity': '1' }).data('id', '_x3C_MAJOR_HIGHWAY16_x3E_');
        var _x3C_MAJOR_HIGHWAY17_x3E_ = rsr.path("   M498.1,52c2.4-1.3,2.8-4.7,4.8-6.6c1.9-1.8,4.8-2,7.4-2c1.8,0,3.6,0,5.4-0.1c1.3,0,2.6,0,3.9,0.2c3.8,0.7,7.1,3.7,11,3.9").attr({ id: '_x3C_MAJOR_HIGHWAY17_x3E_', fill: 'none', stroke: '#EFCC9E', "stroke-width": '1.97', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'MAJOR_HIGHWAYS', 'stroke-opacity': '1' }).data('id', '_x3C_MAJOR_HIGHWAY17_x3E_');
        var _x3C_MAJOR_HIGHWAY18_x3E_ = rsr.path("   M447.9,57.1c2.1-1.4,3.1-4.1,5-5.9c2.4-2.5,6.4-3.2,9.6-1.9c2.3,1,4.2,2.9,6.7,3").attr({ id: '_x3C_MAJOR_HIGHWAY18_x3E_', fill: 'none', stroke: '#EFCC9E', "stroke-width": '1.97', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'MAJOR_HIGHWAYS', 'stroke-opacity': '1' }).data('id', '_x3C_MAJOR_HIGHWAY18_x3E_');
        MAJOR_HIGHWAYS.attr({ 'id': 'MAJOR_HIGHWAYS', 'name': 'MAJOR_HIGHWAYS' });
        var NON_SERVICE_COUNTIES = rsr.set();
        var path_k = rsr.path("M230.3,223.1c0,0,7.5-5.4,13.2-5.5   c0.1,0.1,5.2-0.6,13.1,5.5c0,0,3.3,2.2,6.6,4.9c0.1,0.1,3.1,0,3.1,0l3.8-3.4v-78.7l-5.5,2.8l-4,1.9l-6.3,2.8l-5.9,2.3l-5.3,1.8   l-4.4,1l-3.5,0.6l-4.9,1.4V223.1z").attr({ fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'NON_SERVICE_COUNTIES', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', 'path_k');
        var path_l = rsr.path("M 388.9,236.2 334.3,236.2    334.3,279.8 376,279.8 376,265.7 407.7,265.7 407.7,257.7 397,257.7 397,250.3 388.9,250.3   z").attr({ fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'NON_SERVICE_COUNTIES', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', 'path_l');
        var path_m = rsr.path("M 418.8,337.6 418.8,322.5    407.7,322.5 407.7,265.7 376,265.7 376,337.6   z").attr({ fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'NON_SERVICE_COUNTIES', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', 'path_m');
        var path_n = rsr.path("M 388.9,236.2 388.9,250.3 397,250.3    397,257.7 443.3,257.7 443.3,234.2 448.1,234.2 448.1,191.5 392,191.5 392,236.1   z").attr({ fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'NON_SERVICE_COUNTIES', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', 'path_n');
        var path_o = rsr.path("M 246.7,337.6 292.4,337.6 292.4,321    294.4,321 295.7,316.7 293.7,315.4 295.7,311.7 293.7,309 319,309 319,279.8 262.3,279.8 262.3,291.6 246.7,291.6   z").attr({ fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'NON_SERVICE_COUNTIES', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', 'path_o');
        var path_p = rsr.path("M 564.4,431.4 564.4,477.6 534,477.6    534,480.2 513.2,480.2 513.2,466.6 508.4,466.6 508.4,431.4   z").attr({ fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'NON_SERVICE_COUNTIES', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', 'path_p');
        var path_q = rsr.path("M 319,309 327.1,309 327.1,316.2    347.6,316.2 347.6,337.6 376,337.6 376,279.8 319,279.8   z").attr({ fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'NON_SERVICE_COUNTIES', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', 'path_q');
        var path_r = rsr.path("M 347.6,360.3 356.9,360.3    356.9,367.9 359.8,367.9 361.7,369.7 365.9,369.7 365.9,444.2 303,444.2 303,360.3   z").attr({ fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'NON_SERVICE_COUNTIES', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', 'path_r');
        var path_s = rsr.path("M 292.4,337.6 303,337.6 303,360.3    347.6,360.3 347.6,316.2 327.1,316.2 327.1,309 293.7,309 295.7,311.7 293.7,315.4 295.7,316.7 294.4,321 292.4,321   z").attr({ fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'NON_SERVICE_COUNTIES', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', 'path_s');
        var rect_t = rsr.rect(246.7, 337.6, 56.2, 58.2).attr({ x: '246.7', y: '337.6', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'NON_SERVICE_COUNTIES', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', 'rect_t');
        var rect_u = rsr.rect(246.7, 395.8, 56.2, 58.9).attr({ x: '246.7', y: '395.8', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'NON_SERVICE_COUNTIES', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', 'rect_u');
        var path_v = rsr.path("M258.4,483.7c0-15.1,0-29,0-29H303   c0,0,0,17.5,0,29.2").attr({ fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'NON_SERVICE_COUNTIES', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', 'path_v');
        var path_w = rsr.path("M 186.9,352.5 246.7,352.5    246.7,308.3 186.9,308.3   z").attr({ fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'NON_SERVICE_COUNTIES', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', 'path_w');
        var rect_x = rsr.rect(498.1, 85.3, 64.8, 51.6).attr({ x: '498.1', y: '85.3', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'NON_SERVICE_COUNTIES', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', 'rect_x');
        var path_y = rsr.path("M354.3,444.2H303v10.5c0,0,0,17.4,0,29").attr({ fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'NON_SERVICE_COUNTIES', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', 'path_y');
        var path_z = rsr.path("M207.8,484.1c0.8-1.5-1-3.2-1.1-4.9   c-0.1-1.8,1.6-3.4,1-5.1c-0.2-0.5-0.6-0.9-0.8-1.5c-0.2-0.5-0.4-0.9,0.1-1.2c0.2-0.8,0.7-1.5,1-2.3c1-3.2-2.5-7-0.5-9.7   c0.6-0.7,1.4-1.2,2.2-1.7c0.7-0.6,1.4-1.4,1.2-2.3c-0.3-1.4-2.1-1.7-3.4-1.7c-0.2-1.7,2.3-3.1,1.6-4.6c-0.3-0.6-0.9-0.9-1.5-1.1   c-1.2-0.5-2.5-1-3.7-1.5c0.1-0.9-0.4-1.7-1.2-2.1c-0.7-0.4-1.6-0.6-2.5-0.7c0.5-0.6,0.9-1.2,1.1-2c0.2-0.7-0.1-1.6-0.8-2   c-0.2-0.1-0.5-0.1-0.7-0.3c-0.4-0.5,0.1-1.1,0.5-1.7c1.9-2.6-0.4-6.3,0.2-9.4c0.1-0.7,0.4-1.3,0.5-2c0.1-0.5,0.1-1,0.1-1.4   c0.1-0.8,0.5-1.6,0.9-2.4c1-2.3,1.4-4.8,1.8-7.2c0.5-2.7,0.7-5.9-1.5-7.5c-1.1-0.8-2.9-1.2-3-2.6c-0.1-0.6,0.3-1.2,0.6-1.8   c0.9-1.4,2-2.7,3.2-3.9c2-1.9,5.1-2.1,7.6-3.2c0.9-0.4,1.8-0.7,2.4-1.5c0.7-0.9,0.9-2.1,1.3-3.1s1.1-2.2,2.2-2.4   c0.5-0.1,0.9,0,1.4,0c1.8-0.2,2.5-2.3,3.4-3.9c1.4-2.5,3.9-4.1,6.3-5.6c2.5-1.5,5-3.1,7.9-3.6c1.8-0.3,3.6-0.2,5.3-0.6   c2.6-0.7,4.9-2.7,5.8-5.3").attr({ fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'NON_SERVICE_COUNTIES', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', 'path_z');
        var rect_aa = rsr.rect(658.8, 28.2, 80.2, 55.9).attr({ x: '658.8', y: '28.2', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'NON_SERVICE_COUNTIES', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', 'rect_aa');
        var rect_ab = rsr.rect(498.1, 28.2, 79.4, 57.1).attr({ x: '498.1', y: '28.2', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'NON_SERVICE_COUNTIES', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', 'rect_ab');
        var _x3C_Path_x3E_ = rsr.path("M334.3,236.2H270v-11.6   c0,0,6.6-2.7,11.6-3.9c0.2,0,6.1-1.3,9-3.2c0.2,0,3.9-5.4,6.3-6.1c0,0.2,0.2-3.1,1.8-5c0-0.4,0-3.1,1.1-3.5c-0.4,0,1.3-1,1.1-4   c-0.2-1,3.1-3,4.4-3.2l5-3.3h23.9V236.2z").attr({ id: '_x3C_Path_x3E_', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'NON_SERVICE_COUNTIES', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_Path_x3E_');
        NON_SERVICE_COUNTIES.attr({ 'id': 'NON_SERVICE_COUNTIES', 'name': 'NON_SERVICE_COUNTIES' });
        var group_a = rsr.set();
        group_a.attr({ 'parent': 'NON_SERVICE_COUNTIES', 'name': 'group_a' });
        var SERVICE_COUNTIES_INDIANA = rsr.set();
        var _x3C_WHITLEY_x3E_ = rsr.path("M    464.1,215.4 448.1,215.4 448.1,234.2 443.3,234.2 443.3,264.6 492.2,264.6 492.2,235.4 495.8,235.4 495.8,220.7 464.1,220.7   z").attr({ id: '_x3C_WHITLEY_x3E_', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_INDIANA', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_WHITLEY_x3E_');
        var _x3C_WELLS_x3E_ = rsr.path("M 492.2,337.6    529.7,337.6 529.7,278.9 492.2,278.9 492.2,322.5 477.4,322.5 477.4,337.6   z").attr({ id: '_x3C_WELLS_x3E_', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_INDIANA', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_WELLS_x3E_');
        var _x3C_WABASH_x3E_ = rsr.path("M 407.7,322.5    449.9,322.5 449.9,264.6 443.3,264.6 443.3,257.7 407.7,257.7   z").attr({ id: '_x3C_WABASH_x3E_', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_INDIANA', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_WABASH_x3E_');
        var _x3C_TIPTON_x3E_ = rsr.path("M 365.9,366.2    365.9,363.8 418.8,363.8 418.8,394.7 418.8,395.8 365.9,395.8   z").attr({ id: '_x3C_TIPTON_x3E_', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_INDIANA', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_TIPTON_x3E_');
        var _x3C_STEUBEN_x3E_ = rsr.rect(512.2, 136.9, 52.2, 40.3).attr({ id: '_x3C_STEUBEN_x3E_', x: '512.2', y: '136.9', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_INDIANA', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_STEUBEN_x3E_');
        var _x3C_SAINT_JOSEPH_x3E__1_ = rsr.path("M    326,136.9 326,139.6 326,155.9 331.9,155.9 331.9,168.4 330,170.3 330,177.2 326,177.2 326,185.8 326,192.4 334.3,192.4    334.3,185.8 334.3,184.7 392,184.7 392,136.9   z").attr({ id: '_x3C_SAINT_JOSEPH_x3E__1_', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_INDIANA', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_SAINT_JOSEPH_x3E__1_');
        var _x3C_RANDOLPH_x3E_ = rsr.path("M    508.4,419.5 508.4,431.4 564.4,431.4 564.4,380.9 508.4,380.9   z").attr({ id: '_x3C_RANDOLPH_x3E_', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_INDIANA', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_RANDOLPH_x3E_');
        var _x3C_NOBLE_x3E_ = rsr.path("M 448.1,177.2    448.1,215.4 464.1,215.4 464.1,220.7 512.2,220.7 512.2,177.2   z").attr({ id: '_x3C_NOBLE_x3E_', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_INDIANA', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_NOBLE_x3E_');
        var _x3C_MARSHALL_x3E_ = rsr.rect(334.3, 184.7, 57.7, 51.6).attr({ id: '_x3C_MARSHALL_x3E_', x: '334.3', y: '184.7', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_INDIANA', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_MARSHALL_x3E_');
        var _x3C_MADISON_x3E_ = rsr.rect(418.8, 369, 39.5, 72.4).attr({ id: '_x3C_MADISON_x3E_', x: '418.8', y: '369', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_INDIANA', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_MADISON_x3E_');
        var _x3C_LAPORTE_x3E_ = rsr.path("M270,224.6v-78.7   l1.5-0.8l1.3-0.7l2.2-1.2l2.6-1.3l3.4-1.7l5.8-2.8l0.8-0.4l0.2-0.1l38.1,0v19h5.9v12.6l-1.8,1.8v6.9H326v15.3h-15.5l-5,3.3   c0,0-1,0.2-1.9,0.8c0,0-1.7,1.1-2.2,1.7c0,0-0.4,0.3-0.3,1c0,0,0,2.1-0.9,3.3c0,0-0.1,0.2-0.1,0.2l-0.1,0.2c0,0-0.4,0.2-0.6,0.5   c0,0-0.5,0.7-0.5,3c0,0-1.5,1.6-1.8,5c0,0-1.3-0.2-6.3,6.1c0,0-2.7,1.4-4.8,2c0,0-4.7,1-8.5,2.3C277.4,221.9,270.6,224.3,270,224.6   z").attr({ id: '_x3C_LAPORTE_x3E_', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_INDIANA', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_LAPORTE_x3E_');
        var _x3C_LAGRANGE_x3E_ = rsr.rect(448.1, 136.9, 64.1, 40.3).attr({ id: '_x3C_LAGRANGE_x3E_', x: '448.1', y: '136.9', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_INDIANA', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_LAGRANGE_x3E_');
        var _x3C_JAY_x3E_ = rsr.path("M 508.4,380.9    564.4,380.9 564.4,337.6 511.1,337.6 511.1,349.9 510.5,352.9 510.5,369 508.4,369   z").attr({ id: '_x3C_JAY_x3E_', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_INDIANA', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_JAY_x3E_');
        var _x3C_HUNTINGTON_x3E_ = rsr.rect(449.9, 264.6, 42.4, 57.9).attr({ id: '_x3C_HUNTINGTON_x3E_', x: '449.9', y: '264.6', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_INDIANA', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_HUNTINGTON_x3E_');
        var _x3C_HOWARD_x3E_ = rsr.path("M 376.4,337.6    347.6,337.6 347.6,360.3 356.9,360.3 356.9,367.9 359.8,367.9 361.7,369.7 365.9,369.7 365.9,363.8 418.8,363.8 418.8,337.6   z").attr({ id: '_x3C_HOWARD_x3E_', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_INDIANA', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_HOWARD_x3E_');
        var _x3C_HENRY_x3E_ = rsr.path("M 458.3,419.5    458.3,453.7 455.5,453.7 455.5,466.6 508.4,466.6 508.4,419.5   z").attr({ id: '_x3C_HENRY_x3E_', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_INDIANA', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_HENRY_x3E_');
        var _x3C_HAMILTON_x3E_ = rsr.path("M    365.9,399.4 365.9,395.8 418.8,395.8 418.8,442.5 418.8,444.2 365.9,444.2   z").attr({ id: '_x3C_HAMILTON_x3E_', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_INDIANA', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_HAMILTON_x3E_');
        var _x3C_GRANT_x3E_ = rsr.rect(418.8, 322.5, 58.6, 46.5).attr({ id: '_x3C_GRANT_x3E_', x: '418.8', y: '322.5', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_INDIANA', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_GRANT_x3E_');
        var _x3C_ELKHART_x3E_ = rsr.rect(392, 136.9, 56.1, 54.6).attr({ id: '_x3C_ELKHART_x3E_', x: '392', y: '136.9', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_INDIANA', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_ELKHART_x3E_');
        var _x3C_DELAWARE_x3E_ = rsr.rect(458.3, 369, 50.1, 50.5).attr({ id: '_x3C_DELAWARE_x3E_', x: '458.3', y: '369', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_INDIANA', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_DELAWARE_x3E_');
        var _x3C_DEKALB_x3E_ = rsr.rect(512.2, 177.2, 52.2, 43.6).attr({ id: '_x3C_DEKALB_x3E_', x: '512.2', y: '177.2', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_INDIANA', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_DEKALB_x3E_');
        var _x3C_BLACKFORD_x3E_ = rsr.path("M    477.4,369 510.5,369 510.5,352.9 511.1,349.9 511.1,337.6 477.4,337.6   z").attr({ id: '_x3C_BLACKFORD_x3E_', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_INDIANA', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_BLACKFORD_x3E_');
        var _x3C_ALLEN_x3E_ = rsr.path("M 492.2,264.6    492.2,278.9 564.4,278.9 564.4,220.7 495.8,220.7 495.8,235.4 492.2,235.4   z").attr({ id: '_x3C_ALLEN_x3E_', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_INDIANA', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_ALLEN_x3E_');
        var _x3C_ADAMS_x3E_ = rsr.rect(529.7, 278.9, 34.6, 58.7).attr({ id: '_x3C_ADAMS_x3E_', x: '529.7', y: '278.9', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_INDIANA', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_ADAMS_x3E_');
        SERVICE_COUNTIES_INDIANA.attr({ 'id': 'SERVICE_COUNTIES_INDIANA', 'name': 'SERVICE_COUNTIES_INDIANA' });
        var SERVICE_COUNTIES_MICHIGAN = rsr.set();
        var _x3C_KALAMAZOO_x3E_ = rsr.rect(433.3, 28.2, 64.8, 57.1).attr({ id: '_x3C_KALAMAZOO_x3E_', x: '433.3', y: '28.2', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_MICHIGAN', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_KALAMAZOO_x3E_');
        var _x3C_CASS_x3E_ = rsr.path("M    433.3,85.3 370.1,85.3 370.1,136.9 429.8,136.9 429.8,134.3 433.3,130.7   z").attr({ id: '_x3C_CASS_x3E_', fill: 'none', stroke: '#DBD8BD', "stroke-linecap": 'round', "stroke-linejoin": 'round', "stroke-miterlimit": '3.8637', parent: 'SERVICE_COUNTIES_MICHIGAN', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_CASS_x3E_');
        var _x3C_SAINT_JOSEPH_x3E_ = rsr.path("M    498.1,85.3 433.3,85.3 433.3,130.7 429.8,134.3 429.8,136.9 498.1,136.9   z").attr({ id: '_x3C_SAINT_JOSEPH_x3E_', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_MICHIGAN', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_SAINT_JOSEPH_x3E_');
        var _x3C_VAN_BURREN_x3E_ = rsr.path("M    433.3,28.2 362.2,28.2 360.8,32.3 359.3,36.3 358.3,38.6 357.4,40.9 356.5,43.1 355.6,45.4 355,46.7 353.8,49.5 352.5,52.3    351.8,53.9 351,55.5 350.3,57.1 370.1,57.1 370.1,85.3 433.3,85.3   z").attr({ id: '_x3C_VAN_BURREN_x3E_', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_MICHIGAN', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_VAN_BURREN_x3E_');
        var _x3C_ALLEGAN_x3E_ = rsr.path("M368.9,0   c-0.1,0.8-0.2,2.1-0.2,2.1l-0.4,2.7l-0.6,3.4l-0.6,2.8l-1.2,4.8l-1,3.5l-0.8,2.6l-0.9,2.8l-1.2,3.6h101.7").attr({ id: '_x3C_ALLEGAN_x3E_', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_MICHIGAN', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_ALLEGAN_x3E_');
        var _x3C_BERRIEN_x3E_ = rsr.path("M370.1,57.1v79.8   h-82.3l3.3-2.2l3.5-2.5l3.4-2.5l3.8-2.9l1.1-0.9l3.8-4l5.2-5.7l4.5-5.5l2.8-3.8l2.7-4.2l2-4.1l1.7-3.7c0,0,4-9.3,7.6-15.3   c-0.1,0.1,4-6.3,5.6-8.9c0,0,5.5-5.6,8.9-8.6l2.5-5.1H370.1z").attr({ id: '_x3C_BERRIEN_x3E_', fill: 'none', stroke: '#C9C79D', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'SERVICE_COUNTIES_MICHIGAN', 'stroke-width': '1', 'stroke-opacity': '1' }).data('id', '_x3C_BERRIEN_x3E_');
        SERVICE_COUNTIES_MICHIGAN.attr({ 'id': 'SERVICE_COUNTIES_MICHIGAN', 'name': 'SERVICE_COUNTIES_MICHIGAN' });
        var STATE_BORDERS_x2F_SERVICE_BOUNDARY = rsr.set();
        var _x3C_STATE_BORDER_LINE_x3E__1_ = rsr.path("M190.1,149.5   c0,0-2.6-1.9-3.1-3.2").attr({ id: '_x3C_STATE_BORDER_LINE_x3E__1_', fill: 'none', stroke: '#FFFFFF', "stroke-miterlimit": '10', parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', '_x3C_STATE_BORDER_LINE_x3E__1_');
        STATE_BORDERS_x2F_SERVICE_BOUNDARY.attr({ 'id': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY', 'name': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY' });
        var _x3C_STATE_BORDER_LINE_x3E__3_ = rsr.set();
        _x3C_STATE_BORDER_LINE_x3E__3_.attr({ 'id': '_x3C_STATE_BORDER_LINE_x3E__3_', 'parent': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY', 'name': '_x3C_STATE_BORDER_LINE_x3E__3_' });
        var _x3C_INDIANA_STATE_BORDER_x3E_ = rsr.set();
        var path_ac = rsr.path("M187,483.9    c0-108.8-0.1-337.5,0-337.6c3.2,4.7,9.8,6.3,9.8,6.2c2,0.1,3.9-0.6,4.1-0.7c1.4,0.4-1.4,2.6-1.5,2.6c-1.2,1.1,1.7,2.6,1.7,2.6    c12.8,5.5,29.2,3.4,29.2,3.4c2.5-0.1,4.9-1.4,4.9-1.4c3.7-0.6,5.7-1,5.7-1c12.6-3.2,30.6-13,30.6-13.1c7.4-4.1,16.3-8.1,16.3-8.1    h276.5V484").attr({ fill: 'none', stroke: '#C9C79D', "stroke-width": '4', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY', 'stroke-opacity': '1' }).data('id', 'path_ac');
        var path_ad = rsr.path("M187,483.9c0-108.8-0.1-337.5,0-337.6    c3.2,4.7,9.8,6.3,9.8,6.2c2,0.1,3.9-0.6,4.1-0.7c1.4,0.4-1.4,2.6-1.5,2.6c-1.2,1.1,1.7,2.6,1.7,2.6c12.8,5.5,29.2,3.4,29.2,3.4    c2.5-0.1,4.9-1.4,4.9-1.4c3.7-0.6,5.7-1,5.7-1c12.6-3.2,30.6-13,30.6-13.1c7.4-4.1,16.3-8.1,16.3-8.1h276.5V484").attr({ fill: 'none', stroke: '#FFFFFF', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'path_ad');
        _x3C_INDIANA_STATE_BORDER_x3E_.attr({ 'id': '_x3C_INDIANA_STATE_BORDER_x3E_', 'parent': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY', 'name': '_x3C_INDIANA_STATE_BORDER_x3E_' });
        var _x3C_LAKE_BORDER_x3E__1_ = rsr.set();
        var path_ae = rsr.path("M147.8,0l-1.1,3.9    l0.7,2.7l1.1,5.4l0.6,4l0.3,3l-0.3,2.5v0.1l-0.1,0.3c0.4,6,0.8,12.3-1.2,18c-0.5,1.5-1.2,2.9-1.8,4.4c-0.9,2.5-1.4,5.1-1.8,7.8    c-0.4,3.1-0.7,6.4,0.9,9c0.8,1.2,1.9,2.2,2.5,3.6c0.4,0.8,0.5,1.7,0.8,2.6c0.8,2.8,2.5,5.2,4.3,7.4c5,6.3,10.8,12.1,14.4,19.3    c3.5,6.9,3.7,15.3,7.9,21.8c1,1.6,2.2,3.4,1.6,5.1c-0.4,1.1-1.3,2-1.8,3c-0.7,1.6-0.2,3.4,0.4,5c2.4,6.5,6.3,12.3,11.4,17l0.3,0.3    c0,0,0.2,0.4,0,0.1c3.2,4.7,9.8,6.3,9.8,6.2c2,0.1,3.9-0.6,4.1-0.7c1.4,0.4-1.4,2.6-1.5,2.6c-1.2,1.1,1.7,2.6,1.7,2.6    c12.8,5.5,29.2,3.4,29.2,3.4c2.5-0.1,4.9-1.4,4.9-1.4c3.7-0.6,5.7-1,5.7-1c12.6-3.2,30.6-13,30.6-13.1c7.4-4.1,16.3-8.1,16.3-8.1    s9.4-6.3,14.8-10.7c0.2-0.2,17.7-17.7,21.2-27.3c0.2,0,6.4-16,15-28.1c0.2-0.2,5.2-5.7,8.9-8.6c0,0,10.3-19.8,16.6-40.6l1.5-5.2    l1.4-5.8l0.5-2.4l0.6-3.4l0.6-4.9").attr({ fill: 'none', stroke: '#C9C79D', "stroke-width": '4', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY', 'stroke-opacity': '1' }).data('id', 'path_ae');
        var path_af = rsr.path("M147.8,0l-1.1,3.9l0.7,2.7l1.1,5.4l0.6,4    l0.3,3l-0.3,2.5v0.1l-0.1,0.3c0.4,6,0.8,12.3-1.2,18c-0.5,1.5-1.2,2.9-1.8,4.4c-0.9,2.5-1.4,5.1-1.8,7.8c-0.4,3.1-0.7,6.4,0.9,9    c0.8,1.2,1.9,2.2,2.5,3.6c0.4,0.8,0.5,1.7,0.8,2.6c0.8,2.8,2.5,5.2,4.3,7.4c5,6.3,10.8,12.1,14.4,19.3c3.5,6.9,3.7,15.3,7.9,21.8    c1,1.6,2.2,3.4,1.6,5.1c-0.4,1.1-1.3,2-1.8,3c-0.7,1.6-0.2,3.4,0.4,5c2.4,6.5,6.3,12.3,11.4,17l0.3,0.3c0,0,0.2,0.4,0,0.1    c3.2,4.7,9.8,6.3,9.8,6.2c2,0.1,3.9-0.6,4.1-0.7c1.4,0.4-1.4,2.6-1.5,2.6c-1.2,1.1,1.7,2.6,1.7,2.6c12.8,5.5,29.2,3.4,29.2,3.4    c2.5-0.1,4.9-1.4,4.9-1.4c3.7-0.6,5.7-1,5.7-1c12.6-3.2,30.6-13,30.6-13.1c7.4-4.1,16.3-8.1,16.3-8.1s9.4-6.3,14.8-10.7    c0.2-0.2,17.7-17.7,21.2-27.3c0.2,0,6.4-16,15-28.1c0.2-0.2,5.2-5.7,8.9-8.6c0,0,10.3-19.8,16.6-40.6l1.5-5.2l1.4-5.8l0.5-2.4    l0.6-3.4l0.6-4.9").attr({ fill: 'none', stroke: '#FFFFFF', "stroke-linecap": 'round', "stroke-linejoin": 'round', parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'path_af');
        _x3C_LAKE_BORDER_x3E__1_.attr({ 'id': '_x3C_LAKE_BORDER_x3E__1_', 'parent': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY', 'name': '_x3C_LAKE_BORDER_x3E__1_' });
        var _x3C_SERVICE_BOUNDARY_x3E_ = rsr.set();
        var path_ag = rsr.path("M     551.5,154.7 512.2,177.2 447.9,177.2 447.9,189.9 468.5,220.7 468.5,307.2 449.9,307.2 438.6,322.5 418.8,322.5 418.8,337.6     402.8,337.6 402.8,395.8 394,395.8 394,414 414.3,414 414.3,423.2 437.6,423.2 437.6,413.6 451.3,413.6 451.3,419.5 508.4,419.5     508.4,431.4 564.4,431.4 564.4,154.7    z").attr({ fill: 'none', stroke: '#C9C79D', "stroke-width": '5', "stroke-linecap": 'square', "stroke-linejoin": 'round', "stroke-miterlimit": '10', parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY', 'stroke-opacity': '1' }).data('id', 'path_ag');
        var path_ah = rsr.path("M     551.5,154.7 512.2,177.2 447.9,177.2 447.9,189.9 468.5,220.7 468.5,307.2 449.9,307.2 438.6,322.5 418.8,322.5 418.8,337.6     402.8,337.6 402.8,395.8 394,395.8 394,414 414.3,414 414.3,423.2 437.6,423.2 437.6,413.6 451.3,413.6 451.3,419.5 508.4,419.5     508.4,431.4 564.4,431.4 564.4,154.7    z").attr({ fill: 'none', stroke: '#CCEDEB', "stroke-width": '2', "stroke-linecap": 'square', "stroke-linejoin": 'round', "stroke-miterlimit": '10', parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY', 'stroke-opacity': '1' }).data('id', 'path_ah');
        var path_ai = rsr.path("M     551.5,154.7 512.2,177.2 447.9,177.2 447.9,189.9 468.5,220.7 468.5,307.2 449.9,307.2 438.6,322.5 418.8,322.5 418.8,337.6     402.8,337.6 402.8,395.8 394,395.8 394,414 414.3,414 414.3,423.2 437.6,423.2 437.6,413.6 451.3,413.6 451.3,419.5 508.4,419.5     508.4,431.4 564.4,431.4 564.4,154.7    z").attr({ fill: 'none', stroke: '#C9C79D', "stroke-width": '3', "stroke-linecap": 'square', "stroke-linejoin": 'round', "stroke-miterlimit": '10', "stroke-dasharray": '0,5.5', parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY', 'stroke-opacity': '1' }).data('id', 'path_ai');
        _x3C_SERVICE_BOUNDARY_x3E_.attr({ 'id': '_x3C_SERVICE_BOUNDARY_x3E_', 'parent': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY', 'name': '_x3C_SERVICE_BOUNDARY_x3E_' });
        var _x3C_INDIANA_MICHIGAN_SERVICE_BOUNDARY_x3E_ = rsr.set();
        var path_aj = rsr.path("    M473.9,119.1V48.6h-40.6V35.7h-25.6V20.9h-17.4v7.3h-28.1l-1.4,4.1l-1.5,4l-0.9,2.3l-0.9,2.3l-0.9,2.2l-1,2.3l-0.6,1.3l-1.2,2.8    l-1.3,2.8l-0.8,1.6l-0.7,1.6l-0.8,1.6l-2.5,5.1c-3.3,3-8.9,8.6-8.9,8.6c-1.6,2.6-5.7,9-5.6,8.9c-3.6,6-7.6,15.3-7.6,15.3l-1.7,3.7    l-2,4.1l-2.7,4.2l-2.8,3.8l-4.5,5.5l-5.2,5.7l-3.8,4l-1.1,0.9l-3.8,2.9l-3.4,2.5l-3.5,2.5l-3.3,2.2l-0.2,0.1l-0.8,0.4l-5.8,2.8    l-3.4,1.7l-0.4,0.2v35.1h13.5v37.2v3.2l6.3-6.1l0.7-3.1l1.1-1.9l0.5-3l1.6-2.9l0.4-2.4l4.9-3l4.2-2.8h23.9v24.2h7.8v-28.1h55.3    v-17.6h12.8v-34.1H483v-17.8H473.9z").attr({ fill: 'none', stroke: '#C9C79D', "stroke-width": '5', "stroke-linecap": 'square', "stroke-linejoin": 'round', "stroke-miterlimit": '10', parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY', 'stroke-opacity': '1' }).data('id', 'path_aj');
        var path_ak = rsr.path("    M473.9,119.1V48.6h-40.6V35.7h-25.6V20.9h-17.4v7.3h-28.1l-1.4,4.1l-1.5,4l-0.9,2.3l-0.9,2.3l-0.9,2.2l-1,2.3l-0.6,1.3l-1.2,2.8    l-1.3,2.8l-0.8,1.6l-0.7,1.6l-0.8,1.6l-2.5,5.1c-3.3,3-8.9,8.6-8.9,8.6c-1.6,2.6-5.7,9-5.6,8.9c-3.6,6-7.6,15.3-7.6,15.3l-1.7,3.7    l-2,4.1l-2.7,4.2l-2.8,3.8l-4.5,5.5l-5.2,5.7l-3.8,4l-1.1,0.9l-3.8,2.9l-3.4,2.5l-3.5,2.5l-3.3,2.2l-0.2,0.1l-0.8,0.4l-5.8,2.8    l-3.4,1.7l-0.4,0.2v35.1h13.5v37.2v3.2l6.3-6.1l0.7-3.1l1.1-1.9l0.5-3l1.6-2.9l0.4-2.4l4.9-3l4.2-2.8h23.9v24.2h7.8v-28.1h55.3    v-17.6h12.8v-34.1H483v-17.8H473.9z").attr({ fill: 'none', stroke: '#CCEDEB', "stroke-width": '2', "stroke-linecap": 'square', "stroke-linejoin": 'round', "stroke-miterlimit": '10', parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY', 'stroke-opacity': '1' }).data('id', 'path_ak');
        var path_al = rsr.path("    M473.9,119.1V48.6h-40.6V35.7h-25.6V20.9h-17.4v7.3h-28.1l-1.4,4.1l-1.5,4l-0.9,2.3l-0.9,2.3l-0.9,2.2l-1,2.3l-0.6,1.3l-1.2,2.8    l-1.3,2.8l-0.8,1.6l-0.7,1.6l-0.8,1.6l-2.5,5.1c-3.3,3-8.9,8.6-8.9,8.6c-1.6,2.6-5.7,9-5.6,8.9c-3.6,6-7.6,15.3-7.6,15.3l-1.7,3.7    l-2,4.1l-2.7,4.2l-2.8,3.8l-4.5,5.5l-5.2,5.7l-3.8,4l-1.1,0.9l-3.8,2.9l-3.4,2.5l-3.5,2.5l-3.3,2.2l-0.2,0.1l-0.8,0.4l-5.8,2.8    l-3.4,1.7l-0.4,0.2v35.1h13.5v37.2v3.2l6.3-6.1l0.7-3.1l1.1-1.9l0.5-3l1.6-2.9l0.4-2.4l4.9-3l4.2-2.8h23.9v24.2h7.8v-28.1h55.3    v-17.6h12.8v-34.1H483v-17.8H473.9z").attr({ fill: 'none', stroke: '#C9C79D', "stroke-width": '3', "stroke-linecap": 'square', "stroke-linejoin": 'round', "stroke-miterlimit": '10', "stroke-dasharray": '0,5.5', parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY', 'stroke-opacity': '1' }).data('id', 'path_al');
        _x3C_INDIANA_MICHIGAN_SERVICE_BOUNDARY_x3E_.attr({ 'id': '_x3C_INDIANA_MICHIGAN_SERVICE_BOUNDARY_x3E_', 'parent': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY', 'name': '_x3C_INDIANA_MICHIGAN_SERVICE_BOUNDARY_x3E_' });
        var STATE_NAMES_x2F_CITIES = rsr.set();
        var rect_am = rsr.rect(524.9, 245.8, 83.8, 18).attr({ x: '524.9', y: '245.8', fill: 'none', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'rect_am');
        var text_an = rsr.text(0, 0, 'Fort Wayne').attr({ fill: '#58595B', "font-family": 'HelveticaNeue Condensed, Helvetica, Helvetica, Arial, sans-serif', "font-size": '16', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).transform("m1 0 0 1 524.9081 257.1179").data('id', 'text_an');
        var rect_ao = rsr.rect(259.3, 73.9, 73.6, 18).attr({ x: '259.3', y: '73.9', fill: 'none', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'rect_ao');
        var text_ap = rsr.text(0, 0, 'St. Joseph').attr({ fill: '#58595B', "font-family": 'HelveticaNeue Condensed, Helvetica, Helvetica, Arial, sans-serif', "font-size": '16', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).transform("m1 0 0 1 259.3021 85.2951").data('id', 'text_ap');
        var rect_aq = rsr.rect(327.5, 159.6, 81.6, 18).attr({ x: '327.5', y: '159.6', fill: 'none', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'rect_aq');
        var text_ar = rsr.text(0, 0, 'South Bend').attr({ fill: '#58595B', "font-family": 'HelveticaNeue Condensed, Helvetica, Helvetica, Arial, sans-serif', "font-size": '16', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).transform("m1 0 0 1 327.4551 171.0029").data('id', 'text_ar');
        var rect_as = rsr.rect(458.2, 97.8, 83.3, 18).attr({ x: '458.2', y: '97.8', fill: 'none', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'rect_as');
        var text_at = rsr.text(0, 0, 'Three Rivers').attr({ fill: '#58595B', "font-family": 'HelveticaNeue Condensed, Helvetica, Helvetica, Arial, sans-serif', "font-size": '16', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).transform("m1 0 0 1 458.2037 109.1922").data('id', 'text_at');
        var rect_au = rsr.rect(338.1, 443, 94.3, 18.7).attr({ x: '338.1', y: '443', fill: 'none', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'rect_au');
        var text_av = rsr.text(0, 0, 'Indianapolis').attr({ fill: '#58595B', "font-family": 'HelveticaNeue Condensed, Helvetica, Helvetica, Arial, sans-serif', "font-size": '16', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).transform("m1 0 0 1 343.6432 454.3976").data('id', 'text_av');
        var rect_aw = rsr.rect(459.2, 376.1, 51.9, 14.3).attr({ x: '459.2', y: '376.1', fill: 'none', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'rect_aw');
        var text_ax = rsr.text(0, 0, 'Muncie').attr({ fill: '#58595B', "font-family": 'HelveticaNeue Condensed, Helvetica, Helvetica, Arial, sans-serif', "font-size": '16', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).transform("m1 0 0 1 459.2437 387.5075").data('id', 'text_ax');
        STATE_NAMES_x2F_CITIES.attr({ 'id': 'STATE_NAMES_x2F_CITIES', 'name': 'STATE_NAMES_x2F_CITIES' });
        var group_b = rsr.set();
        var path_ay = rsr.path("M449.9,108.3c-2.5,0-4.6-2.1-4.6-4.6c0-2.5,2.1-4.6,4.6-4.6c2.5,0,4.6,2.1,4.6,4.6    C454.5,106.3,452.4,108.3,449.9,108.3z").attr({ fill: '#58595B', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'path_ay');
        var path_az = rsr.path("M449.9,100.4c1.8,0,3.3,1.5,3.3,3.3c0,1.8-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.5-3.3-3.3    C446.6,101.9,448,100.4,449.9,100.4 M449.9,97.8c-3.3,0-5.9,2.6-5.9,5.9c0,3.3,2.6,5.9,5.9,5.9s5.9-2.6,5.9-5.9    C455.8,100.5,453.1,97.8,449.9,97.8L449.9,97.8z").attr({ fill: '#998675', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'path_az');
        var path_ba = rsr.path("M449.9,100.4c1.8,0,3.3,1.5,3.3,3.3c0,1.8-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.5-3.3-3.3    C446.6,101.9,448,100.4,449.9,100.4 M449.9,98.4c-2.9,0-5.3,2.4-5.3,5.3c0,2.9,2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3    C455.2,100.8,452.8,98.4,449.9,98.4L449.9,98.4z").attr({ fill: '#FFFFFF', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'path_ba');
        group_b.attr({ 'parent': 'STATE_NAMES_x2F_CITIES', 'name': 'group_b' });
        var group_c = rsr.set();
        var path_bb = rsr.path("M335.9,84.3c-2.5,0-4.6-2.1-4.6-4.6c0-2.5,2.1-4.6,4.6-4.6c2.5,0,4.6,2.1,4.6,4.6    C340.5,82.3,338.5,84.3,335.9,84.3z").attr({ fill: '#58595B', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'path_bb');
        var path_bc = rsr.path("M335.9,76.4c1.8,0,3.3,1.5,3.3,3.3c0,1.8-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.5-3.3-3.3    C332.6,77.9,334.1,76.4,335.9,76.4 M335.9,73.8c-3.3,0-5.9,2.6-5.9,5.9c0,3.3,2.6,5.9,5.9,5.9s5.9-2.6,5.9-5.9    C341.8,76.5,339.2,73.8,335.9,73.8L335.9,73.8z").attr({ fill: '#998675', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'path_bc');
        var path_bd = rsr.path("M335.9,76.4c1.8,0,3.3,1.5,3.3,3.3c0,1.8-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.5-3.3-3.3    C332.6,77.9,334.1,76.4,335.9,76.4 M335.9,74.4c-2.9,0-5.3,2.4-5.3,5.3c0,2.9,2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3    C341.2,76.8,338.8,74.4,335.9,74.4L335.9,74.4z").attr({ fill: '#FFFFFF', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'path_bd');
        group_c.attr({ 'parent': 'STATE_NAMES_x2F_CITIES', 'name': 'group_c' });
        var group_d = rsr.set();
        var path_be = rsr.path("M362.4,155.9c-2.5,0-4.6-2.1-4.6-4.6c0-2.5,2.1-4.6,4.6-4.6c2.5,0,4.6,2.1,4.6,4.6    C367,153.8,364.9,155.9,362.4,155.9z").attr({ fill: '#58595B', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'path_be');
        var path_bf = rsr.path("M362.4,148c1.8,0,3.3,1.5,3.3,3.3c0,1.8-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.5-3.3-3.3    C359.1,149.5,360.5,148,362.4,148 M362.4,145.4c-3.3,0-5.9,2.6-5.9,5.9c0,3.3,2.6,5.9,5.9,5.9s5.9-2.6,5.9-5.9    C368.3,148,365.6,145.4,362.4,145.4L362.4,145.4z").attr({ fill: '#998675', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'path_bf');
        var path_bg = rsr.path("M362.4,148c1.8,0,3.3,1.5,3.3,3.3c0,1.8-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.5-3.3-3.3    C359.1,149.5,360.5,148,362.4,148 M362.4,146c-2.9,0-5.3,2.4-5.3,5.3c0,2.9,2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3    C367.7,148.4,365.3,146,362.4,146L362.4,146z").attr({ fill: '#FFFFFF', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'path_bg');
        group_d.attr({ 'parent': 'STATE_NAMES_x2F_CITIES', 'name': 'group_d' });
        var group_e = rsr.set();
        var path_bh = rsr.path("M516.6,256.3c-2.5,0-4.6-2.1-4.6-4.6c0-2.5,2.1-4.6,4.6-4.6c2.5,0,4.6,2.1,4.6,4.6    C521.2,254.2,519.1,256.3,516.6,256.3z").attr({ fill: '#58595B', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'path_bh');
        var path_bi = rsr.path("M516.6,248.4c1.8,0,3.3,1.5,3.3,3.3c0,1.8-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.5-3.3-3.3    C513.3,249.8,514.8,248.4,516.6,248.4 M516.6,245.8c-3.3,0-5.9,2.6-5.9,5.9c0,3.3,2.6,5.9,5.9,5.9s5.9-2.6,5.9-5.9    C522.5,248.4,519.9,245.8,516.6,245.8L516.6,245.8z").attr({ fill: '#998675', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'path_bi');
        var path_bj = rsr.path("M516.6,248.4c1.8,0,3.3,1.5,3.3,3.3c0,1.8-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.5-3.3-3.3    C513.3,249.8,514.8,248.4,516.6,248.4 M516.6,246.4c-2.9,0-5.3,2.4-5.3,5.3c0,2.9,2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3    C521.9,248.7,519.5,246.4,516.6,246.4L516.6,246.4z").attr({ fill: '#FFFFFF', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'path_bj');
        group_e.attr({ 'parent': 'STATE_NAMES_x2F_CITIES', 'name': 'group_e' });
        var group_f = rsr.set();
        var path_bk = rsr.path("M482.1,401.1c-2.5,0-4.6-2.1-4.6-4.6c0-2.5,2.1-4.6,4.6-4.6c2.5,0,4.6,2.1,4.6,4.6    C486.7,399.1,484.6,401.1,482.1,401.1z").attr({ fill: '#58595B', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'path_bk');
        var path_bl = rsr.path("M482.1,393.2c1.8,0,3.3,1.5,3.3,3.3c0,1.8-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.5-3.3-3.3    C478.8,394.7,480.3,393.2,482.1,393.2 M482.1,390.6c-3.3,0-5.9,2.6-5.9,5.9c0,3.3,2.6,5.9,5.9,5.9s5.9-2.6,5.9-5.9    C488,393.3,485.3,390.6,482.1,390.6L482.1,390.6z").attr({ fill: '#998675', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'path_bl');
        var path_bm = rsr.path("M482.1,393.2c1.8,0,3.3,1.5,3.3,3.3c0,1.8-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.5-3.3-3.3    C478.8,394.7,480.3,393.2,482.1,393.2 M482.1,391.2c-2.9,0-5.3,2.4-5.3,5.3c0,2.9,2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3    C487.4,393.6,485,391.2,482.1,391.2L482.1,391.2z").attr({ fill: '#FFFFFF', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'path_bm');
        group_f.attr({ 'parent': 'STATE_NAMES_x2F_CITIES', 'name': 'group_f' });
        var group_g = rsr.set();
        var path_bn = rsr.path("M377,467.3c-2.5,0-4.6-2.1-4.6-4.6c0-2.5,2.1-4.6,4.6-4.6c2.5,0,4.6,2.1,4.6,4.6    C381.6,465.3,379.6,467.3,377,467.3z").attr({ fill: '#58595B', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'path_bn');
        var path_bo = rsr.path("M377,459.4c1.8,0,3.3,1.5,3.3,3.3c0,1.8-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.5-3.3-3.3    C373.7,460.9,375.2,459.4,377,459.4 M377,456.8c-3.3,0-5.9,2.6-5.9,5.9c0,3.3,2.6,5.9,5.9,5.9s5.9-2.6,5.9-5.9    C382.9,459.5,380.3,456.8,377,456.8L377,456.8z").attr({ fill: '#998675', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'path_bo');
        var path_bp = rsr.path("M377,459.4c1.8,0,3.3,1.5,3.3,3.3c0,1.8-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.5-3.3-3.3    C373.7,460.9,375.2,459.4,377,459.4 M377,457.4c-2.9,0-5.3,2.4-5.3,5.3c0,2.9,2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3    C382.3,459.8,380,457.4,377,457.4L377,457.4z").attr({ fill: '#FFFFFF', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'path_bp');
        group_g.attr({ 'parent': 'STATE_NAMES_x2F_CITIES', 'name': 'group_g' });
        var group_h = rsr.set();
        var rect_bq = rsr.rect(557.7, 281.4, 186.3, 19.9).attr({ x: '557.7', y: '281.4', fill: 'none', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'rect_bq');
        var text_br = rsr.text(0, 0, 'OHIO').attr({ fill: '#BBB5AF', "font-family": 'HelveticaNeue Condensed, Helvetica, Helvetica, Arial, sans-serif', "font-size": '16', "letter-spacing": '2', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).transform("m1 0 0 1 629.0815 292.7469").data('id', 'text_br');
        group_h.attr({ 'parent': 'STATE_NAMES_x2F_CITIES', 'name': 'group_h' });
        var group_i = rsr.set();
        var rect_bs = rsr.rect(0, 281.4, 183.9, 39.9).attr({ x: '0', y: '281.4', fill: 'none', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'rect_bs');
        var text_bt = rsr.text(0, 0, 'ILLINOIS').attr({ fill: '#BBB5AF', "font-family": 'HelveticaNeue Condensed, Helvetica, Helvetica, Arial, sans-serif', "font-size": '16', "letter-spacing": '2', parent: 'STATE_NAMES_x2F_CITIES', 'stroke-width': '0', 'stroke-opacity': '1' }).transform("m1 0 0 1 55.5516 292.7469").data('id', 'text_bt');
        group_i.attr({ 'parent': 'STATE_NAMES_x2F_CITIES', 'name': 'group_i' });


        var rsrGroups = [BASE_LAYER, MAJOR_HIGHWAYS, NON_SERVICE_COUNTIES, group_a, SERVICE_COUNTIES_INDIANA, SERVICE_COUNTIES_MICHIGAN, STATE_BORDERS_x2F_SERVICE_BOUNDARY, _x3C_STATE_BORDER_LINE_x3E__3_, _x3C_INDIANA_STATE_BORDER_x3E_, _x3C_LAKE_BORDER_x3E__1_, _x3C_SERVICE_BOUNDARY_x3E_, _x3C_INDIANA_MICHIGAN_SERVICE_BOUNDARY_x3E_, STATE_NAMES_x2F_CITIES, group_b, group_c, group_d, group_e, group_f, group_g, group_h, group_i];
        BASE_LAYER.push(
            _x3C_BACKGROUND_x3E_,
            path_j,
            _x3C_INDIANA_STATE_FILL_x3E_,
            _x3C_INDIANA_MICHIGAN_SERVICE_AREA_FILL_x3E_,
            _x3C_SERVICE_AREA_FILL_x3E_,
            _x3C_WATER_x3E_
        );
        MAJOR_HIGHWAYS.push(
            _x3C_MAJOR_HIGHWAY1_x3E_,
            _x3C_MAJOR_HIGHWAY2_x3E__2_,
            _x3C_MAJOR_HIGHWAY3_x3E_,
            _x3C_MAJOR_HIGHWAY4_x3E_,
            _x3C_MAJOR_HIGHWAY5_x3E_,
            _x3C_MAJOR_HIGHWAY6_x3E_,
            _x3C_MAJOR_HIGHWAY8_x3E_,
            _x3C_MAJOR_HIGHWAY7_x3E_,
            _x3C_MAJOR_HIGHWAY9_x3E_,
            _x3C_MAJOR_HIGHWAY10_x3E_,
            _x3C_MAJOR_HIGHWAY11_x3E_,
            _x3C_MAJOR_HIGHWAY12_x3E_,
            _x3C_MAJOR_HIGHWAY13_x3E_,
            _x3C_MAJOR_HIGHWAY14_x3E_,
            _x3C_MAJOR_HIGHWAY15_x3E_,
            _x3C_MAJOR_HIGHWAY16_x3E_,
            _x3C_MAJOR_HIGHWAY17_x3E_,
            _x3C_MAJOR_HIGHWAY18_x3E_
        );
        NON_SERVICE_COUNTIES.push(
            path_k,
            path_l,
            path_m,
            path_n,
            path_o,
            path_p,
            path_q,
            path_r,
            path_s,
            rect_t,
            rect_u,
            path_v,
            path_w,
            rect_x,
            path_y,
            path_z,
            rect_aa,
            rect_ab,
            _x3C_Path_x3E_
        );
        group_a.push(
        );
        SERVICE_COUNTIES_INDIANA.push(
            _x3C_WHITLEY_x3E_,
            _x3C_WELLS_x3E_,
            _x3C_WABASH_x3E_,
            _x3C_TIPTON_x3E_,
            _x3C_STEUBEN_x3E_,
            _x3C_SAINT_JOSEPH_x3E__1_,
            _x3C_RANDOLPH_x3E_,
            _x3C_NOBLE_x3E_,
            _x3C_MARSHALL_x3E_,
            _x3C_MADISON_x3E_,
            _x3C_LAPORTE_x3E_,
            _x3C_LAGRANGE_x3E_,
            _x3C_JAY_x3E_,
            _x3C_HUNTINGTON_x3E_,
            _x3C_HOWARD_x3E_,
            _x3C_HENRY_x3E_,
            _x3C_HAMILTON_x3E_,
            _x3C_GRANT_x3E_,
            _x3C_ELKHART_x3E_,
            _x3C_DELAWARE_x3E_,
            _x3C_DEKALB_x3E_,
            _x3C_BLACKFORD_x3E_,
            _x3C_ALLEN_x3E_,
            _x3C_ADAMS_x3E_
        );
        SERVICE_COUNTIES_MICHIGAN.push(
            _x3C_KALAMAZOO_x3E_,
            _x3C_CASS_x3E_,
            _x3C_SAINT_JOSEPH_x3E_,
            _x3C_VAN_BURREN_x3E_,
            _x3C_ALLEGAN_x3E_,
            _x3C_BERRIEN_x3E_
        );
        STATE_BORDERS_x2F_SERVICE_BOUNDARY.push(
            _x3C_STATE_BORDER_LINE_x3E__1_
        );
        _x3C_STATE_BORDER_LINE_x3E__3_.push(
        );
        _x3C_INDIANA_STATE_BORDER_x3E_.push(
            path_ac,
            path_ad
        );
        _x3C_LAKE_BORDER_x3E__1_.push(
            path_ae,
            path_af
        );
        _x3C_SERVICE_BOUNDARY_x3E_.push(
            path_ag,
            path_ah,
            path_ai
        );
        _x3C_INDIANA_MICHIGAN_SERVICE_BOUNDARY_x3E_.push(
            path_aj,
            path_ak,
            path_al
        );
        STATE_NAMES_x2F_CITIES.push(
            rect_am,
            text_an,
            rect_ao,
            text_ap,
            rect_aq,
            text_ar,
            rect_as,
            text_at,
            rect_au,
            text_av,
            rect_aw,
            text_ax
        );
        group_b.push(
            path_ay,
            path_az,
            path_ba
        );
        group_c.push(
            path_bb,
            path_bc,
            path_bd
        );
        group_d.push(
            path_be,
            path_bf,
            path_bg
        );
        group_e.push(
            path_bh,
            path_bi,
            path_bj
        );
        group_f.push(
            path_bk,
            path_bl,
            path_bm
        );
        group_g.push(
            path_bn,
            path_bo,
            path_bp
        );
        group_h.push(
            rect_bq,
            text_br
        );
        group_i.push(
            rect_bs,
            text_bt
        );


        var currentContext = this;
        currentContext.serviceCounties = [];
        SERVICE_COUNTIES_INDIANA.forEach(function (serviceCountyIndiana) {
            currentContext.serviceCounties.push({ id: serviceCountyIndiana.data('id'), svgElement: serviceCountyIndiana });
        });
        SERVICE_COUNTIES_MICHIGAN.forEach(function (serviceCountyMichigan) {
            currentContext.serviceCounties.push({ id: serviceCountyMichigan.data('id'), svgElement: serviceCountyMichigan });
        });
    };

    map.getServiceCounty = function (id) {
        var currentContext = this;
        var serviceCounty = _.find(currentContext.serviceCounties, function (s) { return s.id === id });
        if (serviceCounty) {
            return serviceCounty.svgElement;
        }
        return serviceCounty;
    };

    map.resetServiceCounties = function () {
        var currentContext = this;
        var serviceCounty = _.each(currentContext.serviceCounties, function (s) {
            var svgElement = s.svgElement;
            svgElement.attr({
                'cursor': 'auto',
                'fill': 'none',
                'title': ''
            });
            svgElement.removeData('data-class-name');
            svgElement.removeData('data-uuid');
            svgElement.unclick();
        });
    }

    return map;
});