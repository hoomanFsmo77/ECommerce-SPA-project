"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[372],{4283:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var r=n(6252),a=n(9963),c=n(2262);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}var o=Object.prototype.hasOwnProperty;var u,d,l,s=(u=!1,d=[],l={resolved:function(){return u},resolve:function(){if(!u){u=!0;for(var e=0,t=d.length;e<t;e++)d[e]()}},promise:{then:function(e){u?e():d.push(e)}}},{notify:function(){l.resolve()},wait:function(){return l.promise},render:function(e,t,n){this.wait().then((function(){n(window.grecaptcha.render(e,t))}))},reset:function(e){void 0!==e&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.reset(e)})))},execute:function(e){void 0!==e&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.execute(e)})))},checkRecaptchaLoad:function(){o.call(window,"grecaptcha")&&o.call(window.grecaptcha,"render")&&this.notify()},assertLoaded:function(){if(!l.resolved())throw new Error("ReCAPTCHA has not been loaded")}});"undefined"!=typeof window&&(window.vueRecaptchaApiLoaded=s.notify);var p=(0,r.aZ)({name:"VueRecaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String},badge:{type:String},type:{type:String},size:{type:String},tabindex:{type:String},loadRecaptchaScript:{type:Boolean,default:!0},recaptchaScriptId:{type:String,default:"__RECAPTCHA_SCRIPT"},recaptchaHost:{type:String,default:"www.google.com"},language:{type:String,default:""}},emits:["render","verify","expired","error"],setup:function(e,t){var n=t.slots,a=t.emit,o=(0,c.iH)(null),u=(0,c.iH)(null),d=function(e){a("verify",e)},l=function(){a("expired")},p=function(){a("error")};return(0,r.bv)((function(){if(s.checkRecaptchaLoad(),e.loadRecaptchaScript&&!document.getElementById(e.recaptchaScriptId)){var t=document.createElement("script");t.id=e.recaptchaScriptId,t.src="https://"+e.recaptchaHost+"/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl="+e.language,t.async=!0,t.defer=!0,document.head.appendChild(t)}var r=i({},e,{callback:d,"expired-callback":l,"error-callback":p}),c=o.value,f=n.default?c.children[0]:c;s.render(f,r,(function(e){u.value=e,a("render",e)}))})),{root:o,widgetId:u,reset:function(){s.reset(u.value)},execute:function(){s.execute(u.value)}}},render:function(){var e,t=this.$slots.default;return e="function"==typeof t?t():t,(0,r.h)("div",{ref:"root"},e)}}),f=n(377),h=n(2201),v={id:"robot-validation",class:"py-2"},y=["onSubmit"],w={class:"bg-gray-100/70 border-[1px] border-gray-300 p-2 rounded-8"},g=(0,r._)("h6",{class:"text-center"},"To continue, let us know you're not a robot. ",-1),m={class:"flex justify-center my-2"},b=(0,r._)("div",{class:"text-center"},[(0,r._)("button",{class:"btn-dark-fill btn"},"Submit")],-1);const S={__name:"Challenge",setup:function(e){var t=(0,c.iH)(!1),n=(0,h.tv)(),i=(0,r.Fl)((function(){return"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"})),o=function(){t.value=!0},u=function(){t.value=!1},d=function(){t.value&&((0,f.nJ)("_news_letter_",3),n.push({name:"HOME",query:{submit:!0}}))};return function(e,t){var n=(0,r.up)("column"),l=(0,r.up)("row"),s=(0,r.up)("container");return(0,r.wg)(),(0,r.iD)("section",v,[(0,r.Wm)(s,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(l,{class:"justify-center"},{default:(0,r.w5)((function(){return[(0,r.Wm)(n,{col:"5"},{default:(0,r.w5)((function(){return[(0,r._)("form",{onSubmit:(0,a.iM)(d,["prevent"])},[(0,r._)("div",w,[g,(0,r._)("div",m,[(0,r.Wm)((0,c.SU)(p),{sitekey:(0,c.SU)(i),"load-recaptcha-script":!0,onVerify:o,onError:u},null,8,["sitekey"])]),b])],40,y)]})),_:1})]})),_:1})]})),_:1})])}}}}}]);