<template>
  <div>
    <SectionsProduct :data="item" />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async fetch() {
    try {
      const result = await axios.get(
        'https://tranquil-basin-55259.herokuapp.com/product'
      )
      this.products = result.data

      this.item.push(this.products.find((el) => el.uid === this.id))
    } catch (error) {
      this.item.push(
        this.$store.getters.Products.find((el) => el.uid === this.id)
      )
    }
    return this.item
  },
  data() {
    return {
      id: this.$route.params.id,
      item: [],
    }
  },
}
</script>
