"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[893],{224:(t,r,e)=>{e.d(r,{E:()=>l,k:()=>i});var c=e(526),n=e(201),a=e(252),o=e(761),l=function(){var t=(0,c.a)(),r=(0,n.yj)(),e=(0,a.Fl)((function(){return t.getProductList})),o=(0,a.Fl)((function(){return t.getProductListFetchFlag})),l=(0,a.Fl)((function(){return t.getProductListErrorFlag}));return(0,a.YP)((function(){return r.path}),(function(){t.fetchProductList(r.params.name)}),{immediate:!0}),{store:t,route:r,productListData:e,fetchFlag:o,errorFlag:l}},i=function(){var t=(0,o.y)();return{allCollectionList:(0,a.Fl)((function(){return t.getAllList})),fetchFlag:(0,a.Fl)((function(){return t.getFetchFlag}))}}},526:(t,r,e)=>{e.d(r,{a:()=>a});var c=e(305),n=e(817),a=(0,c.Q_)("products",{state:function(){return{productListData:[],productListFetchFlag:!1,productListErrorFlag:!1,popularProduct:[],popularFetchFlag:!1}},getters:{getProductListFetchFlag:function(t){return t.productListFetchFlag},getProductListErrorFlag:function(t){return t.productListErrorFlag},getProductList:function(t){if(t.productListFetchFlag)return t.productListData},getPopularProductFetchFlag:function(t){return t.popularFetchFlag},getPopularProduct:function(t){if(t.popularFetchFlag)return t.popularProduct}},actions:{fetchProductList:function(t){var r=this;this.productListData=[],this.productListFetchFlag=!1,this.productListErrorFlag=!1,n.Z.get("https://ecommerce-199b2-default-rtdb.firebaseio.com/product/productListData/".concat(t,".json")).then((function(t){t.data?(r.productListData=t.data,r.productListFetchFlag=!0):r.productListErrorFlag=!0})).catch((function(t){r.productListErrorFlag=!0}))},fetchPopularProduct:function(){var t=this;this.popularFetchFlag=!1,n.Z.get("https://ecommerce-199b2-default-rtdb.firebaseio.com/product/popularProducts.json").then((function(r){t.popularProduct=r.data,t.popularFetchFlag=!0}))}}})},126:(t,r,e)=>{e.d(r,{Z:()=>s});var c=e(252),n=e(577),a={class:"my-1"},o={class:"flex gap-1 items-center"},l={key:1,class:"font-600 text-0.9 capitalize"},i={key:0,class:"text-0.9 font-600"};const u={name:"BreadCrumb",props:["pages"]};const s=(0,e(744).Z)(u,[["render",function(t,r,e,u,s,p){var d=(0,c.up)("router-link");return(0,c.wg)(),(0,c.iD)("div",a,[(0,c._)("ul",o,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(e.pages,(function(t,r){return(0,c.wg)(),(0,c.iD)(c.HY,null,[(0,c._)("li",null,[t.link?((0,c.wg)(),(0,c.j4)(d,{key:0,class:"font-600 text-0.9 capitalize",to:t.link},{default:(0,c.w5)((function(){return[(0,c.Uk)((0,n.zw)(t.name),1)]})),_:2},1032,["to"])):((0,c.wg)(),(0,c.iD)("span",l,(0,n.zw)(t.name),1))]),(0,c._)("li",null,[r!==e.pages.length-1?((0,c.wg)(),(0,c.iD)("span",i,"/")):(0,c.kq)("v-if",!0)])],64)})),256))])])}]])},174:(t,r,e)=>{e.d(r,{Z:()=>s});var c=e(252),n=e(577),a=e(262),o=e(201),l={class:"collection-card"},i=["srcset","alt"],u={class:"collection-card-text"};const s={__name:"CollectionCart",props:["link","src","srcset","text"],setup:function(t){var r=t,e=(0,o.tv)(),s=(0,a.iH)(!0),p=function(){e.push(r.link)},d=function(){s.value=!1};return function(r,e){var a=(0,c.up)("Skeletor"),o=(0,c.Q2)("lazy");return(0,c.wg)(),(0,c.iD)("div",l,[(0,c._)("div",{class:(0,n.C_)(["collection-card-image",{"h-[400px]":s.value}])},[s.value?((0,c.wg)(),(0,c.j4)(a,{key:0,class:"!absolute",width:"100%",shimmer:!0,height:"400"})):(0,c.kq)("v-if",!0),(0,c.wy)((0,c._)("img",{onLoad:d,sizes:"(max-width: 467px) calc((100vw - 40px) / 2), (max-width: 1280px) calc((100vw - 100px) / 3), 420px",srcset:t.srcset,alt:t.text},null,40,i),[[o,t.src]])],2),(0,c._)("div",u,[(0,c._)("a",{onClick:p,class:"btn-link btn-stretch !font-500 !text-1 capitalize cursor-pointer"},(0,n.zw)(t.text),1)])])}}}},893:(t,r,e)=>{e.r(r),e.d(r,{default:()=>p});var c=e(252),n=e(262),a=e(174),o=e(126),l=e(224),i={id:"collection-list",class:"my-2"},u=(0,c._)("h1",{class:"font-600 text-left mb-1"},"Collections",-1),s={key:0,class:"grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-1.3"};const p={__name:"AllCollections",setup:function(t){var r=(0,l.k)(),e=r.fetchFlag,p=r.allCollectionList;return function(t,r){var l=(0,c.up)("container");return(0,c.wg)(),(0,c.iD)("section",i,[(0,c.Wm)(l,null,{default:(0,c.w5)((function(){return[(0,c.Wm)(o.Z,{pages:[{name:"Home",link:{name:"HOME"}},{name:"Collections"}]}),u,(0,n.SU)(e)?((0,c.wg)(),(0,c.iD)("div",s,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)((0,n.SU)(p),(function(t,r){return(0,c.wg)(),(0,c.j4)(a.Z,{key:r,text:t.text,src:t.src,link:t.link,srcset:t.srcset},null,8,["text","src","link","srcset"])})),128))])):(0,c.kq)("v-if",!0)]})),_:1})])}}}}}]);