(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{585:function(t,e,r){var content=r(615);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("70a33171",content,!0,{sourceMap:!1})},614:function(t,e,r){"use strict";r(585)},615:function(t,e,r){var o=r(11)(!1);o.push([t.i,".search[data-v-27eb4670]{display:flex;box-shadow:2px 3px 4px rgba(0,0,0,.3);background-color:#fff;padding:3px;margin-top:3%;margin-bottom:3%;width:50%;position:relative;transition:width .45s cubic-bezier(.18,.89,.32,1.28);overflow:hidden}.search__input[data-v-27eb4670]{flex-grow:1;border:none;padding:0 .5rem;position:absolute;top:0;bottom:0;left:10px;opacity:0;width:calc(100% - 60px);cursor:pointer}.search__input[data-v-27eb4670]:focus{outline:none}.search__btn[data-v-27eb4670]{background:transparent;border:none;cursor:pointer;border-radius:100vh;height:50px;width:50px;margin-left:auto;transition:background .15s ease-in-out}.search__btn[data-v-27eb4670]:focus{outline:none}.search__btn img[data-v-27eb4670]{width:20px}.search[focus-within][data-v-27eb4670]{width:80%}.search[data-v-27eb4670]:focus-within{width:80%}.search[focus-within] .search__input[data-v-27eb4670]{opacity:1;cursor:auto}.search:focus-within .search__input[data-v-27eb4670]{opacity:1;cursor:auto}.search[focus-within] .search__btn[data-v-27eb4670]{background:#fde36d;color:#000}.search:focus-within .search__btn[data-v-27eb4670]{background:#fde36d;color:#000}.search[focus-within] .search__btn[data-v-27eb4670]:focus,.search[focus-within] .search__btn[data-v-27eb4670]:hover{outline:0}.search:focus-within .search__btn[data-v-27eb4670]:focus,.search:focus-within .search__btn[data-v-27eb4670]:hover{outline:0}.kleintools-enter-active[data-v-27eb4670],.kleintools-leave-active[data-v-27eb4670]{transition:opacity .5s}.kleintools-enter[data-v-27eb4670],.kleintools-leave-active[data-v-27eb4670]{opacity:0}",""]),t.exports=o},647:function(t,e,r){"use strict";r.r(e);var o=r(20),n=(r(84),r(10),{transition:"kleintools",data:function(){return{heroAlt:[{src:"",heading:"KLEIN TOOLS"}],search:"",filteredList:[]}},created:function(){this.getAllMusics()},methods:{getAllMusics:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.listLoading=!0,r={headers:{"Access-Control-Allow-Origin":"*"}},e.prev=2,e.next=5,t.$axios.get("https://cbsbackend.herokuapp.com/api/products",r);case 5:return o=e.sent,o.data.forEach((function(e){"Klein Tools"===e.category&&t.filteredList.push(e)})),e.abrupt("return",t.filteredList);case 11:throw e.prev=11,e.t0=e.catch(2),new Error("Error Fetching Products");case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))()}}}),c=(r(614),r(8)),l=r(16),d=r.n(l),h=r(554),v=r(234),f=r(555),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4"},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",align:"center"}},[r("SectionsHeroAlt",{class:t.$vuetify.theme.dark?"grey darken-4":"white",attrs:{"hero-alt":t.heroAlt}}),t._v(" "),r("v-responsive",{staticClass:"max-auto mx-auto text-center",class:t.$vuetify.theme.dark?"grey darken-4":"yellow darken-1"},[r("div",{staticClass:"hero-text mt-20 mb-20",staticStyle:{"margin-top":"50px","margin-bottom":"50px"}},[r("blockquote",[t._v("\n            Klein Tools includes some of our most popular products. Please\n            contact us if you have any questions.\n          ")])])]),t._v(" "),r("div",{staticClass:"search"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"search__input",attrs:{type:"text","aria-label":"search",placeholder:"enter your search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),r("button",{staticClass:"search__btn",attrs:{"aria-label":"submit search"}},[r("img",{attrs:{src:"/loupe.png",alt:""}})])]),t._v(" "),r("SectionsFeaturedProducts",{attrs:{data:t.filteredList}})],1)],1)],1)}),[],!1,null,"27eb4670",null);e.default=component.exports;d()(component,{SectionsHeroAlt:r(160).default,SectionsFeaturedProducts:r(191).default}),d()(component,{VCol:h.a,VResponsive:v.a,VRow:f.a})}}]);