<template>
  <div>
    <SectionsSubCategoryList :data="productCategory" />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  transition: 'subcategory',
  async fetch() {
    try {
      const result = await axios.get(
        'https://tranquil-basin-55259.herokuapp.com/product-sub-categories'
      )
      this.subProducts = result.data

      this.subProducts.map((el) =>
        el.subCategory === this.id ? this.productCategory.push(el) : ''
      )

      return this.productCategory
    } catch (error) {
      this.subProducts = this.$store.getters.SubCategories.map((el) =>
        el.subCategory === this.id ? this.productCategory.push(el) : ''
      )
      return this.productCategory
    }
  },
  data() {
    return {
      id: this.$route.params.subCategory,
      productCategory: [],
    }
  },
}
</script>

<style scoped>
.subcategory-enter-active,
.subcategory-leave-active {
  transition: opacity 0.5s;
}
.subcategory-enter,
.subcategory-leave-active {
  opacity: 0;
}
</style>
