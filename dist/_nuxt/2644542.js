(window.webpackJsonp=window.webpackJsonp||[]).push([[33,17,27,29],{521:function(e,t,n){var content=n(525);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("65c238dc",content,!0,{sourceMap:!1})},524:function(e,t,n){"use strict";n(521)},525:function(e,t,n){var o=n(15)(!1);o.push([e.i,"",""]),e.exports=o},526:function(e,t,n){"use strict";n.r(t);var o={props:{heroAlt:{type:Array,default:function(){return[]}}}},l=(n(524),n(49)),r=n(69),m=n.n(r),v=n(504),c=n(515),d=n(238),h=n(190),f=n(505),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"hero"}},e._l(e.heroAlt,(function(t,i){return n("v-img",{key:i,staticClass:"gradient-fill",attrs:{width:"100%",height:"30vh",src:t.src}},[n("v-container",{attrs:{"fill-height":""}},[n("v-row",{staticClass:"text-center"},[n("v-col",{staticClass:"text-center",attrs:{col:"12"}},[n("h1",{staticClass:"\n              text-md-h2 text-sm-h3 text-h4\n              font-weight-black\n              text-center\n            ",staticStyle:{"border-bottom":"4px solid #fde36d","box-shadow":"0 4px 6px -6px #222"}},[n("v-icon",[e._v(e._s(t.icon))]),e._v("\n            "+e._s(t.heading.toUpperCase())+"\n          ")],1)])],1)],1)],1)})),1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VCol:v.a,VContainer:c.a,VIcon:d.a,VImg:h.a,VRow:f.a})},540:function(e,t,n){"use strict";n.r(t);var o={props:{ourTeam:{type:Array,default:function(){return[]}},size:{type:String,default:"4"}}},l=n(49),r=n(69),m=n.n(r),v=n(504),c=n(515),d=n(505),h=n(73),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{class:e.$vuetify.theme.dark?"grey darken-4":"grey lighten-4"},[n("v-container",{staticClass:"text-center",attrs:{fluid:""}},[n("v-row",e._l(e.ourTeam,(function(t,i){return n("v-col",{key:"person-"+i,staticClass:"column",attrs:{cols:"12",md:""+e.size}},[n("v-sheet",{staticClass:"py-5 px-5",attrs:{shaped:"","max-width":"400px"}},[n("div",{staticClass:"text-h5 text-uppercase font-weight-black mt-6 mb-2"},[e._v("\n            "+e._s(t.name)+"\n          ")]),e._v(" "),n("div",{staticClass:"text--disabled text-uppercase"},[e._v("\n            "+e._s(t.position)+"\n          ")]),e._v(" "),n("div",{staticClass:"text-h6 mt-8"},[n("a",{staticClass:"email green--text",attrs:{href:"tel:"+t.phone}},[e._v("Tel: "+e._s(t.phone))])]),e._v(" "),n("div",{staticClass:"subtitle-1 mt-3"},[n("a",{staticClass:"email orange--text",attrs:{href:"mailto:"+t.email}},[e._v("email: "+e._s(t.email)+"\n            ")])])])],1)})),1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VCol:v.a,VContainer:c.a,VRow:d.a,VSheet:h.a})},569:function(e,t,n){var content=n(570);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("56407fa2",content,!0,{sourceMap:!1})},570:function(e,t,n){var o=n(15)(!1);o.push([e.i,'.theme--light.v-timeline:before{background:rgba(0,0,0,.12)}.theme--light.v-timeline .v-timeline-item__dot{background:#fff}.theme--light.v-timeline .v-timeline-item .v-card:before{border-right-color:rgba(0,0,0,.12)}.theme--dark.v-timeline:before{background:hsla(0,0%,100%,.12)}.theme--dark.v-timeline .v-timeline-item__dot{background:#1e1e1e}.theme--dark.v-timeline .v-timeline-item .v-card:before{border-right-color:rgba(0,0,0,.12)}.v-timeline{padding-top:24px;position:relative}.v-timeline:before{bottom:0;content:"";height:100%;position:absolute;top:0;width:2px}.v-timeline-item{display:flex;padding-bottom:24px}.v-timeline-item__body{position:relative;height:100%;flex:1 1 auto}.v-timeline-item__divider{position:relative;min-width:96px;display:flex;align-items:center;justify-content:center}.v-timeline-item__dot{z-index:2;border-radius:50%;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);height:38px;left:calc(50% - 19px);width:38px}.v-timeline-item__dot .v-timeline-item__inner-dot{height:30px;margin:4px;width:30px}.v-timeline-item__dot--small{height:24px;left:calc(50% - 12px);width:24px}.v-timeline-item__dot--small .v-timeline-item__inner-dot{height:18px;margin:3px;width:18px}.v-timeline-item__dot--large{height:52px;left:calc(50% - 26px);width:52px}.v-timeline-item__dot--large .v-timeline-item__inner-dot{height:42px;margin:5px;width:42px}.v-timeline-item__inner-dot{border-radius:50%;display:flex;justify-content:center;align-items:center}.v-timeline-item__opposite{flex:1 1 auto;align-self:center;max-width:calc(50% - 48px)}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before){flex-direction:row-reverse}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:right}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:left}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body>.v-card:before,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:before{transform:rotate(0);left:-10px;right:auto}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body>.v-card:before,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:before{transform:rotate(180deg);left:auto;right:-10px}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after .v-timeline-item__body,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after){flex-direction:row}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:left}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:right}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body>.v-card:before,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:before{transform:rotate(180deg);right:-10px;left:auto}.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body>.v-card:before,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:before{transform:rotate(0);right:auto;left:-10px}.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before .v-timeline-item__body,.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n):not(.v-timeline-item--after) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-timeline-item__body>.v-card:not(.v-card--flat):after,.v-timeline-item__body>.v-card:not(.v-card--flat):before{content:"";position:absolute;border-top:10px solid transparent;border-bottom:10px solid transparent;border-right:10px solid #000;top:calc(50% - 10px)}.v-timeline-item__body>.v-card:not(.v-card--flat):after{border-right-color:inherit}.v-timeline-item__body>.v-card:not(.v-card--flat):before{top:calc(50% - 8px)}.v-timeline--align-top .v-timeline-item__dot{align-self:start}.v-timeline--align-top .v-timeline-item__body>.v-card:before{top:12px}.v-timeline--align-top .v-timeline-item__body>.v-card:after{top:10px}.v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse):before{left:calc(50% - 1px);right:auto}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense):before,.v-application--is-rtl .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse):before{left:auto;right:calc(50% - 1px)}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense):before{right:auto;left:calc(50% - 1px)}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after){flex-direction:row}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:left}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__opposite,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__opposite{text-align:right}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body>.v-card:before,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:before{transform:rotate(180deg);right:-10px;left:auto}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body>.v-card:before,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body>.v-card:before{transform:rotate(0);right:auto;left:-10px}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--before .v-timeline-item__body,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(odd):not(.v-timeline-item--after) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before){flex-direction:row-reverse}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:right}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__opposite,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__opposite{text-align:left}.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body>.v-card:before,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:before{transform:rotate(0);left:-10px;right:auto}.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body>.v-card:before,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body>.v-card:before{transform:rotate(180deg);left:auto;right:-10px}.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item--after .v-timeline-item__body,.v-timeline--reverse:not(.v-timeline--dense) .v-timeline-item:nth-child(2n):not(.v-timeline-item--before) .v-timeline-item__body{max-width:calc(50% - 48px)}.v-application--is-ltr .v-timeline--reverse.v-timeline--dense:before{right:47px;left:auto}.v-application--is-ltr .v-timeline--dense:not(.v-timeline--reverse):before,.v-application--is-rtl .v-timeline--reverse.v-timeline--dense:before{right:auto;left:47px}.v-application--is-rtl .v-timeline--dense:not(.v-timeline--reverse):before{left:auto;right:47px}.v-timeline--dense .v-timeline-item{flex-direction:row-reverse!important}.v-application--is-ltr .v-timeline--dense .v-timeline-item .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:before{transform:rotate(0);left:-10px;right:auto}.v-application--is-rtl .v-timeline--dense .v-timeline-item .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:before{transform:rotate(180deg);left:auto;right:-10px}.v-timeline--dense .v-timeline-item__body{max-width:calc(100% - 96px)}.v-timeline--dense .v-timeline-item__opposite{display:none}.v-timeline--reverse.v-timeline--dense .v-timeline-item{flex-direction:row!important}.v-application--is-ltr .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body .v-card:after,.v-application--is-ltr .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:before{transform:rotate(180deg);right:-10px;left:auto}.v-application--is-rtl .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body .v-card:after,.v-application--is-rtl .v-timeline--reverse.v-timeline--dense .v-timeline-item .v-timeline-item__body>.v-card:before{transform:rotate(0);right:auto;left:-10px}.v-timeline-item--fill-dot .v-timeline-item__inner-dot{height:inherit;margin:0;width:inherit}',""]),e.exports=o},585:function(e,t,n){var content=n(621);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("e810a50c",content,!0,{sourceMap:!1})},610:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{years:[{color:"orange",year:"1971",title:"CBS Is Established",info:"In the year 1971, 50 years ago, CBS was first established in Oakham. Back then,it designed and manufacture cable jointing equipment. Before this, the famous building was a food hall for the locals during the war."},{color:"orange",year:"1980",title:"CBS Diversifies",info:"In the year 1971, 50 years ago, CBS was first established in Oakham. Back then,it designed and manufacture cable jointing equipment. Before this, the famous building was a food hall for the locals during the war."},{color:"orange",year:"1990",title:"CBS gains big clients",info:"In the year 1971, 50 years ago, CBS was first established in Oakham. Back then,it designed and manufacture cable jointing equipment. Before this, the famous building was a food hall for the locals during the war."},{color:"orange",year:"2000",title:"Where we are Now",info:"In the year 1971, 50 years ago, CBS was first established in Oakham. Back then,it designed and manufacture cable jointing equipment. Before this, the famous building was a food hall for the locals during the war."}]}}},l=n(49),r=n(69),m=n.n(r),v=n(515),c=(n(8),n(5),n(7),n(11),n(9),n(12),n(1)),d=(n(569),n(3)),h=n(14);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var _=Object(d.a)(h.a).extend({name:"v-timeline",provide:function(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse},this.themeClasses)}},render:function(e){return e("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}}),y=(n(254),n(50)),x=n(18);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function C(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var k=Object(d.a)(x.a,h.a).extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(y.a,{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var data=this.setBackgroundColor(this.color);return this.$createElement("div",C({staticClass:"v-timeline-item__inner-dot"},data),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider:function(){var e=[];return this.hideDot||e.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},e)},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(e){var t=[this.genBody(),this.genDivider()];return this.$slots.opposite&&t.push(this.genOpposite()),e("div",{staticClass:"v-timeline-item",class:C({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right},this.themeClasses)},t)}}),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"py-16",attrs:{id:"timeline"}},[n("v-container",[[n("v-timeline",e._l(e.years,(function(t,i){return n("v-timeline-item",{key:i,attrs:{color:t.color,small:""},scopedSlots:e._u([{key:"opposite",fn:function(){return[n("span",{class:"headline font-weight-bold "+t.color+"--text",domProps:{textContent:e._s(t.year)}})]},proxy:!0}],null,!0)},[e._v(" "),n("div",{staticClass:"py-4"},[n("h2",{class:"headline font-weight-light mb-4 "+t.color+"--text"},[e._v("\n              "+e._s(t.title)+"\n            ")]),e._v(" "),n("div",{staticClass:"black--text"},[e._v("\n              "+e._s(t.info)+"\n            ")])])])})),1)]],2)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VContainer:v.a,VTimeline:_,VTimelineItem:k})},620:function(e,t,n){"use strict";n(585)},621:function(e,t,n){var o=n(15)(!1);o.push([e.i,".about-enter-active,.about-leave-active{transition:opacity .5s}.about-enter,.about-leave-active{opacity:0}",""]),e.exports=o},686:function(e,t,n){"use strict";n.r(t);var o={transition:"about",data:function(){return{heroAlt:[{src:"",heading:" About Us ",icon:"mdi-account"}],ourTeam:[{name:"Andy Sibun",position:"Technical Manager",phone:"01572 898515",email:"andy.sibun@cbsproducts.com",photo:""},{name:"Robert Davidson",position:"Managing Director",phone:"01572 898501",email:"robert.davidson@cbsproducts.com",photo:""},{name:"Mike Turney",position:"Finance Director",phone:"01572 898522",email:"mike.turney@cbsproducts.com",photo:""}]}},head:function(){return{title:"About Us",meta:[{hid:"description",name:"description",content:"Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem"}]}}},l=(n(620),n(49)),r=n(69),m=n.n(r),v=n(148),c=n(504),d=n(515),h=n(238),f=n(505),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{class:e.$vuetify.theme.dark?"grey darken-4":"grey lighten-4"},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("SectionsHeroAlt",{class:e.$vuetify.theme.dark?"grey darken-4":"white",attrs:{"hero-alt":e.heroAlt}}),e._v(" "),n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"6"}},[n("h3",{staticClass:"text-h4 text-center font-weight-light mb-xs-4 mt-10 mb-5",class:(e.$vuetify.theme.dark,"black--text"),staticStyle:{"border-bottom":"2px solid #fde36d","box-shadow":"0 4px 6px -6px #222"}},[e._v("\n              WHO ARE WE?\n            ")])]),e._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-btn",{staticClass:"my-3 mb-xs-4 mt-10 mb-5",attrs:{"x-large":e.$vuetify.breakpoint.smAndUp,text:"",outlined:"",white:""}},[n("v-icon",{attrs:{left:"",large:"",color:"primary"}},[e._v("mdi-play")]),n("a",{staticClass:"learn black--text",attrs:{href:"#team"}},[e._v("Meet The Team")])],1)],1),e._v(" "),n("v-col",{staticClass:"black--text",staticStyle:{"line-height":"30px","font-size":"15px","margin-bottom":"20px"},attrs:{cols:"12",md:"6"}},[n("p",[e._v("\n              CBS Products (KT), Ltd. is a leading provider of specialised\n              equipment solutions for the construction of power transmission\n              lines and telecommunications networks around the world.\n              Established in 1971 in Oakham, Rutland, England, the company\n              began to design and manufacture cable jointing equipment and\n              gradually diversified into winching equipment for the power\n              transmission industry. With the de-regulation of the electricity\n              industry, power companies entered the field of\n              telecommunications, installing fibre optic cables along\n              transmission line networks. CBS seized this opportunity to\n              develop and build a line of pullers, tensioners and running out\n              blocks for high production cable placing.\n            ")]),e._v(" "),n("div",{staticClass:"text-h4 pa-5 my-4 font-weight-thin black--text"},[e._v("\n              CBS has become the partner of choice in a number of high\n              profile, international fibre optic cable projects around the\n              globe.\n            ")])]),e._v(" "),n("v-col",{staticClass:"black--text",staticStyle:{"line-height":"30px","font-size":"15px","margin-bottom":"20px"},attrs:{cols:"12",md:"6"}},[n("p",[e._v("\n              Our success in the UK telecoms market meant that the company’s\n              expertise and know-how rapidly came to the attention of the\n              major players in the realm of fibre optic cable. Consequently,\n              CBS has become the partner of choice in a number of high\n              profile, international fibre optic cable projects around the\n              globe in which our company has demonstrated its prowess in\n              developing innovative solutions capable of withstanding extreme\n              conditions, both of climate and terrain. Towards the end of the\n              90’s the company’s continuing quest for new horizons was\n              promoted by achieving the internationally recognised Quality\n              Standard, BS EN ISO 9001. The development of the Tornado series\n              of fibre optic cable blowing machines proved highly successful\n              both in the UK and global telecom markets. In the UK, the\n              Tornado out-performed its competition in a most demanding\n              evaluation, enabling CBS to win a highly coveted contract as\n              exclusive suppliers of cable blowing equipment to British\n              Telecommunications (BT).\n            ")]),e._v(" "),n("p",[e._v("\n              In 2004, CBS joined forces with GMP Tools USA to further enhance\n              the global reach and breadth of our outside plant equipment\n              capabilities. As of June 2017 the business of GMP Tools and CBS\n              Products were acquired by Klein Tools of the USA. Renamed CBS\n              Products (KT), Ltd., we are the successors to the same\n              engineering talent and innovative solution providers as ever.\n              Empowered with the financial and engineering resources of Klein\n              Tools USA, CBS Products has what it takes to keep your project\n              running smoothly and on schedule whether you’re in telecoms,\n              CATV or power transmission line construction; which brings us to\n              the most compelling reason to consider CBS Products when\n              planning your next cable deployment project: your bottom line.\n            ")])]),e._v(" "),n("h3",{staticClass:"text-h4 text-center font-weight-light mb-xs-4 mt-10 mb-5",class:(e.$vuetify.theme.dark,"black--text"),staticStyle:{"border-bottom":"2px solid #fde36d",width:"500px","box-shadow":"0 4px 6px -6px #222"}},[e._v("\n            OUR JOURNEY\n          ")]),e._v(" "),n("SectionsTimeline"),e._v(" "),n("h3",{staticClass:"text-h4 text-center font-weight-light mb-xs-4 mt-10 mb-5",class:(e.$vuetify.theme.dark,"black--text"),staticStyle:{"border-bottom":"2px solid #fde36d",width:"500px","box-shadow":"0 4px 6px -6px #222"},attrs:{id:"team"}},[e._v("\n            MEET THE TEAM\n          ")]),e._v(" "),n("SectionsTeam",{staticClass:"mb-10",attrs:{"our-team":e.ourTeam}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{SectionsHeroAlt:n(526).default,SectionsTimeline:n(610).default,SectionsTeam:n(540).default}),m()(component,{VBtn:v.a,VCol:c.a,VContainer:d.a,VIcon:h.a,VRow:f.a})}}]);