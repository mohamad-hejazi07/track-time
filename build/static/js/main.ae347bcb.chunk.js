(this["webpackJsonptrack-my-time"]=this["webpackJsonptrack-my-time"]||[]).push([[0],{199:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(51),i=n.n(r),s=n(2),u=n(7),o=n(3),j=n(4),b=n(201),d=n(1);function l(t){var e=t.onEndTime,n=Object(c.useState)({id:"",start:"",end:""}),a=Object(u.a)(n,2),r=a[0],i=a[1],s=Object(c.useState)(!1),o=Object(u.a)(s,2),l=o[0],O=o[1],f=Object(c.useState)(1),m=Object(u.a)(f,2),h=m[0],x=m[1],v=Object(c.useState)("00"),g=Object(u.a)(v,2),p=g[0],S=g[1],y=Object(c.useState)("00"),k=Object(u.a)(y,2),N=k[0],C=k[1];return Object(c.useEffect)((function(){r.start&&r.end&&e(Object(j.a)(Object(j.a)({id:Object(b.a)()},r),{},{edit:!1}))}),[r]),Object(c.useEffect)((function(){var t;return l?t=setInterval((function(){var t=h%60,e=Math.floor(h/60),n="".concat(String("0"+t).slice(-2)),c="".concat(String("0"+e).slice(-2));S(n),C(c),x(h+1)}),1e3):(clearInterval(r),x(1)),function(){clearInterval(t)}}),[l,h,r.start]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("button",{className:"button is-large is-fullwidth ".concat(l?"is-danger":"is-success"),onClick:function(){return function(){if(!l)return O(!0),i({start:Date.now(),end:""}),void x(1);O(!1),i(Object(j.a)(Object(j.a)({},r),{},{end:Date.now()}))}()},children:l?"End Time":"Start Time"}),Object(d.jsx)("div",{className:"is-flex is-justify-content-center",children:Object(d.jsxs)("h1",{className:"title is-1",children:[N,":",p]})})]})}var O=n(53),f=n.n(O);function m(t){return new Date(t).toLocaleString()}function h(t){var e=new Date(t);return"".concat(String("0"+e.getUTCHours()).slice(-2),":").concat(String("0"+e.getUTCMinutes()).slice(-2),":").concat(String("0"+e.getUTCSeconds()).slice(-2))}function x(t){var e,n=t.timeList,a=t.onUpdate,r=Object(c.useState)(n),i=Object(u.a)(r,2),o=i[0],j=i[1];return Object(c.useEffect)((function(){a(o)}),[o]),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("table",{className:"table is-bordered is-striped is-narrow is-hoverable is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Start Time"}),Object(d.jsx)("th",{children:"End Time"}),Object(d.jsx)("th",{children:"Sum"}),Object(d.jsx)("th",{children:"Options"})]})}),Object(d.jsx)("tfoot",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{}),Object(d.jsx)("th",{}),Object(d.jsx)("th",{children:(e=o,h(e.reduce((function(t,e){return t+(e.end-e.start)}),0)))}),Object(d.jsx)("th",{})]})}),Object(d.jsx)("tbody",{children:o.map((function(t){var e=t.id,n=t.start,c=t.end,a=t.edit;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:a?Object(d.jsx)(f.a,{initialValue:n,dateFormat:"DD.MM.yyyy",timeFormat:"HH:mm:ss",onChange:function(t){return function(t,e){console.log(e);var n=o.findIndex((function(e){return e.id===t})),c=Object(s.a)(o);c[n].start=e,j(c)}(e,t._d)}}):m(n)}),Object(d.jsx)("td",{children:a?Object(d.jsx)(f.a,{initialValue:c,dateFormat:"DD.MM.yyyy",timeFormat:"HH:mm:ss",onChange:function(t){return function(t,e){var n=o.findIndex((function(e){return e.id===t})),c=Object(s.a)(o);c[n].end=e,j(c)}(e,t._d)}}):m(c)}),Object(d.jsx)("td",{children:h(c-n)}),Object(d.jsx)("td",{children:Object(d.jsxs)("p",{className:"buttons",children:[Object(d.jsx)("button",{className:"button is-small ".concat(a?"is-info":"is-success"),onClick:function(){return function(t){var e=o.findIndex((function(e){return e.id===t})),n=Object(s.a)(o);n[e].edit=!n[e].edit,j(n)}(e)},children:a?"Finish":"Edit"}),Object(d.jsx)("button",{className:"button is-danger is-small",onClick:function(){return function(t){j(o.filter((function(e){return e.id!==t})))}(e)},children:"Delete"})]})})]},e)}))})]})})}var v=n(79),g=n(24),p=n.n(g),S=n(35),y=n.n(S);function k(t){var e=t.timeList,n=Object(c.useState)(e),r=Object(u.a)(n,2),i=r[0],o=r[1];Object(c.useEffect)((function(){o((function(t){return t.map((function(t){return Object(j.a)(Object(j.a)({},t),{},{sum:t.end-t.start})}))}))}),[]);var b=Object(c.useState)({labels:[],datasets:[{data:[],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]}),l=Object(u.a)(b,2),O=l[0],f=l[1];return Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsxs)("p",{className:"buttons",children:[Object(d.jsx)("button",{className:"button is-info",onClick:function(){return function(t){var e=y.a.groupBy(t,(function(t){return p()(t.start).startOf("day").format("dddd")})),n=Object.keys(e).map((function(t){return t})),c=Object.values(e).map((function(t){return t.reduce((function(t,e){return t+e.sum}),0)/1e3/60}));f(Object(j.a)(Object(j.a)({},O),{},{labels:n,datasets:[].concat(Object(s.a)(O.datasets),[{data:c}])}))}(i)},children:"Day"}),Object(d.jsx)("button",{className:"button is-info",onClick:function(){return function(t){var e=y.a.groupBy(t,(function(t){return p()(t.start).startOf("isoWeek").format("[W]WW")})),n=Object.keys(e).map((function(t){return t})),c=Object.values(e).map((function(t){return t.reduce((function(t,e){return t+e.sum}),0)/1e3/60}));f(Object(j.a)(Object(j.a)({},O),{},{labels:n,datasets:[].concat(Object(s.a)(O.datasets),[{data:c}])}))}(i)},children:"Week"}),Object(d.jsx)("button",{className:"button is-info",onClick:function(){return function(t){var e=y.a.groupBy(t,(function(t){return p()(t.start).startOf("month").format("MMMM")})),n=Object.keys(e).map((function(t){return t})),c=Object.values(e).map((function(t){return t.reduce((function(t,e){return t+e.sum}),0)/1e3/60}));f(Object(j.a)(Object(j.a)({},O),{},{labels:n,datasets:[].concat(Object(s.a)(O.datasets),[{data:c}])}))}(i)},children:"Month"})]}),Object(d.jsx)(v.a,{data:O,options:{plugins:{legend:{display:!1}}}})]})}var N=function(){var t=Object(c.useState)((function(){var t=localStorage.getItem("timeList");return t?JSON.parse(t):[]})),e=Object(u.a)(t,2),n=e[0],a=e[1],r=Object(o.d)(),i=Object(o.e)();return Object(c.useEffect)((function(){localStorage.setItem("timeList",JSON.stringify(n))}),[n]),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"container box",children:[Object(d.jsx)("nav",{className:"breadcrumb is-centered","aria-label":"breadcrumbs",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{onClick:function(){return r.push("/timetracker")},children:"Timertracker"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{onClick:function(){return r.push("/overview")},children:"Overview"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{onClick:function(){return r.push("/statistic")},children:"Statistic"})})]})}),"/timetracker"===i.pathname&&Object(d.jsx)(l,{onEndTime:function(t){return a([].concat(Object(s.a)(n),[t]))}}),"/overview"===i.pathname&&Object(d.jsx)(x,{timeList:n,onUpdate:function(t){return a(t)}}),"/statistic"===i.pathname&&Object(d.jsx)(k,{timeList:n})]})})},C=(n(197),n(198),n(52));i.a.render(Object(d.jsx)(C.a,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}},[[199,1,2]]]);
//# sourceMappingURL=main.ae347bcb.chunk.js.map