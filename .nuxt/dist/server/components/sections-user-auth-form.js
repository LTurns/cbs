exports.ids = [26,28];
exports.modules = {

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const required = (propertyType, customErrorMessage) => {
  return v => v && v.length > 0 || customErrorMessage || `You must input a ${propertyType}`;
};

const minLength = (propertyType, minLength) => {
  return v => {
    if (!v) {
      return true;
    }

    return v.length >= minLength || `${propertyType} must be at least ${minLength} characters`;
  };
};

const maxLength = (propertyType, maxLength) => {
  return v => v && v.length <= maxLength || `${propertyType} must be less than ${maxLength} characters`;
};

const emailFormat = () => {
  const regex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,24})+$/;
  return v => v && regex.test(v) || 'Must be a valid email';
};

/* harmony default export */ __webpack_exports__["default"] = ({
  required,
  minLength,
  maxLength,
  emailFormat
});

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/UserAuthForm.vue?vue&type=template&id=1c2b582a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-form',{model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[(_vm.hasName)?_c('v-text-field',{attrs:{"label":"Name","rules":[_vm.required('name')]},model:{value:(_vm.userInfo.name),callback:function ($$v) {_vm.$set(_vm.userInfo, "name", $$v)},expression:"userInfo.name"}}):_vm._e(),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Email","rules":[_vm.required('email'), _vm.emailFormat()]},model:{value:(_vm.userInfo.email),callback:function ($$v) {_vm.$set(_vm.userInfo, "email", $$v)},expression:"userInfo.email"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Password","type":_vm.showPassword ? 'text' : 'password',"append-icon":_vm.showPassword ? 'mdi-eye' : 'mdi-eye-off',"counter":"true","rules":[_vm.required('password'), _vm.minLength('password', 6)]},on:{"click:append":function($event){_vm.showPassword = !_vm.showPassword}},model:{value:(_vm.userInfo.password),callback:function ($$v) {_vm.$set(_vm.userInfo, "password", $$v)},expression:"userInfo.password"}}),_vm._v(" "),_c('v-btn',{attrs:{"disabled":!_vm.valid},on:{"click":function($event){return _vm.submitForm(_vm.userInfo)}}},[_vm._v(_vm._s(_vm.buttonText))])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/UserAuthForm.vue?vue&type=template&id=1c2b582a&scoped=true&

// EXTERNAL MODULE: ./components/utils/validations.js
var validations = __webpack_require__(282);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/UserAuthForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var UserAuthFormvue_type_script_lang_js_ = ({
  props: ['submitForm', 'buttonText', 'name'],

  data() {
    return {
      valid: false,
      showPassword: false,
      hasName: false,
      userInfo: {
        email: '',
        password: ''
      },
      ...validations["default"]
    };
  }

});
// CONCATENATED MODULE: ./components/sections/UserAuthForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_UserAuthFormvue_type_script_lang_js_ = (UserAuthFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(211);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(40);

// CONCATENATED MODULE: ./components/sections/UserAuthForm.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_UserAuthFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1c2b582a",
  "79981a4e"
  
)

/* harmony default export */ var UserAuthForm = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VBtn: VBtn["a" /* default */],VForm: VForm["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=sections-user-auth-form.js.map