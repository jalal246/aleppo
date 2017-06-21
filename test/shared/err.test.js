/* eslint-env mocha */
import chai from 'chai';
import err from '../../src/shared/funcs/err';

const expect = chai.expect;

describe('err', () => {
  it('throw an err with default msg', () => {
    expect(() => err(['hi', 'bye'])).to.throw('Please, enter valid parameters. [hi,bye] are invalid.');
  });
  it('throw an err with custom msg: well done function', () => {
    expect(() => err(['hi', 'bye'], 'well done function')).to.throw('well done function');
  });
});
