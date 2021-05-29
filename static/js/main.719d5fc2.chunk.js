(this.webpackJsonpcovid19tracker=this.webpackJsonpcovid19tracker||[]).push([[0],{177:function(e,a,t){},178:function(e,a,t){},359:function(e,a,t){},360:function(e,a,t){},361:function(e,a,t){},364:function(e,a,t){},365:function(e,a,t){"use strict";t.r(a);var l=t(1),c=t.n(l),n=t(57),r=t.n(n),s=(t(177),t(141)),o=t(10),m=(t(44),t(37)),d=t(8),i=(t(178),t(6));function u(e){return c.a.createElement(i.l,null,c.a.createElement(i.f,{data:e.data,margin:{left:20}},c.a.createElement(i.c,{strokeDasharray:"3 3"}),c.a.createElement(i.n,{dataKey:"date"}),c.a.createElement(i.o,{scale:e.scale,domain:e.domain}),c.a.createElement(i.m,null),c.a.createElement(i.e,{type:"monotone",dataKey:e.dataKey,stroke:e.stroke})))}function v(e){return c.a.useEffect((function(){document.title="Covid-19 India Tracker"}),[]),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row text-center"},c.a.createElement("div",{className:"col-12 col-md-6 col-lg-4 col-xl-2"},c.a.createElement("div",{className:"mx-2 my-4 bg-info cases-types h2 p-4 d-flex align-items-center"},c.a.createElement("span",null,"Covid-19 India Tracker"))),c.a.createElement("div",{className:"col-12 col-md-6 col-lg-4 col-xl-2"},c.a.createElement("div",{className:"mx-2 my-4 cases-types h3 p-4 d-flex flex-column justify-content-around",style:{backgroundColor:"#fd7e14"}},c.a.createElement("span",null,"Confirmed"),c.a.createElement("span",null,new Intl.NumberFormat("en-IN").format(e.confirmed[e.confirmed.length-1].confirmed)))),c.a.createElement("div",{className:"col-12 col-md-6 col-lg-4 col-xl-2"},c.a.createElement("div",{className:"mx-2 my-4 bg-primary cases-types h3 p-4 d-flex flex-column justify-content-around"},c.a.createElement("span",null,"Active"),c.a.createElement("span",null,new Intl.NumberFormat("en-IN").format(e.active[e.active.length-1].active)))),c.a.createElement("div",{className:"col-12 col-md-6 col-lg-4 col-xl-2"},c.a.createElement("div",{className:"mx-2 my-4 bg-danger cases-types h3 p-4 d-flex flex-column justify-content-around"},c.a.createElement("span",null,"Deceased"),c.a.createElement("span",null,new Intl.NumberFormat("en-IN").format(e.deceased[e.deceased.length-1].deceased)))),c.a.createElement("div",{className:"col-12 col-md-6 col-lg-4 col-xl-2"},c.a.createElement("div",{className:"mx-2 my-4 bg-success cases-types h3 p-4 d-flex flex-column justify-content-around"},c.a.createElement("span",null,"Recovered"),c.a.createElement("span",null,new Intl.NumberFormat("en-IN").format(e.recovered[e.recovered.length-1].recovered)))),c.a.createElement("div",{className:"col-12 col-md-6 col-lg-4 col-xl-2"},c.a.createElement("div",{className:"mx-2 my-4 cases-types h3 p-4 d-flex flex-column justify-content-around",style:{backgroundColor:"#6610f2"}},c.a.createElement("span",null,"Tested"),c.a.createElement("span",null,e.tested)))),c.a.createElement("div",{className:"row text-center"},c.a.createElement("div",{className:"col-12 col-md-12 col-lg-12 col-xl-9"},c.a.createElement("div",{className:"row text-center"},c.a.createElement("div",{className:"col-12 col-md-12 col-lg-6 col-xl-6"},c.a.createElement("h4",{style:{color:"#fd7e14"}},"Confirmed"),c.a.createElement("div",{className:"m-2 home-graph"},c.a.createElement(u,{data:e.confirmed,scale:"log",domain:[1,5e7],dataKey:"confirmed",stroke:"#fd7e14"}))),c.a.createElement("div",{className:"col-12 col-md-12 col-lg-6 col-xl-6"},c.a.createElement("h4",{className:"text-primary"},"Active"),c.a.createElement("div",{className:"my-2 home-graph"},c.a.createElement(u,{data:e.active,scale:"auto",domain:[1,4e6],dataKey:"active",stroke:"#007bff"})))),c.a.createElement("hr",null),c.a.createElement("div",{className:"row text-center"},c.a.createElement("div",{className:"col-12 col-md-12 col-lg-6 col-xl-6"},c.a.createElement("h4",{className:"text-danger"},"Deceased"),c.a.createElement("div",{className:"my-2 home-graph"},c.a.createElement(u,{data:e.deceased,scale:"log",domain:[1,5e5],dataKey:"deceased",stroke:"#dc3545"}))),c.a.createElement("div",{className:"col-12 col-md-12 col-lg-6 col-xl-6"},c.a.createElement("h4",{className:"text-success"},"Recovered"),c.a.createElement("div",{className:"my-2 home-graph"},c.a.createElement(u,{data:e.recovered,scale:"log",domain:[1,5e7],dataKey:"recovered",stroke:"#28a745"}))))),c.a.createElement("div",{className:"col-12 col-md-12 col-lg-12 col-xl-3"},c.a.createElement("div",{className:"m-2",style:{height:"60vh"}},c.a.createElement(i.l,null,c.a.createElement(i.k,{data:e.world,margin:{left:20,right:20},startAngle:35,endAngle:-325},c.a.createElement(i.h,null),c.a.createElement(i.g,{dataKey:"type"}),c.a.createElement(i.i,{scale:"sqrt"}),c.a.createElement(i.j,{dataKey:"World",stroke:"purple",fill:"#8884d8",fillOpacity:.6}),c.a.createElement(i.j,{dataKey:"India",stroke:"orange",fill:"gold",fillOpacity:.6}),c.a.createElement(i.m,null),c.a.createElement(i.d,null)))))))}t(359);var f={AP:"Andhra Pradesh",AR:"Arunachal Pradesh",AS:"Assam",BR:"Bihar",CT:"Chhattisgarh",GA:"Goa",GJ:"Gujarat",HR:"Haryana",HP:"Himachal Pradesh",JH:"Jharkhand",KA:"Karnataka",KL:"Kerala",MP:"Madhya Pradesh",MH:"Maharashtra",MN:"Manipur",ML:"Meghalaya",MZ:"Mizoram",NL:"Nagaland",OR:"Odisha",PB:"Punjab",RJ:"Rajasthan",SK:"Sikkim",TN:"Tamil Nadu",TG:"Telangana",TR:"Tripura",UT:"Uttarakhand",UP:"Uttar Pradesh",WB:"West Bengal",AN:"Andaman and Nicobar Islands",CH:"Chandigarh",DN:"Dadra and Nagar Haveli",DL:"Delhi",JK:"Jammu and Kashmir",LA:"Ladakh",PY:"Puducherry"};function p(e){var a=["#fd7e14","#007bff","#dc3545","#28a745","#6610f2","#f8bb04"];return c.a.useEffect((function(){document.title="State Wise"}),[]),c.a.createElement("div",{style:{height:"80vh",width:"100vw"}},c.a.createElement("div",{className:"container"},c.a.createElement(E,{setType:e.setType,type:e.type,colors:a})),c.a.createElement(i.l,null,c.a.createElement(i.b,{data:e.states,margin:{left:20,right:20}},c.a.createElement(i.c,{strokeDasharray:"3 3"}),c.a.createElement(i.n,{dataKey:"state"}),c.a.createElement(i.o,null),c.a.createElement(i.m,{labelFormatter:function(e){return f[e]},formatter:function(e){return new Intl.NumberFormat("en-IN").format(e)}}),c.a.createElement(i.a,{dataKey:["confirmed","active","deceased","recovered","tested","vaccinated"][e.type],fill:a[e.type]}))))}function E(e){for(var a=[],t=0;t<6;++t)a.push({backgroundColor:e.colors[t]+(e.type===t?"67":"44"),color:e.colors[t]+(e.type===t?"":"aa"),boxShadow:"0 0 "+(e.type===t?6:0)+"px "+(e.type===t?3:0)+"px "+e.colors[t]});return c.a.createElement("div",{className:"row my-3 text-center",style:{backgroundColor:"whitesmoke",borderRadius:14}},c.a.createElement("div",{className:"col-6 col-md-4 col-lg-2 col-xl-2"},c.a.createElement("div",{className:"cases-type p-2 my-3",style:a[0],onClick:function(){return e.setType(0)}},"Confirmed")),c.a.createElement("div",{className:"col-6 col-md-4 col-lg-2 col-xl-2"},c.a.createElement("div",{className:"cases-type p-2 my-3",style:a[1],onClick:function(){return e.setType(1)}},"Active")),c.a.createElement("div",{className:"col-6 col-md-4 col-lg-2 col-xl-2"},c.a.createElement("div",{className:"cases-type p-2 my-3",style:a[2],onClick:function(){return e.setType(2)}},"Deceased")),c.a.createElement("div",{className:"col-6 col-md-4 col-lg-2 col-xl-2"},c.a.createElement("div",{className:"cases-type p-2 my-3",style:a[3],onClick:function(){return e.setType(3)}},"Recovered")),c.a.createElement("div",{className:"col-6 col-md-4 col-lg-2 col-xl-2"},c.a.createElement("div",{className:"cases-type p-2 my-3",style:a[4],onClick:function(){return e.setType(4)}},"Tested")),c.a.createElement("div",{className:"col-6 col-md-4 col-lg-2 col-xl-2"},c.a.createElement("div",{className:"cases-type p-2 my-3",style:a[5],onClick:function(){return e.setType(5)}},"Vaccinated")))}function y(e){return c.a.createElement("select",{className:"custom-select",onChange:function(a){e.handleChange(a.target.value)},value:e.value},c.a.createElement("option",{value:""},"Select"),e.options.map((function(a,t){return c.a.createElement("option",{key:t,value:a},"State"===e.default?f[a]:a)})))}function h(e){return c.a.createElement(i.l,null,c.a.createElement(i.b,{data:e.data},c.a.createElement(i.n,{dataKey:"district"}),c.a.createElement(i.o,null),c.a.createElement(i.c,null),c.a.createElement(i.m,null),c.a.createElement(i.a,{dataKey:e.type1,fill:e.fill1}),c.a.createElement(i.a,{dataKey:e.type2,fill:e.fill2})))}t(360);function N(e){var a=Object(l.useState)(),t=Object(o.a)(a,2),n=t[0],r=t[1],s=Object(l.useState)([]),m=Object(o.a)(s,2),d=m[0],i=m[1],u=Object(l.useState)([]),v=Object(o.a)(u,2),f=v[0],p=v[1],E=Object(l.useState)(""),N=Object(o.a)(E,2),g=N[0],b=N[1],x=Object(l.useState)(),j=Object(o.a)(x,2),k=j[0],w=j[1];return Object(l.useEffect)((function(){document.title="District Wise"}),[]),Object(l.useEffect)((function(){if(n){var a=e.districts[n],t=[[],[],[]];for(var l in p(a),a){var c=a[l].total.confirmed||0,r=a[l].total.deceased||0,s=a[l].total.recovered||0,o=a[l].total.tested||0,m=a[l].total.vaccinated||0;t[0].push({district:l,confirmed:c,active:c-r-s}),t[1].push({district:l,deceased:r,recovered:s}),t[2].push({district:l,tested:o,vaccinated:m})}w(t)}b("")}),[e.districts,n]),Object(l.useEffect)((function(){if(g){var e=[],a=f[g].total.confirmed||0,t=f[g].total.deceased||0,l=f[g].total.recovered||0,c=f[g].total.tested||0,n=f[g].total.vaccinated||0;e.push({type:"Confirmed",value:a}),e.push({type:"Active",value:a-t-l}),e.push({type:"Deceased",value:t}),e.push({type:"Recovered",value:l}),e.push({type:"Tested",value:c}),e.push({type:"Vaccinated",value:n}),i(e)}}),[g,f]),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row text-center"},c.a.createElement("div",{className:"col-12 col-md-6 col-lg-4 col-xl-2 py-4 d-flex justify-content-around flex-column"},c.a.createElement("div",{className:"input-group input-group-lg"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("label",{className:"input-group-text",htmlFor:"state",style:{fontWeight:"bold"}},"State: ")),c.a.createElement(y,{default:"State",options:Object.keys(e.districts),handleChange:r})),c.a.createElement("div",{className:"input-group input-group-lg"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("label",{className:"input-group-text",htmlFor:"state",style:{fontWeight:"bold"}},"District: ")),c.a.createElement(y,{default:"District",options:Object.keys(f),value:g,handleChange:b}))),c.a.createElement("div",{className:"col-12 col-md-6 col-lg-4 col-xl-10"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6 col-md-6 col-lg-4 col-xl-2"},c.a.createElement("div",{className:"mx-2 my-4 cases-types h3 py-4 d-flex flex-column justify-content-around",style:{backgroundColor:"#fd7e14"}},c.a.createElement("span",null,"Confirmed"),c.a.createElement("span",null,d[0]&&g?new Intl.NumberFormat("en-IN").format(d[0].value):"-"))),c.a.createElement("div",{className:"col-6 col-md-6 col-lg-4 col-xl-2"},c.a.createElement("div",{className:"mx-2 my-4 bg-primary cases-types h3 py-4 d-flex flex-column justify-content-around"},c.a.createElement("span",null,"Active"),c.a.createElement("span",null,d[1]&&g?new Intl.NumberFormat("en-IN").format(d[1].value):"-"))),c.a.createElement("div",{className:"col-6 col-md-6 col-lg-4 col-xl-2"},c.a.createElement("div",{className:"mx-2 my-4 bg-danger cases-types h3 py-4 d-flex flex-column justify-content-around"},c.a.createElement("span",null,"Deceased"),c.a.createElement("span",null,d[2]&&g?new Intl.NumberFormat("en-IN").format(d[2].value):"-"))),c.a.createElement("div",{className:"col-6 col-md-6 col-lg-4 col-xl-2"},c.a.createElement("div",{className:"mx-2 my-4 bg-success cases-types h3 py-4 d-flex flex-column justify-content-around"},c.a.createElement("span",null,"Recovered"),c.a.createElement("span",null,d[3]&&g?new Intl.NumberFormat("en-IN").format(d[3].value):"-"))),c.a.createElement("div",{className:"col-6 col-md-6 col-lg-4 col-xl-2"},c.a.createElement("div",{className:"mx-2 my-4 cases-types h3 py-4 d-flex flex-column justify-content-around",style:{backgroundColor:"#6610f2"}},c.a.createElement("span",null,"Tested"),c.a.createElement("span",null,d[4]&&g?new Intl.NumberFormat("en-IN").format(d[4].value):"-"))),c.a.createElement("div",{className:"col-6 col-md-6 col-lg-4 col-xl-2"},c.a.createElement("div",{className:"mx-2 my-4 cases-types h3 py-4 d-flex flex-column justify-content-around",style:{backgroundColor:"#ffc107"}},c.a.createElement("span",null,"Vaccinated"),c.a.createElement("span",null,d[5]&&g?new Intl.NumberFormat("en-IN").format(d[5].value):"-")))))),k&&n?c.a.createElement("div",null,c.a.createElement("div",{className:"row text-center"},c.a.createElement("div",{className:"col-12 col-md-12 col-lg-12 col-xl-12"},c.a.createElement("div",{className:"d-flex flex-column"},c.a.createElement("div",{className:"m-2 dist-graph"},c.a.createElement(h,{data:k[0],type1:"confirmed",type2:"active",fill1:"#fd7e14",fill2:"#007bff"})),c.a.createElement("div",{className:"m-2 dist-graph"},c.a.createElement(h,{data:k[1],type1:"recovered",type2:"deceased",fill1:"#28a745",fill2:"#dc3545"})),c.a.createElement("div",{className:"m-2 dist-graph"},c.a.createElement(h,{data:k[2],type1:"tested",type2:"vaccinated",fill1:"#6610f2",fill2:"#ffc107"})))))):null)}t(361);function g(){return c.a.createElement("div",{className:"about"},c.a.createElement("h1",null,"Covid-19 India Tracker"),c.a.createElement("br",null),c.a.createElement("h3",null,"Made by ",c.a.createElement("i",null,"github.com/Athi223")),c.a.createElement("br",null),c.a.createElement("h5",null,"Credits:",c.a.createElement("ul",{className:"list"},c.a.createElement("li",null,c.a.createElement("u",null,c.a.createElement("a",{href:"https://api.covid19india.org",target:"_blank",rel:"noopener noreferrer"},"Covid-19 India API"))),c.a.createElement("li",null,c.a.createElement("u",null,c.a.createElement("a",{href:"https://covid19api.com",target:"_blank",rel:"noopener noreferrer"},"Covid-19 API"))))))}function b(e){var a=["Covid-19 India Tracker","State Wise","District Wise","About"];return c.a.createElement(m.a,null,c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},c.a.createElement("div",{className:"navbar-nav"},c.a.createElement(m.b,{exact:!0,activeClassName:"active",className:"nav-item nav-link h5",to:"/"},a[0]),c.a.createElement(m.b,{activeClassName:"active",className:"nav-item nav-link h5",to:"/statewise"},a[1]),c.a.createElement(m.b,{activeClassName:"active",className:"nav-item nav-link h5",to:"/districtwise"},a[2]),c.a.createElement(m.b,{activeClassName:"active",className:"nav-item nav-link h5",to:"/about"},a[3]))),c.a.createElement(d.c,null,c.a.createElement(d.a,{path:"/about"},c.a.createElement(g,null)),c.a.createElement(d.a,{path:"/districtwise"},c.a.createElement(N,{districts:e.districts})),c.a.createElement(d.a,{path:"/statewise"},c.a.createElement(p,{states:e.states[e.type],type:e.type,setType:e.setType})),c.a.createElement(d.a,{path:"/"},c.a.createElement(v,{confirmed:e.confirmed,active:e.active,deceased:e.deceased,recovered:e.recovered,tested:e.tested,world:e.world})))))}var x=t.p+"static/media/loader.103b5fa1.svg";t(364);function j(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement("img",{src:x,className:"loader",alt:"loader"}))}function k(){var e=Object(l.useState)([]),a=Object(o.a)(e,2),t=a[0],n=a[1],r=Object(l.useState)([]),m=Object(o.a)(r,2),d=m[0],i=m[1],u=Object(l.useState)([]),v=Object(o.a)(u,2),f=v[0],p=v[1],E=Object(l.useState)([]),y=Object(o.a)(E,2),h=y[0],N=y[1],g=Object(l.useState)(0),x=Object(o.a)(g,2),k=x[0],w=x[1],I=Object(l.useState)(0),O=Object(o.a)(I,2),C=O[0],T=O[1],S=Object(l.useState)(0),A=Object(o.a)(S,2),K=A[0],D=A[1],R=Object(l.useState)([]),F=Object(o.a)(R,2),P=F[0],W=F[1],M=Object(l.useState)({}),H=Object(o.a)(M,2),J=H[0],B=H[1],L=Object(l.useState)([]),G=Object(o.a)(L,2),U=G[0],_=G[1];return Object(l.useEffect)((function(){fetch("https://api.covid19india.org/data.json").then((function(e){return e.json()})).then((function(e){var a=[],t=[],l=[],c=[];e.cases_time_series.forEach((function(e){var n=e.totalconfirmed,r=e.totaldeceased,s=e.totalrecovered;a.push({date:e.date,confirmed:n}),t.push({date:e.date,active:(n-r-s).toString()}),l.push({date:e.date,deceased:r}),c.push({date:e.date,recovered:s})})),n(a),i(t),p(l),N(c),w(new Intl.NumberFormat("en-IN").format(e.tested[e.tested.length-1].totalsamplestested)),T((function(e){return e+1})),fetch("https://api.covid19api.com/world/total").then((function(e){return e.json()})).then((function(e){var n=[{type:"Confirmed",India:parseInt(a[a.length-1].confirmed),World:e.TotalConfirmed},{type:"Active",India:parseInt(t[t.length-1].active),World:e.TotalConfirmed-e.TotalDeaths-e.TotalRecovered},{type:"Recovered",India:parseInt(c[c.length-1].recovered),World:e.TotalRecovered},{type:"Deceased",India:parseInt(l[l.length-1].deceased),World:e.TotalDeaths}];_(n)}))})),fetch("https://api.covid19india.org/v4/data.json").then((function(e){return e.json()})).then((function(e){var a=[[],[],[],[],[],[]],t={};for(var l in e){var c=e[l].total,n=["confirmed","active","deceased","recovered","tested","vaccinated","other"],r=[c[n[0]]||0,(c[n[0]]||0)-(c[n[2]]||0)-(c[n[3]]||0)-(c[n[6]]||0),c[n[2]]||0,c[n[3]]||0,c[n[4]]||0,c[n[5]]||0];if("TT"!==l){t[l]=e[l].districts;for(var o=0;o<6;++o)a[o].push(Object(s.a)({state:l},n[o],r[o]))}}W(a),B(t),T((function(e){return e+1}))}))}),[]),2===C?c.a.createElement(b,{confirmed:t,active:d,deceased:f,recovered:h,tested:k,states:P,districts:J,type:K,world:U,setType:D}):c.a.createElement(j,null)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[365,1,2]]]);
//# sourceMappingURL=main.719d5fc2.chunk.js.map