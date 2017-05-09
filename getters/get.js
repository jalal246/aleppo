import {
  isObj,
  isUn,
  isNull,
} from '../is';
/*
 * returns key and prop from given parameter.
 * @param {object} obj.
 */
const err = (obj) => {
  throw new Error(` Please, enter valid object parameter [${obj}]`);
};

const object = (obj) => {
  const key = Object.keys(obj)[0];
  const prop = obj[Object.keys(obj)[0]];
  if (!isUn(key) && !isUn(prop)) {
    if (!isNull(key) && !isNull(prop)) {
      return { key, prop };
    }
    throw new Error(`
      Please, enter valid object parameter
      [${obj}]
      `);
  } else {
    throw new Error(`
    Please, enter valid object parameter
    [${obj}]
    `);
  }
};

module.exports = {
  object,
};
