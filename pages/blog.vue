<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" />
      </v-col>
    </v-row>
    <v-container>
      <v-row>
        <v-col cols="12" xl="10" lg="9" md="8" sm="8" class="py-16">
          <v-row>
            <v-col
              v-for="post in BlogStories"
              :key="post.id"
              cols="12"
              sm="6"
              md="6"
              lg="4"
              xl="3"
            >
              <v-card max-width="450" class="mx-auto" elevation="1">
                <v-img height="200px" :src="`/${post.img}`"> </v-img>
                <v-card-subtitle class="pb-0">
                  <v-btn href="#" text small color="primary" class="px-0">{{
                    post.author
                  }}</v-btn>
                  <v-btn text small disabled class="px-0">{{
                    post.date
                  }}</v-btn>
                </v-card-subtitle>
                <v-card-text
                  class="title font-weight-bold mt-3 pb-0 text--primary"
                  style="line-height: 1.8rem"
                >
                  {{ post.subtitle }}
                </v-card-text>
                <v-card-text class="text--primary">
                  {{ post.description.slice(0, 105) }}...
                  <v-btn href="#" small text color="primary">Read More</v-btn>
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
        <v-col cols="12" xl="2" lg="3" md="4" sm="4" class="py-16">
          <aside>
            <v-text-field
              clearable
              dense
              flat
              outlined
              placeholder="Search..."
              append-icon="mdi-magnify"
              class="mb-6"
              hide-details
            >
            </v-text-field>
          </aside>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      heroAlt: [
        {
          src: 'accelair.jpg',
          heading: ' Blog ',
        },
      ],
    }
  },
  computed: {
    BlogStories() {
      return this.$store.getters.BlogStories
    },
  },
}
</script>
