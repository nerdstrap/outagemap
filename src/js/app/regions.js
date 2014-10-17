define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    var operatingCompanies = [
        {
            'id': 'aepohio',
            'fullName': 'AEP Ohio',
            'identifier': 'AEP-OH',
            'twitterProfile': 'aepohio',
            'facebookProfile': 'aepohio',
            'outageMapLink': 'http://aepohio.com/outages/?map=1'
        },
        {
            'id': 'aeptexas',
            'fullName': 'AEP Texas',
            'identifier': 'AEP-TX',
            'twitterProfile': 'aeptexas',
            'facebookProfile': 'aeptexas',
            'outageMapLink': 'http://aeptexas.com/outages/?map=1'
        },
        {
            'id': 'apco',
            'fullName': 'Appalachian Power',
            'identifier': 'AEP-AP',
            'twitterProfile': 'appalachianpowe',
            'facebookProfile': 'appalachianpower',
            'outageMapLink': 'http://apcopwr.com/outages/?map=1'
        },
        {
            'id': 'im',
            'fullName': 'Indiana Michigan Power',
            'identifier': 'AEP-I&M',
            'twitterProfile': 'in_mi_power',
            'facebookProfile': 'indianamichiganpower',
            'outageMapLink': 'http://iandmpwr.com/outages/?map=1'
        },
        {
            'id': 'kentucky',
            'fullName': 'Kentucky Power',
            'identifier': 'AEP-KYP',
            'twitterProfile': 'kentuckypower',
            'facebookProfile': 'kentuckypower',
            'outageMapLink': 'http://kypco.com/outages/?map=1'
        },
        {
            'id': 'pso',
            'fullName': 'Public Service Company of Oklahoma',
            'identifier': 'AEP-PSO',
            'twitterProfile': 'publicserviceco',
            'facebookProfile': 'psoklahoma',
            'outageMapLink': 'http://psoklahoma.com/outages/?map=1'
        },
        {
            'id': 'swepco',
            'fullName': 'Southwestern Electric Power Company',
            'identifier': 'AEP-SEP',
            'twitterProfile': 'swepconews',
            'facebookProfile': 'swepco',
            'outageMapLink': 'http://swepco.com/outages/?map=1'
        }
    ];

    var serviceCounties = [
          {
              "stateName": "AR",
              "countyId": "BENTON",
              "properCountyName": "Benton Co."
          },
          {
              "stateName": "AR",
              "countyId": "CARROLL",
              "properCountyName": "Carroll Co."
          },
          {
              "stateName": "AR",
              "countyId": "HEMPSTEAD",
              "properCountyName": "Hempstead Co."
          },
          {
              "stateName": "AR",
              "countyId": "HOWARD",
              "properCountyName": "Howard Co."
          },
          {
              "stateName": "AR",
              "countyId": "LITTLE RIVER",
              "properCountyName": "Little River Co."
          },
          {
              "stateName": "AR",
              "countyId": "LOGAN",
              "properCountyName": "Logan Co."
          },
          {
              "stateName": "AR",
              "countyId": "MILLER",
              "properCountyName": "Miller Co."
          },
          {
              "stateName": "AR",
              "countyId": "PIKE",
              "properCountyName": "Pike Co."
          },
          {
              "stateName": "AR",
              "countyId": "POLK",
              "properCountyName": "Polk Co."
          },
          {
              "stateName": "AR",
              "countyId": "SCOTT",
              "properCountyName": "Scott Co."
          },
          {
              "stateName": "AR",
              "countyId": "SEBASTIAN",
              "properCountyName": "Sebastian Co."
          },
          {
              "stateName": "AR",
              "countyId": "SEVIER",
              "properCountyName": "Sevier Co."
          },
          {
              "stateName": "AR",
              "countyId": "WASHINGTON",
              "properCountyName": "Washington Co."
          },
          {
              "stateName": "IN",
              "countyId": "ADAMS",
              "properCountyName": "Adams Co."
          },
          {
              "stateName": "IN",
              "countyId": "ALLEN",
              "properCountyName": "Allen Co."
          },
          {
              "stateName": "IN",
              "countyId": "BERRIEN",
              "properCountyName": "Berrien Co."
          },
          {
              "stateName": "IN",
              "countyId": "BLACKFORD",
              "properCountyName": "Blackford Co."
          },
          {
              "stateName": "IN",
              "countyId": "DEKALB",
              "properCountyName": "Dekalb Co."
          },
          {
              "stateName": "IN",
              "countyId": "DELAWARE",
              "properCountyName": "Delaware Co."
          },
          {
              "stateName": "IN",
              "countyId": "ELKHART",
              "properCountyName": "Elkhart Co."
          },
          {
              "stateName": "IN",
              "countyId": "GRANT",
              "properCountyName": "Grant Co."
          },
          {
              "stateName": "IN",
              "countyId": "HAMILTON",
              "properCountyName": "Hamilton Co."
          },
          {
              "stateName": "IN",
              "countyId": "HENRY",
              "properCountyName": "Henry Co."
          },
          {
              "stateName": "IN",
              "countyId": "HOWARD",
              "properCountyName": "Howard Co."
          },
          {
              "stateName": "IN",
              "countyId": "HUNTINGTON",
              "properCountyName": "Huntington Co."
          },
          {
              "stateName": "IN",
              "countyId": "JAY",
              "properCountyName": "Jay Co."
          },
          {
              "stateName": "IN",
              "countyId": "LAGRANGE",
              "properCountyName": "Lagrange Co."
          },
          {
              "stateName": "IN",
              "countyId": "LAPORTE",
              "properCountyName": "Laporte Co."
          },
          {
              "stateName": "IN",
              "countyId": "LAWRENCEBURG",
              "properCountyName": "Lawrenceburg Co."
          },
          {
              "stateName": "IN",
              "countyId": "MADISON",
              "properCountyName": "Madison Co."
          },
          {
              "stateName": "IN",
              "countyId": "MARSHALL",
              "properCountyName": "Marshall Co."
          },
          {
              "stateName": "IN",
              "countyId": "NOBLE",
              "properCountyName": "Noble Co."
          },
          {
              "stateName": "IN",
              "countyId": "RANDOLPH",
              "properCountyName": "Randolph Co."
          },
          {
              "stateName": "IN",
              "countyId": "ST.JOSEPH",
              "properCountyName": "St.Joseph Co."
          },
          {
              "stateName": "IN",
              "countyId": "STEUBEN",
              "properCountyName": "Steuben Co."
          },
          {
              "stateName": "IN",
              "countyId": "TIPTON",
              "properCountyName": "Tipton Co."
          },
          {
              "stateName": "IN",
              "countyId": "WABASH",
              "properCountyName": "Wabash Co."
          },
          {
              "stateName": "IN",
              "countyId": "WELLS",
              "properCountyName": "Wells Co."
          },
          {
              "stateName": "IN",
              "countyId": "WHITE",
              "properCountyName": "White Co."
          },
          {
              "stateName": "IN",
              "countyId": "WHITLEY",
              "properCountyName": "Whitley Co."
          },
          {
              "stateName": "KY",
              "countyId": "BOYD",
              "properCountyName": "Boyd Co."
          },
          {
              "stateName": "KY",
              "countyId": "BREATHITT",
              "properCountyName": "Breathitt Co."
          },
          {
              "stateName": "KY",
              "countyId": "CARTER",
              "properCountyName": "Carter Co."
          },
          {
              "stateName": "KY",
              "countyId": "CLAY",
              "properCountyName": "Clay Co."
          },
          {
              "stateName": "KY",
              "countyId": "ELLIOTT",
              "properCountyName": "Elliott Co."
          },
          {
              "stateName": "KY",
              "countyId": "FLOYD",
              "properCountyName": "Floyd Co."
          },
          {
              "stateName": "KY",
              "countyId": "GREENUP",
              "properCountyName": "Greenup Co."
          },
          {
              "stateName": "KY",
              "countyId": "JOHNSON",
              "properCountyName": "Johnson Co."
          },
          {
              "stateName": "KY",
              "countyId": "KNOTT",
              "properCountyName": "Knott Co."
          },
          {
              "stateName": "KY",
              "countyId": "LAWRENCE",
              "properCountyName": "Lawrence Co."
          },
          {
              "stateName": "KY",
              "countyId": "LESLIE",
              "properCountyName": "Leslie Co."
          },
          {
              "stateName": "KY",
              "countyId": "LETCHER",
              "properCountyName": "Letcher Co."
          },
          {
              "stateName": "KY",
              "countyId": "LEWIS",
              "properCountyName": "Lewis Co."
          },
          {
              "stateName": "KY",
              "countyId": "MAGOFFIN",
              "properCountyName": "Magoffin Co."
          },
          {
              "stateName": "KY",
              "countyId": "MARTIN",
              "properCountyName": "Martin Co."
          },
          {
              "stateName": "KY",
              "countyId": "MORGAN",
              "properCountyName": "Morgan Co."
          },
          {
              "stateName": "KY",
              "countyId": "OWSLEY",
              "properCountyName": "Owsley Co."
          },
          {
              "stateName": "KY",
              "countyId": "PERRY",
              "properCountyName": "Perry Co."
          },
          {
              "stateName": "KY",
              "countyId": "PIKE",
              "properCountyName": "Pike Co."
          },
          {
              "stateName": "KY",
              "countyId": "ROWAN",
              "properCountyName": "Rowan Co."
          },
          {
              "stateName": "LA",
              "countyId": "BIENVILLE",
              "properCountyName": "Bienville Par."
          },
          {
              "stateName": "LA",
              "countyId": "BOSSIER",
              "properCountyName": "Bossier Par."
          },
          {
              "stateName": "LA",
              "countyId": "CADDO",
              "properCountyName": "Caddo Par."
          },
          {
              "stateName": "LA",
              "countyId": "DESOTO",
              "properCountyName": "Desoto Par."
          },
          {
              "stateName": "LA",
              "countyId": "GRANT",
              "properCountyName": "Grant Par."
          },
          {
              "stateName": "LA",
              "countyId": "GRANT PARISH",
              "properCountyName": "Grant Par."
          },
          {
              "stateName": "LA",
              "countyId": "NATCHITOCHES",
              "properCountyName": "Natchitoches Par."
          },
          {
              "stateName": "LA",
              "countyId": "RAPIDES",
              "properCountyName": "Rapides Par."
          },
          {
              "stateName": "LA",
              "countyId": "RED RIVER",
              "properCountyName": "Red River Par."
          },
          {
              "stateName": "LA",
              "countyId": "SABINE",
              "properCountyName": "Sabine Par."
          },
          {
              "stateName": "LA",
              "countyId": "VERNON",
              "properCountyName": "Vernon Par."
          },
          {
              "stateName": "LA",
              "countyId": "WEBSTER",
              "properCountyName": "Webster Par."
          },
          {
              "stateName": "LA",
              "countyId": "WINN",
              "properCountyName": "Winn Par."
          },
          {
              "stateName": "MI",
              "countyId": "ALLEGAN",
              "properCountyName": "Allegan Co."
          },
          {
              "stateName": "MI",
              "countyId": "BERRIEN",
              "properCountyName": "Berrien Co."
          },
          {
              "stateName": "MI",
              "countyId": "CASS",
              "properCountyName": "Cass Co."
          },
          {
              "stateName": "MI",
              "countyId": "KALAMAZOO",
              "properCountyName": "Kalamazoo Co."
          },
          {
              "stateName": "MI",
              "countyId": "ST.JOSEPH",
              "properCountyName": "St.Joseph Co."
          },
          {
              "stateName": "MI",
              "countyId": "VANBUREN",
              "properCountyName": "Vanburen Co."
          },
          {
              "stateName": "OH",
              "countyId": "ADAMS",
              "properCountyName": "Adams Co."
          },
          {
              "stateName": "OH",
              "countyId": "ALLEN",
              "properCountyName": "Allen Co."
          },
          {
              "stateName": "OH",
              "countyId": "ASHLAND",
              "properCountyName": "Ashland Co."
          },
          {
              "stateName": "OH",
              "countyId": "ATHENS",
              "properCountyName": "Athens Co."
          },
          {
              "stateName": "OH",
              "countyId": "AUGLAIZE",
              "properCountyName": "Auglaize Co."
          },
          {
              "stateName": "OH",
              "countyId": "BELMONT",
              "properCountyName": "Belmont Co."
          },
          {
              "stateName": "OH",
              "countyId": "BROWN",
              "properCountyName": "Brown Co."
          },
          {
              "stateName": "OH",
              "countyId": "CARROLL",
              "properCountyName": "Carroll Co."
          },
          {
              "stateName": "OH",
              "countyId": "COLUMBIANA",
              "properCountyName": "Columbiana Co."
          },
          {
              "stateName": "OH",
              "countyId": "COSHOCTON",
              "properCountyName": "Coshocton Co."
          },
          {
              "stateName": "OH",
              "countyId": "CRAWFORD",
              "properCountyName": "Crawford Co."
          },
          {
              "stateName": "OH",
              "countyId": "DARKE",
              "properCountyName": "Darke Co."
          },
          {
              "stateName": "OH",
              "countyId": "DEFIANCE",
              "properCountyName": "Defiance Co."
          },
          {
              "stateName": "OH",
              "countyId": "DELAWARE",
              "properCountyName": "Delaware Co."
          },
          {
              "stateName": "OH",
              "countyId": "FAIRFIELD",
              "properCountyName": "Fairfield Co."
          },
          {
              "stateName": "OH",
              "countyId": "FAYETTE",
              "properCountyName": "Fayette Co."
          },
          {
              "stateName": "OH",
              "countyId": "FRANKLIN",
              "properCountyName": "Franklin Co."
          },
          {
              "stateName": "OH",
              "countyId": "GALLIA",
              "properCountyName": "Gallia Co."
          },
          {
              "stateName": "OH",
              "countyId": "GUERNSEY",
              "properCountyName": "Guernsey Co."
          },
          {
              "stateName": "OH",
              "countyId": "HANCOCK",
              "properCountyName": "Hancock Co."
          },
          {
              "stateName": "OH",
              "countyId": "HARDIN",
              "properCountyName": "Hardin Co."
          },
          {
              "stateName": "OH",
              "countyId": "HARRISON",
              "properCountyName": "Harrison Co."
          },
          {
              "stateName": "OH",
              "countyId": "HENRY",
              "properCountyName": "Henry Co."
          },
          {
              "stateName": "OH",
              "countyId": "HIGHLAND",
              "properCountyName": "Highland Co."
          },
          {
              "stateName": "OH",
              "countyId": "HOCKING",
              "properCountyName": "Hocking Co."
          },
          {
              "stateName": "OH",
              "countyId": "HOLMES",
              "properCountyName": "Holmes Co."
          },
          {
              "stateName": "OH",
              "countyId": "HURON",
              "properCountyName": "Huron Co."
          },
          {
              "stateName": "OH",
              "countyId": "JACKSON",
              "properCountyName": "Jackson Co."
          },
          {
              "stateName": "OH",
              "countyId": "JEFFERSON",
              "properCountyName": "Jefferson Co."
          },
          {
              "stateName": "OH",
              "countyId": "KNOX",
              "properCountyName": "Knox Co."
          },
          {
              "stateName": "OH",
              "countyId": "LAWRENCE",
              "properCountyName": "Lawrence Co."
          },
          {
              "stateName": "OH",
              "countyId": "LICKING",
              "properCountyName": "Licking Co."
          },
          {
              "stateName": "OH",
              "countyId": "LOGAN",
              "properCountyName": "Logan Co."
          },
          {
              "stateName": "OH",
              "countyId": "MADISON",
              "properCountyName": "Madison Co."
          },
          {
              "stateName": "OH",
              "countyId": "MARION",
              "properCountyName": "Marion Co."
          },
          {
              "stateName": "OH",
              "countyId": "MEIGS",
              "properCountyName": "Meigs Co."
          },
          {
              "stateName": "OH",
              "countyId": "MONROE",
              "properCountyName": "Monroe Co."
          },
          {
              "stateName": "OH",
              "countyId": "MORGAN",
              "properCountyName": "Morgan Co."
          },
          {
              "stateName": "OH",
              "countyId": "MORROW",
              "properCountyName": "Morrow Co."
          },
          {
              "stateName": "OH",
              "countyId": "MUSKINGUM",
              "properCountyName": "Muskingum Co."
          },
          {
              "stateName": "OH",
              "countyId": "NOBLE",
              "properCountyName": "Noble Co."
          },
          {
              "stateName": "OH",
              "countyId": "PAULDING",
              "properCountyName": "Paulding Co."
          },
          {
              "stateName": "OH",
              "countyId": "PERRY",
              "properCountyName": "Perry Co."
          },
          {
              "stateName": "OH",
              "countyId": "PICKAWAY",
              "properCountyName": "Pickaway Co."
          },
          {
              "stateName": "OH",
              "countyId": "PIKE",
              "properCountyName": "Pike Co."
          },
          {
              "stateName": "OH",
              "countyId": "PUTNAM",
              "properCountyName": "Putnam Co."
          },
          {
              "stateName": "OH",
              "countyId": "RICHLAND",
              "properCountyName": "Richland Co."
          },
          {
              "stateName": "OH",
              "countyId": "ROSS",
              "properCountyName": "Ross Co."
          },
          {
              "stateName": "OH",
              "countyId": "SANDUSKY",
              "properCountyName": "Sandusky Co."
          },
          {
              "stateName": "OH",
              "countyId": "SCIOTO",
              "properCountyName": "Scioto Co."
          },
          {
              "stateName": "OH",
              "countyId": "SENECA",
              "properCountyName": "Seneca Co."
          },
          {
              "stateName": "OH",
              "countyId": "STARK",
              "properCountyName": "Stark Co."
          },
          {
              "stateName": "OH",
              "countyId": "SUMMIT",
              "properCountyName": "Summit Co."
          },
          {
              "stateName": "OH",
              "countyId": "TUSCARAWAS",
              "properCountyName": "Tuscarawas Co."
          },
          {
              "stateName": "OH",
              "countyId": "UNION",
              "properCountyName": "Union Co."
          },
          {
              "stateName": "OH",
              "countyId": "VAN WERT",
              "properCountyName": "Van Wert Co."
          },
          {
              "stateName": "OH",
              "countyId": "VINTON",
              "properCountyName": "Vinton Co."
          },
          {
              "stateName": "OH",
              "countyId": "WASHINGTON",
              "properCountyName": "Washington Co."
          },
          {
              "stateName": "OH",
              "countyId": "WAYNE",
              "properCountyName": "Wayne Co."
          },
          {
              "stateName": "OH",
              "countyId": "WOOD",
              "properCountyName": "Wood Co."
          },
          {
              "stateName": "OH",
              "countyId": "WYANDOT",
              "properCountyName": "Wyandot Co."
          },
          {
              "stateName": "OK",
              "countyId": "ATOKA",
              "properCountyName": "Atoka Co."
          },
          {
              "stateName": "OK",
              "countyId": "BECKHAM",
              "properCountyName": "Beckham Co."
          },
          {
              "stateName": "OK",
              "countyId": "BLAINE",
              "properCountyName": "Blaine Co."
          },
          {
              "stateName": "OK",
              "countyId": "CADDO",
              "properCountyName": "Caddo Co."
          },
          {
              "stateName": "OK",
              "countyId": "CHOCTAW",
              "properCountyName": "Choctaw Co."
          },
          {
              "stateName": "OK",
              "countyId": "COAL",
              "properCountyName": "Coal Co."
          },
          {
              "stateName": "OK",
              "countyId": "COMANCHE",
              "properCountyName": "Comanche Co."
          },
          {
              "stateName": "OK",
              "countyId": "COTTON",
              "properCountyName": "Cotton Co."
          },
          {
              "stateName": "OK",
              "countyId": "CRAIG",
              "properCountyName": "Craig Co."
          },
          {
              "stateName": "OK",
              "countyId": "CREEK",
              "properCountyName": "Creek Co."
          },
          {
              "stateName": "OK",
              "countyId": "CUSTER",
              "properCountyName": "Custer Co."
          },
          {
              "stateName": "OK",
              "countyId": "DELAWARE",
              "properCountyName": "Delaware Co."
          },
          {
              "stateName": "OK",
              "countyId": "DEWEY",
              "properCountyName": "Dewey Co."
          },
          {
              "stateName": "OK",
              "countyId": "GRADY",
              "properCountyName": "Grady Co."
          },
          {
              "stateName": "OK",
              "countyId": "GREER",
              "properCountyName": "Greer Co."
          },
          {
              "stateName": "OK",
              "countyId": "HARMON",
              "properCountyName": "Harmon Co."
          },
          {
              "stateName": "OK",
              "countyId": "HASKELL",
              "properCountyName": "Haskell Co."
          },
          {
              "stateName": "OK",
              "countyId": "HUGHES",
              "properCountyName": "Hughes Co."
          },
          {
              "stateName": "OK",
              "countyId": "JACKSON",
              "properCountyName": "Jackson Co."
          },
          {
              "stateName": "OK",
              "countyId": "JEFFERSON",
              "properCountyName": "Jefferson Co."
          },
          {
              "stateName": "OK",
              "countyId": "JOHNSTON",
              "properCountyName": "Johnston Co."
          },
          {
              "stateName": "OK",
              "countyId": "KAY",
              "properCountyName": "Kay Co."
          },
          {
              "stateName": "OK",
              "countyId": "KIOWA",
              "properCountyName": "Kiowa Co."
          },
          {
              "stateName": "OK",
              "countyId": "LATIMER",
              "properCountyName": "Latimer Co."
          },
          {
              "stateName": "OK",
              "countyId": "LEFLORE",
              "properCountyName": "Leflore Co."
          },
          {
              "stateName": "OK",
              "countyId": "MAYES",
              "properCountyName": "Mayes Co."
          },
          {
              "stateName": "OK",
              "countyId": "MCCLAIN",
              "properCountyName": "Mcclain Co."
          },
          {
              "stateName": "OK",
              "countyId": "MCCURTAIN",
              "properCountyName": "Mccurtain Co."
          },
          {
              "stateName": "OK",
              "countyId": "MCINTOSH",
              "properCountyName": "Mcintosh Co."
          },
          {
              "stateName": "OK",
              "countyId": "NOWATA",
              "properCountyName": "Nowata Co."
          },
          {
              "stateName": "OK",
              "countyId": "OKFUSKEE",
              "properCountyName": "Okfuskee Co."
          },
          {
              "stateName": "OK",
              "countyId": "OKMULGEE",
              "properCountyName": "Okmulgee Co."
          },
          {
              "stateName": "OK",
              "countyId": "OSAGE",
              "properCountyName": "Osage Co."
          },
          {
              "stateName": "OK",
              "countyId": "OTTAWA",
              "properCountyName": "Ottawa Co."
          },
          {
              "stateName": "OK",
              "countyId": "PITTSBURG",
              "properCountyName": "Pittsburg Co."
          },
          {
              "stateName": "OK",
              "countyId": "PONOTOC",
              "properCountyName": "Ponotoc Co."
          },
          {
              "stateName": "OK",
              "countyId": "PUSHMATAHA",
              "properCountyName": "Pushmataha Co."
          },
          {
              "stateName": "OK",
              "countyId": "ROGER MILLS",
              "properCountyName": "Roger Mills Co."
          },
          {
              "stateName": "OK",
              "countyId": "ROGERS",
              "properCountyName": "Rogers Co."
          },
          {
              "stateName": "OK",
              "countyId": "STEPHENS",
              "properCountyName": "Stephens Co."
          },
          {
              "stateName": "OK",
              "countyId": "TILLMAN",
              "properCountyName": "Tillman Co."
          },
          {
              "stateName": "OK",
              "countyId": "TULSA",
              "properCountyName": "Tulsa Co."
          },
          {
              "stateName": "OK",
              "countyId": "WAGONER",
              "properCountyName": "Wagoner Co."
          },
          {
              "stateName": "OK",
              "countyId": "WASHINGTON",
              "properCountyName": "Washington Co."
          },
          {
              "stateName": "OK",
              "countyId": "WASHITA",
              "properCountyName": "Washita Co."
          },
          {
              "stateName": "TN",
              "countyId": "HAWKINS",
              "properCountyName": "Hawkins Co."
          },
          {
              "stateName": "TN",
              "countyId": "SULLIVAN",
              "properCountyName": "Sullivan Co."
          },
          {
              "stateName": "TN",
              "countyId": "WASHINGTON",
              "properCountyName": "Washington Co."
          },
          {
              "stateName": "TX",
              "countyId": "ARANSAS",
              "properCountyName": "Aransas Co."
          },
          {
              "stateName": "TX",
              "countyId": "ATASCOSA",
              "properCountyName": "Atascosa Co."
          },
          {
              "stateName": "TX",
              "countyId": "BEE",
              "properCountyName": "Bee Co."
          },
          {
              "stateName": "TX",
              "countyId": "BOWIE",
              "properCountyName": "Bowie Co."
          },
          {
              "stateName": "TX",
              "countyId": "BREWSTER",
              "properCountyName": "Brewster Co."
          },
          {
              "stateName": "TX",
              "countyId": "BRISCOE",
              "properCountyName": "Briscoe Co."
          },
          {
              "stateName": "TX",
              "countyId": "BROOKS",
              "properCountyName": "Brooks Co."
          },
          {
              "stateName": "TX",
              "countyId": "BROWN",
              "properCountyName": "Brown Co."
          },
          {
              "stateName": "TX",
              "countyId": "CALDWELL",
              "properCountyName": "Caldwell Co."
          },
          {
              "stateName": "TX",
              "countyId": "CALHOUN",
              "properCountyName": "Calhoun Co."
          },
          {
              "stateName": "TX",
              "countyId": "CALLAHAN",
              "properCountyName": "Callahan Co."
          },
          {
              "stateName": "TX",
              "countyId": "CAMERON",
              "properCountyName": "Cameron Co."
          },
          {
              "stateName": "TX",
              "countyId": "CAMP",
              "properCountyName": "Camp Co."
          },
          {
              "stateName": "TX",
              "countyId": "CASS",
              "properCountyName": "Cass Co."
          },
          {
              "stateName": "TX",
              "countyId": "CHILDRESS",
              "properCountyName": "Childress Co."
          },
          {
              "stateName": "TX",
              "countyId": "COKE",
              "properCountyName": "Coke Co."
          },
          {
              "stateName": "TX",
              "countyId": "COLEMAN",
              "properCountyName": "Coleman Co."
          },
          {
              "stateName": "TX",
              "countyId": "COLLINGSWORTH",
              "properCountyName": "Collingsworth Co."
          },
          {
              "stateName": "TX",
              "countyId": "COLORADO",
              "properCountyName": "Colorado Co."
          },
          {
              "stateName": "TX",
              "countyId": "CONCHO",
              "properCountyName": "Concho Co."
          },
          {
              "stateName": "TX",
              "countyId": "COTTLE",
              "properCountyName": "Cottle Co."
          },
          {
              "stateName": "TX",
              "countyId": "CRANE",
              "properCountyName": "Crane Co."
          },
          {
              "stateName": "TX",
              "countyId": "CROCKETT",
              "properCountyName": "Crockett Co."
          },
          {
              "stateName": "TX",
              "countyId": "DEWITT",
              "properCountyName": "Dewitt Co."
          },
          {
              "stateName": "TX",
              "countyId": "DICKENS",
              "properCountyName": "Dickens Co."
          },
          {
              "stateName": "TX",
              "countyId": "DIMMIT",
              "properCountyName": "Dimmit Co."
          },
          {
              "stateName": "TX",
              "countyId": "DONLEY",
              "properCountyName": "Donley Co."
          },
          {
              "stateName": "TX",
              "countyId": "DUVAL",
              "properCountyName": "Duval Co."
          },
          {
              "stateName": "TX",
              "countyId": "EASTLAND",
              "properCountyName": "Eastland Co."
          },
          {
              "stateName": "TX",
              "countyId": "EDWARDS",
              "properCountyName": "Edwards Co."
          },
          {
              "stateName": "TX",
              "countyId": "FISHER",
              "properCountyName": "Fisher Co."
          },
          {
              "stateName": "TX",
              "countyId": "FOARD",
              "properCountyName": "Foard Co."
          },
          {
              "stateName": "TX",
              "countyId": "FRANKLIN",
              "properCountyName": "Franklin Co."
          },
          {
              "stateName": "TX",
              "countyId": "FRIO",
              "properCountyName": "Frio Co."
          },
          {
              "stateName": "TX",
              "countyId": "GOLIAD",
              "properCountyName": "Goliad Co."
          },
          {
              "stateName": "TX",
              "countyId": "GONZALES",
              "properCountyName": "Gonzales Co."
          },
          {
              "stateName": "TX",
              "countyId": "GREGG",
              "properCountyName": "Gregg Co."
          },
          {
              "stateName": "TX",
              "countyId": "GUADALUPE",
              "properCountyName": "Guadalupe Co."
          },
          {
              "stateName": "TX",
              "countyId": "HALL",
              "properCountyName": "Hall Co."
          },
          {
              "stateName": "TX",
              "countyId": "HARDEMAN",
              "properCountyName": "Hardeman Co."
          },
          {
              "stateName": "TX",
              "countyId": "HARRISON",
              "properCountyName": "Harrison Co."
          },
          {
              "stateName": "TX",
              "countyId": "HASKELL",
              "properCountyName": "Haskell Co."
          },
          {
              "stateName": "TX",
              "countyId": "HIDALGO",
              "properCountyName": "Hidalgo Co."
          },
          {
              "stateName": "TX",
              "countyId": "HOPKINS",
              "properCountyName": "Hopkins Co."
          },
          {
              "stateName": "TX",
              "countyId": "IRION",
              "properCountyName": "Irion Co."
          },
          {
              "stateName": "TX",
              "countyId": "JACKSON",
              "properCountyName": "Jackson Co."
          },
          {
              "stateName": "TX",
              "countyId": "JEFF DAVIS",
              "properCountyName": "Jeff Davis Co."
          },
          {
              "stateName": "TX",
              "countyId": "JIM HOGG",
              "properCountyName": "Jim Hogg Co."
          },
          {
              "stateName": "TX",
              "countyId": "JIM WELLS",
              "properCountyName": "Jim Wells Co."
          },
          {
              "stateName": "TX",
              "countyId": "JONES",
              "properCountyName": "Jones Co."
          },
          {
              "stateName": "TX",
              "countyId": "KARNES",
              "properCountyName": "Karnes Co."
          },
          {
              "stateName": "TX",
              "countyId": "KENEDY",
              "properCountyName": "Kenedy Co."
          },
          {
              "stateName": "TX",
              "countyId": "KENT",
              "properCountyName": "Kent Co."
          },
          {
              "stateName": "TX",
              "countyId": "KIMBLE",
              "properCountyName": "Kimble Co."
          },
          {
              "stateName": "TX",
              "countyId": "KINNEY",
              "properCountyName": "Kinney Co."
          },
          {
              "stateName": "TX",
              "countyId": "KLEBERG",
              "properCountyName": "Kleberg Co."
          },
          {
              "stateName": "TX",
              "countyId": "KNOX",
              "properCountyName": "Knox Co."
          },
          {
              "stateName": "TX",
              "countyId": "LA SALLE",
              "properCountyName": "La Salle Co."
          },
          {
              "stateName": "TX",
              "countyId": "LIVE OAK",
              "properCountyName": "Live Oak Co."
          },
          {
              "stateName": "TX",
              "countyId": "MARION",
              "properCountyName": "Marion Co."
          },
          {
              "stateName": "TX",
              "countyId": "MATAGORDA",
              "properCountyName": "Matagorda Co."
          },
          {
              "stateName": "TX",
              "countyId": "MAVERICK",
              "properCountyName": "Maverick Co."
          },
          {
              "stateName": "TX",
              "countyId": "MCCULLOCH",
              "properCountyName": "Mcculloch Co."
          },
          {
              "stateName": "TX",
              "countyId": "MCMULLEN",
              "properCountyName": "Mcmullen Co."
          },
          {
              "stateName": "TX",
              "countyId": "MEDINA",
              "properCountyName": "Medina Co."
          },
          {
              "stateName": "TX",
              "countyId": "MENARD",
              "properCountyName": "Menard Co."
          },
          {
              "stateName": "TX",
              "countyId": "MORRIS",
              "properCountyName": "Morris Co."
          },
          {
              "stateName": "TX",
              "countyId": "MOTLEY",
              "properCountyName": "Motley Co."
          },
          {
              "stateName": "TX",
              "countyId": "NOLAN",
              "properCountyName": "Nolan Co."
          },
          {
              "stateName": "TX",
              "countyId": "NUECES",
              "properCountyName": "Nueces Co."
          },
          {
              "stateName": "TX",
              "countyId": "PANOLA",
              "properCountyName": "Panola Co."
          },
          {
              "stateName": "TX",
              "countyId": "PECOS",
              "properCountyName": "Pecos Co."
          },
          {
              "stateName": "TX",
              "countyId": "PRESIDIO",
              "properCountyName": "Presidio Co."
          },
          {
              "stateName": "TX",
              "countyId": "RAINS",
              "properCountyName": "Rains Co."
          },
          {
              "stateName": "TX",
              "countyId": "REAGAN",
              "properCountyName": "Reagan Co."
          },
          {
              "stateName": "TX",
              "countyId": "REAL",
              "properCountyName": "Real Co."
          },
          {
              "stateName": "TX",
              "countyId": "RED RIVER",
              "properCountyName": "Red River Co."
          },
          {
              "stateName": "TX",
              "countyId": "REEVES",
              "properCountyName": "Reeves Co."
          },
          {
              "stateName": "TX",
              "countyId": "REFUGIO",
              "properCountyName": "Refugio Co."
          },
          {
              "stateName": "TX",
              "countyId": "RUNNELS",
              "properCountyName": "Runnels Co."
          },
          {
              "stateName": "TX",
              "countyId": "RUSK",
              "properCountyName": "Rusk Co."
          },
          {
              "stateName": "TX",
              "countyId": "SAN PATRICIO",
              "properCountyName": "San Patricio Co."
          },
          {
              "stateName": "TX",
              "countyId": "SCHLEICHER",
              "properCountyName": "Schleicher Co."
          },
          {
              "stateName": "TX",
              "countyId": "SHACKELFORD",
              "properCountyName": "Shackelford Co."
          },
          {
              "stateName": "TX",
              "countyId": "SHELBY",
              "properCountyName": "Shelby Co."
          },
          {
              "stateName": "TX",
              "countyId": "SMITH",
              "properCountyName": "Smith Co."
          },
          {
              "stateName": "TX",
              "countyId": "STARR",
              "properCountyName": "Starr Co."
          },
          {
              "stateName": "TX",
              "countyId": "STERLING",
              "properCountyName": "Sterling Co."
          },
          {
              "stateName": "TX",
              "countyId": "STONEWALL",
              "properCountyName": "Stonewall Co."
          },
          {
              "stateName": "TX",
              "countyId": "SUTTON",
              "properCountyName": "Sutton Co."
          },
          {
              "stateName": "TX",
              "countyId": "TAYLOR",
              "properCountyName": "Taylor Co."
          },
          {
              "stateName": "TX",
              "countyId": "THROCKMORTON",
              "properCountyName": "Throckmorton Co."
          },
          {
              "stateName": "TX",
              "countyId": "TITUS",
              "properCountyName": "Titus Co."
          },
          {
              "stateName": "TX",
              "countyId": "TOM GREEN",
              "properCountyName": "Tom Green Co."
          },
          {
              "stateName": "TX",
              "countyId": "UPSHUR",
              "properCountyName": "Upshur Co."
          },
          {
              "stateName": "TX",
              "countyId": "UPTON",
              "properCountyName": "Upton Co."
          },
          {
              "stateName": "TX",
              "countyId": "UVALDE",
              "properCountyName": "Uvalde Co."
          },
          {
              "stateName": "TX",
              "countyId": "VAL VERDE",
              "properCountyName": "Val Verde Co."
          },
          {
              "stateName": "TX",
              "countyId": "VAN ZANDT",
              "properCountyName": "Van Zandt Co."
          },
          {
              "stateName": "TX",
              "countyId": "VICTORIA",
              "properCountyName": "Victoria Co."
          },
          {
              "stateName": "TX",
              "countyId": "WEBB",
              "properCountyName": "Webb Co."
          },
          {
              "stateName": "TX",
              "countyId": "WHARTON",
              "properCountyName": "Wharton Co."
          },
          {
              "stateName": "TX",
              "countyId": "WHEELER",
              "properCountyName": "Wheeler Co."
          },
          {
              "stateName": "TX",
              "countyId": "WILBARGER",
              "properCountyName": "Wilbarger Co."
          },
          {
              "stateName": "TX",
              "countyId": "WILLACY",
              "properCountyName": "Willacy Co."
          },
          {
              "stateName": "TX",
              "countyId": "WILSON",
              "properCountyName": "Wilson Co."
          },
          {
              "stateName": "TX",
              "countyId": "WOOD",
              "properCountyName": "Wood Co."
          },
          {
              "stateName": "TX",
              "countyId": "ZAPATA",
              "properCountyName": "Zapata Co."
          },
          {
              "stateName": "TX",
              "countyId": "ZAVALA",
              "properCountyName": "Zavala Co."
          },
          {
              "stateName": "VA",
              "countyId": "ALBEMARLE",
              "properCountyName": "Albemarle Co."
          },
          {
              "stateName": "VA",
              "countyId": "AMHERST",
              "properCountyName": "Amherst Co."
          },
          {
              "stateName": "VA",
              "countyId": "APPOMATTOX",
              "properCountyName": "Appomattox Co."
          },
          {
              "stateName": "VA",
              "countyId": "BEDFORD",
              "properCountyName": "Bedford Co."
          },
          {
              "stateName": "VA",
              "countyId": "BLAND",
              "properCountyName": "Bland Co."
          },
          {
              "stateName": "VA",
              "countyId": "BOTETOURT",
              "properCountyName": "Botetourt Co."
          },
          {
              "stateName": "VA",
              "countyId": "BUCHANAN",
              "properCountyName": "Buchanan Co."
          },
          {
              "stateName": "VA",
              "countyId": "BUCKINGHAM",
              "properCountyName": "Buckingham Co."
          },
          {
              "stateName": "VA",
              "countyId": "CAMPBELL",
              "properCountyName": "Campbell Co."
          },
          {
              "stateName": "VA",
              "countyId": "CARROLL",
              "properCountyName": "Carroll Co."
          },
          {
              "stateName": "VA",
              "countyId": "CRAIG",
              "properCountyName": "Craig Co."
          },
          {
              "stateName": "VA",
              "countyId": "DANVILLE_CITY",
              "properCountyName": "Danville (Ind City)"
          },
          {
              "stateName": "VA",
              "countyId": "DICKENSON",
              "properCountyName": "Dickenson Co."
          },
          {
              "stateName": "VA",
              "countyId": "FLOYD",
              "properCountyName": "Floyd Co."
          },
          {
              "stateName": "VA",
              "countyId": "FLUVANNA",
              "properCountyName": "Fluvanna Co."
          },
          {
              "stateName": "VA",
              "countyId": "FRANKLIN",
              "properCountyName": "Franklin Co."
          },
          {
              "stateName": "VA",
              "countyId": "GALAX_CITY",
              "properCountyName": "Galax (Ind City)"
          },
          {
              "stateName": "VA",
              "countyId": "GILES",
              "properCountyName": "Giles Co."
          },
          {
              "stateName": "VA",
              "countyId": "GRAYSON",
              "properCountyName": "Grayson Co."
          },
          {
              "stateName": "VA",
              "countyId": "HENRY",
              "properCountyName": "Henry Co."
          },
          {
              "stateName": "VA",
              "countyId": "LYNCHBURG_CITY",
              "properCountyName": "Lynchburg (Ind City)"
          },
          {
              "stateName": "VA",
              "countyId": "MARTINSVILLE_CITY",
              "properCountyName": "Martinsville (Ind City)"
          },
          {
              "stateName": "VA",
              "countyId": "MONTGOMERY",
              "properCountyName": "Montgomery Co."
          },
          {
              "stateName": "VA",
              "countyId": "NELSON",
              "properCountyName": "Nelson Co."
          },
          {
              "stateName": "VA",
              "countyId": "PATRICK",
              "properCountyName": "Patrick Co."
          },
          {
              "stateName": "VA",
              "countyId": "PITTSYLVANIA",
              "properCountyName": "Pittsylvania Co."
          },
          {
              "stateName": "VA",
              "countyId": "PULASKI",
              "properCountyName": "Pulaski Co."
          },
          {
              "stateName": "VA",
              "countyId": "RADFORD_CITY",
              "properCountyName": "Radford (Ind City)"
          },
          {
              "stateName": "VA",
              "countyId": "ROANOKE",
              "properCountyName": "Roanoke Co."
          },
          {
              "stateName": "VA",
              "countyId": "ROANOKE_CITY",
              "properCountyName": "Roanoke (Ind City)"
          },
          {
              "stateName": "VA",
              "countyId": "RUSSELL",
              "properCountyName": "Russell Co."
          },
          {
              "stateName": "VA",
              "countyId": "SALEM_CITY",
              "properCountyName": "Salem (Ind City)"
          },
          {
              "stateName": "VA",
              "countyId": "SCOTT",
              "properCountyName": "Scott Co."
          },
          {
              "stateName": "VA",
              "countyId": "SMYTH",
              "properCountyName": "Smyth Co."
          },
          {
              "stateName": "VA",
              "countyId": "TAZEWELL",
              "properCountyName": "Tazewell Co."
          },
          {
              "stateName": "VA",
              "countyId": "WASHINGTON",
              "properCountyName": "Washington Co."
          },
          {
              "stateName": "VA",
              "countyId": "WISE",
              "properCountyName": "Wise Co."
          },
          {
              "stateName": "VA",
              "countyId": "WYTHE",
              "properCountyName": "Wythe Co."
          },
          {
              "stateName": "WV",
              "countyId": "BOONE",
              "properCountyName": "Boone Co."
          },
          {
              "stateName": "WV",
              "countyId": "BROOKE",
              "properCountyName": "Brooke Co."
          },
          {
              "stateName": "WV",
              "countyId": "CABELL",
              "properCountyName": "Cabell Co."
          },
          {
              "stateName": "WV",
              "countyId": "CLAY",
              "properCountyName": "Clay Co."
          },
          {
              "stateName": "WV",
              "countyId": "FAYETTE",
              "properCountyName": "Fayette Co."
          },
          {
              "stateName": "WV",
              "countyId": "GREENBRIER",
              "properCountyName": "Greenbrier Co."
          },
          {
              "stateName": "WV",
              "countyId": "JACKSON",
              "properCountyName": "Jackson Co."
          },
          {
              "stateName": "WV",
              "countyId": "KANAWHA",
              "properCountyName": "Kanawha Co."
          },
          {
              "stateName": "WV",
              "countyId": "LINCOLN",
              "properCountyName": "Lincoln Co."
          },
          {
              "stateName": "WV",
              "countyId": "LOGAN",
              "properCountyName": "Logan Co."
          },
          {
              "stateName": "WV",
              "countyId": "MARSHALL",
              "properCountyName": "Marshall Co."
          },
          {
              "stateName": "WV",
              "countyId": "MASON",
              "properCountyName": "Mason Co."
          },
          {
              "stateName": "WV",
              "countyId": "MCDOWELL",
              "properCountyName": "Mcdowell Co."
          },
          {
              "stateName": "WV",
              "countyId": "MERCER",
              "properCountyName": "Mercer Co."
          },
          {
              "stateName": "WV",
              "countyId": "MINGO",
              "properCountyName": "Mingo Co."
          },
          {
              "stateName": "WV",
              "countyId": "MONROE",
              "properCountyName": "Monroe Co."
          },
          {
              "stateName": "WV",
              "countyId": "NICHOLAS",
              "properCountyName": "Nicholas Co."
          },
          {
              "stateName": "WV",
              "countyId": "OHIO",
              "properCountyName": "Ohio Co."
          },
          {
              "stateName": "WV",
              "countyId": "PUTNAM",
              "properCountyName": "Putnam Co."
          },
          {
              "stateName": "WV",
              "countyId": "RALEIGH",
              "properCountyName": "Raleigh Co."
          },
          {
              "stateName": "WV",
              "countyId": "ROANE",
              "properCountyName": "Roane Co."
          },
          {
              "stateName": "WV",
              "countyId": "SUMMERS",
              "properCountyName": "Summers Co."
          },
          {
              "stateName": "WV",
              "countyId": "WAYNE",
              "properCountyName": "Wayne Co."
          },
          {
              "stateName": "WV",
              "countyId": "WETZEL",
              "properCountyName": "Wetzel Co."
          },
          {
              "stateName": "WV",
              "countyId": "WYOMING",
              "properCountyName": "Wyoming Co."
          }
    ];

    var defaultOperatingCompany = { 'id': '', 'fullName': '', 'identifier': '' };

    var defaultCounty = { 'stateName': '', 'countyId': '', 'properCountyName': '' };

    var regionHelper = {
        getOperatingCompanyById: function (id) {
            var result = _.find(operatingCompanies, function (operatingCompany) { return operatingCompany.id === id; });
            result = result || defaultOperatingCompany;
            return result;
        },
        getOperatingCompanyByIdentifier: function (identifier) {
            var result = _.find(operatingCompanies, function (operatingCompany) { return operatingCompany.identifier === identifier; });
            result = result || defaultOperatingCompany;
            return result;
        },

        getServiceCounties: function (stateName) {
            var results = _.filter(serviceCounties, function (county) { return county.stateName === stateName; });
            return results;
        },

        getServiceCounty: function (stateName, countyId) {
            var result = _.find(serviceCounties, function (county) { return county.stateName === stateName && county.countyId === countyId; });
            if (!result) {
                console.trace('serviceCounty for stateName /"' + stateName.toString() + '/" and countyId /"' + countyId.toString() + '/" not found!');
                result = defaultCounty;
            }
            return result;
        }
    };

    return regionHelper;

});