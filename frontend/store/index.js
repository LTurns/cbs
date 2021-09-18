import products from '~/static/products.json'
import featuredProducts from '~/static/featuredProducts.json'
import blogStories from '~/static/blogstories.json'
import categories from '~/static/categories.json'
import subCategories from '~/static/subcategories.json'

export const state = () => ({
  productItems: products,
  featuredProducts,
  blogStories,
  categories,
  subCategories,
})

export const getters = {
  Products: (state) => state.productItems,
  Categories: (state) => state.categories,
  SubCategories: (state) => state.subCategories,
  fibreBlowing: (state) =>
    state.categories.filter((el) => el.category === 'Fibre Blowing'),
  utilities: (state) =>
    state.categories.filter((el) => el.category === 'Utilities'),
  telecoms: (state) =>
    state.categories.filter((el) => el.category === 'Telecoms'),
  clientTools: (state) =>
    state.categories.filter((el) => el.category === 'Client Tools'),
  featuredItems: (state) => state.featuredProducts,
  BlogStories: (state) => state.blogStories,
}
