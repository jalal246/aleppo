(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["is"] = factory();
	else
		root["is"] = factory();
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

var _is = __webpack_require__(1);

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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArrEmpty = exports.isStrEmpty = exports.isZeroLength = exports.isArr = exports.isFn = exports.isStr = exports.isNum = exports.isBool = exports.isObj = exports.isValid = exports.isNull = exports.isUn = undefined;

var _oneArg = __webpack_require__(2);

var _oneArg2 = _interopRequireDefault(_oneArg);

var _doo = __webpack_require__(3);

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
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _doo = __webpack_require__(4);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_doo).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 4 */
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