(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{16:function(e){e.exports=JSON.parse('{"profile":[{"basics":{"name":"Alekhya","role":"developer","phone":"8978710133","email":"alekhya.mandala99@gmail.com"}},{"basics":{"name":"Surya","role":"DB developer","phone":"8888899999","email":"surya1234@gmail.com"}}]}')},17:function(e){e.exports=JSON.parse('{"profile":[{"basics":{"name":"Alekhya","role":"developer","phone":"8978710133","email":"alekhya.mandala99@gmail.com"},"carrer":"i want to explore my entire knownledge to give better output ","edu":{"coll1":"GIER","coll2":"CHAITANYA","coll3":"Bhashyam","per1":"95","per2":"90","per3":"88"},"skills":{"s1":"oracle","s2":"sql","s3":"c","s4":"c++"},"Hobbies":{"h1":"playing carroms","h2":"paper crafting"}},{"basics":{"name":"Surya","role":"DB developer","phone":"8888899999","email":"surya1234@gmail.com"},"carrer":"i want to explore my entire knownledge to give better output ","edu":{"coll1":"GIER","coll2":"CHAITANYA","coll3":"Bhashyam","per1":"95","per2":"90","per3":"88"},"skills":{"s1":"oracle","s2":"sql","s3":"c","s4":"c++"},"Hobbies":{"h1":"playing carroms","h2":"paper crafting"}}]}')},19:function(e,a,l){e.exports=l(32)},24:function(e,a,l){},25:function(e,a,l){},26:function(e,a,l){},32:function(e,a,l){"use strict";l.r(a);var t=l(0),n=l.n(t),r=l(15),c=l.n(r),s=(l(24),l(25),l(8)),o=l.n(s),m=l(16),i=(l(26),l(10)),u=l(1),d=l(17);function E(e){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){return console.log(e)}));var a=d.profile[e.location.data.id];return console.log(a.carrer),n.a.createElement("div",{className:"row justify-content-center bg-secondary"},n.a.createElement("div",{className:"col-lg-3 m-2"},n.a.createElement("div",{className:"card shadow"},n.a.createElement("div",{className:"card-body text-center"},n.a.createElement("img",{src:o.a,alt:"pic",style:{width:"30%"}}),n.a.createElement("h2",null,a.basics.name),n.a.createElement("h4",{className:"text-secondary"},a.basics.role),n.a.createElement("a",{href:"tel:"+a.basics.phone},n.a.createElement("h4",null,a.basics.phone)),n.a.createElement("a",{href:"mailto:"+a.basics.email},n.a.createElement("h4",null,a.basics.email))))),n.a.createElement("div",{className:"col-lg-8 m-2"},n.a.createElement("div",{className:"card shadow"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h2",null,"Carrer Objective"),n.a.createElement("hr",null),n.a.createElement("p",null,a.carrer),n.a.createElement("h2",null,"Education Details"),n.a.createElement("div",{class:"container mt-5"},n.a.createElement("div",{class:"table-responsive-lg"},n.a.createElement("table",{class:"table table-bordered table-striped table-hover"},n.a.createElement("thead",{class:"thead-dark"},n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"S.NO"),n.a.createElement("th",null,"Institute"),n.a.createElement("th",null,"percentage"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"1"),n.a.createElement("td",null,a.edu.coll1),n.a.createElement("td",null,a.edu.per1)),n.a.createElement("tr",null,n.a.createElement("td",null,"2"),n.a.createElement("td",null,a.edu.coll2),n.a.createElement("td",null,a.edu.per2)),n.a.createElement("tr",null,n.a.createElement("td",null,"3"),n.a.createElement("td",null,a.edu.coll3),n.a.createElement("td",null,a.edu.per3)))))),n.a.createElement("h2",null,"Skills"),n.a.createElement("ul",null,n.a.createElement("li",null,a.skills.s1),n.a.createElement("li",null,a.skills.s2),n.a.createElement("li",null,a.skills.s3),n.a.createElement("li",null,a.skills.s4)),n.a.createElement("h2",null,"Hobbies"),n.a.createElement("ul",null,n.a.createElement("li",null,a.Hobbies.h1),n.a.createElement("li",null,a.Hobbies.h2))))))}var p=function(){var e=m.profile;return console.log(e),n.a.createElement("div",{className:"row justify-content-center"},e.map((function(e,a){return n.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-10 mt-1",key:a},n.a.createElement("div",{className:"card bg-secondary"},n.a.createElement("div",{className:"card-body text-center"},n.a.createElement("img",{src:o.a,alt:"pic",style:{width:"30%"}}),n.a.createElement("h2",null,e.basics.name),n.a.createElement("h4",{className:"text-secondary"},e.basics.role),n.a.createElement("a",{href:"tel:"+e.basics.phone},n.a.createElement("h4",null,e.basics.phone)),n.a.createElement("a",{href:"mailto:"+e.basics.email},n.a.createElement("h4",null,e.basics.email)),n.a.createElement(i.b,{to:{pathname:"/resume",data:{id:a}},className:"btn btn-primary"},"View Profile"))))})))},h=function(){return n.a.createElement(i.a,null,n.a.createElement(u.a,{exact:!0,path:"/",component:p}),n.a.createElement(u.a,{exact:!0,path:"/resume",component:E}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,l){e.exports=l.p+"static/media/delivery-man.4948508c.svg"}},[[19,1,2]]]);
//# sourceMappingURL=main.f9a251b6.chunk.js.map