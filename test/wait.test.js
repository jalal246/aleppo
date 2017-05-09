/* eslint-env mocha */

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import wait from '../src/wait';


// setting chai to test promise.
chai.use(chaiAsPromised);

// console.log(wait('18s').then(() => console.log('do something')));
const expect = chai.expect;

describe('wait', () => {
  it('1-prints "hello world" after 1 second', () => expect(wait('1s')).to.be.fulfilled);
  it('1- throws an error because option is not defined.', () => {
    expect(() => wait('abc').be.rejectedWith(Error));
  });
});
