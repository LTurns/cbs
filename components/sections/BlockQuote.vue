<template>
  <section class="pt-5 pb-5 blockquote-section">
    <blockquote :class="`${text} classy-bq`">
      <slot> </slot>
    </blockquote>
  </section>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: () => 'black--text',
    },
  },
}
</script>

<style>
.classy-bq {
  border-left: 2px solid #fde36d;
  box-shadow: 4px 0px 6px -6px #222;
  margin: 1rem 20px;
  padding: 0.7em 25px;
}

.blockquote-section {
  width: 90%;
  margin: 0 auto;
  opacity: 0.95;
  padding: 20px;
  text-align: left;
}

@media screen and (max-width: 800px) {
  .blockquote-section {
    width: 100%;
    margin: 0 auto;
    opacity: 0.95;
    padding: 10px;
  }
}
</style>
