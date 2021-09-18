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
                  <table class="">
                    <!-- <thead>
                      <tr class="table">
                        <th>Group</th>
                        <th>No</th>
                        <th>Description</th>
                        <th colspan="2">Time</th>
                        <th>Delete</th>
                      </tr>
                    </thead> -->
                    <tbody>
                      <tr v-for="(item, index) in items" :key="item">
                        <td>
                          <input
                            v-model="item.groupName"
                            type="text"
                            class="form-control groupName"
                            value="item.groupName"
                          />
                        </td>
                        <td>
                          <input
                            v-model="item.equipmentNo"
                            type="number"
                            class="form-control"
                            value="item.equipmentName"
                          />
                        </td>
                        <td>
                          <input
                            v-model="item.description"
                            type="text"
                            class="form-control"
                            value="item.description"
                          />
                        </td>
                        <td>
                          <select id="" name="" class="form-control">
                            <option
                              v-for="itemOption in item.timeStart"
                              :key="itemOption.groupName"
                              :value="itemOption"
                            >
                              {{ itemOption }}
                            </option>
                          </select>
                        </td>
                        <td>
                          <select id="" name="" class="form-control">
                            <option
                              v-for="itemOption in item.timeFinish"
                              :key="itemOption.groupName"
                              :value="itemOption"
                            >
                              {{ itemOption }}
                            </option>
                          </select>
                        </td>
                        <td>
                          <button
                            class="btn btn-danger"
                            @click="deleteGroup(index)"
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div>
                    <button class="btn btn-info float-right" @click="addGroup">
                      Add New Group with Vue.Js
                    </button>
                  </div>
                </form>
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
  transition: 'about',
  data() {
    return {
      heroAlt: [
        {
          src: '',
          heading: ' About Us ',
          icon: 'mdi-account',
        },
      ],
      filteredList: '',
      items: [
        {
          groupName: 'Group Name',
          equipmentNo: '123456789',
          description: 'Description',
          timeStart: {
            option1: '09:00',
            option2: '09:30',
          },
          timeFinish: {
            option1: '18:00',
            option2: '18:30',
          },
        },
      ],
    }
  },
  created() {
    this.getAllMusics()
  },
  methods: {
    addGroup() {
      this.items.push({
        groupName: 'New Group',
        equipmentNo: '123456789',
        description: 'New Description',
        timeStart: {
          option1: '09:00',
          option2: '09:30',
          option3: '10:00',
        },
        timeFinish: {
          option1: '18:00',
          option2: '18:30',
          option3: '19:00',
        },
      })
    },
    deleteGroup(index) {
      this.items.splice(index, 1)
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
        this.listLoading = false
      } catch (err) {
        this.listLoading = false
        throw new Error('Error Fetching Products')
      }
    },
    list(list) {
      if (this.search !== '') {
        return this.filteredList.filter((box) => {
          return box.name.toLowerCase().includes(this.search.toLowerCase())
        })
      }
      return this.filteredList
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
.about-enter-active,
.about-leave-active {
  transition: opacity 0.5s;
}
.about-enter,
.about-leave-active {
  opacity: 0;
}

/* .content {
  max-width: calc(1000px);
  padding: 20px;
  border-radius: 2px;
}
.content td:first-of-type {
  width: 120px;
}
.content .form-control {
  font-size: 13px;
}
.groupName,
.groupName:hover,
.groupName:focus,
.groupName:active {
  color: #888;
  border: none;
  outline: 0;
} */
</style>
