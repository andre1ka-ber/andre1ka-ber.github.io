(function(e){function t(t){for(var c,r,s=t[0],i=t[1],u=t[2],l=0,m=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);d&&d(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(c=!1)}c&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},o={app:0},a=[];function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1800:function(e,t,n){},1920:function(e,t,n){"use strict";n("4955")},1990:function(e,t,n){},"272f":function(e,t,n){},3873:function(e,t,n){"use strict";n("642b")},"3c47":function(e,t,n){"use strict";n("dbf0")},4955:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function o(e,t,n,o,a,r){var s=Object(c["resolveComponent"])("Documents");return Object(c["openBlock"])(),Object(c["createBlock"])(s)}var a={class:"documents-wrapper"};function r(e,t,n,o,r,s){var i=Object(c["resolveComponent"])("DocumentsHeader"),u=Object(c["resolveComponent"])("DocumentInput"),d=Object(c["resolveComponent"])("DocumentsSearchList"),l=Object(c["resolveComponent"])("DocumentsList");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",a,[Object(c["createVNode"])(i),Object(c["createVNode"])(u),Object(c["createVNode"])(d),Object(c["createVNode"])(l)])}var s={class:"documents-header"},i=Object(c["createStaticVNode"])('<div class="documents-header-title" data-v-32af6b5d><span data-v-32af6b5d>Документы</span></div><div class="document-header-actions" data-v-32af6b5d><button class="bookmark-action" data-v-32af6b5d><i class="fas fa-bookmark" data-v-32af6b5d></i></button><button data-v-32af6b5d><i class="fas fa-plus" data-v-32af6b5d></i><span data-v-32af6b5d>Новый тип</span></button><button data-v-32af6b5d><i class="fas fa-plus" data-v-32af6b5d></i><span data-v-32af6b5d>Новый документ</span></button></div>',2),u=[i];function d(e,t,n,o,a,r){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",s,u)}var l={name:"DocumentsHeader"},m=(n("3c47"),n("6b0d")),b=n.n(m);const f=b()(l,[["render",d],["__scopeId","data-v-32af6b5d"]]);var p=f,v=(n("a4d3"),n("e01a"),{key:0,class:"documents-list"}),O={class:"without-category-items"};function h(e,t,n,o,a,r){var s=Object(c["resolveComponent"])("DocumentsListCategory"),i=Object(c["resolveComponent"])("draggable"),u=Object(c["resolveComponent"])("DocumentsListItem");return o.isSearchStarted?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",v,[Object(c["createVNode"])(i,{list:o.categories.get(),"item-key":"id",group:"categories",handle:".drag-handler","ghost-class":"highlight","chosen-class":"dragging-item"},{item:Object(c["withCtx"])((function(e){var t,n=e.element;return[Object(c["createVNode"])(s,{title:n.title,description:n.description,children:null!==(t=o.documents.get()[n.id])&&void 0!==t?t:[],"category-id":n.id},null,8,["title","description","children","category-id"])]})),_:1},8,["list"]),Object(c["createElementVNode"])("div",O,[Object(c["createVNode"])(i,{modelValue:o.documents.get()[0],"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.documents.get()[0]=e}),"item-key":"id",group:"documents",handle:".drag-handler",animation:"150","ghost-class":"highlight","chosen-class":"dragging-item"},{item:Object(c["withCtx"])((function(e){var t=e.element;return[Object(c["createVNode"])(u,{title:t.title},null,8,["title"])]})),_:1},8,["modelValue"])])]))}var j=n("5502"),g=Object(c["createElementVNode"])("i",{class:"fas fa-angle-down"},null,-1),y=[g],C={class:"title"},S={class:"description"},V={class:"documents-category-children"},D={class:"no-items"},N=Object(c["createElementVNode"])("span",null,"В данной категории нет документов",-1),k=[N];function E(e,t,n,o,a,r){var s=Object(c["resolveComponent"])("DocumentsItemActions"),i=Object(c["resolveComponent"])("DocumentsListItem"),u=Object(c["resolveComponent"])("draggable");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])(["documents-category",{expanded:o.isExpanded}])},[Object(c["createElementVNode"])("button",{class:"expand-category-button",onClick:t[0]||(t[0]=function(){return o.toggleCategory&&o.toggleCategory.apply(o,arguments)})},y),Object(c["createElementVNode"])("div",C,[Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(n.title),1)]),Object(c["createElementVNode"])("div",S,Object(c["toDisplayString"])(n.description),1),Object(c["createVNode"])(s)],2),Object(c["createVNode"])(c["Transition"],{name:"fade"},{default:Object(c["withCtx"])((function(){return[Object(c["withDirectives"])(Object(c["createElementVNode"])("div",V,[Object(c["createVNode"])(u,{list:o.categoryChildren.get()[n.categoryId],"item-key":"id",group:"documents",handle:".drag-handler","ghost-class":"highlight","chosen-class":"dragging-item"},{item:Object(c["withCtx"])((function(e){var t=e.element;return[Object(c["createElementVNode"])("div",null,[Object(c["createVNode"])(i,{title:t.title},null,8,["title"])])]})),_:1},8,["list"]),Object(c["withDirectives"])(Object(c["createElementVNode"])("div",D,k,512),[[c["vShow"],0===n.children.length]])],512),[[c["vShow"],o.isExpanded]])]})),_:1})])}n("a9e3");var I=n("b76a"),w=n.n(I),L={class:"documents-item-actions"},B=Object(c["createStaticVNode"])('<button data-v-5c211ea6><i class="fas fa-pencil-alt" data-v-5c211ea6></i></button><button class="trash" data-v-5c211ea6><i class="fas fa-trash-alt" data-v-5c211ea6></i></button><button class="drag-handler" data-v-5c211ea6><i class="fas fa-arrows-alt-v drag-handler" data-v-5c211ea6></i></button>',3),_=[B];function x(e,t,n,o,a,r){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",L,_)}var R={name:"DocumentsItemActions"};n("65b1");const F=b()(R,[["render",x],["__scopeId","data-v-5c211ea6"]]);var A=F,P={class:"documents-item"},M={class:"title"};function T(e,t,n,o,a,r){var s=Object(c["resolveComponent"])("DocumentsItemActions");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",P,[Object(c["createElementVNode"])("div",M,[Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(n.title),1)]),Object(c["createVNode"])(s)])}var H={name:"DocumentsListItem",props:{title:{type:String,default:function(){return""}}},components:{DocumentsItemActions:A}};n("f9c9");const z=b()(H,[["render",T],["__scopeId","data-v-ef7820ba"]]);var J=z,U={name:"DocumentsListCategory",components:{DocumentsListItem:J,DocumentsItemActions:A,draggable:w.a},props:{title:{type:String,default:function(){return""}},description:{type:String,default:function(){return""}},children:{type:Array,default:function(){return[]}},categoryId:{type:Number,default:function(){return 0}}},setup:function(e){var t=Object(j["b"])(),n=Object(c["computed"])((function(){return{get:function(){return t.state.documents.documents},set:function(n){return t.commit("documents/updateCategoryChildrenList",{categoryId:e.categoryId,data:n})}}})),o=Object(c["ref"])(!1),a=function(){o.value=!o.value};return e.children.length>0&&(o.value=!0),{isExpanded:o,toggleCategory:a,categoryChildren:n}}};n("6406");const q=b()(U,[["render",E]]);var G=q,K={name:"DocumentsList",components:{DocumentsListItem:J,DocumentsListCategory:G,draggable:w.a},setup:function(){var e=Object(c["ref"])(!1),t=Object(j["b"])(),n=Object(c["computed"])((function(){return{get:function(){return t.state.documents.categories},set:function(e){return t.commit("documents/updateCategoryList",e)}}})),o=Object(c["computed"])((function(){return{get:function(){return t.state.documents.documents},set:function(e){return t.commit("documents/updateDocumentsList",e)}}})),a=Object(c["computed"])((function(){return t.state.documents.searchStarted}));return{drag:e,categories:n,documents:o,isSearchStarted:a}}};n("8750"),n("1920");const Q=b()(K,[["render",h],["__scopeId","data-v-17edeb78"]]);var W=Q,X=function(e){return Object(c["pushScopeId"])("data-v-43ae1a3b"),e=e(),Object(c["popScopeId"])(),e},Y={class:"document-input"},Z=X((function(){return Object(c["createElementVNode"])("i",{class:"fas fa-search"},null,-1)})),$=X((function(){return Object(c["createElementVNode"])("i",{class:"fas fa-times"},null,-1)})),ee=[$];function te(e,t,n,o,a,r){return Object(c["openBlock"])(),Object(c["createElementBlock"])("form",{class:"document-input-form",onSubmit:t[2]||(t[2]=Object(c["withModifiers"])((function(){}),["prevent"])),onFocusin:t[3]||(t[3]=function(){return o.addFocusedClass&&o.addFocusedClass.apply(o,arguments)}),onFocusout:t[4]||(t[4]=function(){return o.removeFocusedClass&&o.removeFocusedClass.apply(o,arguments)}),ref:"form"},[Object(c["createElementVNode"])("div",Y,[Z,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.inputValue=e}),placeholder:"Поиск..."},null,512),[[c["vModelText"],o.inputValue]]),Object(c["createElementVNode"])("button",{type:"button",onClick:t[1]||(t[1]=function(){return o.resetInput&&o.resetInput.apply(o,arguments)}),class:Object(c["normalizeClass"])({"hide-reset-button":o.hideResetButton})},ee,2)])],544)}var ne=n("2ef0"),ce=function(){var e=Object(c["ref"])(""),t=Object(j["b"])(),n=Object(ne["debounce"])((function(){t.dispatch("documents/searchDocuments",e.value)}),1e3);Object(c["watch"])(e,(function(){e.value.length>0&&n()}));var o=function(){e.value="",t.dispatch("documents/finishSearch")};return{inputValue:e,startSearch:n,resetInput:o}},oe={name:"DocumentInput",setup:function(){var e=Object(c["ref"])(""),t=function(){e.value.classList.add("focused")},n=function(){e.value.classList.remove("focused")},o=ce(),a=o.inputValue,r=o.resetInput,s=Object(c["computed"])((function(){return 0===a.value.length}));return{inputValue:a,resetInput:r,hideResetButton:s,form:e,addFocusedClass:t,removeFocusedClass:n}}};n("ca22");const ae=b()(oe,[["render",te],["__scopeId","data-v-43ae1a3b"]]);var re=ae,se={key:0,class:"search-result"},ie={class:"documents-list"},ue={class:"not-found"};function de(e,t,n,o,a,r){var s=Object(c["resolveComponent"])("DocumentsListItem");return o.isSearchStarted?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",se,[Object(c["createElementVNode"])("div",ie,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(o.searchResult,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(s,{key:e.title,title:e.title,description:e.description},null,8,["title","description"])})),128))]),Object(c["withDirectives"])(Object(c["createElementVNode"])("div",ue," Ничего не найдено. Попробуйте изменить параметры поиска ",512),[[c["vShow"],0===o.searchResult.length]])])):Object(c["createCommentVNode"])("",!0)}var le={name:"DocumentsSearchList",components:{DocumentsListItem:J},setup:function(){var e=Object(j["b"])(),t=Object(c["computed"])((function(){return e.state.documents.searchResult})),n=Object(c["computed"])((function(){return e.state.documents.searchStarted}));return{searchResult:t,isSearchStarted:n}}};n("b260");const me=b()(le,[["render",de],["__scopeId","data-v-46fc343b"]]);var be=me,fe={name:"Documents",components:{DocumentsSearchList:be,DocumentInput:re,DocumentsList:W,DocumentsHeader:p}};n("d394");const pe=b()(fe,[["render",r],["__scopeId","data-v-7a1a24ea"]]);var ve=pe,Oe={name:"App",components:{Documents:ve}};n("3873");const he=b()(Oe,[["render",o]]);var je=he,ge=(n("78bf"),n("2909")),ye=n("3835"),Ce=(n("d3b7"),n("159b"),n("4fad"),n("caad"),n("2532"),n("99af"),{0:[{title:"Тестовое задание кандидата",description:"Россия, Белорусь, Украина"},{title:"Трудовой договор",description:""},{title:"Мед. книжка",description:""}],1:[{title:"Паспорт",description:""},{title:"ИНН",description:""}],2:[],3:[]}),Se=[{id:1,title:"Обязательные для всех",description:"Документы, обязательные для всех сотрудников без исключения"},{id:2,title:"Обязательные для трудоустройства",description:"Документы, без которых невозможно трудоустройство человека на какую бы то ни было должность в компании вне зависимости от гражданства"},{id:3,title:"Специальные",description:""}],Ve=function(){return{categories:Se,documents:Ce,searchResult:[],searchStarted:!1}},De={},Ne={searchDocuments:function(e,t){var n=e.commit,c=e.state;if(n("startSearch"),!t)return n("setSearchResult",[]),void n("finishSearch");var o=[];Object.entries(c.documents).forEach((function(e){var n=Object(ye["a"])(e,2),a=n[0],r=n[1],s=t.toLowerCase();c.categories.forEach((function(e){+e.id===+a&&(e.title.toLowerCase().includes(s)||e.description.toLowerCase().includes(s))&&(o=[].concat(Object(ge["a"])(o),Object(ge["a"])(r)))})),r.forEach((function(e){(e.title.toLowerCase().includes(s)||e.description.toLowerCase().includes(s))&&(o=[].concat(Object(ge["a"])(o),[e]))}))})),n("setSearchResult",o)},finishSearch:function(e){var t=e.commit;t("setSearchResult",[]),t("finishSearch")}},ke={updateDocumentsList:function(e,t){e.documents[0]=t},updateCategoryList:function(e,t){e.categories=t},updateCategoryChildrenList:function(e,t){var n=t.categoryId,c=t.data;e.documents[n]=c},setSearchResult:function(e,t){e.searchResult=t},startSearch:function(e){e.searchStarted=!0},finishSearch:function(e){e.searchStarted=!1}},Ee={state:Ve,getters:De,actions:Ne,mutations:ke,namespaced:!0},Ie=Object(j["a"])({state:{},getters:{},actions:{},mutations:{},modules:{documents:Ee}}),we=Ie,Le=Object(c["createApp"])(je);Le.use(we),Le.mount("#app")},6406:function(e,t,n){"use strict";n("d3be")},"642b":function(e,t,n){},"65b1":function(e,t,n){"use strict";n("fbea")},"78bf":function(e,t,n){},8750:function(e,t,n){"use strict";n("de5a")},b260:function(e,t,n){"use strict";n("d27e")},ca22:function(e,t,n){"use strict";n("1990")},d27e:function(e,t,n){},d394:function(e,t,n){"use strict";n("272f")},d3be:function(e,t,n){},dbf0:function(e,t,n){},de5a:function(e,t,n){},f9c9:function(e,t,n){"use strict";n("1800")},fbea:function(e,t,n){}});
//# sourceMappingURL=app.e2ab76b2.js.map