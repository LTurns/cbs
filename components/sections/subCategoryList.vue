/* eslint-disable vue/require-prop-types */
<template>
  <section
    class="py-5"
    :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
  >
    <v-container fluid>
      <v-row class="mx-auto pb-5" style="max-width: 1200px" mb="10">
        <v-col v-for="(plan, ix) in data" :key="`plan-${ix}`" cols="12" md="4">
          <!-- <div v-show="plan.subCategory.length == 0"> -->
          <v-hover v-slot="{ hover }" class="card">
            <v-card
              :elevation="hover ? 24 : plan.elevation"
              :color="plan.color"
              max-width="400"
              min-height="550"
              :class="hover ? 'zoom' : 'notzoom'"
              class="mx-auto transition-swing"
            >
              <h4
                class="text-uppercase text-center black--text mt-5 pt-5 pl-5 pr-5 pb-5"
                style="letter-spacing: 0.15em; font-size: 20px"
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
              <nuxt-link
                class="link"
                :to="`/product/${plan.uid}`"
                style="position: absolute; bottom: 0; left: 35%"
              >
                <v-btn
                  :x-large="$vuetify.breakpoint.smAndUp"
                  text
                  class="my-3"
                  outlined
                  black
                  ><v-icon left large color="primary">mdi-play</v-icon
                  >View</v-btn
                >
              </nuxt-link>
            </v-card></v-hover
          >
          <!-- </div> -->
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
  methods: {
    link() {},
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
