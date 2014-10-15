define(function (require) {
    'use strict';

    var map = {};

    map.render = function (rootElementId) {
        var rsr = Raphael(document.getElementById(rootElementId), '744', '484');

        
        var rsr = Raphael('rsr', '744', '484');

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
var path_q = rsr.path("M 561.2,201.8 565,200.3 570.7,198.8    571.5,247.7 561.9,248.4 563.2,232.8 563.6,225.5 553.9,204.4   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_q');
var path_r = rsr.path("M 505.4,149.2 479.3,153.2    478.5,156.3 482.3,160.5 482.3,164.7 486.8,169.4 490.3,169.8 490.3,173.6 492.1,179 512.8,174.6 505.7,161.1   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_r');
var path_s = rsr.path("M 217.2,124.5 182.5,124.6 182.6,148    191.3,148 213.9,147.8 217,147.9   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_s');
var path_t = rsr.path("M 524.6,184.2 530.4,178.5    552.8,194.8 561.2,201.8 553.9,204.4 547.4,205.1 542.8,203.5 531,198.8 526.1,186.5   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_t');
var path_u = rsr.path("M 357,55.4 379.6,55.2 379,75.5    378.6,78.9 356.8,79.1   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_u');
var path_v = rsr.path("M 475,257.6 469.3,255.7 454.7,258.2    457,263.6 472.9,280.5 477.1,282.9 479.4,281.8 479.8,275.6   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_v');
var path_w = rsr.path("M 200.8,29.1 200.8,54.4 182.6,54.4    182.5,29.4   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_w');
var path_x = rsr.path("M 357,272.7 345.6,266.1 326.9,267    326.9,280.8 335.5,280.9 353.9,280.3 354.6,284.9 360.8,277.7 362.4,275.8   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_x');
var path_y = rsr.path("M 422.4,239.2 434.5,248.1    437.1,257.7 424.7,272.5 411.1,257.1   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_y');
var path_z = rsr.path("M 357,55.4 334.1,55.6 334,59.4    334.2,78.9 356.8,79.1   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_z');
var path_aa = rsr.path("M 427,192.2 423.9,193.7 420.9,189.8    400.1,203.8 400.1,205.3 403.5,213 411.9,213.8 425.6,220.5 427.2,213.2 435.6,207.9   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_aa');
var path_ab = rsr.path("M 362.4,275.8 368.5,273.5    381.1,274.8 378.8,277.8 382.2,282.1 389.4,290.9 378.1,307.6 360.2,299.8 360.8,277.7   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ab');
var path_ac = rsr.path("M 370.8,233.8 380.7,233.5    391.4,238.1 389.8,242.3 383.2,258 377.8,263.7 370.6,254.4   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ac');
var path_ad = rsr.path("M 238.8,101.4 245.7,101.5    261.4,101.6 261.2,124.9 238.6,124.7   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ad');
var path_ae = rsr.path("M 419,144.3 415.1,145.4 413.3,141.9    402.5,148.7 396.3,152.9 405.7,170.9 409.6,168.7 413.3,175.6 426.8,167.3   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ae');
var path_af = rsr.path("M 565.6,85.1 565.6,70.5 564.6,69.8    564.2,69.4 562.7,69.8 561.5,69.8 561.2,69.8 559.6,68.6 559.3,68.2 558.1,68.6 558.1,69.4 557.3,70.1 556.6,70.1 556.2,69.7    555,70.1 554.6,70.9 552.4,70.5 550.8,70.8 550.4,70.1 549.7,69.7 548.5,68.9 548.2,68.1 547.4,67.7 547,65.8 546.7,65.4    544.4,65.8 543.2,64.3 536,61.1 535.8,82.2 540,86.4 548.8,84.2   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_af');
var path_ag = rsr.path("M 505,283.1 511.9,282 514.2,284.4    513.7,288.9 520.1,302.8 516.7,302.4 513.6,307.7 516.6,309.6 514.7,312.7 499.7,323.2 486.8,306.3 486.1,302.5 486.1,302.5    487.2,300.6 491.5,296 496,298.4 499.9,290.7 503.8,290.4   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ag');
var path_ah = rsr.path("M 471.2,209.4 473.8,217.4    474.7,243.8 473.2,240.4 468.6,241.1 468.7,237.3 465.6,231.9 456.5,226.9 456.9,224.2 462.3,220 466.6,210.9   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ah');
var path_ai = rsr.path("M 456.9,224.2 454.6,221.9    441.2,230.9 442.7,235.9 453.7,245.2 468.6,241.1 468.7,237.3 465.6,231.9 456.5,226.9   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ai');
var path_aj = rsr.path("M 400.1,205.3 403.5,213 397.7,217.2    393.4,227.4 390.7,233.5 392.9,234.7 391.4,238.1 380.7,233.5 377.1,211.6 376.4,205.9   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_aj');
var path_ak = rsr.path("M 532.6,100.9 536.4,104.8    518.4,104.6 518.4,101.5 518.1,98.9 519.2,98.1 527.3,95.5   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ak');
var path_al = rsr.path("M 565.6,106.9 565.6,106.9    565.6,85.1 548.8,84.2 540,86.4 539.8,105.9   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_al');
var path_am = rsr.path("M 225.5,5.6 220.2,5.6 204.6,5.6    204.6,29.2 223.7,29 225.5,29.4   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_am');
var path_an = rsr.path("M 550.6,266.7 547.6,267 524.2,267.2    527.3,270.7 526.8,278 536.1,269.6 536.8,270.8 532.5,283.8 532.9,285.3 542.1,282.3 543.6,284.6 549.7,282.4 550.1,283.9    550.9,283.1   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_an');
var path_ao = rsr.path("M 525.2,161.7 525.1,169.7    530.4,178.5 524.6,184.2 516.6,175.4 512.8,174.6 505.7,161.1 505.4,149.2 504.6,146.2 524.9,146.4   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ao');
var path_ap = rsr.path("M 398.4,51.5 399.5,47.7 397.3,46.2    395.3,46.9 392.7,42.3 393.9,40.4 391.6,38.5 388.1,40.3 385.5,39.9 383.6,38.4 381.3,38 379.3,41.8 379.6,55.2 379,75.5    397.8,75.6   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ap');
var path_aq = rsr.path("M 446.7,78.7 465.8,78.9 465.8,82    469.6,81.6 469.1,101.5 459.9,101.4 446.1,100.9   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_aq');
var path_ar = rsr.path("M 377.8,263.7 383.2,258 394.9,273.7    382.2,282.1 378.8,277.8 381.1,274.8 368.5,273.5   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ar');
var path_as = rsr.path("M 388.3,157.8 386,154.3 382.5,155.8    378,147 373.5,139.3 357.3,149.1 368.6,169.5 374.8,168.4 375.9,170.7 389.7,161.6   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_as');
var path_at = rsr.path("M 442,49.2 440.8,53 438.1,56.1    435.1,54.9 435,61.4 432.3,62.1 431.6,56.4 432,53.7 429.7,51.4 427.8,54.5 425.5,54.1 423.2,57.5 420.5,55.9 419,51.3 418.8,76.9    423,77.8 442.1,77.9   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_at');
var path_au = rsr.path("M 387.7,182.6 405.7,170.9    409.6,168.7 413.3,175.6 420.9,189.8 400.1,203.8   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_au');
var path_av = rsr.path("M 268.3,54.2 245.7,54.4 245.8,78.7    268.4,78.7   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_av');
var path_aw = rsr.path("M 135.4,199.6 140.1,151.1 104,151.1    101.4,151.1 100.8,223.7   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_aw');
var path_ax = rsr.path("M 459.9,101.4 460.2,110.2    459.3,124.7 437.9,124.6 438.5,101.2 446.1,100.9   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ax');
var path_ay = rsr.path("M 217.4,101.2 217.2,124.5    238.6,124.7 238.8,101.4 223.5,101.2   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ay');
var path_az = rsr.path("M182.6,5.7").attr({fill: 'none',stroke: '#DBD8BD',"stroke-linecap": 'round',"stroke-linejoin": 'round',"stroke-miterlimit": '3.8637',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_az');
var path_ba = rsr.path("M 488.4,78.3 488.8,74.5 493,72.6    511.7,80.1 505.6,80 488.3,87.5   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ba');
var path_bb = rsr.path("M 442.1,77.9 423,77.8 422.8,100.7    438.5,101.2 446.1,100.9 446.7,78.7   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_bb');
var path_bc = rsr.path("M 213.9,147.8 213.3,171.2    212.6,171.2 191.9,171 191.3,171 191.3,148   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_bc');
var path_bd = rsr.path("M 435.2,124.9 437.9,124.6    459.3,124.7 463,134.7 465.3,136.3 443.8,149.5 441.1,150.6 435.5,139.1   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_bd');
var path_be = rsr.path("M 56.4,183.2 55.3,178.6 55.1,151.1    29.7,151.1 28.3,151.1 32.1,162.7 45.7,180 51.4,183.9   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_be');
var path_bf = rsr.path("M 377.1,125.9 394.3,126.1    399.5,140.3 402.5,148.7 396.3,152.9 388.3,157.8 386,154.3 382.5,155.8 378,147 373.5,139.3 377,136.6   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_bf');
var path_bg = rsr.path("M 456.4,195.5 447.4,179 427,192.2    435.6,207.9 446.4,201.9   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_bg');
var path_bh = rsr.path("M 488.2,53.8 476,56.8 474.8,59.8    469,60.9 467.9,63.2 466,62.1 465.8,78.9 465.8,82 469.6,81.6 488.4,78.3 488.8,74.5   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_bh');
var path_bi = rsr.path("M 454.7,258.2 452.8,252.8 447.9,252    437.1,257.7 424.7,272.5 431.9,280.6 443.8,280.7 457,263.6   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_bi');
var path_bj = rsr.path("M 245.5,29.2 248.2,29.2 268.1,29.3    268.3,54.2 245.7,54.4   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_bj');
var path_bk = rsr.path("M 477.1,282.9 479.4,281.8    479.8,275.6 488.2,272.3 505,283.1 503.8,290.4 499.9,290.7 496,298.4 491.5,296 487.2,300.6 477.4,285.9   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_bk');
var path_bl = rsr.path("M 519.4,79 511.7,80.1 511.5,101.5    518.4,101.5 518.1,98.9 519.2,98.1   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_bl');
var path_bm = rsr.path("M 460.5,164.9 479.3,153.2    478.5,156.3 482.3,160.5 482.3,164.7 486.8,169.4 490.3,169.8 490.3,173.6 471.4,184.5   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_bm');
var path_bn = rsr.path("M 200.8,101.1 182.6,101.1    182.5,124.6 217.2,124.5 217.4,101.2   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_bn');
var path_bo = rsr.path("M 514.2,284.4 519.1,285.9    522.6,284.8 526.4,286.8 525.2,289.4 527.5,291.7 526.7,297.1 520.1,302.8 513.7,288.9   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_bo');
var path_bp = rsr.path("M    543.6,284.6 533.6,291 532.8,293.3 534.3,293.3 550.1,283.9 549.7,282.4   z").attr({fill: 'none',stroke: '#DBD8BD',"stroke-linecap": 'round',"stroke-linejoin": 'round',"stroke-miterlimit": '3.8637',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_bp');
var path_bq = rsr.path("M 268.4,78.7 245.8,78.7 245.7,101.5    261.4,101.6 268.4,101.5   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_bq');
var path_br = rsr.path("M 354.7,234 340.9,233.9 341.2,246.1    341.1,254.2 356.8,254.7 370.6,254.4 370.8,233.8   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_br');
var path_bs = rsr.path("M 257.1,148.2 256.9,171.6    235.5,171.4 235.7,148 238.4,148.1   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_bs');
var path_bt = rsr.path("M 466,62.1 463.3,59.4 456.1,56.6    457.6,54.3 457.3,52.8 454.2,51.6 451.1,56.6 448.4,54.6 445.8,55.4 443.5,48.9 442,49.2 442.1,77.9 446.7,78.7 465.8,78.9   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_bt');
var path_bu = rsr.path("M 525.1,125.3 525,133.7 541.5,133.5    542.3,132 536.9,130 537,118.5 534.7,117.7   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_bu');
var path_bv = rsr.path("M 474.7,243.8 477,249.2 489.2,248.2    488.3,227.1 486.8,215.3 473.8,217.4   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_bv');
var path_bw = rsr.path("M 223.7,29 223.9,54.6 245.7,54.4    245.5,29.2 225.5,29.4   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_bw');
var path_bx = rsr.path("M 388.3,157.8 396.3,152.9    405.7,170.9 387.7,182.6 383.8,185.3 375.9,170.7 389.7,161.6   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_bx');
var path_by = rsr.path("M 534.9,234.8 540.8,254.4    547.3,254.8 553.4,254.9 554.2,252.2 561.5,252.2 561.9,248.4 563.2,232.8 542.9,233   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_by');
var path_bz = rsr.path("M 524.2,267.2 519.4,251.5    511.3,259.1 500.7,251.7 489.2,256.2 482.3,251.6 488.2,272.3 505,283.1 511.9,282 514.2,284.4 519.1,285.9 522.6,284.8    524.1,281.4 522.3,276 524.2,274.9 526.8,278 527.3,270.7   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_bz');
var path_ca = rsr.path("M 565.6,133.7 565.6,116.3 557,113.7    546.2,115.9 537.1,110.1 537,118.5 536.9,130 542.3,132 546.1,132.4 552.6,135.1   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ca');
var path_cb = rsr.path("M 408,260.1 389.8,242.3 383.2,258    394.9,273.7 400.7,268.4   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_cb');
var path_cc = rsr.path("M 478.4,133.7 463,134.7 465.3,136.3    474.8,142.1 474.4,144.4 477.1,145.6 479.3,153.2 505.4,149.2 504.6,146.2 504.8,133.9   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_cc');
var path_cd = rsr.path("M 443.8,149.5 441.1,150.6    435.5,139.1 419,144.3 419,144.3 426.8,167.3 437.2,160.9 442.5,169.7 451.3,163.7   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_cd');
var path_ce = rsr.path("M 223.9,54.6 200.8,54.4 200.7,78.7    223.9,78.7   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ce');
var path_cf = rsr.path("M 394.3,126.1 394.3,124.2 413,124.3    412.9,136.2 405.3,136.5 399.5,140.3   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_cf');
var path_cg = rsr.path("M 511.7,80.1 505.6,80 488.3,87.5    488.2,101.3 496.7,101.7 511.5,101.5   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_cg');
var path_ch = rsr.path("M 492.1,179 495.9,189.3 493.9,190.5    491.5,201.9 496.9,203.9 494.9,208.1 497.2,211.5 505.3,203.9 526.1,186.5 524.6,184.2 516.6,175.4 512.8,174.6   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ch');
var path_ci = rsr.path("M 238.6,124.7 261.2,124.9    260.6,148.2 257.1,148.2 238.4,148.1   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ci');
var path_cj = rsr.path("M 100.8,223.7 101.4,151.1    55.1,151.1 55.3,178.6 56.4,183.2 56.4,183.2 63.2,194.7 65.1,196.7 68.1,198.2 71.9,201.7 80.6,212.9 97.7,223.7 98.5,225.6   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_cj');
var path_ck = rsr.path("M 469.6,81.6 488.4,78.3 488.3,87.5    488.2,101.3 484.4,100.9 483.6,108.1 478.6,108.5 469.4,108.8 469.1,101.5   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ck');
var path_cl = rsr.path("M 379,75.5 397.8,75.6 397.8,77.1    400.4,77.2 400.2,100.1 394.1,100.5 378.8,99.9 378.6,78.9   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_cl');
var path_cm = rsr.path("M 550.9,283.1 574.1,275.8    570.7,271.7 575.5,264.4 562.2,256.1 561.5,252.2 554.2,252.2 553.4,254.9 547.3,254.8 547.6,267 550.6,266.7   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_cm');
var path_cn = rsr.path("M 413,124.3 415.7,124.4 435.2,124.9    435.5,139.1 419,144.3 415.1,145.4 413.3,141.9 412.9,136.2   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_cn');
var path_co = rsr.path("M 469.4,108.8 478.6,108.5    478.4,133.7 463,134.7 459.3,124.7 460.2,110.2   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_co');
var path_cp = rsr.path("M 370.6,254.4 377.8,263.7    368.5,273.5 362.4,275.8 357,272.7 356.8,254.7   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_cp');
var path_cq = rsr.path("M 356.8,254.7 341.1,254.2    341.2,246.1 320.2,245.9 319.7,257 323.5,257.1 323.4,266.6 326.9,267 345.6,266.1 357,272.7   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_cq');
var path_cr = rsr.path("M    312.3,55 310.4,54.6 290.1,54.8 290.2,78.9 312.1,78.7   z").attr({fill: 'none',stroke: '#DBD8BD',"stroke-linecap": 'round',"stroke-linejoin": 'round',"stroke-miterlimit": '3.8637',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_cr');
var path_cs = rsr.path("M 511.2,52.1 508.1,53.6 502.8,52.4    501.3,49.7 491.7,52 490.1,54.2 488.2,53.8 488.8,74.5 493,72.6 511.7,80.1   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_cs');
var path_ct = rsr.path("M 200.8,29.1 200.8,54.4 223.9,54.6    223.7,29 204.6,29.2   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ct');
var path_cu = rsr.path("M 383.8,185.3 387.7,182.6    400.1,203.8 400.1,205.3 376.4,205.9 371.5,194.7   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_cu');
var path_cv = rsr.path("M 431.9,280.6 443.8,280.7    456.7,296.5 452.4,301 440.8,312.4 439,309.7 427.2,294.3 429.6,282.5   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_cv');
var path_cw = rsr.path("M 447.9,252 453.7,245.2 442.7,235.9    441.2,230.9 431.9,236.6 422.4,239.2 434.5,248.1 437.1,257.7   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_cw');
var path_cx = rsr.path("M 471.4,184.5 467.2,188.7    471.2,209.4 482.4,201.8 491.5,201.9 493.9,190.5 495.9,189.3 492.1,179 490.3,173.6   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_cx');
var path_cy = rsr.path("M 534.9,234.8 540.8,254.4    547.3,254.8 547.6,267 524.2,267.2 519.4,251.5 516.8,242.7 529.9,235.1   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_cy');
var path_cz = rsr.path("M 442.5,169.7 447.4,179 456.4,195.5    467.2,188.7 471.4,184.5 460.5,164.9 451.3,163.7   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_cz');
var path_da = rsr.path("M 377.1,211.6 354.5,211.4 354.7,234    370.8,233.8 380.7,233.5   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_da');
var path_db = rsr.path("M 168,170.7 168,151.1 152.7,151.1    141.1,151.1 145.3,158.7 151,165.3 159,170.7   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_db');
var path_dc = rsr.path("M 245.7,54.4 223.9,54.6 223.9,78.7    245.8,78.7   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_dc');
var path_dd = rsr.path("M 245.8,78.7 223.9,78.7 223.9,101.2    238.8,101.4 245.7,101.5   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_dd');
var path_de = rsr.path("M 426.8,167.3 413.3,175.6    420.9,189.8 423.9,193.7 427,192.2 447.4,179 442.5,169.7 437.2,160.9   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_de');
var path_df = rsr.path("M 497.2,211.5 494.9,208.1    496.9,203.9 491.5,201.9 482.4,201.8 471.2,209.4 473.8,217.4 486.8,215.3   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_df');
var path_dg = rsr.path("M 565.6,116.3 565.6,106.9    539.8,105.9 537.1,105.9 537.1,110.1 546.2,115.9 557,113.7   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_dg');
var path_dh = rsr.path("M 238.6,124.7 217.2,124.5 217,147.9    235.7,148 238.4,148.1   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_dh');
var path_di = rsr.path("M 354.5,211.4 354.7,234 340.9,233.9    331.7,233.4 331.7,222.7 331.6,210.1 349.2,210.2 349.1,211.4   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_di');
var path_dj = rsr.path("M 235.7,148 217,147.9 213.9,147.8    213.3,171.2 235.5,171.4   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_dj');
var path_dk = rsr.path("M 425.6,220.5 427.2,213.2    435.6,207.9 446.4,201.9 454.6,221.9 441.2,230.9 431.9,236.6 427.1,220.9   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_dk');
var path_dl = rsr.path("M 354.4,180.1 363.5,186.3    364.3,183.6 371.5,194.7 383.8,185.3 375.9,170.7 374.8,168.4 368.6,169.5 363.7,169.8   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_dl');
var path_dm = rsr.path("M 419,51.3 417.9,51.7 416.7,51.3    413.3,48.2 410.3,47.4 403.3,55.4 398.4,51.5 397.8,75.6 397.8,77.1 400.4,77.2 418.8,76.9   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_dm');
var path_dn = rsr.path("M 488.3,227.1 497.4,232.9    508.1,233.4 514.1,243.4 516.8,242.7 519.4,251.5 511.3,259.1 500.7,251.7 489.2,256.2 489.2,248.2   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_dn');
var path_do = rsr.path("M 533.2,79.9 535.8,82.2 540,86.4    539.8,105.9 537.1,105.9 536.4,104.8 532.6,100.9   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_do');
var path_dp = rsr.path("M 547.4,161.1 549.9,171.8 553,174.9    552.8,194.8 530.4,178.5 525.1,169.7 525.2,161.7   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_dp');
var path_dq = rsr.path("M 479.3,153.2 477.1,145.6    474.4,144.4 474.8,142.1 465.3,136.3 443.8,149.5 451.3,163.7 460.5,164.9   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_dq');
var path_dr = rsr.path("M 576.4,264.9 581.2,258.4    583.1,249.1 571.5,247.7 561.9,248.4 561.5,252.2 562.2,256.1   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_dr');
var path_ds = rsr.path("M 394.1,100.5 394.3,124.2    394.3,126.1 377.1,125.9 372.1,125.5 372.3,101.8 378.4,101.5 378.8,99.9   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ds');
var path_dt = rsr.path("M 567.9,155.1 565.6,154 565.6,143.7    565.6,133.7 552.6,135.1 546.1,132.4 541,144.6 540.9,154.5 544.7,154.9   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_dt');
var path_du = rsr.path("M 415.9,100.6 415.7,124.4 413,124.3    394.3,124.2 394.1,100.5 400.2,100.1   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_du');
var path_dv = rsr.path("M 204.6,5.6 182.6,5.7 182.5,29.4    182.5,29.4 200.8,29.1 204.6,29.2   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_dv');
var path_dw = rsr.path("M 531,198.8 542.8,203.5 537.8,206.9    542.9,233 542.9,233 534.9,234.8 529.9,235.1 523,230.1 515.5,216.7   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_dw');
var path_dx = rsr.path("M 496.6,101.7 488.2,101.3    484.4,100.9 483.6,108.1 497.7,114.4   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_dx');
var path_dy = rsr.path("M 536,61.1 529.5,58.8 518.5,48.7    515.1,48.3 511.2,52.1 511.7,80.1 519.4,79 533.2,79.9 535.8,82.2   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_dy');
var path_dz = rsr.path("M 471.2,209.4 466.6,210.9 462.3,220    456.9,224.2 454.6,221.9 446.4,201.9 456.4,195.5 467.2,188.7   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_dz');
var path_ea = rsr.path("M 469.4,108.8 469.1,101.5    459.9,101.4 460.2,110.2   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ea');
var path_eb = rsr.path("M 542.3,132 546.1,132.4 541,144.6    540.9,154.5 544.7,154.9 547.4,161.1 525.2,161.7 524.9,146.4 525,133.7 541.5,133.5   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_eb');
var path_ec = rsr.path("M 588.4,197.6 586.3,195.7    585.6,193.4 583.8,192.1 582.3,191.2 582.3,191.2 582.3,191.2 582.3,191.2 582.3,191.2 583.7,189.6 584.2,187.2 582.3,185.8    581.6,184.1 580.5,183.7 579.3,181.8 580.4,181.3 577.8,180.1 580.4,180.1 577.3,178.9 576.3,176.6 575.1,175.6 573.6,176.2    571,174.3 567.9,176.6 567.5,181.2 564.4,184.9 565,200.3 570.7,198.8   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ec');
var path_ed = rsr.path("M 552.8,194.8 553,174.9 549.9,171.8    563.3,173.8 567.9,176.6 567.5,181.2 564.4,184.9 565,200.3 561.2,201.8   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ed');
var path_ee = rsr.path("M 508.1,233.4 507.9,215.1    512.5,212.4 515.5,216.7 523,230.1 529.9,235.1 516.8,242.7 514.1,243.4   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ee');
var path_ef = rsr.path("M 349.8,181.5 354.4,180.1    363.5,186.3 364.3,183.6 371.5,194.7 376.4,205.9 377.1,211.6 354.5,211.4 349.1,211.4 349.2,210.2   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ef');
var path_eg = rsr.path("M 573.6,176.2 575.8,175.3    576.2,174.1 575.8,172.9 575,172.9 575.6,171.3 576.9,170.9 576.9,169.1 575.5,168.2 575.4,165.7 575.4,164.9 574.6,164    573.7,162.4 572.5,160 570.2,157.3 567.9,155.1 544.7,154.9 547.4,161.1 549.9,171.8 563.3,173.8 567.9,176.6 571,174.3   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_eg');
var path_eh = rsr.path("M 504.8,133.9 498.7,127 498.8,116.3    502.6,119.8 518.2,123 518.2,123 525.1,125.3 525,133.7 524.9,146.4 504.6,146.2   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_eh');
var path_ei = rsr.path("M 413.3,141.9 402.5,148.7    399.5,140.3 405.3,136.5 412.9,136.2   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ei');
var path_ej = rsr.path("M 248.4,5.6 243.2,5.6 225.5,5.6    225.5,29.4 245.5,29.2 248.2,29.2   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ej');
var path_ek = rsr.path("M 438.5,101.2 437.9,124.6    435.2,124.9 415.7,124.4 415.9,100.6 422.8,100.7   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ek');
var path_el = rsr.path("M 236.2,225.7 219.4,224.8    218.9,227.8 210.5,228.1 210,244.2 200.8,244.5 200.7,256.4 211,266.4 222.8,271.5 235.4,272 235.6,245.6 240.2,241 237.2,237.6    240.7,229.9 240.4,226.5   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_el');
var path_em = rsr.path("M 223.9,78.7 200.7,78.7 200.8,101.1    217.4,101.2 223.9,101.2   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_em');
var path_en = rsr.path("M 519.4,79 533.2,79.9 532.6,100.9    527.3,95.5 519.2,98.1   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_en');
var path_eo = rsr.path("M 391.4,238.1 392.9,234.7    390.7,233.5 393.4,227.4 397.2,227.1 404,237.5 412.8,233.4 422.4,239.2 411.1,257.1 408,260.1 389.8,242.3   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_eo');
var path_ep = rsr.path("M 531,198.8 526.1,186.5 505.3,203.9    507.9,215.1 512.5,212.4 515.5,216.7   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ep');
var path_eq = rsr.path("M 542.8,203.5 547.4,205.1    553.9,204.4 563.6,225.5 563.2,232.8 542.9,233 537.8,206.9   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_eq');
var path_er = rsr.path("M 536.4,104.8 537.1,105.9    537.1,110.1 537,118.5 534.7,117.7 525.1,125.3 518.2,123 518.4,104.6   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_er');
var path_es = rsr.path("M 483.6,108.1 497.7,114.4    498.8,116.3 498.7,127 504.8,133.9 478.4,133.7 478.6,108.5   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_es');
var path_et = rsr.path("M 505.3,203.9 497.2,211.5    486.8,215.3 488.3,227.1 497.4,232.9 508.1,233.4 507.9,215.1   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_et');
var path_eu = rsr.path("M 489.2,248.2 489.2,256.2    482.3,251.6 488.2,272.3 479.8,275.6 475,257.6 475.1,249.2 477,249.2   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_eu');
var path_ev = rsr.path("M 168,170.7 191.9,171 191.9,171    191.7,190.5 189.8,190.9 185.6,186.6 182.2,185.8 163.5,182.6 159,170.7 159,170.7   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ev');
var path_ew = rsr.path("M 468.6,241.1 473.2,240.4    474.7,243.8 477,249.2 475.1,249.2 475,257.6 469.3,255.7 454.7,258.2 452.8,252.8 447.9,252 453.7,245.2   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ew');
var path_ex = rsr.path("M 379.3,41.8 375.5,42.5 373.6,38.7    371.3,37.1 367.9,38.3 365.6,39.4 362.9,37.8 359.5,37.8 356.8,35.1 357,55.4 379.6,55.2   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ex');
var path_ey = rsr.path("M 393.4,227.4 397.7,217.2 403.5,213    411.9,213.8 425.6,220.5 427.1,220.9 431.9,236.6 422.4,239.2 412.8,233.4 404,237.5 397.2,227.1   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ey');
var path_ez = rsr.path("M 191.3,148 182.5,148 182.5,151.1    182.5,151.1 168,151.1 168,170.7 191.3,171   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ez');
var path_fa = rsr.path("M 400.4,77.2 418.8,76.9 423,77.8    422.8,100.7 415.9,100.6 400.2,100.1   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_fa');
var path_fb = rsr.path("M 518.4,101.5 511.5,101.5    496.6,101.7 497.7,114.4 498.8,116.3 502.6,119.8 518.2,123 518.4,104.6   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_fb');
var path_fc = rsr.path("M 200.7,78.7 182.6,78.7 182.6,101.1    200.8,101.1   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_fc');
var path_fd = rsr.path("M 378.6,78.9 378.8,99.9 378.4,101.5    372.3,101.8 356.6,102 356.8,79.1   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_fd');
var path_fe = rsr.path("M 268.4,101.5 261.4,101.6    261.2,124.9 283.5,125.1 283.5,101.4   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_fe');
var path_ff = rsr.path("M 200.8,54.4 182.6,54.4 182.6,64.7    182.6,78.7 200.7,78.7   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ff');
var path_fg = rsr.path("M 583.1,249.1 578.9,244.1    578.9,239.5 580,239.1 579.7,238.4 580.4,236.8 580.1,234.5 579.7,232.3 579.7,230.7 580.9,229.2 581.3,228.8 581.3,227.7    581.7,226.5 582.8,224.6 583.6,222.7 586,218.5 586.7,217 588,216 588.6,215.1 588.5,214.4 589,212.4 589,211.5 587.9,210.5    588.9,209.1 588.3,209.1 588.3,208.3 587.6,207.1 588.4,206.7 589.8,205.3 588.4,197.6 570.7,198.8 571.5,247.7   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_fg');
var path_fh = rsr.path("M 283.5,125.1 261.2,124.9    260.6,148.2 275.9,148.4 283.5,148.5   z").attr({fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_fh');
var _x3C_Path_x3E_ = rsr.path("M 350.5,102    356.6,102 372.3,101.8 372.1,125.5 349.9,125.7   z").attr({id: '_x3C_Path_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'NON_SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_Path_x3E_');
NON_SERVICE_COUNTIES.attr({'id': 'NON_SERVICE_COUNTIES','name': 'NON_SERVICE_COUNTIES'});
var SERVICE_COUNTIES = rsr.set();
var _x3C_ZAVALA_x3E_ = rsr.path("M 335.3,309.2    305.1,309.3 304.5,333 335.5,332.5   z").attr({id: '_x3C_ZAVALA_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_ZAVALA_x3E_');
var _x3C_ZAPATA_x3E_ = rsr.path("M 353.6,406.1    335.2,405.2 332.9,407.5 332.8,415.5 332,417.4 335.4,424.7 340,429 344.8,442.8 353.3,432.1   z").attr({id: '_x3C_ZAPATA_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_ZAPATA_x3E_');
var _x3C_WILSON_x3E_ = rsr.path("M 406.5,302.5    401.6,294.8 390.5,294.4 389.4,290.9 378.1,307.6 387.2,319.6   z").attr({id: '_x3C_WILSON_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_WILSON_x3E_');
var _x3C_WILLACY_x3E_ = rsr.path("M    396.1,441.7 394.1,448.9 400.2,450.9 399.8,455.5 413.6,457.1 417,456 419,453.8 420.1,453.8 417.9,442.3   z").attr({id: '_x3C_WILLACY_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_WILLACY_x3E_');
var _x3C_WILBARGER_x3E_ = rsr.path("M    356.8,35.1 346.5,34.2 346.5,27.7 341.6,23.9 340.9,22.3 338.2,22.7 337.4,26.1 334.7,24.2 334.2,41.4 334.1,55.6 357,55.4   z").attr({id: '_x3C_WILBARGER_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_WILBARGER_x3E_');
var _x3C_WHARTON_x3E_ = rsr.path("M    472.9,280.5 477.1,282.9 477.4,285.9 487.2,300.6 486.1,302.5 467.2,316.8 453.2,302.6 465.1,291.6   z").attr({id: '_x3C_WHARTON_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_WHARTON_x3E_');
var _x3C_WEBB_x3E_ = rsr.path("M 360.4,364.9    360.1,401.6 360.1,405.4 353.6,406.1 335.2,405.2 332.9,407.5 329.1,404 329.2,393.3 329.2,389.1 321.6,385.2 317.1,379.8    305.8,360.2 300.8,356.3 304.7,356 334.9,356.2 334.8,364.3   z").attr({id: '_x3C_WEBB_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_WEBB_x3E_');
var _x3C_VICTORIA_x3E_ = rsr.path("M    440.8,312.4 439,309.7 424.7,322.2 428.5,321.9 430.8,326.5 430.3,337.6 436.8,340.7 442.5,340.3 440.6,336.5 452.2,328.6   z").attr({id: '_x3C_VICTORIA_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_VICTORIA_x3E_');
var _x3C_VAL_VERDE_x3E_ = rsr.path("M    269.3,245.9 235.6,245.6 235.4,272 241.5,272.8 244.2,270.9 251.1,273.3 252.5,279 265.5,289.5 266.6,293.7 275.7,299.9 278,295.7    279.6,294.9 280.5,280.4 280.8,246   z").attr({id: '_x3C_VAL_VERDE_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_VAL_VERDE_x3E_');
var _x3C_UVALDE_x3E_ = rsr.path("M 305.3,280.6    305.1,309.3 335.3,309.2 335.5,280.9 326.9,280.8 309.9,280.3   z").attr({id: '_x3C_UVALDE_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_UVALDE_x3E_');
var _x3C_UPTON_x3E_ = rsr.path("M 212.6,171.2    212.7,202.2 235.6,202.4 235.5,171.4   z").attr({id: '_x3C_UPTON_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_UPTON_x3E_');
var _x3C_TOM_GREEN_x3E_ = rsr.path("M    256.9,178.1 256.9,176.5 273.7,175.9 275.7,169.4 300.9,169.6 301.3,175.8 305.8,175.8 305.6,201.8 281.1,201.6 281,177.9   z").attr({id: '_x3C_TOM_GREEN_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_TOM_GREEN_x3E_');
var _x3C_THROCKMORTON_x3E_ = rsr.path("M    356.8,79.1 356.6,102 350.5,102 334,101.5 334.2,78.9   z").attr({id: '_x3C_THROCKMORTON_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_THROCKMORTON_x3E_');
var _x3C_TAYLOR_x3E_ = rsr.path("M 305.5,125.3    327.3,125.1 326.7,148.8 322.9,148.8 304.9,148.6   z").attr({id: '_x3C_TAYLOR_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_TAYLOR_x3E_');
var _x3C_SUTTON_x3E_ = rsr.path("M 269.1,222.5    269.3,245.9 280.8,246 305.6,246.2 305.8,222.9   z").attr({id: '_x3C_SUTTON_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_SUTTON_x3E_');
var _x3C_STONEWALL_x3E_ = rsr.path("M    312.1,78.7 290.2,78.9 290.1,101.5 305,101.6 311.9,101.6   z").attr({id: '_x3C_STONEWALL_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_STONEWALL_x3E_');
var _x3C_STERLING_x3E_ = rsr.path("M    275.9,148.4 260.6,148.2 257.1,148.2 256.9,171.6 256.9,176.5 273.7,175.9 275.7,169.4   z").attr({id: '_x3C_STERLING_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_STERLING_x3E_');
var _x3C_STAR_x3E_ = rsr.path("M 380.5,432    375.5,432 353.3,432.1 344.8,442.8 347.4,452.7 362.3,456.7 365.7,461.3 368.8,460.6   z").attr({id: '_x3C_STAR_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_STAR_x3E_');
var _x3C_SCHACKELFORD_x3E_ = rsr.path("M    327.5,101.8 334,101.5 350.5,102 349.9,125.7 348.8,125.7 327.3,125.1   z").attr({id: '_x3C_SCHACKELFORD_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_SCHACKELFORD_x3E_');
var _x3C_SCHLEICHER_x3E_ = rsr.path("M    305.6,201.8 281.1,201.6 268.9,202.3 269.1,222.5 305.8,222.9   z").attr({id: '_x3C_SCHLEICHER_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_SCHLEICHER_x3E_');
var _x3C_SAN_PATRICO_x3E_ = rsr.path("M    414.8,358.1 413.3,360 402.6,358.4 398.7,362.2 399.1,364.8 402.9,365.2 403.2,368.3 403.6,370.6 409.7,374.5 420.8,376.1    426.9,376.2 431.5,373.5 426.6,363.9 423.6,359.3 419.4,360.8   z").attr({id: '_x3C_SAN_PATRICO_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_SAN_PATRICO_x3E_');
var _x3C_RUNNELS_x3E_ = rsr.path("M    304.9,148.6 322.9,148.8 322.7,175.6 305.8,175.8 301.3,175.8 300.9,169.6 301.1,148.6   z").attr({id: '_x3C_RUNNELS_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_RUNNELS_x3E_');
var _x3C_REFUGLO_x3E_ = rsr.path("M    442.5,340.3 436.8,340.7 430.3,337.6 421.4,346.7 414.8,358.1 419.4,360.8 423.6,359.3 426.6,363.9 434.3,357.1 432.4,354.4    446.2,351.1 446.3,344.2   z").attr({id: '_x3C_REFUGLO_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_REFUGLO_x3E_');
var _x3C_REEVES_x3E_ = rsr.path("M 159,170.7    159,170.7 163.5,182.6 182.2,185.8 157.8,218.5 135.4,199.6 140.1,151.1 141.1,151.1 145.3,158.7 151,165.3   z").attr({id: '_x3C_REEVES_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_REEVES_x3E_');
var _x3C_REAL_x3E_ = rsr.path("M 319.7,257    311.7,255.8 309.9,280.3 326.9,280.8 326.9,267 323.4,266.6 323.5,257.1   z").attr({id: '_x3C_REAL_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_REAL_x3E_');
var _x3C_REAGAN_x3E_ = rsr.path("M 256.9,171.6    235.5,171.4 235.6,202.4 256.7,202.5 256.9,178.1 256.9,176.5   z").attr({id: '_x3C_REAGAN_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_REAGAN_x3E_');
var _x3C_PRESIDO_x3E_ = rsr.path("M 148.3,298    148.5,237.9 98.5,225.6 101.9,229.1 103.7,238.7 109.8,247.2 111.1,263.6 116.4,277.1 133.1,292.1   z").attr({id: '_x3C_PRESIDO_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_PRESIDO_x3E_');
var _x3C_PECOS_x3E_ = rsr.path("M 210.4,202.1    230.2,210.7 236.2,225.7 219.4,224.8 218.9,227.8 210.5,228.1 210,244.2 200.8,244.5 200.7,256.4 163.5,223.9 157.8,218.5    182.2,185.8 185.6,186.6 189.8,190.9 191.7,190.5 196.7,188.2 199.8,191.3 204.3,191.8 207.7,196   z").attr({id: '_x3C_PECOS_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_PECOS_x3E_');
var _x3C_NUECES_x3E_ = rsr.path("M 397.5,373.2    397.3,387 401.9,390.9 422.9,391 424.9,385.7 424.2,383 421.8,386.1 420.7,385.7 421.9,383 420,380.3 420.8,376.1 409.7,374.5    403.6,370.6 403.2,368.3   z").attr({id: '_x3C_NUECES_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_NUECES_x3E_');
var _x3C_NOLAN_x3E_ = rsr.path("M 305.5,125.3    283.5,125.1 283.5,148.5 301.1,148.6 304.9,148.6   z").attr({id: '_x3C_NOLAN_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_NOLAN_x3E_');
var _x3C_MOTLEY_x3E_ = rsr.path("M 268.1,29.3    271.9,29 290.3,28.9 290.1,54.8 268.3,54.2   z").attr({id: '_x3C_MOTLEY_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_MOTLEY_x3E_');
var _x3C_MENARD_x3E_ = rsr.path("M 331.6,210.1    326.6,209.3 326.7,201.6 305.6,201.8 305.8,222.9 331.7,222.7   z").attr({id: '_x3C_MENARD_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_MENARD_x3E_');
var _x3C_MEDINA_x3E_ = rsr.path("M 360.2,299.8    360.5,309 335.3,309.2 335.5,280.9 353.9,280.3 354.6,284.9 360.8,277.7   z").attr({id: '_x3C_MEDINA_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_MEDINA_x3E_');
var _x3C_MCMULLEN_x3E_ = rsr.path("M    380.6,335.2 380.6,332.2 360.3,332.7 360.4,364.9 380.7,364.7   z").attr({id: '_x3C_MCMULLEN_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_MCMULLEN_x3E_');
var _x3C_MCCULLOCH_x3E_ = rsr.path("M    326.5,181.3 327.2,179.4 330.3,180.2 331.4,183.3 335.3,181.4 339.8,184.9 344.6,180.7 349.8,181.5 349.2,210.2 331.6,210.1    326.6,209.3 326.7,201.6   z").attr({id: '_x3C_MCCULLOCH_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_MCCULLOCH_x3E_');
var _x3C_MAVERICK_x3E_ = rsr.path("M    305.1,309.3 280.6,308.7 283.6,319.4 284.7,319.5 284.3,321 288.4,331.7 289.9,332.5 290.3,334.4 293.7,339.4 296.3,349    300.8,356.3 304.7,356 304.5,333   z").attr({id: '_x3C_MAVERICK_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_MAVERICK_x3E_');
var _x3C_MATAGORDA_x3E_ = rsr.path("M    467.2,316.8 486.1,302.5 486.1,302.5 486.8,306.3 499.7,323.2 465,345.9 463.9,345.1 490.8,327 488.5,325.8 470.5,336.4    469.3,335.2 469.9,330.7 466.7,331.8   z").attr({id: '_x3C_MATAGORDA_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_MATAGORDA_x3E_');
var _x3C_LIVE_OAK_x3E_ = rsr.path("M    391.4,325.4 380.6,335.2 380.7,364.7 384.9,365.1 399.1,364.8 398.7,362.2 402.6,358.4 391.7,331.9 395.5,330.8   z").attr({id: '_x3C_LIVE_OAK_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_LIVE_OAK_x3E_');
var _x3C_LA_SALLE_x3E_ = rsr.path("M    360.3,332.7 335.5,332.5 334.9,356.2 334.8,364.3 360.4,364.9   z").attr({id: '_x3C_LA_SALLE_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_LA_SALLE_x3E_');
var _x3C_KNOX_x3E_ = rsr.path("M 334.2,78.9    334,59.4 331,56.7 323.7,56.6 319.5,54.7 312.3,55 312.1,78.7   z").attr({id: '_x3C_KNOX_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_KNOX_x3E_');
var _x3C_KLEBERG_x3E_ = rsr.path("M 397.3,387    392,386.6 391.8,406.5 394.9,406.1 394.9,409.2 405.2,405.8 407.5,404.7 403,396.6 404.2,396.2 409.4,404.7 410.6,404.7 411,404.7    410.6,402.8 412.9,402.8 414.1,398.6 415.6,398.6 415.2,402.8 413.3,404.4 415.2,405.5 419,401 420.2,397.5 421.4,396 422.9,391    401.9,390.9   z").attr({id: '_x3C_KLEBERG_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_KLEBERG_x3E_');
var _x3C_KINNEY_x3E_ = rsr.path("M 305.3,280.6    280.5,280.4 279.6,294.9 278,295.7 275.7,299.9 280.6,308.7 305.1,309.3   z").attr({id: '_x3C_KINNEY_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_KINNEY_x3E_');
var _x3C_KIMBLE_x3E_ = rsr.path("M 331.7,222.7    305.8,222.9 305.6,246.2 320.2,245.9 341.2,246.1 340.9,233.9 331.7,233.4   z").attr({id: '_x3C_KIMBLE_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_KIMBLE_x3E_');
var _x3C_KENT_x3E_ = rsr.path("M 290.2,78.9    268.4,78.7 268.4,101.5 283.5,101.4 290.1,101.5   z").attr({id: '_x3C_KENT_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_KENT_x3E_');
var _x3C_KENNEDY_x3E_ = rsr.path("M    394.7,431.7 394.9,409.2 405.2,405.8 408.3,408.1 413.6,408.6 417.8,407.5 418.2,412.8 415.5,415.9 416.2,418.5 413.5,421.2    413,428.8 415.7,431.2 417.9,442.3 396.1,441.7   z").attr({id: '_x3C_KENNEDY_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_KENNEDY_x3E_');
var _x3C_KARNES_x3E_ = rsr.path("M 411.4,308.7    406.5,302.5 387.2,319.6 391.4,325.4 395.5,330.8 399,328.9 404.7,331.6 413.6,324.4 406,313.2   z").attr({id: '_x3C_KARNES_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_KARNES_x3E_');
var _x3C_JONES_x3E_ = rsr.path("M 305,101.6    311.9,101.6 327.5,101.8 327.3,125.1 305.5,125.3   z").attr({id: '_x3C_JONES_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_JONES_x3E_');
var _x3C_JIM_WELLS_x3E_ = rsr.path("M    399.1,364.8 402.9,365.2 403.2,368.3 397.5,373.2 397.3,387 392,386.6 391.8,406.5 384.6,406.4 384.9,365.1   z").attr({id: '_x3C_JIM_WELLS_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_JIM_WELLS_x3E_');
var _x3C_JIM_HOGG_x3E_ = rsr.path("M    360.1,401.6 360.1,405.4 353.6,406.1 353.3,432.1 375.5,432 376.4,417 371.5,406.7 371.6,401.7   z").attr({id: '_x3C_JIM_HOGG_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_JIM_HOGG_x3E_');
var _x3C_JEFF_DAVIS_x3E_ = rsr.path("M    135.4,199.6 157.8,218.5 163.5,223.9 148.5,237.9 98.5,225.6 100.8,223.7   z").attr({id: '_x3C_JEFF_DAVIS_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_JEFF_DAVIS_x3E_');
var _x3C_JACKSON_x3E_ = rsr.path("M    453.2,302.6 467.2,316.8 466.7,331.8 463.3,328.3 463.6,334.4 459.8,336.7 460.9,334.4 460.6,332.1 452.2,328.6 440.8,312.4    452.4,301   z").attr({id: '_x3C_JACKSON_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_JACKSON_x3E_');
var _x3C_IRION = rsr.path("M 281.1,201.6    281,177.9 256.9,178.1 256.7,202.5 268.9,202.3   z").attr({id: '_x3C_IRION',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_IRION');
var _x3C_HIDALGO_x3E_ = rsr.path("M    394.7,431.7 380.5,432 368.8,460.6 384.4,470.3 390.9,471.9 399.7,470.4 399.8,455.5 400.2,450.9 394.1,448.9 396.1,441.7   z").attr({id: '_x3C_HIDALGO_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_HIDALGO_x3E_');
var _x3C_HASKELL_x3E_ = rsr.path("M 334.2,78.9    334,101.5 327.5,101.8 311.9,101.6 312.1,78.7   z").attr({id: '_x3C_HASKELL_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_HASKELL_x3E_');
var _x3C_HARDEMAN_x3E_ = rsr.path("M    334.7,24.2 330.9,24.2 329.3,26.1 325.1,26 319.8,19.1 315.7,16 312.6,16 312.5,29.4 312.4,33.6 321.6,40.1 334.2,41.4   z").attr({id: '_x3C_HARDEMAN_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_HARDEMAN_x3E_');
var _x3C_HALL_x3E_ = rsr.path("M 294.3,5.8    289,5.8 272.1,5.7 271.9,29 290.3,28.9 294.5,28.8   z").attr({id: '_x3C_HALL_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_HALL_x3E_');
var _x3C_GUADALUPE_x3E_ = rsr.path("M    394.9,273.7 382.2,282.1 389.4,290.9 390.5,294.4 401.6,294.8 411.3,279.2 400.7,268.4   z").attr({id: '_x3C_GUADALUPE_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_GUADALUPE_x3E_');
var _x3C_GONZALES_x3E_ = rsr.path("M    411.3,279.2 424.7,272.5 431.9,280.6 429.6,282.5 427.2,294.3 411.4,308.7 406.5,302.5 401.6,294.8   z").attr({id: '_x3C_GONZALES_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_GONZALES_x3E_');
var _x3C_GOLIAD_x3E_ = rsr.path("M 413.6,324.4    404.7,331.6 408.5,338.5 421.4,346.7 430.3,337.6 430.8,326.5 428.5,321.9 424.7,322.2 419.4,318.7   z").attr({id: '_x3C_GOLIAD_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_GOLIAD_x3E_');
var _x3C_FRIO_x3E_ = rsr.path("M 360.5,309    360.3,332.7 335.5,332.5 335.3,309.2   z").attr({id: '_x3C_FRIO_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_FRIO_x3E_');
var _x3C_FOARD_x3E_ = rsr.path("M 312.4,33.6    321.6,40.1 334.2,41.4 334.1,55.6 334,59.4 331,56.7 323.7,56.6 319.5,54.7 312.3,55 310.4,54.6 310.5,33.9   z").attr({id: '_x3C_FOARD_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_FOARD_x3E_');
var _x3C_FISHER_x3E_ = rsr.path("M 283.5,101.4    283.5,125.1 305.5,125.3 305,101.6 290.1,101.5   z").attr({id: '_x3C_FISHER_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_FISHER_x3E_');
var _x3C_EDWARDS_x3E_ = rsr.path("M    320.2,245.9 305.6,246.2 280.8,246 280.5,280.4 305.3,280.6 309.9,280.3 311.7,255.8 319.7,257   z").attr({id: '_x3C_EDWARDS_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_EDWARDS_x3E_');
var _x3C_EASTLAND_x3E_ = rsr.path("M    348.8,125.7 349.9,125.7 372.1,125.5 377.1,125.9 377,136.6 373.5,139.3 357.3,149.1 348.9,149   z").attr({id: '_x3C_EASTLAND_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_EASTLAND_x3E_');
var _x3C_DUVAL_x3E_ = rsr.path("M 384.6,406.4    371.5,406.7 371.6,401.7 360.1,401.6 360.4,364.9 380.7,364.7 384.9,365.1   z").attr({id: '_x3C_DUVAL_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_DUVAL_x3E_');
var _x3C_DIMMIT_x3E_ = rsr.path("M 304.5,333    304.7,356 334.9,356.2 335.5,332.5   z").attr({id: '_x3C_DIMMIT_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_DIMMIT_x3E_');
var _x3C_DICKENS_x3E_ = rsr.path("M 290.1,54.8    268.3,54.2 268.4,78.7 290.2,78.9   z").attr({id: '_x3C_DICKENS_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_DICKENS_x3E_');
var _x3C_DEWITT_x3E_ = rsr.path("M 439,309.7    424.7,322.2 419.4,318.7 413.6,324.4 406,313.2 411.4,308.7 427.2,294.3   z").attr({id: '_x3C_DEWITT_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_DEWITT_x3E_');
var _x3C_CROCKETT_x3E_ = rsr.path("M    268.9,202.3 269.1,222.5 269.3,245.9 235.6,245.6 240.2,241 237.2,237.6 240.7,229.9 240.4,226.5 236.2,225.7 230.2,210.7    210.4,202.1 212.7,202.2 235.6,202.4 256.7,202.5   z").attr({id: '_x3C_CROCKETT_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_CROCKETT_x3E_');
var _x3C_CRANE_x3E_ = rsr.path("M 212.7,202.2    212.6,171.2 191.9,171 191.7,190.5 196.7,188.2 199.8,191.3 204.3,191.8 207.7,196 210.4,202.1   z").attr({id: '_x3C_CRANE_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_CRANE_x3E_');
var _x3C_COTTLE_x3E_ = rsr.path("M 290.3,28.9    294.5,28.8 312.5,29.4 312.4,33.6 310.5,33.9 310.4,54.6 290.1,54.8   z").attr({id: '_x3C_COTTLE_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_COTTLE_x3E_');
var _x3C_CONCHO_x3E_ = rsr.path("M 305.8,175.8    322.7,175.6 326.5,181.3 326.7,201.6 305.6,201.8   z").attr({id: '_x3C_CONCHO_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_CONCHO_x3E_');
var _x3C_COLORADO_x3E_ = rsr.path("M    443.8,280.7 457,263.6 472.9,280.5 465.1,291.6 453.2,302.6 452.4,301 456.7,296.5   z").attr({id: '_x3C_COLORADO_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_COLORADO_x3E_');
var _x3C_COLEMAN_x3E_ = rsr.path("M    326.7,148.8 344.7,149.4 344.6,180.7 339.8,184.9 335.3,181.4 331.4,183.3 330.3,180.2 327.2,179.4 326.5,181.3 322.7,175.6    322.9,148.8   z").attr({id: '_x3C_COLEMAN_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_COLEMAN_x3E_');
var _x3C_COKE_x3E_ = rsr.path("M 301.1,148.6    283.5,148.5 275.9,148.4 275.7,169.4 300.9,169.6   z").attr({id: '_x3C_COKE_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_COKE_x3E_');
var _x3C_CHILDRESS_x3E_ = rsr.path("M 312.6,16    312.6,6.1 294.3,5.8 294.5,28.8 312.5,29.4   z").attr({id: '_x3C_CHILDRESS_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_CHILDRESS_x3E_');
var _x3C_CAMERON_x3E__1_ = rsr.path("M    399.8,455.5 399.7,470.4 403.1,472.4 409.2,472.4 410.3,475.9 414.5,477.8 429.8,476.8 430.6,471.8 430.3,470.7 429.1,473.7    428,472.6 426.4,474.9 426.1,470.6 428,469.1 426.9,468.4 424.9,469.1 423.8,463.4 421.9,462.6 420.1,453.8 419,453.8 417,456    413.6,457.1   z").attr({id: '_x3C_CAMERON_x3E__1_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_CAMERON_x3E__1_');
var _x3C_CALLAHAN_x3E_ = rsr.path("M    327.3,125.1 326.7,148.8 344.7,149.4 348.9,149 348.8,125.7   z").attr({id: '_x3C_CALLAHAN_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_CALLAHAN_x3E_');
var _x3C_CALHOUN_x3E_ = rsr.path("M    452.2,328.6 440.6,336.5 442.5,340.3 446.3,344.2 446.3,341.5 449.4,345.4 449.7,348.4 451.2,349.6 461.6,343.2 460.5,340.5    456.7,341.6 455.5,340.5 458.2,338.6 455.9,335.9 452.5,336.6 453.3,333.9   z").attr({id: '_x3C_CALHOUN_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_CALHOUN_x3E_');
var _x3C_CALDWELL_x3E_ = rsr.path("M    411.1,257.1 424.7,272.5 411.3,279.2 400.7,268.4 408,260.1   z").attr({id: '_x3C_CALDWELL_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_CALDWELL_x3E_');
var _x3C_BROWN_x3E_ = rsr.path("M 348.9,149    357.3,149.1 368.6,169.5 363.7,169.8 354.4,180.1 349.8,181.5 344.6,180.7 344.7,149.4   z").attr({id: '_x3C_BROWN_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_BROWN_x3E_');
var _x3C_BROOKS_x3E_ = rsr.path("M 391.8,406.5    384.6,406.4 371.5,406.7 376.4,417 375.5,432 380.5,432 394.7,431.7 394.9,409.2 394.9,406.1   z").attr({id: '_x3C_BROOKS_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_BROOKS_x3E_');
var _x3C_BRISCOE_x3E_ = rsr.path("M 272.1,5.7    266,5.6 248.4,5.6 248.2,29.2 268.1,29.3 271.9,29   z").attr({id: '_x3C_BRISCOE_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_BRISCOE_x3E_');
var _x3C_BREWSTER_x3E_ = rsr.path("M    148.5,237.9 163.5,223.9 200.7,256.4 211,266.4 208.6,271.4 196.4,273.2 189.3,293.4 187.4,294.1 186.6,298.3 187.3,301 181.6,304    178.8,307.4 176.5,313.9 169.6,313.9 162,309.2 160.9,306.1 148.3,300.7 148.3,298   z").attr({id: '_x3C_BREWSTER_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_BREWSTER_x3E_');
var _x3C_BEE_x3E_ = rsr.path("M 404.7,331.6    399,328.9 395.5,330.8 391.7,331.9 402.6,358.4 413.3,360 414.8,358.1 421.4,346.7 408.5,338.5   z").attr({id: '_x3C_BEE_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_BEE_x3E_');
var _x3C_ATASCOSA_x3E_ = rsr.path("M    378.1,307.6 360.2,299.8 360.5,309 360.3,332.7 380.6,332.2 380.6,335.2 391.4,325.4 387.2,319.6   z").attr({id: '_x3C_ATASCOSA_x3E_',fill: 'none',stroke: '#C9C79D',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_ATASCOSA_x3E_');
var _x3C_ARANSAS_x3E_ = rsr.path("M    446.2,351.1 432.4,354.4 434.3,357.1 436.2,359.4 438.9,358.7 438.2,354.1 441.2,353.3 440,359.5 445.4,356.1   z").attr({id: '_x3C_ARANSAS_x3E_',fill: 'none',stroke: '#DBD8BD',"stroke-linecap": 'round',"stroke-linejoin": 'round',"stroke-miterlimit": '3.8637',parent: 'SERVICE_COUNTIES','stroke-width': '0','stroke-opacity': '1'}).data('id', '_x3C_ARANSAS_x3E_');
SERVICE_COUNTIES.attr({'id': 'SERVICE_COUNTIES','name': 'SERVICE_COUNTIES'});
var STATE_BORDERS_x2F_SERVICE_BOUNDARY = rsr.set();
STATE_BORDERS_x2F_SERVICE_BOUNDARY.attr({'id': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','name': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY'});
var _x3C_Mexico_Border_x3E_ = rsr.set();
var path_fi = rsr.path("M429.5,477.8l-1.5,2    c-0.8,1.3-1.6,2.7-2.3,4").attr({fill: 'none',stroke: '#C9C79D',"stroke-width": '4',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-opacity': '1'}).data('id', 'path_fi');
var path_fj = rsr.path("M429.5,477.8l-1.5,2    c-0.8,1.3-1.6,2.7-2.3,4").attr({fill: 'none',stroke: '#FFFFFF',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_fj');
_x3C_Mexico_Border_x3E_.attr({'id': '_x3C_Mexico_Border_x3E_','parent': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','name': '_x3C_Mexico_Border_x3E_'});
var _x3C_New_Mexico_Border_x3E_ = rsr.set();
_x3C_New_Mexico_Border_x3E_.attr({'id': '_x3C_New_Mexico_Border_x3E_','parent': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','name': '_x3C_New_Mexico_Border_x3E_'});
var _x3C_Oklahoma_Arkansas_Border_x3E_ = rsr.set();
_x3C_Oklahoma_Arkansas_Border_x3E_.attr({'id': '_x3C_Oklahoma_Arkansas_Border_x3E_','parent': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','name': '_x3C_Oklahoma_Arkansas_Border_x3E_'});
var _x3C_LOUISIANA_BORDER3_x3E_ = rsr.set();
var path_fk = rsr.path("M736.4,0l-1.1,1.5    c-0.1,0.1-0.2,0.2-0.3,0.2l-2.5,1.5l3,3.5c0.2,0.3,0.3,0.6,0.1,1c-0.1,0.3-0.5,0.5-0.8,0.5l-4.6,0.2l2,4.1c0.1,0.2,0.1,0.5,0,0.7    s-0.3,0.4-0.5,0.5l-1.8,0.7l0.2,4.8c0,0.4-0.2,0.7-0.5,0.9l-7.2,3.7l0.1,1.4c0,0.3-0.2,0.7-0.5,0.8l-6.3,3.6l3.1,3.1    c0.2,0.2,0.3,0.4,0.3,0.6l0.1,1.7c0,0.3-0.1,0.5-0.3,0.7s-0.4,0.3-0.7,0.3l-5.2-0.2l-2.2,8c-0.1,0.5-0.6,0.8-1.1,0.7l-2.9-0.6    l0.4,8.3c0,0.2,0,0.3-0.1,0.4l-1.6,3.2l1.6,2.7c0.2,0.4,0.1,0.9-0.2,1.2l-1.7,1.2c-0.2,0.2-0.5,0.2-0.8,0.1l-2.9-0.8l0.7,1    c0.1,0.2,0.2,0.5,0.1,0.8l-2.1,7.1l4.8,8.7c0.2,0.3,0.2,0.6,0,0.9l-1.9,3.1l0.1,0.7l2.9-0.4c0.3,0,0.6,0,0.8,0.2s0.3,0.5,0.3,0.7    l-0.3,4.3c0,0.3-0.1,0.5-0.3,0.6l-3,2.4l0.2,4.7c0,0.2,0,0.4-0.1,0.5l-1.8,2.9c0,0.1,0.1,0.2,0.1,0.3c0,0.2-0.1,0.4-0.2,0.5    l-0.2,1.5l1.5-0.5c0.3-0.1,0.6-0.1,0.8,0.1s0.4,0.4,0.4,0.7l0.1,6.5l2.2,3.6c0.2,0.3,0.2,0.7,0,1l-2.9,4.2l3.4,0.5    c0.2,0,0.3,0.1,0.4,0.2l2.2,1.7c0.2,0.2,0.4,0.5,0.4,0.8s-0.2,0.6-0.5,0.7l-2.1,1.1l1.4,2.5c0.2,0.3,0.1,0.8-0.1,1.1    c-0.3,0.3-0.7,0.4-1.1,0.2l-1.5-0.7l0.9,1.9l1.2,0.1c0.5,0,0.8,0.4,0.9,0.9l0.1,2.6l4.2,3.6c0.3,0.3,0.4,0.8,0.2,1.1l-2.9,5.1    c-0.1,0.3-0.4,0.4-0.7,0.5l-6.4,0.6l-1,1.6l0.9,1l6.2-2.9c0.4-0.2,0.8-0.1,1,0.2c0.3,0.3,0.3,0.7,0.2,1l-2.7,5.5    c-0.1,0.3-0.4,0.5-0.8,0.5l-1.3,0.1l0.1,1.8c0,0.2-0.1,0.4-0.2,0.6l-6,7.7l0.7,1.6c0.1,0.3,0.1,0.6-0.1,0.9    c-0.2,0.3-0.4,0.4-0.7,0.4l-4.3,0.2l-0.5,0.8l2.1,1.6c0.3,0.2,0.4,0.5,0.3,0.9c-0.1,0.3-0.3,0.6-0.6,0.7l-3.7,1.3l-1.9,6    c-0.1,0.3-0.4,0.5-0.7,0.6l-2.4,0.5l0.3,0.2c0.4,0.2,0.5,0.7,0.3,1.1l-1.1,2.7l-0.4,7.5c0,0.3-0.2,0.7-0.6,0.8    c-0.3,0.1-0.7,0.1-1-0.2l-0.9-0.8l-0.2,1.4l1.7,0.9c0.3,0.2,0.5,0.5,0.5,0.9l-0.3,2.5c0,0.4-0.3,0.7-0.6,0.8l-4.1,1.4v6.7l1.4,1.7    c0.2,0.2,0.3,0.5,0.2,0.8l-0.7,2.9H744").attr({fill: 'none',stroke: '#C9C79D',"stroke-width": '4',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-opacity': '1'}).data('id', 'path_fk');
var path_fl = rsr.path("M736.4,0l-1.1,1.5    c-0.1,0.1-0.2,0.2-0.3,0.2l-2.5,1.5l3,3.5c0.2,0.3,0.3,0.6,0.1,1c-0.1,0.3-0.5,0.5-0.8,0.5l-4.6,0.2l2,4.1c0.1,0.2,0.1,0.5,0,0.7    s-0.3,0.4-0.5,0.5l-1.8,0.7l0.2,4.8c0,0.4-0.2,0.7-0.5,0.9l-7.2,3.7l0.1,1.4c0,0.3-0.2,0.7-0.5,0.8l-6.3,3.6l3.1,3.1    c0.2,0.2,0.3,0.4,0.3,0.6l0.1,1.7c0,0.3-0.1,0.5-0.3,0.7s-0.4,0.3-0.7,0.3l-5.2-0.2l-2.2,8c-0.1,0.5-0.6,0.8-1.1,0.7l-2.9-0.6    l0.4,8.3c0,0.2,0,0.3-0.1,0.4l-1.6,3.2l1.6,2.7c0.2,0.4,0.1,0.9-0.2,1.2l-1.7,1.2c-0.2,0.2-0.5,0.2-0.8,0.1l-2.9-0.8l0.7,1    c0.1,0.2,0.2,0.5,0.1,0.8l-2.1,7.1l4.8,8.7c0.2,0.3,0.2,0.6,0,0.9l-1.9,3.1l0.1,0.7l2.9-0.4c0.3,0,0.6,0,0.8,0.2s0.3,0.5,0.3,0.7    l-0.3,4.3c0,0.3-0.1,0.5-0.3,0.6l-3,2.4l0.2,4.7c0,0.2,0,0.4-0.1,0.5l-1.8,2.9c0,0.1,0.1,0.2,0.1,0.3c0,0.2-0.1,0.4-0.2,0.5    l-0.2,1.5l1.5-0.5c0.3-0.1,0.6-0.1,0.8,0.1s0.4,0.4,0.4,0.7l0.1,6.5l2.2,3.6c0.2,0.3,0.2,0.7,0,1l-2.9,4.2l3.4,0.5    c0.2,0,0.3,0.1,0.4,0.2l2.2,1.7c0.2,0.2,0.4,0.5,0.4,0.8s-0.2,0.6-0.5,0.7l-2.1,1.1l1.4,2.5c0.2,0.3,0.1,0.8-0.1,1.1    c-0.3,0.3-0.7,0.4-1.1,0.2l-1.5-0.7l0.9,1.9l1.2,0.1c0.5,0,0.8,0.4,0.9,0.9l0.1,2.6l4.2,3.6c0.3,0.3,0.4,0.8,0.2,1.1l-2.9,5.1    c-0.1,0.3-0.4,0.4-0.7,0.5l-6.4,0.6l-1,1.6l0.9,1l6.2-2.9c0.4-0.2,0.8-0.1,1,0.2c0.3,0.3,0.3,0.7,0.2,1l-2.7,5.5    c-0.1,0.3-0.4,0.5-0.8,0.5l-1.3,0.1l0.1,1.8c0,0.2-0.1,0.4-0.2,0.6l-6,7.7l0.7,1.6c0.1,0.3,0.1,0.6-0.1,0.9    c-0.2,0.3-0.4,0.4-0.7,0.4l-4.3,0.2l-0.5,0.8l2.1,1.6c0.3,0.2,0.4,0.5,0.3,0.9c-0.1,0.3-0.3,0.6-0.6,0.7l-3.7,1.3l-1.9,6    c-0.1,0.3-0.4,0.5-0.7,0.6l-2.4,0.5l0.3,0.2c0.4,0.2,0.5,0.7,0.3,1.1l-1.1,2.7l-0.4,7.5c0,0.3-0.2,0.7-0.6,0.8    c-0.3,0.1-0.7,0.1-1-0.2l-0.9-0.8l-0.2,1.4l1.7,0.9c0.3,0.2,0.5,0.5,0.5,0.9l-0.3,2.5c0,0.4-0.3,0.7-0.6,0.8l-4.1,1.4v6.7l1.4,1.7    c0.2,0.2,0.3,0.5,0.2,0.8l-0.7,2.9H744").attr({fill: 'none',stroke: '#FFFFFF',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_fl');
_x3C_LOUISIANA_BORDER3_x3E_.attr({'id': '_x3C_LOUISIANA_BORDER3_x3E_','parent': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','name': '_x3C_LOUISIANA_BORDER3_x3E_'});
var _x3C_LOUISIANA_BORDER2_x3E_ = rsr.set();
var path_fm = rsr.path("M744,309.1l-4.3-7.9    l-2.4,4c-0.1,0.2-0.3,0.4-0.6,0.4c-0.2,0.1-0.5,0-0.7-0.1l-1.5-1c-0.2-0.2-0.4-0.4-0.4-0.7l-0.1-2.9l-3.2-2.2l0.1,3.1    c0,0.3-0.1,0.6-0.4,0.8L726,306l0.1,1.9c0,0.4-0.3,0.8-0.7,0.9l-7.5,1.9c-0.3,0.1-0.6,0-0.8-0.2L711,306l-6.6-1.5    c-0.3-0.1-0.6-0.3-0.7-0.7l-2-7.9l-2.3-1c-0.2-0.1-0.4-0.2-0.4-0.4l-1.4-2.8l-1.5-0.5c-0.3-0.1-0.6-0.4-0.6-0.7    c-0.2-0.9-0.4-1.9-0.6-2.3c-0.4,0-1.8,0.1-2.9,0.3c-0.3,0-0.5-0.1-0.7-0.2l-2.9-2.7l-4.4,1.1c-0.3,0.1-0.5,0-0.8-0.2    c-0.2-0.2-0.4-0.4-0.4-0.7l-0.1-2l-0.9-2.5l-3.7-0.8c-0.3-0.1-0.5-0.2-0.6-0.5s-0.1-0.6,0-0.8l2.7-5L680,274l-11.8,1.3    c-0.2,0.1-0.5,0-0.7-0.2s-0.3-0.4-0.3-0.6l-0.2-2.3c0-0.2,0-0.4,0.1-0.5l0.4-0.7l-3-0.3l-7.4,4.3c-0.4,0.2-0.9,0.1-1.2-0.2    l-0.5-0.6l-1.1,0.9l0.5,1.3h0.9c0.4,0,0.7,0.2,0.9,0.5l1,1.9l2.5,0.5c0.3,0.1,0.5,0.2,0.6,0.4c0.1,0.2,0.2,0.5,0.1,0.8l-1.1,3    c-0.1,0.3-0.4,0.5-0.7,0.6l-11,1.6l-14.7-1.5c-0.1,0-0.2,0-0.3-0.1l-14.6-6.1l-6.5-2.5l-12.7-2.9l-2,1.1c-0.1,0.1-0.3,0.1-0.4,0.1    l-7.5,0.3l-15.1,2.1").attr({fill: 'none',stroke: '#C9C79D',"stroke-width": '4',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-opacity': '1'}).data('id', 'path_fm');
var path_fn = rsr.path("M744,309.1l-4.3-7.9l-2.4,4    c-0.1,0.2-0.3,0.4-0.6,0.4c-0.2,0.1-0.5,0-0.7-0.1l-1.5-1c-0.2-0.2-0.4-0.4-0.4-0.7l-0.1-2.9l-3.2-2.2l0.1,3.1    c0,0.3-0.1,0.6-0.4,0.8L726,306l0.1,1.9c0,0.4-0.3,0.8-0.7,0.9l-7.5,1.9c-0.3,0.1-0.6,0-0.8-0.2L711,306l-6.6-1.5    c-0.3-0.1-0.6-0.3-0.7-0.7l-2-7.9l-2.3-1c-0.2-0.1-0.4-0.2-0.4-0.4l-1.4-2.8l-1.5-0.5c-0.3-0.1-0.6-0.4-0.6-0.7    c-0.2-0.9-0.4-1.9-0.6-2.3c-0.4,0-1.8,0.1-2.9,0.3c-0.3,0-0.5-0.1-0.7-0.2l-2.9-2.7l-4.4,1.1c-0.3,0.1-0.5,0-0.8-0.2    c-0.2-0.2-0.4-0.4-0.4-0.7l-0.1-2l-0.9-2.5l-3.7-0.8c-0.3-0.1-0.5-0.2-0.6-0.5s-0.1-0.6,0-0.8l2.7-5L680,274l-11.8,1.3    c-0.2,0.1-0.5,0-0.7-0.2s-0.3-0.4-0.3-0.6l-0.2-2.3c0-0.2,0-0.4,0.1-0.5l0.4-0.7l-3-0.3l-7.4,4.3c-0.4,0.2-0.9,0.1-1.2-0.2    l-0.5-0.6l-1.1,0.9l0.5,1.3h0.9c0.4,0,0.7,0.2,0.9,0.5l1,1.9l2.5,0.5c0.3,0.1,0.5,0.2,0.6,0.4c0.1,0.2,0.2,0.5,0.1,0.8l-1.1,3    c-0.1,0.3-0.4,0.5-0.7,0.6l-11,1.6l-14.7-1.5c-0.1,0-0.2,0-0.3-0.1l-14.6-6.1l-6.5-2.5l-12.7-2.9l-2,1.1c-0.1,0.1-0.3,0.1-0.4,0.1    l-7.5,0.3l-15.1,2.1").attr({fill: 'none',stroke: '#FFFFFF',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_fn');
_x3C_LOUISIANA_BORDER2_x3E_.attr({'id': '_x3C_LOUISIANA_BORDER2_x3E_','parent': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','name': '_x3C_LOUISIANA_BORDER2_x3E_'});
var _x3C_Louisiana_Arkansas_Border_x3E_ = rsr.set();
var path_fo = rsr.path("M565.8,98.3h136.3").attr({fill: 'none',stroke: '#C9C79D',"stroke-width": '4',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-opacity': '1'}).data('id', 'path_fo');
var path_fp = rsr.path("M565.8,98.3h136.3").attr({fill: 'none',stroke: '#FFFFFF',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_fp');
_x3C_Louisiana_Arkansas_Border_x3E_.attr({'id': '_x3C_Louisiana_Arkansas_Border_x3E_','parent': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','name': '_x3C_Louisiana_Arkansas_Border_x3E_'});
var _x3C_Texas_State_Border_x3E__1_ = rsr.set();
var path_fq = rsr.path("M312.4,0l0.2,16h3.1    l4.1,3.1l5.3,6.9l4.2,0.1l1.6-1.9h3.8l2.7,1.9l0.8-3.4l2.7-0.4l0.7,1.6l4.9,3.8v6.5l10.3,0.9l2.7,2.7h3.4l2.7,1.6l2.3-1.1l3.4-1.2    l2.3,1.6l1.9,3.8l3.8-0.7l2-3.8l2.3,0.4l1.9,1.5l2.6,0.4l3.5-1.8l2.3,1.9l-1.2,1.9l2.6,4.6l2-0.7l2.2,1.5l-1.1,3.8l4.9,3.9l7-8    l3,0.8l3.4,3.1l1.2,0.4l1.1-0.4l1.5,4.6l2.7,1.6l2.3-3.4l2.3,0.4l1.9-3.1l2.3,2.3l-0.4,2.7l0.7,5.7l2.7-0.7l0.1-6.5l3,1.2l2.7-3.1    l1.2-3.8l1.5-0.3l2.3,6.5l2.6-0.8l2.7,2l3.1-5l3.1,1.2l0.3,1.5l-1.5,2.3l7.2,2.8l2.7,2.7l1.9,1.1l1.1-2.3l5.8-1.1l1.2-3l12.2-3    l1.9,0.4l1.6-2.2l9.6-2.3l1.5,2.7l5.3,1.2l3.1-1.5l3.9-3.8l3.4,0.4l11,10.1l6.5,2.3l7.2,3.2l1.2,1.5l2.3-0.4l0.3,0.4l0.4,1.9    l0.8,0.4l0.3,0.8l1.2,0.8l0.7,0.4l0.4,0.7l1.6-0.3l2.2,0.4l0.4-0.8l1.2-0.4l0.4,0.4h0.7l0.8-0.7v-0.8l1.2-0.4l0.3,0.4l1.6,1.2h0.3    h1.2l1.5-0.4l0.4,0.4l1,0.7V78v76l2.3,1.1l2.3,2.2l2.3,2.7l1.2,2.4l0.9,1.6l0.8,0.9v0.8l0.1,2.5l1.4,0.9v1.8l-1.3,0.4l-0.6,1.6    h0.8l0.4,1.2l-0.4,1.2l-0.7,0.3l1.2,1l1,2.3l3.1,1.2h-2.6l2.6,1.2l-1.1,0.5l1.2,1.9l1.1,0.4l0.7,1.7l1.9,1.4l-0.5,2.4l-1.4,1.6    l1.5,0.9l1.8,1.3l0.7,2.3l2.1,1.9l1.4,7.7l-1.4,1.4l-0.8,0.4l0.7,1.2v0.8h0.6l-1,1.4l1.1,1v0.9l-0.5,2l0.1,0.7L588,216l-1.3,1    l-0.7,1.5l-2.4,4.2l-0.8,1.9l-1.1,1.9l-0.4,1.2v1.1l-0.4,0.4l-1.2,1.5v1.6l0.4,2.2l0.3,2.3l-0.7,1.6l0.3,0.7l-1.1,0.4v4.6l4.2,5    l-1.9,9.3l-4.8,6.5l-0.9-0.5l-4.8,7.3l3.4,4.1l-23.2,7.3l-0.8,0.8l-15.8,9.4h-1.5l0.8-2.3l10-6.4l-1.5-2.3l-9.2,3l-0.4-1.5l4.3-13    l-0.7-1.2l-9.3,8.4l-2.6-3.1l-1.9,1.1l1.8,5.4l-1.5,3.4l3.8,2l-1.2,2.6l2.3,2.3l-0.8,5.4l-6.6,5.7l-3.4-0.4l-3.1,5.3l3,1.9    l-1.9,3.1l-15,10.5L465,345.9l-1.1-0.8l26.9-18.1l-2.3-1.2l-18,10.6l-1.2-1.2l0.6-4.5l-3.2,1.1l-3.4-3.5l0.3,6.1l-3.8,2.3l1.1-2.3    l-0.3-2.3l-8.4-3.5l1.1,5.3l-0.8,2.7l3.4-0.7l2.3,2.7l-2.7,1.9l1.2,1.1l3.8-1.1l1.1,2.7l-10.4,6.4l-1.5-1.2l-0.3-3l-3.1-3.9v2.7    l-0.1,6.9l-0.8,5l-5.4,3.4l1.2-6.2l-3,0.8l0.7,4.6l-2.7,0.7l-1.9-2.3l-7.7,6.8l4.9,9.6l-4.6,2.7l-6.1-0.1l-0.8,4.2l1.9,2.7    l-1.2,2.7l1.1,0.4l2.4-3.1l0.7,2.7l-2,5.3l-1.5,5l-1.2,1.5L419,401l-3.8,4.5l-1.9-1.1l1.9-1.6l0.4-4.2h-1.5l-1.2,4.2h-2.3l0.4,1.9    h-0.4h-1.2l-5.2-8.5l-1.2,0.4l4.5,8.1l-2.3,1.1l3.1,2.3l5.3,0.5l4.2-1.1l0.4,5.3l-2.7,3.1l0.7,2.6l-2.7,2.7l-0.5,7.6l2.7,2.4    l2.2,11.1l2.2,11.5l1.8,8.8l1.9,0.8l1.1,5.7l2-0.7l1.1,0.7l-1.9,1.5l0.3,4.3l1.6-2.3l1.1,1.1l1.2-3l0.3,1.1l-0.8,5l-15.3,1    l-4.2-1.9l-1.1-3.5h-6.1l-3.4-2l-8.8,1.5l-6.5-1.6l-15.6-9.7l-3.1,0.7l-3.4-4.6l-14.9-4l-2.6-9.9L340,429l-4.6-4.3l-3.4-7.3    l0.8-1.9l0.1-8l-3.8-3.5l0.1-10.7v-4.2l-7.6-3.9l-4.5-5.4l-11.3-19.6l-5-3.9l-4.5-7.3l-2.6-9.6l-3.4-5l-0.4-1.9l-1.5-0.8    l-4.1-10.7l0.4-1.5l-1.1-0.1l-3-10.7l-4.9-8.8l-9.1-6.2l-1.1-4.2l-13-10.5l-1.4-5.7l-6.9-2.4l-2.7,1.9l-6.1-0.8l-12.6-0.5    l-11.8-5.1l-2.4,5l-12.2,1.8l-7.1,20.2l-1.9,0.7l-0.8,4.2l0.7,2.7l-5.7,3l-2.8,3.4l-2.3,6.5h-6.9l-7.6-4.7l-1.1-3.1l-12.6-5.4V298    l-15.2-5.9l-16.7-15l-5.3-13.5l-1.3-16.4l-6.1-8.5l-1.8-9.6l-3.4-3.5l-0.8-1.9l-17.1-10.8l-8.7-11.2l-3.8-3.5l-3-1.5l-1.9-2    l-6.8-11.5l-5,0.7l-5.7-3.9l-13.6-17.3l-3.8-11.6h1.4h25.4h46.3h2.6h36.1h42.4V-0.1").attr({fill: 'none',stroke: '#C9C79D',"stroke-width": '4',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-opacity': '1'}).data('id', 'path_fq');
var path_fr = rsr.path("M312.4,0l0.2,16h3.1l4.1,3.1l5.3,6.9    l4.2,0.1l1.6-1.9h3.8l2.7,1.9l0.8-3.4l2.7-0.4l0.7,1.6l4.9,3.8v6.5l10.3,0.9l2.7,2.7h3.4l2.7,1.6l2.3-1.1l3.4-1.2l2.3,1.6l1.9,3.8    l3.8-0.7l2-3.8l2.3,0.4l1.9,1.5l2.6,0.4l3.5-1.8l2.3,1.9l-1.2,1.9l2.6,4.6l2-0.7l2.2,1.5l-1.1,3.8l4.9,3.9l7-8l3,0.8l3.4,3.1    l1.2,0.4l1.1-0.4l1.5,4.6l2.7,1.6l2.3-3.4l2.3,0.4l1.9-3.1l2.3,2.3l-0.4,2.7l0.7,5.7l2.7-0.7l0.1-6.5l3,1.2l2.7-3.1l1.2-3.8    l1.5-0.3l2.3,6.5l2.6-0.8l2.7,2l3.1-5l3.1,1.2l0.3,1.5l-1.5,2.3l7.2,2.8l2.7,2.7l1.9,1.1l1.1-2.3l5.8-1.1l1.2-3l12.2-3l1.9,0.4    l1.6-2.2l9.6-2.3l1.5,2.7l5.3,1.2l3.1-1.5l3.9-3.8l3.4,0.4l11,10.1l6.5,2.3l7.2,3.2l1.2,1.5l2.3-0.4l0.3,0.4l0.4,1.9l0.8,0.4    l0.3,0.8l1.2,0.8l0.7,0.4l0.4,0.7l1.6-0.3l2.2,0.4l0.4-0.8l1.2-0.4l0.4,0.4h0.7l0.8-0.7v-0.8l1.2-0.4l0.3,0.4l1.6,1.2h0.3h1.2    l1.5-0.4l0.4,0.4l1,0.7V78v76l2.3,1.1l2.3,2.2l2.3,2.7l1.2,2.4l0.9,1.6l0.8,0.9v0.8l0.1,2.5l1.4,0.9v1.8l-1.3,0.4l-0.6,1.6h0.8    l0.4,1.2l-0.4,1.2l-0.7,0.3l1.2,1l1,2.3l3.1,1.2h-2.6l2.6,1.2l-1.1,0.5l1.2,1.9l1.1,0.4l0.7,1.7l1.9,1.4l-0.5,2.4l-1.4,1.6    l1.5,0.9l1.8,1.3l0.7,2.3l2.1,1.9l1.4,7.7l-1.4,1.4l-0.8,0.4l0.7,1.2v0.8h0.6l-1,1.4l1.1,1v0.9l-0.5,2l0.1,0.7L588,216l-1.3,1    l-0.7,1.5l-2.4,4.2l-0.8,1.9l-1.1,1.9l-0.4,1.2v1.1l-0.4,0.4l-1.2,1.5v1.6l0.4,2.2l0.3,2.3l-0.7,1.6l0.3,0.7l-1.1,0.4v4.6l4.2,5    l-1.9,9.3l-4.8,6.5l-0.9-0.5l-4.8,7.3l3.4,4.1l-23.2,7.3l-0.8,0.8l-15.8,9.4h-1.5l0.8-2.3l10-6.4l-1.5-2.3l-9.2,3l-0.4-1.5l4.3-13    l-0.7-1.2l-9.3,8.4l-2.6-3.1l-1.9,1.1l1.8,5.4l-1.5,3.4l3.8,2l-1.2,2.6l2.3,2.3l-0.8,5.4l-6.6,5.7l-3.4-0.4l-3.1,5.3l3,1.9    l-1.9,3.1l-15,10.5L465,345.9l-1.1-0.8l26.9-18.1l-2.3-1.2l-18,10.6l-1.2-1.2l0.6-4.5l-3.2,1.1l-3.4-3.5l0.3,6.1l-3.8,2.3l1.1-2.3    l-0.3-2.3l-8.4-3.5l1.1,5.3l-0.8,2.7l3.4-0.7l2.3,2.7l-2.7,1.9l1.2,1.1l3.8-1.1l1.1,2.7l-10.4,6.4l-1.5-1.2l-0.3-3l-3.1-3.9v2.7    l-0.1,6.9l-0.8,5l-5.4,3.4l1.2-6.2l-3,0.8l0.7,4.6l-2.7,0.7l-1.9-2.3l-7.7,6.8l4.9,9.6l-4.6,2.7l-6.1-0.1l-0.8,4.2l1.9,2.7    l-1.2,2.7l1.1,0.4l2.4-3.1l0.7,2.7l-2,5.3l-1.5,5l-1.2,1.5L419,401l-3.8,4.5l-1.9-1.1l1.9-1.6l0.4-4.2h-1.5l-1.2,4.2h-2.3l0.4,1.9    h-0.4h-1.2l-5.2-8.5l-1.2,0.4l4.5,8.1l-2.3,1.1l3.1,2.3l5.3,0.5l4.2-1.1l0.4,5.3l-2.7,3.1l0.7,2.6l-2.7,2.7l-0.5,7.6l2.7,2.4    l2.2,11.1l2.2,11.5l1.8,8.8l1.9,0.8l1.1,5.7l2-0.7l1.1,0.7l-1.9,1.5l0.3,4.3l1.6-2.3l1.1,1.1l1.2-3l0.3,1.1l-0.8,5l-15.3,1    l-4.2-1.9l-1.1-3.5h-6.1l-3.4-2l-8.8,1.5l-6.5-1.6l-15.6-9.7l-3.1,0.7l-3.4-4.6l-14.9-4l-2.6-9.9L340,429l-4.6-4.3l-3.4-7.3    l0.8-1.9l0.1-8l-3.8-3.5l0.1-10.7v-4.2l-7.6-3.9l-4.5-5.4l-11.3-19.6l-5-3.9l-4.5-7.3l-2.6-9.6l-3.4-5l-0.4-1.9l-1.5-0.8    l-4.1-10.7l0.4-1.5l-1.1-0.1l-3-10.7l-4.9-8.8l-9.1-6.2l-1.1-4.2l-13-10.5l-1.4-5.7l-6.9-2.4l-2.7,1.9l-6.1-0.8l-12.6-0.5    l-11.8-5.1l-2.4,5l-12.2,1.8l-7.1,20.2l-1.9,0.7l-0.8,4.2l0.7,2.7l-5.7,3l-2.8,3.4l-2.3,6.5h-6.9l-7.6-4.7l-1.1-3.1l-12.6-5.4V298    l-15.2-5.9l-16.7-15l-5.3-13.5l-1.3-16.4l-6.1-8.5l-1.8-9.6l-3.4-3.5l-0.8-1.9l-17.1-10.8l-8.7-11.2l-3.8-3.5l-3-1.5l-1.9-2    l-6.8-11.5l-5,0.7l-5.7-3.9l-13.6-17.3l-3.8-11.6h1.4h25.4h46.3h2.6h36.1h42.4V-0.1").attr({fill: 'none',stroke: '#FFFFFF',"stroke-linecap": 'round',"stroke-linejoin": 'round',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_fr');
_x3C_Texas_State_Border_x3E__1_.attr({'id': '_x3C_Texas_State_Border_x3E__1_','parent': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','name': '_x3C_Texas_State_Border_x3E__1_'});
var _x3C_Service_Territory_Boundary_x3E_ = rsr.set();
var path_fs = rsr.path("    M486.8,306.3l-0.7-3.8l1.2-1.9l-9.8-14.6l-0.4-3.1l-4.2-2.3l-15.9-17l-13.2,17.1l12.9,15.8l-4.2,4.6l-11.6,11.4l-1.9-2.7    l-11.7-15.4l2.4-11.8l2.3-1.9l-7.2-8.1l-13.6-15.4l-3.1,3l1.3,22.3l-7.8,12.5l3.6,5.7l-5.7,4.7l-0.3,3.8l-11.9,10.6l-9.1-11.9    l-17.9-7.8l-24.9-8.9l-8.4-10.1V267l-3.4-0.4l0.1-9.6h-3.8l0.5-11.1l21,0.2l-0.3-12.2l-9.2-0.5l-0.2-23.3l17.6,0.2l0.6-28.7    l-5.2-0.8l0.1-25.4h16.1l-3.5-6.3l6.1-3.7v-19.7h-13.4l0.4-23.7l6.1,0.1l0.2-23l-22.6-0.2L334,55.6l23-0.2l-0.2-20.3l-10.3-0.9    l0.1-6.5l-4.9-3.9l-0.8-1.5l-2.7,0.4l-0.8,3.4l-2.7-1.9h-3.8l-1.5,1.9h-4.2l-5.3-6.9l-4.2-3.1h-3.1v-10l-18.3-0.2l0.2,23L271.9,29    l0.1-9.9h-12.5v10.7h8.6l0.3,48.8v22.8l15.1-0.1v47.1l-7.7-0.1l-18.8,17l-0.1,6.3l-7.1-0.1l-14.2,13l-33.1-13.4l-10.6-0.1    l-0.2,19.5l-1.9,0.4l-4.2-4.2l-3.4-0.8l-18.7-3.2l-28.1,17l-37.3,25.2l3.7,4.3l1.8,9.6l6,8.5l1.4,16.5l5.2,13.4l16.7,15.1l7.1,2.7    l59-82l19.9,14.8l0.4-3.1l16.8,0.9l4.2,0.8l0.4,3.4l-3.5,7.6l1.1,1.3l11.6,0.3v33.5l1.1,0.5l1.5,5.8l12.9,10.4l1.1,4.2l9.1,6.2    l4.9,8.8l3,10.7h1.1l-0.4,1.5l4.1,10.7l1.5,0.8l0.4,1.9l3.4,5l2.6,9.6l4.5,7.3l4.9,3.9l11.3,19.6l4.5,5.4l7.6,3.9l-0.1,14.9    l3.8,3.5l-0.1,8l-0.8,1.9l3.4,7.3l4.5,4.2l4.9,13.8l2.6,10l14.9,4l3.4,4.6l3.1-0.7l15.6,9.7l6.5,1.6l8.8-1.5l3.4,1.9l6.1,0.1    l1.1,3.5l4.2,2l15.3-1l0.8-5l-0.4-1.1l-1.2,3.1l-1.1-1.2l-1.5,2.3l-0.3-4.2l1.9-1.5l-1.1-0.8l-1.9,0.7l-1.1-5.8l-1.9-0.8l-1.8-8.8    l-2.2-11.5l-2.2-11.1l-2.7-2.3l0.5-7.6l2.7-2.6l-0.7-2.7l2.7-3l-0.3-5.4l-4.2,1.1l-5.4-0.4l-3-2.3l2.3-1.1l-4.5-8.1l1.2-0.4    l5.3,8.5h1.5l-0.4-1.9h2.3l1.2-4.2h1.5l-0.4,4.2l-1.9,1.5l4.8-1.9l1-1.5l1.2-3.4l1.2-1.5l1.6-5l2-5.3l-0.7-2.7l-2.3,3l-1.1-0.4    l1.2-2.7l-1.9-2.7l0.8-4.2l6.1,0.1l4.6-2.6l-4.9-9.6l7.7-6.8l1.9,2.3l2.7-0.7l-0.7-4.6l3.1-0.7l-1.2,6.1l5.4-3.4l0.8-5l0.1-9.6    l3,3.9l0.4,3.1l1.5,1.2l10.4-6.4l-1.1-2.7l-3.8,1.1l-1.1-1.2l2.7-1.9l-2.3-2.7l-3.5,0.7l0.8-2.7l-1.1-5.4l8.4,3.5l0.4,2.3    l-1.2,2.3l3.8-2.3l-0.3-6.1l3.4,3.5l3.2-1.1l-0.6,4.6l1.1,1.2l18.1-10.6l2.3,1.2l-26.9,18.1l1.1,0.8l34.6-22.6L486.8,306.3z     M312.1,78.7l-21.8,0.2l-0.2-24.1l20.3-0.2l1.9,0.4L312.1,78.7z").attr({fill: 'none',stroke: '#C9C79D',"stroke-width": '5',"stroke-linecap": 'square',"stroke-linejoin": 'round',"stroke-miterlimit": '10',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-opacity': '1'}).data('id', 'path_fs');
var path_ft = rsr.path("    M486.8,306.3l-0.7-3.8l1.2-1.9l-9.8-14.6l-0.4-3.1l-4.2-2.3l-15.9-17l-13.2,17.1l12.9,15.8l-4.2,4.6l-11.6,11.4l-1.9-2.7    l-11.7-15.4l2.4-11.8l2.3-1.9l-7.2-8.1l-13.6-15.4l-3.1,3l1.3,22.3l-7.8,12.5l3.6,5.7l-5.7,4.7l-0.3,3.8l-11.9,10.6l-9.1-11.9    l-17.9-7.8l-24.9-8.9l-8.4-10.1V267l-3.4-0.4l0.1-9.6h-3.8l0.5-11.1l21,0.2l-0.3-12.2l-9.2-0.5l-0.2-23.3l17.6,0.2l0.6-28.7    l-5.2-0.8l0.1-25.4h16.1l-3.5-6.3l6.1-3.7v-19.7h-13.4l0.4-23.7l6.1,0.1l0.2-23l-22.6-0.2L334,55.6l23-0.2l-0.2-20.3l-10.3-0.9    l0.1-6.5l-4.9-3.9l-0.8-1.5l-2.7,0.4l-0.8,3.4l-2.7-1.9h-3.8l-1.5,1.9h-4.2l-5.3-6.9l-4.2-3.1h-3.1v-10l-18.3-0.2l0.2,23L271.9,29    l0.1-9.9h-12.5v10.7h8.6l0.3,48.8v22.8l15.1-0.1v47.1l-7.7-0.1l-18.8,17l-0.1,6.3l-7.1-0.1l-14.2,13l-33.1-13.4l-10.6-0.1    l-0.2,19.5l-1.9,0.4l-4.2-4.2l-3.4-0.8l-18.7-3.2l-28.1,17l-37.3,25.2l3.7,4.3l1.8,9.6l6,8.5l1.4,16.5l5.2,13.4l16.7,15.1l7.1,2.7    l59-82l19.9,14.8l0.4-3.1l16.8,0.9l4.2,0.8l0.4,3.4l-3.5,7.6l1.1,1.3l11.6,0.3v33.5l1.1,0.5l1.5,5.8l12.9,10.4l1.1,4.2l9.1,6.2    l4.9,8.8l3,10.7h1.1l-0.4,1.5l4.1,10.7l1.5,0.8l0.4,1.9l3.4,5l2.6,9.6l4.5,7.3l4.9,3.9l11.3,19.6l4.5,5.4l7.6,3.9l-0.1,14.9    l3.8,3.5l-0.1,8l-0.8,1.9l3.4,7.3l4.5,4.2l4.9,13.8l2.6,10l14.9,4l3.4,4.6l3.1-0.7l15.6,9.7l6.5,1.6l8.8-1.5l3.4,1.9l6.1,0.1    l1.1,3.5l4.2,2l15.3-1l0.8-5l-0.4-1.1l-1.2,3.1l-1.1-1.2l-1.5,2.3l-0.3-4.2l1.9-1.5l-1.1-0.8l-1.9,0.7l-1.1-5.8l-1.9-0.8l-1.8-8.8    l-2.2-11.5l-2.2-11.1l-2.7-2.3l0.5-7.6l2.7-2.6l-0.7-2.7l2.7-3l-0.3-5.4l-4.2,1.1l-5.4-0.4l-3-2.3l2.3-1.1l-4.5-8.1l1.2-0.4    l5.3,8.5h1.5l-0.4-1.9h2.3l1.2-4.2h1.5l-0.4,4.2l-1.9,1.5l4.8-1.9l1-1.5l1.2-3.4l1.2-1.5l1.6-5l2-5.3l-0.7-2.7l-2.3,3l-1.1-0.4    l1.2-2.7l-1.9-2.7l0.8-4.2l6.1,0.1l4.6-2.6l-4.9-9.6l7.7-6.8l1.9,2.3l2.7-0.7l-0.7-4.6l3.1-0.7l-1.2,6.1l5.4-3.4l0.8-5l0.1-9.6    l3,3.9l0.4,3.1l1.5,1.2l10.4-6.4l-1.1-2.7l-3.8,1.1l-1.1-1.2l2.7-1.9l-2.3-2.7l-3.5,0.7l0.8-2.7l-1.1-5.4l8.4,3.5l0.4,2.3    l-1.2,2.3l3.8-2.3l-0.3-6.1l3.4,3.5l3.2-1.1l-0.6,4.6l1.1,1.2l18.1-10.6l2.3,1.2l-26.9,18.1l1.1,0.8l34.6-22.6L486.8,306.3z     M312.1,78.7l-21.8,0.2l-0.2-24.1l20.3-0.2l1.9,0.4L312.1,78.7z").attr({fill: 'none',stroke: '#CCEDEB',"stroke-width": '2',"stroke-linecap": 'square',"stroke-linejoin": 'round',"stroke-miterlimit": '10',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-opacity': '1'}).data('id', 'path_ft');
var path_fu = rsr.path("    M486.8,306.3l-0.7-3.8l1.2-1.9l-9.8-14.6l-0.4-3.1l-4.2-2.3l-15.9-17l-13.2,17.1l12.9,15.8l-4.2,4.6l-11.6,11.4l-1.9-2.7    l-11.7-15.4l2.4-11.8l2.3-1.9l-7.2-8.1l-13.6-15.4l-3.1,3l1.3,22.3l-7.8,12.5l3.6,5.7l-5.7,4.7l-0.3,3.8l-11.9,10.6l-9.1-11.9    l-17.9-7.8l-24.9-8.9l-8.4-10.1V267l-3.4-0.4l0.1-9.6h-3.8l0.5-11.1l21,0.2l-0.3-12.2l-9.2-0.5l-0.2-23.3l17.6,0.2l0.6-28.7    l-5.2-0.8l0.1-25.4h16.1l-3.5-6.3l6.1-3.7v-19.7h-13.4l0.4-23.7l6.1,0.1l0.2-23l-22.6-0.2L334,55.6l23-0.2l-0.2-20.3l-10.3-0.9    l0.1-6.5l-4.9-3.9l-0.8-1.5l-2.7,0.4l-0.8,3.4l-2.7-1.9h-3.8l-1.5,1.9h-4.2l-5.3-6.9l-4.2-3.1h-3.1v-10l-18.3-0.2l0.2,23L271.9,29    l0.1-9.9h-12.5v10.7h8.6l0.3,48.8v22.8l15.1-0.1v47.1l-7.7-0.1l-18.8,17l-0.1,6.3l-7.1-0.1l-14.2,13l-33.1-13.4l-10.6-0.1    l-0.2,19.5l-1.9,0.4l-4.2-4.2l-3.4-0.8l-18.7-3.2l-28.1,17l-37.3,25.2l3.7,4.3l1.8,9.6l6,8.5l1.4,16.5l5.2,13.4l16.7,15.1l7.1,2.7    l59-82l19.9,14.8l0.4-3.1l16.8,0.9l4.2,0.8l0.4,3.4l-3.5,7.6l1.1,1.3l11.6,0.3v33.5l1.1,0.5l1.5,5.8l12.9,10.4l1.1,4.2l9.1,6.2    l4.9,8.8l3,10.7h1.1l-0.4,1.5l4.1,10.7l1.5,0.8l0.4,1.9l3.4,5l2.6,9.6l4.5,7.3l4.9,3.9l11.3,19.6l4.5,5.4l7.6,3.9l-0.1,14.9    l3.8,3.5l-0.1,8l-0.8,1.9l3.4,7.3l4.5,4.2l4.9,13.8l2.6,10l14.9,4l3.4,4.6l3.1-0.7l15.6,9.7l6.5,1.6l8.8-1.5l3.4,1.9l6.1,0.1    l1.1,3.5l4.2,2l15.3-1l0.8-5l-0.4-1.1l-1.2,3.1l-1.1-1.2l-1.5,2.3l-0.3-4.2l1.9-1.5l-1.1-0.8l-1.9,0.7l-1.1-5.8l-1.9-0.8l-1.8-8.8    l-2.2-11.5l-2.2-11.1l-2.7-2.3l0.5-7.6l2.7-2.6l-0.7-2.7l2.7-3l-0.3-5.4l-4.2,1.1l-5.4-0.4l-3-2.3l2.3-1.1l-4.5-8.1l1.2-0.4    l5.3,8.5h1.5l-0.4-1.9h2.3l1.2-4.2h1.5l-0.4,4.2l-1.9,1.5l4.8-1.9l1-1.5l1.2-3.4l1.2-1.5l1.6-5l2-5.3l-0.7-2.7l-2.3,3l-1.1-0.4    l1.2-2.7l-1.9-2.7l0.8-4.2l6.1,0.1l4.6-2.6l-4.9-9.6l7.7-6.8l1.9,2.3l2.7-0.7l-0.7-4.6l3.1-0.7l-1.2,6.1l5.4-3.4l0.8-5l0.1-9.6    l3,3.9l0.4,3.1l1.5,1.2l10.4-6.4l-1.1-2.7l-3.8,1.1l-1.1-1.2l2.7-1.9l-2.3-2.7l-3.5,0.7l0.8-2.7l-1.1-5.4l8.4,3.5l0.4,2.3    l-1.2,2.3l3.8-2.3l-0.3-6.1l3.4,3.5l3.2-1.1l-0.6,4.6l1.1,1.2l18.1-10.6l2.3,1.2l-26.9,18.1l1.1,0.8l34.6-22.6L486.8,306.3z     M312.1,78.7l-21.8,0.2l-0.2-24.1l20.3-0.2l1.9,0.4L312.1,78.7z").attr({fill: 'none',stroke: '#C9C79D',"stroke-width": '3',"stroke-linecap": 'square',"stroke-linejoin": 'round',"stroke-miterlimit": '10',"stroke-dasharray": '0,5.5',parent: 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','stroke-opacity': '1'}).data('id', 'path_fu');
_x3C_Service_Territory_Boundary_x3E_.attr({'id': '_x3C_Service_Territory_Boundary_x3E_','parent': 'STATE_BORDERS_x2F_SERVICE_BOUNDARY','name': '_x3C_Service_Territory_Boundary_x3E_'});
var STATE_NAMES_x2F_CITIES = rsr.set();
var rect_fv = rsr.rect(270, 272.3, 113, 21.2).attr({x: '270',y: '272.3',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_fv');
var text_fw = rsr.text(0, 0, 'San Antonio').attr({fill: '#58595B',"font-family": 'HelveticaNeue',"font-size": '16',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 284.6442 283.6638").data('id', 'text_fw');
var rect_fx = rsr.rect(202.6, 180.3, 82.7, 21.2).attr({x: '202.6',y: '180.3',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_fx');
var text_fy = rsr.text(0, 0, 'San Angelo').attr({fill: '#58595B',"font-family": 'HelveticaNeue',"font-size": '16',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 197.2137 191.6441").data('id', 'text_fy');
var rect_fz = rsr.rect(232, 27, 82.7, 21.2).attr({x: '232',y: '27',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_fz');
var text_ga = rsr.text(0, 0, 'Vernon').attr({fill: '#58595B',"font-family": 'HelveticaNeue',"font-size": '16',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 265.1782 38.3389").data('id', 'text_ga');
var rect_gb = rsr.rect(224.3, 120.2, 82.7, 21.2).attr({x: '224.3',y: '120.2',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_gb');
var text_gc = rsr.text(0, 0, 'Abilene').attr({fill: '#58595B',"font-family": 'HelveticaNeue',"font-size": '16',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 254.7561 131.5299").data('id', 'text_gc');
var rect_gd = rsr.rect(62, 234.9, 82.7, 21.2).attr({x: '62',y: '234.9',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_gd');
var text_ge = rsr.text(0, 0, 'Alpine').attr({fill: '#58595B',"font-family": 'HelveticaNeue',"font-size": '16',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 100.5625 246.219").data('id', 'text_ge');
var rect_gf = rsr.rect(510.2, 251.7, 82.7, 21.2).attr({x: '510.2',y: '251.7',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_gf');
var text_gg = rsr.text(0, 0, 'Houston').attr({fill: '#58595B',"font-family": 'HelveticaNeue',"font-size": '16',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 510.1692 263.0975").data('id', 'text_gg');
var rect_gh = rsr.rect(430.8, 368.2, 106.6, 23.7).attr({x: '430.8',y: '368.2',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_gh');
var text_gi = rsr.text(0, 0, 'Corpus Christi').attr({fill: '#58595B',"font-family": 'HelveticaNeue',"font-size": '16',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 430.7834 379.5235").data('id', 'text_gi');
var rect_gj = rsr.rect(477.9, 340, 106.6, 23.7).attr({x: '477.9',y: '340',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_gj');
var text_gk = rsr.text(0, 0, 'Victoria').attr({fill: '#58595B',"font-family": 'HelveticaNeue',"font-size": '16',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 477.8723 351.3956").data('id', 'text_gk');
var rect_gl = rsr.rect(404.6, 226.7, 106.6, 23.7).attr({x: '404.6',y: '226.7',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_gl');
var text_gm = rsr.text(0, 0, 'Austin').attr({fill: '#58595B',"font-family": 'HelveticaNeue',"font-size": '16',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 404.5762 238.0934").data('id', 'text_gm');
var rect_gn = rsr.rect(313.8, 457.6, 60.1, 19.3).attr({x: '313.8',y: '457.6',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_gn');
var text_go = rsr.text(0, 0, 'McAllen').attr({fill: '#58595B',"font-family": 'HelveticaNeue',"font-size": '16',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 318.7253 468.969").data('id', 'text_go');
var rect_gp = rsr.rect(337.6, 382.2, 106.6, 23.7).attr({x: '337.6',y: '382.2',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_gp');
var text_gq = rsr.text(0, 0, 'Laredo').attr({fill: '#58595B',"font-family": 'HelveticaNeue',"font-size": '16',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 337.585 393.5983").data('id', 'text_gq');
STATE_NAMES_x2F_CITIES.attr({'id': 'STATE_NAMES_x2F_CITIES','name': 'STATE_NAMES_x2F_CITIES'});
var group_a = rsr.set();
var path_gr = rsr.path("M154.5,246.1c-2.5,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6S157,246.1,154.5,246.1z").attr({fill: '#58595B',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_gr');
var path_gs = rsr.path("M154.5,238.2c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3S152.7,238.2,154.5,238.2     M154.5,235.6c-3.3,0-5.9,2.6-5.9,5.9c0,3.3,2.6,5.9,5.9,5.9c3.3,0,5.9-2.6,5.9-5.9C160.4,238.2,157.8,235.6,154.5,235.6    L154.5,235.6z").attr({fill: '#998675',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_gs');
var path_gt = rsr.path("M154.5,238.2c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3S152.7,238.2,154.5,238.2     M154.5,236.2c-2.9,0-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3c2.9,0,5.3-2.4,5.3-5.3S157.4,236.2,154.5,236.2L154.5,236.2z").attr({fill: '#FFFFFF',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_gt');
group_a.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_a'});
var group_b = rsr.set();
var path_gu = rsr.path("M374.4,296.1c-2.5,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6S377,296.1,374.4,296.1z").attr({fill: '#58595B',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_gu');
var path_gv = rsr.path("M374.4,288.2c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3    C371.1,289.6,372.6,288.2,374.4,288.2 M374.4,285.6c-3.3,0-5.9,2.6-5.9,5.9s2.6,5.9,5.9,5.9s5.9-2.6,5.9-5.9    S377.7,285.6,374.4,285.6L374.4,285.6z").attr({fill: '#998675',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_gv');
var path_gw = rsr.path("M374.4,288.2c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3    C371.1,289.6,372.6,288.2,374.4,288.2 M374.4,286.2c-2.9,0-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3    S377.4,286.2,374.4,286.2L374.4,286.2z").attr({fill: '#FFFFFF',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_gw');
group_b.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_b'});
var group_c = rsr.set();
var path_gx = rsr.path("M407.4,253.2c-2.5,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6S410,253.2,407.4,253.2z").attr({fill: '#58595B',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_gx');
var path_gy = rsr.path("M407.4,245.3c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3S405.6,245.3,407.4,245.3     M407.4,242.7c-3.3,0-5.9,2.6-5.9,5.9s2.6,5.9,5.9,5.9s5.9-2.6,5.9-5.9S410.7,242.7,407.4,242.7L407.4,242.7z").attr({fill: '#998675',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_gy');
var path_gz = rsr.path("M407.4,245.3c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3S405.6,245.3,407.4,245.3     M407.4,243.3c-2.9,0-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3S410.3,243.3,407.4,243.3L407.4,243.3z").attr({fill: '#FFFFFF',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_gz');
group_c.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_c'});
var group_d = rsr.set();
var path_ha = rsr.path("M439.1,330.8c-2.5,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6S441.6,330.8,439.1,330.8z").attr({fill: '#58595B',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ha');
var path_hb = rsr.path("M439.1,322.9c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3    C435.8,324.3,437.3,322.9,439.1,322.9 M439.1,320.3c-3.3,0-5.9,2.6-5.9,5.9s2.6,5.9,5.9,5.9s5.9-2.6,5.9-5.9    S442.4,320.3,439.1,320.3L439.1,320.3z").attr({fill: '#998675',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hb');
var path_hc = rsr.path("M439.1,322.9c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3    C435.8,324.3,437.3,322.9,439.1,322.9 M439.1,320.9c-2.9,0-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3    S442,320.9,439.1,320.9L439.1,320.9z").attr({fill: '#FFFFFF',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hc');
group_d.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_d'});
var group_e = rsr.set();
var path_hd = rsr.path("M510.3,275.7c-2.5,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6S512.9,275.7,510.3,275.7z").attr({fill: '#58595B',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hd');
var path_he = rsr.path("M510.3,267.8c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3S508.5,267.8,510.3,267.8     M510.3,265.2c-3.3,0-5.9,2.6-5.9,5.9s2.6,5.9,5.9,5.9s5.9-2.6,5.9-5.9S513.6,265.2,510.3,265.2L510.3,265.2z").attr({fill: '#998675',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_he');
var path_hf = rsr.path("M510.3,267.8c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3S508.5,267.8,510.3,267.8     M510.3,265.8c-2.9,0-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3c2.9,0,5.3-2.4,5.3-5.3S513.3,265.8,510.3,265.8L510.3,265.8z").attr({fill: '#FFFFFF',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hf');
group_e.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_e'});
var group_f = rsr.set();
var path_hg = rsr.path("M421.7,378.1c-2.5,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6S424.2,378.1,421.7,378.1z").attr({fill: '#58595B',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hg');
var path_hh = rsr.path("M421.7,370.2c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3    C418.4,371.7,419.9,370.2,421.7,370.2 M421.7,367.6c-3.3,0-5.9,2.6-5.9,5.9s2.6,5.9,5.9,5.9s5.9-2.6,5.9-5.9    S424.9,367.6,421.7,367.6L421.7,367.6z").attr({fill: '#998675',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hh');
var path_hi = rsr.path("M421.7,370.2c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3    C418.4,371.7,419.9,370.2,421.7,370.2 M421.7,368.2c-2.9,0-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3    S424.6,368.2,421.7,368.2L421.7,368.2z").attr({fill: '#FFFFFF',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hi');
group_f.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_f'});
var group_g = rsr.set();
var path_hj = rsr.path("M384.3,468.7c-2.5,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6S386.8,468.7,384.3,468.7z").attr({fill: '#58595B',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hj');
var path_hk = rsr.path("M384.3,460.8c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3S382.4,460.8,384.3,460.8     M384.3,458.2c-3.3,0-5.9,2.6-5.9,5.9s2.6,5.9,5.9,5.9s5.9-2.6,5.9-5.9S387.5,458.2,384.3,458.2L384.3,458.2z").attr({fill: '#998675',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hk');
var path_hl = rsr.path("M384.3,460.8c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3S382.4,460.8,384.3,460.8     M384.3,458.8c-2.9,0-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3S387.2,458.8,384.3,458.8L384.3,458.8z").attr({fill: '#FFFFFF',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hl');
group_g.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_g'});
var group_h = rsr.set();
var path_hm = rsr.path("M328.5,393.2c-2.5,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6S331,393.2,328.5,393.2z").attr({fill: '#58595B',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hm');
var path_hn = rsr.path("M328.5,385.3c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3S326.7,385.3,328.5,385.3     M328.5,382.7c-3.3,0-5.9,2.6-5.9,5.9s2.6,5.9,5.9,5.9s5.9-2.6,5.9-5.9S331.7,382.7,328.5,382.7L328.5,382.7z").attr({fill: '#998675',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hn');
var path_ho = rsr.path("M328.5,385.3c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3S326.7,385.3,328.5,385.3     M328.5,383.3c-2.9,0-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3S331.4,383.3,328.5,383.3L328.5,383.3z").attr({fill: '#FFFFFF',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ho');
group_h.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_h'});
var group_i = rsr.set();
var path_hp = rsr.path("M288.3,191.9c-2.5,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6    C292.9,189.8,290.8,191.9,288.3,191.9z").attr({fill: '#58595B',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hp');
var path_hq = rsr.path("M288.3,184c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3S286.5,184,288.3,184 M288.3,181.4    c-3.3,0-5.9,2.6-5.9,5.9c0,3.3,2.6,5.9,5.9,5.9s5.9-2.6,5.9-5.9C294.2,184,291.6,181.4,288.3,181.4L288.3,181.4z").attr({fill: '#998675',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hq');
var path_hr = rsr.path("M288.3,184c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3S286.5,184,288.3,184 M288.3,182    c-2.9,0-5.3,2.4-5.3,5.3c0,2.9,2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3C293.6,184.4,291.2,182,288.3,182L288.3,182z").attr({fill: '#FFFFFF',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hr');
group_i.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_i'});
var group_j = rsr.set();
var path_hs = rsr.path("M317.4,132.6c-2.5,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6S320,132.6,317.4,132.6z").attr({fill: '#58595B',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hs');
var path_ht = rsr.path("M317.4,124.7c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3    C314.1,126.1,315.6,124.7,317.4,124.7 M317.4,122.1c-3.3,0-5.9,2.6-5.9,5.9s2.6,5.9,5.9,5.9s5.9-2.6,5.9-5.9    S320.7,122.1,317.4,122.1L317.4,122.1z").attr({fill: '#998675',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_ht');
var path_hu = rsr.path("M317.4,124.7c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3    C314.1,126.1,315.6,124.7,317.4,124.7 M317.4,122.7c-2.9,0-5.3,2.4-5.3,5.3c0,2.9,2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3    C322.7,125,320.4,122.7,317.4,122.7L317.4,122.7z").attr({fill: '#FFFFFF',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hu');
group_j.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_j'});
var group_k = rsr.set();
var path_hv = rsr.path("M324.2,39.2c-2.5,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6s4.6,2.1,4.6,4.6C328.8,37.2,326.7,39.2,324.2,39.2z").attr({fill: '#58595B',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hv');
var path_hw = rsr.path("M324.2,31.3c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3C320.9,32.8,322.4,31.3,324.2,31.3     M324.2,28.7c-3.3,0-5.9,2.6-5.9,5.9s2.6,5.9,5.9,5.9s5.9-2.6,5.9-5.9C330.1,31.4,327.5,28.7,324.2,28.7L324.2,28.7z").attr({fill: '#998675',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hw');
var path_hx = rsr.path("M324.2,31.3c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3C320.9,32.8,322.4,31.3,324.2,31.3     M324.2,29.3c-2.9,0-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3S327.1,29.3,324.2,29.3L324.2,29.3z").attr({fill: '#FFFFFF',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_hx');
group_k.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_k'});
var group_l = rsr.set();
var rect_hy = rsr.rect(391.1, 22.6, 101, 17.7).attr({x: '391.1',y: '22.6',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_hy');
var text_hz = rsr.text(0, 0, 'OKLAHOMA').attr({fill: '#BBB5AF',"font-family": 'ArialMT',"font-size": '16',"letter-spacing": '2',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 392.5851 33.9757").data('id', 'text_hz');
group_l.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_l'});
var group_m = rsr.set();
var rect_ia = rsr.rect(4.4, 107.3, 170, 28.6).attr({x: '4.4',y: '107.3',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_ia');
var text_ib = rsr.text(0, 0, 'NEW MEXICO').attr({fill: '#BBB5AF',"font-family": 'ArialMT',"font-size": '16',"letter-spacing": '2',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 33.9247 118.6183").data('id', 'text_ib');
group_m.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_m'});
var group_n = rsr.set();
var rect_ic = rsr.rect(81.9, 376.7, 170, 28.6).attr({x: '81.9',y: '376.7',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_ic');
var text_id = rsr.text(0, 0, 'MEXICO').attr({fill: '#BBB5AF',"font-family": 'ArialMT',"font-size": '16',"letter-spacing": '2',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 133.9211 388.0258").data('id', 'text_id');
group_n.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_n'});
var group_o = rsr.set();
var rect_ie = rsr.rect(578.9, 58.6, 105.2, 27.6).attr({x: '578.9',y: '58.6',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_ie');
var text_if = rsr.text(0, 0, 'ARKANSAS').attr({fill: '#BBB5AF',"font-family": 'ArialMT',"font-size": '16',"letter-spacing": '2',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 586.5929 69.9761").data('id', 'text_if');
group_o.attr({'parent': 'STATE_NAMES_x2F_CITIES','name': 'group_o'});
var group_p = rsr.set();
var rect_ig = rsr.rect(604.9, 224.8, 105.2, 27.6).attr({x: '604.9',y: '224.8',fill: 'none',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect_ig');
var text_ih = rsr.text(0, 0, 'LOUISIANA').attr({fill: '#BBB5AF',"font-family": 'ArialMT',"font-size": '16',"letter-spacing": '2',parent: 'STATE_NAMES_x2F_CITIES','stroke-width': '0','stroke-opacity': '1'}).transform("m1 0 0 1 610.5875 236.1295").data('id', 'text_ih');
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
    _x3C_Path_x3E_ 
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
);
_x3C_Mexico_Border_x3E_.push(
    path_fi ,
    path_fj 
);
_x3C_New_Mexico_Border_x3E_.push(
);
_x3C_Oklahoma_Arkansas_Border_x3E_.push(
);
_x3C_LOUISIANA_BORDER3_x3E_.push(
    path_fk ,
    path_fl 
);
_x3C_LOUISIANA_BORDER2_x3E_.push(
    path_fm ,
    path_fn 
);
_x3C_Louisiana_Arkansas_Border_x3E_.push(
    path_fo ,
    path_fp 
);
_x3C_Texas_State_Border_x3E__1_.push(
    path_fq ,
    path_fr 
);
_x3C_Service_Territory_Boundary_x3E_.push(
    path_fs ,
    path_ft ,
    path_fu 
);
STATE_NAMES_x2F_CITIES.push(
    rect_fv ,
    text_fw ,
    rect_fx ,
    text_fy ,
    rect_fz ,
    text_ga ,
    rect_gb ,
    text_gc ,
    rect_gd ,
    text_ge ,
    rect_gf ,
    text_gg ,
    rect_gh ,
    text_gi ,
    rect_gj ,
    text_gk ,
    rect_gl ,
    text_gm ,
    rect_gn ,
    text_go ,
    rect_gp ,
    text_gq 
);
group_a.push(
    path_gr ,
    path_gs ,
    path_gt 
);
group_b.push(
    path_gu ,
    path_gv ,
    path_gw 
);
group_c.push(
    path_gx ,
    path_gy ,
    path_gz 
);
group_d.push(
    path_ha ,
    path_hb ,
    path_hc 
);
group_e.push(
    path_hd ,
    path_he ,
    path_hf 
);
group_f.push(
    path_hg ,
    path_hh ,
    path_hi 
);
group_g.push(
    path_hj ,
    path_hk ,
    path_hl 
);
group_h.push(
    path_hm ,
    path_hn ,
    path_ho 
);
group_i.push(
    path_hp ,
    path_hq ,
    path_hr 
);
group_j.push(
    path_hs ,
    path_ht ,
    path_hu 
);
group_k.push(
    path_hv ,
    path_hw ,
    path_hx 
);
group_l.push(
    rect_hy ,
    text_hz 
);
group_m.push(
    rect_ia ,
    text_ib 
);
group_n.push(
    rect_ic ,
    text_id 
);
group_o.push(
    rect_ie ,
    text_if 
);
group_p.push(
    rect_ig ,
    text_ih 
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
    }

    return map;
});
