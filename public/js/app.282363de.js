(function(e){function t(t){for(var r,i,l=t[0],c=t[1],s=t[2],f=0,p=[];f<l.length;f++)i=l[f],a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("549d")},1438:function(e,t,n){"use strict";var r=n("cf4b"),a=n.n(r);a.a},"549d":function(e,t,n){"use strict";n.r(t);var r=n("b1ce"),a=n("6e7f"),o=n.n(a),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("LoginTest"),n("OnboardList")],1)},l=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-card",[n("v-toolbar",{attrs:{color:"blue",dark:""}},[n("v-toolbar-title",[e._v("Onboard Checklist")]),n("v-spacer"),n("v-progress-circular",{attrs:{value:e.remainingValue}}),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:e.minimizeChecklist}},[e.isOpen?n("v-icon",[e._v("highlight_off")]):n("v-icon",[e._v("minimize")])],1)],1),e.isOpen?n("v-container",[n("v-list",e._l(e.todos,function(t){return n("v-list-tile",{key:t.name,attrs:{avatar:""}},[n("v-list-tile-action",["true"===t.value?n("v-icon",{attrs:{size:30,color:e.green}},[e._v("done")]):e._e()],1),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"checklistName",class:{checkedOff:"true"===t.value},domProps:{textContent:e._s(t.name)}})],1),n("v-list-item-avatar",["true"!=t.value?n("v-btn",{attrs:{id:t.propertyName,small:"",ripple:"",color:e.blue},on:{click:function(t){return e.completeTask(t)}}},[e._v("Complete")]):e._e()],1)],1)}),1)],1):e._e()],1)],1)],1)},s=[],u=n("8400"),f={data:function(){return{todos:null,info:null,isOpen:!1,green:"#008000",blue:"blue",remainingValue:0,checkbox1:null,testData:null}},mounted:function(){var e=this;this.$root.$on("loadChecklist",function(){u.get("/onboard").then(function(t){e.todos=t.data,e.isOpen=!0})})},methods:{loadChecklist:function(){var e=this;u.get("/onboard").then(function(t){e.todos=t.data})},minimizeChecklist:function(){this.isOpen?this.isOpen=!1:this.isOpen=!0},completeTask:function(e){var t=e.currentTarget.id;u.get("/update",{params:{updateProperty:t,value:!0}}).then(this.loadChecklist())}}},p=f,d=n("42da"),v=Object(d["a"])(p,c,s,!1,null,null,null),h=v.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-toolbar-title",[e._v("Login form")]),n("v-spacer")],1),n("v-card-text",[n("v-form",[n("v-text-field",{attrs:{"prepend-icon":"person",name:"name",label:"Name",type:"text"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("v-text-field",{attrs:{id:"teacher_id","prepend-icon":"lock",name:"teacher_id",label:"Teacher ID",type:"password"},model:{value:e.teacher_id,callback:function(t){e.teacher_id=t},expression:"teacher_id"}})],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary"},on:{click:e.login}},[e._v("Login")])],1)],1)],1)],1)],1)],1)],1)},b=[],_=(n("0f5f"),n("8400")),g={data:function(){return{drawer:null,name:null,teacher_id:null,userVID:null}},methods:{login:function(){var e=this;_.get("/user",{params:{teacher_id:this.teacher_id,name:this.name}}).then(function(t){e.teacher_id="",e.name="",e.userVID=t.data.userVID,e.$root.$emit("loadChecklist")})}},props:{source:String}},y=g,k=Object(d["a"])(y,m,b,!1,null,null,null),O=k.exports,x={name:"app",components:{OnboardList:h,LoginTest:O}},w=x,j=(n("f8ec"),n("1438"),Object(d["a"])(w,i,l,!1,null,null,null)),C=j.exports;n("db81");r["default"].use(o.a),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(C)}}).$mount("#app")},"8a44":function(e,t,n){},cf4b:function(e,t,n){},f8ec:function(e,t,n){"use strict";var r=n("8a44"),a=n.n(r);a.a}});
//# sourceMappingURL=app.282363de.js.map