(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["doo"] = factory();
	else
		root["doo"] = factory();
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

var _doo = __webpack_require__(1);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_doo).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
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