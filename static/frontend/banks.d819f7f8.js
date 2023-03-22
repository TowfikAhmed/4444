import{_ as V}from"./over.375a1df9.js";import{_ as j}from"./modal.04932363.js";import{u as F}from"./useApi.e37779b4.js";import{i as m,o as l,l as a,v as t,u as s,F as w,x as v,y as b,z as f,A as h,c as $,t as c,B as M,C as B,D,E as N}from"./entry.e1d6fe94.js";import{j as P,v as U,K as R}from"./transition.68e4fe3e.js";const Z={class:"p-6 w-4/5"},S={class:"bg-white py-6"},T={class:"flex items-center justify-between pb-8"},H=t("h3",{class:"text-2xl font-bold text-slate-700 my-4"},"Accounts List",-1),G={class:"container mx-auto"},q={class:"-mx-4 flex flex-wrap"},z={class:"w-full px-4"},I={key:0,class:"max-w-full overflow-x-auto"},K={class:"w-full table-auto"},O=t("thead",null,[t("tr",{class:"bg-primary text-center"},[t("th",{class:"w-1/6 min-w-[160px] border-l border-transparent py-3 px-3 text-lg font-semibold text-white"},"Account"),t("th",{class:"w-1/6 min-w-[160px] py-3 px-3 text-lg font-semibold text-white"},"Routing"),t("th",{class:"w-1/6 min-w-[160px] py-3 px-3 text-lg font-semibold text-white"},"Group"),t("th",{class:"w-1/6 min-w-[160px] py-3 px-3 text-lg font-semibold text-white"},"Status"),t("th",{class:"w-1/6 min-w-[160px] py-3 px-3 text-lg font-semibold text-white"},"Proof"),t("th",{class:"w-1/6 min-w-[160px] py-3 px-3 text-lg font-semibold text-white"},"Action")])],-1),J={class:"text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] h-16 px-2 text-center text-base font-medium"},Q={class:"text-dark border-b border-[#E8E8E8] bg-white h-16 px-2 text-center text-base font-medium"},W={class:"text-dark border-b border-[#E8E8E8] bg-white h-16 px-2 text-center text-base font-medium"},X={class:"text-dark border-b border-[#E8E8E8] bg-white h-16 px-2 text-center text-base font-medium"},Y={key:0,class:"text-indigo-500 font-bold"},tt={key:1,class:"text-pink-500 font-bold"},et={key:2,class:"text-lime-500 font-bold"},st={class:"text-dark border-b border-[#E8E8E8] bg-white py-0 px-2 text-center text-base font-medium cursor-pointer"},ot={class:"flex-1"},nt=["onClick"],lt=["onClick"],at=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24"},[t("path",{fill:"currentColor",d:"M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"})],-1),it=[at],rt={class:"text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] px-2 text-center text-base font-medium"},ct=["onClick"],dt=["onClick"],pt=t("span",{class:"sr-only"},"Close panel",-1),xt=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},[t("path",{fill:"currentColor",d:"M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"})],-1),ht=[pt,xt],ut={class:"flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"},_t={class:"px-4 sm:px-6"},mt={class:"relative mt-6 flex-1 px-4 sm:px-6"},ft={class:"my-4"},bt={class:"w-full mt-4"},wt=t("label",{class:"text-xs text-gray-600"},"Username",-1),vt={class:"bg-white"},gt={class:"sm:flex sm:items-start"},yt={class:"p-5"},kt=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},[t("path",{fill:"currentColor",d:"M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"})],-1),Lt=[kt],Et={class:"mt-3 border-l text-center sm:mt-0 sm:text-left w-full"},Ct=t("h3",{class:"text-slate-100 p-4 bg-primary text-2xl"},"Proof Details",-1),At={class:"flex flex-1 flex-col justify-center p-5 w-full"},Vt={class:"md:col-span-2 md:mt-0"},jt={class:"my-2"},Ft={class:"my-2"},$t=["src"],Mt=["src"],Bt=["src"],Dt=["src"],Nt=t("div",{class:"flex justify-end my-4 gap-1"},[t("button",{class:"bg-primary text-white px-4 py-2 rounded out"},"Save Changes")],-1),Ht={__name:"banks",setup(Pt){const i=F(),p=m("ss"),u=async()=>{const n=await i.get("/api/dash/banks");p.value=n.data};u();const g=async n=>{const o=await i.del("/api/dash/banks/"+n+"/delete");console.log(o),u()},_=m(!1),x=m(""),y=async()=>{if(!x.value)return;const n=await i.post("/api/dash/banks/create",x.value);console.log(n),u(),_.value=!1},k=async n=>{const o=await i.get("/api/dash/banks?approve="+n);p.value=o.data},r=m(""),L=async n=>{const o=await i.del("/api/dash/proofs/"+n+"/delete");console.log(o),u()};return(n,o)=>{const E=V,C=j;return l(),a("section",Z,[t("section",S,[t("div",T,[H,t("a",{onClick:o[0]||(o[0]=e=>_.value=!0),class:"bg-primary cursor-pointer inline-flex items-center h-[50px] justify-center rounded px-6 text-center font-normal text-white hover:bg-opacity-90"}," + Add account ")]),t("div",G,[t("div",q,[t("div",z,[s(p)&&s(p).results?(l(),a("div",I,[t("table",K,[O,t("tbody",null,[(l(!0),a(w,null,v(s(p).results,e=>(l(),a("tr",{key:e.id},[t("td",J,c(e.account),1),t("td",Q,c(e.routing),1),t("td",W,c(e.group.name),1),t("td",X,[e.status=="COMPLETED"?(l(),a("span",Y,c(e.status),1)):e.status=="PENDING"?(l(),a("span",tt,c(e.status),1)):(l(),a("span",et,c(e.status),1))]),t("td",st,[(l(!0),a(w,null,v(e.proof_set,d=>(l(),a("div",{class:"w-full my-1 text-left flex items-center justify-between",key:d.id},[t("span",ot,"$"+c(d.amount),1),t("span",{onClick:A=>r.value=d,class:"flex-1 text-sm text-indigo-400 border p-1 rounded text-center bg-gray-50"},"See Proof",8,nt),t("span",{onClick:A=>L(d.id),class:"px-1"},it,8,lt)]))),128))]),t("td",rt,[t("a",{onClick:d=>g(e.id),class:"bg-primary cursor-pointer inline-flex items-center h-[50px] justify-center rounded px-6 text-center font-normal text-white hover:bg-opacity-90"},"Delete",8,ct),e.status=="PENDING"?(l(),a("a",{key:0,onClick:d=>k(e.id),class:"bg-primary cursor-pointer inline-flex items-center h-[50px] justify-center rounded px-6 text-center font-normal text-white hover:bg-opacity-90 ml-2"},"Approve",8,dt)):b("",!0)])]))),128))])])])):b("",!0)])])])]),f(E,{show:s(_)},{default:h(()=>[f(s(P),{class:"pointer-events-auto relative w-screen max-w-md"},{default:h(()=>[f(s(U),{as:"template",enter:"ease-in-out duration-500","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-500","leave-from":"opacity-100","leave-to":"opacity-0"},{default:h(()=>[t("div",{onClick:o[2]||(o[2]=e=>_.value=!1),class:"absolute top-0 -left-2 flex pt-4 pr-2 sm:-ml-10 sm:pr-4"},[t("span",{type:"button",class:"rounded-full text-slate-600 shadow-xl bg-white hover:text-slate-500 cursor-pointer p-1",onClick:o[1]||(o[1]=e=>n.open=!1)},ht)])]),_:1}),t("div",ut,[t("div",_t,[f(s(R),{class:"text-base font-semibold leading-6 text-gray-900"},{default:h(()=>[M("Add account")]),_:1})]),t("div",mt,[t("div",ft,[t("div",bt,[wt,B(t("textarea",{"onUpdate:modelValue":o[3]||(o[3]=e=>N(x)?x.value=e:null),rows:"10",class:"w-full border border-gray-200 p-2 rounded mt-1",placeholder:"Username"},null,512),[[D,s(x)]])]),t("div",{class:"w-full mt-4"},[t("button",{onClick:y,class:"bg-primary inline-flex items-center h-[50px] justify-center rounded px-6 text-center font-normal text-white hover:bg-opacity-90"},"Add accounts")])])])])]),_:1})]),_:1},8,["show"]),s(r)?(l(),$(C,{key:0},{default:h(()=>[t("div",vt,[t("div",gt,[t("div",yt,[t("div",{onClick:o[4]||(o[4]=e=>r.value=""),class:"mx-auto cursor-pointer flex h-12 w-12 p-2 flex-shrink-0 items-center justify-center rounded-full bg-rose-500 sm:mx-0 sm:h-10 sm:w-10 text-white hover:shadow-lg"},Lt)]),t("div",Et,[Ct,t("div",At,[t("div",Vt,[t("p",jt,"Amount: "+c(s(r).amount),1),t("p",Ft,"Status: "+c(s(r).status),1),t("img",{src:s(i).baseURL+s(r).sc,alt:""},null,8,$t),t("img",{src:s(i).baseURL+s(r).sc1,alt:""},null,8,Mt),t("img",{src:s(i).baseURL+s(r).sc2,alt:""},null,8,Bt),t("img",{src:s(i).baseURL+s(r).sc3,alt:""},null,8,Dt)]),Nt])])])])]),_:1})):b("",!0)])}}};export{Ht as default};
