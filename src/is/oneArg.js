// single argument


// returns true for valid typeof


// typeof functions//
const isUn = candidate => typeof candidate === 'undefined';
const isNull = candidate => candidate === null;
const isValid = candidate => !isUn(candidate) && !isNull(candidate);
const isObj = candidate => typeof candidate === 'object';
const isBool = candidate => typeof candidate === 'boolean';
const isNum = candidate => typeof candidate === 'number';
const isStr = candidate => typeof candidate === 'string';
const isFn = candidate => typeof candidate === 'function';
// const isSymb = candidate => typeof candidate === 'symbol';
// const isEqual = (n1, n2) => n1.length === n2.length && n1.every((v, i) => v === n2[i]);

// mixed
const isArr = candidate => Array.isArray(candidate);
const isZeroLength = candidate => candidate.length === 0;

module.exports = {
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
};
