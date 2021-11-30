<template>
  <section class="grey lighten-4">
    <v-row no-gutters>
      <v-col cols="12" align="center">
        <SectionsHeroAlt :hero-alt="heroAlt" />
        <v-col class="grey lighten-2">
          <SectionsBlockQuote text="black--text">
            <slot>
              Our Fibre Blowing products include Tornado, Jetstream and
              Hurricane Cable Blowing Machine. We are known particularly for
              these products, which have been used by multple clients.
            </slot>
          </SectionsBlockQuote>
        </v-col>
        <!-- <v-col class="yellow darken-2"> -->
        <SectionsSearch :data="filteredList" />
        <!-- </v-col> -->
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  transition: 'fibreblowing',
  async fetch({ store }) {
    return await store.dispatch('product/getProduct')
  },
  data() {
    return {
      heroAlt: [
        {
          src: '',
          heading: ' FIBRE INSTALLATION ',
        },
      ],
      filteredList: [],
    }
  },
  created() {
    this.getAllFibreBlowingProducts()
  },
  methods: {
    async getAllFibreBlowingProducts() {
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

        data.forEach((product) => {
          if (
            (product.category.includes('Fibre Installation') &&
              !product.subCategory.length &&
              !product.isDraft) ||
            (product.subCategory.length === 1 &&
              product.subCategory.includes('Sample Name') &&
              !product.isDraft)
          ) {
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
.fibreblowing-enter-active,
.fibreblowing-leave-active {
  transition: opacity 0.5s;
}
.fibreblowing-enter,
.fibreblowing-leave-active {
  opacity: 0;
}
</style>
