const err = (...params) => {
  throw new Error(` Please, enter valid parameters [${params}]`);
};

module.exports = {
  err,
};
