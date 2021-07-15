<template>
  <section id="home">
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHero />
        <v-responsive
          :style="{ background: $vuetify.theme.themes['dark'].accent }"
          class="max-auto mx-auto text-center"
        >
          <h2
            class="text-h4 text-md-h3 text-center yellow--text text--darken-2 font-weight-black mt-10 mb-5"
          >
            Products and Services
          </h2>
        </v-responsive>
        <SectionsIntro />
        <v-responsive
          :style="{ background: $vuetify.theme.themes['dark'].accent }"
          class="max-auto mx-auto text-center"
        >
          <h2
            class="text-h4 text-md-h3 text-center yellow--text text--darken-2 font-weight-black mt-10 mb-5"
          >
            Featured Products
          </h2>
        </v-responsive>
        <SectionsFeaturedProducts :data="featuredProducts" />
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
