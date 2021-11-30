<template>
  <section id="home">
    <!-- <v-row no-gutters> -->
    <v-col class="hero">
      <SectionsHero />
    </v-col>
    <!-- </v-row> -->
    <v-row no-gutters>
      <v-col cols="12" class="grey lighten-4">
        <SectionsBlockQuote text="black--text">
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
          FEATURED PRODUCTS
        </div>
        <!-- </v-responsive> -->
        <SectionsFeaturedProducts :data="filteredList" />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="grey lighten-3">
        <SectionsBlockQuote text="black--text">
          <slot>
            <h3 class="mb-10">CORONAVIRUS UPDATE</h3>
            <p>
              CBS remains open and are working hard to provide essential
              services to our telecommunications and electricity industries
              during these difficult and uncertain times. We want to assure you
              that we are taking the current situation very seriously, we have
              staff working from home where possible and have implemented extra
              precautions throughout the building to ensure the health and
              safety of our staff, customers and suppliers. As you will be
              aware, the situation is constantly changing, as is the advice
              issued by the Government and the World Health Organisation.
            </p>

            <p>
              As a company, we will be listening to the official advice and will
              act in accordance with it, together with reacting to the
              situations of both our customers and suppliers, many of which are
              already operating at reduced levels. Our business may be disrupted
              at some point in the future but, for now, it is business as usual.
              Our thoughts are with those who have been affected by the spread
              of COVID-19. Please, follow the advise issued by the Government
              and W.H.O. Stay Safe.
            </p></slot
          >
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
      } catch (err) {
        throw new Error('Error Fetching Products')
      }
    },
  },
}
</script>

<style>
.hero {
  background-image: url('https://cbs-images.s3.amazonaws.com/orangeWire.png');
  background-size: cover;
}

/* .feature {
  background-image: url('../static/orangeWire.png');
  background-size: cover;
} */

.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
