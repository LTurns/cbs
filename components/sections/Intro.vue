<template>
  <section id="intro" class="py-10">
    <v-container>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          v-hover
          cols="12"
          md="3"
          sm="8"
          ><v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              shaped
              class="pa-md-4 mx-lg-auto"
              width="250px"
            >
              <nuxt-link class="category" exact :to="card.link">
                <v-row no-gutters>
                  <v-col>
                    <div class="pr-2">
                      <img :src="card.image" />
                      <h4
                        class="text-uppercase mt-1 mb-3"
                        style="letter-spacing: 0.15em"
                        v-text="card.title"
                      ></h4>
                      <div class="text--disabled" v-text="card.subtitle"></div>
                      <p v-text="card.text"></p>
                    </div>
                  </v-col>
                </v-row>
              </nuxt-link>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: 'UTILITIES',
          image: 'icon-cal.svg',
          text:
            'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          link: '/utilities',
        },
        {
          title: 'FIBRE BLOWING',
          image: 'icon-package.svg',
          text:
            'Our Fibre Blowing products contain Tornados, Jet Streams, Air Streams and more. We can even boast having some of the best Tornados in the industry.',
          link: '/fibreblowing',
        },
        {
          title: 'CLIENT TOOLS',
          image: 'icon-package.svg',
          text:
            'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          link: '/clienttools',
        },
        {
          title: 'TELECOMS',
          image: 'icon-package.svg',
          text:
            'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          link: '/telecoms',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.category {
  text-decoration: none;
  color: black;
  font-size: 14px;
  text-align: center;
}
</style>
