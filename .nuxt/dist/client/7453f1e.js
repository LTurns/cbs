(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{492:function(t,e,o){"use strict";o.d(e,"a",(function(){return l})),o.d(e,"b",(function(){return c})),o.d(e,"c",(function(){return d})),o.d(e,"d",(function(){return v}));var n=o(493),r=o(0),l=Object(r.h)("v-card__actions"),c=Object(r.h)("v-card__subtitle"),d=Object(r.h)("v-card__text"),v=Object(r.h)("v-card__title");n.a},493:function(t,e,o){"use strict";o(9),o(7),o(8),o(11),o(10),o(12);var n=o(1),r=(o(22),o(184),o(495),o(224)),l=o(225),c=o(74),d=o(4);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,r.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},r.a.options.computed.classes.call(this))},styles:function(){var style=h({},r.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),o=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(o,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},495:function(t,e,o){var content=o(496);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("e23b7040",content,!0,{sourceMap:!1})},496:function(t,e,o){var n=o(15)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},497:function(t,e,o){"use strict";o(22),o(53);var n=o(2);e.a=n.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var o=this;this.clearDelay();var n=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){o.isActive={open:!0,close:!1}[t]},n)}}})},510:function(t,e,o){"use strict";var n=o(497),r=o(75),l=o(4),c=o(13);e.a=Object(l.a)(n.a,r.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},516:function(t,e,o){"use strict";var n=o(70);e.a=n.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return n.a.options.computed.classes.call(this)}},methods:{genData:n.a.options.methods.genData}})},574:function(t,e,o){var content=o(649);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("ff794d24",content,!0,{sourceMap:!1})},648:function(t,e,o){"use strict";o(574)},649:function(t,e,o){var n=o(15)(!1);n.push([t.i,".zoom[data-v-604166f0]{transform:scale(1.025) translateY(-10px)}.notzoom[data-v-604166f0],.zoom[data-v-604166f0]{transition:transform .2s}",""]),t.exports=n},650:function(t,e,o){var content=o(651);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("01907af4",content,!0,{sourceMap:!1})},651:function(t,e,o){var n=o(15)(!1);n.push([t.i,".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child,.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child),.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle .v-btn.v-btn.v-size--default{min-width:48px;min-height:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}",""]),t.exports=n},662:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{planDuration:"monthly",plans:[{plan:"Basic",elevation:0,color:"primary darken-1",description:"Best Plan for Small Businesses",monthly:"$10",yearly:"$100",features:[{icon:"mdi-web",text:"5 websites"},{icon:"mdi-harddisk",text:"10 GB storage"},{icon:"mdi-signal",text:"500 GB bandwidth"},{icon:"mdi-account",text:"10 email addreses"},{icon:"mdi-domain",text:"free domain with annual plan"},{icon:"mdi-server",text:"4X pricessing power"},{icon:"mdi-dns",text:"premium DNS"}]},{plan:"Silver",elevation:16,color:"green darken-2",description:"Best Plan for Professional Users",monthly:"$40",yearly:"$400",features:[{icon:"mdi-web",text:"5 websites"},{icon:"mdi-harddisk",text:"10 GB storage"},{icon:"mdi-signal",text:"500 GB bandwidth"},{icon:"mdi-account",text:"10 email addreses"},{icon:"mdi-domain",text:"free domain with annual plan"},{icon:"mdi-server",text:"4X pricessing power"},{icon:"mdi-dns",text:"premium DNS"}]},{plan:"Gold",elevation:0,color:"orange darken-3",description:"Best Plan for Power Users",monthly:"$100",yearly:"$1000",features:[{icon:"mdi-web",text:"unlimited websites"},{icon:"mdi-harddisk",text:"unlimited storage"},{icon:"mdi-signal",text:"unlimited bandwidth"},{icon:"mdi-account",text:"unlimited addreses"},{icon:"mdi-domain",text:"free domain with annual plan"},{icon:"mdi-server",text:"4X pricessing power"},{icon:"mdi-dns",text:"premium DNS"}]}]}}},r=(o(648),o(41)),l=o(47),c=o.n(l),d=o(142),v=(o(9),o(7),o(8),o(11),o(10),o(12),o(1)),h=(o(650),o(516)),m=o(24),f=o(4);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=Object(f.a)(h.a,m.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return _(_({},h.a.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var data=this.setTextColor(this.color,_({},h.a.options.methods.genData.call(this)));return this.group?data:this.setBackgroundColor(this.backgroundColor,data)}}}),w=o(493),k=o(492),O=o(479),j=o(490),C=o(510),D=o(214),P=o(215),B=o(141),S=o(44),V=o(122),T=o(480),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"py-16",class:t.$vuetify.theme.dark?"black":"white"},[o("v-container",[o("v-row",[o("v-col",[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{staticClass:"text-center"},[o("h2",{staticClass:"\n                text-h4 text-md-h3 text-center\n                font-weight-black\n                text-capitalize\n                mb-4\n              "},[t._v("\n              The most affordable pricing\n            ")]),t._v(" "),o("p",{staticClass:"my-10 title"},[t._v("\n              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed\n              diam nonummy nibh euismod tincidunt ut laoreet dolore magna\n              aliquam erat volutpat.\n            ")]),t._v(" "),o("div",{staticClass:"text-center"},[o("v-btn-toggle",{attrs:{"active-class":"primary darken-1",borderless:"",mandatory:"",light:"",color:"white"},model:{value:t.planDuration,callback:function(e){t.planDuration=e},expression:"planDuration"}},[o("v-btn",{attrs:{value:"monthly"}},[t._v(" Monthly Plan ")]),t._v(" "),o("v-btn",{attrs:{value:"yearly"}},[t._v(" Yearly Plan ")])],1)],1)])],1)],1)],1)],1),t._v(" "),o("v-container",{attrs:{fluid:""}},[o("v-row",{staticClass:"mx-auto",staticStyle:{"max-width":"1200px"}},t._l(t.plans,(function(e,n){return o("v-col",{key:"plan-"+n,attrs:{cols:"12",md:"4"}},[o("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var r=n.hover;return[o("v-card",{staticClass:"mx-auto transition-swing",class:r?"zoom":"notzoom",attrs:{elevation:r?24:e.elevation,color:e.color,"max-width":"400"}},[o("h3",{staticClass:"text-h4 text-center font-weight-black white--text pt-5",domProps:{textContent:t._s(e.plan)}}),t._v(" "),o("v-card-text",{staticClass:"text-center subtitle-1 white--text py-2",domProps:{textContent:t._s(e.description)}}),t._v(" "),o("v-card-subtitle",{staticClass:"text-h5 font-weight-black text-center white--text pt-0"},[t._v(t._s("monthly"===t.planDuration?e.monthly:e.yearly)+"\n              "),o("span",{staticClass:"subtitle-1"},[t._v("per "+t._s("monthly"===t.planDuration?"month":"year"))])]),t._v(" "),o("v-list",[t._l(e.features,(function(e,n){return o("v-list-item",{key:"feature-"+n,attrs:{dense:""}},[o("v-list-item-icon",[o("v-icon",[t._v("\n                    "+t._s(e.icon)+"\n                  ")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",{staticClass:"text-capitalize",domProps:{textContent:t._s(e.text)}})],1)],1)})),t._v(" "),o("v-list-item",[o("v-btn",{staticClass:"mx-auto my-3",attrs:{color:"primary",large:"",block:"",rounded:""}},[t._v("\n                  Buy Now\n                ")])],1)],2)],1)]}}],null,!0)})],1)})),1)],1)],1)}),[],!1,null,"604166f0",null);e.default=component.exports;c()(component,{VBtn:d.a,VBtnToggle:y,VCard:w.a,VCardSubtitle:k.b,VCardText:k.c,VCol:O.a,VContainer:j.a,VHover:C.a,VIcon:D.a,VList:P.a,VListItem:B.a,VListItemContent:S.a,VListItemIcon:V.a,VListItemTitle:S.c,VRow:T.a})}}]);