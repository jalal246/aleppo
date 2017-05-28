 /* eslint-env mocha */

import chai from 'chai';
import getters from '../src/getters';

const expect = chai.expect;

const date = getters.date;
describe('getters', () => {
  describe('3- date', () => {
    describe('B- later', () => {
      it('1- throws error with one wrong parameter.', () => {
        expect(() => {
          date.later('wrong');
        }).to.throw(Error);
      });
      it('2- returns next day if there is no args.', () =>
        expect(date.later()).to.be.ok,
      );
      describe('YEAR', () => {
        it('3- returns next year with full digit. for passing year/years/yrs/yyyy', () =>
        // to.be.equal()
          expect(date.later('year')).to.be.ok,
          expect(date.later('years')).to.be.ok,
          expect(date.later('yrs')).to.be.ok,
          expect(date.later('yyyy')).to.be.ok,
        );
        it('4- returns next year with 2-digits for passing yy/y/yyy', () =>
        // to.be.equal()
          expect(date.later('y')).to.be.ok,
          expect(date.later('yy')).to.be.ok,
          expect(date.later('yyy')).to.be.ok,
        );
      });
      describe('MONTH', () => {
        it('5- returns next month number', () =>
        // to.be.equal()
          expect(date.later('mo')).to.be.ok,
          expect(date.later('mos')).to.be.ok,
        );
        it('6- returns next month abbr', () =>
        // to.be.equal()
          expect(date.later('mth')).to.be.ok,
          expect(date.later('mths')).to.be.ok,
        );
        it('7- returns next full month name', () =>
        // to.be.equal()
          expect(date.later('month')).to.be.ok,
          expect(date.later('months')).to.be.ok,
        );
      });
      describe('WEEK', () => {
        it('8- returns next week number', () =>
        // to.be.equal()
          expect(date.later('week')).to.be.ok,
          expect(date.later('wk')).to.be.ok,
          expect(date.later('w')).to.be.ok,
        );
      });
      describe('DAY', () => {
        it('9- returns next day number [days form 1 to 7]', () =>
        // to.be.equal()
        // + 1 beacuse if you are in day zero, this test will failed.
          expect(date.later('d') + 1).to.be.ok,
        );
        it('10- returns next full month name', () =>
        // to.be.equal()
          expect(date.later('dd')).to.be.ok,
        );
        it('11- returns next full month name', () =>
        // to.be.equal()
          expect(date.later('day')).to.be.ok,
          expect(date.later('days')).to.be.ok,
        );
      });
      describe('TIME', () => {
        it('12- returns next hour in 24', () =>
        // to.be.equal()
          expect(date.later('h')).to.be.ok,
          expect(date.later('hr')).to.be.ok,
          expect(date.later('hrs')).to.be.ok,
          expect(date.later('hour')).to.be.ok,
          expect(date.later('hours')).to.be.ok,
        );
        it('13- returns next hour in 12', () =>
        // to.be.equal()
          expect(date.later('h12')).to.be.ok,
          expect(date.later('hr12')).to.be.ok,
          expect(date.later('hrs12')).to.be.ok,
          expect(date.later('hour12')).to.be.ok,
          expect(date.later('hours12')).to.be.ok,
        );
        it('14- returns next minute', () =>
        // to.be.equal()
          expect(date.later('m')).to.be.ok,
          expect(date.later('min')).to.be.ok,
          expect(date.later('mins')).to.be.ok,
          expect(date.later('minute')).to.be.ok,
          expect(date.later('minutes')).to.be.ok,
        );
        it('15- returns next second', () =>
        // to.be.equal()
        expect(date.later('s')).to.be.ok,
        expect(date.later('sec')).to.be.ok,
        expect(date.later('secs')).to.be.ok,
        expect(date.later('second')).to.be.ok,
        expect(date.later('seconds')).to.be.ok,
        );
      });
      describe('COMPLEX', () => {
        it('16- returns timestamp form as required', () =>
          expect(date.later('1d', 'ts')).to.be.ok,
        );
        it('16- returns full date form as required', () =>
          expect(date.later('1mo', 'f')).to.be.ok,
        );
        it('16- returns full date form as required', () =>
          expect(date.later('10y', 'full date')).to.be.ok,
        );
        it('16- returns full date form as required', () =>
          expect(date.later('7hr', 'fullDate')).to.be.ok,
        );
      });
    });
  });
});
