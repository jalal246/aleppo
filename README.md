# Aleppo

Overview
--------
Aleppo is utility functions written in [JavaScript](http://en.wikipedia.org/wiki/JavaScript).

Documentation
-------------

### Validation - IS

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

* [doo.iterator](#doo_iterator)
* [doo.array](#doo_array)
* [doo.object](#doo_object)

### Getters
* [obj](#getters_obj)
* [delay](#getters_delay)
* [date](#getters_date)
  * [options allowed](#getters_date_options)
  * [date.now](#getters_date_now)
  * [date.later](#getters_date_later)
  * [date.ago](#getters_date_ago)
  * [date.readTs](#getters_date_readTs)
  * [date.isLeap](#getters_date_isLeap)
  * [date.isCommon](#getters_date_isCommon)
  * [date.yearType](#getters_date_yearType)

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

 npm
```sh
$ npm install aleppo
```

Validation - IS
--------------

Boolean validation functions. IS-functions can deal with one argument or multiple arguments as it accepts the [spread syntax](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator).   

<a name="isUn" />
### isUn(...inputs)

Checks if undefined returns true, otherwise returns false.

__Examples__

```javascript
import { isUn } from 'aleppo'
isUn(undefined, a, b, c, d, e) // true
isUn('hi', 'there', 'I am defined') // false
isUn('defined', y, undefined) // false. one of parameters failed to pass.
```
<a name="isNull" />
### isNull(...inputs)

Checks if null returns true otherwise returns false.

__Examples__

```javascript
import { isNull } from 'aleppo'
isNull(null, null) // true
isNull(null, "hi") // false, one of the parameters failed.
isNull(undefined, null, 'still', 'false', 'because', 'of undefined and null') // false
```

<a name="isValid" />
### isValid(...inputs)

Checks if not being undefined or null returns true otherwise returns false.

__Examples__

```javascript
import { isValid } from 'aleppo'
isValid("welcome", "to", "the", "club") // true
isValid(null, "hi") // false, one of the parameters failed.
isValid(undefined, null, 'still', 'false', 'because', 'of undefined and null') // false
```
<a name="isObj" />
### isObj(...inputs)

Checks if object returns true otherwise returns false.

__Examples__

```javascript
import { isObj } from 'aleppo'
isObj({ boo: 'foo' }, { baz: 'doo' }) // true
isObj(null, { boo: 'foo' }, { baz: 'doo' }) // false
```
<a name="isBool" />
### isBool(...inputs)

Checks if Boolean returns true otherwise returns false.

__Examples__

```javascript
import { isBool } from 'aleppo'
isBool(true, false) // true
isBool(1,2,3,4,5,6,7,100) // false
```
<a name="isNum" />
### isNum(...inputs)

Checks if numbers returns true otherwise returns false.

__Examples__

```javascript
import { isNum } from 'aleppo'
isNum('hello') // false
isNum(1,2,3,4,5,6,7,100) // true
```

<a name="isStr" />
### isStr(...inputs)

Checks if string returns true otherwise returns false.

__Examples__

```javascript
import { isStr } from 'aleppo'
isStr('hello', 'thanks for' , 'being here') // true
isStr(1,2,3,4,5,6,7,100) // false
```

<a name="isFn" />
### isFn(...inputs)

Checks if function returns true otherwise returns false.

__Examples__

```javascript
import { isFn } from 'aleppo'
isFn(() => 'tiny arrow fnc') // true
isFn(1,2,3,4,5,6,7,100) // false
```

<a name="isArr" />
### isArr(...inputs)

Checks if arrays returns true otherwise returns false.

__Examples__

```javascript
import { isArr } from 'aleppo'
isArr(['yeah'], [1,3], ['sure it is']) // true
isArr(1,2,3,4,5,6,7,100, 'string') // false
```

<a name="isZeroLength" />
### isZeroLength(...inputs)

Checks if strings zero length returns true otherwise returns false.

__Examples__

```javascript
import { isZeroLength } from 'aleppo'
isZeroLength([], '', []) // true
isZeroLength([1,2,3,4,5,6,7,100], 'string', [], '') // false
```

<a name="isStrEmpty" />
### isStrEmpty(...inputs)

Checks if strings are empty returns true otherwise returns false.

__Examples__

```javascript
import { isStrEmpty } from 'aleppo'
isStrEmpty('') // true
isStrEmpty('not empty string') // false
```

<a name="isArrEmpty" />
### isArrEmpty(...inputs)

Checks if arrays are empty returns true otherwise returns false.

__Examples__

```javascript
import { isArrEmpty } from 'aleppo'
isArrEmpty([]) // true
isArrEmpty(['what do you think?']) // false
```

Function execution - DOO
------------------------

Executes multiple arguments with multiple functions in one call. Returns the results as required form.
It passes each argument to all functions, after it's done with the first argument, it moves to process the second argument, so on so forth.

<a name="doo_iterator" />
### doo.iterator

Returns [iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) object of results.

__Example__ : ```doo.iterator```

```javascript
import doo from 'aleppo'
// suppose we have three functions
const greetings = name => `hello ${name}`
const bye = name => `goodbye ${name}!`

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
### doo.array

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
### doo.object

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

Getters
-------

Gets object, data, or delay. As required form.

```javascript
import getters from 'aleppo'
```

<a name="getters_object" />
### obj: getters.obj({ parameter })

Returns key and prop for unknown input object.

__Example__

```javascript
import getters from 'aleppo'
const test  = { foo: 'bar' };
getters.obj(test).key; // foo
getters.obj(test).prop; // bar
```

<a name="getters_delay" />
### Delay: getters.delay(option)

Calculates delay time according to given option then returns it in milliseconds.

##### Types of options formats are:
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
import getters from 'aleppo'
getters.delay('1h') //  3600000.
setTimeout(()=>'hello from the other side', getters.delay('10m') + Date.now());
// will print hello form the other side after ten minutes from now.
```

<a name="getters_date" />
### Date:

Deals with time and date, in readable form. It has seven major helper function to compute time and date.

<a name= "getters_date_now" />
#### date.now(option|options)

Returns any required format according to the current time or date.

__Example__

```javascript
import getters from 'aleppo'
const date = getters.date

date.now('ts')
// return current timestamp 1495989532977.

date.now('hr:day:mo:week')
// returns current required form 18:Sunday:5:21

date.now('year:day:week:month:second')
// returns 2017:Sunday:21:May:52
```

<a name= "getters_date_later" />
#### date.later(option, {ts|fulldate})

Returns any required format for time or date will happen later. Like 2 days later from now or three months later.. etc.

__Example__

```javascript
import getters from 'aleppo'
const date = getters.date
date.later('40days')
// returns Friday. It will be Friday after 40 days from now.

date.later('10months')
// returns March. It will be March after 10 months from now.

date.later('12weeks', 'ts')
// returns timestamp 1503247132981 after 12weeks from now.

date.later('30months', 'full date')
// returns object with full time. Calculates 30 months form now.
// { year: 2019, month: 11, day: 27, hr: 6, min: 39, sec: 27 }
```

<a name= "getters_date_ago" />     
#### date.ago(option, {ts|full date})

Returns any required format for time or date happened ago. Like 2 days ago from now or three months ago.. etc.

__Example__

```javascript
import getters from 'aleppo'
const date = getters.date
date.ago('2years')
// returns 2015. 2 years ago from now.

date.ago('20hr12', 'ts')
// returns timestamp for 20 hours ago form now. 1503247105430

date.ago('8min', 'full date')
// returns full date of 8 minutes ago from now. { year: 2019, month: 11, day: 27, hr: 6, min: 38, sec: 59 }
```

<a name= "getters_date_readTs" />
#### date.readTs(timestamp)

Returns readable timestamp object.

__Example__

```javascript
import getters from 'aleppo'
const date = getters.date
date.readTs(1503247105430)
// { year: 2017, month: 8, day: 20, hr: 18, min: 38, sec: 25 }
```

<a name= "getters_date_isLeap" />
#### date.isLeap(year)

Returns true if the years is [leap](https://en.wikipedia.org/wiki/Leap_year), false for otherwise.

__Example__

```javascript
import getters from 'aleppo'
const date = getters.date
date.isLeap(2028) // true
date.isLeap(2018) // false
```

<a name= "getters_date_isCommon" />   
#### date.isCommon(year)

Returns true if the years is [common](https://en.wikipedia.org/wiki/Common_year), false for otherwise.

__Example__

```javascript
import getters from 'aleppo'
const date = getters.date
date.isCommon(2028) // false
date.isCommon(2018) // true
```


<a name= "getters_date_yearType" />
#### date.yearType(year)

Returns the year type [common](https://en.wikipedia.org/wiki/Common_year), or [leap](https://en.wikipedia.org/wiki/Leap_year).

__Example__

```javascript
import getters from 'aleppo'
const date = getters.date
date.yearType(2000) // common
date.yearType(1999) // common
date.yearType(2028) // leap
```

<a name= "getters_date_options" />
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

###### Note
  * You can use ```full date/fullDate/f``` for passing full date arguments to later or ago functions and it's optional.
  * You can use ```ts/timestamp``` for passing timestampe argument to later or ago functions and it's optional as well.


Tests
-----

```sh
$ npm test
```

License
-------

This project is licensed under the [MIT License](https://github.com/Jimmy02020/aleppo/blob/master/LICENSE)
