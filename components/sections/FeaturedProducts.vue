/* eslint-disable vue/require-prop-types */
<template>
  <section
    class="py-5"
    :style="{ background: $vuetify.theme.themes['dark'].accent }"
  >
    <v-container fluid>
      <v-row class="mx-auto pb-5" style="max-width: 1200px" mb="10">
        <v-col v-for="(plan, ix) in data" :key="`plan-${ix}`" cols="12" md="4">
          <v-hover v-slot="{ hover }" class="card">
            <v-card
              :elevation="hover ? 24 : plan.elevation"
              :color="plan.color"
              max-width="400"
              min-height="450"
              :class="hover ? 'zoom' : 'notzoom'"
              class="mx-auto transition-swing"
            >
              <nuxt-link class="link" :to="`/product/${plan.id}`">
                <h4
                  class="text-uppercase text-center black--text grey lighten-3 mt-5 pt-5 pl-5 pr-5 pb-5"
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
                <!-- <v-list>
                  <v-list-item> -->
                <div class="text mt-10 mx-auto text-right">
                  <div
                    class="d-inline pa-2 mt-5 orange accent-4 white--text mb-5"
                  >
                    Product ID
                  </div>
                  <div class="d-inline pa-2 mt-5 black white--text mb-5">
                    {{ plan.productId }}
                  </div>
                </div>
                <!-- <v-btn
                      color="primary"
                      large
                      block
                      rounded
                      class="mx-auto my-3"
                    >
                      View Now
                    </v-btn> -->
                <!-- </v-list-item>
                </v-list> -->
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

.link {
  text-decoration: none;
}
</style>
