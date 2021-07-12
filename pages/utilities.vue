<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12" align="center">
        <SectionsHeroAlt :hero-alt="heroAlt" />
        <div class="search">
          <input
            v-model="search"
            type="text"
            class="search__input"
            aria-label="search"
            placeholder="enter your search"
          />
          <app-product-list :data="filteredList" />
          <button class="search__btn" aria-label="submit search">
            <img src="/loupe.png" alt="" />
          </button>
        </div>

        <SectionsFeaturedProducts :data="filteredList" />
        <v-container class="py-16">
          <v-row>
            <v-col
              v-for="n in 120"
              :key="n"
              class="d-flex child-flex"
              cols="4"
              xl="3"
            >
              <v-img
                :src="`https://picsum.photos/700?image=${n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                aspect-ratio="1"
                class="grey lighten-2 rounded-lg"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      heroAlt: [
        {
          src: 'pexels-andrea-piacquadio-3830745.jpg',
          heading: ' UTILITIES ',
        },
      ],
      search: '',
    }
  },
  computed: {
    // CableBlowingEquipment() {
    //   return this.$store.getters.cableBlowingCategory;
    // },
    filteredList() {
      if (this.search !== '') {
        return this.$store.getters.fibreBlowing.filter((box) => {
          return box.name.toLowerCase().includes(this.search.toLowerCase())
        })
      }
      return this.$store.getters.fibreBlowing
    },
  },
  head() {
    return {
      title: 'Gallery',
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
</style>
