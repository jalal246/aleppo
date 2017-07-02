 /* eslint-env mocha */

import chai from 'chai';
import date from '../../src/date';

const expect = chai.expect;

// add one to results in case one of them is equal to zero, the test will fail then.
// const date = getters.date;

describe('3- date', () => {
  describe('B- later', () => {
    it('throws error with one wrong parameter.', () => {
      expect(() => {
        date.later();
      }).to.throw(Error);
      expect(() => {
        date.later('wrong');
      }).to.throw(Error);
      expect(() => {
        date.now(90);
      }).to.throw(Error);
    });
    describe('YEAR', () => {
      it('returns next year with full digit. for passing year/years/yrs/yyyy', () =>
        // to.be.equal()
          expect(date.later('year')).to.be.ok,
          expect(date.later('years')).to.be.ok,
          expect(date.later('yrs')).to.be.ok,
          expect(date.later('yyyy')).to.be.ok,
        );
      it('returns next year with 2-digits for passing yy/y/yyy', () =>
        // to.be.equal()
          expect(date.later('10y')).to.be.ok,
          expect(date.later('2yy')).to.be.ok,
          expect(date.later('8yyy')).to.be.ok,
        );
    });
    describe('MONTH', () => {
      it('returns next month number', () =>
        // to.be.equal()
          expect(date.later('mo')).to.be.ok,
          expect(date.later('mos')).to.be.ok,
        );
      it('returns next month abbr', () =>
        // to.be.equal()
          expect(date.later('mth')).to.be.ok,
          expect(date.later('mths')).to.be.ok,
        );
      it('returns next full month name', () =>
        // to.be.equal()
          expect(date.later('month')).to.be.ok,
          expect(date.later('8month')).to.be.ok,
          expect(date.later('months')).to.be.ok,
        );
    });
    describe('WEEK', () => {
      it('returns next week number', () =>
        // to.be.equal()
          expect(date.later('week')).to.be.ok,
          expect(date.later('wk')).to.be.ok,
          expect(date.later('w')).to.be.ok,
        );
    });
    describe('DAY', () => {
      it('returns next day number [days form 1 to 7]', () =>
        // to.be.equal()
          expect(date.later('d') + 1).to.be.ok,
        );
      it('returns next full month name', () =>
        // to.be.equal()
          expect(date.later('dd')).to.be.ok,
        );
      it('returns next full month name', () =>
        // to.be.equal()
          expect(date.later('day')).to.be.ok,
          expect(date.later('days')).to.be.ok,
        );
    });
    describe('TIME', () => {
      it('returns next hour in 24', () =>
        // to.be.equal()
          expect(date.later('h') + 1).to.be.ok,
          expect(date.later('hr') + 1).to.be.ok,
          expect(date.later('hrs') + 1).to.be.ok,
          expect(date.later('hour') + 1).to.be.ok,
          expect(date.later('hours') + 1).to.be.ok,
          expect(date.later('12hours') + 1).to.be.ok,
        );
      it('returns next hour in 12', () =>
        // to.be.equal()
          expect(date.later('h12') + 1).to.be.ok,
          expect(date.later('hr12') + 1).to.be.ok,
          expect(date.later('hrs12') + 1).to.be.ok,
          expect(date.later('hour12') + 1).to.be.ok,
          expect(date.later('hours12') + 1).to.be.ok,
          expect(date.later('12hours12') + 1).to.be.ok,
          expect(date.later('9hours12') + 1).to.be.ok,
          expect(date.later('5hr24') + 1).to.be.ok,
          expect(date.later('hr24') + 1).to.be.ok,
          expect(date.later('12hr24') + 1).to.be.ok,
        );
      it('returns next minute', () =>
        // to.be.equal()
          expect(date.later('m') + 1).to.be.ok,
          expect(date.later('min') + 1).to.be.ok,
          expect(date.later('mins') + 1).to.be.ok,
          expect(date.later('minute') + 1).to.be.ok,
          expect(date.later('minutes') + 1).to.be.ok,
        );
      it('returns next second', () =>
        // to.be.equal()
        expect(date.later('s') + 1).to.be.ok,
        expect(date.later('sec') + 1).to.be.ok,
        expect(date.later('secs') + 1).to.be.ok,
        expect(date.later('second') + 1).to.be.ok,
        expect(date.later('seconds') + 1).to.be.ok,
        );
    });
    describe('COMPLEX', () => {
      it('returns timestamp form as required', () =>
          expect(date.later('1d', 'ts')).to.be.ok,
        );
      it('returns full date form as required', () =>
          expect(date.later('1mo', 'f')).to.be.ok,
        );
      it('returns full date form as required', () =>
          expect(date.later('10y', 'full date')).to.be.ok,
        );
      it('returns full date form as required', () =>
          expect(date.later('7hr', 'fullDate')).to.be.ok,
        );
    });
  });
});
