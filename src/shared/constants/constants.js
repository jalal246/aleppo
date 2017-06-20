const MILISECOND = 1;
const SECOND = 1 * 1000;
const MINUTE = 1000 * 60;
const HOUR = 3.6e+6;
const DAY = 8.64e+7;
const WEEK = 6.048e+8;
const MONTH = 2.628e+9;
const YEAR = 3.154e+10;

const MILISECOND_LABEL = 'milli';
const SECOND_LABEL = 'sec';
const MINUTE_LABEL = 'min';
const HOUR_LABEL = 'hr';
const DAY_LABEL = 'dy';
const WEEK_LABEL = 'wk';
const MONTH_LABEL = 'mo';
const YEAR_LABEL = 'yr';


export const DELAY_VALUES = [
  MILISECOND, // 0
  SECOND, // 1
  MINUTE, // 2
  HOUR, // 3
  DAY, // 4
  WEEK, // 5
  MONTH, // 6
  YEAR, //7
];

export const DELAY_LABELS = [
  MILISECOND_LABEL,
  SECOND_LABEL,
  MINUTE_LABEL,
  HOUR_LABEL,
  DAY_LABEL,
  WEEK_LABEL,
  MONTH_LABEL,
  YEAR_LABEL,
];


export const WEEKDAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const WEEKDAYSABBR = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
];

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const MONTHSABBR = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const MONTH_DAY_COUNT = [
  31,
  0, // February - 28 days in a common year and 29 days in leap years
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31,
];
