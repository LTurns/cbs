<template>
  <section class="white">
    <v-row no-gutters>
      <v-col cols="12" class="grey lighten-3" align="center">
        <SectionsHeroAlt :hero-alt="heroAlt" class="grey lighten-4" />
        <SectionsBlockQuote
          ><slot
            >Browse our latest blogs for all of our most recent products and
            events.
          </slot></SectionsBlockQuote
        >
      </v-col>
    </v-row>
    <v-container class="pt-10">
      <v-row>
        <v-col cols="12" align="center">
          <aside>
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
          </aside>
        </v-col>
        <SectionsBlogs :data="blogList" />
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  transition: 'blog',
  data() {
    return {
      heroAlt: [
        {
          src: '',
          heading: ' Blog ',
          icon: 'mdi-message-text',
        },
      ],
      search: '',
      blogList: [],
    }
  },
  created() {
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
        this.blogList = response.data
      } catch (err) {
        throw new Error('Error Fetching Blogs')
      }
    },
    // BlogStories() {
    //   if (this.search !== '') {
    //     return this.$store.getters.BlogStories.filter((box) => {
    //       return box.description[0].paragraph
    //         .toLowerCase()
    //         .includes(this.search.toLowerCase())
    //     })
    //   }

    //   return this.$store.getters.BlogStories
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
  margin-bottom: 3%;
  width: 90%;
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
    width: calc(100% - 10px);
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  &__btn {
    // font-size: 1.3rem;
    background: $brandColor;
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
    width: 100%;

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

.blog-enter-active,
.blog-leave-active {
  transition: opacity 0.5s;
}
.blog-enter,
.blog-leave-active {
  opacity: 0;
}
</style>
