(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{569:function(t,e,r){var content=r(638);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("b307f70c",content,!0,{sourceMap:!1})},637:function(t,e,r){"use strict";r(569)},638:function(t,e,r){var n=r(15)(!1);n.push([t.i,".productid-enter-active[data-v-48314baa],.productid-leave-active[data-v-48314baa]{transition:opacity .5s}.productid-enter[data-v-48314baa],.productid-leave-active[data-v-48314baa]{opacity:0}",""]),t.exports=n},682:function(t,e,r){"use strict";r.r(e);var n=r(23),c=(r(82),{transition:"productid",data:function(){return{id:this.$route.params.id,item:[]}},created:function(){this.getProduct()},methods:{getProduct:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{"Access-Control-Allow-Origin":"*"}},e.prev=1,e.next=4,t.$axios.get("https://cbsbackend.herokuapp.com/api/products/".concat(t.$route.params.id),r);case 4:return n=e.sent,t.item.push(n.data),e.abrupt("return",t.item);case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}}),o=(r(637),r(41)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("SectionsProduct",{attrs:{data:t.item}})],1)}),[],!1,null,"48314baa",null);e.default=component.exports;installComponents(component,{SectionsProduct:r(655).default})}}]);