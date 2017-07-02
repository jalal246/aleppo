/* eslint-env mocha */

import chai from 'chai';
import chaiIterator from 'chai-iterator';

// import doo from '/../src/doo';

const expect = chai.expect;

// // functions used in test.
// const greetings = name => `hello ${name}`;
// const friendly = name => `how are you ${name} today?`;
// const bye = name => `goodbye ${name}!`;
// import { getters } from '../src';
// const { isStr } = require('../src');
// const { isStr } = require('aleppo')

// console.log(isStr(3));

// import * as is from '../npm_packages/aleppo.delay';

// console.log(is);
import { doo } from '../lib';

// import date from '../npm_packages/aleppo.date';
// import date from '../src/date/date';
// const date = require('../npm_packages/aleppo.date');

// import date from '../src/date/date';

// import { isNull } from '../npm_packages/aleppo.is';
// import { isNull } from '../src/is';
// console.log(isNull);


// import doo from '../npm_packages/aleppo.doo';


console.log(doo);


date.ago('1mo', 'f');

console.log(date.ago('1mo', 'f'));
chai.use(chaiIterator);

describe('Generate random number', () => {
  it('ok', () => expect(true).to.be.ok);
});
