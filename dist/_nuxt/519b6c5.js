(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{518:function(t,e,r){"use strict";r(8),r(5),r(7),r(11),r(9),r(12);var o=r(1),n=(r(25),r(195),r(519),r(250)),c=r(251),d=r(60),l=r(3);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(l.a)(c.a,d.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},d.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.a.options.computed.classes.call(this))},styles:function(){var style=h({},n.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},519:function(t,e,r){var content=r(520);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("e23b7040",content,!0,{sourceMap:!1})},520:function(t,e,r){var o=r(15)(!1);o.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=o},535:function(t,e,r){"use strict";var o=r(156),n=r(51),c=r(3),d=r(13);e.a=Object(c.a)(o.a,n.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(d.c)("v-hover should only contain a single element",this),element)):(Object(d.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},539:function(t,e,r){var content=r(551);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("5187a5b8",content,!0,{sourceMap:!1})},550:function(t,e,r){"use strict";r(539)},551:function(t,e,r){var o=r(15)(!1);o.push([t.i,'.category[data-v-0f88ea70]{text-decoration:none;color:#000;font-size:13px;text-align:center}.zoom[data-v-0f88ea70]{transform:scale(1.025) translateY(-10px);box-shadow:3px 1px 7px #050505!important}.notzoom[data-v-0f88ea70],.zoom[data-v-0f88ea70]{transition:transform .2s}.notzoom[data-v-0f88ea70]{box-shadow:3px 1px 7px #0a0a0a!important}@media screen and (min-width:1500px){h3[data-v-0f88ea70]{font-size:18px}}@media screen and (max-width:1000px){.card[data-v-0f88ea70]{min-height:100px}}.box[data-v-0f88ea70]{background-color:transparent;border-radius:3px;color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:400px;height:300px;transform-style:preserve-3d;perspective:2000px;transition:.4s;text-align:center}.box[data-v-0f88ea70]:before{background:transparent;border-top:20px solid #fff;border-left:20px solid #fff}.box[data-v-0f88ea70]:after,.box[data-v-0f88ea70]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;box-sizing:border-box}.box[data-v-0f88ea70]:after{border-bottom:20px solid #fff;border-right:20px solid #fff}.box .fas[data-v-0f88ea70]{font-size:25px;height:50px;width:50px;line-height:50px!important;background-color:#fff;color:#2c3a47}.box .fa2[data-v-0f88ea70]{position:absolute;bottom:0;right:0;z-index:1}.box .text[data-v-0f88ea70]{position:absolute;top:30px;left:-30px;width:calc(100% + 60px);height:calc(100% - 60px);background-color:#2c3a47;border-radius:3px;transition:.4s}.box .text .fa1[data-v-0f88ea70]{position:absolute;top:0;left:0}.box .text div[data-v-0f88ea70]{position:absolute;top:50%;left:0;transform:translateY(-50%);text-align:center;width:100%;padding:30px 60px;line-height:1.5;box-sizing:border-box}.box .text div h3[data-v-0f88ea70]{font-size:30px;margin-bottom:5px}.box .text div p[data-v-0f88ea70]{font-size:15px}.box[data-v-0f88ea70]:hover{transform:translate(-50%,-50%) rotateY(-20deg) skewY(3deg)}.box:hover .text[data-v-0f88ea70]{transform:rotateY(20deg) skewY(-3deg)}',""]),t.exports=o},554:function(t,e,r){"use strict";r.r(e);var o={props:{color:{type:String,default:function(){return"rgb(255, 0, 0, 0)"}},text:{type:String,default:function(){return"text-uppercase black--text"}}},data:function(){return{axiosCards:"",cards:[{name:"OVERHEAD LINE",image:"running-out-blocks.png",link:"/overheadline",margin:"5"},{name:"FIBRE INSTALLATION",image:"hurricane-4.png",link:"/fibreinstallation",margin:"5"},{name:"KLEIN TOOLS",image:"klein-tools.png",link:"/kleintools",margin:"10"},{name:"WINCHES AND TRAILERS",image:"winch-2.png",link:"/winchesandtrailers",margin:"0"}]}},created:function(){}},n=(r(550),r(49)),c=r(69),d=r.n(c),l=r(518),v=r(504),h=r(535),f=r(505),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("v-row",{attrs:{fillheight:""}},t._l(t.cards,(function(e){return r("v-col",{directives:[{name:"hover",rawName:"v-hover"}],key:e.title,staticClass:"column",attrs:{cols:"12",md:"6"}},[r("v-hover",{staticClass:"card",scopedSlots:t._u([{key:"default",fn:function(o){var n=o.hover;return[r("v-card",{class:"card grey lighten-4 pa-md-5 mx-lg-auto",style:{height:"200px",maxWidth:"800px"},attrs:{color:t.color,elevation:n?24:5,shaped:"",justify:"center",align:"center"}},[r("nuxt-link",{staticClass:"category",attrs:{exact:"",to:e.link}},[r("img",{style:"width: 130px; height: auto; margin-top: "+e.margin+"%",attrs:{src:e.image}}),t._v(" "),r("h3",{class:t.text,staticStyle:{"letter-spacing":"0.15em",bottom:"10%",position:"absolute","margin-left":"5%","margin-right":"auto"},domProps:{textContent:t._s(e.name)}})])],1)]}}],null,!0)})],1)})),1)],1)}),[],!1,null,"0f88ea70",null);e.default=component.exports;d()(component,{VCard:l.a,VCol:v.a,VHover:h.a,VRow:f.a})}}]);