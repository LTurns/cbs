export { default as SectionsBlockQuote } from '../../components/sections/BlockQuote.vue'
export { default as SectionsBlogEdit } from '../../components/sections/BlogEdit.vue'
export { default as SectionsBlogPage } from '../../components/sections/BlogPage.vue'
export { default as SectionsBrands } from '../../components/sections/Brands.vue'
export { default as SectionsCalloutBlock } from '../../components/sections/CalloutBlock.vue'
export { default as SectionsEdit } from '../../components/sections/Edit.vue'
export { default as SectionsEditFeaturedProducts } from '../../components/sections/EditFeaturedProducts.vue'
export { default as SectionsFeaturedProducts } from '../../components/sections/FeaturedProducts.vue'
export { default as SectionsFeatures } from '../../components/sections/Features.vue'
export { default as SectionsHero } from '../../components/sections/Hero.vue'
export { default as SectionsHeroAlt } from '../../components/sections/HeroAlt.vue'
export { default as SectionsIntro } from '../../components/sections/Intro.vue'
export { default as SectionsMainSearch } from '../../components/sections/MainSearch.vue'
export { default as SectionsNotification } from '../../components/sections/Notification.vue'
export { default as SectionsPricing } from '../../components/sections/Pricing.vue'
export { default as SectionsProduct } from '../../components/sections/Product.vue'
export { default as SectionsRecommendedProducts } from '../../components/sections/RecommendedProducts.vue'
export { default as SectionsSalesTeam } from '../../components/sections/SalesTeam.vue'
export { default as SectionsSearch } from '../../components/sections/Search.vue'
export { default as SectionsTeam } from '../../components/sections/Team.vue'
export { default as SectionsTestimonials } from '../../components/sections/Testimonials.vue'
export { default as SectionsTimeline } from '../../components/sections/Timeline.vue'
export { default as SectionsUserAuthForm } from '../../components/sections/UserAuthForm.vue'
export { default as SectionsBlogs } from '../../components/sections/blogs.vue'
export { default as SectionsContactForm } from '../../components/sections/contactForm.vue'
export { default as SectionsFooterContactForm } from '../../components/sections/footerContactForm.vue'
export { default as SectionsProductsform } from '../../components/sections/productsform.vue'
export { default as SectionsSubCategoryList } from '../../components/sections/subCategoryList.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as FooterTop } from '../../components/footerTop.vue'
export { default as SiteFooter } from '../../components/siteFooter.vue'
export { default as SiteHeader } from '../../components/siteHeader.vue'
export { default as UserNav } from '../../components/userNav.vue'
export { default as UtilsValidations } from '../../components/utils/validations.js'

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
