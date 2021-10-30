exports.ids = [27];
exports.modules = {

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/userNav.vue?vue&type=template&id=bb14ae10&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-navbar',{attrs:{"type":"dark","variant":"dark"}},[_c('b-navbar-brand',{attrs:{"to":"/"}},[_vm._v("NavBar")]),_vm._v(" "),_c('b-navbar-nav',{staticClass:"ml-auto"},[(!_vm.loggedIn)?_c('b-nav-item',{attrs:{"to":"/login"}},[_vm._v("Login")]):_vm._e(),_vm._v(" "),(!_vm.loggedIn)?_c('b-nav-item',{attrs:{"to":"/register"}},[_vm._v("Register")]):_vm._e(),_vm._v(" "),(_vm.loggedIn)?_c('b-nav-item',{on:{"click":_vm.logout}},[_c('em',[_vm._v("Hello "+_vm._s(_vm.user.name))])]):_vm._e(),_vm._v(" "),(_vm.loggedIn)?_c('b-nav-item',{on:{"click":_vm.logout}},[_vm._v("Logout")]):_vm._e()],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/userNav.vue?vue&type=template&id=bb14ae10&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/userNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var userNavvue_type_script_lang_js_ = ({
  name: 'NavBar',
  computed: { ...Object(external_vuex_["mapState"])('auth', ['loggedIn', 'user'])
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push('/login');
    }

  }
});
// CONCATENATED MODULE: ./components/userNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_userNavvue_type_script_lang_js_ = (userNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/userNav.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_userNavvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2b749a19"
  
)

/* harmony default export */ var userNav = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=user-nav.js.map