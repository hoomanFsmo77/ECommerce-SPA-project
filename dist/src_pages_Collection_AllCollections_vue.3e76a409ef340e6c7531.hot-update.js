"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetemplate"]("src_pages_Collection_AllCollections_vue",{

/***/ "./src/store/collection.js":
/*!*********************************!*\
  !*** ./src/store/collection.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useCollectionStore\": () => (/* binding */ useCollectionStore)\n/* harmony export */ });\n/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pinia */ \"./node_modules/pinia/dist/pinia.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\n\nvar useCollectionStore = (0,pinia__WEBPACK_IMPORTED_MODULE_0__.defineStore)('collection', {\n  state: function state() {\n    return {\n      collections: [],\n      fetchFlag: false\n    };\n  },\n  getters: {\n    getFetchFlag: function getFetchFlag(state) {\n      return state.fetchFlag;\n    },\n    getAllList: function getAllList(state) {\n      if (state.fetchFlag) {\n        return state.collections;\n      }\n    },\n    getRandomCollection: function getRandomCollection(state) {\n      return function (len) {\n        if (state.fetchFlag) {\n          var randomNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];\n          var randomCollection = [];\n          for (var i = 0; i < len; i++) {\n            var randomIndex = Math.floor(Math.random() * randomNumber.length);\n            randomCollection.push(state.collections[randomNumber[randomIndex]]);\n            randomNumber.splice(randomIndex, 1);\n          }\n          return randomCollection;\n        }\n      };\n    }\n  },\n  actions: {\n    setCollectionData: function setCollectionData() {\n      var _this = this;\n      this.collections = [];\n      this.fetchFlag = false;\n      axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get('https://ecommerce-199b2-default-rtdb.firebaseio.com/collection/AllCollectionLists.json').then(function (response) {\n        _this.collections = response.data;\n        _this.fetchFlag = true;\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://template/./src/store/collection.js?");

/***/ })

});