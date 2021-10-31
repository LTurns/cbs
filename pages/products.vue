<template>
  <section class="blue-grey darken-4">
    <v-row no-gutters>
      <v-col cols="12" align="center">
        <SectionsHeroAlt
          :hero-alt="heroAlt"
          :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
        />
        <v-container>
          <SectionsMainSearch :data="filteredList" category="general" />
          <SectionsIntro
            class="pt-10 pb-10"
            style="margin-bottom: 30px"
            color="white"
            text="text-uppercase black--text"
          />
        </v-container>
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
        </div>
      </v-col>
    </v-row>
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
      filteredList: '',
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
  },
}
</script>
