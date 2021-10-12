<template>
  <div>
    <SectionsProduct :data="item" />
  </div>
</template>

<script>
export default {
  transition: 'productid',
  data() {
    return {
      id: this.$route.params.id,
      item: [],
    }
  },
  created() {
    this.getProduct()
  },
  methods: {
    async getProduct() {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      try {
        const response = await this.$axios.get(
          `https://cbsbackend.herokuapp.com/api/products/${this.$route.params.id}`,
          config
        )
        this.item.push(response.data)
        return this.item
      } catch (error) {}
    },
  },
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
