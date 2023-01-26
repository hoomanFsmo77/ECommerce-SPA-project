"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[187],{6778:(t,e,a)=>{a.d(e,{Z:()=>o});var i=a(1761),n=a(6252),l=a(2262);const o=function(){var t=(0,i.y)(),e=(0,n.Fl)((function(){return t.getRandomCollection(8)})),a=(0,n.Fl)((function(){return t.getFetchFlag})),o=(0,l.iH)({itemsToShow:1,snapAlign:"center"}),r=(0,l.iH)(null);return{randomCollection:e,settings:o,carousel:r,next:function(){r.value.next(),r.value.updateSlideWidth()},prev:function(){r.value.prev(),r.value.updateSlideWidth()},breakpoints:{768:{itemsToShow:3,snapAlign:"center"},500:{itemsToShow:2,snapAlign:"center"}},fetchFlag:a}}},6544:(t,e,a)=>{a.d(e,{x:()=>r});var i=a(9305),n=(0,a(3002).pm)(),l=function(t){localStorage.setItem("_brentos_cart_",JSON.stringify(t))},o=function(){return JSON.parse(localStorage.getItem("_brentos_cart_"))},r=(0,i.Q_)("cart",{state:function(){var t,e,a,i;return{cart:null!==(t=null===(e=o())||void 0===e?void 0:e.cart)&&void 0!==t?t:[],totalPrice:null!==(a=null===(i=o())||void 0===i?void 0:i.totalPrice)&&void 0!==a?a:0}},getters:{cartLength:function(t){return t.cart.length},getTotalPrice:function(t){return t.totalPrice.toFixed(2)},getCart:function(t){return t.cart},getProductPrice:function(t){return function(e){var a=t.cart.filter((function(t){return t.productId===e}))[0];return(a.priceDetail.price*a.quantity).toFixed(2)}}},actions:{addToUserCart:function(t){var e=this.cart.some((function(e){return e.title===t.title})),a=this.cart[this.cart.findIndex((function(e){return e.title===t.title}))];e?a.available>a.quantity?(a.quantity++,n.success("Product added to your cart!")):n.error("Maximum available quantity is ".concat(a.quantity,"!")):(this.cart.push(t),n.success("Product added to your cart!")),this.calculateTotalPrice()},calculateTotalPrice:function(){var t=0;this.cart.forEach((function(e){t+=e.priceDetail.price*e.quantity})),this.totalPrice=t,l({cart:this.cart,totalPrice:this.totalPrice})},increaseProductQuantity:function(t,e){this.cart[this.cart.findIndex((function(e){return e.productId===t}))].quantity=e,this.calculateTotalPrice()},decreaseProductQuantity:function(t,e){this.cart[this.cart.findIndex((function(e){return e.productId===t}))].quantity=e,this.calculateTotalPrice()},removeProductCart:function(t){this.cart.splice(this.cart.findIndex((function(e){return e.productId===t})),1),this.calculateTotalPrice()},resetCart:function(){this.cart=[],this.totalPrice=0,l({cart:[],totalPrice:0})}}})},3526:(t,e,a)=>{a.d(e,{a:()=>l});var i=a(9305),n=a(1817),l=(0,i.Q_)("products",{state:function(){return{productListData:[],productListFetchFlag:!1,productListErrorFlag:!1,popularProduct:[],popularFetchFlag:!1,productDetail:{},productDetailFetchFlag:!1}},getters:{getProductListFetchFlag:function(t){return t.productListFetchFlag},getProductListErrorFlag:function(t){return t.productListErrorFlag},getProductList:function(t){if(t.productListFetchFlag)return t.productListData},getPopularProductFetchFlag:function(t){return t.popularFetchFlag},getPopularProduct:function(t){if(t.popularFetchFlag)return t.popularProduct},getProductData:function(t){if(t.productDetailFetchFlag)return t.productDetail},getProductDetailDataFlag:function(t){return t.productDetailFetchFlag}},actions:{fetchProductList:function(t){var e=this;this.productListData=[],this.productListFetchFlag=!1,this.productListErrorFlag=!1,n.Z.get("https://ecommerce-199b2-default-rtdb.firebaseio.com/product/productListData/".concat(t,".json")).then((function(t){t.data?(e.productListData=t.data,e.productListFetchFlag=!0):e.productListErrorFlag=!0})).catch((function(t){e.productListErrorFlag=!0}))},fetchPopularProduct:function(){var t=this;this.popularFetchFlag=!1,n.Z.get("https://ecommerce-199b2-default-rtdb.firebaseio.com/product/popularProducts.json").then((function(e){t.popularProduct=e.data,t.popularFetchFlag=!0}))},fetchProductDetail:function(t){var e=this;this.productDetailFetchFlag=!1,this.productDetail={},n.Z.get("https://ecommerce-199b2-default-rtdb.firebaseio.com/product/productDetailData/".concat(t,".json")).then((function(t){e.productDetail=t.data,e.productDetailFetchFlag=!0})).catch((function(t){e.productDetailFetchFlag=!0}))}}})},1761:(t,e,a)=>{a.d(e,{y:()=>l});var i=a(9305),n=a(1817),l=(0,i.Q_)("collection",{state:function(){return{collections:[],fetchFlag:!1}},getters:{getFetchFlag:function(t){return t.fetchFlag},getAllList:function(t){if(t.fetchFlag)return t.collections},getRandomCollection:function(t){return function(e){if(t.fetchFlag){for(var a=[0,1,2,3,4,5,6,7,8,9,10,11],i=[],n=0;n<e;n++){var l=Math.floor(Math.random()*a.length);i.push(t.collections[a[l]]),a.splice(l,1)}return i}}}},actions:{setCollectionData:function(){var t=this;this.fetchFlag=!1,n.Z.get("https://ecommerce-199b2-default-rtdb.firebaseio.com/collection/AllCollectionLists.json").then((function(e){t.collections=e.data,t.fetchFlag=!0}))}}})},9740:(t,e,a)=>{a.d(e,{Z:()=>l});var i=a(6252);const n={name:"DarkOverlay",props:["isFire","zIndex"],data:function(){return{isOn:!0}},methods:{clickOutside:function(){this.isOn=!1,this.$emit("outside",this.isOn)}}};const l=(0,a(3744).Z)(n,[["render",function(t,e,a,n,l,o){var r=(0,i.Q2)("fade");return(0,i.wg)(),(0,i.j4)(i.lR,{to:"body"},[(0,i.wy)((0,i._)("div",{onClick:e[0]||(e[0]=function(){return o.clickOutside&&o.clickOutside.apply(o,arguments)}),class:"fixed top-0 left-0 w-[100vw] h-[100vh] bg-dark/50"},null,512),[[r,a.isFire,a.zIndex]])])}]])},9860:(t,e,a)=>{a.d(e,{Z:()=>u});var i=a(6252),n=a(9963),l=a(3577),o=a(9740),r=a(1663),c=["onClick"],s=["onClick"];const u={__name:"Modal",props:["isActive","preloader","rowClass"],emits:["closeModal"],setup:function(t,e){var a=e.emit,u=function(){a("closeModal",!1)};return function(e,a){var d=(0,i.up)("row"),f=(0,i.Q2)("fade");return(0,i.wg)(),(0,i.iD)(i.HY,null,[((0,i.wg)(),(0,i.j4)(i.lR,{to:"body"},[(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",{onClick:(0,n.iM)(u,["self"]),class:"modal"},[(0,i.Wm)(r.Z,{class:"!items-center !h-[100%] z-[999999]",show:!t.preloader},null,8,["show"]),(0,i._)("div",{onClick:(0,n.iM)(u,["self"]),class:"v-modal-container"},[(0,i._)("div",(0,i.dG)(e.$attrs,{class:"modal-content"}),[(0,i.Wm)(d,{class:(0,l.C_)(t.rowClass)},{default:(0,i.w5)((function(){return[(0,i.WI)(e.$slots,"default")]})),_:3},8,["class"])],16)],8,s)],8,c)),[[f,t.isActive,"99999"]])])),(0,i.Wm)(o.Z,{"is-fire":t.isActive,"z-index":"9999"},null,8,["is-fire"])],64)}}}},1663:(t,e,a)=>{a.d(e,{Z:()=>o});var i=a(6252),n=a(2262),l=a(4071);const o={__name:"preLoader",props:["show"],setup:function(t){return function(e,a){return t.show?((0,i.wg)(),(0,i.iD)("div",(0,i.dG)({key:0},e.$attrs,{class:"w-full h-[250px] bg-light/20 absolute top-0 left-0 flex justify-center items-end"}),[(0,i.Wm)((0,n.SU)(l.t),{class:"z-50 relative","animation-duration":1e3,"dot-size":50,"dots-num":3,color:"#333"})],16)):(0,i.kq)("v-if",!0)}}}},1504:(t,e,a)=>{a.d(e,{Z:()=>p});var i=a(6252),n=a(2262),l=a(9963),o={key:0,id:"zoom-area",class:"fixed overflow-scroll z-[9999] top-0 left-0 w-[100vw] bg-light h-[100vh]"},r=["src"],c={class:"w-3 h-3 flex justify-center items-center bg-light rounded-full fixed right-0 top-0 m-2"};const s={__name:"ImageZoomer",props:["src","isActive"],emits:["close"],setup:function(t,e){var a=e.emit,n=function(){a("close",!1),document.body.style.overflowY="scroll"};return function(e,a){var s=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.j4)(i.lR,{to:"body"},[(0,i.Wm)(l.uT,{name:"fade"},{default:(0,i.w5)((function(){return[t.isActive?((0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("img",{onLoad:a[0]||(a[0]=function(t){return e=t,a=getComputedStyle(e.target),e.target.style.width=a.width,e.target.style.height=a.height,void(document.body.style.overflowY="hidden");var e,a}),src:t.src,class:"relative",alt:""},null,40,r),(0,i._)("div",c,[(0,i.Wm)(s,{onClick:n,class:"transition hover:!text-dark text-1.5 !text-dark/70 cursor-pointer",icon:"fa-solid fa-magnifying-glass-minus"})])])):(0,i.kq)("v-if",!0)]})),_:1})])}}};const u=(0,a(3744).Z)(s,[["__scopeId","data-v-682d0c65"]]);var d={class:"relative mr-1"},f=["srcset"];const p={__name:"GalleryItem",props:["src","srcset","zoom"],setup:function(t){var e=(0,n.iH)(!1),a=(0,n.iH)(!0),l=function(){e.value=!1},o=function(){a.value=!1};return function(n,r){var c=(0,i.up)("Skeletor"),s=(0,i.up)("font-awesome-icon"),p=(0,i.Q2)("lazy");return(0,i.wg)(),(0,i.iD)("div",d,[a.value?((0,i.wg)(),(0,i.j4)(c,{key:0,class:"rounded-8 !absolute z-[9999] top-0 left-0",width:"100%",shimmer:!0,height:"800"})):(0,i.kq)("v-if",!0),(0,i.Wm)(s,{onClick:r[0]||(r[0]=function(t){return e.value=!0}),class:"absolute top-0 transition hover:!text-dark right-0 m-1 text-1.5 !text-dark/70 cursor-pointer z-50",icon:"fa-solid fa-magnifying-glass-plus "}),(0,i.wy)((0,i._)("img",{onLoad:o,class:"cursor-grab rounded-8",srcset:t.srcset,src:"",alt:"",sizes:"(max-width: 767px) calc(100vw - 20px), (max-width: 1360px) 50vw, 620px"},null,40,f),[[p,t.src]]),(0,i.Wm)(u,{onClose:l,"is-active":e.value,src:t.zoom},null,8,["is-active","src"])])}}}},3187:(t,e,a)=>{a.d(e,{Z:()=>gt});var i=a(6252),n=a(3577),l=a(2262),o=a(4071),r=a(3526),c=a(2201),s=a(1817),u=a(6544);var d=a(9860),f=a(6778);var p=a(7410),v=a(1504),m={key:0},g={class:"flex gap-1 justify-center items-center my-1"},h={class:"flex w-full justify-between items-center"},k=(0,i._)("span",{class:"text-gray-600 font-600 !text-1 pl-1"},"Brentos",-1),y={key:0,class:"sm:pl-1"},w={class:"font-600"},b={key:0,class:"flex gap-2"},S={class:"font-600 my-1"},F={class:"font-600 my-1 line-through text-gray-500"},x={key:1,class:"font-600 my-1"},U=["innerHTML"],_={key:0,class:"mt-4"},z=(0,i._)("h5",{class:"font-600 mb-1"},"Choose Your Family Members",-1),D=["disabled","onClick"],C={key:1,class:"mt-4"},P=(0,i._)("h5",{class:"font-600 mb-1"},"Size",-1),q=["onClick"],L={key:2,class:"my-2"},W=(0,i._)("h5",{class:"font-600 mb-1"},"Frame",-1),T=["disabled"],H=["disabled"],I={class:"mb-1"},M={key:0,class:"flex items-center gap-1"},O={class:"font-600 my-2"},Z={class:"line-through"},j=(0,i._)("br",null,null,-1),A={class:"text-gray-500"},Y={key:1,class:"font-600 my-2"},$=(0,i._)("div",{class:"divider"},null,-1),Q={class:"flex gap-1 items-center"},R={key:0},E={class:"mx-1 px-0.5 text-1.5"},K=["disabled"],N={class:"mt-4"},B=(0,i._)("h5",{class:"font-600 mb-1"},"Share",-1),G={class:"flex gap-2 item-center"},J=["href"],V=["href"],X=["href"];const tt={__name:"ProductDetailModal",props:["id","category","link"],emits:["closeModal"],setup:function(t,e){var a=e.emit,o=t,s=function(){a("closeModal",!1)},d=(0,f.Z)(),tt=d.next,et=d.prev,at=d.settings,it=d.carousel,nt=function(t,e){var a=(0,c.yj)(),n=(0,r.a)(),o=(0,u.x)(),s=(0,i.Fl)((function(){return n.getProductData})),d=(0,i.Fl)((function(){return n.getProductDetailDataFlag})),f=(0,l.iH)(e.id),p=(0,l.iH)(1),v=(0,l.iH)(0),m=(0,l.iH)(0),g=(0,l.iH)(0),h=(0,i.Fl)((function(){var t;return s.value.option.sizes[v.value].frame?(s.value.option.sizes[v.value].price+s.value.option.sizes[v.value].frame.price).toFixed(2):null!==(t=s.value.option.sizes[v.value].price.toFixed(2))&&void 0!==t?t:s.value.price.toFixed(2)})),k=(0,i.Fl)((function(){var t,e;return null!==(t=s.value)&&void 0!==t&&null!==(e=t.option)&&void 0!==e&&e.sizes?s.value.option.sizes[v.value].price.toFixed(2):s.value.price.toFixed(2)})),y=(0,i.Fl)((function(){var t,i,n;return{src:s.value.gallery[0].src,srcset:s.value.gallery[0].srcset,available:s.value.available,title:s.value.title,productId:f.value,link:e.link,category:null!==(t=e.category)&&void 0!==t?t:a.params.name,quantity:p.value,priceDetail:{size:null!==(i=s.value)&&void 0!==i&&null!==(n=i.option)&&void 0!==n&&n.sizes?s.value.option.sizes[v.value].size:null,frame:s.value.hasFrame?0===g.value?"No frame":"Recycled Timber Frame":null,price:0===g.value?k.value:h.value,family:s.value.hasFamily?s.value.option.family[m.value].item:null},discount:s.value.discount||null}})),w=(0,i.Fl)((function(){d.value&&(v.value=s.value.option.sizes.findIndex((function(t){return t.available})))}));return{productData:s,productDetailFlag:d,quantity:p,sizeIndex:v,familyIndex:m,whichFrame:g,totalPriceWithOutFrame:k,totalPriceWithFrame:h,increment:function(){p.value++,p.value>s.value.available&&(p.value=s.value.available)},decrement:function(){p.value--,p.value<1&&(p.value=1)},addToCart:function(){o.addToUserCart(y.value)},changeFrame:function(e){t.value.slideTo(e),g.value=e},changeFamily:function(e,a){t.value.slideTo(e),m.value=a},changeSize:function(t,e){t.available&&(y.value.priceDetail.size=t.size,v.value=e,g.value=0)},setSelectedSize:w}}(it,o),lt=nt.productDetailFlag,ot=nt.productData,rt=nt.totalPriceWithFrame,ct=nt.totalPriceWithOutFrame,st=nt.whichFrame,ut=nt.familyIndex,dt=nt.sizeIndex,ft=nt.quantity,pt=nt.decrement,vt=nt.increment,mt=nt.addToCart,gt=nt.changeFamily,ht=nt.changeFrame,kt=nt.changeSize,yt=nt.setSelectedSize;return function(t,e){var a=(0,i.up)("font-awesome-icon"),o=(0,i.up)("column");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(o,{class:"order-3 md:order-2 md:pr-0.7",md:"6",col:"12"},{default:(0,i.w5)((function(){return[(0,l.SU)(lt)?((0,i.wg)(),(0,i.iD)("div",m,[(0,i.Wm)((0,l.SU)(p.lr),{ref_key:"carousel",ref:it,settings:(0,l.SU)(at),"wrap-around":!0},{addons:(0,i.w5)((function(){return[(0,i._)("div",g,[(0,i.Wm)(a,{size:"lg",class:"cursor-pointer",icon:"fa-solid fa-angle-left",onClick:(0,l.SU)(et)},null,8,["onClick"]),(0,i.Wm)((0,l.SU)(p.tl)),(0,i.Wm)(a,{size:"lg",class:"cursor-pointer",icon:"fa-solid fa-angle-right",onClick:(0,l.SU)(tt)},null,8,["onClick"])])]})),default:(0,i.w5)((function(){return[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,l.SU)(ot).gallery,(function(t,e){return(0,i.wg)(),(0,i.j4)((0,l.SU)(p.Mi),{key:e},{default:(0,i.w5)((function(){return[(0,i.Wm)(v.Z,{zoom:t.zoom,src:t.src,srcset:t.srcset},null,8,["zoom","src","srcset"])]})),_:2},1024)})),128))]})),_:1},8,["settings"])])):(0,i.kq)("v-if",!0)]})),_:1}),(0,i.Wm)(o,{class:"order-2 md:order-3",md:"6",col:"12"},{default:(0,i.w5)((function(){var t,o;return[(0,i._)("div",h,[k,(0,i.Wm)(a,{size:"lg",class:"cursor-pointer text-gray-700",onClick:s,icon:"fa-solid fa-x"})]),(0,l.SU)(lt)?((0,i.wg)(),(0,i.iD)("div",y,[(0,i._)("div",null,[(0,i._)("h1",w,(0,n.zw)((0,l.SU)(ot).title),1),(0,l.SU)(ot).discount?((0,i.wg)(),(0,i.iD)("div",b,[(0,i._)("h3",S,"$"+(0,n.zw)((0,l.SU)(ot).discount.toFixed(2)),1),(0,i._)("h3",F,"$"+(0,n.zw)(0===(0,l.SU)(st)?(0,l.SU)(ct):(0,l.SU)(rt)),1)])):((0,i.wg)(),(0,i.iD)("h3",x,"$"+(0,n.zw)(0===(0,l.SU)(st)?(0,l.SU)(ct):(0,l.SU)(rt)),1)),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,l.SU)(ot).description,(function(t){return(0,i.wg)(),(0,i.iD)("p",{innerHTML:t.content,class:"mb-1 font-500 text-1"},null,8,U)})),256))]),(0,i.kq)("        <<<<<<<<<<<<<<<<<< family part start >>>>>>>>>>>>>>"),(0,l.SU)(ot).hasFamily?((0,i.wg)(),(0,i.iD)("div",_,[z,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,l.SU)(ot).option.family,(function(t,e){return(0,i.wg)(),(0,i.iD)("button",{disabled:!(0,l.SU)(ot).option.family[(0,l.SU)(ut)].available,class:(0,n.C_)([{disabled:!(0,l.SU)(ot).option.family[(0,l.SU)(ut)].available,selected:(0,l.SU)(ut)===e},"btn btn-dark-outline mr-1 mb-1"]),onClick:function(a){return(0,l.SU)(gt)(t.index,e)}},(0,n.zw)(t.item),11,D)})),256))])):(0,i.kq)("v-if",!0),(0,i.kq)("        <<<<<<<<<<<<<<<<<< family part start >>>>>>>>>>>>>>"),(0,i.kq)("            <<<<<<<<<<<<< size part start>>>>>>>>>>>>"),null!==(t=(0,l.SU)(ot))&&void 0!==t&&null!==(o=t.option)&&void 0!==o&&o.sizes?((0,i.wg)(),(0,i.iD)("div",C,[P,(0,i.Uk)(" "+(0,n.zw)((0,l.SU)(yt))+" ",1),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,l.SU)(ot).option.sizes,(function(t,e){return(0,i.wg)(),(0,i.iD)("button",{class:(0,n.C_)([{disabled:!t.available,selected:(0,l.SU)(dt)===e},"btn btn-dark-outline mr-1 mb-1"]),onClick:function(a){return(0,l.SU)(kt)(t,e)}},(0,n.zw)(t.size),11,q)})),256))])):(0,i.kq)("v-if",!0),(0,i.kq)("            <<<<<<<<<<<<< size part end>>>>>>>>>>>>"),(0,i.kq)("            <<<<<<<<<<<<< frame part start>>>>>>>>>>>>"),(0,l.SU)(ot).hasFrame?((0,i.wg)(),(0,i.iD)("div",L,[W,(0,i._)("button",{disabled:!(0,l.SU)(ot).option.sizes[(0,l.SU)(dt)].available,class:(0,n.C_)([{disabled:!(0,l.SU)(ot).option.sizes[(0,l.SU)(dt)].available,selected:0===(0,l.SU)(st)},"btn btn-dark-outline mr-1 mb-1"]),onClick:e[0]||(e[0]=function(t){return(0,l.SU)(ht)(0)})}," No frame ",10,T),(0,i._)("button",{disabled:!(0,l.SU)(ot).option.sizes[(0,l.SU)(dt)].frame.available,class:(0,n.C_)([{disabled:!(0,l.SU)(ot).option.sizes[(0,l.SU)(dt)].frame.available,selected:1===(0,l.SU)(st)},"btn btn-dark-outline mr-1 mb-1"]),onClick:e[1]||(e[1]=function(t){return(0,l.SU)(ht)(1)})}," Recycled Timber Frame ",10,H)])):(0,i.kq)("v-if",!0),(0,i.kq)("            <<<<<<<<<<<<< frame part end>>>>>>>>>>>>"),(0,i._)("div",I,[(0,l.SU)(ot).discount?((0,i.wg)(),(0,i.iD)("div",M,[(0,i._)("h1",O,"$"+(0,n.zw)((0,l.SU)(ot).discount.toFixed(2)),1),(0,i._)("div",null,[(0,i._)("span",Z,"$"+(0,n.zw)(0===(0,l.SU)(st)?(0,l.SU)(ct):(0,l.SU)(rt)),1),j,(0,i._)("span",A,"you have saved $"+(0,n.zw)(((0,l.SU)(ot).price-(0,l.SU)(ot).discount).toFixed(2)),1)])])):((0,i.wg)(),(0,i.iD)("h1",Y," $"+(0,n.zw)(0===(0,l.SU)(st)?(0,l.SU)(ct):(0,l.SU)(rt)),1))]),$,(0,i._)("div",Q,[(0,l.SU)(ot).isSoldOut?(0,i.kq)("v-if",!0):((0,i.wg)(),(0,i.iD)("div",R,[(0,i._)("button",{onClick:e[2]||(e[2]=function(){return(0,l.SU)(pt)&&(0,l.SU)(pt).apply(void 0,arguments)}),class:"btn btn-dark-outline !py-1"},[(0,i.Wm)(a,{size:"lg",icon:"fa-solid fa-minus"})]),(0,i._)("span",E,(0,n.zw)((0,l.SU)(ft)),1),(0,i._)("button",{onClick:e[3]||(e[3]=function(){return(0,l.SU)(vt)&&(0,l.SU)(vt).apply(void 0,arguments)}),class:"btn btn-dark-outline !py-1"},[(0,i.Wm)(a,{size:"lg",icon:"fa-solid fa-plus"})])])),(0,i._)("button",{disabled:(0,l.SU)(ot).isSoldOut,class:(0,n.C_)([{"w-[50%] !bg-gray-400":(0,l.SU)(ot).isSoldOut},"btn btn-dark-fill px-2 text-1.2 font-700"]),onClick:e[4]||(e[4]=function(){return(0,l.SU)(mt)&&(0,l.SU)(mt).apply(void 0,arguments)})},(0,n.zw)((0,l.SU)(ot).isSoldOut?"Sold Out":"Add to cart"),11,K)]),(0,i._)("div",N,[B,(0,i._)("ul",G,[(0,i._)("li",null,[(0,i.Wm)(a,{size:"md",icon:"fa-brands fa-facebook-f"}),(0,i._)("a",{class:"btn-link ml-0.5",href:(0,l.SU)(ot).link.facebook}," Facebook ",8,J)]),(0,i._)("li",null,[(0,i.Wm)(a,{size:"md",icon:"fa-brands fa-twitter"}),(0,i._)("a",{class:"btn-link ml-0.5",href:(0,l.SU)(ot).link.twitter}," Twitter ",8,V)]),(0,i._)("li",null,[(0,i.Wm)(a,{size:"md",icon:"fa-brands fa-pinterest"}),(0,i._)("a",{class:"btn-link ml-0.5",href:(0,l.SU)(ot).link.pinterest}," Pinterest ",8,X)])])])])):(0,i.kq)("v-if",!0)]})),_:1})],64)}}};var et=["id"],at={class:"product-card-image-cover"},it=["srcset","alt"],nt={key:1,class:"product-card-image-overlay peer-hover:opacity-100 peer-hover:visible"},lt=["srcset","alt"],ot={key:2,class:"product-card-badge"},rt=function(t){return(0,i.dD)("data-v-d23f3dde"),t=t(),(0,i.Cn)(),t}((function(){return(0,i._)("span",{class:"product-card-badge"}," Sold out ",-1)})),ct={class:"product-card-badge !text-0.8 !bg-red-500 !mt-3.5"},st={key:4,class:"product-card-badge !text-0.8 !bg-red-500"},ut={class:"product-card-text"},dt={key:0,class:"[&_*]:capitalize [&_*]:!text-1.2 block leading-2"},ft={class:"mx-0.5"},pt={class:"line-through !text-gray-400"},vt={key:1,class:"capitalize !text-1.2 block leading-2"};const mt={__name:"ProductCard",props:["link","coverSrc","overlaySrc","coverSrcset","overlaySrcset","isSoldOut","isPeriod","price","title","discount","id","category"],setup:function(t){var e=t,a=function(t){var e=(0,c.yj)(),a=(0,r.a)(),n=(0,u.x)(),o=(0,l.iH)(!1),d=(0,i.Fl)((function(){return a.getProductDetailDataFlag})),f=(0,l.iH)(!0),p=(0,i.Fl)((function(){return Math.ceil(100*(1-t.discount/t.price))})),v=(0,l.iH)(!1),m=(0,i.Fl)((function(){var a,i;return"PRODUCT"===t.link.name?"/Products/".concat(t.link.params.name,"?id=").concat(t.id,"#").concat(null!==(a=e.params.name)&&void 0!==a?a:t.category):"/Products/Art/".concat(t.link.params.name,"?id=").concat(t.id,"#").concat(null!==(i=e.params.name)&&void 0!==i?i:t.category)}));return{discountPercent:p,toggleModal:function(){v.value=!v.value,document.body.style.overflow=v.value?"hidden":"auto",v.value&&a.fetchProductDetail(t.id)},closeModal:function(t){v.value=t,document.body.style.overflow=v.value?"hidden":"auto"},isActive:v,isLoading:f,imageLoad:function(){f.value=!1},fetchFlag:d,addToCart:function(){o.value=!0,s.Z.get("https://ecommerce-199b2-default-rtdb.firebaseio.com/product/productDetailData/".concat(t.id,".json")).then((function(e){n.addToUserCart({src:e.data.gallery[0].src,available:e.data.available,link:m.value,srcset:e.data.gallery[0].srcset,title:e.data.title,productId:t.id,quantity:1,priceDetail:{size:null,frame:null,price:e.data.price,family:null},discount:e.data.discount||null}),o.value=!1}))},productLink:m,addToCartFlag:o}}(e),f=a.isActive,p=a.closeModal,v=a.toggleModal,m=a.discountPercent,g=a.isLoading,h=a.imageLoad,k=a.fetchFlag,y=a.addToCart,w=a.productLink,b=a.addToCartFlag;return function(a,r){var c=(0,i.up)("Skeletor"),s=(0,i.up)("router-link"),u=(0,i.Q2)("lazy");return(0,i.wg)(),(0,i.iD)("div",{id:"product-".concat(t.id),class:"product-card"},[(0,i._)("div",{class:(0,n.C_)(["product-card-image",{"h-[400px]":(0,l.SU)(g)}])},[(0,i.kq)("      <<<<<<<<<<<<< skeleton loader  start>>>>>>>>>>>>>>"),(0,l.SU)(g)?((0,i.wg)(),(0,i.j4)(c,{key:0,class:"!absolute top-0 left-0",width:"100%",shimmer:!0,height:"400"})):(0,i.kq)("v-if",!0),(0,i.kq)("      <<<<<<<<<<<<< skeleton loader end>>>>>>>>>>>>>>"),(0,i._)("div",at,[(0,i.wy)((0,i._)("img",{onLoad:r[0]||(r[0]=function(){return(0,l.SU)(h)&&(0,l.SU)(h).apply(void 0,arguments)}),sizes:"(max-width: 359px) calc(100vw - 30px), (max-width: 767px) calc((100vw - 50px) / 2),(max-width: 1023px) calc((100vw - 100px) / 3), (max-width: 1280px) calc((100vw - 120px) / 4), 300px",srcset:t.coverSrcset,src:"",alt:t.title},null,40,it),[[u,t.coverSrc]])]),(0,i.Wm)(s,{class:(0,n.C_)([{peer:!(0,l.SU)(g)},"stretch-link"]),to:(0,l.SU)(w)},null,8,["class","to"]),t.overlaySrc?((0,i.wg)(),(0,i.iD)("div",nt,[(0,i.wy)((0,i._)("img",{sizes:"(max-width: 359px) calc(100vw - 30px), (max-width: 767px) calc((100vw - 50px) / 2),(max-width: 1023px) calc((100vw - 100px) / 3), (max-width: 1280px) calc((100vw - 120px) / 4), 300px",srcset:t.overlaySrcset,src:"",alt:t.title},null,8,lt),[[u,t.overlaySrc]])])):(0,i.kq)("v-if",!0),(0,i.kq)("      <<<<<<<<<<<< sold out and discount badge start>>>>>>>>>>>>>"),t.isSoldOut&&!t.discount?((0,i.wg)(),(0,i.iD)("span",ot," Sold out ")):(0,i.kq)("v-if",!0),t.isSoldOut&&t.discount?((0,i.wg)(),(0,i.iD)(i.HY,{key:3},[rt,(0,i._)("span",ct," -"+(0,n.zw)((0,l.SU)(m))+"% ",1)],64)):(0,i.kq)("v-if",!0),!t.isSoldOut&&t.discount?((0,i.wg)(),(0,i.iD)("span",st," -"+(0,n.zw)((0,l.SU)(m))+"% ",1)):(0,i.kq)("v-if",!0),(0,i.kq)("      <<<<<<<<<<<< sold out and discount badge start>>>>>>>>>>>>>")],2),(0,i._)("div",ut,[(0,i.kq)("      <<<<<<<<<<<< price start >>>>>>>>>>>>>>>>"),t.discount?((0,i.wg)(),(0,i.iD)("span",dt,[t.isPeriod?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Uk)("from")],64)):(0,i.kq)("v-if",!0),(0,i._)("span",ft,"$"+(0,n.zw)(t.price.toFixed(2)),1),(0,i._)("span",pt,"$"+(0,n.zw)(t.discount.toFixed(2)),1)])):((0,i.wg)(),(0,i.iD)("span",vt,[t.isPeriod?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Uk)("from")],64)):(0,i.kq)("v-if",!0),(0,i.Uk)(" $"+(0,n.zw)(t.price.toFixed(2)),1)])),(0,i.kq)("      <<<<<<<<<<<< price end >>>>>>>>>>>>>>>>"),(0,i.kq)("      <<<<<<<<<<< title start >>>>>>>>>>>>>"),(0,i.Wm)(s,{class:"btn-link !text-1.4 !font-700",to:(0,l.SU)(w)},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,n.zw)(t.title),1)]})),_:1},8,["to"]),(0,i.kq)("      <<<<<<<<<<< title end >>>>>>>>>>>>>"),(0,i.kq)("        <<<<<<<<<<<< buy now button start >>>>>>>>>>>>>"),t.isSoldOut?(0,i.kq)("v-if",!0):((0,i.wg)(),(0,i.iD)(i.HY,{key:2},[t.isPeriod?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i._)("button",{onClick:r[1]||(r[1]=function(){return(0,l.SU)(v)&&(0,l.SU)(v).apply(void 0,arguments)}),class:"btn w-full mt-1 btn-dark-outline"},"Buy now"),(0,i.Wm)(d.Z,{class:"w-full sm:h-[calc(100vh-7rem)] h-[100vh]",onCloseModal:r[3]||(r[3]=function(t){return(0,l.SU)(p)(t)}),"is-active":(0,l.SU)(f),preloader:(0,l.SU)(k)},{default:(0,i.w5)((function(){return[(0,l.SU)(f)?((0,i.wg)(),(0,i.j4)(tt,{key:0,category:t.category,link:(0,l.SU)(e).link,id:t.id,onCloseModal:r[2]||(r[2]=function(t){return(0,l.SU)(p)(t)})},null,8,["category","link","id"])):(0,i.kq)("v-if",!0)]})),_:1},8,["is-active","preloader"])],64)):((0,i.wg)(),(0,i.iD)("button",{key:1,onClick:r[4]||(r[4]=function(){return(0,l.SU)(y)&&(0,l.SU)(y).apply(void 0,arguments)}),class:"btn w-full mt-1 btn-dark-outline block"},[(0,i.Uk)(" Buy now "),(0,l.SU)(b)?((0,i.wg)(),(0,i.j4)((0,l.SU)(o.t),{key:0,class:"z-50 !static !m-auto","animation-duration":1e3,"dot-size":10,"dots-num":3,color:"#333"})):(0,i.kq)("v-if",!0)]))],64)),(0,i.kq)("        <<<<<<<<<<<< buy now button end >>>>>>>>>>>>>")])],8,et)}}};const gt=(0,a(3744).Z)(mt,[["__scopeId","data-v-d23f3dde"]])}}]);