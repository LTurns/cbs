(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{561:function(t,e,r){var content=r(580);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("1628898d",content,!0,{sourceMap:!1})},579:function(t,e,r){"use strict";r(561)},580:function(t,e,r){var o=r(15)(!1);o.push([t.i,'.zoom[data-v-1d7e92e5]{transform:scale(1.025) translateY(-10px)}.notzoom[data-v-1d7e92e5],.zoom[data-v-1d7e92e5]{transition:transform .2s}.image[data-v-1d7e92e5]{display:block;margin-left:auto;margin-right:auto}.card h3[data-v-1d7e92e5]{font-size:14px}.link[data-v-1d7e92e5]{text-decoration:none;margin-left:auto;margin-right:auto;display:block;width:100px}.ribbon[data-v-1d7e92e5]{width:150px;height:150px;overflow:hidden;position:absolute}.ribbon[data-v-1d7e92e5]:after,.ribbon[data-v-1d7e92e5]:before{position:absolute;z-index:-1;content:"";display:block;border:5px solid #f5773c}.ribbon span[data-v-1d7e92e5]{position:absolute;display:block;width:225px;padding:15px 0;background-color:#f5773c;box-shadow:0 5px 10px rgba(0,0,0,.1);color:#fff;font:600 13px/1 "Lato",sans-serif;text-shadow:0 1px 1px rgba(0,0,0,.2);text-transform:uppercase;text-align:center}.ribbon-bottom-left[data-v-1d7e92e5]{bottom:-10px;left:-10px}.ribbon-bottom-left[data-v-1d7e92e5]:after,.ribbon-bottom-left[data-v-1d7e92e5]:before{border-bottom-color:transparent;border-left-color:transparent}.ribbon-bottom-left[data-v-1d7e92e5]:before{bottom:0;right:0}.ribbon-bottom-left[data-v-1d7e92e5]:after{top:0;left:0}.ribbon-bottom-left span[data-v-1d7e92e5]{right:-25px;bottom:30px;transform:rotate(45deg)}',""]),t.exports=o},603:function(t,e,r){var content=r(658);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("de55ba38",content,!0,{sourceMap:!1})},617:function(t,e,r){"use strict";r.r(e);var o={props:{data:{type:Object,default:function(){}},color:{type:String,default:function(){return"feature"}}}},n=(r(579),r(49)),c=r(69),l=r.n(c),d=r(148),m=r(518),h=r(517),v=r(504),f=r(515),x=r(535),y=r(238),w=r(190),k=r(505),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{class:t.color},[r("v-container",[r("v-row",{attrs:{mb:"10"}},[r("v-col",[r("v-hover",{staticClass:"card",scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[r("v-card",{staticClass:"mx-auto transition-swing",class:o?"zoom":"notzoom",attrs:{elevation:o?24:4,color:t.data.color,"max-width":"500",height:"610"}},[r("h4",{staticClass:"\n                text-uppercase text-center\n                black--text\n                mt-5\n                pt-5\n                pl-5\n                pr-5\n                pb-5\n              ",staticStyle:{"letter-spacing":"0.15em","font-size":"20px"},domProps:{textContent:t._s(t.data.name)}}),t._v(" "),r("v-img",{staticClass:"image grey lighten-2 rounded-lg mt-5 mb-10",attrs:{src:t.data.mainImg,alt:"",width:"250","lazy-src":t.data.mainImg,"aspect-ratio":"1"}}),t._v(" "),r("v-card-text",{staticClass:"subtitle-1 black--text",staticStyle:{"text-align":"center",padding:"5%"},domProps:{textContent:t._s(t.data.intro)}}),t._v(" "),r("div",{staticStyle:{position:"absolute",bottom:"0",right:"10px",display:"block","margin-right":"5%"}},[t.data.hasSubCategories?t._e():r("div",[r("nuxt-link",{staticClass:"link",attrs:{to:"/product/"+t.data._id}},[r("v-btn",{staticClass:"my-3",attrs:{"x-large":t.$vuetify.breakpoint.smAndUp,text:"",outlined:"",black:""}},[r("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v("View")],1)],1)],1),t._v(" "),t.data.hasSubCategories?r("div",[r("nuxt-link",{staticClass:"link align-center",attrs:{to:"/category/"+t.data.name.toLowerCase()}},[r("v-btn",{staticClass:"my-3",attrs:{"x-large":t.$vuetify.breakpoint.smAndUp,text:"",outlined:"",black:""}},[r("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v("View")],1)],1)],1):t._e()]),t._v(" "),t.data.productId.length?r("div",[r("div",{staticClass:"d-inline black--text pa-2",staticStyle:{position:"absolute",bottom:"0",left:"0",display:"block","margin-left":"2%"}},[t._v("\n                "+t._s(t.data.productId)+"\n              ")])]):r("div",[r("div",{staticClass:"ribbon ribbon-bottom-left"},[r("span",[t._v("More Products")])])])],1)]}}])})],1)],1)],1)],1)}),[],!1,null,"1d7e92e5",null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:m.a,VCardText:h.c,VCol:v.a,VContainer:f.a,VHover:x.a,VIcon:y.a,VImg:w.a,VRow:k.a})},657:function(t,e,r){"use strict";r(603)},658:function(t,e,r){var o=r(15),n=r(659),c=r(660),l=o(!1),d=n(c);l.push([t.i,'.input:focus{outline:none!important;border:1px solid #ff0;box-shadow:0 0 5px #dad9d6}.list{font-size:14px}.configInfo{box-shadow:2px 3px 4px rgba(0,0,0,.3);margin:5%}.table{margin:5%}table tbody tr:nth-child(2n) td{background:#f3f3f3;color:#000}#about{padding-left:5px;padding-right:5px}td{font-size:14px;text-transform:uppercase;letter-spacing:1px}.video{display:block;width:600px;height:400px;margin:5% auto}.myGallery{display:grid;grid-gap:10px;grid-template-rows:repeat(auto-fit,minmax(150px,1fr 1fr 1fr))}.myGallery img{width:30%}@media screen and (max-width:600px){.table{margin:2% 2% 5%}th{padding-left:10px;padding-right:10px;font-size:14px}table td{text-align:left;font-size:11px;padding:10px}table td:last-child{border-right:none}table tbody tr:nth-child(2n) td{background:#f3efef}.video{max-width:300px;max-height:200px}}.body{padding:35px 0}.product-img{cursor:pointer;margin-top:10px}.product-title{text-transform:uppercase;margin-bottom:15px;font-size:25px;line-height:1.2em}.user-ratings{overflow:hidden;margin-bottom:10px;margin-top:5px;display:inline-block}.star-rating{display:inline-block;font-size:18px;position:relative;height:18px;line-height:18px;letter-spacing:2px;width:130px}.star-rating:before{content:"\\f005\\f005\\f005\\f005\\f123";position:absolute;top:0;left:0;color:#fc0;box-sizing:border-box}.star-rating span{overflow:hidden;float:left;top:0;left:0;height:18px;position:absolute;font-size:0}.user-ratings .total-review{vertical-align:middle;color:rgba(0,0,0,.5);box-sizing:border-box;float:right;font-size:14px;text-decoration:none}.total-review:hover{text-decoration:underline}.price{display:block;margin-bottom:10px}.price h3{display:inline-block;font-size:28px;color:#e91e63}.price del{padding:0 20px;font-size:20px;color:#9e9e9e}.prodect-details{padding-top:15px;padding-bottom:20px}.colors{padding:0;display:inline-block;margin:20px 0 0;list-style:none}.colors p{float:left;margin-top:10px;color:#000;font-weight:700;padding-right:20px}.color-box{height:35px;width:35px;margin:5px;display:inline-block;cursor:pointer;opacity:.8}.active-col{outline:1px dashed #000}.size{padding:0;display:inline-block;margin:20px 0 0;list-style:none}.size p{float:left;margin-top:10px;color:#000;font-weight:700;padding-right:38px}.size-box{padding:12px;margin:0 5px;display:inline-block;cursor:pointer;color:#000;font-weight:400}.active-siz{background-color:#b2dfdb}.product-qty{display:inline-block;margin-top:20px;width:100%}.product-qty button.items-count{font-size:18px;line-height:12px;height:40px;width:40px;color:#000}.product-qty .qty{height:40px;text-align:center;width:70px;vertical-align:top;color:#000}.qty{border:1px solid #ced4da;border-radius:2px;color:#666;font-size:15px;font-weight:700;margin:0 -5px}.sub-title{color:#000;font-weight:700;padding-right:38px}.cart-btn{margin:15px 0;border-bottom:1px solid #e5e5e5}.cart-btn i{padding:0 10px}.socal-link{padding:0;margin:20px 0 0;list-style:none;display:block}.socal-link li{list-style:none;display:inline-block;margin:0 8px}.socal-link li a{border:1px solid #ddd;color:#666;font-size:15px;line-height:36px;padding:8px 12px}.socal-link li a:hover{background:#ff5252;color:#fff}.activeimg{border:1px solid #000}.overview{margin-top:30px}:root{--primary-color:#333;--secondary-color:#444;--ternary-color:#555;--light-color:#ccc;--light-secondary-color:#ddd;--light-ternary-color:#eee;--overlay-color:rgba(0,0,0,0.7)}*{box-sizing:border-box;margin:0;padding:0}body{font-family:"Catamaran",sans-serif;line-height:1.6;color:#333;color:var(--primary-color);font-size:1.1rem}h1,h2,h3,h4{line-height:1.3}a{color:#444;color:var(--secondary-color)}ul{list-style:none}img{width:100%}.section-showcase{margin:4rem 3rem}.section-showcase h1{font-size:3rem;color:#333;color:var(--primary-color)}.section-large-text-inner h2{font-size:5rem;margin-top:1rem}.section-large-text-inner h3{font-size:2rem}.section-large-text-inner p{font-size:1.5rem;margin-top:1rem}table{border-collapse:collapse;background-color:#fff;text-align:left;overflow:hidden;width:100%}table,thead{box-shadow:0 5px 10px #e1e5ee}th{text-transform:uppercase;letter-spacing:.1rem;font-size:.7rem;font-weight:900}td,th{padding:1rem 2rem}td{color:#000}a{text-decoration:none;color:#2962ff}.status{border-radius:.2rem;background-color:red;padding:.2rem 1rem;text-align:center}.status-pending{background-color:#fff0c2;color:#a68b00}.status-paid{background-color:#c8e6c9;color:#388e3c}.status-unpaid{background-color:#ffcdd2;color:#c62828}.amount{text-align:right}tr:nth-child(2n){background-color:#f4f6fb}#small-hero{background-image:url('+d+');background-size:cover}.ribbon{width:150px;height:150px;overflow:hidden;position:absolute}.ribbon:after,.ribbon:before{position:absolute;z-index:-1;content:"";display:block;border:5px solid #f5773c}.ribbon span{position:absolute;display:block;width:225px;padding:15px 0;background-color:#f5773c;box-shadow:0 5px 10px rgba(0,0,0,.1);color:#fff;font:600 13px/1 "Lato",sans-serif;text-shadow:0 1px 1px rgba(0,0,0,.2);text-transform:uppercase;text-align:center}.zoom{transform:scale(1.025) translateY(-10px)}.notzoom,.zoom{transition:transform .2s}.image{display:block;margin-left:auto;margin-right:auto}.card h3{font-size:14px}.link{text-decoration:none;margin-left:auto;margin-right:auto;display:block;width:100px}.ribbon-bottom-left{bottom:-10px;left:-10px}.ribbon-bottom-left:after,.ribbon-bottom-left:before{border-bottom-color:transparent;border-left-color:transparent}.ribbon-bottom-left:before{bottom:0;right:0}.ribbon-bottom-left:after{top:0;left:0}.ribbon-bottom-left span{right:-25px;bottom:30px;transform:rotate(45deg)}',""]),t.exports=l},660:function(t,e,r){t.exports=r.p+"img/orangewireheader.6e5a81f.jpg"},679:function(t,e,r){"use strict";r.r(e);r(8),r(7),r(11),r(12);var o=r(1),n=r(22);r(84),r(5),r(52),r(9),r(27),r(32),r(45),r(159);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={components:{EditFeaturedProducts:r(617).default},props:{id:{default:"",type:String}},data:function(){return{item:[],categories:["Fibre Installation","Klein Tools","Winches and Trailers","Overhead Line"],allProducts:[],productArray:{name:"",id:"",category:[],productId:"",intro:"",img:[],description:[],features:[],mainImg:"",subCategory:[],videos:[],configurationIntro:[],configurationTitle:"",configurationImage:"",tables:[],accessories:[],recommendedProducts:[],countInStock:0,hasSubCategories:!1,isDraft:!1,enquiries:0},checkbox:!1,accessoryName:"",items:[],areFeatures:!0,areAccessories:!0,areConfig:!0,areVideos:!0,tutorials:"",preview:null,image:"",image_list:[],headings:["image","name","Remove"],vidHeadings:["video","name","Remove"],configHeadings:["title","table","Remove"],tab:"",video:"",videoTitle:"",recommendedProductName:"",subCategoryNames:[],subcategoryItems:[],subcategoryItem:""}},created:function(){this.getIdProduct(),this.getAllProducts(),0===this.subcategoryItems.length&&(this.productArray.hasSubCategories=!1)},methods:{showAccessories:function(){return this.productArray.accesories===[]?this.areAccessories=!1:this.areAccessories=!0,this.areAccessories},changeDescription:function(t,e){this.productArray.description[e]={_id:this.productArray.description[e]._id,paragraph:t}},changeListItem:function(t,e,i){this.productArray.features[e].list[i]={listItem:t,_id:this.productArray.features[e].list[i]._id}},isMobile:function(){return screen.width<=760},getIdProduct:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={headers:{"Access-Control-Allow-Origin":"*"}},""===t.id){e.next=15;break}return e.prev=2,e.next=5,t.$axios.get("https://cbsbackend.herokuapp.com/api/products/".concat(t.id),r);case 5:return o=e.sent,data=o.data,t.productArray=l({},data),t.checkbox=t.productArray.hasSubCategories,e.abrupt("return",t.productArray);case 12:throw e.prev=12,e.t0=e.catch(2),new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))()},getAllProducts:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{"Access-Control-Allow-Origin":"*"}},e.prev=1,e.next=4,t.$axios.get("https://cbsbackend.herokuapp.com/api/products",r);case 4:o=e.sent,data=o.data,t.allProducts=data,0!==t.allProducts.length&&t.allProducts.forEach((function(e){t.items.push(e.name),e.subCategory.includes(t.productArray.name)&&t.subcategoryItems.push(e.name)})),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(1),new Error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},changeProductId:function(){this.productArray.hasSubCategories=this.checkbox,this.checkbox?this.productArray.productId="":this.productArray.productId="1"},deleteParagraph:function(t){this.productArray.description.splice(t,1)},addParagraph:function(){this.productArray.description.push({paragraph:"New Paragraph",_id:"1"})},addItem:function(){var t=this,e={headers:{"Access-Control-Allow-Origin":"*"}};this.allProducts.forEach((function(r){t.subcategoryItems.includes(r.name)||r.subCategory.forEach(function(){var o=Object(n.a)(regeneratorRuntime.mark((function o(sub,n){var c,d,data,m;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(sub!==t.productArray.name){o.next=16;break}return c=r.subCategory.splice(1,n),o.next=4,t.$axios.get("https://cbsbackend.herokuapp.com/api/products/name/".concat(r.name),e);case 4:return d=o.sent,data=d.data,m=l(l({},data[0]),{},{subCategory:c}),o.prev=7,o.next=10,t.$axios.put("https://cbsbackend.herokuapp.com/api/products/".concat(data[0]._id),m,e);case 10:return o.abrupt("return",m);case 13:throw o.prev=13,o.t0=o.catch(7),new Error(o.t0);case 16:case"end":return o.stop()}}),o,null,[[7,13]])})));return function(t,e){return o.apply(this,arguments)}}())})),this.subcategoryItems.forEach(function(){var r=Object(n.a)(regeneratorRuntime.mark((function r(element){var o,data,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$axios.get("https://cbsbackend.herokuapp.com/api/products/name/".concat(element),e);case 3:return o=r.sent,data=o.data,n=l(l({},data[0]),{},{subCategory:t.productArray.name}),r.prev=6,r.next=9,t.$axios.put("https://cbsbackend.herokuapp.com/api/products/".concat(data[0]._id),n,e);case 9:return r.abrupt("return",n);case 12:throw r.prev=12,r.t0=r.catch(6),new Error(r.t0);case 15:r.next=20;break;case 17:throw r.prev=17,r.t1=r.catch(0),new Error(r.t1);case 20:case"end":return r.stop()}}),r,null,[[0,17],[6,12]])})));return function(t){return r.apply(this,arguments)}}())},saveImages:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var input,o,n,c,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return input=t.target.files[0],(o=new FormData).append("image",input),r.prev=3,n={headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*"}},r.next=7,e.$axios.post("https://cbsbackend.herokuapp.com/api/upload/",o,n.headers);case 7:c=r.sent,data=c.data,e.productArray.img=data,e.productArray.img.push({image:e.image}),r.next=16;break;case 13:throw r.prev=13,r.t0=r.catch(3),new Error(r.t0);case 16:case"end":return r.stop()}}),r,null,[[3,13]])})))()},addAccessory:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{"Access-Control-Allow-Origin":"*"}},e.prev=1,e.next=4,t.$axios.get("https://cbsbackend.herokuapp.com/api/products/name/".concat(t.accessoryName),r);case 4:return o=e.sent,data=o.data,t.productArray.accessories.push({id:data[0].id,name:data[0].name,category:data[0].category,subCategory:data[0].subCategory,productId:data[0].productId,intro:data[0].intro,mainImg:data[0].mainImg,_id:data[0]._id}),e.abrupt("return",t.accessories);case 10:throw e.prev=10,e.t0=e.catch(1),new Error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},deleteAccessory:function(t){this.productArray.accessories.splice(t,1)},addRecommendedProducts:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{"Access-Control-Allow-Origin":"*"}},e.prev=1,e.next=4,t.$axios.get("https://cbsbackend.herokuapp.com/api/products/name/".concat(t.recommendedProductName),r);case 4:return o=e.sent,data=o.data,t.productArray.recommendedProducts.push({id:data[0].id,name:data[0].name,category:data[0].category,subCategory:data[0].subCategory,productId:data[0].productId,intro:data[0].intro,mainImg:data[0].mainImg,_id:data[0]._id}),e.abrupt("return",t.recommendedProducts);case 10:throw e.prev=10,e.t0=e.catch(1),new Error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},deleteRecommendedProduct:function(t){this.productArray.recommendedProducts.splice(t,1)},saveMainImage:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var input,o,n,c,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return input=t.target.files[0],(o=new FormData).append("image",input),r.prev=3,n={headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0,"Access-Control-Allow-Headers":"*"}},r.next=7,e.$axios.post("https://cbsbackend.herokuapp.com/api/upload/",o,n);case 7:c=r.sent,data=c.data,e.productArray.mainImg=data,r.next=15;break;case 12:throw r.prev=12,r.t0=r.catch(3),new Error(r.t0);case 15:case"end":return r.stop()}}),r,null,[[3,12]])})))()},saveConfigImage:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var input,n,c,l,data;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return input=t.target.files[0],(n=new FormData).append("image",input),o.prev=3,c={headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*"}},o.next=7,r.$axios.post("https://cbsbackend.herokuapp.com/api/upload/",n,c);case 7:l=o.sent,data=l.data,r.configImage=data,r.productArray.tables[e].image=r.configImage,o.next=16;break;case 13:throw o.prev=13,o.t0=o.catch(3),new Error(o.t0);case 16:case"end":return o.stop()}}),o,null,[[3,13]])})))()},saveVideos:function(t){this.video=t.target.value,this.productArray.videos.push({video:this.video,title:this.videoTitle})},deleteImage:function(t){this.productArray.img.splice(t,1)},deleteFeature:function(t,i){this.productArray.features[t].list.splice(i,1)},addFeature:function(t){this.productArray.features[t].list.push({listItem:"List point"})},deleteFeatureBox:function(t){this.productArray.features.splice(t,1)},addFeatureBox:function(){this.productArray.features.push({id:1,heading:"Main Features",list:[{listItem:"List point"}]})},deleteConfigImage:function(t){this.productArray.tables[t].image=""},deleteTableRow:function(t,i){this.productArray.tables[t].items.splice(i,1)},addTableRow:function(t,i){this.productArray.tables[t].items.push({"Item Description":"","Part No":""})},deleteConfigTable:function(t){this.productArray.tables.splice(t,1)},deleteVideo:function(t){this.productArray.videos.splice(t,1)},save:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data=l({user:t.$auth.user},t.productArray),r={headers:{"Access-Control-Allow-Origin":"*"}},e.prev=2,e.next=5,t.$axios.put("https://cbsbackend.herokuapp.com/api/products/".concat(t.id),data,r);case 5:e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(2),new Error("Error updating product");case 10:case"end":return e.stop()}}),e,null,[[2,7]])})))()},publish:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data=l(l({user:t.$auth.user},t.productArray),{},{isDraft:!1}),r={headers:{"Access-Control-Allow-Origin":"*"}},e.prev=2,e.next=5,t.$axios.put("https://cbsbackend.herokuapp.com/api/products/".concat(t.id),data,r);case 5:e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(2),new Error("Error updating product");case 10:case"end":return e.stop()}}),e,null,[[2,7]])})))()}}},m=d,h=(r(657),r(49)),v=r(69),f=r.n(v),x=r(148),y=r(518),w=r(517),k=r(715),_=r(504),C=r(535),A=r(238),I=r(190),P=r(237),z=r(505),S=r(68),O=r(511),R=r(590),V=r(516),j=r(321),$=r(322),T=r(542),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[0!==t.productArray.name.length?r("div",[t.productArray.isDraft?r("div",[r("v-btn",{staticClass:"ma-2",attrs:{color:"red",dark:""}},[t._v("\n        Draft\n        "),r("v-icon",{attrs:{dark:"",right:""}},[t._v(" mdi-checkbox-marked-circle ")])],1)],1):r("div",[r("v-btn",{staticClass:"ma-2",attrs:{color:"green",dark:""}},[t._v("\n        Published\n        "),r("v-icon",{attrs:{dark:"",right:""}},[t._v(" mdi-checkbox-marked-circle ")])],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[r("div",{staticClass:"section-showcase",attrs:{id:"home"}},[r("h1",[r("v-textarea",{attrs:{value:t.productArray.name.toUpperCase(),label:"heading",dense:"","auto-grow":"",outlined:"",required:""},on:{input:function(e){t.productArray.name=e}}})],1),t._v(" "),r("v-textarea",{attrs:{value:t.productArray.intro,label:"intro",dense:"","auto-grow":"",outlined:"",required:""},on:{input:function(e){t.productArray.intro=e}}}),t._v(" "),r("div",[r("div",{staticClass:"d-inline white--text pa-2"},[r("v-select",{attrs:{attach:"",multiple:"",chips:"",items:t.categories,label:"Category"},model:{value:t.productArray.category,callback:function(e){t.$set(t.productArray,"category",e)},expression:"productArray.category"}})],1)]),t._v(" "),r("div",[0!==t.allProducts.length?r("div",[r("p",[t._v("Will this be a subcategory?")]),t._v(" "),r("v-checkbox",{attrs:{label:t.checkbox.toString()},on:{change:t.changeProductId},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}}),t._v(" "),t.checkbox?r("div",[r("p",[t._v("Which items belong to this subcategory?")]),t._v(" "),r("v-select",{staticStyle:{width:"80%",display:"block","margin-left":"auto","margin-right":"auto"},attrs:{items:t.items,attach:"",multiple:"",chips:""},on:{change:t.addItem},model:{value:t.subcategoryItems,callback:function(e){t.subcategoryItems=e},expression:"subcategoryItems"}})],1):t._e()],1):t._e()]),t._v(" "),t.checkbox?t._e():r("div",[r("div",{staticClass:"d-inline pa-2 mt-10 yellow accent-4 black--text"},[t._v("\n              Product ID\n            ")]),t._v(" "),r("div",{staticClass:"d-inline white--text pa-2"},[r("input",{ref:"productId",staticClass:"input black--text",attrs:{type:"text"},domProps:{value:t.productArray.productId},on:{input:function(e){t.productArray.productId=e.target.value}}})])]),t._v(" "),r("br"),r("br"),t._v(" "),r("nuxt-link",{staticClass:"learn",attrs:{to:"#"}},[r("v-btn",{attrs:{"x-large":t.$vuetify.breakpoint.smAndUp,text:"",outlined:"",white:""}},[r("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v("Enquire\n              Now")],1)],1)],1)]),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[r("v-row",{staticClass:"mx-auto pb-5",staticStyle:{"max-width":"1200px"},attrs:{justify:"center",mb:"10"}},[r("v-col",{attrs:{cols:"12",md:"12"}},[r("edit-featured-products",{attrs:{data:t.productArray}})],1)],1)],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"12",sm:"12"}},[r("div",{staticStyle:{"line-height":"30px","font-size":"15px","margin-bottom":"5px","margin-left":"10px","margin-right":"10px"}},[t._l(t.productArray.description,(function(e,o){return r("div",{key:e._id},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"12",sm:"12"}},[r("v-textarea",{attrs:{label:"paragraph",dense:"",value:e.paragraph,"auto-grow":"",outlined:""},on:{input:function(e){return t.changeDescription(e,o)}}}),t._v(" "),r("v-btn",{staticClass:"btn",attrs:{color:"orange lighten-2",dark:""},on:{click:function(e){return t.deleteParagraph(o)}}},[t._v("\n                  X\n                ")])],1)],1)],1)})),t._v(" "),r("v-btn",{staticClass:"btn",attrs:{color:"grey lighten-3",light:""},on:{click:function(e){return t.addParagraph()}}},[t._v("\n            +\n          ")])],2)]),t._v(" "),r("v-col",{attrs:{cols:"12",md:"12",sm:"12"}},[r("div",{staticClass:"section-large-text",attrs:{id:"about"}},[r("v-tabs",{attrs:{"black--text":"",center:"",light:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tabs-slider"),t._v(" "),r("v-tab",{staticClass:"ml-20",attrs:{href:"#features"}},[t._v(" Features ")]),t._v(" "),r("v-tab",{attrs:{href:"#accessories"}},[t._v(" Accessories")]),t._v(" "),r("v-tab",{directives:[{name:"show",rawName:"v-show",value:0!=t.productArray.tables.length,expression:"productArray.tables.length != 0"}],attrs:{href:"#config"}},[t._v("\n              Configuration\n            ")]),t._v(" "),r("v-tab",{directives:[{name:"show",rawName:"v-show",value:t.productArray.videos.length>0,expression:"productArray.videos.length > 0"}],attrs:{href:"#video"}},[t._v("\n              Video Tutorials\n            ")])],1),t._v(" "),r("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab-item",{key:1,attrs:{value:"features"}},[r("v-row",{class:"grey lighten-4 pl-5 pr-5 mt-4 mb-4"},t._l(t.productArray.features,(function(e,o){return r("v-col",{key:e[o],attrs:{cols:"12",md:"6"}},[r("v-card",{staticClass:"mx-auto",attrs:{id:"feature-card"}},[r("h4",{staticClass:"\n                        text-uppercase\n                        yellow\n                        lighten-2\n                        text-center\n                        mt-10\n                        mb-3\n                        pt-5\n                        pl-2\n                        pr-2\n                        pb-5\n                      ",staticStyle:{"letter-spacing":"0.15em","border-bottom":"2px solid #fde36d","box-shadow":"0 4px 6px -6px"}},[r("v-textarea",{attrs:{label:"heading",dense:"",value:e.heading.toUpperCase(),"auto-grow":"",outlined:""},on:{input:function(e){t.productArray.features[o].heading=e}}})],1),t._v(" "),r("table",[r("tbody",[t._l(e.list,(function(e,i){return r("tr",{key:e.listItem},[r("td",[r("textarea",{staticClass:"input",staticStyle:{overflow:"hidden",padding:"15px","word-wrap":"break-word",resize:"none","min-width":"200px"},attrs:{type:"text"},domProps:{value:e.listItem},on:{input:function(e){return t.changeListItem(e.target.value,o,i)}}})]),t._v(" "),r("td",[r("v-btn",{staticClass:"btn",attrs:{color:"orange lighten-2",dark:""},on:{click:function(e){return t.deleteFeature(o,i)}}},[t._v("\n                              X\n                            ")])],1)])})),t._v(" "),r("td",[r("v-btn",{staticClass:"btn mt-10",on:{click:function(e){return t.addFeature(o)}}},[t._v("\n                            +\n                          ")])],1)],2)])]),t._v(" "),r("v-btn",{staticClass:"btn mt-10",attrs:{color:"orange lighten-2",dark:""},on:{click:function(e){return t.deleteFeatureBox(o)}}},[t._v("\n                    X\n                  ")]),t._v(" "),r("v-btn",{staticClass:"btn mt-10",on:{click:function(e){return t.addFeatureBox()}}},[t._v("\n                    +\n                  ")])],1)})),1)],1),t._v(" "),r("v-tab-item",{key:2,attrs:{value:"accessories"}},[r("v-card",{class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4",attrs:{flat:""}},[r("v-select",{staticStyle:{width:"80%",display:"block","margin-left":"auto","margin-right":"auto"},attrs:{items:t.items,label:"Select Products"},on:{change:t.addAccessory},model:{value:t.accessoryName,callback:function(e){t.accessoryName=e},expression:"accessoryName"}}),t._v(" "),r("v-row",{staticClass:"mx-auto pb-5",staticStyle:{"max-width":"1200px"},attrs:{mb:"10"}},t._l(t.productArray.accessories,(function(e,o){return r("v-col",{key:"plan-"+o,attrs:{cols:"12",md:"4"}},[r("v-hover",{staticClass:"card",scopedSlots:t._u([{key:"default",fn:function(o){var n=o.hover;return[r("v-card",{staticClass:"mx-auto transition-swing",class:n?"zoom":"notzoom",attrs:{elevation:n?24:4,color:e.color,"max-width":"500",height:"630"}},[r("h4",{staticClass:"\n                            text-uppercase text-center\n                            black--text\n                            mt-5\n                            pt-5\n                            pl-5\n                            pr-5\n                            pb-5\n                          ",staticStyle:{"letter-spacing":"0.15em","font-size":"20px"},domProps:{textContent:t._s(e.name)}}),t._v(" "),r("v-img",{staticClass:"image grey lighten-2 rounded-lg mt-5 mb-10",attrs:{src:e.mainImg,alt:"",width:"250","lazy-src":e.mainImg,"aspect-ratio":"1"}}),t._v(" "),r("v-card-text",{staticClass:"subtitle-1 black--text",domProps:{textContent:t._s(e.intro)}}),t._v(" "),r("div",{staticStyle:{position:"absolute",bottom:"0","margin-left":"5px"}},[r("div",[r("nuxt-link",{attrs:{to:"/category/"+e.name.toLowerCase()}},[r("v-btn",{staticClass:"my-3",attrs:{"x-large":t.$vuetify.breakpoint.smAndUp,text:"",outlined:"",black:""}},[r("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v("View")],1)],1)],1)])],1)]}}],null,!0)}),t._v(" "),r("v-btn",{staticClass:"btn",staticStyle:{display:"block","margin-left":"auto","margin-right":"auto",width:"15%","margin-top":"10%"},attrs:{color:"orange lighten-2",align:"center",dark:""},on:{click:function(e){return t.deleteAccessory(o)}}},[t._v("\n                      X\n                    ")])],1)})),1)],1)],1),t._v(" "),r("v-tab-item",{key:3,staticClass:"grey lighten-4 pb-10 mb-10",attrs:{value:"config"}},[r("v-card-text",{staticClass:"black--text pb-10",staticStyle:{"line-height":"30px","font-size":"15px","margin-bottom":"20px"}},t._l(t.productArray.configurationIntro,(function(e,o){return r("div",{key:e[o]},[r("v-textarea",{attrs:{label:"paragraph",dense:"",value:e.paragraph,"auto-grow":"",outlined:"",rows:"8","row-height":"20"},on:{input:function(e){t.productArray.configurationIntro[o].paragraph=e}}})],1)})),0),t._v(" "),r("v-card",{staticClass:"mx-auto transition-swing",attrs:{"min-height":"600",elevation:t.hover?24:6}},[t.$device.isMobile?r("div",[t._v("\n                  Please use a laptop to view and edit configuration tables\n                ")]):r("div",t._l(t.productArray.tables,(function(table,e){return r("v-row",{key:table[e]},[r("table",{staticClass:"ml-4 mr-4"},[r("thead",t._l(t.configHeadings,(function(e,o){return r("th",{key:e[o],attrs:{"align-center":""}},[t._v("\n                          "+t._s(e)+"\n                        ")])})),0),t._v(" "),r("tbody",[r("tr",[r("td",[r("input",{staticClass:"input",staticStyle:{"word-wrap":"break-word",resize:"none",padding:"15px","align-self":"center",margin:"10px"},attrs:{cols:"12",rows:"1"},domProps:{value:table.title.toUpperCase()},on:{input:function(r){t.productArray.tables[e].title=r.target.value}}}),t._v(" "),r("v-img",{attrs:{"max-height":"50",src:table.image,"max-width":"30"}})],1),t._v(" "),r("td",[r("table",[r("thead",[r("tr",[r("th",[t._v("Item Description")]),t._v(" "),r("th",[t._v("Part No")]),t._v(" "),r("th",[t._v("Remove Item")])])]),t._v(" "),r("tbody",t._l(table.items,(function(o,i){return r("tr",{key:o[i]},[r("td",[r("input",{staticClass:"input",staticStyle:{"align-self":"center"},attrs:{cols:"12",rows:"1"},domProps:{value:o["Item Description"]},on:{input:function(r){t.productArray.tables[e].items[i]["Item Description"]=r.target.value}}})]),t._v(" "),r("td",[r("input",{staticClass:"input",staticStyle:{"align-self":"center"},attrs:{cols:"12",rows:"1"},domProps:{value:o["Part No"]},on:{input:function(r){t.productArray.tables[e].items[i]["Part No"]=r.target.value}}})]),t._v(" "),r("td",[r("v-btn",{staticClass:"btn",attrs:{color:"orange lighten-2",dark:""},on:{click:function(r){return t.deleteTableRow(e,i)}}},[t._v("\n                                      X\n                                    ")])],1)])})),0)]),t._v(" "),r("v-btn",{staticClass:"btn btn-info float-right mt-10",on:{click:function(r){return t.addTableRow(e,t.i)}}},[t._v("\n                              +\n                            ")])],1),t._v(" "),r("td",[r("v-btn",{staticClass:"btn",on:{click:function(r){return t.deleteConfigTable(e)}}},[t._v("\n                              X\n                            ")])],1)])])])])})),1)])],1),t._v(" "),r("v-tab-item",{key:4,staticClass:"grey lighten-4",attrs:{value:"video"}},[r("v-card",{staticClass:"grey lighten-4 mb-10",attrs:{mt:"10",ml:"4",mr:"4"}},[t.$device.isMobile?r("div",[r("p",{staticClass:"mt-10 mb-10 ml-10 mr-10 pt-10 pl-10 pr-10 pb-10"},[t._v("\n                    Please use a laptop to view and edit configuration tables\n                  ")])]):t._e(),t._v(" "),r("form",{attrs:{align:"center"}},[r("input",{staticClass:"input mt-10",attrs:{type:"text",placeholder:"Add YouTube Link Here"},on:{change:t.saveVideos}}),r("br"),r("br"),t._v(" "),t.productArray.videos.length?[r("div",[r("table",[r("thead",t._l(t.vidHeadings,(function(e,o){return r("th",{key:e[o],attrs:{"align-center":""}},[t._v("\n                            "+t._s(e)+"\n                          ")])})),0),t._v(" "),r("tbody",t._l(t.productArray.videos,(function(video,e){return r("tr",{key:video[e]},[r("td",[r("iframe",{staticClass:"video",staticStyle:{"background-color":"white"},attrs:{src:video.video,allowfullscreen:""}})]),t._v(" "),r("td",[r("input",{staticClass:"input",attrs:{type:"text"},domProps:{value:video.title},on:{input:function(r){t.productArray.videos[e].title=r.target.value}}})]),t._v(" "),r("td",[r("v-btn",{staticClass:"btn",on:{click:function(r){return t.deleteVideo(e)}}},[t._v("\n                                X\n                              ")])],1)])})),0)])])]:t._e()],2)])],1)],1)],1)])],1),t._v(" "),r("h4",{staticClass:"\n        text-h4 text-center\n        font-weight-bold\n        mb-xs-4\n        mt-10\n        mb-5\n        pl-5\n        pr-5\n      "},[t._v("\n      SIMILAR PRODUCTS\n    ")]),t._v(" "),r("v-select",{staticStyle:{width:"80%",display:"block","margin-left":"auto","margin-right":"auto"},attrs:{items:t.items,attach:"",chips:"",label:"Select Products"},on:{change:t.addRecommendedProducts},model:{value:t.recommendedProductName,callback:function(e){t.recommendedProductName=e},expression:"recommendedProductName"}}),t._v(" "),r("v-row",{staticClass:"mx-auto pb-5",staticStyle:{"max-width":"1200px"},attrs:{mb:"10"}},t._l(t.productArray.recommendedProducts,(function(e,o){return r("v-col",{key:"plan-"+o,attrs:{cols:"12",md:"4"}},[r("v-hover",{staticClass:"card",scopedSlots:t._u([{key:"default",fn:function(o){var n=o.hover;return[r("v-card",{staticClass:"mx-auto transition-swing",class:n?"zoom":"notzoom",attrs:{elevation:n?24:4,color:e.color,"max-width":"500",height:"610"}},[r("h4",{staticClass:"\n                text-uppercase text-center\n                black--text\n                mt-5\n                pt-5\n                pl-5\n                pr-5\n                pb-5\n              ",staticStyle:{"letter-spacing":"0.15em","font-size":"20px"},domProps:{textContent:t._s(e.name)}}),t._v(" "),r("v-img",{staticClass:"image grey lighten-2 rounded-lg mt-5 mb-10",attrs:{src:e.mainImg,alt:"",width:"250","lazy-src":e.mainImg,"aspect-ratio":"1"}}),t._v(" "),r("v-card-text",{staticClass:"subtitle-1 black--text",domProps:{textContent:t._s(e.intro)}}),t._v(" "),r("div",{staticStyle:{position:"absolute",bottom:"0","margin-left":"5px"}},[r("div",[r("nuxt-link",{attrs:{to:"/category/"+e.name.toLowerCase()}},[r("v-btn",{staticClass:"my-3",attrs:{"x-large":t.$vuetify.breakpoint.smAndUp,text:"",outlined:"",black:""}},[r("v-icon",{attrs:{left:"",large:"",color:"primary"}},[t._v("mdi-play")]),t._v("View")],1)],1)],1)])],1)]}}],null,!0)}),t._v(" "),r("v-btn",{staticClass:"btn",staticStyle:{display:"block","margin-left":"auto","margin-right":"auto",width:"15%","margin-top":"10%"},attrs:{color:"orange lighten-2",align:"center",dark:""},on:{click:function(e){return t.deleteRecommendedProduct(o)}}},[t._v("\n          X\n        ")])],1)})),1)],1):r("div",[r("v-progress-circular",{staticClass:"text-center",attrs:{indeterminate:"",color:"amber"}})],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",align:"center"}},[t.productArray.isDraft?r("div",[r("v-btn",{staticClass:"yellow lighten --2",staticStyle:{display:"block","margin-left":"auto: margin-right: auto",width:"30%","margin-top":"2%","margin-bottom":"2%"},attrs:{"x-large":t.$vuetify.breakpoint.smAndUp,text:"",outlined:""},on:{click:function(e){return t.save()}}},[t._v("Save Draft")])],1):t._e()]),t._v(" "),r("v-col",{attrs:{cols:"12",align:"center"}},[r("v-btn",{staticClass:"green lighten --2",staticStyle:{display:"block","margin-left":"auto: margin-right: auto",width:"30%","margin-top":"2%","margin-bottom":"2%"},attrs:{"x-large":t.$vuetify.breakpoint.smAndUp,text:"",outlined:""},on:{click:function(e){return t.publish()}}},[t._v("Publish")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:x.a,VCard:y.a,VCardText:w.c,VCheckbox:k.a,VCol:_.a,VHover:C.a,VIcon:A.a,VImg:I.a,VProgressCircular:P.a,VRow:z.a,VSelect:S.a,VTab:O.a,VTabItem:R.a,VTabs:V.a,VTabsItems:j.a,VTabsSlider:$.a,VTextarea:T.a})}}]);