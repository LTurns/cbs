(window.webpackJsonp=window.webpackJsonp||[]).push([[47,9,20],{473:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return f}));var o=n(474),r=n(1),l=Object(r.h)("v-card__actions"),c=Object(r.h)("v-card__subtitle"),d=Object(r.h)("v-card__text"),f=Object(r.h)("v-card__title");o.a},478:function(t,e,n){var content=n(489);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("212da76e",content,!0,{sourceMap:!1})},487:function(t,e,n){var content=n(493);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("0f5cb308",content,!0,{sourceMap:!1})},488:function(t,e,n){"use strict";n(478)},489:function(t,e,n){var o=n(16)(!1);o.push([t.i,".classy-bq{border-left:2px solid #fde36d;box-shadow:4px 0 6px -6px #222;margin:1rem 20px;padding:.7em 25px}.blockquote-section{width:90%;margin:0 auto;opacity:.95;padding:20px;text-align:left}@media screen and (max-width:800px){.blockquote-section{width:100%;margin:0 auto;opacity:.95;padding:10px}}",""]),t.exports=o},490:function(t,e,n){"use strict";n.r(e);var o={props:{text:{type:String,default:function(){return"black--text"}}}},r=(n(488),n(45)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"pt-5 pb-5 blockquote-section"},[n("blockquote",{class:t.text+" classy-bq"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},492:function(t,e,n){"use strict";n(487)},493:function(t,e,n){var o=n(16)(!1);o.push([t.i,'.zoom[data-v-657e646f]{transform:scale(1.025) translateY(-10px)}.notzoom[data-v-657e646f],.zoom[data-v-657e646f]{transition:transform .2s}.image[data-v-657e646f]{display:block;margin-left:auto;margin-right:auto}.card h3[data-v-657e646f]{font-size:14px}.link[data-v-657e646f]{text-decoration:none;margin-left:auto;margin-right:auto;display:block;width:100px}.ribbon[data-v-657e646f]{width:150px;height:150px;overflow:hidden;position:absolute}.ribbon[data-v-657e646f]:after,.ribbon[data-v-657e646f]:before{position:absolute;z-index:-1;content:"";display:block;border:5px solid #f5773c}.ribbon span[data-v-657e646f]{position:absolute;display:block;width:225px;padding:15px 0;background-color:#f5773c;box-shadow:0 5px 10px rgba(0,0,0,.1);color:#fff;font:600 13px/1 "Lato",sans-serif;text-shadow:0 1px 1px rgba(0,0,0,.2);text-transform:uppercase;text-align:center}.ribbon-bottom-left[data-v-657e646f]{bottom:-10px;left:-10px}.ribbon-bottom-left[data-v-657e646f]:after,.ribbon-bottom-left[data-v-657e646f]:before{border-bottom-color:transparent;border-left-color:transparent}.ribbon-bottom-left[data-v-657e646f]:before{bottom:0;right:0}.ribbon-bottom-left[data-v-657e646f]:after{top:0;left:0}.ribbon-bottom-left span[data-v-657e646f]{right:-25px;bottom:30px;transform:rotate(45deg)}',""]),t.exports=o},494:function(t,e,n){"use strict";n.r(e);var o={props:{data:{type:Array,default:function(){return[]}},color:{type:String,default:function(){return"feature"}}}},r=(n(492),n(45)),l=n(60),c=n.n(l),d=n(132),f=n(474),h=n(473),m=n(462),v=n(471),x=n(495),w=n(209),y=n(176),_=n(463),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{class:t.color},[n("v-container",[n("v-row",{attrs:{mb:"10"}},t._l(t.data,(function(e,o){return n("v-col",{key:o,attrs:{md:"4"}},[n("v-hover",{staticClass:"card",scopedSlots:t._u([{key:"default",fn:function(o){var r=o.hover;return[n("v-card",{staticClass:"mx-auto transition-swing",class:r?"zoom":"notzoom",attrs:{elevation:r?24:4,color:e.color,"max-width":"500",height:"630"}},[n("h4",{staticClass:"\n                text-uppercase text-center\n                black--text\n                mt-5\n                pt-5\n                pl-5\n                pr-5\n                pb-5\n              ",staticStyle:{"letter-spacing":"0.15em","font-size":"20px"},domProps:{textContent:t._s(e.name)}}),t._v(" "),n("v-img",{staticClass:"image grey lighten-2 rounded-lg mt-5 mb-10",attrs:{src:e.mainImg,alt:"",width:"250","lazy-src":e.mainImg,"aspect-ratio":"1"}}),t._v(" "),n("v-card-text",{staticClass:"subtitle-1 black--text",staticStyle:{"text-align":"center",padding:"5%"},domProps:{textContent:t._s(e.intro)}}),t._v(" "),n("div",{staticStyle:{position:"absolute",bottom:"0",right:"10px",display:"block","margin-right":"5%"}},[e.hasSubCategories?t._e():n("div",[n("nuxt-link",{staticClass:"link",attrs:{to:"/product/"+e._id}},[n("v-btn",{staticClass:"my-3",attrs:{"x-large":"",text:"",color:"green darken-3",outlined:"",black:""}},[n("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v("View")],1)],1)],1),t._v(" "),e.hasSubCategories?n("div",[n("nuxt-link",{staticClass:"link align-center",attrs:{to:"/category/"+e.name.toLowerCase()}},[n("v-btn",{staticClass:"my-3",attrs:{"x-large":t.$vuetify.breakpoint.smAndUp,text:"",color:"green darken-2",outlined:"",bold:"",black:""}},[n("v-icon",{attrs:{left:"",large:""}},[t._v("mdi-play")]),t._v("View")],1)],1)],1):t._e()]),t._v(" "),e.productId.length?n("div",[n("div",{staticClass:"pa-5",staticStyle:{position:"absolute",bottom:"0",left:"0",display:"block","margin-left":"2%"}},[n("div",{staticClass:"d-inline mt-10 pa-2 blue-grey darken-4 white--text"},[t._v("\n                  ID\n                ")]),t._v(" "),n("div",{staticClass:"d-inline yellow darken-2 black--text pa-2"},[t._v("\n                  "+t._s(e.productId)+"\n                ")])])]):n("div",[n("div",{staticClass:"ribbon ribbon-bottom-left"},[n("span",[t._v("More Products")])])])],1)]}}],null,!0)})],1)})),1)],1)],1)}),[],!1,null,"657e646f",null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:f.a,VCardText:h.c,VCol:m.a,VContainer:v.a,VHover:x.a,VIcon:w.a,VImg:y.a,VRow:_.a})},515:function(t,e,n){var content=n(542);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("1124fec4",content,!0,{sourceMap:!1})},541:function(t,e,n){"use strict";n(515)},542:function(t,e,n){var o=n(16)(!1);o.push([t.i,"@media screen and (min-width:1000px){.mainfonttitle{font-size:3.6rem;max-width:16ch;margin-bottom:1%}.containerstyle{width:100vw;height:100vh}}@media screen and (min-width:1300px){.containerstyle{height:72vh}}@media screen and (min-width:1900px){.mainfonttitle{font-size:4.5rem;margin-bottom:1%}}@media screen and (max-width:1000px){.mainfonttitle{font-size:3rem;max-width:30ch;margin-bottom:5%}}@media screen and (max-width:700px){.mainfonttitle{font-size:3rem;margin-bottom:5%;margin-top:7%}}",""]),t.exports=o},570:function(t,e,n){var content=n(663);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("1b7833da",content,!0,{sourceMap:!1})},574:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{brandsLogo:["coinlogo.png","FIA-logo.png","risqslogo.png","sgslogo.jpeg","stamp.png"]}}},r=n(45),l=n(60),c=n.n(l),d=n(474),f=n(462),h=n(471),m=n(453),v=n(176),x=n(207),w=n(463),y=n(138),_=n(2),C=n(102),k=n(9),S=n(14),A=n(0).a.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(_.a)({},this.activeClass,this.isActive)}),element):(Object(S.c)("v-item should only contain a single element",this),element)):(Object(S.c)("v-item is missing a default scopedSlot",this),null);var element}}),V=(Object(k.a)(A,Object(C.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),Object(k.a)(A,Object(C.a)("slideGroup")).extend({name:"v-slide-item"})),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4",attrs:{id:"sponsors"}},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"4","align-self":"center"}},[n("h3",{staticClass:"text-h4 text-center font-weight-light mb-xs-4",class:t.$vuetify.theme.dark?"grey--text":null},[t._v("\n          AWARDS AND CLIENTS\n        ")])]),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"8"}},[n("v-slide-group",{attrs:{"show-arrows":"",draggable:"true"}},[t._l(t.brandsLogo,(function(e,o){return[n("v-slide-item",{key:e,model:{value:t.brandsLogo,callback:function(e){t.brandsLogo=e},expression:"brandsLogo"}},[n("v-card",{staticClass:"mx-4 pa-0",class:t.$vuetify.theme.dark?"white":"grey lighten-4",attrs:{height:"90",width:"100",flat:""}},[n("v-img",{attrs:{height:"90",contain:"",src:"/brands/"+e}})],1)],1),t._v(" "),o<t.brandsLogo.length-1?n("v-responsive",{key:o,staticClass:"my-auto",attrs:{height:"50"}},[n("v-divider",{attrs:{vertical:""}})],1):t._e()]}))],2)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:d.a,VCol:f.a,VContainer:h.a,VDivider:m.a,VImg:v.a,VResponsive:x.a,VRow:w.a,VSlideGroup:y.b,VSlideItem:V})},582:function(t,e,n){"use strict";n.r(e);var o={components:{Categories:n(543).default},data:function(){return{carouselsData:[{src:"orangewireheader.jpg",heading:"LEADERS IN ADVANCED CABLE INSTALLATION",subHeading:"CBS Products is at the forefront of cabling technology, the design and manufacture of installation equipment for HV Transmission towers, LV Distribution lines, Railway Tracksides and underground CATV / Telecommunication networks, including the handling of Fibre Optic Cables, for projects around the world. We also offer a comprehensive range of standard equipment."},{src:"DSC_1491-1.jpeg",heading:"CELEBRATING 50 YEARS OF CBS",subHeading:"CBS Products has been going for 50 years - and what a ride it's been! Visit the About section to view more about our incredible team and it's history."},{src:"cable-image.jpg",heading:"WITH A MULTITUDE OF PRODUCTS AND SERVICES",subHeading:"CBS Products currently offers a large selection of services. These include Fibre Blowing, Telecoms, Client Tools and Utilities. Scroll down or visit the Products tab to view more information."},{src:"sigmund-rVRvR9VUIoQ-unsplash.jpg",heading:"INTRODUCING BATTERY POWERED PRODUCTS",subHeading:"This year is not only exciting for our anniversary, it is also the year we reveal our latest product addition - and it is battery powered!"}]}}},r=(n(541),n(45)),l=n(60),c=n.n(l),d=n(132),f=n(462),h=n(471),m=n(463),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"hero"}},[n("v-container",{staticClass:"containerstyle"},[n("v-row",{staticStyle:{"margin-top":"3%"},attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[n("div",{staticClass:"mainfonttitle grey--text text--lighten-4 font-weight-black",staticStyle:{"border-bottom":"2px solid #fde36d","box-shadow":"0 4px 6px -6px #222","line-height":"1"}},[t._v("\n          "+t._s(t.carouselsData[0].heading.toUpperCase())+"\n        ")]),t._v(" "),n("p",{staticClass:"grey--text text--lighten-4",staticStyle:{"font-size":"17px","font-weight":"bold","margin-top":"5%"}},[t._v("\n          "+t._s(t.carouselsData[0].subHeading)+"\n        ")]),t._v(" "),n("v-btn",{staticClass:"yellow darken-1 text-center bold",attrs:{"x-large":t.$vuetify.breakpoint.smAndUp}},[t._v("With a new battery powered range")])],1),t._v(" "),n("v-col",{staticClass:"right black--text",attrs:{cols:"12",md:"6",sm:"12"}},[n("div",[n("categories")],1)])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCol:f.a,VContainer:h.a,VRow:m.a})},662:function(t,e,n){"use strict";n(570)},663:function(t,e,n){var o=n(16)(!1);o.push([t.i,".hero{background-image:url(https://cbs-images.s3.amazonaws.com/wires.jpeg);background-size:cover}.home-enter-active,.home-leave-active{transition:opacity .5s}.home-enter,.home-leave-active{opacity:0}",""]),t.exports=o},700:function(t,e,n){"use strict";n.r(e);var o=n(20),r=(n(81),n(36),{transition:"home",data:function(){return{filteredList:""}},created:function(){this.getAllMusics()},methods:{getAllMusics:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Access-Control-Allow-Origin":"*"}},e.prev=1,e.next=4,t.$axios.get("https://cbsbackend.herokuapp.com/api/products",n);case 4:o=e.sent,t.filteredList=o.data.slice(0,3),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),new Error("Error Fetching Products");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()}}}),l=(n(662),n(45)),c=n(60),d=n.n(c),f=n(462),h=n(463),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"home"}},[n("v-col",{staticClass:"hero"},[n("SectionsHero")],1),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"grey lighten-3",attrs:{cols:"12"}},[n("SectionsBlockQuote",{attrs:{text:"black--text"}},[t._t("default",(function(){return[t._v("\n          CBS Products (KT), Ltd. is a leading provider of specialised\n          equipment solutions for the construction of power transmission lines\n          and telecommunications networks around the world. It has become the\n          partner of choice in a number of high profile, international fibre\n          optic cable projects around the globe. In the UK, the Tornado\n          out-performed its competition in a most demanding evaluation,\n          enabling CBS to win a highly coveted contract as exclusive suppliers\n          of cable blowing equipment to British Telecommunications (BT).\n        ")]}))],2)],1)],1),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",[n("div",{staticClass:"fonttitle black--text text--lighten-4 font-weight-black",staticStyle:{"border-bottom":"2px solid #fde36d","box-shadow":"0 4px 6px -6px #222","line-height":"1",padding:"3%","margin-left":"1%","margin-right":"1%","margin-top":"3%"},attrs:{align:"center"}},[t._v("\n        FEATURED PRODUCTS\n      ")]),t._v(" "),n("SectionsFeaturedProducts",{attrs:{data:t.filteredList}})],1)],1),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"blue-grey darken-4"},[n("SectionsBlockQuote",{attrs:{text:"white--text"}},[t._t("default",(function(){return[n("h3",{staticClass:"mb-10"},[t._v("CORONAVIRUS UPDATE")]),t._v(" "),n("p",[t._v("\n            CBS remains open and are working hard to provide essential\n            services to our telecommunications and electricity industries\n            during these difficult and uncertain times. We want to assure you\n            that we are taking the current situation very seriously, we have\n            staff working from home where possible and have implemented extra\n            precautions throughout the building to ensure the health and\n            safety of our staff, customers and suppliers. As you will be\n            aware, the situation is constantly changing, as is the advice\n            issued by the Government and the World Health Organisation.\n          ")]),t._v(" "),n("p",[t._v("\n            As a company, we will be listening to the official advice and will\n            act in accordance with it, together with reacting to the\n            situations of both our customers and suppliers, many of which are\n            already operating at reduced levels. Our business may be disrupted\n            at some point in the future but, for now, it is business as usual.\n            Our thoughts are with those who have been affected by the spread\n            of COVID-19. Please, follow the advise issued by the Government\n            and W.H.O. Stay Safe.\n          ")])]}))],2)],1)],1),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",[n("SectionsBrands")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{SectionsHero:n(582).default,SectionsBlockQuote:n(490).default,SectionsFeaturedProducts:n(494).default,SectionsBrands:n(574).default}),d()(component,{VCol:f.a,VRow:h.a})}}]);