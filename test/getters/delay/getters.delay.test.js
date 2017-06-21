/* eslint-env mocha */

import chai from 'chai';
import getters from '../../../src/getters';

const expect = chai.expect;

describe('getters', () => {
  describe('B- Delay', () => {
    it('returns 10 miliseconds delay for "10ms" ', () => expect(getters.delay('10ms')).to.equal(10));
    it('returns 10 seconds delay for "10s" ', () => expect(getters.delay('10s')).to.equal(10000));
    it('returns 10 minutes delay for "10m" ', () => expect(getters.delay('10m')).to.equal(600000));
    it('returns 1 hour delay for "1h" ', () => expect(getters.delay('1h')).to.equal(3600000));
    it('returns 1 day delay for "1day" ', () => expect(getters.delay('1day')).to.equal(86400000));
    it('returns 1 week delay for "1w" ', () => expect(getters.delay('1w')).to.equal(604800000));
    it('returns 1 month delay for "1mo" ', () => expect(getters.delay('1mo')).to.equal(2628000000));
    it('returns 1 year delay for "1y" ', () => expect(getters.delay('1y')).to.equal(31540000000));
    it('throws an error for unknown format : 10z', () => {
      expect(() => {
        getters.delay('10z');
      }).to.throw(Error);
    });
    it('throws an error for unknown format: fake', () => {
      expect(() => {
        getters.delay('fake');
      }).to.throw(Error);
    });
    it('throws an error for null', () => {
      expect(() => {
        getters.delay(null);
      }).to.throw(Error);
    });
    it('throws an error for undefined', () => {
      expect(() => {
        getters.delay(undefined);
      }).to.throw(Error);
    });
  });
});
