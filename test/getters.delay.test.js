/* eslint-env mocha */

import chai from 'chai';
import getters from '../src/getters';

const expect = chai.expect;

const testParam = { foo: 'bar' };
const testParam2 = {};

describe('getter', () => {
  it('1-gets object key', () => expect(getters.delay(testParam).key).to.equal('foo'));
  it('2-gets object property', () => expect(getters.delay(testParam).prop).to.equal('bar'));
  it('3- throws an error because an empty object', () => {
    expect(() => {
      getters.obj(testParam2);
    }).to.throw(Error);
  });
});
