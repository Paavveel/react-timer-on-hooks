(this["webpackJsonpreact-timer"]=this["webpackJsonpreact-timer"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(4),s=c.n(a),i=(c(9),c(3)),l=(c(10),c(0)),u=function(){var e=Object(n.useState)(function(){var e=localStorage.getItem("count");return e?+e:0}()),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),s=Object(i.a)(a,2),u=s[0],o=s[1],j=Object(n.useRef)(null);return Object(n.useEffect)((function(){localStorage.setItem("count",c)}),[c]),Object(n.useEffect)((function(){return u&&(j.current=setInterval((function(){r((function(e){return e+1}))}),1e3)),function(){j.current&&clearInterval(j.current),j.current=null}}),[u]),Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{className:"timer-container",children:[Object(l.jsx)("h1",{children:"React Timer"}),Object(l.jsx)("h2",{children:c}),Object(l.jsxs)("div",{className:"btns-container ",children:[Object(l.jsx)("a",{className:"waves-effect waves-light btn-large",onClick:function(){o(!u)},children:u?"Stop":"Start"}),Object(l.jsx)("a",{className:"waves-effect waves-light btn-large",onClick:function(){clearInterval(j.current),o(!1),r(0)},children:"Reset"})]})]})})};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.2371b8f6.chunk.js.map