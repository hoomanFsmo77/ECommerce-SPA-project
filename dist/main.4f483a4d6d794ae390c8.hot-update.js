"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetemplate"]("main",{

/***/ "./src/router.config.js":
/*!******************************!*\
  !*** ./src/router.config.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n\n//// 404 page\nvar NOT_FOUND = function NOT_FOUND() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_404_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/404.vue */ \"./src/pages/404.vue\"));\n};\n\n//// Cart page\nvar CART = function CART() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_Cart_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Cart.vue */ \"./src/pages/Cart.vue\"));\n};\n\n//// Home pages\nvar HOME = function HOME() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_Home_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Home.vue */ \"./src/pages/Home.vue\"));\n};\n\n//// collection page\nvar COLLECTION_INDEX = function COLLECTION_INDEX() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_Collection_index_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Collection/index.vue */ \"./src/pages/Collection/index.vue\"));\n};\nvar COLLECTION_LIST = function COLLECTION_LIST() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_Collection_CollectionList_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Collection/CollectionList.vue */ \"./src/pages/Collection/CollectionList.vue\"));\n};\nvar ALL_COLLECTION = function ALL_COLLECTION() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_Collection_AllCollections_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Collection/AllCollections.vue */ \"./src/pages/Collection/AllCollections.vue\"));\n};\n\n//// pages\nvar PAGES_INDEX = function PAGES_INDEX() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_pages_index_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/index.vue */ \"./src/pages/pages/index.vue\"));\n};\nvar PAINTINGS = function PAINTINGS() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_pages_Paintings_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/Paintings.vue */ \"./src/pages/pages/Paintings.vue\"));\n};\nvar COMICS = function COMICS() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_pages_Comics_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/Comics.vue */ \"./src/pages/pages/Comics.vue\"));\n};\nvar MURALS_AND_PUBLIC_ART = function MURALS_AND_PUBLIC_ART() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_pages_Murals_and_Public_Art_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/Murals and Public Art.vue */ \"./src/pages/pages/Murals and Public Art.vue\"));\n};\nvar CONTACT_BRENTOS = function CONTACT_BRENTOS() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_pages_contact_brentos_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/contact brentos.vue */ \"./src/pages/pages/contact brentos.vue\"));\n};\nvar BRAND_COLLABORATIONS = function BRAND_COLLABORATIONS() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_pages_Brand_Collaborations_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/Brand Collaborations.vue */ \"./src/pages/pages/Brand Collaborations.vue\"));\n};\nvar OUR_STORY = function OUR_STORY() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_pages_our_story_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/our story.vue */ \"./src/pages/pages/our story.vue\"));\n};\n\n//// policy pages\nvar POLICY_INDEX = function POLICY_INDEX() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_policy_index_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/policy/index.vue */ \"./src/pages/policy/index.vue\"));\n};\nvar REFUND_POLICY = function REFUND_POLICY() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_policy_refund_policy_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/policy/refund policy.vue */ \"./src/pages/policy/refund policy.vue\"));\n};\nvar PRIVACY_POLICY = function PRIVACY_POLICY() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_policy_privacy_policy_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/policy/privacy policy.vue */ \"./src/pages/policy/privacy policy.vue\"));\n};\nvar TERMS_OF_SERVICE = function TERMS_OF_SERVICE() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_policy_terms_of_service_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/policy/terms of service.vue */ \"./src/pages/policy/terms of service.vue\"));\n};\n\n//// product pages\nvar ACCESSORIES = function ACCESSORIES() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_product_Accessories_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product/Accessories.vue */ \"./src/pages/product/Accessories.vue\"));\n};\nvar ART_PRINT_BUNDLES = function ART_PRINT_BUNDLES() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_product_Art_Print_Bundles_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product/Art Print Bundles.vue */ \"./src/pages/product/Art Print Bundles.vue\"));\n};\nvar BOOKS = function BOOKS() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_product_Books_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product/Books.vue */ \"./src/pages/product/Books.vue\"));\n};\nvar SALES = function SALES() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_product_Sale_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product/Sale.vue */ \"./src/pages/product/Sale.vue\"));\n};\nvar CALENDARS = function CALENDARS() {\n  return Promise.resolve().then(function webpackMissingModule() { var e = new Error(\"Cannot find module './pages/product/Calendars.vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; });\n};\nvar ART_PRINTS = function ART_PRINTS() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_product_Art_Prints_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product/Art Prints.vue */ \"./src/pages/product/Art Prints.vue\"));\n};\nvar CLOTHING = function CLOTHING() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_product_Clothing_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product/Clothing.vue */ \"./src/pages/product/Clothing.vue\"));\n};\nvar ORIGINAL_ARTWORK = function ORIGINAL_ARTWORK() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_product_original_artwork_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product/original artwork.vue */ \"./src/pages/product/original artwork.vue\"));\n};\nvar POSTCARD_BOOKLETS = function POSTCARD_BOOKLETS() {\n  return Promise.resolve().then(function webpackMissingModule() { var e = new Error(\"Cannot find module './pages/product/Postcard Booklets.vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; });\n};\nvar STICKERS = function STICKERS() {\n  return Promise.resolve().then(function webpackMissingModule() { var e = new Error(\"Cannot find module './pages/product/Stickers.vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; });\n};\nvar SURFBOARDS = function SURFBOARDS() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_product_Surfboards_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product/Surfboards.vue */ \"./src/pages/product/Surfboards.vue\"));\n};\nvar TRAVEL_POSTERS = function TRAVEL_POSTERS() {\n  return Promise.resolve().then(function webpackMissingModule() { var e = new Error(\"Cannot find module './pages/product/Travel Posters.vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; });\n};\nvar routes = [{\n  name: 'HOME',\n  path: '',\n  component: HOME\n}, {\n  name: 'COLLECTION_INDEX',\n  path: '/Collections',\n  component: COLLECTION_INDEX,\n  children: [{\n    name: 'ALL_COLLECTION',\n    path: '',\n    component: ALL_COLLECTION\n  }, {\n    name: 'COLLECTION_LIST',\n    path: '/:name',\n    component: COLLECTION_LIST,\n    props: true\n  }]\n}, {\n  name: 'CART',\n  path: '/cart',\n  component: CART\n}, {\n  path: '/:pathMatch(.*)*',\n  name: 'NOT_FOUND',\n  component: NOT_FOUND\n}, {\n  name: 'POLICY_INDEX',\n  path: '/Policy',\n  component: POLICY_INDEX,\n  children: [{\n    name: 'REFUND_POLICY',\n    path: '/refund-policy',\n    component: REFUND_POLICY\n  }, {\n    name: 'TERMS_OF_SERVICE',\n    path: '/terms-of-service',\n    component: TERMS_OF_SERVICE\n  }, {\n    name: 'PRIVACY_POLICY',\n    path: '/privacy-policy',\n    component: PRIVACY_POLICY\n  }]\n}, {\n  name: 'PAGES_INDEX',\n  path: '/Pages',\n  component: PAGES_INDEX,\n  children: [{\n    name: 'PAINTINGS',\n    path: '/Paintings',\n    component: PAINTINGS\n  }, {\n    name: 'COMICS',\n    path: '/Comics',\n    component: COMICS\n  }, {\n    name: 'MURALS_AND_PUBLIC_ART',\n    path: '/Murals-and-Public-Art',\n    component: MURALS_AND_PUBLIC_ART\n  }, {\n    name: 'CONTACT_BRENTOS',\n    path: '/contact-brentos',\n    component: CONTACT_BRENTOS\n  }, {\n    name: 'BRAND_COLLABORATIONS',\n    path: '/Brand-Collaborations',\n    component: BRAND_COLLABORATIONS\n  }, {\n    name: 'OUR_STORY',\n    path: '/our-story',\n    component: OUR_STORY\n  }]\n}];\nvar router = (0,vue_router__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_0__.createWebHashHistory)(),\n  routes: routes\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://template/./src/router.config.js?");

/***/ }),

/***/ "./src/style/Tailwind.config/Tailwind.base.scss":
/*!******************************************************!*\
  !*** ./src/style/Tailwind.config/Tailwind.base.scss ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1672850240025\n      var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://template/./src/style/Tailwind.config/Tailwind.base.scss?");

/***/ }),

/***/ "./src/style/Tailwind.config/Tailwind.component.scss":
/*!***********************************************************!*\
  !*** ./src/style/Tailwind.config/Tailwind.component.scss ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1672850240096\n      var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://template/./src/style/Tailwind.config/Tailwind.component.scss?");

/***/ }),

/***/ "./src/style/Tailwind.config/Tailwind.utilities.scss":
/*!***********************************************************!*\
  !*** ./src/style/Tailwind.config/Tailwind.utilities.scss ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1672850240162\n      var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://template/./src/style/Tailwind.config/Tailwind.utilities.scss?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/Grid/row.vue?vue&type=style&index=0&id=0ff87f41&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/Grid/row.vue?vue&type=style&index=0&id=0ff87f41&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1672850239731\n      var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://template/./src/components/Grid/row.vue?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B8%5D.use%5B0%5D");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/get javascript chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.u = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return "" + chunkId + "." + {"src_pages_404_vue":"acf1bdbbf7c0fc08650e","src_pages_Cart_vue":"5541249d3a0581ef2b95","src_pages_Home_vue":"1486b1e75109eb737108","src_pages_Collection_index_vue":"d9efb6dedeefb455e9f0","src_pages_Collection_CollectionList_vue":"18c6065a40ac6e268e8f","src_pages_Collection_AllCollections_vue":"e3a1125e3e8b979a328b","src_pages_pages_index_vue":"61736c8a1de78abf1108","src_pages_pages_Paintings_vue":"c3e70ccd565e4f3e449c","src_pages_pages_Comics_vue":"d31b851707668d4911d6","src_pages_pages_Murals_and_Public_Art_vue":"7cdc70e405bc407d57fc","src_pages_pages_contact_brentos_vue":"216015307e9d19a162a1","src_pages_pages_Brand_Collaborations_vue":"2349fb7c9feda56b24dc","src_pages_pages_our_story_vue":"9611188f5a5ec35514d3","src_pages_policy_index_vue":"a204fadc4521f03a8db8","src_pages_policy_refund_policy_vue":"918b31e6ee6850862c7a","src_pages_policy_privacy_policy_vue":"57d3e2cd0bfaed2bded9","src_pages_policy_terms_of_service_vue":"3889860e73b1884c185f","src_pages_product_Accessories_vue":"0624d514abdb2c3386a9","src_pages_product_Art_Print_Bundles_vue":"4ac7f04554a8b3f950e7","src_pages_product_Books_vue":"cc0942622c90e9f7713a","src_pages_product_Sale_vue":"1ad0d63fb4888b83eaa2","src_pages_product_Art_Prints_vue":"bffcb6900e904daaab70","src_pages_product_Clothing_vue":"5730bb4b8223b66b19e2","src_pages_product_original_artwork_vue":"10a77d833abeb4f901b0","src_pages_product_Surfboards_vue":"c7388fd8941f9ef90e9b"}[chunkId] + ".js";
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6d479bb89182147ebaff")
/******/ })();
/******/ 
/******/ }
);