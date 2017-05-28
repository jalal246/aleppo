/* eslint-env mocha */

import chai from 'chai';
import getters from '../src/getters';

const expect = chai.expect;

const date = getters.date;

describe('getters', () => {
  describe('3- date', () => {
    describe('E- INFO', () => {
      it('2- returns true for leap year test', () =>
        expect(date.isLeap(2028)).to.be.ok,
      );
      it('3- returns true for common year test', () =>
        expect(date.isCommon(2018)).to.be.ok,
      );
      it('4- returns year type', () =>
        expect(date.yearType(2018)).to.be.equal('common'),
      );
    });
  });
});
