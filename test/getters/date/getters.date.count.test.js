/* eslint-env mocha */

import chai from 'chai';
import getters from '../../../src/getters';

const expect = chai.expect;

const date = getters.date;


describe('getters', () => {
  describe('3- date', () => {
    describe('D- COUNT', () => {
      it('throws error beacuse of wrong month number', () => {
        expect(() => {
          date.countBtw();
        }).to.throw(Error);
        expect(() => {
          date.countBtw('Error');
        }).to.throw(Error);
        expect(() => {
          date.countBtw('year', '1/1/1/1/1');
        }).to.throw(Error);
        expect(() => {
          date.countBtw('year', 1900, '1/1/1/1/1');
        }).to.throw(Error);
        expect(() => {
          date.countBtw('year', 'kl', '1/1/1/1/1');
        }).to.throw(Error);
        expect(() => {
          date.countBtw('year', 2017, 2040, 'j');
        }).to.throw(Error);
        expect(() => {
          date.countBtw('year', '1/13/2017', '40/2/2040');
        }).to.throw(Error);
        expect(() => {
          date.countBtw('all', 10, '40/2/2040');
        }).to.throw(Error);
        expect(() => {
          date.countBtw('all', 10);
        }).to.throw(Error);
      });
      describe('YEAR', () => {
        it('returns difference', () =>
          expect(date.countBtw('yrs')).to.be.be.ok,
          expect(date.countBtw('yrs', 2040)).to.be.ok,
          expect(date.countBtw('yrs', 2017, 2040)).to.be.ok,
          expect(date.countBtw('year', '1/12/2017', '1/2/2040')).to.be.ok,
          expect(date.countBtw('year', '31/10/2017', '1/2/2040')).to.be.ok,
          expect(date.countBtw('year', '11:10:2030')).to.be.ok,
          expect(date.countBtw('yrs', '1/1/2020', '10/1/2020')).to.be.ok,
          expect(date.countBtw('yrs', '31/12/2018', '1/1/2020')).to.be.ok,
          expect(date.countBtw('yrs', '31/12/2018', '1/1/2020', 'i')).to.be.ok,
        );
      });
      describe('MONTH', () => {
        it('returns difference', () =>
        expect(date.countBtw('mos')).to.be.be.ok,
        expect(date.countBtw('mos', 10)).to.be.ok,
        expect(date.countBtw('mos', 0)).to.be.ok,
        expect(date.countBtw('mos', 10, 12)).to.be.ok,
        expect(date.countBtw('mos', 10, 0)).to.be.ok,
        expect(date.countBtw('mos', 0, 10)).to.be.ok,
        expect(date.countBtw('month', '1/0/2018', '1,1,2020')).to.be.ok,
          expect(date.countBtw('month', '1/1/2018', '1,1,2020')).to.be.ok,
          expect(date.countBtw('month', '1/1/2018', '10/1/2020')).to.be.ok,
          expect(date.countBtw('month', '10/1/2018', '1/1/2020')).to.be.ok,
          expect(date.countBtw('month', '10/1/2018', '10/1/2020')).to.be.ok,
          expect(date.countBtw('month', '10/1/2018', '10/1/2020', 'i')).to.be.ok,
          expect(date.countBtw('month', '10/1/2018', '11/1/2018', 'i')).to.be.ok,
          expect(date.countBtw('month', '10/1/2018', '11/1/2018')).to.be.ok,
          expect(date.countBtw('mos', '31/12/2018', '1/1/2020')).to.be.ok,
        );
      });
      describe('DAY', () => {
        it('returns difference', () =>
        expect(date.countBtw('d')).to.be.be.ok,
        expect(date.countBtw('d', 5)).to.be.ok,
        expect(date.countBtw('d', 10, 12)).to.be.ok,
        expect(date.countBtw('day', '1/1/2018', '1/1/2020')).to.be.ok,
        expect(date.countBtw('day', '1/1/2018', '10/1/2020')).to.be.ok,
        expect(date.countBtw('day', '10/1/2018', '1/1/2020')).to.be.ok,
        expect(date.countBtw('day', '10/1/2018', '10/1/2020')).to.be.ok,
        expect(date.countBtw('day', '10/1/2018', '10/1/2020', 'i')).to.be.ok,
        expect(date.countBtw('day', '10/1/2018', '11/1/2018', 'i')).to.be.ok,
        expect(date.countBtw('day', '10/1/2018', '11/1/2018')).to.be.ok,
        expect(date.countBtw('day', '31/12/2018', '1/1/2020')).to.be.ok,
        );
      });
      describe('WEEK', () => {
        it('returns difference', () =>
        expect(date.countBtw('wk')).to.be.be.ok,
        expect(date.countBtw('wk', 5)).to.be.ok,
        expect(date.countBtw('wk', 10, 12)).to.be.ok,
        expect(date.countBtw('wk', '1/1/2018', '8/1/2018')).to.be.ok,

        );
      });
      describe('TS', () => {
        it('returns difference', () =>
          expect(date.countBtw('day', 1496337691025)).to.be.ok,
          expect(date.countBtw('all', '1/8/2030', '1/9/2029')).to.be.ok,
          expect(date.countBtw('all', '1/9/2029')).to.be.ok,

        );
      });
    });
  });
});
