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
                "repairIssues": 0,
                "customersWithoutPower": 0,
                "totalCustomers": 0,
                "percentage": 0
            },
            {
                "countyName": "Boone Co., WV",
                "state": "WV",
                "operatingUnit": "AEP-AP",
                "repairIssues": 0,
                "customersWithoutPower": 0,
                "totalCustomers": 0,
                "percentage": 0
            }
        ],
        "states": [
            {
                "stateName": "TN",
                "customersWithoutPower": 0,
                "totalCustomers": 0,
                "percentage": 0
            },
            {
                "id": 1,
                "stateName": "WV",
                "customersWithoutPower": 0,
                "totalCustomers": 0,
                "percentage": 0
            }
        ],
        "grandTotalTitleText": "Grand Total&#58;",
        "customersWithoutPower": 0,
        "totalCustomers": 0,
        "percentage": 0,
    };

    return outageReportData;
});