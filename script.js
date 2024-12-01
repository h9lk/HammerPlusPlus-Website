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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.feature-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n  gap: 1.1vw;\n  margin: 2em;\n  color: white;\n  font-size: 1.1em;\n}\n.feature-grid .cell {\n  width: 100%;\n  height: 100%;\n  transition: 0.5s;\n  aspect-ratio: 16/9;\n  overflow: hidden;\n  position: relative;\n}\n.feature-grid .cell > .image {\n  user-select: none;\n  min-width: 100%;\n  object-fit: cover;\n  height: 100%;\n  transition: 0.5s;\n  position: relative;\n}\n.feature-grid .cell > video {\n  object-position: bottom;\n  object-fit: cover;\n  min-height: 100%;\n}\n.feature-grid .cell .img-split {\n  --split-perc: 50%;\n}\n.feature-grid .cell .img-split::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: var(--split-perc);\n  width: 5px;\n  height: 100%;\n  background: white;\n  transition: 2s;\n  transform: skew(6deg);\n  box-shadow: 0 0 20px 2px black;\n}\n.feature-grid .cell .img-split > img {\n  width: 100%;\n  height: 100%;\n  transition: 2s;\n  position: absolute;\n}\n.feature-grid .cell .img-split > img:last-child {\n  clip-path: polygon(0 0, calc(var(--split-perc) - 3%) 0, calc(var(--split-perc) + 3%) 100%, 0% 100%);\n}\n.feature-grid .cell .img-split.inactive {\n  --split-perc: -5%;\n}\n.feature-grid .cell .img-split.active {\n  --split-perc: 105%;\n}\n.feature-grid .cell > .cell-content {\n  --animation-speed: .6s;\n  width: 100%;\n  padding: 1em;\n  transition: var(--animation-speed) cubic-bezier(0.87, 0, 0.66, 1.03);\n  opacity: 0;\n  position: absolute;\n  bottom: -100%;\n  pointer-events: none;\n  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.726), black);\n}\n.feature-grid .cell:hover {\n  transform: scale(0.97);\n}\n.feature-grid .cell:hover > .cell-content {\n  transition: var(--animation-speed) cubic-bezier(0.28, -0.02, 0, 1.04);\n  bottom: 0;\n  opacity: 1;\n}\n.feature-grid .cell:hover .image {\n  transform: scale(1.05);\n  transition: 5s ease-out;\n}\n.feature-grid .cell.row2 {\n  grid-row: span 2;\n}\n.feature-grid .cell.row3 {\n  grid-row: span 3;\n}\n.feature-grid .cell.row4 {\n  grid-row: span 4;\n}\n.feature-grid .cell.col2 {\n  grid-column: span 2;\n}\n.feature-grid .cell.col3 {\n  grid-column: span 3;\n}\n.feature-grid .cell.col4 {\n  grid-column: span 4;\n}\n\n#focus-container {\n  display: flex;\n  position: fixed;\n  justify-content: center;\n  visibility: hidden;\n  align-items: center;\n  padding-inline: 2em;\n  gap: 3vh;\n  inset: 0;\n  background-color: rgba(0, 0, 0, 0.336);\n  backdrop-filter: blur(10px);\n  opacity: 0;\n  transition: opacity 0.5s, visibility 0.5s;\n  z-index: 100;\n}\n#focus-container #focus-img {\n  position: relative;\n  width: 75vh;\n  user-select: none;\n  transform: scale(0);\n  transition: all 0.25s;\n  box-shadow: 0 0 50px black;\n  background-color: rgb(36, 36, 36);\n  border: 5px solid #be00be;\n  border-radius: 10px;\n  overflow: hidden;\n}\n#focus-container #focus-img * {\n  width: 100%;\n}\n#focus-container.focused {\n  opacity: 1;\n  visibility: visible;\n}\n#focus-container.focused > #focus-img {\n  transform: scale(1);\n}\n#focus-container .arrow {\n  --size: 5vh;\n  display: block;\n  content: \"\";\n  z-index: 5;\n  transition: all 0.5s;\n  cursor: pointer;\n  border-top: var(--size) solid transparent;\n  border-bottom: var(--size) solid transparent;\n}\n#focus-container .arrow:nth-child(1) {\n  border-right: var(--size) solid #be00be;\n  transform-origin: right;\n}\n#focus-container .arrow:nth-child(3) {\n  border-left: var(--size) solid #be00be;\n  transform-origin: left;\n}\n#focus-container .arrow:hover {\n  transform: scale(1.5);\n}\n#focus-container .arrow:active {\n  transform: scale(1.25);\n  transition: transform 0.1s;\n  filter: brightness(1.5);\n}\n\n.image.focused {\n  filter: brightness(1.5);\n  transition: 1s !important;\n}\n\n.patch {\n  margin-bottom: 1.25em;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\n.patch:last-child {\n  margin-bottom: 0;\n}\n.patch > h1 {\n  background-color: black;\n  box-shadow: inset 0 0 25px -10px #be00be;\n  border: 2px solid #be00be;\n  padding: 0.25em;\n  cursor: pointer;\n  font-size: 1.35em;\n  position: relative;\n}\n.patch > h1::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  max-width: 20px;\n  max-height: 20px;\n  right: 0.2em;\n  bottom: 0.1em;\n  aspect-ratio: 1;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  margin: 0.5em;\n  transform: rotate(45deg);\n  transition: 0.5s;\n  transform-origin: 75% 75%;\n}\n.patch > pre {\n  position: relative;\n  background-color: #1f1f1f;\n  padding: 0.5em;\n  box-shadow: inset 0 0 10px 5px black;\n  border-radius: 0 0 10px 10px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  font-size: 0.9em;\n  border-left: 2px solid #be00be;\n  border-right: 2px solid #be00be;\n  border-bottom: 2px solid #be00be;\n  transform: translateY(-100%);\n  max-height: 0;\n  transition: transform 0.75s, max-height 1s ease-in-out, visibility 1s 0.1s;\n  z-index: -1;\n  visibility: hidden;\n}\n.patch.active > h1 {\n  background-color: rgb(53, 0, 49);\n}\n.patch.active > h1::after {\n  bottom: 0.25em;\n  top: -0.15em;\n  transform: rotate(225deg);\n}\n.patch.active > pre {\n  transform: none;\n  max-height: 9999px;\n  visibility: visible;\n}\n\n*, ::after, ::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n::selection {\n  color: black;\n  background-color: #ff00ff;\n}\n\n::-webkit-scrollbar {\n  width: 10px;\n  height: 5px;\n}\n\n::-webkit-scrollbar-track {\n  background-color: rgb(32, 32, 32);\n  border-radius: 50vw;\n  margin: 10px;\n}\n\n::-webkit-scrollbar-corner {\n  background-color: rgb(32, 32, 32);\n  border-radius: 50vw;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: #be00be;\n  border-radius: 50vw;\n}\n\nbody {\n  background-color: black;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\np:last-child {\n  margin-bottom: 0;\n}\np:first-child {\n  margin-top: 0;\n}\n\nhr {\n  border: 1px solid #be00be;\n  box-shadow: 0 5px 20px 2px #be00be;\n}\n\nul, li {\n  list-style-position: inside;\n  list-style-type: \"- \";\n}\n\na {\n  color: #ff00ff;\n}\na:hover, a:focus {\n  text-shadow: 0 0 2px #ff00ff;\n}\n\ncode {\n  background-color: rgb(15, 15, 15);\n  padding: 0.025em 0.5em;\n  border-radius: 5px;\n  font-family: monospace;\n  border: 1px solid rgb(120, 25, 131);\n}\n\niframe {\n  width: 100%;\n  aspect-ratio: 16/9;\n  border: none;\n}\niframe[src*=youtube] {\n  background-color: black;\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.logo > img {\n  max-width: 100%;\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-inline: 10px;\n}\nnav > a {\n  position: relative;\n  padding: 0.5em 1em;\n  font-size: 1.25em;\n  text-decoration: none;\n  font-weight: bold;\n  color: white;\n  z-index: 0;\n  transition: color 0.5s;\n  overflow: hidden;\n  text-transform: capitalize;\n}\nnav > a::after {\n  position: absolute;\n  inset: 0;\n  top: 100%;\n  height: 0%;\n  content: \"\";\n  background-color: #be00be;\n  transition: 0.5s;\n  z-index: -1;\n  border-radius: 10px 10px 0 0;\n}\nnav > a.selected::after {\n  top: 95%;\n  height: 5%;\n  filter: drop-shadow(0 0 5px #be00be) drop-shadow(0 0 10px #be00be) drop-shadow(0 0 15px #be00be);\n}\nnav > a:hover, nav > a:focus-visible {\n  color: black;\n}\nnav > a:hover::after, nav > a:focus-visible::after {\n  height: 100%;\n  top: 0;\n  filter: none;\n}\n\n.content {\n  margin-inline: auto;\n  max-width: 1000px;\n  width: 85vw;\n}\n\narticle {\n  border: 2px solid #be00be;\n  box-shadow: inset 0 0 50px -10px #be00be;\n  padding: 2em;\n  border-radius: 10px;\n  color: white;\n  font-size: 1.2em;\n  min-height: 35vh;\n}\narticle > .header {\n  margin-bottom: 0.5em;\n}\narticle .section {\n  margin-top: 2em;\n  padding-block: 1em;\n  padding-inline: 1em;\n  border-left: 2px solid #be00be;\n  position: relative;\n  background-size: 150%;\n  background-position: right;\n  transition: 0.5s;\n  /* yeah, this is a bit ugly. Just to make things clear, we are adding\n  \tthe alpha (AA) value at the of this color, which is in HEX */\n  background-image: linear-gradient(90deg, #be00be50, #be00be25, #be00be25);\n}\narticle .section:hover {\n  background-position: left;\n}\narticle .section-title {\n  font-size: 1.5em;\n  font-weight: bold;\n}\narticle .section-content {\n  margin-block: 1em;\n}\narticle .section-content:last-child {\n  margin-bottom: 0;\n}\narticle .info {\n  font-size: 1.1em;\n  text-align: center;\n  text-shadow: 0 0 5px #ff00ff;\n}\n\nfooter {\n  border-top: 4px solid #be00be;\n  background-color: rgba(173, 0, 173, 0.1882352941);\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 7.5em;\n  overflow-y: hidden;\n}\nfooter > p {\n  max-width: 50%;\n}\n\n@keyframes shake-rot {\n  25% {\n    transform: scale(1.1) rotate(15deg);\n  }\n  50% {\n    transform: scale(1.1) rotate(-15deg);\n  }\n  75% {\n    transform: scale(1.1) rotate(10deg);\n  }\n}\n.link {\n  display: inline-block;\n  width: 75px;\n  aspect-ratio: 1;\n  margin-right: 1em;\n}\n.link:hover {\n  animation: shake-rot 1s;\n}\n.link > * {\n  width: 100%;\n}\n\n.download {\n  display: block;\n  margin-top: 3em;\n  display: flex;\n  justify-content: center;\n  transition: 0.5s;\n}\n.download > img {\n  max-width: 70%;\n}\n.download:hover, .download:focus {\n  transform: scale(1.05);\n  filter: brightness(1.5) drop-shadow(0 0 10px rgba(255, 255, 255, 0.514)) drop-shadow(0 0 2px #ff00ff);\n}\n\n@keyframes error-glow {\n  from {\n    filter: brightness(1.5) drop-shadow(0 0 0.25em rgba(255, 93, 93, 0.692));\n  }\n}\nspan.error {\n  color: rgb(255, 79, 79);\n  font-weight: bold;\n  animation: error-glow 0.3s ease-in-out infinite alternate;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://HammerPlusPlus-Website/./src/sass/style.scss?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://HammerPlusPlus-Website/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://HammerPlusPlus-Website/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/js/modules/main.js":
/*!********************************!*\
  !*** ./src/js/modules/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * Generates the navbar based on the current page.\n */\nfunction main() {\n  const splits = document.querySelectorAll(\".img-split\");\n  const patches = Array.from(document.querySelectorAll(\".patch\"));\n\n  function genNav() {\n    const nav = document.querySelector(\".navbar\");\n    if (!nav) return;\n\n    const current = location.pathname\n      .split(\"/\")\n      .pop()\n      .replace(\".html\", \"\");\n\n    const pages = [\"index\", \"features\", \"updates\", \"download\", \"credits\"];\n\n    pages.forEach(page => {\n      const link = document.createElement(\"a\");\n\n      link.href = `${page}.html`;\n      link.innerText = page;\n      link.className = page === current ? \"selected\" : \"\";\n\n      nav.appendChild(link)\n    })\n  }\n\n\n  /**\n   * Sets the listener to all the splitted images.\n   */\n  function setSplitImages() {\n    splits.forEach(split => {\n      split.addEventListener(\"click\", () => {\n        if (split.classList.contains(\"active\")) {\n          split.classList.remove(\"active\");\n          split.classList.add(\"inactive\");\n        } else if (split.classList.contains(\"inactive\")) {\n          split.classList.remove(\"inactive\");\n          split.classList.add(\"active\");\n        } else\n          split.classList.add(\"active\");\n      })\n    })\n  }\n\n  /**\n   * Sets the listeners to all the patch notes.\n   */\n  function addPatches() {\n    // The first patch note will be be active by default\n    patches[0].classList.toggle(\"active\");\n\n    patches.forEach(patch => {\n      patch.querySelector(\"h1\").addEventListener(\"click\", () => {\n        patches.forEach(p => {\n          if (p === patch)\n            p.classList.toggle(\"active\");\n          else\n            p.classList.remove(\"active\");\n        })\n      })\n\n      // Use spaces instead of tabs for the notes\n      const pre = patch.querySelector(\"pre\");\n      pre.innerHTML = pre.innerHTML.replaceAll(\"\\t\", \"   \");\n    })\n  }\n\n  if(splits.length > 1) {\n    setSplitImages();\n  }\n\n  if (patches.length > 1) {\n    addPatches()\n  }\n\n  genNav();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n\n\n//# sourceURL=webpack://HammerPlusPlus-Website/./src/js/modules/main.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/main.js */ \"./src/js/modules/main.js\");\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_modules_main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://HammerPlusPlus-Website/./src/js/script.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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