define(function (require) {
    'use strict';

    var dates = {
        padNumber: function (num, count, padCharacter) {
            if (typeof padCharacter === 'undefined') {
                padCharacter = '0';
            }
            var lenDiff = count - String(num).length;
            var padding = '';
            if (lenDiff > 0) {
                while (lenDiff--) {
                    padding += padCharacter;
                }
            }
            return padding + num;
        },
        dayOfYear: function (date) {
            var oneJan = new Date(date.getFullYear(), 0, 1);
            return Math.ceil((date - oneJan) / 86400000);
        },
        weekOfYear: function (date) {
            var oneJan = new Date(date.getFullYear(), 0, 1);
            return Math.ceil((((date - oneJan) / 86400000) + oneJan.getDay() + 1) / 7);
        },
        isoWeekOfYear: function (date) {
            var target = new Date(date.valueOf());
            var dayNr = (date.getDay() + 6) % 7;
            target.setDate(target.getDate() - dayNr + 3);
            var jan4 = new Date(target.getFullYear(), 0, 4);

            var dayDiff = (target - jan4) / 86400000;
            return 1 + Math.ceil(dayDiff / 7);
        },
        twelveHour: function (date) {
            if (date.getHours() > 12) {
                return date.getHours() - 12;
            } else {
                return date.getHours();
            }
        },
        timeZoneOffset: function (date) {
            var hoursDiff = -date.getTimezoneOffset() / 60;
            var result = dates.padNumber(Math.abs(hoursDiff), 4);
            return (hoursDiff > 0 ? '+' : '-') + result;
        },
        format: function (date, format) {
            var match = null;
            return format.replace(dates.formats, function (m, p) {
                switch (p) {
                    case 'a':
                        return dates.abbreviatedWeekdays[date.getDay()];
                    case 'A':
                        return dates.fullWeekdays[date.getDay()];
                    case 'b':
                        return dates.abbreviatedMonths[date.getMonth()];
                    case 'B':
                        return dates.fullMonths[date.getMonth()];
                    case 'c':
                        return date.toLocaleString();
                    case 'C':
                        return Math.round(date.getFullYear() / 100);
                    case 'd':
                        return dates.padNumber(date.getDate(), 2);
                    case 'D':
                        return dates.format(date, '%m/%d/%y');
                    case 'e':
                        return dates.padNumber(date.getDate(), 2, ' ');
                    case 'F':
                        return dates.format(date, '%Y-%m-%d');
                    case 'h':
                        return dates.format(date, '%b');
                    case 'H':
                        return dates.padNumber(date.getHours(), 2);
                    case 'I':
                        return dates.padNumber(dates.twelveHour(date), 2);
                    case 'j':
                        return dates.padNumber(dates.dayOfYear(date), 3);
                    case 'k':
                        return dates.padNumber(date.getHours(), 2, ' ');
                    case 'l':
                        return dates.padNumber(dates.twelveHour(date), 2, ' ');
                    case 'L':
                        return dates.padNumber(date.getMilliseconds(), 3);
                    case 'm':
                        return dates.padNumber(date.getMonth() + 1, 2);
                    case 'M':
                        return dates.padNumber(date.getMinutes(), 2);
                    case 'n':
                        return '\n';
                    case 'p':
                        if (date.getHours() > 11) {
                            return 'PM';
                        } else {
                            return 'AM';
                        }
                        break;
                    case 'P':
                        return dates.format(date, '%p').toLowerCase();
                    case 'r':
                        return dates.format(date, '%I:%M:%S %p');
                    case 'R':
                        return dates.format(date, '%H:%M');
                    case 's':
                        return date.getTime() / 1000;
                    case 'S':
                        return dates.padNumber(date.getSeconds(), 2);
                    case 't':
                        return '\t';
                    case 'T':
                        return dates.format(date, '%H:%M:%S');
                    case 'u':
                        if (date.getDay() === 0) {
                            return 7;
                        } else {
                            return date.getDay();
                        }
                        break;
                    case 'U':
                        return dates.padNumber(dates.weekOfYear(date), 2);
                    case 'v':
                        return dates.format(date, '%e-%b-%Y');
                    case 'V':
                        return dates.padNumber(dates.isoWeekOfYear(date), 2);
                    case 'W':
                        return dates.padNumber(dates.weekOfYear(date), 2);
                    case 'w':
                        return dates.padNumber(date.getDay(), 2);
                    case 'x':
                        return date.toLocaleDateString();
                    case 'X':
                        return date.toLocaleTimeString();
                    case 'y':
                        return String(date.getFullYear()).substring(2);
                    case 'Y':
                        return date.getFullYear();
                    case 'z':
                        return dates.timeZoneOffset(date);
                    default:
                        return match;
                }
            });
        },
        formats: /%(a|A|b|B|c|C|d|D|e|F|h|H|I|j|k|l|L|m|M|n|p|P|r|R|s|S|t|T|u|U|v|V|W|w|x|X|y|Y|z)/g,
        abbreviatedWeekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
        fullWeekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        abbreviatedMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        fullMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    };

    return dates;
});