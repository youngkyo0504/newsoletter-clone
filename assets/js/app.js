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

/***/ "./assets/js/subscribe.js":
/*!********************************!*\
  !*** ./assets/js/subscribe.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _subscribeAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribeAPI.js */ \"./assets/js/subscribeAPI.js\");\n\r\n// preload\r\nfunction preloadImages(imagesURLs) {\r\n  imagesURLs.forEach((url) => {\r\n    const image = new Image();\r\n    console.log(location.origin);\r\n    image.src = window.location.origin + url;\r\n  });\r\n}\r\n// component open/close 메서드\r\nfunction showComponent(className, element) {\r\n  if (element) {\r\n    const showComponent = element.querySelector(className);\r\n    showComponent.hidden = false;\r\n    return;\r\n  }\r\n  const showComponent = document.querySelector(className);\r\n  showComponent.hidden = false;\r\n}\r\n\r\nfunction hideComponent(className, element) {\r\n  if (element) {\r\n    const showComponent = element.querySelector(className);\r\n    showComponent.hidden = true;\r\n    return;\r\n  }\r\n  const overlay = document.querySelector(className);\r\n  overlay.hidden = true;\r\n}\r\n\r\nfunction makeCloseBtn(btnCloseClassName, componentName) {\r\n  const closeBtn = document.querySelector(btnCloseClassName);\r\n  closeBtn.addEventListener(\"click\", () => {\r\n    hideComponent(componentName);\r\n  });\r\n}\r\n\r\nfunction makeSubScribeForm(form) {\r\n  form.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n    subscribeNewso(e, form);\r\n  });\r\n}\r\nfunction makeOpenBtn(btnName, openComponentName) {\r\n  const btns = document.querySelectorAll(btnName);\r\n  btns.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      showComponent(openComponentName);\r\n    });\r\n  });\r\n}\r\nfunction hideSubscribeResult(resultMessage) {\r\n  const errorMessageContainers = resultMessage.querySelectorAll(\r\n    \".error-text-container\"\r\n  );\r\n  errorMessageContainers.forEach((container) => {\r\n    container.style.display = \"none\";\r\n  });\r\n}\r\n\r\n// 구독 메서드\r\nfunction getUser(form) {\r\n  const email = form.querySelector(\".js-email-input\");\r\n  const name = form.querySelector(\".js-name-input\");\r\n  const user = { email: email.value, name: name.value };\r\n  return user;\r\n}\r\n\r\n// mainsubscribe 함수\r\nasync function subscribeNewso(e, form) {\r\n  e.preventDefault();\r\n  showComponent(\".loading-sppiner\", form);\r\n  // 메세지 지우고 시작\r\n  const resultMessage = form.querySelector(\".result-message\");\r\n  hideSubscribeResult(resultMessage);\r\n  const user = getUser(form);\r\n  const result = await _subscribeAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addSubscriber(user);\r\n  // 메세지 보여주기\r\n  hideComponent(\".loading-sppiner\", form);\r\n  showSubscribeResult(result, resultMessage, user);\r\n}\r\n\r\nfunction showSubscribeResult(result, resultMessage) {\r\n  const success = resultMessage.querySelector(\".success\");\r\n  const fail = resultMessage.querySelector(\".fail\");\r\n\r\n  const getMessageByResult = {\r\n    update: {\r\n      status: success,\r\n      text: \"입력하신 이메일 주소로 확인 메일을 보내드렸습니다.\",\r\n    },\r\n    success: {\r\n      status: success,\r\n      text: \"입력하신 이메일 주소로 확인 메일을 보내드렸습니다.\",\r\n    },\r\n    failExistEmail: { status: fail, text: \"이미 구독 중인 이메일 주소입니다.\" },\r\n    failUnknown: {\r\n      status: fail,\r\n      text: \"이런, 뭔가 잘못된 것 같습니다. 입력한 값을 다시 확인하세요.\",\r\n    },\r\n    default: { status: fail, text: \"이메일을 확인해주세요\" },\r\n  };\r\n\r\n  const message = getMessageByResult[result] || getMessageByResult[\"default\"];\r\n  showText(message);\r\n}\r\n\r\nfunction showText({ status, text }) {\r\n  const messageElement = status.querySelector(\".result-message-text\");\r\n  messageElement.innerText = text;\r\n  status.style.display = \"flex\";\r\n}\r\n\r\n// 실제 동작 함수\r\nconst imagesUrls = [\r\n  \"/assets/images/color-icons/bn-hover-insta@2x.png\",\r\n  \"/assets/images/color-icons/bn-hover-facebook@2x.png\",\r\n  \"/assets/images/color-icons/bn-hover-data@2x.png\",\r\n  \"/assets/images/color-icons/bn-hover-kakaotalk@2x.png\",\r\n  \"/assets/images/color-icons/bn-hover-mail@2x.png\",\r\n];\r\n\r\npreloadImages(imagesUrls);\r\nmakeOpenBtn(\".js-subscribe-open-btn\", \".overlay-subscribe\");\r\nmakeOpenBtn(\".js-policy-open-btn\", \".overlay-policy\");\r\nmakeOpenBtn(\".mo-menu-btn\", \".mo-menu-overlay\");\r\n\r\nmakeCloseBtn(\".modal-exit\", \".overlay-subscribe\");\r\nmakeCloseBtn(\".mo-menu-modal-exit\", \".mo-menu-overlay\");\r\nmakeCloseBtn(\".modal-policy-exit\", \".overlay-policy\");\r\n\r\nconst subscribe_forms = document.querySelectorAll(\".js-subscribe-form\");\r\nsubscribe_forms.forEach((form) => {\r\n  makeSubScribeForm(form);\r\n});\r\n\n\n//# sourceURL=webpack://newso/./assets/js/subscribe.js?");

/***/ }),

/***/ "./assets/js/subscribeAPI.js":
/*!***********************************!*\
  !*** ./assets/js/subscribeAPI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass SubscribeAPI {\r\n  constructor() {\r\n    this.headers = new Headers();\r\n    this.headers.append(\"Content-Type\", \"application/json\");\r\n  }\r\n\r\n  async postSubscribe(user) {\r\n    const raw = JSON.stringify({\r\n      email: user.email,\r\n      name: user.name,\r\n    });\r\n\r\n    const requestOptions = {\r\n      method: \"POST\",\r\n      headers: this.headers,\r\n      body: raw,\r\n      redirect: \"follow\",\r\n    };\r\n\r\n    try {\r\n      //aws 람다임\r\n      const response = await fetch(\r\n        \"https://84l4s5m4ik.execute-api.ap-northeast-2.amazonaws.com/default/newso-subscribe\",\r\n        requestOptions\r\n      ).then((response) => response.json());\r\n      const subscribeResult = response.body.result;\r\n      return subscribeResult;\r\n    } catch (error) {\r\n      throw new Error(error);\r\n    }\r\n  }\r\n\r\n  async addSubscriber(user) {\r\n    const result = await this.postSubscribe(user);\r\n    const { Ok, Value } = result;\r\n    if (!Ok) {\r\n      return \"failUnknown\";\r\n    }\r\n    const subscribeResults = Value;\r\n    for (let subscribeResult in subscribeResults) {\r\n      if (subscribeResults[subscribeResult].length !== 0) {\r\n        return subscribeResult;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nconst subscribeAPI = new SubscribeAPI();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subscribeAPI);\r\n\n\n//# sourceURL=webpack://newso/./assets/js/subscribeAPI.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/subscribe.js");
/******/ 	
/******/ })()
;