define(function (require) {
    'use strict';

    var internalOutageReports = [
        {
            'outageReportId': '10001',
            'timestamp': '2014-02-28T02:54:22.0000000-05:00',
            'operatingCompanies': [
              {
                  'companyName': 'AEP-AP',
                  'states': [
                    {
                        'stateName': 'TN',
                        'countiesServed': '3',
                        'customersServed': '47567'
                    },
                    {
                        'stateName': 'VA',
                        'countiesServed': '38',
                        'customersServed': '528060',
                        'incidents': [
                          {
                              'countyName': 'BEDFORD',
                              'customersAffected': '6',
                              'customersServed': '26618',
                              'repairIssues': '1'
                          },
                          {
                              'countyName': 'CAMPBELL',
                              'customersAffected': '1',
                              'customersServed': '17588',
                              'repairIssues': '1'
                          },
                          {
                              'countyName': 'LYNCHBURG(IND CITY)',
                              'customersAffected': '45',
                              'customersServed': '36214',
                              'repairIssues': '1'
                          }
                        ]
                    },
                    {
                        'stateName': 'WV',
                        'countiesServed': '21',
                        'customersServed': '437694',
                        'incidents': [
                          {
                              'countyName': 'CABELL',
                              'customersAffected': '1',
                              'customersServed': '51903',
                              'repairIssues': '1'
                          },
                          {
                              'countyName': 'GREENBRIER',
                              'customersAffected': '10',
                              'customersServed': '5129',
                              'repairIssues': '1'
                          },
                          {
                              'countyName': 'MINGO',
                              'customersAffected': '1',
                              'customersServed': '14823',
                              'repairIssues': '1'
                          }
                        ]
                    }
                  ]
              },
              {
                  'companyName': 'AEP-I&M',
                  'states': [
                    {
                        'stateName': 'IN',
                        'countiesServed': '27',
                        'customersServed': '459311',
                        'incidents': [
                          {
                              'countyName': 'ALLEN',
                              'customersAffected': '558',
                              'customersServed': '144940',
                              'repairIssues': '2'
                          },
                          {
                              'countyName': 'ST.JOSEPH',
                              'customersAffected': '1',
                              'customersServed': '91970',
                              'repairIssues': '1'
                          }
                        ]
                    },
                    {
                        'stateName': 'MI',
                        'countiesServed': '6',
                        'customersServed': '128167',
                        'incidents': [
                          {
                              'countyName': 'CASS',
                              'customersAffected': '1',
                              'customersServed': '13269',
                              'repairIssues': '1'
                          }
                        ]
                    }
                  ]
              },
              {
                  'companyName': 'AEP-KYP',
                  'states': {
                      'stateName': 'KY',
                      'countiesServed': '20',
                      'customersServed': '172213',
                      'incidents': [
                        {
                            'countyName': 'MORGAN',
                            'customersAffected': '3',
                            'customersServed': '1136',
                            'repairIssues': '1'
                        },
                        {
                            'countyName': 'ROWAN',
                            'customersAffected': '115',
                            'customersServed': '1125',
                            'repairIssues': '1'
                        }
                      ]
                  }
              },
              {
                  'companyName': 'AEP-OH',
                  'states': [
                    {
                        'stateName': 'OH',
                        'countiesServed': '61',
                        'customersServed': '1465148',
                        'incidents': [
                          {
                              'countyName': 'FRANKLIN',
                              'customersAffected': '179',
                              'customersServed': '514027',
                              'repairIssues': '3'
                          },
                          {
                              'countyName': 'JACKSON',
                              'customersAffected': '72',
                              'customersServed': '9965',
                              'repairIssues': '2'
                          }
                        ]
                    },
                    {
                        'stateName': 'WV',
                        'countiesServed': '4',
                        'customersServed': '41716'
                    }
                  ]
              },
              {
                  'companyName': 'AEP-PSO',
                  'states': [
                    {
                        'stateName': 'OK',
                        'countiesServed': '45',
                        'customersServed': '540562'
                    }
                  ]
              },
              {
                  'ompanyName': 'AEP-SEP',
                  'states': [
                    {
                        'stateName': 'AR',
                        'countiesServed': '13',
                        'customersServed': '115921'
                    },
                    {
                        'stateName': 'LA',
                        'countiesServed': '13',
                        'customersServed': '230335'
                    },
                    {
                        'stateName': 'TX',
                        'countiesServed': '24',
                        'customersServed': '183900'
                    }
                  ]
              },
              {
                  'operatingCompanyName': 'AEP-TX',
                  'states': [
                    {
                        'stateName': 'TX',
                        'countiesServed': '87',
                        'customersServed': '1001259',
                        'incidents': [
                          {
                              'countyName': 'NUECES',
                              'customersAffected': '1',
                              'customersServed': '140188',
                              'repairIssues': '1'
                          }
                        ]
                    }
                  ]
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