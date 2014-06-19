﻿define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    var operatingCompanies = [
        {
            'id': 'aepohio',
            'fullName': 'AEP Ohio',
            'identifier': 'AEP-OH'
        },
        {
            'id': 'aeptexas',
            'fullName': 'AEP Texas',
            'identifier': 'AEP-TX'
        },
        {
            'id': 'apco',
            'fullName': 'Appalachian Power',
            'identifier': 'AEP-AP'
        },
        {
            'id': 'im',
            'fullName': 'Indiana Michigan Power',
            'identifier': 'AEP-I&M'
        },
        {
            'id': 'kentucky',
            'fullName': 'Kentucky Power',
            'identifier': 'AEP-KYP'
        },
        {
            'id': 'pso',
            'fullName': 'Public Service Company of Oklahoma',
            'identifier': 'AEP-PSO'
        },
        {
            'id': 'swepco',
            'fullName': 'Southwestern Electric Power Company',
            'identifier': 'AEP-SEP'
        }
    ];

    var serviceCounties = [{ 'stateName': 'AR', 'countyName': 'BENTON' }, { 'stateName': 'AR', 'countyName': 'CARROLL' }, { 'stateName': 'AR', 'countyName': 'HEMPSTEAD' }, { 'stateName': 'AR', 'countyName': 'HOWARD' }, { 'stateName': 'AR', 'countyName': 'LITTLE RIVER' }, { 'stateName': 'AR', 'countyName': 'LOGAN' }, { 'stateName': 'AR', 'countyName': 'MILLER' }, { 'stateName': 'AR', 'countyName': 'PIKE' }, { 'stateName': 'AR', 'countyName': 'POLK' }, { 'stateName': 'AR', 'countyName': 'SCOTT' }, { 'stateName': 'AR', 'countyName': 'SEBASTIAN' }, { 'stateName': 'AR', 'countyName': 'SEVIER' }, { 'stateName': 'AR', 'countyName': 'WASHINGTON' }, { 'stateName': 'IN', 'countyName': 'ADAMS' }, { 'stateName': 'IN', 'countyName': 'ALLEN' }, { 'stateName': 'IN', 'countyName': 'BERRIEN' }, { 'stateName': 'IN', 'countyName': 'BLACKFORD' }, { 'stateName': 'IN', 'countyName': 'DEKALB' }, { 'stateName': 'IN', 'countyName': 'DELAWARE' }, { 'stateName': 'IN', 'countyName': 'ELKHART' }, { 'stateName': 'IN', 'countyName': 'GRANT' }, { 'stateName': 'IN', 'countyName': 'HAMILTON' }, { 'stateName': 'IN', 'countyName': 'HENRY' }, { 'stateName': 'IN', 'countyName': 'HOWARD' }, { 'stateName': 'IN', 'countyName': 'HUNTINGTON' }, { 'stateName': 'IN', 'countyName': 'JAY' }, { 'stateName': 'IN', 'countyName': 'LAGRANGE' }, { 'stateName': 'IN', 'countyName': 'LAPORTE' }, { 'stateName': 'IN', 'countyName': 'LAWRENCEBURG' }, { 'stateName': 'IN', 'countyName': 'MADISON' }, { 'stateName': 'IN', 'countyName': 'MARSHALL' }, { 'stateName': 'IN', 'countyName': 'NOBLE' }, { 'stateName': 'IN', 'countyName': 'RANDOLPH' }, { 'stateName': 'IN', 'countyName': 'ST.JOSEPH' }, { 'stateName': 'IN', 'countyName': 'STEUBEN' }, { 'stateName': 'IN', 'countyName': 'TIPTON' }, { 'stateName': 'IN', 'countyName': 'WABASH' }, { 'stateName': 'IN', 'countyName': 'WELLS' }, { 'stateName': 'IN', 'countyName': 'WHITE' }, { 'stateName': 'IN', 'countyName': 'WHITLEY' }, { 'stateName': 'KY', 'countyName': 'BOYD' }, { 'stateName': 'KY', 'countyName': 'BREATHITT' }, { 'stateName': 'KY', 'countyName': 'CARTER' }, { 'stateName': 'KY', 'countyName': 'CLAY' }, { 'stateName': 'KY', 'countyName': 'ELLIOTT' }, { 'stateName': 'KY', 'countyName': 'FLOYD' }, { 'stateName': 'KY', 'countyName': 'GREENUP' }, { 'stateName': 'KY', 'countyName': 'JOHNSON' }, { 'stateName': 'KY', 'countyName': 'KNOTT' }, { 'stateName': 'KY', 'countyName': 'LAWRENCE' }, { 'stateName': 'KY', 'countyName': 'LESLIE' }, { 'stateName': 'KY', 'countyName': 'LETCHER' }, { 'stateName': 'KY', 'countyName': 'LEWIS' }, { 'stateName': 'KY', 'countyName': 'MAGOFFIN' }, { 'stateName': 'KY', 'countyName': 'MARTIN' }, { 'stateName': 'KY', 'countyName': 'MORGAN' }, { 'stateName': 'KY', 'countyName': 'OWSLEY' }, { 'stateName': 'KY', 'countyName': 'PERRY' }, { 'stateName': 'KY', 'countyName': 'PIKE' }, { 'stateName': 'KY', 'countyName': 'ROWAN' }, { 'stateName': 'LA', 'countyName': 'BIENVILLE' }, { 'stateName': 'LA', 'countyName': 'BOSSIER' }, { 'stateName': 'LA', 'countyName': 'CADDO' }, { 'stateName': 'LA', 'countyName': 'DESOTO' }, { 'stateName': 'LA', 'countyName': 'GRANT' }, { 'stateName': 'LA', 'countyName': 'GRANT PARISH' }, { 'stateName': 'LA', 'countyName': 'NATCHITOCHES' }, { 'stateName': 'LA', 'countyName': 'RAPIDES' }, { 'stateName': 'LA', 'countyName': 'RED RIVER' }, { 'stateName': 'LA', 'countyName': 'SABINE' }, { 'stateName': 'LA', 'countyName': 'VERNON' }, { 'stateName': 'LA', 'countyName': 'WEBSTER' }, { 'stateName': 'LA', 'countyName': 'WINN' }, { 'stateName': 'MI', 'countyName': 'ALLEGAN' }, { 'stateName': 'MI', 'countyName': 'BERRIEN' }, { 'stateName': 'MI', 'countyName': 'CASS' }, { 'stateName': 'MI', 'countyName': 'KALAMAZOO' }, { 'stateName': 'MI', 'countyName': 'ST.JOSEPH' }, { 'stateName': 'MI', 'countyName': 'VANBUREN' }, { 'stateName': 'OH', 'countyName': 'ADAMS' }, { 'stateName': 'OH', 'countyName': 'ALLEN' }, { 'stateName': 'OH', 'countyName': 'ASHLAND' }, { 'stateName': 'OH', 'countyName': 'ATHENS' }, { 'stateName': 'OH', 'countyName': 'AUGLAIZE' }, { 'stateName': 'OH', 'countyName': 'BELMONT' }, { 'stateName': 'OH', 'countyName': 'BROWN' }, { 'stateName': 'OH', 'countyName': 'CARROLL' }, { 'stateName': 'OH', 'countyName': 'COLUMBIANA' }, { 'stateName': 'OH', 'countyName': 'COSHOCTON' }, { 'stateName': 'OH', 'countyName': 'CRAWFORD' }, { 'stateName': 'OH', 'countyName': 'DARKE' }, { 'stateName': 'OH', 'countyName': 'DEFIANCE' }, { 'stateName': 'OH', 'countyName': 'DELAWARE' }, { 'stateName': 'OH', 'countyName': 'FAIRFIELD' }, { 'stateName': 'OH', 'countyName': 'FAYETTE' }, { 'stateName': 'OH', 'countyName': 'FRANKLIN' }, { 'stateName': 'OH', 'countyName': 'GALLIA' }, { 'stateName': 'OH', 'countyName': 'GUERNSEY' }, { 'stateName': 'OH', 'countyName': 'HANCOCK' }, { 'stateName': 'OH', 'countyName': 'HARDIN' }, { 'stateName': 'OH', 'countyName': 'HARRISON' }, { 'stateName': 'OH', 'countyName': 'HENRY' }, { 'stateName': 'OH', 'countyName': 'HIGHLAND' }, { 'stateName': 'OH', 'countyName': 'HOCKING' }, { 'stateName': 'OH', 'countyName': 'HOLMES' }, { 'stateName': 'OH', 'countyName': 'HURON' }, { 'stateName': 'OH', 'countyName': 'JACKSON' }, { 'stateName': 'OH', 'countyName': 'JEFFERSON' }, { 'stateName': 'OH', 'countyName': 'KNOX' }, { 'stateName': 'OH', 'countyName': 'LAWRENCE' }, { 'stateName': 'OH', 'countyName': 'LICKING' }, { 'stateName': 'OH', 'countyName': 'LOGAN' }, { 'stateName': 'OH', 'countyName': 'MADISON' }, { 'stateName': 'OH', 'countyName': 'MARION' }, { 'stateName': 'OH', 'countyName': 'MEIGS' }, { 'stateName': 'OH', 'countyName': 'MONROE' }, { 'stateName': 'OH', 'countyName': 'MORGAN' }, { 'stateName': 'OH', 'countyName': 'MORROW' }, { 'stateName': 'OH', 'countyName': 'MUSKINGUM' }, { 'stateName': 'OH', 'countyName': 'NOBLE' }, { 'stateName': 'OH', 'countyName': 'PAULDING' }, { 'stateName': 'OH', 'countyName': 'PERRY' }, { 'stateName': 'OH', 'countyName': 'PICKAWAY' }, { 'stateName': 'OH', 'countyName': 'PIKE' }, { 'stateName': 'OH', 'countyName': 'PUTNAM' }, { 'stateName': 'OH', 'countyName': 'RICHLAND' }, { 'stateName': 'OH', 'countyName': 'ROSS' }, { 'stateName': 'OH', 'countyName': 'SANDUSKY' }, { 'stateName': 'OH', 'countyName': 'SCIOTO' }, { 'stateName': 'OH', 'countyName': 'SENECA' }, { 'stateName': 'OH', 'countyName': 'STARK' }, { 'stateName': 'OH', 'countyName': 'SUMMIT' }, { 'stateName': 'OH', 'countyName': 'TUSCARAWAS' }, { 'stateName': 'OH', 'countyName': 'UNION' }, { 'stateName': 'OH', 'countyName': 'VAN WERT' }, { 'stateName': 'OH', 'countyName': 'VINTON' }, { 'stateName': 'OH', 'countyName': 'WASHINGTON' }, { 'stateName': 'OH', 'countyName': 'WAYNE' }, { 'stateName': 'OH', 'countyName': 'WOOD' }, { 'stateName': 'OH', 'countyName': 'WYANDOT' }, { 'stateName': 'OK', 'countyName': 'ATOKA' }, { 'stateName': 'OK', 'countyName': 'BECKHAM' }, { 'stateName': 'OK', 'countyName': 'BLAINE' }, { 'stateName': 'OK', 'countyName': 'CADDO' }, { 'stateName': 'OK', 'countyName': 'CHOCTAW' }, { 'stateName': 'OK', 'countyName': 'COAL' }, { 'stateName': 'OK', 'countyName': 'COMANCHE' }, { 'stateName': 'OK', 'countyName': 'COTTON' }, { 'stateName': 'OK', 'countyName': 'CRAIG' }, { 'stateName': 'OK', 'countyName': 'CREEK' }, { 'stateName': 'OK', 'countyName': 'CUSTER' }, { 'stateName': 'OK', 'countyName': 'DELAWARE' }, { 'stateName': 'OK', 'countyName': 'DEWEY' }, { 'stateName': 'OK', 'countyName': 'GRADY' }, { 'stateName': 'OK', 'countyName': 'GREER' }, { 'stateName': 'OK', 'countyName': 'HARMON' }, { 'stateName': 'OK', 'countyName': 'HASKELL' }, { 'stateName': 'OK', 'countyName': 'HUGHES' }, { 'stateName': 'OK', 'countyName': 'JACKSON' }, { 'stateName': 'OK', 'countyName': 'JEFFERSON' }, { 'stateName': 'OK', 'countyName': 'JOHNSTON' }, { 'stateName': 'OK', 'countyName': 'KAY' }, { 'stateName': 'OK', 'countyName': 'KIOWA' }, { 'stateName': 'OK', 'countyName': 'LATIMER' }, { 'stateName': 'OK', 'countyName': 'LEFLORE' }, { 'stateName': 'OK', 'countyName': 'MAYES' }, { 'stateName': 'OK', 'countyName': 'MCCLAIN' }, { 'stateName': 'OK', 'countyName': 'MCCURTAIN' }, { 'stateName': 'OK', 'countyName': 'MCINTOSH' }, { 'stateName': 'OK', 'countyName': 'NOWATA' }, { 'stateName': 'OK', 'countyName': 'OKFUSKEE' }, { 'stateName': 'OK', 'countyName': 'OKMULGEE' }, { 'stateName': 'OK', 'countyName': 'OSAGE' }, { 'stateName': 'OK', 'countyName': 'OTTAWA' }, { 'stateName': 'OK', 'countyName': 'PITTSBURG' }, { 'stateName': 'OK', 'countyName': 'PONOTOC' }, { 'stateName': 'OK', 'countyName': 'PUSHMATAHA' }, { 'stateName': 'OK', 'countyName': 'ROGER MILLS' }, { 'stateName': 'OK', 'countyName': 'ROGERS' }, { 'stateName': 'OK', 'countyName': 'STEPHENS' }, { 'stateName': 'OK', 'countyName': 'TILLMAN' }, { 'stateName': 'OK', 'countyName': 'TULSA' }, { 'stateName': 'OK', 'countyName': 'WAGONER' }, { 'stateName': 'OK', 'countyName': 'WASHINGTON' }, { 'stateName': 'OK', 'countyName': 'WASHITA' }, { 'stateName': 'TN', 'countyName': 'HAWKINS' }, { 'stateName': 'TN', 'countyName': 'SULLIVAN' }, { 'stateName': 'TN', 'countyName': 'WASHINGTON' }, { 'stateName': 'TX', 'countyName': 'ARANSAS' }, { 'stateName': 'TX', 'countyName': 'ATASCOSA' }, { 'stateName': 'TX', 'countyName': 'BEE' }, { 'stateName': 'TX', 'countyName': 'BOWIE' }, { 'stateName': 'TX', 'countyName': 'BREWSTER' }, { 'stateName': 'TX', 'countyName': 'BRISCOE' }, { 'stateName': 'TX', 'countyName': 'BROOKS' }, { 'stateName': 'TX', 'countyName': 'BROWN' }, { 'stateName': 'TX', 'countyName': 'CALDWELL' }, { 'stateName': 'TX', 'countyName': 'CALHOUN' }, { 'stateName': 'TX', 'countyName': 'CALLAHAN' }, { 'stateName': 'TX', 'countyName': 'CAMERON' }, { 'stateName': 'TX', 'countyName': 'CAMP' }, { 'stateName': 'TX', 'countyName': 'CASS' }, { 'stateName': 'TX', 'countyName': 'CHILDRESS' }, { 'stateName': 'TX', 'countyName': 'COKE' }, { 'stateName': 'TX', 'countyName': 'COLEMAN' }, { 'stateName': 'TX', 'countyName': 'COLLINGSWORTH' }, { 'stateName': 'TX', 'countyName': 'COLORADO' }, { 'stateName': 'TX', 'countyName': 'CONCHO' }, { 'stateName': 'TX', 'countyName': 'COTTLE' }, { 'stateName': 'TX', 'countyName': 'CRANE' }, { 'stateName': 'TX', 'countyName': 'CROCKETT' }, { 'stateName': 'TX', 'countyName': 'DEWITT' }, { 'stateName': 'TX', 'countyName': 'DICKENS' }, { 'stateName': 'TX', 'countyName': 'DIMMIT' }, { 'stateName': 'TX', 'countyName': 'DONLEY' }, { 'stateName': 'TX', 'countyName': 'DUVAL' }, { 'stateName': 'TX', 'countyName': 'EASTLAND' }, { 'stateName': 'TX', 'countyName': 'EDWARDS' }, { 'stateName': 'TX', 'countyName': 'FISHER' }, { 'stateName': 'TX', 'countyName': 'FOARD' }, { 'stateName': 'TX', 'countyName': 'FRANKLIN' }, { 'stateName': 'TX', 'countyName': 'FRIO' }, { 'stateName': 'TX', 'countyName': 'GOLIAD' }, { 'stateName': 'TX', 'countyName': 'GONZALES' }, { 'stateName': 'TX', 'countyName': 'GREGG' }, { 'stateName': 'TX', 'countyName': 'GUADALUPE' }, { 'stateName': 'TX', 'countyName': 'HALL' }, { 'stateName': 'TX', 'countyName': 'HARDEMAN' }, { 'stateName': 'TX', 'countyName': 'HARRISON' }, { 'stateName': 'TX', 'countyName': 'HASKELL' }, { 'stateName': 'TX', 'countyName': 'HIDALGO' }, { 'stateName': 'TX', 'countyName': 'HOPKINS' }, { 'stateName': 'TX', 'countyName': 'IRION' }, { 'stateName': 'TX', 'countyName': 'JACKSON' }, { 'stateName': 'TX', 'countyName': 'JEFF DAVIS' }, { 'stateName': 'TX', 'countyName': 'JIM HOGG' }, { 'stateName': 'TX', 'countyName': 'JIM WELLS' }, { 'stateName': 'TX', 'countyName': 'JONES' }, { 'stateName': 'TX', 'countyName': 'KARNES' }, { 'stateName': 'TX', 'countyName': 'KENEDY' }, { 'stateName': 'TX', 'countyName': 'KENT' }, { 'stateName': 'TX', 'countyName': 'KIMBLE' }, { 'stateName': 'TX', 'countyName': 'KINNEY' }, { 'stateName': 'TX', 'countyName': 'KLEBERG' }, { 'stateName': 'TX', 'countyName': 'KNOX' }, { 'stateName': 'TX', 'countyName': 'LA SALLE' }, { 'stateName': 'TX', 'countyName': 'LIVE OAK' }, { 'stateName': 'TX', 'countyName': 'MARION' }, { 'stateName': 'TX', 'countyName': 'MATAGORDA' }, { 'stateName': 'TX', 'countyName': 'MAVERICK' }, { 'stateName': 'TX', 'countyName': 'MCCULLOCH' }, { 'stateName': 'TX', 'countyName': 'MCMULLEN' }, { 'stateName': 'TX', 'countyName': 'MEDINA' }, { 'stateName': 'TX', 'countyName': 'MENARD' }, { 'stateName': 'TX', 'countyName': 'MORRIS' }, { 'stateName': 'TX', 'countyName': 'MOTLEY' }, { 'stateName': 'TX', 'countyName': 'NOLAN' }, { 'stateName': 'TX', 'countyName': 'NUECES' }, { 'stateName': 'TX', 'countyName': 'PANOLA' }, { 'stateName': 'TX', 'countyName': 'PECOS' }, { 'stateName': 'TX', 'countyName': 'PRESIDIO' }, { 'stateName': 'TX', 'countyName': 'RAINS' }, { 'stateName': 'TX', 'countyName': 'REAGAN' }, { 'stateName': 'TX', 'countyName': 'REAL' }, { 'stateName': 'TX', 'countyName': 'RED RIVER' }, { 'stateName': 'TX', 'countyName': 'REEVES' }, { 'stateName': 'TX', 'countyName': 'REFUGIO' }, { 'stateName': 'TX', 'countyName': 'RUNNELS' }, { 'stateName': 'TX', 'countyName': 'RUSK' }, { 'stateName': 'TX', 'countyName': 'SAN PATRICIO' }, { 'stateName': 'TX', 'countyName': 'SCHLEICHER' }, { 'stateName': 'TX', 'countyName': 'SHACKELFORD' }, { 'stateName': 'TX', 'countyName': 'SHELBY' }, { 'stateName': 'TX', 'countyName': 'SMITH' }, { 'stateName': 'TX', 'countyName': 'STARR' }, { 'stateName': 'TX', 'countyName': 'STERLING' }, { 'stateName': 'TX', 'countyName': 'STONEWALL' }, { 'stateName': 'TX', 'countyName': 'SUTTON' }, { 'stateName': 'TX', 'countyName': 'TAYLOR' }, { 'stateName': 'TX', 'countyName': 'THROCKMORTON' }, { 'stateName': 'TX', 'countyName': 'TITUS' }, { 'stateName': 'TX', 'countyName': 'TOM GREEN' }, { 'stateName': 'TX', 'countyName': 'UPSHUR' }, { 'stateName': 'TX', 'countyName': 'UPTON' }, { 'stateName': 'TX', 'countyName': 'UVALDE' }, { 'stateName': 'TX', 'countyName': 'VAL VERDE' }, { 'stateName': 'TX', 'countyName': 'VAN ZANDT' }, { 'stateName': 'TX', 'countyName': 'VICTORIA' }, { 'stateName': 'TX', 'countyName': 'WEBB' }, { 'stateName': 'TX', 'countyName': 'WHARTON' }, { 'stateName': 'TX', 'countyName': 'WHEELER' }, { 'stateName': 'TX', 'countyName': 'WILBARGER' }, { 'stateName': 'TX', 'countyName': 'WILLACY' }, { 'stateName': 'TX', 'countyName': 'WILSON' }, { 'stateName': 'TX', 'countyName': 'WOOD' }, { 'stateName': 'TX', 'countyName': 'ZAPATA' }, { 'stateName': 'TX', 'countyName': 'ZAVALA' }, { 'stateName': 'VA', 'countyName': 'ALBEMARLE' }, { 'stateName': 'VA', 'countyName': 'AMHERST' }, { 'stateName': 'VA', 'countyName': 'APPOMATTOX' }, { 'stateName': 'VA', 'countyName': 'BEDFORD' }, { 'stateName': 'VA', 'countyName': 'BLAND' }, { 'stateName': 'VA', 'countyName': 'BOTETOURT' }, { 'stateName': 'VA', 'countyName': 'BUCHANAN' }, { 'stateName': 'VA', 'countyName': 'BUCKINGHAM' }, { 'stateName': 'VA', 'countyName': 'CAMPBELL' }, { 'stateName': 'VA', 'countyName': 'CARROLL' }, { 'stateName': 'VA', 'countyName': 'CRAIG' }, { 'stateName': 'VA', 'countyName': 'DANVILLE (IND CITY)' }, { 'stateName': 'VA', 'countyName': 'DICKENSON' }, { 'stateName': 'VA', 'countyName': 'FLOYD' }, { 'stateName': 'VA', 'countyName': 'FLUVANNA' }, { 'stateName': 'VA', 'countyName': 'FRANKLIN' }, { 'stateName': 'VA', 'countyName': 'GALAX (IND CITY)' }, { 'stateName': 'VA', 'countyName': 'GILES' }, { 'stateName': 'VA', 'countyName': 'GRAYSON' }, { 'stateName': 'VA', 'countyName': 'HENRY' }, { 'stateName': 'VA', 'countyName': 'LYNCHBURG(IND CITY)' }, { 'stateName': 'VA', 'countyName': 'MARTINSVILLE-INDCITY' }, { 'stateName': 'VA', 'countyName': 'MONTGOMERY' }, { 'stateName': 'VA', 'countyName': 'NELSON' }, { 'stateName': 'VA', 'countyName': 'PATRICK' }, { 'stateName': 'VA', 'countyName': 'PITTSYLVANIA' }, { 'stateName': 'VA', 'countyName': 'PULASKI' }, { 'stateName': 'VA', 'countyName': 'RADFORD (IND CITY)' }, { 'stateName': 'VA', 'countyName': 'ROANOKE' }, { 'stateName': 'VA', 'countyName': 'ROANOKE (IND CITY)' }, { 'stateName': 'VA', 'countyName': 'RUSSELL' }, { 'stateName': 'VA', 'countyName': 'SALEM (IND CITY)' }, { 'stateName': 'VA', 'countyName': 'SCOTT' }, { 'stateName': 'VA', 'countyName': 'SMYTH' }, { 'stateName': 'VA', 'countyName': 'TAZEWELL' }, { 'stateName': 'VA', 'countyName': 'WASHINGTON' }, { 'stateName': 'VA', 'countyName': 'WISE' }, { 'stateName': 'VA', 'countyName': 'WYTHE' }, { 'stateName': 'WV', 'countyName': 'BOONE' }, { 'stateName': 'WV', 'countyName': 'BROOKE' }, { 'stateName': 'WV', 'countyName': 'CABELL' }, { 'stateName': 'WV', 'countyName': 'CLAY' }, { 'stateName': 'WV', 'countyName': 'FAYETTE' }, { 'stateName': 'WV', 'countyName': 'GREENBRIER' }, { 'stateName': 'WV', 'countyName': 'JACKSON' }, { 'stateName': 'WV', 'countyName': 'KANAWHA' }, { 'stateName': 'WV', 'countyName': 'LINCOLN' }, { 'stateName': 'WV', 'countyName': 'LOGAN' }, { 'stateName': 'WV', 'countyName': 'MARSHALL' }, { 'stateName': 'WV', 'countyName': 'MASON' }, { 'stateName': 'WV', 'countyName': 'MCDOWELL' }, { 'stateName': 'WV', 'countyName': 'MERCER' }, { 'stateName': 'WV', 'countyName': 'MINGO' }, { 'stateName': 'WV', 'countyName': 'MONROE' }, { 'stateName': 'WV', 'countyName': 'NICHOLAS' }, { 'stateName': 'WV', 'countyName': 'OHIO' }, { 'stateName': 'WV', 'countyName': 'PUTNAM' }, { 'stateName': 'WV', 'countyName': 'RALEIGH' }, { 'stateName': 'WV', 'countyName': 'ROANE' }, { 'stateName': 'WV', 'countyName': 'SUMMERS' }, { 'stateName': 'WV', 'countyName': 'WAYNE' }, { 'stateName': 'WV', 'countyName': 'WETZEL' }, { 'stateName': 'WV', 'countyName': 'WYOMING' }];

    var defaultOperatingCompany = { 'id': '', 'fullName': '', 'identifier': '' };

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
        }
    };

    return regionHelper;

});