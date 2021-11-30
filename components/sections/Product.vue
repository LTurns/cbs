<template>
  <section>
    <div v-if="$store.state.product.length !== 0">
      <SectionsHeroAlt
        :hero-alt="[
          {
            src: '',
            heading: product.name,
            icon: '',
          },
        ]"
        class="grey lighten-3"
      />
      <v-row no-gutters align="center" justify="center">
        <v-col cols="12" md="6" sm="12" class="white">
          <v-carousel hide-delimiter-background class="white">
            <v-carousel-item
              v-for="img in product.img"
              :key="img.id"
              :src="img.image"
              contain
            >
              <!-- <v-img
                  :src="img.image"
                  :lazy-src="img.image"
                /> -->
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col
          align-content="center"
          cols="12"
          md="6"
          sm="12"
          class="grey lighten-4"
        >
          <div id="home" class="section-showcase">
            <!-- <div class="container"> -->
            <!-- <div> -->

            <h5
              class="
                text-md-h5 text-sm-h5 text-h5
                font-weight-black
                black--text
                mt-10
                pt-10
                mb-10
              "
            >
              PRODUCT INFORMATION
              <!-- <div> -->
              <!-- </div> -->
            </h5>
            <!-- <div
              style="
                border-bottom: 5px solid orange;
                box-shadow: 0 4px 6px -6px #222;
                line-height: 1;
                padding-top: 2%;
                text-align: center;
              "
            ></div> -->
            <div class="d-inline mt-10 pa-2 blue-grey lighten-4 black--text">
              ID
            </div>
            <div class="d-inline yellow darken-2 black--text pa-2">
              {{ product.productId }}
            </div>
          </div>
          <div v-for="paragraph in product.description" :key="paragraph.id">
            <p
              class="black--text mt-10 px-10"
              style="line-height: 30px; font-size: 16px; margin-bottom: 20px"
            >
              {{ paragraph.paragraph }}
            </p>
          </div>
          <div class="mb-10 mt-10">
            <nuxt-link exact :to="`/contact`" class="mb-10 px-10 pb-10">
              <v-btn x-large color="green" dark>
                <v-icon left large color="primary">mdi-play</v-icon>Enquire
                Now</v-btn
              ></nuxt-link
            >
          </div>
        </v-col>
      </v-row>

      <!-- Large Text -->
      <!-- <div id="about" class="pt-5 pb-5 ml-0 mr-0"> -->
      <div class="overlay yellow darken-2">
        <v-tabs v-model="tab" black--text>
          <v-tabs-slider class="yellow darken-2"></v-tabs-slider>

          <v-tab href="#features"> Features </v-tab>
          <!-- <v-tab href="#more"> Images </v-tab> -->
          <v-tab v-show="product.accessories.length != 0" href="#accessories">
            Accessories</v-tab
          >
          <v-tab v-show="product.tables.length != 0" href="#config">
            Configuration
          </v-tab>
          <v-tab v-show="product.videos.length > 0" href="#video">
            Video Tutorials
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item :key="1" value="features">
            <v-row mt="10" ml="10" mr="10" pb="10" class="grey lighten-4">
              <v-card-text>
                <v-col cols="12" md="12" sm="12">
                  <!-- <div
                    class="
                      fonttitle
                      white--text
                      text--lighten-4
                      font-weight-black
                    "
                    style="
                      line-height: 1;
                      padding: 3%;
                      margin-left: 1%;
                      margin-right: 1%;
                      margin-bottom: 4%;
                    "
                  >
                    FEATURES OF THE {{ product.name.toUpperCase() }}
                  </div> -->
                  <v-card>
                    <v-col
                      v-for="feature in product.features"
                      :key="feature.id"
                      cols="12"
                      md="12"
                      sm="12"
                      class="mt-7"
                      align="center"
                    >
                      <div
                        class="
                          fonttitle
                          black--text
                          text--lighten-4
                          font-weight-black
                        "
                        style="
                          border-bottom: 2px solid #fde36d;
                          box-shadow: 0 4px 6px -6px #222;
                          line-height: 1;
                          padding: 3%;
                        "
                      >
                        {{ feature.heading.toUpperCase() }}
                      </div>
                      <!-- </v-toolbar> -->
                      <!-- <v-list> -->
                      <div v-for="item in feature.list" :key="item.listItem">
                        <!-- <v-list-tile> -->
                        <ul class="list">
                          <li style="text-align: left">
                            {{ item.listItem }}
                          </li>
                        </ul>
                        <!-- </v-list-tile> -->
                      </div>
                      <!-- </v-list> -->
                      <!-- </v-list-item-content> -->
                      <!-- </v-hover> -->
                      <!-- <v-card-text>Features</v-card-text> -->
                    </v-col>
                  </v-card>
                </v-col>
              </v-card-text>
              <!-- </v-row> -->
            </v-row>
          </v-tab-item>
          <v-tab-item :key="2" value="accessories">
            <v-card class="grey lighten-4">
              <!-- <v-card-text> -->
              <!-- <div
                  class="
                    fonttitle
                    white--text
                    text--lighten-4
                    font-weight-black
                  "
                  style="
                    line-height: 1;
                    padding: 3%;
                    margin-left: 1%;
                    margin-right: 1%;
                    margin-bottom: 4%;
                  "
                >
                  ACCESSORIES OF THE {{ product.name.toUpperCase() }}
                </div> -->
              <!-- </v-card-text> -->
              <SectionsFeaturedProducts
                :color="'grey lighten-4'"
                :data="product.accessories"
              />
              <!-- </v-card-text> -->
            </v-card>
          </v-tab-item>
          <v-tab-item :key="3" value="config">
            <v-card class="grey lighten-4" align="center">
              <v-card-text>
                <!-- <div
                  class="
                    fonttitle
                    white--text
                    text--lighten-4
                    font-weight-black
                  "
                  style="
                    line-height: 1;
                    padding: 3%;
                    margin-left: 1%;
                    margin-right: 1%;
                  "
                >
                  CONFIGURING THE {{ product.name.toUpperCase() }}
                </div> -->
                <div
                  v-for="paragraph in product.configurationIntro"
                  :key="paragraph.id"
                >
                  <p
                    class="black--text mt-5"
                    style="
                      line-height: 30px;
                      font-size: 15px;
                      margin-bottom: 5px;
                    "
                  >
                    {{ paragraph.paragraph }}
                  </p>
                </div>
              </v-card-text>
              <v-card
                min-height="600"
                class="mx-auto transition-swing mt-10 ml-2 mr-2 mb-10"
              >
                <v-row
                  v-for="table in product.tables"
                  :key="table.id"
                  class="flex-row mr-4 ml-4"
                >
                  <v-col cols="12" md="12" align="center">
                    <div
                      class="
                        fonttitle
                        black--text
                        text--lighten-4
                        font-weight-black
                      "
                      style="
                        border-bottom: 2px solid #fde36d;
                        box-shadow: 0 4px 6px -6px #222;
                        line-height: 1;
                        padding: 3%;
                        margin-top: 10px;
                        margin-bottom: 10px;
                      "
                    >
                      {{ table.title.toUpperCase() }}
                    </div>
                  </v-col>
                  <v-col cols="12" md="4" align="center" justify="center">
                    <v-img
                      max-height="450"
                      :src="table.image"
                      class="configimage mx-auto"
                      :lazy-src="table.image"
                    >
                    </v-img>
                  </v-col>
                  <v-col cols="12" md="8" align-self="center" class="mt-5 mb-5">
                    <div class="white--text">
                      <table>
                        <thead>
                          <tr>
                            <th
                              v-for="(column, index) in table.columns"
                              :key="index"
                            >
                              {{ column }}
                            </th>
                            <!-- <th v-for="heading in table.headings">{{heading}}</th> -->
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, index) in table.items" :key="index">
                            <td
                              v-for="(column, columnIndex) in table.columns"
                              :key="columnIndex"
                              class="black--text"
                            >
                              {{ item[column] }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <!-- <h3 class="text-h5 text-uppercase font-weight-thin text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </h3>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium. Doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. emo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos
                </p> -->
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-card>
          </v-tab-item>
          <v-tab-item :key="4" value="video" class="grey lighten-4">
            <v-card class="mt-10 mb-10 ml-4 mr-4 white">
              <div v-for="video in product.videos" :key="video.title">
                <v-col cols="12" md="12" align="center">
                  <div
                    class="
                      fonttitle
                      black--text
                      text--lighten-4
                      font-weight-black
                    "
                    style="
                      border-bottom: 2px solid #fde36d;
                      box-shadow: 0 4px 6px -6px #222;
                      line-height: 1;
                      padding: 3%;
                    "
                  >
                    {{ video.title.toUpperCase() }}
                  </div>
                  <!-- <div
                      v-for="video in product.video.split(',')"
                      :key="video.id"
                    > -->
                  <iframe
                    class="video"
                    style="background-color: white"
                    :src="video.video"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <!-- </div> -->
                </v-col>
              </div>
            </v-card>
          </v-tab-item>
          <v-tab-item :key="5" value="more"> </v-tab-item>
        </v-tabs-items>
      </div>
      <h4
        class="
          text-h4 text-center
          font-weight-bold
          mb-xs-4
          mt-10
          mb-5
          pl-5
          pr-5
        "
      >
        SIMILAR PRODUCTS
      </h4>
      <SectionsRecommendedProducts :data="product.recommendedProducts" />
    </div>
    <div v-else>
      <v-progress-circular
        class="text-center"
        indeterminate
        color="amber"
        align="center"
        justify="center"
      ></v-progress-circular>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Team from './Team.vue'
export default {
  comonents: {
    Team,
  },
  props: {
    id: {
      type: String,
      default: () => '',
    },
  },
  data: () => ({
    tab: 'features',
    areFeatures: true,
    areAccessories: true,
    areConfig: true,
    areVideos: true,
    tutorials: '',
    ourTeam: [
      {
        name: 'Andy Sibun',
        position: 'Technical Manager',
        phone: '01572 898515',
        email: 'andy.sibun@cbsproducts.com',
        photo: '',
      },
    ],
  }),
  computed: {
    ...mapState(['product']),
    product() {
      return this.$store.state.product
    },
  },
  created() {
    this.getIdProduct()
  },
  methods: {
    ...mapActions(['getProduct']),
    getIdProduct() {
      this.$store.dispatch('getProduct', this.id)
    },
    isMobile() {
      if (screen.width <= 760) {
        return true
      } else {
        return false
      }
    },
    showAccessories() {
      this.data.accesories === []
        ? (this.areAccessories = false)
        : (this.areAccessories = true)

      return this.areAccessories
    },
  },
}
</script>

<style lang="scss">
.list {
  font-size: 16px;
  // border-bottom: 0.5px solid rgb(247, 215, 113);
  box-shadow: 0 0px 1px 0px #dddcd6;
  list-style-type: square;
  padding: 2%;
}

@media screen and (max-width: 800px) {
  .list {
    padding: 6%;
  }
}

// .section-showcase {
//   padding: 5%;
// }

.configInfo {
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.3);
  margin: 5%;
}

.table {
  margin: 2%;
  margin-bottom: 5%;
}

th {
  padding-left: 10px;
  padding-right: 10px;
  background-color: rgb(48, 55, 61);
  padding: 20px;
  text-transform: uppercase;
  color: white;
}

table tbody tr:nth-child(2n) td {
  background: rgb(253, 235, 181);
  color: black;
}

#about {
  padding-left: 20px;
  padding-right: 20px;
}
#home {
  top: 50%;
}

td {
  padding: 10px;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: black;
} /* table td { */
/* text-align: left;
  padding: 15px;
  font-size: 14px;
  border-right: 2px solid #ddd120;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: rgb(243, 239, 239);
} */

.video {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  width: 600px;
  height: 400px;
  margin-bottom: 5%;
}

.v-progress-circular {
  margin: 1rem;
}

// .carouselimage {
//   margin-left: auto;
//   margin-right: auto;
//   height: auto;
//   width: 50%;
// }

.product-title {
  text-transform: uppercase;
  margin-bottom: 15px;
  font-size: 25px;
  line-height: 1.2em;
}

.sub-title {
  color: #000;
  font-weight: 700;
  padding-right: 38px;
}

table {
  border-collapse: collapse;
  box-shadow: 0 5px 10px #e1e5ee;
  background-color: white;
  text-align: left;
  overflow: hidden;
  width: 100%;
}
thead {
  box-shadow: 0 5px 10px #e1e5ee;
}

th {
  padding: 1rem 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 0.7rem;
  font-weight: 900;
}

td {
  padding: 1rem 2rem;
  color: black;
}

.fonttitle {
  font-size: 2rem;
  max-width: 100ch;
  margin-bottom: 1%;
}

.carousel {
  height: 100vh;
}
// .carouselimage {
//   // display: block;
//   object-fit: cover;
// }

// @media screen and (min-width: 1900px) {
//   .carouselheight {
//     height: 80vh;
//   }
// }

@media screen and (max-width: 1100px) {
  // .carouselimage {
  //   margin-left: auto;
  //   margin-right: auto;
  //   height: auto;
  //   width: 30%;
  // }

  // .carouselheight {
  //   height: 100%;
  // }
}

@media screen and (max-width: 658px) {
  .table {
    margin: 2%;
    margin-bottom: 5%;
  }

  #home {
    top: 20%;
  }
  // .carouselheight {
  //   height: 100%;
  // }

  // .carouselimage {
  //   margin-left: auto;
  //   margin-right: auto;
  //   height: auto;
  //   width: 60%;
  // }

  th {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
  }

  table td {
    text-align: left;
    font-size: 11px;
    padding: 10px;
  }
  table td:last-child {
    border-right: none;
  }
  table tbody tr:nth-child(2n) td {
    background: rgb(243, 239, 239);
  }
  .video {
    max-width: 300px;
    max-height: 200px;
  }

  .configimage {
    max-width: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .fonttitle {
    font-size: 1.5rem;
    max-width: 100ch;
    margin-bottom: 10%;
  }
}
</style>
