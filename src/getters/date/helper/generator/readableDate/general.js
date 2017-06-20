import {
  WEEKDAYS,
  WEEKDAYSABBR,
  MONTHS,
  MONTHSABBR,
  // MONTH_NUM,
} from '../../../../../shared/constants';
import countBtw from '../../../countBtw';

/**
 *
 * @param {date} timeStamp.
 */

// year
const fullYear = ts => new Date(ts).getFullYear();
const shortYaer = ts => parseInt(fullYear(ts).toString().slice(2), 10); // year as shortcut

// month
const monthNum = ts => new Date(ts).getMonth() + 1; // January is 0.
const shortMonth = ts => MONTHSABBR[monthNum(ts) - 1];
const fullMonth = ts => MONTHS[monthNum(ts) - 1];

const weekNum = ts => countBtw(
  'week',
  new Date(
    new Date().getFullYear(),
    0,
    1,
  ).getTime(),
  new Date(ts).getTime(),
).weeks;


// day
const dayNum = ts => new Date(ts).getDay();
const shortDay = ts => WEEKDAYSABBR[dayNum(ts)];
const fullDay = ts => WEEKDAYS[dayNum(ts)];

// time
const hour24 = ts => new Date(ts).getHours();

// credit : https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
const hour12 = (ts) => {
  let hours = new Date(ts).getHours();
  let minutes = new Date(ts).getMinutes();
  const amPM = hours >= 12 ? 'pm' : 'am';
  hours %= 12;
  hours = hours || 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${minutes} ${amPM}`;
};

const minutes = ts => new Date(ts).getMinutes();

const seconds = ts => new Date(ts).getSeconds();

// timeStamp
const timeStamp = ts => new Date(ts).getTime();

// returns only local time without date.
const localTime = ts =>
new Date(ts).toLocaleTimeString();

// returns only local time without date.
const localDate = ts =>
  new Date(ts).toLocaleDateString();

// return full local date.
const local = ts =>
  new Date(ts).toLocaleString();

const utc = ts => (new Date(ts)).toUTCString();


module.exports = {
  // year
  fullYear,
  shortYaer,
  // month
  monthNum,
  shortMonth,
  fullMonth,
  // week
  weekNum,
  // day
  dayNum,
  shortDay,
  fullDay,
  // time
  hour24,
  hour12,
  minutes,
  seconds,
  // timeStamp
  timeStamp,
  // local
  localTime,
  localDate,
  local,
  utc,
};
