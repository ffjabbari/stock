(this.webpackJsonpstocknfo=this.webpackJsonpstocknfo||[]).push([[0],{191:function(e,t,n){e.exports=n(339)},205:function(e,t,n){},206:function(e,t,n){},339:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(53),o=n.n(c),l=n(68),i=n(128),u=n(183),s=n(160),b=n(26),m=n(92),d=n(41),f=n(50),h=n.n(f),p=n(118),g="pk_d896713d3ef74a9e864433de727e5704",v="https://cloud.iexapis.com/stable/stock";function E(){return(E=Object(p.a)(h.a.mark((function e(t,n){var a,r,c,o,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n,e.next="5y"===e.t0?3:"1Y"===e.t0?5:"3M"===e.t0?7:"1M"===e.t0?9:"1D"===e.t0?11:13;break;case 3:return a=48,e.abrupt("break",15);case 5:return a=9,e.abrupt("break",15);case 7:return a=4,e.abrupt("break",15);case 9:return a=1,e.abrupt("break",15);case 11:return a=12,e.abrupt("break",15);case 13:return a=100,e.abrupt("break",15);case 15:return e.next=17,fetch("".concat(v,"/").concat(t,"/batch?range=").concat(n,"&chartInterval=").concat(2*a,"&types=company,quote,chart,stats,logo,news&token=").concat(g)).catch((function(e){return console.log(e)}));case 17:return r=e.sent,e.next=20,fetch("".concat(v,"/").concat(t,"/batch?&types=chart&range=1D&chartInterval=12&token=").concat(g)).catch((function(e){return console.log(e)}));case 20:return c=e.sent,e.next=23,c.json();case 23:return o=e.sent,e.next=26,r.json();case 26:return(l=e.sent).intraDay=o.chart,e.abrupt("return",l);case 29:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(p.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cloud.iexapis.com/beta/ref-data/symbols?token=".concat(g));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(e,t){return function(n){return function(e,t){return E.apply(this,arguments)}(e,t).then((function(t){return n(function(e,t){return{type:"RECEIVE_STOCK_CHART",ticker:t,chartData:e}}(t,e))}))}},j=function(){return function(e){return function(){return k.apply(this,arguments)}().then((function(t){return e(function(e){return{type:"RECEIVE_STOCKS",symbols:e}}(t))}))}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;Object.freeze(e);var n={};switch(t.type){case"RECEIVE_STOCKS":return Object(d.a)(Object(d.a)({},e),{},{allStocks:t.symbols});case"RECEIVE_STOCK_CHART":return n=Object(d.a)(Object(d.a)(Object(d.a)(Object(d.a)({},t.chartData.quote),t.chartData.stats),t.chartData.company),{},{logo:t.chartData.logo.url,chart:t.chartData.chart,intraday:t.chartData.intraDay,news:t.chartData.news}),Object(d.a)(Object(d.a)({},e),{},Object(m.a)({},t.ticker,n));default:return e}},x=Object(l.b)({stocks:O}),w=Object(b.a)(),C=[s.a,Object(i.a)(w)],S=l.c.apply(void 0,[l.a.apply(void 0,C)].concat([])),F=Object(l.d)(Object(u.a)(w)(x),{},S),D=(n(205),n(206),n(40)),P=n(54),M=n(8),z=n(9),Y=n(184),N=n(185),T=n(13),R=n(18);var A,I,B,K,_,H,L,V,$,W,q,J,U,G,Q,X,Z,ee,te,ne,ae,re,ce,oe,le,ie,ue,se,be,me=function(e,t){var n=!1,a=function(e){var n="",a=t.toLowerCase();return"string"===typeof e&&(n=e.toLowerCase()),a.length<=e.length&&n.slice(0,a.length)===a};return e.name&&(a(e.name)||a(e.symbol))&&(n=!0),n},de=M.b.div(A||(A=Object(z.a)(["\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  @media(max-width: 1200px) {\n    flex-direction: column;\n  }\n"]))),fe=M.b.div(I||(I=Object(z.a)(["\n  display: table;\n"]))),he=M.b.div(B||(B=Object(z.a)(["\n  display: table-row-group;\n"]))),pe=M.b.div(K||(K=Object(z.a)(["\n  display: table-row;\n"]))),ge=M.b.div(_||(_=Object(z.a)(["\n  display: table-cell;\n  padding: 0.25rem;\n  @media (max-width: 700px) {\n    display: flex;\n    flex-direction: column;\n  }\n"]))),ve=M.b.div(H||(H=Object(z.a)(["\n  text-transform: capitalize;\n  font-weight: bold;\n  padding-bottom: 10px;\n"]))),Ee=M.b.span(L||(L=Object(z.a)(["\n  cursor: pointer;\n  color: #7b1fa2;\n  font-weight: 600;\n"]))),ke=M.b.div(V||(V=Object(z.a)(["\n  font-weight: light;\n"]))),ye=M.b.p($||($=Object(z.a)(["\n  text-indent: 25px;\n  line-height: 1.5;\n  font-size: 10pt;\n"]))),je=M.b.div(W||(W=Object(z.a)(["\n  line-height: 2;\n  padding: 1rem;\n  min-width: 30vw;\n  h1 {\n    text-align: center;\n  }\n  a {\n    text-decoration:none;\n    color: ","\n  }\n"])),(function(e){return e.theme.colors.font})),Oe=M.b.span(q||(q=Object(z.a)(["\n  flex-direction: row;\n  align-items: center;\n  background-color: ",";\n  color: ",";\n  fill: purple;\n  font-size: 10pt;\n  font-weight: 700;\n  margin: 0 12px 5px 0;\n  padding: 8px;\n  :hover {\n    background-color: darkred;\n  }\n"])),(function(e){return e.theme.colors.third}),(function(e){return e.theme.colors.font})),xe=M.b.div(J||(J=Object(z.a)(["\n  margin: 1rem;\n  display: flex;\n  justify-content: center;\n"]))),we=M.b.li(U||(U=Object(z.a)(["\n  list-style-type: circle;\n  transition: 0.5s;\n  a {\n    padding: 0.25rem;\n  }\n  a:hover {\n    background-color: ",";\n    color: ",";\n    font-weight: normal;\n  }\n"])),(function(e){return e.theme.colors.card}),(function(e){return e.theme.colors.sixth})),Ce=M.b.div(G||(G=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 80vw;\n  bottom: 5vw;\n"]))),Se=M.b.div(Q||(Q=Object(z.a)(["\n  background-color: ",";\n  padding: 0.5rem;\n  strong {\n    font-weight: bolder;\n  }\n"])),(function(e){return e.theme.colors.navbar})),Fe=M.b.div(X||(X=Object(z.a)(["\n  background-color: ",";\n  padding: 1rem;\n  margin: 1rem;\n"])),(function(e){return e.theme.colors.card})),De=M.b.h1(Z||(Z=Object(z.a)(["\n  text-align: center;\n  line-height: 42px;\n  font-size: 36px;\n  font-weight: 500;\n"]))),Pe=M.b.h2(ee||(ee=Object(z.a)(["\n  font-size: 36px;\n  font-weight: 400;\n  line-height: 42px;\n  margin-left: 1rem;\n"]))),Me=M.b.div(te||(te=Object(z.a)(["\n  margin-left: 1rem;\n"]))),ze=M.b.div(ne||(ne=Object(z.a)(["\n  cursor: pointer;\n  display: flex;\n  font-weight: 600;\n  margin-left: 1rem;\n  #active {\n    color: #B15DFF;\n  }\n"]))),Ye=M.b.div(ae||(ae=Object(z.a)(["\n  font-size: 0.8rem;\n  margin: 0rem 0.25rem;\n"]))),Ne=M.b.img(re||(re=Object(z.a)(["\n  margin-right: 0.5rem;\n  margin-left: 0.5rem;\n  max-width: 40px;\n  width: 100%;\n  height: auto;\n"]))),Te=M.b.div(ce||(ce=Object(z.a)(["\n  display: flex;\n  align-items: center;\n  margin: 8px;\n  border-radius: 5px;\n  background-color: #FAFAFA;\n  color: #cbcbcb;\n  border: 1px solid black;\n  padding: 0 24px 0 3px;\n  width: 100%;\n  input {\n    width: 100%;\n    color: #cbcbcb;\n    border: none;\n    height: 36px;\n    transition: color 150ms ease-out;\n  }\n  .fa-search {\n    font-size: 14pt;\n    color: #444444;\n  }\n"]))),Re=M.b.div(oe||(oe=Object(z.a)(["\n  z-index: 20;\n  display: table;\n  width: 90vw;\n  padding: 10px;\n  position: absolute;\n  left: 4vw;\n  top: 55px;\n  right: 1vw;\n  border-radius: 4px;\n  background-color: ",";\n  .active {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(e){return e.theme.colors.navbar}),(function(e){return e.theme.colors.navbar}),(function(e){return e.theme.colors.primary})),Ae=M.b.div(le||(le=Object(z.a)(["\n  background-color: ",";\n  display: table-row;\n  cursor: pointer;\n  margin: 1px;\n  line-height: 1.5;\n"])),(function(e){return e.theme.colors.card})),Ie=M.b.div(ie||(ie=Object(z.a)(["\n  display: table-row;\n  margin: 1px;\n"]))),Be=M.b.span(ue||(ue=Object(z.a)(["\n  padding-right: 3rem;\n  display: table-cell;\n  font-weight: bolder;\n"]))),Ke=M.b.div(se||(se=Object(z.a)(["\n  padding: 1px;\n  font-size: 10pt;\n  color: grey;\n  font-weight: bolder;\n  display: table-cell;\n"]))),_e=M.b.span(be||(be=Object(z.a)(["\n  display: table-cell;\n"]))),He=function(e){var t=e.allStocks,n=e.handleClick,a=e.cursor,c=e.hover,o=e.setHover,l=e.input;return l&&l.length?r.a.createElement(Re,null,r.a.createElement(Ie,null,r.a.createElement(Ke,null,"Symbol:"),r.a.createElement(Ke,null,"Name:")),function(e,t){var n=[],a=0;if(e)for(;n.length<6&&a<e.length;)me(e[a],t)&&n.push(e[a]),a+=1;return n}(t,l).map((function(e,t){return r.a.createElement(Ae,{onClick:function(){return n(e.symbol)},className:a===t||c===t?"active":null,key:e.symbol,onMouseEnter:function(){return o(t)},onMouseLeave:function(){return o(null)}},r.a.createElement(Be,{className:"result"},e.symbol),r.a.createElement(_e,null,e.name.split(" ").slice(0,3).join(" ")))}))):null};He.defaultProps={allStocks:[],cursor:0,input:"",hover:0,handleClick:function(){},setHover:function(){}};var Le=function(e){var t=e.allStocks,n=e.history,c=Object(a.useState)(0),o=Object(T.a)(c,2),l=o[0],i=o[1],u=Object(a.useState)(""),s=Object(T.a)(u,2),b=s[0],m=s[1],d=Object(a.useState)(null),f=Object(T.a)(d,2),h=f[0],p=f[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Te,null,r.a.createElement("input",{type:"text",className:"searcbar-input",placeholder:"  Search",value:b,onKeyDown:function(e){if(38===e.keyCode&&l>0?i(l-1):40===e.keyCode&&l<t.length&&i(l+1),13===e.keyCode){var a=Object(N.a)(document.getElementsByClassName("active"))[0].childNodes[0].innerText;m(""),n.push("/".concat(a))}},onChange:function(e){return m(e.target.value)}})),r.a.createElement(He,{allStocks:t,handleClick:function(e){m(""),n.push("/".concat(e))},hover:h,setHover:p,cursor:l,setCursor:i,input:b,setInput:m}))};Le.defaultProps={allStocks:[],history:{}};var Ve,$e,We,qe,Je=Object(R.f)(Le),Ue=M.b.nav(Ve||(Ve=Object(z.a)(["\n  background-color: ",";\n"])),(function(e){return e.theme.colors.navbar})),Ge=M.b.i($e||($e=Object(z.a)(["\n  text-shadow: 1px 1px black;\n  padding: 6px;\n  margin-right: 10px;\n  font-size: 34pt;\n  font-weight: bolder;\n  color: ",";\n"])),(function(e){return e.theme.colors.primary})),Qe=M.b.h3(We||(We=Object(z.a)(["\n  text-shadow: 1px 1px black;\n  font-family: Roboto Condensed;\n  font-weight: lighter;\n  strong {\n    font-family: Eczar;\n    font-weight: bolder;\n    color: ",";\n  }\n"])),(function(e){return e.theme.colors.primary})),Xe=M.b.div(qe||(qe=Object(z.a)(["\n  margin-left: 10px;\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n"]))),Ze=function(e){var t=e.allStocks,n=e.loadStocks;return Object(a.useEffect)((function(){n()}),[n]),r.a.createElement(Ue,null,r.a.createElement(Xe,null,r.a.createElement(P.b,{to:"/",style:{textDecoration:"none",color:"white"}},r.a.createElement(Qe,null,"Stock",r.a.createElement("strong",null,"NFO"))),r.a.createElement(Ge,null,r.a.createElement(Y.a,null)),r.a.createElement(Je,{allStocks:t})))};Ze.defaultProps={allStocks:[]};var et=Object(D.c)((function(e){return{allStocks:e.stocks.allStocks}}),(function(e){return{loadStocks:function(){return e(j())}}}))(Ze),tt=n(341),nt=n(342),at=n(346),rt=n(181),ct=n(180),ot=n(80),lt=n(186),it=n(83),ut=function(e){return e.stock.news.map((function(e){return r.a.createElement(we,{key:e.url},r.a.createElement("a",{href:e.url},e.headline))}))},st=function(e){var t=e.stock,n=Object.keys(t).filter((function(e){var n=e.toLowerCase();return!function(e,t){var n=0;return t.forEach((function(t){n+=e.includes(t)})),1===n}(n,["iex","time","description","price","change","symbol","logo","52","market"])&&("number"===typeof t[n]||"string"===typeof t[n])})),a=[],c=[];return n.forEach((function(e,n){n%4===0&&0!==n&&(c.push(a),a=[]),a.push([e,t[e]])})),c.push(a),r.a.createElement(fe,null,r.a.createElement(he,null,c.map((function(e){return r.a.createElement(pe,{key:Math.random()},e.map((function(e){return r.a.createElement(ge,{key:e[0]},r.a.createElement(ve,null,e[0]),r.a.createElement(ke,null,e[1]))})))}))))};st.defaultProps={stock:{}};var bt=function(e){var t=e.stock,n=Object(a.useState)(!1),c=Object(T.a)(n,2),o=c[0],l=c[1];return r.a.createElement(de,null,r.a.createElement(je,null,r.a.createElement("h1",null,"About"),t.tags?r.a.createElement(xe,null,t.tags.map((function(e){return r.a.createElement(Oe,{key:e},e)}))):null,t.description?r.a.createElement(ye,null,function(e,t){return t?e.description:"".concat(e.description.slice(0,350),"... ")}(t,o),r.a.createElement(Ee,{onClick:function(){return l(!o)}},o?"read less":"read more")):null,r.a.createElement(st,{stock:t})),r.a.createElement(je,null,t.news?r.a.createElement("div",null,r.a.createElement("h1",null,"News"),r.a.createElement("ul",null,r.a.createElement(ut,{stock:t}))):null))};bt.defaultProps={stock:{}};var mt=bt,dt=function(e){var t=e.payload,n=e.label;return r.a.createElement(Se,null,r.a.createElement("p",null,r.a.createElement("strong",null,"Date: "),n),r.a.createElement("h4",null,r.a.createElement("strong",null,"Price: "),t&&t[0]?t[0].name+t[0].value:null))};dt.defaultProps={payload:[],label:""};var ft=function(e){var t=e.chartState;return r.a.createElement(tt.a,{width:"100%",height:400},r.a.createElement(nt.a,{data:t,width:400,height:400},r.a.createElement(at.a,{strokeDasharray:"3 3"}),r.a.createElement(rt.a,{domain:["dataMin","dataMax"],hide:!0}),r.a.createElement(ct.a,{hide:!0,dataKey:"label"}),r.a.createElement(ot.a,null),r.a.createElement(lt.a,{connectNulls:!0,name:"USD $",type:"monotone",dot:!1,dataKey:"close",strokeWidth:2.5,stroke:"#B15DFF"}),r.a.createElement(it.a,{content:r.a.createElement(dt,null),separator:"",offset:-40,position:{y:-15},isAnimationActive:!0})))};ft.defaultProps={chartState:[]};var ht=function(e){var t,n,a=e.stocks,c=e.current,o="",l=function(e){var r=parseFloat(a[c].latestPrice),o=r-r*(n=parseFloat(a[c][e]));return n=(100*n).toFixed(2),[t=(r-o).toFixed(2),n]};switch(e.range){case"1D":var i=l("changePercent"),u=Object(T.a)(i,2);t=u[0],n=u[1],o=" Today";break;case"1M":var s=l("month1ChangePercent"),b=Object(T.a)(s,2);t=b[0],n=b[1],o=" Past Month";break;case"3M":var m=l("month3ChangePercent"),d=Object(T.a)(m,2);t=d[0],n=d[1],o=" Past 3 Months";break;case"1Y":var f=l("year1ChangePercent"),h=Object(T.a)(f,2);t=h[0],n=h[1],o=" Past Year";break;case"5Y":var p=l("year5ChangePercent"),g=Object(T.a)(p,2);t=g[0],n=g[1],o=" Past 5 Years"}var v=1===Math.sign(t)?"+":null;return r.a.createElement(Me,null,r.a.createElement("span",null,v,"$",t," ","(",n,"%)"),r.a.createElement("span",null,o))};ht.defaultProps={stocks:{},current:"",range:""};var pt=function(e){var t=e.stocks,n=e.fetchStockChart,c=e.current,o=Object(a.useState)([]),l=Object(T.a)(o,2),i=l[0],u=l[1],s=Object(a.useState)(""),b=Object(T.a)(s,2),m=b[0],d=b[1],f=Object(a.useState)(""),h=Object(T.a)(f,2),p=h[0],g=h[1],v=Object(a.useState)("5Y"),E=Object(T.a)(v,2),k=E[0],y=E[1],j=Object(a.useState)(""),O=Object(T.a)(j,2),x=O[0],w=O[1],C=Object(a.useState)(""),S=Object(T.a)(C,2),F=S[0],D=S[1];Object(a.useEffect)((function(){n(c,k)}),[n,k,c]),Object(a.useEffect)((function(){t[c]&&(D(t[c].logo),u("1D"===k?t[c].intraday:t[c].chart),d(t[c].securityName),g(t[c].latestPrice.toFixed(2)),w(r.a.createElement(ht,{stocks:t,range:k,current:c})))}),[t,c,k]);var P=function(e){switch(e.target.innerText){case"1D":y("1D"),u(t[c].intraday);break;case"1M":y("1M"),u(t[c].chart);break;case"3M":y("3M"),u(t[c].chart);break;case"1Y":y("1Y"),u(t[c].chart);break;case"5Y":y("5Y"),u(t[c].chart)}},M=t[c];return r.a.createElement(Ce,null,r.a.createElement(De,null,m),r.a.createElement(Pe,null,F?r.a.createElement(Ne,{alt:"company-logo",src:F}):null,"$",p),x,r.a.createElement(Fe,null,r.a.createElement(ft,{chartState:i}),r.a.createElement(ze,null,r.a.createElement(Ye,{id:"1D"===k?"active":null,onClick:P},"1D"),r.a.createElement(Ye,{id:"1M"===k?"active":null,onClick:P},"1M"),r.a.createElement(Ye,{id:"3M"===k?"active":null,onClick:P},"3M"),r.a.createElement(Ye,{id:"1Y"===k?"active":null,onClick:P},"1Y"),r.a.createElement(Ye,{id:"5Y"===k?"active":null,onClick:P},"5Y"))),r.a.createElement(mt,{stock:M}))};pt.defaultProps={stocks:{}};var gt,vt,Et=pt,kt=Object(R.f)(Object(D.c)((function(e,t){return{stocks:e.stocks,current:t.match.params.sym||"MSFT",ownProps:t}}),(function(e){return{fetchStockChart:function(t,n){return e(y(t,n))}}}))(Et)),yt=M.b.main(gt||(gt=Object(z.a)(["\n  margin: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),jt=function(){return r.a.createElement(yt,null,r.a.createElement(R.c,null,r.a.createElement(R.a,{path:"/:sym",component:kt}),r.a.createElement(R.a,{path:"/",component:kt})))},Ot={colors:{navbar:"#27272f",background:"#33333D",card:"#373740",font:"#FFFFFF",primary:"#1EB980",secondary:"#045D56",third:"#FF6859",fourth:"#FFCCF44",fifth:"#B15DFF",sixth:"#72DEFF"}},xt=M.b.div(vt||(vt=Object(z.a)(["\n  \n  background-color: ",";\n  color: ",";\n  p {\n    font-family: 'Eczar',\n    font-size: 12pt;\n    font-weight: 'light'\n  }\n  h1 {\n    font-family: 'Roboto Condensed', sans-serif;\n    font-size: 34pt;\n    font-weight: light;\n  }\n  h2 {\n    font-family: 'Eczar'\n    font-size: 24pt;\n    font-weight: bold;\n  }\n  h3 {\n    font-family: 'Roboto Condensed', sans-serif;\n    font-size: 20pt;\n    font-weight: regular;\n  }\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.font})),wt=function(e){var t=e.store;return r.a.createElement(D.a,{store:t},r.a.createElement(M.a,{theme:Ot},r.a.createElement(xt,null,r.a.createElement(P.a,null,r.a.createElement(et,null),r.a.createElement(jt,null)))))};wt.defaultProps={store:{}};var Ct=wt;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ct,{store:F}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[191,1,2]]]);
//# sourceMappingURL=main.37ee0f05.chunk.js.map