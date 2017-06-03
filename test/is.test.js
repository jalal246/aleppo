/* eslint-env mocha */

import chai from 'chai';
import {
  isNull,
  isUn,
  isValid,
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
} from '../src/is';

const expect = chai.expect;

describe('is', () => {
  describe('multiple arguments', () => {
    describe('should return true', () => {
      it('1-tests undefined as undefined', () => expect(isUn(undefined, undefined, undefined)).to.be.true);
      it('2-tests null,null as null', () => expect(isNull(null, null)).to.be.true);
      it('3-tests "welcome", "to", "club" as valid', () => expect(isValid('welcome', 'to', 'club')).to.be.true);
      it('4-tests {boo : foo}, { baz: doo } as object', () => expect(isObj({ boo: 'foo' }, { baz: 'doo' })).to.be.true);
      it('5-tests true, false as boolean', () => expect(isBool(true, false)).to.be.true);
      it('6-tests 3,7,8,9,10 as number', () => expect(isNum(3, 7, 8, 9, 10)).to.be.true);
      it('7-tests hello, bye as string', () => expect(isStr('hello', 'bye')).to.be.true);
      it('8-tests ()=> 4 , ()=> "hello" as function', () => expect(isFn(() => 4, () => 'hello')).to.be.true);
      it('9-tests [10, 6, 8], ["a", "b", "c"] as array', () => expect(isArr([10, 6, 8], ['a', 'b', 'c'])).to.be.true);
      it('10-tests "","","","" as zero length', () => expect(isZeroLength('', '', '', '')).to.be.true);
      it('11-tests "","","","" as empty string', () => expect(isStrEmpty('', '', '', '', '')).to.be.true);
      it('12-tests [], [],[] empty array', () => expect(isArrEmpty([], [], [])).to.be.true);
    });
    describe('should return false', () => {
      it('1-tests 3, 3, undefined as undefined', () => expect(isUn(3, 3, undefined)).to.be.false);
      it('2-tests hello, world as null', () => expect(isNull('hello', 'world')).to.be.false);
      it('3-tests null,8 as valid', () => expect(isValid(null, 8)).to.be.false);
      it('4-tests undefined, 78 as valid', () => expect(isValid(undefined, 78)).to.be.false);
      it('5-tests ()=> 4, { num: 1 } as object', () => expect(isObj(() => 4, { num: 1 })).to.be.false);
      it('6-tests null,true as boolean', () => expect(isBool(null, true)).to.be.false);
      it('7-tests hello, 3 as number', () => expect(isNum('hello', 3)).to.be.false);
      it('8-tests 3,5,6,"yes" as string', () => expect(isStr(3, 5, 6, 'yes')).to.be.false);
      it('9-tests {boo : foo} as function', () => expect(isFn({ boo: 'foo' })).to.be.false);
      it('10-tests {foo: 123} as array', () => expect(isArr({ foo: 123 })).to.be.false);
      it('11-tests "what?" as zero length', () => expect(isZeroLength('what?')).to.be.false);
      it('12-tests "hell0" as empty string', () => expect(isStrEmpty('hell')).to.be.false);
      it('13-tests [5] empty array', () => expect(isArrEmpty([5])).to.be.false);
    });
  });
  describe('single argument', () => {
    describe('should return true', () => {
      it('1-tests undefined as undefined', () => expect(isUn(undefined)).to.be.true);
      it('2-tests null as null', () => expect(isNull(null)).to.be.true);
      it('3-tests "welcome" as valid', () => expect(isValid('welcome')).to.be.true);
      it('4-tests {boo : foo} as object', () => expect(isObj({ boo: 'foo' })).to.be.true);
      it('5-tests true as boolean', () => expect(isBool(true)).to.be.true);
      it('6-tests 3 as number', () => expect(isNum(3)).to.be.true);
      it('7-tests hello as string', () => expect(isStr('hello')).to.be.true);
      it('8-tests ()=> 4 as function', () => expect(isFn(() => 4)).to.be.true);
      it('9-tests [10, 6, 8] as array', () => expect(isArr([10, 6, 8])).to.be.true);
      it('10-tests "" as zero length', () => expect(isZeroLength('')).to.be.true);
      it('11-tests "" as empty string', () => expect(isStrEmpty('')).to.be.true);
      it('12-tests [] empty array', () => expect(isArrEmpty([])).to.be.true);
    });
    describe('should return false', () => {
      it('1-tests 3 as undefined', () => expect(isUn(3)).to.be.false);
      it('2-tests hello as null', () => expect(isNull('hello')).to.be.false);
      it('3-tests null as valid', () => expect(isValid(null)).to.be.false);
      it('4-tests undefined as valid', () => expect(isValid(undefined)).to.be.false);
      it('5-tests ()=> 4 as object', () => expect(isObj(() => 4)).to.be.false);
      it('6-tests null as boolean', () => expect(isBool(null)).to.be.false);
      it('7-tests hello 3 as number', () => expect(isNum('hello')).to.be.false);
      it('8-tests 3 as string', () => expect(isStr(3)).to.be.false);
      it('9-tests {boo : foo} as function', () => expect(isFn({ boo: 'foo' })).to.be.false);
      it('10-tests {foo: 123} as array', () => expect(isArr({ foo: 123 })).to.be.false);
      it('11-tests "what?" as zero length', () => expect(isZeroLength('what?')).to.be.false);
      it('12-tests "hell0" as empty string', () => expect(isStrEmpty('hell')).to.be.false);
      it('13-tests [5] empty array', () => expect(isArrEmpty([5])).to.be.false);
    });
  });
});
