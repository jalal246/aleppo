
const err = (params = 'undefined', msg) => {
  const yellow = '\x1b[33m';
  const red = '\x1b[31m';
  const reset = '\x1b[0m';
  const aux = (params && (params.length > 1)) ? 'are' : 'is';
  let errMsg;
  if (msg) {
    errMsg = red + msg + reset;
  } else {
    errMsg = `${yellow} Please, enter valid parameter${params && params.length > 1 ? 's.' : '.'} [${params}] ${aux} invalid. ${reset}`;
  }
  throw new Error(errMsg);
};

export default err;
