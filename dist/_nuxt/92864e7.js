(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{479:function(e,t,r){var content=r(487);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(14).default)("165aee0e",content,!0,{sourceMap:!1})},486:function(e,t,r){"use strict";r(479)},487:function(e,t,r){var o=r(13)(!1);o.push([e.i,".search[data-v-bfe135e8]{display:flex;box-shadow:2px 3px 4px rgba(0,0,0,.3);background-color:#fff;padding:3px;margin-top:3%;margin-bottom:3%;width:50%;position:relative;transition:width .45s cubic-bezier(.18,.89,.32,1.28);overflow:hidden}.search__input[data-v-bfe135e8]{flex-grow:1;border:none;padding:0 .5rem;position:absolute;top:0;bottom:0;left:10px;opacity:0;width:calc(100% - 60px);cursor:pointer}.search__input[data-v-bfe135e8]:focus{outline:none}.search__btn[data-v-bfe135e8]{background:transparent;border:none;cursor:pointer;border-radius:100vh;height:50px;width:50px;margin-left:auto;transition:background .15s ease-in-out}.search__btn[data-v-bfe135e8]:focus{outline:none}.search__btn img[data-v-bfe135e8]{width:20px}.search[focus-within][data-v-bfe135e8]{width:80%}.search[data-v-bfe135e8]:focus-within{width:80%}.search[focus-within] .search__input[data-v-bfe135e8]{opacity:1;cursor:auto}.search:focus-within .search__input[data-v-bfe135e8]{opacity:1;cursor:auto}.search[focus-within] .search__btn[data-v-bfe135e8]{background:#fde36d;color:#000}.search:focus-within .search__btn[data-v-bfe135e8]{background:#fde36d;color:#000}.search[focus-within] .search__btn[data-v-bfe135e8]:focus,.search[focus-within] .search__btn[data-v-bfe135e8]:hover{outline:0}.search:focus-within .search__btn[data-v-bfe135e8]:focus,.search:focus-within .search__btn[data-v-bfe135e8]:hover{outline:0}",""]),e.exports=o},496:function(e,t,r){"use strict";r.r(t);r(216),r(33),r(5),r(38),r(61),r(32);var o={data:function(){return{heroAlt:[{src:"W1-TEW-50.jpeg",heading:" FIBRE BLOWING "}],search:""}},computed:{filteredList:function(){var e=this;return""!==this.search?this.$store.getters.fibreBlowing.filter((function(t){return t.name.toLowerCase().includes(e.search.toLowerCase())})):this.$store.getters.fibreBlowing}},head:function(){return{title:"Gallery",meta:[{hid:"description",name:"description",content:"Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem"}]}}},n=(r(486),r(15)),c=r(17),h=r.n(c),d=r(455),l=r(456),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{style:{background:e.$vuetify.theme.themes.dark.primary},attrs:{cols:"12",align:"center"}},[r("SectionsHeroAlt",{attrs:{"hero-alt":e.heroAlt}}),e._v(" "),r("div",{staticClass:"search"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"search__input",attrs:{type:"text","aria-label":"search",placeholder:"enter your search"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),r("button",{staticClass:"search__btn",attrs:{"aria-label":"submit search"}},[r("img",{attrs:{src:"/loupe.png",alt:""}})])]),e._v(" "),r("SectionsFeaturedProducts",{attrs:{data:e.filteredList}})],1)],1)],1)}),[],!1,null,"bfe135e8",null);t.default=component.exports;h()(component,{SectionsHeroAlt:r(215).default,SectionsFeaturedProducts:r(175).default}),h()(component,{VCol:d.a,VRow:l.a})}}]);