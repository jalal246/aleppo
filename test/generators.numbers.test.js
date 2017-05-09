/* eslint-env mocha */

import chai from 'chai';
import generators from '../generators';

const numbers = generators.numbers;
const expect = chai.expect;

describe('Generate random number', () => {
  it('1- generates number int', () => {
    expect(numbers.getRandom(10, 20) % 1).to.be.equal(0);
  });
  it('2- generates arbitrary number', () => {
    expect(numbers.getRandom(10, 20, 'any') % 1).to.be.a('number');
  });
  it('3- generates number between specific range', () => {
    expect(numbers.getRandom(11, 20)).to.be.within(11, 20);
  });
});
