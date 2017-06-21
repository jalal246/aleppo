/* eslint-env mocha */

import chai from 'chai';
import chaiIterator from 'chai-iterator';

import doo from '../../src/doo';

const expect = chai.expect;

// functions used in test.
const greetings = name => `hello ${name}`;
const friendly = name => `how are you ${name} today?`;
const bye = name => `goodbye ${name}!`;

chai.use(chaiIterator);

describe('doo', () => {
  describe('A- one function multiple argumensts', () => {
    it('1- iterator', () => {
      expect(doo.iterator([greetings], ['Jimmy', 'Catherine']))
        .iterate.over(['hello Jimmy', 'hello Catherine']);
    });
    it('2- array', () => {
      expect(doo.array([greetings], ['Jimmy', 'Catherine']))
      .to.include.members(['hello Jimmy', 'hello Catherine']);
    });
    it('3- object', () => {
      expect(doo.object([greetings], ['Jimmy', 'Catherine']))
      .to.deep.equal([
        { func: 'greetings', result: 'hello Jimmy' },
        { func: 'greetings', result: 'hello Catherine' },
      ]);
    });
  });
  describe('B- multiple functions one argumenst', () => {
    it('1- iterator', () => {
      expect(doo.iterator([greetings, friendly, bye], ['Jimmy']))
        .iterate.over([
          'hello Jimmy',
          'how are you Jimmy today?',
          'goodbye Jimmy!',
        ]);
    });
    it('2- array', () => {
      expect(doo.array([greetings, friendly, bye], ['Jimmy']))
      .to.include.members([
        'hello Jimmy',
        'how are you Jimmy today?',
        'goodbye Jimmy!',
      ]);
    });
    it('3- object', () => {
      expect(doo.object([greetings, friendly, bye], ['Jimmy']))
      .to.deep.equal([
        { func: 'greetings', result: 'hello Jimmy' },
        { func: 'friendly', result: 'how are you Jimmy today?' },
        { func: 'bye', result: 'goodbye Jimmy!' },
      ]);
    });
  });
  describe('C- multiple functions multiple argumensts', () => {
    it('1- iterator', () => {
      expect(doo.iterator([greetings, friendly, bye], ['Jimmy', 'Catherine']))
        .iterate.over([
          'hello Jimmy',
          'how are you Jimmy today?',
          'goodbye Jimmy!',
          'hello Catherine',
          'how are you Catherine today?',
          'goodbye Catherine!',
        ]);
    });
    it('2- array', () => {
      expect(doo.array([greetings, friendly, bye], ['Jimmy', 'Catherine']))
      .to.include.members([
        'hello Jimmy',
        'how are you Jimmy today?',
        'goodbye Jimmy!',
        'hello Catherine',
        'how are you Catherine today?',
        'goodbye Catherine!',
      ]);
    });
    it('3- object', () => {
      expect(doo.object([greetings, friendly, bye], ['Jimmy', 'Catherine']))
      .to.deep.equal([
        { func: 'greetings', result: 'hello Jimmy' },
        { func: 'friendly', result: 'how are you Jimmy today?' },
        { func: 'bye', result: 'goodbye Jimmy!' },
        { func: 'greetings', result: 'hello Catherine' },
        { func: 'friendly', result: 'how are you Catherine today?' },
        { func: 'bye', result: 'goodbye Catherine!' },
      ]);
    });
  });
});
