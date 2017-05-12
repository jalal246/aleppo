# Overview

Aleppo is lightweight package written in javascript. It's toolbox contains general collection functions for node.

# Getting Started

clone the repo:

```sh
git clone git@github.com:jimmy02020/aleppo.git
cd aleppo
```

npm

```sh
$ npm install aleppo
```

# Usage

# IS: true or false functions

```javascript
isUn(...inputs) //tests for undefineds.
isNull(...inputs) //tests for nulls.
isValid(...inputs) //tests for not being undefineds or nulls.
isObj(...inputs) //tests for objects.
isBool(...inputs) //tests for Booleans.
isNum(...inputs) //tests for numbers.
isStr(...inputs) //tests for strings.
isFn(...inputs) //tests for functions.
isSymb(...inputs) //tests for symbols.
isArr(...inputs) //tests for arrays.
isZeroLength(...inputs) //tests for zero length.
isStrEmpty(...inputs) //tests if strings are empty.
isArrEmpty(...inputs) //tests if arrays are empty.
```
* IS-functions can deal with one argument or multiple arguments.   
example:
  ```javascript
  isZeroLength('hi', 'test', 'i am here'); // returns false.
  isNum(1,2,4,5,7,8,1000); // returns true.
  ```


# doo: resolve multiple arguments with multiple functions in one call.
```javascript
import doo from 'aleppo'

doo.iterator([...funcs],[...args]) //returns iterator object of results.
doo.array([...funcs],[...args]) //returns array of results.
doo.object([...funcs],[...args]) //returns array of objects [{func: 'Function name', result: 'result of the function'}]
```

# Generators:
```javascript
import generators from 'aleppo'
```

1. **Numbers**:
    ```javascript
    const numbers = generators.numbers
    numbers.getRandom(min, max, type) //returns random number in given range.
    // type: is string. By default will apply for integer random number. for arbitrary value just pass 'any'.
    ```
    * full credit for this function goes to
    [Ionuț G. Stan](https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range).

# Getters:
 ```javascript
 import getters from 'aleppo'
 ```

1. **object**:
    ```javascript
    getters.obj(input) // returns key and prop.
    // param  = { foo: 'bar' };
    // will return key = foo and prop = bar throws error if  empty.
    ```


2. **delay**:
    ```javascript
    getters.delay(option) // returns delay time in microsecondsm according to given option.
    // getters.delay("10m") ==> 600000
    ```

    ###### Types of options formats are:
    * ```y/year/years```: returns delay in years.   
    * ```d/day/days```: returns delay in days.   
    * ```h/hour/hours``` : returns delay in hours.   
    * ```w/week/weeks```:  returns delay in weeks.
    * ```mo/mos/month/months``` : returns delay in months.   
    * ```m/minute/minutes```: returns delay in minutes.
    * ```s/second/seconds``` : returns delay in seconds.   
    * ```ms/millisecond/milliseconds``` : returns delay in milliseconds.   

# wait:
```javascript
import wait from 'aleppo'
wait(option) // returns promise.
// wait('20s').then(() => console.log('Hello!')); // 'Hello! will be printed after 20 seconds'
```
* options allowed in wait are the same in delay function.
* full credit for this function goes to
  [Eric Elliott](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261).

# Tests

```sh
$ npm test
```

# License

This project is licensed under the [MIT License](https://github.com/Jimmy02020/aleppo/blob/master/LICENSE)
