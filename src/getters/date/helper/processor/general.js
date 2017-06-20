import {
  DATE,
  TIME,
  LOCAL,
} from '../../../../shared/regex';

import {
  // time constants
  DELAY_VALUES,
} from '../../../../shared/constants';


/**
 * for now func: just return suitable ts function
 * for ago and later.
 * find out what the right function for the requested general.
 *  note:
 * - computing  mili, sec, min, hr, day and week, all can be accurate.
 * - form months we have different numbers of days.
 * - for years the same, is it 365, or 366.
 *
 * @param {string} formats - options allowed.
 * @returns {object} - timeConstants or function-name
 **/
const general = (reqgeneral) => {
  let timeConstants = false;
  let expectedTSfunc = false;
  let dateUnit = false; // for ago and later
  // generals belong to all date options begin:
  if (reqgeneral.match(DATE.YEAR.FULL)) { // year  begins ****************************
    // timeConstants = DELAY_VALUES[7];
    expectedTSfunc = 'fullYear';
    dateUnit = 'y';
  } else if (reqgeneral.match(DATE.YEAR.SHORT)) {
    // timeConstants = DELAY_VALUES[7];
    expectedTSfunc = 'shortYaer';
    dateUnit = 'y';
  } else if (reqgeneral.match(DATE.MONTH.CHAR)) {  // month  begins *******************
    // timeConstants = DELAY_VALUES[6];
    expectedTSfunc = 'monthNum';
    dateUnit = 'm';
  } else if (reqgeneral.match(DATE.MONTH.SHORT)) {
    // timeConstants = DELAY_VALUES[6];
    expectedTSfunc = 'shortMonth';
    dateUnit = 'm';
  } else if (reqgeneral.match(DATE.MONTH.FULL)) {
    // timeConstants = DELAY_VALUES[6];
    expectedTSfunc = 'fullMonth';
    dateUnit = 'm';
  } else if (reqgeneral.match(DATE.WEEK.ALL)) {
    timeConstants = DELAY_VALUES[5];
    expectedTSfunc = 'weekNum';
  } else if (reqgeneral.match(DATE.DAY.CHAR)) { // day begins *************************
    timeConstants = DELAY_VALUES[4];
    expectedTSfunc = 'dayNum';
  } else if (reqgeneral.match(DATE.DAY.SHORT)) {
    timeConstants = DELAY_VALUES[4];
    expectedTSfunc = 'shortDay';
  } else if (reqgeneral.match(DATE.DAY.FULL)) {
    timeConstants = DELAY_VALUES[4];
    expectedTSfunc = 'fullDay';
  } else if (reqgeneral.match(TIME.HOUR.FULL_WITH_NUM24)) { // time  begins ********************
    timeConstants = DELAY_VALUES[3];
    expectedTSfunc = 'hour24';
  } else if (reqgeneral.match(TIME.HOUR.NUM_12)) {
    timeConstants = DELAY_VALUES[3];
    expectedTSfunc = 'hour12';
  } else if (reqgeneral.match(TIME.MINUTE)) {
    timeConstants = DELAY_VALUES[2];
    expectedTSfunc = 'minutes';
  } else if (reqgeneral.match(TIME.SECOND)) {
    timeConstants = DELAY_VALUES[1];
    expectedTSfunc = 'seconds';
  } else if (reqgeneral.match(LOCAL.TS)) { // timestamp *******************************
    expectedTSfunc = 'timeStamp';
  } else if (reqgeneral.match(LOCAL.LOCAL_DATE)) {
    expectedTSfunc = 'localDate';  // returns full local date only.
  } else if (reqgeneral.match(LOCAL.LOCAL_TIME)) {
    expectedTSfunc = 'localTime';  // returns full local time only.
  } else if (reqgeneral.match(LOCAL.LOCAL)) {
    expectedTSfunc = 'local';  // returns full local time and date by default.
  } else if (reqgeneral.match(LOCAL.UTC)) {
    expectedTSfunc = 'utc';
  }
  return {
    timeConstants,
    expectedTSfunc,
    dateUnit,
  };
};

export default general;
