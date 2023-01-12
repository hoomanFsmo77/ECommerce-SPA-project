"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetemplate"]("src_pages_Home_vue-src_components_product_ProductCard_vue",{

/***/ "./src/store/Products.js":
/*!*******************************!*\
  !*** ./src/store/Products.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useProductStore\": () => (/* binding */ useProductStore)\n/* harmony export */ });\n/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pinia */ \"./node_modules/pinia/dist/pinia.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\n\nvar useProductStore = (0,pinia__WEBPACK_IMPORTED_MODULE_0__.defineStore)('products', {\n  state: function state() {\n    return {\n      productListData: [],\n      productListFetchFlag: false,\n      productListErrorFlag: false,\n      popularProduct: [],\n      popularFetchFlag: false\n    };\n  },\n  getters: {\n    getProductListFetchFlag: function getProductListFetchFlag(state) {\n      return state.productListFetchFlag;\n    },\n    getProductListErrorFlag: function getProductListErrorFlag(state) {\n      return state.productListErrorFlag;\n    },\n    getProductList: function getProductList(state) {\n      if (state.productListFetchFlag) {\n        return state.productListData;\n      }\n    },\n    getPopularProductFetchFlag: function getPopularProductFetchFlag(state) {\n      return state.popularFetchFlag;\n    },\n    getPopularProduct: function getPopularProduct(state) {\n      if (state.popularFetchFlag) {\n        return state.popularProduct;\n      }\n    }\n  },\n  actions: {\n    fetchProductList: function fetchProductList(name) {\n      var _this = this;\n      this.productListData = [];\n      this.productListFetchFlag = false;\n      this.productListErrorFlag = false;\n      axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://ecommerce-199b2-default-rtdb.firebaseio.com/product/productListData/\".concat(name, \".json\")).then(function (response) {\n        if (response.data) {\n          _this.productListData = response.data;\n          _this.productListFetchFlag = true;\n        } else {\n          _this.productListErrorFlag = true;\n        }\n      })[\"catch\"](function (err) {\n        _this.productListErrorFlag = true;\n      });\n    },\n    fetchPopularProduct: function fetchPopularProduct() {\n      var _this2 = this;\n      this.popularFetchFlag = false;\n      axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get('https://ecommerce-199b2-default-rtdb.firebaseio.com/product/popularProducts.json').then(function (response) {\n        _this2.popularProduct = response.data;\n        _this2.popularFetchFlag = true;\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://template/./src/store/Products.js?");

/***/ })

});