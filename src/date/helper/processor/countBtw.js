import {
  DATE,
  ALL,
} from '../../../shared/regex';


/**
 * find out what the right function for the requested format.
 * @param {string} reqFormat - options allowed.
 * @returns {object} - computefunc: val that will be used to convert from ms to required form.
                     - expectedTSfunc: function name in gen that will be called later
                                      in case the input was number
 **/
const countBtw = (reqFormat) => {
  let computefunc = false;
  let expectedTSfunc = false;
  // process the requset format ************************************************
  if (reqFormat.match(DATE.YEAR.ALL)) {
    // year
    computefunc = 'yearsBtw';
    expectedTSfunc = 'year';
  } else if (reqFormat.match(DATE.MONTH.ALL)) {
    // month
    computefunc = 'monthsBtw';
    expectedTSfunc = 'month';
  } else if (reqFormat.match(DATE.WEEK.ALL)) {
    // week
    computefunc = 'weeksBtw';
    expectedTSfunc = 'week';
  } else if (reqFormat.match(DATE.DAY.ALL)) {
    // day
    computefunc = 'daysBtw';
    expectedTSfunc = 'day';
  } else if (reqFormat.match(ALL)) {
    // day
    computefunc = 'all';
    expectedTSfunc = 'format';
  }
  return {
    computefunc,
    expectedTSfunc,
  };
};

export default countBtw;
