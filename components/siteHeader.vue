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
        <Logo />
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
        <v-tab>
          <a
            href="http://www.cbsproducts.com/wp-content/uploads/2021/03/CBS-Main-Product-Catalogue.pdf"
            active-class="text--primary mt-10"
            class="font-weight-bold"
            >Download Catalogue
          </a>
        </v-tab>
      </v-tabs>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
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
  methods: {
    // changeThemeColor() {
    //   if (this.$vuetify.theme.dark === true) {
    //     this.$vuetify.theme.dark = false
    //   } else {
    //     this.$vuetify.theme.dark = true
    //   }
    // },
  },
}
</script>

<style scoped>
@media screen and (max-width: 658px) {
  img {
    display: block;
    margin-left: auto;
    float: right;
  }
}
</style>
