(this.webpackJsonpday_4=this.webpackJsonpday_4||[]).push([[0],{19:function(e,t,n){},25:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(4),c=n.n(a),s=(n(19),n(9)),i=n(10),l=n(14),u=n(13),b=n(3),d=n(1),h=function(e){console.log(e);var t=e.robotinfo;console.log(t);var n=t.name,o=t.email,r=t.username,a=t.id;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(d.jsx)("img",{src:"https://robohash.org/".concat(a,"/?size=200x200"),alt:"robot"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:n}),Object(d.jsx)("p",{children:o}),Object(d.jsx)("p",{children:r})]})]})})},j=function(e){var t=e.robots;return Object(d.jsx)("div",{className:"flexme",children:t.map((function(e,t){return console.log(e,t),Object(d.jsx)(h,{robotinfo:e})}))})},p="CHANGE_SEARCH_FIELD",O="ROBOTS",g="LOADING",f="FAILED",v=function(e){return{type:"CHANGE_SEARCH_FIELD",payload:e}},x=Object(b.b)(null,(function(e){return{onInputChange:function(t){return e(v(t.target.value))}}}))((function(e){var t=e.onInputChange;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{type:"text",placeholder:"Search Robot...",className:"pa3 br3 ba b--green bg-lightest-blue custom",onChange:t})})})),y=(n(25),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){e.setState({searchField:t.target.value})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(e){console.log(e),this.props.loadRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.robots,o=e.isLoading;console.log(t);var r=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?Object(d.jsx)("h1",{style:{textAlign:"center"},children:"Loading..."}):Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(d.jsx)(x,{onInputChange:this.handleChange}),Object(d.jsx)(j,{robots:r})]})}}]),n}(r.a.Component)),m=Object(b.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isLoading:e.requestRobots.isLoading,error:e.requestRobots.error}}),(function(e){return{onInputChange:function(t){return e(v(t.target.value))},loadRobots:function(){return e((function(e){e({type:g}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e({type:O,payload:t})})).catch((function(t){e({type:f,payload:t})}))}))}}}))(y),C=n(5),L=n(11),R=n(12),F=n.n(R),w=(n(27),n(2)),I={searchField:""},N={robots:[],isLoading:!1},A=Object(C.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case p:return Object(w.a)(Object(w.a)({},e),{},{searchField:t.payload});default:return Object(w.a)({},e)}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case g:return Object(w.a)(Object(w.a)({},e),{},{isLoading:!0});case O:return Object(w.a)(Object(w.a)({},e),{},{robots:t.payload,isLoading:!1});case f:return Object(w.a)(Object(w.a)({},e),{},{error:t.payload,isLoading:!1});default:return Object(w.a)({},e)}}}),E=Object(C.c)(A,Object(C.a)(L.a,F.a));c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(b.a,{store:E,children:Object(d.jsx)(m,{})})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.4c5d1184.chunk.js.map