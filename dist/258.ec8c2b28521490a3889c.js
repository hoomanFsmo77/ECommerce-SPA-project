/*! For license information please see 258.ec8c2b28521490a3889c.js.LICENSE.txt */
"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[258],{740:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(252);const o={name:"DarkOverlay",props:["isFire","zIndex"],data:function(){return{isOn:!0}},methods:{clickOutside:function(){this.isOn=!1,this.$emit("outside",this.isOn)}}};const s=(0,n(744).Z)(o,[["render",function(e,t,n,o,s,l){var r=(0,i.Q2)("fade");return(0,i.wg)(),(0,i.j4)(i.lR,{to:"body"},[(0,i.wy)((0,i._)("div",{onClick:t[0]||(t[0]=function(){return l.clickOutside&&l.clickOutside.apply(l,arguments)}),class:"fixed top-0 left-0 w-[100vw] h-[100vh] bg-dark/50"},null,512),[[r,n.isFire,n.zIndex]])])}]])},174:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(252),o=n(577),s=n(201),l={class:"collection-card"},r={class:"collection-card-image"},a=["srcset","alt"],c={class:"collection-card-text"};const u={__name:"CollectionCart",props:["link","src","srcset","text"],setup:function(e){var t=e,n=(0,s.tv)(),u=function(){n.push(t.link)};return function(t,n){var s=(0,i.Q2)("lazy");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",r,[(0,i.wy)((0,i._)("img",{sizes:"(max-width: 467px) calc((100vw - 40px) / 2), (max-width: 1280px) calc((100vw - 100px) / 3), 420px",srcset:e.srcset,alt:e.text},null,8,a),[[s,e.src]])]),(0,i._)("div",c,[(0,i._)("a",{onClick:u,class:"btn-link btn-stretch !font-500 !text-1 capitalize cursor-pointer"},(0,o.zw)(e.text),1)])])}}}},163:(e,t,n)=>{n.d(t,{Z:()=>W});var i=n(252),o=n(577),s=n(262);var l=n(963),r=n(740),a=["onClick"],c={class:"v-modal-container"},u={class:"flex w-full justify-between items-center"},d=(0,i._)("span",{class:"text-gray-600 font-600 !text-1"},"Brentos",-1);const p={__name:"Modal",props:["isActive"],emits:["closeModal"],setup:function(e,t){var n=t.emit,o=function(){n("closeModal",!1)};return function(t,n){var s=(0,i.up)("column"),p=(0,i.up)("font-awesome-icon"),f=(0,i.up)("row"),v=(0,i.Q2)("fade");return(0,i.wg)(),(0,i.iD)(i.HY,null,[((0,i.wg)(),(0,i.j4)(i.lR,{to:"body"},[(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",{onClick:(0,l.iM)(o,["self"]),class:"modal"},[(0,i._)("div",c,[(0,i._)("div",(0,i.dG)(t.$attrs,{class:"modal-content"}),[(0,i.Wm)(f,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(s,{class:"order-3 md:order-2",md:"6",col:"12"},{default:(0,i.w5)((function(){return[(0,i.WI)(t.$slots,"left")]})),_:3}),(0,i.Wm)(s,{class:"order-2 md:order-3",md:"6",col:"12"},{default:(0,i.w5)((function(){return[(0,i._)("div",u,[d,(0,i.Wm)(p,{size:"lg",class:"cursor-pointer text-gray-700",onClick:o,icon:"fa-solid fa-x"})]),(0,i.WI)(t.$slots,"right")]})),_:3})]})),_:3})],16)])],8,a)),[[v,e.isActive,"9999"]])])),(0,i.Wm)(r.Z,{"is-fire":e.isActive,"z-index":"999"},null,8,["is-fire"])],64)}}};var f=["id"],v={class:"product-card-image"},m={class:"product-card-image-cover"},h=["srcset","alt"],w={key:0,class:"product-card-image-overlay peer-hover:opacity-100 peer-hover:visible"},g=["srcset","alt"],y={key:1,class:"product-card-badge"},b=(0,i._)("span",{class:"product-card-badge"}," Sold out ",-1),x={class:"product-card-badge !text-0.8 !bg-red-500 !mt-3.5"},k={key:3,class:"product-card-badge !text-0.8 !bg-red-500"},_={class:"product-card-text"},S={key:0,class:"[&_*]:capitalize [&_*]:!text-1.2 block leading-2"},A={class:"mx-0.5"},C={class:"line-through !text-gray-400"},H={key:1,class:"capitalize !text-1.2 block leading-2"};const W={__name:"ProductCard",props:["link","coverSrc","overlaySrc","coverSrcset","overlaySrcset","isSoldOut","isPeriod","price","title","discount","id"],setup:function(e){var t=function(e){var t=(0,i.Fl)((function(){return Math.ceil(100*(1-e.discount/e.price))})),n=(0,s.iH)(!1);return{discountPercent:t,toggleModal:function(){n.value=!n.value,document.body.style.overflow=n.value?"hidden":"auto"},closeModal:function(e){n.value=e,document.body.style.overflow=n.value?"hidden":"auto"},isActive:n}}(e),n=t.isActive,l=t.closeModal,r=t.toggleModal,a=t.discountPercent;return function(t,c){var u=(0,i.up)("router-link"),d=(0,i.Q2)("lazy");return(0,i.wg)(),(0,i.iD)("div",{id:"product-".concat(e.id),class:"product-card"},[(0,i._)("div",v,[(0,i._)("div",m,[(0,i.wy)((0,i._)("img",{sizes:"(max-width: 359px) calc(100vw - 30px), (max-width: 767px) calc((100vw - 50px) / 2),(max-width: 1023px) calc((100vw - 100px) / 3), (max-width: 1280px) calc((100vw - 120px) / 4), 300px",srcset:e.coverSrcset,src:"",alt:e.title},null,8,h),[[d,e.coverSrc]])]),(0,i.Wm)(u,{class:"stretch-link peer",to:e.link},null,8,["to"]),e.overlaySrc?((0,i.wg)(),(0,i.iD)("div",w,[(0,i.wy)((0,i._)("img",{sizes:"(max-width: 359px) calc(100vw - 30px), (max-width: 767px) calc((100vw - 50px) / 2),(max-width: 1023px) calc((100vw - 100px) / 3), (max-width: 1280px) calc((100vw - 120px) / 4), 300px",srcset:e.overlaySrcset,src:"",alt:e.title},null,8,g),[[d,e.overlaySrc]])])):(0,i.kq)("v-if",!0),(0,i.kq)("      <<<<<<<<<<<< sold out and discount badge start>>>>>>>>>>>>>"),e.isSoldOut&&!e.discount?((0,i.wg)(),(0,i.iD)("span",y," Sold out ")):(0,i.kq)("v-if",!0),e.isSoldOut&&e.discount?((0,i.wg)(),(0,i.iD)(i.HY,{key:2},[b,(0,i._)("span",x," -"+(0,o.zw)((0,s.SU)(a))+"% ",1)],64)):(0,i.kq)("v-if",!0),!e.isSoldOut&&e.discount?((0,i.wg)(),(0,i.iD)("span",k," -"+(0,o.zw)((0,s.SU)(a))+"% ",1)):(0,i.kq)("v-if",!0),(0,i.kq)("      <<<<<<<<<<<< sold out and discount badge start>>>>>>>>>>>>>")]),(0,i._)("div",_,[(0,i.kq)("      <<<<<<<<<<<< price start >>>>>>>>>>>>>>>>"),e.discount?((0,i.wg)(),(0,i.iD)("span",S,[e.isPeriod?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Uk)("from")],64)):(0,i.kq)("v-if",!0),(0,i._)("span",A,"$"+(0,o.zw)(e.price.toFixed(2)),1),(0,i._)("span",C,"$"+(0,o.zw)(e.discount.toFixed(2)),1)])):((0,i.wg)(),(0,i.iD)("span",H,[e.isPeriod?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Uk)("from")],64)):(0,i.kq)("v-if",!0),(0,i.Uk)(" $"+(0,o.zw)(e.price.toFixed(2)),1)])),(0,i.kq)("      <<<<<<<<<<<< price end >>>>>>>>>>>>>>>>"),(0,i.kq)("      <<<<<<<<<<< title start >>>>>>>>>>>>>"),(0,i.Wm)(u,{class:"btn-link !text-1.4 !font-700",to:e.link},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,o.zw)(e.title),1)]})),_:1},8,["to"]),(0,i.kq)("      <<<<<<<<<<< title end >>>>>>>>>>>>>"),(0,i.kq)("        <<<<<<<<<<<< buy now button start >>>>>>>>>>>>>"),e.isSoldOut?(0,i.kq)("v-if",!0):((0,i.wg)(),(0,i.iD)(i.HY,{key:2},[e.isPeriod?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i._)("button",{onClick:c[0]||(c[0]=function(){return(0,s.SU)(r)&&(0,s.SU)(r).apply(void 0,arguments)}),class:"btn w-full mt-1 btn-dark-outline"},"Buy now"),(0,i.Wm)(p,{class:"w-full sm:h-[calc(100vh-7rem)] h-[100vh]",onCloseModal:c[1]||(c[1]=function(e){return(0,s.SU)(l)(e)}),"is-active":(0,s.SU)(n)},{left:(0,i.w5)((function(){return[(0,i.Uk)(" left content here ")]})),right:(0,i.w5)((function(){return[(0,i.Uk)(" right content here ")]})),_:1},8,["is-active"])],64)):((0,i.wg)(),(0,i.j4)(u,{key:1,class:"btn w-full mt-1 btn-dark-outline block",to:{name:"CART"}},{default:(0,i.w5)((function(){return[(0,i.Uk)(" Buy now ")]})),_:1}))],64)),(0,i.kq)("        <<<<<<<<<<<< buy now button end >>>>>>>>>>>>>")])],8,f)}}}},258:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Q});var i=n(252),o={id:"cover",class:"md:block hidden"},s={src:"",srcset:"//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-home-banner5.png?v=1663553818&width=240 240w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-home-banner5.png?v=1663553818&width=360 360w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-home-banner5.png?v=1663553818&width=420 420w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-home-banner5.png?v=1663553818&width=480 480w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-home-banner5.png?v=1663553818&width=640 640w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-home-banner5.png?v=1663553818&width=840 840w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-home-banner5.png?v=1663553818&width=1080 1080w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-home-banner5.png?v=1663553818&width=1280 1280w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-home-banner5.png?v=1663553818&width=1540 1540w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-home-banner5.png?v=1663553818&width=1860 1860w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-home-banner5.png?v=1663553818&width=2100 2100w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-home-banner5.png?v=1663553818&width=2460 2460w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-home-banner5.png?v=1663553818&width=2820 2820w",alt:""},l={id:"cover",class:"block md:hidden"},r={src:"",srcset:"https://cdn.shopify.com/s/files/1/0272/9548/1943/files/mobile-hero3.png?v=1663552828&width=240 240w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/mobile-hero3.png?v=1663552828&width=360 360w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/mobile-hero3.png?v=1663552828&width=420 420w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/mobile-hero3.png?v=1663552828&width=480 480w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/mobile-hero3.png?v=1663552828&width=640 640w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/mobile-hero3.png?v=1663552828&width=840 840w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/mobile-hero3.png?v=1663552828&width=1080 1080w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/mobile-hero3.png?v=1663552828&width=1280 1280w",alt:""};const a={name:"brandSection"};var c=n(744);const u=(0,c.Z)(a,[["render",function(e,t,n,a,c,u){var d=(0,i.up)("container-full"),p=(0,i.Q2)("lazy");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("section",o,[(0,i.Wm)(d,null,{default:(0,i.w5)((function(){return[(0,i.wy)((0,i._)("img",s,null,512),[[p,"https://cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-home-banner5.png?v=1663553818&width=480"]])]})),_:1})]),(0,i._)("section",l,[(0,i.Wm)(d,null,{default:(0,i.w5)((function(){return[(0,i.wy)((0,i._)("img",r,null,512),[[p,"https://cdn.shopify.com/s/files/1/0272/9548/1943/files/mobile-hero3.png?v=1663552828&width=480"]])]})),_:1})])],64)}]]);var d={class:"my-4",id:"intro"},p=(0,i._)("h6",{class:"uppercase font-500 text-center"},"WELCOME TO AUSTRALIA",-1),f=(0,i._)("h3",{class:"text-center my-1"}," Australian art and quality summer goods by illustrator and author Brentos ",-1),v=(0,i._)("span",{class:"text-center span-row font-500"}," Art inspired by the Australian bush and long summers at the beach. ",-1);const m={name:"Intro"},h=(0,c.Z)(m,[["render",function(e,t,n,o,s,l){var r=(0,i.up)("column"),a=(0,i.up)("row"),c=(0,i.up)("container");return(0,i.wg)(),(0,i.iD)("section",d,[(0,i.Wm)(c,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(a,{class:"justify-center"},{default:(0,i.w5)((function(){return[(0,i.Wm)(r,{col:"12",md:"9"},{default:(0,i.w5)((function(){return[p,f,v]})),_:1})]})),_:1})]})),_:1})])}]]);var w=n(262),g=n(174),y=n(963);const b={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0},x={itemsToShow:{default:b.itemsToShow,type:Number},itemsToScroll:{default:b.itemsToScroll,type:Number},wrapAround:{default:b.wrapAround,type:Boolean},snapAlign:{default:b.snapAlign,validator:e=>["start","end","center","center-even","center-odd"].includes(e)},transition:{default:b.transition,type:Number},breakpoints:{default:b.breakpoints,type:Object},autoplay:{default:b.autoplay,type:Number},pauseAutoplayOnHover:{default:b.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:b.mouseDrag,type:Boolean},touchDrag:{default:b.touchDrag,type:Boolean},dir:{default:b.dir,validator:e=>["rtl","ltr"].includes(e)},settings:{default:()=>({}),type:Object}};function k({val:e,max:t,min:n}){return t<n?e:Math.min(Math.max(e,n),t)}function _({val:e,max:t,min:n=0}){return e>t?_({val:e-(t+1),max:t,min:n}):e<n?_({val:e+(t+1),max:t,min:n}):e}var S=(0,i.aZ)({name:"ARIA",setup(){const e=(0,i.f3)("currentSlide",(0,w.iH)(0)),t=(0,i.f3)("slidesCount",(0,w.iH)(0));return()=>(0,i.h)("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},`Item ${e.value+1} of ${t.value}`)}}),A=(0,i.aZ)({name:"Carousel",props:x,setup(e,{slots:t,emit:n,expose:o}){var s;const l=(0,w.iH)(null),r=(0,w.iH)([]),a=(0,w.iH)(0),c=(0,w.iH)(0);let u=(0,w.iH)({}),d=Object.assign({},b);const p=(0,w.qj)(Object.assign({},d)),f=(0,w.iH)(null!==(s=e.modelValue)&&void 0!==s?s:0),v=(0,w.iH)(0),m=(0,w.iH)(0),h=(0,w.iH)(0),g=(0,w.iH)(0);let A,C;function H(){const t=Object.assign(Object.assign({},e),e.settings);u=(0,w.iH)(Object.assign({},t.breakpoints)),d=Object.assign(Object.assign({},t),{settings:void 0,breakpoints:void 0}),j(d)}function W(){const e=Object.keys(u.value).map((e=>Number(e))).sort(((e,t)=>+t-+e));let t=Object.assign({},d);e.some((e=>!!window.matchMedia(`(min-width: ${e}px)`).matches&&(t=Object.assign(Object.assign({},t),u.value[e]),!0))),j(t)}function j(e){Object.entries(e).forEach((([e,t])=>p[e]=t))}(0,i.JJ)("config",p),(0,i.JJ)("slidesCount",c),(0,i.JJ)("currentSlide",f),(0,i.JJ)("maxSlide",h),(0,i.JJ)("minSlide",g),(0,i.JJ)("slideWidth",a);const O=function(e,t){let n;return function(...i){n&&clearTimeout(n),n=setTimeout((()=>{e(...i),n=null}),t)}}((()=>{Object.keys(u.value).length&&(W(),M()),T()}),16);function T(){if(!l.value)return;const e=l.value.getBoundingClientRect();a.value=e.width/p.itemsToShow}function M(){c.value<=0||(m.value=Math.ceil((c.value-1)/2),h.value=function({config:e,slidesCount:t}){const{snapAlign:n,wrapAround:i,itemsToShow:o=1}=e;if(i)return Math.max(t-1,0);let s;switch(n){case"start":s=t-o;break;case"end":s=t-1;break;case"center":case"center-odd":s=t-Math.ceil((o-.5)/2);break;case"center-even":s=t-Math.ceil(o/2);break;default:s=0}return Math.max(s,0)}({config:p,slidesCount:c.value}),g.value=function({config:e,slidesCount:t}){const{wrapAround:n,snapAlign:i,itemsToShow:o=1}=e;let s=0;if(n||o>t)return s;switch(i){case"start":default:s=0;break;case"end":s=o-1;break;case"center":case"center-odd":s=Math.floor((o-1)/2);break;case"center-even":s=Math.floor((o-2)/2)}return s}({config:p,slidesCount:c.value}),p.wrapAround||(f.value=k({val:f.value,max:h.value,min:g.value})))}(0,i.bv)((()=>{Object.keys(u.value).length&&W(),(0,i.Y3)((()=>{M(),T(),n("init")})),$(),window.addEventListener("resize",O,{passive:!0})})),(0,i.Ah)((()=>{C&&clearTimeout(C),A&&clearInterval(A),window.removeEventListener("resize",O,{passive:!0})}));let D=!1;const z={x:0,y:0},U={x:0,y:0},q=(0,w.qj)({x:0,y:0}),I=(0,w.iH)(!1),L=()=>{I.value=!0},J=()=>{I.value=!1};function Y(e){["INPUT","TEXTAREA"].includes(e.target.tagName)||(D="touchstart"===e.type,!D&&0!==e.button||F.value||(D||e.preventDefault(),z.x=D?e.touches[0].clientX:e.clientX,z.y=D?e.touches[0].clientY:e.clientY,document.addEventListener(D?"touchmove":"mousemove",B,!0),document.addEventListener(D?"touchend":"mouseup",P,!0)))}const B=function(e,t){let n;return function(...i){const o=this;n||(e.apply(o,i),n=!0,setTimeout((()=>n=!1),t))}}((e=>{U.x=D?e.touches[0].clientX:e.clientX,U.y=D?e.touches[0].clientY:e.clientY;const t=U.x-z.x,n=U.y-z.y;q.y=n,q.x=t}),16);function P(){const e="rtl"===p.dir?-1:1,t=.4*Math.sign(q.x),n=Math.round(q.x/a.value+t)*e;if(n&&!D){const e=t=>{t.stopPropagation(),window.removeEventListener("click",e,!0)};window.addEventListener("click",e,!0)}N(f.value-n),q.x=0,q.y=0,document.removeEventListener(D?"touchmove":"mousemove",B,!0),document.removeEventListener(D?"touchend":"mouseup",P,!0)}function $(){!p.autoplay||p.autoplay<=0||(A=setInterval((()=>{p.pauseAutoplayOnHover&&I.value||Z()}),p.autoplay))}function E(){A&&(clearInterval(A),A=null),$()}const F=(0,w.iH)(!1);function N(e){const t=p.wrapAround?e:k({val:e,max:h.value,min:g.value});f.value===t||F.value||(n("slide-start",{slidingToIndex:e,currentSlideIndex:f.value,prevSlideIndex:v.value,slidesCount:c.value}),F.value=!0,v.value=f.value,f.value=t,C=setTimeout((()=>{if(p.wrapAround){const i=_({val:t,max:h.value,min:0});i!==f.value&&(f.value=i,n("loop",{currentSlideIndex:f.value,slidingToIndex:e}))}n("update:modelValue",f.value),n("slide-end",{currentSlideIndex:f.value,prevSlideIndex:v.value,slidesCount:c.value}),F.value=!1,E()}),p.transition))}function Z(){N(f.value+p.itemsToScroll)}function R(){N(f.value-p.itemsToScroll)}const Q={slideTo:N,next:Z,prev:R};(0,i.JJ)("nav",Q),(0,i.JJ)("isSliding",F);const V=(0,i.Fl)((()=>function({config:e,currentSlide:t,slidesCount:n}){const{snapAlign:i,wrapAround:o,itemsToShow:s=1}=e;let l=t;switch(i){case"center":case"center-odd":l-=(s-1)/2;break;case"center-even":l-=(s-2)/2;break;case"end":l-=s-1}return o?l:k({val:l,max:n-s,min:0})}({config:p,currentSlide:f.value,slidesCount:c.value})));(0,i.JJ)("slidesToScroll",V);const X=(0,i.Fl)((()=>{const e="rtl"===p.dir?-1:1,t=V.value*a.value*e;return{transform:`translateX(${q.x-t}px)`,transition:`${F.value?p.transition:0}ms`,margin:p.wrapAround?`0 -${c.value*a.value}px`:"",width:"100%"}}));function G(){H(),W(),M(),T(),E()}Object.keys(x).forEach((t=>{["modelValue"].includes(t)||(0,i.YP)((()=>e[t]),G)})),(0,i.YP)((()=>e.modelValue),(e=>{e!==f.value&&N(Number(e))})),(0,i.YP)(c,M),H();const K={config:p,slidesCount:c,slideWidth:a,next:Z,prev:R,slideTo:N,currentSlide:f,maxSlide:h,minSlide:g,middleSlide:m};o({updateBreakpointsConfigs:W,updateSlidesData:M,updateSlideWidth:T,initDefaultConfigs:H,restartCarousel:G,slideTo:N,next:Z,prev:R,nav:Q,data:K});const ee=t.default||t.slides,te=t.addons,ne=(0,w.qj)(K);return()=>{const e=function(e){var t,n,i,o;return e?"v-if"===(null===(t=e[0])||void 0===t?void 0:t.children)||"CarouselSlide"===(null===(i=null===(n=e[0])||void 0===n?void 0:n.type)||void 0===i?void 0:i.name)?e.filter((e=>{var t;return"CarouselSlide"===(null===(t=e.type)||void 0===t?void 0:t.name)})):(null===(o=e[0])||void 0===o?void 0:o.children)||[]:[]}(null==ee?void 0:ee(ne)),t=(null==te?void 0:te(ne))||[];e.forEach(((e,t)=>e.props.index=t));let n=e;if(p.wrapAround){const t=e.map(((t,n)=>(0,i.Ho)(t,{index:-e.length+n,isClone:!0,key:`clone-before-${n}`}))),o=e.map(((t,n)=>(0,i.Ho)(t,{index:e.length+n,isClone:!0,key:`clone-after-${n}`})));n=[...t,...e,...o]}r.value=e,c.value=Math.max(e.length,1);const o=(0,i.h)("ol",{class:"carousel__track",style:X.value,onMousedown:p.mouseDrag?(0,y.iM)(Y,["capture"]):null,onTouchstart:p.touchDrag?(0,y.iM)(Y,["capture"]):null},n),s=(0,i.h)("div",{class:"carousel__viewport"},o);return(0,i.h)("section",{ref:l,class:{carousel:!0,"carousel--rtl":"rtl"===p.dir},dir:p.dir,"aria-label":"Gallery",tabindex:"0",onMouseenter:L,onMouseleave:J},[s,t,(0,i.h)(S)])}}});const C={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},H=e=>{const t=e.name;if(!t||"string"!=typeof t)return;const n=C[t],o=(0,i.h)("path",{d:n}),s=e.title||t,l=(0,i.h)("title",s);return(0,i.h)("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:s},[l,o])};H.props={name:String,title:String};const W=()=>{const e=(0,i.f3)("maxSlide",(0,w.iH)(1)),t=(0,i.f3)("minSlide",(0,w.iH)(1)),n=(0,i.f3)("currentSlide",(0,w.iH)(1)),o=(0,i.f3)("nav",{}),s=t=>_({val:n.value,max:e.value,min:0})===t,l=[];for(let n=t.value;n<e.value+1;n++){const e=(0,i.h)("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":s(n)},"aria-label":`Navigate to slide ${n+1}`,onClick:()=>o.slideTo(n)}),t=(0,i.h)("li",{class:"carousel__pagination-item",key:n},e);l.push(t)}return(0,i.h)("ol",{class:"carousel__pagination"},l)};var j=(0,i.aZ)({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:t}){const n=(0,i.f3)("config",(0,w.qj)(Object.assign({},b))),o=(0,i.f3)("currentSlide",(0,w.iH)(0)),s=(0,i.f3)("slidesToScroll",(0,w.iH)(0)),l=(0,i.f3)("slideWidth",(0,w.iH)(0)),r=(0,i.f3)("isSliding",(0,w.iH)(!1)),a=(0,i.Fl)((()=>({width:l.value?`${l.value}px`:"100%"}))),c=()=>{const t=Math.floor(s.value),i=Math.ceil(s.value+n.itemsToShow-1);return e.index>=t&&e.index<=i};return()=>{var n;return(0,i.h)("li",{style:a.value,class:{carousel__slide:!0,"carousel_slide--clone":e.isClone,"carousel__slide--visible":c(),"carousel__slide--active":e.index===o.value,"carousel__slide--prev":e.index===o.value-1,"carousel__slide--next":e.index===o.value+1,"carousel__slide--sliding":r.value},"aria-hidden":!c()},null===(n=t.default)||void 0===n?void 0:n.call(t))}}}),O=n(761);var T={id:"shop",class:"my-4"},M=(0,i._)("h4",{class:"text-left font-600 mb-1 md:pl-1 pl-0"},"Shop Brentos",-1),D={class:"flex gap-1 justify-center items-center my-2"};const z={__name:"Shop",setup:function(e){var t=function(){var e=(0,O.d)(),t=(0,i.Fl)((function(){return e.getRandomCollection(8)})),n=(0,i.Fl)((function(){return e.getFetchFlag})),o=(0,w.iH)({itemsToShow:1,snapAlign:"center"}),s=(0,w.iH)(null);return{randomCollection:t,settings:o,carousel:s,next:function(){s.value.next(),s.value.updateSlideWidth()},prev:function(){s.value.prev(),s.value.updateSlideWidth()},breakpoints:{768:{itemsToShow:3,snapAlign:"center"},500:{itemsToShow:2,snapAlign:"center"}},fetchFlag:n}}(),n=t.breakpoints,o=t.prev,s=t.next,l=t.carousel,r=t.settings,a=t.randomCollection,c=t.fetchFlag;return function(e,t){var u=(0,i.up)("font-awesome-icon"),d=(0,i.up)("column"),p=(0,i.up)("row"),f=(0,i.up)("container");return(0,i.wg)(),(0,i.iD)("section",T,[(0,i.Wm)(f,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(p,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(d,{col:"12"},{default:(0,i.w5)((function(){return[M,(0,w.SU)(c)?((0,i.wg)(),(0,i.j4)((0,w.SU)(A),{key:0,ref_key:"carousel",ref:l,breakpoints:(0,w.SU)(n),settings:(0,w.SU)(r),"wrap-around":!0},{addons:(0,i.w5)((function(){return[(0,i._)("div",D,[(0,i.Wm)(u,{size:"lg",class:"cursor-pointer",icon:"fa-solid fa-angle-left",onClick:(0,w.SU)(o)},null,8,["onClick"]),(0,i.Wm)((0,w.SU)(W)),(0,i.Wm)(u,{size:"lg",class:"cursor-pointer",icon:"fa-solid fa-angle-right",onClick:(0,w.SU)(s)},null,8,["onClick"])])]})),default:(0,i.w5)((function(){return[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,w.SU)(a),(function(e,t){return(0,i.wg)(),(0,i.j4)((0,w.SU)(j),{key:t},{default:(0,i.w5)((function(){return[(0,i.Wm)(g.Z,{srcset:e.srcset,src:e.src,link:e.link,text:e.text,class:"mx-1"},null,8,["srcset","src","link","text"])]})),_:2},1024)})),128))]})),_:1},8,["breakpoints","settings"])):(0,i.kq)("v-if",!0)]})),_:1})]})),_:1})]})),_:1})])}}};var U=n(163),q=n(526),I={id:"popular"},L=(0,i._)("h4",{class:"text-left font-600 mb-1 md:pl-1 pl-0"},"Popular Now",-1),J={class:"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1.3"};const Y={__name:"Popular",setup:function(e){var t=(0,q.a)(),n=(0,i.Fl)((function(){return t.getPopularProducts}));return function(e,t){var o=(0,i.up)("column"),s=(0,i.up)("row"),l=(0,i.up)("container");return(0,i.wg)(),(0,i.iD)("section",I,[(0,i.Wm)(l,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(s,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(o,{col:"12"},{default:(0,i.w5)((function(){return[L,(0,i._)("div",J,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,w.SU)(n),(function(e){return(0,i.wg)(),(0,i.j4)(U.Z,{class:"mb-1",price:e.price,title:e.title,link:e.link,discount:e.discount,"cover-src":e.coverSrc,"cover-srcset":e.coverSrcset,"overlay-src":e.overlaySrc,"overlay-srcset":e.overlaySrcset,"is-period":e.isPeriod,id:e.id,"is-sold-out":e.isSoldOut},null,8,["price","title","link","discount","cover-src","cover-srcset","overlay-src","overlay-srcset","is-period","id","is-sold-out"])})),256))])]})),_:1})]})),_:1})]})),_:1})])}}};var B={id:"story",class:"bg-dark my-2 sm:h-[90vh] sm:overflow-hidden"},P={class:"p-3"},$=(0,i._)("h6",{class:"text-light"}," Nice to meet you. ",-1),E=(0,i._)("h1",{class:"font-700 sm:text-3 text-light !pl-0"}," Australian artist Brentos ",-1),F=(0,i._)("p",{class:"sm:text-1 leading-1.6 text-light"}," Brentos is a visual artist and author based in Sydney Australia. Inspired by the Australian bush and long, salty summers, Brentos' work hums with a signature pastel colour palette and cheeky wildlife characters with an aim to shine a spotlight on how awesome Australia's wildlife is. He runs the Brentos art brand and line of merch with his partner Tash and studio dog Wally. ",-1),N={class:"object-cover w-full h-full",alt:"",srcset:"//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-coopers-painting.jpg?v=1663897698&width=240 240w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-coopers-painting.jpg?v=1663897698&width=360 360w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-coopers-painting.jpg?v=1663897698&width=420 420w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-coopers-painting.jpg?v=1663897698&width=480 480w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-coopers-painting.jpg?v=1663897698&width=640 640w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-coopers-painting.jpg?v=1663897698&width=840 840w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-coopers-painting.jpg?v=1663897698&width=1080 1080w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-coopers-painting.jpg?v=1663897698&width=1280 1280w",sizes:"632px"};const Z={name:"Strory"},R=(0,c.Z)(Z,[["render",function(e,t,n,o,s,l){var r=(0,i.up)("router-link"),a=(0,i.up)("column"),c=(0,i.up)("row"),u=(0,i.up)("container-full"),d=(0,i.Q2)("lazy");return(0,i.wg)(),(0,i.iD)("section",B,[(0,i.Wm)(u,null,{default:(0,i.w5)((function(){return[(0,i.Wm)(c,{class:"!p-0 !m-0"},{default:(0,i.w5)((function(){return[(0,i.Wm)(a,{class:"order-3 sm:order-2",col:"12",sm:"6"},{default:(0,i.w5)((function(){return[(0,i._)("div",P,[$,E,F,(0,i.Wm)(r,{class:"btn btn-dark-outline capitalize inline-block mt-2 !px-2",to:{name:"HOME"}},{default:(0,i.w5)((function(){return[(0,i.Uk)(" our story ")]})),_:1})])]})),_:1}),(0,i.Wm)(a,{class:"!p-0 !m-0 order-2 sm:order-3",col:"12",sm:"6"},{default:(0,i.w5)((function(){return[(0,i.wy)((0,i._)("img",N,null,512),[[d,"//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-coopers-painting.jpg?v=1663897698&width=480"]])]})),_:1})]})),_:1})]})),_:1})])}]]),Q={__name:"Home",setup:function(e){return function(e,t){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(u),(0,i.Wm)(h),(0,i.Wm)(z),(0,i.Wm)(Y),(0,i.Wm)(R)],64)}}}}}]);