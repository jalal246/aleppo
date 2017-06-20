

/**
 *  computes from array date.
 *  turns timestamp to array of [day, month, year]
 *
 * @param {timestamp} - ts
 * @return {array} - array of from date.[day, month, year]
 **/
const readTS = ts => [
  new Date(ts).getDate(),
  new Date(ts).getMonth(),
  new Date(ts).getFullYear(),
];


/**
 *  computes until array date.
 *  add or sub times to required unit date, month or year.
 *  smart function u gona love him.
 *
 * @param {number} - times
 * @param {char} - dateUnit m for month, y for year
 * @param {char} - reqMathType '+' or '-'
 * @param {array} - frm [day, month, year]
 * @return {array} - array of until date.[day, month, year]
 **/
const createTl = (times, dateUnit, reqMathType, frm) => {
  if (dateUnit === 'y') {
    return [
      frm[0],
      frm[1],
      reqMathType === '+' ?
      frm[2] + times :
      frm[2] - times,
    ];
  }
  // month
  if (reqMathType === '+') {
    return [
      frm[0],
      (frm[1] + times) % 12,
      frm[2] + Math.trunc((frm[1] + times) / 12),
    ];
  }
  return [
    frm[0],
    11 - ((frm[1] + times + 1) % 12),
    frm[2] - Math.trunc((frm[1] + times + 1) / 12),
  ];
};


/**
 *  deals with months, and years. Those cannot be accurate with ms only.
 *
 * @param {number} - nwTS, now timestamp.
 * @param {number} - times, how many later or ago the user wants?
 * @param {char} - dateUnit, m for month, y for year.
 * @param {char} - reqMathType '+' or '-'
 * @return {number} array of date [day, month, year]
 **/
const daysResolver = (nwTS, times, dateUnit, reqMathType) => {
  // init varaiables
  const knownDate = readTS(nwTS); // frm
  const requiredDate = createTl(times, dateUnit, reqMathType, knownDate); // tl
  return requiredDate;
};

export default daysResolver;
