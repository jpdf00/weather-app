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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function getGIF(url) {\n  const res = await fetch(url, { mode: 'cors' })\n    .catch((err) => err);\n  return res.json();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getGIF);\n\n\n//# sourceURL=webpack://weather-app/./src/animation.js?");

/***/ }),

/***/ "./src/htmlDraw.js":
/*!*************************!*\
  !*** ./src/htmlDraw.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.js */ \"./src/weather.js\");\n/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation.js */ \"./src/animation.js\");\n\n\n\nconst API_WEATHER = '2316fb2f745c7ff1232b9e52f05b2491';\nconst API_GIPHY = '3X2ApJT7aNnInzDc4ImBbzZLzv0UNSGA&s';\n\nfunction drawWeather(data, units) {\n  let u = '';\n  if (units === 'metric') {\n    u = '° C';\n  } else if (units === 'imperial') {\n    u = '° F';\n  } else {\n    u = ' K';\n  }\n\n  const card = document.createElement('div');\n  card.setAttribute('class', 'card mb-3 shadow border-0');\n\n  const row = document.createElement('div');\n  row.setAttribute('class', 'row g-0 bg-white rounded pb-1');\n\n  const location = document.createElement('h2');\n  location.setAttribute('class', 'rounded p-1 text-white text-center card-title align-self-center bg-gradient bg-secondary');\n  location.textContent = `${data.name}, ${data.sys.country}`;\n\n  const col1 = document.createElement('div');\n  col1.setAttribute('class', 'col-4 d-flex justify-content-center');\n\n  const col2 = document.createElement('div');\n  col2.setAttribute('class', 'col-4 d-flex justify-content-center');\n\n  const col3 = document.createElement('div');\n  col3.setAttribute('class', 'col-4 d-flex justify-content-center');\n\n  const cardBody1 = document.createElement('div');\n  cardBody1.setAttribute('class', 'card-body p-0');\n\n  const cardBody2 = document.createElement('div');\n  cardBody2.setAttribute('class', 'card-body p-0');\n\n  const cardBody3 = document.createElement('div');\n  cardBody3.setAttribute('class', 'card-body p-0');\n\n  const tempTitle = document.createElement('p');\n  tempTitle.setAttribute('class', 'card-text m-0 text-center');\n\n  const tempTitleSmall = document.createElement('small');\n  tempTitleSmall.setAttribute('class', 'text-muted');\n  tempTitleSmall.textContent = 'Current:';\n\n  const temp = document.createElement('p');\n  temp.setAttribute('class', 'text-center fs-2 m-0 fw-bold align-middle mt-3');\n  temp.textContent = `${data.main.temp}${u}`;\n\n  const tempMaxTitle = document.createElement('p');\n  tempMaxTitle.setAttribute('class', 'card-text m-0 text-center');\n\n  const tempMaxTitleSmall = document.createElement('small');\n  tempMaxTitleSmall.setAttribute('class', 'text-muted');\n  tempMaxTitleSmall.textContent = 'Maximum:';\n\n  const tempMax = document.createElement('p');\n  tempMax.setAttribute('class', 'card-text m-0 text-center fs-5');\n  tempMax.textContent = `${data.main.temp_max}${u}`;\n\n  const tempMinTitle = document.createElement('p');\n  tempMinTitle.setAttribute('class', 'card-text m-0 text-center');\n\n  const tempMinTitleSmall = document.createElement('small');\n  tempMinTitleSmall.setAttribute('class', 'text-muted');\n  tempMinTitleSmall.textContent = 'Minimum:';\n\n  const tempMin = document.createElement('p');\n  tempMin.setAttribute('class', 'card-text m-0 text-center fs-5');\n  tempMin.textContent = `${data.main.temp_min}${u}`;\n\n  const tempFeelTitle = document.createElement('p');\n  tempFeelTitle.setAttribute('class', 'card-text m-0 text-center');\n\n  const tempFeelTitleSmall = document.createElement('small');\n  tempFeelTitleSmall.setAttribute('class', 'text-muted');\n  tempFeelTitleSmall.textContent = 'Feel Like:';\n\n  const tempFeel = document.createElement('p');\n  tempFeel.setAttribute('class', 'card-text m-0 text-center fs-5');\n  tempFeel.textContent = `${data.main.feels_like}${u}`;\n\n  const humidityTitle = document.createElement('p');\n  humidityTitle.setAttribute('class', 'card-text m-0 text-center');\n\n  const humidityTitleSmall = document.createElement('small');\n  humidityTitleSmall.setAttribute('class', 'text-muted');\n  humidityTitleSmall.textContent = 'Humidity:';\n\n  const humidity = document.createElement('p');\n  humidity.setAttribute('class', 'card-text m-0 text-center fs-5');\n  humidity.textContent = `${data.main.humidity} %`;\n\n  tempTitle.appendChild(tempTitleSmall);\n  cardBody1.appendChild(tempTitle);\n  cardBody1.appendChild(temp);\n\n  tempMaxTitle.appendChild(tempMaxTitleSmall);\n  cardBody2.appendChild(tempMaxTitle);\n  cardBody2.appendChild(tempMax);\n\n  tempMinTitle.appendChild(tempMinTitleSmall);\n  cardBody2.appendChild(tempMinTitle);\n  cardBody2.appendChild(tempMin);\n\n  tempFeelTitle.appendChild(tempFeelTitleSmall);\n  cardBody3.appendChild(tempFeelTitle);\n  cardBody3.appendChild(tempFeel);\n\n  humidityTitle.appendChild(humidityTitleSmall);\n  cardBody3.appendChild(humidityTitle);\n  cardBody3.appendChild(humidity);\n\n  col1.appendChild(cardBody1);\n  col2.appendChild(cardBody2);\n  col3.appendChild(cardBody3);\n\n  row.appendChild(location);\n  row.appendChild(col1);\n  row.appendChild(col2);\n  row.appendChild(col3);\n\n  card.appendChild(row);\n\n  return card;\n}\n\nfunction drawHome(city, units, token = true) {\n  const content = document.querySelector('#content');\n  const location = city;\n  const locationURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_WEATHER}&units=${units}`;\n\n  (0,_weather_js__WEBPACK_IMPORTED_MODULE_0__.default)(locationURL)\n    .then((value) => {\n      if (token) {\n        content.removeChild(content.lastChild);\n      }\n      const inputLocation = document.querySelector('#inputLocation');\n      const img = document.querySelector('#weatherImg');\n      const icon = document.querySelector('#weatherIcon');\n      const figTitle = document.querySelector('#figTitle');\n      const figDescription = document.querySelector('#figDescription');\n      const figCaption = document.querySelector('#figCaption');\n      const iconCode = value.weather[0].icon;\n      const weatherMain = value.weather[0].main;\n      const weatherDescription = value.weather[0].description;\n      let weatherImg = '../assets/img/weather-'\n      let weatherCaption = ''\n      content.appendChild(drawWeather(value, units));\n      inputLocation.value = '';\n      icon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;\n      figTitle.textContent = weatherMain;\n      figDescription.textContent = weatherDescription;\n      switch (iconCode) {\n        case '01d':\n          weatherImg += '01d.jpg';\n          weatherCaption = 'Photo by <a class=\"text-white\" href=\"https://unsplash.com/@bencollins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Ben Collins</a> on <a class=\"text-white\" href=\"https://unsplash.com/s/photos/clear-sky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>';\n          break;\n        case '01n':\n          weatherImg += '01n.jpg'\n          weatherCaption = 'Photo by <a class=\"text-white\" href=\"https://unsplash.com/@raimondklavins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Raimond Klavins</a> on <a class=\"text-white\" href=\"https://unsplash.com/s/photos/clear-sky-night?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>';\n          break;\n        case '02d':\n          weatherImg += '02d.jpg'\n          weatherCaption = 'Photo by <a class=\"text-white\" href=\"https://unsplash.com/@simonfitall?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Simon Fitall</a> on <a class=\"text-white\" href=\"https://unsplash.com/s/photos/few-clouds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>';\n          break;\n        case '02n':\n          weatherImg += '02n.jpg'\n          weatherCaption = 'Photo by <a class=\"text-white\" href=\"https://unsplash.com/@hyunwonjang?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Hyunwon Jang</a> on <a class=\"text-white\" href=\"https://unsplash.com/s/photos/clouds-night?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>';\n          break;\n        case '03d':\n          weatherImg += '03d.jpg'\n          weatherCaption = 'Photo by <a class=\"text-white\" href=\"https://unsplash.com/@ortodummie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Peter Žagar</a> on <a class=\"text-white\" href=\"https://unsplash.com/s/photos/few-clouds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>';\n          break;\n        case '03n':\n          weatherImg += '03n.jpg'\n          weatherCaption = 'Photo by <a class=\"text-white\" href=\"https://unsplash.com/@martinjernberg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Martin Jernberg</a> on <a class=\"text-white\" href=\"https://unsplash.com/s/photos/few-clouds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>';\n          break;\n        case '04d':\n          weatherImg += '04d.jpg'\n          weatherCaption = 'Photo by <a class=\"text-white\" href=\"https://unsplash.com/@jplenio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Johannes Plenio</a> on <a class=\"text-white\" href=\"https://unsplash.com/s/photos/few-clouds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>';\n          break;\n        case '04n':\n          weatherImg += '04n.jpg'\n          weatherCaption = 'Photo by <a class=\"text-white\" href=\"https://unsplash.com/@craighiron?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Craig Hiron</a> on <a class=\"text-white\" href=\"https://unsplash.com/s/photos/clouds-night?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>';\n          break;\n        case '09d':\n          weatherImg += '09d.jpg'\n          weatherCaption = 'Photo by <a class=\"text-white\" href=\"https://unsplash.com/@isaac_keem?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Andrew Kim</a> on <a class=\"text-white\" href=\"https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>';\n          break;\n        case '09n':\n          weatherImg += '09n.jpg'\n          weatherCaption = 'Photo by <a class=\"text-white\" href=\"https://unsplash.com/@eutahm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Eutah Mizushima</a> on <a class=\"text-white\" href=\"https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>';\n          break;\n        case '10d':\n          weatherImg += '10d.jpg'\n          weatherCaption = 'Photo by <a class=\"text-white\" href=\"https://unsplash.com/@abingol?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Atilla Bingöl</a> on <a class=\"text-white\" href=\"https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>';\n          break;\n        case '10n':\n          weatherImg += '10n.jpg'\n          weatherCaption = 'Photo by <a class=\"text-white\" href=\"https://unsplash.com/@nardly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Daniel Bernard</a> on <a class=\"text-white\" href=\"https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>';\n          break;\n        case '11d':\n        case '11n':\n          weatherImg += '11.jpg'\n          weatherCaption = 'Photo by <a class=\"text-white\" href=\"https://unsplash.com/@paniscusbcn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Josep Castells</a> on <a class=\"text-white\" href=\"https://unsplash.com/s/photos/clouds-night?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>';\n          break;\n        case '13d':\n        case '13n':\n          weatherImg += '13.jpg'\n          weatherCaption = 'Photo by <a class=\"text-white\" href=\"https://unsplash.com/@heathermedwards?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Heather M. Edwards</a> on <a class=\"text-white\" href=\"https://unsplash.com/s/photos/storm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>';\n          break;\n        case '50d':\n        case '50n':\n          weatherImg += '50.jpg'\n          weatherCaption = 'Photo by <a class=\"text-white\" href=\"https://unsplash.com/@dmtrdon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Dimitar Donovski</a> on <a class=\"text-white\" href=\"https://unsplash.com/s/photos/mist?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>';\n          break;\n        default:\n        weatherImg += '01d.jpg';\n        weatherCaption = 'Photo by <a class=\"text-white\" href=\"https://unsplash.com/@bencollins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Ben Collins</a> on <a class=\"text-white\" href=\"https://unsplash.com/s/photos/clear-sky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>';\n        break;\n      }\n      img.src = weatherImg;\n      figCaption.innerHTML = weatherCaption;\n\n\n      /*const weather = `${weatherMain.toLowerCase().split(' ').join('-')}-${weatherDescription.toLowerCase().split(' ').join('-')}`;\n      const animationURL = `https://api.giphy.com/v1/gifs/translate?api_key=${API_GIPHY}&s=${weather}`;\n      getGIF(animationURL)\n        .then((response) => {\n          img.src = response.data.images.original.url;\n        });*/\n    })\n    .catch((err) => {\n      content.textContent = `${err.message}`;\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drawHome);\n\n\n//# sourceURL=webpack://weather-app/./src/htmlDraw.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _htmlDraw_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlDraw.js */ \"./src/htmlDraw.js\");\n\n\nlet location = 'London,uk';\nlet units = 'metric';\n\nif (!localStorage.getItem('location')) {\n  localStorage.setItem('location', 'London,uk');\n} else {\n  location = localStorage.getItem('location');\n}\n\nif (!localStorage.getItem('units')) {\n  localStorage.setItem('units', 'metric');\n} else {\n  units = localStorage.getItem('units');\n}\n\nconst btnSearch = document.querySelector('#btnSearch');\nconst inputLocation = document.querySelector('#inputLocation');\nconst selectUnits = document.querySelector('#selectUnits');\n\n(0,_htmlDraw_js__WEBPACK_IMPORTED_MODULE_0__.default)(location, units, false);\n\nbtnSearch.addEventListener('click', () => {\n  location = inputLocation.value.match(/^[^,-]+/gi).toString();\n  localStorage.setItem('location', location);\n  (0,_htmlDraw_js__WEBPACK_IMPORTED_MODULE_0__.default)(localStorage.getItem('location'), localStorage.getItem('units'));\n});\n\nselectUnits.addEventListener('change', () => {\n  units = selectUnits.value;\n  localStorage.setItem('units', units);\n  (0,_htmlDraw_js__WEBPACK_IMPORTED_MODULE_0__.default)(location, localStorage.getItem('units'));\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function getData(url) {\n  const res = await fetch(url, { method: 'POST', mode: 'cors' })\n    .catch((err) => err);\n  return res.json();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n\n//# sourceURL=webpack://weather-app/./src/weather.js?");

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