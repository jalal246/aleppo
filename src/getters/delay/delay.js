import {
  SECOND,
  MINUTE,
  HOUR,
  DAY,
  WEEK,
  MONTH,
  YEAR,
} from './constants';

import { isValid } from '../../is';

const err = (opt) => {
  throw new Error(`Ops! Cannot recognize option format: ${opt}`);
};

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
const get = (val, opt) => {
  switch (opt) {
    case 'ms':
    case 'miliseconds':
    case 'milisecond':
      return val;
    case 's':
    case 'second':
    case 'seconds':
      return val * SECOND;
    case 'm':
    case 'minute':
    case 'minutes':
      return val * MINUTE;
    case 'h':
    case 'hour':
    case 'hours':
      return val * HOUR;
    case 'd':
    case 'day':
    case 'days':
      return val * DAY;
    case 'w':
    case 'week':
    case 'weeks':
      return val * WEEK;
    case 'mo':
    case 'mos':
    case 'month':
    case 'months':
      return val * MONTH;
    case 'year':
    case 'years':
    case 'y':
      return val * YEAR;
    default:
      return err(val);
  }
};

const delay = (val) => {
  if (isValid(val)) {
    const valArray = val.split(/(\d+)/);
    return get(
      isValid(valArray[1]) && parseInt(valArray[1].trim(), 10),
      isValid(valArray[2]) && valArray[2].trim().toLowerCase(),
    );
  }
  return err(val);
};

export default delay;
