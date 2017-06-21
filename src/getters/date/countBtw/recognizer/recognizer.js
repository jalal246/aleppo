import is from './helper/is';

const type = (inputFormat) => {
  if (is.num(inputFormat)) {
    if (is.ts(inputFormat)) {
      return 'ts';
    }
    return 'num';
  } else if (is.format(inputFormat)) {
    return 'format';
  }
  return false;
};

const length = inputFormat => inputFormat.length;

module.exports = {
  type,
  length,
};
