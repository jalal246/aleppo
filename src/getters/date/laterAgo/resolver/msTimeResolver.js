

const mutli = (n1, n2) => n1 * n2;

/**
 *  computes later
 *
 * @param {number} - times
 * @param {number} - timeConstants
 * @return {number} - milliseconds above the current time.
 **/
const add = (nwTS, times, timeConstants) => nwTS + mutli(times, timeConstants);


/**
 *  computes ago
 *
 * @param {number} - times
 * @param {number} - timeConstants
 * @return {number} - milliseconds minus the current time.
 **/
const sub = (nwTS, times, timeConstants) => nwTS - mutli(times, timeConstants);


/**
 *  This function deals with milliseconds units.
 *  computes  mili, sec, min, hr, day and week.
 *
 * @param {number} - nwTS, now timestamp.
 * @param {number} - timeConstants, the number of milliseconds delay.
 * @param {number} - times, how many later or ago the user wants?
 * @param {char} - reqMathType '+' or '-'
 * @return {number} final computed timestamp
 **/
const msTimeResolver = (nwTS, timeConstants, times, reqMathType) => {
  if (reqMathType === '+') return add(nwTS, timeConstants, times); // later
  return sub(nwTS, timeConstants, times); // ago
};

export default msTimeResolver;
