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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var _composables_Cookie_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./composables/Cookie.js */ \"./src/composables/Cookie.js\");\n\n\nvar MAIN_PAGE = function MAIN_PAGE() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_Main_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Main.vue */ \"./src/pages/Main.vue\"));\n};\n\n//// 404 page\nvar NOT_FOUND = function NOT_FOUND() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_404_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/404.vue */ \"./src/pages/404.vue\"));\n};\n\n//// Cart page\nvar CART = function CART() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_Cart_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Cart.vue */ \"./src/pages/Cart.vue\"));\n};\n\n//// Home pages\nvar HOME = function HOME() {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_vue3-carousel_dist_carousel_es_js\"), __webpack_require__.e(\"src_components_product_ProductCard_vue\"), __webpack_require__.e(\"src_pages_Home_vue-src_components_product_ProductCard_vue\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Home.vue */ \"./src/pages/Home.vue\"));\n};\n\n//// collection page\nvar COLLECTION_INDEX = function COLLECTION_INDEX() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_Collection_index_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Collection/index.vue */ \"./src/pages/Collection/index.vue\"));\n};\nvar COLLECTION_LIST = function COLLECTION_LIST() {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"src_components_product_ProductCard_vue\"), __webpack_require__.e(\"src_composables_useCollection_js-src_components_Widget_BreadCrumb_vue-src_components_loader_p-b4d121\"), __webpack_require__.e(\"src_pages_Collection_CollectionList_vue-node_modules_epic-spinners_dist_style_HollowDotsSpinn-f8310b\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Collection/CollectionList.vue */ \"./src/pages/Collection/CollectionList.vue\"));\n};\nvar ALL_COLLECTION = function ALL_COLLECTION() {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"src_composables_useCollection_js-src_components_Widget_BreadCrumb_vue-src_components_loader_p-b4d121\"), __webpack_require__.e(\"src_pages_Collection_AllCollections_vue-node_modules_epic-spinners_dist_style_HollowDotsSpinner_css\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Collection/AllCollections.vue */ \"./src/pages/Collection/AllCollections.vue\"));\n};\n\n//// pages\nvar PAGES_INDEX = function PAGES_INDEX() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_pages_index_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/index.vue */ \"./src/pages/pages/index.vue\"));\n};\nvar PAINTINGS = function PAINTINGS() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_pages_Paintings_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/Paintings.vue */ \"./src/pages/pages/Paintings.vue\"));\n};\nvar COMICS = function COMICS() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_pages_Comics_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/Comics.vue */ \"./src/pages/pages/Comics.vue\"));\n};\nvar MURALS_AND_PUBLIC_ART = function MURALS_AND_PUBLIC_ART() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_pages_Murals_and_Public_Art_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/Murals and Public Art.vue */ \"./src/pages/pages/Murals and Public Art.vue\"));\n};\nvar CONTACT_BRENTOS = function CONTACT_BRENTOS() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_pages_contact_brentos_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/contact brentos.vue */ \"./src/pages/pages/contact brentos.vue\"));\n};\nvar BRAND_COLLABORATIONS = function BRAND_COLLABORATIONS() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_pages_Brand_Collaborations_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/Brand Collaborations.vue */ \"./src/pages/pages/Brand Collaborations.vue\"));\n};\nvar OUR_STORY = function OUR_STORY() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_pages_our_story_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/our story.vue */ \"./src/pages/pages/our story.vue\"));\n};\n\n//// policy pages\nvar POLICY_INDEX = function POLICY_INDEX() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_policy_index_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/policy/index.vue */ \"./src/pages/policy/index.vue\"));\n};\nvar REFUND_POLICY = function REFUND_POLICY() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_policy_refund_policy_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/policy/refund policy.vue */ \"./src/pages/policy/refund policy.vue\"));\n};\nvar PRIVACY_POLICY = function PRIVACY_POLICY() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_policy_privacy_policy_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/policy/privacy policy.vue */ \"./src/pages/policy/privacy policy.vue\"));\n};\nvar TERMS_OF_SERVICE = function TERMS_OF_SERVICE() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_policy_terms_of_service_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/policy/terms of service.vue */ \"./src/pages/policy/terms of service.vue\"));\n};\n\n//// product pages\nvar PRODUCT_INDEX = function PRODUCT_INDEX() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_product_index_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product/index.vue */ \"./src/pages/product/index.vue\"));\n};\nvar PRODUCT = function PRODUCT() {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_vue3-carousel_dist_carousel_es_js\"), __webpack_require__.e(\"src_components_product_ProductCard_vue\"), __webpack_require__.e(\"src_pages_product_Product_vue-src_components_product_ProductCard_vue\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product/Product.vue */ \"./src/pages/product/Product.vue\"));\n};\nvar ART = function ART() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_product_Art_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product/Art.vue */ \"./src/pages/product/Art.vue\"));\n};\n\n//// checkout page\nvar CHECKOUT_INDEX = function CHECKOUT_INDEX() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_checkout_index_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/checkout/index.vue */ \"./src/pages/checkout/index.vue\"));\n};\nvar INFORMATION = function INFORMATION() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_checkout_information_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/checkout/information.vue */ \"./src/pages/checkout/information.vue\"));\n};\nvar PAYMENT = function PAYMENT() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_checkout_payment_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/checkout/payment.vue */ \"./src/pages/checkout/payment.vue\"));\n};\nvar SHIPPING = function SHIPPING() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_checkout_shipping_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/checkout/shipping.vue */ \"./src/pages/checkout/shipping.vue\"));\n};\n\n//// search page\nvar SEARCH = function SEARCH() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_Search_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Search.vue */ \"./src/pages/Search.vue\"));\n};\n\n//// challenge page\nvar CHALLENGE_PAGE = function CHALLENGE_PAGE() {\n  return __webpack_require__.e(/*! import() */ \"src_pages_Challenge_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Challenge.vue */ \"./src/pages/Challenge.vue\"));\n};\nvar routes = [{\n  name: 'MAIN_PAGE',\n  component: MAIN_PAGE,\n  path: '',\n  children: [{\n    name: 'HOME',\n    path: '',\n    component: HOME\n  }, {\n    name: 'COLLECTION_INDEX',\n    path: '/Collections',\n    component: COLLECTION_INDEX,\n    children: [{\n      name: 'ALL_COLLECTION',\n      path: '',\n      component: ALL_COLLECTION\n    }, {\n      name: 'COLLECTION_LIST',\n      path: ':name',\n      component: COLLECTION_LIST,\n      props: true\n    }]\n  }, {\n    name: 'CART',\n    path: '/cart',\n    component: CART\n  }, {\n    path: '/:pathMatch(.*)*',\n    name: 'NOT_FOUND',\n    component: NOT_FOUND\n  }, {\n    name: 'POLICY_INDEX',\n    path: '/Policy',\n    component: POLICY_INDEX,\n    children: [{\n      name: 'REFUND_POLICY',\n      path: 'refund-policy',\n      component: REFUND_POLICY\n    }, {\n      name: 'TERMS_OF_SERVICE',\n      path: 'terms-of-service',\n      component: TERMS_OF_SERVICE\n    }, {\n      name: 'PRIVACY_POLICY',\n      path: 'privacy-policy',\n      component: PRIVACY_POLICY\n    }]\n  }, {\n    name: 'PAGES_INDEX',\n    path: '/Pages',\n    component: PAGES_INDEX,\n    children: [{\n      name: 'PAINTINGS',\n      path: 'Paintings',\n      component: PAINTINGS\n    }, {\n      name: 'COMICS',\n      path: 'Comics',\n      component: COMICS\n    }, {\n      name: 'MURALS_AND_PUBLIC_ART',\n      path: 'Murals-and-Public-Art',\n      component: MURALS_AND_PUBLIC_ART\n    }, {\n      name: 'CONTACT_BRENTOS',\n      path: 'contact-brentos',\n      component: CONTACT_BRENTOS\n    }, {\n      name: 'BRAND_COLLABORATIONS',\n      path: 'Brand-Collaborations',\n      component: BRAND_COLLABORATIONS\n    }, {\n      name: 'OUR_STORY',\n      path: 'our-story',\n      component: OUR_STORY\n    }]\n  }, {\n    name: 'PRODUCT_INDEX',\n    path: '/Products',\n    component: PRODUCT_INDEX,\n    children: [{\n      name: 'PRODUCT',\n      path: ':name',\n      component: PRODUCT,\n      props: true\n    }, {\n      name: 'ART',\n      path: ':name',\n      component: ART,\n      props: true\n    }]\n  }, {\n    name: 'SEARCH',\n    path: '/search',\n    component: SEARCH\n  }, {\n    name: 'CHALLENGE_PAGE',\n    component: CHALLENGE_PAGE,\n    path: '/challenge'\n  }]\n}, {\n  name: '',\n  component: CHECKOUT_INDEX,\n  path: '/checkout',\n  children: [{\n    name: 'INFORMATION',\n    component: INFORMATION,\n    path: 'information'\n  }, {\n    name: 'PAYMENT',\n    component: PAYMENT,\n    path: 'payment'\n  }, {\n    name: 'SHIPPING',\n    component: SHIPPING,\n    path: 'shipping'\n  }]\n}];\nvar router = (0,vue_router__WEBPACK_IMPORTED_MODULE_1__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_1__.createWebHashHistory)(),\n  routes: routes,\n  scrollBehavior: function scrollBehavior(to, from, position) {\n    if (position) {\n      return position;\n    } else {\n      return {\n        top: 0\n      };\n    }\n  }\n});\nrouter.beforeEach(function (to, from, next) {\n  if (to.name === \"CHALLENGE_PAGE\") {\n    if ((0,_composables_Cookie_js__WEBPACK_IMPORTED_MODULE_0__.getCookie)('_news_letter_')) {\n      next();\n    } else {\n      next({\n        name: 'NOT_FOUND'\n      });\n    }\n  } else {\n    next();\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://template/./src/router.config.js?");

/***/ }),

/***/ "./src/style/App.scss":
/*!****************************!*\
  !*** ./src/style/App.scss ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1673562565193\n      var cssReload = __webpack_require__(/*! ../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://template/./src/style/App.scss?");

/***/ }),

/***/ "./src/style/Tailwind.config/Tailwind.base.scss":
/*!******************************************************!*\
  !*** ./src/style/Tailwind.config/Tailwind.base.scss ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1673562566160\n      var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://template/./src/style/Tailwind.config/Tailwind.base.scss?");

/***/ }),

/***/ "./src/style/Tailwind.config/Tailwind.component.scss":
/*!***********************************************************!*\
  !*** ./src/style/Tailwind.config/Tailwind.component.scss ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1673562566981\n      var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://template/./src/style/Tailwind.config/Tailwind.component.scss?");

/***/ }),

/***/ "./src/style/Tailwind.config/Tailwind.utilities.scss":
/*!***********************************************************!*\
  !*** ./src/style/Tailwind.config/Tailwind.utilities.scss ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1673562566557\n      var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://template/./src/style/Tailwind.config/Tailwind.utilities.scss?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Grid/row.vue?vue&type=style&index=0&id=0ff87f41&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./src/components/Grid/row.vue?vue&type=style&index=0&id=0ff87f41&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1673562565369\n      var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://template/./src/components/Grid/row.vue?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B9%5D.use%5B0%5D");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/get javascript chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.u = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return "" + chunkId + "." + {"src_pages_Main_vue":"44929fcb73dc951618d3","src_pages_404_vue":"d328f507f0c048f17988","src_pages_Cart_vue":"cdcb08a30ee55db4db12","vendors-node_modules_vue3-carousel_dist_carousel_es_js":"2e7d8c843bcee72cbbc6","src_components_product_ProductCard_vue":"df69a373e742871f8845","src_pages_Home_vue-src_components_product_ProductCard_vue":"1489f3d2f90b466f67f2","src_pages_Collection_index_vue":"66a4db744af9730944b6","src_composables_useCollection_js-src_components_Widget_BreadCrumb_vue-src_components_loader_p-b4d121":"1ea70e0d75a74211c79a","src_pages_Collection_CollectionList_vue-node_modules_epic-spinners_dist_style_HollowDotsSpinn-f8310b":"2b3b8465fefa7c584e3a","src_pages_Collection_AllCollections_vue-node_modules_epic-spinners_dist_style_HollowDotsSpinner_css":"040839642f49cfd25c99","src_pages_pages_index_vue":"74a28064f127fb4214f1","src_pages_pages_Paintings_vue":"1fa25733036d98d76e1e","src_pages_pages_Comics_vue":"a47fc5a14f21a0326efa","src_pages_pages_Murals_and_Public_Art_vue":"b584e01b54e0aa01579b","src_pages_pages_contact_brentos_vue":"8da3374977a05a20351e","src_pages_pages_Brand_Collaborations_vue":"76a4a238c091d0a30aee","src_pages_pages_our_story_vue":"0b9cd57e6d6464fbb7a1","src_pages_policy_index_vue":"3943351da4da2d6b6649","src_pages_policy_refund_policy_vue":"49c4d155d24399f31f75","src_pages_policy_privacy_policy_vue":"9d0ec4ab8204b593eb88","src_pages_policy_terms_of_service_vue":"565d613b466dedc74957","src_pages_product_index_vue":"4fe8479f3dfff4083fbc","src_pages_product_Product_vue-src_components_product_ProductCard_vue":"3ce46cbb266aa651c3ae","src_pages_product_Art_vue":"236ff78ce46eb3704852","src_pages_checkout_index_vue":"300ff34bbdf3ae49bc83","src_pages_checkout_information_vue":"79d3add2d3a929f328e4","src_pages_checkout_payment_vue":"871739100b6dbfa82491","src_pages_checkout_shipping_vue":"18556beadae5d82ff288","src_pages_Search_vue":"cdfe9c91624240da7683","src_pages_Challenge_vue":"9d8dea3ba782848fca25"}[chunkId] + ".js";
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("09e1893b1f05ddae5c13")
/******/ })();
/******/ 
/******/ /* webpack/runtime/css loading */
/******/ (() => {
/******/ 	var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 		var linkTag = document.createElement("link");
/******/ 	
/******/ 		linkTag.rel = "stylesheet";
/******/ 		linkTag.type = "text/css";
/******/ 		var onLinkComplete = (event) => {
/******/ 			// avoid mem leaks.
/******/ 			linkTag.onerror = linkTag.onload = null;
/******/ 			if (event.type === 'load') {
/******/ 				resolve();
/******/ 			} else {
/******/ 				var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 				var realHref = event && event.target && event.target.href || fullhref;
/******/ 				var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 				err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 				err.type = errorType;
/******/ 				err.request = realHref;
/******/ 				linkTag.parentNode.removeChild(linkTag)
/******/ 				reject(err);
/******/ 			}
/******/ 		}
/******/ 		linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 		linkTag.href = fullhref;
/******/ 	
/******/ 		document.head.appendChild(linkTag);
/******/ 		return linkTag;
/******/ 	};
/******/ 	var findStylesheet = (href, fullhref) => {
/******/ 		var existingLinkTags = document.getElementsByTagName("link");
/******/ 		for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 			var tag = existingLinkTags[i];
/******/ 			var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 			if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 		}
/******/ 		var existingStyleTags = document.getElementsByTagName("style");
/******/ 		for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 			var tag = existingStyleTags[i];
/******/ 			var dataHref = tag.getAttribute("data-href");
/******/ 			if(dataHref === href || dataHref === fullhref) return tag;
/******/ 		}
/******/ 	};
/******/ 	var loadStylesheet = (chunkId) => {
/******/ 		return new Promise((resolve, reject) => {
/******/ 			var href = __webpack_require__.miniCssF(chunkId);
/******/ 			var fullhref = __webpack_require__.p + href;
/******/ 			if(findStylesheet(href, fullhref)) return resolve();
/******/ 			createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 		});
/******/ 	}
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"main": 0
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 		var cssChunks = {"src_pages_Main_vue":1,"src_pages_Home_vue-src_components_product_ProductCard_vue":1,"src_pages_Collection_CollectionList_vue-node_modules_epic-spinners_dist_style_HollowDotsSpinn-f8310b":1,"src_pages_Collection_AllCollections_vue-node_modules_epic-spinners_dist_style_HollowDotsSpinner_css":1,"src_pages_product_Product_vue-src_components_product_ProductCard_vue":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}, (e) => {
/******/ 				delete installedCssChunks[chunkId];
/******/ 				throw e;
/******/ 			}));
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	var oldTags = [];
/******/ 	var newTags = [];
/******/ 	var applyHandler = (options) => {
/******/ 		return { dispose: () => {
/******/ 			for(var i = 0; i < oldTags.length; i++) {
/******/ 				var oldTag = oldTags[i];
/******/ 				if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 			}
/******/ 			oldTags.length = 0;
/******/ 		}, apply: () => {
/******/ 			for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 			newTags.length = 0;
/******/ 		} };
/******/ 	}
/******/ 	__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 		applyHandlers.push(applyHandler);
/******/ 		chunkIds.forEach((chunkId) => {
/******/ 			var href = __webpack_require__.miniCssF(chunkId);
/******/ 			var fullhref = __webpack_require__.p + href;
/******/ 			var oldTag = findStylesheet(href, fullhref);
/******/ 			if(!oldTag) return;
/******/ 			promises.push(new Promise((resolve, reject) => {
/******/ 				var tag = createStylesheet(chunkId, fullhref, () => {
/******/ 					tag.as = "style";
/******/ 					tag.rel = "preload";
/******/ 					resolve();
/******/ 				}, reject);
/******/ 				oldTags.push(oldTag);
/******/ 				newTags.push(tag);
/******/ 			}));
/******/ 		});
/******/ 	}
/******/ })();
/******/ 
/******/ }
);