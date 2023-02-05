import{u as Je}from"./composables.b412d0ac.js";import{I as re,J as Ke,$ as et,a as tt,j as T,K as j,e as rt,i as M,L as at,h as nt,o as g,c as x,M as y,N as C,O as Q,P as G,p as X,T as ot,Q as st,s as Y,R as B,n as Z,g as J,u as k,S as it,U as lt,w as Ie,l as $,v as S,t as D,V as _,W as U,X as ct,Y as ut,Z as ft,a0 as E}from"./entry.d90a8f15.js";import dt from"./Icon.9a92e1a2.js";import{u as pt}from"./useAuth.ea88a6ad.js";function yt({swiper:e,extendParams:t,on:r,emit:a}){let n;e.autoplay={running:!1,paused:!1},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function o(){if(!e.size){e.autoplay.running=!1,e.autoplay.paused=!1;return}const p=e.slides.eq(e.activeIndex);let m=e.params.autoplay.delay;p.attr("data-swiper-autoplay")&&(m=p.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(n),n=Ke(()=>{let v;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),v=e.slidePrev(e.params.speed,!0,!0),a("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?i():(v=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),a("autoplay")):(v=e.slidePrev(e.params.speed,!0,!0),a("autoplay")):e.params.loop?(e.loopFix(),v=e.slideNext(e.params.speed,!0,!0),a("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?i():(v=e.slideTo(0,e.params.speed,!0,!0),a("autoplay")):(v=e.slideNext(e.params.speed,!0,!0),a("autoplay")),(e.params.cssMode&&e.autoplay.running||v===!1)&&o()},m)}function s(){return typeof n<"u"||e.autoplay.running?!1:(e.autoplay.running=!0,a("autoplayStart"),o(),!0)}function i(){return!e.autoplay.running||typeof n>"u"?!1:(n&&(clearTimeout(n),n=void 0),e.autoplay.running=!1,a("autoplayStop"),!0)}function u(p){e.autoplay.running&&(e.autoplay.paused||(n&&clearTimeout(n),e.autoplay.paused=!0,p===0||!e.params.autoplay.waitForTransition?(e.autoplay.paused=!1,o()):["transitionend","webkitTransitionEnd"].forEach(m=>{e.$wrapperEl[0].addEventListener(m,f)})))}function l(){const p=re();p.visibilityState==="hidden"&&e.autoplay.running&&u(),p.visibilityState==="visible"&&e.autoplay.paused&&(o(),e.autoplay.paused=!1)}function f(p){!e||e.destroyed||!e.$wrapperEl||p.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(m=>{e.$wrapperEl[0].removeEventListener(m,f)}),e.autoplay.paused=!1,e.autoplay.running?o():i())}function c(){e.params.autoplay.disableOnInteraction?i():(a("autoplayPause"),u()),["transitionend","webkitTransitionEnd"].forEach(p=>{e.$wrapperEl[0].removeEventListener(p,f)})}function d(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,a("autoplayResume"),o())}function h(){e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",c),e.$el.on("mouseleave",d))}function N(){e.$el.off("mouseenter",c),e.$el.off("mouseleave",d)}r("init",()=>{e.params.autoplay.enabled&&(s(),re().addEventListener("visibilitychange",l),h())}),r("beforeTransitionStart",(p,m,v)=>{e.autoplay.running&&(v||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(m):i())}),r("sliderFirstMove",()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?i():u())}),r("touchEnd",()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&o()}),r("destroy",()=>{N(),e.autoplay.running&&i(),re().removeEventListener("visibilitychange",l)}),Object.assign(e.autoplay,{pause:u,run:o,start:s,stop:i})}function gt(e){const{effect:t,swiper:r,on:a,setTranslate:n,setTransition:o,overwriteParams:s,perspective:i,recreateShadows:u,getEffectParams:l}=e;a("beforeInit",()=>{if(r.params.effect!==t)return;r.classNames.push(`${r.params.containerModifierClass}${t}`),i&&i()&&r.classNames.push(`${r.params.containerModifierClass}3d`);const c=s?s():{};Object.assign(r.params,c),Object.assign(r.originalParams,c)}),a("setTranslate",()=>{r.params.effect===t&&n()}),a("setTransition",(c,d)=>{r.params.effect===t&&o(d)}),a("transitionEnd",()=>{if(r.params.effect===t&&u){if(!l||!l().slideShadows)return;r.slides.each(c=>{r.$(c).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()}),u()}});let f;a("virtualUpdate",()=>{r.params.effect===t&&(r.slides.length||(f=!0),requestAnimationFrame(()=>{f&&r.slides&&r.slides.length&&(n(),f=!1)}))})}function ht(e,t){return e.transformEl?t.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):t}function mt({swiper:e,duration:t,transformEl:r,allSlides:a}){const{slides:n,activeIndex:o,$wrapperEl:s}=e;if(e.params.virtualTranslate&&t!==0){let i=!1,u;a?u=r?n.find(r):n:u=r?n.eq(o).find(r):n.eq(o),u.transitionEnd(()=>{if(i||!e||e.destroyed)return;i=!0,e.animating=!1;const l=["webkitTransitionEnd","transitionend"];for(let f=0;f<l.length;f+=1)s.trigger(l[f])})}}function vt(e,t,r){const a=`swiper-slide-shadow${r?`-${r}`:""}`,n=e.transformEl?t.find(e.transformEl):t;let o=n.children(`.${a}`);return o.length||(o=et(`<div class="swiper-slide-shadow${r?`-${r}`:""}"></div>`),n.append(o)),o}function _t({swiper:e,extendParams:t,on:r}){t({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const a=s=>typeof s=="string"?s:`${s}px`;gt({effect:"creative",swiper:e,on:r,setTranslate:()=>{const{slides:s,$wrapperEl:i,slidesSizesGrid:u}=e,l=e.params.creativeEffect,{progressMultiplier:f}=l,c=e.params.centeredSlides;if(c){const d=u[0]/2-e.params.slidesOffsetBefore||0;i.transform(`translateX(calc(50% - ${d}px))`)}for(let d=0;d<s.length;d+=1){const h=s.eq(d),N=h[0].progress,p=Math.min(Math.max(h[0].progress,-l.limitProgress),l.limitProgress);let m=p;c||(m=Math.min(Math.max(h[0].originalProgress,-l.limitProgress),l.limitProgress));const v=h[0].swiperSlideOffset,O=[e.params.cssMode?-v-e.translate:-v,0,0],P=[0,0,0];let z=!1;e.isHorizontal()||(O[1]=O[0],O[0]=0);let b={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};p<0?(b=l.next,z=!0):p>0&&(b=l.prev,z=!0),O.forEach((I,L)=>{O[L]=`calc(${I}px + (${a(b.translate[L])} * ${Math.abs(p*f)}))`}),P.forEach((I,L)=>{P[L]=b.rotate[L]*Math.abs(p*f)}),h[0].style.zIndex=-Math.abs(Math.round(N))+s.length;const Qe=O.join(", "),Ge=`rotateX(${P[0]}deg) rotateY(${P[1]}deg) rotateZ(${P[2]}deg)`,Xe=m<0?`scale(${1+(1-b.scale)*m*f})`:`scale(${1-(1-b.scale)*m*f})`,Ye=m<0?1+(1-b.opacity)*m*f:1-(1-b.opacity)*m*f,Ze=`translate3d(${Qe}) ${Ge} ${Xe}`;if(z&&b.shadow||!z){let I=h.children(".swiper-slide-shadow");if(I.length===0&&b.shadow&&(I=vt(l,h)),I.length){const L=l.shadowPerProgress?p*(1/l.limitProgress):p;I[0].style.opacity=Math.min(Math.max(Math.abs(L),0),1)}}const me=ht(l,h);me.transform(Ze).css({opacity:Ye}),b.origin&&me.css("transform-origin",b.origin)}},setTransition:s=>{const{transformEl:i}=e.params.creativeEffect;(i?e.slides.find(i):e.slides).transition(s).find(".swiper-slide-shadow").transition(s),mt({swiper:e,duration:s,transformEl:i,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}const $t=()=>tt().$img,bt={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},Et=e=>{const t=T(()=>({provider:e.provider,preset:e.preset})),r=T(()=>({width:j(e.width),height:j(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),a=T(()=>({...e.modifiers,width:j(e.width),height:j(e.height),format:e.format,quality:e.quality,background:e.background,fit:e.fit}));return{options:t,attrs:r,modifiers:a}},St={...bt,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},Pt=rt({name:"NuxtImg",props:St,emits:["load"],setup:(e,t)=>{const r=$t(),a=Et(e),n=M(!1),o=T(()=>r.getSizes(e.src,{...a.options.value,sizes:e.sizes,modifiers:{...a.modifiers.value,width:j(e.width),height:j(e.height)}})),s=T(()=>{const c=a.attrs.value;return e.sizes&&(c.sizes=o.value.sizes,c.srcset=o.value.srcset),c}),i=T(()=>{let c=e.placeholder;if(c===""&&(c=!0),!c||n.value)return!1;if(typeof c=="string")return c;const d=Array.isArray(c)?c:typeof c=="number"?[c,c]:[10,10];return r(e.src,{...a.modifiers.value,width:d[0],height:d[1],quality:d[2]||50},a.options.value)}),u=T(()=>e.sizes?o.value.src:r(e.src,a.modifiers.value,a.options.value)),l=T(()=>i.value?i.value:u.value);if(e.preload){const c=Object.values(o.value).every(d=>d);Je({link:[{rel:"preload",as:"image",...c?{href:o.value.src,imagesizes:o.value.sizes,imagesrcset:o.value.srcset}:{href:l.value}}]})}const f=M();return at(()=>{if(i.value){const c=new Image;c.src=u.value,c.onload=d=>{f.value.src=u.value,n.value=!0,t.emit("load",d)}}else f.value.onload=c=>{t.emit("load",c)}}),()=>nt("img",{ref:f,key:l.value,src:l.value,...s.value,...t.attrs})}});var Ot=Function.prototype.toString,ae=Object.create,Tt=Object.prototype.toString,xt=function(){function e(){this._keys=[],this._values=[]}return e.prototype.has=function(t){return!!~this._keys.indexOf(t)},e.prototype.get=function(t){return this._values[this._keys.indexOf(t)]},e.prototype.set=function(t,r){this._keys.push(t),this._values.push(r)},e}();function Ct(){return new xt}function At(){return new WeakMap}var It=typeof WeakMap<"u"?At:Ct;function de(e){if(!e)return ae(null);var t=e.constructor;if(t===Object)return e===Object.prototype?{}:ae(e);if(~Ot.call(t).indexOf("[native code]"))try{return new t}catch{}return ae(e)}function Lt(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}function wt(e){return e.flags}var kt=/test/g.flags==="g"?wt:Lt;function Le(e){var t=Tt.call(e);return t.substring(8,t.length-1)}function Mt(e){return e[Symbol.toStringTag]||Le(e)}var Nt=typeof Symbol<"u"?Mt:Le,jt=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,we=Object.getOwnPropertyNames,pe=Object.getOwnPropertySymbols,ke=Object.prototype,Me=ke.hasOwnProperty,Ft=ke.propertyIsEnumerable,Ne=typeof pe=="function";function Dt(e){return we(e).concat(pe(e))}var Rt=Ne?Dt:we;function K(e,t,r){for(var a=Rt(e),n=0,o=a.length,s=void 0,i=void 0;n<o;++n)if(s=a[n],!(s==="callee"||s==="caller")){if(i=Bt(e,s),!i){t[s]=r.copier(e[s],r);continue}!i.get&&!i.set&&(i.value=r.copier(i.value,r));try{jt(t,s,i)}catch{t[s]=i.value}}return t}function zt(e,t){var r=new t.Constructor;t.cache.set(e,r);for(var a=0,n=e.length;a<n;++a)r[a]=t.copier(e[a],t);return r}function Ut(e,t){var r=new t.Constructor;return t.cache.set(e,r),K(e,r,t)}function je(e,t){return e.slice(0)}function Ht(e,t){return e.slice(0,e.size,e.type)}function Wt(e,t){return new t.Constructor(je(e.buffer))}function Vt(e,t){return new t.Constructor(e.getTime())}function Be(e,t){var r=new t.Constructor;return t.cache.set(e,r),e.forEach(function(a,n){r.set(n,t.copier(a,t))}),r}function qt(e,t){return K(e,Be(e,t),t)}function Qt(e,t){var r=de(t.prototype);t.cache.set(e,r);for(var a in e)Me.call(e,a)&&(r[a]=t.copier(e[a],t));return r}function Gt(e,t){var r=de(t.prototype);t.cache.set(e,r);for(var a in e)Me.call(e,a)&&(r[a]=t.copier(e[a],t));for(var n=pe(e),o=0,s=n.length,i=void 0;o<s;++o)i=n[o],Ft.call(e,i)&&(r[i]=t.copier(e[i],t));return r}var Xt=Ne?Gt:Qt;function Yt(e,t){var r=de(t.prototype);return t.cache.set(e,r),K(e,r,t)}function ne(e,t){return new t.Constructor(e.valueOf())}function Zt(e,t){var r=new t.Constructor(e.source,kt(e));return r.lastIndex=e.lastIndex,r}function H(e,t){return e}function Fe(e,t){var r=new t.Constructor;return t.cache.set(e,r),e.forEach(function(a){r.add(t.copier(a,t))}),r}function Jt(e,t){return K(e,Fe(e,t),t)}var Kt=Array.isArray,ye=Object.assign,er=Object.getPrototypeOf,De={array:zt,arrayBuffer:je,blob:Ht,dataView:Wt,date:Vt,error:H,map:Be,object:Xt,regExp:Zt,set:Fe},tr=ye({},De,{array:Ut,map:qt,object:Yt,set:Jt});function rr(e){return{Arguments:e.object,Array:e.array,ArrayBuffer:e.arrayBuffer,Blob:e.blob,Boolean:ne,DataView:e.dataView,Date:e.date,Error:e.error,Float32Array:e.arrayBuffer,Float64Array:e.arrayBuffer,Int8Array:e.arrayBuffer,Int16Array:e.arrayBuffer,Int32Array:e.arrayBuffer,Map:e.map,Number:ne,Object:e.object,Promise:H,RegExp:e.regExp,Set:e.set,String:ne,WeakMap:H,WeakSet:H,Uint8Array:e.arrayBuffer,Uint8ClampedArray:e.arrayBuffer,Uint16Array:e.arrayBuffer,Uint32Array:e.arrayBuffer,Uint64Array:e.arrayBuffer}}function Re(e){var t=ye({},De,e),r=rr(t),a=r.Array,n=r.Object;function o(s,i){if(i.prototype=i.Constructor=void 0,!s||typeof s!="object")return s;if(i.cache.has(s))return i.cache.get(s);if(i.prototype=s.__proto__||er(s),i.Constructor=i.prototype&&i.prototype.constructor,!i.Constructor||i.Constructor===Object)return n(s,i);if(Kt(s))return a(s,i);var u=r[Nt(s)];return u?u(s,i):typeof s.then=="function"?s:n(s,i)}return function(i){return o(i,{Constructor:void 0,cache:It(),copier:o,prototype:void 0})}}function ar(e){return Re(ye({},tr,e))}ar({});Re({});var V=e=>Array.isArray(e),nr=e=>e===!0||e===!1,ve=e=>Symbol.iterator in Object(e),ge=e=>Object.prototype.toString.call(e).includes("Object"),or=e=>[void 0,null,!1,NaN,0,""].includes(e)||ve(e)&&typeof e=="object"&&"length"in e&&e.length===0||ve(e)&&typeof e=="object"&&"size"in e&&e.size===0?!0:ge(e)?!Object.keys(e).length:!1,q=e=>typeof e=="number"&&!isNaN(e),sr=e=>Object.prototype.toString.call(e)==="[object Function]",he=e=>q(e)&&e%1===0,ir=e=>e===null||typeof e>"u",F=e=>Object.prototype.toString.call(e)==="[object String]",lr={condition:"Assert condition failed","no-value":"Assert value not undefined/null failed"},_e=(e,t,r)=>[lr[e],t?`: ${t}`:null,or(r)?null:`: ${JSON.stringify(r)}`].filter(Boolean).join(""),cr=e=>(t,r,a)=>new Error(e(t,r,a)),ur=()=>({formatter:_e,errorCreator:cr(_e)}),w=ur(),ze=e=>(t,r,a)=>{const n=(i,u)=>w.errorCreator(i,r,u),o=(i,u,l)=>{var f,c;l&&((f=w.errorReporter)==null||f.call(w,i,l,r,u)),!l&&((c=w.warningReporter)==null||c.call(w,i,r,u))},s=sr(a)?a():a??{};if(nr(t)&&!t){if(!e){const i=n("condition",s);throw o("condition",s,i),i}return o("condition",s),!1}if(ir(t)){if(!e){const i=n("no-value",s);throw o("no-value",s,i),i}return o("no-value",s),!1}return t},fr=ze(!1),dr=ze(!0),pr=fr;pr.soft=dr;var yr=(e,t=-1/0,r=1/0)=>Math.max(t??-1/0,Math.min(e,r??1/0)),gr=/\p{Lu}/u,hr=/\p{Ll}/u,$e=/^\p{Lu}(?!\p{Lu})/gu,Ue=/([\p{Alpha}\p{N}_]|$)/u,He=/[ \-._]+/,mr=new RegExp(`^${He.source}`),be=new RegExp(He.source+Ue.source,"gu"),Ee=new RegExp(`\\d+${Ue.source}`,"gu"),vr={preserveConsecutiveUppercase:!1},_r=e=>{let t=!1,r=!1,a=!1;for(let n=0;n<e.length;n++){const o=e[n];t&&gr.test(o)?(e=`${e.slice(0,n)}-${e.slice(n)}`,t=!1,a=r,r=!0,n++):r&&a&&hr.test(o)?(e=`${e.slice(0,n-1)}-${e.slice(n-1)}`,a=r,r=!1,t=!0):(t=o.toLowerCase()===o&&o.toUpperCase()!==o,a=r,r=o.toUpperCase()===o&&o.toLowerCase()!==o)}return e},$r=e=>($e.lastIndex=0,e.replace($e,t=>t.toLowerCase())),br=e=>(be.lastIndex=0,Ee.lastIndex=0,e.replace(be,(t,r)=>r.toUpperCase()).replace(Ee,t=>t.toUpperCase())),Er=(e,t)=>{if(!V(!e)&&!F(e))throw new TypeError("Expected the input to be `string | string[]`");return t={...vr,...t},e=V(e)?e.map(r=>r.trim()).filter(Boolean).join("-"):e.trim(),e.length?e.length===1?e.toLowerCase():(e!==e.toLowerCase()&&(e=_r(e)),e=e.replace(mr,""),e=t.preserveConsecutiveUppercase?$r(e):e.toLowerCase(),br(e)):""},Sr=(e,t)=>{const r={numbers:!1,...t};let a=e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s._]+/g,"-");return r.numbers?(a=a.replace(/\d+/,"-$&").replace(/(\d)([A-Z])/g,"$1-$2"),a.startsWith("-")?a.slice(1).toLowerCase():a.toLowerCase()):a.toLowerCase()},Pr={preserveConsecutiveUppercase:!1},Or=(e,t)=>{const r=Er(e,{...Pr,...t});return r.length?r[0].toUpperCase()+r.slice(1):""};const A=(e,t)=>t(e)?!0:!ge(e)||Object.keys(e).length!==2?!1:!Object.entries(e).some(([r,a])=>{const n=!["enter","leave"].includes(r),o=!t(a);return n||o}),Tr=e=>A(e,t=>he(t)&&t>=0),xr=e=>A(e,t=>F(t)&&t.trim()!==""),Cr=e=>A(e,t=>he(t)&&t>=0),We=300,Ar="cubic-bezier(.25, .8, .5, 1)",Ir=0,Lr="y",wr=[0,-16],kr="both",Mr="50% 50%",Nr=0,jr=We,ee={inheritAttrs:!1,props:{duration:{validator:Tr,default:We},easing:{validator:xr,default:()=>Ar},delay:{validator:Cr,default:Ir},noOpacity:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},mode:{type:String,default:void 0},group:{type:Boolean,default:!1},tag:{type:String,default:"span"},noMove:{type:Boolean,default:!1},moveDuration:{type:Number,default:jr}},computed:{cComponent(){return this.group?ot:st},cAttrs(){const{appear:e,mode:t,tag:r,duration:a}=this;return this.group?{appear:e,tag:r,duration:a,...this.$attrs}:{appear:e,mode:t,duration:a}},cHooks(){return{beforeEnter:(...e)=>{this.reduceTransition(...e),this.$emit("before-enter",...e)},beforeLeave:(...e)=>{var t;this.reduceTransition(...e),(t=this.initLeaving)==null||t.call(this,...e),this.$emit("before-leave",...e)},enter:(...e)=>{var t;(t=this.onEnter)==null||t.call(this,...e),this.$emit("enter",...e)},leave:(...e)=>{var t;(t=this.onLeave)==null||t.call(this,...e),this.$emit("leave",...e)},afterEnter:(...e)=>{var t;this.resetTransition(...e),(t=this.resetElement)==null||t.call(this,...e),this.$emit("after-enter",...e)},afterLeave:(...e)=>{var t;this.resetTransition(...e),(t=this.resetElement)==null||t.call(this,...e),this.$emit("after-leave",...e)}}}},methods:{setupTransition(e,t="enter"){var r,a,n,o,s,i;const u=(a=(r=this.duration)==null?void 0:r[t])!=null?a:this.duration,l=(o=(n=this.easing)==null?void 0:n[t])!=null?o:this.easing,f=(i=(s=this.delay)==null?void 0:s[t])!=null?i:this.delay;e.style.setProperty("transition-duration",`${u}ms`,"important"),e.style.setProperty("transition-timing-function",`${l}`,"important"),e.style.setProperty("transition-delay",`${f}ms`,"important")},reduceTransition(e){e.style.setProperty("transition-duration","0ms","important"),e.style.setProperty("transition-delay","0ms","important")},resetTransition(e){e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-timing-function"),e.style.removeProperty("transition-delay")},initLeaving(e){if(!this.group||this.noMove)return e;const t=getComputedStyle(e),{width:r,height:a}=t,{marginLeft:n,marginTop:o}=t;return e.style.setProperty("left",`${e.offsetLeft-parseFloat(n)}px`,"important"),e.style.setProperty("top",`${e.offsetTop-parseFloat(o)}px`,"important"),e.style.setProperty("width",`${parseFloat(r)}px`,"important"),e.style.setProperty("height",`${parseFloat(a)}px`,"important"),e.style.setProperty("position","absolute","important"),e},setMoveDuration(){var e;this.group&&this.$el&&((e=this.$el.style)==null||e.setProperty("--move-duration",`${this.moveDuration}ms`))}},watch:{moveDuration(){this.setMoveDuration()},group(){this.setMoveDuration()}},mounted(){this.setMoveDuration()}},Br=e=>A(e,t=>F(t)&&["x","y"].includes(t)),te=(e,t)=>{const r=e.__vccOpts||e;for(const[a,n]of t)r[a]=n;return r},Fr={name:"transition-expand",mixins:[ee],props:{axis:{validator:Br,default:Lr}},data:()=>({}),computed:{},methods:{async onEnter(e){await this.$nextTick(),await this.$nextTick(),this.getSizes(e),this.collapseElement(e,"enter"),e.offsetTop,this.setupTransition(e,"enter"),this.expandElement(e,"enter")},onLeave(e){this.getSizes(e),this.expandElement(e,"leave"),e.offsetTop,this.setupTransition(e,"leave"),this.collapseElement(e,"leave")},expandElement(e,t="enter"){var r,a;const n=(a=(r=this.axis)==null?void 0:r[t])!=null?a:this.axis,o=n==="x"?"left":"top",s=n==="x"?"right":"bottom",i=e.visual.size[n],u=e.visual.margin[n],l=e.visual.padding[n];this.noOpacity||e.style.setProperty("opacity",e.visual.opacity),delete e.visual,e.style.setProperty(n==="x"?"width":"height",`${parseFloat(i)}px`),e.style.setProperty(`padding-${o}`,`${parseFloat(l[0])}px`),e.style.setProperty(`padding-${s}`,`${parseFloat(l[1])}px`),e.style.setProperty(`margin-${o}`,`${parseFloat(u[0])}px`),e.style.setProperty(`margin-${s}`,`${parseFloat(u[1])}px`)},collapseElement(e,t="enter"){var r,a;const n=(a=(r=this.axis)==null?void 0:r[t])!=null?a:this.axis,o=n==="x"?"width":"height",s=n==="x"?"left":"top",i=n==="x"?"right":"bottom";this.noOpacity||e.style.setProperty("opacity",0),e.style.setProperty(o,"0px"),e.style.setProperty(`padding-${s}`,"0px"),e.style.setProperty(`padding-${i}`,"0px"),e.style.setProperty(`margin-${s}`,"0px"),e.style.setProperty(`margin-${i}`,"0px")},resetElement(e){e.style.removeProperty("opacity"),e.style.removeProperty("width"),e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-right"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("padding-left"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-right"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("margin-left")},getSizes(e){const t=getComputedStyle(e),{opacity:r}=t,{width:a,height:n}=t,{paddingTop:o,paddingRight:s,paddingBottom:i,paddingLeft:u}=t,{marginTop:l,marginRight:f,marginBottom:c,marginLeft:d}=t;e.visual={opacity:r,size:{x:a,y:n},padding:{x:[u,s],y:[o,i]},margin:{x:[d,f],y:[l,c]}}}}};function Dr(e,t,r,a,n,o){return g(),x(X(e.cComponent),Q({name:"expand"},e.cAttrs,G(e.cHooks)),{default:y(()=>[C(e.$slots,"default")]),_:3},16)}const oe=te(Fr,[["render",Dr]]),Rr={name:"transition-fade",mixins:[ee],props:{},data:()=>({}),computed:{},methods:{onEnter(e){this.fadeElement(e,"enter"),e.offsetTop,this.setupTransition(e,"enter"),this.$nextTick(()=>e.style.removeProperty("opacity"))},onLeave(e){this.setupTransition(e,"leave"),this.fadeElement(e,"leave")},fadeElement(e,t="enter"){e.style.setProperty("opacity",0)},resetElement(e){e.style.removeProperty("opacity")}}};function zr(e,t,r,a,n,o){return g(),x(X(e.cComponent),Q({name:"fade"},e.cAttrs,G(e.cHooks)),{default:y(()=>[C(e.$slots,"default")]),_:3},16)}const se=te(Rr,[["render",zr]]),Ur=e=>A(e,t=>F(t)&&["x","y","both"].includes(t)),Hr=e=>A(e,t=>F(t)&&t.trim()!==""),Wr=e=>A(e,t=>q(t)&&t>=0&&t<=1),Ve=e=>{const t=e.startsWith("matrix3d")?"matrix3d":"matrix",r=t==="matrix3d"?e.slice(9,-1).split(",").map(Number):e.startsWith("matrix")?e.slice(7,-1).split(",").map(Number):[1,0,0,1,0,0];return[t,r]},Vr={name:"transition-scale",mixins:[ee],props:{axis:{validator:Ur,default:kr},origin:{validator:Hr,default:Mr},scale:{validator:Wr,default:Nr}},data:()=>({}),computed:{},methods:{onEnter(e){this.scaleElement(e,"enter"),e.offsetTop,this.setupTransition(e,"enter"),this.$nextTick(()=>{e.style.removeProperty("opacity"),e.style.removeProperty("transform")})},onLeave(e){this.setupTransition(e,"leave"),this.scaleElement(e,"leave")},scaleElement(e,t="enter"){var r,a,n,o,s,i;const{transform:u}=getComputedStyle(e),l=(a=(r=this.axis)==null?void 0:r[t])!=null?a:this.axis,f=(o=(n=this.origin)==null?void 0:n[t])!=null?o:this.origin,c=yr(1e-4,(i=(s=this.scale)==null?void 0:s[t])!=null?i:this.scale,.9999),[d,h]=Ve(u);u.startsWith("matrix3d")?(l!=="y"&&(h[0]=c),l!=="x"&&(h[5]=c)):u.startsWith("matrix")?(l!=="y"&&(h[0]=c),l!=="x"&&(h[3]=c)):(h[0]=l==="y"?1:c,h[3]=l==="x"?1:c),this.noOpacity||e.style.setProperty("opacity",0),e.style.setProperty("transform",`${d}(${h})`),e.style.setProperty("transform-origin",`${f}`)},resetElement(e){e.style.removeProperty("opacity"),e.style.removeProperty("transform"),e.style.removeProperty("transform-origin")}}};function qr(e,t,r,a,n,o){return g(),x(X(e.cComponent),Q({name:"scale"},e.cAttrs,G(e.cHooks)),{default:y(()=>[C(e.$slots,"default")]),_:3},16)}const ie=te(Vr,[["render",qr]]),Qr=e=>A(e,t=>!V(t)||t.length!==2?!1:!t.some(r=>he(r)?!1:F(r)?isNaN(Number(r.endsWith("%")?r.slice(0,-1):r)):!0)),Gr={name:"transition-slide",mixins:[ee],props:{offset:{validator:Qr,default:()=>wr}},data:()=>({}),computed:{},methods:{onEnter(e){this.slideElement(e,"enter"),e.offsetTop,this.setupTransition(e,"enter"),e.style.removeProperty("opacity"),e.style.removeProperty("transform")},onLeave(e){this.setupTransition(e,"leave"),this.slideElement(e,"leave")},slideElement(e,t="enter"){var r,a;const{width:n,height:o,transform:s}=getComputedStyle(e),i=(a=(r=this.offset)==null?void 0:r[t])!=null?a:this.offset;let[u,l]=i;q(u)||(u=u.endsWith("%")?parseFloat(n)*(parseFloat(u.slice(0,-1))||0)/100:parseFloat(u)),q(l)||(l=l.endsWith("%")?parseFloat(o)*(parseFloat(l.slice(0,-1))||0)/100:parseFloat(l));const[f,c]=Ve(s);s.startsWith("matrix3d")?(c[12]+=u,c[13]+=l):s.startsWith("matrix")?(c[4]+=u,c[5]+=l):(c[4]=u,c[5]=l),this.noOpacity||e.style.setProperty("opacity",0),e.style.setProperty("transform",`${f}(${c})`)},resetElement(e){e.style.removeProperty("opacity"),e.style.removeProperty("transform")}}};function Xr(e,t,r,a,n,o){return g(),x(X(e.cComponent),Q({name:"slide"},e.cAttrs,G(e.cHooks)),{default:y(()=>[C(e.$slots,"default")]),_:3},16)}const le=te(Gr,[["render",Xr]]),W={[oe.name]:oe,[se.name]:se,[ie.name]:ie,[le.name]:le},Se=(e,t,r)=>{var a;(a=e.props)!=null||(e.props={}),e.props[t]={default:V(r)||ge(r)?()=>r:r}},Pe=(e,t)=>{var r,a,n;const o=Sr(e),s=Or(e),i=(r=t==null?void 0:t.defaultProps)!=null?r:{},u=(n=(a=t==null?void 0:t.componentDefaultProps)==null?void 0:a[s])!=null?n:{};return Object.entries(i).forEach(([l,f])=>{Se(W[o],l,f)}),Object.entries(u).forEach(([l,f])=>{Se(W[o],l,f)}),W[o]},Yr=function(e,t={}){t!=null&&t.components?Object.entries(t.components).forEach(([r,a])=>{e.component(a,Pe(r,t))}):Object.keys(W).forEach(r=>{e.component(r,Pe(r,t))})};typeof window<"u"&&window.Vue&&window.Vue.use({install:Yr});const Zr={name:"TransitionFade",inheritAttrs:!1,components:{TheTransition:se}};function Jr(e,t,r,a,n,o){const s=B("the-transition");return g(),x(s,Z(J(e.$attrs)),{default:y(()=>[C(e.$slots,"default")]),_:3},16)}const Kr=Y(Zr,[["render",Jr]]),ea={name:"TransitionSlide",inheritAttrs:!1,components:{TheTransition:le}};function ta(e,t,r,a,n,o){const s=B("the-transition");return g(),x(s,Z(J(e.$attrs)),{default:y(()=>[C(e.$slots,"default")]),_:3},16)}const ra=Y(ea,[["render",ta]]),aa={name:"TransitionExpand",inheritAttrs:!1,components:{TheTransition:oe}};function na(e,t,r,a,n,o){const s=B("the-transition");return g(),x(s,Z(J(e.$attrs)),{default:y(()=>[C(e.$slots,"default")]),_:3},16)}const oa=Y(aa,[["render",na]]),sa={name:"TransitionScale",inheritAttrs:!1,components:{TheTransition:ie}};function ia(e,t,r,a,n,o){const s=B("the-transition");return g(),x(s,Z(J(e.$attrs)),{default:y(()=>[C(e.$slots,"default")]),_:3},16)}const la=Y(sa,[["render",ia]]);var Oe;const R=typeof window<"u",ca=e=>typeof e=="string",ua=()=>{};R&&((Oe=window==null?void 0:window.navigator)!=null&&Oe.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function fa(e){return typeof e=="function"?e():k(e)}function da(e){return e}function pa(e){return it()?(lt(e),!0):!1}function ce(e){var t;const r=fa(e);return(t=r==null?void 0:r.$el)!=null?t:r}const qe=R?window:void 0;R&&window.document;R&&window.navigator;R&&window.location;function ya(...e){let t,r,a,n;if(ca(e[0])||Array.isArray(e[0])?([r,a,n]=e,t=qe):[t,r,a,n]=e,!t)return ua;Array.isArray(r)||(r=[r]),Array.isArray(a)||(a=[a]);const o=[],s=()=>{o.forEach(f=>f()),o.length=0},i=(f,c,d)=>(f.addEventListener(c,d,n),()=>f.removeEventListener(c,d,n)),u=Ie(()=>ce(t),f=>{s(),f&&o.push(...r.flatMap(c=>a.map(d=>i(f,c,d))))},{immediate:!0,flush:"post"}),l=()=>{u(),s()};return pa(l),l}const ue=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},fe="__vueuse_ssr_handlers__";ue[fe]=ue[fe]||{};ue[fe];function Te(e,{window:t=qe,scrollTarget:r}={}){const a=M(!1),n=()=>{if(!t)return;const o=t.document,s=ce(e);if(!s)a.value=!1;else{const i=s.getBoundingClientRect();a.value=i.top<=(t.innerHeight||o.documentElement.clientHeight)&&i.left<=(t.innerWidth||o.documentElement.clientWidth)&&i.bottom>=0&&i.right>=0}};return Ie(()=>ce(e),()=>n(),{immediate:!0,flush:"post"}),t&&ya(r||t,"scroll",n,{capture:!1,passive:!0}),a}var xe;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(xe||(xe={}));var ga=Object.defineProperty,Ce=Object.getOwnPropertySymbols,ha=Object.prototype.hasOwnProperty,ma=Object.prototype.propertyIsEnumerable,Ae=(e,t,r)=>t in e?ga(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,va=(e,t)=>{for(var r in t||(t={}))ha.call(t,r)&&Ae(e,r,t[r]);if(Ce)for(var r of Ce(t))ma.call(t,r)&&Ae(e,r,t[r]);return e};const _a={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};va({linear:da},_a);const $a={class:"p-10"},ba={class:"btn"},Ea={class:"flex gap-1"},Sa={key:0,class:"bg-orange-800 p-10"},Pa={key:0,class:"bg-orange-800 p-10"},Oa={key:0,class:"bg-orange-800 p-10"},Ta={key:0,class:"bg-orange-800 p-10"},xa=S("p",{class:"my-1"},"Slide",-1),Ca={class:"flex gap-1"},Aa={key:0,class:"bg-orange-800 p-10"},Ia={key:0,class:"bg-orange-800 p-10"},La={key:0,class:"bg-orange-800 p-10"},wa=S("p",{class:"my-1"},"Scale",-1),ka={class:"flex gap-1"},Ma={key:0,class:"bg-orange-800 p-10"},Na={key:0,class:"bg-orange-800 p-10"},ja={key:0,class:"bg-orange-800 p-10"},Ba={key:0,class:"bg-orange-800 p-10"},Fa=S("h1",null,"Hello world",-1),Ha={__name:"samples",setup(e){const{user:t}=pt(),r=M("John Doe"),a=M(!0),n=M(null),o=Te(n),s=M(null),i=Te(s);return(u,l)=>{const f=B("SwiperSlide"),c=B("Swiper"),d=Pt,h=dt,N=Kr,p=ra,m=oa,v=la,O=ct;return g(),$("div",$a,[S("button",ba,"ref "+D(r.value),1),_(c,{modules:["SwiperAutoplay"in u?u.SwiperAutoplay:k(yt),"SwiperEffectCreative"in u?u.SwiperEffectCreative:k(_t)],"slides-per-view":1,loop:!0,effect:"creative",autoplay:{delay:2e3,disableOnInteraction:!0},"creative-effect":{prev:{shadow:!1,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}}},{default:y(()=>[(g(),$(ut,null,ft(10,P=>_(f,{key:P,class:"bg-rose-200 p-10"},{default:y(()=>[U(D(P),1)]),_:2},1024)),64))]),_:1},8,["modules"]),_(d,{src:"https://wallpaperaccess.com/full/1356237.jpg",class:"w-[200px] inline"}),_(h,{name:"uil:github",class:"m-10 text-orange-500 text-2xl"}),S("div",Ea,[_(N,{duration:2e3},{default:y(()=>[a.value?(g(),$("div",Sa,"Hello")):E("",!0)]),_:1}),_(p,{delay:1e3,duration:1500},{default:y(()=>[a.value?(g(),$("div",Pa,"Hello")):E("",!0)]),_:1}),_(N,null,{default:y(()=>[a.value?(g(),$("div",Oa,"Hello")):E("",!0)]),_:1}),_(m,null,{default:y(()=>[a.value?(g(),$("div",Ta,"Hello")):E("",!0)]),_:1})]),xa,S("div",Ca,[_(p,null,{default:y(()=>[a.value?(g(),$("div",Aa,"Hello")):E("",!0)]),_:1}),_(p,{offset:[100,0]},{default:y(()=>[a.value?(g(),$("div",Ia,"Hello")):E("",!0)]),_:1}),_(p,{offset:[0,100]},{default:y(()=>[a.value?(g(),$("div",La,"Hello")):E("",!0)]),_:1})]),wa,S("div",ka,[_(v,null,{default:y(()=>[a.value?(g(),$("div",Ma,"Hello")):E("",!0)]),_:1}),_(v,{scale:.5},{default:y(()=>[a.value?(g(),$("div",Na,"Hello")):E("",!0)]),_:1},8,["scale"]),_(v,{scale:1.5},{default:y(()=>[a.value?(g(),$("div",ja,"Hello")):E("",!0)]),_:1},8,["scale"])]),S("button",{onClick:l[0]||(l[0]=P=>a.value=!a.value),class:"btn"},"Toggle"),U(" "+D(k(o))+" "+D(k(i))+" ",1),_(v,null,{default:y(()=>[k(o)?(g(),$("div",Ba,"Hello")):E("",!0)]),_:1}),S("div",{class:"",ref_key:"target",ref:n},null,512),S("div",{ref_key:"target2",ref:s,class:"p-20 bg-teal-300 m-10"},[Fa,U(" "+D(k(t))+" ",1),_(O,{to:"/login"},{default:y(()=>[U("Login")]),_:1})],512)])}}};export{Ha as default};