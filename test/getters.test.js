/* eslint-env mocha */

import chai from 'chai';
import getters from '../getters';

const expect = chai.expect;

const testParam = { foo: 'bar' };
const testParam2 = {};

describe('getter', () => {
  it('1-gets object key', () => expect(getters.object(testParam).key).to.equal('foo'));
  it('2-gets object property', () => expect(getters.object(testParam).prop).to.equal('bar'));
  it('3- throws an error because an empty object', () => {
    expect(() => {
      getters.object(testParam2);
    }).to.throw(Error);
  });
});
