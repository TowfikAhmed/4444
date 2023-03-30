import{M as Ge,h as E,F as Fe,N as j,O as x,P as A,i as m,j as g,e as F,Q as $,w as Q,J as C,T as Ve,r as Ye,u as ze,R as Ke,S as Qe,m as Xe}from"./entry.96a761ac.js";function L(e,t,...r){if(e in t){let o=t[e];return typeof o=="function"?o(...r):o}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,L),n}var re=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(re||{}),M=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(M||{});function P({visible:e=!0,features:t=0,ourProps:r,theirProps:n,...o}){var l;let a=Oe(n,r),i=Object.assign(o,{props:a});if(e||t&2&&a.static)return ie(i);if(t&1){let s=(l=a.unmount)==null||l?0:1;return L(s,{[0](){return null},[1](){return ie({...o,props:{...a,hidden:!0,style:{display:"none"}}})}})}return ie(i)}function ie({props:e,attrs:t,slots:r,slot:n,name:o}){var l,a;let{as:i,...s}=Le(e,["unmount","static"]),u=(l=r.default)==null?void 0:l.call(r,n),d={};if(n){let f=!1,p=[];for(let[v,c]of Object.entries(n))typeof c=="boolean"&&(f=!0),c===!0&&p.push(v);f&&(d["data-headlessui-state"]=p.join(" "))}if(i==="template"){if(u=Pe(u??[]),Object.keys(s).length>0||Object.keys(t).length>0){let[f,...p]=u??[];if(!Je(f)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(s).concat(Object.keys(t)).map(h=>h.trim()).filter((h,O,k)=>k.indexOf(h)===O).sort((h,O)=>h.localeCompare(O)).map(h=>`  - ${h}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(h=>`  - ${h}`).join(`
`)].join(`
`));let v=Oe((a=f.props)!=null?a:{},s),c=Ge(f,v);for(let h in v)h.startsWith("on")&&(c.props||(c.props={}),c.props[h]=v[h]);return c}return Array.isArray(u)&&u.length===1?u[0]:u}return E(i,Object.assign({},s,d),{default:()=>u})}function Pe(e){return e.flatMap(t=>t.type===Fe?Pe(t.children):[t])}function Oe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let n of e)for(let o in n)o.startsWith("on")&&typeof n[o]=="function"?(r[o]!=null||(r[o]=[]),r[o].push(n[o])):t[o]=n[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(n=>[n,void 0])));for(let n in r)Object.assign(t,{[n](o,...l){let a=r[n];for(let i of a){if(o instanceof Event&&o.defaultPrevented)return;i(o,...l)}}});return t}function Le(e,t=[]){let r=Object.assign({},e);for(let n of t)n in r&&delete r[n];return r}function Je(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Ze=0;function et(){return++Ze}function W(){return et()}var Ae=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Ae||{});function D(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let De=Symbol("Context");var q=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(q||{});function tt(){return he()!==null}function he(){return j(De,null)}function nt(e){x(De,e)}let rt=class{constructor(){this.current=this.detect(),this.currentId=0}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},X=new rt;function Y(e){if(X.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=D(e);if(t)return t.ownerDocument}return document}let de=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var B=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(B||{}),je=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(je||{}),lt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(lt||{});function ot(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(de)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var Re=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Re||{});function at(e,t=0){var r;return e===((r=Y(e))==null?void 0:r.body)?!1:L(t,{[0](){return e.matches(de)},[1](){let n=e;for(;n!==null;){if(n.matches(de))return!0;n=n.parentElement}return!1}})}function V(e){e==null||e.focus({preventScroll:!0})}let it=["textarea","input"].join(",");function ut(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,it))!=null?r:!1}function st(e,t=r=>r){return e.slice().sort((r,n)=>{let o=t(r),l=t(n);if(o===null||l===null)return 0;let a=o.compareDocumentPosition(l);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function ne(e,t,{sorted:r=!0,relativeTo:n=null,skipElements:o=[]}={}){var l;let a=(l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?l:document,i=Array.isArray(e)?r?st(e):e:ot(e);o.length>0&&i.length>1&&(i=i.filter(c=>!o.includes(c))),n=n??a.activeElement;let s=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(n))-1;if(t&4)return Math.max(0,i.indexOf(n))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},f=0,p=i.length,v;do{if(f>=p||f+p<=0)return 0;let c=u+f;if(t&16)c=(c+p)%p;else{if(c<0)return 3;if(c>=p)return 1}v=i[c],v==null||v.focus(d),f+=s}while(v!==a.activeElement);return t&6&&ut(v)&&v.select(),v.hasAttribute("tabindex")||v.setAttribute("tabindex","0"),2}function ue(e,t,r){X.isServer||A(n=>{document.addEventListener(e,t,r),n(()=>document.removeEventListener(e,t,r))})}function dt(e,t,r=g(()=>!0)){function n(l,a){if(!r.value||l.defaultPrevented)return;let i=a(l);if(i===null||!i.getRootNode().contains(i))return;let s=function u(d){return typeof d=="function"?u(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let u of s){if(u===null)continue;let d=u instanceof HTMLElement?u:D(u);if(d!=null&&d.contains(i)||l.composed&&l.composedPath().includes(d))return}return!at(i,Re.Loose)&&i.tabIndex!==-1&&l.preventDefault(),t(l,i)}let o=m(null);ue("mousedown",l=>{var a,i;r.value&&(o.value=((i=(a=l.composedPath)==null?void 0:a.call(l))==null?void 0:i[0])||l.target)},!0),ue("click",l=>{!o.value||(n(l,()=>o.value),o.value=null)},!0),ue("blur",l=>n(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var le=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(le||{});let ce=F({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:r}){return()=>{let{features:n,...o}=e,l={"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return P({ourProps:l,theirProps:o,slot:{},attrs:r,slots:t,name:"Hidden"})}}});function ct(e,t,r){X.isServer||A(n=>{window.addEventListener(e,t,r),n(()=>window.removeEventListener(e,t,r))})}var K=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(K||{});function ft(){let e=m(0);return ct("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function xe(e,t,r,n){X.isServer||A(o=>{e=e??window,e.addEventListener(t,r,n),o(()=>e.removeEventListener(t,r,n))})}function pt(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}var Ce=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ce||{});let z=Object.assign(F({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:Object,default:m(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:r,expose:n}){let o=m(null);n({el:o,$el:o});let l=g(()=>Y(o));vt({ownerDocument:l},g(()=>Boolean(e.features&16)));let a=mt({ownerDocument:l,container:o,initialFocus:g(()=>e.initialFocus)},g(()=>Boolean(e.features&2)));ht({ownerDocument:l,container:o,containers:e.containers,previousActiveElement:a},g(()=>Boolean(e.features&8)));let i=ft();function s(p){let v=D(o);v&&(c=>c())(()=>{L(i.value,{[K.Forwards]:()=>{ne(v,B.First,{skipElements:[p.relatedTarget]})},[K.Backwards]:()=>{ne(v,B.Last,{skipElements:[p.relatedTarget]})}})})}let u=m(!1);function d(p){p.key==="Tab"&&(u.value=!0,requestAnimationFrame(()=>{u.value=!1}))}function f(p){var v;let c=new Set((v=e.containers)==null?void 0:v.value);c.add(o);let h=p.relatedTarget;h instanceof HTMLElement&&h.dataset.headlessuiFocusGuard!=="true"&&(ke(c,h)||(u.value?ne(D(o),L(i.value,{[K.Forwards]:()=>B.Next,[K.Backwards]:()=>B.Previous})|B.WrapAround,{relativeTo:p.target}):p.target instanceof HTMLElement&&V(p.target)))}return()=>{let p={},v={ref:o,onKeydown:d,onFocusout:f},{features:c,initialFocus:h,containers:O,...k}=e;return E(Fe,[Boolean(c&4)&&E(ce,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:le.Focusable}),P({ourProps:v,theirProps:{...t,...k},slot:p,attrs:t,slots:r,name:"FocusTrap"}),Boolean(c&4)&&E(ce,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:le.Focusable})])}}}),{features:Ce});function vt({ownerDocument:e},t){let r=m(null);function n(){var l;r.value||(r.value=(l=e.value)==null?void 0:l.activeElement)}function o(){!r.value||(V(r.value),r.value=null)}$(()=>{Q(t,(l,a)=>{l!==a&&(l?n():o())},{immediate:!0})}),C(o)}function mt({ownerDocument:e,container:t,initialFocus:r},n){let o=m(null),l=m(!1);return $(()=>l.value=!0),C(()=>l.value=!1),$(()=>{Q([t,r,n],(a,i)=>{if(a.every((u,d)=>(i==null?void 0:i[d])===u)||!n.value)return;let s=D(t);!s||pt(()=>{var u,d;if(!l.value)return;let f=D(r),p=(u=e.value)==null?void 0:u.activeElement;if(f){if(f===p){o.value=p;return}}else if(s.contains(p)){o.value=p;return}f?V(f):ne(s,B.First|B.NoScroll)===je.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),o}function ht({ownerDocument:e,container:t,containers:r,previousActiveElement:n},o){var l;xe((l=e.value)==null?void 0:l.defaultView,"focus",a=>{if(!o.value)return;let i=new Set(r==null?void 0:r.value);i.add(t);let s=n.value;if(!s)return;let u=a.target;u&&u instanceof HTMLElement?ke(i,u)?(n.value=u,V(u)):(a.preventDefault(),a.stopPropagation(),V(s)):V(n.value)},!0)}function ke(e,t){var r;for(let n of e)if((r=n.value)!=null&&r.contains(t))return!0;return!1}let Ee="body > *",G=new Set,N=new Map;function Se(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function Te(e){let t=N.get(e);!t||(t["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}function gt(e,t=m(!0)){A(r=>{if(!t.value||!e.value)return;let n=e.value,o=Y(n);if(o){G.add(n);for(let l of N.keys())l.contains(n)&&(Te(l),N.delete(l));o.querySelectorAll(Ee).forEach(l=>{if(l instanceof HTMLElement){for(let a of G)if(l.contains(a))return;G.size===1&&(N.set(l,{"aria-hidden":l.getAttribute("aria-hidden"),inert:l.inert}),Se(l))}}),r(()=>{if(G.delete(n),G.size>0)o.querySelectorAll(Ee).forEach(l=>{if(l instanceof HTMLElement&&!N.has(l)){for(let a of G)if(l.contains(a))return;N.set(l,{"aria-hidden":l.getAttribute("aria-hidden"),inert:l.inert}),Se(l)}});else for(let l of N.keys())Te(l),N.delete(l)})}})}let Ne=Symbol("ForcePortalRootContext");function bt(){return j(Ne,!1)}let fe=F({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:r}){return x(Ne,e.force),()=>{let{force:n,...o}=e;return P({theirProps:o,ourProps:{},slot:{},slots:t,attrs:r,name:"ForcePortalRoot"})}}});function yt(e){let t=Y(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let r=t.getElementById("headlessui-portal-root");if(r)return r;let n=t.createElement("div");return n.setAttribute("id","headlessui-portal-root"),t.body.appendChild(n)}let Be=F({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:r}){let n=m(null),o=g(()=>Y(n)),l=bt(),a=j(Me,null),i=m(l===!0||a==null?yt(n.value):a.resolveTarget());return A(()=>{l||a!=null&&(i.value=a.resolveTarget())}),C(()=>{var s,u;let d=(s=o.value)==null?void 0:s.getElementById("headlessui-portal-root");!d||i.value===d&&i.value.children.length<=0&&((u=i.value.parentElement)==null||u.removeChild(i.value))}),()=>{if(i.value===null)return null;let s={ref:n,"data-headlessui-portal":""};return E(Ve,{to:i.value},P({ourProps:s,theirProps:e,slot:{},attrs:r,slots:t,name:"Portal"}))}}}),Me=Symbol("PortalGroupContext"),wt=F({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:r}){let n=Ye({resolveTarget(){return e.target}});return x(Me,n),()=>{let{target:o,...l}=e;return P({theirProps:l,ourProps:{},slot:{},attrs:t,slots:r,name:"PortalGroup"})}}}),He=Symbol("StackContext");var pe=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(pe||{});function Et(){return j(He,()=>{})}function St({type:e,enabled:t,element:r,onUpdate:n}){let o=Et();function l(...a){n==null||n(...a),o(...a)}$(()=>{Q(t,(a,i)=>{a?l(0,e,r):i===!0&&l(1,e,r)},{immediate:!0,flush:"sync"})}),C(()=>{t.value&&l(1,e,r)}),x(He,l)}let Ie=Symbol("DescriptionContext");function Tt(){let e=j(Ie,null);if(e===null)throw new Error("Missing parent");return e}function $t({slot:e=m({}),name:t="Description",props:r={}}={}){let n=m([]);function o(l){return n.value.push(l),()=>{let a=n.value.indexOf(l);a!==-1&&n.value.splice(a,1)}}return x(Ie,{register:o,slot:e,name:t,props:r}),g(()=>n.value.length>0?n.value.join(" "):void 0)}let Qt=F({name:"Description",props:{as:{type:[Object,String],default:"p"},id:{type:String,default:()=>`headlessui-description-${W()}`}},setup(e,{attrs:t,slots:r}){let n=Tt();return $(()=>C(n.register(e.id))),()=>{let{name:o="Description",slot:l=m({}),props:a={}}=n,{id:i,...s}=e,u={...Object.entries(a).reduce((d,[f,p])=>Object.assign(d,{[f]:ze(p)}),{}),id:i};return P({ourProps:u,theirProps:s,slot:l.value,attrs:t,slots:r,name:o})}}});function Ft(e){let t=Ke(e.getSnapshot());return C(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function ge(){let e=[],t=[],r={enqueue(n){t.push(n)},addEventListener(n,o,l,a){return n.addEventListener(o,l,a),r.add(()=>n.removeEventListener(o,l,a))},requestAnimationFrame(...n){let o=requestAnimationFrame(...n);r.add(()=>cancelAnimationFrame(o))},nextFrame(...n){r.requestAnimationFrame(()=>{r.requestAnimationFrame(...n)})},setTimeout(...n){let o=setTimeout(...n);r.add(()=>clearTimeout(o))},add(n){e.push(n)},style(n,o,l){let a=n.style.getPropertyValue(o);return Object.assign(n.style,{[o]:l}),this.add(()=>{Object.assign(n.style,{[o]:a})})},dispose(){for(let n of e.splice(0))n()},async workQueue(){for(let n of t.splice(0))await n()}};return r}function Pt(e,t){let r=e(),n=new Set;return{getSnapshot(){return r},subscribe(o){return n.add(o),()=>n.delete(o)},dispatch(o,...l){let a=t[o].call(r,...l);a&&(r=a,n.forEach(i=>i()))}}}function Ot(){let e;return{before({doc:t}){var r;let n=t.documentElement;e=((r=t.defaultView)!=null?r:window).innerWidth-n.clientWidth},after({doc:t,d:r}){let n=t.documentElement,o=n.clientWidth-n.offsetWidth,l=e-o;r.style(n,"paddingRight",`${l}px`)}}}function Lt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function At(){if(!Lt())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:r,meta:n}){function o(a){return n.containers.flatMap(i=>i()).some(i=>i.contains(a))}r.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let l=null;r.addEventListener(t,"click",a=>{if(a.target instanceof HTMLElement)try{let i=a.target.closest("a");if(!i)return;let{hash:s}=new URL(i.href),u=t.querySelector(s);u&&!o(u)&&(l=u)}catch{}},!0),r.addEventListener(t,"touchmove",a=>{a.target instanceof HTMLElement&&!o(a.target)&&a.preventDefault()},{passive:!1}),r.add(()=>{window.scrollTo(0,window.pageYOffset+e),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)})}}}function Dt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function jt(e){let t={};for(let r of e)Object.assign(t,r(t));return t}let U=Pt(()=>new Map,{PUSH(e,t){var r;let n=(r=this.get(e))!=null?r:{doc:e,count:0,d:ge(),meta:new Set};return n.count++,n.meta.add(t),this.set(e,n),this},POP(e,t){let r=this.get(e);return r&&(r.count--,r.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:r}){let n={doc:e,d:t,meta:jt(r)},o=[At(),Ot(),Dt()];o.forEach(({before:l})=>l==null?void 0:l(n)),o.forEach(({after:l})=>l==null?void 0:l(n))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});U.subscribe(()=>{let e=U.getSnapshot(),t=new Map;for(let[r]of e)t.set(r,r.documentElement.style.overflow);for(let r of e.values()){let n=t.get(r.doc)==="hidden",o=r.count!==0;(o&&!n||!o&&n)&&U.dispatch(r.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",r),r.count===0&&U.dispatch("TEARDOWN",r)}});function Rt(e,t,r){let n=Ft(U),o=g(()=>{let l=e.value?n.value.get(e.value):void 0;return l?l.count>0:!1});return Q([e,t],([l,a],[i],s)=>{if(!l||!a)return;U.dispatch("PUSH",l,r);let u=!1;s(()=>{u||(U.dispatch("POP",i??l,r),u=!0)})},{immediate:!0}),o}var xt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(xt||{});let ve=Symbol("DialogContext");function J(e){let t=j(ve,null);if(t===null){let r=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,J),r}return t}let ee="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Xt=F({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ee},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${W()}`}},emits:{close:e=>!0},setup(e,{emit:t,attrs:r,slots:n,expose:o}){var l;let a=m(!1);$(()=>{a.value=!0});let i=m(0),s=he(),u=g(()=>e.open===ee&&s!==null?L(s.value,{[q.Open]:!0,[q.Closed]:!1}):e.open),d=m(new Set),f=m(null),p=m(null),v=g(()=>Y(f));if(o({el:f,$el:f}),!(e.open!==ee||s!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof u.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value===ee?void 0:e.open}`);let c=g(()=>a.value&&u.value?0:1),h=g(()=>c.value===0),O=g(()=>i.value>1);j(ve,null);let k=g(()=>O.value?"parent":"leaf");gt(f,g(()=>O.value?h.value:!1)),St({type:"Dialog",enabled:g(()=>c.value===0),element:f,onUpdate:(b,w,y)=>{if(w==="Dialog")return L(b,{[pe.Add](){d.value.add(y),i.value+=1},[pe.Remove](){d.value.delete(y),i.value-=1}})}});let ae=$t({name:"DialogDescription",slot:g(()=>({open:u.value}))}),H=m(null),R={titleId:H,panelRef:m(null),dialogState:c,setTitleId(b){H.value!==b&&(H.value=b)},close(){t("close",!1)}};x(ve,R);function Z(){var b,w,y;return[...Array.from((w=(b=v.value)==null?void 0:b.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?w:[]).filter(T=>!(T===document.body||T===document.head||!(T instanceof HTMLElement)||T.contains(D(p))||R.panelRef.value&&T.contains(R.panelRef.value))),(y=R.panelRef.value)!=null?y:f.value]}return dt(()=>Z(),(b,w)=>{R.close(),Qe(()=>w==null?void 0:w.focus())},g(()=>c.value===0&&!O.value)),xe((l=v.value)==null?void 0:l.defaultView,"keydown",b=>{b.defaultPrevented||b.key===Ae.Escape&&c.value===0&&(O.value||(b.preventDefault(),b.stopPropagation(),R.close()))}),Rt(v,h,b=>{var w;return{containers:[...(w=b.containers)!=null?w:[],Z]}}),A(b=>{if(c.value!==0)return;let w=D(f);if(!w)return;let y=new IntersectionObserver(T=>{for(let S of T)S.boundingClientRect.x===0&&S.boundingClientRect.y===0&&S.boundingClientRect.width===0&&S.boundingClientRect.height===0&&R.close()});y.observe(w),b(()=>y.disconnect())}),()=>{let{id:b,open:w,initialFocus:y,...T}=e,S={...r,ref:f,id:b,role:"dialog","aria-modal":c.value===0?!0:void 0,"aria-labelledby":H.value,"aria-describedby":ae.value},_={open:c.value===0};return E(fe,{force:!0},()=>[E(Be,()=>E(wt,{target:f.value},()=>E(fe,{force:!1},()=>E(z,{initialFocus:y,containers:d,features:h.value?L(k.value,{parent:z.features.RestoreFocus,leaf:z.features.All&~z.features.FocusLock}):z.features.None},()=>P({ourProps:S,theirProps:T,slot:_,attrs:r,slots:n,visible:c.value===0,features:re.RenderStrategy|re.Static,name:"Dialog"}))))),E(ce,{features:le.Hidden,ref:p})])}}});F({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-overlay-${W()}`}},setup(e,{attrs:t,slots:r}){let n=J("DialogOverlay");function o(l){l.target===l.currentTarget&&(l.preventDefault(),l.stopPropagation(),n.close())}return()=>{let{id:l,...a}=e;return P({ourProps:{id:l,"aria-hidden":!0,onClick:o},theirProps:a,slot:{open:n.dialogState.value===0},attrs:t,slots:r,name:"DialogOverlay"})}}});F({name:"DialogBackdrop",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-backdrop-${W()}`}},inheritAttrs:!1,setup(e,{attrs:t,slots:r,expose:n}){let o=J("DialogBackdrop"),l=m(null);return n({el:l,$el:l}),$(()=>{if(o.panelRef.value===null)throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.")}),()=>{let{id:a,...i}=e,s={id:a,ref:l,"aria-hidden":!0};return E(fe,{force:!0},()=>E(Be,()=>P({ourProps:s,theirProps:{...t,...i},slot:{open:o.dialogState.value===0},attrs:t,slots:r,name:"DialogBackdrop"})))}}});let Jt=F({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-panel-${W()}`}},setup(e,{attrs:t,slots:r,expose:n}){let o=J("DialogPanel");n({el:o.panelRef,$el:o.panelRef});function l(a){a.stopPropagation()}return()=>{let{id:a,...i}=e,s={id:a,ref:o.panelRef,onClick:l};return P({ourProps:s,theirProps:i,slot:{open:o.dialogState.value===0},attrs:t,slots:r,name:"DialogPanel"})}}}),Zt=F({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:()=>`headlessui-dialog-title-${W()}`}},setup(e,{attrs:t,slots:r}){let n=J("DialogTitle");return $(()=>{n.setTitleId(e.id),C(()=>n.setTitleId(null))}),()=>{let{id:o,...l}=e;return P({ourProps:{id:o},theirProps:l,slot:{open:n.dialogState.value===0},attrs:t,slots:r,name:"DialogTitle"})}}});function Ct(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function se(e,...t){e&&t.length>0&&e.classList.add(...t)}function te(e,...t){e&&t.length>0&&e.classList.remove(...t)}var me=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(me||{});function kt(e,t){let r=ge();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:o}=getComputedStyle(e),[l,a]=[n,o].map(i=>{let[s=0]=i.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,d)=>d-u);return s});return l!==0?r.setTimeout(()=>t("finished"),l+a):t("finished"),r.add(()=>t("cancelled")),r.dispose}function $e(e,t,r,n,o,l){let a=ge(),i=l!==void 0?Ct(l):()=>{};return te(e,...o),se(e,...t,...r),a.nextFrame(()=>{te(e,...r),se(e,...n),a.add(kt(e,s=>(te(e,...n,...t),se(e,...o),i(s))))}),a.add(()=>te(e,...t,...r,...n,...o)),a.add(()=>i("cancelled")),a.dispose}function I(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let be=Symbol("TransitionContext");var Nt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Nt||{});function Bt(){return j(be,null)!==null}function Mt(){let e=j(be,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Ht(){let e=j(ye,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let ye=Symbol("NestingContext");function oe(e){return"children"in e?oe(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function Ue(e){let t=m([]),r=m(!1);$(()=>r.value=!0),C(()=>r.value=!1);function n(l,a=M.Hidden){let i=t.value.findIndex(({id:s})=>s===l);i!==-1&&(L(a,{[M.Unmount](){t.value.splice(i,1)},[M.Hidden](){t.value[i].state="hidden"}}),!oe(t)&&r.value&&(e==null||e()))}function o(l){let a=t.value.find(({id:i})=>i===l);return a?a.state!=="visible"&&(a.state="visible"):t.value.push({id:l,state:"visible"}),()=>n(l,M.Unmount)}return{children:t,register:o,unregister:n}}let qe=re.RenderStrategy,It=F({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:r,slots:n,expose:o}){if(!Bt()&&tt())return()=>E(qt,{...e,onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave")},n);let l=m(null),a=m("visible"),i=g(()=>e.unmount?M.Unmount:M.Hidden);o({el:l,$el:l});let{show:s,appear:u}=Mt(),{register:d,unregister:f}=Ht(),p={value:!0},v=W(),c={value:!1},h=Ue(()=>{c.value||(a.value="hidden",f(v),t("afterLeave"))});$(()=>{let y=d(v);C(y)}),A(()=>{if(i.value===M.Hidden&&v){if(s&&a.value!=="visible"){a.value="visible";return}L(a.value,{hidden:()=>f(v),visible:()=>d(v)})}});let O=I(e.enter),k=I(e.enterFrom),ae=I(e.enterTo),H=I(e.entered),R=I(e.leave),Z=I(e.leaveFrom),b=I(e.leaveTo);$(()=>{A(()=>{if(a.value==="visible"){let y=D(l);if(y instanceof Comment&&y.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function w(y){let T=p.value&&!u.value,S=D(l);!S||!(S instanceof HTMLElement)||T||(c.value=!0,s.value&&t("beforeEnter"),s.value||t("beforeLeave"),y(s.value?$e(S,O,k,ae,H,_=>{c.value=!1,_===me.Finished&&t("afterEnter")}):$e(S,R,Z,b,H,_=>{c.value=!1,_===me.Finished&&(oe(h)||(a.value="hidden",f(v),t("afterLeave")))})))}return $(()=>{Q([s],(y,T,S)=>{w(S),p.value=!1},{immediate:!0})}),x(ye,h),nt(g(()=>L(a.value,{visible:q.Open,hidden:q.Closed}))),()=>{let{appear:y,show:T,enter:S,enterFrom:_,enterTo:Wt,entered:_t,leave:Gt,leaveFrom:Vt,leaveTo:Yt,...we}=e,We={ref:l},_e={...we,...u&&s&&X.isServer?{class:Xe([we.class,...O,...k])}:{}};return P({theirProps:_e,ourProps:We,slot:{},slots:n,attrs:r,features:qe,visible:a.value==="visible",name:"TransitionChild"})}}}),Ut=It,qt=F({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:r,slots:n}){let o=he(),l=g(()=>e.show===null&&o!==null?L(o.value,{[q.Open]:!0,[q.Closed]:!1}):e.show);A(()=>{if(![!0,!1].includes(l.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let a=m(l.value?"visible":"hidden"),i=Ue(()=>{a.value="hidden"}),s=m(!0),u={show:l,appear:g(()=>e.appear||!s.value)};return $(()=>{A(()=>{s.value=!1,l.value?a.value="visible":oe(i)||(a.value="hidden")})}),x(ye,i),x(be,u),()=>{let d=Le(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),f={unmount:e.unmount};return P({ourProps:{...f,as:"template"},theirProps:{},slot:{},slots:{...n,default:()=>[E(Ut,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...r,...f,...d},n.default)]},attrs:{},features:qe,visible:a.value==="visible",name:"Transition"})}}});export{Xt as B,Zt as K,Jt as j,qt as m,It as v};