// // import products from '~/static/products.json'
// // import featuredProducts from '~/static/featuredProducts.json'
// // import blogStories from '~/static/blogstories.json'
// // import categories from '~/static/categories.json'
// // import subCategories from '~/static/subcategories.json'

// export default {
//   state: () => ({
//     name: '',
//     productId: '',
//     img: [],
//     mainImg: '',
//     category: [],
//     subCategory: [],
//     description: [],
//     features: [],
//     intro: '',
//     videos: [],
//     configurationTitle: '',
//     configurationIntro: [],
//     configurationImage: '',
//     tables: [],
//     accessories: [],
//     countInStock: 0,
//     recommendedProducts: [],
//     hasSubCategories: false,
//     enquiries: 0,
//   }),
//   actions: {
//     getAllProducts: async () => {
//       const config = {
//         headers: {
//           'Access-Control-Allow-Origin': '*',
//         },
//       }

//       const { data } = await this.$axios.get(
//         'https://cbsbackend.herokuapp.com/api/products',
//         config
//       )

//       return data
//     },
//     getProduct: async ({ id, timeout }) => {
//       const config = {
//         headers: {
//           'Access-Control-Allow-Origin': '*',
//         },
//       }

//       const { data } = await this.$axios.get(
//         `https://cbsbackend.herokuapp.com/api/products/${id}`,
//         config
//       )

//       this.mutations.update(data)
//     },
//     mutations: {
//       update(data) {
//         state.name = data[0].name
//         state.category = data[0].category
//         state.productId = data[0].productId
//         state.intro = data[0].intro
//         state.img = data[0].img
//         state.mainImg = data[0].mainImg
//         state.subCategory = data[0].subCategory
//         state.description = data[0].description
//         state.features = data[0].features
//         state.videos = data[0].videos
//         state.configurationTitle = data[0].configurationTitle
//         state.configurationIntro = data[0].configurationIntro
//         state.configurationImage = data[0].configurationImage
//         state.tables = data[0].tables
//         state.accessories = data[0].accessories
//         state.countInStock = data[0].countInStock
//         state.recommendedProducts = data[0].recommendedProducts
//         state.hasSubCategories = data[0].hasSubCategories
//         state.enquiries = data[0].hasSubCategories
//       },
//     },
//   },
// }

// // export const getters = {
// //   Products: (state) => state.productItems,
// //   Categories: (state) => state.categories,
// //   SubCategories: (state) => state.subCategories,
// //   fibreBlowing: (state) =>
// //     state.categories.filter((el) => el.category === 'Fibre Blowing'),
// //   utilities: (state) =>
// //     state.categories.filter((el) => el.category === 'Utilities'),
// //   telecoms: (state) =>
// //     state.categories.filter((el) => el.category === 'Telecoms'),
// //   clientTools: (state) =>
// //     state.categories.filter((el) => el.category === 'Client Tools'),
// //   featuredItems: (state) => state.featuredProducts,
// //   BlogStories: (state) => state.blogStories,
// // }

// import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  product: [],
})

export const getters = {}

export const actions = {
  async getProduct({ commit }) {
    const { data } = await this.$axios.$get(
      `https://cbsbackend.herokuapp.com/api/products/617596887b71833a0305c4df`
    )
    commit('SET_PRODUCT', data)
  },
  // getProduct({ commit }) {
  //   axios
  //     .get(
  //       `https://cbsbackend.herokuapp.com/api/products/617596887b71833a0305c4df`
  //     )
  //     .then((response) => {
  //       commit('SET_PRODUCT', response.data)
  //     })
  // },
}

export const mutations = {
  SET_PRODUCT(state, payload) {
    state.product.push(payload)
  },
}
