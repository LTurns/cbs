(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{476:function(e,t,r){var content=r(493);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(14).default)("5d0b2a68",content,!0,{sourceMap:!1})},492:function(e,t,r){"use strict";r(476)},493:function(e,t,r){var o=r(13)(!1);o.push([e.i,".search[data-v-18e60271]{display:flex;box-shadow:2px 3px 4px rgba(0,0,0,.3);background-color:#fff;padding:3px;margin-top:3%;width:50%;position:relative;transition:width .45s cubic-bezier(.18,.89,.32,1.28);overflow:hidden}.search__input[data-v-18e60271]{flex-grow:1;border:none;padding:0 .5rem;position:absolute;top:0;bottom:0;left:10px;opacity:0;width:calc(100% - 60px);cursor:pointer}.search__input[data-v-18e60271]:focus{outline:none}.search__btn[data-v-18e60271]{background:transparent;border:none;cursor:pointer;border-radius:100vh;height:50px;width:50px;margin-left:auto;transition:background .15s ease-in-out}.search__btn[data-v-18e60271]:focus{outline:none}.search__btn img[data-v-18e60271]{width:20px}.search[focus-within][data-v-18e60271]{width:80%}.search[data-v-18e60271]:focus-within{width:80%}.search[focus-within] .search__input[data-v-18e60271]{opacity:1;cursor:auto}.search:focus-within .search__input[data-v-18e60271]{opacity:1;cursor:auto}.search[focus-within] .search__btn[data-v-18e60271]{background:#fde36d;color:#000}.search:focus-within .search__btn[data-v-18e60271]{background:#fde36d;color:#000}.search[focus-within] .search__btn[data-v-18e60271]:focus,.search[focus-within] .search__btn[data-v-18e60271]:hover{outline:0}.search:focus-within .search__btn[data-v-18e60271]:focus,.search:focus-within .search__btn[data-v-18e60271]:hover{outline:0}",""]),e.exports=o},508:function(e,t,r){"use strict";r.r(t);r(215),r(33),r(5),r(38),r(60),r(32);var o={data:function(){return{heroAlt:[{src:"pexels-andrea-piacquadio-3830745.jpg",heading:" UTILITIES "}],search:""}},computed:{filteredList:function(){var e=this;return""!==this.search?this.$store.getters.fibreBlowing.filter((function(t){return t.name.toLowerCase().includes(e.search.toLowerCase())})):this.$store.getters.fibreBlowing}},head:function(){return{title:"Gallery",meta:[{hid:"description",name:"description",content:"Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem"}]}}},n=(r(492),r(15)),c=r(18),l=r.n(c),d=r(452),h=r(469),f=r(165),v=r(202),_=r(453),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",align:"center"}},[r("SectionsHeroAlt",{attrs:{"hero-alt":e.heroAlt}}),e._v(" "),r("div",{staticClass:"search"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"search__input",attrs:{type:"text","aria-label":"search",placeholder:"enter your search"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),r("app-product-list",{attrs:{data:e.filteredList}}),e._v(" "),r("button",{staticClass:"search__btn",attrs:{"aria-label":"submit search"}},[r("img",{attrs:{src:"/loupe.png",alt:""}})])],1),e._v(" "),r("SectionsFeaturedProducts",{attrs:{data:e.filteredList}}),e._v(" "),r("v-container",{staticClass:"py-16"},[r("v-row",e._l(120,(function(t){return r("v-col",{key:t,staticClass:"d-flex child-flex",attrs:{cols:"4",xl:"3"}},[r("v-img",{staticClass:"grey lighten-2 rounded-lg",attrs:{src:"https://picsum.photos/700?image="+(5*t+10),"lazy-src":"https://picsum.photos/10/6?image="+(5*t+10),"aspect-ratio":"1"},scopedSlots:e._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)})),1)],1)],1)],1)],1)}),[],!1,null,"18e60271",null);t.default=component.exports;l()(component,{SectionsHeroAlt:r(213).default,SectionsFeaturedProducts:r(214).default}),l()(component,{VCol:d.a,VContainer:h.a,VImg:f.a,VProgressCircular:v.a,VRow:_.a})}}]);