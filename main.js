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

/***/ "./src/animation.js":
/*!**************************!*\
  !*** ./src/animation.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getGIF\": () => (/* binding */ getGIF)\n/* harmony export */ });\nasync function getGIF(url) {\r\n  const res = await fetch(url, {mode: 'cors'})\r\n  return res.json();\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/animation.js?");

/***/ }),

/***/ "./src/htmlDraw.js":
/*!*************************!*\
  !*** ./src/htmlDraw.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawWeather\": () => (/* binding */ drawWeather),\n/* harmony export */   \"drawHome\": () => (/* binding */ drawHome)\n/* harmony export */ });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ \"./src/animation.js\");\n\r\n\r\n\r\nconst API_WEATHER = '2316fb2f745c7ff1232b9e52f05b2491';\r\nconst API_GIPHY = '3X2ApJT7aNnInzDc4ImBbzZLzv0UNSGA&s';\r\n\r\nfunction drawWeather(data, units) {\r\n  console.log(data)\r\n  const u = (units === 'metric') ? '° C':\r\n            (units === 'imperial') ? '° F':' K';\r\n\r\n  const card = document.createElement('div');\r\n  card.setAttribute('class', 'card mb-3 shadow border-0');\r\n\r\n  const row = document.createElement('div');\r\n  row.setAttribute('class', 'row g-0 bg-white rounded pb-1');\r\n\r\n  const location = document.createElement('h2');\r\n  location.setAttribute('class', 'rounded p-1 text-white text-center card-title align-self-center bg-gradient bg-secondary');\r\n  location.textContent = `${data.name}, ${data.sys.country}`;\r\n\r\n  const col1 = document.createElement('div');\r\n  col1.setAttribute('class', 'col-4 d-flex justify-content-center');\r\n\r\n  const col2 = document.createElement('div');\r\n  col2.setAttribute('class', 'col-4 d-flex justify-content-center');\r\n\r\n  const col3 = document.createElement('div');\r\n  col3.setAttribute('class', 'col-4 d-flex justify-content-center');\r\n\r\n  const cardBody1 = document.createElement('div');\r\n  cardBody1.setAttribute('class', 'card-body p-0');\r\n\r\n  const cardBody2 = document.createElement('div');\r\n  cardBody2.setAttribute('class', 'card-body p-0');\r\n\r\n  const cardBody3 = document.createElement('div');\r\n  cardBody3.setAttribute('class', 'card-body p-0');\r\n\r\n  const tempTitle = document.createElement('p');\r\n  tempTitle.setAttribute('class', 'card-text m-0 text-center');\r\n\r\n  const tempTitleSmall = document.createElement('small');\r\n  tempTitleSmall.setAttribute('class', 'text-muted');\r\n  tempTitleSmall.textContent = 'Current:';\r\n\r\n  const temp = document.createElement('p');\r\n  temp.setAttribute('class', 'text-center fs-2 m-0 fw-bold align-middle mt-3');\r\n  temp.textContent = `${data.main.temp}${u}`;\r\n\r\n  const tempMaxTitle = document.createElement('p');\r\n  tempMaxTitle.setAttribute('class', 'card-text m-0 text-center');\r\n\r\n  const tempMaxTitleSmall = document.createElement('small');\r\n  tempMaxTitleSmall.setAttribute('class', 'text-muted');\r\n  tempMaxTitleSmall.textContent = 'Maximum:';\r\n\r\n  const tempMax = document.createElement('p');\r\n  tempMax.setAttribute('class', 'card-text m-0 text-center fs-5');\r\n  tempMax.textContent = `${data.main.temp_max}${u}`;\r\n\r\n  const tempMinTitle = document.createElement('p');\r\n  tempMinTitle.setAttribute('class', 'card-text m-0 text-center');\r\n\r\n  const tempMinTitleSmall = document.createElement('small');\r\n  tempMinTitleSmall.setAttribute('class', 'text-muted');\r\n  tempMinTitleSmall.textContent = 'Minimum:';\r\n\r\n  const tempMin = document.createElement('p');\r\n  tempMin.setAttribute('class', 'card-text m-0 text-center fs-5');\r\n  tempMin.textContent = `${data.main.temp_min}${u}`;\r\n\r\n  const tempFeelTitle = document.createElement('p');\r\n  tempFeelTitle.setAttribute('class', 'card-text m-0 text-center');\r\n\r\n  const tempFeelTitleSmall = document.createElement('small');\r\n  tempFeelTitleSmall.setAttribute('class', 'text-muted');\r\n  tempFeelTitleSmall.textContent = 'Feel Like:';\r\n\r\n  const tempFeel = document.createElement('p');\r\n  tempFeel.setAttribute('class', 'card-text m-0 text-center fs-5');\r\n  tempFeel.textContent = `${data.main.feels_like}${u}`;\r\n\r\n  const humidityTitle = document.createElement('p');\r\n  humidityTitle.setAttribute('class', 'card-text m-0 text-center');\r\n\r\n  const humidityTitleSmall = document.createElement('small');\r\n  humidityTitleSmall.setAttribute('class', 'text-muted');\r\n  humidityTitleSmall.textContent = 'Humidity:';\r\n\r\n  const humidity = document.createElement('p');\r\n  humidity.setAttribute('class', 'card-text m-0 text-center fs-5');\r\n  humidity.textContent = `${data.main.humidity} %`;\r\n\r\n  tempTitle.appendChild(tempTitleSmall);\r\n  cardBody1.appendChild(tempTitle);\r\n  cardBody1.appendChild(temp);\r\n\r\n  tempMaxTitle.appendChild(tempMaxTitleSmall);\r\n  cardBody2.appendChild(tempMaxTitle);\r\n  cardBody2.appendChild(tempMax);\r\n\r\n  tempMinTitle.appendChild(tempMinTitleSmall);\r\n  cardBody2.appendChild(tempMinTitle);\r\n  cardBody2.appendChild(tempMin);\r\n\r\n  tempFeelTitle.appendChild(tempFeelTitleSmall);\r\n  cardBody3.appendChild(tempFeelTitle);\r\n  cardBody3.appendChild(tempFeel);\r\n\r\n  humidityTitle.appendChild(humidityTitleSmall);\r\n  cardBody3.appendChild(humidityTitle);\r\n  cardBody3.appendChild(humidity);\r\n\r\n  col1.appendChild(cardBody1);\r\n  col2.appendChild(cardBody2);\r\n  col3.appendChild(cardBody3);\r\n\r\n  row.appendChild(location);\r\n  row.appendChild(col1);\r\n  row.appendChild(col2);\r\n  row.appendChild(col3);\r\n\r\n  card.appendChild(row);\r\n\r\n  return card;\r\n}\r\n\r\nfunction drawHome(city, units, token = true) {\r\n  const content = document.querySelector('#content');\r\n  const location = city;\r\n  const locationURL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_WEATHER}&units=${units}`;\r\n\r\n  if (token) {\r\n    content.removeChild(content.lastChild)\r\n  };\r\n\r\n  (0,_weather__WEBPACK_IMPORTED_MODULE_0__.getData)(locationURL)\r\n  .then(function(value) {\r\n    const weatherMain = value.weather[0].main;\r\n    const weatherDescription = value.weather[0].description;\r\n    const weather = `${weatherMain.toLowerCase().split(\" \").join(\"-\")}-${weatherDescription.toLowerCase().split(\" \").join(\"-\")}`;\r\n    const animationURL = `https://api.giphy.com/v1/gifs/translate?api_key=${API_GIPHY}&s=${weather}`;\r\n    content.appendChild(drawWeather(value, units));\r\n    inputLocation.value = \"\";\r\n    (0,_animation__WEBPACK_IMPORTED_MODULE_1__.getGIF)(animationURL)\r\n    .then(function(response) {\r\n      console.log(response);\r\n      const img = document.querySelector('#weatherImg');\r\n      const figTitle = document.querySelector('#figTitle');\r\n      figTitle.textContent = `${weatherMain}, ${weatherDescription}`;\r\n      img.src = response.data.images.original.url;\r\n    })\r\n  })\r\n  .catch(function(err) {\r\n    content.textContent = 'This is not the location you are looking for!';\r\n  });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/htmlDraw.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _htmlDraw_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlDraw.js */ \"./src/htmlDraw.js\");\n\r\n\r\nlet location = 'London,uk';\r\nlet units = 'metric';\r\n\r\nif (!localStorage.getItem('location')) {\r\n  localStorage.setItem('location', 'London,uk');\r\n} else {\r\n  location = localStorage.getItem('location');\r\n}\r\n\r\nif (!localStorage.getItem('units')) {\r\n  localStorage.setItem('units', 'metric');\r\n} else {\r\n  units = localStorage.getItem('units');\r\n}\r\n\r\n\r\nconst btnSearch = document.querySelector('#btnSearch');\r\nconst inputLocation = document.querySelector('#inputLocation');\r\nconst selectUnits = document.querySelector('#selectUnits');\r\n\r\n(0,_htmlDraw_js__WEBPACK_IMPORTED_MODULE_0__.drawHome)(location, units, false)\r\n\r\nbtnSearch.addEventListener('click', () => {\r\n  location = inputLocation.value;\r\n  localStorage.setItem('location', location);\r\n  (0,_htmlDraw_js__WEBPACK_IMPORTED_MODULE_0__.drawHome)(localStorage.getItem('location'), localStorage.getItem('units'));\r\n});\r\n\r\nselectUnits.addEventListener('change', () => {\r\n  units = selectUnits.value;\r\n  localStorage.setItem('units', units);\r\n  (0,_htmlDraw_js__WEBPACK_IMPORTED_MODULE_0__.drawHome)(location, localStorage.getItem('units'));\r\n});\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\nasync function getData(url) {\r\n  const res = await fetch(url, {method: 'POST', mode: 'cors'})\r\n  return res.json();\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/weather.js?");

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