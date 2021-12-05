/* eslint-disable vue/require-prop-types */
<template>
  <section>
    <v-container fluid>
      <v-row class="mx-auto pb-5" mb="10">
        <v-col v-for="(plan, ix) in data" :key="`plan-${ix}`" cols="12" md="4">
          <!-- <div v-show="plan.subCategory.length == 0"> -->
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
                class="text-uppercase text-center black--text mt-5 pt-5 pl-5 pr-5 pb-5"
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
              <!-- <img :src="plan.mainImg" width="250" /> -->
              <v-card-text
                class="subtitle-1 black--text"
                v-text="plan.intro"
              ></v-card-text>
              <!-- <v-list>
                  <v-list-item> -->
              <div
                style="
                  position: absolute;
                  bottom: 0;
                  right: 10px;
                  display: block;
                  margin-right: 5%;
                "
              >
                <div v-if="!plan.hasSubCategories">
                  <nuxt-link class="link" :to="`/product/${plan._id}`">
                    <v-btn x-large class="my-3"
                      ><v-icon left large color="primary">mdi-play</v-icon
                      >View</v-btn
                    >
                  </nuxt-link>
                </div>
                <div v-if="plan.hasSubCategories">
                  <nuxt-link
                    class="link align-center"
                    :to="`/category/${plan.name.toLowerCase()}`"
                  >
                    <v-btn x-large class="my-3"
                      ><v-icon left large>mdi-play</v-icon>View</v-btn
                    >
                  </nuxt-link>
                </div>
              </div>
              <!-- Product ID -->
              <div v-if="plan.productId.length !== 0">
                <div
                  class="pa-5"
                  style="
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    display: block;
                    margin-left: 2%;
                  "
                >
                  <div
                    class="d-inline mt-10 pa-2 blue-grey darken-4 white--text"
                  >
                    ID
                  </div>
                  <div class="d-inline yellow darken-2 black--text pa-2">
                    {{ plan.productId }}
                  </div>
                </div>
              </div>
              <div v-else>
                <div class="ribbon ribbon-bottom-left">
                  <span>More Products</span>
                </div>
              </div>
              <!-- Product ID -->
              <!-- </div>
                <div class="d-inline black white--text pa-2">
                  <{{ plan.productId }} -->
              <!-- </div> -->
              <!-- </div> -->
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
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 100px;
}
</style>
