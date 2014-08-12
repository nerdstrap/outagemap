define(function (require) {
    'use strict';

    var internalOutageReports = [
      {
          "NewDataSet": {
              "dataset": {
                  "aspnetCLRVersion": "2.0.50727",
                  "timestamp": "2014-06-19T13:03:40.0000000-05:00"
              },
              "OperatingCo": [
                {
                    "id": "AEP-AP",
                    "disabled": "true",
                    "state": [
                      {
                          "abbr": "TN",
                          "counties_served": "3",
                          "customers_served": "47343"
                      },
                      {
                          "abbr": "VA",
                          "counties_served": "38",
                          "customers_served": "527088",
                          "incident": [
                            {
                                "county": "BEDFORD",
                                "customers_affected": "3",
                                "customers_served": "26826",
                                "repair_issues": "1"
                            },
                            {
                                "county": "BUCHANAN",
                                "customers_affected": "43",
                                "customers_served": "13123",
                                "repair_issues": "1"
                            },
                            {
                                "county": "DICKENSON",
                                "customers_affected": "1",
                                "customers_served": "8947",
                                "repair_issues": "1"
                            },
                            {
                                "county": "FLOYD",
                                "customers_affected": "7",
                                "customers_served": "9226",
                                "repair_issues": "2"
                            },
                            {
                                "county": "GILES",
                                "customers_affected": "4",
                                "customers_served": "9869",
                                "repair_issues": "3"
                            },
                            {
                                "county": "LYNCHBURG(IND CITY)",
                                "customers_affected": "6",
                                "customers_served": "36173",
                                "repair_issues": "1"
                            },
                            {
                                "county": "RUSSELL",
                                "customers_affected": "2",
                                "customers_served": "14217",
                                "repair_issues": "1"
                            },
                            {
                                "county": "TAZEWELL",
                                "customers_affected": "4",
                                "customers_served": "21653",
                                "repair_issues": "2"
                            }
                          ]
                      },
                      {
                          "abbr": "WV",
                          "counties_served": "21",
                          "customers_served": "435791",
                          "incident": [
                            {
                                "county": "BOONE",
                                "customers_affected": "504",
                                "customers_served": "12722",
                                "repair_issues": "7"
                            },
                            {
                                "county": "CABELL",
                                "customers_affected": "90",
                                "customers_served": "51606",
                                "repair_issues": "3"
                            },
                            {
                                "county": "FAYETTE",
                                "customers_affected": "19",
                                "customers_served": "24114",
                                "repair_issues": "5"
                            },
                            {
                                "county": "GREENBRIER",
                                "customers_affected": "3",
                                "customers_served": "5105",
                                "repair_issues": "1"
                            },
                            {
                                "county": "JACKSON",
                                "customers_affected": "1",
                                "customers_served": "14102",
                                "repair_issues": "1"
                            },
                            {
                                "county": "KANAWHA",
                                "customers_affected": "53",
                                "customers_served": "103728",
                                "repair_issues": "4"
                            },
                            {
                                "county": "LINCOLN",
                                "customers_affected": "1",
                                "customers_served": "12007",
                                "repair_issues": "1"
                            },
                            {
                                "county": "LOGAN",
                                "customers_affected": "1",
                                "customers_served": "18888",
                                "repair_issues": "1"
                            },
                            {
                                "county": "MASON",
                                "customers_affected": "2",
                                "customers_served": "14859",
                                "repair_issues": "2"
                            },
                            {
                                "county": "MCDOWELL",
                                "customers_affected": "0",
                                "customers_served": "12347",
                                "repair_issues": "1"
                            },
                            {
                                "county": "MERCER",
                                "customers_affected": "285",
                                "customers_served": "35204",
                                "repair_issues": "1"
                            },
                            {
                                "county": "MINGO",
                                "customers_affected": "50",
                                "customers_served": "14747",
                                "repair_issues": "2"
                            },
                            {
                                "county": "RALEIGH",
                                "customers_affected": "930",
                                "customers_served": "40382",
                                "repair_issues": "1"
                            },
                            {
                                "county": "ROANE",
                                "customers_affected": "38",
                                "customers_served": "2290",
                                "repair_issues": "2"
                            },
                            {
                                "county": "WAYNE",
                                "customers_affected": "268",
                                "customers_served": "23618",
                                "repair_issues": "6"
                            }
                          ]
                      }
                    ],
                    "xmlns": ""
                },
                {
                    "id": "AEP-I&M",
                    "disabled": "false",
                    "state": [
                      {
                          "abbr": "IN",
                          "counties_served": "27",
                          "customers_served": "458023",
                          "incident": [
                            {
                                "county": "ALLEN",
                                "customers_affected": "22",
                                "customers_served": "144577",
                                "repair_issues": "5"
                            },
                            {
                                "county": "DEKALB",
                                "customers_affected": "4",
                                "customers_served": "6103",
                                "repair_issues": "3"
                            },
                            {
                                "county": "DELAWARE",
                                "customers_affected": "300",
                                "customers_served": "54831",
                                "repair_issues": "9"
                            },
                            {
                                "county": "ELKHART",
                                "customers_affected": "58",
                                "customers_served": "48248",
                                "repair_issues": "12"
                            },
                            {
                                "county": "GRANT",
                                "customers_affected": "74",
                                "customers_served": "29866",
                                "repair_issues": "3"
                            },
                            {
                                "county": "JAY",
                                "customers_affected": "3",
                                "customers_served": "7314",
                                "repair_issues": "2"
                            },
                            {
                                "county": "LAPORTE",
                                "customers_affected": "1",
                                "customers_served": "6154",
                                "repair_issues": "1"
                            },
                            {
                                "county": "MADISON",
                                "customers_affected": "5",
                                "customers_served": "16869",
                                "repair_issues": "4"
                            },
                            {
                                "county": "NOBLE",
                                "customers_affected": "1",
                                "customers_served": "9463",
                                "repair_issues": "1"
                            },
                            {
                                "county": "RANDOLPH",
                                "customers_affected": "10",
                                "customers_served": "11064",
                                "repair_issues": "5"
                            },
                            {
                                "county": "ST.JOSEPH",
                                "customers_affected": "65",
                                "customers_served": "91802",
                                "repair_issues": "13"
                            }
                          ]
                      },
                      {
                          "abbr": "MI",
                          "counties_served": "6",
                          "customers_served": "128136",
                          "incident": [
                            {
                                "county": "BERRIEN",
                                "customers_affected": "4",
                                "customers_served": "79636",
                                "repair_issues": "2"
                            },
                            {
                                "county": "CASS",
                                "customers_affected": "7",
                                "customers_served": "13288",
                                "repair_issues": "1"
                            },
                            {
                                "county": "VANBUREN",
                                "customers_affected": "2",
                                "customers_served": "17961",
                                "repair_issues": "1"
                            }
                          ]
                      }
                    ],
                    "xmlns": ""
                },
                {
                    "id": "AEP-KYP",
                    "state": {
                        "abbr": "KY",
                        "counties_served": "20",
                        "customers_served": "170898",
                        "incident": [
                          {
                              "county": "GREENUP",
                              "customers_affected": "21",
                              "customers_served": "15145",
                              "repair_issues": "4"
                          },
                          {
                              "county": "JOHNSON",
                              "customers_affected": "7",
                              "customers_served": "7400",
                              "repair_issues": "1"
                          },
                          {
                              "county": "KNOTT",
                              "customers_affected": "1",
                              "customers_served": "8103",
                              "repair_issues": "1"
                          }
                        ]
                    },
                    "xmlns": ""
                },
                {
                    "id": "AEP-OH",
                    "state": [
                      {
                          "abbr": "OH",
                          "counties_served": "61",
                          "customers_served": "1462644",
                          "incident": [
                            {
                                "county": "ATHENS",
                                "customers_affected": "2",
                                "customers_served": "27441",
                                "repair_issues": "1"
                            },
                            {
                                "county": "CARROLL",
                                "customers_affected": "5",
                                "customers_served": "8333",
                                "repair_issues": "2"
                            },
                            {
                                "county": "COLUMBIANA",
                                "customers_affected": "10",
                                "customers_served": "16857",
                                "repair_issues": "2"
                            },
                            {
                                "county": "COSHOCTON",
                                "customers_affected": "674",
                                "customers_served": "12931",
                                "repair_issues": "15"
                            },
                            {
                                "county": "CRAWFORD",
                                "customers_affected": "1",
                                "customers_served": "11205",
                                "repair_issues": "1"
                            },
                            {
                                "county": "DARKE",
                                "customers_affected": "2",
                                "customers_served": "1276",
                                "repair_issues": "2"
                            },
                            {
                                "county": "DELAWARE",
                                "customers_affected": "81",
                                "customers_served": "62044",
                                "repair_issues": "3"
                            },
                            {
                                "county": "FAIRFIELD",
                                "customers_affected": "2",
                                "customers_served": "30666",
                                "repair_issues": "1"
                            },
                            {
                                "county": "FRANKLIN",
                                "customers_affected": "500",
                                "customers_served": "513697",
                                "repair_issues": "35"
                            },
                            {
                                "county": "GALLIA",
                                "customers_affected": "40",
                                "customers_served": "9862",
                                "repair_issues": "1"
                            },
                            {
                                "county": "GUERNSEY",
                                "customers_affected": "2",
                                "customers_served": "15397",
                                "repair_issues": "1"
                            },
                            {
                                "county": "HANCOCK",
                                "customers_affected": "5",
                                "customers_served": "29330",
                                "repair_issues": "1"
                            },
                            {
                                "county": "HARRISON",
                                "customers_affected": "2",
                                "customers_served": "7129",
                                "repair_issues": "2"
                            },
                            {
                                "county": "HOLMES",
                                "customers_affected": "2",
                                "customers_served": "6655",
                                "repair_issues": "1"
                            },
                            {
                                "county": "HURON",
                                "customers_affected": "2361",
                                "customers_served": "4334",
                                "repair_issues": "19"
                            },
                            {
                                "county": "JEFFERSON",
                                "customers_affected": "1",
                                "customers_served": "33699",
                                "repair_issues": "1"
                            },
                            {
                                "county": "LAWRENCE",
                                "customers_affected": "4",
                                "customers_served": "24737",
                                "repair_issues": "1"
                            },
                            {
                                "county": "LICKING",
                                "customers_affected": "273",
                                "customers_served": "62778",
                                "repair_issues": "12"
                            },
                            {
                                "county": "MEIGS",
                                "customers_affected": "11",
                                "customers_served": "11327",
                                "repair_issues": "2"
                            },
                            {
                                "county": "MUSKINGUM",
                                "customers_affected": "8",
                                "customers_served": "36575",
                                "repair_issues": "1"
                            },
                            {
                                "county": "PERRY",
                                "customers_affected": "4",
                                "customers_served": "12498",
                                "repair_issues": "3"
                            },
                            {
                                "county": "RICHLAND",
                                "customers_affected": "4",
                                "customers_served": "7278",
                                "repair_issues": "2"
                            },
                            {
                                "county": "SCIOTO",
                                "customers_affected": "28",
                                "customers_served": "36026",
                                "repair_issues": "1"
                            },
                            {
                                "county": "STARK",
                                "customers_affected": "234",
                                "customers_served": "101971",
                                "repair_issues": "6"
                            },
                            {
                                "county": "TUSCARAWAS",
                                "customers_affected": "1359",
                                "customers_served": "34408",
                                "repair_issues": "4"
                            },
                            {
                                "county": "WASHINGTON",
                                "customers_affected": "7",
                                "customers_served": "28080",
                                "repair_issues": "1"
                            }
                          ]
                      },
                      {
                          "abbr": "WV",
                          "counties_served": "4",
                          "customers_served": "41609"
                      }
                    ],
                    "xmlns": ""
                },
                {
                    "id": "AEP-PSO",
                    "state": {
                        "abbr": "OK",
                        "counties_served": "45",
                        "customers_served": "540455",
                        "incident": [
                          {
                              "county": "COMANCHE",
                              "customers_affected": "771",
                              "customers_served": "44707",
                              "repair_issues": "3"
                          },
                          {
                              "county": "GRADY",
                              "customers_affected": "6",
                              "customers_served": "15247",
                              "repair_issues": "1"
                          },
                          {
                              "county": "ROGERS",
                              "customers_affected": "2",
                              "customers_served": "11177",
                              "repair_issues": "2"
                          },
                          {
                              "county": "TULSA",
                              "customers_affected": "89",
                              "customers_served": "277098",
                              "repair_issues": "3"
                          }
                        ]
                    },
                    "xmlns": ""
                },
                {
                    "id": "AEP-SEP",
                    "disabled": "true",
                    "state": [
                      {
                          "abbr": "AR",
                          "counties_served": "13",
                          "customers_served": "115867"
                      },
                      {
                          "abbr": "LA",
                          "counties_served": "13",
                          "customers_served": "230867",
                          "incident": [
                            {
                                "county": "BOSSIER",
                                "customers_affected": "134",
                                "customers_served": "58815",
                                "repair_issues": "2"
                            },
                            {
                                "county": "CADDO",
                                "customers_affected": "9",
                                "customers_served": "122651",
                                "repair_issues": "4"
                            },
                            {
                                "county": "DESOTO",
                                "customers_affected": "3",
                                "customers_served": "9198",
                                "repair_issues": "1"
                            },
                            {
                                "county": "RED RIVER",
                                "customers_affected": "2",
                                "customers_served": "3335",
                                "repair_issues": "1"
                            },
                            {
                                "county": "SABINE",
                                "customers_affected": "3",
                                "customers_served": "10561",
                                "repair_issues": "1"
                            },
                            {
                                "county": "VERNON",
                                "customers_affected": "88",
                                "customers_served": "8363",
                                "repair_issues": "1"
                            }
                          ]
                      },
                      {
                          "abbr": "TX",
                          "counties_served": "24",
                          "customers_served": "183893",
                          "incident": [
                            {
                                "county": "COLLINGSWORTH",
                                "customers_affected": "2",
                                "customers_served": "1587",
                                "repair_issues": "2"
                            },
                            {
                                "county": "FRANKLIN",
                                "customers_affected": "1",
                                "customers_served": "4070",
                                "repair_issues": "1"
                            },
                            {
                                "county": "GREGG",
                                "customers_affected": "3",
                                "customers_served": "57749",
                                "repair_issues": "2"
                            },
                            {
                                "county": "PANOLA",
                                "customers_affected": "4",
                                "customers_served": "5757",
                                "repair_issues": "2"
                            },
                            {
                                "county": "RUSK",
                                "customers_affected": "1",
                                "customers_served": "13058",
                                "repair_issues": "1"
                            }
                          ]
                      }
                    ],
                    "xmlns": ""
                },
                {
                    "id": "AEP-TX",
                    "state": {
                        "abbr": "TX",
                        "counties_served": "87",
                        "customers_served": "1005029",
                        "incident": [
                          {
                              "county": "DUVAL",
                              "customers_affected": "1",
                              "customers_served": "6699",
                              "repair_issues": "1"
                          },
                          {
                              "county": "HIDALGO",
                              "customers_affected": "131",
                              "customers_served": "198848",
                              "repair_issues": "1"
                          },
                          {
                              "county": "JIM HOGG",
                              "customers_affected": "5",
                              "customers_served": "2799",
                              "repair_issues": "1"
                          },
                          {
                              "county": "MAVERICK",
                              "customers_affected": "23",
                              "customers_served": "19191",
                              "repair_issues": "1"
                          },
                          {
                              "county": "TAYLOR",
                              "customers_affected": "5",
                              "customers_served": "57501",
                              "repair_issues": "3"
                          },
                          {
                              "county": "WEBB",
                              "customers_affected": "7",
                              "customers_served": "85580",
                              "repair_issues": "2"
                          },
                          {
                              "county": "WILBARGER",
                              "customers_affected": "11",
                              "customers_served": "5571",
                              "repair_issues": "1"
                          }
                        ]
                    },
                    "xmlns": ""
                }
              ],
              "xmlns": "http://tempuri.org/TERSData.xsd"
          }
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