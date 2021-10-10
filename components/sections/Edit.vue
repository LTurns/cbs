<template>
  <section>
    <div v-for="(product, index) in item" :key="product.productId">
      <v-row>
        <v-col cols="12" md="6" sm="12">
          <div id="home" class="section-showcase">
            <h1>
              <textarea
                :value="title.toUpperCase()"
                cols="12"
                rows="2"
                style="
                  word-wrap: break-word;
                  resize: none;
                  padding: 15px;
                  align-self: center;
                  min-width: 500px;
                  max-width: 600px;
                "
                class="input"
                @input="title = $event.target.value"
              />
            </h1>

            <textarea
              :value="intro"
              rows="3"
              cols="12"
              style="
                overflow: hidden;
                word-wrap: break-word;
                resize: none;
                padding: 15px;
                min-width: 500px;
                max-width: 600px;
              "
              class="input"
              @input="intro = $event.target.value"
            ></textarea
            ><br />
            <div>
              <div class="d-inline white--text pa-2">
                <v-select
                  v-model="category"
                  :items="categories"
                  label="Category"
                ></v-select>
              </div>
            </div>
            <div class="d-inline pa-2 mt-10 yellow accent-4 black--text">
              Product ID
            </div>
            <div class="d-inline white--text pa-2">
              <input
                ref="productId"
                type="text"
                class="input black--text"
                :value="productId"
                @input="productId = $event.target.value"
              />
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
            <v-col
              v-for="(plan, index) in item"
              :key="`plan-${index}`"
              cols="12"
              md="12"
            >
              <v-hover v-slot="{ hover }" class="card">
                <v-card
                  :elevation="hover ? 24 : 4"
                  :color="plan.color"
                  max-width="500"
                  height="750"
                  :class="hover ? 'zoom' : 'notzoom'"
                  class="mx-auto transition-swing"
                >
                  <h4
                    class="text-uppercase text-center black--text mt-5 pt-5 pl-5 pr-5 pb-5"
                    style="letter-spacing: 0.15em; font-size: 20px"
                  >
                    <textarea
                      :value="title.toUpperCase()"
                      cols="12"
                      rows="2"
                      style="
                        word-wrap: break-word;
                        resize: none;
                        padding: 15px;
                        text-align: center;
                        max-width: 400px;
                        min-width: 330px;
                      "
                      class="input"
                      @input="title = $event.target.value"
                    />
                  </h4>

                  <v-btn
                    align="center"
                    justify="center"
                    style="
                      display: block;
                      margin-left: auto;
                      margin-right: auto;
                      width: 80%;
                    "
                  >
                    <input
                      justify="center"
                      type="file"
                      accept="image/*"
                      @change="saveMainImage" /></v-btn
                  ><br /><br />
                  <v-img
                    :src="mainImg"
                    alt=""
                    width="250"
                    :lazy-src="mainImg"
                    aspect-ratio="1"
                    class="image grey lighten-2 rounded-lg mt-5 mb-10"
                  ></v-img>
                  <v-card-text
                    class="subtitle-1 black--text mb-10"
                    style="text-align: center"
                  >
                    <textarea
                      :value="intro"
                      cols="12"
                      rows="4"
                      style="
                        max-width: 750px;
                        text-align: center;
                        min-width: 440px;
                        overflow: hidden;
                        word-wrap: break-word;
                        resize: none;
                        padding: 10px;
                      "
                      class="input"
                      @input="intro = $event.target.value"
                    />
                  </v-card-text>
                  <div
                    style="
                      position: absolute;
                      bottom: 0;
                      margin-top: 10%;
                      left: 35%;
                    "
                  >
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
                  </div>
                </v-card></v-hover
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6" sm="12">
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
              <!-- <div class="form-group"> -->
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
                    <tr v-for="(item, index) in images" :key="item.image">
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
            </form>
          </div>
        </v-col>

        <v-col cols="12" md="6" sm="12">
          <v-carousel
            class="carousel"
            show-arrows-on-hover
            hide-delimiter-background
            draggable="true"
            light
            cycle
          >
            <v-carousel-item
              v-for="img in images"
              :key="img.id"
              style="
                display: block;
                margin-left: auto;
                margin-right: auto;
                width: 55%;
              "
            >
              <v-img :src="img.image" :lazy-src="img.image" />
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="12" sm="12">
          <div id="about" class="section-large-text">
            <v-tabs v-model="tab" black--text center light class="">
              <v-tabs-slider></v-tabs-slider>

              <v-tab href="#features" class="ml-20"> Features </v-tab>
              <v-tab
                v-show="product.accessories.length != 0"
                href="#accessories"
              >
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
                <v-container
                  fluid
                  mt="10"
                  :class="
                    $vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'
                  "
                >
                  <v-row class="mx-auto mb-7 mt-3">
                    <v-col cols="12" md="12" sm="12">
                      <div
                        :class="
                          $vuetify.theme.dark
                            ? 'grey darken-4'
                            : 'grey lighten-4'
                        "
                        style="
                          line-height: 30px;
                          font-size: 15px;
                          margin-bottom: 20px;
                        "
                      >
                        <div
                          v-for="(paragraph, index) in description"
                          :key="paragraph.id"
                        >
                          <v-row>
                            <v-col cols="12" md="6" sm="12">
                              <textarea
                                id="text"
                                :ref="`paragraph-${index}`"
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
                                  description[index] = $event.target.value
                                "
                              ></textarea>
                            </v-col>
                          </v-row>
                        </div>
                      </div>
                    </v-col>
                    <v-col
                      v-for="(feature, index) in features"
                      :key="feature[index]"
                      cols="12"
                      md="6"
                    >
                      <v-card
                        id="feature-card"
                        class="mx-auto transition-swing"
                        :elevation="hover ? 24 : 6"
                      >
                        <h4
                          class="text-uppercase yellow lighten-2 text-center mt-10 mb-3 pt-5 pl-2 pr-2 pb-5"
                          style="
                            letter-spacing: 0.15em;
                            border-bottom: 2px solid #fde36d;
                            box-shadow: 0 4px 6px -6px;
                          "
                        >
                          <input
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
                          />
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
                                    min-width: 350px;
                                  "
                                  :value="item.listItem"
                                  @click="item.listItem = $event.target.value"
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
                              <v-btn
                                class="btn btn-info float-right mt-20"
                                @click="addFeature(index)"
                              >
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
                        @click="deleteFeatureBox(tableIndex, i)"
                      >
                        X
                      </v-btn>
                      <v-btn class="btn" @click="addFeatureBox(index)">
                        +
                      </v-btn>
                    </v-col>
                    <v-btn
                      color="orange lighten-2"
                      dark
                      class="btn mt-10"
                      @click="deleteFeatureBox(tableIndex, i)"
                    >
                      X
                    </v-btn>
                    <v-btn class="btn" @click="addFeatureBox(index)"> + </v-btn>
                  </v-row>
                </v-container>
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
                    attach
                    chips
                    label="Select Products"
                    style="
                      width: 80%;
                      display: block;
                      margin-left: auto;
                      margin-right: auto;
                    "
                    @change="addAccessory"
                  ></v-select>
                  <!-- <SectionsEditFeaturedProducts :data="accessories" /> -->

                  <v-row class="mx-auto pb-5" style="max-width: 1200px" mb="10">
                    <v-col
                      v-for="(plan, ix) in accessories"
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
                          <div style="position: absolute; bottom: 0; left: 35%">
                            <div v-if="plan.subCategory.length === 0">
                              <nuxt-link
                                class="link"
                                :to="`/product/${plan._id}`"
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
                </v-card>
              </v-tab-item>

              <v-tab-item
                :key="3"
                value="config"
                :class="
                  $vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'
                "
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
                    v-for="(paragraph, index) in configurationIntro"
                    :key="paragraph[index]"
                  >
                    <textarea
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
                    ></textarea>
                  </div>
                </v-card-text>
                <v-card
                  min-height="600"
                  class="mx-auto transition-swing"
                  :elevation="hover ? 24 : 6"
                >
                  <v-row
                    v-for="(table, tableIndex) in tables"
                    :key="table[tableIndex]"
                  >
                    <table>
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
                                tables[tableIndex].title = $event.target.value
                              "
                            />
                          </td>
                          <td>
                            <!-- <form align="center"> -->
                            <!-- <div class="form-group"> -->
                            <v-btn>
                              <input
                                type="file"
                                accept="image/*"
                                @change="
                                  saveConfigImage($event, tableIndex)
                                " /></v-btn
                            ><br /><br />
                            <!-- <template v-if="images.length"> -->
                            <!-- <div> -->
                            <table>
                              <tbody>
                                <td>
                                  <v-img
                                    max-height="50"
                                    :src="table.image"
                                    max-width="30"
                                  >
                                  </v-img>
                                </td>
                                <td>
                                  <v-btn
                                    class="btn"
                                    @click="deleteConfigImage(tableIndex)"
                                  >
                                    X
                                  </v-btn>
                                </td>
                              </tbody>
                            </table>
                            <!-- </div>
                          </template> -->
                            <!-- </form> -->
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
                                        tables[tableIndex].items[i][
                                          'Item Description'
                                        ] = $event.target.value
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
                                        tables[tableIndex].items[i]['Part No'] =
                                          $event.target.value
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
                              @click="addTableRow(index)"
                            >
                              +
                            </v-btn>
                          </td>
                          <td>
                            <v-btn
                              class="btn"
                              @click="deleteConfigTable(index)"
                            >
                              X
                            </v-btn>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </v-row>
                </v-card>
              </v-tab-item>
              <v-tab-item :key="4" value="video">
                <v-container
                  fluid
                  mt="10"
                  :class="
                    $vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'
                  "
                >
                  <v-card
                    flat
                    :class="
                      $vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'
                    "
                  >
                    <form align="center">
                      <!-- <div class="form-group"> -->
                      <!-- <v-btn> -->
                      <input
                        type="text"
                        placeholder="Add YouTube Link Here"
                        class="input mt-10"
                        @change="saveVideos"
                      /><br /><br />
                      <template v-if="videos.length">
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
                                v-for="(video, index) in product.videos"
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
                                      videos[index].title = $event.target.value
                                    "
                                  />
                                </td>
                                <td>
                                  <v-btn
                                    class="btn"
                                    @click="deleteVideo(index)"
                                  >
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
                </v-container>
              </v-tab-item>
            </v-tabs-items>
          </div>
        </v-col>
      </v-row>

      <!-- RECOMMENDED products -->
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
          v-for="(plan, ix) in recommendedProducts"
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
            @click="deleteRecommendedProduct(index)"
          >
            X
          </v-btn>
          <!-- </div> -->
        </v-col>
      </v-row>
    </div>
    <v-row>
      <v-col cols="12" align="center">
        <v-btn
          :x-large="$vuetify.breakpoint.smAndUp"
          text
          outlined
          class="yellow lighten --2"
          style="display: block; margin-left: auto: margin-right: auto; width: 30%; margin-top: 5%; margin-bottom: 5%;"
          @click="save()"
          >Save</v-btn
        >
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
      default: null,
      type: String,
    },
  },
  data: () => ({
    item: [],
    categories: ['Fibre Blowing', 'Klein Tools', 'Utilities', 'Telecoms'],
    accessoryName: '',
    items: [],
    areFeatures: true,
    areAccessories: true,
    areConfig: true,
    areVideos: true,
    tutorials: '',
    intro: '',
    productId: '',
    images: [],
    preview: null,
    image: '',
    image_list: [],
    headings: ['image', 'name', 'Remove'],
    vidHeadings: ['video', 'name', 'Remove'],
    configHeadings: ['title', 'image', 'table', 'Remove'],
    title: '',
    description: '',
    features: '',
    tab: '',
    videos: '',
    video: '',
    videoTitle: '',
    configImage: '',
    recommendedProducts: '',
    mainImg: '',
    countInStock: 0,
    allProducts: '',
    recommendedProductName: '',
  }),
  created() {
    this.getProduct()
    this.getAllProducts()
  },
  methods: {
    showAccessories() {
      this.data.accesories === []
        ? (this.areAccessories = false)
        : (this.areAccessories = true)

      return this.areAccessories
    },
    async getAllProducts() {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      try {
        const response = await this.$axios.get(
          'https://cbsbackend.herokuapp.com/api/products',
          config
        )

        for (const product of response.data) {
          this.items.push(product.name)
        }

        return this.items
      } catch (err) {
        throw new Error('Error Fetching Products')
      }
    },
    async getProduct() {
      this.listLoading = true
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      try {
        const response = await this.$axios.get(
          `https://cbsbackend.herokuapp.com/api/products/${this.id}`,
          config
        )

        this.item.push(response.data)

        // console.log(this.item)

        this.title = this.item[0].name
        this.category = this.item[0].category
        this.productId = this.item[0].productId
        this.intro = this.item[0].intro
        this.images = this.item[0].img
        this.description = this.item[0].description
        this.features = this.item[0].features
        this.mainImg = this.item[0].mainImg
        this.videos = this.item[0].videos
        this.configurationIntro = this.item[0].configurationIntro
        this.configurationTitle = this.item[0].configurationTitle
        this.configurationImage = this.item[0].configurationImage
        this.tables = this.item[0].tables
        this.accessories = this.item[0].accessories
        this.recommendedProducts = this.item[0].recommendedProducts
        this.mainImg = this.item[0].mainImg
        this.countInStock = this.item[0].countInStock

        // console.log('heyyyyy', this.images)

        return this.item
      } catch (error) {
        throw new Error(error)
      }
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

        this.image = data

        this.images.push({ image: this.image })
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

        this.accessories.push({
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
      this.accessories.splice(index, 1)
    },
    // async saveAccessoryImage(event, index) {
    //   const input = event.target.files[0]
    //   const formData = new FormData()

    //   formData.append('image', input)

    //   try {
    //     const config = {
    //       headers: {
    //         'Content-Type': 'multipart/form-data',
    //         'Access-Control-Allow-Origin': '*',
    //       },
    //     }

    //     const { data } = await this.$axios.post(
    //       'https://cbsbackend.herokuapp.com/api/upload/',
    //       formData,
    //       config
    //     )

    //     this.accessories[index].mainImg = data
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },
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

        this.recommendedProducts.push({
          id: data[0].id,
          name: data[0].name,
          category: data[0].category,
          subCategory: data[0].subCategory.toString(),
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
      this.recommendedProducts.splice(index, 1)
    },
    // async saveRecommendedImages(event, index) {
    //   const input = event.target.files[0]
    //   const formData = new FormData()

    //   formData.append('image', input)

    //   try {
    //     const config = {
    //       headers: {
    //         'Content-Type': 'multipart/form-data',
    //       },
    //     }

    //     const { data } = await this.$axios.post(
    //       'http://localhost:5001/api/upload',
    //       formData,
    //       config
    //     )

    //     this.recommendedProducts[index].mainImg = data
    //     this.recommendedProducts[index].id = '1'

    //     console.log(this.mainImg)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },
    async saveMainImage(event) {
      const input = event.target.files[0]
      const formData = new FormData()

      formData.append('image', input)

      try {
        // const config = {
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //     'Access-Control-Allow-Origin': '*',
        //   },
        // }

        const { data } = await this.$axios.post(
          // 'http://localhost:80/api/upload/',
          'https://cbsbackend.herokuapp.com/api/upload/',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': true,
              'Access-Control-Allow-Headers': '*',
            },
          }
        )

        this.mainImg = data
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

        this.tables[index].image = this.configImage
      } catch (error) {
        throw new Error(error)
      }
    },
    saveVideos(event) {
      this.video = event.target.value
      this.videos.push({ video: this.video, title: this.videoTitle })
    },
    deleteImage(index) {
      this.images.splice(index, 1)
    },
    deleteFeature(index, i) {
      this.features[index].list.splice(i, 1)
    },
    addFeature(index) {
      this.features[index].list.push({
        listItem: 'Automatic Cable Centralisation',
      })
    },
    deleteConfigImage(index) {
      this.tables[index].image = ''
    },
    deleteTableRow(tableIndex, i) {
      this.tables[tableIndex].items.splice(i, 1)
    },
    addTableRow(tableIndex) {
      this.tables[tableIndex].items.push({
        'Item Description': '',
        'Part No': '',
      })
    },
    deleteConfigTable(index) {
      this.tables.splice(index, 1)
    },
    deleteVideo(index) {
      this.videos.splice(index, 1)
    },
    async save() {
      const data = {
        user: this.$auth.user,
        name: this.title,
        productId: this.productId,
        description: this.description,
        img: this.images,
        mainImg: this.mainImg,
        category: this.category,
        subCategory: [],
        features: this.features,
        intro: this.intro,
        videos: this.videos,
        configurationTitle: this.configurationTitle,
        configurationIntro: this.configurationIntro,
        configurationImage: this.configurationImage,
        tables: this.tables,
        countInStock: this.countInStock,
        accessories: this.accessories,
        recommendedProducts: this.recommendedProducts,
      }

      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      try {
        await this.$axios.put(
          `https://cbsbackend.herokuapp.com/api/products/${this.item[0]._id}`,
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
  padding-left: 20px;
  padding-right: 20px;
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

  /* #about {
    padding-left: 0;
    padding-right: 0;
  } */

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

#feature-card {
  min-height: 800px;
}
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
