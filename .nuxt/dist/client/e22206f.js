(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{537:function(n,t,e){"use strict";e.r(t);e(26);t.default={required:function(n,t){return function(e){return e&&e.length>0||t||"You must input a ".concat(n)}},minLength:function(n,t){return function(e){return!e||(e.length>=t||"".concat(n," must be at least ").concat(t," characters"))}},maxLength:function(n,t){return function(e){return e&&e.length<=t||"".concat(n," must be less than ").concat(t," characters")}},emailFormat:function(){var n=/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,24})+$/;return function(t){return t&&n.test(t)||"Must be a valid email"}}}}}]);