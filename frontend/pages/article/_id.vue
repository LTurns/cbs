<template>
  <div>
    <SectionsBlogPage :blog="blog" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  transition: 'article',
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
<style scoped>
.article-enter-active,
.article-leave-active {
  transition: opacity 0.5s;
}
.article-enter,
.article-leave-active {
  opacity: 0;
}
</style>
