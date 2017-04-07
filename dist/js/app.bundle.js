/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


createDiv();
function createDiv() {
  for (var i = 0; i < 20; i++) {
    var div = document.createElement("div");
    var r = Math.floor(Math.random() * 50 + 300);
    div.style.height = r + "px";
    div.classList.add("item");
    div.innerHTML = i + " box";
    document.body.appendChild(div);
  }
  change();
}

function findMin(array) {
  var m = 0;
  for (var i = 0; i < array.length; i++) {
    m = Math.min(array[m], array[i]) == array[m] ? m : i;
  }
  return m;
}
function change() {
  var divs = document.querySelectorAll(".item");
  var wcw = document.documentElement.clientWidth;
  var n = Math.floor(wcw / 210);
  if (n < 0) return;
  var t = 0;
  var c = (wcw - n * 210) / 2; //居中
  var arrH = [];
  for (var i = 0; i < arrH.length; i++) {
    var j = i % n;
    // 摆满一行
    if (arrH.length == n) {
      var min = findMin(arrH);
      divs[i].style.left = c + min * 210 + "px";
      divs[i].style.top = arrH[min] + 10 + "px";
      arrH[min] += divs[i].offsetHeight + 10;
    } else {
      arrH[j] = divs[i].offsetHeight;
      divs[i].style.left = c + 200 * j + 10 * j + "px";
      divs[i].style.top = 0;
    }
  }
}

window.onresize = function () {
  change();
};
window.onload = function () {
  change();
};
window.onscroll = function () {
  var bodyHeight = document.documentElement.offsetHeight;
  var windowHeight = document.documentElement.clientWidth;
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var scrollHeight = document.body.scrollHeight;
  if (bodyHeight + windowHeight > scrollHeight - 20) {
    createDiv();
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map