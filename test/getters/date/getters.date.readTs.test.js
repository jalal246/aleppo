/* eslint-env mocha */

import chai from 'chai';
import getters from '../../../src/getters';

const expect = chai.expect;

const date = getters.date;
describe('getters', () => {
  describe('3- date', () => {
    describe('D- readTs', () => {
      const ts = '1495559745799';
      it('returns readable timestamp object', () => expect(date.readTs(ts)).to.deep.equal({
        yr: 2017, mo: 5, dy: 23, hr: 19, min: 15, sec: 45,
      }));
      it('throws error for fake format', () => {
        expect(() => {
          date.readTs('fakets');
        }).to.throw(Error);
      });
      it('throws error for null', () => {
        expect(() => {
          date.readTs(null);
        }).to.throw(Error);
      });
      it('throws error for undefined', () => {
        expect(() => {
          date.readTs(undefined);
        }).to.throw(Error);
      });
      it('throws error for negative value in nun', () => {
        expect(() => {
          date.readTs(-800);
        }).to.throw(Error);
      });
      it('throws error for negative value in str', () => {
        expect(() => {
          date.readTs('-800');
        }).to.throw(Error);
      });
    });
  });
});
