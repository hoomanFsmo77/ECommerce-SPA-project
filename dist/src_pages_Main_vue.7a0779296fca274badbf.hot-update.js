"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetemplate"]("src_pages_Main_vue",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/Header/DesktopHeader.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/Header/DesktopHeader.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../SearchBox.vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../DarkOverlay.vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _store_Cart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/Cart.js */ \"./src/store/Cart.js\");\n\n\n\n\n/////////////////////////////////////\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  __name: 'DesktopHeader',\n  setup: function setup(__props, _ref) {\n    var expose = _ref.expose;\n    expose();\n    var focusFlag = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);\n    var store = (0,_store_Cart_js__WEBPACK_IMPORTED_MODULE_2__.useCartStore)();\n    var cartLength = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {\n      return store.cartLength;\n    });\n    var totalPrice = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {\n      return store.totalPrice.toFixed(2);\n    });\n    var focusHandler = function focusHandler(e) {\n      focusFlag.value = e;\n    };\n    var __returned__ = {\n      focusFlag: focusFlag,\n      store: store,\n      cartLength: cartLength,\n      totalPrice: totalPrice,\n      focusHandler: focusHandler,\n      SearchBox: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../SearchBox.vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n      DarkOverlay: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../DarkOverlay.vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n      computed: vue__WEBPACK_IMPORTED_MODULE_1__.computed,\n      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref,\n      get useCartStore() {\n        return _store_Cart_js__WEBPACK_IMPORTED_MODULE_2__.useCartStore;\n      }\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://template/./src/components/Header/DesktopHeader.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B8%5D.use%5B0%5D");

/***/ })

});