<template>
  <section class="grey lighten-4">
    <v-row no-gutters>
      <v-col cols="12" align="center">
        <SectionsHeroAlt :hero-alt="heroAlt" />
        <v-col class="white">
          <SectionsBlockQuote text="black--text">
            <slot> Our Winches and Trailers are used for... </slot>
          </SectionsBlockQuote>
        </v-col>
        <SectionsSearch :data="filteredList" category="Winches and Trailers" />
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  transition: 'telecoms',
  data() {
    return {
      heroAlt: [
        {
          src: '',
          heading: ' WINCHES AND TRAILERS ',
          icon: '',
          image: 'telecoms.svg',
        },
      ],
      filteredList: [],
    }
  },
  created() {
    this.getAllTelecomsProducts()
  },
  methods: {
    async getAllTelecomsProducts() {
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

        data.forEach((product) => {
          if (product.category.includes('Winches and Trailers')) {
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
.telecoms-enter-active,
.telecoms-leave-active {
  transition: opacity 0.5s;
}
.telecoms-enter,
.telecoms-leave-active {
  opacity: 0;
}
</style>
