(this["webpackJsonpalt-weather"]=this["webpackJsonpalt-weather"]||[]).push([[0],{115:function(e,t,a){e.exports=a(165)},164:function(e,t,a){},165:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),i=a(54),l=a.n(i),s=r.a.createContext(),m=a(17),u=a.n(m),d=a(103),p=a(22),f=a(13),h=function(){var e=Object(n.useState)(!1),t=Object(f.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(f.a)(c,2),i=o[0],s=o[1],m=Object(n.useState)(!1),d=Object(f.a)(m,2),h=d[0],b=d[1];return{loading:a,request:Object(n.useCallback)(function(){var e=Object(p.a)(u.a.mark((function e(t){var a,n,c,o=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:"get",n=o.length>2&&void 0!==o[2]?o[2]:null,r(!0),c=null,e.next=6,l()({url:t,method:a,data:n}).then((function(e){r(!1),b(!0),c=e.data})).catch((function(e){console.error(e.response.data),r(!1),s(e.response.data)}));case 6:return e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),error:i,clearError:function(){s(""),b(!1)},success:h}},b=a(204),E=a(202),g=a(203),y=a(207),v=a(200),x=a(205),O=a(208),j=a(49),w=a(206),C=a(221),k=a(223),N=Object(v.a)({root:{maxWidth:345,margin:"0 auto"},media:{height:140}}),S=function(e){var t=e.handleOpen,a=e.city,c=Object(n.useState)({country:"",name:"",coordinates:{},temperature:"",temp_min:"",temp_max:"",weather:{}}),o=Object(f.a)(c,2),i=o[0],l=o[1],m=N(),d=Object(n.useContext)(s).key,v=h(),S=v.request,_=v.loading,D=v.error,F=function(){Object.keys(i).length&&t(i)},I=function(){var e=Object(p.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S("weather?q=".concat(a,"&units=metric&appid=").concat(d),"get");case 2:(t=e.sent)&&(n={name:"".concat(t.name,", ").concat(t.sys.country),coordinates:t.coord,temperature:t.main.temp.toFixed(0),temp_min:t.main.temp_min.toFixed(0),temp_max:t.main.temp_max.toFixed(0),weather:t.weather},l(n));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){I()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{className:m.root},r.a.createElement(g.a,{onClick:F},_?r.a.createElement(b.a,{variant:"rect",width:"100%",height:200}):r.a.createElement(x.a,null,r.a.createElement(j.a,{gutterBottom:!0,variant:"h5",component:"h2"},i.name),r.a.createElement(j.a,{variant:"subtitle1",color:"textSecondary"},"Day ",i.temp_max,"\xb0C - Night ",i.temp_min,"\xb0C"),r.a.createElement(w.a,{className:m.main},r.a.createElement(j.a,{variant:"h2",color:"textSecondary"},i.temperature,"\xb0C"),r.a.createElement(j.a,{variant:"subtitle1",color:"textSecondary"},i.weather.description)))),r.a.createElement(y.a,null,r.a.createElement(O.a,{onClick:F,size:"small",color:"primary"},"More"))),r.a.createElement(k.a,{open:!!D,autoHideDuration:2500,anchorOrigin:{vertical:"bottom",horizontal:"right"}},r.a.createElement(C.a,{severity:"error"},"An error occurred, please try again later")))},_=a(27),D=a(96),F=a.n(D),I=(a(141),a(97)),z=a.n(I),L=a(98),R=a.n(L),T=a(99),q=a.n(T),M=function(e){var t=e.description,a=e.day,n=void 0===a?"sunny":a;return"Clear"===t?n?r.a.createElement("div",{className:"Clear"},r.a.createElement("i",{className:"fas fa-sun"})):r.a.createElement("div",{className:"night"},r.a.createElement("i",{className:"fas fa-moon"})):"Drizzle"===t?r.a.createElement("div",{className:"Drizzle"},r.a.createElement("i",{className:"fas fa-cloud-rain"})):"Rain"===t?r.a.createElement("div",{className:"Rain"},r.a.createElement("i",{className:"fas fa-cloud-showers-heavy"})):"Thunderstorm"===t?r.a.createElement("div",{className:"Thunderstorm"},r.a.createElement("i",{className:"fas fa-cloud-showers-heavy"})):"Clouds"===t?n?r.a.createElement("div",{className:"Clouds-morning"},r.a.createElement("i",{className:"fas fa-cloud"})):r.a.createElement("div",{className:t},r.a.createElement("i",{className:"fas fa-cloud"})):r.a.createElement("div",{className:t},r.a.createElement("i",{className:"fas fa-smog"}))},B=a(224),W=a(209),A=a(210),H=function(e){var t=e.day,a=Object(n.useState)({}),c=Object(f.a)(a,2),o=c[0],i=c[1],l=function(){_.extend(F.a),_.extend(R.a),_.extend(q.a),_.extend(z.a),_.locale("en");return{formatDate:function(e){return _.unix(e).format("ddd, MMM-DD")}}}().formatDate;return Object(n.useEffect)((function(){t.dt&&i({min:t.temp.min.toFixed(0),max:t.temp.max.toFixed(0),description:t.weather[0].description,icon:t.weather[0].main})}),[t]),r.a.createElement(B.a,{role:void 0,dense:!0,button:!0},t.dt?r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,null,r.a.createElement(M,{description:o.icon})),r.a.createElement(A.a,{primary:"".concat(l(t.dt),", ")+o.max+"/"+o.min+"\xb0C",secondary:o.description})):null)},J=a(215),P=a(214),U=a(220),Y=a(216),G=a(213),K=a(212),Q=a(211),V=a(62),X=function(e){var t=e.handleClose,a=e.open,c=e.city,o=Object(V.a)(),i=Object(Q.a)(o.breakpoints.down("sm")),l=h(),m=l.request,d=l.loading,E=(l.error,Object(n.useContext)(s).key),g=Object(n.useState)({current:{temperature:0,temp_min:0,temp_max:0},daily:{}}),y=Object(f.a)(g,2),v=y[0],x=y[1],C=function(){var e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("onecall?lat=".concat(c.coordinates.lat,"&lon=").concat(c.coordinates.lon,"&exclude=hourly,minutely&units=metric&appid=").concat(E),"get");case 2:(t=e.sent)&&x({daily:t.daily.slice(1,t.daily.length),current:c});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){c.name&&C()}),[c]),r.a.createElement("div",null,r.a.createElement(U.a,{fullWidth:!0,maxWidth:"sm",fullScreen:i,open:a,onClose:t},r.a.createElement(K.a,null,c.name),r.a.createElement(G.a,null,d?r.a.createElement(b.a,{width:"100%",height:700}):r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null,r.a.createElement(j.a,{variant:"h2",color:"textSecondary"},v.current.temperature,"\xb0C"),r.a.createElement(j.a,{variant:"subtitle1",color:"textSecondary"},"Day ",v.current.temp_max,"\xb0C - Night ",v.current.temp_min,"\xb0C")),r.a.createElement(P.a,null),r.a.createElement(w.a,null,r.a.createElement(j.a,{variant:"h5"},"7-day forecast"),r.a.createElement(J.a,null,v.daily.length?v.daily.map((function(e){return r.a.createElement(H,{key:e.dt,day:e})})):null)))),r.a.createElement(Y.a,null,r.a.createElement(O.a,{autoFocus:!0,onClick:t,color:"primary"},"Close"))))},Z=a(72),$=a(101),ee=a.n($),te=a(11),ae=a(222),ne=a(100),re=a.n(ne),ce=ee()((function(e){return{search:Object(Z.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(te.c)(e.palette.primary.light,.15),"&:hover":{backgroundColor:Object(te.c)(e.palette.primary.light,.25)},marginLeft:0,marginBottom:e.spacing(1)},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(Z.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),confirmForm:{display:"flex",alignItems:"flex-start"}}}))((function(e){var t=e.classes,a=e.onChange,c=Object(n.useState)(""),o=Object(f.a)(c,2),i=o[0],l=o[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(i)},className:t.confirmForm},r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(re.a,null)),r.a.createElement(ae.a,{placeholder:"Search...",onChange:function(e){return l(e.target.value)},classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement(O.a,{type:"submit"},"Add"))})),oe=a(218),ie=a(219),le=Object(v.a)((function(e){return{container:{paddingTop:e.spacing(25)},searchTool:{display:"flex",justifyContent:"space-between"}}})),se=function(){var e=le(),t=Object(n.useState)(!1),a=Object(f.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(""),l=Object(f.a)(i,2),m=l[0],b=l[1],E=Object(n.useState)({}),g=Object(f.a)(E,2),y=g[0],v=g[1],x=h(),O=x.request,j=x.error,N=Object(n.useContext)(s).key,_=Object(n.useState)(["Moscow","London","New York","Beijing"]),D=Object(f.a)(_,2),F=D[0],I=D[1],z=function(e){v(e),o(!0)},L=function(){var e=Object(p.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("weather?q=".concat(t,"&units=metric&appid=").concat(N),"get");case 2:if(!e.sent){e.next=9;break}if(!(F.findIndex((function(e){return e.toLowerCase()===t.toLowerCase()}))+1)){e.next=7;break}return e.abrupt("return");case 7:a=[].concat(Object(d.a)(F),[t]),I(a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){m&&L(m)}),[m]);return r.a.createElement(w.a,null,r.a.createElement(X,{city:y,open:c,handleClose:function(){o(!1)}}),r.a.createElement(oe.a,{maxWidth:"md",className:e.container},r.a.createElement(ie.a,{className:e.searchTool},r.a.createElement(ce,{onChange:b})),r.a.createElement(w.a,{container:!0,spacing:2},F.map((function(e){return r.a.createElement(w.a,{key:e,item:!0,xs:12,sm:6,md:3},r.a.createElement(S,{city:e,handleOpen:z}))})))),r.a.createElement(k.a,{open:!!j,autoHideDuration:2500,anchorOrigin:{vertical:"bottom",horizontal:"right"}},r.a.createElement(C.a,{severity:"error"},j.message)))},me={palette:{type:"dark",primary:{light:"#bbdefb",main:"#42a5f5",dark:"#0d47a1",contrastText:"#ede7f6"},secondary:{light:"#ffecb3",main:"#ff9e43",dark:"#827017",contrastText:"#e0f7fa"}}},ue=a(102),de=a(217);var pe=function(){l.a.defaults.baseURL="https://api.openweathermap.org/data/2.5/";var e=Object(ue.a)(me);return r.a.createElement(de.a,{theme:e},r.a.createElement(s.Provider,{value:{key:"433b880a1dcad0ae0eb12634ab640f6b"}},r.a.createElement(se,null)))};a(164);o.a.render(r.a.createElement(pe,null),document.getElementById("root"))}},[[115,1,2]]]);
//# sourceMappingURL=main.c700d6e8.chunk.js.map