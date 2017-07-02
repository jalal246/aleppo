import splitter from '../../helper/splitter';
import tsGen from '../../helper/generator/timestamp';

import {
  daysCountInMonth,
} from '../../info';

const formatResolver = (inputFormat) => {
  const {
    formatsArray,
  } = splitter.formatRequest(inputFormat);

  // validate length
  if (formatsArray.length === 3 &&
    (formatsArray[0].length === 2 || formatsArray[0].length === 1) &&
    (formatsArray[1].length === 2 || formatsArray[1].length === 1)) {
    // validate values
    const d = parseInt(formatsArray[0], 10);
    const mon = parseInt(formatsArray[1], 10);
    const yr = parseInt(formatsArray[2], 10);
    if (mon >= 0 && mon <= 12 && yr > 0) {
      // more validation? just make sure we are in the right day in month
      const adjustMonth = mon === 0 ? mon : mon - 1;
      if (d > 0 && d <= daysCountInMonth(adjustMonth, yr, true)) {
        return tsGen.specificFormat(yr, adjustMonth, d);
      }
    }
  }
  return false;
};

export default formatResolver;
