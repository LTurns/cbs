<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12" align="center" fill-height>
        <form>
          <div class="form-group">
            <!-- <label for="my-file">Select Image</label> -->
            <v-btn>
              <input type="file" accept="image/*" @change="saveImages" /></v-btn
            ><br /><br />
            <div class="border p-2 mt-3">
              <template v-if="preview_list.length">
                <div>
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
                      <tr
                        v-for="(item, index) in preview_list"
                        :key="item.image"
                      >
                        <td>
                          <img
                            :src="`../${item.image}`"
                            class="img-fluid"
                            width="50px"
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
                          <v-btn class="btn" @click="deleteGroup(index)">
                            X
                          </v-btn>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <img :src="item" class="img-fluid" />
                </div>
              </template>

              <img :src="image" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    previewList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      preview_list: this.previewList,
      preview: null,
      image: '',
      image_list: [],
      headings: ['image', 'name', 'Remove'],
      image_names: [],
    }
  },
  methods: {
    previewImage(event) {
      const input = event.target
      if (input.files) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.preview = e.target.result
        }
        this.image = input.files[0]
        reader.readAsDataURL(input.files[0])
      }
    },
    previewMultiImage(event) {
      const input = event.target
      let count = input.files.length
      let index = 0
      if (input.files) {
        while (count--) {
          const reader = new FileReader()
          reader.onload = (e) => {
            this.preview_list.push(e.target.result)
          }
          // this.image_list.push(input.files[index])
          reader.readAsDataURL(input.files[index])
          index++
        }
      }
    },
    async saveImages(event) {
      const input = event.target.files[0]
      // let count = input.files.length
      // let index = 0
      // if (input.files) {
      //   while (count--) {
      // const reader = new FileReader()
      const formData = new FormData()

      // reader.onload = (e) => {
      //   this.preview_list.push(e.target.result)
      // }
      // this.image_list.push(input.files[index])
      // reader.readAsDataURL(input)
      // index++

      formData.append('image', input)

      try {
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }

        const { data } = await this.$axios.post(
          'http://localhost:5001/api/upload',
          formData,
          config
        )

        this.image = data

        console.log('hellooooo', this.image)

        return this.image
      } catch (error) {
        console.log(error)
      }
      // reader.onload = (e) => {
      //   this.preview_list.push(e.target.result)
      // }
      // this.image_list.push(input.files[index])
      // reader.readAsDataURL(input.files[index])
      // index++
    },
    previewImageName(event) {
      const input = event.target
      if (input.length !== 0) {
        this.image_names.push(input)
      }
    },
    reset() {
      this.image = null
      this.preview = null
      this.image_list = []
      this.previewList = []
    },
    deleteGroup(index) {
      this.previewList.splice(index, 1)
    },
  },
}
</script>
