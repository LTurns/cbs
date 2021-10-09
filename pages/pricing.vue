<template>
  <section :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'">
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt
          :hero-alt="heroAlt"
          :class="$vuetify.theme.dark ? 'grey darken-4' : 'white'"
        />
      </v-col>
    </v-row>
    <div>
      <iframe
        class="map"
        src="https://www.google.com/maps/d/u/0/embed?mid=1sJqYzE_IFqMoUbejwzaN8sARs4Gd3pFA"
      ></iframe>
    </div>
  </section>
</template>

<script>
export default {
  transition: 'wheretobuy',
  data() {
    return {
      heroAlt: [
        {
          src: '',
          heading: ' WHERE TO BUY ',
          icon: 'mdi-cash-usd',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.map {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100vw;
  height: 80vh;
  border: 2px solid black;
}

.wheretobuy-enter-active,
.wheretobuy-leave-active {
  transition: opacity 0.5s;
}
.wheretobuy-enter,
.wheretobuy-leave-active {
  opacity: 0;
}
</style>
