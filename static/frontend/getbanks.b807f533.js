import{u as p}from"./useApi.1e322299.js";import{i as h,o as n,l,v as e,m as g,u as d,F as k,x as w}from"./entry.9c3217d9.js";const y={class:"flex-1 mt-12"},A={class:"max-w-4xl shadow-xl m-auto py-8 px-6 border rounded w-full"},M={class:"mb-6 flex-1"},C=e("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Account",-1),V=["value"],q={class:"mb-6 flex-1"},H=e("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Routing",-1),S=["value"],z=e("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Amount",-1),B={class:"flex gap-1"},Z=["onKeyup"],L={key:0,class:"sh"},P=["onChange","id"],$=["for"],F=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 2048 2048"},[e("path",{fill:"currentColor",d:"M1408 576q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19q-26 0-45-19t-19-45zm640 960v128h-256v256h-128v-256h-256v-128h256v-256h128v256h256zM922 1216l358 357v91H0V256h1792v896h-128V384H128v421l192-191l512 512l256-256l448 447v91h-91l-357-358l-166 166zM320 794L128 987v549h933L320 794z"})],-1),R=e("p",{class:"text-sm text-gray-500 whitespace-nowrap"},"Add Screenshot",-1),j=[F,R],K={key:1,class:"sh"},T=["src"],D=["onClick"],E=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"})],-1),G=[E],J={__name:"getbanks",setup(N){const c=p(),s=h(""),r=h([{amount:"",screenshot:"",id:"file"+Math.random().toString(36).substr(2,9)}]),u=async()=>{const o=await c.get("/api/dash/generate");s.value=o.data,r.value=[{amount:"",screenshot:"",id:"file"+Math.random().toString(36).substr(2,9)}]};u();const m=async()=>{const o=await c.get("/api/dash/generate?generate=true");s.value=o.data,r.value=[{amount:"",screenshot:"",id:"file"+Math.random().toString(36).substr(2,9)}]};function b(){r.value.push({amount:"",screenshot:"",id:"file"+Math.random().toString(36).substr(2,9)})}function v(o){r.value=r.value.filter(a=>a.id!==o.id)}function f(o){const a=event.target.files[0],t=new FileReader;t.onload=i=>{o.screenshot=i.target.result},t.readAsDataURL(a)}const _=async()=>{await c.post("/api/dash/generate",{proofs:r.value,account:s.value}),u()};function x(o){o.amount=event.target.value}return(o,a)=>(n(),l("section",y,[e("div",A,[e("button",{onClick:a[0]||(a[0]=t=>m()),class:"bg-primary max-w-sm mx-auto block text-center font-semibold text-xl border p-2 mb-8 rounded w-full text-slate-50"},"Generate Account"),e("div",{class:g(["flex gap-2 mb-5",{"cursor-none pointer-events-none opacity-30":!d(s)}])},[e("div",M,[C,e("input",{value:d(s).account,type:"email",id:"email",class:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",placeholder:"name@flowbite.com",required:""},null,8,V)]),e("div",q,[H,e("input",{value:d(s).routing,type:"email",id:"email",class:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",placeholder:"name@flowbite.com",required:""},null,8,S)])],2),e("div",{class:g(["proof",{"cursor-none pointer-events-none opacity-30":!d(s)}])},[(n(!0),l(k,null,w(d(r),t=>(n(),l("div",{class:"mb-1 max-w-sm mt-4",key:t.id},[z,e("div",B,[e("input",{onKeyup:i=>x(t),type:"text",id:"email",class:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",placeholder:"0.00",required:""},null,40,Z),t.screenshot?(n(),l("div",K,[e("img",{src:t.screenshot,class:"h-10 shadow border object-cover rounded"},null,8,T)])):(n(),l("div",L,[e("input",{onChange:i=>f(t),type:"file",class:"hidden",id:t.id},null,40,P),e("label",{for:t.id,class:"flex-1 h-10 flex gap-1 justify-center items-center border text-sm p-3 rounded text-slate-400 cursor-pointer shadow hover:shadow-lg"},j,8,$)])),e("button",{class:"px-2",onClick:i=>v(t)},G,8,D)])]))),128)),e("p",{onClick:b,class:"text-indigo-800 text-sm mb-5 mt-2 cursor-pointer"},"+ Add Another"),e("button",{onClick:_,class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},"Submit Proof")],2)])]))}};export{J as default};
