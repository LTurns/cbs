<template>
  <div>
    <SectionsBlogPage :id="id" />
  </div>
</template>

<script>
export default {
  transition: 'article',
  data() {
    return {
      id: this.$route.params.id,
      blogList: [],
    }
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
