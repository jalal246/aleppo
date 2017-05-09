import {
  isNum,
  isStr,
} from '..../is';

// credit to: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range\
const getRandom = (min, max, type = 'int') => {
  const getArbitrary = () => (Math.random() * (max - min)) + min;
  const getInt = () => Math.floor(Math.random() * ((max - min) + 1)) + min;
  return type === 'int'
  ? getInt(min, max)
  : getArbitrary(min, max);
};

module.exports = {
  getRandom,
};
