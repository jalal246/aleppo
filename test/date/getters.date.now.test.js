/* eslint-env mocha */

import chai from 'chai';
import date from '../../src/date';

const expect = chai.expect;

// const date = getters.date;

// add one to results in case one of them is equal to zero, the test will fail then.


describe('3- Date', () => {
  describe('A- now', () => {
    it('throws error with numbers parameters', () => {
      expect(() => {
        date.now(90);
      }).to.throw(Error);
    });
    it('throws error with all wrong multi- parameters', () => {
      expect(() => {
        date.now('whatEvere: whatEvere');
      }).to.throw(Error);
    });
    it('throws error with one wrong parameter.', () => {
      expect(() => {
        date.now('wrong');
      }).to.throw(Error);
    });
    it('throws error with more than 50 character long request.', () => {
      expect(() => {
        date.now('012345678901234567890123456789012345678901234567890');
      }).to.throw(Error);
    });
    it('returns current local date and time if there is no args.', () =>
        expect(date.now()).to.be.ok,
        expect(date.now(), 'ts').to.be.ok,
      );
    it('returns timeStamp', () =>
        expect(date.now('ts')).to.be.ok,
        expect(date.now('timeStamp')).to.be.ok,
      );
    it('returns local', () =>
        expect(date.now('local')).to.be.ok,
        expect(date.now('localTime')).to.be.ok,
        expect(date.now('localDate')).to.be.ok,
        expect(date.now('utc')).to.be.ok,
      );
    describe('YEAR', () => {
      it('returns current year with full digit. for passing year/years/yrs/yyyy', () =>
        // to.be.equal(2017)
          expect(date.now('year')).to.be.ok,
          expect(date.now('years')).to.be.ok,
          expect(date.now('yrs')).to.be.ok,
          expect(date.now('yyyy')).to.be.ok,
        );
      it('returns current year with 2-digits for passing yy/y/yyy', () =>
        // to.be.equal(17)
          expect(date.now('y')).to.be.ok,
          expect(date.now('yy')).to.be.ok,
          expect(date.now('yyy')).to.be.ok,
        );
    });
    describe('MONTH', () => {
      it('returns current month number', () =>
        // to.be.equal(5)
          expect(date.now('mo')).to.be.ok,
          expect(date.now('mos')).to.be.ok,
        );
      it('returns current month abbr', () =>
        // to.be.equal(Jun)
          expect(date.now('mth')).to.be.ok,
          expect(date.now('mths')).to.be.ok,
        );
      it('returns current full month name', () =>
        // to.be.equal(June)
          expect(date.now('month')).to.be.ok,
          expect(date.now('months')).to.be.ok,
        );
    });
    describe('WEEK', () => {
      it('returns current week number', () =>
        // to.be.equal()
          expect(date.now('week')).to.be.ok,
          // expect(date.now('w')).to.be.ok,
          expect(date.now('w')).to.be.ok,
        );
    });
    describe('DAY', () => {
      it('returns current day number [days form 1 to 7]', () =>
        // to.be.equal(4)
        // + 1 beacuse if you are in day zero, this test will failed.
          expect(date.now('d') + 1).to.be.ok,
        );
      it('returns current full month name', () =>
        // to.be.equal(Thu)
          expect(date.now('dd')).to.be.ok,
        );
      it('returns current full month name', () =>
        // to.be.equal(Thursay)
          expect(date.now('day')).to.be.ok,
          expect(date.now('days')).to.be.ok,
        );
    });
    describe('TIME', () => {
      it('returns current hour in 24', () =>
        // to.be.equal(15)
          expect(date.now('h') + 1).to.be.ok,
          expect(date.now('hr') + 1).to.be.ok,
          expect(date.now('hrs') + 1).to.be.ok,
          expect(date.now('hour') + 1).to.be.ok,
          expect(date.now('hours') + 1).to.be.ok,
        );
      it('returns current hour in 12', () =>
        // to.be.equal('3: 07 pm')
          expect(date.now('h12')).to.be.ok,
          expect(date.now('hr12')).to.be.ok,
          expect(date.now('hrs12')).to.be.ok,
          expect(date.now('hour12')).to.be.ok,
          expect(date.now('hours12')).to.be.ok,
        );
      it('returns current minute', () =>
        // to.be.equal(10)
          expect(date.now('m') + 1).to.be.ok,
          expect(date.now('min') + 1).to.be.ok,
          expect(date.now('mins') + 1).to.be.ok,
          expect(date.now('minute') + 1).to.be.ok,
          expect(date.now('minutes') + 1).to.be.ok,
        );
      it('returns current second', () =>
        // to.be.equal(59)
        expect(date.now('s') + 1).to.be.ok,
        expect(date.now('sec') + 1).to.be.ok,
        expect(date.now('secs') + 1).to.be.ok,
        expect(date.now('second') + 1).to.be.ok,
        expect(date.now('seconds') + 1).to.be.ok,
        );
    });
    describe('MULTI', () => {
      it('returns complex form as required', () =>
          expect(date.now('hr-month')).to.be.ok,
        );
      it('returns complex form as required', () =>
          expect(date.now('day/sec')).to.be.ok,
        );
      it('returns complex form as required', () =>
          expect(date.now('min.hrs12')).to.be.ok,
        );
      it('returns complex form as required', () =>
          expect(date.now('day months')).to.be.ok,
        );
      it('returns complex form as required', () =>
          expect(date.now('hr:mins:hr:min:d:mos:month')).to.be.ok,
        );
    });
  });
});
