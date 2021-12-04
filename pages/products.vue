<template>
  <section class="white">
    <v-row no-gutters>
      <v-col cols="12" align="center">
        <SectionsHeroAlt :hero-alt="heroAlt" class="grey lighten-4" />
        <v-container>
          <SectionsMainSearch :data="filteredList" />
          <SectionsIntro
            class="pt-10 pb-10"
            style="margin-bottom: 30px"
            color="black"
            text="text-uppercase black--text"
          />

          <div
            class="fonttitle black--text text--lighten-4 font-weight-black"
            align="center"
            style="
              border-bottom: 2px solid #fde36d;
              box-shadow: 0 4px 6px -6px #222;
              line-height: 1;
              padding: 3%;
              margin-left: 1%;
              margin-right: 1%;
              margin-top: 3%;
            "
          >
            POPULAR SEARCHES
          </div>
          <SectionsFeaturedProducts :data="filteredList.slice(0, 3)" />
        </v-container>
        <div class="grey lighten-4">
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
