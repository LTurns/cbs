<template>
  <v-app>
    <site-header />
    <v-main>
      <nuxt />
      <footerTop />
    </v-main>
    <site-footer />
  </v-app>
</template>

<script>
import siteHeader from '~/components/siteHeader.vue'
import footerTop from '~/components/footerTop.vue'
import siteFooter from '~/components/siteFooter.vue'
export default {
  components: {
    siteHeader,
    footerTop,
    siteFooter,
  },
  data() {
    return {
      menu: [
        { text: 'Contact Us', link: '#' },
        { text: 'Covid-19 Operation', link: '#' },
      ],
    }
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

html {
  width: 100%;
}

body {
  width: 100%;
  overflow: hidden;
}
</style>
