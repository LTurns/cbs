exports.ids = [13];
exports.modules = {

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(398);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1b7833da", content, true, context)
};

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(355);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(116);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(399);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(400);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hero{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}.feature,.hero{background-size:cover}.feature{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}.home-enter-active,.home-leave-active{transition:opacity .5s}.home-enter,.home-leave-active{opacity:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/wires.e0f0d36.jpeg";

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/orangeWire.ed9eedb.png";

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=bcfef58c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{attrs:{"id":"home"}},[_c('v-col',{staticClass:"hero"},[_c('SectionsHero')],1),_vm._ssrNode(" "),_c('v-row',{attrs:{"no-gutters":""}},[_c('v-col',{staticClass:"yellow darken-2",attrs:{"cols":"12"}},[_c('SectionsBlockQuote',[_vm._t("default",[_vm._v("\n          CBS Products (KT), Ltd. is a leading provider of specialised\n          equipment solutions for the construction of power transmission lines\n          and telecommunications networks around the world. It has become the\n          partner of choice in a number of high profile, international fibre\n          optic cable projects around the globe. In the UK, the Tornado\n          out-performed its competition in a most demanding evaluation,\n          enabling CBS to win a highly coveted contract as exclusive suppliers\n          of cable blowing equipment to British Telecommunications (BT).\n        ")])],2)],1)],1),_vm._ssrNode(" "),_c('v-row',{attrs:{"no-gutters":""}},[_c('v-col',[_c('h3',{staticClass:"text-h3 text-center font-weight-bold mb-xs-4 mt-10 mb-5"},[_vm._v("\n        FEATURED PRODUCTS\n      ")]),_vm._v(" "),_c('SectionsFeaturedProducts',{staticClass:"yellow darken-1",attrs:{"data":_vm.filteredList}})],1)],1),_vm._ssrNode(" "),_c('v-row',{attrs:{"no-gutters":""}},[_c('v-col',{staticClass:"blue-grey darken-4"},[_c('SectionsBlockQuote',{attrs:{"text":"white--text"}},[_vm._t("default",[_c('h3',{staticClass:"mb-10"},[_vm._v("CORONAVIRUS UPDATE")]),_vm._v(" "),_c('p',[_vm._v("\n            CBS remains open and are working hard to provide essential\n            services to our telecommunications and electricity industries\n            during these difficult and uncertain times. We want to assure you\n            that we are taking the current situation very seriously, we have\n            staff working from home where possible and have implemented extra\n            precautions throughout the building to ensure the health and\n            safety of our staff, customers and suppliers. As you will be\n            aware, the situation is constantly changing, as is the advice\n            issued by the Government and the World Health Organisation.\n          ")]),_vm._v(" "),_c('p',[_vm._v("\n            As a company, we will be listening to the official advice and will\n            act in accordance with it, together with reacting to the\n            situations of both our customers and suppliers, many of which are\n            already operating at reduced levels. Our business may be disrupted\n            at some point in the future but, for now, it is business as usual.\n            Our thoughts are with those who have been affected by the spread\n            of COVID-19. Please, follow the advise issued by the Government\n            and W.H.O. Stay Safe.\n          ")])])],2)],1)],1),_vm._ssrNode(" "),_c('v-row',{attrs:{"no-gutters":""}},[_c('v-col',[_c('SectionsBrands')],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=bcfef58c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  transition: 'home',

  data() {
    return {
      filteredList: ''
    };
  },

  // computed: {
  //   featuredProducts() {
  //     return this.$store.getters.fibreBlowing.slice(0, 3)
  //   },
  // },
  created() {
    this.getAllMusics();
  },

  methods: {
    async getAllMusics() {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      };

      try {
        const response = await this.$axios.get('https://cbsbackend.herokuapp.com/api/products', config);
        this.filteredList = response.data.slice(0, 3);
      } catch (err) {
        throw new Error('Error Fetching Products');
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(7);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(322);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(323);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(397)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ab64a706"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {SectionsHero: __webpack_require__(122).default,SectionsBlockQuote: __webpack_require__(111).default,SectionsFeaturedProducts: __webpack_require__(70).default,SectionsBrands: __webpack_require__(118).default})


/* vuetify-loader */



installComponents_default()(component, {VCol: VCol["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=index.js.map