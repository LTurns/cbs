(window.webpackJsonp=window.webpackJsonp||[]).push([[55,9,21],{475:function(t,e,r){var content=r(484);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("65c238dc",content,!0,{sourceMap:!1})},478:function(t,e,r){var content=r(489);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("212da76e",content,!0,{sourceMap:!1})},483:function(t,e,r){"use strict";r(475)},484:function(t,e,r){var n=r(16)(!1);n.push([t.i,"",""]),t.exports=n},485:function(t,e,r){"use strict";r.r(e);var n={props:{heroAlt:{type:Array,default:function(){return[]}}}},o=(r(483),r(45)),c=r(60),l=r.n(c),d=r(462),f=r(471),h=r(209),v=r(176),x=r(463),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"hero"}},t._l(t.heroAlt,(function(e,i){return r("v-img",{key:i,staticClass:"gradient-fill",attrs:{width:"100%",height:"30vh",src:e.src}},[r("v-container",{attrs:{"fill-height":""}},[r("v-row",{staticClass:"text-center"},[r("v-col",{staticClass:"text-center",attrs:{col:"12"}},[r("h1",{staticClass:"\n              text-md-h2 text-sm-h3 text-h4\n              font-weight-black\n              text-center\n            ",staticStyle:{"border-bottom":"4px solid #fde36d","box-shadow":"0 4px 6px -6px #222"}},[r("v-icon",[t._v(t._s(e.icon))]),t._v("\n            "+t._s(e.heading.toUpperCase())+"\n          ")],1)])],1)],1)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:d.a,VContainer:f.a,VIcon:h.a,VImg:v.a,VRow:x.a})},488:function(t,e,r){"use strict";r(478)},489:function(t,e,r){var n=r(16)(!1);n.push([t.i,".classy-bq{border-left:2px solid #fde36d;box-shadow:4px 0 6px -6px #222;margin:1rem 20px;padding:.7em 25px}.blockquote-section{width:90%;margin:0 auto;opacity:.95;padding:20px;text-align:left}@media screen and (max-width:800px){.blockquote-section{width:100%;margin:0 auto;opacity:.95;padding:10px}}",""]),t.exports=n},490:function(t,e,r){"use strict";r.r(e);var n={props:{text:{type:String,default:function(){return"black--text"}}}},o=(r(488),r(45)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"pt-5 pb-5 blockquote-section"},[r("blockquote",{class:t.text+" classy-bq"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},562:function(t,e,r){var content=r(639);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("081beb86",content,!0,{sourceMap:!1})},638:function(t,e,r){"use strict";r(562)},639:function(t,e,r){var n=r(16)(!1);n.push([t.i,".telecoms-enter-active[data-v-19e188db],.telecoms-leave-active[data-v-19e188db]{transition:opacity .5s}.telecoms-enter[data-v-19e188db],.telecoms-leave-active[data-v-19e188db]{opacity:0}",""]),t.exports=n},694:function(t,e,r){"use strict";r.r(e);var n=r(20),o=(r(81),r(10),r(43),r(66),{transition:"telecoms",data:function(){return{heroAlt:[{src:"",heading:" WINCHES AND TRAILERS ",icon:"",image:"telecoms.svg"}],filteredList:[]}},created:function(){this.getAllTelecomsProducts()},methods:{getAllTelecomsProducts:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.listLoading=!0,r={headers:{"Access-Control-Allow-Origin":"*"}},e.prev=2,e.next=5,t.$axios.get("https://cbsbackend.herokuapp.com/api/products",r);case 5:return n=e.sent,n.data.forEach((function(e){e.category.includes("Winches and Trailers")&&t.filteredList.push(e)})),e.abrupt("return",t.filteredList);case 11:throw e.prev=11,e.t0=e.catch(2),new Error("Error Fetching Products");case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))()}}}),c=(r(638),r(45)),l=r(60),d=r.n(l),f=r(462),h=r(463),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"grey lighten-4"},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",align:"center"}},[r("SectionsHeroAlt",{attrs:{"hero-alt":t.heroAlt}}),t._v(" "),r("v-col",{staticClass:"blue-grey darken-4"},[r("SectionsBlockQuote",{attrs:{text:"white--text"}},[t._t("default",(function(){return[t._v(" Our Klein Tools are used for... ")]}))],2)],1),t._v(" "),r("SectionsSearch",{attrs:{data:t.filteredList}})],1)],1)],1)}),[],!1,null,"19e188db",null);e.default=component.exports;d()(component,{SectionsHeroAlt:r(485).default,SectionsBlockQuote:r(490).default,SectionsSearch:r(520).default}),d()(component,{VCol:f.a,VRow:h.a})}}]);