<template>
  <div>
    <SectionsProduct :id="id" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  // computed: {
  //   // ...mapState(['product']),
  //   product() {
  //     return this.$store.dispatch('resetProduct')
  //   },
  // },
  created() {
    this.refreshProduct()
  },
  methods: {
    ...mapActions(['resetProduct']),
    refreshProduct() {
      this.$store.dispatch('refreshProduct')
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
