import {
  MONTH_DAY_COUNT,
} from '../../../shared/constants';
import err from '../../../shared/funcs';


const yearType = (
  year = new Date().getUTCFullYear(),
  isProgrammaticCall = false,
) => {
  // validate only if the user call the function
  if (!isProgrammaticCall) {
    if (typeof year !== 'number' || year < 0) return err(year);
  }
  if (year % 4 !== 0) return 'common';
  else if (year % 100 !== 0) return 'leap';
  else if (year % 400 !== 0) return 'common';
  return 'leap';
};

const isLeap = (
  year = new Date().getUTCFullYear(),
  isProgrammaticCall = false,
) => yearType(year, isProgrammaticCall) === 'leap';


const isCommon = (
  year = new Date().getUTCFullYear(),
  isProgrammaticCall = false,
) => yearType(year, isProgrammaticCall) === 'common';

// month
const daysCountInMonth = (
  monthNum,
  year = new Date().getUTCFullYear(),
  isProgrammaticCall = false,
) => {
  let isProg = isProgrammaticCall;
  let month = monthNum;
  if (monthNum === undefined) {
    month = new Date().getUTCMonth();
    isProg = true;
  }
  if (isProg) {
    if (month === 1) {
      if (isLeap(year, true)) {
        return 29;
      }
      return 28;
    }
    return MONTH_DAY_COUNT[month];
  }
  // called directly by user
  if (month === 2) {
    if (isLeap(year, true)) {
      return 29;
    }
    return 28;
  }
  if (month > 12 ||
    month < 0 ||
    year < 0 ||
    typeof month !== 'number' ||
    typeof year !== 'number') {
    return err(month);
  }
  return MONTH_DAY_COUNT[month === 0 ? 0 : month - 1];
};

export {
  isLeap,
  isCommon,
  yearType,
  daysCountInMonth,
};
