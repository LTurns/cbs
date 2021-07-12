<template>
  <section id="home">
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHero />
        <v-responsive class="max-auto mx-auto text-center" max-width="600">
          <h2
            class="text-h4 text-md-h3 text-center font-weight-black mt-10 mb-5"
          >
            Our Products and Services
          </h2>
        </v-responsive>
        <SectionsIntro />
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
