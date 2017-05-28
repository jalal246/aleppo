import { isValid } from '../../../is';
import err from '../../../shared';
import splitter from './splitter';
import formatProcessor from './formatProcessor';
import get from './get';
import readTs from '../readTs';

const multi = (formatsArray, seperator) => {
  let result = '';
  let singleValue;
  const isErr = [];
  for (let i = 0; i < formatsArray.length; i += 1) {
    const { generalfunc } = formatProcessor(formatsArray[i]);
    if (generalfunc) {
      singleValue = generalfunc(new Date());
    } else {
      singleValue = false;
    }
    // check if result false then the format false
    isErr[i] = singleValue === false;
    result += singleValue;
    // Dont add seperator to the last.
    if (formatsArray.length - 1 !== i) {
      result += seperator;
    }
  }
  // if all the results are fale so return false/
  if (isErr.includes(false)) {
    return result;
  }
  return false;
};

const general = (opt, argOptions, reqType) => {
  if (opt === undefined || opt === null || opt.trim().length > 50) {
    return err(opt);
  }
  const options = opt.trim();
  if (reqType === 'later' || reqType === 'ago') {
    const { formats, times } = splitter.numFromFormat(options);
    const { timeConstants, generalfunc } = formatProcessor(formats);
    if (timeConstants && generalfunc) {
      const isTS = argOptions && argOptions.match(/ts/ig);
      const ts = get.calculator(
        times,
        timeConstants,
        reqType === 'later' ? '+' : '-',
        isTS,
      );
      if (isTS) {
        return ts;
      } else if (argOptions && argOptions.match(/(?:\bf\b|\bfull\b|\bfull date\b|\bfull dates\b|\bfulldate\b|\bfulldates\b)/ig)) {
        return readTs(ts);
      }
      return generalfunc(new Date(ts));
    }
    return err(opt);
  }
  // now
  const { formatsArray, seperator } = splitter.multiRequest(options);
  let value;
  if (seperator.length === 0) {
    const { generalfunc } = formatProcessor(formatsArray);
    if (generalfunc) {
      value = generalfunc(new Date());
    } else {
      return err(opt);
    }
  } else {
    value = multi(formatsArray, seperator);
  }
  if (isValid(value) && value !== false) {
    return value;
  }
  return err(opt);
};

export default general;
