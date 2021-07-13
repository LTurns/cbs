<template>
  <section id="hero">
    <div
      class="text-md-h2 mt-15 text-sm-h3 text-h5 font-weight-black text-center"
    >
      {{ data.name.toUpperCase() }}
    </div>
    <v-carousel cycle show-arrows-on-hover draggable="true" light>
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
      <v-tabs v-model="tab" background-color="orange accent-3" centered dark>
        <v-tabs-slider></v-tabs-slider>

        <v-tab href="#features"> Features </v-tab>
        <v-tab href="#accessories"> Accessories </v-tab>
        <v-tab href="#config"> Configuration </v-tab>
        <v-tab href="#config"> Video Tutorials </v-tab>
        <v-tab href="#more"> More </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item :key="1" value="features">
          <v-container fluid>
            <v-row class="mx-auto" style="max-width: 1200px">
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
        <v-tab-item :key="2" value="accessories">
          <v-card flat>
            <SectionsFeaturedProducts :data="featuredProducts" />
          </v-card>
        </v-tab-item>
        <v-tab-item :key="3" value="config">
          <v-card flat>
            <div
              v-for="table in data.tables"
              :key="table.id"
              class="configInfo"
            >
              <div class="table">
                <table>
                  <thead>
                    <tr>
                      <th v-for="(column, index) in table.columns" :key="index">
                        <h4
                          class="text-uppercase yellow darken-1 text-center mt-10 mb-3 pt-5 pl-5 pr-5 pb-5"
                          style="letter-spacing: 0.15em"
                          v-text="column"
                        ></h4>
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
              </div>
            </div>
          </v-card>
        </v-tab-item>
        <v-tab-item :key="4" value="more">
          <v-card flat>
            <v-card-text>More</v-card-text>
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

table th {
  text-transform: uppercase;
  text-align: left;
  background: rgb(252, 234, 152);
  /* color: $backgroundColor; */
  font-weight: 500;
  padding: 5px;
  padding-left: 40px;
  padding-right: 40px;
  min-width: 30px;
  text-align: center;
  font-size: 13px;
}

table td {
  text-align: left;
  padding: 15px;
  font-size: 14px;
  border-right: 2px solid #ddd120;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: rgb(243, 239, 239);
}

@media screen and (max-width: 600px) {
  .table {
    padding: 5%;
    margin-bottom: 5%;
  }

  table th {
    text-transform: uppercase;
    text-align: left;
    background: rgb(252, 234, 152);
    /* color: $backgroundColor; */
    font-weight: 500;
    padding: 0px;
    padding-left: 0px;
    padding-right: 0px;
    min-width: 30px;
    text-align: center;
    font-size: 11px;
  }

  table td {
    text-align: left;
    padding: 10px;
    font-size: 11px;
    border-right: 2px solid #ddd120;
  }
  table td:last-child {
    border-right: none;
  }
  table tbody tr:nth-child(2n) td {
    background: rgb(243, 239, 239);
  }

  /* .carousel {
    height: 80vh;
  } */
}
</style>
