(this["webpackJsonplayer0-static-react-example"]=this["webpackJsonplayer0-static-react-example"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(14),s=n.n(o),i=(n(26),n(15)),r=n(16),a=n(21),l=n(19),j=n.p+"static/media/logo.103b5fa1.svg",d=(n(27),n(7)),h=n(2),u=n(1),b=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Home"}),"My Home page!"]})},p=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"About"}),"This example shows how to use React Router!"]})},O=n(20),x=function(e){var t=e.match;return Object(u.jsxs)("h3",{children:["Message with ID ",t.params.id]})},f=function(e){var t=e.match;return Object(u.jsxs)("div",{children:[Object(u.jsx)("ul",{children:Object(O.a)(Array(5).keys()).map((function(e){return Object(u.jsx)("li",{children:Object(u.jsxs)(d.b,{to:"".concat(t.url,"/").concat(e+1),children:["Message ",e+1]})},e)}))}),Object(u.jsxs)(h.d,{children:[Object(u.jsx)(h.b,{path:"".concat(t.url,"/:id(\\d+)"),component:x}),Object(u.jsx)(h.b,{path:t.url,render:function(){return Object(u.jsx)("h3",{children:"Please select a message"})}})]})]})},m=function(e){Object(a.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("img",{src:j,className:"App-logo",alt:"logo"}),Object(u.jsx)("h1",{className:"App-title",children:"Welcome to React"})]}),Object(u.jsx)("div",{className:"menu",children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[" ",Object(u.jsx)(d.b,{to:"/",children:"Home"})," "]}),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)(d.b,{to:"/messages",children:"Messages"})," "]}),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)(d.b,{to:"/about",children:"About"})," "]})]})}),Object(u.jsx)("div",{className:"App-intro",children:Object(u.jsxs)(h.d,{children:[Object(u.jsx)(h.b,{exact:!0,path:"/",component:b}),Object(u.jsx)(h.b,{path:"/messages",component:f}),Object(u.jsx)(h.b,{path:"/about",component:p}),Object(u.jsx)(h.a,{to:"/"})]})})]})}}]),n}(c.Component),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(u.jsx)(d.a,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");g?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):v(e)}))}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.b1771029.chunk.js.map