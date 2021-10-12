<template>
  <div>
    <SectionsSubCategoryList :data="productCategory" />
  </div>
</template>

<script>
export default {
  transition: 'subcategory',
  data() {
    return {
      id: this.$route.params.subCategory,
      productCategory: [],
    }
  },
  created() {
    this.getSubCategory()
  },
  methods: {
    async getSubCategory() {
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

        // console.log(data)

        data.forEach((product) => {
          if (product.subCategory.toString().toLowerCase() === this.id) {
            this.productCategory.push(product)
          }
        })

        return this.productCategory
      } catch (err) {
        throw new Error('Error Fetching Products')
      }
    },
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
