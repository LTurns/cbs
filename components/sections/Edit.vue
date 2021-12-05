<template>
  <section>
    <div v-if="productArray.name.length !== 0">
      <div v-if="!productArray.isDraft">
        <v-btn class="ma-2" color="green" dark>
          Published
          <v-icon dark right> mdi-checkbox-marked-circle </v-icon>
        </v-btn>
      </div>
      <div v-else>
        <v-btn class="ma-2" color="red" dark>
          Draft
          <v-icon dark right> mdi-checkbox-marked-circle </v-icon>
        </v-btn>
      </div>
      <v-row>
        <v-col cols="12" md="6" sm="12">
          <div id="home" class="section-showcase">
            <h1>
              <v-textarea
                :value="productArray.name.toUpperCase()"
                label="heading"
                dense
                auto-grow
                outlined
                required
                @input="productArray.name = $event"
              ></v-textarea>
            </h1>
            <v-textarea
              :value="productArray.intro"
              label="intro"
              dense
              auto-grow
              outlined
              required
              @input="productArray.intro = $event"
            ></v-textarea>
            <div>
              <div class="d-inline white--text pa-2">
                <v-select
                  v-model="productArray.category"
                  attach
                  multiple
                  chips
                  :items="categories"
                  label="Category"
                ></v-select>
              </div>
            </div>
            <div>
              <div v-if="allProducts.length !== 0">
                <p>Will this be a subcategory?</p>
                <v-checkbox
                  v-model="checkbox"
                  :label="checkbox.toString()"
                  @change="changeProductId"
                ></v-checkbox>

                <div v-if="checkbox">
                  <p>Which items belong to this subcategory?</p>
                  <v-select
                    v-model="subcategoryItems"
                    :items="items"
                    attach
                    multiple
                    chips
                    style="
                      width: 80%;
                      display: block;
                      margin-left: auto;
                      margin-right: auto;
                    "
                    @change="addItem"
                  ></v-select>
                </div>
              </div>
            </div>
            <div v-if="!checkbox">
              <div class="d-inline pa-2 mt-10 yellow accent-4 black--text">
                Product ID
              </div>
              <div class="d-inline white--text pa-2">
                <input
                  ref="productId"
                  type="text"
                  class="input black--text"
                  :value="productArray.productId"
                  @input="productArray.productId = $event.target.value"
                />
              </div>
            </div>
            <br /><br />
            <nuxt-link to="#" class="learn">
              <v-btn :x-large="$vuetify.breakpoint.smAndUp" text outlined white
                ><v-icon left large color="primary">mdi-play</v-icon>Enquire
                Now</v-btn
              ></nuxt-link
            >
          </div>
        </v-col>

        <v-col cols="12" md="6" sm="12">
          <v-row
            justify="center"
            class="mx-auto pb-5"
            style="max-width: 1200px"
            mb="10"
          >
            <v-col cols="12" md="12">
              <edit-featured-products :data="productArray" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- <v-row> -->
      <!-- <v-col cols="12" md="6" sm="12">
          <div class="column2 mr-5 ml-5">
            <h4
              class="text-uppercase text-center mb-3 pl-2 pr-2 pb-5"
              style="
                letter-spacing: 0.15em;
                border-bottom: 2px solid #fde36d;
                box-shadow: 0 4px 6px -6px;
              "
            >
              Images
            </h4>
            <form align="center">
              <div class="form-group">
              <v-btn>
                <input
                  type="file"
                  accept="image/*"
                  @change="saveImages" /></v-btn
              ><br /><br />
              <div>
                <table>
                  <thead>
                    <th
                      v-for="(heading, index) in headings"
                      :key="heading[index]"
                      align-center
                    >
                      {{ heading }}
                    </th>
                  </thead>

                  <tbody>
                    <tr
                      v-for="(item, index) in productArray.img"
                      :key="item.image"
                    >
                      <td>
                        <img
                          :src="item.image"
                          class="img-fluid"
                          height="50px"
                          width="auto"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="input"
                          value="Add file name here"
                        />
                      </td>
                      <td>
                        <v-btn
                          class="btn orange lighten-2"
                          dark
                          @click="deleteImage(index)"
                        >
                          X
                        </v-btn>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
            </form>
          </div>
        </v-col> -->

      <!-- <v-col cols="12" md="12" sm="12"> -->
      <!-- <v-carousel
            class="carousel-height"
            hide-delimiter-background
            light
            draggable="true"
            cycle
          > -->
      <!-- <v-carousel-item
              v-for="img in productArray.img"
              :key="img.id"
              reverse-transition="fade-transition"
              transition="fade-transition"
              style="margin-top: 5%; margin-bottom: 10%"
            >
              <v-img
                width="50%"
                :src="img.image"
                :lazy-src="img.image"
                style="
                  display: block;
                  margin-left: auto;
                  margin-right: auto;
                  margin-bottom: 10%;
                "
              />
            </v-carousel-item>
          </v-carousel> -->
      <!-- </v-col> -->
      <!-- </v-row> -->

      <v-row>
        <v-col cols="12" md="12" sm="12">
          <div
            style="
              line-height: 30px;
              font-size: 15px;
              margin-bottom: 5px;
              margin-left: 10px;
              margin-right: 10px;
            "
          >
            <div
              v-for="(paragraph, paraIndex) in productArray.description"
              :key="paragraph._id"
            >
              <v-row>
                <v-col cols="12" md="12" sm="12">
                  <!-- <textarea
                              id="text"
                              :ref="`paragraph-${paraIndex}`"
                              class="input"
                              :value="paragraph.paragraph"
                              name="text"
                              rows="4"
                              cols="12"
                              style="
                                overflow: hidden;
                                word-wrap: break-word;
                                resize: none;
                                padding: 15px;
                                align-self: center;
                                width: 1000px;
                              "
                              @input="
                                productArray.description[paraIndex] =
                                  $event.target.value
                              "
                            ></textarea> -->
                  <v-textarea
                    label="paragraph"
                    dense
                    :value="paragraph.paragraph"
                    auto-grow
                    outlined
                    @input="changeDescription($event, paraIndex)"
                  ></v-textarea>
                  <v-btn
                    color="orange lighten-2"
                    dark
                    class="btn"
                    @click="deleteParagraph(paraIndex)"
                  >
                    X
                  </v-btn>
                </v-col>
              </v-row>
            </div>
            <v-btn
              color="grey lighten-3"
              light
              class="btn"
              @click="addParagraph()"
            >
              +
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="12" sm="12">
          <div id="about" class="section-large-text">
            <v-tabs v-model="tab" black--text center light class="">
              <v-tabs-slider></v-tabs-slider>

              <v-tab href="#features" class="ml-20"> Features </v-tab>
              <v-tab href="#accessories"> Accessories</v-tab>
              <v-tab v-show="productArray.tables.length != 0" href="#config">
                Configuration
              </v-tab>
              <v-tab v-show="productArray.videos.length > 0" href="#video">
                Video Tutorials
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item :key="1" value="features">
                <!-- <v-container
                  fluid
                  mt="10"
                  :class="
                    $vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'
                  "
                > -->
                <v-row :class="'grey lighten-4 pl-5 pr-5 mt-4 mb-4'">
                  <v-col
                    v-for="(feature, index) in productArray.features"
                    :key="feature[index]"
                    cols="12"
                    md="6"
                  >
                    <v-card id="feature-card" class="mx-auto">
                      <h4
                        class="text-uppercase yellow lighten-2 text-center mt-10 mb-3 pt-5 pl-2 pr-2 pb-5"
                        style="
                          letter-spacing: 0.15em;
                          border-bottom: 2px solid #fde36d;
                          box-shadow: 0 4px 6px -6px;
                        "
                      >
                        <v-textarea
                          label="heading"
                          dense
                          :value="feature.heading.toUpperCase()"
                          auto-grow
                          outlined
                          @input="productArray.features[index].heading = $event"
                        ></v-textarea>
                        <!-- <input
                            :value="feature.heading.toUpperCase()"
                            style="
                              overflow: hidden;
                              word-wrap: break-word;
                              resize: none;
                              padding: 15px;
                              align-self: center;
                              min-width: 500px;
                              max-width: 600px;
                            "
                            class="input"
                            @input="
                              features[index].heading = $event.target.value
                            "
                          /> -->
                      </h4>
                      <table>
                        <tbody>
                          <tr
                            v-for="(item, i) in feature.list"
                            :key="item.listItem"
                          >
                            <td>
                              <textarea
                                class="input"
                                type="text"
                                style="
                                  overflow: hidden;
                                  padding: 15px;
                                  word-wrap: break-word;
                                  resize: none;
                                  min-width: 200px;
                                "
                                :value="item.listItem"
                                @input="
                                  changeListItem($event.target.value, index, i)
                                "
                              />
                            </td>
                            <td>
                              <v-btn
                                color="orange lighten-2"
                                dark
                                class="btn"
                                @click="deleteFeature(index, i)"
                              >
                                X
                              </v-btn>
                            </td>
                          </tr>
                          <td>
                            <v-btn class="btn mt-10" @click="addFeature(index)">
                              +
                            </v-btn>
                          </td>
                        </tbody>
                      </table>
                    </v-card>
                    <v-btn
                      color="orange lighten-2"
                      dark
                      class="btn mt-10"
                      @click="deleteFeatureBox(index)"
                    >
                      X
                    </v-btn>
                    <v-btn class="btn mt-10" @click="addFeatureBox()">
                      +
                    </v-btn>
                  </v-col>
                </v-row>
                <!-- </v-container> -->
              </v-tab-item>

              <!-- Accessories  -->

              <v-tab-item :key="2" value="accessories">
                <v-card
                  flat
                  :class="
                    $vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'
                  "
                >
                  <v-select
                    v-model="accessoryName"
                    :items="items"
                    label="Select Products"
                    style="
                      width: 80%;
                      display: block;
                      margin-left: auto;
                      margin-right: auto;
                    "
                    @change="addAccessory"
                  ></v-select>

                  <v-row class="mx-auto pb-5" style="max-width: 1200px" mb="10">
                    <v-col
                      v-for="(plan, ix) in productArray.accessories"
                      :key="`plan-${ix}`"
                      cols="12"
                      md="4"
                    >
                      <v-hover v-slot="{ hover }" class="card">
                        <v-card
                          :elevation="hover ? 24 : 4"
                          :color="plan.color"
                          max-width="500"
                          height="630"
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
                          <v-card-text
                            class="subtitle-1 black--text"
                            v-text="plan.intro"
                          ></v-card-text>
                          <div
                            style="
                              position: absolute;
                              bottom: 0;
                              margin-left: 5px;
                            "
                          >
                            <div>
                              <nuxt-link
                                :to="`/category/${plan.name.toLowerCase()}`"
                              >
                                <v-btn
                                  :x-large="$vuetify.breakpoint.smAndUp"
                                  text
                                  class="my-3"
                                  outlined
                                  black
                                  ><v-icon left large color="primary"
                                    >mdi-play</v-icon
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
                        class="btn"
                        style="
                          display: block;
                          margin-left: auto;
                          margin-right: auto;
                          width: 15%;
                          margin-top: 10%;
                        "
                        @click="deleteAccessory(ix)"
                      >
                        X
                      </v-btn>
                      <!-- </div> -->
                    </v-col>
                  </v-row>
                </v-card>
              </v-tab-item>

              <v-tab-item
                :key="3"
                value="config"
                class="grey lighten-4 pb-10 mb-10"
              >
                <v-card-text
                  class="black--text pb-10"
                  style="
                    line-height: 30px;
                    font-size: 15px;
                    margin-bottom: 20px;
                  "
                >
                  <div
                    v-for="(
                      paragraph, index
                    ) in productArray.configurationIntro"
                    :key="paragraph[index]"
                  >
                    <v-textarea
                      label="paragraph"
                      dense
                      :value="paragraph.paragraph"
                      auto-grow
                      outlined
                      rows="8"
                      row-height="20"
                      @input="
                        productArray.configurationIntro[
                          index
                        ].paragraph = $event
                      "
                    ></v-textarea>
                    <!-- <textarea
                      id="text"
                      :ref="`paragraph-${index}`"
                      class="input"
                      :value="paragraph.paragraph"
                      name="text"
                      rows="2"
                      cols="12"
                      style="
                        overflow: hidden;
                        word-wrap: break-word;
                        resize: none;
                        padding: 15px;
                        align-self: center;
                        width: 1000px;
                      "
                      @input="configurationIntro[index] = $event.target.value"
                    ></textarea> -->
                  </div>
                </v-card-text>
                <v-card
                  min-height="600"
                  class="mx-auto transition-swing"
                  :elevation="hover ? 24 : 6"
                >
                  <div v-if="$device.isMobile">
                    Please use a laptop to view and edit configuration tables
                  </div>
                  <div v-else>
                    <v-row
                      v-for="(table, tableIndex) in productArray.tables"
                      :key="table[tableIndex]"
                    >
                      <table class="ml-4 mr-4">
                        <thead>
                          <th
                            v-for="(heading, index) in configHeadings"
                            :key="heading[index]"
                            align-center
                          >
                            {{ heading }}
                          </th>
                        </thead>

                        <tbody>
                          <tr>
                            <td>
                              <input
                                :value="table.title.toUpperCase()"
                                cols="12"
                                rows="1"
                                style="
                                  word-wrap: break-word;
                                  resize: none;
                                  padding: 15px;
                                  align-self: center;
                                  margin: 10px;
                                "
                                class="input"
                                @input="
                                  productArray.tables[tableIndex].title =
                                    $event.target.value
                                "
                              />
                              <v-img
                                max-height="50"
                                :src="table.image"
                                max-width="30"
                              >
                              </v-img>
                            </td>
                            <td>
                              <table>
                                <thead>
                                  <tr>
                                    <th>Item Description</th>
                                    <th>Part No</th>
                                    <th>Remove Item</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr
                                    v-for="(item, i) in table.items"
                                    :key="item[i]"
                                  >
                                    <td>
                                      <input
                                        :value="item['Item Description']"
                                        cols="12"
                                        rows="1"
                                        style="align-self: center"
                                        class="input"
                                        @input="
                                          productArray.tables[tableIndex].items[
                                            i
                                          ]['Item Description'] =
                                            $event.target.value
                                        "
                                      />
                                    </td>
                                    <td>
                                      <input
                                        :value="item['Part No']"
                                        cols="12"
                                        rows="1"
                                        style="align-self: center"
                                        class="input"
                                        @input="
                                          productArray.tables[tableIndex].items[
                                            i
                                          ]['Part No'] = $event.target.value
                                        "
                                      />
                                    </td>
                                    <td>
                                      <v-btn
                                        color="orange lighten-2"
                                        dark
                                        class="btn"
                                        @click="deleteTableRow(tableIndex, i)"
                                      >
                                        X
                                      </v-btn>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <v-btn
                                class="btn btn-info float-right mt-10"
                                @click="addTableRow(tableIndex, i)"
                              >
                                +
                              </v-btn>
                            </td>
                            <td>
                              <v-btn
                                class="btn"
                                @click="deleteConfigTable(tableIndex)"
                              >
                                X
                              </v-btn>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </v-row>
                  </div>
                </v-card>
              </v-tab-item>
              <v-tab-item :key="4" value="video" class="grey lighten-4">
                <!-- <v-container mt="10" class="grey lighten-4"> -->
                <v-card class="grey lighten-4 mb-10" mt="10" ml="4" mr="4">
                  <div v-if="$device.isMobile">
                    <p class="mt-10 mb-10 ml-10 mr-10 pt-10 pl-10 pr-10 pb-10">
                      Please use a laptop to view and edit configuration tables
                    </p>
                  </div>
                  <form align="center">
                    <!-- <div class="form-group"> -->
                    <!-- <v-btn> -->
                    <input
                      type="text"
                      placeholder="Add YouTube Link Here"
                      class="input mt-10"
                      @change="saveVideos"
                    /><br /><br />
                    <template v-if="productArray.videos.length">
                      <div>
                        <table>
                          <thead>
                            <th
                              v-for="(heading, index) in vidHeadings"
                              :key="heading[index]"
                              align-center
                            >
                              {{ heading }}
                            </th>
                          </thead>
                          <tbody>
                            <tr
                              v-for="(video, index) in productArray.videos"
                              :key="video[index]"
                            >
                              <td>
                                <iframe
                                  class="video"
                                  style="background-color: white"
                                  :src="video.video"
                                  allowfullscreen
                                ></iframe>
                              </td>
                              <td>
                                <input
                                  type="text"
                                  class="input"
                                  :value="video.title"
                                  @input="
                                    productArray.videos[index].title =
                                      $event.target.value
                                  "
                                />
                              </td>
                              <td>
                                <v-btn class="btn" @click="deleteVideo(index)">
                                  X
                                </v-btn>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </template>
                  </form>
                </v-card>
                <!-- </v-container> -->
              </v-tab-item>
            </v-tabs-items>
          </div>
        </v-col>
      </v-row>

      <h4
        class="text-h4 text-center font-weight-bold mb-xs-4 mt-10 mb-5 pl-5 pr-5"
      >
        SIMILAR PRODUCTS
      </h4>
      <v-select
        v-model="recommendedProductName"
        :items="items"
        attach
        chips
        label="Select Products"
        style="
          width: 80%;
          display: block;
          margin-left: auto;
          margin-right: auto;
        "
        @change="addRecommendedProducts"
      ></v-select>
      <!-- <SectionsEditFeaturedProducts :data="accessories" /> -->

      <v-row class="mx-auto pb-5" style="max-width: 1200px" mb="10">
        <v-col
          v-for="(plan, ix) in productArray.recommendedProducts"
          :key="`plan-${ix}`"
          cols="12"
          md="4"
        >
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
              <v-card-text
                class="subtitle-1 black--text"
                v-text="plan.intro"
              ></v-card-text>
              <div style="position: absolute; bottom: 0; margin-left: 5px">
                <div>
                  <nuxt-link :to="`/category/${plan.name.toLowerCase()}`">
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
            class="btn"
            style="
              display: block;
              margin-left: auto;
              margin-right: auto;
              width: 15%;
              margin-top: 10%;
            "
            @click="deleteRecommendedProduct(ix)"
          >
            X
          </v-btn>
          <!-- </div> -->
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <v-progress-circular
        class="text-center"
        indeterminate
        color="amber"
      ></v-progress-circular>
    </div>
    <v-row>
      <v-col cols="12" align="center">
        <div v-if="productArray.isDraft">
          <v-btn
            :x-large="$vuetify.breakpoint.smAndUp"
            text
            outlined
            class="yellow lighten --2"
            style="display: block; margin-left: auto: margin-right: auto; width: 30%; margin-top: 2%; margin-bottom: 2%;"
            @click="save()"
            >Save Draft</v-btn
          >
        </div>
      </v-col>
      <!-- </v-row>
    <v-row> -->
      <v-col cols="12" align="center">
        <v-btn
          :x-large="$vuetify.breakpoint.smAndUp"
          text
          outlined
          class="green lighten --2"
          style="display: block; margin-left: auto: margin-right: auto; width: 30%; margin-top: 2%; margin-bottom: 2%;"
          @click="publish()"
          >Publish</v-btn
        >
      </v-col>
    </v-row>
  </section>
</template>

<script>
// import { mapState, mapActions } from 'vuex'
import EditFeaturedProducts from './EditFeaturedProducts.vue'
export default {
  components: { EditFeaturedProducts },
  props: {
    id: {
      default: '',
      type: String,
    },
  },
  data: () => ({
    item: [],
    categories: [
      'Fibre Installation',
      'Klein Tools',
      'Winches and Trailers',
      'Overhead Line',
    ],
    allProducts: [],
    productArray: {
      name: '',
      id: '',
      category: [],
      productId: '',
      intro: '',
      img: [],
      description: [],
      features: [],
      mainImg: '',
      subCategory: [],
      videos: [],
      configurationIntro: [],
      configurationTitle: '',
      configurationImage: '',
      tables: [],
      accessories: [],
      recommendedProducts: [],
      countInStock: 0,
      hasSubCategories: false,
      isDraft: false,
      enquiries: 0,
    },
    checkbox: false,
    accessoryName: '',
    items: [],
    areFeatures: true,
    areAccessories: true,
    areConfig: true,
    areVideos: true,
    tutorials: '',
    preview: null,
    image: '',
    image_list: [],
    headings: ['image', 'name', 'Remove'],
    vidHeadings: ['video', 'name', 'Remove'],
    configHeadings: ['title', 'table', 'Remove'],
    tab: '',
    video: '',
    videoTitle: '',
    recommendedProductName: '',
    subCategoryNames: [],
    subcategoryItems: [],
    subcategoryItem: '',
  }),
  created() {
    this.getIdProduct()
    this.getAllProducts()
    if (this.subcategoryItems.length === 0) {
      this.productArray.hasSubCategories = false
    }
  },
  methods: {
    showAccessories() {
      this.productArray.accesories === []
        ? (this.areAccessories = false)
        : (this.areAccessories = true)

      return this.areAccessories
    },
    changeDescription(e, index) {
      this.productArray.description[index] = {
        _id: this.productArray.description[index]._id,
        paragraph: e,
      }
    },
    changeListItem(e, index, i) {
      this.productArray.features[index].list[i] = {
        listItem: e,
        _id: this.productArray.features[index].list[i]._id,
      }
    },
    isMobile() {
      if (screen.width <= 760) {
        return true
      } else {
        return false
      }
    },
    async getIdProduct() {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }

      if (this.id !== '') {
        try {
          const { data } = await this.$axios.get(
            `https://cbsbackend.herokuapp.com/api/products/${this.id}`,
            config
          )

          this.productArray = {
            ...data,
          }

          this.checkbox = this.productArray.hasSubCategories

          return this.productArray
        } catch (error) {
          throw new Error(error)
        }
      }
    },
    async getAllProducts() {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }

      try {
        const { data } = await this.$axios.get(
          'https://cbsbackend.herokuapp.com/api/products',
          config
        )
        // eslint-disable-next-line no-undef
        this.allProducts = data

        if (this.allProducts.length !== 0) {
          this.allProducts.forEach((product) => {
            this.items.push(product.name)

            if (product.subCategory.includes(this.productArray.name)) {
              this.subcategoryItems.push(product.name)
            }
          })
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    changeProductId() {
      this.productArray.hasSubCategories = this.checkbox

      if (this.checkbox) {
        this.productArray.productId = ''
      } else {
        this.productArray.productId = '1'
      }
      // this.addItem()
    },
    deleteParagraph(index) {
      this.productArray.description.splice(index, 1)
    },
    addParagraph() {
      this.productArray.description.push({
        paragraph: 'New Paragraph',
        _id: '1',
      })
    },
    addItem() {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      this.allProducts.forEach((item) => {
        if (!this.subcategoryItems.includes(item.name)) {
          item.subCategory.forEach(async (sub, index) => {
            if (sub === this.productArray.name) {
              const subcat = item.subCategory.splice(1, index)
              const { data } = await this.$axios.get(
                `https://cbsbackend.herokuapp.com/api/products/name/${item.name}`,
                config
              )

              const response = {
                ...data[0],
                subCategory: subcat,
              }

              try {
                await this.$axios.put(
                  `https://cbsbackend.herokuapp.com/api/products/${data[0]._id}`,
                  response,
                  config
                )

                return response
              } catch (error) {
                throw new Error(error)
              }
            }
          })
        }
      })

      this.subcategoryItems.forEach(async (element) => {
        try {
          // console.log(this.accessoryName)
          const { data } = await this.$axios.get(
            `https://cbsbackend.herokuapp.com/api/products/name/${element}`,
            config
          )

          const response = {
            ...data[0],
            subCategory: this.productArray.name,
          }

          try {
            await this.$axios.put(
              `https://cbsbackend.herokuapp.com/api/products/${data[0]._id}`,
              response,
              config
            )

            return response
          } catch (error) {
            throw new Error(error)
          }
        } catch (error) {
          throw new Error(error)
        }
      })
    },
    async saveImages(event) {
      const input = event.target.files[0]
      const formData = new FormData()

      formData.append('image', input)

      try {
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
          },
        }

        const { data } = await this.$axios.post(
          'https://cbsbackend.herokuapp.com/api/upload/',
          formData,
          config.headers
        )

        this.productArray.img = data

        this.productArray.img.push({ image: this.image })
      } catch (error) {
        throw new Error(error)
      }
    },
    async addAccessory() {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }

      try {
        const { data } = await this.$axios.get(
          `https://cbsbackend.herokuapp.com/api/products/name/${this.accessoryName}`,
          config
        )

        this.productArray.accessories.push({
          id: data[0].id,
          name: data[0].name,
          category: data[0].category,
          subCategory: data[0].subCategory,
          productId: data[0].productId,
          intro: data[0].intro,
          mainImg: data[0].mainImg,
          _id: data[0]._id,
        })

        return this.accessories
      } catch (error) {
        throw new Error(error)
      }
    },
    deleteAccessory(index) {
      this.productArray.accessories.splice(index, 1)
    },
    async addRecommendedProducts() {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }

      try {
        const { data } = await this.$axios.get(
          `https://cbsbackend.herokuapp.com/api/products/name/${this.recommendedProductName}`,
          config
        )

        this.productArray.recommendedProducts.push({
          id: data[0].id,
          name: data[0].name,
          category: data[0].category,
          subCategory: data[0].subCategory,
          productId: data[0].productId,
          intro: data[0].intro,
          mainImg: data[0].mainImg,
          _id: data[0]._id,
        })

        return this.recommendedProducts
      } catch (error) {
        throw new Error(error)
      }
    },
    deleteRecommendedProduct(index) {
      this.productArray.recommendedProducts.splice(index, 1)
    },
    async saveMainImage(event) {
      const input = event.target.files[0]
      const formData = new FormData()

      formData.append('image', input)

      try {
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Headers': '*',
          },
        }

        const { data } = await this.$axios.post(
          'https://cbsbackend.herokuapp.com/api/upload/',
          formData,
          config
        )

        this.productArray.mainImg = data
      } catch (error) {
        throw new Error(error)
      }
    },
    async saveConfigImage(event, index) {
      const input = event.target.files[0]
      const formData = new FormData()

      formData.append('image', input)

      try {
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
          },
        }

        const { data } = await this.$axios.post(
          'https://cbsbackend.herokuapp.com/api/upload/',
          formData,
          config
        )

        this.configImage = data

        this.productArray.tables[index].image = this.configImage
      } catch (error) {
        throw new Error(error)
      }
    },
    saveVideos(event) {
      this.video = event.target.value
      this.productArray.videos.push({
        video: this.video,
        title: this.videoTitle,
      })
    },
    deleteImage(index) {
      this.productArray.img.splice(index, 1)
    },
    deleteFeature(index, i) {
      this.productArray.features[index].list.splice(i, 1)
    },
    addFeature(index) {
      this.productArray.features[index].list.push({
        listItem: 'List point',
      })
    },
    deleteFeatureBox(index) {
      this.productArray.features.splice(index, 1)
    },
    addFeatureBox() {
      this.productArray.features.push({
        id: 1,
        heading: 'Main Features',
        list: [
          {
            listItem: 'List point',
          },
        ],
      })
    },
    deleteConfigImage(index) {
      this.productArray.tables[index].image = ''
    },
    deleteTableRow(tableIndex, i) {
      this.productArray.tables[tableIndex].items.splice(i, 1)
    },
    addTableRow(tableIndex, i) {
      this.productArray.tables[tableIndex].items.push({
        'Item Description': '',
        'Part No': '',
      })
    },
    deleteConfigTable(index) {
      this.productArray.tables.splice(index, 1)
    },
    deleteVideo(index) {
      this.productArray.videos.splice(index, 1)
    },
    async save() {
      const data = {
        user: this.$auth.user,
        ...this.productArray,
      }

      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      try {
        await this.$axios.put(
          `https://cbsbackend.herokuapp.com/api/products/${this.id}`,
          data,
          config
        )
        // this.getAllMusics()
      } catch (err) {
        throw new Error('Error updating product')
      }
    },
    async publish() {
      const data = {
        user: this.$auth.user,
        ...this.productArray,
        isDraft: false,
      }

      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      try {
        await this.$axios.put(
          `https://cbsbackend.herokuapp.com/api/products/${this.id}`,
          data,
          config
        )
        // this.getAllMusics()
      } catch (err) {
        throw new Error('Error updating product')
      }
    },
  },
}
</script>

<style>
.input:focus {
  outline: none !important;
  border: 1px solid yellow;
  box-shadow: 0 0 5px #dad9d6;
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
  margin: 5%;
}

table tbody tr:nth-child(2n) td {
  background: rgb(243, 243, 243);
  color: black;
}

#about {
  padding-left: 5px;
  padding-right: 5px;
}

td {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: black;
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

.video {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  width: 600px;
  height: 400px;
  margin-bottom: 5%;
}

.myGallery {
  display: grid;
  grid-gap: 10px;
  grid-template-rows: repeat(auto-fit, minmax(150px, 1fr 1fr 1fr));
  /* grid-template-rows: auto; */
}

.myGallery img {
  width: 30%;
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

.product-qty {
  display: inline-block;
  margin-top: 20px;
  width: 100%;
}

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

.section-showcase {
  margin: 4rem 3rem;
}

.section-showcase h1 {
  font-size: 3rem;
  color: var(--primary-color);
}

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
