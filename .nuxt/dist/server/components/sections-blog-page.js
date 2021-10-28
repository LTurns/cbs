exports.ids = [3,13];
exports.modules = {

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(228);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("65c238dc", content, true, context)
};

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroAlt_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(223);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroAlt_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroAlt_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroAlt_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroAlt_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/HeroAlt.vue?vue&type=template&id=0d54977c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{attrs:{"id":"hero"}},_vm._l((_vm.heroAlt),function(item,i){return _c('v-img',{key:i,staticClass:"gradient-fill",attrs:{"width":"100%","height":"30vh","src":item.src}},[_c('v-container',{attrs:{"fill-height":""}},[_c('v-row',{staticClass:"text-center"},[_c('v-col',{staticClass:"text-center",attrs:{"col":"12"}},[_c('h1',{staticClass:"\n              text-md-h2 text-sm-h3 text-h4\n              font-weight-black\n              text-center\n            ",staticStyle:{"border-bottom":"4px solid #fde36d","box-shadow":"0 4px 6px -6px #222"}},[_c('v-icon',[_vm._v(_vm._s(item.icon))]),_vm._v("\n            "+_vm._s(item.heading.toUpperCase())+"\n          ")],1)])],1)],1)],1)}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/HeroAlt.vue?vue&type=template&id=0d54977c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/HeroAlt.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HeroAltvue_type_script_lang_js_ = ({
  props: {
    heroAlt: {
      type: Array,
      default: () => []
    }
  }
});
// CONCATENATED MODULE: ./components/sections/HeroAlt.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_HeroAltvue_type_script_lang_js_ = (HeroAltvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(212);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(218);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js
var VImg = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(213);

// CONCATENATED MODULE: ./components/sections/HeroAlt.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(227)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_HeroAltvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6881afdd"
  
)

/* harmony default export */ var HeroAlt = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */






installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VRow: VRow["a" /* default */]})


/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(296);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0291791c", content, true, context)
};

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(280);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".carousel{height:\"70vh\"}.image{display:block;margin-left:auto;margin-right:auto}.list{font-size:14px}.configInfo{box-shadow:2px 3px 4px rgba(0,0,0,.3);margin:5%}.table{margin:2% 2% 5%}th{background-color:#ffd280;font-size:14px;padding:20px;text-transform:uppercase}table tbody tr:nth-child(2n) td{background:#f3efef}td{padding:10px}.video{display:block;width:600px;height:400px;margin:5% auto}@media screen and (max-width:600px){.table{margin:2% 2% 5%}th{padding-left:10px;padding-right:10px;background-color:#ffd280;font-size:14px}table td{text-align:left;font-size:11px;padding:10px}table td:last-child{border-right:none}table tbody tr:nth-child(2n) td{background:#f3efef}.video{max-width:300px;max-height:200px}}.body{padding:35px 0}.product-img{cursor:pointer;margin-top:10px}.product-title{text-transform:uppercase;margin-bottom:15px;font-size:25px;line-height:1.2em}.user-ratings{overflow:hidden;margin-bottom:10px;margin-top:5px;display:inline-block}.star-rating{display:inline-block;font-size:18px;position:relative;height:18px;line-height:18px;letter-spacing:2px;width:130px}.star-rating:before{content:\"\\f005\\f005\\f005\\f005\\f123\";position:absolute;top:0;left:0;color:#fc0;box-sizing:border-box}.star-rating span{overflow:hidden;float:left;top:0;left:0;height:18px;position:absolute;font-size:0}.user-ratings .total-review{vertical-align:middle;color:rgba(0,0,0,.5);box-sizing:border-box;float:right;font-size:14px;text-decoration:none}.total-review:hover{text-decoration:underline}.price{display:block;margin-bottom:10px}.price h3{display:inline-block;font-size:28px;color:#e91e63}.price del{padding:0 20px;font-size:20px;color:#9e9e9e}.prodect-details{padding-top:15px;padding-bottom:20px}.colors{padding:0;display:inline-block;margin:20px 0 0;list-style:none}.colors p{float:left;margin-top:10px;color:#000;font-weight:700;padding-right:20px}.color-box{height:35px;width:35px;margin:5px;display:inline-block;cursor:pointer;opacity:.8}.active-col{outline:1px dashed #000}.size{padding:0;display:inline-block;margin:20px 0 0;list-style:none}.size p{float:left;margin-top:10px;color:#000;font-weight:700;padding-right:38px}.size-box{padding:12px;margin:0 5px;display:inline-block;cursor:pointer;color:#000;font-weight:400}.active-siz{background-color:#b2dfdb}.product-qty{display:inline-block;margin-top:20px;width:100%}.product-qty button.items-count{font-size:18px;line-height:12px;height:40px;width:40px;color:#000}.product-qty .qty{height:40px;text-align:center;width:70px;vertical-align:top;color:#000}.qty{border:1px solid #ced4da;border-radius:2px;color:#666;font-size:15px;font-weight:700;margin:0 -5px}.sub-title{color:#000;font-weight:700;padding-right:38px}.cart-btn{margin:15px 0;border-bottom:1px solid #e5e5e5}.cart-btn i{padding:0 10px}.socal-link{padding:0;margin:20px 0 0;list-style:none;display:block}.socal-link li{list-style:none;display:inline-block;margin:0 8px}.socal-link li a{border:1px solid #ddd;color:#666;font-size:15px;line-height:36px;padding:8px 12px}.socal-link li a:hover{background:#ff5252;color:#fff}.activeimg{border:1px solid #000}.overview{margin-top:30px}:root{--primary-color:#333;--secondary-color:#444;--ternary-color:#555;--light-color:#ccc;--light-secondary-color:#ddd;--light-ternary-color:#eee;--overlay-color:rgba(0,0,0,0.7)}*{box-sizing:border-box;margin:0;padding:0}body{font-family:\"Catamaran\",sans-serif;line-height:1.6;color:#333;color:var(--primary-color);font-size:1.1rem}h1,h2,h3,h4{line-height:1.3}a{color:#444;color:var(--secondary-color);text-decoration:none}ul{list-style:none}img{width:100%}.section-showcase{margin:0}.section-showcase .container{display:grid;grid-template-columns:1fr 1fr;grid-gap:3rem;gap:3rem;align-items:center;justify-content:center}.section-showcase h1{font-size:4rem;color:#333;color:var(--primary-color)}.section-showcase p{margin:1rem 0}.btn{display:inline-block;background-color:#333;background-color:var(--primary-color);color:#fff;padding:.8rem 1.5rem;border:none;cursor:pointer;font-size:1.1rem;border-radius:30px}.section-large-text-inner h2{font-size:5rem;margin-top:1rem}.section-large-text-inner h3{font-size:2rem}.section-large-text-inner p{font-size:1.5rem;margin-top:1rem}@media (max-width:768px){.section-showcase .container{grid-template-columns:1fr;text-align:center}.section-showcase .container div:first-child{order:2}.section-showcase .container div:nth-child(2){order:-1}.section-showcase h1{font-size:2rem}.section-showcase img{width:80%;margin:auto}.section-large-text-inner h2{font-size:3rem}.section-large-text-inner h3{font-size:1.5rem}.section-large-text-inner p{font-size:1.25rem}.section-gallery .gallery{display:grid;grid-template-columns:repeat(3,1fr)}.section-gallery .gallery img:first-child{grid-row:1/1;grid-column:1/1}.section-gallery .gallery img:nth-child(2){grid-row:2/2;grid-column:2/4}.section-gallery .gallery img:last-child{display:none}.section-footer{padding:2rem 0}.section-footer .container{grid-template-columns:1fr;text-align:center}.section-footer div:nth-child(2),.section-footer div:nth-child(3){display:none}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/BlogPage.vue?vue&type=template&id=1cd2ab5b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{class:_vm.$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4',attrs:{"id":"hero"}},[_c('hero-alt',{class:_vm.$vuetify.theme.dark ? 'grey darken-4' : 'white',attrs:{"hero-alt":_vm.heroAlt}}),_vm._ssrNode(" "),_c('v-row',{staticClass:"flex-row-reverse",attrs:{"no-gutters":""}},[_c('v-col',{attrs:{"cols":"12","md":"6"}},[_c('div',{staticClass:"pa-lg-16 pa-md-10 px-4 py-15 mt-10"},[_c('h3',{staticClass:"text-h4 text-center font-weight-light mb-xs-4 mb-5",class:_vm.$vuetify.theme.dark ? 'black--text' : 'black--text',staticStyle:{"border-bottom":"2px solid #fde36d","box-shadow":"0 4px 6px -6px #222"}},[_vm._v("\n          "+_vm._s(_vm.blog[0].heading)+"\n        ")]),_vm._v(" "),_c('h3',{staticClass:"\n            text-h5 text-uppercase\n            font-weight-thin\n            text-center\n            my-8\n            black--text\n          "},[_vm._v("\n          "+_vm._s(_vm.blog[0].subheading)+"\n        ")]),_vm._v(" "),_vm._l((_vm.blog[0].description),function(paragraph){return _c('div',{key:paragraph.id},[_c('p',{staticClass:"black--text mt-5",staticStyle:{"line-height":"30px","font-size":"15px","margin-bottom":"20px"}},[_vm._v("\n            "+_vm._s(paragraph.paragraph)+"\n          ")])])})],2)]),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"6"}},_vm._l((_vm.blog.img),function(image){return _c('div',{key:image.id,staticClass:"align-center",attrs:{"max-height":"400"}},[_c('v-img',{attrs:{"src":image.image,"lazy-src":image.image}})],1)}),0)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/BlogPage.vue?vue&type=template&id=1cd2ab5b&

// EXTERNAL MODULE: ./components/sections/HeroAlt.vue + 4 modules
var HeroAlt = __webpack_require__(229);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/BlogPage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var BlogPagevue_type_script_lang_js_ = ({
  components: {
    HeroAlt: HeroAlt["default"]
  },
  props: {
    id: {
      required: true,
      default: null,
      type: String
    }
  },

  data() {
    return {
      heroAlt: [{
        src: '',
        heading: 'BLOG',
        icon: 'mdi-blogger'
      }],
      blog: []
    };
  },

  created() {
    this.getAllBlogs();
  },

  methods: {
    async getAllBlogs() {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      };

      try {
        const response = await this.$axios.get(`https://cbsbackend.herokuapp.com/api/blogs/${this.id}`, config);
        this.blog.push(response.data); // console.log(this.blog)
      } catch (err) {
        throw new Error('Error Fetching Blogs');
      }
    }

  }
});
// CONCATENATED MODULE: ./components/sections/BlogPage.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_BlogPagevue_type_script_lang_js_ = (BlogPagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(212);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js
var VImg = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(213);

// CONCATENATED MODULE: ./components/sections/BlogPage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(295)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_BlogPagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6c601e9a"
  
)

/* harmony default export */ var BlogPage = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VCol: VCol["a" /* default */],VImg: VImg["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=sections-blog-page.js.map