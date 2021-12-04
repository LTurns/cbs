<template>
  <section class="grey lighten-4">
    <v-row no-gutters>
      <v-col cols="12" align="center">
        <SectionsHeroAlt :hero-alt="heroAlt" />
        <v-col class="white">
          <SectionsBlockQuote text="black--text">
            <slot> Our Klein Tools are used for... </slot>
          </SectionsBlockQuote>
        </v-col>
        <SectionsSearch :data="filteredList" category="Klein Tools" />
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  transition: 'kleintools',
  data() {
    return {
      heroAlt: [
        {
          src: '',
          heading: 'KLEIN TOOLS',
        },
      ],
      filteredList: [],
    }
  },
  created() {
    this.getAllKleinToolsProducts()
  },
  methods: {
    async getAllKleinToolsProducts() {
      this.listLoading = true
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

        data.filter((product) => {
          if (product.category.includes('Klein Tools')) {
            this.filteredList.push(product)
          }
        })

        return this.filteredList
      } catch (err) {
        throw new Error('Error Fetching Products')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.kleintools-enter-active,
.kleintools-leave-active {
  transition: opacity 0.5s;
}
.kleintools-enter,
.kleintools-leave-active {
  opacity: 0;
}
</style>
