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

# IS: true or false validation functions

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

  ```javascript
  //example
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
    ```javascript
    // getters.obj(object)
    // example:
    const test  = { foo: 'bar' };
    getters.obj(test); // will return:  key = foo, prop = bar
    ```


2. **delay**: calculates delay time according to given option.    
    ```javascript
    // getters.delay(option)
    // example
    getters.delay('1h') //  3600000.
    getters.delay('10m') + Date.now() // returns time after ten minutes in milliseconds
    ```

    #### Types of options formats are:
    * ```y/year/years```: returns delay in years.   
    * ```d/day/days```: returns delay in days.   
    * ```h/hour/hours``` : returns delay in hours.   
    * ```w/week/weeks```:  returns delay in weeks.
    * ```mo/mos/month/months``` : returns delay in months.   
    * ```m/minute/minutes```: returns delay in minutes.
    * ```s/second/seconds``` : returns delay in seconds.   
    * ```ms/millisecond/milliseconds``` : returns delay in milliseconds.   


3. **date**: deals with time and date, in readable form.
    ```javascript
    const date = getter.date
    ```
    ##### date.now(option|options)
    ##### date.later(option, {ts|full date})  
    ##### date.ago(option, {ts|full date})
    ##### date.readTs(timestamp)
    ##### date.isLeap(year)
    ##### date.isCommon(year)
    ##### date.yearType(year)

    ###### Types of options formats are:
    * ```year/years/yrs/yyyy```: full year/ four digits.
    * ```y/yy/yyy```: two digits year.
    * ```mo/mos```: month in number.      
    * ```mth/mths```: month short name.   
    * ```month/months```: month full name.   
    * ```w/wk/week/weeks```: week number.
    * ```d```: day number in the week.
    * ```dd```: day short name.   
    * ```day/days```: day full name.   
    * ```h/hr/hrs/hour/hours/h24/hr24/hrs24/hour24/hours24``` : 24-hour form.   
    * ```h12/hr12/hrs12/hour12/hours12```:  12-hour form.
    * ```m/min/mins/minute/minutes``` : minutes.   
    * ```s/sec/secs/second/seconds``` :  seconds.   
    * ```ms/mili/milisec/milisecs/milisecond/miliseconds``` : milliseconds.   
    * ```ts/timestamp```: timestamp. (available only for now function)  
    * ```blocal``` : local date and time. (available only for now function)  
    * ```local date/localDate``` : local date.(available only for now function)  
    * ```local time/localTime``` : local time.  (available only for now function)
    * ```'-' or '/' or'.' or':' or ' ' ``` : separators accepted for multiple request (available only for now function)

    ```javascript
    const date = getter.date
    date.now('ts') // return current timestamp 1495989532977.
    date.now('hr:day:mo:week')// returns current required form 18:Sunday:5:21
    date.now('year:day:week:month:second') // returns 2017:Sunday:21:May:52
    date.later('40days') // returns Friday. It will be Friday after 40 days from now.
    date.later('10months') // returns March. It will be March after 10 months from now.
    date.later('12weeks', 'ts') // returns timestamp 1503247132981 after 12weeks from now.
    date.later('30months', 'full date') // returns object with full time. Calculates 30 months form now.
    // { year: 2019, month: 11, day: 27, hr: 6, min: 39, sec: 27 }
    date.ago('2years') // returns 2015. 2 years ago from now.
    date.ago('20hr12', 'ts') // returns timestamp for 20 hours ago form now. 1503247105430
    date.ago('8min', 'full date') // returns full date of 8 minutes ago from now. { year: 2019, month: 11, day: 27, hr: 6, min: 38, sec: 59 }
    date.readTs(1503247105430) // { year: 2017, month: 8, day: 20, hr: 18, min: 38, sec: 25 }
    date.isLeap(2028) // true
    date.isCommon(2018) // true
    date.yearType(2018) // common
    ```
    * You can use ```full date/fullDate/f``` for passing full date arguments to later or ago functions and it's optional.
    * You can use ```ts/timestamp``` for passing timestampe argument to later or ago functions and it's optional as well.


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
