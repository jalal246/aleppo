import err from '../../../shared';
/**
 * Make timeStamp readable.
 *
 * @param {ts} timeStamp.
 */
const readTs = (ts) => {
  if (ts === undefined || ts === null) {
    return err([ts]);
  }
  if (ts.toString().length === 13 || ts.toString().length === 10 || ts.toString().length === 55) {
    let date;
    if (typeof ts === 'string') {
      date = new Date(parseInt(ts, 10));
    } else {
      date = new Date(ts);
    }
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hr: date.getHours(),
      min: date.getMinutes(),
      sec: date.getSeconds(),
    };
  }
  return err([ts]);
};

export default readTs;
