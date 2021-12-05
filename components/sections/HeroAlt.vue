<template>
  <section id="hero">
    <v-img
      v-for="(item, i) in heroAlt"
      :key="i"
      width="100%"
      height="30vh"
      :src="item.src"
      class="gradient-fill"
    >
      <v-container fill-height>
        <v-row class="text-center">
          <v-col class="text-center" col="12">
            <h1
              class="text-md-h2 text-sm-h3 text-h4 font-weight-black text-center black--text text--lighten-4"
              style="
                border-bottom: 2px solid #fde36d;
                box-shadow: 0 4px 6px -6px #222;
                line-height: 1;
              "
            >
              <v-icon>{{ item.icon }}</v-icon>
              {{ item.heading.toUpperCase() }}
            </h1>
            <!-- <v-icon>{{ item.icon }}</v-icon> -->
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </section>
</template>

<script>
export default {
  props: {
    heroAlt: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style>
.gradient-fill .v-responsive__content {
  /* background: rgb(5, 5, 5);
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)); */
}
</style>
