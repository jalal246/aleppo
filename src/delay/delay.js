import {
  DATE,
  TIME,
} from '../shared/regex';

import {
  DELAY_VALUES,
} from '../shared/constants';

import {
  err,
} from '../shared/funcs';

import {
  isValid,
} from '../is';

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
  if (reqFormat.match(DATE.YEAR.FULL) ||
    reqFormat.match(DATE.YEAR.SHORT)) {
    return val * DELAY_VALUES[7];
  }
  // month
  if (reqFormat.match(DATE.MONTH.CHAR) ||
    reqFormat.match(DATE.MONTH.SHORT) ||
    reqFormat.match(DATE.MONTH.FULL)) {
    return val * DELAY_VALUES[6];
  }
  // week
  if (reqFormat.match(DATE.WEEK.CHAR) ||
    reqFormat.match(DATE.WEEK.SHORT) ||
    reqFormat.match(DATE.WEEK.FULL)) {
    return val * DELAY_VALUES[5];
  }
  // day
  if (reqFormat.match(DATE.DAY.CHAR) ||
    reqFormat.match(DATE.DAY.SHORT) ||
    reqFormat.match(DATE.DAY.FULL)) {
    return val * DELAY_VALUES[4];
  }
  // time
  if (reqFormat.match(TIME.HOUR.FULL)) {
    return val * DELAY_VALUES[3];
  }
  if (reqFormat.match(TIME.MINUTE)) {
    return val * DELAY_VALUES[2];
  }
  if (reqFormat.match(TIME.SECOND)) {
    return val * DELAY_VALUES[1];
  }
  if (reqFormat.match(TIME.MILISECOND)) {
    return val * DELAY_VALUES[0];
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
