(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{648:function(t,e,n){"use strict";n.r(e);var r=n(20),o=(n(84),{name:"LoginPage",middleware:["auth-login"],data:function(){return{email:"",password:""}},methods:{loginUser:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$auth.loginWith("local",{data:t});case 3:e.$router.push("/data").catch((function(){})),n.next=9;break;case 6:throw n.prev=6,n.t0=n.catch(0),new Error(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()}}}),c=n(8),l=n(16),h=n.n(l),w=n(554),d=n(574),f=n(555),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",[n("h1",[t._v("Login")]),t._v(" "),n("SectionsUserAuthForm",{attrs:{"button-text":"Login","submit-form":t.loginUser}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{SectionsUserAuthForm:n(258).default}),h()(component,{VCol:w.a,VContainer:d.a,VRow:f.a})}}]);