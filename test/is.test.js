/* eslint-env mocha */

import chai from 'chai';
import {
  isNull,
  isUn,
  isObj,
  isBool,
  isNum,
  isStr,
  isFn,
  // isSymb,
  isArr,
  isZeroLength,
  isStrEmpty,
  isArrEmpty,
} from '../is';

const expect = chai.expect;

describe('is', () => {
  describe('should return true', () => {
    it('1-tests undefined as undefined', () => expect(isUn(undefined)).to.be.true);
    it('2-tests null as null', () => expect(isNull(null)).to.be.true);
    it('3-tests {boo : foo} as object', () => expect(isObj({ boo: 'foo' })).to.be.true);
    it('4-tests true as boolean', () => expect(isBool(true)).to.be.true);
    it('5-tests 3 as number', () => expect(isNum(3)).to.be.true);
    it('6-tests hello as string', () => expect(isStr('hello')).to.be.true);
    it('7-tests ()=> 4 as function', () => expect(isFn(() => 4)).to.be.true);
    it('8-tests [10, 6, 8] as array', () => expect(isArr([10, 6, 8])).to.be.true);
    it('9-tests "" as zero length', () => expect(isZeroLength('')).to.be.true);
    it('10-tests "     " as empty string', () => expect(isStrEmpty('  ')).to.be.true);
    it('11-tests [] empty array', () => expect(isArrEmpty([])).to.be.true);
  });
  describe('should return false', () => {
    it('1-tests 3 as undefined', () => expect(isUn(3)).to.be.false);
    it('2-tests hello as null', () => expect(isNull('hello')).to.be.false);
    it('3-tests ()=> 4 as object', () => expect(isObj(() => 4)).to.be.false);
    it('4-tests null as boolean', () => expect(isBool(null)).to.be.false);
    it('5-tests hello 3 as number', () => expect(isNum('hello')).to.be.false);
    it('6-tests 3 as string', () => expect(isStr(3)).to.be.false);
    it('7-tests {boo : foo} as function', () => expect(isFn({ boo: 'foo' })).to.be.false);
    it('8-tests {foo: 123} as array', () => expect(isArr({ foo: 123 })).to.be.false);
    it('9-tests "what?" as zero length', () => expect(isZeroLength('what?')).to.be.false);
    it('10-tests "hell0" as empty string', () => expect(isStrEmpty('hell')).to.be.false);
    it('11-tests [5] empty array', () => expect(isArrEmpty([5])).to.be.false);
  });
});
