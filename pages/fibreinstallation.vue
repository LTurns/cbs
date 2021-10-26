<template>
  <section class="grey lighten-4">
    <v-row no-gutters>
      <v-col cols="12" align="center" class="grey lighten-4">
        <SectionsHeroAlt :hero-alt="heroAlt" />
        <v-col class="blue-grey darken-4">
          <SectionsBlockQuote text="white--text">
            <slot>
              Our Fibre Blowing products include Tornado, Jetstream and
              Hurricane Cable Blowing Machine. We are known particularly for
              these products, which have been used by multple clients.
            </slot>
          </SectionsBlockQuote>
        </v-col>
        <v-col class="yellow darken-2">
          <SectionsSearch :data="filteredList" />
        </v-col>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  transition: 'fibreblowing',
  data() {
    return {
      heroAlt: [
        {
          src: '',
          heading: ' FIBRE INSTALLATION ',
        },
      ],
      filteredList: [],
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

        data.forEach((product) => {
          if (
            product.category === 'Fibre Blowing' &&
            product.subCategory.length === 0
          ) {
            this.filteredList.push(product)
          }
        })

        return this.filteredList
      } catch (err) {
        throw new Error('Error Fetching Products')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.fibreblowing-enter-active,
.fibreblowing-leave-active {
  transition: opacity 0.5s;
}
.fibreblowing-enter,
.fibreblowing-leave-active {
  opacity: 0;
}

.tag {
  border-radius: 3px 0 0 3px;
  color: white !important;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 20px 0 23px;
  position: relative;
  margin: 0 10px 10px 0;
  text-decoration: none;
  -webkit-transition: color 0.2s;
}

.tag::before {
  background: rgb(221, 163, 5);
  border-radius: 10px;
  box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
  content: '';
  height: 6px;
  left: 10px;
  position: absolute;
  width: 6px;
  top: 10px;
}

.tag::after {
  border-bottom: 13px solid transparent;
  border-left: 10px solid rgb(221, 163, 5);
  border-top: 13px solid transparent;
  content: '';
  position: absolute;
  right: 0;
  top: 0;
}

.tag:hover::after {
  border-left-color: yellow;
}
</style>
