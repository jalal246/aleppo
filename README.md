## Overview
Aleppo is lightweight package written in javascript. It's toolbox contains general collection functions for node.

## Getting Started
Clone the repo:
```sh
git clone git@github.com:jimmy02020/aleppo.git
cd aleppo
```
npm
```sh
$ npm install aleppo
```

## is: true or false functions

**isUn(input)**: tests for undefined<br>
**isNull(input)**: tests for null<br>
**isValid(input)**: tests for not being undefined or null <br>
**isObj(input)**: tests for object<br>
**isBool(input)**: tests for Boolean<br>
**isNum(input)**: tests for number<br>
**isStr(input)**: tests for string<br>
**isFn(input)**: tests for function<br>
**isSymb(input)**: tests for symbol<br>
**isArr(input)**: tests for array<br>
**isZeroLength(input)**: tests for zero length<br>
**isStrEmpty(input)**: tests if empty string<br>
**isArrEmpty(input)**: tests if array is empty<br>

## Generators:

**Numbers**:

**const numbers = generators.numbers**:

**numbers.getRandom(min, max, type)**: returns random number in given range.

```
min, max: range number,
type: is string. By default will apply for integer random number. for arbitrary value just pass 'any'.
```

## Getters:

**getters.obj(param)**: discovers key and prop.

```
param  = { foo: 'bar' };
will return key = foo and prop = bar throws error if empty.
```
