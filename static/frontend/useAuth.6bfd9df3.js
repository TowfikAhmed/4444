import{u as g,a as u,b as r}from"./useApi.1e322299.js";import{f as j,j as f}from"./entry.9c3217d9.js";const w=g(),b=()=>{const s=w.baseURL,t=j("user",()=>null),i=f(()=>t.value!==null),n=u("jwt"),l=async()=>{const{data:e,pending:o,error:a,refresh:p}=await r(s+"/api/auth/login/",{headers:{Authorization:`Bearer ${n.value}`,Accept:"application/json"},method:"GET"},"$OWrSqFye87");e.value&&(t.value=e.value)},c=async(e,o)=>{const{data:a,pending:p,error:d,refresh:m}=await r(s+"/api/auth/login/",{method:"POST",body:JSON.stringify({identity:e,password:o})},"$gU3rt8MuY1");if(console.log(e,o,a),a.value){t.value=a.value;const h=u("jwt");return h.value=a.value.jwt,!0}},v=async()=>{t.value=null;const e=u("jwt");e.value=null};return n.value&&l(),{user:t,isAuthenticated:i,jwtLogin:l,login:c,logout:v}};export{b as u};