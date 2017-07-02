# Aleppo

[![NPM](https://nodei.co/npm/aleppo.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/aleppo/)

[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)](https://travis-ci.org/Jimmy02020/aleppo)
[![Codecov](https://img.shields.io/codecov/c/github/codecov/example-python.svg)](https://codecov.io/gh/Jimmy02020/aleppo)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/Jimmy02020/aleppo/blob/master/LICENSE)

Overview
--------
Aleppo is utility functions written in [JavaScript](http://en.wikipedia.org/wiki/JavaScript).

Usage
-------------

### Validation - IS
* [npm package](#npm_is)
* [isUn](#isUn)
* [isNull](#isNull)
* [isValid](#isValid)
* [isObj](#isObj)
* [isBool](#isBool)
* [isNum](#isNum)
* [isStr](#isStr)
* [isFn](#isFn)
* [isArr](#isArr)
* [isZeroLength](#isZeroLength)
* [isStrEmpty](#isStrEmpty)
* [isArrEmpty](#isArrEmpty)


### Function execution - DOO
* [npm package](#npm_doo)
* [iterator](#doo_iterator)
* [array](#doo_array)
* [object](#doo_object)

### Time and date
* [delay](#delay)
  * [npm package](#npm_delay)
  * [options allowed](#delay_options)
* [date](#date)
  * [npm package](#npm_date)
  * [now](#date_now)
  * [later](#date_later)
  * [ago](#date_ago)
  * [readTs](#date_readTs)
  * [isLeap](#date_isLeap)
  * [isCommon](#date_isCommon)
  * [yearType](#date_yearType)
  * [daysCountInMonth](#date_dayCountInMonth)
  * [countBtw](#date_countBtw)
  * [options allowed](#date_options)
  * [separators allowed](#date_separators)

### Other

* [Tests](#Tests)
* [License](#License)



Getting Started
---------------

clone the repo:
```sh
git clone git@github.com:jimmy02020/aleppo.git
cd aleppo
```

Using npm:
```sh
$ npm install aleppo
```

Validation - IS
--------------

Boolean validation functions. IS-functions can deal with one argument or multiple arguments as it accepts the [spread syntax](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator).

<a name="npm_is" />

```bash
$ npm i aleppo.is
```

<a name="isUn" />

### isUn (...inputs)

Checks if undefined returns true, otherwise returns false.

__Examples__

```javascript
const { isUn } = require('aleppo')
isUn(undefined, a, b, c, d, e) // true
isUn('hi', 'there', 'I am defined') // false
isUn('defined', y, undefined) // false. one of parameters failed to pass.
```
<a name="isNull" />

### isNull(...inputs)

Checks if null returns true otherwise returns false.

__Examples__

```javascript
const { isNull } = require('aleppo')
isNull(null, null) // true
isNull(null, "hi") // false, one of the parameters failed.
isNull(undefined, null, 'still', 'false', 'because', 'of undefined and null') // false
```

<a name="isValid" />

### isValid(...inputs)

Checks if not being undefined or null returns true otherwise returns false.

__Examples__

```javascript
const { isValid } = require('aleppo')
isValid("welcome", "to", "the", "club") // true
isValid(null, "hi") // false, one of the parameters failed.
isValid(undefined, null, 'still', 'false', 'because', 'of undefined and null') // false
```
<a name="isObj" />

### isObj(...inputs)

Checks if object returns true otherwise returns false.

__Examples__

```javascript
const { isObj } = require('aleppo')
isObj({ boo: 'foo' }, { baz: 'doo' }) // true
isObj(null, { boo: 'foo' }, { baz: 'doo' }) // false
```
<a name="isBool" />

### isBool(...inputs)

Checks if Boolean returns true otherwise returns false.

__Examples__

```javascript
const { isBool } = require('aleppo')
isBool(true, false) // true
isBool(1,2,3,4,5,6,7,100) // false
```
<a name="isNum" />

### isNum(...inputs)

Checks if numbers returns true otherwise returns false.

__Examples__

```javascript
const { isNum } = require('aleppo')
isNum('hello') // false
isNum(1,2,3,4,5,6,7,100) // true
```

<a name="isStr" />

### isStr(...inputs)

Checks if string returns true otherwise returns false.

__Examples__

```javascript
const { isStr } = require('aleppo')
isStr('hello', 'thanks for' , 'being here') // true
isStr(1,2,3,4,5,6,7,100) // false
```

<a name="isFn" />

### isFn(...inputs)

Checks if function returns true otherwise returns false.

__Examples__

```javascript
const { isFn } = require('aleppo')
isFn(function () { return 'tiny  fnc' }) // true
isFn(1,2,3,4,5,6,7,100) // false
```

<a name="isArr" />

### isArr(...inputs)

Checks if arrays returns true otherwise returns false.

__Examples__

```javascript
const { isArr } = require('aleppo')
isArr(['yeah'], [1,3], ['sure it is']) // true
isArr(1,2,3,4,5,6,7,100, 'string') // false
```

<a name="isZeroLength" />

### isZeroLength(...inputs)

Checks if strings zero length returns true otherwise returns false.

__Examples__

```javascript
const { isZeroLength } = require('aleppo')
isZeroLength([], '', []) // true
isZeroLength([1,2,3,4,5,6,7,100], 'string', [], '') // false
```

<a name="isStrEmpty" />

### isStrEmpty(...inputs)

Checks if strings are empty returns true otherwise returns false.

__Examples__

```javascript
const { isStrEmpty } = require('aleppo')
isStrEmpty('') // true
isStrEmpty('not empty string') // false
```

<a name="isArrEmpty" />

### isArrEmpty(...inputs)

Checks if arrays are empty returns true otherwise returns false.

__Examples__

```javascript
const { isArrEmpty } = require('aleppo')
isArrEmpty([]) // true
isArrEmpty(['what do you think?']) // false
```

Function execution - DOO
------------------------

Executes multiple arguments with multiple functions in one call. Returns the results in required form.
It passes each argument to all functions, after it's done with the first argument, it moves to process the second argument, so on so forth.

<a name="npm_doo" />

```bash
$ npm i aleppo.doo
```

<a name="doo_iterator" />

### doo.iterator([...funcs], [...args])

Returns [iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) object of results.

__Example__ : ```doo.iterator```

```javascript
const { doo } = require('aleppo')
// suppose we have two functions
function  greetings (name) { return `hello ${name}` }
function  bye (name) { return `goodbye ${name}!` }

const result =  doo.iterator([greetings, bye], ['Jimmy', 'Catherine'])
// pass the first argument to the first function.
result.next() // { value: 'hello Jimmy', done: false }

// pass the first argument to the second function.
result.next() // { value: 'goodbye Jimmy!', done: false }

// done with first argument, pass the second one to the first function.
result.next() // { value: 'hello Catherine', done: false }

// pass the second argument to the first function.
result.next() // { value: 'goodbye Catherine!', done: false }

// done will be true when finishing
result.next() // { value: undefined, done: true }
 ```

<a name="doo_array" />

### doo.array([...funcs], [...args])

Returns array of results.

__Example__

```javascript
// continue working with same functions above
const result =  doo.array([greetings, bye], ['Jimmy', 'Catherine'])
console.log(result);
// will print
[ 'hello Jimmy', 'goodbye Jimmy!', 'hello Catherine', 'goodbye Catherine!' ]
```

<a name="doo_object" />

### doo.object([...funcs], [...args])

Returns array of objects [{func: 'Function name', result: 'result of the function'}]

__Example__

```javascript
// continue working with same functions above
const result =  doo.object([greetings, bye], ['Jimmy', 'Catherine'])
console.log(result);
// will print
[
  { func: 'greetings', result: 'hello Jimmy' },
  { func: 'bye', result: 'goodbye Jimmy!' },
  { func: 'greetings', result: 'hello Catherine' },
  { func: 'bye', result: 'goodbye Catherine!' }
]
```


Time and date
-------------

A set of functions to deal and manipulate with time and date.

<a name="delay" />

### Delay

Calculates delay time according to given option then returns it in milliseconds.

<a name="npm_delay" />

```bash
$ npm i aleppo.delay
```

```javascript
const { delay } = require('aleppo')
```

<a name= "delay_options" />

###### Types of options formats are:
* ```year/years/yrs/y/yy/yyy/yyyy```: delay by years.   
* ```d/dd/day/days```: delay by days.   
* ```h//hr/hrs/hour/hours``` : delay by hours.   
* ```w/week/weeks```:  delay by weeks.
* ```mo/mos/month/months/mth/mths``` : delay by months.   
* ```m/min/mins/minute/minutes```: delay by minutes.
* ```s/sec/secs/second/seconds``` : delay by seconds.   
* ```ms/mili/milisec/milisecs/milisecond/miliseconds``` : delay by milliseconds.  

__Example__

```javascript
const { delay } = require('aleppo')

delay('1h') //  3600000.
setTimeout(()=>'hello from the other side', delay('10m') + Date.now());
// will print hello form the other side after ten minutes from now.
```

<a name="date" />

### Date:

Deals with time and date, in readable form. It has nine major helper functions to compute time and date.

<a name="npm_date" />

```bash
$ npm i aleppo.date
```

<a name= "date_now" />

#### date.now([, options])

Returns current date or time format according to required option.
  - ```options``` is String. [Here all valid options](#date_options).
  - Default value is current local time.
  - Date format can use one of the following [separators](#date_separators).
  - ```now``` throws an error when options is not String or valid.

__Example__

```javascript
const { date } = require('aleppo')

// default is local time.
date.now() // 6/17/2017, 3:00:03 PM

date.now('ts')
// return current timestamp 1495989532977.

date.now('hr:day:mo:week') // 18:Sunday:5:21
/*
* hr --> current hour
* hr --> current day
* hr --> current month
* hr --> current week
* : --> separator
*/

date.now('year,day,week,month,second') // 2017:Sunday:21:May:52
// same as above but more complex request and different separator.

date.now('year') // 2017
date.now('yy') // 17
date.now('mon') // 6
date.now('mth') // Jun
date.now('month') // June
date.now('wk') // 23
```

<a name= "date_later" />

#### date.later(Xoptions[, ts|fullDate])

Returns later date or time according to required option. ```Later``` computes the difference of time accurately, taking into consideration year type and days count in each month.

  - ```Xoptions``` is String. Combined of number of times with [valid options](#date_options). X is 1 by default.
  - ```ts``` If you want to return value in timestamp, pass 'ts'.
  - ```fullDate``` If you want to return full date object, contains { yr, mo, dy, hr, min, sec}
  - Complex date format is not allowed.
  - ```later``` throws an error when options is missing, not String or invalid.

__Example__

```javascript
const { date } = require('aleppo')

/*
* Today is  Sunday, June 18, 2017
*/

date.later('10days') // Wednesday
date.later('10d') // 3
date.later('10dd') // Wed

date.later('2wk') // 26
date.later('2wk', 'ts') // 1499015984347
date.later('2wk', 'fullDate') // { yr: 2017, mo: 7, dy: 2, hr: 19, min: 20, sec: 0 }

date.later('12mo') // 6
date.later('12mth') // Jun
date.later('12month') // June
```

<a name= "date_ago" />     

#### date.ago(Xoptions[, ts|fullDate])

Returns any required format for time or date happened ago from now. ```ago``` computes the difference of time accurately, taking into consideration year type and days count in each month.

  - ```Xoptions``` is String. Combined of number of times with [valid options](#date_options). X is 1 by default.
  - ```ts``` If you want to return value in timestamp, pass 'ts'.
  - ```fullDate``` If you want to return full date object, contains { yr, mo, dy, hr, min, sec}
  - Complex date format is not allowed.
  - ```ago``` throws an error when options is missing, not String or invalid.

__Example__

```javascript
const { date } = require('aleppo')

/*
* let's try time here since we tried date above.
* Today, time is 7: 30 PM
*/

date.ago('hour') // 18
date.ago('hr24') // 18
date.ago('hr12') // 6: 30 pm
date.ago('2hr12') // 5:30 pm
date.ago('2hr12', 'ts') // 1497803572706
```

<a name= "date_readTs" />

#### date.readTs(timestamp)

Returns readable timestamp object. Contains yr, mo, dy, hr, min, sec.
  - ``timestamp`` can be Number or String.
  - ```readTs``` throws an error when timestamp is missing or invalid.

__Example__

```javascript
const { date } = require('aleppo')

date.readTs(1503247105430)
// returns
{ yr: 2017, mo: 5, dy: 23, hr: 19, min: 15, sec: 45 }
```

<a name= "date_isLeap" />

#### date.isLeap([, year])

Returns Boolean. True if the year is [leap](https://en.wikipedia.org/wiki/Leap_year). False for otherwise.
  - Default value is current year.
  - ```isLeap``` throws an error when year is not valid number or valid value.

__Example__

```javascript
const { date } = require('aleppo')

date.isLeap(2019) // false
date.isLeap(2000) // true

// default is the current year 2017.
date.isLeap() // false
```

<a name= "date_isCommon" />

#### date.isCommon([, year])

Returns Boolean. True if the year is [common](https://en.wikipedia.org/wiki/Common_year). False for otherwise.
  - Default value is current year.
  - ```isCommon``` throws an error when year is not valid number or valid value.

__Example__

```javascript
const { date } = require('aleppo')

date.isCommon(2028) // false
date.isCommon(2018) // true

// default is the current year 2017.
date.isCommon() // true
```

<a name= "date_yearType" />

#### date.yearType([, year])

Returns String of year type [common](https://en.wikipedia.org/wiki/Common_year) or [leap](https://en.wikipedia.org/wiki/Leap_year).
  - ```year``` is Number
  - Default value is current year.
  - ```yearType``` throws an error when year is not valid number or valid value.


__Example__

```javascript
const { date } = require('aleppo')
const date = getters.date

date.yearType(2000) // leap

date.yearType(1999) // common

date.yearType(2028) // leap

// default is the current year 2017.
date.yearType() // common
```

<a name= "date_daysCountInMonth" />

#### date.daysCountInMonth([, monthNum] [, year])

Returns number of days in required month. Taking into consideration whether the year is [common](https://en.wikipedia.org/wiki/Common_year), or [leap](https://en.wikipedia.org/wiki/Leap_year) to return the right number of days for February.
  - ```monthNum``` and ```year``` are Numbers
  - Default value for ```monthNum``` is current month number, ```year``` is current year.
  - ```daysCountInMonth``` throws an error if:
    - Month number is not correct.
    - One of the input date is not valid number.

__Example__

```javascript
const { date } = require('aleppo')

// February in common year
date.daysCountInMonth(2, 2018) // 28

// February in leap year
date.daysCountInMonth(2, 2016) // 29

// regular month number
date.daysCountInMonth(1, 2017) // 31

// default, returns the current month(June) days for the current year(2017).
date.daysCountInMonth() // 30
```

<a name= "date_countBtw" />

#### date.countBtw(type[, [, from|timestamp] [, to|timestamp ]] [-i])

```
date.countBtw(type)
date.countBtw(type, to)
date.countBtw(type, from, to, i)
```

Computes the difference between two dates and returns objects of results.

  - ```type``` is type of request, all/year/month/week/day. All relevant [options](#date_options) are valid.
  - ```from``` String or Number.
    * Default value is 1/1/currentYear.
    * String for date format request should be "dd/mm/yyyy".
    * Number will be explained according to request type.
     * If your request type is ```year``` number will be converted to 1/1/year.
     *  ``month`` to 1/month/currentYear. ```day``` to day/1/currentYear.
  - ```to``` String or Number. Same as ```from``` with major difference. ```to``` converts number to current date instead of beginning of the year.
    * Default value is currentDay/currentMonth/currentYear.
    * If your request type is ```year``` number will be converted to: currentDay/currentMonth/year.
    * ``months`` to currentDay/month/currentYear. ```day``` to day/currentMonth/currentYear.
  - ```i``` A flag constiable, false by default. If you want to include the last day in the result, pass 'i' to include it.
  - returns object of request type and remainder of calculations if there is any.

  Note:
  - Both ```from``` and ```to``` accepts timestamp as numbers.
  - One date argument is considered as ```to```.
  - Date format can use one of the following [separators](#date_separators).
  - ```countBtw``` throws an error if:
    - No type is provided.
    - One of the input date is not valid.
    - Type of request is not valid or missing.

__Example__

```javascript
const { date } = require('aleppo')

date.countBtw('yrs')
// returns:
 { years: 0, months: 5, days: 15 }
 /*
 * since there is no from and to.
 * from will be: 1/1/2017
 * to will be now: 16/6/2017 (current date)
 * returns object of all forms since no specific type was entered.
 */

date.countBtw('yrs', 2017)
// returns:
 { years: 0, months: 5, days: 15 }
/* same result as above.
* one date argument is to.
* number with year it means year number.
* year number will be converted tp date form including now parameters.
* 2017--> 16/6/2017 (current month and day date)
* from of course  1/1/2017
*/

date.countBtw('yrs', 2017, 2050, 'i')
// returns
{ years: 33, months: 5, days: 16 }
/* from : 2017--> 1/1/2017
* to : 2015--> 16/6/2050 (current month and day date)
* i: include last day 16/6/2050
*/

date.countBtw('yrs', '13/5/2089', '1/1/2010')
// returns
 { years: 79, months: 4, days: 12 }

// let's pass timestamp for "Thu, 01 Jun 2017 17:21:31 GMT"
// which it's 1496337691025
 date.countBtw('yrs', '1.1.1990', 1496337691025)
 // returns
 { years: 27, months: 5, days: 0 }


date.countBtw('mos')
// returns:
{ months: 5, days: 15 }
/*
* default:
* from --> 1/1/2017
* to --> 16/6/2017 (current year and day date)
*/

date.countBtw('mos', 10)
// returns:
{ months: 9, days: 15 }
/*
* default from is 1/1/2017
* converted to is 16/10/2017 (current year and day date)
*/

date.countBtw('mos', 10, 12, 'i')
// returns:
{ months: 2, days: 16 }
/*
* default from is 1/10/2017
* converted to is 16/12/2017 (current year and day date)
* plus one day because of i - include last day
*/

date.countBtw('mos', '13/5/2089', '1/1/2010')
// returns:
 { months: 952, days: 12 }

date.countBtw('day')
// returns
{ days: 166 }
/*
* default:
* from --> 1/1/2017
* to --> 16/6/2017 (current year and day date)
*/

date.countBtw('day', 10)
// returns
{ days: 174 }
/*
* default from is 1/1/2017
* converted to is 10/6/2017 (current month and day date)
*/

date.countBtw('d', '13/5/2089', '1/1/2010')
// returns:
{ days: 28987 }

date.countBtw('weeks', '1/1/2010', '1/1/2011')
// returns:
{ weeks: 52, days: 1 }

date.countBtw('all', '1/1/2010', '18/9/2031')
// returns object difference:
{
  inDays: 7930,
  inWeeks: { weeks: 1132, days: 6 },
  inMonths: { months: 260, days: 17 },
  inYears: { years: 21, months: 8, days: 17 }
}
```

<a name= "date_options" />

###### Available options format:           

* ```year/years/yrs/yyyy```: full year/ four digits.
* ```y/yy/yyy```: two digits year.
* ```mo/mon/mos/mons```: month number.      
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
* ```local``` : local date and time. (available only for now function)  
* ```local date/localDate``` : local date.(available only for now function)  
* ```local time/localTime``` : local time.  (available only for now function)
* ```utc``` : UTC time.  (available only for now function)

<a name= "date_separators" />

###### Types of valid separators are:

* ```-```  or  ```/```  or  ```.```  or  ```:```  or  ```,```  or  ```<space>```

Tests
-----

```sh
$ npm test
```

License
-------

This project is licensed under the [MIT License](https://github.com/Jimmy02020/aleppo/blob/master/LICENSE)
