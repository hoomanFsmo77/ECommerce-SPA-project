/*! For license information please see 418.83b38c19480252ea534c.js.LICENSE.txt */
"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[418],{3363:(t,e,n)=>{n.d(e,{R:()=>d});var r=n(9305),a=n(1817);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(){o=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",u=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),o=new j(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return W()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var u=_(o,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=f(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,o),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var d={};function h(){}function p(){}function v(){}var m={};c(m,a,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(O([])));w&&w!==e&&n.call(w,a)&&(m=w);var b=v.prototype=h.prototype=Object.create(m);function y(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(a,o,u,l){var c=f(t[a],t,o);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==i(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,u,l)}),(function(t){r("throw",t,u,l)})):e.resolve(d).then((function(t){s.value=t,u(s)}),(function(t){return r("throw",t,u,l)}))}l(c.arg)}var a;this._invoke=function(t,n){function i(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(i,i):i()}}function _(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:W}}function W(){return{value:void 0,done:!0}}return p.prototype=v,c(b,"constructor",v),c(v,"constructor",p),p.displayName=c(v,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},y(k.prototype),c(k.prototype,u,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,a,i){void 0===i&&(i=Promise);var o=new k(s(e,n,r,a),i);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},y(b),c(b,l,"Generator"),c(b,a,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return o.type="throw",o.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;S(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function u(t,e,n,r,a,i,o){try{var u=t[i](o),l=u.value}catch(t){return void n(t)}u.done?e(l):Promise.resolve(l).then(r,a)}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=function(t,e){var n=[];return Object.entries(t).forEach((function(t){t[1].forEach((function(r){r.title.toLowerCase().startsWith(e.toLowerCase())&&n.push(c(c({},r),{},{category:t[0]}))}))})),n.filter((function(t,e,n){return n.findIndex((function(e){return e.title===t.title}))===e}))},d=(0,r.Q_)("search",{state:function(){return{navbarSearchResult:{collection:""},navbarSearchFlag:!1,mainSearchResult:[],mainSearchFlag:!1}},getters:{getNavbarSearchFlag:function(t){return t.navbarSearchFlag},getNavbarSearchResult:function(t){return t.navbarSearchResult},getMainSearchFlag:function(t){return t.mainSearchFlag},getMainSearchResult:function(t){return t.mainSearchResult},searchLength:function(t){return t.mainSearchResult.length}},actions:{triggerNavbarSearch:function(t){var e,n=this;return(e=o().mark((function e(){var r,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.navbarSearchFlag=!1,n.navbarSearchResult={},e.next=4,a.Z.get("https://ecommerce-199b2-default-rtdb.firebaseio.com/collection/AllCollectionLists.json");case 4:return r=e.sent,e.next=7,a.Z.get("https://ecommerce-199b2-default-rtdb.firebaseio.com/product/productListData.json");case 7:i=e.sent,Promise.all([r,i]).then((function(e){var r,a;n.navbarSearchResult.collection=(r=e[0].data,a=t,r.filter((function(t){return t.text.toLowerCase().startsWith(a.toLowerCase())}))),n.navbarSearchResult.product=f(e[1].data,t).slice(0,4),n.navbarSearchFlag=!0}));case 9:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(t){u(i,r,a,o,l,"next",t)}function l(t){u(i,r,a,o,l,"throw",t)}o(void 0)}))})()},resetFlag:function(t){this.navbarSearchFlag=t},triggerMainSearch:function(t){var e=this;this.mainSearchResult=[],this.mainSearchFlag=!1,a.Z.get("https://ecommerce-199b2-default-rtdb.firebaseio.com/product/productListData.json").then((function(n){e.mainSearchResult=f(n.data,t),e.mainSearchFlag=!0}))}}})},8065:(t,e,n)=>{n.d(e,{Z:()=>u});var r=n(6252),a=n(2262),i={class:"relative z-[9999]"},o=["value"];const u={__name:"SearchBox",props:["modelValue"],emits:["on"],setup:function(t,e){var n=e.emit,u=(0,a.iH)(!1),l=function(){u.value=!0,n("on",u.value)};return function(e,n){var a=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("input",{value:t.modelValue,onInput:n[0]||(n[0]=function(t){return e.$emit("update:modelValue",t.target.value)}),onFocus:l,type:"text",class:"input-light !pl-3 w-full",placeholder:"Search for..."},null,40,o),(0,r.Wm)(a,{class:"absolute left-0 pl-[16px] top-[33%] text-dark/90",size:"lg",icon:"fa-solid fa-magnifying-glass"})])}}}},9740:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(6252);const a={name:"DarkOverlay",props:["isFire","zIndex"],data:function(){return{isOn:!0}},methods:{clickOutside:function(){this.isOn=!1,this.$emit("outside",this.isOn)}}};const i=(0,n(3744).Z)(a,[["render",function(t,e,n,a,i,o){var u=(0,r.Q2)("fade");return(0,r.wg)(),(0,r.j4)(r.lR,{to:"body"},[(0,r.wy)((0,r._)("div",{onClick:e[0]||(e[0]=function(){return o.clickOutside&&o.clickOutside.apply(o,arguments)}),class:"fixed top-0 left-0 w-[100vw] h-[100vh] bg-dark/50"},null,512),[[u,n.isFire,n.zIndex]])])}]])},7418:(t,e,n)=>{n.r(e),n.d(e,{default:()=>Mt});var r=n(6252),a=n(2262),i=n(1817);const o=function(){var t=(0,a.iH)(!1),e=(0,a.iH)([]);return i.Z.get("./data/NavbarData.json").then((function(n){e.value=n.data.navbarItems,t.value=!0})),{fetchFlag:t,navbarData:e}};var u=n(3577),l=n(9963);const c={__name:"SubMenu",props:["isActive","startTop","endTop"],setup:function(t){var e=t;(0,l.sj)((function(t){return{"5d37c890":n.value,"6fbd20b7":i.value}}));var n=(0,a.iH)(e.startTop),i=(0,a.iH)(e.endTop);return function(e,n){return(0,r.wg)(),(0,r.j4)(l.uT,{name:"show"},{default:(0,r.w5)((function(){return[t.isActive?((0,r.wg)(),(0,r.iD)("div",{key:0,style:(0,u.j5)({top:i.value}),class:"bg-light border-b-[1px] border-r-[1px] border-l-[1px] border-gray-200 transition-all w-11 absolute z-[99999999] shadow-lg"},[(0,r.WI)(e.$slots,"default")],4)):(0,r.kq)("v-if",!0)]})),_:3})}}};var s={class:"navbar-link-content btn-link btn-stretch"},f={class:"[&_*]:font-500 [&_*]:text-0.9 [&_*]:text-dark"},d={class:"navbar-link-content btn-link btn-stretch"},h={class:"[&_*]:font-500 [&_*]:text-0.9 [&_*]:text-dark"},p={class:"my-0.5 hover:bg-gray-100/70 px-1"},v={class:"navbar-link-content btn-link btn-stretch"};const m={__name:"NavbarItem",props:["data"],setup:function(t){var e=(0,a.iH)(!1),n=(0,a.iH)(!1),i=function(){n.value=!1},o={mouseenter:function(){n.value=!0},mouseleave:i,click:i};return function(i,l){var m=(0,r.up)("font-awesome-icon"),g=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("li",{onClick:l[0]||(l[0]=function(t){return(0,a.dq)(e)?e.value=!1:e=!1}),onMouseenter:l[1]||(l[1]=function(t){return(0,a.dq)(e)?e.value=!0:e=!0}),onMouseleave:l[2]||(l[2]=function(t){return(0,a.dq)(e)?e.value=!1:e=!1}),class:"py-0.5 relative py-1"},[(0,r.Wm)(g,{class:"navbar-link",to:t.data.link},{default:(0,r.w5)((function(){return[(0,r._)("span",s,(0,u.zw)(t.data.name),1),t.data.subMenu>0?((0,r.wg)(),(0,r.j4)(m,{key:0,icon:"fa-solid fa-chevron-down"})):(0,r.kq)("v-if",!0)]})),_:1},8,["to"]),t.data.subMenu>0?((0,r.wg)(),(0,r.j4)(c,{key:0,"is-active":(0,a.SU)(e),"start-top":"60px","end-top":"70px"},{default:(0,r.w5)((function(){return[(0,r._)("ul",f,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.data.children,(function(t){return(0,r.wg)(),(0,r.iD)("li",(0,r.dG)((0,r.mx)(t.subMenu>0&&(0,a.SU)(o),!0),{class:"my-0.5 relative px-1 hover:bg-gray-100/70"}),[(0,r.Wm)(g,{class:"navbar-link !justify-start",to:t.link},{default:(0,r.w5)((function(){return[(0,r._)("span",d,(0,u.zw)(t.name),1),t.subMenu>0?((0,r.wg)(),(0,r.j4)(m,{key:0,class:"!text-0.8",icon:"fa-solid fa-chevron-right"})):(0,r.kq)("v-if",!0)]})),_:2},1032,["to"]),t.subMenu>0?((0,r.wg)(),(0,r.j4)(c,{key:0,class:"left-[100%] border-t-[1px]","is-active":(0,a.SU)(n),"start-top":"-15px","end-top":"-8px"},{default:(0,r.w5)((function(){return[(0,r._)("ul",h,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.children,(function(t){return(0,r.wg)(),(0,r.iD)("li",p,[(0,r.Wm)(g,{class:"navbar-link !justify-start",to:t.link},{default:(0,r.w5)((function(){return[(0,r._)("span",v,(0,u.zw)(t.name),1)]})),_:2},1032,["to"])])})),256))])]})),_:2},1032,["is-active"])):(0,r.kq)("v-if",!0)],16)})),256))])]})),_:1},8,["is-active"])):(0,r.kq)("v-if",!0)],32)}}};var g={key:0,class:"flex gap-1.6 items-center flex-wrap"},w={class:"flex justify-end gap-1 items-center"},b=(0,r._)("div",null,[(0,r._)("span",{class:"text-0.7"},"Free Shipping in Australia"),(0,r._)("br"),(0,r._)("span",{class:"font-600 text-dark"},"Orders Over $70")],-1);const y={__name:"DesktopNav",setup:function(t){var e=o(),n=e.navbarData,i=e.fetchFlag;return function(t,e){var o=(0,r.up)("column"),u=(0,r.up)("font-awesome-icon"),l=(0,r.up)("row");return(0,r.wg)(),(0,r.j4)(l,{class:"items-center flex-wrap !my-0 !py-0"},{default:(0,r.w5)((function(){return[(0,r.Wm)(o,{col:"9"},{default:(0,r.w5)((function(){return[(0,a.SU)(i)?((0,r.wg)(),(0,r.iD)("ul",g,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,a.SU)(n),(function(t){return(0,r.wg)(),(0,r.j4)(m,{key:t.id,data:t},null,8,["data"])})),128))])):(0,r.kq)("v-if",!0)]})),_:1}),(0,r.Wm)(o,{col:"3"},{default:(0,r.w5)((function(){return[(0,r._)("div",w,[(0,r.Wm)(u,{icon:"fa-solid fa-truck-fast",size:"2xl",class:"text-dark"}),b])]})),_:1})]})),_:1})}}};var k={key:0,class:"border-t-[1px] border-gray-200 border-b-[1px]"};const _={__name:"Navbar",setup:function(t){var e=window.innerWidth;return function(t,n){var i=(0,r.up)("container");return(0,a.SU)(e)>960?((0,r.wg)(),(0,r.iD)("nav",k,[(0,r.Wm)(i,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(y)]})),_:1})])):(0,r.kq)("v-if",!0)}}};var x=n(8065),S=n(9740),j=(0,n(9305).Q_)("cart",{state:function(){return{cart:[],totalPrice:0}},getters:{cartLength:function(t){return t.cart.length}}}),O=n(2201),W=n(3363),U=null,D=function(){var t=(0,a.iH)(!1),e=(0,a.iH)(""),n=j(),i=(0,W.R)(),o=(0,O.yj)(),u=(0,r.Fl)((function(){return n.cartLength})),l=(0,r.Fl)((function(){return n.totalPrice.toFixed(2)})),c=function(){e.value.length>0&&i.triggerNavbarSearch(e.value)};return(0,r.YP)((function(){return o.fullPath}),(function(){t.value=!1,e.value=""})),{isOn:t,showResult:function(e){t.value=e},searchText:e,cartLength:u,totalPrice:l,closeResult:function(e){t.value=e},initSearch:function(){i.resetFlag(!1),U&&clearTimeout(U),U=setTimeout((function(){c()}),1500)}}},L={class:"skelton p-1.5 !pb-1"},F={class:"flex gap-1 items-center mb-0.7"},z={class:"w-full flex flex-col gap-0.5"},q={class:"flex gap-1 items-center mb-0.7"},H={class:"w-full flex flex-col gap-0.5"},E={class:"flex gap-1 items-center"},M={class:"w-full flex flex-col gap-0.5"};const R={__name:"skeletorLoader",setup:function(t){return function(t,e){var n=(0,r.up)("Skeletor");return(0,r.wg)(),(0,r.iD)("div",L,[(0,r._)("div",F,[(0,r.Wm)(n,{width:"50%",shimmer:!0,height:110}),(0,r._)("div",z,[(0,r.Wm)(n,{width:"100%",shimmer:!0,height:"50"}),(0,r.Wm)(n,{width:"100%",shimmer:!0,height:"50"})])]),(0,r._)("div",q,[(0,r.Wm)(n,{width:"50%",shimmer:!0,height:110}),(0,r._)("div",H,[(0,r.Wm)(n,{width:"100%",shimmer:!0,height:"50"}),(0,r.Wm)(n,{width:"100%",shimmer:!0,height:"50"})])]),(0,r._)("div",E,[(0,r.Wm)(n,{width:"50%",shimmer:!0,height:110}),(0,r._)("div",M,[(0,r.Wm)(n,{width:"100%",shimmer:!0,height:"50"}),(0,r.Wm)(n,{width:"100%",shimmer:!0,height:"50"})])])])}}};var P={class:"search-result-container"},C={class:"search-result"},N={key:1},T={class:"p-1.5 !pb-1"},I=(0,r._)("span",{class:"text-0.9 block"},"Products",-1),Y={class:"search-result-item"},Z=["srcset"],A=(0,r._)("span",{class:"mt-0.5 block font-600"},"$45.00",-1),G={key:1,class:"font-600 text-0.9"},$=(0,r._)("div",{class:"divider"},null,-1),V={class:"p-1.5 !pt-1"},K=(0,r._)("span",{class:"text-0.9 mb-0.5 block"},"Collections",-1),Q={class:"ul-col"},B={key:1,class:"font-600 text-0.9"},J={class:"flex sticky bottom-0 bg-light justify-center mt-1 shadow-[0_0_40px_rgba(0,0,0,0.2)] p-1"};const X={__name:"SearchResult",props:["searchText","isFire"],setup:function(t){var e=(0,W.R)(),n=(0,r.Fl)((function(){return e.getNavbarSearchFlag})),i=(0,r.Fl)((function(){return e.getNavbarSearchResult}));return function(e,o){var l=(0,r.up)("router-link"),c=(0,r.Q2)("lazy"),s=(0,r.Q2)("fade");return(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",P,[(0,r._)("div",C,[(0,a.SU)(n)?((0,r.wg)(),(0,r.iD)("div",N,[(0,r._)("div",T,[I,(0,r.kq)("      <<<<<<<<< render the search result here >>>>>>>>>>>>>>>"),(0,r.kq)("          <<<<<<<<< start >>>>>>>>"),(0,a.SU)(i).product.length>0?((0,r.wg)(!0),(0,r.iD)(r.HY,{key:0},(0,r.Ko)((0,a.SU)(i).product,(function(t){return(0,r.wg)(),(0,r.iD)("div",Y,[(0,r.wy)((0,r._)("img",{srcset:t.coverSrcset,src:"",height:"110",class:"responsive-image rounded-8",alt:""},null,8,Z),[[c,t.coverSrc]]),A,(0,r.Wm)(l,{to:{name:t.link.name,params:{name:t.link.params.name},query:{id:t.id},hash:"#".concat(t.category)},class:"font-600 btn-stretch btn-link"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,u.zw)(t.title),1)]})),_:2},1032,["to"])])})),256)):((0,r.wg)(),(0,r.iD)("p",G," No Search Result Found! ")),(0,r.kq)("          <<<<<<<<< end >>>>>>>>")]),$,(0,r._)("div",V,[K,(0,r._)("ul",Q,[(0,r.kq)("        <<<<<<<<<< render the result of search category here >>>>>>>>>"),(0,r.kq)("        <<<<<<<< start >>>>>>>>"),(0,a.SU)(i).collection.length>0?((0,r.wg)(!0),(0,r.iD)(r.HY,{key:0},(0,r.Ko)((0,a.SU)(i).collection,(function(t){return(0,r.wg)(),(0,r.iD)("li",null,[(0,r.Wm)(l,{class:"btn-link font-600",to:t.link},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,u.zw)(t.text),1)]})),_:2},1032,["to"])])})),256)):((0,r.wg)(),(0,r.iD)("li",B," No Search Result Found! ")),(0,r.kq)("        <<<<<<<<< end >>>>>>>")])]),(0,r._)("div",J,[(0,r.Wm)(l,{class:"btn btn-dark-fill w-full text-center",to:{name:"SEARCH",query:{search:t.searchText}}},{default:(0,r.w5)((function(){return[(0,r.Uk)(' Search for "'+(0,u.zw)(t.searchText)+'" ',1)]})),_:1},8,["to"])])])):((0,r.wg)(),(0,r.j4)(R,{key:0}))])])),[[s,t.searchText.length>0&&t.isFire,"99999"]])}}};var tt=(0,r._)("img",{src:"https://cdn.shopify.com/s/files/1/0272/9548/1943/files/brentoslogo.png?v=1663235427",width:"110",alt:""},null,-1),et={class:"w-[65%] relative"};const nt={__name:"DesktopHeader",setup:function(t){var e=D(),n=e.closeResult,i=e.totalPrice,o=e.cartLength,l=e.searchText,c=e.showResult,s=e.isOn,f=e.initSearch;return function(t,e){var d=(0,r.up)("router-link"),h=(0,r.up)("column"),p=(0,r.up)("font-awesome-icon"),v=(0,r.up)("row");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.kq)("  desktop header"),(0,r.Wm)(v,{class:"items-center !py-1"},{default:(0,r.w5)((function(){return[(0,r.Wm)(h,{col:"6"},{default:(0,r.w5)((function(){return[(0,r._)("div",null,[(0,r.Wm)(d,{to:{name:"HOME"}},{default:(0,r.w5)((function(){return[tt]})),_:1})])]})),_:1}),(0,r.Wm)(h,{col:"6",class:"flex gap-1 items-center justify-end"},{default:(0,r.w5)((function(){return[(0,r._)("div",et,[(0,r.Wm)(x.Z,{onInput:(0,a.SU)(f),modelValue:(0,a.SU)(l),"onUpdate:modelValue":e[0]||(e[0]=function(t){return(0,a.dq)(l)?l.value=t:null}),onOn:e[1]||(e[1]=function(t){return(0,a.SU)(c)(t)})},null,8,["onInput","modelValue"]),(0,r.Wm)(S.Z,{"z-index":"999",onOutside:e[2]||(e[2]=function(t){return(0,a.SU)(n)(t)}),"is-fire":(0,a.SU)(s)},null,8,["is-fire"]),(0,r.Wm)(X,{"is-fire":(0,a.SU)(s),"search-text":(0,a.SU)(l)},null,8,["is-fire","search-text"])]),(0,r.Wm)(d,{to:{name:"CART"},class:"btn btn-dark-fill"},{default:(0,r.w5)((function(){return[(0,r.Wm)(p,{size:"lg",icon:"fa-solid fa-cart-shopping"}),(0,r._)("span",null,"$"+(0,u.zw)((0,a.SU)(i))+" ("+(0,u.zw)((0,a.SU)(o))+")",1)]})),_:1})]})),_:1})]})),_:1})],2112)}}};var rt={class:"w-full transition-all v-collapse bg-gray-200"};const at={__name:"SubMenu",props:["isActive"],setup:function(t){return function(e,n){var a=(0,r.Q2)("collapse");return(0,r.wy)(((0,r.wg)(),(0,r.iD)("ul",rt,[(0,r.WI)(e.$slots,"default")])),[[a,t.isActive]])}}};var it={class:"border-b-[1px] border-gray-200"},ot={class:"navbar-link-content btn-link btn-stretch"},ut={class:"navbar-link-content btn-link btn-stretch"},lt={class:"navbar-link-content !font-500 btn-link btn-stretch"},ct={key:1,class:"navbar-link !justify-between"},st={class:"navbar-link-content !font-500 btn-link btn-stretch"},ft={class:"px-1"},dt={class:"navbar-link-content !font-500 btn-link btn-stretch"};const ht={__name:"NavbarItem",props:["data"],setup:function(t){var e=(0,a.iH)(!1),n=(0,a.iH)(!1),i={click:function(){n.value=!n.value}};return function(o,l){var c=(0,r.up)("font-awesome-icon"),s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("li",it,[!t.data.subMenu>0?((0,r.wg)(),(0,r.j4)(s,{key:0,onClick:l[0]||(l[0]=function(t){return(0,a.dq)(e)?e.value=!(0,a.SU)(e):e=!(0,a.SU)(e)}),class:"navbar-link flex justify-between py-0.9 px-1",to:t.data.link},{default:(0,r.w5)((function(){return[(0,r._)("span",ot,(0,u.zw)(t.data.name),1),t.data.subMenu>0?((0,r.wg)(),(0,r.j4)(c,{key:0,icon:"fa-solid fa-chevron-right",class:(0,u.C_)([{"rotate-[90deg] ":(0,a.SU)(e)},"transition-all"])},null,8,["class"])):(0,r.kq)("v-if",!0)]})),_:1},8,["to"])):((0,r.wg)(),(0,r.iD)("div",{key:1,onClick:l[1]||(l[1]=function(t){return(0,a.dq)(e)?e.value=!(0,a.SU)(e):e=!(0,a.SU)(e)}),class:"navbar-link flex justify-between py-0.9 px-1"},[(0,r._)("span",ut,(0,u.zw)(t.data.name),1),t.data.subMenu>0?((0,r.wg)(),(0,r.j4)(c,{key:0,icon:"fa-solid fa-chevron-right",class:(0,u.C_)([{"rotate-[90deg] ":(0,a.SU)(e)},"transition-all"])},null,8,["class"])):(0,r.kq)("v-if",!0)])),t.data.subMenu>0?((0,r.wg)(),(0,r.j4)(at,{key:2,"is-active":(0,a.SU)(e)},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.data.children,(function(t){return(0,r.wg)(),(0,r.iD)("li",(0,r.dG)({class:"px-1"},(0,r.mx)(t.subMenu>0&&(0,a.SU)(i),!0)),[!t.subMenu>0?((0,r.wg)(),(0,r.j4)(s,{key:0,class:"navbar-link !justify-between",to:t.link},{default:(0,r.w5)((function(){return[(0,r._)("span",lt,(0,u.zw)(t.name),1),t.subMenu>0?((0,r.wg)(),(0,r.j4)(c,{key:0,class:(0,u.C_)([{"rotate-[90deg] ":(0,a.SU)(n)},"!text-0.8 transition-all"]),icon:"fa-solid fa-chevron-right"},null,8,["class"])):(0,r.kq)("v-if",!0)]})),_:2},1032,["to"])):((0,r.wg)(),(0,r.iD)("div",ct,[(0,r._)("span",st,(0,u.zw)(t.name),1),t.subMenu>0?((0,r.wg)(),(0,r.j4)(c,{key:0,class:(0,u.C_)([{"rotate-[90deg] ":(0,a.SU)(n)},"!text-0.8 transition-all"]),icon:"fa-solid fa-chevron-right"},null,8,["class"])):(0,r.kq)("v-if",!0)])),(0,r.Wm)(at,{"is-active":(0,a.SU)(n)},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.children,(function(t){return(0,r.wg)(),(0,r.iD)("li",ft,[(0,r.Wm)(s,{class:"navbar-link !justify-start",to:t.link},{default:(0,r.w5)((function(){return[(0,r._)("span",dt,(0,u.zw)(t.name),1)]})),_:2},1032,["to"])])})),256))]})),_:2},1032,["is-active"])],16)})),256))]})),_:1},8,["is-active"])):(0,r.kq)("v-if",!0)])}}};var pt={class:"block lg:hidden"},vt={key:0,class:"fixed transition-all z-[999999] left-0 top-0 h-[100vh] sm:w-[60vw] w-[100vw] bg-light"},mt={class:"py-1.5 px-1 flex justify-between items-center"},gt=(0,r._)("span",{class:"text-0.9 text-dark font-600"},"Menu",-1),wt={class:"flex w-full justify-start gap-1 items-center py-0.8 border-b-[1px] border-t-[1px] border-gray-200 bg-gray-100 px-0.7"},bt=(0,r._)("div",null,[(0,r._)("span",{class:"text-0.7 block"},"Free Shipping in Australia"),(0,r._)("span",{class:"font-600 text-0.9 text-dark"},"Orders Over $70")],-1),yt={key:0};const kt={__name:"MobileNav",setup:function(t){var e=o(),n=e.fetchFlag,i=e.navbarData,u=function(){var t=(0,a.iH)(!1),e=(0,O.yj)();return(0,r.YP)((function(){return e.path}),(function(){"HOME"!==e.name&&(t.value=!1)})),{isOpen:t,closeMenu:function(e){t.value=e}}}(),c=u.isOpen,s=u.closeMenu;return function(t,e){var o=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",pt,[(0,r.Wm)(o,{onClick:e[0]||(e[0]=function(t){return c.value=!0}),size:"lg",class:"cursor-pointer text-gray-700",icon:"fa-solid fa-bars"})]),(0,r.Wm)(l.uT,{name:"move"},{default:(0,r.w5)((function(){return[(0,a.SU)(c)?((0,r.wg)(),(0,r.iD)("div",vt,[(0,r._)("div",mt,[gt,(0,r.Wm)(o,{size:"lg",class:"cursor-pointer text-gray-700",onClick:e[1]||(e[1]=function(t){return c.value=!1}),icon:"fa-solid fa-x"})]),(0,r._)("div",wt,[(0,r.Wm)(o,{icon:"fa-solid fa-truck-fast",size:"lg",class:"text-dark"}),bt]),(0,a.SU)(n)?((0,r.wg)(),(0,r.iD)("ul",yt,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,a.SU)(i),(function(t){return(0,r.wg)(),(0,r.j4)(ht,{key:t.id,data:t},null,8,["data"])})),128))])):(0,r.kq)("v-if",!0)])):(0,r.kq)("v-if",!0)]})),_:1}),(0,r.Wm)(S.Z,{"z-index":"99999",onOutside:e[2]||(e[2]=function(t){return(0,a.SU)(s)(t)}),"is-fire":(0,a.SU)(c)},null,8,["is-fire"])],64)}}};var _t={class:"relative"},xt={class:"block absolute w-1 h-1 top-[-50%] right-[-50%] text-0.7 flex justify-center items-center text-light bg-gray-800 rounded-full"};const St={name:"Badge",props:["icon","value","size"]};var jt=n(3744);const Ot=(0,jt.Z)(St,[["render",function(t,e,n,a,i,o){var l=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("div",_t,[(0,r.Wm)(l,(0,r.dG)(t.$attrs,{size:n.size,icon:n.icon}),null,16,["size","icon"]),(0,r._)("span",xt,(0,u.zw)(n.value),1)])}]]);var Wt={class:"flex justify-between items-center !py-1 px-0.7"},Ut=(0,r._)("img",{src:"https://cdn.shopify.com/s/files/1/0272/9548/1943/files/brentoslogo.png?v=1663235427",width:"70",alt:""},null,-1),Dt={class:"relative w-[95%] py-1 mx-auto"},Lt={class:"flex w-full justify-start gap-1 items-center py-0.8 border-b-[1px] border-t-[1px] border-gray-200 px-0.7"},Ft=(0,r._)("div",null,[(0,r._)("span",{class:"text-0.6 block"},"Free Shipping in Australia"),(0,r._)("span",{class:"font-600 text-0.9 text-dark"},"Orders Over $70")],-1);const zt={__name:"MobileHeader",setup:function(t){var e=D(),n=e.cartLength,i=e.isOn,o=e.showResult,u=e.searchText,l=(e.totalPrice,e.closeResult),c=e.initSearch;return function(t,e){var s=(0,r.up)("router-link"),f=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.kq)("  mobile header"),(0,r._)("div",null,[(0,r._)("div",Wt,[(0,r.Wm)(kt),(0,r._)("div",null,[(0,r.Wm)(s,{to:{name:"HOME"}},{default:(0,r.w5)((function(){return[Ut]})),_:1})]),(0,r.Wm)(s,{to:{name:"CART"},class:"pr-0.5"},{default:(0,r.w5)((function(){return[(0,r.Wm)(Ot,{size:"lg",class:"cursor-pointer text-gray-800",icon:"fa-solid fa-cart-shopping",value:(0,a.SU)(n)},null,8,["value"])]})),_:1})]),(0,r._)("div",Dt,[(0,r.Wm)(x.Z,{onInput:(0,a.SU)(c),class:"w-full",modelValue:(0,a.SU)(u),"onUpdate:modelValue":e[0]||(e[0]=function(t){return(0,a.dq)(u)?u.value=t:null}),onOn:e[1]||(e[1]=function(t){return(0,a.SU)(o)(t)})},null,8,["onInput","modelValue"]),(0,r.Wm)(S.Z,{"z-index":"999",onOutside:e[2]||(e[2]=function(t){return(0,a.SU)(l)(t)}),"is-fire":(0,a.SU)(i)},null,8,["is-fire"]),(0,r.Wm)(X,{"is-fire":(0,a.SU)(i),"search-text":(0,a.SU)(u)},null,8,["is-fire","search-text"])]),(0,r._)("div",Lt,[(0,r.Wm)(f,{icon:"fa-solid fa-truck-fast",size:"lg",class:"text-dark"}),Ft])])],2112)}}},qt={__name:"Header",setup:function(t){var e=window.innerWidth;return function(t,n){var i=(0,r.up)("container");return(0,r.wg)(),(0,r.iD)("header",null,[(0,a.SU)(e)>960?((0,r.wg)(),(0,r.j4)(i,{key:0},{default:(0,r.w5)((function(){return[(0,r.Wm)(nt)]})),_:1})):((0,r.wg)(),(0,r.j4)(zt,{key:1}))])}}};const Ht={name:"Footer"},Et=(0,jt.Z)(Ht,[["render",function(t,e,n,r,a,i){return null}]]),Mt={__name:"Main",setup:function(t){return function(t,e){var n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(qt),(0,r.Wm)(_),(0,r._)("main",null,[(0,r.Wm)(n,null,{default:(0,r.w5)((function(t){var e=t.Component;return[((0,r.wg)(),(0,r.j4)(r.Ob,null,[((0,r.wg)(),(0,r.j4)((0,r.LL)(e)))],1024))]})),_:1})]),(0,r.Wm)(Et)],64)}}}}}]);