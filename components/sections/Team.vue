<template>
  <section :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'">
    <v-row align="center">
      <v-col
        v-for="(item, i) in ourTeam"
        :key="`person-${i}`"
        class="column"
        cols="12"
        :md="`${size}`"
        align="center"
      >
        <v-sheet shaped class="py-5 px-5" width="400px" height="350px">
          <!-- <v-avatar size="150" elevation="5"
              ><img
                :src="`/team/${item.photo}`"
                :lazy-src="`team/${item.photo}`"
                alt=""
            /></v-avatar> -->
          <div class="text-h5 text-uppercase font-weight-black mt-6 mb-2">
            {{ item.name }}
          </div>
          <div class="text--disabled text-uppercase">
            {{ item.position }}
          </div>
          <div class="text-h6 mt-8">
            <a class="email green--text" :href="`tel:${item.phone}`"
              >Tel: {{ item.phone }}</a
            >
          </div>
          <div class="subtitle-1 mt-3">
            <a class="email orange--text" :href="`mailto:${item.email}`"
              >email: {{ item.email }}
            </a>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  props: {
    ourTeam: {
      type: Array,
      default: () => [],
    },
    size: {
      type: String,
      default: '4',
    },
  },
}
</script>
