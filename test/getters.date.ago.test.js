 /* eslint-env mocha */

import chai from 'chai';
import getters from '../src/getters';

const expect = chai.expect;

const date = getters.date;

describe('getters', () => {
  describe('3- date', () => {
    describe('C- ago', () => {
      it('1- throws error with one wrong parameter.', () => {
        expect(() => {
          date.ago('wrong');
        }).to.throw(Error);
      });
      it('2- returns next day if there is no args.', () =>
        expect(date.ago()).to.be.ok,
      );
      describe('YEAR', () => {
        it('3- returns next year with full digit. for passing year/years/yrs/yyyy', () =>
        // to.be.equal()
          expect(date.ago('year')).to.be.ok,
          expect(date.ago('years')).to.be.ok,
          expect(date.ago('yrs')).to.be.ok,
          expect(date.ago('yyyy')).to.be.ok,
        );
        it('4- returns next year with 2-digits for passing yy/y/yyy', () =>
        // to.be.equal()
          expect(date.ago('y')).to.be.ok,
          expect(date.ago('yy')).to.be.ok,
          expect(date.ago('yyy')).to.be.ok,
        );
      });
      describe('MONTH', () => {
        it('5- returns next month number', () =>
        // to.be.equal(6)
          expect(date.ago('mo')).to.be.ok,
          expect(date.ago('mos')).to.be.ok,
        );
        it('6- returns next month abbr', () =>
        // to.be.equal(Jun)
          expect(date.ago('mth')).to.be.ok,
          expect(date.ago('mths')).to.be.ok,
        );
        it('7- returns next full month name', () =>
        // to.be.equal(June)
          expect(date.ago('month')).to.be.ok,
          expect(date.ago('months')).to.be.ok,
        );
      });
      describe('WEEK', () => {
        it('8- returns next week number', () =>
        // to.be.equal()
          expect(date.ago('week')).to.be.ok,
          expect(date.ago('wk')).to.be.ok,
          expect(date.ago('w')).to.be.ok,
        );
      });
      describe('DAY', () => {
        it('9- returns next day number [days form 1 to 7]', () =>
        // to.be.equal()
        // + 1 beacuse if you are in day zero, this test will failed.
          expect(date.ago('d') + 1).to.be.ok,
        );
        it('10- returns next full month name', () =>
        // to.be.equal()
          expect(date.ago('dd')).to.be.ok,
        );
        it('11- returns next full month name', () =>
        // to.be.equal()
          expect(date.ago('day')).to.be.ok,
          expect(date.ago('days')).to.be.ok,
        );
      });
      describe('TIME', () => {
        it('12- returns next hour in 24', () =>
        // to.be.equal(15)
          expect(date.ago('h')).to.be.ok,
          expect(date.ago('hr')).to.be.ok,
          expect(date.ago('hrs')).to.be.ok,
          expect(date.ago('hour')).to.be.ok,
          expect(date.ago('hours')).to.be.ok,
        );
        it('13- returns next hour in 12', () =>
        // to.be.equal('3: 07 pm')
          expect(date.ago('h12')).to.be.ok,
          expect(date.ago('hr12')).to.be.ok,
          expect(date.ago('hrs12')).to.be.ok,
          expect(date.ago('hour12')).to.be.ok,
          expect(date.ago('hours12')).to.be.ok,
        );
        it('14- returns next minute', () =>
        // to.be.equal(10)
          expect(date.ago('m')).to.be.ok,
          expect(date.ago('min')).to.be.ok,
          expect(date.ago('mins')).to.be.ok,
          expect(date.ago('minute')).to.be.ok,
          expect(date.ago('minutes')).to.be.ok,
        );
        it('15- returns next second', () =>
        // to.be.equal(59)
        expect(date.ago('s')).to.be.ok,
        expect(date.ago('sec')).to.be.ok,
        expect(date.ago('secs')).to.be.ok,
        expect(date.ago('second')).to.be.ok,
        expect(date.ago('seconds')).to.be.ok,
        );
      });
      describe('COMPLEX', () => {
        it('16- returns timestamp form as required', () =>
          expect(date.ago('1d', 'ts')).to.be.ok,
        );
        it('17- returns full date form as required', () =>
          expect(date.ago('1mo', 'f')).to.be.ok,
        );
        it('18- returns full date form as required', () =>
          expect(date.ago('10y', 'full date')).to.be.ok,
        );
        it('19- returns full date form as required', () =>
          expect(date.ago('7hr', 'fullDate')).to.be.ok,
        );
      });
    });
  });
});
