<template>
  <section>
    <v-row>
      <v-col cols="12">
        <v-container>
          <v-row>
            <v-col cols="12" md="12">
              <h3
                :class="$vuetify.theme.dark ? 'black--text' : 'black--text'"
                class="text-h4 text-center font-weight-light mb-xs-4 mt-10 mb-5"
                style="
                  border-bottom: 2px solid #fde36d;
                  box-shadow: 0 4px 6px -6px #222;
                "
              >
                PRODUCTS AND CATEGORIES
              </h3>
            </v-col>

            <div class="container-fluid">
              <div id="app" class="content">
                <form @submit.prevent>
                  <table>
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
                          <input
                            type="text"
                            class="form-control groupName pl-5 pr-5"
                            :value="item.name"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            class="form-control"
                            :value="item.productId"
                          />
                        </td>
                        <td>
                          <v-img
                            :src="`/${item.mainImg}`"
                            alt=""
                            width="50"
                            :lazy-src="item.mainImg"
                            aspect-ratio="1"
                            class="image grey lighten-2 rounded-lg mt-5 mb-10"
                          ></v-img>
                        </td>
                        <td>
                          <v-select
                            :value="item.category"
                            :items="categories"
                            label="Category"
                          ></v-select>
                        </td>

                        <td>
                          <nuxt-link :to="`/edit/${item.id}`"> Edit </nuxt-link>
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
                                  Are you sure you want to delete this product?
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
                    <v-btn
                      class="btn btn-info float-right mt-20"
                      @click="addGroup"
                    >
                      Add Product
                    </v-btn>
                  </div>
                </form>
                <div class="text-center"></div>
              </div>
            </div>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
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
      id: '',
      filteredList: [],
      dialog: false,
      categories: ['Fibre Blowing', 'Klein Tools', 'Utilities', 'Telecoms'],
      headings: [
        'Name',
        'ProductId',
        'Main Image',
        'Category',
        'Edit',
        'Delete',
      ],
      items: [{}],
      product: null,
      element: '',
    }
  },
  created() {
    this.getAllMusics()
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
          'http://localhost:5001/api/products/',
          this.$auth.user,
          config
        )

        this.id = data._id

        const request = {
          id: this.id,
        }

        try {
          await this.$axios.put(
            `http://localhost:5001/api/products/${this.item[0]._id}`,
            request,
            config
          )
          // this.getAllMusics()
        } catch (err) {
          throw new Error('Error updating product')
        }

        this.getAllMusics()
      } catch (err) {
        throw new Error('Error adding product')
      }
    },
    showGroup(index) {
      this.product = index
    },
    async deleteGroup() {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      try {
        await this.$axios.delete(
          `http://localhost:5001/api/products/${
            this.filteredList[this.product]._id
          }`,
          config
        )
      } catch (err) {
        throw new Error('Error deleting Product')
      }

      this.dialog = false

      this.getAllMusics()
    },
    async getAllMusics() {
      this.listLoading = true
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      try {
        const response = await this.$axios.get(
          'http://localhost:5001/api/products',
          config
        )
        this.filteredList = response.data
      } catch (err) {
        throw new Error('Error Fetching Products')
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
