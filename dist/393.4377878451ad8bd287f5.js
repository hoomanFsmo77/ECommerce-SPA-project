"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[393],{7688:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(2201),n=i(6252),l=i(2262),r=i(3526);const o=function(e){var t=(0,r.a)(),i=(0,n.Fl)((function(){return t.getPopularProduct})),o=(0,n.Fl)((function(){return t.getPopularProductFetchFlag})),a=(0,n.Fl)((function(){return t.getProductData})),c=(0,n.Fl)((function(){return t.getProductDetailDataFlag})),u=(0,s.yj)(),d=(0,l.iH)(u.query.id),f=(0,l.iH)(1),m=(0,l.iH)(0),p=(0,l.iH)(0),h=(0,l.iH)(0),g=(0,n.Fl)((function(){var e;return a.value.option.sizes[m.value].frame?(a.value.option.sizes[m.value].price+a.value.option.sizes[m.value].frame.price).toFixed(2):null!==(e=a.value.option.sizes[m.value].price.toFixed(2))&&void 0!==e?e:a.value.price})),w=(0,n.Fl)((function(){return a.value.option.sizes[m.value].price.toFixed(2)})),v=(0,n.Fl)((function(){return{productId:d.value,category:u.hash.slice(1),quantity:f.value,priceDetail:{size:a.value.option.sizes[m.value].size,frame:a.value.hasFrame?0===h.value?"No frame":"Recycled Timber Frame":null,price:0===h.value?w.value:g.value,family:a.value.hasFamily?a.value.option.family[p.value].item:null},discount:a.value.discount||0}}));(0,n.bv)((function(){t.fetchPopularProduct(),t.fetchProductDetail(d.value)}));return{productData:a,productId:d,quantity:f,changeSize:function(e,t){e.available&&(v.value.priceDetail.size=e.size,m.value=t,h.value=0)},increment:function(){f.value++,f.value>a.value.available&&(f.value=a.value.available)},decrement:function(){f.value--,f.value<1&&(f.value=1)},addToCart:function(){console.log(v.value)},route:u,popularProducts:i,fetchFlag:o,changeFrame:function(t){e.value.slideTo(t),h.value=t},sizeIndex:m,totalPriceWithFrame:g,whichFrame:h,totalPriceWithOutFrame:w,productDetailFlag:c,changeFamily:function(t,i){e.value.slideTo(t),p.value=i},familyIndex:p}}},2698:(e,t,i)=>{i.d(t,{Z:()=>u});var s=i(6252),n=i(3577),l={class:"my-1"},r={class:"flex gap-1 flex-wrap items-center"},o={key:1,class:"font-600 text-[0.85rem] capitalize"},a={key:0,class:"text-[0.85rem] font-600"};const c={name:"BreadCrumb",props:["pages"]};const u=(0,i(3744).Z)(c,[["render",function(e,t,i,c,u,d){var f=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("ul",r,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.pages,(function(e,t){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("li",null,[e.link?((0,s.wg)(),(0,s.j4)(f,{key:0,class:"font-600 text-[0.85rem] capitalize",to:e.link},{default:(0,s.w5)((function(){return[(0,s.Uk)((0,n.zw)(e.name),1)]})),_:2},1032,["to"])):((0,s.wg)(),(0,s.iD)("span",o,(0,n.zw)(e.name),1))]),(0,s._)("li",null,[t!==i.pages.length-1?((0,s.wg)(),(0,s.iD)("span",a,"/")):(0,s.kq)("v-if",!0)])],64)})),256))])])}]])},1663:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(6252),n=i(2262),l=i(4071),r={key:0,class:"w-full h-[250px] bg-light/20 absolute top-0 left-0 flex justify-center items-end"};const o={__name:"preLoader",props:["show"],setup:function(e){return function(t,i){return e.show?((0,s.wg)(),(0,s.iD)("div",r,[(0,s.Wm)((0,n.SU)(l.t),{class:"z-50 relative","animation-duration":1e3,"dot-size":50,"dots-num":3,color:"#333"})])):(0,s.kq)("v-if",!0)}}}},1504:(e,t,i)=>{i.d(t,{Z:()=>m});var s=i(6252),n=i(2262),l=i(9963),r={key:0,id:"zoom-area",class:"fixed overflow-scroll z-[9999] top-0 left-0 w-[100vw] bg-light h-[100vh]"},o=["src"],a={class:"w-3 h-3 flex justify-center items-center bg-light rounded-full fixed right-0 top-0 m-2"};const c={__name:"ImageZoomer",props:["src","isActive"],emits:["close"],setup:function(e,t){var i=t.emit,n=function(){i("close",!1),document.body.style.overflowY="scroll"};return function(t,i){var c=(0,s.up)("font-awesome-icon");return(0,s.wg)(),(0,s.j4)(s.lR,{to:"body"},[(0,s.Wm)(l.uT,{name:"fade"},{default:(0,s.w5)((function(){return[e.isActive?((0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("img",{onLoad:i[0]||(i[0]=function(e){return t=e,i=getComputedStyle(t.target),t.target.style.width=i.width,t.target.style.height=i.height,void(document.body.style.overflowY="hidden");var t,i}),src:e.src,class:"relative",alt:""},null,40,o),(0,s._)("div",a,[(0,s.Wm)(c,{onClick:n,class:"transition hover:!text-dark text-1.5 !text-dark/70 cursor-pointer",icon:"fa-solid fa-magnifying-glass-minus"})])])):(0,s.kq)("v-if",!0)]})),_:1})])}}};const u=(0,i(3744).Z)(c,[["__scopeId","data-v-682d0c65"]]);var d={class:"relative mr-1"},f=["srcset"];const m={__name:"GalleryItem",props:["src","srcset","zoom"],setup:function(e){var t=(0,n.iH)(!1),i=(0,n.iH)(!0),l=function(){t.value=!1},r=function(){i.value=!1};return function(n,o){var a=(0,s.up)("Skeletor"),c=(0,s.up)("font-awesome-icon"),m=(0,s.Q2)("lazy");return(0,s.wg)(),(0,s.iD)("div",d,[i.value?((0,s.wg)(),(0,s.j4)(a,{key:0,class:"rounded-8 !absolute z-[9999] top-0 left-0",width:"100%",shimmer:!0,height:"800"})):(0,s.kq)("v-if",!0),(0,s.Wm)(c,{onClick:o[0]||(o[0]=function(e){return t.value=!0}),class:"absolute top-0 transition hover:!text-dark right-0 m-1 text-1.5 !text-dark/70 cursor-pointer z-50",icon:"fa-solid fa-magnifying-glass-plus "}),(0,s.wy)((0,s._)("img",{onLoad:r,class:"cursor-grab rounded-8",srcset:e.srcset,src:"",alt:"",sizes:"(max-width: 767px) calc(100vw - 20px), (max-width: 1360px) 50vw, 620px"},null,40,f),[[m,e.src]]),(0,s.Wm)(u,{onClose:l,"is-active":t.value,src:e.zoom},null,8,["is-active","src"])])}}}},2558:(e,t,i)=>{i.r(t),i.d(t,{default:()=>xe});var s=i(6252),n=i(2262),l=i(3577),r=i(2698),o=i(7410),a=i(6778),c=i(1504),u=i(7688),d=i(1047),f={class:"first:pt-1 pb-1.5 !text-1 font-500 px-2"};const m={__name:"FaqItem",props:["title","description"],setup:function(e){var t=(0,n.iH)(!1);return function(i,r){var o=(0,s.up)("font-awesome-icon"),a=(0,s.Q2)("collapse");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",{class:(0,l.C_)([{"bg-gray-100/60":(0,n.SU)(t)},"title border-b-[1px] border-gray-300/80 font-700"])},[(0,s._)("button",{onClick:r[0]||(r[0]=function(e){return(0,n.dq)(t)?t.value=!(0,n.SU)(t):t=!(0,n.SU)(t)}),class:"cursor-pointer px-1 py-1.5 hover:bg-gray-100/60 transition-all text-0.9 text-dark w-full h-full text-left"},[(0,s.Wm)(o,{class:"mr-0.5",icon:(0,n.SU)(t)?"fa-minus":"fa-plus"},null,8,["icon"]),(0,s.Uk)(" "+(0,l.zw)(e.title),1)])],2),(0,s.wy)(((0,s.wg)(),(0,s.iD)("div",{class:(0,l.C_)([{"border-b-[1px] bg-gray-100/60 border-gray-300/80":(0,n.SU)(t)},"description v-collapse"])},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.description,(function(e){return(0,s.wg)(),(0,s.iD)("p",f,(0,l.zw)(e),1)})),256))],2)),[[a,(0,n.SU)(t)]])])}}};var p=i(1663),h=["id"],g={class:"sticky top-1.5"},w={class:"flex gap-1 justify-center items-center my-1"},v={class:"sm:pl-1"},y={class:"font-600"},b={key:0,class:"flex gap-2"},_={class:"font-600 my-1"},x={class:"font-600 my-1 line-through text-gray-500"},k={key:1,class:"font-600 my-1"},S=["innerHTML"],U={key:0,class:"mt-4"},z=(0,s._)("h5",{class:"font-600 mb-1"},"Choose Your Family Members",-1),W=["disabled","onClick"],j={key:1,class:"mt-4"},F=(0,s._)("h5",{class:"font-600 mb-1"},"Size",-1),D=["onClick"],C={key:2,class:"my-2"},q=(0,s._)("h5",{class:"font-600 mb-1"},"Frame",-1),H=["disabled"],I=["disabled"],P={class:"mb-1"},O={key:0,class:"flex items-center gap-1"},T={class:"font-600 my-2"},Y={class:"line-through"},A=(0,s._)("br",null,null,-1),L={class:"text-gray-500"},Z={key:1,class:"font-600 my-2"},$=(0,s._)("div",{class:"divider"},null,-1),M={class:"flex gap-1 items-center"},K={key:0},B={class:"mx-1 px-0.5 text-1.5"},N=["disabled"],E={class:"mt-4"},Q=(0,s._)("h5",{class:"font-600 mb-1"},"Share",-1),R={class:"flex gap-2 item-center"},G=["href"],J=["href"],V=["href"],X=(0,s._)("div",{class:"sm:px-2"},[(0,s._)("h1",{class:"text-center font-700 mb-1"},"Museum-quality prints "),(0,s._)("p",{class:"text-center !text-1"}," We make our prints right here in our studio on stunning, ultra-thick, museum-grade, textured cotton paper using the highest quality pigment-based ink. ")],-1),ee={alt:"",srcset:"//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints2.jpg?v=1663739542&width=240 240w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints2.jpg?v=1663739542&width=360 360w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints2.jpg?v=1663739542&width=420 420w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints2.jpg?v=1663739542&width=480 480w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints2.jpg?v=1663739542&width=640 640w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints2.jpg?v=1663739542&width=840 840w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints2.jpg?v=1663739542&width=1080 1080w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints2.jpg?v=1663739542&width=1280 1280w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints2.jpg?v=1663739542&width=1540 1540w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints2.jpg?v=1663739542&width=1860 1860w",sizes:"592px"},te={alt:"",srcset:"//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints4.jpg?v=1663739487&width=240 240w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints4.jpg?v=1663739487&width=360 360w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints4.jpg?v=1663739487&width=420 420w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints4.jpg?v=1663739487&width=480 480w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints4.jpg?v=1663739487&width=640 640w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints4.jpg?v=1663739487&width=840 840w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints4.jpg?v=1663739487&width=1080 1080w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints4.jpg?v=1663739487&width=1280 1280w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints4.jpg?v=1663739487&width=1540 1540w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints4.jpg?v=1663739487&width=1860 1860w",sizes:"592px"},ie=(0,s._)("div",{class:"sm:px-2"},[(0,s._)("h1",{class:"text-center font-700 mb-1"},"Signed by the artist"),(0,s._)("p",{class:"text-center !text-1"}," Once we've printed your art, it's then hand-signed, titled, dated and given the signature stamp of authenticity by Brentos. ")],-1),se=(0,s._)("div",{class:"sm:px-2"},[(0,s._)("h1",{class:"text-center font-700 mb-1"},"Frame it in a stunning recycled timber frame. "),(0,s._)("p",{class:"text-center !text-1"}," Our frames are hand-made in Australia from reclaimed hardwood, each one showing beautiful markings and unique character from it's previous life as a railroad pylon, farm fence or floorboard. ")],-1),ne={alt:"",srcset:"//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-frame1.jpg?v=1663740555&width=240 240w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-frame1.jpg?v=1663740555&width=360 360w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-frame1.jpg?v=1663740555&width=420 420w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-frame1.jpg?v=1663740555&width=480 480w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-frame1.jpg?v=1663740555&width=640 640w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-frame1.jpg?v=1663740555&width=840 840w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-frame1.jpg?v=1663740555&width=1080 1080w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-frame1.jpg?v=1663740555&width=1280 1280w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-frame1.jpg?v=1663740555&width=1540 1540w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-frame1.jpg?v=1663740555&width=1860 1860w",sizes:"592px"},le={class:"flex flex-col gap-2"},re=(0,s._)("div",null,[(0,s._)("h6",{class:"font-700 text-center"},"Proudly Australian Made"),(0,s._)("p",{class:"text-center my-0.5 text-gray-500"},"Made right here in our small art studio.")],-1),oe={class:"flex flex-col gap-2"},ae=(0,s._)("div",null,[(0,s._)("h6",{class:"font-700 text-center"},"Character-Filled Frames"),(0,s._)("p",{class:"text-center my-0.5 text-gray-500"},"Made locally from sustainable recycled timber.")],-1),ce={class:"flex flex-col gap-2"},ue=(0,s._)("div",null,[(0,s._)("h6",{class:"font-700 text-center"},"Supporting Wildlife"),(0,s._)("p",{class:"text-center my-0.5 text-gray-500"},"Over $45,000 raised for wildlife conservation.")],-1),de={class:"flex flex-col gap-2"},fe=(0,s._)("div",null,[(0,s._)("h6",{class:"font-700 text-center"},"Intrinsic quality"),(0,s._)("p",{class:"text-center my-0.5 text-gray-500"},"Giclée prints made using the finest papers and inks.")],-1),me={id:"support",class:"bg-dark sm:h-[70vh] overflow-hidden my-3"},pe={srcset:"//cdn.shopify.com/s/files/1/0272/9548/1943/files/6b.jpg?v=1663388526&width=240 240w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/6b.jpg?v=1663388526&width=360 360w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/6b.jpg?v=1663388526&width=420 420w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/6b.jpg?v=1663388526&width=480 480w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/6b.jpg?v=1663388526&width=640 640w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/6b.jpg?v=1663388526&width=840 840w",sizes:"632px",class:"object-cover h-full w-full",src:"",alt:""},he=(0,s._)("div",{class:"p-2"},[(0,s._)("h1",{class:"text-light text-center font-600 mt-1"},"Thanks for Supporting Local "),(0,s._)("p",{class:"text-light font-500 leading-1.8 text-center mt-1"}," Hey, I'm Brent. I'm an illustrator from Sydney and I run the Brentos art studio and merch range with my partner Tash. My work is inspired by the Aussie bush and long, salty summers at the beach with a mission to share a gentle message of conservation for our wildlife. By purchasing our art you're supporting local artists and small businesses in Australia. Cheers! "),(0,s._)("p",{class:"text-center"},"💚")],-1),ge={id:"faq",class:"my-3"},we={class:"border-[1px] border-gray-300/80 rounded-8 overflow-hidden"},ve={id:"suggestion"},ye=(0,s._)("h4",{class:"text-left font-600 mb-1 md:pl-1 pl-0"},"You may also like",-1),be={key:0,class:"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1.3"},_e={key:1,class:"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1.3"};const xe={__name:"Art",props:["name"],setup:function(e){var t=[{title:"What are the shipping costs?",description:["We offer free shipping in Australia for orders over $70. For orders under $70, a $10 shipping fee is charged.","For our overseas friends, we charge $30 shipping for most zones and products."]},{title:"How long does shipping take?",description:["When you order one of our art products you'll typically receive it within 7 days within Australia and within 3 weeks internationally."]},{title:"Why should I buy from you?",description:["When you buy any of our art products you're supporting local artists, wildlife conservation efforts, sustainable manufacturing and a small, creative Aussie business committed to being Australian made. We use on the finest materials when creating our products and our art prints are hand-signed for authenticity."]}],i=(0,a.Z)(),f=i.next,xe=i.prev,ke=i.settings,Se=i.carousel,Ue=(0,u.Z)(Se),ze=Ue.addToCart,We=Ue.decrement,je=Ue.increment,Fe=Ue.changeSize,De=Ue.quantity,Ce=Ue.productId,qe=Ue.productData,He=Ue.route,Ie=Ue.fetchFlag,Pe=Ue.popularProducts,Oe=Ue.changeFrame,Te=Ue.sizeIndex,Ye=Ue.totalPriceWithFrame,Ae=Ue.whichFrame,Le=Ue.totalPriceWithOutFrame,Ze=Ue.productDetailFlag,$e=Ue.changeFamily,Me=Ue.familyIndex;return function(i,a){var u=(0,s.up)("column"),Ue=(0,s.up)("row"),Ke=(0,s.up)("font-awesome-icon"),Be=(0,s.up)("container"),Ne=(0,s.up)("container-full"),Ee=(0,s.up)("Skeletor"),Qe=(0,s.Q2)("lazy");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.kq)("  {{productId}}"),(0,s._)("section",{class:"relative",id:"product-show-id-".concat((0,n.SU)(Ce))},[(0,s.Wm)(Be,null,{default:(0,s.w5)((function(){return[(0,s.Wm)(Ue,null,{default:(0,s.w5)((function(){return[(0,s.Wm)(u,{col:"12"},{default:(0,s.w5)((function(){return[(0,s.Wm)(r.Z,{pages:[{name:"Home",link:{name:"HOME"}},{name:"Collections",link:{name:"ALL_COLLECTION"}},{name:(0,n.SU)(He).hash.slice(1).split("-").join(" "),link:{name:"COLLECTION_LIST",params:{name:(0,n.SU)(He).hash.slice(1)}}},{name:e.name.split("-").join(" ")}]},null,8,["pages"])]})),_:1})]})),_:1}),(0,s.Wm)(p.Z,{class:"!static !items-center !h-[500px]",show:!(0,n.SU)(Ze)},null,8,["show"]),(0,n.SU)(Ze)?((0,s.wg)(),(0,s.j4)(Ue,{key:0},{default:(0,s.w5)((function(){return[(0,s.Wm)(u,{class:"sm:!pr-1",col:"12",sm:"6"},{default:(0,s.w5)((function(){return[(0,s._)("div",g,[(0,s.Wm)((0,n.SU)(o.lr),{ref_key:"carousel",ref:Se,settings:(0,n.SU)(ke),"wrap-around":!0},{addons:(0,s.w5)((function(){return[(0,s._)("div",w,[(0,s.Wm)(Ke,{size:"lg",class:"cursor-pointer",icon:"fa-solid fa-angle-left",onClick:(0,n.SU)(xe)},null,8,["onClick"]),(0,s.Wm)((0,n.SU)(o.tl)),(0,s.Wm)(Ke,{size:"lg",class:"cursor-pointer",icon:"fa-solid fa-angle-right",onClick:(0,n.SU)(f)},null,8,["onClick"])])]})),default:(0,s.w5)((function(){return[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,n.SU)(qe).gallery,(function(e,t){return(0,s.wg)(),(0,s.j4)((0,n.SU)(o.Mi),{key:t},{default:(0,s.w5)((function(){return[(0,s.Wm)(c.Z,{zoom:e.zoom,src:e.src,srcset:e.srcset},null,8,["zoom","src","srcset"])]})),_:2},1024)})),128))]})),_:1},8,["settings"])])]})),_:1}),(0,s.Wm)(u,{col:"12",sm:"6"},{default:(0,s.w5)((function(){return[(0,s._)("div",v,[(0,s._)("div",null,[(0,s._)("h1",y,(0,l.zw)((0,n.SU)(qe).title),1),(0,n.SU)(qe).discount?((0,s.wg)(),(0,s.iD)("div",b,[(0,s._)("h3",_,"$"+(0,l.zw)((0,n.SU)(qe).discount.toFixed(2)),1),(0,s._)("h3",x,"$"+(0,l.zw)(0===(0,n.SU)(Ae)?(0,n.SU)(Le):(0,n.SU)(Ye)),1)])):((0,s.wg)(),(0,s.iD)("h3",k,"$"+(0,l.zw)(0===(0,n.SU)(Ae)?(0,n.SU)(Le):(0,n.SU)(Ye)),1)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,n.SU)(qe).description,(function(e){return(0,s.wg)(),(0,s.iD)("p",{innerHTML:e.content,class:"mb-1 font-500 text-1"},null,8,S)})),256))]),(0,s.kq)("        <<<<<<<<<<<<<<<<<< family part start >>>>>>>>>>>>>>"),(0,n.SU)(qe).hasFamily?((0,s.wg)(),(0,s.iD)("div",U,[z,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,n.SU)(qe).option.family,(function(e,t){return(0,s.wg)(),(0,s.iD)("button",{disabled:!(0,n.SU)(qe).option.family[(0,n.SU)(Me)].available,class:(0,l.C_)([{disabled:!(0,n.SU)(qe).option.family[(0,n.SU)(Me)].available,selected:(0,n.SU)(Me)===t},"btn btn-dark-outline mr-1 mb-1"]),onClick:function(i){return(0,n.SU)($e)(e.index,t)}},(0,l.zw)(e.item),11,W)})),256))])):(0,s.kq)("v-if",!0),(0,s.kq)("        <<<<<<<<<<<<<<<<<< family part start >>>>>>>>>>>>>>"),(0,s.kq)("            <<<<<<<<<<<<< size part start>>>>>>>>>>>>"),(0,n.SU)(qe).option.sizes?((0,s.wg)(),(0,s.iD)("div",j,[F,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,n.SU)(qe).option.sizes,(function(e,t){return(0,s.wg)(),(0,s.iD)("button",{class:(0,l.C_)([{disabled:!e.available,selected:(0,n.SU)(Te)===t},"btn btn-dark-outline mr-1 mb-1"]),onClick:function(i){return(0,n.SU)(Fe)(e,t)}},(0,l.zw)(e.size),11,D)})),256))])):(0,s.kq)("v-if",!0),(0,s.kq)("            <<<<<<<<<<<<< size part end>>>>>>>>>>>>"),(0,s.kq)("            <<<<<<<<<<<<< frame part start>>>>>>>>>>>>"),(0,n.SU)(qe).hasFrame?((0,s.wg)(),(0,s.iD)("div",C,[q,(0,s._)("button",{disabled:!(0,n.SU)(qe).option.sizes[(0,n.SU)(Te)].available,class:(0,l.C_)([{disabled:!(0,n.SU)(qe).option.sizes[(0,n.SU)(Te)].available,selected:0===(0,n.SU)(Ae)},"btn btn-dark-outline mr-1"]),onClick:a[0]||(a[0]=function(e){return(0,n.SU)(Oe)(0)})}," No frame ",10,H),(0,s._)("button",{disabled:!(0,n.SU)(qe).option.sizes[(0,n.SU)(Te)].frame.available,class:(0,l.C_)([{disabled:!(0,n.SU)(qe).option.sizes[(0,n.SU)(Te)].frame.available,selected:1===(0,n.SU)(Ae)},"btn btn-dark-outline mr-1"]),onClick:a[1]||(a[1]=function(e){return(0,n.SU)(Oe)(1)})}," Recycled Timber Frame ",10,I)])):(0,s.kq)("v-if",!0),(0,s.kq)("            <<<<<<<<<<<<< frame part end>>>>>>>>>>>>"),(0,s.kq)("            <<<<<<<<<<<<< price part start>>>>>>>>>>>>"),(0,s._)("div",P,[(0,n.SU)(qe).discount?((0,s.wg)(),(0,s.iD)("div",O,[(0,s._)("h1",T,"$"+(0,l.zw)((0,n.SU)(qe).discount.toFixed(2)),1),(0,s._)("div",null,[(0,s._)("span",Y,"$"+(0,l.zw)(0===(0,n.SU)(Ae)?(0,n.SU)(Le):(0,n.SU)(Ye)),1),A,(0,s._)("span",L,"you have saved $"+(0,l.zw)(((0,n.SU)(qe).price-(0,n.SU)(qe).discount).toFixed(2)),1)])])):((0,s.wg)(),(0,s.iD)("h1",Z," $"+(0,l.zw)(0===(0,n.SU)(Ae)?(0,n.SU)(Le):(0,n.SU)(Ye)),1))]),(0,s.kq)("            <<<<<<<<<<<<< price part end>>>>>>>>>>>>"),$,(0,s._)("div",M,[(0,n.SU)(qe).isSoldOut?(0,s.kq)("v-if",!0):((0,s.wg)(),(0,s.iD)("div",K,[(0,s._)("button",{onClick:a[2]||(a[2]=function(){return(0,n.SU)(We)&&(0,n.SU)(We).apply(void 0,arguments)}),class:"btn btn-dark-outline !py-1"},[(0,s.Wm)(Ke,{size:"lg",icon:"fa-solid fa-minus"})]),(0,s._)("span",B,(0,l.zw)((0,n.SU)(De)),1),(0,s._)("button",{onClick:a[3]||(a[3]=function(){return(0,n.SU)(je)&&(0,n.SU)(je).apply(void 0,arguments)}),class:"btn btn-dark-outline !py-1"},[(0,s.Wm)(Ke,{size:"lg",icon:"fa-solid fa-plus"})])])),(0,s._)("button",{disabled:(0,n.SU)(qe).isSoldOut,class:(0,l.C_)([{"w-[50%] !bg-gray-400":(0,n.SU)(qe).isSoldOut},"btn btn-dark-fill px-2 text-1.2 font-700"]),onClick:a[4]||(a[4]=function(){return(0,n.SU)(ze)&&(0,n.SU)(ze).apply(void 0,arguments)})},(0,l.zw)((0,n.SU)(qe).isSoldOut?"Sold Out":"Add to cart"),11,N)]),(0,s._)("div",E,[Q,(0,s._)("ul",R,[(0,s._)("li",null,[(0,s.Wm)(Ke,{size:"md",icon:"fa-brands fa-facebook-f"}),(0,s._)("a",{class:"btn-link ml-0.5",href:(0,n.SU)(qe).link.facebook}," Facebook ",8,G)]),(0,s._)("li",null,[(0,s.Wm)(Ke,{size:"md",icon:"fa-brands fa-twitter"}),(0,s._)("a",{class:"btn-link ml-0.5",href:(0,n.SU)(qe).link.twitter}," Twitter ",8,J)]),(0,s._)("li",null,[(0,s.Wm)(Ke,{size:"md",icon:"fa-brands fa-pinterest"}),(0,s._)("a",{class:"btn-link ml-0.5",href:(0,n.SU)(qe).link.pinterest}," Pinterest ",8,V)])])])])]})),_:1})]})),_:1})):(0,s.kq)("v-if",!0),(0,s.kq)("      <<<<<<<<< description row >>>>>>>>>"),(0,s.Wm)(Ue,{class:"!my-3 !items-center"},{default:(0,s.w5)((function(){return[(0,s.Wm)(u,{col:"12",sm:"6"},{default:(0,s.w5)((function(){return[X]})),_:1}),(0,s.Wm)(u,{col:"12",sm:"6"},{default:(0,s.w5)((function(){return[(0,s._)("div",null,[(0,s.wy)((0,s._)("img",ee,null,512),[[Qe,"//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints2.jpg?v=1663739542&width=480"]])])]})),_:1})]})),_:1}),(0,s.Wm)(Ue,{class:"!my-3 !items-center"},{default:(0,s.w5)((function(){return[(0,s.Wm)(u,{col:"12",sm:"6"},{default:(0,s.w5)((function(){return[(0,s._)("div",null,[(0,s.wy)((0,s._)("img",te,null,512),[[Qe,"//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints4.jpg?v=1663739487&width=480"]])])]})),_:1}),(0,s.Wm)(u,{col:"12",sm:"6"},{default:(0,s.w5)((function(){return[ie]})),_:1})]})),_:1}),(0,s.Wm)(Ue,{class:"!my-3 !items-center"},{default:(0,s.w5)((function(){return[(0,s.Wm)(u,{col:"12",sm:"6"},{default:(0,s.w5)((function(){return[se]})),_:1}),(0,s.Wm)(u,{col:"12",sm:"6"},{default:(0,s.w5)((function(){return[(0,s._)("div",null,[(0,s.wy)((0,s._)("img",ne,null,512),[[Qe,"//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-frame1.jpg?v=1663740555&width=480"]])])]})),_:1})]})),_:1}),(0,s.Wm)(Ue,{class:"!my-3"},{default:(0,s.w5)((function(){return[(0,s.Wm)(u,{class:"!px-1",col:"12",sm:"6",md:"3"},{default:(0,s.w5)((function(){return[(0,s._)("div",le,[(0,s.Wm)(Ke,{class:"text-5 !text-dark",icon:"fa-regular fa-thumbs-up"}),re])]})),_:1}),(0,s.Wm)(u,{class:"!px-1",col:"12",sm:"6",md:"3"},{default:(0,s.w5)((function(){return[(0,s._)("div",oe,[(0,s.Wm)(Ke,{class:"text-5 !text-dark",icon:"fa fa-tree"}),ae])]})),_:1}),(0,s.Wm)(u,{class:"!px-1",col:"12",sm:"6",md:"3"},{default:(0,s.w5)((function(){return[(0,s._)("div",ce,[(0,s.Wm)(Ke,{class:"text-5 !text-dark",icon:"fa fa-hand-holding-dollar"}),ue])]})),_:1}),(0,s.Wm)(u,{class:"!px-1",col:"12",sm:"6",md:"3"},{default:(0,s.w5)((function(){return[(0,s._)("div",de,[(0,s.Wm)(Ke,{class:"text-5 !text-dark",icon:"fa-regular fa-thumbs-up"}),fe])]})),_:1})]})),_:1})]})),_:1})],8,h),(0,s._)("section",me,[(0,s.Wm)(Ne,null,{default:(0,s.w5)((function(){return[(0,s.Wm)(Ue,{class:"!p-0 !m-0"},{default:(0,s.w5)((function(){return[(0,s.Wm)(u,{col:"12",sm:"6",class:"!p-0 !m-0"},{default:(0,s.w5)((function(){return[(0,s.wy)((0,s._)("img",pe,null,512),[[Qe,"//cdn.shopify.com/s/files/1/0272/9548/1943/files/6b.jpg?v=1663388526&width=480"]])]})),_:1}),(0,s.Wm)(u,{col:"12",sm:"6",class:"!p-0"},{default:(0,s.w5)((function(){return[he]})),_:1})]})),_:1})]})),_:1})]),(0,s._)("section",ge,[(0,s.Wm)(Be,null,{default:(0,s.w5)((function(){return[(0,s.Wm)(Ue,null,{default:(0,s.w5)((function(){return[(0,s.Wm)(u,{col:"12"},{default:(0,s.w5)((function(){return[(0,s._)("div",we,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,n.SU)(t),(function(e){return(0,s.wg)(),(0,s.j4)(m,{title:e.title,description:e.description},null,8,["title","description"])})),256))])]})),_:1})]})),_:1})]})),_:1})]),(0,s._)("section",ve,[(0,s.Wm)(Be,null,{default:(0,s.w5)((function(){return[(0,s.kq)("      <<<<<<<< suggestion row >>>>>>>>"),(0,s.Wm)(Ue,{class:"my-2"},{default:(0,s.w5)((function(){return[(0,s.Wm)(u,{col:"12"},{default:(0,s.w5)((function(){return[ye,(0,n.SU)(Ie)?((0,s.wg)(),(0,s.iD)("div",be,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,n.SU)(Pe).slice(0,4),(function(e){return(0,s.wg)(),(0,s.j4)(d.Z,{class:"mb-1",price:e.price,title:e.title,link:e.link,discount:e.discount,"cover-src":e.coverSrc,"cover-srcset":e.coverSrcset,"overlay-src":e.overlaySrc,"overlay-srcset":e.overlaySrcset,"is-period":e.isPeriod,id:e.id,"is-sold-out":e.isSoldOut},null,8,["price","title","link","discount","cover-src","cover-srcset","overlay-src","overlay-srcset","is-period","id","is-sold-out"])})),256))])):((0,s.wg)(),(0,s.iD)("div",_e,[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(4,(function(e){return(0,s.Wm)(Ee,{class:"rounded-8",width:"100%",shimmer:!0,height:"400"})})),64))]))]})),_:1})]})),_:1})]})),_:1})])],64)}}}}}]);