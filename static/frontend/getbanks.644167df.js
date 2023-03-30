import{u as p}from"./useApi.1f829440.js";import{i as h,o as n,l as d,v as e,m,u as l,F as k,x as w}from"./entry.96a761ac.js";const y={class:"flex-1 mt-12"},A={class:"max-w-4xl shadow-xl m-auto py-8 px-6 border rounded w-full"},M={class:"mb-6 flex-1"},q=e("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Name",-1),C=["value"],V={class:"mb-6 flex-1"},H=e("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Account",-1),S=["value"],z={class:"mb-6 flex-1"},B=e("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Routing",-1),Z=["value"],L=e("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Amount",-1),P={class:"flex gap-1"},$=["onKeyup"],F={key:0,class:"sh"},R=["onChange","id"],j=["for"],K=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 2048 2048"},[e("path",{fill:"currentColor",d:"M1408 576q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19q-26 0-45-19t-19-45zm640 960v128h-256v256h-128v-256h-256v-128h256v-256h128v256h256zM922 1216l358 357v91H0V256h1792v896h-128V384H128v421l192-191l512 512l256-256l448 447v91h-91l-357-358l-166 166zM320 794L128 987v549h933L320 794z"})],-1),N=e("p",{class:"text-sm text-gray-500 whitespace-nowrap"},"Add Screenshot",-1),T=[K,N],D={key:1,class:"sh"},E=["src"],G=["onClick"],U=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"})],-1),I=[U],W={__name:"getbanks",setup(J){const c=p(),s=h(""),r=h([{amount:"",screenshot:"",id:"file"+Math.random().toString(36).substr(2,9)}]),u=async()=>{const o=await c.get("/api/dash/generate");s.value=o.data,r.value=[{amount:"",screenshot:"",id:"file"+Math.random().toString(36).substr(2,9)}]};u();const b=async()=>{const o=await c.get("/api/dash/generate?generate=true");s.value=o.data,r.value=[{amount:"",screenshot:"",id:"file"+Math.random().toString(36).substr(2,9)}]};function g(){r.value.push({amount:"",screenshot:"",id:"file"+Math.random().toString(36).substr(2,9)})}function f(o){r.value=r.value.filter(a=>a.id!==o.id)}function v(o){const a=event.target.files[0],t=new FileReader;t.onload=i=>{o.screenshot=i.target.result},t.readAsDataURL(a)}const x=async()=>{await c.post("/api/dash/generate",{proofs:r.value,account:s.value}),u()};function _(o){o.amount=event.target.value}return(o,a)=>(n(),d("section",y,[e("div",A,[e("button",{onClick:a[0]||(a[0]=t=>b()),class:"bg-primary max-w-sm mx-auto block text-center font-semibold text-xl border p-2 mb-8 rounded w-full text-slate-50"},"Generate Account"),e("div",{class:m(["flex gap-2 mb-5",{"cursor-none pointer-events-none opacity-30":!l(s)}])},[e("div",M,[q,e("input",{value:l(s).name,type:"email",id:"email",class:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",placeholder:"name@flowbite.com",required:""},null,8,C)]),e("div",V,[H,e("input",{value:l(s).account,type:"email",id:"email",class:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",placeholder:"name@flowbite.com",required:""},null,8,S)]),e("div",z,[B,e("input",{value:l(s).routing,type:"email",id:"email",class:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",placeholder:"name@flowbite.com",required:""},null,8,Z)])],2),e("div",{class:m(["proof",{"cursor-none pointer-events-none opacity-30":!l(s)}])},[(n(!0),d(k,null,w(l(r),t=>(n(),d("div",{class:"mb-1 max-w-sm mt-4",key:t.id},[L,e("div",P,[e("input",{onKeyup:i=>_(t),type:"text",id:"email",class:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",placeholder:"0.00",required:""},null,40,$),t.screenshot?(n(),d("div",D,[e("img",{src:t.screenshot,class:"h-10 shadow border object-cover rounded"},null,8,E)])):(n(),d("div",F,[e("input",{onChange:i=>v(t),type:"file",class:"hidden",id:t.id},null,40,R),e("label",{for:t.id,class:"flex-1 h-10 flex gap-1 justify-center items-center border text-sm p-3 rounded text-slate-400 cursor-pointer shadow hover:shadow-lg"},T,8,j)])),e("button",{class:"px-2",onClick:i=>f(t)},I,8,G)])]))),128)),e("p",{onClick:g,class:"text-indigo-800 text-sm mb-5 mt-2 cursor-pointer"},"+ Add Another"),e("button",{onClick:x,class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},"Submit Proof")],2)])]))}};export{W as default};
