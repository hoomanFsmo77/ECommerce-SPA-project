"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[426],{5224:(e,t,n)=>{n.d(t,{E:()=>a,k:()=>u});var r=n(3526),i=n(2201),o=n(6252),l=n(1761),a=function(){var e=(0,r.a)(),t=(0,i.yj)(),n=(0,o.Fl)((function(){return e.getProductList})),l=(0,o.Fl)((function(){return e.getProductListFetchFlag})),a=(0,o.Fl)((function(){return e.getProductListErrorFlag}));return(0,o.YP)((function(){return t.path}),(function(){e.fetchProductList(t.params.name)}),{immediate:!0}),{store:e,route:t,productListData:n,fetchFlag:l,errorFlag:a}},u=function(){var e=(0,l.y)();return{allCollectionList:(0,o.Fl)((function(){return e.getAllList})),fetchFlag:(0,o.Fl)((function(){return e.getFetchFlag}))}}},9310:(e,t,n)=>{n.d(t,{X:()=>u,n:()=>a});var r=n(2262),i=n(6252);function o(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=function(e,t){var n=(0,r.iH)(Math.ceil(e.source.length/e.itemInWarp)),l=(0,r.iH)(e.source),a=(0,r.iH)(1),u=function(n){var r=n*e.itemInWarp-e.itemInWarp,i=n*e.itemInWarp>e.source.length?e.source.length:n*e.itemInWarp,a=o(l.value).slice(r,i);t("update",a),t("period",{start:r,end:i})};(0,i.bv)((function(){u(a.value)}));return{pages:n,paginating:function(e){a.value=e,u(a.value)},currentPage:a,next:function(){a.value++,a.value>n.value&&(a.value=1),u(a.value)},prev:function(){a.value--,a.value<1&&(a.value=n.value),u(a.value)}}},u=function(){var e=(0,r.iH)([]);return{updatePage:function(t){e.value=t},list:e}}},2698:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(6252),i=n(3577),o={class:"my-1"},l={class:"flex gap-1 flex-wrap items-center"},a={key:1,class:"font-600 text-[0.85rem] capitalize"},u={key:0,class:"text-[0.85rem] font-600"};const c={name:"BreadCrumb",props:["pages"]};const s=(0,n(3744).Z)(c,[["render",function(e,t,n,c,s,d){var f=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("ul",l,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.pages,(function(e,t){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("li",null,[e.link?((0,r.wg)(),(0,r.j4)(f,{key:0,class:"font-600 text-[0.85rem] capitalize",to:e.link},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,i.zw)(e.name),1)]})),_:2},1032,["to"])):((0,r.wg)(),(0,r.iD)("span",a,(0,i.zw)(e.name),1))]),(0,r._)("li",null,[t!==n.pages.length-1?((0,r.wg)(),(0,r.iD)("span",u,"/")):(0,r.kq)("v-if",!0)])],64)})),256))])])}]])},1381:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(6252),i=n(2262),o=n(3577),l=n(9310),a={class:"pagination"},u=["disabled"],c=["onClick"],s=["disabled"];const d={__name:"Pagination",props:["itemInWarp","source"],emits:["update"],setup:function(e,t){var n=t.emit,d=e,f=(0,l.n)(d,n),p=f.pages,g=f.paginating,v=f.currentPage,m=f.prev,w=f.next;return function(e,t){var n=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("button",{disabled:1===(0,i.SU)(v),class:(0,o.C_)([{disabled:1===(0,i.SU)(v)},"pagination-btn mr-1"]),onClick:t[0]||(t[0]=function(){return(0,i.SU)(m)&&(0,i.SU)(m).apply(void 0,arguments)})},[(0,r.Wm)(n,{icon:"fa-solid fa-chevron-left"})],10,u),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,i.SU)(p),(function(e){return(0,r.wg)(),(0,r.iD)("button",{class:(0,o.C_)([{selected:(0,i.SU)(v)===e},"pagination-counter mr-1"]),onClick:function(t){return(0,i.SU)(g)(e)},key:e},(0,o.zw)(e),11,c)})),128)),(0,r._)("button",{disabled:(0,i.SU)(v)===(0,i.SU)(p),class:(0,o.C_)([{disabled:(0,i.SU)(v)===(0,i.SU)(p)},"pagination-btn"]),onClick:t[1]||(t[1]=function(){return(0,i.SU)(w)&&(0,i.SU)(w).apply(void 0,arguments)})},[(0,r.Wm)(n,{icon:"fa-solid fa-chevron-right"})],10,s)])}}}},5396:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(6252),i=n(2262),o=n(3577),l=n(8965),a=n(2698),u=n(9310),c=n(1381),s=n(5224),d=n(1663),f={class:"font-600 text-left mb-1"},p={class:"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1.5"},g={class:"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1.5"},v={key:1,class:"font-500 my-1"};const m={__name:"CollectionList",props:["name"],setup:function(e){var t=(0,u.X)(),n=t.updatePage,m=t.list,w=(0,s.E)(),y=w.errorFlag,S=w.fetchFlag,k=w.productListData;return function(t,u){var s=(0,r.up)("column"),w=(0,r.up)("row"),h=(0,r.up)("container");return(0,r.wg)(),(0,r.j4)(h,{class:"relative"},{default:(0,r.w5)((function(){return[(0,r.Wm)(d.Z,{show:!(0,i.SU)(S)&&!(0,i.SU)(y)},null,8,["show"]),(0,r.Wm)(w,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(s,{col:"12"},{default:(0,r.w5)((function(){return[(0,r.Wm)(a.Z,{pages:[{name:"Home",link:{name:"HOME"}},{name:"Collections",link:{name:"ALL_COLLECTION"}},{name:e.name.split("-").join(" ")}]},null,8,["pages"]),(0,r._)("h1",f,(0,o.zw)(e.name.split("-").join(" ")),1)]})),_:1})]})),_:1}),(0,i.SU)(S)&&(0,i.SU)(k)?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[24<(0,i.SU)(k).length?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r.Wm)(w,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(s,{col:"12"},{default:(0,r.w5)((function(){return[(0,r._)("div",p,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,i.SU)(m),(function(e){return(0,r.wg)(),(0,r.j4)(l.Z,{class:"mb-1",price:e.price,title:e.title,link:e.link,discount:e.discount,"cover-src":e.coverSrc,"cover-srcset":e.coverSrcset,"overlay-src":e.overlaySrc,"overlay-srcset":e.overlaySrcset,"is-period":e.isPeriod,id:e.id,"is-sold-out":e.isSoldOut},null,8,["price","title","link","discount","cover-src","cover-srcset","overlay-src","overlay-srcset","is-period","id","is-sold-out"])})),256))])]})),_:1})]})),_:1}),(0,r.Wm)(w,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(s,{col:"12"},{default:(0,r.w5)((function(){return[(0,r.Wm)(c.Z,{onUpdate:u[0]||(u[0]=function(e){return(0,i.SU)(n)(e)}),source:(0,i.SU)(k),"item-in-warp":24},null,8,["source"])]})),_:1})]})),_:1})],64)):((0,r.wg)(),(0,r.j4)(w,{key:1},{default:(0,r.w5)((function(){return[(0,r.Wm)(s,{col:"12"},{default:(0,r.w5)((function(){return[(0,r._)("div",g,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,i.SU)(k),(function(e){return(0,r.wg)(),(0,r.j4)(l.Z,{class:"mb-1",price:e.price,title:e.title,link:e.link,discount:e.discount,"cover-src":e.coverSrc,"cover-srcset":e.coverSrcset,"overlay-src":e.overlaySrc,"overlay-srcset":e.overlaySrcset,"is-period":e.isPeriod,id:e.id,"is-sold-out":e.isSoldOut},null,8,["price","title","link","discount","cover-src","cover-srcset","overlay-src","overlay-srcset","is-period","id","is-sold-out"])})),256))])]})),_:1})]})),_:1}))],64)):(0,r.kq)("v-if",!0),(0,i.SU)(y)?((0,r.wg)(),(0,r.iD)("span",v,"There are currently no products in this collection. ")):(0,r.kq)("v-if",!0)]})),_:1})}}}}}]);