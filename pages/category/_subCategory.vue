<template>
  <div>
    <SectionsSubCategoryList :data="subCategory" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      id: this.$route.params.subCategory,
      productCategory: [],
    }
  },

  computed: {
    ...mapState(['subCategories']),
    subCategory() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.subCategories.map((el) =>
        el.subCategory === this.id ? this.productCategory.push(el) : ''
      )

      return this.productCategory
    },
  },
}
</script>
