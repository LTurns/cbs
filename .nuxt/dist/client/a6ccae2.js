(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{695:function(e,t,r){"use strict";r.r(t);r(9),r(8),r(7),r(11),r(10),r(12);var n=r(25),o=r(1),c=(r(89),r(141));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var v={name:"NavBar",computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.b)("auth",["loggedIn","user"])),methods:{logout:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$auth.logout();case 2:e.$router.push("/login");case 3:case"end":return t.stop()}}),t)})))()}}},O=v,f=r(41),component=Object(f.a)(O,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-navbar",{attrs:{type:"dark",variant:"dark"}},[r("b-navbar-brand",{attrs:{to:"/"}},[e._v("NavBar")]),e._v(" "),r("b-navbar-nav",{staticClass:"ml-auto"},[e.loggedIn?e._e():r("b-nav-item",{attrs:{to:"/login"}},[e._v("Login")]),e._v(" "),e.loggedIn?e._e():r("b-nav-item",{attrs:{to:"/register"}},[e._v("Register")]),e._v(" "),e.loggedIn?r("b-nav-item",{on:{click:e.logout}},[r("em",[e._v("Hello "+e._s(e.user.name))])]):e._e(),e._v(" "),e.loggedIn?r("b-nav-item",{on:{click:e.logout}},[e._v("Logout")]):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);