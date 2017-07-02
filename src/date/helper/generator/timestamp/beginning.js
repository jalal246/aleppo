const yearKnown = inputFormat => new Date(
  Date.UTC(
    inputFormat,
    0,
    1,
  ),
).getTime();

const yearDefault = () => new Date(
  Date.UTC(
    new Date().getFullYear(),
    0,
    1,
  ),
).getTime();

const month = inputFormat => new Date(
  Date.UTC(
    new Date().getFullYear(),
    inputFormat === 0 ? inputFormat : inputFormat - 1,
    1,
  ),
).getTime();

const week = inputFormat => new Date(
  Date.UTC(
    new Date().getFullYear(),
    0,
    Math.floor(inputFormat / 7),
  ),
).getTime();

const day = inputFormat => new Date(
  Date.UTC(
    new Date().getFullYear(),
    0,
    inputFormat,
  ),
).getTime();


module.exports = {
  yearKnown,
  yearDefault,
  month,
  week,
  day,
};
