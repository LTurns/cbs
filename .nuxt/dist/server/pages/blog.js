exports.ids = [3];
exports.modules = {

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(353);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("63d4dd84", content, true, context)
};

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_8c320468_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(331);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_8c320468_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_8c320468_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_8c320468_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_8c320468_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".search[data-v-8c320468]{display:flex;box-shadow:2px 3px 4px rgba(0,0,0,.3);background-color:#fff;padding:3px;margin-bottom:3%;width:90%;position:relative;transition:width .45s cubic-bezier(.18,.89,.32,1.28);overflow:hidden}.search__input[data-v-8c320468]{flex-grow:1;border:none;padding:0 .5rem;position:absolute;top:0;bottom:0;left:10px;opacity:0;width:calc(100% - 10px);cursor:pointer}.search__input[data-v-8c320468]:focus{outline:none}.search__btn[data-v-8c320468]{background:transparent;border:none;cursor:pointer;border-radius:100vh;height:50px;width:50px;margin-left:auto;transition:background .15s ease-in-out}.search__btn[data-v-8c320468]:focus{outline:none}.search__btn img[data-v-8c320468]{width:20px}.search[focus-within][data-v-8c320468]{width:100%}.search[data-v-8c320468]:focus-within{width:100%}.search[focus-within] .search__input[data-v-8c320468]{opacity:1;cursor:auto}.search:focus-within .search__input[data-v-8c320468]{opacity:1;cursor:auto}.search[focus-within] .search__btn[data-v-8c320468]{background:#fde36d;color:#000}.search:focus-within .search__btn[data-v-8c320468]{background:#fde36d;color:#000}.search[focus-within] .search__btn[data-v-8c320468]:focus,.search[focus-within] .search__btn[data-v-8c320468]:hover{outline:0}.search:focus-within .search__btn[data-v-8c320468]:focus,.search:focus-within .search__btn[data-v-8c320468]:hover{outline:0}.blog-enter-active[data-v-8c320468],.blog-leave-active[data-v-8c320468]{transition:opacity .5s}.blog-enter[data-v-8c320468],.blog-leave-active[data-v-8c320468]{opacity:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog.vue?vue&type=template&id=8c320468&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"blue-grey darken-4"},[_c('v-row',{attrs:{"no-gutters":""}},[_c('v-col',{staticClass:"yellow darken-2",attrs:{"cols":"12"}},[_c('SectionsHeroAlt',{staticClass:"grey lighten-4",attrs:{"hero-alt":_vm.heroAlt}}),_vm._v(" "),_c('SectionsBlockQuote',[_vm._t("default",[_vm._v("Browse our latest blogs for all of our most recent products and\n          events.\n        ")])],2)],1)],1),_vm._ssrNode(" "),_c('v-container',{staticClass:"pt-10"},[_c('v-row',[_c('v-col',{attrs:{"cols":"12"}},[_c('aside',[_c('div',{staticClass:"search"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.search),expression:"search"}],staticClass:"search__input",attrs:{"type":"text","aria-label":"search","placeholder":"enter your search"},domProps:{"value":(_vm.search)},on:{"input":function($event){if($event.target.composing){ return; }_vm.search=$event.target.value}}}),_vm._v(" "),_c('button',{staticClass:"search__btn",attrs:{"aria-label":"submit search"}},[_c('img',{attrs:{"src":"/loupe.png","alt":""}})])]),_vm._v(" "),_c('p',{staticStyle:{"color":"grey","margin-top":"20px","font-size":"15px"}},[_vm._v("\n            Popular search results:\n          ")]),_vm._v(" "),_c('nuxt-link',{staticClass:"tag",attrs:{"exact":"","to":"article/11"}},[_vm._v("Klein Tools Insulated Range")]),_vm._v(" "),_c('nuxt-link',{staticClass:"tag",attrs:{"exact":"","to":"article/5"}},[_vm._v("Tornado Blowing Machine")]),_vm._v(" "),_c('nuxt-link',{staticClass:"tag",attrs:{"exact":"","to":"article/8"}},[_vm._v("Drum Handling")]),_vm._v(" "),_c('nuxt-link',{staticClass:"tag",attrs:{"exact":"","to":"/article/3"}},[_vm._v("Pole Bogie")])],1)]),_vm._v(" "),_c('SectionsBlogs',{attrs:{"data":_vm.blogList}})],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog.vue?vue&type=template&id=8c320468&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var blogvue_type_script_lang_js_ = ({
  transition: 'blog',

  data() {
    return {
      heroAlt: [{
        src: '',
        heading: ' Blog ',
        icon: 'mdi-blogger'
      }],
      search: '',
      blogList: []
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
        const response = await this.$axios.get('https://cbsbackend.herokuapp.com/api/blogs', config);
        this.blogList = response.data;
      } catch (err) {
        throw new Error('Error Fetching Blogs');
      }
    } // BlogStories() {
    //   if (this.search !== '') {
    //     return this.$store.getters.BlogStories.filter((box) => {
    //       return box.description[0].paragraph
    //         .toLowerCase()
    //         .includes(this.search.toLowerCase())
    //     })
    //   }
    //   return this.$store.getters.BlogStories
    // },


  }
});
// CONCATENATED MODULE: ./pages/blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_blogvue_type_script_lang_js_ = (blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(7);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(316);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(328);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(317);

// CONCATENATED MODULE: ./pages/blog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(352)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8c320468",
  "40e6ae72"
  
)

/* harmony default export */ var blog = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {SectionsHeroAlt: __webpack_require__(69).default,SectionsBlockQuote: __webpack_require__(110).default,SectionsBlogs: __webpack_require__(124).default})


/* vuetify-loader */




installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=blog.js.map