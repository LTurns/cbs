<template>
  <v-col cols="12" xl="10" lg="9" md="8" sm="8">
    <v-row>
      <v-col
        v-for="post in data"
        :key="post.id"
        cols="12"
        sm="6"
        md="6"
        lg="4"
        xl="3"
      >
        <nuxt-link
          class="link"
          :to="`../article/${post.id}`"
          align-self="center"
        >
          <v-card
            max-width="450"
            min-height="475"
            class="mx-auto"
            elevation="1"
          >
            <v-img height="200px" :src="`/blog/${post.img[0].image}`"> </v-img>
            <v-card-subtitle class="pb-0">
              <!-- <p text small color="primary" class="px-0">
                    {{ post.author }}
                  </p> -->
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

            <!-- <v-card-actions>
                  <v-btn icon color="yellow darken-1"
                    ><v-icon>mdi-comment</v-icon></v-btn
                  >
                  <span class="text--disabled">15</span>
                  <v-spacer></v-spacer>
                  <v-btn icon color="orange"> <v-icon>mdi-heart</v-icon> </v-btn
                  ><span class="text--disabled mr-2">45K</span>
                  <v-btn icon color="primary">
                    <v-icon>mdi-share-variant</v-icon> </v-btn
                  ><span class="text--disabled">25K</span>
                  <span class="mr-4"></span>
                </v-card-actions> -->
          </v-card>
        </nuxt-link>
      </v-col>
    </v-row>

    <div class="text-center">
      <div class="text-center">
        <v-container>
          <v-row justify="center">
            <v-col cols="8">
              <v-container class="max-width">
                <!-- <v-pagination
                        v-model="page"
                        circle
                        class="my-4"
                        :length="15"
                      ></v-pagination> -->
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </v-col>
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
