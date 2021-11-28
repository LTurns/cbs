<template>
  <div>
    <SectionsFeaturedProducts :data="searchedProduct" />
  </div>
</template>

<script>
export default {
  transition: 'search',
  data() {
    return {
      name: this.$route.params.name,
      searchedProduct: [],
    }
  },
  created() {
    this.getProduct()
  },
  methods: {
    // capitalise(string) {
    //   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    // },
    async getName() {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      // instead of doingthe search through word, do it through individual letters - count the letters individually in the search box. if the number of letters is similar to the amount in the name of the product, put that product up. (if that product contains that word also).
      try {
        const { data } = await this.$axios.get(
          `https://cbsbackend.herokuapp.com/api/products/name/${this.name}`,
          config
        )

        this.searchedProduct = data
      } catch (err) {
        throw new Error('Error Fetching Products')
      }
    },
    async getProduct() {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      try {
        const { data } = await this.$axios.get(
          'https://cbsbackend.herokuapp.com/api/products',
          config
        )

        data.forEach((product) => {
          if (this.name === product.name) {
            this.searchedProduct.push(product)
          } else if (this.name === product.productId) {
            this.searchedProduct.push(product)
          }
        })

        return this.searchedProduct
      } catch (err) {
        throw new Error('Error Fetching Products')
      }
    },
  },
}
</script>

<style scoped>
.search-enter-active,
.search-leave-active {
  transition: opacity 0.5s;
}
.search-enter,
.search-leave-active {
  opacity: 0;
}
</style>
