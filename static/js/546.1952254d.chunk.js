"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[546],{771:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(689),a=n(87),s=n(184),i=function(e){var t=e.movies,n=(0,r.TH)();if(t.length<=0)return(0,s.jsx)("p",{children:"No avaible films"});return(0,s.jsx)("ul",{className:"movies-list",children:t.map((function(e){return(0,s.jsx)(a.Link,{to:"/movies/".concat(e.id),state:n,children:(0,s.jsxs)("li",{className:"movies-item",children:[(0,s.jsx)("span",{children:e.title||e.name}),(0,s.jsx)("img",{src:e.backdrop_path?"https://image.tmdb.org/t/p/w300/".concat(e.backdrop_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:e.title||e.name,className:"movie-img"})]})},e.id)}))})}},546:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(861),a=n(439),s=n(757),i=n.n(s),c=n(198),u=n(771),o=n(791),l=n(87),h=n(184),m=function(){var e=(0,o.useState)(""),t=(0,a.Z)(e,2),n=t[0],r=t[1],s=(0,l.useSearchParams)(),i=(0,a.Z)(s,2),c=i[0],u=i[1];return(0,o.useEffect)((function(){!n&&r(c.get("query"))}),[c,n]),(0,h.jsxs)("form",{onSubmit:function(e){u({query:n}),e.preventDefault()},children:[(0,h.jsx)("div",{children:(0,h.jsx)("input",{type:"text",name:"search",className:"movies-search",id:"moviesInputSeatch",value:n,onChange:function(e){var t=e.target.value;r(""),r(t)}})}),(0,h.jsx)("button",{children:"Search"})]})},f=n(566),p=function(){var e=(0,o.useState)(!1),t=(0,a.Z)(e,2),n=t[0],s=t[1],p=(0,o.useState)([]),v=(0,a.Z)(p,2),d=v[0],x=v[1],g=(0,l.useSearchParams)(),j=(0,a.Z)(g,1)[0],b=(0,o.useCallback)(function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,(0,f.Uy)(t);case 4:n=e.sent,x(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("\u041f\u043e\u043c\u0438\u043b\u043a\u0430");case 11:return e.prev=11,s(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(t){return e.apply(this,arguments)}}(),[]);return(0,o.useEffect)((function(){var e=j.get("query");b(e)}),[j,b]),(0,h.jsxs)(h.Fragment,{children:[n&&(0,h.jsx)(c.Z,{}),(0,h.jsx)(m,{}),d.length?(0,h.jsx)(u.Z,{movies:d}):(0,h.jsx)("h2",{children:"not found"})]})}}}]);
//# sourceMappingURL=546.1952254d.chunk.js.map