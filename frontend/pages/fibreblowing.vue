<template>
  <section>
    <v-row no-gutters>
      <v-col
        cols="12"
        align="center"
        :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
      >
        <SectionsHeroAlt
          :hero-alt="heroAlt"
          :class="$vuetify.theme.dark ? 'grey darken-4' : 'white lighten-4'"
        />
        <v-responsive
          :class="$vuetify.theme.dark ? 'grey darken-4' : 'yellow darken-1'"
          class="max-auto mx-auto text-center"
        >
          <div
            class="hero-text mt-20 mb-20"
            style="margin-top: 50px; margin-bottom: 50px"
          >
            <!-- <blockquote>
              Scroll down to view our Fibre Blowing Products. These include
              Tornados, Hurricaines and much more.
            </blockquote> -->
          </div>
        </v-responsive>
        <div class="search">
          <input
            v-model="search"
            type="text"
            class="search__input"
            aria-label="search"
            placeholder="enter your search"
          />
          <button class="search__btn" aria-label="submit search">
            <img src="/loupe.png" alt="" />
          </button>
        </div>

        <SectionsFeaturedProducts :data="filteredList" />
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  transition: 'fibreblowing',

  // async fetch() {
  //   console.log(this.mountains)
  //   this.mountains = await this.$axios.get('/products').then((res) => res.json)
  // },
  // async asyncData({ $axios }) {
  //   const data = await $axios.$get('/products')
  //   return { users: data }
  // },
  data() {
    return {
      heroAlt: [
        {
          src: '',
          heading: ' FIBRE BLOWING ',
        },
      ],
      search: '',
      filteredList: [],
      listLoading: '',
    }
  },
  // computed: {
  //   list() {
  //     if (this.search !== '') {
  //       return this.filteredList.filter((box) => {
  //         return box.name.toLowerCase().includes(this.search.toLowerCase())
  //       })
  //     }
  //     return this.filteredList
  //   },
  // },
  created() {
    this.getAllMusics()
  },
  methods: {
    async getAllMusics() {
      this.listLoading = true
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      try {
        const { data } = await this.$axios.get(
          'http://localhost:5001/api/products',
          config
        )

        // console.log('here is the data', data)

        data.forEach((product) => {
          if (product.category === 'Fibre Blowing') {
            this.filteredList.push(product)
          }
        })
        // console.log('here is the category', data.forEach())

        // this.filteredList.push(
        //   data.filter((category) => category !== 'Fibre Blowing')
        // )

        return this.filteredList
      } catch (err) {
        throw new Error('Error Fetching Products')
      }
    },
    // list(list) {
    //   if (this.search !== '') {
    //     return this.filteredList.filter((box) => {
    //       return box.name.toLowerCase().includes(this.search.toLowerCase())
    //     })
    //   }
    //   return this.filteredList
    // },
  },
}
</script>

<style lang="scss" scoped>
$backgroundColor: rgb(14, 12, 24);
$brandColor: #fde36d;
.search {
  // margin-left: 20%;
  // margin-right: 20%;
  display: flex;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.3);
  background-color: white;
  // border-radius: 100vh;
  // heigth: 60px;
  padding: 3px;
  margin-top: 3%;
  margin-bottom: 3%;
  width: 50%;
  position: relative;
  transition: width 450ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
  overflow: hidden;

  &__input {
    flex-grow: 1;
    border: none;
    // background: transparent;
    padding: 0 0.5rem;
    // font-size: 1.6rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 10px;
    opacity: 0;
    width: calc(100% - 60px);
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  &__btn {
    // font-size: 1.3rem;
    background: transparent;
    border: none;
    cursor: pointer;
    border-radius: 100vh;
    height: 50px;
    width: 50px;
    margin-left: auto;
    transition: background 150ms ease-in-out;

    &:focus {
      outline: none;
    }

    img {
      width: 20px;
    }
  }

  &:focus-within {
    width: 80%;

    .search__input {
      opacity: 1;
      cursor: initial;
    }

    .search__btn {
      background: $brandColor;
      color: black;

      &:hover,
      &:focus {
        outline: 0;
        // transform: rotate(1turn);
        // box-shadow: 0 0 10px rgba(0, 0, 0, 0.65);
      }
    }
  }
}
.fibreblowing-enter-active,
.fibreblowing-leave-active {
  transition: opacity 0.5s;
}
.fibreblowing-enter,
.fibreblowing-leave-active {
  opacity: 0;
}
</style>
