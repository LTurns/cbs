import Vue from 'vue'
import { wrapFunctional } from './index'

const components = {
  SectionsBlockQuote: () => import('../../components/sections/BlockQuote.vue' /* webpackChunkName: "components/sections-block-quote" */).then(c => wrapFunctional(c.default || c)),
  SectionsBlogEdit: () => import('../../components/sections/BlogEdit.vue' /* webpackChunkName: "components/sections-blog-edit" */).then(c => wrapFunctional(c.default || c)),
  SectionsBlogPage: () => import('../../components/sections/BlogPage.vue' /* webpackChunkName: "components/sections-blog-page" */).then(c => wrapFunctional(c.default || c)),
  SectionsBrands: () => import('../../components/sections/Brands.vue' /* webpackChunkName: "components/sections-brands" */).then(c => wrapFunctional(c.default || c)),
  SectionsCalloutBlock: () => import('../../components/sections/CalloutBlock.vue' /* webpackChunkName: "components/sections-callout-block" */).then(c => wrapFunctional(c.default || c)),
  SectionsEdit: () => import('../../components/sections/Edit.vue' /* webpackChunkName: "components/sections-edit" */).then(c => wrapFunctional(c.default || c)),
  SectionsEditFeaturedProducts: () => import('../../components/sections/EditFeaturedProducts.vue' /* webpackChunkName: "components/sections-edit-featured-products" */).then(c => wrapFunctional(c.default || c)),
  SectionsFeaturedProducts: () => import('../../components/sections/FeaturedProducts.vue' /* webpackChunkName: "components/sections-featured-products" */).then(c => wrapFunctional(c.default || c)),
  SectionsFeatures: () => import('../../components/sections/Features.vue' /* webpackChunkName: "components/sections-features" */).then(c => wrapFunctional(c.default || c)),
  SectionsHero: () => import('../../components/sections/Hero.vue' /* webpackChunkName: "components/sections-hero" */).then(c => wrapFunctional(c.default || c)),
  SectionsHeroAlt: () => import('../../components/sections/HeroAlt.vue' /* webpackChunkName: "components/sections-hero-alt" */).then(c => wrapFunctional(c.default || c)),
  SectionsIntro: () => import('../../components/sections/Intro.vue' /* webpackChunkName: "components/sections-intro" */).then(c => wrapFunctional(c.default || c)),
  SectionsNotification: () => import('../../components/sections/Notification.vue' /* webpackChunkName: "components/sections-notification" */).then(c => wrapFunctional(c.default || c)),
  SectionsPricing: () => import('../../components/sections/Pricing.vue' /* webpackChunkName: "components/sections-pricing" */).then(c => wrapFunctional(c.default || c)),
  SectionsProduct: () => import('../../components/sections/Product.vue' /* webpackChunkName: "components/sections-product" */).then(c => wrapFunctional(c.default || c)),
  SectionsRecommendedProducts: () => import('../../components/sections/RecommendedProducts.vue' /* webpackChunkName: "components/sections-recommended-products" */).then(c => wrapFunctional(c.default || c)),
  SectionsSalesTeam: () => import('../../components/sections/SalesTeam.vue' /* webpackChunkName: "components/sections-sales-team" */).then(c => wrapFunctional(c.default || c)),
  SectionsSearch: () => import('../../components/sections/Search.vue' /* webpackChunkName: "components/sections-search" */).then(c => wrapFunctional(c.default || c)),
  SectionsTeam: () => import('../../components/sections/Team.vue' /* webpackChunkName: "components/sections-team" */).then(c => wrapFunctional(c.default || c)),
  SectionsTestimonials: () => import('../../components/sections/Testimonials.vue' /* webpackChunkName: "components/sections-testimonials" */).then(c => wrapFunctional(c.default || c)),
  SectionsTimeline: () => import('../../components/sections/Timeline.vue' /* webpackChunkName: "components/sections-timeline" */).then(c => wrapFunctional(c.default || c)),
  SectionsUserAuthForm: () => import('../../components/sections/UserAuthForm.vue' /* webpackChunkName: "components/sections-user-auth-form" */).then(c => wrapFunctional(c.default || c)),
  SectionsBlogs: () => import('../../components/sections/blogs.vue' /* webpackChunkName: "components/sections-blogs" */).then(c => wrapFunctional(c.default || c)),
  SectionsContactForm: () => import('../../components/sections/contactForm.vue' /* webpackChunkName: "components/sections-contact-form" */).then(c => wrapFunctional(c.default || c)),
  SectionsFooterContactForm: () => import('../../components/sections/footerContactForm.vue' /* webpackChunkName: "components/sections-footer-contact-form" */).then(c => wrapFunctional(c.default || c)),
  SectionsProductsform: () => import('../../components/sections/productsform.vue' /* webpackChunkName: "components/sections-productsform" */).then(c => wrapFunctional(c.default || c)),
  SectionsSubCategoryList: () => import('../../components/sections/subCategoryList.vue' /* webpackChunkName: "components/sections-sub-category-list" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  FooterTop: () => import('../../components/footerTop.vue' /* webpackChunkName: "components/footer-top" */).then(c => wrapFunctional(c.default || c)),
  SiteFooter: () => import('../../components/siteFooter.vue' /* webpackChunkName: "components/site-footer" */).then(c => wrapFunctional(c.default || c)),
  SiteHeader: () => import('../../components/siteHeader.vue' /* webpackChunkName: "components/site-header" */).then(c => wrapFunctional(c.default || c)),
  UserNav: () => import('../../components/userNav.vue' /* webpackChunkName: "components/user-nav" */).then(c => wrapFunctional(c.default || c)),
  UtilsValidations: () => import('../../components/utils/validations.js' /* webpackChunkName: "components/utils-validations" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
