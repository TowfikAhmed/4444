import{u as Ze}from"./composables.e2d63491.js";import{v as ae,x as et,$ as tt,a as rt,j as A,y as D,e as at,i as O,z as nt,h as ot,o as m,c as I,A as g,B as L,C as X,D as Y,p as G,T as st,E as it,s as J,F as R,n as K,g as Z,u as x,G as lt,H as ct,w as we,l as b,I as S,t as N,J as $,K as U,L as ut,M as ft,N as dt,O as E}from"./entry.ff60f4bd.js";import pt from"./Icon.e7860a0b.js";import{u as yt}from"./useAuth.c29d51eb.js";function vt({swiper:e,extendParams:t,on:r,emit:a}){let o;e.autoplay={running:!1,paused:!1},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function n(){if(!e.size){e.autoplay.running=!1,e.autoplay.paused=!1;return}const d=e.slides.eq(e.activeIndex);let y=e.params.autoplay.delay;d.attr("data-swiper-autoplay")&&(y=d.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(o),o=et(()=>{let h;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),h=e.slidePrev(e.params.speed,!0,!0),a("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?s():(h=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),a("autoplay")):(h=e.slidePrev(e.params.speed,!0,!0),a("autoplay")):e.params.loop?(e.loopFix(),h=e.slideNext(e.params.speed,!0,!0),a("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?s():(h=e.slideTo(0,e.params.speed,!0,!0),a("autoplay")):(h=e.slideNext(e.params.speed,!0,!0),a("autoplay")),(e.params.cssMode&&e.autoplay.running||h===!1)&&n()},y)}function i(){return typeof o<"u"||e.autoplay.running?!1:(e.autoplay.running=!0,a("autoplayStart"),n(),!0)}function s(){return!e.autoplay.running||typeof o>"u"?!1:(o&&(clearTimeout(o),o=void 0),e.autoplay.running=!1,a("autoplayStop"),!0)}function u(d){e.autoplay.running&&(e.autoplay.paused||(o&&clearTimeout(o),e.autoplay.paused=!0,d===0||!e.params.autoplay.waitForTransition?(e.autoplay.paused=!1,n()):["transitionend","webkitTransitionEnd"].forEach(y=>{e.$wrapperEl[0].addEventListener(y,f)})))}function l(){const d=ae();d.visibilityState==="hidden"&&e.autoplay.running&&u(),d.visibilityState==="visible"&&e.autoplay.paused&&(n(),e.autoplay.paused=!1)}function f(d){!e||e.destroyed||!e.$wrapperEl||d.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(y=>{e.$wrapperEl[0].removeEventListener(y,f)}),e.autoplay.paused=!1,e.autoplay.running?n():s())}function c(){e.params.autoplay.disableOnInteraction?s():(a("autoplayPause"),u()),["transitionend","webkitTransitionEnd"].forEach(d=>{e.$wrapperEl[0].removeEventListener(d,f)})}function p(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,a("autoplayResume"),n())}function v(){e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",c),e.$el.on("mouseleave",p))}function T(){e.$el.off("mouseenter",c),e.$el.off("mouseleave",p)}r("init",()=>{e.params.autoplay.enabled&&(i(),ae().addEventListener("visibilitychange",l),v())}),r("beforeTransitionStart",(d,y,h)=>{e.autoplay.running&&(h||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(y):s())}),r("sliderFirstMove",()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?s():u())}),r("touchEnd",()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&n()}),r("destroy",()=>{T(),e.autoplay.running&&s(),ae().removeEventListener("visibilitychange",l)}),Object.assign(e.autoplay,{pause:u,run:n,start:i,stop:s})}function gt(e){const{effect:t,swiper:r,on:a,setTranslate:o,setTransition:n,overwriteParams:i,perspective:s,recreateShadows:u,getEffectParams:l}=e;a("beforeInit",()=>{if(r.params.effect!==t)return;r.classNames.push(`${r.params.containerModifierClass}${t}`),s&&s()&&r.classNames.push(`${r.params.containerModifierClass}3d`);const c=i?i():{};Object.assign(r.params,c),Object.assign(r.originalParams,c)}),a("setTranslate",()=>{r.params.effect===t&&o()}),a("setTransition",(c,p)=>{r.params.effect===t&&n(p)}),a("transitionEnd",()=>{if(r.params.effect===t&&u){if(!l||!l().slideShadows)return;r.slides.each(c=>{r.$(c).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()}),u()}});let f;a("virtualUpdate",()=>{r.params.effect===t&&(r.slides.length||(f=!0),requestAnimationFrame(()=>{f&&r.slides&&r.slides.length&&(o(),f=!1)}))})}function mt(e,t){return e.transformEl?t.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):t}function ht({swiper:e,duration:t,transformEl:r,allSlides:a}){const{slides:o,activeIndex:n,$wrapperEl:i}=e;if(e.params.virtualTranslate&&t!==0){let s=!1,u;a?u=r?o.find(r):o:u=r?o.eq(n).find(r):o.eq(n),u.transitionEnd(()=>{if(s||!e||e.destroyed)return;s=!0,e.animating=!1;const l=["webkitTransitionEnd","transitionend"];for(let f=0;f<l.length;f+=1)i.trigger(l[f])})}}function _t(e,t,r){const a=`swiper-slide-shadow${r?`-${r}`:""}`,o=e.transformEl?t.find(e.transformEl):t;let n=o.children(`.${a}`);return n.length||(n=tt(`<div class="swiper-slide-shadow${r?`-${r}`:""}"></div>`),o.append(n)),n}function $t({swiper:e,extendParams:t,on:r}){t({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const a=i=>typeof i=="string"?i:`${i}px`;gt({effect:"creative",swiper:e,on:r,setTranslate:()=>{const{slides:i,$wrapperEl:s,slidesSizesGrid:u}=e,l=e.params.creativeEffect,{progressMultiplier:f}=l,c=e.params.centeredSlides;if(c){const p=u[0]/2-e.params.slidesOffsetBefore||0;s.transform(`translateX(calc(50% - ${p}px))`)}for(let p=0;p<i.length;p+=1){const v=i.eq(p),T=v[0].progress,d=Math.min(Math.max(v[0].progress,-l.limitProgress),l.limitProgress);let y=d;c||(y=Math.min(Math.max(v[0].originalProgress,-l.limitProgress),l.limitProgress));const h=v[0].swiperSlideOffset,C=[e.params.cssMode?-h-e.translate:-h,0,0],P=[0,0,0];let j=!1;e.isHorizontal()||(C[1]=C[0],C[0]=0);let _={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};d<0?(_=l.next,j=!0):d>0&&(_=l.prev,j=!0),C.forEach((k,M)=>{C[M]=`calc(${k}px + (${a(_.translate[M])} * ${Math.abs(d*f)}))`}),P.forEach((k,M)=>{P[M]=_.rotate[M]*Math.abs(d*f)}),v[0].style.zIndex=-Math.abs(Math.round(T))+i.length;const Xe=C.join(", "),Ye=`rotateX(${P[0]}deg) rotateY(${P[1]}deg) rotateZ(${P[2]}deg)`,Ge=y<0?`scale(${1+(1-_.scale)*y*f})`:`scale(${1-(1-_.scale)*y*f})`,Je=y<0?1+(1-_.opacity)*y*f:1-(1-_.opacity)*y*f,Ke=`translate3d(${Xe}) ${Ye} ${Ge}`;if(j&&_.shadow||!j){let k=v.children(".swiper-slide-shadow");if(k.length===0&&_.shadow&&(k=_t(l,v)),k.length){const M=l.shadowPerProgress?d*(1/l.limitProgress):d;k[0].style.opacity=Math.min(Math.max(Math.abs(M),0),1)}}const _e=mt(l,v);_e.transform(Ke).css({opacity:Je}),_.origin&&_e.css("transform-origin",_.origin)}},setTransition:i=>{const{transformEl:s}=e.params.creativeEffect;(s?e.slides.find(s):e.slides).transition(i).find(".swiper-slide-shadow").transition(i),ht({swiper:e,duration:i,transformEl:s,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}const bt=()=>rt().$img,Et={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},St=e=>{const t=A(()=>({provider:e.provider,preset:e.preset})),r=A(()=>({width:D(e.width),height:D(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),a=A(()=>({...e.modifiers,width:D(e.width),height:D(e.height),format:e.format,quality:e.quality,background:e.background,fit:e.fit}));return{options:t,attrs:r,modifiers:a}},Pt={...Et,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},Ot=at({name:"NuxtImg",props:Pt,emits:["load"],setup:(e,t)=>{const r=bt(),a=St(e),o=O(!1),n=A(()=>r.getSizes(e.src,{...a.options.value,sizes:e.sizes,modifiers:{...a.modifiers.value,width:D(e.width),height:D(e.height)}})),i=A(()=>{const c=a.attrs.value;return e.sizes&&(c.sizes=n.value.sizes,c.srcset=n.value.srcset),c}),s=A(()=>{let c=e.placeholder;if(c===""&&(c=!0),!c||o.value)return!1;if(typeof c=="string")return c;const p=Array.isArray(c)?c:typeof c=="number"?[c,c]:[10,10];return r(e.src,{...a.modifiers.value,width:p[0],height:p[1],quality:p[2]||50},a.options.value)}),u=A(()=>e.sizes?n.value.src:r(e.src,a.modifiers.value,a.options.value)),l=A(()=>s.value?s.value:u.value);if(e.preload){const c=Object.values(n.value).every(p=>p);Ze({link:[{rel:"preload",as:"image",...c?{href:n.value.src,imagesizes:n.value.sizes,imagesrcset:n.value.srcset}:{href:l.value}}]})}const f=O();return nt(()=>{if(s.value){const c=new Image;c.src=u.value,c.onload=p=>{f.value.src=u.value,o.value=!0,t.emit("load",p)}}else f.value.onload=c=>{t.emit("load",c)}}),()=>ot("img",{ref:f,key:l.value,src:l.value,...i.value,...t.attrs})}});var xt=Function.prototype.toString,ne=Object.create,Tt=Object.prototype.toString,Ct=function(){function e(){this._keys=[],this._values=[]}return e.prototype.has=function(t){return!!~this._keys.indexOf(t)},e.prototype.get=function(t){return this._values[this._keys.indexOf(t)]},e.prototype.set=function(t,r){this._keys.push(t),this._values.push(r)},e}();function At(){return new Ct}function It(){return new WeakMap}var Lt=typeof WeakMap<"u"?It:At;function pe(e){if(!e)return ne(null);var t=e.constructor;if(t===Object)return e===Object.prototype?{}:ne(e);if(~xt.call(t).indexOf("[native code]"))try{return new t}catch{}return ne(e)}function wt(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}function kt(e){return e.flags}var Mt=/test/g.flags==="g"?kt:wt;function ke(e){var t=Tt.call(e);return t.substring(8,t.length-1)}function Nt(e){return e[Symbol.toStringTag]||ke(e)}var Bt=typeof Symbol<"u"?Nt:ke,jt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,Me=Object.getOwnPropertyNames,ye=Object.getOwnPropertySymbols,Ne=Object.prototype,Be=Ne.hasOwnProperty,Dt=Ne.propertyIsEnumerable,je=typeof ye=="function";function Rt(e){return Me(e).concat(ye(e))}var zt=je?Rt:Me;function ee(e,t,r){for(var a=zt(e),o=0,n=a.length,i=void 0,s=void 0;o<n;++o)if(i=a[o],!(i==="callee"||i==="caller")){if(s=Ft(e,i),!s){t[i]=r.copier(e[i],r);continue}!s.get&&!s.set&&(s.value=r.copier(s.value,r));try{jt(t,i,s)}catch{t[i]=s.value}}return t}function Ht(e,t){var r=new t.Constructor;t.cache.set(e,r);for(var a=0,o=e.length;a<o;++a)r[a]=t.copier(e[a],t);return r}function Ut(e,t){var r=new t.Constructor;return t.cache.set(e,r),ee(e,r,t)}function Fe(e,t){return e.slice(0)}function Wt(e,t){return e.slice(0,e.size,e.type)}function Vt(e,t){return new t.Constructor(Fe(e.buffer))}function qt(e,t){return new t.Constructor(e.getTime())}function De(e,t){var r=new t.Constructor;return t.cache.set(e,r),e.forEach(function(a,o){r.set(o,t.copier(a,t))}),r}function Qt(e,t){return ee(e,De(e,t),t)}function Xt(e,t){var r=pe(t.prototype);t.cache.set(e,r);for(var a in e)Be.call(e,a)&&(r[a]=t.copier(e[a],t));return r}function Yt(e,t){var r=pe(t.prototype);t.cache.set(e,r);for(var a in e)Be.call(e,a)&&(r[a]=t.copier(e[a],t));for(var o=ye(e),n=0,i=o.length,s=void 0;n<i;++n)s=o[n],Dt.call(e,s)&&(r[s]=t.copier(e[s],t));return r}var Gt=je?Yt:Xt;function Jt(e,t){var r=pe(t.prototype);return t.cache.set(e,r),ee(e,r,t)}function oe(e,t){return new t.Constructor(e.valueOf())}function Kt(e,t){var r=new t.Constructor(e.source,Mt(e));return r.lastIndex=e.lastIndex,r}function W(e,t){return e}function Re(e,t){var r=new t.Constructor;return t.cache.set(e,r),e.forEach(function(a){r.add(t.copier(a,t))}),r}function Zt(e,t){return ee(e,Re(e,t),t)}var er=Array.isArray,ve=Object.assign,tr=Object.getPrototypeOf,ze={array:Ht,arrayBuffer:Fe,blob:Wt,dataView:Vt,date:qt,error:W,map:De,object:Gt,regExp:Kt,set:Re},rr=ve({},ze,{array:Ut,map:Qt,object:Jt,set:Zt});function ar(e){return{Arguments:e.object,Array:e.array,ArrayBuffer:e.arrayBuffer,Blob:e.blob,Boolean:oe,DataView:e.dataView,Date:e.date,Error:e.error,Float32Array:e.arrayBuffer,Float64Array:e.arrayBuffer,Int8Array:e.arrayBuffer,Int16Array:e.arrayBuffer,Int32Array:e.arrayBuffer,Map:e.map,Number:oe,Object:e.object,Promise:W,RegExp:e.regExp,Set:e.set,String:oe,WeakMap:W,WeakSet:W,Uint8Array:e.arrayBuffer,Uint8ClampedArray:e.arrayBuffer,Uint16Array:e.arrayBuffer,Uint32Array:e.arrayBuffer,Uint64Array:e.arrayBuffer}}function He(e){var t=ve({},ze,e),r=ar(t),a=r.Array,o=r.Object;function n(i,s){if(s.prototype=s.Constructor=void 0,!i||typeof i!="object")return i;if(s.cache.has(i))return s.cache.get(i);if(s.prototype=i.__proto__||tr(i),s.Constructor=s.prototype&&s.prototype.constructor,!s.Constructor||s.Constructor===Object)return o(i,s);if(er(i))return a(i,s);var u=r[Bt(i)];return u?u(i,s):typeof i.then=="function"?i:o(i,s)}return function(s){return n(s,{Constructor:void 0,cache:Lt(),copier:n,prototype:void 0})}}function nr(e){return He(ve({},rr,e))}nr({});He({});var q=e=>Array.isArray(e),or=e=>e===!0||e===!1,$e=e=>Symbol.iterator in Object(e),ge=e=>Object.prototype.toString.call(e).includes("Object"),sr=e=>[void 0,null,!1,NaN,0,""].includes(e)||$e(e)&&typeof e=="object"&&"length"in e&&e.length===0||$e(e)&&typeof e=="object"&&"size"in e&&e.size===0?!0:ge(e)?!Object.keys(e).length:!1,Q=e=>typeof e=="number"&&!isNaN(e),ir=e=>Object.prototype.toString.call(e)==="[object Function]",me=e=>Q(e)&&e%1===0,lr=e=>e===null||typeof e>"u",z=e=>Object.prototype.toString.call(e)==="[object String]",cr={condition:"Assert condition failed","no-value":"Assert value not undefined/null failed"},be=(e,t,r)=>[cr[e],t?`: ${t}`:null,sr(r)?null:`: ${JSON.stringify(r)}`].filter(Boolean).join(""),ur=e=>(t,r,a)=>new Error(e(t,r,a)),fr=()=>({formatter:be,errorCreator:ur(be)}),B=fr(),Ue=e=>(t,r,a)=>{const o=(s,u)=>B.errorCreator(s,r,u),n=(s,u,l)=>{var f,c;l&&((f=B.errorReporter)==null||f.call(B,s,l,r,u)),!l&&((c=B.warningReporter)==null||c.call(B,s,r,u))},i=ir(a)?a():a??{};if(or(t)&&!t){if(!e){const s=o("condition",i);throw n("condition",i,s),s}return n("condition",i),!1}if(lr(t)){if(!e){const s=o("no-value",i);throw n("no-value",i,s),s}return n("no-value",i),!1}return t},dr=Ue(!1),pr=Ue(!0),yr=dr;yr.soft=pr;var vr=(e,t=-1/0,r=1/0)=>Math.max(t??-1/0,Math.min(e,r??1/0)),gr=/\p{Lu}/u,mr=/\p{Ll}/u,Ee=/^\p{Lu}(?!\p{Lu})/gu,We=/([\p{Alpha}\p{N}_]|$)/u,Ve=/[ \-._]+/,hr=new RegExp(`^${Ve.source}`),Se=new RegExp(Ve.source+We.source,"gu"),Pe=new RegExp(`\\d+${We.source}`,"gu"),_r={preserveConsecutiveUppercase:!1},$r=e=>{let t=!1,r=!1,a=!1;for(let o=0;o<e.length;o++){const n=e[o];t&&gr.test(n)?(e=`${e.slice(0,o)}-${e.slice(o)}`,t=!1,a=r,r=!0,o++):r&&a&&mr.test(n)?(e=`${e.slice(0,o-1)}-${e.slice(o-1)}`,a=r,r=!1,t=!0):(t=n.toLowerCase()===n&&n.toUpperCase()!==n,a=r,r=n.toUpperCase()===n&&n.toLowerCase()!==n)}return e},br=e=>(Ee.lastIndex=0,e.replace(Ee,t=>t.toLowerCase())),Er=e=>(Se.lastIndex=0,Pe.lastIndex=0,e.replace(Se,(t,r)=>r.toUpperCase()).replace(Pe,t=>t.toUpperCase())),Sr=(e,t)=>{if(!q(!e)&&!z(e))throw new TypeError("Expected the input to be `string | string[]`");return t={..._r,...t},e=q(e)?e.map(r=>r.trim()).filter(Boolean).join("-"):e.trim(),e.length?e.length===1?e.toLowerCase():(e!==e.toLowerCase()&&(e=$r(e)),e=e.replace(hr,""),e=t.preserveConsecutiveUppercase?br(e):e.toLowerCase(),Er(e)):""},Pr=(e,t)=>{const r={numbers:!1,...t};let a=e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s._]+/g,"-");return r.numbers?(a=a.replace(/\d+/,"-$&").replace(/(\d)([A-Z])/g,"$1-$2"),a.startsWith("-")?a.slice(1).toLowerCase():a.toLowerCase()):a.toLowerCase()},Or={preserveConsecutiveUppercase:!1},xr=(e,t)=>{const r=Sr(e,{...Or,...t});return r.length?r[0].toUpperCase()+r.slice(1):""};const w=(e,t)=>t(e)?!0:!ge(e)||Object.keys(e).length!==2?!1:!Object.entries(e).some(([r,a])=>{const o=!["enter","leave"].includes(r),n=!t(a);return o||n}),Tr=e=>w(e,t=>me(t)&&t>=0),Cr=e=>w(e,t=>z(t)&&t.trim()!==""),Ar=e=>w(e,t=>me(t)&&t>=0),qe=300,Ir="cubic-bezier(.25, .8, .5, 1)",Lr=0,wr="y",kr=[0,-16],Mr="both",Nr="50% 50%",Br=0,jr=qe,te={inheritAttrs:!1,props:{duration:{validator:Tr,default:qe},easing:{validator:Cr,default:()=>Ir},delay:{validator:Ar,default:Lr},noOpacity:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},mode:{type:String,default:void 0},group:{type:Boolean,default:!1},tag:{type:String,default:"span"},noMove:{type:Boolean,default:!1},moveDuration:{type:Number,default:jr}},computed:{cComponent(){return this.group?st:it},cAttrs(){const{appear:e,mode:t,tag:r,duration:a}=this;return this.group?{appear:e,tag:r,duration:a,...this.$attrs}:{appear:e,mode:t,duration:a}},cHooks(){return{beforeEnter:(...e)=>{this.reduceTransition(...e),this.$emit("before-enter",...e)},beforeLeave:(...e)=>{var t;this.reduceTransition(...e),(t=this.initLeaving)==null||t.call(this,...e),this.$emit("before-leave",...e)},enter:(...e)=>{var t;(t=this.onEnter)==null||t.call(this,...e),this.$emit("enter",...e)},leave:(...e)=>{var t;(t=this.onLeave)==null||t.call(this,...e),this.$emit("leave",...e)},afterEnter:(...e)=>{var t;this.resetTransition(...e),(t=this.resetElement)==null||t.call(this,...e),this.$emit("after-enter",...e)},afterLeave:(...e)=>{var t;this.resetTransition(...e),(t=this.resetElement)==null||t.call(this,...e),this.$emit("after-leave",...e)}}}},methods:{setupTransition(e,t="enter"){var r,a,o,n,i,s;const u=(a=(r=this.duration)==null?void 0:r[t])!=null?a:this.duration,l=(n=(o=this.easing)==null?void 0:o[t])!=null?n:this.easing,f=(s=(i=this.delay)==null?void 0:i[t])!=null?s:this.delay;e.style.setProperty("transition-duration",`${u}ms`,"important"),e.style.setProperty("transition-timing-function",`${l}`,"important"),e.style.setProperty("transition-delay",`${f}ms`,"important")},reduceTransition(e){e.style.setProperty("transition-duration","0ms","important"),e.style.setProperty("transition-delay","0ms","important")},resetTransition(e){e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-timing-function"),e.style.removeProperty("transition-delay")},initLeaving(e){if(!this.group||this.noMove)return e;const t=getComputedStyle(e),{width:r,height:a}=t,{marginLeft:o,marginTop:n}=t;return e.style.setProperty("left",`${e.offsetLeft-parseFloat(o)}px`,"important"),e.style.setProperty("top",`${e.offsetTop-parseFloat(n)}px`,"important"),e.style.setProperty("width",`${parseFloat(r)}px`,"important"),e.style.setProperty("height",`${parseFloat(a)}px`,"important"),e.style.setProperty("position","absolute","important"),e},setMoveDuration(){var e;this.group&&this.$el&&((e=this.$el.style)==null||e.setProperty("--move-duration",`${this.moveDuration}ms`))}},watch:{moveDuration(){this.setMoveDuration()},group(){this.setMoveDuration()}},mounted(){this.setMoveDuration()}},Fr=e=>w(e,t=>z(t)&&["x","y"].includes(t)),re=(e,t)=>{const r=e.__vccOpts||e;for(const[a,o]of t)r[a]=o;return r},Dr={name:"transition-expand",mixins:[te],props:{axis:{validator:Fr,default:wr}},data:()=>({}),computed:{},methods:{async onEnter(e){await this.$nextTick(),await this.$nextTick(),this.getSizes(e),this.collapseElement(e,"enter"),e.offsetTop,this.setupTransition(e,"enter"),this.expandElement(e,"enter")},onLeave(e){this.getSizes(e),this.expandElement(e,"leave"),e.offsetTop,this.setupTransition(e,"leave"),this.collapseElement(e,"leave")},expandElement(e,t="enter"){var r,a;const o=(a=(r=this.axis)==null?void 0:r[t])!=null?a:this.axis,n=o==="x"?"left":"top",i=o==="x"?"right":"bottom",s=e.visual.size[o],u=e.visual.margin[o],l=e.visual.padding[o];this.noOpacity||e.style.setProperty("opacity",e.visual.opacity),delete e.visual,e.style.setProperty(o==="x"?"width":"height",`${parseFloat(s)}px`),e.style.setProperty(`padding-${n}`,`${parseFloat(l[0])}px`),e.style.setProperty(`padding-${i}`,`${parseFloat(l[1])}px`),e.style.setProperty(`margin-${n}`,`${parseFloat(u[0])}px`),e.style.setProperty(`margin-${i}`,`${parseFloat(u[1])}px`)},collapseElement(e,t="enter"){var r,a;const o=(a=(r=this.axis)==null?void 0:r[t])!=null?a:this.axis,n=o==="x"?"width":"height",i=o==="x"?"left":"top",s=o==="x"?"right":"bottom";this.noOpacity||e.style.setProperty("opacity",0),e.style.setProperty(n,"0px"),e.style.setProperty(`padding-${i}`,"0px"),e.style.setProperty(`padding-${s}`,"0px"),e.style.setProperty(`margin-${i}`,"0px"),e.style.setProperty(`margin-${s}`,"0px")},resetElement(e){e.style.removeProperty("opacity"),e.style.removeProperty("width"),e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-right"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("padding-left"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-right"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("margin-left")},getSizes(e){const t=getComputedStyle(e),{opacity:r}=t,{width:a,height:o}=t,{paddingTop:n,paddingRight:i,paddingBottom:s,paddingLeft:u}=t,{marginTop:l,marginRight:f,marginBottom:c,marginLeft:p}=t;e.visual={opacity:r,size:{x:a,y:o},padding:{x:[u,i],y:[n,s]},margin:{x:[p,f],y:[l,c]}}}}};function Rr(e,t,r,a,o,n){return m(),I(G(e.cComponent),X({name:"expand"},e.cAttrs,Y(e.cHooks)),{default:g(()=>[L(e.$slots,"default")]),_:3},16)}const se=re(Dr,[["render",Rr]]),zr={name:"transition-fade",mixins:[te],props:{},data:()=>({}),computed:{},methods:{onEnter(e){this.fadeElement(e,"enter"),e.offsetTop,this.setupTransition(e,"enter"),this.$nextTick(()=>e.style.removeProperty("opacity"))},onLeave(e){this.setupTransition(e,"leave"),this.fadeElement(e,"leave")},fadeElement(e,t="enter"){e.style.setProperty("opacity",0)},resetElement(e){e.style.removeProperty("opacity")}}};function Hr(e,t,r,a,o,n){return m(),I(G(e.cComponent),X({name:"fade"},e.cAttrs,Y(e.cHooks)),{default:g(()=>[L(e.$slots,"default")]),_:3},16)}const ie=re(zr,[["render",Hr]]),Ur=e=>w(e,t=>z(t)&&["x","y","both"].includes(t)),Wr=e=>w(e,t=>z(t)&&t.trim()!==""),Vr=e=>w(e,t=>Q(t)&&t>=0&&t<=1),Qe=e=>{const t=e.startsWith("matrix3d")?"matrix3d":"matrix",r=t==="matrix3d"?e.slice(9,-1).split(",").map(Number):e.startsWith("matrix")?e.slice(7,-1).split(",").map(Number):[1,0,0,1,0,0];return[t,r]},qr={name:"transition-scale",mixins:[te],props:{axis:{validator:Ur,default:Mr},origin:{validator:Wr,default:Nr},scale:{validator:Vr,default:Br}},data:()=>({}),computed:{},methods:{onEnter(e){this.scaleElement(e,"enter"),e.offsetTop,this.setupTransition(e,"enter"),this.$nextTick(()=>{e.style.removeProperty("opacity"),e.style.removeProperty("transform")})},onLeave(e){this.setupTransition(e,"leave"),this.scaleElement(e,"leave")},scaleElement(e,t="enter"){var r,a,o,n,i,s;const{transform:u}=getComputedStyle(e),l=(a=(r=this.axis)==null?void 0:r[t])!=null?a:this.axis,f=(n=(o=this.origin)==null?void 0:o[t])!=null?n:this.origin,c=vr(1e-4,(s=(i=this.scale)==null?void 0:i[t])!=null?s:this.scale,.9999),[p,v]=Qe(u);u.startsWith("matrix3d")?(l!=="y"&&(v[0]=c),l!=="x"&&(v[5]=c)):u.startsWith("matrix")?(l!=="y"&&(v[0]=c),l!=="x"&&(v[3]=c)):(v[0]=l==="y"?1:c,v[3]=l==="x"?1:c),this.noOpacity||e.style.setProperty("opacity",0),e.style.setProperty("transform",`${p}(${v})`),e.style.setProperty("transform-origin",`${f}`)},resetElement(e){e.style.removeProperty("opacity"),e.style.removeProperty("transform"),e.style.removeProperty("transform-origin")}}};function Qr(e,t,r,a,o,n){return m(),I(G(e.cComponent),X({name:"scale"},e.cAttrs,Y(e.cHooks)),{default:g(()=>[L(e.$slots,"default")]),_:3},16)}const le=re(qr,[["render",Qr]]),Xr=e=>w(e,t=>!q(t)||t.length!==2?!1:!t.some(r=>me(r)?!1:z(r)?isNaN(Number(r.endsWith("%")?r.slice(0,-1):r)):!0)),Yr={name:"transition-slide",mixins:[te],props:{offset:{validator:Xr,default:()=>kr}},data:()=>({}),computed:{},methods:{onEnter(e){this.slideElement(e,"enter"),e.offsetTop,this.setupTransition(e,"enter"),e.style.removeProperty("opacity"),e.style.removeProperty("transform")},onLeave(e){this.setupTransition(e,"leave"),this.slideElement(e,"leave")},slideElement(e,t="enter"){var r,a;const{width:o,height:n,transform:i}=getComputedStyle(e),s=(a=(r=this.offset)==null?void 0:r[t])!=null?a:this.offset;let[u,l]=s;Q(u)||(u=u.endsWith("%")?parseFloat(o)*(parseFloat(u.slice(0,-1))||0)/100:parseFloat(u)),Q(l)||(l=l.endsWith("%")?parseFloat(n)*(parseFloat(l.slice(0,-1))||0)/100:parseFloat(l));const[f,c]=Qe(i);i.startsWith("matrix3d")?(c[12]+=u,c[13]+=l):i.startsWith("matrix")?(c[4]+=u,c[5]+=l):(c[4]=u,c[5]=l),this.noOpacity||e.style.setProperty("opacity",0),e.style.setProperty("transform",`${f}(${c})`)},resetElement(e){e.style.removeProperty("opacity"),e.style.removeProperty("transform")}}};function Gr(e,t,r,a,o,n){return m(),I(G(e.cComponent),X({name:"slide"},e.cAttrs,Y(e.cHooks)),{default:g(()=>[L(e.$slots,"default")]),_:3},16)}const ce=re(Yr,[["render",Gr]]),V={[se.name]:se,[ie.name]:ie,[le.name]:le,[ce.name]:ce},Oe=(e,t,r)=>{var a;(a=e.props)!=null||(e.props={}),e.props[t]={default:q(r)||ge(r)?()=>r:r}},xe=(e,t)=>{var r,a,o;const n=Pr(e),i=xr(e),s=(r=t==null?void 0:t.defaultProps)!=null?r:{},u=(o=(a=t==null?void 0:t.componentDefaultProps)==null?void 0:a[i])!=null?o:{};return Object.entries(s).forEach(([l,f])=>{Oe(V[n],l,f)}),Object.entries(u).forEach(([l,f])=>{Oe(V[n],l,f)}),V[n]},Jr=function(e,t={}){t!=null&&t.components?Object.entries(t.components).forEach(([r,a])=>{e.component(a,xe(r,t))}):Object.keys(V).forEach(r=>{e.component(r,xe(r,t))})};typeof window<"u"&&window.Vue&&window.Vue.use({install:Jr});const Kr={name:"TransitionFade",inheritAttrs:!1,components:{TheTransition:ie}};function Zr(e,t,r,a,o,n){const i=R("the-transition");return m(),I(i,K(Z(e.$attrs)),{default:g(()=>[L(e.$slots,"default")]),_:3},16)}const ea=J(Kr,[["render",Zr]]),ta={name:"TransitionSlide",inheritAttrs:!1,components:{TheTransition:ce}};function ra(e,t,r,a,o,n){const i=R("the-transition");return m(),I(i,K(Z(e.$attrs)),{default:g(()=>[L(e.$slots,"default")]),_:3},16)}const aa=J(ta,[["render",ra]]),na={name:"TransitionExpand",inheritAttrs:!1,components:{TheTransition:se}};function oa(e,t,r,a,o,n){const i=R("the-transition");return m(),I(i,K(Z(e.$attrs)),{default:g(()=>[L(e.$slots,"default")]),_:3},16)}const sa=J(na,[["render",oa]]),ia={name:"TransitionScale",inheritAttrs:!1,components:{TheTransition:le}};function la(e,t,r,a,o,n){const i=R("the-transition");return m(),I(i,K(Z(e.$attrs)),{default:g(()=>[L(e.$slots,"default")]),_:3},16)}const ca=J(ia,[["render",la]]);var Te;const H=typeof window<"u",ua=e=>typeof e=="string",fa=()=>{};H&&((Te=window==null?void 0:window.navigator)!=null&&Te.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function da(e){return typeof e=="function"?e():x(e)}function pa(e){return e}function ya(e){return lt()?(ct(e),!0):!1}function ue(e){var t;const r=da(e);return(t=r==null?void 0:r.$el)!=null?t:r}const he=H?window:void 0;H&&window.document;H&&window.navigator;H&&window.location;function F(...e){let t,r,a,o;if(ua(e[0])||Array.isArray(e[0])?([r,a,o]=e,t=he):[t,r,a,o]=e,!t)return fa;Array.isArray(r)||(r=[r]),Array.isArray(a)||(a=[a]);const n=[],i=()=>{n.forEach(f=>f()),n.length=0},s=(f,c,p)=>(f.addEventListener(c,p,o),()=>f.removeEventListener(c,p,o)),u=we(()=>ue(t),f=>{i(),f&&n.push(...r.flatMap(c=>a.map(p=>s(f,c,p))))},{immediate:!0,flush:"post"}),l=()=>{u(),i()};return ya(l),l}const fe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},de="__vueuse_ssr_handlers__";fe[de]=fe[de]||{};fe[de];function Ce(e,{window:t=he,scrollTarget:r}={}){const a=O(!1),o=()=>{if(!t)return;const n=t.document,i=ue(e);if(!i)a.value=!1;else{const s=i.getBoundingClientRect();a.value=s.top<=(t.innerHeight||n.documentElement.clientHeight)&&s.left<=(t.innerWidth||n.documentElement.clientWidth)&&s.bottom>=0&&s.right>=0}};return we(()=>ue(e),()=>o(),{immediate:!0,flush:"post"}),t&&F(r||t,"scroll",o,{capture:!1,passive:!0}),a}function va(e={}){const{type:t="page",touch:r=!0,resetOnTouchEnds:a=!1,initialValue:o={x:0,y:0},window:n=he,eventFilter:i}=e,s=O(o.x),u=O(o.y),l=O(null),f=d=>{t==="page"?(s.value=d.pageX,u.value=d.pageY):t==="client"?(s.value=d.clientX,u.value=d.clientY):t==="movement"&&(s.value=d.movementX,u.value=d.movementY),l.value="mouse"},c=()=>{s.value=o.x,u.value=o.y},p=d=>{if(d.touches.length>0){const y=d.touches[0];t==="page"?(s.value=y.pageX,u.value=y.pageY):t==="client"&&(s.value=y.clientX,u.value=y.clientY),l.value="touch"}},v=d=>i===void 0?f(d):i(()=>f(d),{}),T=d=>i===void 0?p(d):i(()=>p(d),{});return n&&(F(n,"mousemove",v,{passive:!0}),F(n,"dragover",v,{passive:!0}),r&&t!=="movement"&&(F(n,"touchstart",T,{passive:!0}),F(n,"touchmove",T,{passive:!0}),a&&F(n,"touchend",c,{passive:!0}))),{x:s,y:u,sourceType:l}}var Ae;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Ae||(Ae={}));var ga=Object.defineProperty,Ie=Object.getOwnPropertySymbols,ma=Object.prototype.hasOwnProperty,ha=Object.prototype.propertyIsEnumerable,Le=(e,t,r)=>t in e?ga(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,_a=(e,t)=>{for(var r in t||(t={}))ma.call(t,r)&&Le(e,r,t[r]);if(Ie)for(var r of Ie(t))ha.call(t,r)&&Le(e,r,t[r]);return e};const $a={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};_a({linear:pa},$a);const ba={class:"p-10"},Ea={class:"btn"},Sa={class:"flex gap-1"},Pa={key:0,class:"bg-orange-800 p-10"},Oa={key:0,class:"bg-orange-800 p-10"},xa={key:0,class:"bg-orange-800 p-10"},Ta={key:0,class:"bg-orange-800 p-10"},Ca=S("p",{class:"my-1"},"Slide",-1),Aa={class:"flex gap-1"},Ia={key:0,class:"bg-orange-800 p-10"},La={key:0,class:"bg-orange-800 p-10"},wa={key:0,class:"bg-orange-800 p-10"},ka=S("p",{class:"my-1"},"Scale",-1),Ma={class:"flex gap-1"},Na={key:0,class:"bg-orange-800 p-10"},Ba={key:0,class:"bg-orange-800 p-10"},ja={key:0,class:"bg-orange-800 p-10"},Fa={key:0,class:"bg-orange-800 p-10"},Da=S("h1",null,"Hello world",-1),Wa={__name:"index",setup(e){const{x:t,y:r}=va(),{user:a}=yt(),o=O("John Doe"),n=O(!0),i=O(null),s=Ce(i),u=O(null),l=Ce(u);return(f,c)=>{const p=R("SwiperSlide"),v=R("Swiper"),T=Ot,d=pt,y=ea,h=aa,C=sa,P=ca,j=ut;return m(),b("div",ba,[S("button",Ea,"ref "+N(o.value),1),$(v,{modules:["SwiperAutoplay"in f?f.SwiperAutoplay:x(vt),"SwiperEffectCreative"in f?f.SwiperEffectCreative:x($t)],"slides-per-view":1,loop:!0,effect:"creative",autoplay:{delay:2e3,disableOnInteraction:!0},"creative-effect":{prev:{shadow:!1,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}}},{default:g(()=>[(m(),b(ft,null,dt(10,_=>$(p,{key:_,class:"bg-rose-200 p-10"},{default:g(()=>[U(N(_),1)]),_:2},1024)),64))]),_:1},8,["modules"]),$(T,{src:"https://wallpaperaccess.com/full/1356237.jpg",class:"w-[200px] inline"}),$(d,{name:"uil:github",class:"m-10 text-orange-500 text-2xl"}),S("div",Sa,[$(y,{duration:2e3},{default:g(()=>[n.value?(m(),b("div",Pa,"Hello")):E("",!0)]),_:1}),$(h,{delay:1e3,duration:1500},{default:g(()=>[n.value?(m(),b("div",Oa,"Hello")):E("",!0)]),_:1}),$(y,null,{default:g(()=>[n.value?(m(),b("div",xa,"Hello")):E("",!0)]),_:1}),$(C,null,{default:g(()=>[n.value?(m(),b("div",Ta,"Hello")):E("",!0)]),_:1})]),Ca,S("div",Aa,[$(h,null,{default:g(()=>[n.value?(m(),b("div",Ia,"Hello")):E("",!0)]),_:1}),$(h,{offset:[100,0]},{default:g(()=>[n.value?(m(),b("div",La,"Hello")):E("",!0)]),_:1}),$(h,{offset:[0,100]},{default:g(()=>[n.value?(m(),b("div",wa,"Hello")):E("",!0)]),_:1})]),ka,S("div",Ma,[$(P,null,{default:g(()=>[n.value?(m(),b("div",Na,"Hello")):E("",!0)]),_:1}),$(P,{scale:.5},{default:g(()=>[n.value?(m(),b("div",Ba,"Hello")):E("",!0)]),_:1},8,["scale"]),$(P,{scale:1.5},{default:g(()=>[n.value?(m(),b("div",ja,"Hello")):E("",!0)]),_:1},8,["scale"])]),S("button",{onClick:c[0]||(c[0]=_=>n.value=!n.value),class:"btn"},"Toggle"),S("div",null,"pos: "+N(x(t))+", "+N(x(r)),1),U(" "+N(x(s))+" "+N(x(l))+" ",1),$(P,null,{default:g(()=>[x(s)?(m(),b("div",Fa,"Hello")):E("",!0)]),_:1}),S("div",{class:"",ref_key:"target",ref:i},null,512),S("div",{ref_key:"target2",ref:u,class:"p-20 bg-teal-300 m-10"},[Da,U(" "+N(x(a))+" ",1),$(j,{to:"/login"},{default:g(()=>[U("Login")]),_:1})],512)])}}};export{Wa as default};
