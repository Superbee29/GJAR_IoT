(this["webpackJsonpgjar-iot"]=this["webpackJsonpgjar-iot"]||[]).push([[0],{102:function(e,t,a){e.exports=a(221)},107:function(e,t,a){},16:function(e,t,a){e.exports={Wrapper:"GraphSettings_Wrapper__3KKm6",Text:"GraphSettings_Text__1Bjrp",Select:"GraphSettings_Select__Kensv"}},17:function(e,t,a){e.exports={whitebox:"AboutUsPage_whitebox__19Cmd",aboutProject:"AboutUsPage_aboutProject__30u5J",aboutProjectText:"AboutUsPage_aboutProjectText__2LlQY",image:"AboutUsPage_image__1Bijv",about_us_title:"AboutUsPage_about_us_title__3ZIbe",about_us:"AboutUsPage_about_us__2IWWK"}},20:function(e,t,a){e.exports={hamburger:"HamburgerButton_hamburger__64Akx",isactive:"HamburgerButton_isactive__1AQG7",hamburgerinner:"HamburgerButton_hamburgerinner__1itlo",hamburgerbox:"HamburgerButton_hamburgerbox__3h85a",hamburgersqueeze:"HamburgerButton_hamburgersqueeze__4lISa"}},221:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(32),c=a.n(o),i=(a(107),a(33)),l=a(34),u=a(36),s=a(35),m=a(37),v=a(51),d=a.n(v),p=a(20),b=a.n(p),h=function(e){var t=e.active?b.a.isactive:null;return n.a.createElement("div",{className:[b.a.hamburger,b.a.hamburgersqueeze,t].join(" "),onClick:e.click},n.a.createElement("div",{className:b.a.hamburgerbox},n.a.createElement("div",{className:b.a.hamburgerinner})))},g=a(38),_=a.n(g),E=a(3),f=a(86),N=a.n(f).a.create({baseURL:"https://iot.gjar-po.sk/"}),k=a(4),j=a.n(k),y=function(e,t){return function(a){var r=j()().subtract(t,"hours"),n={timeTo:j()().format("YYYY-MM-DD"),timeFrom:j()(r).format("YYYY-MM-DD"),beforeTimeHours:r,todayHours:j()().format("LTS")},o={room:e,time:{"time-from":"".concat(n.timeFrom," ").concat(j()(n.beforeTimeHours).format("LTS")),"time-to":"".concat(n.timeTo," ").concat(n.todayHours)}};N({method:"POST",data:o,url:"api/v1/view",headers:{"content-type":"application/json","cache-control":"no-cache"}}).then((function(e){a(function(e,t){return{type:"CONTACT_SERVER_SUCCESS",response:e,interval:t}}(e,t))})).catch((function(e){a(function(e){return{type:"CONTACT_SERVER_FAIL",error:e}}(e.message))}))}},O=function(e){return{type:"TOGGLE_NAV",isNavOpened:e}},x=Object(E.b)((function(e){return{isNavOpened:e.room.isNavOpened,activeRoom:e.room.activeRoom}}),(function(e){return{toggleNav:function(t){return e(O(t))}}}))((function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:_.a.GjarIot},"GJAR IOT"),n.a.createElement("p",{className:_.a.Activeroom},e.activeRoom),n.a.createElement("div",{className:_.a.HamburgerButton},n.a.createElement(h,{click:e.toggleNav.bind(void 0,e.isNavOpened),active:e.isNavOpened})))})),C=a(25),A=a.n(C),R=a(100),S=a(18),M=[{name:"\u0160tudov\u0148a",number:29},{name:"Inf Kabinet",number:53},{name:"U\u010deb\u0148a Fyz",number:61},{name:"Kni\u017enica",number:70},{name:"Aj 1",number:71},{name:"Nj 2",number:77},{name:"Bio kabinet",number:83},{name:"VI.OA",number:84}],I=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,"Pr\xedzemie"),M.map((function(t,a){var r=null;return 29===t.number?r="1. poschodie":53===t.number?r="2. poschodie":77===t.number&&(r="3. poschodie"),n.a.createElement(n.a.Fragment,{key:a},n.a.createElement(S.b,{style:{textDecoration:"none"},to:"/"},n.a.createElement("li",{onClick:function(){return e.click("".concat(t.name," (").concat(t.number,")"),t.number)}},t.name," (",t.number,")")),null!==r?n.a.createElement("div",null,r):null)})),n.a.createElement(S.b,{style:{textDecoration:"none"},to:"/about-project"},n.a.createElement("div",{style:{textDecoration:"underline"},onClick:e.aboutProjectClick},"O projekte")))},P=Object(E.b)((function(e){return{isNavOpened:e.ui.isNavOpened}}),(function(e){return{toggleNav:function(t){return e(O(t))}}}))((function(e){var t=e.isNavOpened?[A.a.SideDrawer,A.a.Active].join(" "):A.a.SideDrawer;return n.a.createElement("div",{className:t},n.a.createElement("div",{className:A.a.CloseBtn,onClick:e.toggleNav.bind(void 0,e.isNavOpened)},n.a.createElement(R.a,{size:"1.7em",value:{style:{verticalAlign:"middle"}}}),"Close"),n.a.createElement(I,{aboutProjectClick:e.aboutProjectClick,click:e.click}))})),w=a(88),D=a.n(w),T=Object(E.b)((function(e){return{isNavOpened:e.ui.isNavOpened}}),(function(e){return{toggleNav:function(t){return e(O(t))}}}))((function(e){return e.isNavOpened?n.a.createElement("div",{className:D.a.Backdrop,onClick:e.toggleNav.bind(void 0,e.isNavOpened)}):null})),B=a(55),G=a.n(B),H=function(e){return n.a.createElement("div",{className:G.a.DesktopSideDrawer},n.a.createElement(I,{aboutProjectClick:e.aboutProjectClick,styling:G.a,click:e.click}))},F=a(56),W=a.n(F),z=a(89),L=a.n(z),U=a(90),V=a.n(U),K=a(91),Y=a.n(K),J=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=null,t=null,a=null;return"temperature"===this.props.type?(a="Aktu\xe1lna teplota",t="\xb0C",e=n.a.createElement("img",{src:L.a,alt:"chart"})):"humidity"===this.props.type?(a="Aktu\xe1lna vlhkos\u0165",t="%",e=n.a.createElement("img",{src:Y.a,alt:"chart"})):"brightness"===this.props.type&&(a="Aktu\xe1lne osvetlenie",t="%",e=n.a.createElement("img",{src:V.a,alt:"chart"})),n.a.createElement("div",{className:W.a.Whitebox},n.a.createElement("p",null,a),n.a.createElement("h1",null,this.props.value,t),n.a.createElement("div",{className:W.a.Icon},e))}}]),t}(r.Component),q=a(92),Q=a.n(q),Z=Object(E.b)((function(e){return{values:e.data.values}}))((function(e){return n.a.createElement("div",{className:Q.a.Boxes},n.a.createElement(J,{type:"temperature",value:e.values.temperature[e.values.temperature.length-1]}),n.a.createElement(J,{type:"humidity",value:e.values.humidity[e.values.humidity.length-1]}),n.a.createElement(J,{type:"brightness",value:e.values.brightness[e.values.brightness.length-1]}))})),$=a(93),X=a(57),ee=a.n(X),te=a(16),ae=a.n(te),re=Object(E.b)((function(e){return{activeRoomNumber:e.room.activeRoomNumber,selectedInterval:e.data.selectedInterval}}),(function(e){return{contactServer:function(t,a){return e(y(t,a))}}}))((function(e){return n.a.createElement("div",{className:ae.a.Wrapper},n.a.createElement("p",{className:ae.a.Text},"Zobraz d\xe1ta za posledn\xfdch:"),n.a.createElement("select",{value:e.selectedInterval,className:ae.a.Select,onChange:function(t){t.target.value!==e.selectedInterval&&e.contactServer(e.activeRoomNumber,t.target.value)}},n.a.createElement("option",{className:ae.a.Item,value:"3"},"3 hodiny"),n.a.createElement("option",{className:ae.a.Item,value:"6"},"6 hod\xedn"),n.a.createElement("option",{className:ae.a.Item,value:"24"},"24 hod\xedn")))})),ne=Object(E.b)((function(e){return{values:e.data.values}}))((function(e){return n.a.createElement("div",{className:ee.a.Wrapper},n.a.createElement("div",{className:ee.a.Graph},n.a.createElement($.a,{data:{labels:e.values.times,datasets:[{label:"Teplota",data:e.values.temperature,fill:!0,backgroundColor:"rgba(85, 186, 254, .3)",borderWidth:4,borderColor:"#55D8FE"},{label:"Vlhkos\u0165",data:e.values.humidity,fill:!0,backgroundColor:"rgba(163, 160, 251, .3)",borderWidth:4,borderColor:"#A3A0FB"},{label:"Osvetlenie",data:e.values.brightness,fill:!0,backgroundColor:"rgba(94, 226, 160, .3)",borderWidth:4,borderColor:"#5EE2A0"}]},options:{responsive:!0,maintainAspectRatio:!1,legend:{position:"bottom"},tooltips:{mode:"index",intersect:!1},hover:{mode:"index",intersect:!1}}})),n.a.createElement(re,null))})),oe=a(95),ce=a.n(oe),ie=function(e){return n.a.createElement("div",{className:ce.a.MainPage},n.a.createElement(Z,null),n.a.createElement(ne,null))},le=a(39),ue=a.n(le),se=function(){return n.a.createElement("div",{className:ue.a.spinner},n.a.createElement("div",{className:ue.a.cube1}),n.a.createElement("div",{className:ue.a.cube2}))},me=a(96),ve=a.n(me),de=function(e){return n.a.createElement("div",{className:ve.a.errDiv},n.a.createElement("p",null,e.errMessage))},pe=a(12),be=a(17),he=a.n(be),ge=a(97),_e=a.n(ge),Ee=function(){return n.a.createElement("div",{className:he.a.whitebox},n.a.createElement("div",{className:he.a.aboutProject},n.a.createElement("div",{className:he.a.image},n.a.createElement("img",{src:_e.a,alt:"wemos"})),n.a.createElement("div",{className:he.a.aboutProjectText},n.a.createElement("p",null,"Cie\u013eom tohto projektu je moderniz\xe1cia \u0161koly. V miestnostiach \u0161koly sa bude mera\u0165 teplota vzduchu, osvietenos\u0165 a vlkos\u0165."))),n.a.createElement("div",{className:he.a.about_us_title},"Na projekte pracovali:"),n.a.createElement("div",{className:he.a.about_us},n.a.createElement("div",null,n.a.createElement("h2",null,"Maro\u0161"),n.a.createElement("p",null,"Pracoval som na koncepte tohto projektu a hardware pre Node jednotky. M\xe1m"," ",j()().diff("1999-08-19","years")," rokov a som u\u017e absolventom Gymn\xe1zia J\xe1na Adama Raymana. Moment\xe1lne \u0161tudujem odbor Mikroelektronika a technol\xf3gie na FEKT VUT v Brne.")),n.a.createElement("div",null,n.a.createElement("h2",null,"Samo"),n.a.createElement("p",null,"Pracoval som na softv\xe9ri a spr\xe1ve servera. M\xe1m ",j()().diff("1998-11-06","years")," rokov a som absolventom Gymn\xe1zia J\xe1na Adama Raymana. Teraz \u0161tudujem Informatiku a Fyziku na University of Edinburgh.")),n.a.createElement("div",null,n.a.createElement("h2",null,"Daniel"),n.a.createElement("p",null,"Pracoval som na webstr\xe1nke. M\xe1m ",j()().diff("2002-01-10","years")," rokov. Nav\u0161tevujem Gymn\xe1zium J\xe1na Adama Raymana v Pre\u0161ove a som \u017eiakom 3.D triedy.")),n.a.createElement("div",null,n.a.createElement("h2",null,"Miro"),n.a.createElement("p",null,"Mojou \xfalohou bolo naprogramova\u0165 firmware pre Node. Som absolventom GJAR a m\xe1m"," ",j()().diff("2000-01-21","years")," rokov."))))},fe=(a(220),function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).changeActiveRoomHandler=function(e,t){a.props.activeRoomNumber===t&&null!==a.props.activeRoomNumber||(a.props.changeActiveRoom(t,e),!0===a.props.isNavOpened&&a.props.toggleNav(a.props.toggleNav),a.props.contactServer(t,3))},a.setSelectedInterval=function(e){a.props.contactServer(a.props.activeRoomNumber,e)},a.aboutProjectClickHandler=function(){a.props.changeActiveRoom(null,"O projekte"),a.props.isNavOpened&&a.props.toggleNav(a.props.isNavOpened)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.changeActiveRoom(29,"\u0160tudov\u0148a (29)"),this.props.contactServer(29,3)}},{key:"render",value:function(){var e=n.a.createElement(se,null);return this.props.serverError?e=n.a.createElement(de,{errMessage:this.props.errMessage}):this.props.serverError||this.props.render?this.props.render&&(e=n.a.createElement(ie,null)):e=n.a.createElement(se,null),n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:d.a.Navbar},n.a.createElement(x,null)),n.a.createElement("main",{className:d.a.Content},n.a.createElement(pe.a,{path:"/",exact:!0,render:function(){return e}}),n.a.createElement(pe.a,{path:"/about-project",exact:!0,component:Ee})),n.a.createElement(H,{aboutProjectClick:this.aboutProjectClickHandler,click:this.changeActiveRoomHandler}),n.a.createElement(P,{aboutProjectClick:this.aboutProjectClickHandler,clicked:this.hamburgerButtonClickedHandler,click:this.changeActiveRoomHandler}),n.a.createElement(T,null))}}]),t}(r.Component)),Ne=Object(E.b)((function(e){return{isNavOpened:e.ui.isNavOpened,values:e.data.values,activeRoomNumber:e.room.activeRoomNumber,activeRoom:e.room.activeRoom,serverError:e.data.serverError,render:e.data.render,errMessage:e.data.errMessage,selectedInterval:e.data.selectedInterval}}),(function(e){return{contactServer:function(t,a){return e(y(t,a))},changeActiveRoom:function(t,a){return e(function(e,t){return{type:"CHANGE_ACTIVE_ROOM",roomNumber:e,roomName:t}}(t,a))},toggleNav:function(t){return e(O(t))}}}))(fe),ke=a(14),je=a(101),ye=function(e,t){return Object(je.a)({},e,{},t)},Oe={values:{temperature:[],humidity:[],brightness:[],times:[]},render:!1,serverError:!1,errMessage:null,selectedInterval:null},xe=function(e,t){if(t.response.data.data.length<=0)return ye(e,{errMessage:"\u017diadne d\xe1ta",serverError:!0,render:!1});for(var a=[],r=[],n=[],o=[],c=t.response.data.data.length/(t.response.data.data.length/t.interval),i=t.response.data.data.length-1;i>0;i-=c){var l=j()(t.response.data.data[i].time).format("HH:mm DD/MM");a.unshift(parseFloat(t.response.data.data[i].temperature).toFixed(2)),r.unshift(parseFloat(t.response.data.data[i].humidity).toFixed(2)),n.unshift(parseFloat(t.response.data.data[i].brightness).toFixed(2)),o.unshift(l)}return ye(e,{values:{temperature:a,humidity:r,brightness:n,times:o},render:!0,serverError:!1,errMessage:null,selectedInterval:t.interval})},Ce=function(e,t){return ye(e,{serverError:!0,errMessage:t.error,render:!1})},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONTACT_SERVER_SUCCESS":return xe(e,t);case"CONTACT_SERVER_FAIL":return Ce(e,t);default:return e}},Re={isNavOpened:!1},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_NAV":return ye(e,{isNavOpened:!t.isNavOpened});default:return e}},Me={activeRoom:null,activeRoomNumber:null},Ie=function(e,t){return ye(e,{activeRoom:t.roomName,activeRoomNumber:t.roomNumber})},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_ACTIVE_ROOM":return Ie(e,t);default:return e}},we=a(98),De=a(99),Te=Object(ke.combineReducers)({data:Ae,ui:Se,room:Pe}),Be=Object(ke.createStore)(Te,Object(De.composeWithDevTools)(Object(ke.applyMiddleware)(we.a)));var Ge=function(){return n.a.createElement(E.a,{store:Be},n.a.createElement(S.a,null,n.a.createElement(Ne,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},25:function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__3smbF",CloseBtn:"SideDrawer_CloseBtn__1HUd5",Active:"SideDrawer_Active__3imPz"}},38:function(e,t,a){e.exports={GjarIot:"Navbar_GjarIot__2Qttq",Activeroom:"Navbar_Activeroom__xz8mC",HamburgerButton:"Navbar_HamburgerButton__3fc73"}},39:function(e,t,a){e.exports={spinner:"Loader_spinner__Qmy01",cube1:"Loader_cube1__3c88C",cube2:"Loader_cube2__239Wu","sk-cubemove":"Loader_sk-cubemove__2gTsA"}},51:function(e,t,a){e.exports={Content:"Layout_Content__13egM",Navbar:"Layout_Navbar__1xjZI",ErrMessage:"Layout_ErrMessage__11vPr"}},55:function(e,t,a){e.exports={DesktopSideDrawer:"DesktopSideDrawer_DesktopSideDrawer__iIxTO"}},56:function(e,t,a){e.exports={Icon:"Box_Icon__cWBqO",Whitebox:"Box_Whitebox__1lIf3"}},57:function(e,t,a){e.exports={Wrapper:"Graph_Wrapper__1IMn1",Graph:"Graph_Graph__3Kd4d"}},88:function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3459l"}},89:function(e,t,a){e.exports=a.p+"static/media/bluechart.1e9aebf7.svg"},90:function(e,t,a){e.exports=a.p+"static/media/greenchart.dcd133bc.svg"},91:function(e,t,a){e.exports=a.p+"static/media/purplechart.cce984ae.svg"},92:function(e,t,a){e.exports={Boxes:"Boxes_Boxes__121GO"}},95:function(e,t,a){e.exports={MainPage:"MainPage_MainPage__1LyIK"}},96:function(e,t,a){e.exports={errDiv:"ErrorDiv_errDiv__3MB5Q"}},97:function(e,t,a){e.exports=a.p+"static/media/wemos.4187a81e.jpg"}},[[102,1,2]]]);
//# sourceMappingURL=main.24d762b0.chunk.js.map