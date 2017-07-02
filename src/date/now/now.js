import { isValid } from '../../is';
import err from '../../shared/funcs';
import splitter from '../helper/splitter';
import processor from '../helper/processor';
import rdGen from '../helper/generator/readableDate';


const multi = (formatsArray, seperator) => {
  let result = '';
  let singleValue;
  const isErr = [];
  for (let i = 0; i < formatsArray.length; i += 1) {
    const { expectedTSfunc } = processor.general(formatsArray[i]);
    if (expectedTSfunc) {
      singleValue = rdGen[expectedTSfunc](new Date().getTime());
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

/**
 * main function
 *
 * @param {string} opt - inquiry option. day/month/year/hours..
 * no need to validate opt, beacuse it has default value.
 * @returns {string} - date in matching inquiry form.
 **/

const now = (opt = 'local') => {
  if (typeof opt !== 'string') return err(opt);
  const options = opt.trim();
  // split the format to fractions.
  const { formatsArray, separator } = splitter.formatRequest(options);
  let value;
  // if separator length is zero, the request is required only single function.
  if (separator.length === 0) {
    const { expectedTSfunc } = processor.general(formatsArray);
    if (!expectedTSfunc) return err(opt);
    value = rdGen[expectedTSfunc](new Date().getTime());
  } else {
    value = multi(formatsArray, separator);
  }
  if (isValid(value) && value !== false) {
    return value;
  }
  return err(opt);
};

export default now;
