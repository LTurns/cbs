exports.ids = [1];
exports.modules = {

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(343);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("e810a50c", content, true, context)
};

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(323);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".about-enter-active,.about-leave-active{transition:opacity .5s}.about-enter,.about-leave-active{opacity:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=7bfc300c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{class:_vm.$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'},[_c('v-row',[_c('v-col',{attrs:{"cols":"12"}},[_c('SectionsHeroAlt',{class:_vm.$vuetify.theme.dark ? 'grey darken-4' : 'white',attrs:{"hero-alt":_vm.heroAlt}}),_vm._v(" "),_c('v-container',[_c('v-row',[_c('v-col',{attrs:{"cols":"12","md":"6"}},[_c('h3',{staticClass:"text-h4 text-center font-weight-light mb-xs-4 mt-10 mb-5",class:_vm.$vuetify.theme.dark ? 'black--text' : 'black--text',staticStyle:{"border-bottom":"2px solid #fde36d","box-shadow":"0 4px 6px -6px #222"}},[_vm._v("\n              WHO ARE WE?\n            ")])]),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"6"}},[_c('v-btn',{staticClass:"my-3 mb-xs-4 mt-10 mb-5",attrs:{"x-large":_vm.$vuetify.breakpoint.smAndUp,"text":"","outlined":"","white":""}},[_c('v-icon',{attrs:{"left":"","large":"","color":"primary"}},[_vm._v("mdi-play")]),_c('a',{staticClass:"learn black--text",attrs:{"href":"#team"}},[_vm._v("Meet The Team")])],1)],1),_vm._v(" "),_c('v-col',{staticClass:"black--text",staticStyle:{"line-height":"30px","font-size":"15px","margin-bottom":"20px"},attrs:{"cols":"12","md":"6"}},[_c('p',[_vm._v("\n              CBS Products (KT), Ltd. is a leading provider of specialised\n              equipment solutions for the construction of power transmission\n              lines and telecommunications networks around the world.\n              Established in 1971 in Oakham, Rutland, England, the company\n              began to design and manufacture cable jointing equipment and\n              gradually diversified into winching equipment for the power\n              transmission industry. With the de-regulation of the electricity\n              industry, power companies entered the field of\n              telecommunications, installing fibre optic cables along\n              transmission line networks. CBS seized this opportunity to\n              develop and build a line of pullers, tensioners and running out\n              blocks for high production cable placing.\n            ")]),_vm._v(" "),_c('div',{staticClass:"text-h4 pa-5 my-4 font-weight-thin black--text"},[_vm._v("\n              CBS has become the partner of choice in a number of high\n              profile, international fibre optic cable projects around the\n              globe.\n            ")])]),_vm._v(" "),_c('v-col',{staticClass:"black--text",staticStyle:{"line-height":"30px","font-size":"15px","margin-bottom":"20px"},attrs:{"cols":"12","md":"6"}},[_c('p',[_vm._v("\n              Our success in the UK telecoms market meant that the company’s\n              expertise and know-how rapidly came to the attention of the\n              major players in the realm of fibre optic cable. Consequently,\n              CBS has become the partner of choice in a number of high\n              profile, international fibre optic cable projects around the\n              globe in which our company has demonstrated its prowess in\n              developing innovative solutions capable of withstanding extreme\n              conditions, both of climate and terrain. Towards the end of the\n              90’s the company’s continuing quest for new horizons was\n              promoted by achieving the internationally recognised Quality\n              Standard, BS EN ISO 9001. The development of the Tornado series\n              of fibre optic cable blowing machines proved highly successful\n              both in the UK and global telecom markets. In the UK, the\n              Tornado out-performed its competition in a most demanding\n              evaluation, enabling CBS to win a highly coveted contract as\n              exclusive suppliers of cable blowing equipment to British\n              Telecommunications (BT).\n            ")]),_vm._v(" "),_c('p',[_vm._v("\n              In 2004, CBS joined forces with GMP Tools USA to further enhance\n              the global reach and breadth of our outside plant equipment\n              capabilities. As of June 2017 the business of GMP Tools and CBS\n              Products were acquired by Klein Tools of the USA. Renamed CBS\n              Products (KT), Ltd., we are the successors to the same\n              engineering talent and innovative solution providers as ever.\n              Empowered with the financial and engineering resources of Klein\n              Tools USA, CBS Products has what it takes to keep your project\n              running smoothly and on schedule whether you’re in telecoms,\n              CATV or power transmission line construction; which brings us to\n              the most compelling reason to consider CBS Products when\n              planning your next cable deployment project: your bottom line.\n            ")])]),_vm._v(" "),_c('h3',{staticClass:"text-h4 text-center font-weight-light mb-xs-4 mt-10 mb-5",class:_vm.$vuetify.theme.dark ? 'black--text' : 'black--text',staticStyle:{"border-bottom":"2px solid #fde36d","width":"500px","box-shadow":"0 4px 6px -6px #222"}},[_vm._v("\n            OUR JOURNEY\n          ")]),_vm._v(" "),_c('SectionsTimeline'),_vm._v(" "),_c('h3',{staticClass:"text-h4 text-center font-weight-light mb-xs-4 mt-10 mb-5",class:_vm.$vuetify.theme.dark ? 'black--text' : 'black--text',staticStyle:{"border-bottom":"2px solid #fde36d","width":"500px","box-shadow":"0 4px 6px -6px #222"},attrs:{"id":"team"}},[_vm._v("\n            MEET THE TEAM\n          ")]),_vm._v(" "),_c('SectionsTeam',{staticClass:"mb-10",attrs:{"our-team":_vm.ourTeam}})],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=7bfc300c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=script&lang=js&
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
/* harmony default export */ var aboutvue_type_script_lang_js_ = ({
  transition: 'about',

  data() {
    return {
      heroAlt: [{
        src: '',
        heading: ' About Us ',
        icon: 'mdi-account'
      }],
      ourTeam: [{
        name: 'Andy Sibun',
        position: 'Technical Manager',
        phone: '01572 898515',
        email: 'andy.sibun@cbsproducts.com',
        photo: ''
      }, {
        name: 'Lawrence Green',
        position: 'Production Manager',
        phone: '01572 898513',
        email: 'lawrence.green@cbsproducts.com',
        photo: ''
      }, {
        name: 'Robert Davidson',
        position: 'Managing Director',
        phone: '01572 898501',
        email: 'robert.davidson@cbsproducts.com',
        photo: ''
      }, {
        name: 'Mike Turney',
        position: 'Finance Director',
        phone: '01572 898522',
        email: 'mike.turney@cbsproducts.com',
        photo: ''
      }]
    };
  },

  head() {
    return {
      title: 'About Us',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/about.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(8);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(308);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(321);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(99);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(309);

// CONCATENATED MODULE: ./pages/about.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(342)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ead45c90"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {SectionsHeroAlt: __webpack_require__(68).default,SectionsTimeline: __webpack_require__(113).default,SectionsTeam: __webpack_require__(109).default})


/* vuetify-loader */






installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VIcon: VIcon["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=about.js.map