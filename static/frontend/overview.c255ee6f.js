import{u as i}from"./useApi.1e322299.js";import{i as d,o as c,l as n,v as t,u as e,t as o,y as x,U as _}from"./entry.9c3217d9.js";const m={class:"p-6 w-4/5"},p={class:"bg-white pb-20 lg:pb-[120px]"},r=_('<div class="bg-primary pt-20 pb-[140px] lg:pt-[120px]"><div class="mx-auto px-4 sm:container"><div class="mx-auto max-w-[570px] text-center"><span class="mb-2 block text-lg font-semibold text-white"> Some Fun Facts </span><h2 class="mb-4 text-3xl font-bold text-white md:text-[40px]"> Platform overview </h2><p class="text-base text-white"> Here are many info of our platform, you can may want to know as an admin. </p></div></div></div>',1),b={key:0,class:"-mt-20"},h={class:"mx-auto px-4 sm:container"},v={class:"shadow mx-auto flex max-w-[970px] flex-wrap items-center justify-center rounded-lg bg-white py-[60px] px-10"},w={class:"w-1/2 md:w-1/5"},u={class:"mb-10 text-center md:mb-0"},f=t("p",{class:"text-body-color mb-1 text-lg"},"Total Workers",-1),g={class:"block text-4xl font-bold text-black sm:text-[44px]"},k={class:"w-1/2 md:w-1/5"},y={class:"mb-10 text-center md:mb-0"},B=t("p",{class:"text-body-color mb-1 text-lg"},"Total Banks",-1),S={class:"block text-4xl font-bold text-black sm:text-[44px]"},N={class:"w-1/2 md:w-1/5"},V={class:"mb-10 text-center md:mb-0"},A=t("p",{class:"text-body-color mb-1 text-lg"},"Live Banks",-1),D={class:"block text-4xl font-bold text-black sm:text-[44px]"},E={class:"w-1/2 md:w-1/5"},F={class:"text-center"},P=t("p",{class:"text-body-color mb-1 text-lg"},"Pending Dollars",-1),T={class:"block text-4xl font-bold text-black sm:text-[44px]"},$={class:"w-1/2 md:w-1/5"},j={class:"text-center"},C=t("p",{class:"text-body-color mb-1 text-lg"},"Earnings",-1),H={class:"block text-4xl font-bold text-black sm:text-[44px]"},G={__name:"overview",setup(L){const l=i(),s=d("ss");return(async()=>{const a=await l.get("/api/dash/overview");s.value=a.data})(),(a,W)=>(c(),n("section",m,[t("section",p,[r,e(s)?(c(),n("div",b,[t("div",h,[t("div",v,[t("div",w,[t("div",u,[f,t("span",g,o(e(s).workers),1)])]),t("div",k,[t("div",y,[B,t("span",S,o(e(s).banks),1)])]),t("div",N,[t("div",V,[A,t("span",D,o(e(s).live),1)])]),t("div",E,[t("div",F,[P,t("span",T," $"+o(e(s).pending),1)])]),t("div",$,[t("div",j,[C,t("span",H," $"+o(e(s).completed),1)])])])])])):x("",!0)])]))}};export{G as default};
