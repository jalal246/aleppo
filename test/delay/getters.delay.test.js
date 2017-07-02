/* eslint-env mocha */

import chai from 'chai';
import delay from '../../src/delay';

const expect = chai.expect;

describe('Delay', () => {
  it('returns 10 miliseconds delay for "10ms" ', () => expect(delay('10ms')).to.equal(10));
  it('returns 10 seconds delay for "10s" ', () => expect(delay('10s')).to.equal(10000));
  it('returns 10 minutes delay for "10m" ', () => expect(delay('10m')).to.equal(600000));
  it('returns 1 hour delay for "1h" ', () => expect(delay('1h')).to.equal(3600000));
  it('returns 1 day delay for "1day" ', () => expect(delay('1day')).to.equal(86400000));
  it('returns 1 week delay for "1w" ', () => expect(delay('1w')).to.equal(604800000));
  it('returns 1 month delay for "1mo" ', () => expect(delay('1mo')).to.equal(2628000000));
  it('returns 1 year delay for "1y" ', () => expect(delay('1y')).to.equal(31540000000));
  it('throws an error for unknown format : 10z', () => {
    expect(() => {
      delay('10z');
    }).to.throw(Error);
  });
  it('throws an error for unknown format: fake', () => {
    expect(() => {
      delay('fake');
    }).to.throw(Error);
  });
  it('throws an error for null', () => {
    expect(() => {
      delay(null);
    }).to.throw(Error);
  });
  it('throws an error for undefined', () => {
    expect(() => {
      delay(undefined);
    }).to.throw(Error);
  });
});
