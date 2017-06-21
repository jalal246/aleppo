import {
  isValid,
} from '../../../is';
import err from '../../../shared/funcs';
import processor from '../helper/processor';
import resolver from './resolver';
import compute from './compute';

/**
 * main function
 * @param {string} opt - inquiry option. day/month/year/hours..
 * @param {date|number} - from - until inputes date
 * @returns {number} - computed difference btw two required dates
 **/
const countBtw = (opt, ...args) => {
  // throw err if no opt avaliable.
  if (!isValid(opt)) return err(opt);
  let fromUntil = [];
  let includeLastDay = false;
  if (args.includes('i')) {
    fromUntil = args.slice(0, 2);
    includeLastDay = true;
  } else {
    fromUntil = [...args];
  }
  const { computefunc, expectedTSfunc } = processor.countBtw(opt.trim());
  // if no computefunc, it means opt dosent match any pattern.
  if (!computefunc) return err([opt, ...args]);
  const frmTl = resolver(expectedTSfunc, ...fromUntil);
  // if no tl or frm, it fromUntil is not corret.
  if (!frmTl[0] || !frmTl[1]) return err(fromUntil);
  // compute
  return compute[computefunc](frmTl[0], frmTl[1], includeLastDay);
};

export default countBtw;
