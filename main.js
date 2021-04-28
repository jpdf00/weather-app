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

/***/ "./src/htmlDraw.js":
/*!*************************!*\
  !*** ./src/htmlDraw.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawWeather\": () => (/* binding */ drawWeather),\n/* harmony export */   \"drawHome\": () => (/* binding */ drawHome)\n/* harmony export */ });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n\r\n\r\nconst API = '2316fb2f745c7ff1232b9e52f05b2491';\r\n\r\nfunction drawWeather(data) {\r\n  const forecast = document.createElement('ul');\r\n  const temp = document.createElement('li');\r\n  temp.textContent = data.main.temp;\r\n\r\n  const tempMax = document.createElement('li');\r\n  tempMax.textContent = data.main.temp_max;\r\n\r\n  const tempMin = document.createElement('li');\r\n  tempMin.textContent = data.main.temp_min;\r\n\r\n  const tempFeel = document.createElement('li');\r\n  tempFeel.textContent = data.main.feels_like;\r\n\r\n  const humidity = document.createElement('li');\r\n  humidity.textContent = data.main.humidity;\r\n\r\n  forecast.appendChild(temp);\r\n  forecast.appendChild(tempMax);\r\n  forecast.appendChild(tempMin);\r\n  forecast.appendChild(tempFeel);\r\n  forecast.appendChild(humidity);\r\n\r\n  return forecast;\r\n}\r\n\r\nfunction drawHome(city) {\r\n  const content = document.querySelector('#content');\r\n  const weather = document.createElement('p');\r\n  const location = city;\r\n  const locationURL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API}`;\r\n  (0,_weather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(locationURL)\r\n  .then(function(value) {\r\n    content.appendChild(drawWeather(value));\r\n  })\r\n  .catch(function(err) {\r\n    weather.textContent = 'This is not the location you are looking for!';\r\n    content.appendChild(weather);\r\n  });\r\n  inputLocation.value = \"\";\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/htmlDraw.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _htmlDraw_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlDraw.js */ \"./src/htmlDraw.js\");\n\r\n\r\nconst btnSearch = document.querySelector('#btnSearch');\r\nconst inputLocation = document.querySelector('#inputLocation');\r\n\r\n(0,_htmlDraw_js__WEBPACK_IMPORTED_MODULE_0__.drawHome)('London')\r\n\r\nbtnSearch.addEventListener('click', () => {\r\n  ;(0,_htmlDraw_js__WEBPACK_IMPORTED_MODULE_0__.drawHome)(inputLocation.value);\r\n});\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeather\": () => (/* binding */ getWeather)\n/* harmony export */ });\nasync function getWeather(url) {\r\n  const res = await fetch(url, {method: 'POST', mode: 'cors'})\r\n  return res.json();\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/weather.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;