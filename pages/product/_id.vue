<template>
  <div>
    <SectionsProduct :data="product" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      id: this.$route.params.id,
      item: '',
    }
  },

  computed: {
    ...mapState(['productItems']),
    product() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.item = this.productItems.find((el) => el.id === this.id)

      return this.item
    },
  },
}
</script>
