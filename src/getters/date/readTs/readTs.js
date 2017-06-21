import err from '../../../shared/funcs';
import {
  DELAY_LABELS,
} from '../../../shared/constants';

const isAboveZero = n => n > 0;
const parse = ts => parseInt(ts, 10);
const isValidParse = ts => !isNaN(parse(ts));
const isvalidStr = ts => typeof ts === 'string' && isValidParse(ts) && (isAboveZero(parse(ts)));

/**
 * Make timeStamp readable.
 *
 * @param {ts} timeStamp.
 */
const readTs = (ts) => {
  if (ts === undefined || ts === null) return err(ts);
  let date = false;
  if (isvalidStr(ts)) {
    date = new Date(parse(ts));
  } else if (typeof ts === 'number') {
    if (isAboveZero(ts)) {
      date = new Date(ts);
    }
  }
  if (date) {
    return {
      [DELAY_LABELS[7]]: date.getUTCFullYear(),
      [DELAY_LABELS[6]]: date.getUTCMonth() + 1,
      [DELAY_LABELS[4]]: date.getUTCDate(),
      [DELAY_LABELS[3]]: date.getUTCHours(),
      [DELAY_LABELS[2]]: date.getUTCMinutes(),
      [DELAY_LABELS[1]]: date.getUTCSeconds(),
    };
  }
  return err(ts);
};

export default readTs;
