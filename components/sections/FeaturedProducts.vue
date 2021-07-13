/* eslint-disable vue/require-prop-types */
<template>
  <section :class="$vuetify.theme.dark ? 'black' : 'white'" class="py-1">
    <v-container fluid>
      <v-row class="mx-auto" style="max-width: 1200px">
        <v-col v-for="(plan, ix) in data" :key="`plan-${ix}`" cols="12" md="4">
          <v-hover v-slot="{ hover }" class="card">
            <v-card
              :elevation="hover ? 24 : plan.elevation"
              :color="plan.color"
              max-width="400"
              min-height="600"
              :class="hover ? 'zoom' : 'notzoom'"
              class="mx-auto transition-swing"
            >
              <nuxt-link :to="`/product/${plan.id}`">
                <h4
                  class="text-uppercase text-center mt-10 mb-3 pt-10 pl-5 pr-5"
                  style="letter-spacing: 0.15em"
                  v-text="plan.name"
                ></h4>
                <v-img
                  :src="plan.mainImg"
                  width="250"
                  :lazy-src="plan.mainImg"
                  aspect-ratio="1"
                  class="image grey lighten-2 rounded-lg"
                ></v-img>
                <!-- <img :src="plan.mainImg" width="250" /> -->
                <v-card-text
                  class="subtitle-1 black--text"
                  v-text="plan.intro"
                ></v-card-text>
                <v-list>
                  <v-list-item>
                    <v-btn
                      color="primary"
                      large
                      block
                      rounded
                      class="mx-auto my-3"
                    >
                      View Now
                    </v-btn>
                  </v-list-item>
                </v-list>
              </nuxt-link>
            </v-card></v-hover
          >
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.zoom {
  transform: scale(1.025) translate(0, -10px);
  transition: transform 0.2s;
}
.notzoom {
  transition: transform 0.2s;
}

.image {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.card h3 {
  font-size: 14px;
}
</style>
