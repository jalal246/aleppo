import {
  LONG_YEAR,
  SHORT_YEAR,
  NUM_MONTH,
  SHORT_MONTH,
  LONG_MONTH,
  NUM_WEEK,
  SHORT_WEEK,
  LONG_WEEK,
  NUM_DAY,
  SHORT_DAY,
  LONG_DAY,
  NUM_HOUR24,
  NUM_HOUR12,
  NUM_MINUTE,
  NUM_SECOND,
  TS,
  LOCAL,
  LOCAL_DATE,
  LOCAL_TIME,
  // time constants
  // MILISECOND,
  SECOND,
  MINUTE,
  HOUR,
  DAY,
  WEEK,
  MONTH,
  YEAR,
} from '../../../shared';

import get from './get';

const general = get.general;

/**
 * find out what the right function for the requested format.
 * @param {string} reqFormat - options allowed.
 * @returns {timeConstants|generalfunc} - timeConstants, for later & ago. what will we calculat.
 *                                      - generalfunc matching the format.
 **/
const format = (reqFormat) => {
  let timeConstants = false;
  let generalfunc = false;
  // formats belong to all date options begin **********************************

  // year
  if (reqFormat.match(LONG_YEAR)) {
    timeConstants = YEAR;
    generalfunc = general.fullYear;
  }
  if (reqFormat.match(SHORT_YEAR)) {
    timeConstants = YEAR;
    generalfunc = general.shortYaer;
  }
  // month
  if (reqFormat.match(NUM_MONTH)) {
    timeConstants = MONTH;
    generalfunc = general.monthNum;
  }
  if (reqFormat.match(SHORT_MONTH)) {
    timeConstants = MONTH;
    generalfunc = general.shortMonth;
  }
  if (reqFormat.match(LONG_MONTH)) {
    timeConstants = MONTH;
    generalfunc = general.fullMonth;
  }
  // week
  if (reqFormat.match(NUM_WEEK) || reqFormat.match(SHORT_WEEK) || reqFormat.match(LONG_WEEK)) {
    timeConstants = WEEK;
    generalfunc = general.weekNum;
  }
  // day
  if (reqFormat.match(NUM_DAY)) {
    timeConstants = DAY;
    generalfunc = general.dayNum;
  }
  if (reqFormat.match(SHORT_DAY)) {
    timeConstants = DAY;
    generalfunc = general.shortDay;
  }
  if (reqFormat.match(LONG_DAY)) {
    timeConstants = DAY;
    generalfunc = general.fullDay;
  }
  // time
  if (reqFormat.match(NUM_HOUR24)) {
    timeConstants = HOUR;
    generalfunc = general.hour24;
  }
  if (reqFormat.match(NUM_HOUR12)) {
    timeConstants = HOUR;
    generalfunc = general.hour12;
  }
  if (reqFormat.match(NUM_MINUTE)) {
    timeConstants = MINUTE;
    generalfunc = general.minutes;
  }
  if (reqFormat.match(NUM_SECOND)) {
    timeConstants = SECOND;
    generalfunc = general.seconds;
  }
  // end

  // formats belong to only to now *********************************************

  // timeStamp
  if (reqFormat.match(TS)) {
    generalfunc = general.timeStamp;
  }
  if (reqFormat.match(LOCAL_DATE)) {
    generalfunc = general.localDate;  // returns full local date only.
  }
  if (reqFormat.match(LOCAL_TIME)) {
    generalfunc = general.localTime;  // returns full local time only.
  }
  if (reqFormat.match(LOCAL)) {
    generalfunc = general.local;  // returns full local time and date by default.
  }
  return {
    timeConstants,
    generalfunc,
  };
};

export default format;
