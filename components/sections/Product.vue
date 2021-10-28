<template>
  <section>
    <div v-for="product in data" :key="product.productId">
      <v-row>
        <v-col cols="12" md="6" sm="12" mt="10">
          <v-carousel height="85vh" mt="10" hide-delimiter-background>
            <v-carousel-item
              v-for="img in product.img"
              :key="img.id"
              reverse-transition="fade-transition"
              transition="fade-transition"
              style="
                margin-left: auto;
                margin-right: auto;
                height: auto;
                width: 55%;
                margin-top: 40px;
              "
            >
              <v-img :src="img.image" :lazy-src="img.image" />
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
                pa-2
                mt-10
                text-md-h2 text-sm-h3 text-h4
                font-weight-black
                text-center
              "
            >
              {{ product.name.toUpperCase() }}
            </h1>
            <p class="mt-10">
              {{ product.intro }}
            </p>
            <div class="d-inline pa-2 mt-10 yellow accent-4 white--text">
              Product ID
            </div>
            <div class="d-inline black white--text pa-2">
              {{ product.productId }}
            </div>
            <br /><br />
            <nuxt-link exact :to="`/enquiry`" class="learn">
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
            <v-row fluid mt="10" pb="10" class="blue-grey darken-4">
              <!-- <v-row class="mx-auto mb-7 mt-3"> -->
              <v-col cols="12" md="12" sm="12">
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
                    <!-- <v-list-item-content> -->
                    <!-- <v-toolbar color="yellow" light> -->
                    <h4
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
                        box-shadow: 0 10px 10px -10px;
                      "
                      v-text="feature.heading"
                    ></h4>
                    <!-- </v-toolbar> -->
                    <v-list-item
                      v-for="item in feature.list"
                      :key="item.listItem"
                      class="list pt-0 lighten-2"
                      style="text-align: left"
                    >
                      {{ item.listItem }}
                    </v-list-item>
                    <!-- </v-list-item-content> -->
                    <!-- </v-hover> -->
                    <!-- <v-card-text>Features</v-card-text> -->
                  </v-col>
                </v-card>
              </v-col>
              <!-- </v-row> -->
            </v-row>
          </v-tab-item>
          <v-tab-item :key="2" value="accessories">
            <v-card>
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
                    <h4
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
                    ></h4>
                  </v-col>
                  <v-col cols="12" md="4" align-self="center">
                    <v-img
                      max-height="450"
                      :src="table.image"
                      max-width="300"
                      class="mx-auto"
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
                  <h4
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
                    v-text="video.title"
                  ></h4>
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
  data: () => ({
    tab: 'features',
    areFeatures: true,
    areAccessories: true,
    areConfig: true,
    areVideos: true,
    tutorials: '',
  }),
  // computed: {
  //   videos() {
  //     // eslint-disable-next-line vue/no-side-effects-in-computed-properties
  //     return (this.tutorials = this.data.videos.split(' '))
  //   },
  // },
  methods: {
    showAccessories() {
      this.data.accesories === []
        ? (this.areAccessories = false)
        : (this.areAccessories = true)

      return this.areAccessories
    },
  },
}
</script>

<style>
.list {
  font-size: 14px;
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
  background-color: rgb(236, 229, 229);
  padding: 20px;
  text-transform: uppercase;
  color: black;
}

table tbody tr:nth-child(2n) td {
  background: rgb(243, 239, 239);
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

@media screen and (max-width: 600px) {
  .table {
    margin: 2%;
    margin-bottom: 5%;
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

  /* #about {
    padding-left: 0;
    padding-right: 0;
  } */

  /* .carousel {
    height: 80vh;
  } */
}

.product-img {
  cursor: pointer;
  margin-top: 10px;
}

.product-title {
  text-transform: uppercase;
  margin-bottom: 15px;
  font-size: 25px;
  line-height: 1.2em;
}

.colors {
  margin: 0px;
  padding: 0px;
  display: inline-block;
  margin-top: 20px;
  list-style: none;
}
.colors p {
  float: left;
  margin-top: 10px;
  color: #000;
  font-weight: 700;
  padding-right: 20px;
}
.color-box {
  height: 35px;
  width: 35px;
  margin: 5px;
  display: inline-block;
  cursor: pointer;
  opacity: 0.8;
}

.active-col {
  outline: 1px dashed black;
}

.size {
  margin: 0px;
  padding: 0px;
  display: inline-block;
  margin-top: 20px;
  list-style: none;
}
.size p {
  float: left;
  margin-top: 10px;
  color: #000;
  font-weight: 700;
  padding-right: 38px;
}

.size-box {
  padding: 12px;
  margin: 0px 5px;
  display: inline-block;
  cursor: pointer;
  color: #000;
  font-weight: 400;
}
.active-siz {
  background-color: #b2dfdb;
}
/* .buy-product {
  margin-top: 15px;
  padding: 15px 0px;
  border-top: 1px dashed #ddd;
} */

.product-qty {
  display: inline-block;
  margin-top: 20px;
  width: 100%;
}

/* .product-qty button.items-count {
  background-color: #fff;
  border: 1px #ddd solid;
  border-radius: 2px;
} */

.product-qty button.items-count {
  font-size: 18px;
  line-height: 12px;
  height: 40px;
  width: 40px;
  color: #000;
}

.product-qty .qty {
  height: 40px;
  text-align: center;
  width: 70px;
  vertical-align: top;
  color: #000;
}

.qty {
  /* background-color: #ffffff; */
  border: 1px #ced4da solid;
  border-radius: 2px;
  color: #666;
  font-size: 15px;
  font-weight: bold;
  margin: 0 -5px;
}

.sub-title {
  color: #000;
  font-weight: 700;
  padding-right: 38px;
}

.cart-btn {
  margin: 15px 0px;
  border-bottom: 1px #e5e5e5 solid;
}

.cart-btn i {
  padding: 0px 10px;
}

.socal-link {
  margin: 0px;
  padding: 0px;
  margin-top: 20px;
  list-style: none;
  display: block;
}
.socal-link li {
  list-style: none;
  display: inline-block;
  margin: 0px 8px;
}

.socal-link li a {
  border: 1px #ddd solid;
  color: #666;
  font-size: 15px;
  line-height: 36px;
  padding: 8px 12px;
}

.socal-link li a:hover {
  background: #ff5252;
  color: #fff;
}

.activeimg {
  border: 1px solid #000;
}

.overview {
  margin-top: 30px;
}

:root {
  --primary-color: #333;
  --secondary-color: #444;
  --ternary-color: #555;
  --light-color: #ccc;
  --light-secondary-color: #ddd;
  --light-ternary-color: #eee;
  --overlay-color: rgba(0, 0, 0, 0.7);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Catamaran', sans-serif;
  line-height: 1.6;
  color: var(--primary-color);
  font-size: 1.1rem;
}

h1,
h2,
h3,
h4 {
  line-height: 1.3;
}

a {
  color: var(--secondary-color);
  text-decoration: none;
}

ul {
  list-style: none;
}

img {
  width: 100%;
}

/* .container {
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
} */

/* navbar */

/* .navbar {
  font-size: 1.2rem;
  padding: 0.3rem 0;
} */

/* .navbar .container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.navbar ul {
  display: flex;
  justify-self: flex-end;
  align-items: center;
  justify-content: center;
}

.navbar a {
  padding: 0 1rem;
}

.navbar a:hover {
  color: var(--ternary-color);
} */

/* showcase section */

.section-showcase {
  margin: 4rem 3rem;
}

/* .section-showcase .container {
  display: grid;
  grid-template-columns: 1fr 1fr 1f;
  gap: 0rem;
  align-items: center;
  justify-content: center;
} */

.section-showcase h1 {
  font-size: 3rem;
  color: var(--primary-color);
}

/* .section-showcase p {
  margin: 1rem 0;
} */

/* .btn {
  display: inline-block;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  border-radius: 30px;
} */

/* .btn:hover {
  background: var(--secondary-color);
} */

/* large text section */

/* .section-large-text {
  position: relative;
  background: url('https://i.ibb.co/1RS1dqC/section-b.jpg') bottom center/cover
    no-repeat;
  height: 600px;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--overlay-color);
} */
/*
.section-large-text-inner {
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
  max-width: 860px;
  padding: 5rem 0;
} */

.section-large-text-inner h2 {
  font-size: 5rem;
  margin-top: 1rem;
}

.section-large-text-inner h3 {
  font-size: 2rem;
}

.section-large-text-inner p {
  font-size: 1.5rem;
  margin-top: 1rem;
}

/* #feature-card {
  min-height: 800px;
} */
/* 
@media (max-width: 768px) {
  .section-showcase .container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  #feature-card {
    min-height: 0px;
  }

  .section-showcase .container div:first-child {
    order: 2;
  }

  .section-showcase .container div:nth-child(2) {
    order: -1;
  }

  .section-showcase h1 {
    font-size: 2rem;
  }

  .section-showcase img {
    width: 80%;
    margin: auto;
  } */

/* .section-large-text-inner h2 {
    font-size: 3rem;
  }

  .section-large-text-inner h3 {
    font-size: 1.5rem;
  }

  .section-large-text-inner p {
    font-size: 1.25rem;
  }

  .section-gallery .gallery {
    display: grid; */
/* grid-template-columns: repeat(3, 1fr);
  }

  .section-gallery .gallery img:first-child {
    grid-row: 1/1;
    grid-column: 1/1;
  }

  .section-gallery .gallery img:nth-child(2) {
    grid-row: 2/2;
    grid-column: 2/4;
  }

  .section-gallery .gallery img:last-child {
    display: none;
  } */

/* .section-footer {
    padding: 2rem 0;
  }

  .section-footer .container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .section-footer div:nth-child(2),
  .section-footer div:nth-child(3) {
    display: none;
  }
} */

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

a {
  text-decoration: none;
  color: #2962ff;
}

.status {
  border-radius: 0.2rem;
  background-color: red;
  padding: 0.2rem 1rem;
  text-align: center;
}
.status-pending {
  background-color: #fff0c2;
  color: #a68b00;
}

.status-paid {
  background-color: #c8e6c9;
  color: #388e3c;
}

.status-unpaid {
  background-color: #ffcdd2;
  color: #c62828;
}

.amount {
  text-align: right;
}

tr:nth-child(even) {
  background-color: #f4f6fb;
}

#small-hero {
  background-image: url('../../static/orangewireheader.jpg');
  background-size: cover;
}
</style>
