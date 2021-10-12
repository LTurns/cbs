import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _598edd30 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _20084e4f = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _006ed0d0 = () => interopDefault(import('../pages/careers.vue' /* webpackChunkName: "pages/careers" */))
const _33c92583 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _9bcc6b52 = () => interopDefault(import('../pages/data.vue' /* webpackChunkName: "pages/data" */))
const _4f0894a6 = () => interopDefault(import('../pages/enquiry.vue' /* webpackChunkName: "pages/enquiry" */))
const _4844734f = () => interopDefault(import('../pages/fibreinstallation.vue' /* webpackChunkName: "pages/fibreinstallation" */))
const _9d84e096 = () => interopDefault(import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _e9ef21c2 = () => interopDefault(import('../pages/kleintools.vue' /* webpackChunkName: "pages/kleintools" */))
const _42ee5b0c = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _0ec0fd55 = () => interopDefault(import('../pages/overheadline.vue' /* webpackChunkName: "pages/overheadline" */))
const _3954ac91 = () => interopDefault(import('../pages/products.vue' /* webpackChunkName: "pages/products" */))
const _d43f9e2e = () => interopDefault(import('../pages/repairs.vue' /* webpackChunkName: "pages/repairs" */))
const _6cd63f91 = () => interopDefault(import('../pages/wheretobuy.vue' /* webpackChunkName: "pages/wheretobuy" */))
const _a69a3b56 = () => interopDefault(import('../pages/winchesandtrailers.vue' /* webpackChunkName: "pages/winchesandtrailers" */))
const _0f536c84 = () => interopDefault(import('../pages/article/_id.vue' /* webpackChunkName: "pages/article/_id" */))
const _14f70124 = () => interopDefault(import('../pages/blogEdit/_id.vue' /* webpackChunkName: "pages/blogEdit/_id" */))
const _1b7fc933 = () => interopDefault(import('../pages/category/_subCategory.vue' /* webpackChunkName: "pages/category/_subCategory" */))
const _08099a3c = () => interopDefault(import('../pages/edit/_id.vue' /* webpackChunkName: "pages/edit/_id" */))
const _15a9637d = () => interopDefault(import('../pages/product/_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _7946b7f5 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _598edd30,
    name: "about"
  }, {
    path: "/blog",
    component: _20084e4f,
    name: "blog"
  }, {
    path: "/careers",
    component: _006ed0d0,
    name: "careers"
  }, {
    path: "/contact",
    component: _33c92583,
    name: "contact"
  }, {
    path: "/data",
    component: _9bcc6b52,
    name: "data"
  }, {
    path: "/enquiry",
    component: _4f0894a6,
    name: "enquiry"
  }, {
    path: "/fibreinstallation",
    component: _4844734f,
    name: "fibreinstallation"
  }, {
    path: "/gallery",
    component: _9d84e096,
    name: "gallery"
  }, {
    path: "/kleintools",
    component: _e9ef21c2,
    name: "kleintools"
  }, {
    path: "/login",
    component: _42ee5b0c,
    name: "login"
  }, {
    path: "/overheadline",
    component: _0ec0fd55,
    name: "overheadline"
  }, {
    path: "/products",
    component: _3954ac91,
    name: "products"
  }, {
    path: "/repairs",
    component: _d43f9e2e,
    name: "repairs"
  }, {
    path: "/wheretobuy",
    component: _6cd63f91,
    name: "wheretobuy"
  }, {
    path: "/winchesandtrailers",
    component: _a69a3b56,
    name: "winchesandtrailers"
  }, {
    path: "/article/:id?",
    component: _0f536c84,
    name: "article-id"
  }, {
    path: "/blogEdit/:id?",
    component: _14f70124,
    name: "blogEdit-id"
  }, {
    path: "/category/:subCategory?",
    component: _1b7fc933,
    name: "category-subCategory"
  }, {
    path: "/edit/:id?",
    component: _08099a3c,
    name: "edit-id"
  }, {
    path: "/product/:id?",
    component: _15a9637d,
    name: "product-id"
  }, {
    path: "/",
    component: _7946b7f5,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
