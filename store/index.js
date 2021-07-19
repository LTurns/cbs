import products from '~/static/products.json'
import featuredProducts from '~/static/featuredProducts.json'
import blogStories from '~/static/blogstories.json'

export const state = () => ({
  productItems: products,
  featuredProducts,
  blogStories,
})

export const getters = {
  fibreBlowing: (state) =>
    state.productItems.filter((el) => el.category === 'Fibre Blowing'),
  utilities: (state) =>
    state.productItems.filter((el) => el.category === 'Utilities'),
  telecoms: (state) =>
    state.productItems.filter((el) => el.category === 'Telecoms'),
  clientTools: (state) =>
    state.productItems.filter((el) => el.category === 'Client Tools'),
  featuredItems: (state) => state.featuredProducts,
  BlogStories: (state) => state.blogStories,
}
