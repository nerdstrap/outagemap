define(function (require) {
    'use strict';

    var sourceUrl = "http://aepohio.com/global/data/omsdata/OutageXML.aspx";

    var internalOutageReports = [
        {
            'timestamp': '2014-02-28T02:54:22.0000000-05:00',
            'operatingCompanies': [
              {
                  'companyName': 'AEP-OH',
                  'incidents': [
                      {
                          'countyName': 'FRANKLIN',
                          'customersAffected': '179',
                          'customersServed': '514027',
                          'percentage': '3'
                      },
                      {
                          'countyName': 'JACKSON',
                          'customersAffected': '72',
                          'customersServed': '9965',
                          'percentage': '2'
                      }
                    ],
                  'states': [
                    {
                        'stateName': 'OH',
                        'countiesServed': '61',
                        'customersAffected': '1465148',
                        'customersServed': '1465148',
                        'percentage': '100'
                    },
                    {
                        'stateName': 'WV',
                        'countiesServed': '4',
                        'customersAffected': '0',
                        'customersServed': '41716',
                        'percentage': '0'
                    }
                  ],
                  'customersAffected': '0',
                  'customersServed': '41716',
                  'percentage': '0'
              }
            ]            
        }
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