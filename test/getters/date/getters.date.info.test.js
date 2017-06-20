/* eslint-env mocha */

import chai from 'chai';
import getters from '../../../src/getters';

const expect = chai.expect;

const date = getters.date;

describe('getters', () => {
  describe('3- date', () => {
    describe('E- INFO', () => {
      it('yearType/isLeap/isCommon throws error', () => {
        expect(() => {
          date.isLeap('1990');
        }).to.throw(Error);
        expect(() => {
          date.isLeap(-1990);
        }).to.throw(Error);
        expect(() => {
          date.isCommon('1990');
        }).to.throw(Error);
        expect(() => {
          date.isCommon(-1990);
        }).to.throw(Error);
        expect(() => {
          date.yearType('1990');
        }).to.throw(Error);
        expect(() => {
          date.yearType(-1990);
        }).to.throw(Error);
      });
      it('returns true for leap year test', () =>
        expect(date.isLeap()).to.not.be.ok,
        expect(date.isLeap(2016)).to.be.ok,
        expect(date.isLeap(2020)).to.be.ok,
        expect(date.isLeap(2024)).to.be.ok,
        expect(date.isLeap(2028)).to.be.ok,
        expect(date.isLeap(2000)).to.be.ok,
      );
      it('returns true for common year test', () =>
        expect(date.isCommon()).to.be.ok,
        expect(date.isCommon(2018)).to.be.ok,
        expect(date.isCommon(2001)).to.be.ok,
      );
      it('returns year type', () =>
        expect(date.yearType()).to.be.ok,
        expect(date.yearType(2018)).to.be.equal('common'),
        expect(date.yearType(2600)).to.be.equal('common'),
        expect(date.yearType(2016)).to.be.equal('leap'),
      );
      it('daysCountInMonth throws error beacuse of wrong month number', () => {
        expect(() => {
          date.daysCountInMonth(1990, 'hi');
        }).to.throw(Error);
        expect(() => {
          date.daysCountInMonth('1990', 2);
        }).to.throw(Error);
        expect(() => {
          date.daysCountInMonth('1990', 20);
        }).to.throw(Error);
        expect(() => {
          date.daysCountInMonth('1990', -20);
        }).to.throw(Error);
        expect(() => {
          date.daysCountInMonth(-1990, 6);
        }).to.throw(Error);
        expect(() => {
          date.daysCountInMonth('1990', '8');
        }).to.throw(Error);
      });
    });
    it('returns day count in month', () =>
      expect(date.daysCountInMonth()).to.be.ok,
      expect(date.daysCountInMonth(1, 2018)).to.be.ok,
      expect(date.daysCountInMonth(2, 2018)).be.equal(28),

    );
    it('returns 29 in February 2020 beacuse leap year', () =>
      expect(date.daysCountInMonth(2, 2016)).be.equal(29),
      expect(date.daysCountInMonth(2, 2020)).be.equal(29),
      expect(date.daysCountInMonth(0, 2016)).be.equal(31),
    );
  });
});
