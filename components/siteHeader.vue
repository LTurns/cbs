<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app temporary>
      <v-list dense>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title.toUpperCase()" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app hide-on-scroll height="64" elevate-on-scroll>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = true" />
      <nuxt-link to="/">
        <Logo class="logo" />
      </nuxt-link>
      <v-spacer />
      <v-tabs class="hidden-sm-and-down ml-auto" optional right>
        <v-tab
          v-for="(name, tab) in items"
          :key="tab"
          :to="name.to"
          nuxt
          :ripple="false"
          active-class="text--primary"
          class="font-weight-bold"
          :tabindex="tab + 1"
        >
          {{ name.title }}
        </v-tab>
      </v-tabs>
      <div class="search yellow darken-1">
        <v-btn class="search__btn" @click="searchProducts">
          <!-- <v-btn> -->
          <v-icon>mdi-magnify</v-icon>
          <!-- </v-btn> -->
        </v-btn>
        <input
          id="search"
          v-model="search"
          type="input"
          class="search__input"
          aria-label="search"
          placeholder="search"
        />
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      search: '',
      url: '/fibreinstallation',
      items: [
        {
          icon: 'mdi-folder-home-outline',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-tools',
          title: 'Products',
          to: '/products',
        },
        {
          icon: 'mdi-account',
          title: 'About Us',
          to: '/about',
        },
        {
          icon: 'mdi-call-split',
          title: 'Where To Buy',
          to: '/wheretobuy',
        },
        {
          icon: 'mdi-message-text',
          title: 'Blog',
          to: '/blog',
        },
        {
          icon: 'mdi-contacts',
          title: 'Contact',
          to: '/contact',
        },
      ],
    }
  },
  created() {
    this.getAllFibreBlowingProducts()
  },
  methods: {
    async getAllFibreBlowingProducts() {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      try {
        const { data } = await this.$axios.get(
          'https://cbsbackend.herokuapp.com/api/products',
          config
        )

        return (this.filteredList = data)
      } catch (err) {
        throw new Error('Error Fetching Products')
      }
    },
    searchProducts() {
      // console.log('yooooo', this.search)

      // redirect won't work because it's only specific to the homepage

      // get all products
      // loop through API - if name or product ID matches one of the products, go directly to that page.
      // if it does not reference any products but does reference something similar, go to the category it relates to and mention similar products.
      // remember spelling mistakes too - acknowledge those.
      this.$router.push('fibreinstallation')
    },
  },
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 658px) {
  .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
  }

  .search {
    font-size: 13px;
    width: 40%;
  }

  .__btn {
    width: 30%;
  }
}

$backgroundColor: rgb(14, 12, 24);
$brandColor: #fde36d;
.search {
  // margin-left: 20%;
  // margin-right: 20%;
  display: flex;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.3);
  // background-color: white;
  // border-radius: 100vh;
  // heigth: 60px;
  margin-top: 2%;
  margin-bottom: 2%;
  padding: 1%;
  width: 30%;
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
    width: calc(100% - 60px);
    cursor: pointer;
    color: black;

    &:focus {
      outline: none;
    }
  }

  &__btn {
    // font-size: 1.3rem;
    // background: transparent;
    // border: none;
    cursor: pointer;
    margin-left: auto;
    // transition: background 150ms ease-in-out;

    &:focus {
      outline: none;
    }
  }

  &:focus-within {
    width: 40%;

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
