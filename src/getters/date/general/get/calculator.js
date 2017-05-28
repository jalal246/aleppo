
// returns ts
const createTS = () => new Date().getTime();

const mutli = (n1, n2) => n1 * n2;
const add = (times, timeConstants) => createTS() + mutli(times, timeConstants);
const sub = (times, timeConstants) => createTS() - mutli(times, timeConstants);

const findOptionAndDo = (reqMathType, times, timeConstants) => (
  reqMathType === '+'
  ? add(times, timeConstants)
  : sub(times, timeConstants)
);

const reabable = (reqMathType, times, timeConstants) => new Date(
  findOptionAndDo(reqMathType, times, timeConstants),
);

const justTs = (reqMathType, times, timeConstants) => findOptionAndDo(
  reqMathType, times, timeConstants,
);

const calculator = (times, timeConstants, reqMathType, isTS) => (
  isTS
  ? justTs(reqMathType, times, timeConstants)
  : reabable(reqMathType, times, timeConstants)
);


export default calculator;
