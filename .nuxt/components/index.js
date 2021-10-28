export const SectionsBlockQuote = () => import('../../components/sections/BlockQuote.vue' /* webpackChunkName: "components/sections-block-quote" */).then(c => wrapFunctional(c.default || c))
export const SectionsBlogEdit = () => import('../../components/sections/BlogEdit.vue' /* webpackChunkName: "components/sections-blog-edit" */).then(c => wrapFunctional(c.default || c))
export const SectionsBlogPage = () => import('../../components/sections/BlogPage.vue' /* webpackChunkName: "components/sections-blog-page" */).then(c => wrapFunctional(c.default || c))
export const SectionsBrands = () => import('../../components/sections/Brands.vue' /* webpackChunkName: "components/sections-brands" */).then(c => wrapFunctional(c.default || c))
export const SectionsCalloutBlock = () => import('../../components/sections/CalloutBlock.vue' /* webpackChunkName: "components/sections-callout-block" */).then(c => wrapFunctional(c.default || c))
export const SectionsEdit = () => import('../../components/sections/Edit.vue' /* webpackChunkName: "components/sections-edit" */).then(c => wrapFunctional(c.default || c))
export const SectionsEditFeaturedProducts = () => import('../../components/sections/EditFeaturedProducts.vue' /* webpackChunkName: "components/sections-edit-featured-products" */).then(c => wrapFunctional(c.default || c))
export const SectionsFeaturedProducts = () => import('../../components/sections/FeaturedProducts.vue' /* webpackChunkName: "components/sections-featured-products" */).then(c => wrapFunctional(c.default || c))
export const SectionsFeatures = () => import('../../components/sections/Features.vue' /* webpackChunkName: "components/sections-features" */).then(c => wrapFunctional(c.default || c))
export const SectionsHero = () => import('../../components/sections/Hero.vue' /* webpackChunkName: "components/sections-hero" */).then(c => wrapFunctional(c.default || c))
export const SectionsHeroAlt = () => import('../../components/sections/HeroAlt.vue' /* webpackChunkName: "components/sections-hero-alt" */).then(c => wrapFunctional(c.default || c))
export const SectionsIntro = () => import('../../components/sections/Intro.vue' /* webpackChunkName: "components/sections-intro" */).then(c => wrapFunctional(c.default || c))
export const SectionsNotification = () => import('../../components/sections/Notification.vue' /* webpackChunkName: "components/sections-notification" */).then(c => wrapFunctional(c.default || c))
export const SectionsPricing = () => import('../../components/sections/Pricing.vue' /* webpackChunkName: "components/sections-pricing" */).then(c => wrapFunctional(c.default || c))
export const SectionsProduct = () => import('../../components/sections/Product.vue' /* webpackChunkName: "components/sections-product" */).then(c => wrapFunctional(c.default || c))
export const SectionsRecommendedProducts = () => import('../../components/sections/RecommendedProducts.vue' /* webpackChunkName: "components/sections-recommended-products" */).then(c => wrapFunctional(c.default || c))
export const SectionsSalesTeam = () => import('../../components/sections/SalesTeam.vue' /* webpackChunkName: "components/sections-sales-team" */).then(c => wrapFunctional(c.default || c))
export const SectionsSearch = () => import('../../components/sections/Search.vue' /* webpackChunkName: "components/sections-search" */).then(c => wrapFunctional(c.default || c))
export const SectionsTeam = () => import('../../components/sections/Team.vue' /* webpackChunkName: "components/sections-team" */).then(c => wrapFunctional(c.default || c))
export const SectionsTestimonials = () => import('../../components/sections/Testimonials.vue' /* webpackChunkName: "components/sections-testimonials" */).then(c => wrapFunctional(c.default || c))
export const SectionsTimeline = () => import('../../components/sections/Timeline.vue' /* webpackChunkName: "components/sections-timeline" */).then(c => wrapFunctional(c.default || c))
export const SectionsUserAuthForm = () => import('../../components/sections/UserAuthForm.vue' /* webpackChunkName: "components/sections-user-auth-form" */).then(c => wrapFunctional(c.default || c))
export const SectionsBlogs = () => import('../../components/sections/blogs.vue' /* webpackChunkName: "components/sections-blogs" */).then(c => wrapFunctional(c.default || c))
export const SectionsContactForm = () => import('../../components/sections/contactForm.vue' /* webpackChunkName: "components/sections-contact-form" */).then(c => wrapFunctional(c.default || c))
export const SectionsFooterContactForm = () => import('../../components/sections/footerContactForm.vue' /* webpackChunkName: "components/sections-footer-contact-form" */).then(c => wrapFunctional(c.default || c))
export const SectionsProductsform = () => import('../../components/sections/productsform.vue' /* webpackChunkName: "components/sections-productsform" */).then(c => wrapFunctional(c.default || c))
export const SectionsSubCategoryList = () => import('../../components/sections/subCategoryList.vue' /* webpackChunkName: "components/sections-sub-category-list" */).then(c => wrapFunctional(c.default || c))
export const Logo = () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const FooterTop = () => import('../../components/footerTop.vue' /* webpackChunkName: "components/footer-top" */).then(c => wrapFunctional(c.default || c))
export const SiteFooter = () => import('../../components/siteFooter.vue' /* webpackChunkName: "components/site-footer" */).then(c => wrapFunctional(c.default || c))
export const SiteHeader = () => import('../../components/siteHeader.vue' /* webpackChunkName: "components/site-header" */).then(c => wrapFunctional(c.default || c))
export const UserNav = () => import('../../components/userNav.vue' /* webpackChunkName: "components/user-nav" */).then(c => wrapFunctional(c.default || c))
export const UtilsValidations = () => import('../../components/utils/validations.js' /* webpackChunkName: "components/utils-validations" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
