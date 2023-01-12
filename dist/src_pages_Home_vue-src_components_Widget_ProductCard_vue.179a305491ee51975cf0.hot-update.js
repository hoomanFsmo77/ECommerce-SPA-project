"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetemplate"]("src_pages_Home_vue-src_components_Widget_ProductCard_vue",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Home/Popular.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Home/Popular.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../Widget/ProductCard.vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _store_Products_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/Products.js */ \"./src/store/Products.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  __name: 'Popular',\n  setup: function setup(__props, _ref) {\n    var expose = _ref.expose;\n    expose();\n    var store = (0,_store_Products_js__WEBPACK_IMPORTED_MODULE_2__.useProductStore)();\n    var popularProducts = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {\n      return store.getPopularProduct;\n    });\n    var fetchFlag = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {\n      return store.getPopularProductFetchFlag;\n    });\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {\n      store.fetchPopularProduct();\n    });\n    var __returned__ = {\n      store: store,\n      popularProducts: popularProducts,\n      fetchFlag: fetchFlag,\n      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,\n      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,\n      ProductCard: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../Widget/ProductCard.vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n      get useProductStore() {\n        return _store_Products_js__WEBPACK_IMPORTED_MODULE_2__.useProductStore;\n      }\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://template/./src/components/Home/Popular.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B9%5D.use%5B0%5D");

/***/ })

});