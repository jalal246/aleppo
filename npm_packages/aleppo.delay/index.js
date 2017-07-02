(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["delay"] = factory();
	else
		root["delay"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _delay = __webpack_require__(1);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_delay).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regex = __webpack_require__(2);

var _constants = __webpack_require__(4);

var _funcs = __webpack_require__(6);

var _is = __webpack_require__(8);

/**
 * Calculate time duration accourding to given time format.
 *
 * @param {val} integer. Number wanted for given value.
 * @param {options} char. Character, shortcuts => s : SECOND
                                                  m : MINUTE
                                                  h : HOUR
                                                  d : DAY
                                                  w:  WEEK
                                                  mo: MONTH
                                                  y : YEAR.
 */

var get = function get(val, reqFormat) {
  // year
  if (reqFormat.match(_regex.DATE.YEAR.FULL) || reqFormat.match(_regex.DATE.YEAR.SHORT)) {
    return val * _constants.DELAY_VALUES[7];
  }
  // month
  if (reqFormat.match(_regex.DATE.MONTH.CHAR) || reqFormat.match(_regex.DATE.MONTH.SHORT) || reqFormat.match(_regex.DATE.MONTH.FULL)) {
    return val * _constants.DELAY_VALUES[6];
  }
  // week
  if (reqFormat.match(_regex.DATE.WEEK.CHAR) || reqFormat.match(_regex.DATE.WEEK.SHORT) || reqFormat.match(_regex.DATE.WEEK.FULL)) {
    return val * _constants.DELAY_VALUES[5];
  }
  // day
  if (reqFormat.match(_regex.DATE.DAY.CHAR) || reqFormat.match(_regex.DATE.DAY.SHORT) || reqFormat.match(_regex.DATE.DAY.FULL)) {
    return val * _constants.DELAY_VALUES[4];
  }
  // time
  if (reqFormat.match(_regex.TIME.HOUR.FULL)) {
    return val * _constants.DELAY_VALUES[3];
  }
  if (reqFormat.match(_regex.TIME.MINUTE)) {
    return val * _constants.DELAY_VALUES[2];
  }
  if (reqFormat.match(_regex.TIME.SECOND)) {
    return val * _constants.DELAY_VALUES[1];
  }
  if (reqFormat.match(_regex.TIME.MILISECOND)) {
    return val * _constants.DELAY_VALUES[0];
  }
  return (0, _funcs.err)(val);
};

var delay = function delay(val) {
  if ((0, _is.isValid)(val)) {
    var valArray = val.split(/(\d+)/);
    var value = valArray[1];
    var opt = valArray[2];
    if ((0, _is.isValid)(value, opt)) {
      return get(parseInt(value.trim(), 10), opt.trim().toLowerCase());
    }
    return (0, _funcs.err)(val);
  }
  return (0, _funcs.err)(val);
};

exports.default = delay;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regex = __webpack_require__(3);

Object.defineProperty(exports, 'DATE', {
  enumerable: true,
  get: function get() {
    return _regex.DATE;
  }
});
Object.defineProperty(exports, 'TIME', {
  enumerable: true,
  get: function get() {
    return _regex.TIME;
  }
});
Object.defineProperty(exports, 'LOCAL', {
  enumerable: true,
  get: function get() {
    return _regex.LOCAL;
  }
});
Object.defineProperty(exports, 'ALL', {
  enumerable: true,
  get: function get() {
    return _regex.ALL;
  }
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DATE = {
  YEAR: {
    SHORT: /(?:\by\b|\byy\b|\byyy\b)/ig,
    FULL: /(?:\byear\b|\byears\b|\byrs\b|\byyyy\b)/ig,
    ALL: /(?:\by\b|\byy\b|\byyy\b|\byear\b|\byears\b|\byrs\b|\byyyy\b)/ig
  },
  MONTH: {
    CHAR: /(?:\bmo\b|\bmon\b|\bmos\b|\bmons\b)/ig,
    SHORT: /(?:\bmth\b|\bmths\b)/ig,
    FULL: /(?:\bmonth\b|\bmonths\b)/ig,
    ALL: /(?:\bmo\b|\bmos\b|\bmon\b|\bmons\b|\bmth\b|\bmths|\bmonth\b|\bmonths\b)/ig
  },
  WEEK: {
    CHAR: /\bw\b/ig,
    SHORT: /\bwk\b/ig,
    FULL: /(?:\bweek\b|\bweeks\b)/ig,
    ALL: /(?:\bw\b|\bwk\b|\bweek\b|\bweeks\b)/ig
  },
  DAY: {
    CHAR: /\bd\b/ig,
    SHORT: /\bdd\b/ig,
    FULL: /(?:\bday\b|\bdays\b)/ig,
    ALL: /(?:\bdd\b|\bd\b|\bday\b|\bdays\b)/ig
  }
};

var TIME = {
  HOUR: {
    FULL: /(?:\bh\b|\bhr\b|\bhrs\b|\bhour\b|\bhours\b)/ig,
    FULL_WITH_NUM24: /(?:\bh\b|\bhr\b|\bhrs\b|\bhour\b|\bhours\b|\bh24\b|\bhr24\b|\bhrs24\b|\bhour24\b|\bhours24\b)/ig,
    NUM_12: /(?:\bh12\b|\bhr12\b|\bhrs12\b|\bhour12\b|\bhours12\b)/ig,
    TIMES: {
      NUM_12: /\d+(?:h12\b|hr12\b|bhrs12\b|hour12\b|hours12\b)/ig,
      NUM_24: /\d+(?:h24\b|hr24\b|bhrs24\b|hour24\b|hours24\b)/ig
    }
  },
  MINUTE: /(?:\bm\b|\bmin\b|\bmins\b|\bminute\b|\bminutes\b)/ig,
  SECOND: /(?:\bs\b|\bsec\b|\bsecs\b|\bsecond\b|\bseconds\b)/ig,
  MILISECOND: /(?:\bms\b|\bmili\b|\bmilisec\b|\bmilisecs\b|\bmilisecond\b|\bmiliseconds\b)/ig
};

var LOCAL = {
  TS: /(?:\bts\b|\btimestamp\b)/ig,
  LOCAL: /(\blocal\b)/ig,
  LOCAL_DATE: /(?:\blocal date\b|\blocaldate\b)/ig,
  LOCAL_TIME: /(?:\blocal time\b|\blocalTime\b)/ig,
  UTC: /(\butc\b)/ig
};

var ALL = /(\ball\b)/ig;

exports.DATE = DATE;
exports.TIME = TIME;
exports.LOCAL = LOCAL;
exports.ALL = ALL;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(5);

Object.defineProperty(exports, 'DELAY_VALUES', {
  enumerable: true,
  get: function get() {
    return _constants.DELAY_VALUES;
  }
});
Object.defineProperty(exports, 'DELAY_LABELS', {
  enumerable: true,
  get: function get() {
    return _constants.DELAY_LABELS;
  }
});
Object.defineProperty(exports, 'WEEKDAYS', {
  enumerable: true,
  get: function get() {
    return _constants.WEEKDAYS;
  }
});
Object.defineProperty(exports, 'WEEKDAYSABBR', {
  enumerable: true,
  get: function get() {
    return _constants.WEEKDAYSABBR;
  }
});
Object.defineProperty(exports, 'MONTHS', {
  enumerable: true,
  get: function get() {
    return _constants.MONTHS;
  }
});
Object.defineProperty(exports, 'MONTHSABBR', {
  enumerable: true,
  get: function get() {
    return _constants.MONTHSABBR;
  }
});
Object.defineProperty(exports, 'MONTH_DAY_COUNT', {
  enumerable: true,
  get: function get() {
    return _constants.MONTH_DAY_COUNT;
  }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MILISECOND = 1;
var SECOND = 1 * 1000;
var MINUTE = 1000 * 60;
var HOUR = 3.6e+6;
var DAY = 8.64e+7;
var WEEK = 6.048e+8;
var MONTH = 2.628e+9;
var YEAR = 3.154e+10;

var MILISECOND_LABEL = 'milli';
var SECOND_LABEL = 'sec';
var MINUTE_LABEL = 'min';
var HOUR_LABEL = 'hr';
var DAY_LABEL = 'dy';
var WEEK_LABEL = 'wk';
var MONTH_LABEL = 'mo';
var YEAR_LABEL = 'yr';

var DELAY_VALUES = exports.DELAY_VALUES = [MILISECOND, // 0
SECOND, // 1
MINUTE, // 2
HOUR, // 3
DAY, // 4
WEEK, // 5
MONTH, // 6
YEAR];

var DELAY_LABELS = exports.DELAY_LABELS = [MILISECOND_LABEL, SECOND_LABEL, MINUTE_LABEL, HOUR_LABEL, DAY_LABEL, WEEK_LABEL, MONTH_LABEL, YEAR_LABEL];

var WEEKDAYS = exports.WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var WEEKDAYSABBR = exports.WEEKDAYSABBR = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

var MONTHS = exports.MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var MONTHSABBR = exports.MONTHSABBR = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var MONTH_DAY_COUNT = exports.MONTH_DAY_COUNT = [31, 0, // February - 28 days in a common year and 29 days in leap years
31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _err = __webpack_require__(7);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_err).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var err = function err() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'undefined';
  var msg = arguments[1];

  var yellow = '\x1b[33m';
  var red = '\x1b[31m';
  var reset = '\x1b[0m';
  var aux = params && params.length > 1 ? 'are' : 'is';
  var errMsg = void 0;
  if (msg) {
    errMsg = red + msg + reset;
  } else {
    errMsg = yellow + ' Please, enter valid parameter' + (params && params.length > 1 ? 's.' : '.') + ' [' + params + '] ' + aux + ' invalid. ' + reset;
  }
  throw new Error(errMsg);
};

exports.default = err;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _is = __webpack_require__(9);

Object.defineProperty(exports, 'isUn', {
  enumerable: true,
  get: function get() {
    return _is.isUn;
  }
});
Object.defineProperty(exports, 'isNull', {
  enumerable: true,
  get: function get() {
    return _is.isNull;
  }
});
Object.defineProperty(exports, 'isValid', {
  enumerable: true,
  get: function get() {
    return _is.isValid;
  }
});
Object.defineProperty(exports, 'isObj', {
  enumerable: true,
  get: function get() {
    return _is.isObj;
  }
});
Object.defineProperty(exports, 'isBool', {
  enumerable: true,
  get: function get() {
    return _is.isBool;
  }
});
Object.defineProperty(exports, 'isNum', {
  enumerable: true,
  get: function get() {
    return _is.isNum;
  }
});
Object.defineProperty(exports, 'isStr', {
  enumerable: true,
  get: function get() {
    return _is.isStr;
  }
});
Object.defineProperty(exports, 'isFn', {
  enumerable: true,
  get: function get() {
    return _is.isFn;
  }
});
Object.defineProperty(exports, 'isSymb', {
  enumerable: true,
  get: function get() {
    return _is.isSymb;
  }
});
Object.defineProperty(exports, 'isArr', {
  enumerable: true,
  get: function get() {
    return _is.isArr;
  }
});
Object.defineProperty(exports, 'isZeroLength', {
  enumerable: true,
  get: function get() {
    return _is.isZeroLength;
  }
});
Object.defineProperty(exports, 'isStrEmpty', {
  enumerable: true,
  get: function get() {
    return _is.isStrEmpty;
  }
});
Object.defineProperty(exports, 'isArrEmpty', {
  enumerable: true,
  get: function get() {
    return _is.isArrEmpty;
  }
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArrEmpty = exports.isStrEmpty = exports.isZeroLength = exports.isArr = exports.isFn = exports.isStr = exports.isNum = exports.isBool = exports.isObj = exports.isValid = exports.isNull = exports.isUn = undefined;

var _oneArg = __webpack_require__(10);

var _oneArg2 = _interopRequireDefault(_oneArg);

var _doo = __webpack_require__(11);

var _doo2 = _interopRequireDefault(_doo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// typeof functions for multiples args//
// multiple arguments


var isUn = function isUn() {
  for (var _len = arguments.length, candidates = Array(_len), _key = 0; _key < _len; _key++) {
    candidates[_key] = arguments[_key];
  }

  return !_doo2.default.array([_oneArg2.default.isUn], [].concat(candidates)).includes(false);
};
var isNull = function isNull() {
  for (var _len2 = arguments.length, candidates = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    candidates[_key2] = arguments[_key2];
  }

  return !_doo2.default.array([_oneArg2.default.isNull], [].concat(candidates)).includes(false);
};
var isValid = function isValid() {
  for (var _len3 = arguments.length, candidates = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    candidates[_key3] = arguments[_key3];
  }

  return !_doo2.default.array([_oneArg2.default.isValid], [].concat(candidates)).includes(false);
};
var isObj = function isObj() {
  for (var _len4 = arguments.length, candidates = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    candidates[_key4] = arguments[_key4];
  }

  return !_doo2.default.array([_oneArg2.default.isObj], [].concat(candidates)).includes(false);
};
var isBool = function isBool() {
  for (var _len5 = arguments.length, candidates = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    candidates[_key5] = arguments[_key5];
  }

  return !_doo2.default.array([_oneArg2.default.isBool], [].concat(candidates)).includes(false);
};
var isNum = function isNum() {
  for (var _len6 = arguments.length, candidates = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    candidates[_key6] = arguments[_key6];
  }

  return !_doo2.default.array([_oneArg2.default.isNum], [].concat(candidates)).includes(false);
};
var isStr = function isStr() {
  for (var _len7 = arguments.length, candidates = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    candidates[_key7] = arguments[_key7];
  }

  return !_doo2.default.array([_oneArg2.default.isStr], [].concat(candidates)).includes(false);
};
var isFn = function isFn() {
  for (var _len8 = arguments.length, candidates = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    candidates[_key8] = arguments[_key8];
  }

  return !_doo2.default.array([_oneArg2.default.isFn], [].concat(candidates)).includes(false);
};
// const isSymb = (...candidates) => !(doo.array([oneArg.isSymb], [...candidates]).includes(false));

// mixed
var isArr = function isArr() {
  for (var _len9 = arguments.length, candidates = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    candidates[_key9] = arguments[_key9];
  }

  return !_doo2.default.array([_oneArg2.default.isArr], [].concat(candidates)).includes(false);
};

var isZeroLength = function isZeroLength() {
  for (var _len10 = arguments.length, candidates = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    candidates[_key10] = arguments[_key10];
  }

  return !_doo2.default.array([_oneArg2.default.isZeroLength], [].concat(candidates)).includes(false);
};

var isStrEmpty = function isStrEmpty() {
  for (var _len11 = arguments.length, candidates = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
    candidates[_key11] = arguments[_key11];
  }

  return !_doo2.default.array([isValid, isStr, isZeroLength], [].concat(candidates)).includes(false);
};

var isArrEmpty = function isArrEmpty() {
  return isArr.apply(undefined, arguments) && isZeroLength.apply(undefined, arguments);
};

exports.isUn = isUn;
exports.isNull = isNull;
exports.isValid = isValid;
exports.isObj = isObj;
exports.isBool = isBool;
exports.isNum = isNum;
exports.isStr = isStr;
exports.isFn = isFn;
exports.isArr = isArr;
exports.isZeroLength = isZeroLength;
exports.isStrEmpty = isStrEmpty;
exports.isArrEmpty = isArrEmpty;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// single argument


// returns true for valid typeof


// typeof functions//
var isUn = function isUn(candidate) {
  return typeof candidate === 'undefined';
};
var isNull = function isNull(candidate) {
  return candidate === null;
};
var isValid = function isValid(candidate) {
  return !isUn(candidate) && !isNull(candidate);
};
var isObj = function isObj(candidate) {
  return (typeof candidate === 'undefined' ? 'undefined' : _typeof(candidate)) === 'object';
};
var isBool = function isBool(candidate) {
  return typeof candidate === 'boolean';
};
var isNum = function isNum(candidate) {
  return typeof candidate === 'number';
};
var isStr = function isStr(candidate) {
  return typeof candidate === 'string';
};
var isFn = function isFn(candidate) {
  return typeof candidate === 'function';
};
// const isSymb = candidate => typeof candidate === 'symbol';
// const isEqual = (n1, n2) => n1.length === n2.length && n1.every((v, i) => v === n2[i]);

// mixed
var isArr = function isArr(candidate) {
  return Array.isArray(candidate);
};
var isZeroLength = function isZeroLength(candidate) {
  return candidate.length === 0;
};

module.exports = {
  isUn: isUn,
  isNull: isNull,
  isValid: isValid,
  isObj: isObj,
  isBool: isBool,
  isNum: isNum,
  isStr: isStr,
  isFn: isFn,
  // isSymb,
  isArr: isArr,
  isZeroLength: isZeroLength
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _doo = __webpack_require__(12);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_doo).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _marked = [iterator].map(regeneratorRuntime.mark);

/* eslint func-names: ["error", "as-needed"]*/
function iterator(funcs, candidates) {
  var j, i;
  return regeneratorRuntime.wrap(function iterator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          j = 0;

        case 1:
          if (!(j < candidates.length)) {
            _context.next = 12;
            break;
          }

          i = 0;

        case 3:
          if (!(i < funcs.length)) {
            _context.next = 9;
            break;
          }

          _context.next = 6;
          return funcs[i](candidates[j]);

        case 6:
          i += 1;
          _context.next = 3;
          break;

        case 9:
          j += 1;
          _context.next = 1;
          break;

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

var array = function array(funcs, candidates) {
  var results = [];
  for (var j = 0; j < candidates.length; j += 1) {
    for (var i = 0; i < funcs.length; i += 1) {
      results.push(funcs[i](candidates[j]));
    }
  }
  return results;
};

var object = function object(funcs, candidates) {
  var results = [];
  for (var j = 0; j < candidates.length; j += 1) {
    for (var i = 0; i < funcs.length; i += 1) {
      results.push({
        func: funcs[i].name,
        result: funcs[i](candidates[j])
      });
    }
  }
  return results;
};

module.exports = {
  iterator: iterator,
  array: array,
  object: object
};

/***/ })
/******/ ]);
});