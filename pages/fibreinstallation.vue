<template>
  <section class="grey lighten-4">
    <v-row no-gutters>
      <v-col cols="12" align="center">
        <SectionsHeroAlt :hero-alt="heroAlt" />
        <v-col class="blue-grey darken-4">
          <SectionsBlockQuote text="white--text">
            <slot>
              Our Fibre Blowing products include Tornado, Jetstream and
              Hurricane Cable Blowing Machine. We are known particularly for
              these products, which have been used by multple clients.
            </slot>
          </SectionsBlockQuote>
        </v-col>
        <!-- <v-col class="yellow darken-2"> -->
        <SectionsSearch :data="filteredList" category="fibreinstallation" />
        <!-- </v-col> -->
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  transition: 'fibreblowing',
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
          if (product.category.includes('Fibre Blowing')) {
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
