/* empty css                  */import{d as v,r as h,o as k,c as x,a as s,w as t,E as F,b as n,e as c,u as I,f as V,g as E,h as b,i as y,p as C,j as B,_ as S}from"./index-cf4f2134.js";const _=l=>(C("data-v-8a2cf30a"),l=l(),B(),l),L={class:"login-container"},N={class:"from-item"},R=_(()=>n("label",{for:"usr"},"账号",-1)),U={class:"from-item"},$=_(()=>n("label",{for:"psw"},"密码",-1)),j=v({__name:"Login",setup(l){const m=I(),i=()=>{m.push("/register")},o=h({username:"",password:""}),f=d=>{V.post("/users/login",{username:o.username,password:o.password}).then(({data:e})=>{if(e.code=="0000"){let r=e.data.token;sessionStorage.setItem("token",r),m.push("/home")}}).catch(e=>{console.log(e)})},w=d=>{o.password=o.username=""};return(d,e)=>{const r=E,p=b,u=y,g=F;return k(),x("div",L,[s(g,{ref:"ruleFormRef",model:o,"status-icon":"","label-width":"40px",class:"ruleForm"},{default:t(()=>[s(p,{prop:"pass"},{default:t(()=>[n("div",N,[R,s(r,{id:"usr",modelValue:o.username,"onUpdate:modelValue":e[0]||(e[0]=a=>o.username=a),type:"text",autocomplete:"off"},null,8,["modelValue"])])]),_:1}),s(p,{prop:"checkPass"},{default:t(()=>[n("div",U,[$,s(r,{id:"psw",modelValue:o.password,"onUpdate:modelValue":e[1]||(e[1]=a=>o.password=a),type:"password",autocomplete:"off"},null,8,["modelValue"])])]),_:1}),s(p,null,{default:t(()=>[s(u,{type:"primary",onClick:e[2]||(e[2]=a=>f(""))},{default:t(()=>[c("登录")]),_:1}),s(u,{onClick:e[3]||(e[3]=a=>w(""))},{default:t(()=>[c("重置")]),_:1}),n("span",{class:"register",onClick:i},"点我注册")]),_:1})]),_:1},8,["model"])])}}});const q=S(j,[["__scopeId","data-v-8a2cf30a"]]);export{q as default};