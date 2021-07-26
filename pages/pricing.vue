<template>
  <section :style="{ background: $vuetify.theme.themes['dark'].accent }">
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" />
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
  data() {
    return {
      heroAlt: [
        {
          src: '',
          heading: ' WHERE TO BUY ',
        },
      ],
    }
  },
}
</script>

<style>
.map {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100vw;
  height: 80vh;
  border: 2px solid black;
}
</style>
