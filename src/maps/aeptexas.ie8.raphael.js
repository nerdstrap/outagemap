define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    var map = {};

    map.render = function (rootElementId, width, height) {
        var rsr = Raphael(document.getElementById(rootElementId), width, height);

        var BASE_LAYER = rsr.set();
        var _x3C_BACKGROUND_x3E_ = rsr.rect(0, 0, 744, 484).attr({id: '_x3C_BACKGROUND_x3E_',fill: '#EAE7D0',parent: 'BASE_LAYER','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_BACKGROUND_x3E_');
        var _x3C_WATER2_x3E_ = rsr.path("M744,242c-0.5,0.4-1,0.8-1.4,1.3   c-1,1.5-2,2.9-3.3,4.3c-1.3,1.4-2.4,4.9-0.9,6.4c1.1,1.1,2.6,1.6,4.1,1.9c0.5,0.1,1,0.2,1.5,0.2L744,242L744,242z").attr({id: '_x3C_WATER2_x3E_',opacity: '0.13',fill: '#231F20',"enable-background": 'new    ',parent: 'BASE_LAYER','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_WATER2_x3E_');
        var _x3C_WATER1_x3E_ = rsr.path("M409.8,408.3l6.9,0.8   c0.5,0.1,0.9,0.6,0.7,1.1l-1.4,5.1l-2.7,10.3c-0.1,0.2,0,0.4,0.1,0.6l2.3,4.9c0,0.1,0.1,0.1,0.1,0.2l5.3,27.2v0.1l6.2,16.7   c0,0,0,0.1,0,0.2l1.8,0.9c0.1,0.4-1.9,5.5-2.3,5.7l0.5,2H744V309.2l-3.5-6.7c-0.3-0.6-1.2-0.6-1.5,0l-1,1.6l-0.5,0.9   c-0.1,0.1-0.1,0.2-0.2,0.3c-0.3,0.2-0.8,0.4-1.6-0.1c0.1,0.1-1.1-0.7-1.1-0.7s-0.4,0-0.4-1.2l-0.1-2c0-0.3-0.2-0.5-0.4-0.7l-1.4-1   c-0.6-0.4-1.4,0-1.4,0.8l0.1,1.2c0,0.1,0,0.3-0.1,0.4c-0.1,0.2-0.4,0.6-0.8,1l-3.6,2.7c-0.2,0.2-0.4,0.4-0.4,0.7v1.9l-0.6,0.5   l-7.6,1.8c-0.2,0.1-0.5,0-0.7-0.1l-6-4.4c-0.1-0.1-0.2-0.1-0.3-0.1l-6.4-1.7c-0.3-0.1-0.5-0.3-0.6-0.6l-1.9-7.4   c-0.1-0.3-0.2-0.5-0.5-0.6l-1.9-0.9c-0.2-0.1-0.3-0.2-0.4-0.4l-1.4-2.5c-0.1-0.2-0.3-0.3-0.5-0.4L696,291c-0.2-0.1-0.4-0.3-0.5-0.6   l-0.5-1.6c-0.1-0.4-0.5-0.6-0.9-0.6l-2.2,0.2c-0.2,0-0.5-0.1-0.6-0.2l-2.7-2.4c-0.2-0.2-0.5-0.3-0.8-0.2l-4.9,1.2l-0.2-1v-0.1   l-0.1-1.8c0-0.1,0-0.2-0.1-0.3l-0.7-1.9c-0.1-0.3-0.3-0.5-0.6-0.6l-3.3-0.7l-0.6-0.5l-0.1-0.5l2.8-5.4l-0.2-0.2l-12.1,1.3l-0.4-0.2   l-0.3-0.6l-0.2-2c0-0.1,0-0.3,0.1-0.4l0.4-1.1l-2.8-0.3c-0.2,0-0.4,0-0.5,0.1l-7.1,4.2l-0.7,0.1l-0.4-0.4c-0.3-0.3-0.8-0.3-1.1-0.1   l0,0c-0.3,0.2-0.4,0.7-0.3,1l0.3,0.7h0.9l0.9,0.5l0.8,1.5c0.1,0.2,0.4,0.4,0.6,0.5l2.1,0.4l0.6,0.4l-0.1,1c0,0.1,0,0.2-0.1,0.2   l-0.9,2.5l-0.7,0.6l-0.9,0.1l-10,1.4c-0.1,0-0.1,0-0.2,0l-14.5-1.4c-0.1,0-0.2,0-0.2-0.1l-21.2-8.7h-0.1l-12.6-2.9l-9.3,1.6   l-15.6,2.1h-0.1l-23,7.3c-0.1,0-0.2,0.1-0.2,0.1l-14.1,10c-0.1,0.1-0.3,0.1-0.4,0.2l-2,0.1c-0.6,0-1.1-0.5-0.9-1.1l0.4-1.5   c0.1-0.2,0.2-0.4,0.4-0.5l9.6-4.8c0.6-0.3,0.6-1.1,0.2-1.4l-1.3-1c-0.2-0.2-0.5-0.2-0.8-0.2l-8.3,2.2c-0.5,0.1-1-0.2-1.1-0.7v-0.3   c0-0.1,0-0.3,0-0.4l4.2-12.1c0.1-0.2,0.1-0.5-0.1-0.7l-0.1-0.2c-0.3-0.5-0.9-0.6-1.3-0.2l-8,6.9c-0.4,0.3-0.9,0.3-1.2-0.1l-1.6-1.8   c-0.3-0.3-0.8-0.4-1.2-0.1l-0.6,0.4c-0.3,0.2-0.4,0.6-0.3,1l1.5,4.5c0.1,0.2,0.1,0.4,0,0.6l-0.9,2.3c-0.2,0.4,0,0.9,0.5,1.1   l2.6,1.1c0.4,0.2,0.6,0.6,0.5,1l-0.4,1.6c-0.1,0.3,0,0.6,0.3,0.8l3.2,2.9l-1.3-0.4c-0.5-0.2-1.1,0.2-1.1,0.7l-0.4,3.6l-0.4,0.7   l-6.1,5.2c-0.2,0.1-0.4,0.2-0.6,0.2l-2.8-0.2c-0.3,0-0.6,0.2-0.8,0.4l-2.4,4.3c-0.3,0.5-0.1,1.1,0.4,1.2l1.2,0.4   c0.5,0.2,0.7,0.7,0.5,1.2l-1.1,2.5c-0.1,0.2-0.2,0.3-0.3,0.4l-15.4,10.4l-31.5,20.3c-0.8,0.5-1.7-0.4-1.2-1.2l4.4-3.5   c0,0-1-2-1-2.2v-5.1c0-0.5-0.3-0.9-0.8-0.9l-5.8,0.4c-0.2,0-0.4,0.1-0.6,0.3l-3,3.6c-0.2,0.2-0.2,0.5-0.2,0.7l1.1,6.3   c0.1,0.3-0.1,0.7-0.4,0.9l-3,2.2l-5.5,3.6c-0.4,0.2-0.9,0.2-1.1-0.2l-2.8-3.4c-0.5-0.6-1.5-0.3-1.5,0.5v2.5c0,0.1,0,0.1,0,0.2   l-0.8,4.3c0,0.1,0,0.1,0,0.1l-0.9,2.3c-0.1,0.2-0.2,0.3-0.3,0.4l-3.3,2.5c-0.2,0.1-0.4,0.2-0.6,0.2l-4.6-0.4c-0.2,0-0.4,0-0.6,0.1   l-7.8,5.2c-0.3,0.2-0.5,0.6-0.3,1l0.8,2.3c0,0.1,0.1,0.1,0.1,0.2l2.9,4.3c0.2,0.2,0.2,0.5,0.1,0.8l-0.7,2.2   c-0.1,0.2-0.2,0.4-0.4,0.5l-2.6,1.6c-0.1,0.1-0.2,0.1-0.4,0.1l-4.7,0.6c-0.3,0-0.6,0.2-0.7,0.5l-0.9,2.2c-0.1,0.2-0.1,0.5,0,0.7   l3.4,6.8c0.1,0.2,0.1,0.5,0,0.7l-5,13.1c-0.1,0.2-0.3,0.4-0.5,0.5l-8.9,3.7c-0.3,0.1-0.5,0.4-0.5,0.7l-0.2,1.8   C409,407.8,409.3,408.2,409.8,408.3z").attr({id: '_x3C_WATER1_x3E_',opacity: '0.13',fill: '#231F20',"enable-background": 'new    ',parent: 'BASE_LAYER','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_WATER1_x3E_');
        var _x3C_Texas_land_fill_x3E_ = rsr.path("M 312.6,0 312.6,16    315.7,16 319.8,19.1 325.1,26 329.3,26.1 330.9,24.2 334.7,24.2 337.4,26.1 338.2,22.7 340.9,22.3 341.6,23.9 346.5,27.7    346.5,34.2 356.8,35.1 359.5,37.8 362.9,37.8 365.6,39.4 367.9,38.3 371.3,37.1 373.6,38.7 375.5,42.5 379.3,41.8 381.3,38    383.6,38.4 385.5,39.9 388.1,40.3 391.6,38.5 393.9,40.4 392.7,42.3 395.3,46.9 397.3,46.2 399.5,47.7 398.4,51.5 403.3,55.4    410.3,47.4 413.3,48.2 416.7,51.3 417.9,51.7 419,51.3 420.5,55.9 423.2,57.5 425.5,54.1 427.8,54.5 429.7,51.4 432,53.7    431.6,56.4 432.3,62.1 435,61.4 435.1,54.9 438.1,56.1 440.8,53 442,49.2 443.5,48.9 445.8,55.4 448.4,54.6 451.1,56.6 454.2,51.6    457.3,52.8 457.6,54.3 456.1,56.6 463.3,59.4 466,62.1 467.9,63.2 469,60.9 474.8,59.8 476,56.8 488.2,53.8 490.1,54.2 491.7,52    501.3,49.7 502.8,52.4 508.1,53.6 511.2,52.1 515.1,48.3 518.5,48.7 529.5,58.8 536,61.1 543.2,64.3 544.4,65.8 546.7,65.4    547,65.8 547.4,67.7 548.2,68.1 548.5,68.9 549.7,69.7 550.4,70.1 550.8,70.8 552.4,70.5 554.6,70.9 555,70.1 556.2,69.7    556.6,70.1 557.3,70.1 558.1,69.4 558.1,68.6 559.3,68.2 559.6,68.6 561.2,69.8 561.5,69.8 562.7,69.8 564.2,69.4 564.6,69.8    565.6,70.5 565.6,78 565.6,78 565.6,154 567.9,155.1 570.2,157.3 572.5,160 573.7,162.4 574.6,164 575.4,164.9 575.4,165.7    575.5,168.2 576.9,169.1 576.9,170.9 575.6,171.3 575,172.9 575.8,172.9 576.2,174.1 575.8,175.3 575.1,175.6 576.3,176.6    577.3,178.9 580.4,180.1 577.8,180.1 580.4,181.3 579.3,181.8 580.5,183.7 581.6,184.1 582.3,185.8 584.2,187.2 583.7,189.6    582.3,191.2 583.8,192.1 585.6,193.4 586.3,195.7 588.4,197.6 589.8,205.3 588.4,206.7 587.6,207.1 588.3,208.3 588.3,209.1    588.9,209.1 587.9,210.5 589,211.5 589,212.4 588.5,214.4 588.6,215.1 588,216 586.7,217 586,218.5 583.6,222.7 582.8,224.6    581.7,226.5 581.3,227.7 581.3,228.8 580.9,229.2 579.7,230.7 579.7,232.3 580.1,234.5 580.4,236.8 579.7,238.4 580,239.1    578.9,239.5 578.9,244.1 583.1,249.1 581.2,258.4 576.4,264.9 575.5,264.4 570.7,271.7 574.1,275.8 550.9,283.1 550.1,283.9    534.3,293.3 532.8,293.3 533.6,291 543.6,284.6 542.1,282.3 532.9,285.3 532.5,283.8 536.8,270.8 536.1,269.6 526.8,278    524.2,274.9 522.3,276 524.1,281.4 522.6,284.8 526.4,286.8 525.2,289.4 527.5,291.7 526.7,297.1 520.1,302.8 516.7,302.4    513.6,307.7 516.6,309.6 514.7,312.7 499.7,323.2 465,345.9 463.9,345.1 490.8,327 488.5,325.8 470.5,336.4 469.3,335.2    469.9,330.7 466.7,331.8 463.3,328.3 463.6,334.4 459.8,336.7 460.9,334.4 460.6,332.1 452.2,328.6 453.3,333.9 452.5,336.6    455.9,335.9 458.2,338.6 455.5,340.5 456.7,341.6 460.5,340.5 461.6,343.2 451.2,349.6 449.7,348.4 449.4,345.4 446.3,341.5    446.3,344.2 446.2,351.1 445.4,356.1 440,359.5 441.2,353.3 438.2,354.1 438.9,358.7 436.2,359.4 434.3,357.1 426.6,363.9    431.5,373.5 426.9,376.2 420.8,376.1 420,380.3 421.9,383 420.7,385.7 421.8,386.1 424.2,383 424.9,385.7 422.9,391 421.4,396    420.2,397.5 419,401 415.2,405.5 413.3,404.4 415.2,402.8 415.6,398.6 414.1,398.6 412.9,402.8 410.6,402.8 411,404.7 410.6,404.7    409.4,404.7 404.2,396.2 403,396.6 407.5,404.7 405.2,405.8 408.3,408.1 413.6,408.6 417.8,407.5 418.2,412.8 415.5,415.9    416.2,418.5 413.5,421.2 413,428.8 415.7,431.2 417.9,442.3 420.1,453.8 421.9,462.6 423.8,463.4 424.9,469.1 426.9,468.4    428,469.1 426.1,470.6 426.4,474.9 428,472.6 429.1,473.7 430.3,470.7 430.6,471.8 429.8,476.8 414.5,477.8 410.3,475.9    409.2,472.4 403.1,472.4 399.7,470.4 390.9,471.9 384.4,470.3 368.8,460.6 365.7,461.3 362.3,456.7 347.4,452.7 344.8,442.8    340,429 335.4,424.7 332,417.4 332.8,415.5 332.9,407.5 329.1,404 329.2,393.3 329.2,389.1 321.6,385.2 317.1,379.8 305.8,360.2    300.8,356.3 296.3,349 293.7,339.4 290.3,334.4 289.9,332.5 288.4,331.7 284.3,321 284.7,319.5 283.6,319.4 280.6,308.7    275.7,299.9 266.6,293.7 265.5,289.5 252.5,279 251.1,273.3 244.2,270.9 241.5,272.8 235.4,272 222.8,271.5 211,266.4 208.6,271.4    196.4,273.2 189.3,293.4 187.4,294.1 186.6,298.3 187.3,301 181.6,304 178.8,307.4 176.5,313.9 169.6,313.9 162,309.2 160.9,306.1    148.3,300.7 148.3,298 133.1,292.1 116.4,277.1 111.1,263.6 109.8,247.2 103.7,238.7 101.9,229.1 98.5,225.6 97.7,223.7    80.6,212.9 71.9,201.7 68.1,198.2 65.1,196.7 63.2,194.7 56.4,183.2 51.4,183.9 45.7,180 32.1,162.7 28.3,151.1 29.8,151.1    55.1,151.1 101.4,151.1 104,151.1 140.1,151.1 182.5,151.1 182.6,1.8 182.6,0   z").attr({id: '_x3C_Texas_land_fill_x3E_',opacity: '0.6',fill: '#FFF8CC',"enable-background": 'new    ',parent: 'BASE_LAYER','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_Texas_land_fill_x3E_');
        var _x3C_Service_Territory_Highlight_fill_x3E_ = rsr.path("M486.8,306.3   l-0.7-3.8l1.2-1.9l-9.8-14.6l-0.4-3.1l-4.2-2.3l-15.9-17l-13.2,17.1l12.9,15.8l-4.2,4.6l-11.6,11.4l-13.6-18.1l2.4-11.8l2.3-1.9   l-7.2-8.1l-13.6-15.4l-3.1,3l1.3,22.3l-7.8,12.5l3.6,5.7l-5.7,4.7l-0.3,3.8l-11.9,10.6l-9.1-11.9l-17.9-7.8l-24.9-8.9l-8.4-10.1   V267l-3.4-0.4l0.1-9.6h-3.8l0.5-11.1l21,0.2l-0.3-12.2l-9.2-0.5l-0.2-23.3l17.6,0.2l0.6-28.7l-5.2-0.8l0.1-25.4h16.1l-3.5-6.3   l6.1-3.7v-19.9h-13.4l0.4-23.5l6.1,0.1l0.2-23l-22.6-0.2L334,55.6l23-0.2l-0.2-20.3l-10.3-0.9l0.1-6.5l-4.9-3.9l-0.8-1.5l-2.7,0.4   l-0.8,3.4l-2.7-1.9h-3.8l-1.5,1.9h-4.2l-5.3-6.9l-4.2-3.1h-3.1v-10l-18.3-0.2l0.2,23L271.9,29v-9.9h-12.4v10.3h8.6l0.3,49.3v22.8   l15.1-0.1v47.1l-7.7-0.1L257,165.3l-0.1,6.3l-7.1-0.1l-14.2,13l-33.1-13.4l-10.6-0.1l-0.2,19.5l-1.9,0.4l-4.2-4.2l-3.4-0.8   l-18.7-3.2l-28.1,17l-37.3,25.2l3.7,4.3l1.8,9.6l6,8.5l1.4,16.5l5.2,13.4l16.7,15.1l7.1,2.7l59-82l19.9,14.8l0.4-3.1l16.8,0.9   l4.2,0.8l0.4,3.4l-3.5,7.6l1.1,1.3l11.6,0.3v33.5l1.1,0.5l1.5,5.8l12.9,10.4l1.1,4.2l9.1,6.2l4.9,8.8l3,10.7h1.1l-0.4,1.5l4.1,10.7   l1.5,0.8l0.4,1.9l3.4,5l2.6,9.6l4.5,7.3l4.9,3.9l11.3,19.6l4.5,5.4l7.6,3.9l-0.1,14.9l3.8,3.5l-0.1,8l-0.8,1.9l3.4,7.3l4.5,4.2   l4.9,13.8l2.6,10l14.9,4l3.4,4.6l3.1-0.7l15.6,9.7l6.5,1.6l8.8-1.5l3.4,1.9l6.1,0.1l1.1,3.5l4.2,2l15.3-1l0.8-5l-0.4-1.1l-1.2,3.1   l-1.1-1.2l-1.5,2.3l-0.3-4.2l1.9-1.5l-1.1-0.8l-1.9,0.7l-1.1-5.8l-1.9-0.8l-1.8-8.8l-2.2-11.5l-2.2-11.1l-2.7-2.3l0.5-7.6l2.7-2.6   l-0.7-2.7l2.7-3l-0.3-5.4l-4.2,1.1l-5.4-0.4l-3-2.3l2.3-1.1l-4.5-8.1l1.2-0.4l5.3,8.5h1.5l-0.4-1.9h2.3l1.2-4.2h1.5l-0.4,4.2   l-1.9,1.5l1.9,1.2l3.9-4.6l1.2-3.4l1.2-1.5l1.6-5l2-5.3l-0.7-2.7l-2.3,3l-1.1-0.4l1.2-2.7l-1.9-2.7l0.8-4.2l6.1,0.1l4.6-2.6   l-4.9-9.6l7.7-6.8l1.9,2.3l2.7-0.7l-0.7-4.6l3.1-0.7l-1.2,6.1l5.4-3.4l0.8-5l0.1-9.6l3,3.9l0.4,3.1l1.5,1.2l10.4-6.4l-1.1-2.7   l-3.8,1.1l-1.1-1.2l2.7-1.9l-2.3-2.7l-3.5,0.7l0.8-2.7l-1.1-5.4l8.4,3.5l0.4,2.3l-1.2,2.3l3.8-2.3l-0.3-6.1l3.4,3.5l3.2-1.1   l-0.6,4.6l1.1,1.2l18.1-10.6l2.3,1.2l-26.9,18.1l1.1,0.8l34.6-22.6L486.8,306.3z M312.1,78.7l-21.8,0.2l-0.2-24.1l20.3-0.2l1.9,0.4   L312.1,78.7z").attr({id: '_x3C_Service_Territory_Highlight_fill_x3E_',opacity: '0.6',fill: '#FFFFFF',"enable-background": 'new    ',parent: 'BASE_LAYER','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_Service_Territory_Highlight_fill_x3E_');
        BASE_LAYER.attr({'id': 'BASE_LAYER','name': 'BASE_LAYER'});
        var MAJOR_HIGHWAYS_LAYER = rsr.set();
        var _x3C_major_highway1_x3E_ = rsr.path("   M32.5,161.5c3.2,1.5,6.5,2.4,8.3,4c2.7,2.3,4.1,6.2,6.1,9c3.1,4.4,9.8,3.1,13,7.4c3.5,4.7,5.5,13.5,12.4,13.5   c3.2,0,5.1-1.2,8.1,0.3c3.4,1.7,7.1,3,10.7,4.5c2.9,1.2,6,1.9,9,2.8c2.1,0.7,4.8,1.3,8.9,1.1l14.7-1.7c0,0,5.9-0.2,10-0.2   c0.2,0,5.1-1.8,5.1-1.8l9.6-9.7c1.8-1.2,2.7-2.4,4.9-3.2c1.6-0.6,3.1-1.3,4.7-2c3-1.3,6.9,0.2,9.2-2.2c2.8-2.8,5-2.8,8.5-4.2   c2.7-1.1,5.4-2.2,8.3-2.7c3.1-0.6,5.5-1.7,8.2-3.2l14-9.7c0.9-1.3,3.6-0.9,5.1-2c1.9-1.5,3.9-3.1,5.9-4.5c2.1-1.5,4.7-1.5,6.8-3.1   c1.8-1.3,3-3.8,5-4.7c0-0.2,0-0.3,0-0.5c0.1-0.1,0.2,0,0.4-0.2c0.9-1.3,3.1-1.9,4.5-2.5c2-0.9,4.2-2,6.1-3.2c3.9-2.5,8-4.2,12.6-5   c2.5-0.5,4.2-1.1,6.4-2.2c1.6-0.8,3.9-1.7,5.7-2c2.2-0.3,3.6-0.2,5.6-1.3c1.4-0.7,2.9-0.7,4.5-0.9c1-1.5,5.8-0.8,7.6-0.9   c3.1-0.3,5.6-1.5,8.8-1.7c1.9-0.1,3.3-0.4,4.9-1.4c1.5-0.8,2.4-0.9,4.1-1.1c3.2-0.5,6.3-0.5,9.4,0.1c2.1,0.4,4.2,0.9,6.4,1   c2,0.1,3.4-0.7,5.1-0.7c2.2-0.1,3.5,1.8,5.3,2.6c1.9,0.8,3.9,1.2,5.9,1.5c4.7,0.8,9.4,1.8,14.2,1.8c3.9,0,7.7,0,11.6,0   c7.6-0.5,13.7-7.3,21.4-7.3c1.2,0,2.4,0.1,3.5-0.3c1.3-0.5,2.7-1.2,3.9-1.9c3.3-1.8,6.4-3.7,9.3-6.1c3.1-2.6,5.8-4.2,9.9-4.5   c3.1-0.3,6.3-0.3,9.1,0.9c1.8,0.7,3.4,1.7,5.3,2.1c1.1,0.2,2.2,0.2,3.3,0.4c1,0.1,1.9,0.4,2.9,0.4c2.1-0.1,4.3-0.2,6.4-0.2   c3.7,0,7.4,0.4,11,0.7c2.7,0.2,5.3,0.9,8.1,0.7c2.8-0.2,4.9-2.6,7.7-2.4c2.9,0.2,6-0.7,8.8,0c3.7,0.8,7.2,1.9,10.7,3.3   c3.9,1.6,7.8,3,11.6,4.6c3,1.3,5.5,1.4,7.2,2.4c0.8,0.5,1.8,0.6,2.8,0.8c1.7,0.4,3.4,1,5.1,1.4c4.2,0.7,8.5,0.6,12.7,0.9   c5.6,0.4,11.2,0.6,16.8,0.6c1.8,0,4.4-0.9,6.2-1.2c2.9-0.6,5.8-1.4,8.8-1.4c2.4,0,4.9-0.1,7.3,0c1.7,0.1,7.9,0.1,7.9,0.1").attr({id: '_x3C_major_highway1_x3E_',fill: 'none',stroke: '#EFCC9E',"stroke-width": '2',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'MAJOR_HIGHWAYS_LAYER','stroke-opacity': '1'}).data('id', '_x3C_major_highway1_x3E_');
        var _x3C_major_highway2_x3E_ = rsr.path("   M137.8,200.8c2.8,0.5,5.8,2.7,8.3,4c1.8,0.9,2.9,1,5,1.1c2,0.1,3.7,0.8,5.6,1.2c2.6,0.6,5.1,0.7,7.7,1.4c2.2,0.5,4.4,0.9,6.6,1.4   c5.4,1.2,10.9,1.9,16.5,2.2c3,0.1,5.9-0.1,8.9,0.2c1.8,0.2,3.4,1.2,5.1,1.3c1.9,0.1,4.1-0.7,6-0.9c2.7-0.3,5.3-0.4,8.1-0.4   c4.8,0,7.9,0.4,11.7,3.4c3.1,2.5,5.9,3.9,10,4.3c2.4,0.2,5.2-0.2,7.6,0.5c1.8,0.5,3.3,1.6,5.1,2.1c2.3,0.6,4.4,0.9,6.8,0.8   c1.9-0.1,3.8-1.3,5.6-1.2c5.2,0.2,8.5,1.1,12.9,3.3c1.9,1,3.3,0.9,5.2,1.4c1.4,0.4,2.4,1.6,3.8,1.9c1.9,0.4,3.7-0.1,5.6,0.8   c1.6,0.8,3.4,1.9,5.1,2.8c3.9,2,7.7,4.4,12.2,3.6c4.2-0.8,7.8-3.7,12.1-3.8c2.4,0,2.5,0.1,3.7,2c0.3,0.5,0.8,1.4,1.3,1.8   c0.8,0.6,2,0.3,2.9,0.9c1.1,0.8,1.8,2.7,2.4,3.9c0.4,0.8,0.5,1.8,1,2.4c0.5,0.6,1.5,1.1,2,1.8c2.2-0.3,6.3,2.6,8.2,3.6   c2.3,1.2,3,3.5,5,4.9c2.1,1.5,4.7,1.9,7,3.1c2.6,1.4,4.7,2.7,6.5,5l4.2,6.6c0,0,12.3,21.5,12.3,22.4").attr({id: '_x3C_major_highway2_x3E_',fill: 'none',stroke: '#EFCC9E',"stroke-width": '2',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'MAJOR_HIGHWAYS_LAYER','stroke-opacity': '1'}).data('id', '_x3C_major_highway2_x3E_');
        var _x3C_major_highway3_x3E_ = rsr.path("   M371.2,286.9c-2.3,1.9-2.8,3.7-2,6.9c0.5,2.3,2.2,2.6,4.4,3c1.2,0.2,4.7,1.2,5.8,0.4c1.2-0.9,1-4.4,1.1-5.8c0.1-1.6,1-4.7-0.2-5.7   C377.5,283.3,374.4,284.9,371.2,286.9z").attr({id: '_x3C_major_highway3_x3E_',fill: 'none',stroke: '#EFCC9E',"stroke-width": '2',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'MAJOR_HIGHWAYS_LAYER','stroke-opacity': '1'}).data('id', '_x3C_major_highway3_x3E_');
        var _x3C_major_highway4_x3E_ = rsr.path("   M329.3,393.9c0.6-5.1,3-7.5,4.2-10.1c1.5-3.2,2.7-6.8,3.9-10.2c1.6-4.5,2.3-9.3,3.2-14.1c0.7-3.7,0.2-7.2,1.3-10.9   c0.8-2.7,0.8-5.9,1.3-8.6c0.4-2.8,1.5-5.2,2.5-7.8c1.6-4.1,2.8-7.7,3.5-11.9c0.6-3.3,0.7-6.6,3.2-9.2c2.8-3,6.6-5.2,9.2-8.3   c1.3-1.5,1.7-2.8,3.6-3.7c1.7-0.8,3.3-1.6,4.9-2.6c2.5-1.5,5-2.7,6.1-5.8c3.7-1.4,8-2.1,11.7-3.8c2-0.9,4.2-1.6,6.2-2.6   c1.8-0.9,3.3-2,5.2-2.6c2.1-0.6,4.1-0.5,6.2-1.5c2.3-1.1,3.9-2,6.5-2.1c4.9-0.3,9.8-0.5,14.8-0.5c6.7,0,13.4-1.8,20.2-1.8   c5.1,0,11.5,1,16.4-0.2c2.3-0.6,4.5-1.9,6.7-2.8s4.4-0.9,6.8-1c3.6-0.2,7.2,0,10.7,0c6,0,12.4,0,18.4,0c3.6,0,6.9,0.3,10.4,0.5   c3.4,0.2,5.3-2,8.4-2.5c4.2-0.6,9.3-0.2,13.6,0c1.8,0.1,3.6,0.3,5.4,0.2c1.5-0.1,2.5-0.8,3.8-1.1c3.2-0.7,6.4-3.6,9.1-5.4   c2.8-1.9,4-4.7,6.3-7c2.3-2.2,6.3-3,9.4-3.1c1.9-0.1,6.1-0.6,7.5,0.7").attr({id: '_x3C_major_highway4_x3E_',fill: 'none',stroke: '#EFCC9E',"stroke-width": '2',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'MAJOR_HIGHWAYS_LAYER','stroke-opacity': '1'}).data('id', '_x3C_major_highway4_x3E_');
        var _x3C_major_highway5_x3E_ = rsr.path("   M471.3,162.7c0.5,1.3,1.9,2.2,2.7,3.3c1.2,1.7,1.7,3.5,2,5.5c0.6,4.5,1.8,7.3,4,11.2c0.9,1.6,1.9,3.3,2.4,5.1   c0.5,2,0.2,4.2,0.3,6.3c0.1,2.2,0.3,4.4,0.8,6.5c0.4,1.6,1.3,4.6,2.4,6.1c1.4,1.9,4.2,2,5.7,3.9c0.7,0.9,0.7,2.1,1.4,2.9   c0.9,1.1,2.2,2,3.2,2.9c1.7,1.4,3.5,3.4,5,5.1c0.5,0.6,1,1.3,1.3,2c0.5,1,0.5,2,0.9,2.9c1.9,4.5,0.3,10.4,2.1,15.2   c1.8,4.9-0.3,10.3,0.6,15.4c0.6,3.3,1.8,7.1,2.7,10.5c0.8,3.1,2.2,7.8,5.1,9.7c0.3,1.7,2.3,2.8,3.4,4c1.5,1.5,2.5,3.3,3.6,5   c1,1.5,1.7,3.4,2.7,4.9c0.9,1.3,2.6,2.2,3.4,3.5").attr({id: '_x3C_major_highway5_x3E_',fill: 'none',stroke: '#EFCC9E',"stroke-width": '2',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'MAJOR_HIGHWAYS_LAYER','stroke-opacity': '1'}).data('id', '_x3C_major_highway5_x3E_');
        var _x3C_major_highway6_x3E_ = rsr.path("   M433.8,87.6c-0.8,1.8-2.7,3.2-3.8,4.8c-1.1,1.5-1.8,3.9-2.4,5.7c-0.8,2.5-0.9,5.2-1.1,7.7c-0.2,1.9-0.6,3.8-0.7,5.7   c-0.2,4-0.8,8.1,1,11.6c1.9,3.7,3.9,7.6,4.9,11.8c0.4,1.5,0.8,3.1,1.5,4.3c1.2,2,1.4,5.6,1.8,7.9c0.5,3,0.2,5.9-0.1,8.9   c-0.4,3.7,0,7.6,0,11.3c0,2.2,1.2,7.5-0.2,9.4c-1,1.4-3.2,6.4-3.8,8.2c-1.1,3.1-2.3,6.2-3.6,9.2c-0.8,2-0.8,5-2.3,6.5   c-1.6,1.6-4.7,1.9-5.8,4c-1.8,3.4-2.7,6.9-4.4,10.3c-0.8,1.5-1.3,2.9-1.6,4.5c-0.2,1.7-1,2.4-1.6,4c-1.3,3.1-1.1,6.3-1.1,9.7   c0,3.2,0.8,6.8-0.5,9.6c-1.9,4.1-3.1,9.4-4.9,13.5c-2,4.4-3.7,9-5.7,13.4c-1.5,3.2-4,5.5-7.2,7.2c-2.1,1.1-4.3,1.5-6.4,2.9   c-2,1.4-3.6,3.7-5.6,4.9").attr({id: '_x3C_major_highway6_x3E_',fill: 'none',stroke: '#EFCC9E',"stroke-width": '2',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'MAJOR_HIGHWAYS_LAYER','stroke-opacity': '1'}).data('id', '_x3C_major_highway6_x3E_');
        var _x3C_major_highway7_x3E_ = rsr.path("   M419.5,377.5c-1.2-0.9-3.5-2.6-4.8-2.9c-1.7-0.5-1.6-2.4-2.1-3.8c-0.8-2.2-2.2-3.7-3.9-5.4c-3.2-3.2-3.2-8.7-7.2-10.7   c-1.8-0.9-3.1-3.5-4.2-5.2c-1.8-2.9-4-6.3-6.4-8.7c-1.8-1.8-2.3-4.4-3.8-6.7c-1.5-2.3-0.7-4.1-1.4-6.7c-0.5-1.8-2.4-2.2-3.3-3.4   c-0.4-0.6-0.8-1.6-1.1-2.2c-0.4-0.7-0.8-1.3-1.4-1.9c-1.2-1.3-2.1-1.9-2.3-3.7c-0.1-1.2,0-2.6,0.2-3.8c0.3-1.3,0.9-2.3,1.2-3.5   c1-3.3,0.2-7.6,0.5-11c0.1-1.4,0.1-2.7-0.7-3.8c-0.7-0.9-2.2-1.1-2.1-2.5").attr({id: '_x3C_major_highway7_x3E_',fill: 'none',stroke: '#EFCC9E',"stroke-width": '2',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'MAJOR_HIGHWAYS_LAYER','stroke-opacity': '1'}).data('id', '_x3C_major_highway7_x3E_');
        var _x3C_major_highway8_x3E_ = rsr.path("   M433.1,61.4c0,3.9-0.1,7.6-0.5,11.3c-0.3,3.2-0.7,6.9-0.3,10.1c0.5,3.6,3.2,5.4,4.8,8.4c0.8,1.4,1.3,2.9,2.1,4.2   c0.9,1.4,2.4,2.2,3.5,3.4c1.3,1.5,1.8,3.8,3.4,4.7").attr({id: '_x3C_major_highway8_x3E_',fill: 'none',stroke: '#EFCC9E',"stroke-width": '2',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'MAJOR_HIGHWAYS_LAYER','stroke-opacity': '1'}).data('id', '_x3C_major_highway8_x3E_');
        var _x3C_major_highway9_x3E_ = rsr.path("   M563.4,74c-4,0-9-0.4-13,0.1c-2.1,0.3-4.2,0.5-6,1.8c-1.7,1.3-2.2,2.6-3.3,4.4c-0.9,1.5-1.7,2.3-3.4,2.9c-1.6,0.5-3.4,0.1-4.8,0.9   c-1.6,1-2.4,3-3.7,4.4c-1.8,1.9-4.1,1.9-6.7,2c-3.9,0.2-7.9-0.2-11.8,0c-2.3,0.1-4.7,0.5-6.9,1.2c-1.3,0.4-2.4,1.4-3.8,1.3   c-4.1-0.2-8.8-0.5-13-0.5c-2,0-7.5-0.7-9.1,0.6c-0.9,0.7-1.1,2.6-1.9,3.6c-1.1,1.3-2.5,2-4.1,2.7c-3.3,1.5-6.8,2.9-9.7,4.9   c-2.2,1.5-4.8,2.4-7.2,3.6").attr({id: '_x3C_major_highway9_x3E_',fill: 'none',stroke: '#EFCC9E',"stroke-width": '2',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'MAJOR_HIGHWAYS_LAYER','stroke-opacity': '1'}).data('id', '_x3C_major_highway9_x3E_');
        var _x3C_major_highway10_x3E_ = rsr.path("   M452.8,117.4c2.7,4.6-0.4,11.1,2.1,15.6c1.2,2.3,3.8,3.1,5.4,5.1c2.3,2.8,1.2,6.2,2.3,9.4c0.5,1.6,0.3,3.4,0.7,4.9   c0.6,2.1,2.7,5.5,4.3,6.9c0.6,0.5,3.3,2.9,3.4,2.8").attr({id: '_x3C_major_highway10_x3E_',fill: 'none',stroke: '#EFCC9E',"stroke-width": '2',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'MAJOR_HIGHWAYS_LAYER','stroke-opacity': '1'}).data('id', '_x3C_major_highway10_x3E_');
        var _x3C_major_highway11_x3E_ = rsr.path("   M447.5,117.3c0,3.4-0.1,6.3-1.2,9.5c-0.7,2.1-1.9,4.8-1,7c1.6,3.5-0.1,8-2.3,11.1c-1.2,1.6-2.4,2.6-4.2,3.6c0,0-2.7,1.3-3.7,1.9").attr({id: '_x3C_major_highway11_x3E_',fill: 'none',stroke: '#EFCC9E',"stroke-width": '2',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'MAJOR_HIGHWAYS_LAYER','stroke-opacity': '1'}).data('id', '_x3C_major_highway11_x3E_');
        var _x3C_major_highway12_x3E_ = rsr.path("   M418.5,115c0.7-1.7,1.5-4.2,2.7-5.6c1.6-1.9,9.6-3.7,10.1-0.2c0.4,2.2,0.2,5.9-2,6.9").attr({id: '_x3C_major_highway12_x3E_',fill: 'none',stroke: '#EFCC9E',"stroke-width": '2',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'MAJOR_HIGHWAYS_LAYER','stroke-opacity': '1'}).data('id', '_x3C_major_highway12_x3E_');
        var _x3C_major_highway13_x3E__1_ = rsr.path("   M447.5,117.3c0-1.9-0.2-5.3-0.9-7.3c-0.7-2-1.9-3.3-2.4-5.4l1.9-0.9c0,0,1-0.3,3.3-0.4c2.1-0.1,2.7,1.1,3.9,2.6   c2,2.4,4.5,6.7,3,10.1").attr({id: '_x3C_major_highway13_x3E__1_',fill: 'none',stroke: '#EFCC9E',"stroke-width": '2',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'MAJOR_HIGHWAYS_LAYER','stroke-opacity': '1'}).data('id', '_x3C_major_highway13_x3E__1_');
        var _x3C_major_highway13_x3E_ = rsr.path("   M233.1-0.1c0.1,2.1,0.1,4.3,0.4,6c0.7,3.4,1.1,7.3,1.9,10.7c1.3,5.2,3.5,11.6,2.2,17.7c-0.7,3-2.7,4.1-4.1,6.8   c-1.5,2.9-1.7,6.5-1.7,9.8c0,3,0,6,0,9c0,1.8,0,6.6,0,6.6c0,3.2,1.3,6.4,2.1,9.4c0.7,2.7,0.8,5.5,0.8,8.6c0,5.5,1.2,12.7-1,17.7   c-2.5,5.8-8,9.2-2.3,15c4.2,4.3,10.1,8,13.7,12.7c1.6,2.1,1.8,7.5,3.6,8").attr({id: '_x3C_major_highway13_x3E_',fill: 'none',stroke: '#EFCC9E',"stroke-width": '2',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'MAJOR_HIGHWAYS_LAYER','stroke-opacity': '1'}).data('id', '_x3C_major_highway13_x3E_');
        MAJOR_HIGHWAYS_LAYER.attr({'id': 'MAJOR_HIGHWAYS_LAYER','name': 'MAJOR_HIGHWAYS_LAYER'});
        var NON_SERVICE_COUNTIES = rsr.set();
        var path_q = rsr.path("M561.2,201.8l3.8-1.5l5.7-1.5l0.8,48.9   l-9.6,0.7l1.3-15.6l0.4-7.3l-9.7-21.1L561.2,201.8z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_q');
        var path_r = rsr.path("M505.4,149.2l-26.1,4l-0.8,3.1l3.8,4.2v4.2   l4.5,4.7l3.5,0.4v3.8l1.8,5.4l20.7-4.4l-7.1-13.5L505.4,149.2z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_r');
        var path_s = rsr.path("M217.2,124.5l-34.7,0.1l0.1,23.4h8.7   l22.6-0.2l3.1,0.1L217.2,124.5z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_s');
        var path_t = rsr.path("M524.6,184.2l5.8-5.7l22.4,16.3l8.4,7   l-7.3,2.6l-6.5,0.7l-4.6-1.6l-11.8-4.7l-4.9-12.3L524.6,184.2z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_t');
        var path_u = rsr.path("M357,55.4l22.6-0.2L379,75.5l-0.4,3.4   l-21.8,0.2L357,55.4z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_u');
        var path_v = rsr.path("M243.3,0   l-0.1,5.6").attr({fill: 'none',stroke: '#DBD8BD',"stroke-linecap": 'round',"stroke-linejoin": 'round',"stroke-miterlimit": '3.8637',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_v');
        var path_w = rsr.path("M475,257.6l-5.7-1.9l-14.6,2.5l2.3,5.4   l15.9,16.9l4.2,2.4l2.3-1.1l0.4-6.2L475,257.6z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_w');
        var path_x = rsr.path("M200.8,29.1v25.3h-18.2l-0.1-25L200.8,29.1z   ").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_x');
        var path_y = rsr.path("M357,272.7l-11.4-6.6l-18.7,0.9v13.8   l8.6,0.1l18.4-0.6l0.7,4.6l6.2-7.2l1.6-1.9L357,272.7z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_y');
        var path_z = rsr.path("M422.4,239.2l12.1,8.9l2.6,9.6l-12.4,14.8   l-13.6-15.4L422.4,239.2z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_z');
        var path_aa = rsr.path("M357,55.4l-22.9,0.2l-0.1,3.8l0.2,19.5   l22.6,0.2L357,55.4z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aa');
        var path_ab = rsr.path("M427,192.2l-3.1,1.5l-3-3.9l-20.8,14v1.5   l3.4,7.7l8.4,0.8l13.7,6.7l1.6-7.3l8.4-5.3L427,192.2z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ab');
        var path_ac = rsr.path("M362.4,275.8l6.1-2.3l12.6,1.3l-2.3,3   l3.4,4.3l7.2,8.8l-11.3,16.7l-17.9-7.8l0.6-22.1L362.4,275.8z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ac');
        var path_ad = rsr.path("M370.8,233.8l9.9-0.3l10.7,4.6l-1.6,4.2   l-6.6,15.7l-5.4,5.7l-7.2-9.3L370.8,233.8z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ad');
        var path_ae = rsr.path("M238.8,101.4l6.9,0.1l15.7,0.1l-0.2,23.3   l-22.6-0.2L238.8,101.4z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ae');
        var path_af = rsr.path("M419,144.3l-3.9,1.1l-1.8-3.5l-10.8,6.8   l-6.2,4.2l9.4,18l3.9-2.2l3.7,6.9l13.5-8.3L419,144.3z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_af');
        var path_ag = rsr.path("M565.6,85.1V70.5l-1-0.7l-0.4-0.4l-1.5,0.4   h-1.2h-0.3l-1.6-1.2l-0.3-0.4l-1.2,0.4v0.8l-0.8,0.7h-0.7l-0.4-0.4l-1.2,0.4l-0.4,0.8l-2.2-0.4l-1.6,0.3l-0.4-0.7l-0.7-0.4   l-1.2-0.8l-0.3-0.8l-0.8-0.4l-0.4-1.9l-0.3-0.4l-2.3,0.4l-1.2-1.5l-7.2-3.2l-0.2,21.1l4.2,4.2l8.8-2.2L565.6,85.1z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ag');
        var path_ah = rsr.path("M505,283.1l6.9-1.1l2.3,2.4l-0.5,4.5   l6.4,13.9l-3.4-0.4l-3.1,5.3l3,1.9l-1.9,3.1l-15,10.5l-12.9-16.9l-0.7-3.8l0,0l1.1-1.9l4.3-4.6l4.5,2.4l3.9-7.7l3.9-0.3L505,283.1z   ").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ah');
        var path_ai = rsr.path("M471.2,209.4l2.6,8l0.9,26.4l-1.5-3.4   l-4.6,0.7l0.1-3.8l-3.1-5.4l-9.1-5l0.4-2.7l5.4-4.2l4.3-9.1L471.2,209.4z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ai');
        var path_aj = rsr.path("M456.9,224.2l-2.3-2.3l-13.4,9l1.5,5l11,9.3   l14.9-4.1l0.1-3.8l-3.1-5.4l-9.1-5L456.9,224.2z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aj');
        var path_ak = rsr.path("M400.1,205.3l3.4,7.7l-5.8,4.2l-4.3,10.2   l-2.7,6.1l2.2,1.2l-1.5,3.4l-10.7-4.6l-3.6-21.9l-0.7-5.7L400.1,205.3z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ak');
        var path_al = rsr.path("M532.6,100.9l3.8,3.9l-18-0.2v-3.1l-0.3-2.6   l1.1-0.8l8.1-2.6L532.6,100.9z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_al');
        var path_am = rsr.path("M565.6,106.9L565.6,106.9V85.1l-16.8-0.9   l-8.8,2.2l-0.2,19.5L565.6,106.9z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_am');
        var path_an = rsr.path("M225.5,5.6h-5.3h-15.6v23.6l19.1-0.2   l1.8,0.4V5.6z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_an');
        var path_ao = rsr.path("M550.6,266.7l-3,0.3l-23.4,0.2l3.1,3.5   l-0.5,7.3l9.3-8.4l0.7,1.2l-4.3,13l0.4,1.5l9.2-3l1.5,2.3l6.1-2.2l0.4,1.5l0.8-0.8L550.6,266.7z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ao');
        var path_ap = rsr.path("M525.2,161.7l-0.1,8l5.3,8.8l-5.8,5.7   l-8-8.8l-3.8-0.8l-7.1-13.5l-0.3-11.9l-0.8-3l20.3,0.2L525.2,161.7z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ap');
        var path_aq = rsr.path("M398.4,51.5l1.1-3.8l-2.2-1.5l-2,0.7   l-2.6-4.6l1.2-1.9l-2.3-1.9l-3.5,1.8l-2.6-0.4l-1.9-1.5l-2.3-0.4l-2,3.8l0.3,13.4L379,75.5l18.8,0.1L398.4,51.5z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aq');
        var path_ar = rsr.path("M446.7,78.7l19.1,0.2V82l3.8-0.4l-0.5,19.9   l-9.2-0.1l-13.8-0.5L446.7,78.7z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ar');
        var path_as = rsr.path("M377.8,263.7l5.4-5.7l11.7,15.7l-12.7,8.4   l-3.4-4.3l2.3-3l-12.6-1.3L377.8,263.7z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_as');
        var path_at = rsr.path("M388.3,157.8l-2.3-3.5l-3.5,1.5L378,147   l-4.5-7.7l-16.2,9.8l11.3,20.4l6.2-1.1l1.1,2.3l13.8-9.1L388.3,157.8z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_at');
        var path_au = rsr.path("M442,49.2l-1.2,3.8l-2.7,3.1l-3-1.2   l-0.1,6.5l-2.7,0.7l-0.7-5.7l0.4-2.7l-2.3-2.3l-1.9,3.1l-2.3-0.4l-2.3,3.4l-2.7-1.6l-1.5-4.6l-0.2,25.6l4.2,0.9l19.1,0.1L442,49.2z   ").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_au');
        var path_av = rsr.path("M387.7,182.6l18-11.7l3.9-2.2l3.7,6.9   l7.6,14.2l-20.8,14L387.7,182.6z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_av');
        var path_aw = rsr.path("M268.3,54.2l-22.6,0.2l0.1,24.3h22.6   L268.3,54.2z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_aw');
        var path_ax = rsr.path("M135.4,199.6l4.7-48.5H104h-2.6l-0.6,72.6   L135.4,199.6z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ax');
        var path_ay = rsr.path("M459.9,101.4l0.3,8.8l-0.9,14.5l-21.4-0.1   l0.6-23.4l7.6-0.3L459.9,101.4z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ay');
        var path_az = rsr.path("M217.4,101.2l-0.2,23.3l21.4,0.2l0.2-23.3   l-15.3-0.2H217.4z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_az');
        var path_ba = rsr.path("M220.2,5.6   l0.1-5.6").attr({fill: 'none',stroke: '#DBD8BD',"stroke-linecap": 'round',"stroke-linejoin": 'round',"stroke-miterlimit": '3.8637',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ba');
        var path_bb = rsr.path("M182.6,5.7").attr({fill: 'none',stroke: '#DBD8BD',"stroke-linecap": 'round',"stroke-linejoin": 'round',"stroke-miterlimit": '3.8637',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bb');
        var path_bc = rsr.path("M488.4,78.3l0.4-3.8l4.2-1.9l18.7,7.5   l-6.1-0.1l-17.3,7.5L488.4,78.3z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bc');
        var path_bd = rsr.path("M442.1,77.9L423,77.8l-0.2,22.9l15.7,0.5   l7.6-0.3l0.6-22.2L442.1,77.9z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bd');
        var path_be = rsr.path("M213.9,147.8l-0.6,23.4h-0.7l-20.7-0.2h-0.6   v-23L213.9,147.8z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_be');
        var path_bf = rsr.path("M435.2,124.9l2.7-0.3l21.4,0.1l3.7,10   l2.3,1.6l-21.5,13.2l-2.7,1.1l-5.6-11.5L435.2,124.9z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bf');
        var path_bg = rsr.path("M56.4,183.2l-1.1-4.6l-0.2-27.5H29.7h-1.4   l3.8,11.6L45.7,180l5.7,3.9L56.4,183.2z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bg');
        var path_bh = rsr.path("M377.1,125.9l17.2,0.2l5.2,14.2l3,8.4   l-6.2,4.2l-8,4.9l-2.3-3.5l-3.5,1.5L378,147l-4.5-7.7l3.5-2.7L377.1,125.9z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bh');
        var path_bi = rsr.path("M456.4,195.5l-9-16.5L427,192.2l8.6,15.7   l10.8-6L456.4,195.5z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bi');
        var path_bj = rsr.path("M488.2,53.8l-12.2,3l-1.2,3l-5.8,1.1   l-1.1,2.3l-1.9-1.1l-0.2,16.8V82l3.8-0.4l18.8-3.3l0.4-3.8L488.2,53.8z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bj');
        var path_bk = rsr.path("M454.7,258.2l-1.9-5.4l-4.9-0.8l-10.8,5.7   l-12.4,14.8l7.2,8.1l11.9,0.1l13.2-17.1L454.7,258.2z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bk');
        var path_bl = rsr.path("M245.5,29.2h2.7l19.9,0.1l0.2,24.9   l-22.6,0.2L245.5,29.2z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bl');
        var path_bm = rsr.path("M477.1,282.9l2.3-1.1l0.4-6.2l8.4-3.3   l16.8,10.8l-1.2,7.3l-3.9,0.3l-3.9,7.7l-4.5-2.4l-4.3,4.6l-9.8-14.7L477.1,282.9z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bm');
        var path_bn = rsr.path("M519.4,79l-7.7,1.1l-0.2,21.4h6.9l-0.3-2.6   l1.1-0.8L519.4,79z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bn');
        var path_bo = rsr.path("M460.5,164.9l18.8-11.7l-0.8,3.1l3.8,4.2   v4.2l4.5,4.7l3.5,0.4v3.8l-18.9,10.9L460.5,164.9z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bo');
        var path_bp = rsr.path("M200.8,101.1h-18.2l-0.1,23.5l34.7-0.1   l0.2-23.3L200.8,101.1z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bp');
        var path_bq = rsr.path("M514.2,284.4l4.9,1.5l3.5-1.1l3.8,2   l-1.2,2.6l2.3,2.3l-0.8,5.4l-6.6,5.7l-6.4-13.9L514.2,284.4z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bq');
        var path_br = rsr.path("M543.6,284.6   l-10,6.4l-0.8,2.3h1.5l15.8-9.4l-0.4-1.5L543.6,284.6z").attr({fill: 'none',stroke: '#DBD8BD',"stroke-linecap": 'round',"stroke-linejoin": 'round',"stroke-miterlimit": '3.8637',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_br');
        var path_bs = rsr.path("M268.4,78.7h-22.6l-0.1,22.8l15.7,0.1l7-0.1   V78.7z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bs');
        var path_bt = rsr.path("M354.7,234l-13.8-0.1l0.3,12.2l-0.1,8.1   l15.7,0.5l13.8-0.3l0.2-20.6L354.7,234z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bt');
        var path_bu = rsr.path("M257.1,148.2l-0.2,23.4l-21.4-0.2l0.2-23.4   l2.7,0.1L257.1,148.2z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bu');
        var path_bv = rsr.path("M466,62.1l-2.7-2.7l-7.2-2.8l1.5-2.3   l-0.3-1.5l-3.1-1.2l-3.1,5l-2.7-2l-2.6,0.8l-2.3-6.5l-1.5,0.3l0.1,28.7l4.6,0.8l19.1,0.2L466,62.1z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bv');
        var path_bw = rsr.path("M525.1,125.3l-0.1,8.4l16.5-0.2l0.8-1.5   l-5.4-2l0.1-11.5l-2.3-0.8L525.1,125.3z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bw');
        var path_bx = rsr.path("M474.7,243.8l2.3,5.4l12.2-1l-0.9-21.1   l-1.5-11.8l-13,2.1L474.7,243.8z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bx');
        var path_by = rsr.path("M223.7,29l0.2,25.6l21.8-0.2l-0.2-25.2   l-20,0.2L223.7,29z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_by');
        var path_bz = rsr.path("M388.3,157.8l8-4.9l9.4,18l-18,11.7   l-3.9,2.7l-7.9-14.6l13.8-9.1L388.3,157.8z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_bz');
        var path_ca = rsr.path("M534.9,234.8l5.9,19.6l6.5,0.4l6.1,0.1   l0.8-2.7h7.3l0.4-3.8l1.3-15.6l-20.3,0.2L534.9,234.8z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ca');
        var path_cb = rsr.path("M524.2,267.2l-4.8-15.7l-8.1,7.6l-10.6-7.4   l-11.5,4.5l-6.9-4.6l5.9,20.7l16.8,10.8l6.9-1.1l2.3,2.4l4.9,1.5l3.5-1.1l1.5-3.4l-1.8-5.4l1.9-1.1l2.6,3.1l0.5-7.3L524.2,267.2z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cb');
        var path_cc = rsr.path("M565.6,133.7v-17.4l-8.6-2.6l-10.8,2.2   l-9.1-5.8l-0.1,8.4l-0.1,11.5l5.4,2l3.8,0.4l6.5,2.7L565.6,133.7z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cc');
        var path_cd = rsr.path("M408,260.1l-18.2-17.8l-6.6,15.7l11.7,15.7   l5.8-5.3L408,260.1z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cd');
        var path_ce = rsr.path("M478.4,133.7l-15.4,1l2.3,1.6l9.5,5.8   l-0.4,2.3l2.7,1.2l2.2,7.6l26.1-4l-0.8-3l0.2-12.3L478.4,133.7z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ce');
        var path_cf = rsr.path("M443.8,149.5l-2.7,1.1l-5.6-11.5l-16.5,5.2   l0,0l7.8,23l10.4-6.4l5.3,8.8l8.8-6L443.8,149.5z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cf');
        var path_cg = rsr.path("M223.9,54.6l-23.1-0.2l-0.1,24.3h23.2V54.6z   ").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cg');
        var path_ch = rsr.path("M394.3,126.1v-1.9l18.7,0.1l-0.1,11.9   l-7.6,0.3l-5.8,3.8L394.3,126.1z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ch');
        var path_ci = rsr.path("M511.7,80.1l-6.1-0.1l-17.3,7.5l-0.1,13.8   l8.5,0.4l14.8-0.2L511.7,80.1z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ci');
        var path_cj = rsr.path("M492.1,179l3.8,10.3l-2,1.2l-2.4,11.4l5.4,2   l-2,4.2l2.3,3.4l8.1-7.6l20.8-17.4l-1.5-2.3l-8-8.8l-3.8-0.8L492.1,179z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cj');
        var path_ck = rsr.path("M238.6,124.7l22.6,0.2l-0.6,23.3h-3.5   l-18.7-0.1L238.6,124.7z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ck');
        var path_cl = rsr.path("M100.8,223.7l0.6-72.6H55.1l0.2,27.5   l1.1,4.6l0,0l6.8,11.5l1.9,2l3,1.5l3.8,3.5l8.7,11.2l17.1,10.8l0.8,1.9L100.8,223.7z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cl');
        var path_cm = rsr.path("M469.6,81.6l18.8-3.3l-0.1,9.2l-0.1,13.8   l-3.8-0.4l-0.8,7.2l-5,0.4l-9.2,0.3l-0.3-7.3L469.6,81.6z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cm');
        var path_cn = rsr.path("M379,75.5l18.8,0.1v1.5l2.6,0.1l-0.2,22.9   l-6.1,0.4l-15.3-0.6l-0.2-21L379,75.5z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cn');
        var path_co = rsr.path("M550.9,283.1l23.2-7.3l-3.4-4.1l4.8-7.3   l-13.3-8.3l-0.7-3.9h-7.3l-0.8,2.7l-6.1-0.1l0.3,12.2l3-0.3L550.9,283.1z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_co');
        var path_cp = rsr.path("M413,124.3l2.7,0.1l19.5,0.5l0.3,14.2   l-16.5,5.2l-3.9,1.1l-1.8-3.5l-0.4-5.7L413,124.3z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cp');
        var path_cq = rsr.path("M469.4,108.8l9.2-0.3l-0.2,25.2l-15.4,1   l-3.7-10l0.9-14.5L469.4,108.8z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cq');
        var path_cr = rsr.path("M370.6,254.4l7.2,9.3l-9.3,9.8l-6.1,2.3   l-5.4-3.1l-0.2-18L370.6,254.4z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cr');
        var path_cs = rsr.path("M356.8,254.7l-15.7-0.5l0.1-8.1l-21-0.2   l-0.5,11.1l3.8,0.1l-0.1,9.5l3.5,0.4l18.7-0.9l11.4,6.6L356.8,254.7z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cs');
        var path_ct = rsr.path("M312.3,55   l-1.9-0.4l-20.3,0.2l0.1,24.1l21.9-0.2L312.3,55z").attr({fill: 'none',stroke: '#DBD8BD',"stroke-linecap": 'round',"stroke-linejoin": 'round',"stroke-miterlimit": '3.8637',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ct');
        var path_cu = rsr.path("M511.2,52.1l-3.1,1.5l-5.3-1.2l-1.5-2.7   l-9.6,2.3l-1.6,2.2l-1.9-0.4l0.6,20.7l4.2-1.9l18.7,7.5L511.2,52.1z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cu');
        var path_cv = rsr.path("M200.8,29.1v25.3l23.1,0.2L223.7,29   l-19.1,0.2L200.8,29.1z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cv');
        var path_cw = rsr.path("M383.8,185.3l3.9-2.7l12.4,21.2v1.5   l-23.7,0.6l-4.9-11.2L383.8,185.3z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cw');
        var path_cx = rsr.path("M431.9,280.6l11.9,0.1l12.9,15.8l-4.3,4.5   l-11.6,11.4l-1.8-2.7l-11.8-15.4l2.4-11.8L431.9,280.6z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cx');
        var path_cy = rsr.path("M447.9,252l5.8-6.8l-11-9.3l-1.5-5l-9.3,5.7   l-9.5,2.6l12.1,8.9l2.6,9.6L447.9,252z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cy');
        var path_cz = rsr.path("M471.4,184.5l-4.2,4.2l4,20.7l11.2-7.6   l9.1,0.1l2.4-11.4l2-1.2l-3.8-10.3l-1.8-5.4L471.4,184.5z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_cz');
        var path_da = rsr.path("M534.9,234.8l5.9,19.6l6.5,0.4l0.3,12.2   l-23.4,0.2l-4.8-15.7l-2.6-8.8l13.1-7.6L534.9,234.8z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_da');
        var path_db = rsr.path("M442.5,169.7l4.9,9.3l9,16.5l10.8-6.8   l4.2-4.2l-10.9-19.6l-9.2-1.2L442.5,169.7z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_db');
        var path_dc = rsr.path("M377.1,211.6l-22.6-0.2l0.2,22.6l16.1-0.2   l9.9-0.3L377.1,211.6z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dc');
        var path_dd = rsr.path("M168,170.7v-19.6h-15.3h-11.6l4.2,7.6   l5.7,6.6l8,5.4H168z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dd');
        var path_de = rsr.path("M245.7,54.4l-21.8,0.2v24.1h21.9L245.7,54.4   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_de');
        var path_df = rsr.path("M245.8,78.7h-21.9v22.5l14.9,0.2l6.9,0.1   L245.8,78.7z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_df');
        var path_dg = rsr.path("M426.8,167.3l-13.5,8.3l7.6,14.2l3,3.9   l3.1-1.5l20.4-13.2l-4.9-9.3l-5.3-8.8L426.8,167.3z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dg');
        var path_dh = rsr.path("M497.2,211.5l-2.3-3.4l2-4.2l-5.4-2   l-9.1-0.1l-11.2,7.6l2.6,8l13-2.1L497.2,211.5z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dh');
        var path_di = rsr.path("M565.6,116.3v-9.4l-25.8-1h-2.7v4.2l9.1,5.8   l10.8-2.2L565.6,116.3z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_di');
        var path_dj = rsr.path("M238.6,124.7l-21.4-0.2l-0.2,23.4l18.7,0.1   l2.7,0.1L238.6,124.7z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dj');
        var path_dk = rsr.path("M354.5,211.4l0.2,22.6l-13.8-0.1l-9.2-0.5   v-10.7l-0.1-12.6l17.6,0.1l-0.1,1.2H354.5z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dk');
        var path_dl = rsr.path("M235.7,148l-18.7-0.1l-3.1-0.1l-0.6,23.4   l22.2,0.2L235.7,148z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dl');
        var path_dm = rsr.path("M425.6,220.5l1.6-7.3l8.4-5.3l10.8-6l8.2,20   l-13.4,9l-9.3,5.7l-4.8-15.7L425.6,220.5z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dm');
        var path_dn = rsr.path("M354.4,180.1l9.1,6.2l0.8-2.7l7.2,11.1   l12.3-9.4l-7.9-14.6l-1.1-2.3l-6.2,1.1l-4.9,0.3L354.4,180.1z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dn');
        var path_do = rsr.path("M419,51.3l-1.1,0.4l-1.2-0.4l-3.4-3.1   l-3-0.8l-7,8l-4.9-3.9l-0.6,24.1v1.5l2.6,0.1l18.4-0.3L419,51.3z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_do');
        var path_dp = rsr.path("M488.3,227.1l9.1,5.8l10.7,0.5l6,10l2.7-0.7   l2.6,8.8l-8.1,7.6l-10.6-7.4l-11.5,4.5v-8L488.3,227.1z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dp');
        var path_dq = rsr.path("M533.2,79.9l2.6,2.3l4.2,4.2l-0.2,19.5h-2.7   l-0.7-1.1l-3.8-3.9L533.2,79.9z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dq');
        var path_dr = rsr.path("M547.4,161.1l2.5,10.7l3.1,3.1l-0.2,19.9   l-22.4-16.3l-5.3-8.8l0.1-8L547.4,161.1z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dr');
        var path_ds = rsr.path("M479.3,153.2l-2.2-7.6l-2.7-1.2l0.4-2.3   l-9.5-5.8l-21.5,13.2l7.5,14.2l9.2,1.2L479.3,153.2z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ds');
        var path_dt = rsr.path("M576.4,264.9l4.8-6.5l1.9-9.3l-11.6-1.4   l-9.6,0.7l-0.4,3.8l0.7,3.9L576.4,264.9z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dt');
        var path_du = rsr.path("M394.1,100.5l0.2,23.7v1.9l-17.2-0.2l-5-0.4   l0.2-23.7l6.1-0.3l0.4-1.6L394.1,100.5z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_du');
        var path_dv = rsr.path("M567.9,155.1l-2.3-1.1v-10.3v-10l-13,1.4   l-6.5-2.7l-5.1,12.2l-0.1,9.9l3.8,0.4L567.9,155.1z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dv');
        var path_dw = rsr.path("M415.9,100.6l-0.2,23.8l-2.7-0.1l-18.7-0.1   l-0.2-23.7l6.1-0.4L415.9,100.6z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dw');
        var path_dx = rsr.path("M204.6,5.6l-22,0.1l-0.1,23.7l0,0l18.3-0.3   l3.8,0.1V5.6z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dx');
        var path_dy = rsr.path("M531,198.8l11.8,4.7l-5,3.4l5.1,26.1l0,0   l-8,1.8l-5,0.3l-6.9-5l-7.5-13.4L531,198.8z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dy');
        var path_dz = rsr.path("M496.6,101.7l-8.4-0.4l-3.8-0.4l-0.8,7.2   l14.1,6.3L496.6,101.7z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_dz');
        var path_ea = rsr.path("M243.2,5.6l0.1-5.6").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ea');
        var path_eb = rsr.path("M220.3,0l-0.1,5.6").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_eb');
        var path_ec = rsr.path("M536,61.1l-6.5-2.3l-11-10.1l-3.4-0.4   l-3.9,3.8l0.5,28l7.7-1.1l13.8,0.9l2.6,2.3L536,61.1z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ec');
        var path_ed = rsr.path("M471.2,209.4l-4.6,1.5l-4.3,9.1l-5.4,4.2   l-2.3-2.3l-8.2-20l10-6.4l10.8-6.8L471.2,209.4z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ed');
        var path_ee = rsr.path("M469.4,108.8l-0.3-7.3l-9.2-0.1l0.3,8.8   L469.4,108.8z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ee');
        var path_ef = rsr.path("M542.3,132l3.8,0.4l-5.1,12.2l-0.1,9.9   l3.8,0.4l2.7,6.2l-22.2,0.6l-0.3-15.3l0.1-12.7l16.5-0.2L542.3,132z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ef');
        var path_eg = rsr.path("M588.4,197.6l-2.1-1.9l-0.7-2.3l-1.8-1.3   l-1.5-0.9l0,0l0,0l0,0l0,0l1.4-1.6l0.5-2.4l-1.9-1.4l-0.7-1.7l-1.1-0.4l-1.2-1.9l1.1-0.5l-2.6-1.2h2.6l-3.1-1.2l-1-2.3l-1.2-1   l-1.5,0.6l-2.6-1.9l-3.1,2.3l-0.4,4.6l-3.1,3.7l0.6,15.4l5.7-1.5L588.4,197.6z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_eg');
        var path_eh = rsr.path("M552.8,194.8l0.2-19.9l-3.1-3.1l13.4,2   l4.6,2.8l-0.4,4.6l-3.1,3.7l0.6,15.4l-3.8,1.5L552.8,194.8z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_eh');
        var path_ei = rsr.path("M508.1,233.4l-0.2-18.3l4.6-2.7l3,4.3   l7.5,13.4l6.9,5l-13.1,7.6l-2.7,0.7L508.1,233.4z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ei');
        var path_ej = rsr.path("M349.8,181.5l4.6-1.4l9.1,6.2l0.8-2.7   l7.2,11.1l4.9,11.2l0.7,5.7l-22.6-0.2h-5.4l0.1-1.2L349.8,181.5z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ej');
        var path_ek = rsr.path("M573.6,176.2l2.2-0.9l0.4-1.2l-0.4-1.2H575   l0.6-1.6l1.3-0.4v-1.8l-1.4-0.9l-0.1-2.5v-0.8l-0.8-0.9l-0.9-1.6l-1.2-2.4l-2.3-2.7l-2.3-2.2l-23.2-0.2l2.7,6.2l2.5,10.7l13.4,2   l4.6,2.8l3.1-2.3L573.6,176.2z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ek');
        var path_el = rsr.path("M504.8,133.9l-6.1-6.9l0.1-10.7l3.8,3.5   l15.6,3.2l0,0l6.9,2.3l-0.1,8.4l-0.1,12.7l-20.3-0.2L504.8,133.9z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_el');
        var path_em = rsr.path("M413.3,141.9l-10.8,6.8l-3-8.4l5.8-3.8   l7.6-0.3L413.3,141.9z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_em');
        var path_en = rsr.path("M248.4,5.6h-5.2h-17.7v23.8l20-0.2h2.7   L248.4,5.6z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_en');
        var path_eo = rsr.path("M438.5,101.2l-0.6,23.4l-2.7,0.3l-19.5-0.5   l0.2-23.8l6.9,0.1L438.5,101.2z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_eo');
        var path_ep = rsr.path("M236.2,225.7l-16.8-0.9l-0.5,3l-8.4,0.3   l-0.5,16.1l-9.2,0.3l-0.1,11.9l10.3,10l11.8,5.1l12.6,0.5l0.2-26.4l4.6-4.6l-3-3.4l3.5-7.7l-0.3-3.4L236.2,225.7z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ep');
        var path_eq = rsr.path("M223.9,78.7h-23.2l0.1,22.4l16.6,0.1h6.5   V78.7z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_eq');
        var path_er = rsr.path("M519.4,79l13.8,0.9l-0.6,21l-5.3-5.4   l-8.1,2.6L519.4,79z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_er');
        var path_es = rsr.path("M391.4,238.1l1.5-3.4l-2.2-1.2l2.7-6.1   l3.8-0.3l6.8,10.4l8.8-4.1l9.6,5.8l-11.3,17.9l-3.1,3l-18.2-17.8L391.4,238.1z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_es');
        var path_et = rsr.path("M531,198.8l-4.9-12.3l-20.8,17.4l2.6,11.2   l4.6-2.7l3,4.3L531,198.8z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_et');
        var path_eu = rsr.path("M542.8,203.5l4.6,1.6l6.5-0.7l9.7,21.1   l-0.4,7.3l-20.3,0.2l-5.1-26.1L542.8,203.5z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_eu');
        var path_ev = rsr.path("M536.4,104.8l0.7,1.1v4.2l-0.1,8.4l-2.3-0.8   l-9.6,7.6l-6.9-2.3l0.2-18.4L536.4,104.8z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ev');
        var path_ew = rsr.path("M483.6,108.1l14.1,6.3l1.1,1.9l-0.1,10.7   l6.1,6.9l-26.4-0.2l0.2-25.2L483.6,108.1z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ew');
        var path_ex = rsr.path("M505.3,203.9l-8.1,7.6l-10.4,3.8l1.5,11.8   l9.1,5.8l10.7,0.5l-0.2-18.3L505.3,203.9z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ex');
        var path_ey = rsr.path("M489.2,248.2v8l-6.9-4.6l5.9,20.7l-8.4,3.3   l-4.8-18l0.1-8.4h1.9L489.2,248.2z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ey');
        var path_ez = rsr.path("M168,170.7l23.9,0.3l0,0l-0.2,19.5l-1.9,0.4   l-4.2-4.3l-3.4-0.8l-18.7-3.2l-4.5-11.9l0,0H168z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ez');
        var path_fa = rsr.path("M468.6,241.1l4.6-0.7l1.5,3.4l2.3,5.4h-1.9   l-0.1,8.4l-5.7-1.9l-14.6,2.5l-1.9-5.4l-4.9-0.8l5.8-6.8L468.6,241.1z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fa');
        var path_fb = rsr.path("M379.3,41.8l-3.8,0.7l-1.9-3.8l-2.3-1.6   l-3.4,1.2l-2.3,1.1l-2.7-1.6h-3.4l-2.7-2.7l0.2,20.3l22.6-0.2L379.3,41.8z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fb');
        var path_fc = rsr.path("M393.4,227.4l4.3-10.2l5.8-4.2l8.4,0.8   l13.7,6.7l1.5,0.4l4.8,15.7l-9.5,2.6l-9.6-5.8l-8.8,4.1l-6.8-10.4L393.4,227.4z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fc');
        var path_fd = rsr.path("M191.3,148h-8.8v3.1l0,0H168v19.6l23.3,0.3   V148z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fd');
        var path_fe = rsr.path("M400.4,77.2l18.4-0.3l4.2,0.9l-0.2,22.9   l-6.9-0.1l-15.7-0.5L400.4,77.2z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fe');
        var path_ff = rsr.path("M518.4,101.5h-6.9l-14.9,0.2l1.1,12.7   l1.1,1.9l3.8,3.5l15.6,3.2l0.2-18.4V101.5z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ff');
        var path_fg = rsr.path("M200.7,78.7h-18.1v22.4h18.2L200.7,78.7z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fg');
        var path_fh = rsr.path("M378.6,78.9l0.2,21l-0.4,1.6l-6.1,0.3   l-15.7,0.2l0.2-22.9L378.6,78.9z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fh');
        var path_fi = rsr.path("M268.4,101.5l-7,0.1l-0.2,23.3l22.3,0.2   v-23.7L268.4,101.5z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fi');
        var path_fj = rsr.path("M200.8,54.4h-18.2v10.3v14h18.1L200.8,54.4z   ").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fj');
        var path_fk = rsr.path("M583.1,249.1l-4.2-5v-4.6l1.1-0.4l-0.3-0.7   l0.7-1.6l-0.3-2.3l-0.4-2.2v-1.6l1.2-1.5l0.4-0.4v-1.1l0.4-1.2l1.1-1.9l0.8-1.9l2.4-4.2l0.7-1.5l1.3-1l0.6-0.9l-0.1-0.7l0.5-2v-0.9   l-1.1-1l1-1.4h-0.6v-0.8l-0.7-1.2l0.8-0.4l1.4-1.4l-1.4-7.7l-17.7,1.2l0.8,48.9L583.1,249.1z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fk');
        var path_fl = rsr.path("M283.5,125.1l-22.3-0.2l-0.6,23.3l15.3,0.2   l7.6,0.1V125.1z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fl');
        var path_fm = rsr.path("M350.5,102h6.1l15.7-0.2l-0.2,23.7   l-22.2,0.2L350.5,102z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fm');
        NON_SERVICE_COUNTIES.attr({'id': 'NON_SERVICE_COUNTIES','name': 'NON_SERVICE_COUNTIES'});
        var SERVICE_COUNTIES = rsr.set();
        var _x3C_ZAVALA_x3E_ = rsr.path("M 335.3,309.2    305.1,309.3 304.5,333 335.5,332.5   z").attr({id: '_x3C_ZAVALA_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_ZAVALA_x3E_');
        var _x3C_ZAPATA_x3E_ = rsr.path("M 353.6,406.1    335.2,405.2 332.9,407.5 332.8,415.5 332,417.4 335.4,424.7 340,429 344.8,442.8 353.3,432.1   z").attr({id: '_x3C_ZAPATA_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_ZAPATA_x3E_');
        var _x3C_WILSON_x3E_ = rsr.path("M 406.5,302.5    401.6,294.8 390.5,294.4 389.4,290.9 378.1,307.6 387.2,319.6   z").attr({id: '_x3C_WILSON_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_WILSON_x3E_');
        var _x3C_WILLACY_x3E_ = rsr.path("M    396.1,441.7 394.1,448.9 400.2,450.9 399.8,455.5 413.6,457.1 417,456 419,453.8 420.1,453.8 417.9,442.3   z").attr({id: '_x3C_WILLACY_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_WILLACY_x3E_');
        var _x3C_WILBARGER_x3E_ = rsr.path("M    356.8,35.1 346.5,34.2 346.5,27.7 341.6,23.9 340.9,22.3 338.2,22.7 337.4,26.1 334.7,24.2 334.2,41.4 334.1,55.6 357,55.4   z").attr({id: '_x3C_WILBARGER_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_WILBARGER_x3E_');
        var _x3C_WHARTON_x3E_ = rsr.path("M    472.9,280.5 477.1,282.9 477.4,285.9 487.2,300.6 486.1,302.5 467.2,316.8 453.2,302.6 465.1,291.6   z").attr({id: '_x3C_WHARTON_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_WHARTON_x3E_');
        var _x3C_WEBB_x3E_ = rsr.path("M 360.4,364.9    360.1,401.6 360.1,405.4 353.6,406.1 335.2,405.2 332.9,407.5 329.1,404 329.2,393.3 329.2,389.1 321.6,385.2 317.1,379.8    305.8,360.2 300.8,356.3 304.7,356 334.9,356.2 334.8,364.3   z").attr({id: '_x3C_WEBB_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_WEBB_x3E_');
        var _x3C_VICTORIA_x3E_ = rsr.path("M    440.8,312.4 439,309.7 424.7,322.2 428.5,321.9 430.8,326.5 430.3,337.6 436.8,340.7 442.5,340.3 440.6,336.5 452.2,328.6   z").attr({id: '_x3C_VICTORIA_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_VICTORIA_x3E_');
        var _x3C_VAL_VERDE_x3E_ = rsr.path("M    269.3,245.9 235.6,245.6 235.4,272 241.5,272.8 244.2,270.9 251.1,273.3 252.5,279 265.5,289.5 266.6,293.7 275.7,299.9 278,295.7    279.6,294.9 280.5,280.4 280.8,246   z").attr({id: '_x3C_VAL_VERDE_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_VAL_VERDE_x3E_');
        var _x3C_UVALDE_x3E_ = rsr.path("M 305.3,280.6    305.1,309.3 335.3,309.2 335.5,280.9 326.9,280.8 309.9,280.3   z").attr({id: '_x3C_UVALDE_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_UVALDE_x3E_');
        var _x3C_UPTON_x3E_ = rsr.path("M 212.6,171.2    212.7,202.2 235.6,202.4 235.5,171.4   z").attr({id: '_x3C_UPTON_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_UPTON_x3E_');
        var _x3C_TOM_GREEN_x3E_ = rsr.path("M    256.9,178.1 256.9,176.5 273.7,175.9 275.7,169.4 300.9,169.6 301.3,175.8 305.8,175.8 305.6,201.8 281.1,201.6 281,177.9   z").attr({id: '_x3C_TOM_GREEN_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_TOM_GREEN_x3E_');
        var _x3C_THROCKMORTON_x3E_ = rsr.path("M    356.8,79.1 356.6,102 350.5,102 334,101.5 334.2,78.9   z").attr({id: '_x3C_THROCKMORTON_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_THROCKMORTON_x3E_');
        var _x3C_TAYLOR_x3E_ = rsr.path("M 305.5,125.3    327.3,125.1 326.7,148.8 322.9,148.8 304.9,148.6   z").attr({id: '_x3C_TAYLOR_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_TAYLOR_x3E_');
        var _x3C_SUTTON_x3E_ = rsr.path("M 269.1,222.5    269.3,245.9 280.8,246 305.6,246.2 305.8,222.9   z").attr({id: '_x3C_SUTTON_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_SUTTON_x3E_');
        var _x3C_STONEWALL_x3E_ = rsr.path("M    312.1,78.7 290.2,78.9 290.1,101.5 305,101.6 311.9,101.6   z").attr({id: '_x3C_STONEWALL_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_STONEWALL_x3E_');
        var _x3C_STERLING_x3E_ = rsr.path("M    275.9,148.4 260.6,148.2 257.1,148.2 256.9,171.6 256.9,176.5 273.7,175.9 275.7,169.4   z").attr({id: '_x3C_STERLING_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_STERLING_x3E_');
        var _x3C_STAR_x3E_ = rsr.path("M 380.5,432    375.5,432 353.3,432.1 344.8,442.8 347.4,452.7 362.3,456.7 365.7,461.3 368.8,460.6   z").attr({id: '_x3C_STAR_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_STAR_x3E_');
        var _x3C_SCHACKELFORD_x3E_ = rsr.path("M    327.5,101.8 334,101.5 350.5,102 349.9,125.7 348.8,125.7 327.3,125.1   z").attr({id: '_x3C_SCHACKELFORD_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_SCHACKELFORD_x3E_');
        var _x3C_SCHLEICHER_x3E_ = rsr.path("M    305.6,201.8 281.1,201.6 268.9,202.3 269.1,222.5 305.8,222.9   z").attr({id: '_x3C_SCHLEICHER_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_SCHLEICHER_x3E_');
        var _x3C_SAN_PATRICO_x3E_ = rsr.path("M    414.8,358.1 413.3,360 402.6,358.4 398.7,362.2 399.1,364.8 402.9,365.2 403.2,368.3 403.6,370.6 409.7,374.5 420.8,376.1    426.9,376.2 431.5,373.5 426.6,363.9 423.6,359.3 419.4,360.8   z").attr({id: '_x3C_SAN_PATRICO_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_SAN_PATRICO_x3E_');
        var _x3C_RUNNELS_x3E_ = rsr.path("M    304.9,148.6 322.9,148.8 322.7,175.6 305.8,175.8 301.3,175.8 300.9,169.6 301.1,148.6   z").attr({id: '_x3C_RUNNELS_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_RUNNELS_x3E_');
        var _x3C_REFUGLO_x3E_ = rsr.path("M    442.5,340.3 436.8,340.7 430.3,337.6 421.4,346.7 414.8,358.1 419.4,360.8 423.6,359.3 426.6,363.9 434.3,357.1 432.4,354.4    446.2,351.1 446.3,344.2   z").attr({id: '_x3C_REFUGLO_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_REFUGLO_x3E_');
        var _x3C_REEVES_x3E_ = rsr.path("M 159,170.7    159,170.7 163.5,182.6 182.2,185.8 157.8,218.5 135.4,199.6 140.1,151.1 141.1,151.1 145.3,158.7 151,165.3   z").attr({id: '_x3C_REEVES_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_REEVES_x3E_');
        var _x3C_REAL_x3E_ = rsr.path("M 319.7,257    311.7,255.8 309.9,280.3 326.9,280.8 326.9,267 323.4,266.6 323.5,257.1   z").attr({id: '_x3C_REAL_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_REAL_x3E_');
        var _x3C_REAGAN_x3E_ = rsr.path("M 256.9,171.6    235.5,171.4 235.6,202.4 256.7,202.5 256.9,178.1 256.9,176.5   z").attr({id: '_x3C_REAGAN_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_REAGAN_x3E_');
        var _x3C_PRESIDO_x3E_ = rsr.path("M 148.3,298    148.5,237.9 98.5,225.6 101.9,229.1 103.7,238.7 109.8,247.2 111.1,263.6 116.4,277.1 133.1,292.1   z").attr({id: '_x3C_PRESIDO_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_PRESIDO_x3E_');
        var _x3C_PECOS_x3E_ = rsr.path("M 210.4,202.1    230.2,210.7 236.2,225.7 219.4,224.8 218.9,227.8 210.5,228.1 210,244.2 200.8,244.5 200.7,256.4 163.5,223.9 157.8,218.5    182.2,185.8 185.6,186.6 189.8,190.9 191.7,190.5 196.7,188.2 199.8,191.3 204.3,191.8 207.7,196   z").attr({id: '_x3C_PECOS_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_PECOS_x3E_');
        var _x3C_NUECES_x3E_ = rsr.path("M 397.5,373.2    397.3,387 401.9,390.9 422.9,391 424.9,385.7 424.2,383 421.8,386.1 420.7,385.7 421.9,383 420,380.3 420.8,376.1 409.7,374.5    403.6,370.6 403.2,368.3   z").attr({id: '_x3C_NUECES_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_NUECES_x3E_');
        var _x3C_NOLAN_x3E_ = rsr.path("M 305.5,125.3    283.5,125.1 283.5,148.5 301.1,148.6 304.9,148.6   z").attr({id: '_x3C_NOLAN_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_NOLAN_x3E_');
        var _x3C_MOTLEY_x3E_ = rsr.path("M 268.1,29.3    271.9,29 290.3,28.9 290.1,54.8 268.3,54.2   z").attr({id: '_x3C_MOTLEY_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_MOTLEY_x3E_');
        var _x3C_MENARD_x3E_ = rsr.path("M 331.6,210.1    326.6,209.3 326.7,201.6 305.6,201.8 305.8,222.9 331.7,222.7   z").attr({id: '_x3C_MENARD_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_MENARD_x3E_');
        var _x3C_MEDINA_x3E_ = rsr.path("M 360.2,299.8    360.5,309 335.3,309.2 335.5,280.9 353.9,280.3 354.6,284.9 360.8,277.7   z").attr({id: '_x3C_MEDINA_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_MEDINA_x3E_');
        var _x3C_MCMULLEN_x3E_ = rsr.path("M    380.6,335.2 380.6,332.2 360.3,332.7 360.4,364.9 380.7,364.7   z").attr({id: '_x3C_MCMULLEN_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_MCMULLEN_x3E_');
        var _x3C_MCCULLOCH_x3E_ = rsr.path("M    326.5,181.3 327.2,179.4 330.3,180.2 331.4,183.3 335.3,181.4 339.8,184.9 344.6,180.7 349.8,181.5 349.2,210.2 331.6,210.1    326.6,209.3 326.7,201.6   z").attr({id: '_x3C_MCCULLOCH_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_MCCULLOCH_x3E_');
        var _x3C_MAVERICK_x3E_ = rsr.path("M    305.1,309.3 280.6,308.7 283.6,319.4 284.7,319.5 284.3,321 288.4,331.7 289.9,332.5 290.3,334.4 293.7,339.4 296.3,349    300.8,356.3 304.7,356 304.5,333   z").attr({id: '_x3C_MAVERICK_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_MAVERICK_x3E_');
        var _x3C_MATAGORDA_x3E_ = rsr.path("M    467.2,316.8 486.1,302.5 486.1,302.5 486.8,306.3 499.7,323.2 465,345.9 463.9,345.1 490.8,327 488.5,325.8 470.5,336.4    469.3,335.2 469.9,330.7 466.7,331.8   z").attr({id: '_x3C_MATAGORDA_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_MATAGORDA_x3E_');
        var _x3C_LIVE_OAK_x3E_ = rsr.path("M    391.4,325.4 380.6,335.2 380.7,364.7 384.9,365.1 399.1,364.8 398.7,362.2 402.6,358.4 391.7,331.9 395.5,330.8   z").attr({id: '_x3C_LIVE_OAK_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_LIVE_OAK_x3E_');
        var _x3C_LA_SALLE_x3E_ = rsr.path("M    360.3,332.7 335.5,332.5 334.9,356.2 334.8,364.3 360.4,364.9   z").attr({id: '_x3C_LA_SALLE_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_LA_SALLE_x3E_');
        var _x3C_KNOX_x3E_ = rsr.path("M 334.2,78.9    334,59.4 331,56.7 323.7,56.6 319.5,54.7 312.3,55 312.1,78.7   z").attr({id: '_x3C_KNOX_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_KNOX_x3E_');
        var _x3C_KLEBERG_x3E_ = rsr.path("M 397.3,387    392,386.6 391.8,406.5 394.9,406.1 394.9,409.2 405.2,405.8 407.5,404.7 403,396.6 404.2,396.2 409.4,404.7 410.6,404.7 411,404.7    410.6,402.8 412.9,402.8 414.1,398.6 415.6,398.6 415.2,402.8 413.3,404.4 415.2,405.5 419,401 420.2,397.5 421.4,396 422.9,391    401.9,390.9   z").attr({id: '_x3C_KLEBERG_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_KLEBERG_x3E_');
        var _x3C_KINNEY_x3E_ = rsr.path("M 305.3,280.6    280.5,280.4 279.6,294.9 278,295.7 275.7,299.9 280.6,308.7 305.1,309.3   z").attr({id: '_x3C_KINNEY_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_KINNEY_x3E_');
        var _x3C_KIMBLE_x3E_ = rsr.path("M 331.7,222.7    305.8,222.9 305.6,246.2 320.2,245.9 341.2,246.1 340.9,233.9 331.7,233.4   z").attr({id: '_x3C_KIMBLE_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_KIMBLE_x3E_');
        var _x3C_KENT_x3E_ = rsr.path("M 290.2,78.9    268.4,78.7 268.4,101.5 283.5,101.4 290.1,101.5   z").attr({id: '_x3C_KENT_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_KENT_x3E_');
        var _x3C_KENNEDY_x3E_ = rsr.path("M    394.7,431.7 394.9,409.2 405.2,405.8 408.3,408.1 413.6,408.6 417.8,407.5 418.2,412.8 415.5,415.9 416.2,418.5 413.5,421.2    413,428.8 415.7,431.2 417.9,442.3 396.1,441.7   z").attr({id: '_x3C_KENNEDY_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_KENNEDY_x3E_');
        var _x3C_KARNES_x3E_ = rsr.path("M 411.4,308.7    406.5,302.5 387.2,319.6 391.4,325.4 395.5,330.8 399,328.9 404.7,331.6 413.6,324.4 406,313.2   z").attr({id: '_x3C_KARNES_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_KARNES_x3E_');
        var _x3C_JONES_x3E_ = rsr.path("M 305,101.6    311.9,101.6 327.5,101.8 327.3,125.1 305.5,125.3   z").attr({id: '_x3C_JONES_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_JONES_x3E_');
        var _x3C_JIM_WELLS_x3E_ = rsr.path("M    399.1,364.8 402.9,365.2 403.2,368.3 397.5,373.2 397.3,387 392,386.6 391.8,406.5 384.6,406.4 384.9,365.1   z").attr({id: '_x3C_JIM_WELLS_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_JIM_WELLS_x3E_');
        var _x3C_JIM_HOGG_x3E_ = rsr.path("M    360.1,401.6 360.1,405.4 353.6,406.1 353.3,432.1 375.5,432 376.4,417 371.5,406.7 371.6,401.7   z").attr({id: '_x3C_JIM_HOGG_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_JIM_HOGG_x3E_');
        var _x3C_JEFF_DAVIS_x3E_ = rsr.path("M    135.4,199.6 157.8,218.5 163.5,223.9 148.5,237.9 98.5,225.6 100.8,223.7   z").attr({id: '_x3C_JEFF_DAVIS_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_JEFF_DAVIS_x3E_');
        var _x3C_JACKSON_x3E_ = rsr.path("M    453.2,302.6 467.2,316.8 466.7,331.8 463.3,328.3 463.6,334.4 459.8,336.7 460.9,334.4 460.6,332.1 452.2,328.6 440.8,312.4    452.4,301   z").attr({id: '_x3C_JACKSON_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_JACKSON_x3E_');
        var _x3C_IRION = rsr.path("M 281.1,201.6    281,177.9 256.9,178.1 256.7,202.5 268.9,202.3   z").attr({id: '_x3C_IRION',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_IRION');
        var _x3C_HIDALGO_x3E_ = rsr.path("M    394.7,431.7 380.5,432 368.8,460.6 384.4,470.3 390.9,471.9 399.7,470.4 399.8,455.5 400.2,450.9 394.1,448.9 396.1,441.7   z").attr({id: '_x3C_HIDALGO_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_HIDALGO_x3E_');
        var _x3C_HASKELL_x3E_ = rsr.path("M 334.2,78.9    334,101.5 327.5,101.8 311.9,101.6 312.1,78.7   z").attr({id: '_x3C_HASKELL_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_HASKELL_x3E_');
        var _x3C_HARDEMAN_x3E_ = rsr.path("M    334.7,24.2 330.9,24.2 329.3,26.1 325.1,26 319.8,19.1 315.7,16 312.6,16 312.5,29.4 312.4,33.6 321.6,40.1 334.2,41.4   z").attr({id: '_x3C_HARDEMAN_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_HARDEMAN_x3E_');
        var _x3C_HALL_x3E_ = rsr.path("M 294.3,5.8    289,5.8 272.1,5.7 271.9,29 290.3,28.9 294.5,28.8   z").attr({id: '_x3C_HALL_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_HALL_x3E_');
        var _x3C_GUADALUPE_x3E_ = rsr.path("M    394.9,273.7 382.2,282.1 389.4,290.9 390.5,294.4 401.6,294.8 411.3,279.2 400.7,268.4   z").attr({id: '_x3C_GUADALUPE_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_GUADALUPE_x3E_');
        var _x3C_GONZALES_x3E_ = rsr.path("M    411.3,279.2 424.7,272.5 431.9,280.6 429.6,282.5 427.2,294.3 411.4,308.7 406.5,302.5 401.6,294.8   z").attr({id: '_x3C_GONZALES_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_GONZALES_x3E_');
        var _x3C_GOLIAD_x3E_ = rsr.path("M 413.6,324.4    404.7,331.6 408.5,338.5 421.4,346.7 430.3,337.6 430.8,326.5 428.5,321.9 424.7,322.2 419.4,318.7   z").attr({id: '_x3C_GOLIAD_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_GOLIAD_x3E_');
        var _x3C_FRIO_x3E_ = rsr.path("M 360.5,309    360.3,332.7 335.5,332.5 335.3,309.2   z").attr({id: '_x3C_FRIO_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_FRIO_x3E_');
        var _x3C_FOARD_x3E_ = rsr.path("M 312.4,33.6    321.6,40.1 334.2,41.4 334.1,55.6 334,59.4 331,56.7 323.7,56.6 319.5,54.7 312.3,55 310.4,54.6 310.5,33.9   z").attr({id: '_x3C_FOARD_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_FOARD_x3E_');
        var _x3C_FISHER_x3E_ = rsr.path("M 283.5,101.4    283.5,125.1 305.5,125.3 305,101.6 290.1,101.5   z").attr({id: '_x3C_FISHER_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_FISHER_x3E_');
        var _x3C_EDWARDS_x3E_ = rsr.path("M    320.2,245.9 305.6,246.2 280.8,246 280.5,280.4 305.3,280.6 309.9,280.3 311.7,255.8 319.7,257   z").attr({id: '_x3C_EDWARDS_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_EDWARDS_x3E_');
        var _x3C_EASTLAND_x3E_ = rsr.path("M    348.8,125.7 349.9,125.7 372.1,125.5 377.1,125.9 377,136.6 373.5,139.3 357.3,149.1 348.9,149   z").attr({id: '_x3C_EASTLAND_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_EASTLAND_x3E_');
        var _x3C_DUVAL_x3E_ = rsr.path("M 384.6,406.4    371.5,406.7 371.6,401.7 360.1,401.6 360.4,364.9 380.7,364.7 384.9,365.1   z").attr({id: '_x3C_DUVAL_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_DUVAL_x3E_');
        var _x3C_DIMMIT_x3E_ = rsr.path("M 304.5,333    304.7,356 334.9,356.2 335.5,332.5   z").attr({id: '_x3C_DIMMIT_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_DIMMIT_x3E_');
        var _x3C_DICKENS_x3E_ = rsr.path("M 290.1,54.8    268.3,54.2 268.4,78.7 290.2,78.9   z").attr({id: '_x3C_DICKENS_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_DICKENS_x3E_');
        var _x3C_DEWITT_x3E_ = rsr.path("M 439,309.7    424.7,322.2 419.4,318.7 413.6,324.4 406,313.2 411.4,308.7 427.2,294.3   z").attr({id: '_x3C_DEWITT_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_DEWITT_x3E_');
        var _x3C_CROCKETT_x3E_ = rsr.path("M    268.9,202.3 269.1,222.5 269.3,245.9 235.6,245.6 240.2,241 237.2,237.6 240.7,229.9 240.4,226.5 236.2,225.7 230.2,210.7    210.4,202.1 212.7,202.2 235.6,202.4 256.7,202.5   z").attr({id: '_x3C_CROCKETT_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_CROCKETT_x3E_');
        var _x3C_CRANE_x3E_ = rsr.path("M 212.7,202.2    212.6,171.2 191.9,171 191.7,190.5 196.7,188.2 199.8,191.3 204.3,191.8 207.7,196 210.4,202.1   z").attr({id: '_x3C_CRANE_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_CRANE_x3E_');
        var _x3C_COTTLE_x3E_ = rsr.path("M 290.3,28.9    294.5,28.8 312.5,29.4 312.4,33.6 310.5,33.9 310.4,54.6 290.1,54.8   z").attr({id: '_x3C_COTTLE_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_COTTLE_x3E_');
        var _x3C_CONCHO_x3E_ = rsr.path("M 305.8,175.8    322.7,175.6 326.5,181.3 326.7,201.6 305.6,201.8   z").attr({id: '_x3C_CONCHO_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_CONCHO_x3E_');
        var _x3C_COLORADO_x3E_ = rsr.path("M    443.8,280.7 457,263.6 472.9,280.5 465.1,291.6 453.2,302.6 452.4,301 456.7,296.5   z").attr({id: '_x3C_COLORADO_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_COLORADO_x3E_');
        var _x3C_COLEMAN_x3E_ = rsr.path("M    326.7,148.8 344.7,149.4 344.6,180.7 339.8,184.9 335.3,181.4 331.4,183.3 330.3,180.2 327.2,179.4 326.5,181.3 322.7,175.6    322.9,148.8   z").attr({id: '_x3C_COLEMAN_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_COLEMAN_x3E_');
        var _x3C_COKE_x3E_ = rsr.path("M 301.1,148.6    283.5,148.5 275.9,148.4 275.7,169.4 300.9,169.6   z").attr({id: '_x3C_COKE_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_COKE_x3E_');
        var _x3C_CHILDRESS_x3E_ = rsr.path("M 312.6,16    312.6,6.1 294.3,5.8 294.5,28.8 312.5,29.4   z").attr({id: '_x3C_CHILDRESS_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_CHILDRESS_x3E_');
        var _x3C_CAMERON_x3E__1_ = rsr.path("M    399.8,455.5 399.7,470.4 403.1,472.4 409.2,472.4 410.3,475.9 414.5,477.8 429.8,476.8 430.6,471.8 430.3,470.7 429.1,473.7    428,472.6 426.4,474.9 426.1,470.6 428,469.1 426.9,468.4 424.9,469.1 423.8,463.4 421.9,462.6 420.1,453.8 419,453.8 417,456    413.6,457.1   z").attr({id: '_x3C_CAMERON_x3E__1_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_CAMERON_x3E__1_');
        var _x3C_CALLAHAN_x3E_ = rsr.path("M    327.3,125.1 326.7,148.8 344.7,149.4 348.9,149 348.8,125.7   z").attr({id: '_x3C_CALLAHAN_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_CALLAHAN_x3E_');
        var _x3C_CALHOUN_x3E_ = rsr.path("M    452.2,328.6 440.6,336.5 442.5,340.3 446.3,344.2 446.3,341.5 449.4,345.4 449.7,348.4 451.2,349.6 461.6,343.2 460.5,340.5    456.7,341.6 455.5,340.5 458.2,338.6 455.9,335.9 452.5,336.6 453.3,333.9   z").attr({id: '_x3C_CALHOUN_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_CALHOUN_x3E_');
        var _x3C_CALDWELL_x3E_ = rsr.path("M    411.1,257.1 424.7,272.5 411.3,279.2 400.7,268.4 408,260.1   z").attr({id: '_x3C_CALDWELL_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_CALDWELL_x3E_');
        var _x3C_BROWN_x3E_ = rsr.path("M 348.9,149    357.3,149.1 368.6,169.5 363.7,169.8 354.4,180.1 349.8,181.5 344.6,180.7 344.7,149.4   z").attr({id: '_x3C_BROWN_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_BROWN_x3E_');
        var _x3C_BROOKS_x3E_ = rsr.path("M 391.8,406.5    384.6,406.4 371.5,406.7 376.4,417 375.5,432 380.5,432 394.7,431.7 394.9,409.2 394.9,406.1   z").attr({id: '_x3C_BROOKS_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_BROOKS_x3E_');
        var _x3C_BRISCOE_x3E_ = rsr.path("M 272.1,5.7    266,5.6 248.4,5.6 248.2,29.2 268.1,29.3 271.9,29   z").attr({id: '_x3C_BRISCOE_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_BRISCOE_x3E_');
        var _x3C_BREWSTER_x3E_ = rsr.path("M    148.5,237.9 163.5,223.9 200.7,256.4 211,266.4 208.6,271.4 196.4,273.2 189.3,293.4 187.4,294.1 186.6,298.3 187.3,301 181.6,304    178.8,307.4 176.5,313.9 169.6,313.9 162,309.2 160.9,306.1 148.3,300.7 148.3,298   z").attr({id: '_x3C_BREWSTER_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_BREWSTER_x3E_');
        var _x3C_BEE_x3E_ = rsr.path("M 404.7,331.6    399,328.9 395.5,330.8 391.7,331.9 402.6,358.4 413.3,360 414.8,358.1 421.4,346.7 408.5,338.5   z").attr({id: '_x3C_BEE_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_BEE_x3E_');
        var _x3C_ATASCOSA_x3E_ = rsr.path("M    378.1,307.6 360.2,299.8 360.5,309 360.3,332.7 380.6,332.2 380.6,335.2 391.4,325.4 387.2,319.6   z").attr({id: '_x3C_ATASCOSA_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_ATASCOSA_x3E_');
        var _x3C_ARANSAS_x3E_ = rsr.path("M    446.2,351.1 432.4,354.4 434.3,357.1 436.2,359.4 438.9,358.7 438.2,354.1 441.2,353.3 440,359.5 445.4,356.1   z").attr({id: '_x3C_ARANSAS_x3E_',fill: 'none',stroke: '#DBD8BD',"stroke-linecap": 'round',"stroke-linejoin": 'round',"stroke-miterlimit": '3.8637',parent: 'SERVICE_COUNTIES','stroke-width': '1','stroke-opacity': '1'}).data('id', '_x3C_ARANSAS_x3E_');
        SERVICE_COUNTIES.attr({'id': 'SERVICE_COUNTIES','name': 'SERVICE_COUNTIES'});
        var STATE_BORDERS_x2F_SERVICE_BOUNDARY = rsr.set();
        var path_fn = rsr.path("M570.7,276.9l3.3-1.1l5.3-0.7").attr({fill: 'none',stroke: '#FFFFFF',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fn');
        STATE_BORDERS_x2F_SERVICE_BOUNDARY.attr({'id': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','name': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY'});
        var _x3C_Mexico_Border_x3E_ = rsr.set();
        var path_fo = rsr.path("M429.5,477.8l-1.5,2    c-0.8,1.3-1.6,2.7-2.3,4").attr({fill: 'none',stroke: '#C9C79D',"stroke-width": '4',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-opacity': '1'}).data('id', 'path_fo');
        var path_fp = rsr.path("M429.5,477.8l-1.5,2    c-0.8,1.3-1.6,2.7-2.3,4").attr({fill: 'none',stroke: '#FFFFFF',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fp');
        _x3C_Mexico_Border_x3E_.attr({'id': '_x3C_Mexico_Border_x3E_','parent': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','name': '_x3C_Mexico_Border_x3E_'});
        var _x3C_New_Mexico_Border_x3E_ = rsr.set();
        var path_fq = rsr.path("M0,159.8h31.1").attr({fill: 'none',stroke: '#C9C79D',"stroke-width": '4',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-opacity': '1'}).data('id', 'path_fq');
        var path_fr = rsr.path("M0,159.8h31.1").attr({fill: 'none',stroke: '#FFFFFF',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fr');
        _x3C_New_Mexico_Border_x3E_.attr({'id': '_x3C_New_Mexico_Border_x3E_','parent': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','name': '_x3C_New_Mexico_Border_x3E_'});
        var _x3C_Oklahoma_Arkansas_Border_x3E_ = rsr.set();
        var path_fs = rsr.path("M547.3,0v67").attr({fill: 'none',stroke: '#C9C79D',"stroke-width": '4',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-opacity': '1'}).data('id', 'path_fs');
        var path_ft = rsr.path("M547.3,0v67").attr({fill: 'none',stroke: '#FFFFFF',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_ft');
        _x3C_Oklahoma_Arkansas_Border_x3E_.attr({'id': '_x3C_Oklahoma_Arkansas_Border_x3E_','parent': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','name': '_x3C_Oklahoma_Arkansas_Border_x3E_'});
        var _x3C_LOUISIANA_BORDER3_x3E_ = rsr.set();
        var path_fu = rsr.path("M736.4,0l-1.1,1.5    c-0.1,0.1-0.2,0.2-0.3,0.2l-2.5,1.5l3,3.5c0.2,0.3,0.3,0.6,0.1,1c-0.1,0.3-0.5,0.5-0.8,0.5l-4.6,0.2l2,4.1c0.1,0.2,0.1,0.5,0,0.7    s-0.3,0.4-0.5,0.5l-1.8,0.7l0.2,4.8c0,0.4-0.2,0.7-0.5,0.9l-7.2,3.7l0.1,1.4c0,0.3-0.2,0.7-0.5,0.8l-6.3,3.6l3.1,3.1    c0.2,0.2,0.3,0.4,0.3,0.6l0.1,1.7c0,0.3-0.1,0.5-0.3,0.7s-0.4,0.3-0.7,0.3l-5.2-0.2l-2.2,8c-0.1,0.5-0.6,0.8-1.1,0.7l-2.9-0.6    l0.4,8.3c0,0.2,0,0.3-0.1,0.4l-1.6,3.2l1.6,2.7c0.2,0.4,0.1,0.9-0.2,1.2l-1.7,1.2c-0.2,0.2-0.5,0.2-0.8,0.1l-2.9-0.8l0.7,1    c0.1,0.2,0.2,0.5,0.1,0.8l-2.1,7.1l4.8,8.7c0.2,0.3,0.2,0.6,0,0.9l-1.9,3.1l0.1,0.7l2.9-0.4c0.3,0,0.6,0,0.8,0.2s0.3,0.5,0.3,0.7    l-0.3,4.3c0,0.3-0.1,0.5-0.3,0.6l-3,2.4l0.2,4.7c0,0.2,0,0.4-0.1,0.5l-1.8,2.9c0,0.1,0.1,0.2,0.1,0.3c0,0.2-0.1,0.4-0.2,0.5    l-0.2,1.5l1.5-0.5c0.3-0.1,0.6-0.1,0.8,0.1s0.4,0.4,0.4,0.7l0.1,6.5l2.2,3.6c0.2,0.3,0.2,0.7,0,1l-2.9,4.2l3.4,0.5    c0.2,0,0.3,0.1,0.4,0.2l2.2,1.7c0.2,0.2,0.4,0.5,0.4,0.8s-0.2,0.6-0.5,0.7l-2.1,1.1l1.4,2.5c0.2,0.3,0.1,0.8-0.1,1.1    c-0.3,0.3-0.7,0.4-1.1,0.2l-1.5-0.7l0.9,1.9l1.2,0.1c0.5,0,0.8,0.4,0.9,0.9l0.1,2.6l4.2,3.6c0.3,0.3,0.4,0.8,0.2,1.1l-2.9,5.1    c-0.1,0.3-0.4,0.4-0.7,0.5l-6.4,0.6l-1,1.6l0.9,1l6.2-2.9c0.4-0.2,0.8-0.1,1,0.2c0.3,0.3,0.3,0.7,0.2,1l-2.7,5.5    c-0.1,0.3-0.4,0.5-0.8,0.5l-1.3,0.1l0.1,1.8c0,0.2-0.1,0.4-0.2,0.6l-6,7.7l0.7,1.6c0.1,0.3,0.1,0.6-0.1,0.9    c-0.2,0.3-0.4,0.4-0.7,0.4l-4.3,0.2l-0.5,0.8l2.1,1.6c0.3,0.2,0.4,0.5,0.3,0.9c-0.1,0.3-0.3,0.6-0.6,0.7l-3.7,1.3l-1.9,6    c-0.1,0.3-0.4,0.5-0.7,0.6l-2.4,0.5l0.3,0.2c0.4,0.2,0.5,0.7,0.3,1.1l-1.1,2.7l-0.4,7.5c0,0.3-0.2,0.7-0.6,0.8    c-0.3,0.1-0.7,0.1-1-0.2l-0.9-0.8l-0.2,1.4l1.7,0.9c0.3,0.2,0.5,0.5,0.5,0.9l-0.3,2.5c0,0.4-0.3,0.7-0.6,0.8l-4.1,1.4v6.7l1.4,1.7    c0.2,0.2,0.3,0.5,0.2,0.8l-0.7,2.9H744").attr({fill: 'none',stroke: '#C9C79D',"stroke-width": '4',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-opacity': '1'}).data('id', 'path_fu');
        var path_fv = rsr.path("M736.4,0l-1.1,1.5    c-0.1,0.1-0.2,0.2-0.3,0.2l-2.5,1.5l3,3.5c0.2,0.3,0.3,0.6,0.1,1c-0.1,0.3-0.5,0.5-0.8,0.5l-4.6,0.2l2,4.1c0.1,0.2,0.1,0.5,0,0.7    s-0.3,0.4-0.5,0.5l-1.8,0.7l0.2,4.8c0,0.4-0.2,0.7-0.5,0.9l-7.2,3.7l0.1,1.4c0,0.3-0.2,0.7-0.5,0.8l-6.3,3.6l3.1,3.1    c0.2,0.2,0.3,0.4,0.3,0.6l0.1,1.7c0,0.3-0.1,0.5-0.3,0.7s-0.4,0.3-0.7,0.3l-5.2-0.2l-2.2,8c-0.1,0.5-0.6,0.8-1.1,0.7l-2.9-0.6    l0.4,8.3c0,0.2,0,0.3-0.1,0.4l-1.6,3.2l1.6,2.7c0.2,0.4,0.1,0.9-0.2,1.2l-1.7,1.2c-0.2,0.2-0.5,0.2-0.8,0.1l-2.9-0.8l0.7,1    c0.1,0.2,0.2,0.5,0.1,0.8l-2.1,7.1l4.8,8.7c0.2,0.3,0.2,0.6,0,0.9l-1.9,3.1l0.1,0.7l2.9-0.4c0.3,0,0.6,0,0.8,0.2s0.3,0.5,0.3,0.7    l-0.3,4.3c0,0.3-0.1,0.5-0.3,0.6l-3,2.4l0.2,4.7c0,0.2,0,0.4-0.1,0.5l-1.8,2.9c0,0.1,0.1,0.2,0.1,0.3c0,0.2-0.1,0.4-0.2,0.5    l-0.2,1.5l1.5-0.5c0.3-0.1,0.6-0.1,0.8,0.1s0.4,0.4,0.4,0.7l0.1,6.5l2.2,3.6c0.2,0.3,0.2,0.7,0,1l-2.9,4.2l3.4,0.5    c0.2,0,0.3,0.1,0.4,0.2l2.2,1.7c0.2,0.2,0.4,0.5,0.4,0.8s-0.2,0.6-0.5,0.7l-2.1,1.1l1.4,2.5c0.2,0.3,0.1,0.8-0.1,1.1    c-0.3,0.3-0.7,0.4-1.1,0.2l-1.5-0.7l0.9,1.9l1.2,0.1c0.5,0,0.8,0.4,0.9,0.9l0.1,2.6l4.2,3.6c0.3,0.3,0.4,0.8,0.2,1.1l-2.9,5.1    c-0.1,0.3-0.4,0.4-0.7,0.5l-6.4,0.6l-1,1.6l0.9,1l6.2-2.9c0.4-0.2,0.8-0.1,1,0.2c0.3,0.3,0.3,0.7,0.2,1l-2.7,5.5    c-0.1,0.3-0.4,0.5-0.8,0.5l-1.3,0.1l0.1,1.8c0,0.2-0.1,0.4-0.2,0.6l-6,7.7l0.7,1.6c0.1,0.3,0.1,0.6-0.1,0.9    c-0.2,0.3-0.4,0.4-0.7,0.4l-4.3,0.2l-0.5,0.8l2.1,1.6c0.3,0.2,0.4,0.5,0.3,0.9c-0.1,0.3-0.3,0.6-0.6,0.7l-3.7,1.3l-1.9,6    c-0.1,0.3-0.4,0.5-0.7,0.6l-2.4,0.5l0.3,0.2c0.4,0.2,0.5,0.7,0.3,1.1l-1.1,2.7l-0.4,7.5c0,0.3-0.2,0.7-0.6,0.8    c-0.3,0.1-0.7,0.1-1-0.2l-0.9-0.8l-0.2,1.4l1.7,0.9c0.3,0.2,0.5,0.5,0.5,0.9l-0.3,2.5c0,0.4-0.3,0.7-0.6,0.8l-4.1,1.4v6.7l1.4,1.7    c0.2,0.2,0.3,0.5,0.2,0.8l-0.7,2.9H744").attr({fill: 'none',stroke: '#FFFFFF',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fv');
        _x3C_LOUISIANA_BORDER3_x3E_.attr({'id': '_x3C_LOUISIANA_BORDER3_x3E_','parent': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','name': '_x3C_LOUISIANA_BORDER3_x3E_'});
        var _x3C_LOUISIANA_BORDER2_x3E_ = rsr.set();
        var path_fw = rsr.path("M744,309.1l-4.3-7.9    l-2.4,4c-0.1,0.2-0.3,0.4-0.6,0.4c-0.2,0.1-0.5,0-0.7-0.1l-1.5-1c-0.2-0.2-0.4-0.4-0.4-0.7l-0.1-2.9l-3.2-2.2l0.1,3.1    c0,0.3-0.1,0.6-0.4,0.8L726,306l0.1,1.9c0,0.4-0.3,0.8-0.7,0.9l-7.5,1.9c-0.3,0.1-0.6,0-0.8-0.2L711,306l-6.6-1.5    c-0.3-0.1-0.6-0.3-0.7-0.7l-2-7.9l-2.3-1c-0.2-0.1-0.4-0.2-0.4-0.4l-1.4-2.8l-1.5-0.5c-0.3-0.1-0.6-0.4-0.6-0.7    c-0.2-0.9-0.4-1.9-0.6-2.3c-0.4,0-1.8,0.1-2.9,0.3c-0.3,0-0.5-0.1-0.7-0.2l-2.9-2.7l-4.4,1.1c-0.3,0.1-0.5,0-0.8-0.2    c-0.2-0.2-0.4-0.4-0.4-0.7l-0.1-2l-0.9-2.5l-3.7-0.8c-0.3-0.1-0.5-0.2-0.6-0.5s-0.1-0.6,0-0.8l2.7-5L680,274l-11.8,1.3    c-0.2,0.1-0.5,0-0.7-0.2s-0.3-0.4-0.3-0.6l-0.2-2.3c0-0.2,0-0.4,0.1-0.5l0.4-0.7l-3-0.3l-7.4,4.3c-0.4,0.2-0.9,0.1-1.2-0.2    l-0.5-0.6l-1.1,0.9l0.5,1.3h0.9c0.4,0,0.7,0.2,0.9,0.5l1,1.9l2.5,0.5c0.3,0.1,0.5,0.2,0.6,0.4c0.1,0.2,0.2,0.5,0.1,0.8l-1.1,3    c-0.1,0.3-0.4,0.5-0.7,0.6l-11,1.6l-14.7-1.5c-0.1,0-0.2,0-0.3-0.1l-14.6-6.1l-6.5-2.5l-12.7-2.9l-2,1.1c-0.1,0.1-0.3,0.1-0.4,0.1    l-7.5,0.3l-15.1,2.1").attr({fill: 'none',stroke: '#C9C79D',"stroke-width": '4',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-opacity': '1'}).data('id', 'path_fw');
        var path_fx = rsr.path("M744,309.1l-4.3-7.9l-2.4,4    c-0.1,0.2-0.3,0.4-0.6,0.4c-0.2,0.1-0.5,0-0.7-0.1l-1.5-1c-0.2-0.2-0.4-0.4-0.4-0.7l-0.1-2.9l-3.2-2.2l0.1,3.1    c0,0.3-0.1,0.6-0.4,0.8L726,306l0.1,1.9c0,0.4-0.3,0.8-0.7,0.9l-7.5,1.9c-0.3,0.1-0.6,0-0.8-0.2L711,306l-6.6-1.5    c-0.3-0.1-0.6-0.3-0.7-0.7l-2-7.9l-2.3-1c-0.2-0.1-0.4-0.2-0.4-0.4l-1.4-2.8l-1.5-0.5c-0.3-0.1-0.6-0.4-0.6-0.7    c-0.2-0.9-0.4-1.9-0.6-2.3c-0.4,0-1.8,0.1-2.9,0.3c-0.3,0-0.5-0.1-0.7-0.2l-2.9-2.7l-4.4,1.1c-0.3,0.1-0.5,0-0.8-0.2    c-0.2-0.2-0.4-0.4-0.4-0.7l-0.1-2l-0.9-2.5l-3.7-0.8c-0.3-0.1-0.5-0.2-0.6-0.5s-0.1-0.6,0-0.8l2.7-5L680,274l-11.8,1.3    c-0.2,0.1-0.5,0-0.7-0.2s-0.3-0.4-0.3-0.6l-0.2-2.3c0-0.2,0-0.4,0.1-0.5l0.4-0.7l-3-0.3l-7.4,4.3c-0.4,0.2-0.9,0.1-1.2-0.2    l-0.5-0.6l-1.1,0.9l0.5,1.3h0.9c0.4,0,0.7,0.2,0.9,0.5l1,1.9l2.5,0.5c0.3,0.1,0.5,0.2,0.6,0.4c0.1,0.2,0.2,0.5,0.1,0.8l-1.1,3    c-0.1,0.3-0.4,0.5-0.7,0.6l-11,1.6l-14.7-1.5c-0.1,0-0.2,0-0.3-0.1l-14.6-6.1l-6.5-2.5l-12.7-2.9l-2,1.1c-0.1,0.1-0.3,0.1-0.4,0.1    l-7.5,0.3l-15.1,2.1").attr({fill: 'none',stroke: '#FFFFFF',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fx');
        _x3C_LOUISIANA_BORDER2_x3E_.attr({'id': '_x3C_LOUISIANA_BORDER2_x3E_','parent': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','name': '_x3C_LOUISIANA_BORDER2_x3E_'});
        var _x3C_Louisiana_Arkansas_Border_x3E_ = rsr.set();
        var path_fy = rsr.path("M565.8,98.3h136.3").attr({fill: 'none',stroke: '#C9C79D',"stroke-width": '4',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-opacity': '1'}).data('id', 'path_fy');
        var path_fz = rsr.path("M565.8,98.3h136.3").attr({fill: 'none',stroke: '#FFFFFF',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_fz');
        _x3C_Louisiana_Arkansas_Border_x3E_.attr({'id': '_x3C_Louisiana_Arkansas_Border_x3E_','parent': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','name': '_x3C_Louisiana_Arkansas_Border_x3E_'});
        var _x3C_Texas_State_Border_x3E__1_ = rsr.set();
        var path_ga = rsr.path("M312.4,0l0.2,16h3.1    l4.1,3.1l5.3,6.9l4.2,0.1l1.6-1.9h3.8l2.7,1.9l0.8-3.4l2.7-0.4l0.7,1.6l4.9,3.8v6.5l10.3,0.9l2.7,2.7h3.4l2.7,1.6l2.3-1.1l3.4-1.2    l2.3,1.6l1.9,3.8l3.8-0.7l2-3.8l2.3,0.4l1.9,1.5l2.6,0.4l3.5-1.8l2.3,1.9l-1.2,1.9l2.6,4.6l2-0.7l2.2,1.5l-1.1,3.8l4.9,3.9l7-8    l3,0.8l3.4,3.1l1.2,0.4l1.1-0.4l1.5,4.6l2.7,1.6l2.3-3.4l2.3,0.4l1.9-3.1l2.3,2.3l-0.4,2.7l0.7,5.7l2.7-0.7l0.1-6.5l3,1.2l2.7-3.1    l1.2-3.8l1.5-0.3l2.3,6.5l2.6-0.8l2.7,2l3.1-5l3.1,1.2l0.3,1.5l-1.5,2.3l7.2,2.8l2.7,2.7l1.9,1.1l1.1-2.3l5.8-1.1l1.2-3l12.2-3    l1.9,0.4l1.6-2.2l9.6-2.3l1.5,2.7l5.3,1.2l3.1-1.5l3.9-3.8l3.4,0.4l11,10.1l6.5,2.3l7.2,3.2l1.2,1.5l2.3-0.4l0.3,0.4l0.4,1.9    l0.8,0.4l0.3,0.8l1.2,0.8l0.7,0.4l0.4,0.7l1.6-0.3l2.2,0.4l0.4-0.8l1.2-0.4l0.4,0.4h0.7l0.8-0.7v-0.8l1.2-0.4l0.3,0.4l1.6,1.2h0.3    h1.2l1.5-0.4l0.4,0.4l1,0.7V78v76l2.3,1.1l2.3,2.2l2.3,2.7l1.2,2.4l0.9,1.6l0.8,0.9v0.8l0.1,2.5l1.4,0.9v1.8l-1.3,0.4l-0.6,1.6    h0.8l0.4,1.2l-0.4,1.2l-0.7,0.3l1.2,1l1,2.3l3.1,1.2h-2.6l2.6,1.2l-1.1,0.5l1.2,1.9l1.1,0.4l0.7,1.7l1.9,1.4l-0.5,2.4l-1.4,1.6    l1.5,0.9l1.8,1.3l0.7,2.3l2.1,1.9l1.4,7.7l-1.4,1.4l-0.8,0.4l0.7,1.2v0.8h0.6l-1,1.4l1.1,1v0.9l-0.5,2l0.1,0.7L588,216l-1.3,1    l-0.7,1.5l-2.4,4.2l-0.8,1.9l-1.1,1.9l-0.4,1.2v1.1l-0.4,0.4l-1.2,1.5v1.6l0.4,2.2l0.3,2.3l-0.7,1.6l0.3,0.7l-1.1,0.4v4.6l4.2,5    l-1.9,9.3l-4.8,6.5l-0.9-0.5l-4.8,7.3l3.4,4.1l-23.2,7.3l-0.8,0.8l-15.8,9.4h-1.5l0.8-2.3l10-6.4l-1.5-2.3l-9.2,3l-0.4-1.5l4.3-13    l-0.7-1.2l-9.3,8.4l-2.6-3.1l-1.9,1.1l1.8,5.4l-1.5,3.4l3.8,2l-1.2,2.6l2.3,2.3l-0.8,5.4l-6.6,5.7l-3.4-0.4l-3.1,5.3l3,1.9    l-1.9,3.1l-15,10.5L465,345.9l-1.1-0.8l26.9-18.1l-2.3-1.2l-18,10.6l-1.2-1.2l0.6-4.5l-3.2,1.1l-3.4-3.5l0.3,6.1l-3.8,2.3l1.1-2.3    l-0.3-2.3l-8.4-3.5l1.1,5.3l-0.8,2.7l3.4-0.7l2.3,2.7l-2.7,1.9l1.2,1.1l3.8-1.1l1.1,2.7l-10.4,6.4l-1.5-1.2l-0.3-3l-3.1-3.9v2.7    l-0.1,6.9l-0.8,5l-5.4,3.4l1.2-6.2l-3,0.8l0.7,4.6l-2.7,0.7l-1.9-2.3l-7.7,6.8l4.9,9.6l-4.6,2.7l-6.1-0.1l-0.8,4.2l1.9,2.7    l-1.2,2.7l1.1,0.4l2.4-3.1l0.7,2.7l-2,5.3l-1.5,5l-1.2,1.5L419,401l-3.8,4.5l-1.9-1.1l1.9-1.6l0.4-4.2h-1.5l-1.2,4.2h-2.3l0.4,1.9    h-0.4h-1.2l-5.2-8.5l-1.2,0.4l4.5,8.1l-2.3,1.1l3.1,2.3l5.3,0.5l4.2-1.1l0.4,5.3l-2.7,3.1l0.7,2.6l-2.7,2.7l-0.5,7.6l2.7,2.4    l2.2,11.1l2.2,11.5l1.8,8.8l1.9,0.8l1.1,5.7l2-0.7l1.1,0.7l-1.9,1.5l0.3,4.3l1.6-2.3l1.1,1.1l1.2-3l0.3,1.1l-0.8,5l-15.3,1    l-4.2-1.9l-1.1-3.5h-6.1l-3.4-2l-8.8,1.5l-6.5-1.6l-15.6-9.7l-3.1,0.7l-3.4-4.6l-14.9-4l-2.6-9.9L340,429l-4.6-4.3l-3.4-7.3    l0.8-1.9l0.1-8l-3.8-3.5l0.1-10.7v-4.2l-7.6-3.9l-4.5-5.4l-11.3-19.6l-5-3.9l-4.5-7.3l-2.6-9.6l-3.4-5l-0.4-1.9l-1.5-0.8    l-4.1-10.7l0.4-1.5l-1.1-0.1l-3-10.7l-4.9-8.8l-9.1-6.2l-1.1-4.2l-13-10.5l-1.4-5.7l-6.9-2.4l-2.7,1.9l-6.1-0.8l-12.6-0.5    l-11.8-5.1l-2.4,5l-12.2,1.8l-7.1,20.2l-1.9,0.7l-0.8,4.2l0.7,2.7l-5.7,3l-2.8,3.4l-2.3,6.5h-6.9l-7.6-4.7l-1.1-3.1l-12.6-5.4V298    l-15.2-5.9l-16.7-15l-5.3-13.5l-1.3-16.4l-6.1-8.5l-1.8-9.6l-3.4-3.5l-0.8-1.9l-17.1-10.8l-8.7-11.2l-3.8-3.5l-3-1.5l-1.9-2    l-6.8-11.5l-5,0.7l-5.7-3.9l-13.6-17.3l-3.8-11.6h1.4h25.4h46.3h2.6h36.1h42.4V-0.1").attr({fill: 'none',stroke: '#C9C79D',"stroke-width": '4',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-opacity': '1'}).data('id', 'path_ga');
        var path_gb = rsr.path("M312.4,0l0.2,16h3.1l4.1,3.1l5.3,6.9    l4.2,0.1l1.6-1.9h3.8l2.7,1.9l0.8-3.4l2.7-0.4l0.7,1.6l4.9,3.8v6.5l10.3,0.9l2.7,2.7h3.4l2.7,1.6l2.3-1.1l3.4-1.2l2.3,1.6l1.9,3.8    l3.8-0.7l2-3.8l2.3,0.4l1.9,1.5l2.6,0.4l3.5-1.8l2.3,1.9l-1.2,1.9l2.6,4.6l2-0.7l2.2,1.5l-1.1,3.8l4.9,3.9l7-8l3,0.8l3.4,3.1    l1.2,0.4l1.1-0.4l1.5,4.6l2.7,1.6l2.3-3.4l2.3,0.4l1.9-3.1l2.3,2.3l-0.4,2.7l0.7,5.7l2.7-0.7l0.1-6.5l3,1.2l2.7-3.1l1.2-3.8    l1.5-0.3l2.3,6.5l2.6-0.8l2.7,2l3.1-5l3.1,1.2l0.3,1.5l-1.5,2.3l7.2,2.8l2.7,2.7l1.9,1.1l1.1-2.3l5.8-1.1l1.2-3l12.2-3l1.9,0.4    l1.6-2.2l9.6-2.3l1.5,2.7l5.3,1.2l3.1-1.5l3.9-3.8l3.4,0.4l11,10.1l6.5,2.3l7.2,3.2l1.2,1.5l2.3-0.4l0.3,0.4l0.4,1.9l0.8,0.4    l0.3,0.8l1.2,0.8l0.7,0.4l0.4,0.7l1.6-0.3l2.2,0.4l0.4-0.8l1.2-0.4l0.4,0.4h0.7l0.8-0.7v-0.8l1.2-0.4l0.3,0.4l1.6,1.2h0.3h1.2    l1.5-0.4l0.4,0.4l1,0.7V78v76l2.3,1.1l2.3,2.2l2.3,2.7l1.2,2.4l0.9,1.6l0.8,0.9v0.8l0.1,2.5l1.4,0.9v1.8l-1.3,0.4l-0.6,1.6h0.8    l0.4,1.2l-0.4,1.2l-0.7,0.3l1.2,1l1,2.3l3.1,1.2h-2.6l2.6,1.2l-1.1,0.5l1.2,1.9l1.1,0.4l0.7,1.7l1.9,1.4l-0.5,2.4l-1.4,1.6    l1.5,0.9l1.8,1.3l0.7,2.3l2.1,1.9l1.4,7.7l-1.4,1.4l-0.8,0.4l0.7,1.2v0.8h0.6l-1,1.4l1.1,1v0.9l-0.5,2l0.1,0.7L588,216l-1.3,1    l-0.7,1.5l-2.4,4.2l-0.8,1.9l-1.1,1.9l-0.4,1.2v1.1l-0.4,0.4l-1.2,1.5v1.6l0.4,2.2l0.3,2.3l-0.7,1.6l0.3,0.7l-1.1,0.4v4.6l4.2,5    l-1.9,9.3l-4.8,6.5l-0.9-0.5l-4.8,7.3l3.4,4.1l-23.2,7.3l-0.8,0.8l-15.8,9.4h-1.5l0.8-2.3l10-6.4l-1.5-2.3l-9.2,3l-0.4-1.5l4.3-13    l-0.7-1.2l-9.3,8.4l-2.6-3.1l-1.9,1.1l1.8,5.4l-1.5,3.4l3.8,2l-1.2,2.6l2.3,2.3l-0.8,5.4l-6.6,5.7l-3.4-0.4l-3.1,5.3l3,1.9    l-1.9,3.1l-15,10.5L465,345.9l-1.1-0.8l26.9-18.1l-2.3-1.2l-18,10.6l-1.2-1.2l0.6-4.5l-3.2,1.1l-3.4-3.5l0.3,6.1l-3.8,2.3l1.1-2.3    l-0.3-2.3l-8.4-3.5l1.1,5.3l-0.8,2.7l3.4-0.7l2.3,2.7l-2.7,1.9l1.2,1.1l3.8-1.1l1.1,2.7l-10.4,6.4l-1.5-1.2l-0.3-3l-3.1-3.9v2.7    l-0.1,6.9l-0.8,5l-5.4,3.4l1.2-6.2l-3,0.8l0.7,4.6l-2.7,0.7l-1.9-2.3l-7.7,6.8l4.9,9.6l-4.6,2.7l-6.1-0.1l-0.8,4.2l1.9,2.7    l-1.2,2.7l1.1,0.4l2.4-3.1l0.7,2.7l-2,5.3l-1.5,5l-1.2,1.5L419,401l-3.8,4.5l-1.9-1.1l1.9-1.6l0.4-4.2h-1.5l-1.2,4.2h-2.3l0.4,1.9    h-0.4h-1.2l-5.2-8.5l-1.2,0.4l4.5,8.1l-2.3,1.1l3.1,2.3l5.3,0.5l4.2-1.1l0.4,5.3l-2.7,3.1l0.7,2.6l-2.7,2.7l-0.5,7.6l2.7,2.4    l2.2,11.1l2.2,11.5l1.8,8.8l1.9,0.8l1.1,5.7l2-0.7l1.1,0.7l-1.9,1.5l0.3,4.3l1.6-2.3l1.1,1.1l1.2-3l0.3,1.1l-0.8,5l-15.3,1    l-4.2-1.9l-1.1-3.5h-6.1l-3.4-2l-8.8,1.5l-6.5-1.6l-15.6-9.7l-3.1,0.7l-3.4-4.6l-14.9-4l-2.6-9.9L340,429l-4.6-4.3l-3.4-7.3    l0.8-1.9l0.1-8l-3.8-3.5l0.1-10.7v-4.2l-7.6-3.9l-4.5-5.4l-11.3-19.6l-5-3.9l-4.5-7.3l-2.6-9.6l-3.4-5l-0.4-1.9l-1.5-0.8    l-4.1-10.7l0.4-1.5l-1.1-0.1l-3-10.7l-4.9-8.8l-9.1-6.2l-1.1-4.2l-13-10.5l-1.4-5.7l-6.9-2.4l-2.7,1.9l-6.1-0.8l-12.6-0.5    l-11.8-5.1l-2.4,5l-12.2,1.8l-7.1,20.2l-1.9,0.7l-0.8,4.2l0.7,2.7l-5.7,3l-2.8,3.4l-2.3,6.5h-6.9l-7.6-4.7l-1.1-3.1l-12.6-5.4V298    l-15.2-5.9l-16.7-15l-5.3-13.5l-1.3-16.4l-6.1-8.5l-1.8-9.6l-3.4-3.5l-0.8-1.9l-17.1-10.8l-8.7-11.2l-3.8-3.5l-3-1.5l-1.9-2    l-6.8-11.5l-5,0.7l-5.7-3.9l-13.6-17.3l-3.8-11.6h1.4h25.4h46.3h2.6h36.1h42.4V-0.1").attr({fill: 'none',stroke: '#FFFFFF',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_gb');
        _x3C_Texas_State_Border_x3E__1_.attr({'id': '_x3C_Texas_State_Border_x3E__1_','parent': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','name': '_x3C_Texas_State_Border_x3E__1_'});
        var _x3C_Service_Territory_Boundary_x3E_ = rsr.set();
        var path_gc = rsr.path("    M486.8,306.3l-0.7-3.8l1.2-1.9l-9.8-14.6l-0.4-3.1l-4.2-2.3l-15.9-17l-13.2,17.1l12.9,15.8l-4.2,4.6l-11.6,11.4l-1.9-2.7    l-11.7-15.4l2.4-11.8l2.3-1.9l-7.2-8.1l-13.6-15.4l-3.1,3l1.3,22.3l-7.8,12.5l3.6,5.7l-5.7,4.7l-0.3,3.8l-11.9,10.6l-9.1-11.9    l-17.9-7.8l-24.9-8.9l-8.4-10.1V267l-3.4-0.4l0.1-9.6h-3.8l0.5-11.1l21,0.2l-0.3-12.2l-9.2-0.5l-0.2-23.3l17.6,0.2l0.6-28.7    l-5.2-0.8l0.1-25.4h16.1l-3.5-6.3l6.1-3.7v-19.7h-13.4l0.4-23.7l6.1,0.1l0.2-23l-22.6-0.2L334,55.6l23-0.2l-0.2-20.3l-10.3-0.9    l0.1-6.5l-4.9-3.9l-0.8-1.5l-2.7,0.4l-0.8,3.4l-2.7-1.9h-3.8l-1.5,1.9h-4.2l-5.3-6.9l-4.2-3.1h-3.1v-10l-18.3-0.2l0.2,23L271.9,29    l0.1-9.9h-12.5v10.7h8.6l0.3,48.8v22.8l15.1-0.1v47.1l-7.7-0.1l-18.8,17l-0.1,6.3l-7.1-0.1l-14.2,13l-33.1-13.4l-10.6-0.1    l-0.2,19.5l-1.9,0.4l-4.2-4.2l-3.4-0.8l-18.7-3.2l-28.1,17l-37.3,25.2l3.7,4.3l1.8,9.6l6,8.5l1.4,16.5l5.2,13.4l16.7,15.1l7.1,2.7    l59-82l19.9,14.8l0.4-3.1l16.8,0.9l4.2,0.8l0.4,3.4l-3.5,7.6l1.1,1.3l11.6,0.3v33.5l1.1,0.5l1.5,5.8l12.9,10.4l1.1,4.2l9.1,6.2    l4.9,8.8l3,10.7h1.1l-0.4,1.5l4.1,10.7l1.5,0.8l0.4,1.9l3.4,5l2.6,9.6l4.5,7.3l4.9,3.9l11.3,19.6l4.5,5.4l7.6,3.9l-0.1,14.9    l3.8,3.5l-0.1,8l-0.8,1.9l3.4,7.3l4.5,4.2l4.9,13.8l2.6,10l14.9,4l3.4,4.6l3.1-0.7l15.6,9.7l6.5,1.6l8.8-1.5l3.4,1.9l6.1,0.1    l1.1,3.5l4.2,2l15.3-1l0.8-5l-0.4-1.1l-1.2,3.1l-1.1-1.2l-1.5,2.3l-0.3-4.2l1.9-1.5l-1.1-0.8l-1.9,0.7l-1.1-5.8l-1.9-0.8l-1.8-8.8    l-2.2-11.5l-2.2-11.1l-2.7-2.3l0.5-7.6l2.7-2.6l-0.7-2.7l2.7-3l-0.3-5.4l-4.2,1.1l-5.4-0.4l-3-2.3l2.3-1.1l-4.5-8.1l1.2-0.4    l5.3,8.5h1.5l-0.4-1.9h2.3l1.2-4.2h1.5l-0.4,4.2l-1.9,1.5l4.8-1.9l1-1.5l1.2-3.4l1.2-1.5l1.6-5l2-5.3l-0.7-2.7l-2.3,3l-1.1-0.4    l1.2-2.7l-1.9-2.7l0.8-4.2l6.1,0.1l4.6-2.6l-4.9-9.6l7.7-6.8l1.9,2.3l2.7-0.7l-0.7-4.6l3.1-0.7l-1.2,6.1l5.4-3.4l0.8-5l0.1-9.6    l3,3.9l0.4,3.1l1.5,1.2l10.4-6.4l-1.1-2.7l-3.8,1.1l-1.1-1.2l2.7-1.9l-2.3-2.7l-3.5,0.7l0.8-2.7l-1.1-5.4l8.4,3.5l0.4,2.3    l-1.2,2.3l3.8-2.3l-0.3-6.1l3.4,3.5l3.2-1.1l-0.6,4.6l1.1,1.2l18.1-10.6l2.3,1.2l-26.9,18.1l1.1,0.8l34.6-22.6L486.8,306.3z     M312.1,78.7l-21.8,0.2l-0.2-24.1l20.3-0.2l1.9,0.4L312.1,78.7z").attr({fill: 'none',stroke: '#C9C79D',"stroke-width": '4',"stroke-linecap": 'square',"stroke-linejoin": 'round',"stroke-miterlimit": '10',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-opacity': '1'}).data('id', 'path_gc');
        var path_gd = rsr.path("M486.8,306.3    l-0.7-3.8l1.2-1.9l-9.8-14.6l-0.4-3.1l-4.2-2.3l-15.9-17l-13.2,17.1l12.9,15.8l-4.2,4.6l-11.6,11.4l-1.9-2.7l-11.7-15.4l2.4-11.8    l2.3-1.9l-7.2-8.1l-13.6-15.4l-3.1,3l1.3,22.3l-7.8,12.5l3.6,5.7l-5.7,4.7l-0.3,3.8l-11.9,10.6l-9.1-11.9l-17.9-7.8l-24.9-8.9    l-8.4-10.1V267l-3.4-0.4l0.1-9.6h-3.8l0.5-11.1l21,0.2l-0.3-12.2l-9.2-0.5l-0.2-23.3l17.6,0.2l0.6-28.7l-5.2-0.8l0.1-25.4h16.1    l-3.5-6.3l6.1-3.7v-19.7h-13.4l0.4-23.7l6.1,0.1l0.2-23l-22.6-0.2L334,55.6l23-0.2l-0.2-20.3l-10.3-0.9l0.1-6.5l-4.9-3.9l-0.8-1.5    l-2.7,0.4l-0.8,3.4l-2.7-1.9h-3.8l-1.5,1.9h-4.2l-5.3-6.9l-4.2-3.1h-3.1v-10l-18.3-0.2l0.2,23L271.9,29l0.1-9.9h-12.5v10.7h8.6    l0.3,48.8v22.8l15.1-0.1v47.1l-7.7-0.1l-18.8,17l-0.1,6.3l-7.1-0.1l-14.2,13l-33.1-13.4l-10.6-0.1l-0.2,19.5l-1.9,0.4l-4.2-4.2    l-3.4-0.8l-18.7-3.2l-28.1,17l-37.3,25.2l3.7,4.3l1.8,9.6l6,8.5l1.4,16.5l5.2,13.4l16.7,15.1l7.1,2.7l59-82l19.9,14.8l0.4-3.1    l16.8,0.9l4.2,0.8l0.4,3.4l-3.5,7.6l1.1,1.3l11.6,0.3v33.5l1.1,0.5l1.5,5.8l12.9,10.4l1.1,4.2l9.1,6.2l4.9,8.8l3,10.7h1.1    l-0.4,1.5l4.1,10.7l1.5,0.8l0.4,1.9l3.4,5l2.6,9.6l4.5,7.3l4.9,3.9l11.3,19.6l4.5,5.4l7.6,3.9l-0.1,14.9l3.8,3.5l-0.1,8l-0.8,1.9    l3.4,7.3l4.5,4.2l4.9,13.8l2.6,10l14.9,4l3.4,4.6l3.1-0.7l15.6,9.7l6.5,1.6l8.8-1.5l3.4,1.9l6.1,0.1l1.1,3.5l4.2,2l15.3-1l0.8-5    l-0.4-1.1l-1.2,3.1l-1.1-1.2l-1.5,2.3l-0.3-4.2l1.9-1.5l-1.1-0.8l-1.9,0.7l-1.1-5.8l-1.9-0.8l-1.8-8.8l-2.2-11.5l-2.2-11.1    l-2.7-2.3l0.5-7.6l2.7-2.6l-0.7-2.7l2.7-3l-0.3-5.4l-4.2,1.1l-5.4-0.4l-3-2.3l2.3-1.1l-4.5-8.1l1.2-0.4l5.3,8.5h1.5l-0.4-1.9h2.3    l1.2-4.2h1.5l-0.4,4.2l-1.9,1.5l4.8-1.9l1-1.5l1.2-3.4l1.2-1.5l1.6-5l2-5.3l-0.7-2.7l-2.3,3l-1.1-0.4l1.2-2.7l-1.9-2.7l0.8-4.2    l6.1,0.1l4.6-2.6l-4.9-9.6l7.7-6.8l1.9,2.3l2.7-0.7l-0.7-4.6l3.1-0.7l-1.2,6.1l5.4-3.4l0.8-5l0.1-9.6l3,3.9l0.4,3.1l1.5,1.2    l10.4-6.4l-1.1-2.7l-3.8,1.1l-1.1-1.2l2.7-1.9l-2.3-2.7l-3.5,0.7l0.8-2.7l-1.1-5.4l8.4,3.5l0.4,2.3l-1.2,2.3l3.8-2.3l-0.3-6.1    l3.4,3.5l3.2-1.1l-0.6,4.6l1.1,1.2l18.1-10.6l2.3,1.2l-26.9,18.1l1.1,0.8l34.6-22.6L486.8,306.3z M312.1,78.7l-21.8,0.2l-0.2-24.1    l20.3-0.2l1.9,0.4L312.1,78.7z").attr({fill: 'none',stroke: '#CCEDEB',"stroke-linecap": 'square',"stroke-linejoin": 'round',"stroke-miterlimit": '10',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-width': '1','stroke-opacity': '1'}).data('id', 'path_gd');
        _x3C_Service_Territory_Boundary_x3E_.attr({'id': '_x3C_Service_Territory_Boundary_x3E_','parent': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','name': '_x3C_Service_Territory_Boundary_x3E_'});
        var STATE_NAMES_x2F_CITIES = rsr.set();
        var rect_ge = rsr.rect(270, 272.3, 113, 21.2).attr({x: '270',y: '272.3',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_ge');
        var text_gf = rsr.text(0, 0, 'San Antonio').attr({fill: '#58595B',"font-family": "HelveticaNeue Condensed, Helvetica, Arial, sans-serif","font-size": '16',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 320.6442 290.6638").data('id', 'text_gf');
        var rect_gg = rsr.rect(202.6, 180.3, 82.7, 21.2).attr({x: '202.6',y: '180.3',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_gg');
        var text_gh = rsr.text(0, 0, 'San Angelo').attr({fill: '#58595B',"font-family": "HelveticaNeue Condensed, Helvetica, Arial, sans-serif","font-size": '16',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 235.2137 187.6441").data('id', 'text_gh');
        var rect_gi = rsr.rect(232, 27, 82.7, 21.2).attr({x: '232',y: '27',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_gi');
        var text_gj = rsr.text(0, 0, 'Vernon').attr({fill: '#58595B',"font-family": "HelveticaNeue Condensed, Helvetica, Arial, sans-serif","font-size": '16',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 285.1782 34.3389").data('id', 'text_gj');
        var rect_gk = rsr.rect(224.3, 120.2, 82.7, 21.2).attr({x: '224.3',y: '120.2',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_gk');
        var text_gl = rsr.text(0, 0, 'Abilene').attr({fill: '#58595B',"font-family": "HelveticaNeue Condensed, Helvetica, Arial, sans-serif","font-size": '16',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 279.7561 127.5299").data('id', 'text_gl');
        var rect_gm = rsr.rect(62, 234.9, 82.7, 21.2).attr({x: '62',y: '234.9',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_gm');
        var text_gn = rsr.text(0, 0, 'Alpine').attr({fill: '#58595B',"font-family": "HelveticaNeue Condensed, Helvetica, Arial, sans-serif","font-size": '16',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 120.5625 241.219").data('id', 'text_gn');
        var rect_go = rsr.rect(510.2, 251.7, 82.7, 21.2).attr({x: '510.2',y: '251.7',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_go');
        var text_gp = rsr.text(0, 0, 'Houston').attr({fill: '#58595B',"font-family": "HelveticaNeue Condensed, Helvetica, Arial, sans-serif","font-size": '16',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 555.1692 272.0975").data('id', 'text_gp');
        var rect_gq = rsr.rect(430.8, 368.2, 106.6, 23.7).attr({x: '430.8',y: '368.2',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_gq');
        var text_gr = rsr.text(0, 0, 'Corpus Christi').attr({fill: '#58595B',"font-family": "HelveticaNeue Condensed, Helvetica, Arial, sans-serif","font-size": '16',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 485.7834 374.5235").data('id', 'text_gr');
        var rect_gs = rsr.rect(477.9, 340, 106.6, 23.7).attr({x: '477.9',y: '340',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_gs');
        var text_gt = rsr.text(0, 0, 'Victoria').attr({fill: '#58595B',"font-family": "HelveticaNeue Condensed, Helvetica, Arial, sans-serif","font-size": '16',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 474.8723 326.3956").data('id', 'text_gt');
        var rect_gu = rsr.rect(404.6, 226.7, 106.6, 23.7).attr({x: '404.6',y: '226.7',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_gu');
        var text_gv = rsr.text(0, 0, 'Austin').attr({fill: '#58595B',"font-family": "HelveticaNeue Condensed, Helvetica, Arial, sans-serif","font-size": '16',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 440.5762 249.0934").data('id', 'text_gv');
        var rect_gw = rsr.rect(313.8, 457.6, 60.1, 19.3).attr({x: '313.8',y: '457.6',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_gw');
        var text_gx = rsr.text(0, 0, 'McAllen').attr({fill: '#58595B',"font-family": "HelveticaNeue Condensed, Helvetica, Arial, sans-serif","font-size": '16',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 347.7253 462.969").data('id', 'text_gx');
        var rect_gy = rsr.rect(337.6, 382.2, 106.6, 23.7).attr({x: '337.6',y: '382.2',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_gy');
        var text_gz = rsr.text(0, 0, 'Laredo').attr({fill: '#58595B',"font-family": "HelveticaNeue Condensed, Helvetica, Arial, sans-serif","font-size": '16',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 363.585 389.5983").data('id', 'text_gz');
        STATE_NAMES_x2F_CITIES.attr({'id': 'STATE_NAMES_x2F_CITIES','name': 'STATE_NAMES_x2F_CITIES'});
        var group_a = rsr.set();
        var path_ha = rsr.path("M154.5,246.1c-2.5,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6S157,246.1,154.5,246.1z").attr({fill: '#58595B',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ha');
        var path_hb = rsr.path("M154.5,238.2c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3S152.7,238.2,154.5,238.2     M154.5,235.6c-3.3,0-5.9,2.6-5.9,5.9c0,3.3,2.6,5.9,5.9,5.9c3.3,0,5.9-2.6,5.9-5.9C160.4,238.2,157.8,235.6,154.5,235.6    L154.5,235.6z").attr({fill: '#998675',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hb');
        var path_hc = rsr.path("M154.5,238.2c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3S152.7,238.2,154.5,238.2     M154.5,236.2c-2.9,0-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3c2.9,0,5.3-2.4,5.3-5.3S157.4,236.2,154.5,236.2L154.5,236.2z").attr({fill: '#FFFFFF',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hc');
        group_a.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_a'});
        var group_b = rsr.set();
        var path_hd = rsr.path("M374.4,296.1c-2.5,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6S377,296.1,374.4,296.1z").attr({fill: '#58595B',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hd');
        var path_he = rsr.path("M374.4,288.2c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3    C371.1,289.6,372.6,288.2,374.4,288.2 M374.4,285.6c-3.3,0-5.9,2.6-5.9,5.9s2.6,5.9,5.9,5.9s5.9-2.6,5.9-5.9    S377.7,285.6,374.4,285.6L374.4,285.6z").attr({fill: '#998675',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_he');
        var path_hf = rsr.path("M374.4,288.2c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3    C371.1,289.6,372.6,288.2,374.4,288.2 M374.4,286.2c-2.9,0-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3    S377.4,286.2,374.4,286.2L374.4,286.2z").attr({fill: '#FFFFFF',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hf');
        group_b.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_b'});
        var group_c = rsr.set();
        var path_hg = rsr.path("M407.4,253.2c-2.5,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6S410,253.2,407.4,253.2z").attr({fill: '#58595B',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hg');
        var path_hh = rsr.path("M407.4,245.3c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3S405.6,245.3,407.4,245.3     M407.4,242.7c-3.3,0-5.9,2.6-5.9,5.9s2.6,5.9,5.9,5.9s5.9-2.6,5.9-5.9S410.7,242.7,407.4,242.7L407.4,242.7z").attr({fill: '#998675',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hh');
        var path_hi = rsr.path("M407.4,245.3c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3S405.6,245.3,407.4,245.3     M407.4,243.3c-2.9,0-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3S410.3,243.3,407.4,243.3L407.4,243.3z").attr({fill: '#FFFFFF',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hi');
        group_c.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_c'});
        var group_d = rsr.set();
        var path_hj = rsr.path("M439.1,330.8c-2.5,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6S441.6,330.8,439.1,330.8z").attr({fill: '#58595B',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hj');
        var path_hk = rsr.path("M439.1,322.9c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3    C435.8,324.3,437.3,322.9,439.1,322.9 M439.1,320.3c-3.3,0-5.9,2.6-5.9,5.9s2.6,5.9,5.9,5.9s5.9-2.6,5.9-5.9    S442.4,320.3,439.1,320.3L439.1,320.3z").attr({fill: '#998675',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hk');
        var path_hl = rsr.path("M439.1,322.9c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3    C435.8,324.3,437.3,322.9,439.1,322.9 M439.1,320.9c-2.9,0-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3    S442,320.9,439.1,320.9L439.1,320.9z").attr({fill: '#FFFFFF',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hl');
        group_d.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_d'});
        var group_e = rsr.set();
        var path_hm = rsr.path("M510.3,275.7c-2.5,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6S512.9,275.7,510.3,275.7z").attr({fill: '#58595B',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hm');
        var path_hn = rsr.path("M510.3,267.8c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3S508.5,267.8,510.3,267.8     M510.3,265.2c-3.3,0-5.9,2.6-5.9,5.9s2.6,5.9,5.9,5.9s5.9-2.6,5.9-5.9S513.6,265.2,510.3,265.2L510.3,265.2z").attr({fill: '#998675',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hn');
        var path_ho = rsr.path("M510.3,267.8c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3S508.5,267.8,510.3,267.8     M510.3,265.8c-2.9,0-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3c2.9,0,5.3-2.4,5.3-5.3S513.3,265.8,510.3,265.8L510.3,265.8z").attr({fill: '#FFFFFF',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ho');
        group_e.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_e'});
        var group_f = rsr.set();
        var path_hp = rsr.path("M421.7,378.1c-2.5,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6S424.2,378.1,421.7,378.1z").attr({fill: '#58595B',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hp');
        var path_hq = rsr.path("M421.7,370.2c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3    C418.4,371.7,419.9,370.2,421.7,370.2 M421.7,367.6c-3.3,0-5.9,2.6-5.9,5.9s2.6,5.9,5.9,5.9s5.9-2.6,5.9-5.9    S424.9,367.6,421.7,367.6L421.7,367.6z").attr({fill: '#998675',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hq');
        var path_hr = rsr.path("M421.7,370.2c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3    C418.4,371.7,419.9,370.2,421.7,370.2 M421.7,368.2c-2.9,0-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3    S424.6,368.2,421.7,368.2L421.7,368.2z").attr({fill: '#FFFFFF',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hr');
        group_f.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_f'});
        var group_g = rsr.set();
        var path_hs = rsr.path("M384.3,468.7c-2.5,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6S386.8,468.7,384.3,468.7z").attr({fill: '#58595B',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hs');
        var path_ht = rsr.path("M384.3,460.8c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3S382.4,460.8,384.3,460.8     M384.3,458.2c-3.3,0-5.9,2.6-5.9,5.9s2.6,5.9,5.9,5.9s5.9-2.6,5.9-5.9S387.5,458.2,384.3,458.2L384.3,458.2z").attr({fill: '#998675',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ht');
        var path_hu = rsr.path("M384.3,460.8c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3S382.4,460.8,384.3,460.8     M384.3,458.8c-2.9,0-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3S387.2,458.8,384.3,458.8L384.3,458.8z").attr({fill: '#FFFFFF',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hu');
        group_g.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_g'});
        var group_h = rsr.set();
        var path_hv = rsr.path("M328.5,393.2c-2.5,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6S331,393.2,328.5,393.2z").attr({fill: '#58595B',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hv');
        var path_hw = rsr.path("M328.5,385.3c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3S326.7,385.3,328.5,385.3     M328.5,382.7c-3.3,0-5.9,2.6-5.9,5.9s2.6,5.9,5.9,5.9s5.9-2.6,5.9-5.9S331.7,382.7,328.5,382.7L328.5,382.7z").attr({fill: '#998675',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hw');
        var path_hx = rsr.path("M328.5,385.3c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3S326.7,385.3,328.5,385.3     M328.5,383.3c-2.9,0-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3S331.4,383.3,328.5,383.3L328.5,383.3z").attr({fill: '#FFFFFF',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hx');
        group_h.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_h'});
        var group_i = rsr.set();
        var path_hy = rsr.path("M288.3,191.9c-2.5,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6    C292.9,189.8,290.8,191.9,288.3,191.9z").attr({fill: '#58595B',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hy');
        var path_hz = rsr.path("M288.3,184c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3S286.5,184,288.3,184 M288.3,181.4    c-3.3,0-5.9,2.6-5.9,5.9c0,3.3,2.6,5.9,5.9,5.9s5.9-2.6,5.9-5.9C294.2,184,291.6,181.4,288.3,181.4L288.3,181.4z").attr({fill: '#998675',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hz');
        var path_ia = rsr.path("M288.3,184c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3S286.5,184,288.3,184 M288.3,182    c-2.9,0-5.3,2.4-5.3,5.3c0,2.9,2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3C293.6,184.4,291.2,182,288.3,182L288.3,182z").attr({fill: '#FFFFFF',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ia');
        group_i.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_i'});
        var group_j = rsr.set();
        var path_ib = rsr.path("M317.4,132.6c-2.5,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6S320,132.6,317.4,132.6z").attr({fill: '#58595B',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ib');
        var path_ic = rsr.path("M317.4,124.7c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3    C314.1,126.1,315.6,124.7,317.4,124.7 M317.4,122.1c-3.3,0-5.9,2.6-5.9,5.9s2.6,5.9,5.9,5.9s5.9-2.6,5.9-5.9    S320.7,122.1,317.4,122.1L317.4,122.1z").attr({fill: '#998675',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ic');
        var path_id = rsr.path("M317.4,124.7c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3    C314.1,126.1,315.6,124.7,317.4,124.7 M317.4,122.7c-2.9,0-5.3,2.4-5.3,5.3c0,2.9,2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3    C322.7,125,320.4,122.7,317.4,122.7L317.4,122.7z").attr({fill: '#FFFFFF',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_id');
        group_j.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_j'});
        var group_k = rsr.set();
        var path_ie = rsr.path("M324.2,39.2c-2.5,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6C328.8,37.2,326.7,39.2,324.2,39.2z").attr({fill: '#58595B',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ie');
        var path_if = rsr.path("M324.2,31.3c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3C320.9,32.8,322.4,31.3,324.2,31.3     M324.2,28.7c-3.3,0-5.9,2.6-5.9,5.9s2.6,5.9,5.9,5.9s5.9-2.6,5.9-5.9C330.1,31.4,327.5,28.7,324.2,28.7L324.2,28.7z").attr({fill: '#998675',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_if');
        var path_ig = rsr.path("M324.2,31.3c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3C320.9,32.8,322.4,31.3,324.2,31.3     M324.2,29.3c-2.9,0-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3S327.1,29.3,324.2,29.3L324.2,29.3z").attr({fill: '#FFFFFF',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ig');
        group_k.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_k'});
        var group_l = rsr.set();
        var rect_ih = rsr.rect(391.1, 22.6, 101, 17.7).attr({x: '391.1',y: '22.6',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_ih');
        var text_ii = rsr.text(0, 0, 'OKLAHOMA').attr({fill: '#BBB5AF',"font-family": "HelveticaNeue Condensed, Helvetica, Arial, sans-serif","font-size": '16',"letter-spacing": '2',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 422.5851 23.9757").data('id', 'text_ii');
        group_l.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_l'});
        var group_m = rsr.set();
        var rect_ij = rsr.rect(4.4, 107.3, 170, 28.6).attr({x: '4.4',y: '107.3',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_ij');
        var text_ik = rsr.text(0, 0, 'NEW MEXICO').attr({fill: '#BBB5AF',"font-family": "HelveticaNeue Condensed, Helvetica, Arial, sans-serif","font-size": '16',"letter-spacing": '2',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 73.9247 118.6183").data('id', 'text_ik');
        group_m.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_m'});
        var group_n = rsr.set();
        var rect_il = rsr.rect(81.9, 376.7, 170, 28.6).attr({x: '81.9',y: '376.7',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_il');
        var text_im = rsr.text(0, 0, 'MEXICO').attr({fill: '#BBB5AF',"font-family": "HelveticaNeue Condensed, Helvetica, Arial, sans-serif","font-size": '16',"letter-spacing": '2',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 163.9211 388.0258").data('id', 'text_im');
        group_n.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_n'});
        var group_o = rsr.set();
        var rect_in = rsr.rect(578.9, 58.6, 105.2, 27.6).attr({x: '578.9',y: '58.6',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_in');
        var text_io = rsr.text(0, 0, 'ARKANSAS').attr({fill: '#BBB5AF',"font-family": "HelveticaNeue Condensed, Helvetica, Arial, sans-serif","font-size": '16',"letter-spacing": '2',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 616.5929 69.9761").data('id', 'text_io');
        group_o.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_o'});
        var group_p = rsr.set();
        var rect_ip = rsr.rect(604.9, 224.8, 105.2, 27.6).attr({x: '604.9',y: '224.8',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_ip');
        var text_iq = rsr.text(0, 0, 'LOUISIANA').attr({fill: '#BBB5AF',"font-family": "HelveticaNeue Condensed, Helvetica, Arial, sans-serif","font-size": '16',"letter-spacing": '2',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 640.5875 236.1295").data('id', 'text_iq');
        group_p.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_p'});


        var rsrGroups = [BASE_LAYER,MAJOR_HIGHWAYS_LAYER,NON_SERVICE_COUNTIES,SERVICE_COUNTIES,STATE_BORDERS_x2F_SERVICE_BOUNDARY,_x3C_Mexico_Border_x3E_,_x3C_New_Mexico_Border_x3E_,_x3C_Oklahoma_Arkansas_Border_x3E_,_x3C_LOUISIANA_BORDER3_x3E_,_x3C_LOUISIANA_BORDER2_x3E_,_x3C_Louisiana_Arkansas_Border_x3E_,_x3C_Texas_State_Border_x3E__1_,_x3C_Service_Territory_Boundary_x3E_,STATE_NAMES_x2F_CITIES,group_a,group_b,group_c,group_d,group_e,group_f,group_g,group_h,group_i,group_j,group_k,group_l,group_m,group_n,group_o,group_p];
        BASE_LAYER.push(
            _x3C_BACKGROUND_x3E_ ,
            _x3C_WATER2_x3E_ ,
            _x3C_WATER1_x3E_ ,
            _x3C_Texas_land_fill_x3E_ ,
            _x3C_Service_Territory_Highlight_fill_x3E_
        );
        MAJOR_HIGHWAYS_LAYER.push(
            _x3C_major_highway1_x3E_ ,
            _x3C_major_highway2_x3E_ ,
            _x3C_major_highway3_x3E_ ,
            _x3C_major_highway4_x3E_ ,
            _x3C_major_highway5_x3E_ ,
            _x3C_major_highway6_x3E_ ,
            _x3C_major_highway7_x3E_ ,
            _x3C_major_highway8_x3E_ ,
            _x3C_major_highway9_x3E_ ,
            _x3C_major_highway10_x3E_ ,
            _x3C_major_highway11_x3E_ ,
            _x3C_major_highway12_x3E_ ,
            _x3C_major_highway13_x3E__1_ ,
            _x3C_major_highway13_x3E_
        );
        NON_SERVICE_COUNTIES.push(
            path_q ,
            path_r ,
            path_s ,
            path_t ,
            path_u ,
            path_v ,
            path_w ,
            path_x ,
            path_y ,
            path_z ,
            path_aa ,
            path_ab ,
            path_ac ,
            path_ad ,
            path_ae ,
            path_af ,
            path_ag ,
            path_ah ,
            path_ai ,
            path_aj ,
            path_ak ,
            path_al ,
            path_am ,
            path_an ,
            path_ao ,
            path_ap ,
            path_aq ,
            path_ar ,
            path_as ,
            path_at ,
            path_au ,
            path_av ,
            path_aw ,
            path_ax ,
            path_ay ,
            path_az ,
            path_ba ,
            path_bb ,
            path_bc ,
            path_bd ,
            path_be ,
            path_bf ,
            path_bg ,
            path_bh ,
            path_bi ,
            path_bj ,
            path_bk ,
            path_bl ,
            path_bm ,
            path_bn ,
            path_bo ,
            path_bp ,
            path_bq ,
            path_br ,
            path_bs ,
            path_bt ,
            path_bu ,
            path_bv ,
            path_bw ,
            path_bx ,
            path_by ,
            path_bz ,
            path_ca ,
            path_cb ,
            path_cc ,
            path_cd ,
            path_ce ,
            path_cf ,
            path_cg ,
            path_ch ,
            path_ci ,
            path_cj ,
            path_ck ,
            path_cl ,
            path_cm ,
            path_cn ,
            path_co ,
            path_cp ,
            path_cq ,
            path_cr ,
            path_cs ,
            path_ct ,
            path_cu ,
            path_cv ,
            path_cw ,
            path_cx ,
            path_cy ,
            path_cz ,
            path_da ,
            path_db ,
            path_dc ,
            path_dd ,
            path_de ,
            path_df ,
            path_dg ,
            path_dh ,
            path_di ,
            path_dj ,
            path_dk ,
            path_dl ,
            path_dm ,
            path_dn ,
            path_do ,
            path_dp ,
            path_dq ,
            path_dr ,
            path_ds ,
            path_dt ,
            path_du ,
            path_dv ,
            path_dw ,
            path_dx ,
            path_dy ,
            path_dz ,
            path_ea ,
            path_eb ,
            path_ec ,
            path_ed ,
            path_ee ,
            path_ef ,
            path_eg ,
            path_eh ,
            path_ei ,
            path_ej ,
            path_ek ,
            path_el ,
            path_em ,
            path_en ,
            path_eo ,
            path_ep ,
            path_eq ,
            path_er ,
            path_es ,
            path_et ,
            path_eu ,
            path_ev ,
            path_ew ,
            path_ex ,
            path_ey ,
            path_ez ,
            path_fa ,
            path_fb ,
            path_fc ,
            path_fd ,
            path_fe ,
            path_ff ,
            path_fg ,
            path_fh ,
            path_fi ,
            path_fj ,
            path_fk ,
            path_fl ,
            path_fm
        );
        SERVICE_COUNTIES.push(
            _x3C_ZAVALA_x3E_ ,
            _x3C_ZAPATA_x3E_ ,
            _x3C_WILSON_x3E_ ,
            _x3C_WILLACY_x3E_ ,
            _x3C_WILBARGER_x3E_ ,
            _x3C_WHARTON_x3E_ ,
            _x3C_WEBB_x3E_ ,
            _x3C_VICTORIA_x3E_ ,
            _x3C_VAL_VERDE_x3E_ ,
            _x3C_UVALDE_x3E_ ,
            _x3C_UPTON_x3E_ ,
            _x3C_TOM_GREEN_x3E_ ,
            _x3C_THROCKMORTON_x3E_ ,
            _x3C_TAYLOR_x3E_ ,
            _x3C_SUTTON_x3E_ ,
            _x3C_STONEWALL_x3E_ ,
            _x3C_STERLING_x3E_ ,
            _x3C_STAR_x3E_ ,
            _x3C_SCHACKELFORD_x3E_ ,
            _x3C_SCHLEICHER_x3E_ ,
            _x3C_SAN_PATRICO_x3E_ ,
            _x3C_RUNNELS_x3E_ ,
            _x3C_REFUGLO_x3E_ ,
            _x3C_REEVES_x3E_ ,
            _x3C_REAL_x3E_ ,
            _x3C_REAGAN_x3E_ ,
            _x3C_PRESIDO_x3E_ ,
            _x3C_PECOS_x3E_ ,
            _x3C_NUECES_x3E_ ,
            _x3C_NOLAN_x3E_ ,
            _x3C_MOTLEY_x3E_ ,
            _x3C_MENARD_x3E_ ,
            _x3C_MEDINA_x3E_ ,
            _x3C_MCMULLEN_x3E_ ,
            _x3C_MCCULLOCH_x3E_ ,
            _x3C_MAVERICK_x3E_ ,
            _x3C_MATAGORDA_x3E_ ,
            _x3C_LIVE_OAK_x3E_ ,
            _x3C_LA_SALLE_x3E_ ,
            _x3C_KNOX_x3E_ ,
            _x3C_KLEBERG_x3E_ ,
            _x3C_KINNEY_x3E_ ,
            _x3C_KIMBLE_x3E_ ,
            _x3C_KENT_x3E_ ,
            _x3C_KENNEDY_x3E_ ,
            _x3C_KARNES_x3E_ ,
            _x3C_JONES_x3E_ ,
            _x3C_JIM_WELLS_x3E_ ,
            _x3C_JIM_HOGG_x3E_ ,
            _x3C_JEFF_DAVIS_x3E_ ,
            _x3C_JACKSON_x3E_ ,
            _x3C_IRION ,
            _x3C_HIDALGO_x3E_ ,
            _x3C_HASKELL_x3E_ ,
            _x3C_HARDEMAN_x3E_ ,
            _x3C_HALL_x3E_ ,
            _x3C_GUADALUPE_x3E_ ,
            _x3C_GONZALES_x3E_ ,
            _x3C_GOLIAD_x3E_ ,
            _x3C_FRIO_x3E_ ,
            _x3C_FOARD_x3E_ ,
            _x3C_FISHER_x3E_ ,
            _x3C_EDWARDS_x3E_ ,
            _x3C_EASTLAND_x3E_ ,
            _x3C_DUVAL_x3E_ ,
            _x3C_DIMMIT_x3E_ ,
            _x3C_DICKENS_x3E_ ,
            _x3C_DEWITT_x3E_ ,
            _x3C_CROCKETT_x3E_ ,
            _x3C_CRANE_x3E_ ,
            _x3C_COTTLE_x3E_ ,
            _x3C_CONCHO_x3E_ ,
            _x3C_COLORADO_x3E_ ,
            _x3C_COLEMAN_x3E_ ,
            _x3C_COKE_x3E_ ,
            _x3C_CHILDRESS_x3E_ ,
            _x3C_CAMERON_x3E__1_ ,
            _x3C_CALLAHAN_x3E_ ,
            _x3C_CALHOUN_x3E_ ,
            _x3C_CALDWELL_x3E_ ,
            _x3C_BROWN_x3E_ ,
            _x3C_BROOKS_x3E_ ,
            _x3C_BRISCOE_x3E_ ,
            _x3C_BREWSTER_x3E_ ,
            _x3C_BEE_x3E_ ,
            _x3C_ATASCOSA_x3E_ ,
            _x3C_ARANSAS_x3E_
        );
        STATE_BORDERS_x2F_SERVICE_BOUNDARY.push(
            path_fn
        );
        _x3C_Mexico_Border_x3E_.push(
            path_fo ,
            path_fp
        );
        _x3C_New_Mexico_Border_x3E_.push(
            path_fq ,
            path_fr
        );
        _x3C_Oklahoma_Arkansas_Border_x3E_.push(
            path_fs ,
            path_ft
        );
        _x3C_LOUISIANA_BORDER3_x3E_.push(
            path_fu ,
            path_fv
        );
        _x3C_LOUISIANA_BORDER2_x3E_.push(
            path_fw ,
            path_fx
        );
        _x3C_Louisiana_Arkansas_Border_x3E_.push(
            path_fy ,
            path_fz
        );
        _x3C_Texas_State_Border_x3E__1_.push(
            path_ga ,
            path_gb
        );
        _x3C_Service_Territory_Boundary_x3E_.push(
            path_gc ,
            path_gd
        );
        STATE_NAMES_x2F_CITIES.push(
            rect_ge ,
            text_gf ,
            rect_gg ,
            text_gh ,
            rect_gi ,
            text_gj ,
            rect_gk ,
            text_gl ,
            rect_gm ,
            text_gn ,
            rect_go ,
            text_gp ,
            rect_gq ,
            text_gr ,
            rect_gs ,
            text_gt ,
            rect_gu ,
            text_gv ,
            rect_gw ,
            text_gx ,
            rect_gy ,
            text_gz
        );
        group_a.push(
            path_ha ,
            path_hb ,
            path_hc
        );
        group_b.push(
            path_hd ,
            path_he ,
            path_hf
        );
        group_c.push(
            path_hg ,
            path_hh ,
            path_hi
        );
        group_d.push(
            path_hj ,
            path_hk ,
            path_hl
        );
        group_e.push(
            path_hm ,
            path_hn ,
            path_ho
        );
        group_f.push(
            path_hp ,
            path_hq ,
            path_hr
        );
        group_g.push(
            path_hs ,
            path_ht ,
            path_hu
        );
        group_h.push(
            path_hv ,
            path_hw ,
            path_hx
        );
        group_i.push(
            path_hy ,
            path_hz ,
            path_ia
        );
        group_j.push(
            path_ib ,
            path_ic ,
            path_id
        );
        group_k.push(
            path_ie ,
            path_if ,
            path_ig
        );
        group_l.push(
            rect_ih ,
            text_ii
        );
        group_m.push(
            rect_ij ,
            text_ik
        );
        group_n.push(
            rect_il ,
            text_im
        );
        group_o.push(
            rect_in ,
            text_io
        );
        group_p.push(
            rect_ip ,
            text_iq
        );

        var currentContext = this;
        currentContext.serviceCounties = [];
        SERVICE_COUNTIES.forEach(function (serviceCounty) {
            currentContext.serviceCounties.push({ id: serviceCounty.data('id'), svgElement: serviceCounty });
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

