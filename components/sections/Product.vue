<template>
  <section id="hero">
    <div
      class="text-md-h2 mt-5 text-sm-h3 text-h5 font-weight-black text-center"
    >
      {{ data.name.toUpperCase() }}
    </div>
    <v-carousel
      height="calc(100vh - 180px)"
      class="carousel"
      cycle
      show-arrows-on-hover
      draggable="true"
      light
    >
      <v-carousel-item
        v-for="image in data.img"
        :key="image.id"
        class="align-center"
      >
        <v-container>
          <div>
            <v-img
              :src="`../${image.image}`"
              class="mx-auto"
              max-height="500"
              max-width="400"
            />
          </div>
        </v-container>
      </v-carousel-item>
    </v-carousel>

    <v-card>
      <v-tabs v-model="tab" black--text centered dark>
        <v-tabs-slider></v-tabs-slider>

        <v-tab href="#features"> Features </v-tab>
        <v-tab href="#accessories"> Accessories </v-tab>
        <v-tab href="#config"> Configuration </v-tab>
        <v-tab href="#video"> Video Tutorials </v-tab>
        <v-tab href="#more"> More </v-tab>
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
        <v-tab-item :key="3" value="config">
          <v-card flat>
            <v-img
              max-height="800"
              :src="`/${data.configImage}`"
              max-width="500"
              class="mx-auto mt-10 ml-10 mr-10"
              :lazy-src="`/${data.configImage}`"
            />
          </v-card>
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
                      <th v-for="(column, index) in table.columns" :key="index">
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
          <!-- </v-card> -->
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
          <v-card
            flat
            :style="{ background: $vuetify.theme.themes['dark'].accent }"
          >
            <v-card-text
              class="subtitle-1 text-center white--text px-10 py-10"
              >{{ data.description }}</v-card-text
            >
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
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
</style>
