import readTs from '../../readTs';
import rdGen from '../../helper/generator/readableDate';
import msTimeResolver from './msTimeResolver';
import daysResolver from './daysResolver';


/**
 * no default value.
 * @param {number} - timeConstants, the number of milliseconds delay for time, day and week.
 * @param {string} - computing function name, for year and month.
 * @param {number} - times, how many later or ago the user wants?
 * @param {boolean} - isTs
 * @param {char} - reqMathType '+' or '-'
 * @return {number|timestamp|object}
  - number: if the user required the result in number.
  _ timestamp: if the user required the result in timestamp: ts
  _ object: if the user required full date.

 **/
const resolver = (timeConstants, times, expectedTSfunc, dateUnit, reqMathType, resultForm) => {
  let finalResult;
  // create now ts
  const nwTS = new Date().getTime();
  // if there is no time constants, compute date array.
  if (!timeConstants) {
    const requiredDate = daysResolver(nwTS, times, dateUnit, reqMathType);
    if (resultForm === 'num') {
      if (dateUnit === 'm') {
        finalResult = requiredDate[1];
      } else {
        // dateUnit === 'y'
        finalResult = requiredDate[2];
      }
    } else if (resultForm === 'ts') {
      finalResult = new Date(
        requiredDate[2], // year
        requiredDate[1], // month
        requiredDate[0], // day
        new Date(nwTS).getUTCHours(), // hours
        new Date(nwTS).getUTCMinutes(), // minutes
        new Date(nwTS).getUTCSeconds(), // seconds
      ).getTime();
    } else {
      // resultForm is full date.
      finalResult = readTs(new Date(
        requiredDate[2], // year
        requiredDate[1], // month
        requiredDate[0], // day
        new Date(nwTS).getUTCHours(), // hours
        new Date(nwTS).getUTCMinutes(), // minutes
        new Date(nwTS).getUTCSeconds(), // seconds
      ).getTime());
    }
  } else {
    // known timeConstants for time and days.
    const computedTS = msTimeResolver(nwTS, timeConstants, times, reqMathType);
    if (resultForm === 'num') {
      finalResult = rdGen[expectedTSfunc](new Date(computedTS).getTime());
    } else if (resultForm === 'ts') {
      finalResult = computedTS;
    } else {
      // resultForm is full date.
      finalResult = readTs(computedTS);
    }
  }
  return finalResult;
};

export default resolver;
