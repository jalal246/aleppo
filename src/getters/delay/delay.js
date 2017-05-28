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
  NUM_HOUR,
  NUM_MINUTE,
  NUM_SECOND,
  NUM_MILISECOND,
  // time constants
  MILISECOND,
  SECOND,
  MINUTE,
  HOUR,
  DAY,
  WEEK,
  MONTH,
  YEAR,
  // func
  err,
} from '../../shared';


import { isValid } from '../../is';

// const err = (opt) => {
//   throw new Error(`Ops! Cannot recognize option format: ${opt}`);
// };

/**
 * Calculate time duration accourding to given time format.
 *
 * @param {val} integer. Number wanted for given value.
 * @param {options} char. Character, shortcuts => s : SECOND
                                                  m : MINUTE
                                                  h : HOUR
                                                  d : DAY
                                                  w:  WEEK
                                                  mo: MONTH
                                                  y : YEAR.
 */

const get = (val, reqFormat) => {
  // year
  if (reqFormat.match(LONG_YEAR) || reqFormat.match(SHORT_YEAR)) {
    return val * YEAR;
  }
  // month
  if (reqFormat.match(NUM_MONTH) || reqFormat.match(SHORT_MONTH) || reqFormat.match(LONG_MONTH)) {
    return val * MONTH;
  }
  // week
  if (reqFormat.match(NUM_WEEK) || reqFormat.match(SHORT_WEEK) || reqFormat.match(LONG_WEEK)) {
    return val * WEEK;
  }
  // day
  if (reqFormat.match(NUM_DAY) || reqFormat.match(SHORT_DAY) || reqFormat.match(LONG_DAY)) {
    return val * DAY;
  }
  // time
  if (reqFormat.match(NUM_HOUR)) {
    return val * HOUR;
  }
  if (reqFormat.match(NUM_MINUTE)) {
    return val * MINUTE;
  }
  if (reqFormat.match(NUM_SECOND)) {
    return val * SECOND;
  }
  if (reqFormat.match(NUM_MILISECOND)) {
    return val * MILISECOND;
  }
  return err(val);
};


const delay = (val) => {
  if (isValid(val)) {
    const valArray = val.split(/(\d+)/);
    const value = valArray[1];
    const opt = valArray[2];
    if (isValid(value, opt)) {
      return get(parseInt(value.trim(), 10), opt.trim().toLowerCase());
    }
    return err(val);
  }
  return err(val);
};

export default delay;
