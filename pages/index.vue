<template>
  <section id="home">
    <v-row no-gutters>
      <v-col>
        <SectionsHero />
        <!-- <v-responsive
          :style="{ background: $vuetify.theme.themes['dark'].accent }"
          class="max-auto mx-auto text-center"
        >
          <h2
            class="text-h4 text-md-h4 text-center white--text text--darken-2 font-weight-black mt-10 mb-10"
          >
            PRODUCTS AND SERVICES
          </h2>
        </v-responsive> -->
        <!-- <SectionsIntro /> -->
        <v-responsive
          :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
          class="max-auto mx-auto text-center"
        >
          <h3
            :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
            class="text-h4 text-center font-weight-light mb-xs-4 mt-10 mb-5"
          >
            FEATURED PRODUCTS
          </h3>
        </v-responsive>
        <SectionsFeaturedProducts :data="featuredProducts" />
        <SectionsBrands />
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  computed: {
    featuredProducts() {
      return this.$store.getters.fibreBlowing.slice(0, 3)
    },
  },
}
</script>
