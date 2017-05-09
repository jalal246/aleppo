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
isUn(input) //tests for undefined.
isNull(input) //tests for null.
isValid(input) //tests for not being undefined or null.
isObj(input) //tests for object.
isBool(input) //tests for Boolean.
isNum(input) //tests for number.
isStr(input) //tests for string.
isFn(input) //tests for function.
isSymb(input) //tests for symbol.
isArr(input) //tests for array.
isZeroLength(input) //tests for zero length.
isStrEmpty(input) //tests if string is empty.
isArrEmpty(input) //tests if array is empty..
```

# Generators:

1. **Numbers**:
    ```javascript
    const numbers = generators.numbers;

    numbers.getRandom(min, max, type) //returns random number in given range.
    // type: is string. By default will apply for integer random number. for arbitrary value just pass 'any'.
    ```

# Getters:

1. **object**:
    ```javascript
    getters.obj(input) // returns key and prop.
    // param  = { foo: 'bar' };
    // will return key = foo and prop = bar throws error if  empty.
    ```
2. **dealy**:
    ```javascript
    getters.delay(option) // returns delay time in microsecondsm according to given option.
    // getters.delay("10m") ==> 600000
    ```

    ###### Types of options formats are:
    * ```y/year/years```: returns delay in years.   
    * ```d/day/days```: returns delay in days.   
    * ```h/hour/hours``` : returns delay in hours.   
    * ```w/week/weeks```:  returns delay in weeks.
    * ```mo/mos/months``` : returns delay in months.   
    * ```m/minute/minutes```: returns delay in minutes.
    * ```s/second/seconds``` : returns delay in seconds.   
    * ```ms/millisecond/milliseconds``` : returns delay in milliseconds.   


# Tests

```sh
$ npm test
```

# License

This project is licensed under the [MIT License](https://github.com/Jimmy02020/aleppo/blob/master/LICENSE)
