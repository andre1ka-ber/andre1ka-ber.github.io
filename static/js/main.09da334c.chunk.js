(this["webpackJsonptodo-app-ts"]=this["webpackJsonptodo-app-ts"]||[]).push([[0],{36:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(17),o=c.n(s),r=(c(36),c(19)),i=c(6),l=c(8),d=(c(40),c(41),c(42),c(21)),u=[{icon:"fas fa-home",title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",path:"/"},{icon:"fas fa-list-ul",title:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0445",path:"/completed"},{icon:"fas fa-layer-group",title:"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",path:"/fetched"}],j=c(1),b=function(e){var t=e.children,c=e.icon,n=e.path,a=e.title,s=e.classString,o=e.onClick,r=Object(l.f)();return Object(j.jsxs)("div",{role:"presentation",className:"navigation-item ".concat(r.pathname===n?"active":""," ").concat(s),onClick:o,children:[Object(j.jsx)("div",{className:"navigation-item-icon",children:c?Object(j.jsx)("i",{className:c}):t}),Object(j.jsx)("div",{className:"navigation-item-title",children:a})]})};b.defaultProps={icon:"",path:"",classString:"",onClick:function(){return null}};var O,p=b,h=c(16),m=c(7),f=Object(m.b)("CHANGE_APP_THEME"),x=Object(m.b)("DISPLAY_MODAL"),v=Object(m.b)("HIDE_MODAL"),N=Object(m.b)("ENABLE_MODAL_LOADING"),g=Object(m.b)("DISABLE_MODAL_LOADING"),E=Object(m.b)("SET_MODAL_CONTENT",(function(e){return{payload:e}})),C=function(e){return e.app},y=function(e){return C(e).theme},D=function(e){return C(e).modal.shouldDisplay},w=function(e){return C(e).modal.content},T=function(e){return C(e).modal.loading},k=function(){var e=Object(i.b)(),t=Object(i.c)(y),c=Object(n.useState)(""),a=Object(h.a)(c,2),s=a[0],o=a[1];Object(n.useEffect)((function(){o("light"===t?"fas fa-sun":"fas fa-moon")}),[t]);return Object(j.jsx)(p,{icon:s,title:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0435\u043c\u0443",onClick:function(){e(f())}})},_=function(){return Object(j.jsxs)("div",{className:"navigation",children:[u.map((function(e){return Object(j.jsx)(r.b,{to:e.path,children:Object(j.jsx)(p,{icon:e.icon,title:e.title,path:e.path})},e.icon)})),Object(j.jsxs)("div",{className:"bottom-items",children:[Object(j.jsx)(k,{}),Object(j.jsx)(p,{title:"Made with ReactJS + TypeScript",classString:"about-me-item",children:Object(j.jsx)("img",{src:"logo192.png",height:32,width:32,alt:"react-logo",className:"spin-logo"})})]})]})},L=Object(m.b)("ADD_TODO",(function(e){return{payload:{title:e,id:Date.now(),completed:!1}}})),S=Object(m.b)("COMPLETE_TODO",(function(e){return{payload:{id:e}}})),M=Object(m.b)("RETURN_COMPLETED_TODO",(function(e){return{payload:{id:e}}})),A=Object(m.b)("DELETE_TODO",(function(e){return{payload:{id:e}}})),P=Object(m.b)("FETCH_TODOS",(function(e){return{payload:e}})),F=Object(m.b)("SET_FETCHED_TODOS",(function(e){return{payload:e}})),I=Object(m.b)("SHOW_FETCHING_LOADER"),H=Object(m.b)("HIDE_FETCHING_LOADER"),R=function(){var e=Object(i.b)(),t=Object(n.useState)(""),c=Object(h.a)(t,2),a=c[0],s=c[1];return Object(j.jsxs)("form",{className:"todo-input-wrapper",onSubmit:function(t){t.preventDefault(),a&&(e(L(a.trim())),s((function(){return""})))},children:[Object(j.jsx)("h3",{className:"label-md",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443"}),Object(j.jsxs)("div",{className:"todo-input-form",children:[Object(j.jsx)("input",{type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438",onChange:function(e){s(e.target.value)},value:a}),Object(j.jsx)("button",{type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})},U=function(e){var t=e.todo,c=Object(i.b)();return Object(j.jsxs)("div",{className:"todo-list-item ".concat(t.completed?"completed":""),children:[Object(j.jsx)("input",{type:"checkbox","data-testid":"status-checkbox",checked:t.completed,onChange:function(){t.completed?c(M(t.id)):c(S(t.id))}}),Object(j.jsx)("h5",{role:"contentinfo",children:t.title}),Object(j.jsx)("button",{className:"todo-list-item-button",type:"button",onClick:function(){confirm("\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?")&&c(A(t.id))},children:Object(j.jsx)("i",{className:"fas fa-times"})})]})},B=function(e){return e.todos},G=function(e){return B(e).todos},J=function(e){return B(e).completed},W=function(e){return e.fetchedTodos},z=function(e){return W(e).todos},q=function(e){return W(e).loading},K=function(){var e=Object(i.c)(G);return Object(j.jsxs)("div",{className:"todo-list-wrapper",children:[Object(j.jsx)("h3",{className:"label-md",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447"}),Object(j.jsxs)("div",{className:"todo-list",children:[0===e.length?Object(j.jsx)("h4",{className:"label-md",children:"\u0417\u0430\u0434\u0430\u0447 \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e"}):"",e.map((function(e){return Object(j.jsx)(U,{todo:e},e.id)}))]})]})},V=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(R,{}),Object(j.jsx)(K,{})]})},Y=c(24),Q=c(28);!function(e){e[e.COMPLETED=1]="COMPLETED",e[e.UNCOMPLETED=2]="UNCOMPLETED"}(O||(O={}));for(var X=[],Z=1;Z<=10;Z+=1)X.push(Object(j.jsx)("option",{value:Z,children:Z},Z));var $=function(){var e=Object(i.b)(),t=Object(n.useState)({userId:0,completed:0,count:100}),c=Object(h.a)(t,2),a=c[0],s=c[1],o=function(e){s((function(t){return Object(Q.a)(Object(Q.a)({},t),{},Object(Y.a)({},e.target.name,Number(e.target.value)))}))};return Object(j.jsxs)("form",{className:"fetch-form",onSubmit:function(t){t.preventDefault(),e(P(a))},children:[Object(j.jsxs)("div",{className:"input-field",children:[Object(j.jsx)("label",{htmlFor:"todo-status",children:"\u0421\u0442\u0430\u0442\u0443\u0441"}),Object(j.jsxs)("select",{name:"completed",id:"todo-status",className:"input-select",value:a.completed,onChange:o,children:[Object(j.jsx)("option",{value:"0",children:"\u041d\u0435 \u0432\u0430\u0436\u043d\u043e"}),Object(j.jsx)("option",{value:O.COMPLETED,children:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435"}),Object(j.jsx)("option",{value:O.UNCOMPLETED,children:"\u041d\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435"})]})]}),Object(j.jsxs)("div",{className:"input-field",children:[Object(j.jsx)("label",{htmlFor:"todo-user",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u2116"}),Object(j.jsxs)("select",{name:"userId",id:"todo-user",className:"input-select",onChange:o,children:[Object(j.jsx)("option",{value:"0",children:"\u041d\u0435 \u0432\u0430\u0436\u043d\u043e"}),X]})]}),Object(j.jsxs)("div",{className:"input-field",children:[Object(j.jsx)("label",{htmlFor:"todo-count",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(j.jsx)("input",{name:"count",id:"todo-count",type:"number",step:10,value:a.count,onChange:o})]}),Object(j.jsx)("button",{className:"p-4 rounded-md bg-yellow-500 text-white mb-4",type:"submit",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"})]})},ee=function(){var e="light"===Object(i.c)(y)?"text-gray-700":"text-white";return Object(j.jsx)("div",{className:"flex place-content-center my-5 w-full",children:Object(j.jsxs)("svg",{className:"animate-spin ml-1 mr-3 h-12 w-12 ".concat(e),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[Object(j.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),Object(j.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})})},te=function(e){var t=e.status,c=t?"fas fa-check-circle":"fas fa-times-circle",n=t?"text-green-500":"text-red-500",a=t?"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043e!":"\u041d\u0430\u0434\u043e \u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c :)";return Object(j.jsxs)("span",{className:"todo-status ".concat(n),children:[Object(j.jsx)("i",{className:c}),a]})},ce=Object(m.b)("FETCH_TODO_USER",(function(e){return{payload:{id:e}}})),ne=(Object(m.b)("SET_FETCHED_USER",(function(e){return{payload:e}})),function(e){var t=e.todo,c=Object(i.b)();return Object(j.jsxs)("div",{className:"fetched-item",children:[Object(j.jsxs)("div",{className:"fetched-item-content",children:[Object(j.jsx)("h4",{children:t.title}),Object(j.jsx)(te,{status:t.completed})]}),Object(j.jsxs)("button",{type:"button",onClick:function(){c(x()),c(ce(t.userId))},children:[Object(j.jsx)("span",{children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"}),Object(j.jsx)("i",{className:"fas fa-address-card"})]})]},t.id)}),ae=function(){var e=Object(i.c)(z),t=Object(i.c)(q);return Object(j.jsxs)("div",{className:"fetched-list-wrapper",children:[Object(j.jsx)("h1",{className:"label-md",children:"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}),Object(j.jsxs)("div",{className:"fetched-list",children:[Object(j.jsx)($,{}),Object(j.jsxs)("div",{className:"md:ml-4 md:w-2/3",children:[Object(j.jsx)("h4",{className:"label-md",children:0===e.length?"\u0417\u0430\u043f\u0438\u0441\u0435\u0439 \u043d\u0435\u0442":"\u0417\u0430\u043f\u0438\u0441\u0438"}),Object(j.jsx)("div",{className:"fetched-items",children:t?Object(j.jsx)(ee,{}):e.map((function(e){return Object(j.jsx)(ne,{todo:e},e.id)}))})]})]})]})},se=function(){var e=Object(i.c)(J);return Object(j.jsxs)("div",{className:"todo-list-wrapper",children:[Object(j.jsx)("h3",{className:"label-md",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043d\u043d\u044b\u0445 \u0437\u0430\u0434\u0430\u0447"}),Object(j.jsxs)("div",{className:"todo-list",children:[0===e.length?Object(j.jsx)("h4",{className:"label-md",children:"\u0417\u0430\u0434\u0430\u0447 \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e"}):"",e.map((function(e){return Object(j.jsx)(U,{todo:e},e.id)}))]})]})},oe=(c(46),function(e){var t=e.userData;return Object(j.jsxs)("div",{className:"user-card",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f:\xa0"}),t.username]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f:\xa0"}),t.name]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430:\xa0"}),t.email]})]})}),re=function(){var e=Object(i.b)(),t=Object(i.c)(w),c=Object(i.c)(T),n=function(t){t.stopPropagation(),"modal-window"===t.target.className&&e(v())};return Object(j.jsx)("div",{role:"presentation",className:"modal-window",onClick:n,onKeyUp:n,children:Object(j.jsx)("div",{className:"modal-wrapper",id:"modalWindow",children:c?Object(j.jsx)(ee,{}):Object(j.jsx)(oe,{userData:t})})})},ie=function(){var e=Object(i.c)(y),t=Object(i.c)(D);return Object(n.useEffect)((function(){var t=document.querySelector("html");"dark"===e?t.classList.add("dark"):t.classList.remove("dark")}),[e]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)(_,{}),Object(j.jsx)("div",{className:"todo-wrapper",children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",component:V}),Object(j.jsx)(l.a,{path:"/completed",component:se}),Object(j.jsx)(l.a,{path:"/fetched",component:ae})]})}),Object(j.jsx)(d.a,{theme:e,progressClassName:"bg-yellow-500"})]}),t?Object(j.jsx)(re,{}):null]})},le=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,49)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),s(e),o(e)}))},de=c(31),ue=c(14),je=c.n(ue),be=c(29),Oe=c(15),pe=je.a.mark(Ee),he=je.a.mark(Ce),me=je.a.mark(ye);function fe(e){return xe.apply(this,arguments)}function xe(){return(xe=Object(be.a)(je.a.mark((function e(t){var c;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/todos?".concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ve(e){return Ne.apply(this,arguments)}function Ne(){return(Ne=Object(be.a)(je.a.mark((function e(t){var c;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users/".concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ge(e){var t=[];return Object.entries(e).forEach((function(e){var c=Object(h.a)(e,2),n=c[0],a=c[1];if(0!==a)switch(n){case"completed":var s=a===O.COMPLETED;t.push("".concat(n,"=").concat(s));break;case"count":t.push("_limit=".concat(a));break;default:t.push("".concat(n,"=").concat(a))}})),t.join("&")}function Ee(e){var t,c;return je.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Oe.b)(I());case 2:return n.next=4,ge(e.payload);case 4:return t=n.sent,n.next=7,Object(Oe.a)(fe,t);case 7:return c=n.sent,n.next=10,Object(Oe.b)(F(c));case 10:return n.next=12,Object(Oe.b)(H());case 12:case"end":return n.stop()}}),pe)}function Ce(e){var t;return je.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(Oe.b)(N());case 2:return c.next=4,Object(Oe.a)(ve,e.payload.id);case 4:return t=c.sent,c.next=7,Object(Oe.b)(E(t));case 7:return c.next=9,Object(Oe.b)(g());case 9:case"end":return c.stop()}}),he)}function ye(){return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Oe.c)(P,Ee);case 2:return e.next=4,Object(Oe.c)(ce,Ce);case 4:case"end":return e.stop()}}),me)}var De,we=c(10),Te=Object(m.c)({todos:[],completed:[]},(function(e){e.addCase(L,(function(e,t){e.todos.push(t.payload)})).addCase(S,(function(e,t){e.todos=e.todos.filter((function(c){return c.id!==t.payload.id||(c.completed=!0,e.completed.push(c),!1)})),Object(d.b)("\u0412\u044b \u043c\u043e\u043b\u043e\u0434\u0435\u0446!")})).addCase(M,(function(e,t){e.completed=e.completed.filter((function(c){return c.id!==t.payload.id||(c.completed=!1,e.todos.push(c),!1)})),Object(d.b)("\u0411\u044b\u0432\u0430\u0435\u0442! \u0418 \u0441 \u044d\u0442\u0438\u043c \u0441\u043f\u0440\u0430\u0432\u0438\u0442\u0435\u0441\u044c!)")})).addCase(A,(function(e,t){e.todos=e.todos.filter((function(e){return e.id!==t.payload.id})),e.completed=e.completed.filter((function(e){return e.id!==t.payload.id}))}))})),ke=Object(m.c)({todos:[],loading:!1},(function(e){e.addCase(F,(function(e,t){e.todos=t.payload})).addCase(I,(function(e){e.loading=!0})).addCase(H,(function(e){e.loading=!1}))})),_e={theme:null!==(De=localStorage.getItem("app-theme"))&&void 0!==De?De:"light",modal:{shouldDisplay:!1,content:"",loading:!1}},Le=Object(m.c)(_e,(function(e){e.addCase(f,(function(e){"light"===e.theme?e.theme="dark":e.theme="light",localStorage.setItem("app-theme",e.theme)})).addCase(x,(function(e){e.modal.shouldDisplay=!0})).addCase(v,(function(e){e.modal.shouldDisplay=!1})).addCase(E,(function(e,t){e.modal.content=t.payload})).addCase(N,(function(e){e.modal.loading=!0})).addCase(g,(function(e){e.modal.loading=!1}))})),Se=Object(we.b)({todos:Te,fetchedTodos:ke,app:Le}),Me=Object(de.a)(),Ae=[Me],Pe=Object(m.a)({reducer:Se,middleware:function(e){return e({thunk:!1}).concat(Ae)}});Me.run(ye);var Fe=Pe;o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(i.a,{store:Fe,children:Object(j.jsx)(r.a,{children:Object(j.jsx)(ie,{})})})}),document.getElementById("root")),le()}},[[48,1,2]]]);
//# sourceMappingURL=main.09da334c.chunk.js.map