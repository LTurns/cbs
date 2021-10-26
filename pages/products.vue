<template>
  <section class="blue-grey darken-4">
    <v-row no-gutters>
      <v-col cols="12" align="center">
        <SectionsHeroAlt
          :hero-alt="heroAlt"
          :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
        />
        <div class="yellow darken-2">
          <SectionsBlockQuote>
            <slot>
              We have had a really exciting 2021 turning 50 years old! Some
              highlights of the last few years can be seen in our About page. In
              the year 1971, 50 years ago, CBS was first established in Oakham.
              Back then,it designed and manufacture cable jointing equipment.
              Before this, the famous building was a food hall for the locals
              during the war. Please check us out on LinkedIn for more
              information.
            </slot>
          </SectionsBlockQuote>
          <SectionsSearch
            v-show="productList.length != 0"
            :data="productList"
          />
        </div>
        <div class="pt-10">
          <nuxt-link exact to="category/compressors" class="tag"
            >Compressors</nuxt-link
          >
          <nuxt-link exact to="category/accessories" class="tag"
            >Fibre Blowing - Accessories</nuxt-link
          >
          <div v-show="search.length != 0">
            <SectionsFeaturedProducts :data="productList" color="white" />
          </div>
        </div>
        <v-container>
          <SectionsIntro
            class="pt-10 pb-10"
            style="margin-bottom: 30px"
            color="white"
            text="text-uppercase black--text"
          />
        </v-container>
      </v-col>
    </v-row>
    <!-- </v-container> -->
  </section>
</template>

<script>
export default {
  transition: 'products',
  data() {
    return {
      heroAlt: [
        {
          src: '',
          heading: ' Products',
          icon: 'mdi-tools',
        },
      ],
      search: '',
    }
  },
  computed: {
    productList() {
      if (this.search !== '') {
        return this.$store.getters.Categories.filter((box) => {
          return box.name.toLowerCase().includes(this.search.toLowerCase())
        })
      }
      return ''
    },
  },
}
</script>

<style lang="scss">
$backgroundColor: rgb(14, 12, 24);
$brandColor: #fde36d;
.search {
  width: 60%;
  display: flex;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.3);
  background-color: white;
  padding: 3px;
  margin-top: 1%;
  position: relative;
  transition: width 450ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
  overflow: hidden;

  &__input {
    flex-grow: 1;
    border: none;
    padding: 0 0.5rem;
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

.tag {
  border-radius: 3px 0 0 3px;
  color: white !important;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 20px 0 23px;
  position: relative;
  margin: 0 10px 10px 0;
  text-decoration: none;
  -webkit-transition: color 0.2s;
}

.tag::before {
  background: rgb(221, 163, 5);
  border-radius: 10px;
  box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
  content: '';
  height: 6px;
  left: 10px;
  position: absolute;
  width: 6px;
  top: 10px;
}

.tag::after {
  border-bottom: 13px solid transparent;
  border-left: 10px solid rgb(221, 163, 5);
  border-top: 13px solid transparent;
  content: '';
  position: absolute;
  right: 0;
  top: 0;
}

.tag:hover::after {
  border-left-color: yellow;
}

.products-enter-active,
.products-leave-active {
  transition: opacity 0.5s;
}
.products-enter,
.products-leave-active {
  opacity: 0;
}
</style>
