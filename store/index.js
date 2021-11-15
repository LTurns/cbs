import axios from 'axios'

export const state = () => ({
  products: [],
  product: [],
})

export const getters = {}

// get the asyncronous data from the actions
export const actions = {
  async getProduct(context, id) {
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }
    try {
      const product = await axios.get(
        `https://cbsbackend.herokuapp.com/api/products/${id}`,
        config
      )
      context.commit('getProduct', product.data)
      return product
    } catch (error) {
      throw new Error(error)
    }
  },
  // async getProducts(context) {
  //   const config = {
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //     },
  //   }

  //   try {
  //     const products = await axios.get(
  //       'https://cbsbackend.herokuapp.com/api/products',
  //       config
  //     )
  //     // eslint-disable-next-line no-undef
  //     context.commit('getProducts', products.data)
  //     return products
  //   } catch (error) {
  //     throw new Error(error)
  //   }
  // },
}

// update the state through mutating what you receive in the actions - this process is called flux
export const mutations = {
  getProduct(state, product) {
    state.product = product
  },
  // getProducts(state, products) {
  //   state.products = products
  // },
}
