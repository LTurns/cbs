<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app temporary>
      <v-list dense>
        <Logo class="logo-mobile ml-10" />
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
    <v-app-bar fixed app hide-on-scroll height="74">
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = true" />
      <nuxt-link to="/">
        <Logo class="logo-web" />
      </nuxt-link>
      <!-- <div> -->
      <v-form
        class="searchbar-mobile font-weight-bold mt-5"
        active-class="text--primary"
        @submit.prevent="selectQuery"
      >
        <v-autocomplete
          v-model="searchData"
          class="bar"
          color="orange"
          label="SEARCH"
          :items="products"
          clearable
          @submit.prevent="selectQuery"
        >
        </v-autocomplete>
      </v-form>
      <v-tab>
        <v-btn class="searchbutton-mobile" @click="selectQuery"
          ><v-icon>mdi-magnify</v-icon></v-btn
        >
      </v-tab>
      <!-- </div> -->
      <!-- <v-spacer /> -->
      <v-tabs class="hidden-sm-and-down mx-auto" optional centered>
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
        <v-tab>
          <v-form
            class="searchbar font-weight-bold mt-5 ml-5 mr-5"
            active-class="text--primary"
            @submit.prevent="selectQuery"
          >
            <v-autocomplete
              v-model="searchData"
              class="bar"
              color="orange"
              label="SEARCH"
              :items="products"
              clearable
              @submit.prevent="selectQuery"
            >
            </v-autocomplete>
          </v-form>
        </v-tab>
        <v-tab>
          <v-btn class="searchbutton" @click="selectQuery"
            ><v-icon>mdi-magnify</v-icon></v-btn
          >
        </v-tab>
      </v-tabs>
    </v-app-bar>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      url: '/fibreinstallation',
      products: [],
      searchData: '',
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
  computed: {
    ...mapState(['search']),
  },
  created() {
    this.getAllFibreBlowingProducts()
  },
  methods: {
    ...mapMutations(['updateSearch']),
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

        data.forEach((product) => {
          this.products.push(product.name)
          this.products.push(product.productId)
        })

        return (this.filteredList = data)
      } catch (err) {
        throw new Error('Error Fetching Products')
      }
    },
    selectQuery() {
      this.updateSearch(this.searchData)

      if (this.$route.path.includes('/product/')) {
        this.$router.replace('/products')
      }

      this.$router.push(`/search/${this.search}`)
    },
  },
}
</script>

<style lang="scss" scoped>
$backgroundColor: rgb(14, 12, 24);
$brandColor: #fde36d;

// .mobile-search {
//   display: none;
// }

.searchbar-mobile,
.searchbutton-mobile {
  display: none;
}

.logo-mobile {
  visibility: hidden;
}

@media screen and (max-width: 700px) {
  .logo-web {
    display: none;
  }

  .logo-mobile {
    width: 50%;
  }

  // .search {
  //   font-size: 13px;
  //   width: 40%;
  // }

  .__btn {
    width: 30%;
  }
  // .mobile-search {
  //   display: unset;
  // }
  .searchbar-mobile {
    width: 350px;
  }
  .searchbar-mobile,
  .searchbutton-mobile {
    display: block;
    visibility: visible;
  }
}
</style>
