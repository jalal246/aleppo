import {
  TIME,
} from '../../../shared/regex';

// hr12 only without number.
const isOnlyHr12 = opt => opt.match(TIME.HOUR.NUM_12);

// hr24 only or hr without number.
const isOnlyHr24 = opt => opt.match(TIME.HOUR.FULL_WITH_NUM24);

// is hr12 with times? 18hr12
const isHr12WithNum = opt => opt.match(TIME.HOUR.TIMES.NUM_12);

// is hr24 with times? 18hr24
const isHr24WithNum = opt => opt.match(TIME.HOUR.TIMES.NUM_24);

/**
 * loop for number and string plz.
 * will check each element in arr and sort it, number or string.
 *
 * @param {array}
 * @return {object} - { times, format }
 **/
const loop = (arr) => {
  let formats = false;
  let times = false;
  for (let i = 0; i < arr.length; i += 1) {
    // avoid empty/blanks elements
    if (arr[i].length > 0) {
      if (isNaN(parseInt(arr[i], 10))) {
        // string
        formats = arr[i];
      } else {
        // if (!isNaN(parseInt(arr[i], 10))) : number
        times = arr[i];
      }
    }
  }
  return {
    formats,
    times,
  };
};


/**
 * This man is a hero, will spreate options from numbers.
 * we have comlex format where format is number.
 *
 * @param {options} string
 * @return {object} - { times, format }
 */
const numFromFormat = (options) => {
  let times = false;
  let formats = false;
  // check if option is not with number.
  if (options.match(/(\d+)/ig) === null) {
    return {
      times: 1,
      formats: options,
    };
  }
  // option is  with number.
  if (isHr12WithNum(options)) {
    // number before hr12--> 90hr12
    // will spli opt, exclude hr12 and pass array.
    times = loop(options.split(/hr12/ig)).times;
    formats = 'hr12';
  } else if (isHr24WithNum(options)) {
    // number before hr24--> 90hr24
    // will spli opt, exclude hr24 and pass array.
    times = loop(options.split(/hr24/ig)).times;
    formats = 'hr';
  } else if (isOnlyHr12(options)) {
    // hr12 with no number before.
    times = 1;
    formats = 'hr12';
  } else if (isOnlyHr24(options)) {
    // hr24 or hr with no number before.
    times = 1;
    formats = 'hr';
  } else {
    // pure options with number. Not mixed
    const r = loop(options.split(/(\d+)/));
    times = r.times;
    formats = r.formats;
  }
  return {
    formats,
    times,
  };
};

export default numFromFormat;
