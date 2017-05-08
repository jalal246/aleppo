// returns true for valid typeof

// typeof functions
const isUn = candidate => typeof candidate === 'undefined';
const isNull = candidate => candidate === null;
const isObj = candidate => typeof candidate === 'object';
const isBool = candidate => typeof candidate === 'boolean';
const isNum = candidate => typeof candidate === 'number';
const isStr = candidate => typeof candidate === 'string';
const isFn = candidate => typeof candidate === 'function';
const isSymb = candidate => typeof candidate === 'symbol';

// mixed
const isArr = candidate => Array.isArray(candidate);
const isZeroLength = candidate => candidate.length === 0;

const isStrEmpty = str => isUn(str) || isNull(str) || isZeroLength(str.trim());
const isArrEmpty = array => isArr(array) && isZeroLength(array);


export {
  isUn,
  isNull,
  isObj,
  isBool,
  isNum,
  isStr,
  isFn,
  isSymb,
  isArr,
  isZeroLength,
  isStrEmpty,
  isArrEmpty,
};
