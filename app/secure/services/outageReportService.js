define(function (require) {
    'use strict';

    var internalOutageReports = [
      {"NewDataSet":{"dataset":{"aspnetCLRVersion":"4.0.30319","timestamp":"2014-02-28T07:54:22.0000000-05:00"},"OperatingCo":[{"id":"AEP-AP","state":[{"abbr":"TN","counties_served":"3","customers_served":"47567"},{"abbr":"VA","counties_served":"38","customers_served":"528060","incident":[{"county":"BEDFORD","customers_affected":"6","customers_served":"26618","repair_issues":"1"},{"county":"CAMPBELL","customers_affected":"1","customers_served":"17588","repair_issues":"1"},{"county":"LYNCHBURG(IND CITY)","customers_affected":"45","customers_served":"36214","repair_issues":"1"}]},{"abbr":"WV","counties_served":"21","customers_served":"437694","incident":[{"county":"CABELL","customers_affected":"1","customers_served":"51903","repair_issues":"1"},{"county":"GREENBRIER","customers_affected":"10","customers_served":"5129","repair_issues":"1"},{"county":"MINGO","customers_affected":"1","customers_served":"14823","repair_issues":"1"}]}],"xmlns":""},{"id":"AEP-I&M","state":[{"abbr":"IN","counties_served":"27","customers_served":"459311","incident":[{"county":"ALLEN","customers_affected":"558","customers_served":"144940","repair_issues":"2"},{"county":"ST.JOSEPH","customers_affected":"1","customers_served":"91970","repair_issues":"1"}]},{"abbr":"MI","counties_served":"6","customers_served":"128167","incident":{"county":"CASS","customers_affected":"1","customers_served":"13269","repair_issues":"1"}}],"xmlns":""},{"id":"AEP-KYP","state":{"abbr":"KY","counties_served":"20","customers_served":"172213","incident":[{"county":"MORGAN","customers_affected":"3","customers_served":"1136","repair_issues":"1"},{"county":"ROWAN","customers_affected":"115","customers_served":"1125","repair_issues":"1"}]},"xmlns":""},{"id":"AEP-OH","state":[{"abbr":"OH","counties_served":"61","customers_served":"1465148","incident":[{"county":"FRANKLIN","customers_affected":"179","customers_served":"514027","repair_issues":"3"},{"county":"JACKSON","customers_affected":"2272","customers_served":"9965","repair_issues":"2"}]},{"abbr":"WV","counties_served":"4","customers_served":"41716"}],"xmlns":""},{"id":"AEP-PSO","state":{"abbr":"OK","counties_served":"45","customers_served":"540562"},"xmlns":""},{"id":"AEP-SEP","state":[{"abbr":"AR","counties_served":"13","customers_served":"115921"},{"abbr":"LA","counties_served":"13","customers_served":"230335"},{"abbr":"TX","counties_served":"24","customers_served":"183900"}],"xmlns":""},{"id":"AEP-TX","state":{"abbr":"TX","counties_served":"87","customers_served":"1001259","incident":{"county":"NUECES","customers_affected":"1","customers_served":"140188","repair_issues":"1"}},"xmlns":""}],"xmlns":"http://tempuri.org/TERSData.xsd"}}
    ],

    internalGetCurrentOutageReport = function () {
        var deferred = $.Deferred(),
                results = internalOutageReports[0];
        deferred.resolve(results);
        return deferred.promise();
    },

    outageReportService = {
        getCurrentOutageReport: function () {
            return internalGetCurrentOutageReport();
        }
    };

    return outageReportService;

});