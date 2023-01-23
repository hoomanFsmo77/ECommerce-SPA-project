"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[21],{7885:(t,e,r)=>{function n(t){for(var e="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=r.length,i=0;i<t;i++)e+=r.charAt(Math.floor(Math.random()*n));return e}r.d(e,{Z:()=>n}),String.prototype.hashCode=function(){var t,e=0;if(0===this.length)return e;for(t=0;t<this.length;t++)e=(e<<5)-e+this.charCodeAt(t),e|=0;return e}},225:(t,e,r)=>{r.d(e,{Hq:()=>n,d8:()=>i,ej:()=>a});var n=function(){return Math.floor(1e9*Math.random())},i=function(t,e,r,n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3),document.cookie="".concat(t,"=").concat(e,";path=").concat(r,";expires=").concat(i)},a=function(t){var e=document.cookie.slice(document.cookie.indexOf(t)),r=JSON.parse(e.slice(e.indexOf("{")));return{id:r.id,hash:r.hash}}},6544:(t,e,r)=>{r.d(e,{x:()=>c});var n=r(9305),i=(0,r(3002).pm)(),a=function(){return JSON.parse(localStorage.getItem("_brentos_cart_"))},c=(0,n.Q_)("cart",{state:function(){var t,e,r,n;return{cart:null!==(t=null===(e=a())||void 0===e?void 0:e.cart)&&void 0!==t?t:[],totalPrice:null!==(r=null===(n=a())||void 0===n?void 0:n.totalPrice)&&void 0!==r?r:0}},getters:{cartLength:function(t){return t.cart.length},getTotalPrice:function(t){return t.totalPrice.toFixed(2)},getCart:function(t){return t.cart},getProductPrice:function(t){return function(e){var r=t.cart.filter((function(t){return t.productId===e}))[0];return(r.priceDetail.price*r.quantity).toFixed(2)}}},actions:{addToUserCart:function(t){var e=this.cart.some((function(e){return e.title===t.title})),r=this.cart[this.cart.findIndex((function(e){return e.title===t.title}))];e?r.available>r.quantity?(r.quantity++,i.success("Product added to your cart!")):i.error("Maximum available quantity is ".concat(r.quantity,"!")):(this.cart.push(t),i.success("Product added to your cart!")),this.calculateTotalPrice()},calculateTotalPrice:function(){var t,e=0;this.cart.forEach((function(t){e+=t.priceDetail.price*t.quantity})),this.totalPrice=e,t={cart:this.cart,totalPrice:this.totalPrice},localStorage.setItem("_brentos_cart_",JSON.stringify(t))},increaseProductQuantity:function(t,e){this.cart[this.cart.findIndex((function(e){return e.productId===t}))].quantity=e,this.calculateTotalPrice()},decreaseProductQuantity:function(t,e){this.cart[this.cart.findIndex((function(e){return e.productId===t}))].quantity=e,this.calculateTotalPrice()},removeProductCart:function(t){this.cart.splice(this.cart.findIndex((function(e){return e.productId===t})),1),console.log(this.cart),this.calculateTotalPrice()}}})},3222:(t,e,r)=>{r.d(e,{Z:()=>p});var n=r(6252),i=r(3577),a={class:"my-1"},c={class:"flex flex-wrap items-center"},l={class:"mr-1"},o={key:1,class:"text-[0.85rem] capitalize"},u={class:"mr-1"},s={key:0,class:"text-[0.85rem]"};const d={name:"BreadCrumb",props:["pages"]};const p=(0,r(3744).Z)(d,[["render",function(t,e,r,d,p,f){var m=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("ul",c,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.pages,(function(t,e){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("li",l,[t.link?((0,n.wg)(),(0,n.j4)(m,{key:0,class:"text-[0.85rem] capitalize",to:t.link},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,i.zw)(t.name),1)]})),_:2},1032,["to"])):((0,n.wg)(),(0,n.iD)("span",o,(0,i.zw)(t.name),1))]),(0,n._)("li",u,[e!==r.pages.length-1?((0,n.wg)(),(0,n.iD)("span",s,"/")):(0,n.kq)("v-if",!0)])],64)})),256))])])}]])},8179:(t,e,r)=>{r.r(e),r.d(e,{default:()=>X});var n=r(6252),i=r(2262),a=r(3577),c=r(3222),l=r(6544),o=r(225),u=r(7885),s=r(2201),d=r(3002),p={class:"w-[60%]"},f={class:"flex gap-1 table-content-left items-center"},m=["srcset"],h={class:"font-600 mb-0.2"},g={class:"mb-0.2"},y={key:0,class:"text-gray-500 mb-0.2"},v={key:1,class:"text-gray-500 mb-0.2"},k={key:2,class:"text-gray-500 mb-0.2"},w={key:3,class:"text-gray-500 mb-0.2"},b={class:"table-content-center text-center"},_={class:""},x={class:"px-0.5 mx-0.5"},D=(0,n._)("br",null,null,-1),S={class:"table-content-right text-right"},z={class:"font-700 !text-1 mr-0.5"},U=(0,n._)("br",null,null,-1),P={class:"font-700 !text-1 line-through"},q={key:1,class:"font-700 !text-1"},I={key:1,class:"flex gap-1 mb-1.5 items-center"},C=["srcset"],W={class:"font-600 mb-0.2 !text-0.8"},T={class:"mb-0.2 !text-0.8"},F={key:0,class:"text-gray-500 mb-0.2 !text-0.8"},H={key:1,class:"text-gray-500 mb-0.2 !text-0.8"},O={key:2,class:"text-gray-500 mb-0.2 !text-0.8"},Y={key:3,class:"text-gray-500 mb-0.2 !text-0.8"},M={class:"mt-0.5"},Q={class:"px-0.5 mx-0.5"};const L={__name:"CartItem",props:["src","srcset","title","param","productId","category","quantity","priceDetail","discount","link","available"],setup:function(t){var e=function(t){var e=(0,l.x)(),r=(0,i.iH)(t.quantity),a=(0,n.Fl)((function(){return e.getProductPrice(t.productId)}));return{productLink:(0,n.Fl)((function(){return"string"==typeof t.link?t.link:"/Products/Art/".concat(t.link.params.name,"?id=").concat(t.productId,"#").concat(t.category)})),decrement:function(){r.value--,r.value<1&&(r.value=1),e.decreaseProductQuantity(t.productId,r.value)},increment:function(){r.value++,r.value>t.available&&(r.value=t.available),e.increaseProductQuantity(t.productId,r.value)},productQuantity:r,removeProduct:function(){e.removeProductCart(t.productId)},productPrice:a}}(t),r=e.productLink,c=e.increment,o=e.decrement,u=e.productQuantity,s=e.removeProduct,d=e.productPrice,L=window.innerWidth;return function(e,l){var N=(0,n.up)("router-link"),j=(0,n.up)("font-awesome-icon"),Z=(0,n.Q2)("lazy");return(0,i.SU)(L)>768?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n._)("td",p,[(0,n._)("div",f,[(0,n.Wm)(N,{class:"w-6 h-6 overflow-hidden block rounded-6",to:(0,i.SU)(r)},{default:(0,n.w5)((function(){return[(0,n.wy)((0,n._)("img",{class:"object-cover w-full h-full hover:scale-[1.1] transition-all",srcset:t.srcset,src:"",alt:""},null,8,m),[[Z,t.src]])]})),_:1},8,["to"]),(0,n._)("div",null,[(0,n._)("p",h," $"+(0,a.zw)(t.priceDetail.price),1),(0,n._)("p",g,[(0,n.Wm)(N,{class:"btn-link font-700",to:(0,i.SU)(r)},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,a.zw)(t.title),1)]})),_:1},8,["to"])]),t.priceDetail.family?((0,n.wg)(),(0,n.iD)("p",y," Choose Your Family Members: "+(0,a.zw)(t.priceDetail.family),1)):(0,n.kq)("v-if",!0),t.priceDetail.size?((0,n.wg)(),(0,n.iD)("p",v," Size: "+(0,a.zw)(t.priceDetail.size),1)):(0,n.kq)("v-if",!0),t.priceDetail.frame?((0,n.wg)(),(0,n.iD)("p",k," Frame: "+(0,a.zw)(t.priceDetail.frame),1)):(0,n.kq)("v-if",!0),t.discount?((0,n.wg)(),(0,n.iD)("p",w," Discount: "+(0,a.zw)(t.discount),1)):(0,n.kq)("v-if",!0)])])]),(0,n._)("td",b,[(0,n._)("div",_,[(0,n._)("button",{onClick:l[0]||(l[0]=function(){return(0,i.SU)(o)&&(0,i.SU)(o).apply(void 0,arguments)}),class:"btn btn-dark-outline !pt-[1px] !pb-[0px] !px-[7px]"},[(0,n.Wm)(j,{size:"sm",icon:"fa-solid fa-minus"})]),(0,n._)("span",x,(0,a.zw)((0,i.SU)(u)),1),(0,n._)("button",{onClick:l[1]||(l[1]=function(){return(0,i.SU)(c)&&(0,i.SU)(c).apply(void 0,arguments)}),class:"btn btn-dark-outline !pt-[1px] !pb-[0px] !px-[7px]"},[(0,n.Wm)(j,{size:"sm",icon:"fa-solid fa-plus"})]),D,(0,n._)("button",{onClick:l[2]||(l[2]=function(){return(0,i.SU)(s)&&(0,i.SU)(s).apply(void 0,arguments)}),class:"ml-0.5 text-0.8 text-gray-500 underline hover:text-dark transition-all"}," Remove ")])]),(0,n._)("td",S,[(0,n._)("div",null,[t.discount?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n._)("p",z,"$"+(0,a.zw)(t.discount.toFixed(2)),1),U,(0,n._)("p",P,"$"+(0,a.zw)((0,i.SU)(d)),1)],64)):((0,n.wg)(),(0,n.iD)("p",q,"$"+(0,a.zw)((0,i.SU)(d)),1))])])],64)):((0,n.wg)(),(0,n.iD)("div",I,[(0,n.Wm)(N,{class:"w-6 h-6 overflow-hidden block rounded-6",to:(0,i.SU)(r)},{default:(0,n.w5)((function(){return[(0,n.wy)((0,n._)("img",{class:"object-cover w-full h-full hover:scale-[1.1] transition-all",srcset:t.srcset,src:"",alt:""},null,8,C),[[Z,t.src]])]})),_:1},8,["to"]),(0,n._)("div",null,[(0,n._)("p",W," $"+(0,a.zw)(t.priceDetail.price),1),(0,n._)("p",T,[(0,n.Wm)(N,{class:"btn-link font-700",to:(0,i.SU)(r)},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,a.zw)(t.title),1)]})),_:1},8,["to"])]),t.priceDetail.family?((0,n.wg)(),(0,n.iD)("p",F," Choose Your Family Members: "+(0,a.zw)(t.priceDetail.family),1)):(0,n.kq)("v-if",!0),t.priceDetail.size?((0,n.wg)(),(0,n.iD)("p",H," Size: "+(0,a.zw)(t.priceDetail.size),1)):(0,n.kq)("v-if",!0),t.priceDetail.frame?((0,n.wg)(),(0,n.iD)("p",O," Frame: "+(0,a.zw)(t.priceDetail.frame),1)):(0,n.kq)("v-if",!0),t.discount?((0,n.wg)(),(0,n.iD)("p",Y," Discount: "+(0,a.zw)(t.discount),1)):(0,n.kq)("v-if",!0),(0,n._)("div",M,[(0,n._)("button",{onClick:l[3]||(l[3]=function(){return(0,i.SU)(o)&&(0,i.SU)(o).apply(void 0,arguments)}),class:"btn btn-dark-outline !pt-[1px] !pb-[0px] !px-[7px]"},[(0,n.Wm)(j,{size:"sm",icon:"fa-solid fa-minus"})]),(0,n._)("span",Q,(0,a.zw)((0,i.SU)(u)),1),(0,n._)("button",{onClick:l[4]||(l[4]=function(){return(0,i.SU)(c)&&(0,i.SU)(c).apply(void 0,arguments)}),class:"btn btn-dark-outline !pt-[1px] !pb-[0px] !px-[7px]"},[(0,n.Wm)(j,{size:"sm",icon:"fa-solid fa-plus"})]),(0,n._)("button",{onClick:l[5]||(l[5]=function(){return(0,i.SU)(s)&&(0,i.SU)(s).apply(void 0,arguments)}),class:"ml-0.5 text-0.8 text-gray-500 underline hover:text-dark transition-all"}," Remove ")])])]))}}};var N={id:"cart"},j=(0,n._)("h1",{class:"font-600 text-left mb-1 capitalize"},"Shopping Cart",-1),Z={key:0,cellspacing:"0",cellpadding:"0",class:"table"},$=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{class:"text-left"},[(0,n._)("div",{class:"table-head-left"},[(0,n._)("p",null,"Product")])]),(0,n._)("th",null,[(0,n._)("div",{class:"table-head-center"},[(0,n._)("p",null,"Quantity")])]),(0,n._)("th",{class:"text-right"},[(0,n._)("div",{class:"table-head-right"},[(0,n._)("p",null,"Total")])])])],-1),A={key:1,class:"p-1 border-[1px] border-gray-200 rounded-6"},J=[(0,n._)("p",null,"Your cart is currently empty. ",-1)],R={class:"p-1 bg-gray-100 border-[1px] border-gray-300 rounded-6"},K={class:""},E={class:"p-1 border-[1px] border-gray-300 mt-1.5 rounded-6"},B=(0,n._)("p",null,"Total",-1),G={class:"font-700 mb-1"},V=(0,n._)("p",{class:"text-gray-500 text-0.8"},"Tax included. Shipping calculated at checkout.",-1);const X={__name:"Cart",setup:function(t){var e=function(){var t=(0,s.tv)(),e=(0,l.x)(),r=(0,n.Fl)((function(){return e.getCart})),i=(0,n.Fl)((function(){return e.cartLength})),a=(0,n.Fl)((function(){return e.getTotalPrice})),c=window.innerWidth,p=(0,d.pm)();return{cartList:r,cartLen:i,cartStore:e,toast:p,totalPrice:a,windowWidth:c,goToCheckout:function(){if(i.value>0)if(document.cookie.includes("secure_session_id")){var e=(0,o.ej)("checkout_token").id,r=(0,o.ej)("checkout_token").hash;t.push({name:"INFORMATION",params:{id:e,token:r}})}else{var n=(0,u.Z)(20),a=(0,o.Hq)(),c=(0,u.Z)(15);(0,o.d8)("secure_session_id",(0,u.Z)(10),"/",30),(0,o.d8)("checkout_token",JSON.stringify({id:a,hash:c}),"/",30),(0,o.d8)("checkout",n,"/".concat(a,"/checkout/").concat(c),30),(0,o.d8)("tracked_start_session",c,"/".concat(a),30),t.push({name:"INFORMATION",params:{id:a,token:c}})}else p.error("There is no item in your cart!")}}}(),r=e.goToCheckout,p=e.totalPrice,f=(e.toast,e.cartStore,e.cartList),m=e.cartLen,h=e.windowWidth;return function(t,e){var l=(0,n.up)("column"),o=(0,n.up)("row"),u=(0,n.up)("container");return(0,n.wg)(),(0,n.iD)("section",N,[(0,n.Wm)(u,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(o,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(l,{col:"12"},{default:(0,n.w5)((function(){return[(0,n.Wm)(c.Z,{pages:[{name:"Home",link:{name:"HOME"}},{name:"Cart"}]}),j]})),_:1})]})),_:1}),(0,n.Wm)(o,{class:"my-2"},{default:(0,n.w5)((function(){return[(0,n.Wm)(l,{class:"!pr-1.5 mb-2 md:mb-0",col:"12",md:"8"},{default:(0,n.w5)((function(){return[(0,i.SU)(m)>0?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,i.SU)(h)>768?((0,n.wg)(),(0,n.iD)("table",Z,[$,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,i.SU)(f),(function(t){return(0,n.wg)(),(0,n.iD)("tr",null,[(0,n.Wm)(L,{src:t.src,srcset:t.srcset,title:t.title,productId:t.productId,category:t.category,quantity:t.quantity,priceDetail:t.priceDetail,discount:t.discount,link:t.link,available:t.available},null,8,["src","srcset","title","productId","category","quantity","priceDetail","discount","link","available"])])})),256))])])):((0,n.wg)(!0),(0,n.iD)(n.HY,{key:1},(0,n.Ko)((0,i.SU)(f),(function(t){return(0,n.wg)(),(0,n.j4)(L,{src:t.src,srcset:t.srcset,title:t.title,productId:t.productId,category:t.category,quantity:t.quantity,priceDetail:t.priceDetail,discount:t.discount,link:t.link,available:t.available},null,8,["src","srcset","title","productId","category","quantity","priceDetail","discount","link","available"])})),256))],64)):((0,n.wg)(),(0,n.iD)("div",A,J))]})),_:1}),(0,n.Wm)(l,{col:"12",md:"4"},{default:(0,n.w5)((function(){return[(0,n._)("div",R,[(0,n._)("p",K,(0,a.zw)((0,i.SU)(p)>=70?"You are eligible for free shipping!":"You are $".concat(70-(0,i.SU)(p)," away from free shipping.")),1)]),(0,n._)("div",E,[B,(0,n._)("h1",G,"$"+(0,a.zw)((0,i.SU)(p)),1),V,(0,n._)("button",{onClick:e[0]||(e[0]=function(){return(0,i.SU)(r)&&(0,i.SU)(r).apply(void 0,arguments)}),class:"btn btn-dark-outline block my-1.5 text-center w-full"}," Check Out ")])]})),_:1})]})),_:1})]})),_:1})])}}}}}]);