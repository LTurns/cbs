<template>
  <div>
    <SectionsProduct :id="id" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    }
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
