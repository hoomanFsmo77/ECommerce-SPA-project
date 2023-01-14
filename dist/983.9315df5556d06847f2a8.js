"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[983],{5224:(t,e,r)=>{r.d(e,{E:()=>c,k:()=>l});var n=r(3526),i=r(2201),o=r(6252),a=r(1761),c=function(){var t=(0,n.a)(),e=(0,i.yj)(),r=(0,o.Fl)((function(){return t.getProductList})),a=(0,o.Fl)((function(){return t.getProductListFetchFlag})),c=(0,o.Fl)((function(){return t.getProductListErrorFlag}));return(0,o.YP)((function(){return e.path}),(function(){t.fetchProductList(e.params.name)}),{immediate:!0}),{store:t,route:e,productListData:r,fetchFlag:a,errorFlag:c}},l=function(){var t=(0,a.y)();return{allCollectionList:(0,o.Fl)((function(){return t.getAllList})),fetchFlag:(0,o.Fl)((function(){return t.getFetchFlag}))}}},3526:(t,e,r)=>{r.d(e,{a:()=>o});var n=r(9305),i=r(1817),o=(0,n.Q_)("products",{state:function(){return{productListData:[],productListFetchFlag:!1,productListErrorFlag:!1,popularProduct:[],popularFetchFlag:!1,productDetail:{},productDetailFetchFlag:!1}},getters:{getProductListFetchFlag:function(t){return t.productListFetchFlag},getProductListErrorFlag:function(t){return t.productListErrorFlag},getProductList:function(t){if(t.productListFetchFlag)return t.productListData},getPopularProductFetchFlag:function(t){return t.popularFetchFlag},getPopularProduct:function(t){if(t.popularFetchFlag)return t.popularProduct},getProductData:function(t){if(t.productDetailFetchFlag)return t.productDetail},getProductDetailDataFlag:function(t){return t.productDetailFetchFlag}},actions:{fetchProductList:function(t){var e=this;this.productListData=[],this.productListFetchFlag=!1,this.productListErrorFlag=!1,i.Z.get("https://ecommerce-199b2-default-rtdb.firebaseio.com/product/productListData/".concat(t,".json")).then((function(t){t.data?(e.productListData=t.data,e.productListFetchFlag=!0):e.productListErrorFlag=!0})).catch((function(t){e.productListErrorFlag=!0}))},fetchPopularProduct:function(){var t=this;this.popularFetchFlag=!1,i.Z.get("https://ecommerce-199b2-default-rtdb.firebaseio.com/product/popularProducts.json").then((function(e){t.popularProduct=e.data,t.popularFetchFlag=!0}))},fetchProductDetail:function(t){var e=this;this.productDetailFetchFlag=!1,i.Z.get("https://ecommerce-199b2-default-rtdb.firebaseio.com/product/productDetailData/".concat(t,".json")).then((function(t){e.productDetail=t.data,e.productDetailFetchFlag=!0})).catch((function(t){e.productDetailFetchFlag=!0}))}}})},9740:(t,e,r)=>{r.d(e,{Z:()=>o});var n=r(6252);const i={name:"DarkOverlay",props:["isFire","zIndex"],data:function(){return{isOn:!0}},methods:{clickOutside:function(){this.isOn=!1,this.$emit("outside",this.isOn)}}};const o=(0,r(3744).Z)(i,[["render",function(t,e,r,i,o,a){var c=(0,n.Q2)("fade");return(0,n.wg)(),(0,n.j4)(n.lR,{to:"body"},[(0,n.wy)((0,n._)("div",{onClick:e[0]||(e[0]=function(){return a.clickOutside&&a.clickOutside.apply(a,arguments)}),class:"fixed top-0 left-0 w-[100vw] h-[100vh] bg-dark/50"},null,512),[[c,r.isFire,r.zIndex]])])}]])},2698:(t,e,r)=>{r.d(e,{Z:()=>u});var n=r(6252),i=r(3577),o={class:"my-1"},a={class:"flex gap-1 flex-wrap items-center"},c={key:1,class:"font-600 text-[0.85rem] capitalize"},l={key:0,class:"text-[0.85rem] font-600"};const s={name:"BreadCrumb",props:["pages"]};const u=(0,r(3744).Z)(s,[["render",function(t,e,r,s,u,d){var p=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("ul",a,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.pages,(function(t,e){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("li",null,[t.link?((0,n.wg)(),(0,n.j4)(p,{key:0,class:"font-600 text-[0.85rem] capitalize",to:t.link},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,i.zw)(t.name),1)]})),_:2},1032,["to"])):((0,n.wg)(),(0,n.iD)("span",c,(0,i.zw)(t.name),1))]),(0,n._)("li",null,[e!==r.pages.length-1?((0,n.wg)(),(0,n.iD)("span",l,"/")):(0,n.kq)("v-if",!0)])],64)})),256))])])}]])},1663:(t,e,r)=>{r.d(e,{Z:()=>c});var n=r(6252),i=r(2262),o=r(4071),a={key:0,class:"w-full h-[250px] bg-light/20 absolute top-0 left-0 flex justify-center items-end"};const c={__name:"preLoader",props:["show"],setup:function(t){return function(e,r){return t.show?((0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)((0,i.SU)(o.t),{class:"z-50 relative","animation-duration":1e3,"dot-size":50,"dots-num":3,color:"#333"})])):(0,n.kq)("v-if",!0)}}}},1047:(t,e,r)=>{r.d(e,{Z:()=>L});var n=r(6252),i=r(3577),o=r(2262);var a=r(9963),c=r(9740),l=["onClick"],s={class:"v-modal-container"},u={class:"flex w-full justify-between items-center"},d=(0,n._)("span",{class:"text-gray-600 font-600 !text-1"},"Brentos",-1);const p={__name:"Modal",props:["isActive"],emits:["closeModal"],setup:function(t,e){var r=e.emit,i=function(){r("closeModal",!1)};return function(e,r){var o=(0,n.up)("column"),p=(0,n.up)("font-awesome-icon"),f=(0,n.up)("row"),g=(0,n.Q2)("fade");return(0,n.wg)(),(0,n.iD)(n.HY,null,[((0,n.wg)(),(0,n.j4)(n.lR,{to:"body"},[(0,n.wy)(((0,n.wg)(),(0,n.iD)("div",{onClick:(0,a.iM)(i,["self"]),class:"modal"},[(0,n._)("div",s,[(0,n._)("div",(0,n.dG)(e.$attrs,{class:"modal-content"}),[(0,n.Wm)(f,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(o,{class:"order-3 md:order-2",md:"6",col:"12"},{default:(0,n.w5)((function(){return[(0,n.WI)(e.$slots,"left")]})),_:3}),(0,n.Wm)(o,{class:"order-2 md:order-3",md:"6",col:"12"},{default:(0,n.w5)((function(){return[(0,n._)("div",u,[d,(0,n.Wm)(p,{size:"lg",class:"cursor-pointer text-gray-700",onClick:i,icon:"fa-solid fa-x"})]),(0,n.WI)(e.$slots,"right")]})),_:3})]})),_:3})],16)])],8,l)),[[g,t.isActive,"9999"]])])),(0,n.Wm)(c.Z,{"is-fire":t.isActive,"z-index":"999"},null,8,["is-fire"])],64)}}};var f=["id"],g={class:"product-card-image-cover"},m=["srcset","alt"],v={key:1,class:"product-card-image-overlay peer-hover:opacity-100 peer-hover:visible"},h=["srcset","alt"],w={key:2,class:"product-card-badge"},y=function(t){return(0,n.dD)("data-v-50355cd7"),t=t(),(0,n.Cn)(),t}((function(){return(0,n._)("span",{class:"product-card-badge"}," Sold out ",-1)})),k={class:"product-card-badge !text-0.8 !bg-red-500 !mt-3.5"},S={key:4,class:"product-card-badge !text-0.8 !bg-red-500"},b={class:"product-card-text"},F={key:0,class:"[&_*]:capitalize [&_*]:!text-1.2 block leading-2"},x={class:"mx-0.5"},_={class:"line-through !text-gray-400"},D={key:1,class:"capitalize !text-1.2 block leading-2"};const U={__name:"ProductCard",props:["link","coverSrc","overlaySrc","coverSrcset","overlaySrcset","isSoldOut","isPeriod","price","title","discount","id","category"],setup:function(t){var e=function(t){var e=(0,o.iH)(!0),r=(0,n.Fl)((function(){return Math.ceil(100*(1-t.discount/t.price))})),i=(0,o.iH)(!1);return{discountPercent:r,toggleModal:function(){i.value=!i.value,document.body.style.overflow=i.value?"hidden":"auto"},closeModal:function(t){i.value=t,document.body.style.overflow=i.value?"hidden":"auto"},isActive:i,isLoading:e,imageLoad:function(){e.value=!1}}}(t),r=e.isActive,a=e.closeModal,c=e.toggleModal,l=e.discountPercent,s=e.isLoading,u=e.imageLoad;return function(e,d){var U,L,P=(0,n.up)("Skeletor"),z=(0,n.up)("router-link"),W=(0,n.Q2)("lazy");return(0,n.wg)(),(0,n.iD)("div",{id:"product-".concat(t.id),class:"product-card"},[(0,n._)("div",{class:(0,i.C_)(["product-card-image",{"h-[400px]":(0,o.SU)(s)}])},[(0,n.kq)("      <<<<<<<<<<<<< skeleton loader  start>>>>>>>>>>>>>>"),(0,o.SU)(s)?((0,n.wg)(),(0,n.j4)(P,{key:0,class:"!absolute top-0 left-0",width:"100%",shimmer:!0,height:"400"})):(0,n.kq)("v-if",!0),(0,n.kq)("      <<<<<<<<<<<<< skeleton loader end>>>>>>>>>>>>>>"),(0,n._)("div",g,[(0,n.wy)((0,n._)("img",{onLoad:d[0]||(d[0]=function(){return(0,o.SU)(u)&&(0,o.SU)(u).apply(void 0,arguments)}),sizes:"(max-width: 359px) calc(100vw - 30px), (max-width: 767px) calc((100vw - 50px) / 2),(max-width: 1023px) calc((100vw - 100px) / 3), (max-width: 1280px) calc((100vw - 120px) / 4), 300px",srcset:t.coverSrcset,src:"",alt:t.title},null,40,m),[[W,t.coverSrc]])]),(0,n.Wm)(z,{class:(0,i.C_)([{peer:!(0,o.SU)(s)},"stretch-link"]),to:{name:t.link.name,params:{name:t.link.params.name},query:{id:t.id},hash:"#".concat(null!==(U=e.$route.params.name)&&void 0!==U?U:t.category)}},null,8,["class","to"]),t.overlaySrc?((0,n.wg)(),(0,n.iD)("div",v,[(0,n.wy)((0,n._)("img",{sizes:"(max-width: 359px) calc(100vw - 30px), (max-width: 767px) calc((100vw - 50px) / 2),(max-width: 1023px) calc((100vw - 100px) / 3), (max-width: 1280px) calc((100vw - 120px) / 4), 300px",srcset:t.overlaySrcset,src:"",alt:t.title},null,8,h),[[W,t.overlaySrc]])])):(0,n.kq)("v-if",!0),(0,n.kq)("      <<<<<<<<<<<< sold out and discount badge start>>>>>>>>>>>>>"),t.isSoldOut&&!t.discount?((0,n.wg)(),(0,n.iD)("span",w," Sold out ")):(0,n.kq)("v-if",!0),t.isSoldOut&&t.discount?((0,n.wg)(),(0,n.iD)(n.HY,{key:3},[y,(0,n._)("span",k," -"+(0,i.zw)((0,o.SU)(l))+"% ",1)],64)):(0,n.kq)("v-if",!0),!t.isSoldOut&&t.discount?((0,n.wg)(),(0,n.iD)("span",S," -"+(0,i.zw)((0,o.SU)(l))+"% ",1)):(0,n.kq)("v-if",!0),(0,n.kq)("      <<<<<<<<<<<< sold out and discount badge start>>>>>>>>>>>>>")],2),(0,n._)("div",b,[(0,n.kq)("      <<<<<<<<<<<< price start >>>>>>>>>>>>>>>>"),t.discount?((0,n.wg)(),(0,n.iD)("span",F,[t.isPeriod?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n.Uk)("from")],64)):(0,n.kq)("v-if",!0),(0,n._)("span",x,"$"+(0,i.zw)(t.price.toFixed(2)),1),(0,n._)("span",_,"$"+(0,i.zw)(t.discount.toFixed(2)),1)])):((0,n.wg)(),(0,n.iD)("span",D,[t.isPeriod?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n.Uk)("from")],64)):(0,n.kq)("v-if",!0),(0,n.Uk)(" $"+(0,i.zw)(t.price.toFixed(2)),1)])),(0,n.kq)("      <<<<<<<<<<<< price end >>>>>>>>>>>>>>>>"),(0,n.kq)("      <<<<<<<<<<< title start >>>>>>>>>>>>>"),(0,n.Wm)(z,{class:"btn-link !text-1.4 !font-700",to:{name:t.link.name,params:{name:t.link.params.name},query:{id:t.id},hash:"#".concat(null!==(L=e.$route.params.name)&&void 0!==L?L:t.category)}},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,i.zw)(t.title),1)]})),_:1},8,["to"]),(0,n.kq)("      <<<<<<<<<<< title end >>>>>>>>>>>>>"),(0,n.kq)("        <<<<<<<<<<<< buy now button start >>>>>>>>>>>>>"),t.isSoldOut?(0,n.kq)("v-if",!0):((0,n.wg)(),(0,n.iD)(n.HY,{key:2},[t.isPeriod?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n._)("button",{onClick:d[1]||(d[1]=function(){return(0,o.SU)(c)&&(0,o.SU)(c).apply(void 0,arguments)}),class:"btn w-full mt-1 btn-dark-outline"},"Buy now"),(0,n.Wm)(p,{class:"w-full sm:h-[calc(100vh-7rem)] h-[100vh]",onCloseModal:d[2]||(d[2]=function(t){return(0,o.SU)(a)(t)}),"is-active":(0,o.SU)(r)},{left:(0,n.w5)((function(){return[(0,n.Uk)(" left content here ")]})),right:(0,n.w5)((function(){return[(0,n.Uk)(" right content here ")]})),_:1},8,["is-active"])],64)):((0,n.wg)(),(0,n.j4)(z,{key:1,class:"btn w-full mt-1 btn-dark-outline block",to:{name:"CART"}},{default:(0,n.w5)((function(){return[(0,n.Uk)(" Buy now ")]})),_:1}))],64)),(0,n.kq)("        <<<<<<<<<<<< buy now button end >>>>>>>>>>>>>")])],8,f)}}};const L=(0,r(3744).Z)(U,[["__scopeId","data-v-50355cd7"]])},8983:(t,e,r)=>{r.r(e),r.d(e,{default:()=>S});var n=r(6252),i=r(2262),o=r(3577),a=r(1047),c=r(2698);function l(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var u={class:"pagination"},d=["disabled"],p=["onClick"],f=["disabled"];const g={__name:"Pagination",props:["itemInWarp","source"],emits:["update"],setup:function(t,e){var r=function(t,e){var r=(0,i.iH)(Math.ceil(t.source.length/t.itemInWarp)),o=(0,i.iH)(t.source),a=(0,i.iH)(1),c=function(r){var n=r*t.itemInWarp-t.itemInWarp,i=r*t.itemInWarp>t.source.length?t.source.length:r*t.itemInWarp,a=l(o.value).slice(n,i);e("update",a)};return(0,n.bv)((function(){c(a.value)})),{pages:r,paginating:function(t){a.value=t,c(a.value)},currentPage:a,next:function(){a.value++,a.value>r.value&&(a.value=1),c(a.value)},prev:function(){a.value--,a.value<1&&(a.value=r.value),c(a.value)}}}(t,e.emit),a=r.pages,c=r.paginating,s=r.currentPage,g=r.prev,m=r.next;return function(t,e){var r=(0,n.up)("font-awesome-icon");return(0,n.wg)(),(0,n.iD)("div",u,[(0,n._)("button",{disabled:1===(0,i.SU)(s),class:(0,o.C_)([{disabled:1===(0,i.SU)(s)},"pagination-btn mr-1"]),onClick:e[0]||(e[0]=function(){return(0,i.SU)(g)&&(0,i.SU)(g).apply(void 0,arguments)})},[(0,n.Wm)(r,{icon:"fa-solid fa-chevron-left"})],10,d),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,i.SU)(a),(function(t){return(0,n.wg)(),(0,n.iD)("button",{class:(0,o.C_)([{selected:(0,i.SU)(s)===t},"pagination-counter mr-1"]),onClick:function(e){return(0,i.SU)(c)(t)},key:t},(0,o.zw)(t),11,p)})),128)),(0,n._)("button",{disabled:(0,i.SU)(s)===(0,i.SU)(a),class:(0,o.C_)([{disabled:(0,i.SU)(s)===(0,i.SU)(a)},"pagination-btn"]),onClick:e[1]||(e[1]=function(){return(0,i.SU)(m)&&(0,i.SU)(m).apply(void 0,arguments)})},[(0,n.Wm)(r,{icon:"fa-solid fa-chevron-right"})],10,f)])}}};var m=r(5224),v=r(1663),h={class:"font-600 text-left mb-1"},w={class:"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1.5"},y={class:"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1.5"},k={key:1,class:"font-500 my-1"};const S={__name:"CollectionList",props:["name"],setup:function(t){var e=function(){var t=(0,i.iH)([]);return{updatePage:function(e){t.value=e},list:t}}(),r=e.updatePage,l=e.list,s=(0,m.E)(),u=s.errorFlag,d=s.fetchFlag,p=s.productListData;return function(e,s){var f=(0,n.up)("column"),m=(0,n.up)("row"),S=(0,n.up)("container");return(0,n.wg)(),(0,n.j4)(S,{class:"relative"},{default:(0,n.w5)((function(){return[(0,n.Wm)(v.Z,{show:!(0,i.SU)(d)&&!(0,i.SU)(u)},null,8,["show"]),(0,n.Wm)(m,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(f,{col:"12"},{default:(0,n.w5)((function(){return[(0,n.Wm)(c.Z,{pages:[{name:"Home",link:{name:"HOME"}},{name:"Collections",link:{name:"ALL_COLLECTION"}},{name:t.name.split("-").join(" ")}]},null,8,["pages"]),(0,n._)("h1",h,(0,o.zw)(t.name.split("-").join(" ")),1)]})),_:1})]})),_:1}),(0,i.SU)(d)&&(0,i.SU)(p)?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[24<(0,i.SU)(p).length?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n.Wm)(m,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(f,{col:"12"},{default:(0,n.w5)((function(){return[(0,n._)("div",w,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,i.SU)(l),(function(t){return(0,n.wg)(),(0,n.j4)(a.Z,{class:"mb-1",price:t.price,title:t.title,link:t.link,discount:t.discount,"cover-src":t.coverSrc,"cover-srcset":t.coverSrcset,"overlay-src":t.overlaySrc,"overlay-srcset":t.overlaySrcset,"is-period":t.isPeriod,id:t.id,"is-sold-out":t.isSoldOut},null,8,["price","title","link","discount","cover-src","cover-srcset","overlay-src","overlay-srcset","is-period","id","is-sold-out"])})),256))])]})),_:1})]})),_:1}),(0,n.Wm)(m,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(f,{col:"12"},{default:(0,n.w5)((function(){return[(0,n.Wm)(g,{onUpdate:s[0]||(s[0]=function(t){return(0,i.SU)(r)(t)}),source:(0,i.SU)(p),"item-in-warp":24},null,8,["source"])]})),_:1})]})),_:1})],64)):((0,n.wg)(),(0,n.j4)(m,{key:1},{default:(0,n.w5)((function(){return[(0,n.Wm)(f,{col:"12"},{default:(0,n.w5)((function(){return[(0,n._)("div",y,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,i.SU)(p),(function(t){return(0,n.wg)(),(0,n.j4)(a.Z,{class:"mb-1",price:t.price,title:t.title,link:t.link,discount:t.discount,"cover-src":t.coverSrc,"cover-srcset":t.coverSrcset,"overlay-src":t.overlaySrc,"overlay-srcset":t.overlaySrcset,"is-period":t.isPeriod,id:t.id,"is-sold-out":t.isSoldOut},null,8,["price","title","link","discount","cover-src","cover-srcset","overlay-src","overlay-srcset","is-period","id","is-sold-out"])})),256))])]})),_:1})]})),_:1}))],64)):(0,n.kq)("v-if",!0),(0,i.SU)(u)?((0,n.wg)(),(0,n.iD)("span",k,"There are currently no products in this collection. ")):(0,n.kq)("v-if",!0)]})),_:1})}}}},4071:(t,e,r)=>{r.d(e,{t:()=>o});var n=r(6252),i=r(3577);var o=((t,e)=>{const r=t.__vccOpts||t;for(const[t,n]of e)r[t]=n;return r})({name:"HollowDotsSpinner",props:{animationDuration:{type:Number,default:1e3},dotSize:{type:Number,default:15},dotsNum:{type:Number,default:3},color:{type:String,default:"#fff"}},computed:{horizontalMargin(){return this.dotSize/2},spinnerStyle(){return{height:`${this.dotSize}px`,width:(this.dotSize+2*this.horizontalMargin)*this.dotsNum+"px"}},dotStyle(){return{animationDuration:`${this.animationDuration}ms`,width:`${this.dotSize}px`,height:`${this.dotSize}px`,margin:`0 ${this.horizontalMargin}px`,borderWidth:this.dotSize/5+"px",borderColor:this.color}},dotsStyles(){const t=[],e=this.animationDuration;for(let r=1;r<=this.dotsNum;r++)t.push({animationDelay:e*r*.3+"ms",...this.dotStyle});return t}}},[["render",function(t,e,r,o,a,c){return(0,n.wg)(),(0,n.iD)("div",{class:"hollow-dots-spinner",style:(0,i.j5)(c.spinnerStyle)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(c.dotsStyles,((t,e)=>((0,n.wg)(),(0,n.iD)("div",{key:e,class:"dot",style:(0,i.j5)(t)},null,4)))),128))],4)}]])}}]);