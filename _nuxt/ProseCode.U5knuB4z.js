import{d as m,r as l,al as k,am as w,v as S,b as a,c as p,e as y,g as h,w as b,I as f,W as _,T as $,n as v,ab as x,p as I,i as z,k as C,t as N,f as P,Y as T}from"./entry.2zh_RuO3.js";const V=e=>(I("data-v-4a003820"),e=e(),z(),e),A=V(()=>y("span",{class:"sr-only"},"Copy to clipboard",-1)),M={class:"icon-wrapper"},R=m({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,s=l(),{copy:t}=k();w(s,()=>{o.value==="copied"&&(o.value="init")});const{prose:c}=S(),o=l("init"),g=B=>{t(n.content).then(()=>{o.value="copied"}).catch(i=>{console.warn("Couldn't copy to clipboard!",i)})};return(B,i)=>{const u=x;return a(),p("button",{ref_key:"copyButtonRef",ref:s,class:v([(e.show||o.value==="copied")&&"show"]),onClick:g},[A,y("span",M,[h($,{name:"fade"},{default:b(()=>{var r,d;return[o.value==="copied"?(a(),_(u,{key:0,name:(r=f(c).copyButton)==null?void 0:r.iconCopied,size:"18",class:"copied"},null,8,["name"])):(a(),_(u,{key:1,name:(d=f(c).copyButton)==null?void 0:d.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}}),D=C(R,[["__scopeId","data-v-4a003820"]]),E={key:0,class:"filename"},O=m({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=l(!1);return(s,t)=>{const c=D;return a(),p("div",{class:v([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=o=>n.value=!0),onMouseleave:t[1]||(t[1]=o=>n.value=!1)},[e.filename?(a(),p("span",E,N(e.filename),1)):P("",!0),T(s.$slots,"default",{},void 0,!0),h(c,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}}),Y=C(O,[["__scopeId","data-v-c164ce0a"]]);export{Y as default};
