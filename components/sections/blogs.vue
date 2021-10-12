<template>
  <section>
    <v-container fluid>
      <v-row>
        <v-col v-for="post in data" :key="post.id" cols="12" md="3">
          <nuxt-link :to="`../article/${post._id}`">
            <v-card max-width="450">
              <v-img height="200px" :src="post.img[0].image"> </v-img>
              <v-card-subtitle class="pb-0">
                <p text small disabled class="px-0">
                  {{ post.info }}
                </p>
              </v-card-subtitle>
              <v-card-text
                class="title font-weight-bold mt-3 pb-0 text--primary"
                style="line-height: 1.8rem"
              >
                {{ post.heading }}
              </v-card-text>
              <v-card-text
                >{{ post.description[0].paragraph.slice(0, 105) }}...
              </v-card-text>
            </v-card>
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
