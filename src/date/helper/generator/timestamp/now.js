const year = inputFormat => new Date(
  Date.UTC(
    inputFormat,
    new Date().getMonth(),
    new Date().getDate(),
    new Date().getDay(),
  ),
).getTime();

const month = inputFormat => new Date(
  Date.UTC(
    new Date().getFullYear(),
    inputFormat === 0 ? inputFormat : inputFormat - 1,
    new Date().getDate(),
    new Date().getDay(),
  ),
).getTime();

const week = inputFormat => new Date(
  Date.UTC(
    new Date().getFullYear(),
    new Date().getMonth(),
    Math.floor(inputFormat / 7),
  ),
).getTime();

const day = inputFormat => new Date(
  Date.UTC(
    new Date().getFullYear(),
    new Date().getMonth(),
    inputFormat,
  ),
).getTime();


const nw = () => new Date(
  Date.UTC(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
    new Date().getDay(),
  ),
).getTime();

module.exports = {
  year,
  month,
  week,
  day,
  nw,
};
