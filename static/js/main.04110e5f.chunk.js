(this["webpackJsonpreact-timer"]=this["webpackJsonpreact-timer"]||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){"use strict";c.r(e);var n=c(1),r=c.n(n),u=c(4),i=c.n(u),o=(c(9),c(3)),s=(c(10),c(0)),a=function(){var t=Object(n.useState)(function(){var t=localStorage.getItem("count");return t?+t:0}()),e=Object(o.a)(t,2),c=e[0],r=e[1],u=Object(n.useState)(!1),i=Object(o.a)(u,2),a=i[0],l=i[1],j=Object(n.useRef)(null);return Object(n.useEffect)((function(){localStorage.setItem("count",c)}),[c]),Object(n.useEffect)((function(){return a&&(j.current=setInterval((function(){r((function(t){return t+1}))}),1e3)),function(){j.current&&clearInterval(j.current),j.current=null}}),[a]),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"React Timer"}),Object(s.jsx)("h2",{children:c}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{onClick:function(){l(!a)},children:a?"Stop":"Start"}),Object(s.jsx)("button",{onClick:function(){clearInterval(j.current),l(!1),r(0)},children:"Reset"})]})]})};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(a,{})}),document.getElementById("root"))},9:function(t,e,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.04110e5f.chunk.js.map