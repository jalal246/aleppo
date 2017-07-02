import beginning from './beginning';
import now from './now';

const specificFormat = (yr, mon, d) => new Date(
  Date.UTC(
    yr,
    mon,
    d,
  ),
).getTime();


module.exports = {
  beginning,
  now,
  specificFormat,
};
