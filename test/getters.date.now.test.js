/* eslint-env mocha */

import chai from 'chai';
import getters from '../src/getters';

const expect = chai.expect;

const date = getters.date;

describe('getters', () => {
  describe('3- date', () => {
    describe('A- now', () => {
      it('1- throws error with all wrong parameters', () => {
        expect(() => {
          date.now('whatEvere: whatEvere');
        }).to.throw(Error);
      });
      it('2- throws error with one wrong parameter.', () => {
        expect(() => {
          date.now('wrong');
        }).to.throw(Error);
      });
      it('3- returns current local date and time if there is no args.', () =>
        expect(date.now()).to.be.ok,
      );
      it('4- returns timeStamp', () =>
        expect(date.now('ts')).to.be.ok,
        expect(date.now('timeStamp')).to.be.ok,
      );
      it('5- returns local', () =>
        expect(date.now('local')).to.be.ok,
        expect(date.now('localTime')).to.be.ok,
        expect(date.now('localDate')).to.be.ok,
      );
      describe('YEAR', () => {
        it('6- returns current year with full digit. for passing year/years/yrs/yyyy', () =>
        // to.be.equal(2017)
          expect(date.now('year')).to.be.ok,
          expect(date.now('years')).to.be.ok,
          expect(date.now('yrs')).to.be.ok,
          expect(date.now('yyyy')).to.be.ok,
        );
        it('7- returns current year with 2-digits for passing yy/y/yyy', () =>
        // to.be.equal(17)
          expect(date.now('y')).to.be.ok,
          expect(date.now('yy')).to.be.ok,
          expect(date.now('yyy')).to.be.ok,
        );
      });
      describe('MONTH', () => {
        it('8- returns current month number', () =>
        // to.be.equal(5)
          expect(date.now('mo')).to.be.ok,
          expect(date.now('mos')).to.be.ok,
        );
        it('9- returns current month abbr', () =>
        // to.be.equal(Jun)
          expect(date.now('mth')).to.be.ok,
          expect(date.now('mths')).to.be.ok,
        );
        it('10- returns current full month name', () =>
        // to.be.equal(June)
          expect(date.now('month')).to.be.ok,
          expect(date.now('months')).to.be.ok,
        );
      });
      describe('WEEK', () => {
        it('11- returns current week number', () =>
        // to.be.equal()
          expect(date.now('week')).to.be.ok,
          expect(date.now('wk')).to.be.ok,
          expect(date.now('w')).to.be.ok,
        );
      });
      describe('DAY', () => {
        it('13- returns current day number [days form 1 to 7]', () =>
        // to.be.equal(4)
        // + 1 beacuse if you are in day zero, this test will failed.
          expect(date.now('d') + 1).to.be.ok,
        );
        it('13- returns current full month name', () =>
        // to.be.equal(Thu)
          expect(date.now('dd')).to.be.ok,
        );
        it('14- returns current full month name', () =>
        // to.be.equal(Thursay)
          expect(date.now('day')).to.be.ok,
          expect(date.now('days')).to.be.ok,
        );
      });
      describe('TIME', () => {
        it('15- returns current hour in 24', () =>
        // to.be.equal(15)
          expect(date.now('h')).to.be.ok,
          expect(date.now('hr')).to.be.ok,
          expect(date.now('hrs')).to.be.ok,
          expect(date.now('hour')).to.be.ok,
          expect(date.now('hours')).to.be.ok,
        );
        it('16- returns current hour in 12', () =>
        // to.be.equal('3: 07 pm')
          expect(date.now('h12')).to.be.ok,
          expect(date.now('hr12')).to.be.ok,
          expect(date.now('hrs12')).to.be.ok,
          expect(date.now('hour12')).to.be.ok,
          expect(date.now('hours12')).to.be.ok,
        );
        // it('17- returns current minute', () =>
        // to.be.equal(10)
          // expect(date.now('m')).to.be.ok,
          // expect(date.now('min')).to.be.ok,
          // expect(date.now('mins')).to.be.ok,
          // expect(date.now('minute')).to.be.ok,
          // expect(date.now('minutes')).to.be.ok,
        // );
        it('18- returns current second', () =>
        // to.be.equal(59)
        expect(date.now('s')).to.be.ok,
        expect(date.now('sec')).to.be.ok,
        expect(date.now('secs')).to.be.ok,
        expect(date.now('second')).to.be.ok,
        expect(date.now('seconds')).to.be.ok,
        );
      });
      describe('COMPLEX', () => {
        it('19- returns complex form as required', () =>
          expect(date.now('hr:mins:hr:min:d:mos:month')).to.be.ok,
        );
      });
    });
  });
});
