import {
  WEEKDAYS,
  WEEKDAYSABBR,
  MONTHS,
  MONTHSABBR,
  // MONTH_NUM,
} from '../../../../shared';
import { countWeeks } from '../../info';

/**
 *
 * @param {date} timeStamp.
 */

// year
const fullYear = date => date.getFullYear();
const shortYaer = date => parseInt(fullYear(date).toString().slice(2), 10); // year as shortcut

// month
const monthNum = date => date.getMonth() + 1; // January is 0.
const shortMonth = date => MONTHSABBR[monthNum(date) - 1];
const fullMonth = date => MONTHS[monthNum(date) - 1];

// week
const weekNum = date => countWeeks(date);

// day
const dayNum = date => date.getDay();
const shortDay = date => WEEKDAYSABBR[dayNum(date)];
const fullDay = date => WEEKDAYS[dayNum(date)];

// time
const hour24 = date => date.getHours();
// credit : https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
const hour12 = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const amPM = hours >= 12 ? 'pm' : 'am';
  hours %= 12;
  hours = hours || 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${minutes} ${amPM}`;
};
// const hour = date => date.getHours();
const minutes = date => date.getMinutes();
const seconds = date => date.getSeconds();

// timeStamp
const timeStamp = date => date.getTime();

// local
const localTime = date => date.toLocaleTimeString(); // returns only local time without date.
const localDate = date => date.toLocaleDateString(); // returns only local time without date.
const local = date => date.toLocaleString(); // return full local date.


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
};
