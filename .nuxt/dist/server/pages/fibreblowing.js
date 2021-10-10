exports.ids = [10];
exports.modules = {

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(360);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("9fc093a4", content, true, context)
};

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fibreblowing_vue_vue_type_style_index_0_id_d29b0410_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(332);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fibreblowing_vue_vue_type_style_index_0_id_d29b0410_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fibreblowing_vue_vue_type_style_index_0_id_d29b0410_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fibreblowing_vue_vue_type_style_index_0_id_d29b0410_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fibreblowing_vue_vue_type_style_index_0_id_d29b0410_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".search[data-v-d29b0410]{display:flex;box-shadow:2px 3px 4px rgba(0,0,0,.3);background-color:#fff;padding:3px;margin-top:3%;margin-bottom:3%;width:50%;position:relative;transition:width .45s cubic-bezier(.18,.89,.32,1.28);overflow:hidden}.search__input[data-v-d29b0410]{flex-grow:1;border:none;padding:0 .5rem;position:absolute;top:0;bottom:0;left:10px;opacity:0;width:calc(100% - 60px);cursor:pointer}.search__input[data-v-d29b0410]:focus{outline:none}.search__btn[data-v-d29b0410]{background:transparent;border:none;cursor:pointer;border-radius:100vh;height:50px;width:50px;margin-left:auto;transition:background .15s ease-in-out}.search__btn[data-v-d29b0410]:focus{outline:none}.search__btn img[data-v-d29b0410]{width:20px}.search[focus-within][data-v-d29b0410]{width:80%}.search[data-v-d29b0410]:focus-within{width:80%}.search[focus-within] .search__input[data-v-d29b0410]{opacity:1;cursor:auto}.search:focus-within .search__input[data-v-d29b0410]{opacity:1;cursor:auto}.search[focus-within] .search__btn[data-v-d29b0410]{background:#fde36d;color:#000}.search:focus-within .search__btn[data-v-d29b0410]{background:#fde36d;color:#000}.search[focus-within] .search__btn[data-v-d29b0410]:focus,.search[focus-within] .search__btn[data-v-d29b0410]:hover{outline:0}.search:focus-within .search__btn[data-v-d29b0410]:focus,.search:focus-within .search__btn[data-v-d29b0410]:hover{outline:0}.fibreblowing-enter-active[data-v-d29b0410],.fibreblowing-leave-active[data-v-d29b0410]{transition:opacity .5s}.fibreblowing-enter[data-v-d29b0410],.fibreblowing-leave-active[data-v-d29b0410]{opacity:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/fibreblowing.vue?vue&type=template&id=d29b0410&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('v-row',{attrs:{"no-gutters":""}},[_c('v-col',{class:_vm.$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4',attrs:{"cols":"12","align":"center"}},[_c('SectionsHeroAlt',{class:_vm.$vuetify.theme.dark ? 'grey darken-4' : 'white lighten-4',attrs:{"hero-alt":_vm.heroAlt}}),_vm._v(" "),_c('v-responsive',{staticClass:"max-auto mx-auto text-center",class:_vm.$vuetify.theme.dark ? 'grey darken-4' : 'yellow darken-1'},[_c('div',{staticClass:"hero-text mt-20 mb-20",staticStyle:{"margin-top":"50px","margin-bottom":"50px"}})]),_vm._v(" "),_c('div',{staticClass:"search"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.search),expression:"search"}],staticClass:"search__input",attrs:{"type":"text","aria-label":"search","placeholder":"enter your search"},domProps:{"value":(_vm.search)},on:{"input":function($event){if($event.target.composing){ return; }_vm.search=$event.target.value}}}),_vm._v(" "),_c('button',{staticClass:"search__btn",attrs:{"aria-label":"submit search"}},[_c('img',{attrs:{"src":"/loupe.png","alt":""}})])]),_vm._v(" "),_c('SectionsFeaturedProducts',{attrs:{"data":_vm.filteredList}})],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/fibreblowing.vue?vue&type=template&id=d29b0410&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/fibreblowing.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var fibreblowingvue_type_script_lang_js_ = ({
  transition: 'fibreblowing',

  // async fetch() {
  //   console.log(this.mountains)
  //   this.mountains = await this.$axios.get('/products').then((res) => res.json)
  // },
  // async asyncData({ $axios }) {
  //   const data = await $axios.$get('/products')
  //   return { users: data }
  // },
  data() {
    return {
      heroAlt: [{
        src: '',
        heading: ' FIBRE BLOWING '
      }],
      search: '',
      filteredList: [],
      listLoading: ''
    };
  },

  // computed: {
  //   list() {
  //     if (this.search !== '') {
  //       return this.filteredList.filter((box) => {
  //         return box.name.toLowerCase().includes(this.search.toLowerCase())
  //       })
  //     }
  //     return this.filteredList
  //   },
  // },
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
          if (product.category === 'Fibre Blowing') {
            this.filteredList.push(product);
          }
        }); // console.log('here is the category', data.forEach())
        // this.filteredList.push(
        //   data.filter((category) => category !== 'Fibre Blowing')
        // )

        return this.filteredList;
      } catch (err) {
        throw new Error('Error Fetching Products');
      }
    } // list(list) {
    //   if (this.search !== '') {
    //     return this.filteredList.filter((box) => {
    //       return box.name.toLowerCase().includes(this.search.toLowerCase())
    //     })
    //   }
    //   return this.filteredList
    // },


  }
});
// CONCATENATED MODULE: ./pages/fibreblowing.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_fibreblowingvue_type_script_lang_js_ = (fibreblowingvue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./pages/fibreblowing.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(359)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_fibreblowingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d29b0410",
  "16c0f33a"
  
)

/* harmony default export */ var fibreblowing = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {SectionsHeroAlt: __webpack_require__(68).default,SectionsFeaturedProducts: __webpack_require__(79).default})


/* vuetify-loader */




installComponents_default()(component, {VCol: VCol["a" /* default */],VResponsive: VResponsive["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=fibreblowing.js.map