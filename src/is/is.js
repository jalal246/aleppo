// multiple arguments


import oneArg from './oneArg';
import doo from '../doo';

// typeof functions for multiples args//
const isUn = (...candidates) => !(doo.array([oneArg.isUn], [...candidates]).includes(false));
const isNull = (...candidates) => !(doo.array([oneArg.isNull], [...candidates]).includes(false));
const isValid = (...candidates) => !(doo.array([oneArg.isValid], [...candidates]).includes(false));
const isObj = (...candidates) => !(doo.array([oneArg.isObj], [...candidates]).includes(false));
const isBool = (...candidates) => !(doo.array([oneArg.isBool], [...candidates]).includes(false));
const isNum = (...candidates) => !(doo.array([oneArg.isNum], [...candidates]).includes(false));
const isStr = (...candidates) => !(doo.array([oneArg.isStr], [...candidates]).includes(false));
const isFn = (...candidates) => !(doo.array([oneArg.isFn], [...candidates]).includes(false));
// const isSymb = (...candidates) => !(doo.array([oneArg.isSymb], [...candidates]).includes(false));

// mixed
const isArr = (...candidates) =>
  !(doo.array([oneArg.isArr], [...candidates]).includes(false));

const isZeroLength = (...candidates) =>
  !(doo.array([oneArg.isZeroLength], [...candidates]).includes(false));

const isStrEmpty = (...candidates) =>
  !(doo.array([isValid, isStr, isZeroLength], [...candidates]).includes(false));

const isArrEmpty = (...candidates) => isArr(...candidates) && isZeroLength(...candidates);

export {
  isUn,
  isNull,
  isValid,
  isObj,
  isBool,
  isNum,
  isStr,
  isFn,
  // isSymb,
  isArr,
  isZeroLength,
  isStrEmpty,
  isArrEmpty,
};
