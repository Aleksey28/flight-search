(this["webpackJsonpflight-search"]=this["webpackJsonpflight-search"]||[]).push([[0],{111:function(e,t,a){},116:function(e,t,a){},15:function(e,t,a){e.exports={page:"SearchFlights_page__3sAqu",container:"SearchFlights_container__34dDb",header:"SearchFlights_header__3u_h4",title:"SearchFlights_title__1t-KJ",breadCrumbs:"SearchFlights_breadCrumbs__2sKIp",link:"SearchFlights_link__hXjOm",corner:"SearchFlights_corner__2jaeT",departureDateBlock:"SearchFlights_departureDateBlock__2Gsql",departureDate:"SearchFlights_departureDate__1ImeM",calendar:"SearchFlights_calendar__2YCof",picture:"SearchFlights_picture__1iKpe",favorites:"SearchFlights_favorites__2f2CK",flights:"SearchFlights_flights__w1SIR",scroll_type_track:"SearchFlights_scroll_type_track__1ntEP",scroll_type_thumb:"SearchFlights_scroll_type_thumb__3N0_n"}},182:function(e,t,a){"use strict";a.r(t);var r=a(6),c=a(0),n=a.n(c),i=a(29),s=a.n(i),l=(a(111),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,188)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),r(e),c(e),n(e),i(e)}))}),o=a(35),d=a(37),u=a(31),p=a(10),h="SET_INPUT",j="SET_LOGGED",g={email:"",password:"",logged:localStorage.getItem("logged")||!1},b=function(e){var t=e.logged;return{type:j,logged:t}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(p.a)(Object(p.a)({},e),{},Object(u.a)({},t.name,t.value));case j:return localStorage.setItem("logged",t.logged),Object(p.a)(Object(p.a)({},e),{},{logged:t.logged});default:return e}},m=a.p+"static/media/Place1.682cf57f.jpg",f=a.p+"static/media/Place2.6afc111e.jpg",O=a.p+"static/media/Place3.f03a3dfe.jpg",v=a.p+"static/media/Place4.47ae1b9a.jpg",x=a.p+"static/media/plane.892ce08e.svg",F="SELECT_DATE_DEPARTURE",S="ADD_TO_FAVORITES",w="DELETE_TO_FAVORITES",N="QUOTES_FETCH_SUCCEEDED",y="QUOTES_FETCH_FAILED",k={departureAirport:"SVO",arrivalAirport:"JFK",departureDate:new Date,pictures:[{id:1,url:m},{id:2,url:f},{id:3,url:O},{id:4,url:v},{id:5,url:f}],flights:[]},C=function(e){return{type:N,data:e}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(p.a)(Object(p.a)({},e),{},{departureDate:t.date});case S:return Object(p.a)(Object(p.a)({},e),{},{flights:e.flights.map((function(e){return e.id===t.flightId?Object(p.a)(Object(p.a)({},e),{},{favorite:!0}):e}))});case w:return Object(p.a)(Object(p.a)({},e),{},{flights:e.flights.map((function(e){return e.id===t.flightId?Object(p.a)(Object(p.a)({},e),{},{favorite:!1}):e}))});case N:return Object(p.a)(Object(p.a)({},e),{},{flights:t.data.Quotes.map((function(e){var a=t.data.Places.find((function(t){return e.OutboundLeg.OriginId===t.PlaceId})),r=t.data.Places.find((function(t){return e.OutboundLeg.DestinationId===t.PlaceId})),c=t.data.Carriers.find((function(t){return e.OutboundLeg.CarrierIds[0]===t.CarrierId})),n=t.data.Currencies[0];return{id:e.QuoteId,picture:x,departureAirport:a.IataCode,departureAirportName:a.CityName,arrivalAirport:r.IataCode,arrivalAirportName:r.CityName,departureDate:new Date(e.QuoteDateTime),duration:1e4,airlineCompany:c.Name,price:e.MinPrice,currency:n.Symbol,favorite:!1}}))});case y:return Object(p.a)(Object(p.a)({},e),{},{flights:[]});default:return e}},A=a(104),L=a(48),T=a.n(L),I=a(49),E=T.a.mark(R),P=T.a.mark(B),M="FETCH_QUOTES";function R(e){var t,a,r,c,n,i,s,l;return T.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,t=e.data,a=t.date,r=t.departureAirport,c=t.arrivalAirport,n=("0"+a.getDate()).slice(-2),i=("0"+(a.getMonth()+1)).slice(-2),s=a.getFullYear(),"https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com","apiservices/browsequotes/v1.0/US/RUB/en-US",o.next=9,Object(I.a)((function(){return fetch("".concat("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com","/").concat("apiservices/browsequotes/v1.0/US/RUB/en-US","/").concat(r,"-sky/").concat(c,"-sky/").concat(s,"-").concat(i,"-").concat(n),{headers:{"Content-Type":"application/json","x-rapidapi-key":"c40aedf4a1msh7dcf39a26f3410fp113695jsn074711d99e11","x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"}}).then((function(e){return e.json()}))}));case 9:return l=o.sent,o.next=12,Object(I.b)(C(l));case 12:o.next=18;break;case 14:return o.prev=14,o.t0=o.catch(0),o.next=18,Object(I.b)((d=o.t0,{type:y,error:d}));case 18:case"end":return o.stop()}var d}),E,null,[[0,14]])}function B(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.c)(M,R);case 2:case"end":return e.stop()}}),P)}var U=B,H=Object(d.c)({pageLogin:_,pageSearchFlights:D}),Q=Object(A.a)(),V=Object(d.e)(H,Object(d.a)(Q));Q.run(U);var G=V,J=a(40),q=(a(116),a(11)),K=a(20),Y=a.n(K),W=a(30),z=a.n(W),Z=a(102),X=function(e){var t={};return e.password?/[\u0430-\u044f\u0451]/i.test(e.password)?t.password="\u0412 \u043f\u043e\u043b\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u0441\u044f \u043a\u0438\u0440\u0438\u043b\u0438\u0446\u0430.":e.password.length<8&&(t.password="\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0432 \u0441\u0442\u0440\u043e\u043a\u0435 ".concat(e.password.length,". \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e 8.")):t.password="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f.",e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 e-mail."):t.email="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f.",t},$=function(e){var t=e.pageLogin,a=e.setInput,c=e.setLogged,n=Object(q.g)(),i={email:t.email,password:t.password},s=Object(Z.a)({initialValues:i,onSubmit:function(){c({logged:!0}),n.push("/")},validate:X}),l=function(e){a({name:e.target.name,value:e.target.value}),s.handleChange(e)};return Object(r.jsx)("div",{className:Y.a.login,children:Object(r.jsxs)("form",{onSubmit:s.handleSubmit,noValidate:!0,className:Y.a.form,children:[Object(r.jsx)("h1",{className:Y.a.title,children:"Simple Flight Check"}),Object(r.jsx)("label",{htmlFor:"email",className:Y.a.label,children:" \u041b\u043e\u0433\u0438\u043d: "}),Object(r.jsx)("input",{id:"email",name:"email",type:"email",onChange:l,value:s.values.email,className:z()(Y.a.input,Object(u.a)({},Y.a.input_error,s.errors.email))}),s.errors.email?Object(r.jsx)("span",{className:Y.a.error,children:s.errors.email}):null,Object(r.jsx)("label",{htmlFor:"password",className:Y.a.label,children:" \u041f\u0430\u0440\u043e\u043b\u044c: "}),Object(r.jsx)("input",{id:"password",name:"password",type:"password",onChange:l,value:s.values.password,className:z()(Y.a.input,Object(u.a)({},Y.a.input_error,s.errors.password))}),s.errors.password?Object(r.jsx)("span",{className:Y.a.error,children:s.errors.password}):null,Object(r.jsx)("button",{type:"submit",className:Y.a.button,children:"\u0412\u043e\u0439\u0442\u0438"})]})})},ee=Object(o.b)((function(e){return{pageLogin:e.pageLogin}}),(function(e){return{setInput:function(t){e(function(e){var t=e.name,a=e.value;return{type:h,name:t,value:a}}(t))},setLogged:function(t){e(b(t))}}}))($),te=a(47),ae=function(e){var t=e.children,a=Object(te.a)(e,["children"]);return Object(r.jsx)(q.b,{children:function(){return a.logged?t:Object(r.jsx)(q.a,{to:"/sign-in"})}})},re=a(15),ce=a.n(re),ne=a(22),ie=a.n(ne);var se=function(e){return Object(r.jsx)("svg",Object(p.a)(Object(p.a)({width:23,height:20,viewBox:"0 0 23 20",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:Object(r.jsx)("path",{d:"M20.38 2.591a5.533 5.533 0 00-1.792-1.177 5.61 5.61 0 00-4.23 0c-.671.273-1.28.673-1.793 1.177L11.5 3.638 10.435 2.59a5.576 5.576 0 00-3.908-1.59 5.576 5.576 0 00-3.908 1.59A5.384 5.384 0 001 6.431c0 1.441.582 2.823 1.619 3.841l1.065 1.047L11.5 19l7.816-7.681 1.065-1.047a5.423 5.423 0 001.198-1.762 5.348 5.348 0 000-4.157 5.423 5.423 0 00-1.198-1.762v0z",strokeLinecap:"round",strokeLinejoin:"round"})}))},le=function(e){var t=Math.floor(e/3600),a=Math.floor(e/60)-60*t;return"".concat(("00"+t).slice(-2),":").concat(("00"+a).slice(-2))},oe=function(e){var t,a=e.data,c=e.addToFavorites,n=e.deleteFromFavorites;return Object(r.jsxs)("div",{className:ie.a.flight,children:[Object(r.jsxs)("div",{className:ie.a.leftSide,children:[Object(r.jsx)("div",{className:ie.a.picture,children:Object(r.jsx)("img",{src:a.picture,alt:"picturesque"})}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{className:ie.a.route,children:["".concat(a.departureAirportName," (").concat(a.departureAirport,")"),Object(r.jsx)("span",{className:ie.a.arrow}),"".concat(a.arrivalAirportName," (").concat(a.arrivalAirport,")")]}),Object(r.jsxs)("p",{className:ie.a.dataTime,children:[(t=a.departureDate,"".concat(("0"+t.getDate()).slice(-2)," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()],", ").concat(t.getFullYear())),Object(r.jsx)("span",{}),le(a.duration)]}),Object(r.jsx)("p",{className:ie.a.airlineCompany,children:a.airlineCompany})]})]}),Object(r.jsxs)("div",{className:ie.a.rightSide,children:[Object(r.jsx)(se,{className:z()(ie.a.like,Object(u.a)({},ie.a.like_active,a.favorite)),onClick:function(){a.favorite?n(a.id):c(a.id)}}),Object(r.jsxs)("p",{className:ie.a.price,children:["Price: ",Object(r.jsx)("span",{children:"".concat(a.price.toLocaleString()," ").concat(a.currency)})]})]})]})},de=a(96),ue=a(98),pe=a.n(ue),he=(a(121),a(103)),je=function(e){var t=e.onClick;return Object(r.jsx)("button",{className:ce.a.calendar,onClick:t})},ge=function(e){var t,a=e.pageSearchFlights,n=e.selectDateDeparture,i=e.addToFavorites,s=e.deleteFromFavorites,l=e.fetchQuotes,o=a.departureAirport,d=a.arrivalAirport,u=a.departureDate,h=a.pictures,j=a.flights,g=h.map((function(e){return Object(r.jsx)("img",{src:e.url,className:ce.a.picture,alt:"place"},e.id)})),b=j.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)(oe,{data:e,addToFavorites:i,deleteFromFavorites:s})},e.id)}));return Object(c.useEffect)((function(){l({date:new Date,departureAirport:"SVO",arrivalAirport:"JFK"})}),[l]),Object(r.jsx)("section",{className:ce.a.page,children:Object(r.jsxs)("div",{className:ce.a.container,children:[Object(r.jsxs)("div",{className:ce.a.header,children:[Object(r.jsxs)("div",{className:ce.a.title,children:[Object(r.jsxs)("div",{className:ce.a.breadCrumbs,children:[Object(r.jsx)(J.b,{to:"/",className:ce.a.link,children:"\u0412\u044b\u043b\u0435\u0442\u044b"}),Object(r.jsx)("div",{className:ce.a.corner}),Object(r.jsxs)(J.b,{to:"/",className:ce.a.link,children:[o," - ",d]})]}),Object(r.jsxs)("div",{className:ce.a.departureDateBlock,children:[Object(r.jsx)("div",{className:ce.a.departureDate,children:(t=u,"".concat(("0"+t.getDate()).slice(-2)," ").concat(["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"][t.getMonth()]," ").concat(t.getFullYear()))}),Object(r.jsx)(pe.a,{selected:u,onChange:function(e){n(e),l({date:e,departureAirport:o,arrivalAirport:d})},customInput:Object(r.jsx)(je,{})})]})]}),Object(r.jsx)(he.a,{slidesToShow:3,cellSpacing:12,slideWidth:.85,withoutControls:!0,wrapAround:!0,opacityScale:.65,children:g}),Object(r.jsxs)("p",{className:ce.a.favorites,children:["\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435: ",Object(r.jsx)("span",{children:j.filter((function(e){return e.favorite})).length})," \u0440\u0435\u0439\u0441\u043e\u0432"]})]}),Object(r.jsx)(de.a,{trackYProps:{renderer:function(e){var t=e.elementRef,a=Object(te.a)(e,["elementRef"]);return a.style={},Object(r.jsx)("span",Object(p.a)(Object(p.a)({},a),{},{ref:t,className:ce.a.scroll_type_track}))}},thumbYProps:{renderer:function(e){var t=e.elementRef,a=Object(te.a)(e,["elementRef"]);return a.style={},Object(r.jsx)("div",Object(p.a)(Object(p.a)({},a),{},{ref:t,className:ce.a.scroll_type_thumb}))}},children:Object(r.jsx)("ul",{className:ce.a.flights,children:b})})]})})},be=Object(o.b)((function(e){return{pageSearchFlights:e.pageSearchFlights}}),(function(e){return{selectDateDeparture:function(t){e({type:F,date:t})},addToFavorites:function(t){e(function(e){return{type:S,flightId:e}}(t))},deleteFromFavorites:function(t){e(function(e){return{type:w,flightId:e}}(t))},fetchQuotes:function(t){e({type:M,data:t})}}}))(ge),_e=a(81),me=a.n(_e);var fe=function(e){return Object(r.jsx)("svg",Object(p.a)(Object(p.a)({width:22,height:22,viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:Object(r.jsx)("path",{d:"M8 20H4a2 2 0 01-2-2V4a2 2 0 012-2h4M15 16l5-5-5-5M20 11H8",stroke:"#1157A7",strokeWidth:2.2,strokeLinecap:"round",strokeLinejoin:"round"})}))},Oe=function(e){var t=e.setLogged;return Object(r.jsx)("header",{className:me.a.header,children:Object(r.jsxs)("button",{onClick:function(){t(!1)},className:me.a.button,children:["\u0412\u044b\u0439\u0442\u0438",Object(r.jsx)(fe,{})]})})};var ve=function(e){var t=e.logged,a=e.setLogged;return Object(r.jsx)("div",{className:z()("page",{page_bg_image:!t}),children:Object(r.jsxs)(q.d,{children:[Object(r.jsx)(q.b,{path:"/sign-in",children:Object(r.jsx)(ee,{})}),Object(r.jsxs)(ae,{exact:!0,path:"/",logged:t,children:[Object(r.jsx)(Oe,{setLogged:a}),Object(r.jsx)(be,{})]})]})})},xe=Object(o.b)((function(e){return{logged:e.pageLogin.logged}}),(function(e){return{setLogged:function(t){e(b(t))}}}))(ve);s.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(J.a,{children:Object(r.jsx)(o.a,{store:G,children:Object(r.jsx)(xe,{})})})}),document.getElementById("root")),l()},20:function(e,t,a){e.exports={login:"Login_login__3nV5B",form:"Login_form__20vN4",title:"Login_title__1O6BR",label:"Login_label__VW7Sm",input:"Login_input__2q9HP",input_error:"Login_input_error__1WO61",error:"Login_error__1A4T9",button:"Login_button__2CGIk"}},22:function(e,t,a){e.exports={flight:"Flight_flight__WQ6M9",leftSide:"Flight_leftSide__2BGiD",picture:"Flight_picture__2zuDd",route:"Flight_route__2_Yp7",arrow:"Flight_arrow__1pATH",dataTime:"Flight_dataTime__FadKw",airlineCompany:"Flight_airlineCompany__2w00q",rightSide:"Flight_rightSide__2GmcH",price:"Flight_price__hVCJG",like:"Flight_like__24GGp",like_active:"Flight_like_active__3OR7r"}},81:function(e,t,a){e.exports={header:"Header_header__3zctQ",button:"Header_button__3xl_W"}}},[[182,1,2]]]);
//# sourceMappingURL=main.65c6dbdd.chunk.js.map