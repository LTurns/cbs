<template>
  <section class="pt-10 pb-10 blockquote-section">
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
  border-left: 5px solid rgb(240, 217, 11);
  margin: 1.5em 20px;
  padding: 0.7em 25px;
}

.blockquote-section {
  width: 80%;
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
