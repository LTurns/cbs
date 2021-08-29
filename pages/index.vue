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
          :class="$vuetify.theme.dark ? 'grey darken-4' : 'yellow darken-1'"
          class="max-auto mx-auto text-center"
        >
          <div
            class="hero-text mt-20 mb-20"
            style="margin-top: 50px; margin-bottom: 50px"
          >
            <blockquote>
              CBS has become the partner of choice in a number of high profile,
              international fibre optic cable projects around the globe.
            </blockquote>
          </div>
        </v-responsive>
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
  transition: 'home',
  computed: {
    featuredProducts() {
      return this.$store.getters.fibreBlowing.slice(0, 3)
    },
  },
}
</script>

<style>
blockquote {
  font-size: 18px;
  width: 60%;
  margin: 50px auto;
  font-style: italic;
  position: relative;
  border-bottom: 2px solid orange;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  text-indent: 15px;
  color: rgb(61, 60, 60);
  border-bottom: 2px solid #f3e38a;
  box-shadow: 0 4px 6px -6px #222;
}

.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
