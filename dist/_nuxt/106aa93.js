(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{560:function(t,e,r){"use strict";r.r(e);var n=r(32),c=(r(106),r(121),r(218)),o=r.n(c),d={fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("https://tranquil-basin-55259.herokuapp.com/product");case 3:r=e.sent,t.products=r.data,t.item.push(t.products.find((function(e){return e.uid===t.id}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.item.push(t.$store.getters.Products.find((function(e){return e.uid===t.id})));case 11:return e.abrupt("return",t.item);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},data:function(){return{id:this.$route.params.id,item:[]}}},f=r(11),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("SectionsProduct",{attrs:{data:t.item}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionsProduct:r(225).default})}}]);