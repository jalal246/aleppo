(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["date"] = factory();
	else
		root["date"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _err = __webpack_require__(13);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_err).default;
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

var _constants = __webpack_require__(14);

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _info = __webpack_require__(15);

Object.defineProperty(exports, 'isLeap', {
  enumerable: true,
  get: function get() {
    return _info.isLeap;
  }
});
Object.defineProperty(exports, 'isCommon', {
  enumerable: true,
  get: function get() {
    return _info.isCommon;
  }
});
Object.defineProperty(exports, 'yearType', {
  enumerable: true,
  get: function get() {
    return _info.yearType;
  }
});
Object.defineProperty(exports, 'daysCountInMonth', {
  enumerable: true,
  get: function get() {
    return _info.daysCountInMonth;
  }
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _is = __webpack_require__(18);

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _formatRequest = __webpack_require__(22);

var _formatRequest2 = _interopRequireDefault(_formatRequest);

var _numFromFormat = __webpack_require__(23);

var _numFromFormat2 = _interopRequireDefault(_numFromFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  formatRequest: _formatRequest2.default,
  numFromFormat: _numFromFormat2.default
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regex = __webpack_require__(24);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _general = __webpack_require__(25);

var _general2 = _interopRequireDefault(_general);

var _countBtw = __webpack_require__(26);

var _countBtw2 = _interopRequireDefault(_countBtw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  general: _general2.default,
  countBtw: _countBtw2.default
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _readTs = __webpack_require__(12);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_readTs).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _general = __webpack_require__(27);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_general).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _count = __webpack_require__(28);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_count).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _general = __webpack_require__(31);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_general).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readTs = __webpack_require__(7);

var _readTs2 = _interopRequireDefault(_readTs);

var _info = __webpack_require__(2);

var _now = __webpack_require__(16);

var _now2 = _interopRequireDefault(_now);

var _laterAgo = __webpack_require__(40);

var _laterAgo2 = _interopRequireDefault(_laterAgo);

var _countBtw = __webpack_require__(9);

var _countBtw2 = _interopRequireDefault(_countBtw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  now: _now2.default,
  ago: function ago(opt, argOptions) {
    return (0, _laterAgo2.default)(opt, argOptions, '-');
  },
  later: function later(opt, argOptions) {
    return (0, _laterAgo2.default)(opt, argOptions, '+');
  },
  readTs: _readTs2.default,
  isLeap: _info.isLeap,
  isCommon: _info.isCommon,
  yearType: _info.yearType,
  daysCountInMonth: _info.daysCountInMonth,
  countBtw: _countBtw2.default
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _funcs = __webpack_require__(0);

var _funcs2 = _interopRequireDefault(_funcs);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isAboveZero = function isAboveZero(n) {
  return n > 0;
};
var parse = function parse(ts) {
  return parseInt(ts, 10);
};
var isValidParse = function isValidParse(ts) {
  return !isNaN(parse(ts));
};
var isvalidStr = function isvalidStr(ts) {
  return typeof ts === 'string' && isValidParse(ts) && isAboveZero(parse(ts));
};

/**
 * Make timeStamp readable.
 *
 * @param {ts} timeStamp.
 */
var readTs = function readTs(ts) {
  if (ts === undefined || ts === null) return (0, _funcs2.default)(ts);
  var date = false;
  if (isvalidStr(ts)) {
    date = new Date(parse(ts));
  } else if (typeof ts === 'number') {
    if (isAboveZero(ts)) {
      date = new Date(ts);
    }
  }
  if (date) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, _constants.DELAY_LABELS[7], date.getUTCFullYear()), _defineProperty(_ref, _constants.DELAY_LABELS[6], date.getUTCMonth() + 1), _defineProperty(_ref, _constants.DELAY_LABELS[4], date.getUTCDate()), _defineProperty(_ref, _constants.DELAY_LABELS[3], date.getUTCHours()), _defineProperty(_ref, _constants.DELAY_LABELS[2], date.getUTCMinutes()), _defineProperty(_ref, _constants.DELAY_LABELS[1], date.getUTCSeconds()), _ref;
  }
  return (0, _funcs2.default)(ts);
};

exports.default = readTs;

/***/ }),
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.daysCountInMonth = exports.yearType = exports.isCommon = exports.isLeap = undefined;

var _constants = __webpack_require__(1);

var _funcs = __webpack_require__(0);

var _funcs2 = _interopRequireDefault(_funcs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var yearType = function yearType() {
  var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getUTCFullYear();
  var isProgrammaticCall = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  // validate only if the user call the function
  if (!isProgrammaticCall) {
    if (typeof year !== 'number' || year < 0) return (0, _funcs2.default)(year);
  }
  if (year % 4 !== 0) return 'common';else if (year % 100 !== 0) return 'leap';else if (year % 400 !== 0) return 'common';
  return 'leap';
};

var isLeap = function isLeap() {
  var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getUTCFullYear();
  var isProgrammaticCall = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return yearType(year, isProgrammaticCall) === 'leap';
};

var isCommon = function isCommon() {
  var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getUTCFullYear();
  var isProgrammaticCall = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return yearType(year, isProgrammaticCall) === 'common';
};

// month
var daysCountInMonth = function daysCountInMonth(monthNum) {
  var year = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date().getUTCFullYear();
  var isProgrammaticCall = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isProg = isProgrammaticCall;
  var month = monthNum;
  if (monthNum === undefined) {
    month = new Date().getUTCMonth();
    isProg = true;
  }
  if (isProg) {
    if (month === 1) {
      if (isLeap(year, true)) {
        return 29;
      }
      return 28;
    }
    return _constants.MONTH_DAY_COUNT[month];
  }
  // called directly by user
  if (month === 2) {
    if (isLeap(year, true)) {
      return 29;
    }
    return 28;
  }
  if (month > 12 || month < 0 || year < 0 || typeof month !== 'number' || typeof year !== 'number') {
    return (0, _funcs2.default)(month);
  }
  return _constants.MONTH_DAY_COUNT[month === 0 ? 0 : month - 1];
};

exports.isLeap = isLeap;
exports.isCommon = isCommon;
exports.yearType = yearType;
exports.daysCountInMonth = daysCountInMonth;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _now = __webpack_require__(17);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_now).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _is = __webpack_require__(3);

var _funcs = __webpack_require__(0);

var _funcs2 = _interopRequireDefault(_funcs);

var _splitter = __webpack_require__(4);

var _splitter2 = _interopRequireDefault(_splitter);

var _processor = __webpack_require__(6);

var _processor2 = _interopRequireDefault(_processor);

var _readableDate = __webpack_require__(8);

var _readableDate2 = _interopRequireDefault(_readableDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var multi = function multi(formatsArray, seperator) {
  var result = '';
  var singleValue = void 0;
  var isErr = [];
  for (var i = 0; i < formatsArray.length; i += 1) {
    var _processor$general = _processor2.default.general(formatsArray[i]),
        expectedTSfunc = _processor$general.expectedTSfunc;

    if (expectedTSfunc) {
      singleValue = _readableDate2.default[expectedTSfunc](new Date().getTime());
    } else {
      singleValue = false;
    }
    // check if result false then the format false
    isErr[i] = singleValue === false;
    result += singleValue;
    // Dont add seperator to the last.
    if (formatsArray.length - 1 !== i) {
      result += seperator;
    }
  }
  // if all the results are fale so return false/
  if (isErr.includes(false)) {
    return result;
  }
  return false;
};

/**
 * main function
 *
 * @param {string} opt - inquiry option. day/month/year/hours..
 * no need to validate opt, beacuse it has default value.
 * @returns {string} - date in matching inquiry form.
 **/

var now = function now() {
  var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'local';

  if (typeof opt !== 'string') return (0, _funcs2.default)(opt);
  var options = opt.trim();
  // split the format to fractions.

  var _splitter$formatReque = _splitter2.default.formatRequest(options),
      formatsArray = _splitter$formatReque.formatsArray,
      separator = _splitter$formatReque.separator;

  var value = void 0;
  // if separator length is zero, the request is required only single function.
  if (separator.length === 0) {
    var _processor$general2 = _processor2.default.general(formatsArray),
        expectedTSfunc = _processor$general2.expectedTSfunc;

    if (!expectedTSfunc) return (0, _funcs2.default)(opt);
    value = _readableDate2.default[expectedTSfunc](new Date().getTime());
  } else {
    value = multi(formatsArray, separator);
  }
  if ((0, _is.isValid)(value) && value !== false) {
    return value;
  }
  return (0, _funcs2.default)(opt);
};

exports.default = now;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArrEmpty = exports.isStrEmpty = exports.isZeroLength = exports.isArr = exports.isFn = exports.isStr = exports.isNum = exports.isBool = exports.isObj = exports.isValid = exports.isNull = exports.isUn = undefined;

var _oneArg = __webpack_require__(19);

var _oneArg2 = _interopRequireDefault(_oneArg);

var _doo = __webpack_require__(20);

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
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _doo = __webpack_require__(21);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_doo).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 21 */
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

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Check user input format. Seprate date from sepreators into array of strings.
 *
 * @param {options} string. Sepreators are: ( - OR / OR . OR : OR space )
 */
var formatRequest = function formatRequest(options) {
  var formatsArray = void 0;
  var separator = void 0;
  if (options.match(/[-]/g)) {
    formatsArray = options.split('-');
    separator = '-';
  } else if (options.match(/[/]/g)) {
    formatsArray = options.split('/');
    separator = '/';
  } else if (options.match(/[.]/g)) {
    formatsArray = options.split('.');
    separator = '.';
  } else if (options.match(/[:]/g)) {
    formatsArray = options.split(':');
    separator = ':';
  } else if (options.match(/[,]/g)) {
    formatsArray = options.split(',');
    separator = ',';
  } else if (options.match(/[ ]/g)) {
    formatsArray = options.split(' ');
    separator = ' ';
  } else {
    formatsArray = options;
    separator = '';
  }
  return {
    separator: separator,
    formatsArray: formatsArray
  };
};

exports.default = formatRequest;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regex = __webpack_require__(5);

// hr12 only without number.
var isOnlyHr12 = function isOnlyHr12(opt) {
  return opt.match(_regex.TIME.HOUR.NUM_12);
};

// hr24 only or hr without number.
var isOnlyHr24 = function isOnlyHr24(opt) {
  return opt.match(_regex.TIME.HOUR.FULL_WITH_NUM24);
};

// is hr12 with times? 18hr12
var isHr12WithNum = function isHr12WithNum(opt) {
  return opt.match(_regex.TIME.HOUR.TIMES.NUM_12);
};

// is hr24 with times? 18hr24
var isHr24WithNum = function isHr24WithNum(opt) {
  return opt.match(_regex.TIME.HOUR.TIMES.NUM_24);
};

/**
 * loop for number and string plz.
 * will check each element in arr and sort it, number or string.
 *
 * @param {array}
 * @return {object} - { times, format }
 **/
var loop = function loop(arr) {
  var formats = false;
  var times = false;
  for (var i = 0; i < arr.length; i += 1) {
    // avoid empty/blanks elements
    if (arr[i].length > 0) {
      if (isNaN(parseInt(arr[i], 10))) {
        // string
        formats = arr[i];
      } else {
        // if (!isNaN(parseInt(arr[i], 10))) : number
        times = arr[i];
      }
    }
  }
  return {
    formats: formats,
    times: times
  };
};

/**
 * This man is a hero, will spreate options from numbers.
 * we have comlex format where format is number.
 *
 * @param {options} string
 * @return {object} - { times, format }
 */
var numFromFormat = function numFromFormat(options) {
  var times = false;
  var formats = false;
  // check if option is not with number.
  if (options.match(/(\d+)/ig) === null) {
    return {
      times: 1,
      formats: options
    };
  }
  // option is  with number.
  if (isHr12WithNum(options)) {
    // number before hr12--> 90hr12
    // will spli opt, exclude hr12 and pass array.
    times = loop(options.split(/hr12/ig)).times;
    formats = 'hr12';
  } else if (isHr24WithNum(options)) {
    // number before hr24--> 90hr24
    // will spli opt, exclude hr24 and pass array.
    times = loop(options.split(/hr24/ig)).times;
    formats = 'hr';
  } else if (isOnlyHr12(options)) {
    // hr12 with no number before.
    times = 1;
    formats = 'hr12';
  } else if (isOnlyHr24(options)) {
    // hr24 or hr with no number before.
    times = 1;
    formats = 'hr';
  } else {
    // pure options with number. Not mixed
    var r = loop(options.split(/(\d+)/));
    times = r.times;
    formats = r.formats;
  }
  return {
    formats: formats,
    times: times
  };
};

exports.default = numFromFormat;

/***/ }),
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regex = __webpack_require__(5);

var _constants = __webpack_require__(1);

/**
 * for now func: just return suitable ts function
 * for ago and later.
 * find out what the right function for the requested general.
 *  note:
 * - computing  mili, sec, min, hr, day and week, all can be accurate.
 * - form months we have different numbers of days.
 * - for years the same, is it 365, or 366.
 *
 * @param {string} formats - options allowed.
 * @returns {object} - timeConstants or function-name
 **/
var general = function general(reqgeneral) {
  var timeConstants = false;
  var expectedTSfunc = false;
  var dateUnit = false; // for ago and later
  // generals belong to all date options begin:
  if (reqgeneral.match(_regex.DATE.YEAR.FULL)) {
    // year  begins ****************************
    // timeConstants = DELAY_VALUES[7];
    expectedTSfunc = 'fullYear';
    dateUnit = 'y';
  } else if (reqgeneral.match(_regex.DATE.YEAR.SHORT)) {
    // timeConstants = DELAY_VALUES[7];
    expectedTSfunc = 'shortYaer';
    dateUnit = 'y';
  } else if (reqgeneral.match(_regex.DATE.MONTH.CHAR)) {
    // month  begins *******************
    // timeConstants = DELAY_VALUES[6];
    expectedTSfunc = 'monthNum';
    dateUnit = 'm';
  } else if (reqgeneral.match(_regex.DATE.MONTH.SHORT)) {
    // timeConstants = DELAY_VALUES[6];
    expectedTSfunc = 'shortMonth';
    dateUnit = 'm';
  } else if (reqgeneral.match(_regex.DATE.MONTH.FULL)) {
    // timeConstants = DELAY_VALUES[6];
    expectedTSfunc = 'fullMonth';
    dateUnit = 'm';
  } else if (reqgeneral.match(_regex.DATE.WEEK.ALL)) {
    timeConstants = _constants.DELAY_VALUES[5];
    expectedTSfunc = 'weekNum';
  } else if (reqgeneral.match(_regex.DATE.DAY.CHAR)) {
    // day begins *************************
    timeConstants = _constants.DELAY_VALUES[4];
    expectedTSfunc = 'dayNum';
  } else if (reqgeneral.match(_regex.DATE.DAY.SHORT)) {
    timeConstants = _constants.DELAY_VALUES[4];
    expectedTSfunc = 'shortDay';
  } else if (reqgeneral.match(_regex.DATE.DAY.FULL)) {
    timeConstants = _constants.DELAY_VALUES[4];
    expectedTSfunc = 'fullDay';
  } else if (reqgeneral.match(_regex.TIME.HOUR.FULL_WITH_NUM24)) {
    // time  begins ********************
    timeConstants = _constants.DELAY_VALUES[3];
    expectedTSfunc = 'hour24';
  } else if (reqgeneral.match(_regex.TIME.HOUR.NUM_12)) {
    timeConstants = _constants.DELAY_VALUES[3];
    expectedTSfunc = 'hour12';
  } else if (reqgeneral.match(_regex.TIME.MINUTE)) {
    timeConstants = _constants.DELAY_VALUES[2];
    expectedTSfunc = 'minutes';
  } else if (reqgeneral.match(_regex.TIME.SECOND)) {
    timeConstants = _constants.DELAY_VALUES[1];
    expectedTSfunc = 'seconds';
  } else if (reqgeneral.match(_regex.LOCAL.TS)) {
    // timestamp *******************************
    expectedTSfunc = 'timeStamp';
  } else if (reqgeneral.match(_regex.LOCAL.LOCAL_DATE)) {
    expectedTSfunc = 'localDate'; // returns full local date only.
  } else if (reqgeneral.match(_regex.LOCAL.LOCAL_TIME)) {
    expectedTSfunc = 'localTime'; // returns full local time only.
  } else if (reqgeneral.match(_regex.LOCAL.LOCAL)) {
    expectedTSfunc = 'local'; // returns full local time and date by default.
  } else if (reqgeneral.match(_regex.LOCAL.UTC)) {
    expectedTSfunc = 'utc';
  }
  return {
    timeConstants: timeConstants,
    expectedTSfunc: expectedTSfunc,
    dateUnit: dateUnit
  };
};

exports.default = general;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regex = __webpack_require__(5);

/**
 * find out what the right function for the requested format.
 * @param {string} reqFormat - options allowed.
 * @returns {object} - computefunc: val that will be used to convert from ms to required form.
                     - expectedTSfunc: function name in gen that will be called later
                                      in case the input was number
 **/
var countBtw = function countBtw(reqFormat) {
  var computefunc = false;
  var expectedTSfunc = false;
  // process the requset format ************************************************
  if (reqFormat.match(_regex.DATE.YEAR.ALL)) {
    // year
    computefunc = 'yearsBtw';
    expectedTSfunc = 'year';
  } else if (reqFormat.match(_regex.DATE.MONTH.ALL)) {
    // month
    computefunc = 'monthsBtw';
    expectedTSfunc = 'month';
  } else if (reqFormat.match(_regex.DATE.WEEK.ALL)) {
    // week
    computefunc = 'weeksBtw';
    expectedTSfunc = 'week';
  } else if (reqFormat.match(_regex.DATE.DAY.ALL)) {
    // day
    computefunc = 'daysBtw';
    expectedTSfunc = 'day';
  } else if (reqFormat.match(_regex.ALL)) {
    // day
    computefunc = 'all';
    expectedTSfunc = 'format';
  }
  return {
    computefunc: computefunc,
    expectedTSfunc: expectedTSfunc
  };
};

exports.default = countBtw;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(1);

var _countBtw = __webpack_require__(9);

var _countBtw2 = _interopRequireDefault(_countBtw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {date} timeStamp.
 */

// year
var fullYear = function fullYear(ts) {
  return new Date(ts).getUTCFullYear();
};
var shortYaer = function shortYaer(ts) {
  return parseInt(fullYear(ts).toString().slice(2), 10);
}; // year as shortcut

// month
var monthNum = function monthNum(ts) {
  return new Date(ts).getUTCMonth() + 1;
}; // January is 0.
var shortMonth = function shortMonth(ts) {
  return _constants.MONTHSABBR[monthNum(ts) - 1];
};
var fullMonth = function fullMonth(ts) {
  return _constants.MONTHS[monthNum(ts) - 1];
};

var weekNum = function weekNum(ts) {
  return (0, _countBtw2.default)('week', new Date(new Date().getUTCFullYear(), 0, 1).getTime(), new Date(ts).getTime()).weeks;
};

// day
var dayNum = function dayNum(ts) {
  return new Date(ts).getUTCDay();
};
var shortDay = function shortDay(ts) {
  return _constants.WEEKDAYSABBR[dayNum(ts)];
};
var fullDay = function fullDay(ts) {
  return _constants.WEEKDAYS[dayNum(ts)];
};

// time
var hour24 = function hour24(ts) {
  return new Date(ts).getUTCHours();
};

// credit : https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
var hour12 = function hour12(ts) {
  var hours = new Date(ts).getUTCHours();
  var minutes = new Date(ts).getUTCMinutes();
  var amPM = hours >= 12 ? 'pm' : 'am';
  hours %= 12;
  hours = hours || 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return hours + ':' + minutes + ' ' + amPM;
};

var minutes = function minutes(ts) {
  return new Date(ts).getUTCMinutes();
};

var seconds = function seconds(ts) {
  return new Date(ts).getUTCSeconds();
};

// timeStamp
var timeStamp = function timeStamp(ts) {
  return new Date(ts).getTime();
};

// returns only local time without date.
var localTime = function localTime(ts) {
  return new Date(ts).toLocaleTimeString();
};

// returns only local time without date.
var localDate = function localDate(ts) {
  return new Date(ts).toLocaleDateString();
};

// return full local date.
var local = function local(ts) {
  return new Date(ts).toLocaleString();
};

var utc = function utc(ts) {
  return new Date(ts).toUTCString();
};

module.exports = {
  // year
  fullYear: fullYear,
  shortYaer: shortYaer,
  // month
  monthNum: monthNum,
  shortMonth: shortMonth,
  fullMonth: fullMonth,
  // week
  weekNum: weekNum,
  // day
  dayNum: dayNum,
  shortDay: shortDay,
  fullDay: fullDay,
  // time
  hour24: hour24,
  hour12: hour12,
  minutes: minutes,
  seconds: seconds,
  // timeStamp
  timeStamp: timeStamp,
  // local
  localTime: localTime,
  localDate: localDate,
  local: local,
  utc: utc
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _is = __webpack_require__(3);

var _funcs = __webpack_require__(0);

var _funcs2 = _interopRequireDefault(_funcs);

var _processor = __webpack_require__(6);

var _processor2 = _interopRequireDefault(_processor);

var _resolver = __webpack_require__(29);

var _resolver2 = _interopRequireDefault(_resolver);

var _compute = __webpack_require__(38);

var _compute2 = _interopRequireDefault(_compute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * main function
 * @param {string} opt - inquiry option. day/month/year/hours..
 * @param {date|number} - from - until inputes date
 * @returns {number} - computed difference btw two required dates
 **/
var countBtw = function countBtw(opt) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  // throw err if no opt avaliable.
  if (!(0, _is.isValid)(opt)) return (0, _funcs2.default)(opt);
  var fromUntil = [];
  var includeLastDay = false;
  if (args.includes('i')) {
    fromUntil = args.slice(0, 2);
    includeLastDay = true;
  } else {
    fromUntil = [].concat(args);
  }

  var _processor$countBtw = _processor2.default.countBtw(opt.trim()),
      computefunc = _processor$countBtw.computefunc,
      expectedTSfunc = _processor$countBtw.expectedTSfunc;
  // if no computefunc, it means opt dosent match any pattern.


  if (!computefunc) return (0, _funcs2.default)([opt].concat(args));
  var frmTl = _resolver2.default.apply(undefined, [expectedTSfunc].concat(_toConsumableArray(fromUntil)));
  // if no tl or frm, it fromUntil is not corret.
  if (!frmTl[0] || !frmTl[1]) return (0, _funcs2.default)(fromUntil);
  // compute
  return _compute2.default[computefunc](frmTl[0], frmTl[1], includeLastDay);
};

exports.default = countBtw;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resolver = __webpack_require__(30);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_resolver).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _timestamp = __webpack_require__(10);

var _timestamp2 = _interopRequireDefault(_timestamp);

var _formatResolver = __webpack_require__(34);

var _formatResolver2 = _interopRequireDefault(_formatResolver);

var _recognizer = __webpack_require__(35);

var _recognizer2 = _interopRequireDefault(_recognizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resolver = function resolver(expectedfunc) {
  for (var _len = arguments.length, fromUntil = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    fromUntil[_key - 1] = arguments[_key];
  }

  var len = _recognizer2.default.length(fromUntil);
  var inputTyp = [len];
  var frmTl = [false, false];
  if (len === 2) {
    if (expectedfunc === 'format') {
      for (var i = 0; i < 2; i += 1) {
        inputTyp[i] = _recognizer2.default.type(fromUntil[i]);
        if (inputTyp[i] === 'format') {
          frmTl[i] = (0, _formatResolver2.default)(fromUntil[i]);
        }
      }
    } else {
      // user has provided both frm and tl.
      // statr processing.
      for (var _i = 0; _i < 2; _i += 1) {
        inputTyp[_i] = _recognizer2.default.type(fromUntil[_i]);
        if (inputTyp[_i] === 'format') {
          frmTl[_i] = (0, _formatResolver2.default)(fromUntil[_i]);
        } else if (inputTyp[_i] === 'num') {
          if (_i === 0) {
            if (expectedfunc === 'year') frmTl[0] = _timestamp2.default.beginning.yearKnown(fromUntil[_i]);else frmTl[0] = _timestamp2.default.beginning[expectedfunc](fromUntil[_i]);
          } else {
            frmTl[1] = _timestamp2.default.now[expectedfunc](fromUntil[_i]);
          }
        } else if (inputTyp[_i] === 'ts') {
          frmTl[_i] = fromUntil[_i];
        }
      }
    }
  } else if (len === 1) {
    // user has provided tl.

    // be default frm, index = 0 is beginning of the year
    frmTl[0] = _timestamp2.default.beginning.yearDefault();
    // if expectedfunc is format the request must be format.
    if (expectedfunc === 'format') {
      inputTyp[0] = _recognizer2.default.type.apply(_recognizer2.default, fromUntil);
      if (inputTyp[0] === 'format') {
        frmTl[1] = _formatResolver2.default.apply(undefined, fromUntil);
      }
    } else {
      // procrss tl. index =1
      inputTyp[0] = _recognizer2.default.type.apply(_recognizer2.default, fromUntil);
      if (inputTyp[0] === 'format') {
        frmTl[1] = _formatResolver2.default.apply(undefined, fromUntil);
      } else if (inputTyp[0] === 'num') {
        var _tsGen$now;

        frmTl[1] = (_tsGen$now = _timestamp2.default.now)[expectedfunc].apply(_tsGen$now, fromUntil);
      } else {
        // if (inputTyp[0] === 'ts')
        frmTl[1] = fromUntil[0];
      }
    }
  } else if (len === 0) {
    // no input was provided.
    // default ftom beginning to now.
    frmTl[0] = _timestamp2.default.beginning.yearDefault();
    frmTl[1] = _timestamp2.default.now.nw();
  }
  return frmTl;
};

exports.default = resolver;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _beginning = __webpack_require__(32);

var _beginning2 = _interopRequireDefault(_beginning);

var _now = __webpack_require__(33);

var _now2 = _interopRequireDefault(_now);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var specificFormat = function specificFormat(yr, mon, d) {
  return new Date(Date.UTC(yr, mon, d)).getTime();
};

module.exports = {
  beginning: _beginning2.default,
  now: _now2.default,
  specificFormat: specificFormat
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var yearKnown = function yearKnown(inputFormat) {
  return new Date(Date.UTC(inputFormat, 0, 1)).getTime();
};

var yearDefault = function yearDefault() {
  return new Date(Date.UTC(new Date().getFullYear(), 0, 1)).getTime();
};

var month = function month(inputFormat) {
  return new Date(Date.UTC(new Date().getFullYear(), inputFormat === 0 ? inputFormat : inputFormat - 1, 1)).getTime();
};

var week = function week(inputFormat) {
  return new Date(Date.UTC(new Date().getFullYear(), 0, Math.floor(inputFormat / 7))).getTime();
};

var day = function day(inputFormat) {
  return new Date(Date.UTC(new Date().getFullYear(), 0, inputFormat)).getTime();
};

module.exports = {
  yearKnown: yearKnown,
  yearDefault: yearDefault,
  month: month,
  week: week,
  day: day
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var year = function year(inputFormat) {
  return new Date(Date.UTC(inputFormat, new Date().getMonth(), new Date().getDate(), new Date().getDay())).getTime();
};

var month = function month(inputFormat) {
  return new Date(Date.UTC(new Date().getFullYear(), inputFormat === 0 ? inputFormat : inputFormat - 1, new Date().getDate(), new Date().getDay())).getTime();
};

var week = function week(inputFormat) {
  return new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), Math.floor(inputFormat / 7))).getTime();
};

var day = function day(inputFormat) {
  return new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), inputFormat)).getTime();
};

var nw = function nw() {
  return new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getDay())).getTime();
};

module.exports = {
  year: year,
  month: month,
  week: week,
  day: day,
  nw: nw
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _splitter = __webpack_require__(4);

var _splitter2 = _interopRequireDefault(_splitter);

var _timestamp = __webpack_require__(10);

var _timestamp2 = _interopRequireDefault(_timestamp);

var _info = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatResolver = function formatResolver(inputFormat) {
  var _splitter$formatReque = _splitter2.default.formatRequest(inputFormat),
      formatsArray = _splitter$formatReque.formatsArray;

  // validate length


  if (formatsArray.length === 3 && (formatsArray[0].length === 2 || formatsArray[0].length === 1) && (formatsArray[1].length === 2 || formatsArray[1].length === 1)) {
    // validate values
    var d = parseInt(formatsArray[0], 10);
    var mon = parseInt(formatsArray[1], 10);
    var yr = parseInt(formatsArray[2], 10);
    if (mon >= 0 && mon <= 12 && yr > 0) {
      // more validation? just make sure we are in the right day in month
      var adjustMonth = mon === 0 ? mon : mon - 1;
      if (d > 0 && d <= (0, _info.daysCountInMonth)(adjustMonth, yr, true)) {
        return _timestamp2.default.specificFormat(yr, adjustMonth, d);
      }
    }
  }
  return false;
};

exports.default = formatResolver;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recognizer = __webpack_require__(36);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_recognizer).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _is = __webpack_require__(37);

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var type = function type(inputFormat) {
  if (_is2.default.num(inputFormat)) {
    if (_is2.default.ts(inputFormat)) {
      return 'ts';
    }
    return 'num';
  } else if (_is2.default.format(inputFormat)) {
    return 'format';
  }
  return false;
};

var length = function length(inputFormat) {
  return inputFormat.length;
};

module.exports = {
  type: type,
  length: length
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * is will check the type of date input the user provides.
 * all functions here is boolean.
 * @param {string|number} inputFormat
 * @returns {boolean} -
 **/

// format: 'd-m-y' or anything alike
var format = function format(inputFormat) {
  return typeof inputFormat === 'string' && inputFormat.length >= 8 && inputFormat.length <= 10 && inputFormat.match(/(\d+)/);
};

var num = function num(inputFormat) {
  return typeof inputFormat === 'number';
};

var ts = function ts(inputFormat) {
  return inputFormat.toString().length === 10 || inputFormat.toString().length === 13;
};

module.exports = {
  format: format,
  num: num,
  ts: ts
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _compute = __webpack_require__(39);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_compute).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _info = __webpack_require__(2);

// return array date. [ d, m ,y]
var dateArray = function dateArray(ts) {
  return [ts.getUTCDate(), ts.getUTCMonth(), ts.getUTCFullYear()];
};

/**
 * choose the bigger ts value, avoiding error in calculations
 * all functions use this guy.
 *
 * @param {timestamp1}
 * @param {timestamp1}
 * @returns {array} - arrays containing two arrays. [frm[day,month,year], until[day,month,year]]
 **/
var sortAndSolveTs = function sortAndSolveTs(timestamp1, timestamp2) {
  var ts1 = new Date(timestamp1);
  var ts2 = new Date(timestamp2);
  if (ts1 > ts2) {
    return [// from date array
    dateArray(ts2), dateArray(ts1)];
  }
  // else default.
  return [dateArray(ts1), dateArray(ts2)];
};

/**
 * fraction-functions.
 * since it's being repeated in each function,
 * i isolated them for better performance.
 **/

// 1- same month and same year, then just count days.
// we need this function in all counting-functions
var isSameMonthAndYear = function isSameMonthAndYear(yfrm, ytl, mfrm, mtl) {
  return yfrm === ytl && mfrm === mtl;
};

// if isSameMonthAndYear then count.
var countInDaysRange = function countInDaysRange(dfrm, dtl) {
  var counter = 0;
  for (var i = dfrm; !(i === dtl); i += 1) {
    counter += 1;
  }
  return counter;
};

var looping = function looping(yfrm, ytl, mfrm, mtl) {
  var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'o';

  var monthBegin = mfrm;
  var yearBegin = yfrm;
  var counter = 0;
  while (!(yearBegin === ytl && monthBegin === mtl)) {
    if (type === 'd') {
      counter += (0, _info.daysCountInMonth)(monthBegin, yearBegin, true);
    } else {
      // year or month.
      counter += 1;
    }
    monthBegin += 1;
    if (monthBegin === 12) {
      monthBegin = 0;
      yearBegin += 1;
    }
  }
  return counter;
};

/**
 * end of fraction-functions ***************************************************
 **/

/**
 * operational function, works for daysBtw.
 * counting the days difference between from and until.
 * last day in until not included.
 * @param {array}
 * @param {array}
 * @returns {number} - days between.
 **/
var computeDaysBtw = function computeDaysBtw(frm, tl, i) {
  var _ref = [frm[1], frm[2]],
      mfrm = _ref[0],
      yfrm = _ref[1];

  var dfrm = frm[0];
  var _ref2 = [tl[0], tl[1], tl[2]],
      dtl = _ref2[0],
      mtl = _ref2[1],
      ytl = _ref2[2];
  // same month and same year, then just count days.

  if (isSameMonthAndYear(yfrm, ytl, mfrm, mtl)) {
    return i ? countInDaysRange(dfrm, dtl) + 1 : countInDaysRange(dfrm, dtl);
  }
  var counter = 0;
  if (dfrm !== 1) {
    // not from beginning of the month
    // compute the day difference and add one to include from day.
    // add new month
    mfrm += 1;
    if (mfrm === 12) {
      mfrm = 0;
      yfrm += 1;
    }
    counter += (0, _info.daysCountInMonth)(mfrm, yfrm) - dfrm + 1;
  }
  if (dtl !== 1) {
    // not from beginning of the month
    // add the days to the counter, -1 not include the last day
    counter += tl[0] - 1;
  }
  // if ((dtl === 1 && dfrm !== 1) && (dtl !== 1 && dfrm === 1)) {
  //   // if both not from 1 then sub 1 to exclude the last day
  //   counter -= 1;
  // }
  counter += looping(yfrm, ytl, mfrm, mtl, 'd');
  // if include the last day then add one.
  if (i) counter += 1;
  return counter;
};

/**
 * main function.
 *
 * @param {array}
 * @param {array}
 * @param {boolean} - i to include the last day in the end.
 * @returns {object} - {days: }
 **/
var daysBtw = function daysBtw(timestamp1, timestamp2, i) {
  var _sortAndSolveTs = sortAndSolveTs(timestamp1, timestamp2),
      _sortAndSolveTs2 = _slicedToArray(_sortAndSolveTs, 2),
      frm = _sortAndSolveTs2[0],
      tl = _sortAndSolveTs2[1];

  var daysCounter = 0;
  daysCounter = computeDaysBtw(frm, tl, i);
  return {
    days: daysCounter
  };
};

/**
 * operational and main
 * computes how many weeks between two dates
 * depending on days count divided by seven
 *
 * @param {array}
 * @param {array}
 * @param {boolean} - i to include the last day in the end.
 * @param  {number} - number of days, since this functiona can be called by all function
 * in all function we already computed days.
 * @returns {object} - {weeks , daysLeft as days}
 **/
var weeksBtw = function weeksBtw(timestamp1, timestamp2, i) {
  var days = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var daysCountBtw = 0;
  if (!days) {
    daysCountBtw = daysBtw(timestamp1, timestamp2, i).days;
  } else {
    daysCountBtw = days;
  }
  var remainder = daysCountBtw % 7;
  var weeks = 0;
  var daysLeft = 0;
  if (remainder === 0) {
    weeks = daysCountBtw / 7;
  } else {
    daysLeft = remainder;
    weeks = (daysCountBtw - remainder) / 7;
  }
  return {
    weeks: weeks,
    days: daysLeft
  };
};

/**
 * operational function, works for monthsBtw.
 * counting the months and days difference between from and until.
 * last day in until not included.
 * same as computeMonthsBtw with small dif.
 *
 * @param {array}
 * @param {array}
 * @returns {objects} - {months , days}
 **/
var computeMonthsBtw = function computeMonthsBtw(frm, tl, i) {
  var _ref3 = [frm[1], frm[2]],
      mfrm = _ref3[0],
      yfrm = _ref3[1];

  var dfrm = frm[0];
  var _ref4 = [tl[0], tl[1], tl[2]],
      dtl = _ref4[0],
      mtl = _ref4[1],
      ytl = _ref4[2];

  var daysCounter = 0;
  var monthsCounter = 0;
  // same month and same year, then just count days.
  if (isSameMonthAndYear(yfrm, ytl, mfrm, mtl)) {
    return {
      months: 0,
      days: i ? countInDaysRange(dfrm, dtl) + 1 : countInDaysRange(dfrm, dtl)
    };
  }
  if (dfrm !== 1) {
    // not from beginning of the month
    // compute the day difference and add one to include from day.
    // add new month
    mfrm += 1;
    if (mfrm === 12) {
      mfrm = 0;
      yfrm += 1;
    }
    daysCounter += (0, _info.daysCountInMonth)(mfrm, yfrm) - dfrm + 1;
  }
  if (dtl !== 1) {
    // not from beginning of the month
    // add the days to the counter, -1 not include the last day
    daysCounter += tl[0] - 1;
  }
  // if ((dtl === 1 && dfrm !== 1) && (dtl !== 1 && dfrm === 1)) {
  //   // if both not from 1 then sub 1 to exclude the last day
  //   daysCounter -= 1;
  // }
  monthsCounter += looping(yfrm, ytl, mfrm, mtl);
  if (i) daysCounter += 1;
  return {
    months: monthsCounter,
    days: daysCounter
  };
};

/**
 * main function.
 *
 * @param {array}
 * @param {array}
 * @param {boolean} - i to include the last day in the end.
 * @returns {object} - {days: }
 **/
var monthsBtw = function monthsBtw(timestamp1, timestamp2, i) {
  var _sortAndSolveTs3 = sortAndSolveTs(timestamp1, timestamp2),
      _sortAndSolveTs4 = _slicedToArray(_sortAndSolveTs3, 2),
      frm = _sortAndSolveTs4[0],
      tl = _sortAndSolveTs4[1];

  return computeMonthsBtw(frm, tl, i);
};

/**
 * operational function, works for yearsBtw.
 * counting the months and days difference between from and until.
 * last day in until not included.
 * same as computeMonthsBtw with small dif.
 *
 * @param {array}
 * @param {array}
 * @returns {objects} - {years, months , days}
 **/
var computeYearsBtw = function computeYearsBtw(frm, tl, i) {
  var _ref5 = [frm[1], frm[2]],
      mfrm = _ref5[0],
      yfrm = _ref5[1];

  var dfrm = frm[0];
  var _ref6 = [tl[0], tl[1], tl[2]],
      dtl = _ref6[0],
      mtl = _ref6[1],
      ytl = _ref6[2];

  var daysCounter = 0;
  var monthsCounter = 0;
  var yearsCounter = 0;
  // same month and same year, then just count days.
  if (isSameMonthAndYear(yfrm, ytl, mfrm, mtl)) {
    return {
      years: 0,
      months: 0,
      days: countInDaysRange(dfrm, dtl) + 1
    };
  }
  if (dfrm !== 1) {
    // not from beginning of the month
    // compute the day difference and add one to include from day.
    // add new month
    mfrm += 1;
    if (mfrm === 12) {
      mfrm = 0;
      yfrm += 1;
    }
    daysCounter += (0, _info.daysCountInMonth)(mfrm, yfrm) - dfrm + 1;
  }
  if (dtl !== 1) {
    // not from beginning of the month
    // add the days to the counter, -1 not include the last day
    daysCounter += tl[0] - 1;
  }
  // if ((dtl === 1 && dfrm !== 1) && (dtl !== 1 && dfrm === 1)) {
  //   // if both not from 1 then sub 1 to exclude the last day
  //   daysCounter -= 1;
  // }
  monthsCounter += looping(yfrm, ytl, mfrm, mtl);
  var remainder = monthsCounter % 12;
  if (remainder === 0) {
    yearsCounter = monthsCounter / 12;
    monthsCounter = 0;
  } else {
    yearsCounter = (monthsCounter - remainder) / 12;
    monthsCounter = remainder;
  }
  if (i) daysCounter += 1;
  return {
    years: yearsCounter,
    months: monthsCounter,
    days: daysCounter
  };
};

var yearsBtw = function yearsBtw(timestamp1, timestamp2, i) {
  var _sortAndSolveTs5 = sortAndSolveTs(timestamp1, timestamp2),
      _sortAndSolveTs6 = _slicedToArray(_sortAndSolveTs5, 2),
      frm = _sortAndSolveTs6[0],
      tl = _sortAndSolveTs6[1];

  return computeYearsBtw(frm, tl, i);
};

var all = function all(timestamp1, timestamp2, i) {
  var _sortAndSolveTs7 = sortAndSolveTs(timestamp1, timestamp2),
      _sortAndSolveTs8 = _slicedToArray(_sortAndSolveTs7, 2),
      frm = _sortAndSolveTs8[0],
      tl = _sortAndSolveTs8[1];

  var fulldays = computeDaysBtw(frm, tl, i);
  var fullweeks = weeksBtw(null, null, i, fulldays);
  var fullmonths = computeMonthsBtw(frm, tl, i);
  var fullYears = computeYearsBtw(frm, tl, i);
  return {
    inDays: fulldays,
    inWeeks: fullweeks,
    inMonths: fullmonths,
    inYears: fullYears
  };
};

module.exports = {
  daysBtw: daysBtw,
  weeksBtw: weeksBtw,
  monthsBtw: monthsBtw,
  yearsBtw: yearsBtw,
  all: all,
  // export for laterAgo function
  computeDaysBtw: computeDaysBtw
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _laterAgo = __webpack_require__(41);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_laterAgo).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _is = __webpack_require__(3);

var _funcs = __webpack_require__(0);

var _funcs2 = _interopRequireDefault(_funcs);

var _splitter = __webpack_require__(4);

var _splitter2 = _interopRequireDefault(_splitter);

var _processor = __webpack_require__(6);

var _processor2 = _interopRequireDefault(_processor);

var _resolver = __webpack_require__(42);

var _resolver2 = _interopRequireDefault(_resolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * no default value.
 * @param {string}
 * @param {object}
 * @param {char}
 */
var laterAgo = function laterAgo(opt, argOptions, reqMathType) {
  // validate
  if (!(0, _is.isValid)(opt)) return (0, _funcs2.default)(opt);
  if (typeof opt !== 'string') return (0, _funcs2.default)(opt);
  var options = opt.trim();
  // split numbers from formats

  var _splitter$numFromForm = _splitter2.default.numFromFormat(options),
      formats = _splitter$numFromForm.formats,
      times = _splitter$numFromForm.times;
  // not valid opt?


  if (!formats) return (0, _funcs2.default)(opt);
  // get timeConstants and  expectedTSfunc for time and day reuest,
  // dateUnit for months and year

  var _processor$general = _processor2.default.general(formats),
      timeConstants = _processor$general.timeConstants,
      expectedTSfunc = _processor$general.expectedTSfunc,
      dateUnit = _processor$general.dateUnit;
  // it should return either timeConstants or expectedCountfunc.
  // both not true, the opt is not valid.


  if (!timeConstants && !dateUnit) return (0, _funcs2.default)(opt);
  // did the user send ts request?
  var resultForm = void 0;
  if (argOptions) {
    if (argOptions.match(/ts/ig)) {
      resultForm = 'ts';
    } else if (argOptions.match(/(?:\bf\b|\bfull\b|\bfull date\b|\bfull dates\b|\bfulldate\b|\bfulldates\b)/ig)) {
      resultForm = 'fulldate';
    } else {
      return (0, _funcs2.default)(argOptions);
    }
  } else {
    resultForm = 'num';
  }
  return (0, _resolver2.default)(timeConstants, times, expectedTSfunc, dateUnit, reqMathType, resultForm);
};

exports.default = laterAgo;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resolver = __webpack_require__(43);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_resolver).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _readTs = __webpack_require__(7);

var _readTs2 = _interopRequireDefault(_readTs);

var _readableDate = __webpack_require__(8);

var _readableDate2 = _interopRequireDefault(_readableDate);

var _msTimeResolver = __webpack_require__(44);

var _msTimeResolver2 = _interopRequireDefault(_msTimeResolver);

var _daysResolver = __webpack_require__(45);

var _daysResolver2 = _interopRequireDefault(_daysResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * no default value.
 * @param {number} - timeConstants, the number of milliseconds delay for time, day and week.
 * @param {string} - computing function name, for year and month.
 * @param {number} - times, how many later or ago the user wants?
 * @param {boolean} - isTs
 * @param {char} - reqMathType '+' or '-'
 * @return {number|timestamp|object}
  - number: if the user required the result in number.
  _ timestamp: if the user required the result in timestamp: ts
  _ object: if the user required full date.

 **/
var resolver = function resolver(timeConstants, times, expectedTSfunc, dateUnit, reqMathType, resultForm) {
  var finalResult = void 0;
  // create now ts
  var nwTS = new Date().getTime();
  // if there is no time constants, compute date array.
  if (!timeConstants) {
    var requiredDate = (0, _daysResolver2.default)(nwTS, parseInt(times, 10), dateUnit, reqMathType);
    if (resultForm === 'num') {
      if (dateUnit === 'm') {
        finalResult = requiredDate[1];
      } else {
        // dateUnit === 'y'
        finalResult = requiredDate[2];
      }
    } else if (resultForm === 'ts') {
      finalResult = new Date(requiredDate[2], // year
      requiredDate[1], // month
      requiredDate[0], // day
      new Date(nwTS).getUTCHours(), // hours
      new Date(nwTS).getUTCMinutes(), // minutes
      new Date(nwTS).getUTCSeconds()).getTime();
    } else {
      // resultForm is full date.
      finalResult = (0, _readTs2.default)(new Date(requiredDate[2], // year
      requiredDate[1], // month
      requiredDate[0], // day
      new Date(nwTS).getUTCHours(), // hours
      new Date(nwTS).getUTCMinutes(), // minutes
      new Date(nwTS).getUTCSeconds()).getTime());
    }
  } else {
    // known timeConstants for time and days.
    var computedTS = (0, _msTimeResolver2.default)(nwTS, timeConstants, times, reqMathType);
    if (resultForm === 'num') {
      finalResult = _readableDate2.default[expectedTSfunc](new Date(computedTS).getTime());
    } else if (resultForm === 'ts') {
      finalResult = computedTS;
    } else {
      // resultForm is full date.
      finalResult = (0, _readTs2.default)(computedTS);
    }
  }
  return finalResult;
};

exports.default = resolver;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


var mutli = function mutli(n1, n2) {
  return n1 * n2;
};

/**
 *  computes later
 *
 * @param {number} - times
 * @param {number} - timeConstants
 * @return {number} - milliseconds above the current time.
 **/
var add = function add(nwTS, times, timeConstants) {
  return nwTS + mutli(times, timeConstants);
};

/**
 *  computes ago
 *
 * @param {number} - times
 * @param {number} - timeConstants
 * @return {number} - milliseconds minus the current time.
 **/
var sub = function sub(nwTS, times, timeConstants) {
  return nwTS - mutli(times, timeConstants);
};

/**
 *  This function deals with milliseconds units.
 *  computes  mili, sec, min, hr, day and week.
 *
 * @param {number} - nwTS, now timestamp.
 * @param {number} - timeConstants, the number of milliseconds delay.
 * @param {number} - times, how many later or ago the user wants?
 * @param {char} - reqMathType '+' or '-'
 * @return {number} final computed timestamp
 **/
var msTimeResolver = function msTimeResolver(nwTS, timeConstants, times, reqMathType) {
  if (reqMathType === '+') return add(nwTS, timeConstants, times); // later
  return sub(nwTS, timeConstants, times); // ago
};

exports.default = msTimeResolver;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 *  computes from array date.
 *  turns timestamp to array of [day, month, year]
 *
 * @param {timestamp} - ts
 * @return {array} - array of from date.[day, month, year]
 **/
var readTS = function readTS(ts) {
  return [new Date(ts).getUTCDate(), new Date(ts).getUTCMonth(), new Date(ts).getUTCFullYear()];
};

/**
 *  computes until array date.
 *  add or sub times to required unit date, month or year.
 *  smart function u gona love him.
 *
 * @param {number} - times
 * @param {char} - dateUnit m for month, y for year
 * @param {char} - reqMathType '+' or '-'
 * @param {array} - frm [day, month, year]
 * @return {array} - array of until date.[day, month, year]
 **/
var createTl = function createTl(times, dateUnit, reqMathType, frm) {
  if (dateUnit === 'y') {
    return [frm[0], frm[1], reqMathType === '+' ? frm[2] + times : frm[2] - times];
  }
  // month
  if (reqMathType === '+') {
    return [frm[0], (frm[1] + times) % 12, frm[2] + Math.trunc((frm[1] + times) / 12)];
  }
  return [frm[0], 11 - (frm[1] + times + 1) % 12, frm[2] - Math.trunc((frm[1] + times + 1) / 12)];
};

/**
 *  deals with months, and years. Those cannot be accurate with ms only.
 *
 * @param {number} - nwTS, now timestamp.
 * @param {number} - times, how many later or ago the user wants?
 * @param {char} - dateUnit, m for month, y for year.
 * @param {char} - reqMathType '+' or '-'
 * @return {number} array of date [day, month, year]
 **/
var daysResolver = function daysResolver(nwTS, times, dateUnit, reqMathType) {
  // init varaiables
  var knownDate = readTS(nwTS); // frm
  var requiredDate = createTl(times, dateUnit, reqMathType, knownDate); // tl
  return requiredDate;
};

exports.default = daysResolver;

/***/ })
/******/ ]);
});