<template>
  <section :class="color">
    <v-container>
      <!-- <v-row class="mx-auto pb-5" style="max-width: 1200px" mb="10"> -->
      <v-row mb="10">
        <v-col>
          <v-hover v-slot="{ hover }" class="card">
            <v-card
              :elevation="hover ? 24 : 4"
              :color="data.color"
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
                v-text="data.name"
              ></h4>
              <v-img
                :src="data.mainImg"
                alt=""
                width="250"
                :lazy-src="data.mainImg"
                aspect-ratio="1"
                class="image grey lighten-2 rounded-lg mt-5 mb-10"
              ></v-img>
              <!-- <img :src="data.mainImg" width="250" /> -->
              <v-card-text
                class="subtitle-1 black--text"
                style="text-align: center; padding: 5%"
                v-text="data.intro"
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
                <div v-if="!data.hasSubCategories">
                  <nuxt-link class="link" :to="`/product/${data._id}`">
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
                <div v-if="data.hasSubCategories">
                  <nuxt-link
                    class="link align-center"
                    :to="`/category/${data.name.toLowerCase()}`"
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
              <!-- Product ID -->
              <div v-if="data.productId.length">
                <div
                  class="d-inline black--text pa-2"
                  style="
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    display: block;
                    margin-left: 2%;
                  "
                >
                  {{ data.productId }}
                </div>
              </div>
              <div v-else>
                <div class="ribbon ribbon-bottom-left">
                  <span>More Products</span>
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
      type: Object,
      default: () => {},
    },
    color: {
      type: String,
      default: () => 'feature',
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

/* common */
.ribbon {
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: absolute;
}
.ribbon::before,
.ribbon::after {
  position: absolute;
  z-index: -1;
  content: '';
  display: block;
  border: 5px solid #f5773c;
}
.ribbon span {
  position: absolute;
  display: block;
  width: 225px;
  padding: 15px 0;
  background-color: #f5773c;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  color: #fff;
  font: 600 13px/1 'Lato', sans-serif;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  text-align: center;
}

/* bottom left*/
.ribbon-bottom-left {
  bottom: -10px;
  left: -10px;
}
.ribbon-bottom-left::before,
.ribbon-bottom-left::after {
  border-bottom-color: transparent;
  border-left-color: transparent;
}
.ribbon-bottom-left::before {
  bottom: 0;
  right: 0;
}
.ribbon-bottom-left::after {
  top: 0;
  left: 0;
}
.ribbon-bottom-left span {
  right: -25px;
  bottom: 30px;
  transform: rotate(45deg);
}
</style>
