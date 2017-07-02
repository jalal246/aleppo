 /* eslint-env mocha */

import chai from 'chai';
import date from '../../src/date';

const expect = chai.expect;

// const date = getters.date;

// add one to results in case one of them is equal to zero, the test will fail then.

describe('3- date', () => {
  describe('C- ago', () => {
    it('throws error with one wrong parameter.', () => {
      expect(() => {
        date.ago();
      }).to.throw(Error);
      expect(() => {
        date.ago('wrong');
      }).to.throw(Error);
      expect(() => {
        date.ago(899);
      }).to.throw(Error);
      expect(() => {
        date.ago('899');
      }).to.throw(Error);
      expect(() => {
        date.ago('1year', 'db');
      }).to.throw(Error);
    });
    describe('YEAR', () => {
      it('returns next year with full digit. for passing year/years/yrs/yyyy', () =>
        // to.be.equal()
          expect(date.ago('year')).to.be.ok,
          expect(date.ago('years')).to.be.ok,
          expect(date.ago('yrs')).to.be.ok,
          expect(date.ago('yyyy')).to.be.ok,
          expect(date.ago('yyyy', 'ts')).to.be.ok,
        );
      it('returns next year with 2-digits for passing yy/y/yyy', () =>
        // to.be.equal()
          expect(date.ago('1y')).to.be.ok,
          expect(date.ago('10yy')).to.be.ok,
          expect(date.ago('yyy')).to.be.ok,
        );
    });
    describe('MONTH', () => {
      it('returns next month number', () =>
        // to.be.equal(6)
          expect(date.ago('mo')).to.be.ok,
          expect(date.ago('mos')).to.be.ok,
        );
      it('returns next month abbr', () =>
        // to.be.equal(Jun)
          expect(date.ago('mth')).to.be.ok,
          expect(date.ago('mths')).to.be.ok,
        );
      it('returns next full month name', () =>
        // to.be.equal(June)
          expect(date.ago('month')).to.be.ok,
          expect(date.ago('months')).to.be.ok,
        );
    });
    describe('WEEK', () => {
      it('returns next week number', () =>
        // to.be.equal()
          expect(date.ago('week')).to.be.ok,
          expect(date.ago('wk')).to.be.ok,
          expect(date.ago('w')).to.be.ok,
        );
    });
    describe('DAY', () => {
      it('returns next day number [days form 1 to 7]', () =>
        // to.be.equal()
          expect(date.ago('d') + 1).to.be.ok,
        );
      it('returns next full month name', () =>
        // to.be.equal()
          expect(date.ago('dd')).to.be.ok,
        );
      it('returns next full month name', () =>
        // to.be.equal()
          expect(date.ago('day')).to.be.ok,
          expect(date.ago('days')).to.be.ok,
        );
    });
    describe('TIME', () => {
      it('returns next hour in 24', () =>
        // to.be.equal(15)
          expect(date.ago('h') + 1).to.be.ok,
          expect(date.ago('hr') + 1).to.be.ok,
          expect(date.ago('hrs') + 1).to.be.ok,
          expect(date.ago('hour') + 1).to.be.ok,
          expect(date.ago('hours') + 1).to.be.ok,
        );
      it('returns next hour in 12', () =>
        // to.be.equal('3: 07 pm')
          expect(date.ago('h12')).to.be.ok,
          expect(date.ago('hr12')).to.be.ok,
          expect(date.ago('hrs12')).to.be.ok,
          expect(date.ago('hour12')).to.be.ok,
          expect(date.ago('hours12')).to.be.ok,
        );
      it('returns next minute', () =>
        // to.be.equal(10)
          expect(date.ago('m') + 1).to.be.ok,
          expect(date.ago('min') + 1).to.be.ok,
          expect(date.ago('mins') + 1).to.be.ok,
          expect(date.ago('minute') + 1).to.be.ok,
          expect(date.ago('minutes') + 1).to.be.ok,
        );
      it('returns next second', () =>
        // to.be.equal(59)
        expect(date.ago('s') + 1).to.be.ok,
        expect(date.ago('sec') + 1).to.be.ok,
        expect(date.ago('secs') + 1).to.be.ok,
        expect(date.ago('second') + 1).to.be.ok,
        expect(date.ago('seconds') + 1).to.be.ok,
        );
    });
    describe('COMPLEX', () => {
      it('returns timestamp form as required', () =>
          expect(date.ago('1d', 'ts')).to.be.ok,
        );
      it('returns full date form as required', () =>
          expect(date.ago('1mo', 'f')).to.be.ok,
        );
      it('returns full date form as required', () =>
          expect(date.ago('10y', 'full date')).to.be.ok,
        );
      it('returns full date form as required', () =>
          expect(date.ago('7hr', 'fullDate')).to.be.ok,
        );
    });
  });
});
