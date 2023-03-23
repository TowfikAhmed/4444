import{u as D}from"./composables.ee50d3c0.js";import{Y as P,Z as R,$ as H,a as U,j as h,a0 as $,e as X,i as z,Q as Y,h as Z,o as k,l as N,v as G,t as C,u as O,z as M,A as q,a1 as B,F as J,x as Q,B as K}from"./entry.9c3217d9.js";import W from"./Icon.4ea5eaa7.js";import{u as w}from"./useAuth.6bfd9df3.js";import"./useApi.1e322299.js";function ee({swiper:e,extendParams:i,on:t,emit:a}){let r;e.autoplay={running:!1,paused:!1},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function s(){if(!e.size){e.autoplay.running=!1,e.autoplay.paused=!1;return}const c=e.slides.eq(e.activeIndex);let g=e.params.autoplay.delay;c.attr("data-swiper-autoplay")&&(g=c.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(r),r=R(()=>{let p;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),p=e.slidePrev(e.params.speed,!0,!0),a("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?o():(p=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),a("autoplay")):(p=e.slidePrev(e.params.speed,!0,!0),a("autoplay")):e.params.loop?(e.loopFix(),p=e.slideNext(e.params.speed,!0,!0),a("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?o():(p=e.slideTo(0,e.params.speed,!0,!0),a("autoplay")):(p=e.slideNext(e.params.speed,!0,!0),a("autoplay")),(e.params.cssMode&&e.autoplay.running||p===!1)&&s()},g)}function u(){return typeof r<"u"||e.autoplay.running?!1:(e.autoplay.running=!0,a("autoplayStart"),s(),!0)}function o(){return!e.autoplay.running||typeof r>"u"?!1:(r&&(clearTimeout(r),r=void 0),e.autoplay.running=!1,a("autoplayStop"),!0)}function f(c){e.autoplay.running&&(e.autoplay.paused||(r&&clearTimeout(r),e.autoplay.paused=!0,c===0||!e.params.autoplay.waitForTransition?(e.autoplay.paused=!1,s()):["transitionend","webkitTransitionEnd"].forEach(g=>{e.$wrapperEl[0].addEventListener(g,d)})))}function l(){const c=P();c.visibilityState==="hidden"&&e.autoplay.running&&f(),c.visibilityState==="visible"&&e.autoplay.paused&&(s(),e.autoplay.paused=!1)}function d(c){!e||e.destroyed||!e.$wrapperEl||c.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(g=>{e.$wrapperEl[0].removeEventListener(g,d)}),e.autoplay.paused=!1,e.autoplay.running?s():o())}function n(){e.params.autoplay.disableOnInteraction?o():(a("autoplayPause"),f()),["transitionend","webkitTransitionEnd"].forEach(c=>{e.$wrapperEl[0].removeEventListener(c,d)})}function m(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,a("autoplayResume"),s())}function v(){e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",n),e.$el.on("mouseleave",m))}function x(){e.$el.off("mouseenter",n),e.$el.off("mouseleave",m)}t("init",()=>{e.params.autoplay.enabled&&(u(),P().addEventListener("visibilitychange",l),v())}),t("beforeTransitionStart",(c,g,p)=>{e.autoplay.running&&(p||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(g):o())}),t("sliderFirstMove",()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?o():f())}),t("touchEnd",()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&s()}),t("destroy",()=>{x(),e.autoplay.running&&o(),P().removeEventListener("visibilitychange",l)}),Object.assign(e.autoplay,{pause:f,run:s,start:u,stop:o})}function te(e){const{effect:i,swiper:t,on:a,setTranslate:r,setTransition:s,overwriteParams:u,perspective:o,recreateShadows:f,getEffectParams:l}=e;a("beforeInit",()=>{if(t.params.effect!==i)return;t.classNames.push(`${t.params.containerModifierClass}${i}`),o&&o()&&t.classNames.push(`${t.params.containerModifierClass}3d`);const n=u?u():{};Object.assign(t.params,n),Object.assign(t.originalParams,n)}),a("setTranslate",()=>{t.params.effect===i&&r()}),a("setTransition",(n,m)=>{t.params.effect===i&&s(m)}),a("transitionEnd",()=>{if(t.params.effect===i&&f){if(!l||!l().slideShadows)return;t.slides.each(n=>{t.$(n).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()}),f()}});let d;a("virtualUpdate",()=>{t.params.effect===i&&(t.slides.length||(d=!0),requestAnimationFrame(()=>{d&&t.slides&&t.slides.length&&(r(),d=!1)}))})}function ae(e,i){return e.transformEl?i.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):i}function ne({swiper:e,duration:i,transformEl:t,allSlides:a}){const{slides:r,activeIndex:s,$wrapperEl:u}=e;if(e.params.virtualTranslate&&i!==0){let o=!1,f;a?f=t?r.find(t):r:f=t?r.eq(s).find(t):r.eq(s),f.transitionEnd(()=>{if(o||!e||e.destroyed)return;o=!0,e.animating=!1;const l=["webkitTransitionEnd","transitionend"];for(let d=0;d<l.length;d+=1)u.trigger(l[d])})}}function se(e,i,t){const a=`swiper-slide-shadow${t?`-${t}`:""}`,r=e.transformEl?i.find(e.transformEl):i;let s=r.children(`.${a}`);return s.length||(s=H(`<div class="swiper-slide-shadow${t?`-${t}`:""}"></div>`),r.append(s)),s}function ie({swiper:e,extendParams:i,on:t}){i({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const a=u=>typeof u=="string"?u:`${u}px`;te({effect:"creative",swiper:e,on:t,setTranslate:()=>{const{slides:u,$wrapperEl:o,slidesSizesGrid:f}=e,l=e.params.creativeEffect,{progressMultiplier:d}=l,n=e.params.centeredSlides;if(n){const m=f[0]/2-e.params.slidesOffsetBefore||0;o.transform(`translateX(calc(50% - ${m}px))`)}for(let m=0;m<u.length;m+=1){const v=u.eq(m),x=v[0].progress,c=Math.min(Math.max(v[0].progress,-l.limitProgress),l.limitProgress);let g=c;n||(g=Math.min(Math.max(v[0].originalProgress,-l.limitProgress),l.limitProgress));const p=v[0].swiperSlideOffset,b=[e.params.cssMode?-p-e.translate:-p,0,0],T=[0,0,0];let _=!1;e.isHorizontal()||(b[1]=b[0],b[0]=0);let y={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};c<0?(y=l.next,_=!0):c>0&&(y=l.prev,_=!0),b.forEach((E,S)=>{b[S]=`calc(${E}px + (${a(y.translate[S])} * ${Math.abs(c*d)}))`}),T.forEach((E,S)=>{T[S]=y.rotate[S]*Math.abs(c*d)}),v[0].style.zIndex=-Math.abs(Math.round(x))+u.length;const L=b.join(", "),A=`rotateX(${T[0]}deg) rotateY(${T[1]}deg) rotateZ(${T[2]}deg)`,j=g<0?`scale(${1+(1-y.scale)*g*d})`:`scale(${1-(1-y.scale)*g*d})`,F=g<0?1+(1-y.opacity)*g*d:1-(1-y.opacity)*g*d,V=`translate3d(${L}) ${A} ${j}`;if(_&&y.shadow||!_){let E=v.children(".swiper-slide-shadow");if(E.length===0&&y.shadow&&(E=se(l,v)),E.length){const S=l.shadowPerProgress?c*(1/l.limitProgress):c;E[0].style.opacity=Math.min(Math.max(Math.abs(S),0),1)}}const I=ae(l,v);I.transform(V).css({opacity:F}),y.origin&&I.css("transform-origin",y.origin)}},setTransition:u=>{const{transformEl:o}=e.params.creativeEffect;(o?e.slides.find(o):e.slides).transition(u).find(".swiper-slide-shadow").transition(u),ne({swiper:e,duration:u,transformEl:o,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}const re=()=>U().$img,oe={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},le=e=>{const i=h(()=>({provider:e.provider,preset:e.preset})),t=h(()=>({width:$(e.width),height:$(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),a=h(()=>({...e.modifiers,width:$(e.width),height:$(e.height),format:e.format,quality:e.quality,background:e.background,fit:e.fit}));return{options:i,attrs:t,modifiers:a}},ue={...oe,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},de=X({name:"NuxtImg",props:ue,emits:["load"],setup:(e,i)=>{const t=re(),a=le(e),r=z(!1),s=h(()=>t.getSizes(e.src,{...a.options.value,sizes:e.sizes,modifiers:{...a.modifiers.value,width:$(e.width),height:$(e.height)}})),u=h(()=>{const n=a.attrs.value;return e.sizes&&(n.sizes=s.value.sizes,n.srcset=s.value.srcset),n}),o=h(()=>{let n=e.placeholder;if(n===""&&(n=!0),!n||r.value)return!1;if(typeof n=="string")return n;const m=Array.isArray(n)?n:typeof n=="number"?[n,n]:[10,10];return t(e.src,{...a.modifiers.value,width:m[0],height:m[1],quality:m[2]||50},a.options.value)}),f=h(()=>e.sizes?s.value.src:t(e.src,a.modifiers.value,a.options.value)),l=h(()=>o.value?o.value:f.value);if(e.preload){const n=Object.values(s.value).every(m=>m);D({link:[{rel:"preload",as:"image",...n?{href:s.value.src,imagesizes:s.value.sizes,imagesrcset:s.value.srcset}:{href:l.value}}]})}const d=z();return Y(()=>{if(o.value){const n=new Image;n.src=f.value,n.onload=m=>{d.value.src=f.value,r.value=!0,i.emit("load",m)}}else d.value.onload=n=>{i.emit("load",n)}}),()=>Z("img",{ref:d,key:l.value,src:l.value,...u.value,...i.attrs})}}),ce={class:"p-10"},fe={class:"btn"},he={__name:"samples",setup(e){w();const i=z("John Doe");return(t,a)=>{const r=B("SwiperSlide"),s=B("Swiper"),u=de,o=W;return k(),N("div",ce,[G("button",fe,"ref "+C(O(i)),1),M(s,{modules:["SwiperAutoplay"in t?t.SwiperAutoplay:O(ee),"SwiperEffectCreative"in t?t.SwiperEffectCreative:O(ie)],"slides-per-view":1,loop:!0,effect:"creative",autoplay:{delay:2e3,disableOnInteraction:!0},"creative-effect":{prev:{shadow:!1,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}}},{default:q(()=>[(k(),N(J,null,Q(10,f=>M(r,{key:f,class:"bg-rose-200 p-10"},{default:q(()=>[K(C(f),1)]),_:2},1024)),64))]),_:1},8,["modules"]),M(u,{src:"https://wallpaperaccess.com/full/1356237.jpg",class:"w-[200px] inline"}),M(o,{name:"uil:github",class:"m-10 text-orange-500 text-2xl"})])}}};export{he as default};
