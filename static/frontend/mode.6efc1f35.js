import{u as n}from"./composables.6c501272.js";import{o as r,l as a,v as e,t as i,x as d,H as c}from"./entry.d90a8f15.js";const _=e("option",{value:"system"},"System",-1),p=e("option",{value:"light"},"Light",-1),u=e("option",{value:"dark"},"Dark",-1),m=e("option",{value:"sepia"},"Sepia",-1),v=[_,p,u,m],g={__name:"mode",setup(h){const s=n();return console.log(s.preference),(o,t)=>(r(),a("div",null,[e("h1",null,"Color mode: "+i(o.$colorMode.value),1),d(e("select",{"onUpdate:modelValue":t[0]||(t[0]=l=>o.$colorMode.preference=l)},v,512),[[c,o.$colorMode.preference]])]))}};export{g as default};
