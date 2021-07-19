<template>
  <section id="hero">
    <section id="home" class="section-showcase">
      <div class="container">
        <div>
          <h1>{{ data.name.toUpperCase() }}</h1>
          <p>
            {{ data.intro }}
          </p>
          <a href="#about" class="btn">Read More</a>
          <v-btn
            :x-large="$vuetify.breakpoint.smAndUp"
            text
            class="my-3"
            outlined
            white
            ><v-icon left large color="primary">mdi-play</v-icon
            ><nuxt-link exact :to="`/enquiry/${data.id}`" class="learn"
              >Enquire Now</nuxt-link
            ></v-btn
          >
        </div>
        <img :src="`/${data.mainImg}`" alt="" />
      </div>
    </section>

    <!-- Large Text -->
    <section id="about" class="section-large-text">
      <!-- <div class="overlay"> -->
      <v-tabs v-model="tab" black--text centered dark>
        <v-tabs-slider></v-tabs-slider>

        <v-tab href="#features"> Features </v-tab>
        <v-tab href="#more"> Images </v-tab>
        <v-tab href="#accessories"> Accessories </v-tab>
        <v-tab href="#config"> Configuration </v-tab>
        <v-tab href="#video"> Video Tutorials </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item :key="1" value="features" mt="10">
          <v-container
            fluid
            mt="10"
            :style="{ background: $vuetify.theme.themes['dark'].accent }"
          >
            <v-row class="mx-auto mt-7" style="max-width: 1200px">
              <v-col
                v-for="feature in data.item"
                :key="feature.id"
                cols="12"
                md="4"
                ><v-hover>
                  <v-card
                    max-width="400"
                    min-height="600"
                    class="mx-auto transition-swing"
                    :elevation="hover ? 24 : 6"
                  >
                    <v-list-item-content>
                      <!-- <v-toolbar color="yellow" light> -->
                      <h4
                        class="text-uppercase yellow darken-1 text-center mt-10 mb-3 pt-5 pl-5 pr-5 pb-5"
                        style="letter-spacing: 0.15em"
                        v-text="feature.main"
                      ></h4>
                      <!-- </v-toolbar> -->
                      <v-list-item
                        v-for="item in feature.name"
                        :key="item.listItem"
                        class="list pt-0"
                      >
                        {{ item.listItem }}
                      </v-list-item>
                    </v-list-item-content>
                  </v-card>
                </v-hover>
                <!-- <v-card-text>Features</v-card-text> -->
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab-item
          :key="2"
          value="accessories"
          :style="{ background: $vuetify.theme.themes['dark'].accent }"
        >
          <v-card flat>
            <SectionsFeaturedProducts :data="data.accessories" />
          </v-card>
        </v-tab-item>
        <v-tab-item
          :key="3"
          value="config"
          :style="{ background: $vuetify.theme.themes['dark'].accent }"
        >
          <v-card
            min-height="600"
            class="mx-auto transition-swing mt-10 ml-5 mr-5 mb-10"
            :elevation="hover ? 24 : 6"
          >
            <h4
              class="text-uppercase yellow darken-1 text-center mt-10 mb-3 pt-5 pl-5 pr-5 pb-5"
              style="letter-spacing: 0.15em"
              v-text="data.configurationTitle"
            ></h4>
            <v-card-text class="black--text mt-10 pl-10 pr-10">
              {{ data.configurationIntro }}
            </v-card-text>
            <v-img
              max-height="800"
              :src="`/${data.configImage}`"
              max-width="700"
              class="mx-auto mt-10"
              :lazy-src="`/${data.configImage}`"
            />
            <v-row
              v-for="table in data.tables"
              :key="table.id"
              no-gutters
              class="flex-row pt-10 pb-10 mr-10 ml-10"
            >
              <v-col cols="12" md="6" align-self="center">
                <v-img
                  max-height="800"
                  :src="`/${table.image}`"
                  max-width="300"
                  class="mx-auto"
                  :lazy-src="`/${table.image}`"
                >
                </v-img>
              </v-col>
              <v-col cols="12" md="6" align-self="center">
                <div class="pa-lg-1 pa-md-0 mt-10">
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
        </v-tab-item>
        <v-tab-item
          :key="4"
          value="video"
          :style="{ background: $vuetify.theme.themes['dark'].accent }"
        >
          <v-card
            flat
            :style="{ background: $vuetify.theme.themes['dark'].accent }"
          >
            <div>
              <iframe
                class="video"
                style="background-color: white"
                :src="`${data.video}`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe></div
          ></v-card>
        </v-tab-item>
        <v-tab-item :key="5" value="more">
          <v-carousel class="carousel" show-arrows-on-hover draggable="true">
            <v-carousel-item
              v-for="image in data.img"
              :key="image.id"
              class="align-center"
            >
              <v-container>
                <div>
                  <v-img
                    style="max-width: 500px; height: auto"
                    :src="`../${image.image}`"
                    class="mx-auto"
                  />
                </div>
              </v-container>
            </v-carousel-item>
          </v-carousel>
        </v-tab-item>
      </v-tabs-items>
      <!-- </v-card> -->
      <!-- </div> -->
    </section>

    <!-- Gallery -->
    <section class="section-gallery"></section>
    <div
      :style="{ background: $vuetify.theme.themes['dark'].accent }"
      class="white--text px-10 pt-10 pb-10"
      style="line-height: 30px"
    >
      {{ data.description }}
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => [],
    },
  },
  data: () => ({
    tab: 'features',
  }),
  computed: {
    featuredProducts() {
      return this.$store.getters.fibreBlowing.slice(0, 3)
    },
  },
}
</script>

<style>
.carousel {
  height: '70vh';
}
.image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  /* width: 100%; */
}

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
  background-color: rgb(255, 210, 128);
  font-size: 14px;
  padding: 20px;
  text-transform: uppercase;
}

table tbody tr:nth-child(2n) td {
  background: rgb(243, 239, 239);
}

td {
  padding: 10px;
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
    background-color: rgb(255, 210, 128);
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

  /* .carousel {
    height: 80vh;
  } */
}

.body {
  padding: 35px 0px;
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
.user-ratings {
  overflow: hidden;
  margin-bottom: 10px;
  margin-top: 5px;
  display: inline-block;
}

.star-rating {
  display: inline-block;
  font-size: 18px;
  position: relative;
  height: 18px;
  line-height: 18px;
  letter-spacing: 2px;
  width: 130px;
  /* font-family: FontAwesome; */
}

.star-rating:before {
  content: '\f005\f005\f005\f005\f123';
  position: absolute;
  top: 0;
  left: 0;
  color: #fc0;
  box-sizing: border-box;
}

.star-rating span {
  overflow: hidden;
  float: left;
  top: 0;
  left: 0;
  height: 18px;
  position: absolute;
  font-size: 0;
}
.user-ratings .total-review {
  vertical-align: middle;
  color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  float: right;
  font-size: 14px;
  text-decoration: none;
}
.total-review:hover {
  text-decoration: underline;
}

.price {
  display: block;
  margin-bottom: 10px;
}
.price h3 {
  display: inline-block;
  font-size: 28px;
  color: #e91e63;
}
.price del {
  padding: 0px 20px;
  font-size: 20px;
  color: #9e9e9e;
}
.prodect-details {
  padding-top: 15px;
  padding-bottom: 20px;
  /* border-bottom: 1px dashed #ddd; */
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
  margin: 0rem 0;
}

.section-showcase .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  justify-content: center;
}

.section-showcase h1 {
  font-size: 4rem;
  color: var(--primary-color);
}

.section-showcase p {
  margin: 1rem 0;
}

.btn {
  display: inline-block;
  background-color: var(--primary-color);
  color: #fff;
  padding: 0.8rem 1.5rem;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  border-radius: 30px;
}

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

@media (max-width: 768px) {
  .section-showcase .container {
    grid-template-columns: 1fr;
    text-align: center;
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
  }

  .section-large-text-inner h2 {
    font-size: 3rem;
  }

  .section-large-text-inner h3 {
    font-size: 1.5rem;
  }

  .section-large-text-inner p {
    font-size: 1.25rem;
  }

  .section-gallery .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
  }

  .section-footer {
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
}
</style>
