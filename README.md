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


# doo: resolves multiple arguments with multiple functions in one call.
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

1. **object**: returns key and prop for unknown input.
#### getters.obj(input)

    ```javascript
    // example:
    const test  = { foo: 'bar' };
    getters.obj(test); // will return:  key = foo, prop = bar
    ```


2. **delay**: calculates delay time according to given option.   
#### getters.delay(option)

    ```javascript
    // example
    getters.delay('1h') //  3600000.
    getters.delay('10m')  + Date.now() // returns time after ten minutes in milliseconds
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

# wait: sugared setTimeout() method but it returns promise.
**wait(option)**

```javascript
import wait from 'aleppo'
wait('20s').then(() => console.log('Hello!')); // 'Hello! will be printed after 20 seconds'
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
