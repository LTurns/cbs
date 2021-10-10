exports.ids = [19];
exports.modules = {

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(372);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5fc197f4", content, true, context)
};

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_telecoms_vue_vue_type_style_index_0_id_05bf5c83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(338);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_telecoms_vue_vue_type_style_index_0_id_05bf5c83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_telecoms_vue_vue_type_style_index_0_id_05bf5c83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_telecoms_vue_vue_type_style_index_0_id_05bf5c83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_telecoms_vue_vue_type_style_index_0_id_05bf5c83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".search[data-v-05bf5c83]{display:flex;box-shadow:2px 3px 4px rgba(0,0,0,.3);background-color:#fff;padding:3px;margin-top:3%;margin-bottom:3%;width:50%;position:relative;transition:width .45s cubic-bezier(.18,.89,.32,1.28);overflow:hidden}.search__input[data-v-05bf5c83]{flex-grow:1;border:none;padding:0 .5rem;position:absolute;top:0;bottom:0;left:10px;opacity:0;width:calc(100% - 60px);cursor:pointer}.search__input[data-v-05bf5c83]:focus{outline:none}.search__btn[data-v-05bf5c83]{background:transparent;border:none;cursor:pointer;border-radius:100vh;height:50px;width:50px;margin-left:auto;transition:background .15s ease-in-out}.search__btn[data-v-05bf5c83]:focus{outline:none}.search__btn img[data-v-05bf5c83]{width:20px}.search[focus-within][data-v-05bf5c83]{width:80%}.search[data-v-05bf5c83]:focus-within{width:80%}.search[focus-within] .search__input[data-v-05bf5c83]{opacity:1;cursor:auto}.search:focus-within .search__input[data-v-05bf5c83]{opacity:1;cursor:auto}.search[focus-within] .search__btn[data-v-05bf5c83]{background:#fde36d;color:#000}.search:focus-within .search__btn[data-v-05bf5c83]{background:#fde36d;color:#000}.search[focus-within] .search__btn[data-v-05bf5c83]:focus,.search[focus-within] .search__btn[data-v-05bf5c83]:hover{outline:0}.search:focus-within .search__btn[data-v-05bf5c83]:focus,.search:focus-within .search__btn[data-v-05bf5c83]:hover{outline:0}.telecoms-enter-active[data-v-05bf5c83],.telecoms-leave-active[data-v-05bf5c83]{transition:opacity .5s}.telecoms-enter[data-v-05bf5c83],.telecoms-leave-active[data-v-05bf5c83]{opacity:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/telecoms.vue?vue&type=template&id=05bf5c83&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{class:_vm.$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'},[_c('v-row',{attrs:{"no-gutters":""}},[_c('v-col',{attrs:{"cols":"12","align":"center"}},[_c('SectionsHeroAlt',{class:_vm.$vuetify.theme.dark ? 'grey darken-4' : 'white',attrs:{"hero-alt":_vm.heroAlt}}),_vm._v(" "),_c('v-responsive',{staticClass:"max-auto mx-auto text-center",class:_vm.$vuetify.theme.dark ? 'grey darken-4' : 'yellow darken-1'},[_c('div',{staticClass:"hero-text mt-20 mb-20",staticStyle:{"margin-top":"50px","margin-bottom":"50px"}},[_c('blockquote',[_vm._v("\n            Telecoms includes some of our most popular products, including...\n            and far more. Please contact us if you have any questions.\n          ")])])]),_vm._v(" "),_c('div',{staticClass:"search"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.search),expression:"search"}],staticClass:"search__input",attrs:{"type":"text","aria-label":"search","placeholder":"enter your search"},domProps:{"value":(_vm.search)},on:{"input":function($event){if($event.target.composing){ return; }_vm.search=$event.target.value}}}),_vm._v(" "),_c('button',{staticClass:"search__btn",attrs:{"aria-label":"submit search"}},[_c('img',{attrs:{"src":"/loupe.png","alt":""}})])]),_vm._v(" "),_c('SectionsFeaturedProducts',{attrs:{"data":_vm.filteredList}})],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/telecoms.vue?vue&type=template&id=05bf5c83&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/telecoms.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var telecomsvue_type_script_lang_js_ = ({
  transition: 'telecoms',

  data() {
    return {
      heroAlt: [{
        src: '',
        heading: ' TELECOMS ',
        icon: '',
        image: 'telecoms.svg'
      }],
      search: '',
      filteredList: []
    };
  },

  created() {
    this.getAllMusics();
  },

  methods: {
    async getAllMusics() {
      this.listLoading = true;
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      };

      try {
        const {
          data
        } = await this.$axios.get('https://cbsbackend.herokuapp.com/api/products', config); // console.log('here is the data', data)

        data.forEach(product => {
          if (product.category === 'Telecoms') {
            this.filteredList.push(product);
          }
        }); // console.log(this.filteredList)
        // console.log('here is the category', data.forEach())
        // this.filteredList.push(
        //   data.filter((category) => category !== 'Fibre Blowing')
        // )

        return this.filteredList;
      } catch (err) {
        throw new Error('Error Fetching Products');
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/telecoms.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_telecomsvue_type_script_lang_js_ = (telecomsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(8);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(311);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VResponsive/VResponsive.js
var VResponsive = __webpack_require__(97);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(312);

// CONCATENATED MODULE: ./pages/telecoms.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(371)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_telecomsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "05bf5c83",
  "0d67493e"
  
)

/* harmony default export */ var telecoms = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {SectionsHeroAlt: __webpack_require__(68).default,SectionsFeaturedProducts: __webpack_require__(79).default})


/* vuetify-loader */




installComponents_default()(component, {VCol: VCol["a" /* default */],VResponsive: VResponsive["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=telecoms.js.map