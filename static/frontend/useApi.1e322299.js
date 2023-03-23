import{a as R,i as C,H as A,I as H,J as E,w as U,u as D,K as F,j,r as M,L as N}from"./entry.9c3217d9.js";const L=decodeURIComponent,I=encodeURIComponent,K=/; */,B=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function $(n,s){if(typeof n!="string")throw new TypeError("argument str must be a string");let r={},t=s||{},e=n.split(K),i=t.decode||L;for(let o=0;o<e.length;o++){let c=e[o],a=c.indexOf("=");if(a<0)continue;let u=c.substr(0,a).trim(),l=c.substr(++a,c.length).trim();l[0]=='"'&&(l=l.slice(1,-1)),r[u]==null&&(r[u]=J(l,i))}return r}function z(n,s,r){let t=r||{},e=t.encode||I;if(typeof e!="function")throw new TypeError("option encode is invalid");if(!B.test(n))throw new TypeError("argument name is invalid");let i=e(s);if(i&&!B.test(i))throw new TypeError("argument val is invalid");let o=n+"="+i;if(t.maxAge!=null){let c=t.maxAge-0;if(isNaN(c)||!isFinite(c))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(c)}if(t.domain){if(!B.test(t.domain))throw new TypeError("option domain is invalid");o+="; Domain="+t.domain}if(t.path){if(!B.test(t.path))throw new TypeError("option path is invalid");o+="; Path="+t.path}if(t.expires){if(typeof t.expires.toUTCString!="function")throw new TypeError("option expires is invalid");o+="; Expires="+t.expires.toUTCString()}if(t.httpOnly&&(o+="; HttpOnly"),t.secure&&(o+="; Secure"),t.sameSite)switch(typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o}function J(n,s){try{return s(n)}catch{return n}}const q=()=>null;function W(...n){var f;const s=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(s);let[r,t,e={}]=n;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof t!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=e.server??!0,e.default=e.default??q,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0;const i=R(),o=()=>i.isHydrating?i.payload.data[r]:i.static.data[r],c=()=>o()!==void 0;i._asyncData[r]||(i._asyncData[r]={data:C(o()??((f=e.default)==null?void 0:f.call(e))??null),pending:C(!c()),error:C(i.payload._errors[r]?A(i.payload._errors[r]):null)});const a={...i._asyncData[r]};a.refresh=a.execute=(p={})=>{if(i._asyncDataPromises[r]){if(p.dedupe===!1)return i._asyncDataPromises[r];i._asyncDataPromises[r].cancelled=!0}if(p._initial&&c())return o();a.pending.value=!0;const g=new Promise((h,y)=>{try{h(t(i))}catch(b){y(b)}}).then(h=>{if(g.cancelled)return i._asyncDataPromises[r];e.transform&&(h=e.transform(h)),e.pick&&(h=V(h,e.pick)),a.data.value=h,a.error.value=null}).catch(h=>{var y;if(g.cancelled)return i._asyncDataPromises[r];a.error.value=h,a.data.value=D(((y=e.default)==null?void 0:y.call(e))??null)}).finally(()=>{g.cancelled||(a.pending.value=!1,i.payload.data[r]=a.data.value,a.error.value&&(i.payload._errors[r]=A(a.error.value)),delete i._asyncDataPromises[r])});return i._asyncDataPromises[r]=g,i._asyncDataPromises[r]};const u=()=>a.refresh({_initial:!0}),l=e.server!==!1&&i.payload.serverRendered;{const p=F();if(p&&!p._nuxtOnBeforeMountCbs){p._nuxtOnBeforeMountCbs=[];const h=p._nuxtOnBeforeMountCbs;p&&(H(()=>{h.forEach(y=>{y()}),h.splice(0,h.length)}),E(()=>h.splice(0,h.length)))}l&&i.isHydrating&&c()?a.pending.value=!1:p&&(i.payload.serverRendered&&i.isHydrating||e.lazy)&&e.immediate?p._nuxtOnBeforeMountCbs.push(u):e.immediate&&u(),e.watch&&U(e.watch,()=>a.refresh());const g=i.hook("app:data:refresh",h=>{if(!h||h.includes(r))return a.refresh()});p&&E(g)}const d=Promise.resolve(i._asyncDataPromises[r]).then(()=>a);return Object.assign(d,a),d}function V(n,s){const r={};for(const t of s)r[t]=n[t];return r}const Z={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function G(n,s={}){s={...Z,...s};const r=P(s);return r.dispatch(n),r.toString()}function P(n){const s=[];let r=[];const t=e=>{s.push(e)};return{toString(){return s.join("")},getContext(){return r},dispatch(e){return n.replacer&&(e=n.replacer(e)),this["_"+(e===null?"null":typeof e)](e)},_object(e){const i=/\[object (.*)]/i,o=Object.prototype.toString.call(e),c=i.exec(o),a=c?c[1].toLowerCase():"unknown:["+o.toLowerCase()+"]";let u=null;if((u=r.indexOf(e))>=0)return this.dispatch("[CIRCULAR:"+u+"]");if(r.push(e),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(a!=="object"&&a!=="function"&&a!=="asyncfunction")if(this["_"+a])this["_"+a](e);else{if(n.ignoreUnknown)return t("["+a+"]");throw new Error('Unknown object type "'+a+'"')}else{let l=Object.keys(e);n.unorderedObjects&&(l=l.sort()),n.respectType!==!1&&!O(e)&&l.splice(0,0,"prototype","__proto__","letructor"),n.excludeKeys&&(l=l.filter(function(d){return!n.excludeKeys(d)})),t("object:"+l.length+":");for(const d of l)this.dispatch(d),t(":"),n.excludeValues||this.dispatch(e[d]),t(",")}},_array(e,i){if(i=typeof i<"u"?i:n.unorderedArrays!==!1,t("array:"+e.length+":"),!i||e.length<=1){for(const a of e)this.dispatch(a);return}const o=[],c=e.map(a=>{const u=P(n);return u.dispatch(a),o.push(u.getContext()),u.toString()});return r=[...r,...o],c.sort(),this._array(c,!1)},_date(e){return t("date:"+e.toJSON())},_symbol(e){return t("symbol:"+e.toString())},_error(e){return t("error:"+e.toString())},_boolean(e){return t("bool:"+e.toString())},_string(e){t("string:"+e.length+":"),t(e.toString())},_function(e){t("fn:"),O(e)?this.dispatch("[native]"):this.dispatch(e.toString()),n.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),n.respectFunctionProperties&&this._object(e)},_number(e){return t("number:"+e.toString())},_xml(e){return t("xml:"+e.toString())},_null(){return t("Null")},_undefined(){return t("Undefined")},_regexp(e){return t("regex:"+e.toString())},_uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url(e){return t("url:"+e.toString())},_map(e){t("map:");const i=[...e];return this._array(i,n.unorderedSets!==!1)},_set(e){t("set:");const i=[...e];return this._array(i,n.unorderedSets!==!1)},_file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob(){if(n.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return t("domwindow")},_bigint(e){return t("bigint:"+e.toString())},_process(){return t("process")},_timer(){return t("timer")},_pipe(){return t("pipe")},_tcp(){return t("tcp")},_udp(){return t("udp")},_tty(){return t("tty")},_statwatcher(){return t("statwatcher")},_securecontext(){return t("securecontext")},_connection(){return t("connection")},_zlib(){return t("zlib")},_context(){return t("context")},_nodescript(){return t("nodescript")},_httpparser(){return t("httpparser")},_dataview(){return t("dataview")},_signal(){return t("signal")},_fsevent(){return t("fsevent")},_tlswrap(){return t("tlswrap")}}}function O(n){return typeof n!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(n))!=null}class x{constructor(s,r){s=this.words=s||[],this.sigBytes=r!==void 0?r:s.length*4}toString(s){return(s||Q).stringify(this)}concat(s){if(this.clamp(),this.sigBytes%4)for(let r=0;r<s.sigBytes;r++){const t=s.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=t<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<s.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=s.words[r>>>2];return this.sigBytes+=s.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new x([...this.words])}}const Q={stringify(n){const s=[];for(let r=0;r<n.sigBytes;r++){const t=n.words[r>>>2]>>>24-r%4*8&255;s.push((t>>>4).toString(16),(t&15).toString(16))}return s.join("")}},X={stringify(n){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let t=0;t<n.sigBytes;t+=3){const e=n.words[t>>>2]>>>24-t%4*8&255,i=n.words[t+1>>>2]>>>24-(t+1)%4*8&255,o=n.words[t+2>>>2]>>>24-(t+2)%4*8&255,c=e<<16|i<<8|o;for(let a=0;a<4&&t*8+a*6<n.sigBytes*8;a++)r.push(s.charAt(c>>>6*(3-a)&63))}return r.join("")}},Y={parse(n){const s=n.length,r=[];for(let t=0;t<s;t++)r[t>>>2]|=(n.charCodeAt(t)&255)<<24-t%4*8;return new x(r,s)}},tt={parse(n){return Y.parse(unescape(encodeURIComponent(n)))}};class et{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new x,this._nDataBytes=0}_append(s){typeof s=="string"&&(s=tt.parse(s)),this._data.concat(s),this._nDataBytes+=s.sigBytes}_doProcessBlock(s,r){}_process(s){let r,t=this._data.sigBytes/(this.blockSize*4);s?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,i=Math.min(e*4,this._data.sigBytes);if(e){for(let o=0;o<e;o+=this.blockSize)this._doProcessBlock(this._data.words,o);r=this._data.words.splice(0,e),this._data.sigBytes-=i}return new x(r,i)}}class rt extends et{update(s){return this._append(s),this._process(),this}finalize(s){s&&this._append(s)}}const nt=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],st=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],w=[];class it extends rt{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new x([...nt])}_doProcessBlock(s,r){const t=this._hash.words;let e=t[0],i=t[1],o=t[2],c=t[3],a=t[4],u=t[5],l=t[6],d=t[7];for(let f=0;f<64;f++){if(f<16)w[f]=s[r+f]|0;else{const S=w[f-15],m=(S<<25|S>>>7)^(S<<14|S>>>18)^S>>>3,v=w[f-2],T=(v<<15|v>>>17)^(v<<13|v>>>19)^v>>>10;w[f]=m+w[f-7]+T+w[f-16]}const p=a&u^~a&l,g=e&i^e&o^i&o,h=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),y=(a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25),b=d+y+p+st[f]+w[f],_=h+g;d=l,l=u,u=a,a=c+b|0,c=o,o=i,i=e,e=b+_|0}t[0]=t[0]+e|0,t[1]=t[1]+i|0,t[2]=t[2]+o|0,t[3]=t[3]+c|0,t[4]=t[4]+a|0,t[5]=t[5]+u|0,t[6]=t[6]+l|0,t[7]=t[7]+d|0}finalize(s){super.finalize(s);const r=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(t+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function at(n){return new it().finalize(n).toString(X)}function ot(n,s={}){const r=typeof n=="string"?n:G(n,s);return at(r).slice(0,10)}function k(n,s,r){const[t={},e]=typeof s=="string"?[{},s]:[s,r],i=t.key||ot([e,D(t.baseURL),typeof n=="string"?n:"",D(t.params||t.query)]);if(!i||typeof i!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+i);if(!n)throw new Error("[nuxt] [useFetch] request is missing.");const o=i===e?"$f"+i:i,c=j(()=>{let m=n;return typeof m=="function"&&(m=m()),D(m)}),{server:a,lazy:u,default:l,transform:d,pick:f,watch:p,immediate:g,...h}=t,y=M({...h,cache:typeof t.cache=="boolean"?void 0:t.cache}),b={server:a,lazy:u,default:l,transform:d,pick:f,immediate:g,watch:[y,c,...p||[]]};let _;return W(o,()=>{var m;return(m=_==null?void 0:_.abort)==null||m.call(_),_=typeof AbortController<"u"?new AbortController:{},$fetch(c.value,{signal:_.signal,...y})},b)}const ct={path:"/",watch:!0,decode:n=>N(decodeURIComponent(n)),encode:n=>encodeURIComponent(typeof n=="string"?n:JSON.stringify(n))};function ut(n,s){var i;const r={...ct,...s},t=lt(r)||{},e=C(t[n]??((i=r.default)==null?void 0:i.call(r)));{const o=()=>{ht(n,e.value,r)};r.watch?U(e,o,{deep:r.watch!=="shallow"}):o()}return e}function lt(n={}){return $(document.cookie,n)}function ft(n,s,r={}){return s==null?z(n,s,{...r,maxAge:-1}):z(n,s,r)}function ht(n,s,r={}){document.cookie=ft(n,s,r)}const pt=()=>{const n="",s=ut("jwt"),r=j(()=>s.value?{Authorization:`Bearer ${s.value}`,Accept:"application/json"}:{Accept:"application/json"});return{baseURL:n,get:async a=>{const{data:u,pending:l,error:d,refresh:f}=await k(n+a,{headers:r.value,method:"get"},"$UqgiltlUfE");return{data:u.value,error:d.value}},post:async(a,u)=>{const{data:l,pending:d,error:f,refresh:p}=await k(n+a,{headers:r.value,method:"post",body:JSON.stringify(u)},"$HgqqyPIEgZ");return{data:l.value,error:f.value}},put:async(a,u)=>{const{data:l,pending:d,error:f,refresh:p}=await k(n+a,{headers:r.value,method:"put",body:JSON.stringify(u)},"$szE3KFZK0G");return{data:l.value,error:f.value}},del:async a=>{const{data:u,pending:l,error:d,refresh:f}=await k(n+a,{headers:r.value,method:"delete"},"$A2D352AzpI");return{data:u.value,error:d.value}}}};export{ut as a,k as b,pt as u};
