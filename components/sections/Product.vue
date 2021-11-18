<template>
  <section>
    <div v-if="$store.state.product.length !== 0">
      <v-row class="carouselheight">
        <v-col cols="12" md="6" sm="12">
          <v-carousel hide-delimiter-background>
            <v-carousel-item
              v-for="img in product.img"
              :key="img.id"
              reverse-transition="fade-transition"
              transition="fade-transition"
              style="margin-top: 5%; margin-bottom: 10%"
            >
              <a target="_blank" :href="img.image">
                <v-img
                  class="carouselimage"
                  :src="img.image"
                  :lazy-src="img.image"
                />
              </a>
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="12" md="6" sm="12" class="grey lighten-4">
          <div id="home" class="section-showcase">
            <!-- <div class="container"> -->
            <!-- <div> -->
            <h1
              class="
                d-inline
                pa-5
                mt-10
                text-md-h2 text-sm-h3 text-h4
                font-weight-black
                text-center
                black--text
              "
            >
              {{ product.name.toUpperCase() }}
            </h1>
            <p class="mt-10 pa-5">
              {{ product.intro }}
            </p>
            <div class="pa-5">
              <div class="d-inline mt-10 pa-2 blue-grey darken-4 white--text">
                Product ID
              </div>
              <div class="d-inline yellow darken-2 black--text pa-2">
                {{ product.productId }}
              </div>
            </div>
            <br /><br />
            <nuxt-link exact :to="`/enquiry`" class="learn pa-5 mr-10 mb-10">
              <v-btn :x-large="$vuetify.breakpoint.smAndUp" text outlined white
                ><v-icon left large color="primary">mdi-play</v-icon>Enquire
                Now</v-btn
              ></nuxt-link
            >
            <!-- </div> -->
            <!-- </div> -->
          </div>
        </v-col>
      </v-row>

      <!-- Large Text -->
      <!-- <div id="about" class="pt-5 pb-5 ml-0 mr-0"> -->
      <div class="overlay yellow darken-2">
        <v-tabs v-model="tab" pb="20" black--text class="yellow darken-2">
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
            <v-row mt="10" ml="10" mr="10" pb="10" class="blue-grey darken-4">
              <v-card-text>
                <v-col cols="12" md="12" sm="12">
                  <div
                    class="
                      fonttitle
                      white--text
                      text--lighten-4
                      font-weight-black
                    "
                    style="
                      border-bottom: 2px solid #fde36d;
                      box-shadow: 0 4px 6px -6px #222;
                      line-height: 1;
                      padding: 3%;
                      margin-left: 1%;
                      margin-right: 1%;
                    "
                  >
                    FEATURES OF THE {{ product.name.toUpperCase() }}
                  </div>
                  <div
                    style="
                      line-height: 30px;
                      font-size: 15px;
                      margin-bottom: 20px;
                    "
                  >
                    <div
                      v-for="paragraph in product.description"
                      :key="paragraph.id"
                    >
                      <p
                        class="white--text mt-10"
                        style="
                          line-height: 30px;
                          font-size: 16px;
                          margin-bottom: 20px;
                          padding-left: 20px;
                          padding-right: 20px;
                        "
                      >
                        {{ paragraph.paragraph }}
                      </p>
                    </div>
                  </div>
                  <v-card class="ml-2 mr-2 mb-2">
                    <v-col
                      v-for="feature in product.features"
                      :key="feature.id"
                      cols="12"
                      md="12"
                      sm="12"
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
                        <ul>
                          <li
                            class="list pt-0 lighten-2"
                            style="text-align: left"
                          >
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
            <v-card class="blue-grey darken-4">
              <v-card-text>
                <div
                  class="
                    fonttitle
                    white--text
                    text--lighten-4
                    font-weight-black
                  "
                  style="
                    border-bottom: 2px solid #fde36d;
                    box-shadow: 0 4px 6px -6px #222;
                    line-height: 1;
                    padding: 3%;
                    margin-left: 1%;
                    margin-right: 1%;
                  "
                >
                  ACCESSORIES OF THE {{ product.name.toUpperCase() }}
                </div>
              </v-card-text>
              <SectionsFeaturedProducts
                :color="'blue-grey darken-4'"
                :data="product.accessories"
              />
            </v-card>
          </v-tab-item>
          <v-tab-item :key="3" value="config">
            <v-card class="blue-grey darken-4">
              <v-card-text>
                <div
                  class="
                    fonttitle
                    white--text
                    text--lighten-4
                    font-weight-black
                  "
                  style="
                    border-bottom: 2px solid #fde36d;
                    box-shadow: 0 4px 6px -6px #222;
                    line-height: 1;
                    padding: 3%;
                    margin-left: 1%;
                    margin-right: 1%;
                  "
                >
                  CONFIGURING THE {{ product.name.toUpperCase() }}
                </div>
                <div
                  v-for="paragraph in product.configurationIntro"
                  :key="paragraph.id"
                >
                  <p
                    class="white--text mt-5"
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
                class="mx-auto transition-swing mt-10 ml-2 mr-2 mb-2"
                :elevation="hover ? 24 : 6"
              >
                <!-- <h4
              class="text-uppercase yellow darken-1 text-center mt-10 mb-3 pt-5 pl-5 pr-5 pb-5"
              style="letter-spacing: 0.15em"
              v-text="data.configurationTitle"
            ></h4> -->
                <!-- <v-img
              max-height="800"
              :src="`/${data.configImage}`"
              max-width="700"
              class="mx-auto mt-10"
              :lazy-src="`/${data.configImage}`"
            /> -->
                <v-row
                  v-for="table in product.tables"
                  :key="table.id"
                  no-gutters
                  class="flex-row mr-4 ml-4"
                >
                  <v-col cols="12" md="12" align-self="center">
                    <!-- <h4
                      class="
                        text-uppercase
                        yellow
                        lighten-2
                        text-center
                        mt-10
                        mb-3
                        pt-5
                        pl-2
                        pr-2
                        pb-5
                      "
                      style="
                        letter-spacing: 0.15em;
                        border-bottom: 2px solid #fde36d;
                        box-shadow: 0 4px 6px -6px;
                      "
                      v-text="table.title"
                    ></h4> -->
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
                      {{ table.title.toUpperCase() }}
                    </div>
                  </v-col>
                  <v-col cols="12" md="4" align-self="center">
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
          <v-tab-item :key="4" value="video">
            <!-- <v-container fluid mt="10"> -->
            <v-card class="blue-grey darken-4">
              <div v-for="video in product.videos" :key="video.title">
                <v-col cols="12" md="12" align-self="center">
                  <div
                    class="
                      fonttitle
                      white--text
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
      ></v-progress-circular>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
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
  font-size: 14px;
  border-bottom: 1px solid rgb(236, 235, 235);
  &:before {
    content: counter(fancy);
    background: rgb(255, 221, 83);
    border-radius: 50%;
    color: rgb(255, 221, 83);
    display: inline-block;
    text-align: center;
    padding: 0.1rem 0.5rem;
    margin: 1rem;
  }
}

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

td {
  padding: 10px;
  font-size: 14px;
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

.carouselimage {
  margin-left: auto;
  margin-right: auto;
  height: auto;
  width: 50%;
}

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

.configimage {
  max-width: 300px;
}

@media screen and (max-width: 1500px) {
  .carouselheight {
    height: 80vh;
  }

  .carouselimage {
    margin-left: auto;
    margin-right: auto;
    height: auto;
    width: 50%;
  }
}

@media screen and (min-width: 1100px) {
  /* .carouselheight {
    height: 80vh;
  } */

  .carouselimage {
    width: 50%;
    height: auto;
  }
}

@media screen and (max-width: 1100px) {
  .carouselimage {
    margin-left: auto;
    margin-right: auto;
    height: auto;
    width: 30%;
  }

  .carouselheight {
    height: 100%;
  }
}

@media screen and (max-width: 658px) {
  .table {
    margin: 2%;
    margin-bottom: 5%;
  }

  .carouselheight {
    height: 100%;
  }

  .carouselimage {
    margin-left: auto;
    margin-right: auto;
    height: auto;
    width: 60%;
  }

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
    max-width: 100px;
  }
  .fonttitle {
    font-size: 1.5rem;
    max-width: 100ch;
    margin-bottom: 1%;
  }
}
</style>
