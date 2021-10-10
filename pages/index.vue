<template>
  <section id="home">
    <!-- <v-row no-gutters> -->
    <v-col class="hero">
      <SectionsHero />
    </v-col>
    <!-- </v-row> -->
    <v-row no-gutters>
      <v-col cols="12" class="yellow darken-2">
        <SectionsBlockQuote>
          <slot>
            CBS Products (KT), Ltd. is a leading provider of specialised
            equipment solutions for the construction of power transmission lines
            and telecommunications networks around the world. It has become the
            partner of choice in a number of high profile, international fibre
            optic cable projects around the globe. In the UK, the Tornado
            out-performed its competition in a most demanding evaluation,
            enabling CBS to win a highly coveted contract as exclusive suppliers
            of cable blowing equipment to British Telecommunications (BT).
          </slot>
        </SectionsBlockQuote>
        <!-- <span class="cite"
            >"Mr. Show Biz Lights Up the Sky for Billions.” Patrick Mott.
            <em>Los Angeles Times</em>. 1985</span
          > -->
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <h3 class="text-h3 text-center font-weight-bold mb-xs-4 mt-10 mb-5">
          FEATURED PRODUCTS
        </h3>
        <!-- </v-responsive> -->
        <SectionsFeaturedProducts
          class="yellow darken-1"
          :data="filteredList"
        />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="yellow darken-1">
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
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <SectionsBrands />
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  transition: 'home',
  data() {
    return {
      filteredList: '',
    }
  },
  // computed: {
  //   featuredProducts() {
  //     return this.$store.getters.fibreBlowing.slice(0, 3)
  //   },
  // },
  created() {
    this.getAllMusics()
  },
  methods: {
    async getAllMusics() {
      this.listLoading = true
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      try {
        const response = await this.$axios.get(
          'https://cbsbackend.herokuapp.com/api/products',
          config
        )
        this.filteredList = response.data.slice(0, 3)
        this.listLoading = false
      } catch (err) {
        this.listLoading = false
        throw new Error('Error Fetching Products')
      }
    },
  },
}
</script>

<style>
.hero {
  background-image: url('../static/wires.jpeg');
  background-size: cover;
}

.feature {
  background-image: url('../static/orangeWire.png');
  background-size: cover;
}

.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
