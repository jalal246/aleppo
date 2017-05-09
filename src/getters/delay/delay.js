import { SECOND, MINUTE, HOUR, DAY, YEAR } from './constants';

/**
 * Calculate time duration accourding to given time format.
 *
 * @param {val} integer. Number wanted for given value.
 * @param {options} char. Character, shortcuts => s : SECOND
                                                  m : MINUTE
                                                  h : HOUR
                                                  d : DAY
                                                  y : YEAR.
 */
const get = (val, opt) => {
  switch (opt) {
    case 'Y': // Shortcut for year.
      return val * YEAR;
    case 'D': // Shortcut for day.
      return val * DAY;
    case 'h': // Shortcut for hour.
      return val * HOUR;
    case 'm': // Shortcut for minutes.
      return val * MINUTE;
    case 's': // Shortcut for seconds.
      return val * SECOND;
    case 'ms': // Shortcut for miliseconds.
      return val;
    default:
      return `Ops! Cannot recognize option format: ${opt}`;
  }
};

const delay = (val) => {
  const valArray = val.split(/(\d+)/);
  return get(parseInt(valArray[1], 10), valArray[2]);
};

export default delay;
