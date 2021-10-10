<template>
  <section class="pt-10 pb-10 blockquote-section">
    <blockquote :class="text">
      <slot> </slot>
    </blockquote>
  </section>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: () => 'classy-bq black--text',
    },
  },
}
</script>

<style>
.classy-bq {
  border-left: 5px solid rgb(11, 8, 27);
  margin: 1.5em 20px;
  padding: 0.7em 25px;
  /* quotes: '\201C''\201D''\2018''\2019'; */
}

.blockquote-section {
  width: 80%;
  margin: 0 auto;
  opacity: 0.95;
  padding: 20px;
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
