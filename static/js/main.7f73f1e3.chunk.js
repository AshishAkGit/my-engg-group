(this["webpackJsonpmy-engg-group"]=this["webpackJsonpmy-engg-group"]||[]).push([[0],{20:function(e,a,t){e.exports=t(44)},25:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),c=t.n(l),m=(t(25),t(19)),i=t(7),s=t(1),o=Object(s.f)((function(e){return r.a.createElement("div",{className:"navigation"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement(i.b,{className:"navbar-brand",to:"/my-engg-group/"},"Engineering Group Website"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item  ".concat("/my-engg-group/"===e.location.pathname?"active":"")},r.a.createElement(i.b,{className:"nav-link",to:"/my-engg-group/"},"Home",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item  ".concat("/my-engg-group/about"===e.location.pathname?"active":"")},r.a.createElement(i.b,{className:"nav-link",to:"/my-engg-group/about"},"About")),r.a.createElement("li",{className:"nav-item  ".concat("/my-engg-group/contact"===e.location.pathname?"active":"")},r.a.createElement(i.b,{className:"nav-link",to:"/my-engg-group/contact"},"Contact")))),r.a.createElement("div",{className:"language-select"},r.a.createElement("select",{className:"custom-select",value:e.language,onChange:function(a){return e.handleSetLanguage(a.target.value)}},r.a.createElement("option",{value:"English"},"English"),r.a.createElement("option",{value:"German"},"German"))))))})),g=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("footer",{className:"py-3 bg-dark fixed-bottom"},r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"m-0 text-center text-white"},"Copyright \xa9 Engineering Group 2020"))))},u=function(e){var a={English:{title:"Home",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},German:{title:"Zuhause",description:"Lorem Ipsum ist einfach ein Dummy-Text der Druck- und Satzindustrie. Lorem Ipsum ist seit dem 16. Jahrhundert der Standard-Dummy-Text der Branche, als ein unbekannter Drucker eine Galeere vom Typ nahm und sie zu einem Musterbuch verschl\xfcsselte."}};return a="German"===e.language?a.German:a.English,r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-center my-5"},r.a.createElement("div",{className:"col-lg-7"},r.a.createElement("img",{className:"img-fluid rounded mb-4 mb-lg-0",src:"./images/engg-grp-img1.jpeg",alt:""})),r.a.createElement("div",{className:"col-lg-5"},r.a.createElement("h1",{className:"font-weight-light"},a.title),r.a.createElement("p",null,a.description)))))},d=t(16),p={height:"390",width:"640",playerVars:{autoplay:1}},E=function(e){e.target.pauseVideo()},h=function(e){var a={English:{title:"About",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},German:{title:"\xdcber",description:"Lorem Ipsum ist einfach ein Dummy-Text der Druck- und Satzindustrie. Lorem Ipsum ist seit dem 16. Jahrhundert der Standard-Dummy-Text der Branche, als ein unbekannter Drucker eine Galeere vom Typ nahm und sie zu einem Musterbuch verschl\xfcsselte."}};return a="German"===e.language?a.German:a.English,r.a.createElement("div",{className:"about"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row align-items-center my-5"},r.a.createElement("div",{class:"col-lg-7"},r.a.createElement(d.a,{videoId:"98DXe3uKwfc",opts:p,onReady:E})),r.a.createElement("div",{class:"col-lg-5"},r.a.createElement("h1",{class:"font-weight-light"},a.title),r.a.createElement("p",null,a.description)))))},v=[{img:"./images/engg-grp-img2.jpeg",designation:"Manager",name:"Parikshit Karmarkar",address:"Talegaon MIDC",phone:"91-20-6455000",email:"parikshit.karmarkar@abc.com"}],b=function(){return v.map((function(e,a){return r.a.createElement("div",{className:"row align-items-center my-5",key:a},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("img",{className:"img-fluid rounded mb-4 mb-lg-0",src:e.img,alt:""})),r.a.createElement("div",{class:"col-lg-4"},r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("strong",null,e.name)),r.a.createElement("p",null,e.designation),r.a.createElement("p",null,e.address),r.a.createElement("p",null,e.phone),r.a.createElement("p",null,e.email))))}))},y=function(e){var a={English:{title:"Contact Details"},German:{title:"Kontakt details"}};return a="German"===e.language?a.German:a.English,r.a.createElement("div",{className:"contact"},r.a.createElement("h2",null,a.title," "),r.a.createElement("div",{class:"container"},r.a.createElement(b,null)))},f=(t(43),function(e){localStorage.setItem("language",e)}),N=function(){var e=localStorage.getItem("language"),a=Object(n.useState)(e||"English"),t=Object(m.a)(a,2),l=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(o,{language:l,handleSetLanguage:function(e){c(e),f(e)}}),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/my-engg-group/",exact:!0,component:function(){return r.a.createElement(u,{language:l})}}),r.a.createElement(s.a,{path:"/my-engg-group/about",exact:!0,component:function(){return r.a.createElement(h,{language:l})}}),r.a.createElement(s.a,{path:"/my-engg-group/contact",exact:!0,component:function(){return r.a.createElement(y,{language:l})}})),r.a.createElement(g,{language:l})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.7f73f1e3.chunk.js.map