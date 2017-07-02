import readTs from './readTs';
import { isLeap, isCommon, yearType, daysCountInMonth } from './info';
import now from './now';
import laterAgo from './laterAgo';
import countBtw from './countBtw';

module.exports = {
  now,
  ago: (opt, argOptions) => laterAgo(opt, argOptions, '-'),
  later: (opt, argOptions) => laterAgo(opt, argOptions, '+'),
  readTs,
  isLeap,
  isCommon,
  yearType,
  daysCountInMonth,
  countBtw,
};
