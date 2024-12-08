/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://HammerPlusPlus-Website/./src/sass/style.scss?");

/***/ }),

/***/ "./src/js/modules/main.js":
/*!********************************!*\
  !*** ./src/js/modules/main.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * Generates the navbar based on the current page.\n */\nfunction main() {\n  const splits = document.querySelectorAll('.img-split')\n  const patches = document.querySelectorAll('.patch')\n\n  function genNav() {\n    const nav = document.querySelector('.navbar')\n    if (!nav) return\n\n    const current = location.pathname.split('/').pop().replace('.html', '')\n\n    const pages = ['index', 'features', 'updates', 'download', 'credits']\n\n    pages.forEach((page) => {\n      const link = document.createElement('a')\n\n      link.href = `${page}.html`\n      link.innerText = page\n      link.className = page === current ? 'selected' : ''\n\n      nav.appendChild(link)\n    })\n  }\n\n  /**\n   * Sets the listener to all the splitted images.\n   */\n  function setSplitImages() {\n    splits.forEach((split) => {\n      split.addEventListener('click', () => {\n        if (split.classList.contains('active')) {\n          split.classList.remove('active')\n          split.classList.add('inactive')\n        } else if (split.classList.contains('inactive')) {\n          split.classList.remove('inactive')\n          split.classList.add('active')\n        } else {\n          split.classList.add('active')\n        }\n      })\n    })\n  }\n\n  /**\n   * Sets the listeners to all the patch notes.\n   */\n  function addPatches() {\n    // The first patch note will be be active by default\n    patches[0].classList.toggle('active')\n\n    patches.forEach((patch) => {\n      patch.querySelector('h1').addEventListener('click', () => {\n        patches.forEach((p) => {\n          if (p === patch) {\n            p.classList.toggle('active')\n          } else {\n            p.classList.remove('active')\n          }\n        })\n      })\n\n      // Use spaces instead of tabs for the notes\n      const pre = patch.querySelector('pre')\n      pre.innerHTML = pre.innerHTML.replaceAll('\\t', '   ')\n    })\n  }\n\n  function animateImages() {\n    const container = document.querySelectorAll('.container');\n\n    container.forEach((image) => {\n      image.addEventListener('mouseover', (evt) => {\n        const target = evt.target.parentNode;\n        const png = target.children[0];\n        const gif = target.children[1];\n\n        png.classList.remove('image', 'active');\n        png.classList.add('static');\n\n        gif.classList.remove('static');\n        gif.classList.add('image', 'active');\n      })\n    })\n\n    container.forEach((image) => {\n      image.addEventListener('mouseout', (evt) => {\n        const target = evt.target.parentNode;\n        const png = target.children[0];\n        const gif = target.children[1];\n\n        png.classList.remove('static');\n        png.classList.add('image', 'active');\n\n        gif.classList.remove('image', 'active');\n        gif.classList.add('static');\n      })\n    })\n  }\n\n\n  if (splits.length > 1) {\n    setSplitImages();\n    animateImages()\n  } else if (patches.length > 1) {\n    addPatches()\n  }\n\n  genNav()\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n\n\n//# sourceURL=webpack://HammerPlusPlus-Website/./src/js/modules/main.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/main.js */ \"./src/js/modules/main.js\");\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_modules_main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n})\n\n\n//# sourceURL=webpack://HammerPlusPlus-Website/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;