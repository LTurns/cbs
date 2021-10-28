/* eslint-disable vue/require-prop-types */
<template>
  <section :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'">
    <v-container fluid>
      <v-row class="mx-auto pb-5" style="max-width: 1200px" mb="10">
        <v-col v-for="(plan, ix) in data" :key="`plan-${ix}`" cols="12" md="4">
          <v-hover v-slot="{ hover }" class="card">
            <v-card
              :elevation="hover ? 24 : 4"
              :color="plan.color"
              max-width="500"
              height="610"
              :class="hover ? 'zoom' : 'notzoom'"
              class="mx-auto transition-swing"
            >
              <h4
                class="
                  text-uppercase text-center
                  black--text
                  mt-5
                  pt-5
                  pl-5
                  pr-5
                  pb-5
                "
                style="letter-spacing: 0.15em; font-size: 20px"
                v-text="plan.name"
              ></h4>
              <v-img
                :src="plan.mainImg"
                alt=""
                width="250"
                :lazy-src="plan.mainImg"
                aspect-ratio="1"
                class="image grey lighten-2 rounded-lg mt-5 mb-10"
              ></v-img>
              <v-card-text
                class="subtitle-1 black--text"
                v-text="plan.intro"
              ></v-card-text>
              <div style="position: absolute; bottom: 0; left: 35%">
                <div v-if="plan.subCategory.length === 0">
                  <nuxt-link class="link" :to="`/product/${plan._id}`">
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
                </div>
                <div v-else>
                  <nuxt-link
                    class="link align-center"
                    :to="`/category/${plan.subCategory}`"
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
                </div>
              </div>
            </v-card></v-hover
          >
          <v-btn
            color="orange lighten-2"
            align="center"
            dark
            v-bind="attrs"
            class="btn"
            style="
              display: block;
              margin-left: auto;
              margin-right: auto;
              width: 15%;
              margin-top: 10%;
            "
            v-on="on"
            @click="deleteAccessory(index)"
          >
            X
          </v-btn>
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
      default: () => ['accessories'],
    },
  },
  methods: {
    link() {},
    deleteAccessory(index) {
      this.accessories.splice(index, 1)
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
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 100px;
}
</style>
