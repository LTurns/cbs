exports.ids = [12,14];
exports.modules = {

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(219);
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);
/* harmony import */ var _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70);
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
// Styles
 // Extensions

 // Mixins


 // Helpers


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_mixins_loadable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_routable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]).extend({
  name: 'v-card',
  props: {
    flat: Boolean,
    hover: Boolean,
    img: String,
    link: Boolean,
    loaderHeight: {
      type: [Number, String],
      default: 4
    },
    raised: Boolean
  },
  computed: {
    classes() {
      return {
        'v-card': true,
        ..._mixins_routable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-card--flat': this.flat,
        'v-card--hover': this.hover,
        'v-card--link': this.isClickable,
        'v-card--loading': this.loading,
        'v-card--disabled': this.disabled,
        'v-card--raised': this.raised,
        ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this)
      };
    },

    styles() {
      const style = { ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.styles.call(this)
      };

      if (this.img) {
        style.background = `url("${this.img}") center center / cover no-repeat`;
      }

      return style;
    }

  },
  methods: {
    genProgress() {
      const render = _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].options.methods.genProgress.call(this);
      if (!render) return null;
      return this.$createElement('div', {
        staticClass: 'v-card__progress',
        key: 'progress'
      }, [render]);
    }

  },

  render(h) {
    const {
      tag,
      data
    } = this.generateRouteLink();
    data.style = this.styles;

    if (this.isClickable) {
      data.attrs = data.attrs || {};
      data.attrs.tabindex = 0;
    }

    return h(tag, this.setBackgroundColor(this.color, data), [this.genProgress(), this.$slots.default]);
  }

}));

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Delayable
 *
 * @mixin
 *
 * Changes the open or close delay time for elements
 */

/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend().extend({
  name: 'delayable',
  props: {
    openDelay: {
      type: [Number, String],
      default: 0
    },
    closeDelay: {
      type: [Number, String],
      default: 0
    }
  },
  data: () => ({
    openTimeout: undefined,
    closeTimeout: undefined
  }),
  methods: {
    /**
     * Clear any pending delay timers from executing
     */
    clearDelay() {
      clearTimeout(this.openTimeout);
      clearTimeout(this.closeTimeout);
    },

    /**
     * Runs callback after a specified delay
     */
    runDelay(type, cb) {
      this.clearDelay();
      const delay = parseInt(this[`${type}Delay`], 10);
      this[`${type}Timeout`] = setTimeout(cb || (() => {
        this.isActive = {
          open: true,
          close: false
        }[type];
      }), delay);
    }

  }
}));

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(220);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("e23b7040", content, true)

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_bootable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _mixins_groupable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
// Mixins

 // Directives

 // Utilities



const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_mixins_bootable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], Object(_mixins_groupable__WEBPACK_IMPORTED_MODULE_1__[/* factory */ "a"])('windowGroup', 'v-window-item', 'v-window'));
/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend().extend().extend({
  name: 'v-window-item',
  directives: {
    Touch: _directives_touch__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
  },
  props: {
    disabled: Boolean,
    reverseTransition: {
      type: [Boolean, String],
      default: undefined
    },
    transition: {
      type: [Boolean, String],
      default: undefined
    },
    value: {
      required: false
    }
  },

  data() {
    return {
      isActive: false,
      inTransition: false
    };
  },

  computed: {
    classes() {
      return this.groupClasses;
    },

    computedTransition() {
      if (!this.windowGroup.internalReverse) {
        return typeof this.transition !== 'undefined' ? this.transition || '' : this.windowGroup.computedTransition;
      }

      return typeof this.reverseTransition !== 'undefined' ? this.reverseTransition || '' : this.windowGroup.computedTransition;
    }

  },
  methods: {
    genDefaultSlot() {
      return this.$slots.default;
    },

    genWindowItem() {
      return this.$createElement('div', {
        staticClass: 'v-window-item',
        class: this.classes,
        directives: [{
          name: 'show',
          value: this.isActive
        }],
        on: this.$listeners
      }, this.genDefaultSlot());
    },

    onAfterTransition() {
      if (!this.inTransition) {
        return;
      } // Finalize transition state.


      this.inTransition = false;

      if (this.windowGroup.transitionCount > 0) {
        this.windowGroup.transitionCount--; // Remove container height if we are out of transition.

        if (this.windowGroup.transitionCount === 0) {
          this.windowGroup.transitionHeight = undefined;
        }
      }
    },

    onBeforeTransition() {
      if (this.inTransition) {
        return;
      } // Initialize transition state here.


      this.inTransition = true;

      if (this.windowGroup.transitionCount === 0) {
        // Set initial height for height transition.
        this.windowGroup.transitionHeight = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* convertToUnit */ "g"])(this.windowGroup.$el.clientHeight);
      }

      this.windowGroup.transitionCount++;
    },

    onTransitionCancelled() {
      this.onAfterTransition(); // This should have the same path as normal transition end.
    },

    onEnter(el) {
      if (!this.inTransition) {
        return;
      }

      this.$nextTick(() => {
        // Do not set height if no transition or cancelled.
        if (!this.computedTransition || !this.inTransition) {
          return;
        } // Set transition target height.


        this.windowGroup.transitionHeight = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* convertToUnit */ "g"])(el.clientHeight);
      });
    }

  },

  render(h) {
    return h('transition', {
      props: {
        name: this.computedTransition
      },
      on: {
        // Handlers for enter windows.
        beforeEnter: this.onBeforeTransition,
        afterEnter: this.onAfterTransition,
        enterCancelled: this.onTransitionCancelled,
        // Handlers for leave windows.
        beforeLeave: this.onBeforeTransition,
        afterLeave: this.onAfterTransition,
        leaveCancelled: this.onTransitionCancelled,
        // Enter handler for height transition.
        enter: this.onEnter
      }
    }, this.showLazyContent(() => [this.genWindowItem()]));
  }

}));

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(217);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
// Mixins

 // Utilities



/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_mixins_delayable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
/* @vue/component */
).extend({
  name: 'v-hover',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: undefined
    }
  },
  methods: {
    onMouseEnter() {
      this.runDelay('open');
    },

    onMouseLeave() {
      this.runDelay('close');
    }

  },

  render() {
    if (!this.$scopedSlots.default && this.value === undefined) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_3__[/* consoleWarn */ "c"])('v-hover is missing a default scopedSlot or bound value', this);
      return null;
    }

    let element;
    /* istanbul ignore else */

    if (this.$scopedSlots.default) {
      element = this.$scopedSlots.default({
        hover: this.isActive
      });
    }

    if (Array.isArray(element) && element.length === 1) {
      element = element[0];
    }

    if (!element || Array.isArray(element) || !element.tag) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_3__[/* consoleWarn */ "c"])('v-hover should only contain a single element', this);
      return element;
    }

    if (!this.disabled) {
      element.data = element.data || {};

      this._g(element.data, {
        mouseenter: this.onMouseEnter,
        mouseleave: this.onMouseLeave
      });
    }

    return element;
  }

}));

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _components_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
// Extensions

/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (_components_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_0__[/* BaseItemGroup */ "a"].extend({
  name: 'button-group',

  provide() {
    return {
      btnToggle: this
    };
  },

  computed: {
    classes() {
      return _components_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_0__[/* BaseItemGroup */ "a"].options.computed.classes.call(this);
    }

  },
  methods: {
    // Isn't being passed down through types
    genData: _components_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_0__[/* BaseItemGroup */ "a"].options.methods.genData
  }
}));

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(254);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("2d62e390", content, true)

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(266);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("c4ffc1c0", content, true, context)
};

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_c6037572_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(257);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_c6037572_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_c6037572_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_c6037572_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_c6037572_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".category[data-v-c6037572]{text-decoration:none;color:#000;font-size:13px;text-align:center}.zoom[data-v-c6037572]{transform:scale(1.025) translateY(-10px);box-shadow:3px 1px 7px #050505!important}.notzoom[data-v-c6037572],.zoom[data-v-c6037572]{transition:transform .2s}.notzoom[data-v-c6037572]{box-shadow:3px 1px 7px #0a0a0a!important}@media screen and (max-width:1000px){.card[data-v-c6037572]{min-height:100px}}.box[data-v-c6037572]{background-color:transparent;border-radius:3px;color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:400px;height:300px;transform-style:preserve-3d;perspective:2000px;transition:.4s;text-align:center}.box[data-v-c6037572]:before{background:transparent;border-top:20px solid #fff;border-left:20px solid #fff}.box[data-v-c6037572]:after,.box[data-v-c6037572]:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;box-sizing:border-box}.box[data-v-c6037572]:after{border-bottom:20px solid #fff;border-right:20px solid #fff}.box .fas[data-v-c6037572]{font-size:25px;height:50px;width:50px;line-height:50px!important;background-color:#fff;color:#2c3a47}.box .fa2[data-v-c6037572]{position:absolute;bottom:0;right:0;z-index:1}.box .text[data-v-c6037572]{position:absolute;top:30px;left:-30px;width:calc(100% + 60px);height:calc(100% - 60px);background-color:#2c3a47;border-radius:3px;transition:.4s}.box .text .fa1[data-v-c6037572]{position:absolute;top:0;left:0}.box .text div[data-v-c6037572]{position:absolute;top:50%;left:0;transform:translateY(-50%);text-align:center;width:100%;padding:30px 60px;line-height:1.5;box-sizing:border-box}.box .text div h3[data-v-c6037572]{font-size:30px;margin-bottom:5px}.box .text div p[data-v-c6037572]{font-size:15px}.box[data-v-c6037572]:hover{transform:translate(-50%,-50%) rotateY(-20deg) skewY(3deg)}.box:hover .text[data-v-c6037572]{transform:rotateY(20deg) skewY(-3deg)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCarousel_VCarousel_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(253);
/* harmony import */ var _src_components_VCarousel_VCarousel_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCarousel_VCarousel_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VWindow_VWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _VProgressLinear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87);
/* harmony import */ var _mixins_button_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(240);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
// Styles
 // Extensions

 // Components



 // Mixins
// TODO: Move this into core components v2.0

 // Utilities



/* harmony default export */ __webpack_exports__["a"] = (_VWindow_VWindow__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extend({
  name: 'v-carousel',
  props: {
    continuous: {
      type: Boolean,
      default: true
    },
    cycle: Boolean,
    delimiterIcon: {
      type: String,
      default: '$delimiter'
    },
    height: {
      type: [Number, String],
      default: 500
    },
    hideDelimiters: Boolean,
    hideDelimiterBackground: Boolean,
    interval: {
      type: [Number, String],
      default: 6000,
      validator: value => value > 0
    },
    mandatory: {
      type: Boolean,
      default: true
    },
    progress: Boolean,
    progressColor: String,
    showArrows: {
      type: Boolean,
      default: true
    },
    verticalDelimiters: {
      type: String,
      default: undefined
    }
  },

  // pass down the parent's theme
  provide() {
    return {
      parentTheme: this.theme
    };
  },

  data() {
    return {
      internalHeight: this.height,
      slideTimeout: undefined
    };
  },

  computed: {
    classes() {
      return { ..._VWindow_VWindow__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this),
        'v-carousel': true,
        'v-carousel--hide-delimiter-background': this.hideDelimiterBackground,
        'v-carousel--vertical-delimiters': this.isVertical
      };
    },

    isDark() {
      return this.dark || !this.light;
    },

    isVertical() {
      return this.verticalDelimiters != null;
    }

  },
  watch: {
    internalValue: 'restartTimeout',
    interval: 'restartTimeout',

    height(val, oldVal) {
      if (val === oldVal || !val) return;
      this.internalHeight = val;
    },

    cycle(val) {
      if (val) {
        this.restartTimeout();
      } else {
        clearTimeout(this.slideTimeout);
        this.slideTimeout = undefined;
      }
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('hide-controls')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_7__[/* breaking */ "a"])('hide-controls', ':show-arrows="false"', this);
    }
  },

  mounted() {
    this.startTimeout();
  },

  methods: {
    genControlIcons() {
      if (this.isVertical) return null;
      return _VWindow_VWindow__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.methods.genControlIcons.call(this);
    },

    genDelimiters() {
      return this.$createElement('div', {
        staticClass: 'v-carousel__controls',
        style: {
          left: this.verticalDelimiters === 'left' && this.isVertical ? 0 : 'auto',
          right: this.verticalDelimiters === 'right' ? 0 : 'auto'
        }
      }, [this.genItems()]);
    },

    genItems() {
      const length = this.items.length;
      const children = [];

      for (let i = 0; i < length; i++) {
        const child = this.$createElement(_VBtn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
          staticClass: 'v-carousel__controls__item',
          attrs: {
            'aria-label': this.$vuetify.lang.t('$vuetify.carousel.ariaLabel.delimiter', i + 1, length)
          },
          props: {
            icon: true,
            small: true,
            value: this.getValue(this.items[i], i)
          }
        }, [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
          props: {
            size: 18
          }
        }, this.delimiterIcon)]);
        children.push(child);
      }

      return this.$createElement(_mixins_button_group__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        props: {
          value: this.internalValue,
          mandatory: this.mandatory
        },
        on: {
          change: val => {
            this.internalValue = val;
          }
        }
      }, children);
    },

    genProgress() {
      return this.$createElement(_VProgressLinear__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
        staticClass: 'v-carousel__progress',
        props: {
          color: this.progressColor,
          value: (this.internalIndex + 1) / this.items.length * 100
        }
      });
    },

    restartTimeout() {
      this.slideTimeout && clearTimeout(this.slideTimeout);
      this.slideTimeout = undefined;
      window.requestAnimationFrame(this.startTimeout);
    },

    startTimeout() {
      if (!this.cycle) return;
      this.slideTimeout = window.setTimeout(this.next, +this.interval > 0 ? +this.interval : 6000);
    }

  },

  render(h) {
    const render = _VWindow_VWindow__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.render.call(this, h);
    render.data.style = `height: ${Object(_util_helpers__WEBPACK_IMPORTED_MODULE_6__[/* convertToUnit */ "g"])(this.height)};`;
    /* istanbul ignore else */

    if (!this.hideDelimiters) {
      render.children.push(this.genDelimiters());
    }
    /* istanbul ignore else */


    if (this.progress || this.progressColor) {
      render.children.push(this.genProgress());
    }

    return render;
  }

}));

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VWindow_VWindowItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(231);
/* harmony import */ var _VImg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
// Extensions
 // Components

 // Utilities



 // Types

const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_VWindow_VWindowItem__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], _mixins_routable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend().extend({
  name: 'v-carousel-item',
  inject: {
    parentTheme: {
      default: {
        isDark: false
      }
    }
  },

  // pass down the parent's theme
  provide() {
    return {
      theme: this.parentTheme
    };
  },

  inheritAttrs: false,
  methods: {
    genDefaultSlot() {
      return [this.$createElement(_VImg__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        staticClass: 'v-carousel__item',
        props: { ...this.$attrs,
          height: this.windowGroup.internalHeight
        },
        on: this.$listeners,
        scopedSlots: {
          placeholder: this.$scopedSlots.placeholder
        }
      }, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* getSlot */ "o"])(this))];
    },

    genWindowItem() {
      const {
        tag,
        data
      } = this.generateRouteLink();
      data.staticClass = 'v-window-item';
      data.directives.push({
        name: 'show',
        value: this.isActive
      });
      return this.$createElement(tag, data, this.genDefaultSlot());
    }

  }
}));

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/Intro.vue?vue&type=template&id=c6037572&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('v-row',{attrs:{"fillheight":""}},_vm._l((_vm.cards),function(card){return _c('v-col',{directives:[{name:"hover",rawName:"v-hover"}],key:card.title,staticClass:"column",attrs:{"cols":"12","md":"6"}},[_c('v-hover',{staticClass:"card",scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hover = ref.hover;
return [_c('v-card',{class:'card white pa-md-5 mx-lg-auto',style:({
            height: '200px',
          }),attrs:{"color":_vm.color,"elevation":hover ? 24 : 5,"shaped":""}},[_c('nuxt-link',{staticClass:"category",attrs:{"exact":"","to":card.link}},[_c('v-row',{attrs:{"no-gutters":""}},[_c('v-col',[_c('div',{staticClass:"pr-2 mt-4"},[_c('img',{staticStyle:{"max-width":"130px","height":"auto"},attrs:{"src":card.image}}),_vm._v(" "),_c('h3',{class:_vm.text,staticStyle:{"letter-spacing":"0.15em"},domProps:{"textContent":_vm._s(card.name)}})])])],1)],1)],1)]}}],null,true)})],1)}),1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/Intro.vue?vue&type=template&id=c6037572&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/Intro.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Introvue_type_script_lang_js_ = ({
  props: {
    color: {
      type: String,
      default: () => 'rgb(255, 0, 0, 0)'
    },
    text: {
      type: String,
      default: () => 'text-uppercase black--text'
    }
  },

  data() {
    return {
      axiosCards: '',
      cards: [{
        name: 'OVERHEAD LINE',
        image: 'utilities.svg',
        link: '/overheadline'
      }, {
        name: 'FIBRE INSTALLATION',
        image: 'fibreblowing1.svg',
        link: '/fibreinstallation'
      }, {
        name: 'KLEIN TOOLS',
        image: 'clienttools.svg',
        link: '/kleintools'
      }, {
        name: 'WINCHES AND TRAILERS',
        image: 'telecoms6.svg',
        link: '/winchesandtrailers'
      }]
    };
  },

  // async fetch() {
  //   try {
  //     const result = await axios.get(
  //       'https://tranquil-basin-55259.herokuapp.com/main-categories',
  //       {}
  //     )
  //     this.axiosCards = result.data
  //     return this.axiosCards
  //   } catch (error) {
  //     this.axiosCards = this.cards
  //   }
  // },
  created() {}

});
// CONCATENATED MODULE: ./components/sections/Intro.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_Introvue_type_script_lang_js_ = (Introvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(216);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(207);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(232);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(208);

// CONCATENATED MODULE: ./components/sections/Intro.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(265)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_Introvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c6037572",
  "4fa9adfa"
  
)

/* harmony default export */ var Intro = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VCard: VCard["a" /* default */],VCol: VCol["a" /* default */],VHover: VHover["a" /* default */],VRow: VRow["a" /* default */]})


/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(301);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1124fec4", content, true, context)
};

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(280);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media screen and (max-width:1000px){.heading{margin-top:15%}}@media screen and (min-width:1500px){.carousel-title,.categories{margin-top:10%;padding-top:5%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/Hero.vue?vue&type=template&id=5633290c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{attrs:{"id":"hero"}},[_c('v-container',{staticClass:"mt-10"},[_c('v-row',{attrs:{"align":"center","justify":"center","align-center":""}},[_c('v-col',{attrs:{"cols":"12","md":"6","sm":"12"}},[_c('div',{staticClass:"heading mb-10"},[_c('v-carousel',{attrs:{"height":"70vh","cycle":"","show-arrows-on-hover":"","draggable":"true","hide-delimiter-background":""}},_vm._l((_vm.carouselsData),function(carousel,carindex){return _c('v-carousel-item',{key:carindex},[_c('v-container',[_c('v-row',{attrs:{"align-center":""}},[_c('v-col',[_c('div',{staticClass:"\n                        black--text\n                        carousel-title\n                        text-md-h2 text-sm-h3 text-h6\n                        font-weight-black\n                      "},[_vm._v("\n                      "+_vm._s(carousel.heading.toUpperCase())+"\n                    ")]),_vm._v(" "),_c('p',{staticClass:"black--text",staticStyle:{"font-size":"17px"}},[_vm._v("\n                      "+_vm._s(carousel.subHeading)+"\n                    ")]),_vm._v(" "),_c('v-btn',{staticClass:"my-3 black--text yellow darken-1",attrs:{"x-large":_vm.$vuetify.breakpoint.smAndUp}},[_vm._v("With a new battery powered range")]),_vm._v(" "),_c('span',{staticClass:"mx-2 my-4"})],1)],1)],1)],1)}),1)],1)]),_vm._v(" "),_c('v-col',{staticClass:"black--text",attrs:{"cols":"12","md":"6","sm":"12"}},[_c('div',{staticClass:"mb-10"},[_c('categories',{staticClass:"categories"})],1)])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sections/Hero.vue?vue&type=template&id=5633290c&

// EXTERNAL MODULE: ./components/sections/Intro.vue + 4 modules
var Intro = __webpack_require__(272);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/Hero.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Herovue_type_script_lang_js_ = ({
  components: {
    Categories: Intro["default"]
  },

  data() {
    return {
      carouselsData: [{
        src: 'orangewireheader.jpg',
        heading: 'LEADERS IN ADVANCED CABLE INSTALLATION',
        subHeading: 'CBS Products is at the forefront of cabling technology, the design and manufacture of installation equipment for HV Transmission towers, LV Distribution lines, Railway Tracksides and underground CATV / Telecommunication networks, including the handling of Fibre Optic Cables, for projects around the world. We also offer a comprehensive range of standard equipment.'
      }, {
        src: 'DSC_1491-1.jpeg',
        heading: 'CELEBRATING 50 YEARS OF CBS',
        subHeading: "CBS Products has been going for 50 years - and what a ride it's been! Visit the About section to view more about our incredible team and it's history."
      }, {
        src: 'cable-image.jpg',
        heading: 'WITH A MULTITUDE OF PRODUCTS AND SERVICES',
        subHeading: 'CBS Products currently offers a large selection of services. These include Fibre Blowing, Telecoms, Client Tools and Utilities. Scroll down or visit the Products tab to view more information.'
      }, {
        src: 'sigmund-rVRvR9VUIoQ-unsplash.jpg',
        heading: 'INTRODUCING BATTERY POWERED PRODUCTS',
        subHeading: 'This year is not only exciting for our anniversary, it is also the year we reveal our latest product addition - and it is battery powered!'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/sections/Hero.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_Herovue_type_script_lang_js_ = (Herovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCarousel/VCarousel.js
var VCarousel = __webpack_require__(269);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCarousel/VCarouselItem.js
var VCarouselItem = __webpack_require__(270);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(207);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(213);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(208);

// CONCATENATED MODULE: ./components/sections/Hero.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(300)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_Herovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9ab3d848"
  
)

/* harmony default export */ var Hero = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */







installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCarousel: VCarousel["a" /* default */],VCarouselItem: VCarouselItem["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=sections-hero.js.map