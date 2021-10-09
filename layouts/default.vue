<template>
  <v-app>
    <site-header />
    <v-main>
      <nuxt />
      <footerTop />
    </v-main>
    <v-footer
      :class="
        $vuetify.theme.dark
          ? 'blue-grey darken-4 grey--text text--lighten-1'
          : 'grey lighten-3 grey--text text--darken-4'
      "
      class="site-footer"
    >
      <v-container>
        <v-divider class="mb-5"></v-divider>
        <v-row>
          <v-col cols="12" md="12"
            ><div class="d-flex">
              <div v-if="$auth.loggedIn">
                {{ $auth.user.name }}
                <v-btn text @click="logout()">Logout</v-btn>
              </div>
              <div v-else>
                <v-btn text to="/login">Login</v-btn>
                <!-- <v-btn text to="/register">Register</v-btn> -->
              </div>

              <template v-for="(s, i) in menu">
                <v-btn :key="i" text :to="s.link" v-text="s.text" />

                <!-- <v-responsive
                  v-if="i < menu.length - 1"
                  :key="`divider-${i}`"
                  class="mx-4 shrink hidden-sm-and-down"
                  max-height="18"
                > -->
                <!-- <v-divider vertical />
                </v-responsive> -->
              </template>
            </div></v-col
          >
          <v-col class="text--secondary text-center text-md-right">
            {{ new Date().getFullYear() }} ©
            <!-- <nuxt-link class="primary--text" to="/">ModeVue</nuxt-link> -->
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import siteHeader from '~/components/siteHeader.vue'
import footerTop from '~/components/footerTop.vue'
// import siteFooter from '~/components/siteFooter.vue'
export default {
  components: {
    siteHeader,
    footerTop,
    // siteFooter,
  },
  data() {
    return {
      menu: [
        { text: 'Contact Us', link: '#' },
        { text: 'Disclaimer', link: '#' },
        { text: 'Covid-19 Operation', link: '#' },
      ],
    }
  },
  methods: {
    logout() {
      return (
        this.$auth.logout() &&
        this.$auth.strategies.local.options.endpoints.user
      )
      // this.$auth.strategies.local.options.endpoints.user.headers.Authorization = null
    },
  },
  head() {
    return {
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-0DYDMZEYDZ',
        },
      ],
    }
  },
}
</script>

<style>
.site-footer a {
  text-decoration: none;
}
</style>
