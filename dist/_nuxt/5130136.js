(window.webpackJsonp=window.webpackJsonp||[]).push([[25,13],{517:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return v}));var o=r(518),n=r(0),c=Object(n.h)("v-card__actions"),l=Object(n.h)("v-card__subtitle"),d=Object(n.h)("v-card__text"),v=Object(n.h)("v-card__title");o.a},518:function(t,e,r){"use strict";r(8),r(5),r(7),r(11),r(9),r(12);var o=r(1),n=(r(25),r(195),r(519),r(250)),c=r(251),l=r(60),d=r(3);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.a.options.computed.classes.call(this))},styles:function(){var style=h({},n.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},519:function(t,e,r){var content=r(520);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("e23b7040",content,!0,{sourceMap:!1})},520:function(t,e,r){var o=r(15)(!1);o.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=o},522:function(t,e,r){var content=r(528);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("0f5cb308",content,!0,{sourceMap:!1})},527:function(t,e,r){"use strict";r(522)},528:function(t,e,r){var o=r(15)(!1);o.push([t.i,'.zoom[data-v-657e646f]{transform:scale(1.025) translateY(-10px)}.notzoom[data-v-657e646f],.zoom[data-v-657e646f]{transition:transform .2s}.image[data-v-657e646f]{display:block;margin-left:auto;margin-right:auto}.card h3[data-v-657e646f]{font-size:14px}.link[data-v-657e646f]{text-decoration:none;margin-left:auto;margin-right:auto;display:block;width:100px}.ribbon[data-v-657e646f]{width:150px;height:150px;overflow:hidden;position:absolute}.ribbon[data-v-657e646f]:after,.ribbon[data-v-657e646f]:before{position:absolute;z-index:-1;content:"";display:block;border:5px solid #f5773c}.ribbon span[data-v-657e646f]{position:absolute;display:block;width:225px;padding:15px 0;background-color:#f5773c;box-shadow:0 5px 10px rgba(0,0,0,.1);color:#fff;font:600 13px/1 "Lato",sans-serif;text-shadow:0 1px 1px rgba(0,0,0,.2);text-transform:uppercase;text-align:center}.ribbon-bottom-left[data-v-657e646f]{bottom:-10px;left:-10px}.ribbon-bottom-left[data-v-657e646f]:after,.ribbon-bottom-left[data-v-657e646f]:before{border-bottom-color:transparent;border-left-color:transparent}.ribbon-bottom-left[data-v-657e646f]:before{bottom:0;right:0}.ribbon-bottom-left[data-v-657e646f]:after{top:0;left:0}.ribbon-bottom-left span[data-v-657e646f]{right:-25px;bottom:30px;transform:rotate(45deg)}',""]),t.exports=o},529:function(t,e,r){"use strict";r.r(e);var o={props:{data:{type:Array,default:function(){return[]}},color:{type:String,default:function(){return"feature"}}}},n=(r(527),r(49)),c=r(69),l=r.n(c),d=r(148),v=r(518),h=r(517),f=r(504),_=r(515),m=r(535),x=r(238),w=r(190),y=r(505),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{class:t.color},[r("v-container",[r("v-row",{attrs:{mb:"10"}},t._l(t.data,(function(e,o){return r("v-col",{key:o,attrs:{md:"4"}},[r("v-hover",{staticClass:"card",scopedSlots:t._u([{key:"default",fn:function(o){var n=o.hover;return[r("v-card",{staticClass:"mx-auto transition-swing",class:n?"zoom":"notzoom",attrs:{elevation:n?24:4,color:e.color,"max-width":"500",height:"630"}},[r("h4",{staticClass:"\n                text-uppercase text-center\n                black--text\n                mt-5\n                pt-5\n                pl-5\n                pr-5\n                pb-5\n              ",staticStyle:{"letter-spacing":"0.15em","font-size":"20px"},domProps:{textContent:t._s(e.name)}}),t._v(" "),r("v-img",{staticClass:"image grey lighten-2 rounded-lg mt-5 mb-10",attrs:{src:e.mainImg,alt:"",width:"250","lazy-src":e.mainImg,"aspect-ratio":"1"}}),t._v(" "),r("v-card-text",{staticClass:"subtitle-1 black--text",staticStyle:{"text-align":"center",padding:"5%"},domProps:{textContent:t._s(e.intro)}}),t._v(" "),r("div",{staticStyle:{position:"absolute",bottom:"0",right:"10px",display:"block","margin-right":"5%"}},[e.hasSubCategories?t._e():r("div",[r("nuxt-link",{staticClass:"link",attrs:{to:"/product/"+e._id}},[r("v-btn",{staticClass:"my-3",attrs:{"x-large":"",text:"",color:"green darken-3",outlined:"",black:""}},[r("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v("View")],1)],1)],1),t._v(" "),e.hasSubCategories?r("div",[r("nuxt-link",{staticClass:"link align-center",attrs:{to:"/category/"+e.name.toLowerCase()}},[r("v-btn",{staticClass:"my-3",attrs:{"x-large":t.$vuetify.breakpoint.smAndUp,text:"",color:"green darken-2",outlined:"",bold:"",black:""}},[r("v-icon",{attrs:{left:"",large:""}},[t._v("mdi-play")]),t._v("View")],1)],1)],1):t._e()]),t._v(" "),e.productId.length?r("div",[r("div",{staticClass:"pa-5",staticStyle:{position:"absolute",bottom:"0",left:"0",display:"block","margin-left":"2%"}},[r("div",{staticClass:"d-inline mt-10 pa-2 blue-grey darken-4 white--text"},[t._v("\n                  ID\n                ")]),t._v(" "),r("div",{staticClass:"d-inline yellow darken-2 black--text pa-2"},[t._v("\n                  "+t._s(e.productId)+"\n                ")])])]):r("div",[r("div",{staticClass:"ribbon ribbon-bottom-left"},[r("span",[t._v("More Products")])])])],1)]}}],null,!0)})],1)})),1)],1)],1)}),[],!1,null,"657e646f",null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VCardText:h.c,VCol:f.a,VContainer:_.a,VHover:m.a,VIcon:x.a,VImg:w.a,VRow:y.a})},535:function(t,e,r){"use strict";var o=r(156),n=r(51),c=r(3),l=r(13);e.a=Object(c.a)(o.a,n.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(l.c)("v-hover should only contain a single element",this),element)):(Object(l.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},537:function(t,e,r){var content=r(544);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("2a632d1a",content,!0,{sourceMap:!1})},543:function(t,e,r){"use strict";r(537)},544:function(t,e,r){var o=r(15)(!1);o.push([t.i,".search[data-v-8bfa3e34]{display:flex;box-shadow:2px 3px 4px rgba(0,0,0,.3);background-color:#fff;margin-top:3%;margin-bottom:3%;width:50%;position:relative;transition:width .45s cubic-bezier(.18,.89,.32,1.28);overflow:hidden}.search__input[data-v-8bfa3e34]{flex-grow:1;border:none;padding:0 .5rem;position:absolute;top:0;bottom:0;left:10px;opacity:0;width:calc(100% - 60px);cursor:pointer}.search__input[data-v-8bfa3e34]:focus{outline:none}.search__btn[data-v-8bfa3e34]{background:transparent;border:none;cursor:pointer;border-radius:100vh;height:50px;width:50px;margin-left:auto;transition:background .15s ease-in-out}.search__btn[data-v-8bfa3e34]:focus{outline:none}.search__btn img[data-v-8bfa3e34]{width:20px}.search[focus-within][data-v-8bfa3e34]{width:80%}.search[data-v-8bfa3e34]:focus-within{width:80%}.search[focus-within] .search__input[data-v-8bfa3e34]{opacity:1;cursor:auto}.search:focus-within .search__input[data-v-8bfa3e34]{opacity:1;cursor:auto}.search[focus-within] .search__btn[data-v-8bfa3e34]{background:#fde36d;color:#000}.search:focus-within .search__btn[data-v-8bfa3e34]{background:#fde36d;color:#000}.search[focus-within] .search__btn[data-v-8bfa3e34]:focus,.search[focus-within] .search__btn[data-v-8bfa3e34]:hover{outline:0}.search:focus-within .search__btn[data-v-8bfa3e34]:focus,.search:focus-within .search__btn[data-v-8bfa3e34]:hover{outline:0}",""]),t.exports=o},548:function(t,e,r){"use strict";r.r(e);r(29),r(157),r(7),r(32),r(45),r(27);var o={props:{data:{type:Array,default:null}},data:function(){return{search:""}},computed:{list:function(){var t=this;return""!==this.search?this.data.filter((function(e){return e.name.toLowerCase().includes(t.search.toLowerCase())||e.productId.toLowerCase().includes(t.search.toLowerCase())})):this.data}}},n=(r(543),r(49)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",{staticClass:"search yellow darken-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"search__input",attrs:{type:"text","aria-label":"search",placeholder:"enter your search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),t._m(0)]),t._v(" "),r("SectionsFeaturedProducts",{attrs:{data:t.list}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"search__btn",attrs:{"aria-label":"submit search"}},[e("img",{attrs:{src:"/loupe.png",alt:""}})])}],!1,null,"8bfa3e34",null);e.default=component.exports;installComponents(component,{SectionsFeaturedProducts:r(529).default})}}]);