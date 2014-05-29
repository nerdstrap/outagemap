﻿define(function (require) {
    'use strict';

    var resources = {
        "titleText": "Customer Outages",
        "timestamp": 1400700027465,
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
        "disclaimer": "NOTE&#58; This system uses outage information reported by our customers to create a computer projection of the total number of customers affected by an outage event. During fast&#45;changing situations &#8211; such as a major storm or similar event &#8211; the accuracy of this estimate can be affected by a large number of unusual situations that must be analyzed."
    };

    return resources;
});