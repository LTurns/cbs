(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5],{523:function(t,e,n){var content=n(532);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("212da76e",content,!0,{sourceMap:!1})},531:function(t,e,n){"use strict";n(523)},532:function(t,e,n){var r=n(15)(!1);r.push([t.i,".classy-bq{border-left:2px solid #fde36d;box-shadow:4px 0 6px -6px #222;margin:1rem 20px;padding:.7em 25px}.blockquote-section{width:90%;margin:0 auto;opacity:.95;padding:20px;text-align:left}@media screen and (max-width:800px){.blockquote-section{width:100%;margin:0 auto;opacity:.95;padding:10px}}",""]),t.exports=r},536:function(t,e,n){"use strict";n.r(e);var r={props:{text:{type:String,default:function(){return"black--text"}}}},o=(n(531),n(49)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"pt-5 pb-5 blockquote-section"},[n("blockquote",{class:t.text+" classy-bq"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},538:function(t,e,n){"use strict";var r=n(158),o=n(97),c=n(116),l=n(0),h=n(3),d=Object(h.a)(r.a,Object(o.a)("windowGroup","v-window-item","v-window"));e.a=d.extend().extend().extend({name:"v-window-item",directives:{Touch:c.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(l.g)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(l.g)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}})},545:function(t,e,n){"use strict";var r=n(79);e.a=r.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return r.a.options.computed.classes.call(this)}},methods:{genData:r.a.options.methods.genData}})},552:function(t,e,n){var content=n(553);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("2d62e390",content,!0,{sourceMap:!1})},553:function(t,e,n){var r=n(15)(!1);r.push([t.i,".v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}",""]),t.exports=r},560:function(t,e,n){var content=n(576);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("0291791c",content,!0,{sourceMap:!1})},575:function(t,e,n){"use strict";n(560)},576:function(t,e,n){var r=n(15)(!1);r.push([t.i,'div.gallery{width:300px;display:"inline-block";margin-left:auto;margin-right:auto}div.gallery img{width:100%;height:auto}.imagewidth{width:50%;margin-bottom:10%}@media screen and (max-width:658px){.imagewidth{width:75%;margin-bottom:2%}}',""]),t.exports=r},577:function(t,e,n){"use strict";n(8),n(5),n(7),n(11),n(9),n(12);var r=n(1),o=(n(25),n(44),n(552),n(196)),c=n(136),l=n(50),h=n(253),d=n(545),m=n(0),f=n(13);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide:function(){return{parentTheme:this.theme}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return w(w({},o.a.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(f.a)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:o.a.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,n=[],i=0;i<e;i++){var r=this.$createElement(c.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(l.a,{props:{size:18}},this.delimiterIcon)]);n.push(r)}return this.$createElement(d.a,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},n)},genProgress:function(){return this.$createElement(h.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=o.a.options.render.call(this,t);return e.data.style="height: ".concat(Object(m.g)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},578:function(t,e,n){"use strict";n(8),n(5),n(7),n(11),n(9),n(12);var r=n(1),o=n(538),c=n(190),l=n(3),h=n(0),d=n(60);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=Object(l.a)(o.a,d.a);e.a=v.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide:function(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(c.a,{staticClass:"v-carousel__item",props:f(f({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(h.o)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,data=t.data;return data.staticClass="v-window-item",data.directives.push({name:"show",value:this.isActive}),this.$createElement(e,data,this.genDefaultSlot())}}})},615:function(t,e,n){"use strict";n.r(e);n(8),n(5),n(7),n(11),n(9),n(12);var r=n(1),o=n(22);n(84);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={components:{BlockQuote:n(536).default},props:{id:{default:"",type:String}},data:function(){return{heroAlt:[{src:"",heading:"BLOG",icon:"mdi-message-text"}],blogData:{heading:"",subheading:"",info:[],categories:[],description:[],img:[]}}},created:function(){this.getBlog()},methods:{getBlog:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Access-Control-Allow-Origin":"*"}},e.prev=1,e.next=4,t.$axios.get("https://cbsbackend.herokuapp.com/api/blogs/".concat(t.id),n);case 4:r=e.sent,data=r.data,t.blogData=l({},data),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),new Error("Error Fetching Blogs");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}},d=(n(575),n(49)),m=n(69),f=n.n(m),v=n(577),w=n(578),y=n(504),O=n(190),x=n(237),_=n(505),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"hero"}},[0!==t.blogData.heading.length?n("div",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"12"}},[n("div",[n("div",{staticClass:"fonttitle black--text text--lighten-4 font-weight-black",staticStyle:{"border-bottom":"2px solid #fde36d","box-shadow":"0 4px 6px -6px #222","line-height":"1",padding:"2%","margin-top":"20px","margin-bottom":"10px"},attrs:{align:"center"}},[t._v("\n            "+t._s(t.blogData.heading.toUpperCase())+"\n          ")]),t._v(" "),n("div",{staticClass:"white"},[n("h3",{staticClass:"text-h5 text-uppercase text-center black--text",staticStyle:{padding:"5%"}},[t._v("\n              "+t._s(t.blogData.subheading)+"\n            ")]),t._v(" "),n("v-col",{attrs:{cols:"12",md:"12"}},[n("v-carousel",{attrs:{"hide-delimiter-background":"",height:"100%"}},t._l(t.blogData.img,(function(image){return n("v-carousel-item",{key:image.id,attrs:{"reverse-transition":"fade-transition",transition:"fade-transition"}},[n("a",{attrs:{target:"_blank",href:"https://cbs-images.s3.amazonaws.com/blog/"+image.image}},[n("v-img",{staticClass:"imagewidth",staticStyle:{display:"block","margin-left":"auto","margin-right":"auto"},attrs:{src:"https://cbs-images.s3.amazonaws.com/blog/"+image.image,"lazy-src":"https://cbs-images.s3.amazonaws.com/blog/"+image.image}})],1)])})),1)],1)],1),t._v(" "),t._l(t.blogData.description,(function(e){return n("div",{key:e.id,staticClass:"blue-grey darken-4"},[n("block-quote",{attrs:{text:"white--text"}},[t._v("\n              "+t._s(e.paragraph)+"\n            ")])],1)}))],2)])],1)],1):n("div",[n("v-progress-circular",{staticClass:"text-center",attrs:{indeterminate:"",color:"amber"}})],1)])}),[],!1,null,null,null);e.default=component.exports;f()(component,{VCarousel:v.a,VCarouselItem:w.a,VCol:y.a,VImg:O.a,VProgressCircular:x.a,VRow:_.a})}}]);