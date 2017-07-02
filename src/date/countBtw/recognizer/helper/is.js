/**
 * is will check the type of date input the user provides.
 * all functions here is boolean.
 * @param {string|number} inputFormat
 * @returns {boolean} -
 **/

// format: 'd-m-y' or anything alike
const format = inputFormat =>
  typeof inputFormat === 'string' &&
  inputFormat.length >= 8 &&
  inputFormat.length <= 10 &&
  inputFormat.match(/(\d+)/);

const num = inputFormat => typeof inputFormat === 'number';

const ts = inputFormat =>
  inputFormat.toString().length === 10 ||
  inputFormat.toString().length === 13;

module.exports = {
  format,
  num,
  ts,
};
