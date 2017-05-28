import { MONTH_DAY_COUNT, err } from '../../../shared';

// year
const isLeap = (year = new Date().getFullYear()) => (
  (year % 4) === 0) && ((year % 100) !== 0) && ((year % 400) !== 0
);
const isCommon = (year = new Date().getFullYear()) => !isLeap(year);
const yearType = (year = new Date().getFullYear()) => (isLeap(year) ? 'leap' : 'common');

// month
const monthDaysNum = (monthNum = new Date().getMonth(), year = new Date().getFullYear()) => {
  if (monthNum > 12) {
    return err(monthNum);
  }
  if (monthNum === 2) {
    if (isLeap(year)) {
      return 29;
    }
    return 28;
  }
  return MONTH_DAY_COUNT[monthNum];
};

// count

// "5/25/2017"
const countDays = (date) => {
  const dateArray = new Date(date).toLocaleDateString().split('/');
  let dayCount = 0;
  for (let i = 0; i <= parseInt(dateArray[0], 10) - 1; i += 1) {
    dayCount += monthDaysNum(i, parseInt(dateArray[2], 10));
  }
  dayCount += parseInt(dateArray[1], 10);
  return dayCount;
};

const countWeeks = date => Math.floor(countDays(date) / 7);

export {
  // is
  isLeap,
  isCommon,
  // type
  yearType,
  // num
  monthDaysNum,
  // count
  countDays,
  countWeeks,
};
