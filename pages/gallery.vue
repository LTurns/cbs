<template>
  <section class="grey lighten-4">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12">
          <SectionsHeroAlt :hero-alt="heroAlt" />
          <div>
            <v-icon left large color="primary">mdi-play</v-icon>
            <a
              href="http://www.cbsproducts.com/wp-content/uploads/2021/03/CBS-Main-Product-Catalogue.pdf"
              class="learn black--text"
              >Click Here to View Our Product Catalogue
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  transition: 'catalogues',
  data() {
    return {
      heroAlt: [
        {
          src: '',
          heading: ' DOWNLOAD OUR CATALOGUES ',
          icon: 'mdi-folder-image',
        },
      ],
    }
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
.catalogues-enter-active,
.catalogues-leave-active {
  transition: opacity 0.5s;
}
.catalogues-enter,
.catalogues-leave-active {
  opacity: 0;
}
</style>
