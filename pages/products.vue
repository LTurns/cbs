<template>
  <section :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'">
    <v-row>
      <v-col cols="12" align="center">
        <SectionsHeroAlt
          :hero-alt="heroAlt"
          :class="$vuetify.theme.dark ? 'grey darken-4' : 'white lighten-4'"
        />
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
        <nuxt-link exact to="category/compressors" class="tag"
          >Compressors</nuxt-link
        >
        <nuxt-link exact to="product/tGGW0ov0fkKzK9ax7QYLHA" class="tag"
          >Tornado</nuxt-link
        >
        <nuxt-link exact to="product/xS0KUwWdbEqPrt5pKjhfSA" class="tag"
          >Hurricaine</nuxt-link
        >
        <nuxt-link exact to="category/accessories" class="tag"
          >Fibre Blowing - Accessories</nuxt-link
        >
        <SectionsFeaturedProducts :data="productList" />

        <SectionsIntro style="margin-bottom: 30px" />
      </v-col>
    </v-row>
  </section>
</template>

<script>
// import axios from 'axios'
export default {
  transition: 'products',
  // async fetch() {
  //   try {
  //     const result = await axios.get(
  //       'https://tranquil-basin-55259.herokuapp.com/product-category',
  //       {}
  //     )
  //     this.productList = result.data
  //     if (this.search !== '') {
  //       return this.productList.filter((box) => {
  //         return box.name.toLowerCase().includes(this.search.toLowerCase())
  //       })
  //     }
  //   } catch (error) {
  //     if (this.search !== '') {
  //       this.productList = this.$store.getters.Products.filter((box) => {
  //         return box.name.toLowerCase().includes(this.search.toLowerCase())
  //       })
  //     }
  //   }
  // },
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
      cards: [
        {
          title: 'UTILITIES',
          text:
            'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          icon: 'mdi-material-design',
          link: '/utilities',
        },
        {
          title: 'CLIENT TOOLS',
          text:
            'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          icon: 'mdi-desktop-mac',
          link: '/clienttools',
        },
        {
          title: 'FIBRE BLOWING',
          text:
            'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          icon: 'mdi-eye',
          link: '/fibreBlowing',
        },
        {
          title: 'TELECOMS',
          text:
            'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          icon: 'mdi-speedometer',
          link: '/telecoms',
        },
      ],
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
  // margin-left: 20%;
  // margin-right: 20%;
  display: flex;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.3);
  background-color: white;
  // border-radius: 100vh;
  // heigth: 60px;
  padding: 3px;
  margin-top: 1%;
  // margin-bottom: 3%;
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

.tag {
  background: rgb(255, 255, 255);
  border-radius: 3px 0 0 3px;
  color: black;
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
  background: rgb(245, 214, 42);
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
  border-left: 10px solid rgb(245, 221, 5);
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
