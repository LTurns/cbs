<template>
  <div>
    <SectionsBlogPage :blog="blog" />
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
    ...mapState(['blogStories']),
    blog() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.item = this.blogStories.find((el) => el.id === this.id)

      return this.item
    },
  },
}
</script>
