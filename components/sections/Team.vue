<template>
  <section :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'">
    <v-container fluid class="text-center">
      <v-row>
        <v-col
          v-for="(item, i) in ourTeam"
          :key="`person-${i}`"
          class="column"
          cols="12"
          md="4"
        >
          <v-sheet shaped class="py-4">
            <v-avatar size="240" elevation="5"
              ><img
                :src="`/team/${item.photo}`"
                :lazy-src="`team/${item.photo}`"
                alt=""
            /></v-avatar>
            <div class="text-h5 text-uppercase font-weight-black mt-6 mb-2">
              {{ item.name }}
            </div>
            <div class="text--disabled text-uppercase">
              {{ item.position }}
            </div>
            <div class="text-h6 font-weight-black mt-8">{{ item.phone }}</div>
            <div class="subtitle-1 mt-3">{{ item.email }}</div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  props: {
    ourTeam: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
