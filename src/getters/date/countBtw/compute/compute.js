import {
  daysCountInMonth,
} from '../../info';

// return array date. [ d, m ,y]
const dateArray = ts => [
  ts.getUTCDate(),
  ts.getUTCMonth(),
  ts.getUTCFullYear(),
];

/**
 * choose the bigger ts value, avoiding error in calculations
 * all functions use this guy.
 *
 * @param {timestamp1}
 * @param {timestamp1}
 * @returns {array} - arrays containing two arrays. [frm[day,month,year], until[day,month,year]]
 **/
const sortAndSolveTs = (timestamp1, timestamp2) => {
  const ts1 = new Date(timestamp1);
  const ts2 = new Date(timestamp2);
  if (ts1 > ts2) {
    return [ // from date array
      dateArray(ts2),
      dateArray(ts1),
    ];
  }
  // else default.
  return [
    dateArray(ts1),
    dateArray(ts2),
  ];
};

/**
 * fraction-functions.
 * since it's being repeated in each function,
 * i isolated them for better performance.
 **/


// 1- same month and same year, then just count days.
// we need this function in all counting-functions
const isSameMonthAndYear = (yfrm, ytl, mfrm, mtl) => yfrm === ytl && mfrm === mtl;

// if isSameMonthAndYear then count.
const countInDaysRange = (dfrm, dtl) => {
  let counter = 0;
  for (let i = dfrm; !(i === dtl); i += 1) {
    counter += 1;
  }
  return counter;
};


const looping = (yfrm, ytl, mfrm, mtl, type = 'o') => {
  let monthBegin = mfrm;
  let yearBegin = yfrm;
  let counter = 0;
  while (!(yearBegin === ytl && monthBegin === mtl)) {
    if (type === 'd') {
      counter += daysCountInMonth(monthBegin, yearBegin, true);
    } else {
      // year or month.
      counter += 1;
    }
    monthBegin += 1;
    if (monthBegin === 12) {
      monthBegin = 0;
      yearBegin += 1;
    }
  }
  return counter;
};


/**
 * end of fraction-functions ***************************************************
 **/


/**
 * operational function, works for daysBtw.
 * counting the days difference between from and until.
 * last day in until not included.
 * @param {array}
 * @param {array}
 * @returns {number} - days between.
 **/
const computeDaysBtw = (frm, tl, i) => {
  let [mfrm, yfrm] = [frm[1], frm[2]];
  const dfrm = frm[0];
  const [dtl, mtl, ytl] = [tl[0], tl[1], tl[2]];
  // same month and same year, then just count days.
  if (isSameMonthAndYear(yfrm, ytl, mfrm, mtl)) {
    return i ? countInDaysRange(dfrm, dtl) + 1 : countInDaysRange(dfrm, dtl);
  }
  let counter = 0;
  if (dfrm !== 1) {
    // not from beginning of the month
    // compute the day difference and add one to include from day.
    // add new month
    mfrm += 1;
    if (mfrm === 12) {
      mfrm = 0;
      yfrm += 1;
    }
    counter += (daysCountInMonth(mfrm, yfrm) - dfrm) + 1;
  }
  if (dtl !== 1) {
    // not from beginning of the month
    // add the days to the counter, -1 not include the last day
    counter += tl[0] - 1;
  }
  // if ((dtl === 1 && dfrm !== 1) && (dtl !== 1 && dfrm === 1)) {
  //   // if both not from 1 then sub 1 to exclude the last day
  //   counter -= 1;
  // }
  counter += looping(
    yfrm,
    ytl,
    mfrm,
    mtl,
    'd',
  );
  // if include the last day then add one.
  if (i) counter += 1;
  return counter;
};


/**
 * main function.
 *
 * @param {array}
 * @param {array}
 * @param {boolean} - i to include the last day in the end.
 * @returns {object} - {days: }
 **/
const daysBtw = (timestamp1, timestamp2, i) => {
  const [frm, tl] = sortAndSolveTs(timestamp1, timestamp2);
  let daysCounter = 0;
  daysCounter = computeDaysBtw(frm, tl, i);
  return {
    days: daysCounter,
  };
};


/**
 * operational and main
 * computes how many weeks between two dates
 * depending on days count divided by seven
 *
 * @param {array}
 * @param {array}
 * @param {boolean} - i to include the last day in the end.
 * @param  {number} - number of days, since this functiona can be called by all function
 * in all function we already computed days.
 * @returns {object} - {weeks , daysLeft as days}
 **/
const weeksBtw = (timestamp1, timestamp2, i, days = false) => {
  let daysCountBtw = 0;
  if (!days) {
    daysCountBtw = daysBtw(timestamp1, timestamp2, i).days;
  } else {
    daysCountBtw = days;
  }
  const remainder = daysCountBtw % 7;
  let weeks = 0;
  let daysLeft = 0;
  if (remainder === 0) {
    weeks = daysCountBtw / 7;
  } else {
    daysLeft = remainder;
    weeks = (daysCountBtw - remainder) / 7;
  }
  return {
    weeks,
    days: daysLeft,
  };
};

/**
 * operational function, works for monthsBtw.
 * counting the months and days difference between from and until.
 * last day in until not included.
 * same as computeMonthsBtw with small dif.
 *
 * @param {array}
 * @param {array}
 * @returns {objects} - {months , days}
 **/
const computeMonthsBtw = (frm, tl, i) => {
  let [mfrm, yfrm] = [frm[1], frm[2]];
  const dfrm = frm[0];
  const [dtl, mtl, ytl] = [tl[0], tl[1], tl[2]];
  let daysCounter = 0;
  let monthsCounter = 0;
  // same month and same year, then just count days.
  if (isSameMonthAndYear(yfrm, ytl, mfrm, mtl)) {
    return {
      months: 0,
      days: i ?
        countInDaysRange(dfrm, dtl) + 1 :
        countInDaysRange(dfrm, dtl),
    };
  }
  if (dfrm !== 1) {
    // not from beginning of the month
    // compute the day difference and add one to include from day.
    // add new month
    mfrm += 1;
    if (mfrm === 12) {
      mfrm = 0;
      yfrm += 1;
    }
    daysCounter += (daysCountInMonth(mfrm, yfrm) - dfrm) + 1;
  }
  if (dtl !== 1) {
    // not from beginning of the month
    // add the days to the counter, -1 not include the last day
    daysCounter += tl[0] - 1;
  }
  // if ((dtl === 1 && dfrm !== 1) && (dtl !== 1 && dfrm === 1)) {
  //   // if both not from 1 then sub 1 to exclude the last day
  //   daysCounter -= 1;
  // }
  monthsCounter += looping(
    yfrm,
    ytl,
    mfrm,
    mtl,
  );
  if (i) daysCounter += 1;
  return {
    months: monthsCounter,
    days: daysCounter,
  };
};


/**
 * main function.
 *
 * @param {array}
 * @param {array}
 * @param {boolean} - i to include the last day in the end.
 * @returns {object} - {days: }
 **/
const monthsBtw = (timestamp1, timestamp2, i) => {
  const [frm, tl] = sortAndSolveTs(timestamp1, timestamp2);
  return computeMonthsBtw(frm, tl, i);
};


/**
 * operational function, works for yearsBtw.
 * counting the months and days difference between from and until.
 * last day in until not included.
 * same as computeMonthsBtw with small dif.
 *
 * @param {array}
 * @param {array}
 * @returns {objects} - {years, months , days}
 **/
const computeYearsBtw = (frm, tl, i) => {
  let [mfrm, yfrm] = [frm[1], frm[2]];
  const dfrm = frm[0];
  const [dtl, mtl, ytl] = [tl[0], tl[1], tl[2]];
  let daysCounter = 0;
  let monthsCounter = 0;
  let yearsCounter = 0;
  // same month and same year, then just count days.
  if (isSameMonthAndYear(yfrm, ytl, mfrm, mtl)) {
    return {
      years: 0,
      months: 0,
      days: countInDaysRange(dfrm, dtl) + 1,
      // days: i ?
      //   countInDaysRange(dfrm, dtl) + 1 :
      //   countInDaysRange(dfrm, dtl),
    };
  }
  if (dfrm !== 1) {
    // not from beginning of the month
    // compute the day difference and add one to include from day.
    // add new month
    mfrm += 1;
    if (mfrm === 12) {
      mfrm = 0;
      yfrm += 1;
    }
    daysCounter += (daysCountInMonth(mfrm, yfrm) - dfrm) + 1;
  }
  if (dtl !== 1) {
    // not from beginning of the month
    // add the days to the counter, -1 not include the last day
    daysCounter += tl[0] - 1;
  }
  // if ((dtl === 1 && dfrm !== 1) && (dtl !== 1 && dfrm === 1)) {
  //   // if both not from 1 then sub 1 to exclude the last day
  //   daysCounter -= 1;
  // }
  monthsCounter += looping(
    yfrm,
    ytl,
    mfrm,
    mtl,
  );
  const remainder = monthsCounter % 12;
  if (remainder === 0) {
    yearsCounter = monthsCounter / 12;
    monthsCounter = 0;
  } else {
    yearsCounter = (monthsCounter - remainder) / 12;
    monthsCounter = remainder;
  }
  if (i) daysCounter += 1;
  return {
    years: yearsCounter,
    months: monthsCounter,
    days: daysCounter,
  };
};


const yearsBtw = (timestamp1, timestamp2, i) => {
  const [frm, tl] = sortAndSolveTs(timestamp1, timestamp2);
  return computeYearsBtw(frm, tl, i);
};


const all = (timestamp1, timestamp2, i) => {
  const [frm, tl] = sortAndSolveTs(timestamp1, timestamp2);
  const fulldays = computeDaysBtw(frm, tl, i);
  const fullweeks = weeksBtw(null, null, i, fulldays);
  const fullmonths = computeMonthsBtw(frm, tl, i);
  const fullYears = computeYearsBtw(frm, tl, i);
  return {
    inDays: fulldays,
    inWeeks: fullweeks,
    inMonths: fullmonths,
    inYears: fullYears,
  };
};


module.exports = {
  daysBtw,
  weeksBtw,
  monthsBtw,
  yearsBtw,
  all,
  // export for laterAgo function
  computeDaysBtw,
};
