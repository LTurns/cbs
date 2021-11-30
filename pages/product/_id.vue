<template>
  <div>
    <SectionsProduct :id="id" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  computed: {
    ...mapState(['product']),
    product() {
      return this.$store.state.product
    },
  },
  created() {
    this.getIdProduct()
  },
  methods: {
    ...mapActions(['getProduct']),
    getIdProduct() {
      this.$store.dispatch('getProduct', this.id)
    },
  },
  transition: 'productid',
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
