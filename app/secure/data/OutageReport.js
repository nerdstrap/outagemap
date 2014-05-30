define(function (require) {
    'use strict';

    var outageReportData = {
        "titleText": "Customer Outages",
        "countyNameTitleText": "County",
        "customersWithoutPowerTitleText": "Customers Without Power",
        "totalCustomersTitleText": "Total Customers",
        "percentageTitleText": "Percentage&#40;&#37;&#41;",
        "incidents": [
            {
                "id": 0,
                "countyName": "Sullivan Co., TN",
                "state": "TN",
                "operatingUnit": "AEP-AP",
                "repairIssues": 3,
                "customersWithoutPower": 300,
                "totalCustomers": 500,
                "percentage": 60
            },
            {
                "countyName": "Boone Co., WV",
                "state": "WV",
                "operatingUnit": "AEP-AP",
                "repairIssues": 1,
                "customersWithoutPower": 9000,
                "totalCustomers": 10000,
                "percentage": 90
            }
        ],
        "states": [
            {
                "stateName": "TN",
                "customersWithoutPower": 500000,
                "totalCustomers": 1500000,
                "percentage": 33
            },
            {
                "id": 1,
                "stateName": "WV",
                "customersWithoutPower": 12,
                "totalCustomers": 12,
                "percentage": 100
            }
        ],
        "grandTotalTitleText": "Grand Total&#58;",
        "customersWithoutPower": 10000000,
        "totalCustomers": 12000000,
        "percentage": 94,
    };

    return outageReportData;
});