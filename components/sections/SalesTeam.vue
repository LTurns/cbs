<template>
  <section :style="{ background: $vuetify.theme.themes['dark'].accent }">
    <v-container fluid class="text-center">
      <v-row>
        <v-col v-for="(item, i) in ourTeam" :key="`person-${i}`">
          <v-sheet class="py-12 px-6" outlined shaped>
            <v-avatar size="240"
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
