(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{621:function(t,e,r){var content=r(662);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("0ec0e1a8",content,!0,{sourceMap:!1})},661:function(t,e,r){"use strict";r(621)},662:function(t,e,r){var c=r(10)(!1);c.push([t.i,".productid-enter-active[data-v-27ace23a],.productid-leave-active[data-v-27ace23a]{transition:opacity .5s}.productid-enter[data-v-27ace23a],.productid-leave-active[data-v-27ace23a]{opacity:0}",""]),t.exports=c},687:function(t,e,r){"use strict";r.r(e);r(8),r(6),r(4),r(12),r(7),r(13);var c=r(1),o=r(76);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{id:this.$route.params.id}},created:function(){this.refreshProduct()},methods:d(d({},Object(o.b)(["resetProduct"])),{},{refreshProduct:function(){this.$store.dispatch("refreshProduct")}}),transition:"productid"},l=(r(661),r(9)),component=Object(l.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("SectionsProduct",{attrs:{id:t.id}})],1)}),[],!1,null,"27ace23a",null);e.default=component.exports;installComponents(component,{SectionsProduct:r(266).default})}}]);