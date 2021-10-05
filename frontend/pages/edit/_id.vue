<template>
  <div><SectionsEdit v-if="id" :id="id" /></div>
</template>

<script>
// import axios from 'axios'

export default {
  transition: 'productid',
  data() {
    return {
      id: this.$route.params.id,
      item: null,
    }
  },
  created() {
    this.getProduct()
  },
  methods: {
    async getProduct() {
      this.listLoading = true
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      try {
        const response = await this.$axios.get(
          `http://localhost:5001/api/products/${this.$route.params.id}`,
          config
        )

        this.item.push(response.data)
        // this.item.push(response.data)
        return this.item
      } catch (error) {
        console.log(error)
      }
    },
  },
  // created() {
  //   this.getAllMusics()
  // },
  // methods() {
  //    getAllMusics = async () => {
  //     this.listLoading = true
  //     try {
  //       const response = await axios.get(
  //         `/api/products/${this.$route.params.id}`,
  //         {}
  //       )
  //       this.item.push(response.data)
  //       return this.item
  //     } catch (error) {
  //       throw new Error(error)
  //     }
  //   },
  // },
}
</script>

<style scoped>
.productid-enter-active,
.productid-leave-active {
  transition: opacity 0.5s;
}
.productid-enter,
.productid-leave-active {
  opacity: 0;
}
</style>
