"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[187],{6778:(t,e,a)=>{a.d(e,{Z:()=>n});var i=a(1761),o=a(6252),l=a(2262);const n=function(){var t=(0,i.y)(),e=(0,o.Fl)((function(){return t.getRandomCollection(8)})),a=(0,o.Fl)((function(){return t.getFetchFlag})),n=(0,l.iH)({itemsToShow:1,snapAlign:"center"}),r=(0,l.iH)(null);return{randomCollection:e,settings:n,carousel:r,next:function(){r.value.next(),r.value.updateSlideWidth()},prev:function(){r.value.prev(),r.value.updateSlideWidth()},breakpoints:{768:{itemsToShow:3,snapAlign:"center"},500:{itemsToShow:2,snapAlign:"center"}},fetchFlag:a}}},3526:(t,e,a)=>{a.d(e,{a:()=>l});var i=a(9305),o=a(1817),l=(0,i.Q_)("products",{state:function(){return{productListData:[],productListFetchFlag:!1,productListErrorFlag:!1,popularProduct:[],popularFetchFlag:!1,productDetail:{},productDetailFetchFlag:!1}},getters:{getProductListFetchFlag:function(t){return t.productListFetchFlag},getProductListErrorFlag:function(t){return t.productListErrorFlag},getProductList:function(t){if(t.productListFetchFlag)return t.productListData},getPopularProductFetchFlag:function(t){return t.popularFetchFlag},getPopularProduct:function(t){if(t.popularFetchFlag)return t.popularProduct},getProductData:function(t){if(t.productDetailFetchFlag)return t.productDetail},getProductDetailDataFlag:function(t){return t.productDetailFetchFlag}},actions:{fetchProductList:function(t){var e=this;this.productListData=[],this.productListFetchFlag=!1,this.productListErrorFlag=!1,o.Z.get("https://ecommerce-199b2-default-rtdb.firebaseio.com/product/productListData/".concat(t,".json")).then((function(t){t.data?(e.productListData=t.data,e.productListFetchFlag=!0):e.productListErrorFlag=!0})).catch((function(t){e.productListErrorFlag=!0}))},fetchPopularProduct:function(){var t=this;this.popularFetchFlag=!1,o.Z.get("https://ecommerce-199b2-default-rtdb.firebaseio.com/product/popularProducts.json").then((function(e){t.popularProduct=e.data,t.popularFetchFlag=!0}))},fetchProductDetail:function(t){var e=this;this.productDetailFetchFlag=!1,this.productDetail={},o.Z.get("https://ecommerce-199b2-default-rtdb.firebaseio.com/product/productDetailData/".concat(t,".json")).then((function(t){e.productDetail=t.data,e.productDetailFetchFlag=!0})).catch((function(t){e.productDetailFetchFlag=!0}))}}})},9740:(t,e,a)=>{a.d(e,{Z:()=>l});var i=a(6252);const o={name:"DarkOverlay",props:["isFire","zIndex"],data:function(){return{isOn:!0}},methods:{clickOutside:function(){this.isOn=!1,this.$emit("outside",this.isOn)}}};const l=(0,a(3744).Z)(o,[["render",function(t,e,a,o,l,n){var r=(0,i.Q2)("fade");return(0,i.wg)(),(0,i.j4)(i.lR,{to:"body"},[(0,i.wy)((0,i._)("div",{onClick:e[0]||(e[0]=function(){return n.clickOutside&&n.clickOutside.apply(n,arguments)}),class:"fixed top-0 left-0 w-[100vw] h-[100vh] bg-dark/50"},null,512),[[r,a.isFire,a.zIndex]])])}]])},9860:(t,e,a)=>{a.d(e,{Z:()=>u});var i=a(6252),o=a(9963),l=a(3577),n=a(9740),r=a(1663),s=["onClick"],c={class:"v-modal-container"};const u={__name:"Modal",props:["isActive","preloader","rowClass"],emits:["closeModal"],setup:function(t,e){var a=e.emit,u=function(){a("closeModal",!1)};return function(e,a){var d=(0,i.up)("row"),p=(0,i.Q2)("fade");return(0,i.wg)(),(0,i.iD)(i.HY,null,[((0,i.wg)(),(0,i.j4)(i.lR,{to:"body"},[(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",{onClick:(0,o.iM)(u,["self"]),class:"modal"},[(0,i.Wm)(r.Z,{class:"!items-center !h-[100%] z-[999999]",show:!t.preloader},null,8,["show"]),(0,i._)("div",c,[(0,i._)("div",(0,i.dG)(e.$attrs,{class:"modal-content"}),[(0,i.Wm)(d,{class:(0,l.C_)(t.rowClass)},{default:(0,i.w5)((function(){return[(0,i.WI)(e.$slots,"default")]})),_:3},8,["class"])],16)])],8,s)),[[p,t.isActive,"9999"]])])),(0,i.Wm)(n.Z,{"is-fire":t.isActive,"z-index":"999"},null,8,["is-fire"])],64)}}}},1663:(t,e,a)=>{a.d(e,{Z:()=>n});var i=a(6252),o=a(2262),l=a(4071);const n={__name:"preLoader",props:["show"],setup:function(t){return function(e,a){return t.show?((0,i.wg)(),(0,i.iD)("div",(0,i.dG)({key:0},e.$attrs,{class:"w-full h-[250px] bg-light/20 absolute top-0 left-0 flex justify-center items-end"}),[(0,i.Wm)((0,o.SU)(l.t),{class:"z-50 relative","animation-duration":1e3,"dot-size":50,"dots-num":3,color:"#333"})],16)):(0,i.kq)("v-if",!0)}}}},1504:(t,e,a)=>{a.d(e,{Z:()=>f});var i=a(6252),o=a(2262),l=a(9963),n={key:0,id:"zoom-area",class:"fixed overflow-scroll z-[9999] top-0 left-0 w-[100vw] bg-light h-[100vh]"},r=["src"],s={class:"w-3 h-3 flex justify-center items-center bg-light rounded-full fixed right-0 top-0 m-2"};const c={__name:"ImageZoomer",props:["src","isActive"],emits:["close"],setup:function(t,e){var a=e.emit,o=function(){a("close",!1),document.body.style.overflowY="scroll"};return function(e,a){var c=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.j4)(i.lR,{to:"body"},[(0,i.Wm)(l.uT,{name:"fade"},{default:(0,i.w5)((function(){return[t.isActive?((0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("img",{onLoad:a[0]||(a[0]=function(t){return e=t,a=getComputedStyle(e.target),e.target.style.width=a.width,e.target.style.height=a.height,void(document.body.style.overflowY="hidden");var e,a}),src:t.src,class:"relative",alt:""},null,40,r),(0,i._)("div",s,[(0,i.Wm)(c,{onClick:o,class:"transition hover:!text-dark text-1.5 !text-dark/70 cursor-pointer",icon:"fa-solid fa-magnifying-glass-minus"})])])):(0,i.kq)("v-if",!0)]})),_:1})])}}};const u=(0,a(3744).Z)(c,[["__scopeId","data-v-682d0c65"]]);var d={class:"relative mr-1"},p=["srcset"];const f={__name:"GalleryItem",props:["src","srcset","zoom"],setup:function(t){var e=(0,o.iH)(!1),a=(0,o.iH)(!0),l=function(){e.value=!1},n=function(){a.value=!1};return function(o,r){var s=(0,i.up)("Skeletor"),c=(0,i.up)("font-awesome-icon"),f=(0,i.Q2)("lazy");return(0,i.wg)(),(0,i.iD)("div",d,[a.value?((0,i.wg)(),(0,i.j4)(s,{key:0,class:"rounded-8 !absolute z-[9999] top-0 left-0",width:"100%",shimmer:!0,height:"800"})):(0,i.kq)("v-if",!0),(0,i.Wm)(c,{onClick:r[0]||(r[0]=function(t){return e.value=!0}),class:"absolute top-0 transition hover:!text-dark right-0 m-1 text-1.5 !text-dark/70 cursor-pointer z-50",icon:"fa-solid fa-magnifying-glass-plus "}),(0,i.wy)((0,i._)("img",{onLoad:n,class:"cursor-grab rounded-8",srcset:t.srcset,src:"",alt:"",sizes:"(max-width: 767px) calc(100vw - 20px), (max-width: 1360px) 50vw, 620px"},null,40,p),[[f,t.src]]),(0,i.Wm)(u,{onClose:l,"is-active":e.value,src:t.zoom},null,8,["is-active","src"])])}}}},3187:(t,e,a)=>{a.d(e,{Z:()=>ft});var i=a(6252),o=a(3577),l=a(2262),n=a(3526);var r=a(9860),s=a(6778),c=a(2201);var u=a(7410),d=a(1504),p={key:0},f={class:"flex gap-1 justify-center items-center my-1"},v={class:"flex w-full justify-between items-center"},m=(0,i._)("span",{class:"text-gray-600 font-600 !text-1"},"Brentos",-1),g={key:0,class:"sm:pl-1"},h={class:"font-600"},w={key:0,class:"flex gap-2"},k={class:"font-600 my-1"},y={class:"font-600 my-1 line-through text-gray-500"},b={key:1,class:"font-600 my-1"},S=["innerHTML"],x={key:0,class:"mt-4"},F=(0,i._)("h5",{class:"font-600 mb-1"},"Choose Your Family Members",-1),U=["disabled","onClick"],_={key:1,class:"mt-4"},z=(0,i._)("h5",{class:"font-600 mb-1"},"Size",-1),D=["onClick"],C={key:2,class:"my-2"},q=(0,i._)("h5",{class:"font-600 mb-1"},"Frame",-1),P=["disabled"],W=["disabled"],L={class:"mb-1"},H={key:0,class:"flex items-center gap-1"},O={class:"font-600 my-2"},M={class:"line-through"},Z=(0,i._)("br",null,null,-1),j={class:"text-gray-500"},$={key:1,class:"font-600 my-2"},T=(0,i._)("div",{class:"divider"},null,-1),Y={class:"flex gap-1 items-center"},A={key:0},I={class:"mx-1 px-0.5 text-1.5"},R=["disabled"],E={class:"mt-4"},Q=(0,i._)("h5",{class:"font-600 mb-1"},"Share",-1),K={class:"flex gap-2 item-center"},B=["href"],G=["href"],N=["href"];const J={__name:"ProductDetailModal",props:["id","category"],emits:["closeModal"],setup:function(t,e){var a=e.emit,r=t,J=function(){a("closeModal",!1)},V=(0,s.Z)(),X=V.next,tt=V.prev,et=V.settings,at=V.carousel,it=function(t,e){var a=(0,c.yj)(),o=(0,n.a)(),r=(0,i.Fl)((function(){return o.getProductData})),s=(0,i.Fl)((function(){return o.getProductDetailDataFlag})),u=(0,l.iH)(e.id),d=(0,l.iH)(1),p=(0,l.iH)(0),f=(0,l.iH)(0),v=(0,l.iH)(0),m=(0,i.Fl)((function(){var t;return r.value.option.sizes[p.value].frame?(r.value.option.sizes[p.value].price+r.value.option.sizes[p.value].frame.price).toFixed(2):null!==(t=r.value.option.sizes[p.value].price.toFixed(2))&&void 0!==t?t:r.value.price.toFixed(2)})),g=(0,i.Fl)((function(){var t,e;return null!==(t=r.value)&&void 0!==t&&null!==(e=t.option)&&void 0!==e&&e.sizes?r.value.option.sizes[p.value].price.toFixed(2):r.value.price.toFixed(2)})),h=(0,i.Fl)((function(){var t,i,o;return{productId:u.value,category:null!==(t=e.category)&&void 0!==t?t:a.params.name,quantity:d.value,priceDetail:{size:null!==(i=r.value)&&void 0!==i&&null!==(o=i.option)&&void 0!==o&&o.sizes?r.value.option.sizes[p.value].size:null,frame:r.value.hasFrame?0===v.value?"No frame":"Recycled Timber Frame":null,price:0===v.value?g.value:m.value,family:r.value.hasFamily?r.value.option.family[f.value].item:null},discount:r.value.discount||0}}));return{productData:r,productDetailFlag:s,quantity:d,sizeIndex:p,familyIndex:f,whichFrame:v,totalPriceWithOutFrame:g,totalPriceWithFrame:m,increment:function(){d.value++,d.value>r.value.available&&(d.value=r.value.available)},decrement:function(){d.value--,d.value<1&&(d.value=1)},addToCart:function(){console.log(h.value)},changeFrame:function(e){t.value.slideTo(e),v.value=e},changeFamily:function(e,a){t.value.slideTo(e),f.value=a},changeSize:function(t,e){t.available&&(h.value.priceDetail.size=t.size,p.value=e,v.value=0)}}}(at,r),ot=it.productDetailFlag,lt=it.productData,nt=it.totalPriceWithFrame,rt=it.totalPriceWithOutFrame,st=it.whichFrame,ct=it.familyIndex,ut=it.sizeIndex,dt=it.quantity,pt=it.decrement,ft=it.increment,vt=it.addToCart,mt=it.changeFamily,gt=it.changeFrame,ht=it.changeSize;return function(t,e){var a=(0,i.up)("font-awesome-icon"),n=(0,i.up)("column");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(n,{class:"order-3 md:order-2 md:pr-0.7",md:"6",col:"12"},{default:(0,i.w5)((function(){return[(0,l.SU)(ot)?((0,i.wg)(),(0,i.iD)("div",p,[(0,i.Wm)((0,l.SU)(u.lr),{ref_key:"carousel",ref:at,settings:(0,l.SU)(et),"wrap-around":!0},{addons:(0,i.w5)((function(){return[(0,i._)("div",f,[(0,i.Wm)(a,{size:"lg",class:"cursor-pointer",icon:"fa-solid fa-angle-left",onClick:(0,l.SU)(tt)},null,8,["onClick"]),(0,i.Wm)((0,l.SU)(u.tl)),(0,i.Wm)(a,{size:"lg",class:"cursor-pointer",icon:"fa-solid fa-angle-right",onClick:(0,l.SU)(X)},null,8,["onClick"])])]})),default:(0,i.w5)((function(){return[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,l.SU)(lt).gallery,(function(t,e){return(0,i.wg)(),(0,i.j4)((0,l.SU)(u.Mi),{key:e},{default:(0,i.w5)((function(){return[(0,i.Wm)(d.Z,{zoom:t.zoom,src:t.src,srcset:t.srcset},null,8,["zoom","src","srcset"])]})),_:2},1024)})),128))]})),_:1},8,["settings"])])):(0,i.kq)("v-if",!0)]})),_:1}),(0,i.Wm)(n,{class:"order-2 md:order-3",md:"6",col:"12"},{default:(0,i.w5)((function(){var t,n;return[(0,i._)("div",v,[m,(0,i.Wm)(a,{size:"lg",class:"cursor-pointer text-gray-700",onClick:J,icon:"fa-solid fa-x"})]),(0,l.SU)(ot)?((0,i.wg)(),(0,i.iD)("div",g,[(0,i._)("div",null,[(0,i._)("h1",h,(0,o.zw)((0,l.SU)(lt).title),1),(0,l.SU)(lt).discount?((0,i.wg)(),(0,i.iD)("div",w,[(0,i._)("h3",k,"$"+(0,o.zw)((0,l.SU)(lt).discount.toFixed(2)),1),(0,i._)("h3",y,"$"+(0,o.zw)(0===(0,l.SU)(st)?(0,l.SU)(rt):(0,l.SU)(nt)),1)])):((0,i.wg)(),(0,i.iD)("h3",b,"$"+(0,o.zw)(0===(0,l.SU)(st)?(0,l.SU)(rt):(0,l.SU)(nt)),1)),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,l.SU)(lt).description,(function(t){return(0,i.wg)(),(0,i.iD)("p",{innerHTML:t.content,class:"mb-1 font-500 text-1"},null,8,S)})),256))]),(0,i.kq)("        <<<<<<<<<<<<<<<<<< family part start >>>>>>>>>>>>>>"),(0,l.SU)(lt).hasFamily?((0,i.wg)(),(0,i.iD)("div",x,[F,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,l.SU)(lt).option.family,(function(t,e){return(0,i.wg)(),(0,i.iD)("button",{disabled:!(0,l.SU)(lt).option.family[(0,l.SU)(ct)].available,class:(0,o.C_)([{disabled:!(0,l.SU)(lt).option.family[(0,l.SU)(ct)].available,selected:(0,l.SU)(ct)===e},"btn btn-dark-outline mr-1 mb-1"]),onClick:function(a){return(0,l.SU)(mt)(t.index,e)}},(0,o.zw)(t.item),11,U)})),256))])):(0,i.kq)("v-if",!0),(0,i.kq)("        <<<<<<<<<<<<<<<<<< family part start >>>>>>>>>>>>>>"),(0,i.kq)("            <<<<<<<<<<<<< size part start>>>>>>>>>>>>"),null!==(t=(0,l.SU)(lt))&&void 0!==t&&null!==(n=t.option)&&void 0!==n&&n.sizes?((0,i.wg)(),(0,i.iD)("div",_,[z,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,l.SU)(lt).option.sizes,(function(t,e){return(0,i.wg)(),(0,i.iD)("button",{class:(0,o.C_)([{disabled:!t.available,selected:(0,l.SU)(ut)===e},"btn btn-dark-outline mr-1 mb-1"]),onClick:function(a){return(0,l.SU)(ht)(t,e)}},(0,o.zw)(t.size),11,D)})),256))])):(0,i.kq)("v-if",!0),(0,i.kq)("            <<<<<<<<<<<<< size part end>>>>>>>>>>>>"),(0,i.kq)("            <<<<<<<<<<<<< frame part start>>>>>>>>>>>>"),(0,l.SU)(lt).hasFrame?((0,i.wg)(),(0,i.iD)("div",C,[q,(0,i._)("button",{disabled:!(0,l.SU)(lt).option.sizes[(0,l.SU)(ut)].available,class:(0,o.C_)([{disabled:!(0,l.SU)(lt).option.sizes[(0,l.SU)(ut)].available,selected:0===(0,l.SU)(st)},"btn btn-dark-outline mr-1 mb-1"]),onClick:e[0]||(e[0]=function(t){return(0,l.SU)(gt)(0)})}," No frame ",10,P),(0,i._)("button",{disabled:!(0,l.SU)(lt).option.sizes[(0,l.SU)(ut)].frame.available,class:(0,o.C_)([{disabled:!(0,l.SU)(lt).option.sizes[(0,l.SU)(ut)].frame.available,selected:1===(0,l.SU)(st)},"btn btn-dark-outline mr-1 mb-1"]),onClick:e[1]||(e[1]=function(t){return(0,l.SU)(gt)(1)})}," Recycled Timber Frame ",10,W)])):(0,i.kq)("v-if",!0),(0,i.kq)("            <<<<<<<<<<<<< frame part end>>>>>>>>>>>>"),(0,i._)("div",L,[(0,l.SU)(lt).discount?((0,i.wg)(),(0,i.iD)("div",H,[(0,i._)("h1",O,"$"+(0,o.zw)((0,l.SU)(lt).discount.toFixed(2)),1),(0,i._)("div",null,[(0,i._)("span",M,"$"+(0,o.zw)(0===(0,l.SU)(st)?(0,l.SU)(rt):(0,l.SU)(nt)),1),Z,(0,i._)("span",j,"you have saved $"+(0,o.zw)(((0,l.SU)(lt).price-(0,l.SU)(lt).discount).toFixed(2)),1)])])):((0,i.wg)(),(0,i.iD)("h1",$," $"+(0,o.zw)(0===(0,l.SU)(st)?(0,l.SU)(rt):(0,l.SU)(nt)),1))]),T,(0,i._)("div",Y,[(0,l.SU)(lt).isSoldOut?(0,i.kq)("v-if",!0):((0,i.wg)(),(0,i.iD)("div",A,[(0,i._)("button",{onClick:e[2]||(e[2]=function(){return(0,l.SU)(pt)&&(0,l.SU)(pt).apply(void 0,arguments)}),class:"btn btn-dark-outline !py-1"},[(0,i.Wm)(a,{size:"lg",icon:"fa-solid fa-minus"})]),(0,i._)("span",I,(0,o.zw)((0,l.SU)(dt)),1),(0,i._)("button",{onClick:e[3]||(e[3]=function(){return(0,l.SU)(ft)&&(0,l.SU)(ft).apply(void 0,arguments)}),class:"btn btn-dark-outline !py-1"},[(0,i.Wm)(a,{size:"lg",icon:"fa-solid fa-plus"})])])),(0,i._)("button",{disabled:(0,l.SU)(lt).isSoldOut,class:(0,o.C_)([{"w-[50%] !bg-gray-400":(0,l.SU)(lt).isSoldOut},"btn btn-dark-fill px-2 text-1.2 font-700"]),onClick:e[4]||(e[4]=function(){return(0,l.SU)(vt)&&(0,l.SU)(vt).apply(void 0,arguments)})},(0,o.zw)((0,l.SU)(lt).isSoldOut?"Sold Out":"Add to cart"),11,R)]),(0,i._)("div",E,[Q,(0,i._)("ul",K,[(0,i._)("li",null,[(0,i.Wm)(a,{size:"md",icon:"fa-brands fa-facebook-f"}),(0,i._)("a",{class:"btn-link ml-0.5",href:(0,l.SU)(lt).link.facebook}," Facebook ",8,B)]),(0,i._)("li",null,[(0,i.Wm)(a,{size:"md",icon:"fa-brands fa-twitter"}),(0,i._)("a",{class:"btn-link ml-0.5",href:(0,l.SU)(lt).link.twitter}," Twitter ",8,G)]),(0,i._)("li",null,[(0,i.Wm)(a,{size:"md",icon:"fa-brands fa-pinterest"}),(0,i._)("a",{class:"btn-link ml-0.5",href:(0,l.SU)(lt).link.pinterest}," Pinterest ",8,N)])])])])):(0,i.kq)("v-if",!0)]})),_:1})],64)}}};var V=["id"],X={class:"product-card-image-cover"},tt=["srcset","alt"],et={key:1,class:"product-card-image-overlay peer-hover:opacity-100 peer-hover:visible"},at=["srcset","alt"],it={key:2,class:"product-card-badge"},ot=function(t){return(0,i.dD)("data-v-3a0749bd"),t=t(),(0,i.Cn)(),t}((function(){return(0,i._)("span",{class:"product-card-badge"}," Sold out ",-1)})),lt={class:"product-card-badge !text-0.8 !bg-red-500 !mt-3.5"},nt={key:4,class:"product-card-badge !text-0.8 !bg-red-500"},rt={class:"product-card-text"},st={key:0,class:"[&_*]:capitalize [&_*]:!text-1.2 block leading-2"},ct={class:"mx-0.5"},ut={class:"line-through !text-gray-400"},dt={key:1,class:"capitalize !text-1.2 block leading-2"};const pt={__name:"ProductCard",props:["link","coverSrc","overlaySrc","coverSrcset","overlaySrcset","isSoldOut","isPeriod","price","title","discount","id","category"],setup:function(t){var e=function(t){var e=(0,n.a)(),a=(0,i.Fl)((function(){return e.getProductDetailDataFlag})),o=(0,l.iH)(!0),r=(0,i.Fl)((function(){return Math.ceil(100*(1-t.discount/t.price))})),s=(0,l.iH)(!1);return{discountPercent:r,toggleModal:function(){s.value=!s.value,document.body.style.overflow=s.value?"hidden":"auto",s.value&&e.fetchProductDetail(t.id)},closeModal:function(t){s.value=t,document.body.style.overflow=s.value?"hidden":"auto"},isActive:s,isLoading:o,imageLoad:function(){o.value=!1},fetchFlag:a}}(t),a=e.isActive,s=e.closeModal,c=e.toggleModal,u=e.discountPercent,d=e.isLoading,p=e.imageLoad,f=e.fetchFlag;return function(e,n){var v,m,g=(0,i.up)("Skeletor"),h=(0,i.up)("router-link"),w=(0,i.Q2)("lazy");return(0,i.wg)(),(0,i.iD)("div",{id:"product-".concat(t.id),class:"product-card"},[(0,i._)("div",{class:(0,o.C_)(["product-card-image",{"h-[400px]":(0,l.SU)(d)}])},[(0,i.kq)("      <<<<<<<<<<<<< skeleton loader  start>>>>>>>>>>>>>>"),(0,l.SU)(d)?((0,i.wg)(),(0,i.j4)(g,{key:0,class:"!absolute top-0 left-0",width:"100%",shimmer:!0,height:"400"})):(0,i.kq)("v-if",!0),(0,i.kq)("      <<<<<<<<<<<<< skeleton loader end>>>>>>>>>>>>>>"),(0,i._)("div",X,[(0,i.wy)((0,i._)("img",{onLoad:n[0]||(n[0]=function(){return(0,l.SU)(p)&&(0,l.SU)(p).apply(void 0,arguments)}),sizes:"(max-width: 359px) calc(100vw - 30px), (max-width: 767px) calc((100vw - 50px) / 2),(max-width: 1023px) calc((100vw - 100px) / 3), (max-width: 1280px) calc((100vw - 120px) / 4), 300px",srcset:t.coverSrcset,src:"",alt:t.title},null,40,tt),[[w,t.coverSrc]])]),(0,i.Wm)(h,{class:(0,o.C_)([{peer:!(0,l.SU)(d)},"stretch-link"]),to:{name:t.link.name,params:{name:t.link.params.name},query:{id:t.id},hash:"#".concat(null!==(v=e.$route.params.name)&&void 0!==v?v:t.category)}},null,8,["class","to"]),t.overlaySrc?((0,i.wg)(),(0,i.iD)("div",et,[(0,i.wy)((0,i._)("img",{sizes:"(max-width: 359px) calc(100vw - 30px), (max-width: 767px) calc((100vw - 50px) / 2),(max-width: 1023px) calc((100vw - 100px) / 3), (max-width: 1280px) calc((100vw - 120px) / 4), 300px",srcset:t.overlaySrcset,src:"",alt:t.title},null,8,at),[[w,t.overlaySrc]])])):(0,i.kq)("v-if",!0),(0,i.kq)("      <<<<<<<<<<<< sold out and discount badge start>>>>>>>>>>>>>"),t.isSoldOut&&!t.discount?((0,i.wg)(),(0,i.iD)("span",it," Sold out ")):(0,i.kq)("v-if",!0),t.isSoldOut&&t.discount?((0,i.wg)(),(0,i.iD)(i.HY,{key:3},[ot,(0,i._)("span",lt," -"+(0,o.zw)((0,l.SU)(u))+"% ",1)],64)):(0,i.kq)("v-if",!0),!t.isSoldOut&&t.discount?((0,i.wg)(),(0,i.iD)("span",nt," -"+(0,o.zw)((0,l.SU)(u))+"% ",1)):(0,i.kq)("v-if",!0),(0,i.kq)("      <<<<<<<<<<<< sold out and discount badge start>>>>>>>>>>>>>")],2),(0,i._)("div",rt,[(0,i.kq)("      <<<<<<<<<<<< price start >>>>>>>>>>>>>>>>"),t.discount?((0,i.wg)(),(0,i.iD)("span",st,[t.isPeriod?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Uk)("from")],64)):(0,i.kq)("v-if",!0),(0,i._)("span",ct,"$"+(0,o.zw)(t.price.toFixed(2)),1),(0,i._)("span",ut,"$"+(0,o.zw)(t.discount.toFixed(2)),1)])):((0,i.wg)(),(0,i.iD)("span",dt,[t.isPeriod?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Uk)("from")],64)):(0,i.kq)("v-if",!0),(0,i.Uk)(" $"+(0,o.zw)(t.price.toFixed(2)),1)])),(0,i.kq)("      <<<<<<<<<<<< price end >>>>>>>>>>>>>>>>"),(0,i.kq)("      <<<<<<<<<<< title start >>>>>>>>>>>>>"),(0,i.Wm)(h,{class:"btn-link !text-1.4 !font-700",to:{name:t.link.name,params:{name:t.link.params.name},query:{id:t.id},hash:"#".concat(null!==(m=e.$route.params.name)&&void 0!==m?m:t.category)}},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,o.zw)(t.title),1)]})),_:1},8,["to"]),(0,i.kq)("      <<<<<<<<<<< title end >>>>>>>>>>>>>"),(0,i.kq)("        <<<<<<<<<<<< buy now button start >>>>>>>>>>>>>"),t.isSoldOut?(0,i.kq)("v-if",!0):((0,i.wg)(),(0,i.iD)(i.HY,{key:2},[t.isPeriod?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i._)("button",{onClick:n[1]||(n[1]=function(){return(0,l.SU)(c)&&(0,l.SU)(c).apply(void 0,arguments)}),class:"btn w-full mt-1 btn-dark-outline"},"Buy now"),(0,i.Wm)(r.Z,{class:"w-full sm:h-[calc(100vh-7rem)] h-[100vh]",onCloseModal:n[3]||(n[3]=function(t){return(0,l.SU)(s)(t)}),"is-active":(0,l.SU)(a),preloader:(0,l.SU)(f)},{default:(0,i.w5)((function(){return[(0,l.SU)(a)?((0,i.wg)(),(0,i.j4)(J,{key:0,category:t.category,id:t.id,onCloseModal:n[2]||(n[2]=function(t){return(0,l.SU)(s)(t)})},null,8,["category","id"])):(0,i.kq)("v-if",!0)]})),_:1},8,["is-active","preloader"])],64)):((0,i.wg)(),(0,i.j4)(h,{key:1,class:"btn w-full mt-1 btn-dark-outline block",to:{name:"CART"}},{default:(0,i.w5)((function(){return[(0,i.Uk)(" Buy now ")]})),_:1}))],64)),(0,i.kq)("        <<<<<<<<<<<< buy now button end >>>>>>>>>>>>>")])],8,V)}}};const ft=(0,a(3744).Z)(pt,[["__scopeId","data-v-3a0749bd"]])}}]);