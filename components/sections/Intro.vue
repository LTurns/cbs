<template>
  <section
    id="intro"
    :style="{ background: $vuetify.theme.themes['light'].primary }"
  >
    <v-container>
      <v-row>
        <v-col
          v-for="card in axiosCards"
          :key="card.title"
          v-hover
          class="column"
          cols="12"
          md="3"
          sm="12"
          ><v-hover v-slot="{ hover }" class="card">
            <v-card
              :elevation="hover ? 24 : 5"
              shaped
              class="card pa-md-10 mx-lg-auto"
              :class="hover ? 'zoom' : 'notzoom'"
              :style="{ background: $vuetify.theme.themes['dark'].secondary }"
            >
              <nuxt-link class="category" exact :to="card.link">
                <v-row no-gutters>
                  <v-col>
                    <div class="pr-2">
                      <img
                        :src="card.image"
                        style="max-width: 100px; height: auto"
                      />
                      <h3
                        class="text-uppercase mt-1 mb-3 white--text"
                        style="letter-spacing: 0.15em"
                        v-text="card.name"
                      ></h3>
                      <div class="white--text" v-text="card.subtitle"></div>
                      <p class="white--text" v-text="card.text"></p>
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
import axios from 'axios'
export default {
  async fetch() {
    try {
      const result = await axios.get(
        'https://tranquil-basin-55259.herokuapp.com/main-categories',
        {}
      )
      this.axiosCards = result.data
      return this.axiosCards
    } catch (error) {
      this.axiosCards = this.cards
    }
  },
  data() {
    return {
      axiosCards: '',
      cards: [
        {
          name: 'UTILITIES',
          image: 'icon-cal.svg',
          text:
            'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          link: '/utilities',
        },
        {
          name: 'FIBRE BLOWING',
          image: 'icon-package.svg',
          text:
            'Our Fibre Blowing products contain Tornados, Jet Streams, Air Streams and more. We can even boast having some of the best Tornados in the industry.',
          link: '/fibreblowing',
        },
        {
          name: 'CLIENT TOOLS',
          image: 'icon-package.svg',
          text:
            'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          link: '/clienttools',
        },
        {
          name: 'TELECOMS',
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
  font-size: 13px;
  text-align: center;
}

.card {
  min-height: 330px;
}

.zoom {
  transform: scale(1.025) translate(0, -10px);
  transition: transform 0.2s;
  box-shadow: 3px 1px 7px rgb(5, 5, 5) !important;
}
.notzoom {
  transition: transform 0.2s;
  box-shadow: 3px 1px 7px rgb(10, 10, 10) !important;
}

@media screen and (max-width: 1000px) {
  .card {
    min-height: 200px;
  }
}
</style>
