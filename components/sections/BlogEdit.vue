<template>
  <div id="app">
    <v-container class="mt-10 pt-10 mb-10 pb-10">
      <form>
        <v-row class="mb-n6">
          <v-col>
            <v-textarea
              :value="blogData.heading"
              label="heading"
              dense
              auto-grow
              outlined
              required
              @input="blogData.heading = $event"
            ></v-textarea>
            <v-textarea
              label="subheading"
              :value="blogData.subheading"
              dense
              auto-grow
              outlined
              required
              @input="blogData.subheading = $event"
            ></v-textarea>
            <v-col>
              <v-select
                v-model="category"
                :items="items"
                attach
                label="Select Categories"
                multiple
                chips
                @change="addCategory"
              ></v-select>
              <!-- <v-layout row wrap>
                <v-flex
                  v-for="(category, index) in mainCategories"
                  :key="category[index]"
                  xs6
                >
                  <v-checkbox v-model="category" light :label="category">
                  </v-checkbox>
                </v-flex>
              </v-layout> -->
            </v-col>
            <div
              v-for="(paragraph, index) in blogData.description"
              :key="paragraph.id"
            >
              <v-textarea
                label="paragraph"
                dense
                :value="paragraph.paragraph"
                auto-grow
                outlined
                rows="8"
                row-height="20"
                @input="blogData.description[index].paragraph = $event"
              ></v-textarea>
            </div>
            <!-- <form align="center">
              <div class="form-group">
                <v-btn>
                  <input
                    type="file"
                    accept="image/*"
                    @change="saveBlogImages" /></v-btn
                ><br /><br />
                <div>
                  <table>
                    <thead>
                      <th
                        v-for="(heading, index) in imageHeading"
                        :key="heading[index]"
                        align-center
                      >
                        {{ heading }}
                      </th>
                    </thead>

                    <tbody>
                      <tr
                        v-for="(item, index) in blogData.img"
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
                          <v-btn
                            class="btn orange lighten-2"
                            dark
                            @click="deleteBlogImage(index)"
                          >
                            X
                          </v-btn>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </form> -->
          </v-col>
        </v-row>
        <v-row>
          <v-col
            ><v-btn class="my-2" color="primary" @click="saveBlog()"
              >SAVE</v-btn
            ></v-col
          >
        </v-row>
      </form>
    </v-container>
  </div>
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
    blogData: {
      heading: '',
      subheading: '',
      info: [],
      categories: [],
      description: [],
      img: '',
    },
    blogs: [],
    errorMessages: [],
    heading: '',
    subheading: '',
    description: '',
    info: '',
    categories: [],
    image: '',
    img: [],
    formHasErrors: false,
    imageHeading: ['image', ''],
    items: ['Fibre Blowing', 'Klein Tools', 'Utilities', 'Telecoms'],
    category: '',
  }),
  watch: {
    name() {
      this.errorMessages = []
    },
  },
  created() {
    this.getBlog()
    this.getAllBlogs()
  },
  methods: {
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

        for (const blog of response.data) {
          this.blogs.push(blog.heading)
        }

        return this.blogs
      } catch (err) {
        throw new Error('Error Fetching Products')
      }
    },
    addCategory() {
      // console.log(this.category)
      this.categories = this.category
    },
    async getBlog() {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      try {
        const { data } = await this.$axios.get(
          `https://cbsbackend.herokuapp.com/api/blogs/${this.id}`,
          config
        )

        this.blogData = {
          ...data,
        }

        return this.blogData
      } catch (error) {
        throw new Error(error)
      }
    },
    async saveBlog() {
      const data = {
        user: this.$auth.user,
        ...this.blogData,
      }

      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      try {
        await this.$axios.put(
          `https://cbsbackend.herokuapp.com/api/blogs/${this.id}`,
          data,
          config
        )
        // this.getAllMusics()
      } catch (err) {
        throw new Error('Error updating product')
      }
    },
    async saveBlogImages(event) {
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

        this.img.push({ image: this.image })
      } catch (error) {
        throw new Error(error)
      }
    },
    deleteBlogImage(index) {
      this.img.splice(index, 1)
    },
  },
}
</script>

<style></style>
