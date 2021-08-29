<template>
  <section :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'">
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt
          :hero-alt="heroAlt"
          :class="$vuetify.theme.dark ? 'grey darken-4' : 'white'"
        />
      </v-col>
    </v-row>
    <v-container>
      <v-row>
        <v-col cols="12" xl="2" lg="3" md="4" sm="4">
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
            <p style="color: grey; margin-top: 20px; font-size: 15px">
              Popular search results:
            </p>
            <nuxt-link exact to="article/11" class="tag"
              >Klein Tools Insulated Range</nuxt-link
            >
            <nuxt-link exact to="article/5" class="tag"
              >Tornado Blowing Machine</nuxt-link
            >
            <nuxt-link exact to="article/8" class="tag"
              >Drum Handling</nuxt-link
            >
            <nuxt-link exact to="/article/3" class="tag">Pole Bogie</nuxt-link>
          </aside>
        </v-col>
        <SectionsBlogs :data="BlogStories" />
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
          icon: 'mdi-blogger',
        },
      ],
      search: '',
    }
  },
  computed: {
    // BlogStories() {
    //   return this.$store.getters.BlogStories
    // },
    // CableBlowingEquipment() {
    //   return this.$store.getters.cableBlowingCategory;
    // },
    BlogStories() {
      if (this.search !== '') {
        return this.$store.getters.BlogStories.filter((box) => {
          return box.description[0].paragraph
            .toLowerCase()
            .includes(this.search.toLowerCase())
        })
      }

      return this.$store.getters.BlogStories
    },
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
