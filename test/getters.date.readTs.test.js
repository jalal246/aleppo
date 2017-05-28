/* eslint-env mocha */

import chai from 'chai';
import getters from '../src/getters';

const expect = chai.expect;

const date = getters.date;

describe('getters', () => {
  describe('3- date', () => {
    describe('D- readTs', () => {
      const ts = '1495559745799';
      it('1- returns readable timestamp object', () => expect(date.readTs(ts)).to.deep.equal({
        year: 2017, month: 5, day: 23, hr: 19, min: 15, sec: 45,
      }));
      it('2- throws error', () => {
        expect(() => {
          date.readTs('fakets');
        }).to.throw(Error);
      });
    });
  });
});
