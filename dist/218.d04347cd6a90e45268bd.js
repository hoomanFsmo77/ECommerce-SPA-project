"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[218],{7688:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(2201),n=i(6252),l=i(2262),r=i(3526),a=i(6544);const o=function(e){var t=(0,r.a)(),i=(0,a.x)(),o=(0,n.Fl)((function(){return t.getPopularProduct})),c=(0,n.Fl)((function(){return t.getPopularProductFetchFlag})),u=(0,n.Fl)((function(){return t.getProductData})),d=(0,n.Fl)((function(){return t.getProductDetailDataFlag})),f=(0,s.yj)(),p=(0,l.iH)(f.query.id),m=(0,l.iH)(1),h=(0,l.iH)(0),v=(0,l.iH)(0),w=(0,l.iH)(0),g=(0,n.Fl)((function(){var e;return u.value.option.sizes[h.value].frame?(u.value.option.sizes[h.value].price+u.value.option.sizes[h.value].frame.price).toFixed(2):null!==(e=u.value.option.sizes[h.value].price.toFixed(2))&&void 0!==e?e:u.value.price.toFixed(2)})),y=(0,n.Fl)((function(){var e,t;return null!==(e=u.value)&&void 0!==e&&null!==(t=e.option)&&void 0!==t&&t.sizes?u.value.option.sizes[h.value].price.toFixed(2):u.value.price.toFixed(2)})),b=(0,n.Fl)((function(){var e,t;return{src:u.value.gallery[0].src,available:u.value.available,link:f.fullPath,srcset:u.value.gallery[0].srcset,title:u.value.title,productId:p.value,quantity:m.value,priceDetail:{size:null!==(e=u.value)&&void 0!==e&&null!==(t=e.option)&&void 0!==t&&t.sizes?u.value.option.sizes[h.value].size:null,frame:u.value.hasFrame?0===w.value?"No frame":"Recycled Timber Frame":null,price:0===w.value?y.value:g.value,family:u.value.hasFamily?u.value.option.family[v.value].item:null},discount:u.value.discount||null}})),_=(0,n.Fl)((function(){c.value&&(h.value=u.value.option.sizes.findIndex((function(e){return e.available})))}));(0,n.YP)((function(){return f.path}),(function(){"ART"!==f.name&&"PRODUCT"!==f.name||(t.fetchPopularProduct(),t.fetchProductDetail(p.value))}),{immediate:!0});return{productData:u,productId:p,quantity:m,changeSize:function(e,t){e.available&&(b.value.priceDetail.size=e.size,h.value=t,w.value=0)},increment:function(){m.value++,m.value>u.value.available&&(m.value=u.value.available)},decrement:function(){m.value--,m.value<1&&(m.value=1)},addToCart:function(){i.addToUserCart(b.value)},route:f,popularProducts:o,fetchFlag:c,changeFrame:function(t){e.value.slideTo(t),w.value=t},sizeIndex:h,totalPriceWithFrame:g,whichFrame:w,totalPriceWithOutFrame:y,productDetailFlag:d,changeFamily:function(t,i){e.value.slideTo(t),v.value=i},familyIndex:v,setSelectedSize:_}}},3222:(e,t,i)=>{i.d(t,{Z:()=>f});var s=i(6252),n=i(3577),l={class:"my-1"},r={class:"flex flex-wrap items-center"},a={class:"mr-1"},o={key:1,class:"text-[0.85rem] capitalize"},c={class:"mr-1"},u={key:0,class:"text-[0.85rem]"};const d={name:"BreadCrumb",props:["pages"]};const f=(0,i(3744).Z)(d,[["render",function(e,t,i,d,f,p){var m=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("ul",r,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.pages,(function(e,t){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("li",a,[e.link?((0,s.wg)(),(0,s.j4)(m,{key:0,class:"text-[0.85rem] capitalize",to:e.link},{default:(0,s.w5)((function(){return[(0,s.Uk)((0,n.zw)(e.name),1)]})),_:2},1032,["to"])):((0,s.wg)(),(0,s.iD)("span",o,(0,n.zw)(e.name),1))]),(0,s._)("li",c,[t!==i.pages.length-1?((0,s.wg)(),(0,s.iD)("span",u,"/")):(0,s.kq)("v-if",!0)])],64)})),256))])])}]])},2558:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Se});var s=i(6252),n=i(2262),l=i(3577),r=i(3222),a=i(7410),o=i(6778),c=i(1504),u=i(7688),d=i(3187),f={class:"first:pt-1 pb-1.5 !text-1 font-500 px-2"};const p={__name:"FaqItem",props:["title","description"],setup:function(e){var t=(0,n.iH)(!1);return function(i,r){var a=(0,s.up)("font-awesome-icon"),o=(0,s.Q2)("collapse");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",{class:(0,l.C_)([{"bg-gray-100/60":(0,n.SU)(t)},"title border-b-[1px] border-gray-300/80 font-700"])},[(0,s._)("button",{onClick:r[0]||(r[0]=function(e){return(0,n.dq)(t)?t.value=!(0,n.SU)(t):t=!(0,n.SU)(t)}),class:"cursor-pointer px-1 py-1.5 hover:bg-gray-100/60 transition-all text-0.9 text-dark w-full h-full text-left"},[(0,s.Wm)(a,{class:"mr-0.5",icon:(0,n.SU)(t)?"fa-minus":"fa-plus"},null,8,["icon"]),(0,s.Uk)(" "+(0,l.zw)(e.title),1)])],2),(0,s.wy)(((0,s.wg)(),(0,s.iD)("div",{class:(0,l.C_)([{"border-b-[1px] bg-gray-100/60 border-gray-300/80":(0,n.SU)(t)},"description v-collapse"])},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.description,(function(e){return(0,s.wg)(),(0,s.iD)("p",f,(0,l.zw)(e),1)})),256))],2)),[[o,(0,n.SU)(t)]])])}}};var m=i(1663),h=["id"],v={class:"sticky top-1.5"},w={class:"flex gap-1 justify-center items-center my-1"},g={class:"sm:pl-1"},y={class:"font-600"},b={key:0,class:"flex gap-2"},_={class:"font-600 my-1"},S={class:"font-600 my-1 line-through text-gray-500"},x={key:1,class:"font-600 my-1"},k=["innerHTML"],U={key:0,class:"mt-4"},z=(0,s._)("h5",{class:"font-600 mb-1"},"Choose Your Family Members",-1),W=["disabled","onClick"],j={key:1,class:"mt-4"},F=(0,s._)("h5",{class:"font-600 mb-1"},"Size",-1),D=["onClick"],C={key:2,class:"my-2"},q=(0,s._)("h5",{class:"font-600 mb-1"},"Frame",-1),H=["disabled"],P=["disabled"],I={class:"mb-1"},O={key:0,class:"flex items-center gap-1"},T={class:"font-600 my-2"},Y={class:"line-through"},A=(0,s._)("br",null,null,-1),$={class:"text-gray-500"},L={key:1,class:"font-600 my-2"},M=(0,s._)("div",{class:"divider"},null,-1),K={class:"flex flex-col sm:flex-row gap-1 items-center"},Z={key:0},B={class:"mx-1 px-0.5 text-1.5"},N=["disabled"],R={class:"mt-4"},E=(0,s._)("h5",{class:"font-600 mb-1"},"Share",-1),Q={class:"flex gap-2 item-center"},G=["href"],J=["href"],V=["href"],X=(0,s._)("div",{class:"sm:px-2"},[(0,s._)("h1",{class:"text-center font-700 mb-1"},"Museum-quality prints "),(0,s._)("p",{class:"text-center !text-1"}," We make our prints right here in our studio on stunning, ultra-thick, museum-grade, textured cotton paper using the highest quality pigment-based ink. ")],-1),ee={alt:"",srcset:"//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints2.jpg?v=1663739542&width=240 240w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints2.jpg?v=1663739542&width=360 360w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints2.jpg?v=1663739542&width=420 420w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints2.jpg?v=1663739542&width=480 480w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints2.jpg?v=1663739542&width=640 640w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints2.jpg?v=1663739542&width=840 840w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints2.jpg?v=1663739542&width=1080 1080w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints2.jpg?v=1663739542&width=1280 1280w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints2.jpg?v=1663739542&width=1540 1540w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints2.jpg?v=1663739542&width=1860 1860w",sizes:"592px"},te={alt:"",srcset:"//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints4.jpg?v=1663739487&width=240 240w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints4.jpg?v=1663739487&width=360 360w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints4.jpg?v=1663739487&width=420 420w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints4.jpg?v=1663739487&width=480 480w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints4.jpg?v=1663739487&width=640 640w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints4.jpg?v=1663739487&width=840 840w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints4.jpg?v=1663739487&width=1080 1080w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints4.jpg?v=1663739487&width=1280 1280w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints4.jpg?v=1663739487&width=1540 1540w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints4.jpg?v=1663739487&width=1860 1860w",sizes:"592px"},ie=(0,s._)("div",{class:"sm:px-2"},[(0,s._)("h1",{class:"text-center font-700 mb-1"},"Signed by the artist"),(0,s._)("p",{class:"text-center !text-1"}," Once we've printed your art, it's then hand-signed, titled, dated and given the signature stamp of authenticity by Brentos. ")],-1),se=(0,s._)("div",{class:"sm:px-2"},[(0,s._)("h1",{class:"text-center font-700 mb-1"},"Frame it in a stunning recycled timber frame. "),(0,s._)("p",{class:"text-center !text-1"}," Our frames are hand-made in Australia from reclaimed hardwood, each one showing beautiful markings and unique character from it's previous life as a railroad pylon, farm fence or floorboard. ")],-1),ne={alt:"",srcset:"//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-frame1.jpg?v=1663740555&width=240 240w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-frame1.jpg?v=1663740555&width=360 360w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-frame1.jpg?v=1663740555&width=420 420w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-frame1.jpg?v=1663740555&width=480 480w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-frame1.jpg?v=1663740555&width=640 640w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-frame1.jpg?v=1663740555&width=840 840w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-frame1.jpg?v=1663740555&width=1080 1080w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-frame1.jpg?v=1663740555&width=1280 1280w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-frame1.jpg?v=1663740555&width=1540 1540w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-frame1.jpg?v=1663740555&width=1860 1860w",sizes:"592px"},le={class:"flex flex-col gap-2"},re=(0,s._)("div",null,[(0,s._)("h6",{class:"font-700 text-center"},"Proudly Australian Made"),(0,s._)("p",{class:"text-center my-0.5 text-gray-500"},"Made right here in our small art studio.")],-1),ae={class:"flex flex-col gap-2"},oe=(0,s._)("div",null,[(0,s._)("h6",{class:"font-700 text-center"},"Character-Filled Frames"),(0,s._)("p",{class:"text-center my-0.5 text-gray-500"},"Made locally from sustainable recycled timber.")],-1),ce={class:"flex flex-col gap-2"},ue=(0,s._)("div",null,[(0,s._)("h6",{class:"font-700 text-center"},"Supporting Wildlife"),(0,s._)("p",{class:"text-center my-0.5 text-gray-500"},"Over $45,000 raised for wildlife conservation.")],-1),de={class:"flex flex-col gap-2"},fe=(0,s._)("div",null,[(0,s._)("h6",{class:"font-700 text-center"},"Intrinsic quality"),(0,s._)("p",{class:"text-center my-0.5 text-gray-500"},"Giclée prints made using the finest papers and inks.")],-1),pe={id:"support",class:"bg-dark sm:h-[70vh] overflow-hidden my-3"},me={srcset:"//cdn.shopify.com/s/files/1/0272/9548/1943/files/6b.jpg?v=1663388526&width=240 240w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/6b.jpg?v=1663388526&width=360 360w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/6b.jpg?v=1663388526&width=420 420w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/6b.jpg?v=1663388526&width=480 480w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/6b.jpg?v=1663388526&width=640 640w,//cdn.shopify.com/s/files/1/0272/9548/1943/files/6b.jpg?v=1663388526&width=840 840w",sizes:"632px",class:"object-cover h-full w-full",src:"",alt:""},he=(0,s._)("div",{class:"p-2"},[(0,s._)("h1",{class:"text-light text-center font-600 mt-1"},"Thanks for Supporting Local "),(0,s._)("p",{class:"text-light font-500 leading-1.8 text-center mt-1"}," Hey, I'm Brent. I'm an illustrator from Sydney and I run the Brentos art studio and merch range with my partner Tash. My work is inspired by the Aussie bush and long, salty summers at the beach with a mission to share a gentle message of conservation for our wildlife. By purchasing our art you're supporting local artists and small businesses in Australia. Cheers! "),(0,s._)("p",{class:"text-center"},"💚")],-1),ve={id:"faq",class:"my-3"},we={class:"border-[1px] border-gray-300/80 rounded-8 overflow-hidden"},ge={id:"suggestion"},ye=(0,s._)("h4",{class:"text-left font-600 mb-1 md:pl-1 pl-0"},"You may also like",-1),be={key:0,class:"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1.3"},_e={key:1,class:"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1.3"};const Se={__name:"Art",props:["name"],setup:function(e){var t=[{title:"What are the shipping costs?",description:["We offer free shipping in Australia for orders over $70. For orders under $70, a $10 shipping fee is charged.","For our overseas friends, we charge $30 shipping for most zones and products."]},{title:"How long does shipping take?",description:["When you order one of our art products you'll typically receive it within 7 days within Australia and within 3 weeks internationally."]},{title:"Why should I buy from you?",description:["When you buy any of our art products you're supporting local artists, wildlife conservation efforts, sustainable manufacturing and a small, creative Aussie business committed to being Australian made. We use on the finest materials when creating our products and our art prints are hand-signed for authenticity."]}],i=(0,o.Z)(),f=i.next,Se=i.prev,xe=i.settings,ke=i.carousel,Ue=(0,u.Z)(ke),ze=Ue.addToCart,We=Ue.decrement,je=Ue.increment,Fe=Ue.changeSize,De=Ue.quantity,Ce=Ue.productId,qe=Ue.productData,He=Ue.route,Pe=Ue.fetchFlag,Ie=Ue.popularProducts,Oe=Ue.changeFrame,Te=Ue.sizeIndex,Ye=Ue.totalPriceWithFrame,Ae=Ue.whichFrame,$e=Ue.totalPriceWithOutFrame,Le=Ue.productDetailFlag,Me=Ue.changeFamily,Ke=Ue.familyIndex;return function(i,o){var u=(0,s.up)("column"),Ue=(0,s.up)("row"),Ze=(0,s.up)("font-awesome-icon"),Be=(0,s.up)("container"),Ne=(0,s.up)("container-full"),Re=(0,s.up)("Skeletor"),Ee=(0,s.Q2)("lazy");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("section",{class:"relative",id:"product-show-id-".concat((0,n.SU)(Ce))},[(0,s.Wm)(Be,null,{default:(0,s.w5)((function(){return[(0,s.Wm)(Ue,null,{default:(0,s.w5)((function(){return[(0,s.Wm)(u,{col:"12"},{default:(0,s.w5)((function(){return[(0,s.Wm)(r.Z,{pages:[{name:"Home",link:{name:"HOME"}},{name:"Collections",link:{name:"ALL_COLLECTION"}},{name:(0,n.SU)(He).hash.slice(1).split("-").join(" "),link:{name:"COLLECTION_LIST",params:{name:(0,n.SU)(He).hash.slice(1)}}},{name:e.name.split("-").join(" ")}]},null,8,["pages"])]})),_:1})]})),_:1}),(0,s.Wm)(m.Z,{class:"!static !items-center !h-[500px]",show:!(0,n.SU)(Le)},null,8,["show"]),(0,n.SU)(Le)?((0,s.wg)(),(0,s.j4)(Ue,{key:0},{default:(0,s.w5)((function(){return[(0,s.Wm)(u,{class:"sm:!pr-1",col:"12",sm:"6"},{default:(0,s.w5)((function(){return[(0,s._)("div",v,[(0,s.Wm)((0,n.SU)(a.lr),{ref_key:"carousel",ref:ke,settings:(0,n.SU)(xe),"wrap-around":!0},{addons:(0,s.w5)((function(){return[(0,s._)("div",w,[(0,s.Wm)(Ze,{size:"lg",class:"cursor-pointer",icon:"fa-solid fa-angle-left",onClick:(0,n.SU)(Se)},null,8,["onClick"]),(0,s.Wm)((0,n.SU)(a.tl)),(0,s.Wm)(Ze,{size:"lg",class:"cursor-pointer",icon:"fa-solid fa-angle-right",onClick:(0,n.SU)(f)},null,8,["onClick"])])]})),default:(0,s.w5)((function(){return[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,n.SU)(qe).gallery,(function(e,t){return(0,s.wg)(),(0,s.j4)((0,n.SU)(a.Mi),{key:t},{default:(0,s.w5)((function(){return[(0,s.Wm)(c.Z,{zoom:e.zoom,src:e.src,srcset:e.srcset},null,8,["zoom","src","srcset"])]})),_:2},1024)})),128))]})),_:1},8,["settings"])])]})),_:1}),(0,s.Wm)(u,{col:"12",sm:"6"},{default:(0,s.w5)((function(){var e,t;return[(0,s._)("div",g,[(0,s._)("div",null,[(0,s._)("h1",y,(0,l.zw)((0,n.SU)(qe).title),1),(0,n.SU)(qe).discount?((0,s.wg)(),(0,s.iD)("div",b,[(0,s._)("h3",_,"$"+(0,l.zw)((0,n.SU)(qe).discount.toFixed(2)),1),(0,s._)("h3",S,"$"+(0,l.zw)(0===(0,n.SU)(Ae)?(0,n.SU)($e):(0,n.SU)(Ye)),1)])):((0,s.wg)(),(0,s.iD)("h3",x,"$"+(0,l.zw)(0===(0,n.SU)(Ae)?(0,n.SU)($e):(0,n.SU)(Ye)),1)),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,n.SU)(qe).description,(function(e){return(0,s.wg)(),(0,s.iD)("p",{innerHTML:e.content,class:"mb-1 font-500 text-1"},null,8,k)})),256))]),(0,s.kq)("        <<<<<<<<<<<<<<<<<< family part start >>>>>>>>>>>>>>"),(0,n.SU)(qe).hasFamily?((0,s.wg)(),(0,s.iD)("div",U,[z,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,n.SU)(qe).option.family,(function(e,t){return(0,s.wg)(),(0,s.iD)("button",{disabled:!(0,n.SU)(qe).option.family[(0,n.SU)(Ke)].available,class:(0,l.C_)([{disabled:!(0,n.SU)(qe).option.family[(0,n.SU)(Ke)].available,selected:(0,n.SU)(Ke)===t},"btn btn-dark-outline mr-1 mb-1"]),onClick:function(i){return(0,n.SU)(Me)(e.index,t)}},(0,l.zw)(e.item),11,W)})),256))])):(0,s.kq)("v-if",!0),(0,s.kq)("        <<<<<<<<<<<<<<<<<< family part start >>>>>>>>>>>>>>"),(0,s.kq)("            <<<<<<<<<<<<< size part start>>>>>>>>>>>>"),null!==(e=(0,n.SU)(qe))&&void 0!==e&&null!==(t=e.option)&&void 0!==t&&t.sizes?((0,s.wg)(),(0,s.iD)("div",j,[F,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,n.SU)(qe).option.sizes,(function(e,t){return(0,s.wg)(),(0,s.iD)("button",{class:(0,l.C_)([{disabled:!e.available,selected:(0,n.SU)(Te)===t},"btn btn-dark-outline mr-1 mb-1"]),onClick:function(i){return(0,n.SU)(Fe)(e,t)}},(0,l.zw)(e.size),11,D)})),256))])):(0,s.kq)("v-if",!0),(0,s.kq)("            <<<<<<<<<<<<< size part end>>>>>>>>>>>>"),(0,s.kq)("            <<<<<<<<<<<<< frame part start>>>>>>>>>>>>"),(0,n.SU)(qe).hasFrame?((0,s.wg)(),(0,s.iD)("div",C,[q,(0,s._)("button",{disabled:!(0,n.SU)(qe).option.sizes[(0,n.SU)(Te)].available,class:(0,l.C_)([{disabled:!(0,n.SU)(qe).option.sizes[(0,n.SU)(Te)].available,selected:0===(0,n.SU)(Ae)},"btn btn-dark-outline mr-1 sm:mb-0 mb-1"]),onClick:o[0]||(o[0]=function(e){return(0,n.SU)(Oe)(0)})}," No frame ",10,H),(0,s._)("button",{disabled:!(0,n.SU)(qe).option.sizes[(0,n.SU)(Te)].frame.available,class:(0,l.C_)([{disabled:!(0,n.SU)(qe).option.sizes[(0,n.SU)(Te)].frame.available,selected:1===(0,n.SU)(Ae)},"btn btn-dark-outline mr-1"]),onClick:o[1]||(o[1]=function(e){return(0,n.SU)(Oe)(1)})}," Recycled Timber Frame ",10,P)])):(0,s.kq)("v-if",!0),(0,s.kq)("            <<<<<<<<<<<<< frame part end>>>>>>>>>>>>"),(0,s.kq)("            <<<<<<<<<<<<< price part start>>>>>>>>>>>>"),(0,s._)("div",I,[(0,n.SU)(qe).discount?((0,s.wg)(),(0,s.iD)("div",O,[(0,s._)("h1",T,"$"+(0,l.zw)((0,n.SU)(qe).discount.toFixed(2)),1),(0,s._)("div",null,[(0,s._)("span",Y,"$"+(0,l.zw)(0===(0,n.SU)(Ae)?(0,n.SU)($e):(0,n.SU)(Ye)),1),A,(0,s._)("span",$,"you have saved $"+(0,l.zw)(((0,n.SU)(qe).price-(0,n.SU)(qe).discount).toFixed(2)),1)])])):((0,s.wg)(),(0,s.iD)("h1",L," $"+(0,l.zw)(0===(0,n.SU)(Ae)?(0,n.SU)($e):(0,n.SU)(Ye)),1))]),(0,s.kq)("            <<<<<<<<<<<<< price part end>>>>>>>>>>>>"),M,(0,s._)("div",K,[(0,n.SU)(qe).isSoldOut?(0,s.kq)("v-if",!0):((0,s.wg)(),(0,s.iD)("div",Z,[(0,s._)("button",{onClick:o[2]||(o[2]=function(){return(0,n.SU)(We)&&(0,n.SU)(We).apply(void 0,arguments)}),class:"btn btn-dark-outline !py-1"},[(0,s.Wm)(Ze,{size:"lg",icon:"fa-solid fa-minus"})]),(0,s._)("span",B,(0,l.zw)((0,n.SU)(De)),1),(0,s._)("button",{onClick:o[3]||(o[3]=function(){return(0,n.SU)(je)&&(0,n.SU)(je).apply(void 0,arguments)}),class:"btn btn-dark-outline !py-1"},[(0,s.Wm)(Ze,{size:"lg",icon:"fa-solid fa-plus"})])])),(0,s._)("button",{disabled:(0,n.SU)(qe).isSoldOut,class:(0,l.C_)([{"w-[50%] !bg-gray-400":(0,n.SU)(qe).isSoldOut},"btn btn-dark-fill px-2 text-1.2 font-700"]),onClick:o[4]||(o[4]=function(){return(0,n.SU)(ze)&&(0,n.SU)(ze).apply(void 0,arguments)})},(0,l.zw)((0,n.SU)(qe).isSoldOut?"Sold Out":"Add to cart"),11,N)]),(0,s._)("div",R,[E,(0,s._)("ul",Q,[(0,s._)("li",null,[(0,s.Wm)(Ze,{size:"md",icon:"fa-brands fa-facebook-f"}),(0,s._)("a",{class:"btn-link ml-0.5",href:(0,n.SU)(qe).link.facebook}," Facebook ",8,G)]),(0,s._)("li",null,[(0,s.Wm)(Ze,{size:"md",icon:"fa-brands fa-twitter"}),(0,s._)("a",{class:"btn-link ml-0.5",href:(0,n.SU)(qe).link.twitter}," Twitter ",8,J)]),(0,s._)("li",null,[(0,s.Wm)(Ze,{size:"md",icon:"fa-brands fa-pinterest"}),(0,s._)("a",{class:"btn-link ml-0.5",href:(0,n.SU)(qe).link.pinterest}," Pinterest ",8,V)])])])])]})),_:1})]})),_:1})):(0,s.kq)("v-if",!0),(0,s.kq)("      <<<<<<<<< description row >>>>>>>>>"),(0,s.Wm)(Ue,{class:"!my-3 !items-center"},{default:(0,s.w5)((function(){return[(0,s.Wm)(u,{col:"12",sm:"6"},{default:(0,s.w5)((function(){return[X]})),_:1}),(0,s.Wm)(u,{col:"12",sm:"6"},{default:(0,s.w5)((function(){return[(0,s._)("div",null,[(0,s.wy)((0,s._)("img",ee,null,512),[[Ee,"//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints2.jpg?v=1663739542&width=480"]])])]})),_:1})]})),_:1}),(0,s.Wm)(Ue,{class:"!my-3 !items-center"},{default:(0,s.w5)((function(){return[(0,s.Wm)(u,{col:"12",sm:"6"},{default:(0,s.w5)((function(){return[(0,s._)("div",null,[(0,s.wy)((0,s._)("img",te,null,512),[[Ee,"//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-prints4.jpg?v=1663739487&width=480"]])])]})),_:1}),(0,s.Wm)(u,{col:"12",sm:"6"},{default:(0,s.w5)((function(){return[ie]})),_:1})]})),_:1}),(0,s.Wm)(Ue,{class:"!my-3 !items-center"},{default:(0,s.w5)((function(){return[(0,s.Wm)(u,{col:"12",sm:"6"},{default:(0,s.w5)((function(){return[se]})),_:1}),(0,s.Wm)(u,{col:"12",sm:"6"},{default:(0,s.w5)((function(){return[(0,s._)("div",null,[(0,s.wy)((0,s._)("img",ne,null,512),[[Ee,"//cdn.shopify.com/s/files/1/0272/9548/1943/files/brentos-frame1.jpg?v=1663740555&width=480"]])])]})),_:1})]})),_:1}),(0,s.Wm)(Ue,{class:"!my-3"},{default:(0,s.w5)((function(){return[(0,s.Wm)(u,{class:"!px-1",col:"12",sm:"6",md:"3"},{default:(0,s.w5)((function(){return[(0,s._)("div",le,[(0,s.Wm)(Ze,{class:"text-5 !text-dark",icon:"fa-regular fa-thumbs-up"}),re])]})),_:1}),(0,s.Wm)(u,{class:"!px-1",col:"12",sm:"6",md:"3"},{default:(0,s.w5)((function(){return[(0,s._)("div",ae,[(0,s.Wm)(Ze,{class:"text-5 !text-dark",icon:"fa fa-tree"}),oe])]})),_:1}),(0,s.Wm)(u,{class:"!px-1",col:"12",sm:"6",md:"3"},{default:(0,s.w5)((function(){return[(0,s._)("div",ce,[(0,s.Wm)(Ze,{class:"text-5 !text-dark",icon:"fa fa-hand-holding-dollar"}),ue])]})),_:1}),(0,s.Wm)(u,{class:"!px-1",col:"12",sm:"6",md:"3"},{default:(0,s.w5)((function(){return[(0,s._)("div",de,[(0,s.Wm)(Ze,{class:"text-5 !text-dark",icon:"fa-regular fa-thumbs-up"}),fe])]})),_:1})]})),_:1})]})),_:1})],8,h),(0,s._)("section",pe,[(0,s.Wm)(Ne,null,{default:(0,s.w5)((function(){return[(0,s.Wm)(Ue,{class:"!p-0 !m-0"},{default:(0,s.w5)((function(){return[(0,s.Wm)(u,{col:"12",sm:"6",class:"!p-0 !m-0"},{default:(0,s.w5)((function(){return[(0,s.wy)((0,s._)("img",me,null,512),[[Ee,"//cdn.shopify.com/s/files/1/0272/9548/1943/files/6b.jpg?v=1663388526&width=480"]])]})),_:1}),(0,s.Wm)(u,{col:"12",sm:"6",class:"!p-0"},{default:(0,s.w5)((function(){return[he]})),_:1})]})),_:1})]})),_:1})]),(0,s._)("section",ve,[(0,s.Wm)(Be,null,{default:(0,s.w5)((function(){return[(0,s.Wm)(Ue,null,{default:(0,s.w5)((function(){return[(0,s.Wm)(u,{col:"12"},{default:(0,s.w5)((function(){return[(0,s._)("div",we,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,n.SU)(t),(function(e){return(0,s.wg)(),(0,s.j4)(p,{title:e.title,description:e.description},null,8,["title","description"])})),256))])]})),_:1})]})),_:1})]})),_:1})]),(0,s._)("section",ge,[(0,s.Wm)(Be,null,{default:(0,s.w5)((function(){return[(0,s.kq)("      <<<<<<<< suggestion row >>>>>>>>"),(0,s.Wm)(Ue,{class:"my-2"},{default:(0,s.w5)((function(){return[(0,s.Wm)(u,{col:"12"},{default:(0,s.w5)((function(){return[ye,(0,n.SU)(Pe)?((0,s.wg)(),(0,s.iD)("div",be,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,n.SU)(Ie).slice(0,4),(function(e){return(0,s.wg)(),(0,s.j4)(d.Z,{class:"mb-1",price:e.price,title:e.title,link:e.link,discount:e.discount,"cover-src":e.coverSrc,"cover-srcset":e.coverSrcset,"overlay-src":e.overlaySrc,"overlay-srcset":e.overlaySrcset,"is-period":e.isPeriod,id:e.id,"is-sold-out":e.isSoldOut},null,8,["price","title","link","discount","cover-src","cover-srcset","overlay-src","overlay-srcset","is-period","id","is-sold-out"])})),256))])):((0,s.wg)(),(0,s.iD)("div",_e,[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(4,(function(e){return(0,s.Wm)(Re,{class:"rounded-8",width:"100%",shimmer:!0,height:"400"})})),64))]))]})),_:1})]})),_:1})]})),_:1})])],64)}}}}}]);