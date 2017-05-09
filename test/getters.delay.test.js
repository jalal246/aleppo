/* eslint-env mocha */

import chai from 'chai';
import getters from '../src/getters';

const expect = chai.expect;


describe('getters', () => {
  describe('2- delay', () => {
    it('1- returns 10 miliseconds delay for "10ms" ', () => expect(getters.delay('10ms')).to.equal(10));
    it('2- returns 10 seconds delay for "10s" ', () => expect(getters.delay('10s')).to.equal(10000));
    it('3- returns 10 minutes delay for "10m" ', () => expect(getters.delay('10m')).to.equal(600000));
    it('4- returns 1 hour delay for "1h" ', () => expect(getters.delay('1h')).to.equal(3600000));
    it('5- returns 1 day delay for "1day" ', () => expect(getters.delay('1day')).to.equal(86400000));
    it('6- returns 1 week delay for "1w" ', () => expect(getters.delay('1w')).to.equal(604800000));
    it('7- returns 1 month delay for "1mo" ', () => expect(getters.delay('1mo')).to.equal(2628001152.0000005));
    it('8- returns 1 year delay for "1y" ', () => expect(getters.delay('1y')).to.equal(31536013824.000008));
    it('9- throws an error for unknown format 10z', () => {
      expect(() => {
        getters.delay('10z');
      }).to.throw(Error);
    });
  });
});
