/* eslint func-names: ["error", "as-needed"]*/
function* iterator(funcs, candidates) {
  for (let j = 0; j < candidates.length; j += 1) {
    for (let i = 0; i < funcs.length; i += 1) {
      yield funcs[i](candidates[j]);
    }
  }
}

const array = (funcs, candidates) => {
  const results = [];
  for (let j = 0; j < candidates.length; j += 1) {
    for (let i = 0; i < funcs.length; i += 1) {
      results.push(funcs[i](candidates[j]));
    }
  }
  return results;
};

const object = (funcs, candidates) => {
  const results = [];
  for (let j = 0; j < candidates.length; j += 1) {
    for (let i = 0; i < funcs.length; i += 1) {
      results.push({
        func: funcs[i].name,
        result: funcs[i](candidates[j]),
      });
    }
  }
  return results;
};


module.exports = {
  iterator,
  array,
  object,
};
