import{_ as b,r as e,o as c,f as r,w as o,a as l,d as s,g as i,u as f,N as p}from"../app.99dabcc2.js";const g={},h=s("Delete");function v(a,_){const t=e("el-button"),n=e("el-popconfirm");return c(),r(n,{title:"Are you sure to delete this?"},{reference:o(()=>[l(t,null,{default:o(()=>[h]),_:1})]),_:1})}var x=b(g,[["render",v]]),C=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));const y=s("Delete"),O=i({__name:"customize",setup(a){return(_,t)=>{const n=e("el-button"),u=e("el-popconfirm");return c(),r(u,{"confirm-button-text":"OK","cancel-button-text":"No, Thanks",icon:f(p),"icon-color":"#626AEF",title:"Are you sure to delete this?"},{reference:o(()=>[l(n,null,{default:o(()=>[y]),_:1})]),_:1},8,["icon"])}}});var N=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"}));const j=s("Delete"),S=i({__name:"trigger-event",setup(a){const _=()=>{console.log("confirm!")},t=()=>{console.log("cancel!")};return(n,u)=>{const m=e("el-button"),d=e("el-popconfirm");return c(),r(d,{"confirm-button-text":"Yes","cancel-button-text":"No",icon:f(p),"icon-color":"#626AEF",title:"Are you sure to delete this?",onConfirm:_,onCancel:t},{reference:o(()=>[l(m,null,{default:o(()=>[j]),_:1})]),_:1},8,["icon"])}}});var T=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));export{C as _,N as a,T as b};