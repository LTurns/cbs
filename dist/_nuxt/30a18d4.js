(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{561:function(t,e,r){var content=r(593);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("c6665fd2",content,!0,{sourceMap:!1})},592:function(t,e,r){"use strict";r(561)},593:function(t,e,r){var o=r(11)(!1);o.push([t.i,".subcategory-enter-active[data-v-2eace30e],.subcategory-leave-active[data-v-2eace30e]{transition:opacity .5s}.subcategory-enter[data-v-2eace30e],.subcategory-leave-active[data-v-2eace30e]{opacity:0}",""]),t.exports=o},612:function(t,e,r){"use strict";r.r(e);var o=r(32),n=(r(106),r(63),r(157)),c=r.n(n),d={transition:"subcategory",fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.get("https://tranquil-basin-55259.herokuapp.com/product-sub-categories");case 3:return r=e.sent,t.subProducts=r.data,t.subProducts.map((function(e){return e.subCategory===t.id?t.productCategory.push(e):""})),e.abrupt("return",t.productCategory);case 9:return e.prev=9,e.t0=e.catch(0),t.subProducts=t.$store.getters.SubCategories.map((function(e){return e.subCategory===t.id?t.productCategory.push(e):""})),e.abrupt("return",t.productCategory);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()},data:function(){return{id:this.$route.params.subCategory,productCategory:[]}}},l=(r(592),r(16)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("SectionsSubCategoryList",{attrs:{data:t.productCategory}})],1)}),[],!1,null,"2eace30e",null);e.default=component.exports;installComponents(component,{SectionsSubCategoryList:r(251).default})}}]);