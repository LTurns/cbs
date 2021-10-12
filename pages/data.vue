<template>
  <section>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-tabs v-model="tab" black--text center light class="">
            <v-tabs-slider></v-tabs-slider>

            <v-tab href="#products" class="ml-20"> Products </v-tab>
            <v-tab href="#blogs"> Blogs </v-tab>
            <v-tab href="#stats"> Stats </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item :key="1" value="products">
              <v-col cols="12" md="12">
                <h3
                  :class="$vuetify.theme.dark ? 'black--text' : 'black--text'"
                  class="text-h4 text-center font-weight-light mb-xs-4 mt-10 mb-5"
                  style="
                    border-bottom: 2px solid #fde36d;
                    box-shadow: 0 4px 6px -6px #222;
                  "
                >
                  PRODUCTS
                </h3>
              </v-col>

              <div class="container-fluid">
                <div id="app" class="content">
                  <form @submit.prevent>
                    <table v-resize="onResize">
                      <thead>
                        <th
                          v-for="(heading, index) in headings"
                          :key="heading[index]"
                          class="table1"
                          align-center
                        >
                          {{ heading }}
                        </th>
                      </thead>

                      <tbody>
                        <tr v-for="(item, index) in filteredList" :key="item">
                          <td>
                            <p>{{ item.name.toUpperCase() }}</p>
                          </td>
                          <td v-show="!isMobile">
                            <p>{{ item.productId }}</p>
                          </td>

                          <td v-show="!isMobile">
                            <p style="text-align: center">
                              {{ item.enquiries }}
                            </p>
                          </td>
                          <td>
                            <v-img
                              :src="item.mainImg"
                              alt=""
                              width="50"
                              :lazy-src="item.mainImg"
                              aspect-ratio="1"
                              class="image grey lighten-2 rounded-lg mt-5 mb-10"
                            ></v-img>
                          </td>
                          <td v-show="!isMobile">
                            <p>{{ item.category }}</p>
                          </td>

                          <td>
                            <nuxt-link :to="`/edit/${item._id}`">
                              Edit
                            </nuxt-link>
                          </td>
                          <td>
                            <div class="text-center">
                              <v-dialog v-model="dialog" width="500">
                                <template v-slot:activator="{ on, attrs }">
                                  <v-btn
                                    color="red lighten-2"
                                    dark
                                    v-bind="attrs"
                                    class="btn"
                                    v-on="on"
                                    @click="showGroup(index)"
                                  >
                                    X
                                  </v-btn>
                                </template>
                                <v-card>
                                  <v-card-title class="text-h5 grey lighten-2">
                                    Delete Product?
                                  </v-card-title>
                                  <v-card-text class="pt-10">
                                    Are you sure you want to delete this
                                    product?
                                  </v-card-text>

                                  <v-divider></v-divider>

                                  <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                      color="primary"
                                      text
                                      @click="deleteGroup()"
                                      >YES
                                    </v-btn>
                                    <v-btn
                                      color="primary"
                                      text
                                      @click="dialog = false"
                                    >
                                      NO
                                    </v-btn>
                                  </v-card-actions>
                                </v-card>
                              </v-dialog>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div>
                      <v-row>
                        <v-col cols="12" align="center">
                          <v-btn
                            class="btn btn-info yellow float-center mt-20"
                            style="margin-top: 5%; margin-bottom: 5%"
                            @click="addGroup"
                          >
                            Add Product
                          </v-btn>
                        </v-col>
                      </v-row>
                    </div>
                  </form>
                  <div class="text-center"></div>
                </div>
              </div>
              <!-- </v-row>
        </v-container> -->
            </v-tab-item>

            <v-tab-item :key="1" value="blogs">
              <v-col cols="12" md="12">
                <h3
                  :class="$vuetify.theme.dark ? 'black--text' : 'black--text'"
                  class="text-h4 text-center font-weight-light mb-xs-4 mt-10 mb-5"
                  style="
                    border-bottom: 2px solid #fde36d;
                    box-shadow: 0 4px 6px -6px #222;
                  "
                >
                  BLOGS
                </h3>
              </v-col>

              <div class="container-fluid">
                <div id="app" class="content">
                  <form @submit.prevent>
                    <table>
                      <thead>
                        <th
                          v-for="(heading, index) in blogHeadings"
                          :key="heading[index]"
                          align-center
                        >
                          {{ heading }}
                        </th>
                      </thead>

                      <tbody>
                        <tr v-for="(item, index) in blogList" :key="item">
                          <td>
                            <p>{{ item.heading.toUpperCase() }}</p>
                          </td>
                          <td v-show="!isMobile">
                            <p
                              class="grey--text"
                              style="font-size: 15px; text-transform: lowercase"
                            >
                              {{ item.info.toLowerCase() }}
                            </p>
                          </td>

                          <td v-show="!isMobile">
                            <p style="text-align: center">
                              {{ item.categories.toString() }}
                            </p>
                          </td>

                          <td>
                            <nuxt-link :to="`/blogEdit/${item._id}`">
                              Edit
                            </nuxt-link>
                          </td>
                          <td>
                            <div class="text-center">
                              <v-dialog v-model="dialog" width="500">
                                <template v-slot:activator="{ on, attrs }">
                                  <v-btn
                                    color="red lighten-2"
                                    dark
                                    v-bind="attrs"
                                    class="btn"
                                    v-on="on"
                                    @click="showBlogGroup(index)"
                                  >
                                    X
                                  </v-btn>
                                </template>
                                <v-card>
                                  <v-card-title class="text-h5 grey lighten-2">
                                    Delete Blog?
                                  </v-card-title>
                                  <v-card-text class="pt-10">
                                    Are you sure you want to delete this blog?
                                  </v-card-text>

                                  <v-divider></v-divider>

                                  <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                      color="primary"
                                      text
                                      @click="deleteBlogGroup()"
                                      >YES
                                    </v-btn>
                                    <v-btn
                                      color="primary"
                                      text
                                      @click="dialog = false"
                                    >
                                      NO
                                    </v-btn>
                                  </v-card-actions>
                                </v-card>
                              </v-dialog>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div>
                      <v-row>
                        <v-col cols="12" align="center">
                          <v-btn
                            class="btn btn-info yellow float-center mt-20"
                            style="margin-top: 5%; margin-bottom: 5%"
                            @click="addBlogGroup"
                          >
                            Add Blog
                          </v-btn>
                        </v-col>
                      </v-row>
                    </div>
                  </form>
                  <div class="text-center"></div>
                </div>
              </div>
              <!-- </v-row>
        </v-container> -->
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  transition: 'data',
  middleware: ['auth-admin'],
  data() {
    return {
      heroAlt: [
        {
          src: '',
          heading: ' About Us ',
          icon: 'mdi-account',
        },
      ],
      tab: 'products',
      id: '',
      filteredList: [],
      blogList: [],
      dialog: false,
      categories: ['Fibre Blowing', 'Klein Tools', 'Utilities', 'Telecoms'],
      headings: [
        'Name',
        'ProductId',
        'Enquiries',
        'Main Image',
        'Category',
        'Edit',
        'Delete',
      ],
      blogHeadings: ['Title', 'Date', 'Categories', 'Edit', 'Delete'],
      items: [{}],
      product: null,
      blog: null,
      element: '',
      isMobile: false,
    }
  },
  created() {
    this.getAllProducts()
    this.getAllBlogs()
  },
  methods: {
    async addGroup() {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      try {
        const { data } = await this.$axios.post(
          'https://cbsbackend.herokuapp.com/api/products/',
          this.$auth.user,
          config
        )

        this.getAllProducts()
        return data
      } catch (err) {
        throw new Error('Error adding product')
      }
    },

    showGroup(index) {
      this.product = index
    },
    onResize() {
      if (window.innerWidth < 969) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }

      if (this.isMobile) {
        this.headings = ['Name', 'Main Image', 'Edit', 'Delete']
        this.blogHeadings = ['Title', 'Edit', 'Delete']
      }
    },
    async deleteGroup() {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      try {
        await this.$axios.delete(
          `https://cbsbackend.herokuapp.com/api/products/${
            this.filteredList[this.product]._id
          }`,
          config
        )
      } catch (err) {
        throw new Error('Error deleting Product')
      }

      this.dialog = false

      this.getAllProducts()
    },
    showBlogGroup(index) {
      this.blog = index
    },
    async deleteBlogGroup() {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      try {
        await this.$axios.delete(
          `https://cbsbackend.herokuapp.com/api/blogs/${
            this.blogList[this.blog]._id
          }`,
          config
        )
      } catch (err) {
        throw new Error('Error deleting Product')
      }

      this.dialog = false

      this.getAllBlogs()
    },
    async addBlogGroup() {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      try {
        const { data } = await this.$axios.post(
          'https://cbsbackend.herokuapp.com/api/blogs/',
          this.$auth.user,
          config
        )

        this.getAllBlogs()
        return data
      } catch (err) {
        throw new Error('Error adding product')
      }
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
        this.filteredList = response.data
      } catch (err) {
        throw new Error('Error Fetching Products')
      }
    },
    async getAllBlogs() {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      try {
        const response = await this.$axios.get(
          'https://cbsbackend.herokuapp.com/api/blogs',
          config
        )
        this.blogList = response.data
      } catch (err) {
        throw new Error('Error Fetching Blogs')
      }
    },
  },

  head() {
    return {
      title: 'Products',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem',
        },
      ],
    }
  },
}
</script>

<style>
.data-enter-active,
.data-leave-active {
  transition: opacity 0.5s;
}
.data-enter,
.data-leave-active {
  opacity: 0;
}
</style>
