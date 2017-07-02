import {
  isValid,
} from '../../is';
import err from '../../shared/funcs';
import splitter from '../helper/splitter';
import processor from '../helper/processor';
import resolver from './resolver';


/**
 * no default value.
 * @param {string}
 * @param {object}
 * @param {char}
 */
const laterAgo = (opt, argOptions, reqMathType) => {
  // validate
  if (!isValid(opt)) return err(opt);
  if (typeof opt !== 'string') return err(opt);
  const options = opt.trim();
  // split numbers from formats
  const {
    formats,
    times,
  } = splitter.numFromFormat(options);
  // not valid opt?
  if (!formats) return err(opt);
  // get timeConstants and  expectedTSfunc for time and day reuest,
  // dateUnit for months and year
  const {
    timeConstants,
    expectedTSfunc,
    dateUnit,
  } = processor.general(formats);
  // it should return either timeConstants or expectedCountfunc.
  // both not true, the opt is not valid.
  if (!timeConstants && !dateUnit) return err(opt);
  // did the user send ts request?
  let resultForm;
  if (argOptions) {
    if (argOptions.match(/ts/ig)) {
      resultForm = 'ts';
    } else if (argOptions.match(/(?:\bf\b|\bfull\b|\bfull date\b|\bfull dates\b|\bfulldate\b|\bfulldates\b)/ig)) {
      resultForm = 'fulldate';
    } else {
      return err(argOptions);
    }
  } else {
    resultForm = 'num';
  }
  return resolver(timeConstants, times, expectedTSfunc, dateUnit, reqMathType, resultForm);
};

export default laterAgo;
