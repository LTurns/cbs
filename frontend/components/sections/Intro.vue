<template>
  <section>
    <v-container>
      <v-row>
        <v-col
          v-for="card in axiosCards"
          :key="card.title"
          v-hover
          class="column"
          cols="12"
          md="6"
          ><v-hover v-slot="{ hover }" class="card">
            <v-card
              :style="{
                height: '200px',
              }"
              :elevation="hover ? 24 : 5"
              shaped
              :class="'card pa-md-5 mx-lg-auto'"
            >
              <nuxt-link class="category" exact :to="card.link">
                <v-row no-gutters>
                  <v-col>
                    <div class="pr-2 mt-4">
                      <img
                        :src="card.image"
                        style="max-width: 120px; height: auto"
                      />
                      <h3
                        class="text-uppercase black--text"
                        style="letter-spacing: 0.15em"
                        v-text="card.name"
                      ></h3>
                      <!-- <div class="white--text" v-text="card.subtitle"></div> -->
                      <!-- <p class="white--text" v-text="card.text"></p> -->
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
          image: 'utilities.svg',
          text:
            'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          link: '/utilities',
        },
        {
          name: 'FIBRE BLOWING',
          image: 'fibreblowing.svg',
          text:
            'Our Fibre Blowing products contain Tornados, Jet Streams, Air Streams and more. We can even boast having some of the best Tornados in the industry.',
          link: '/fibreblowing',
        },
        {
          name: 'CLIENT TOOLS',
          image: 'clienttools.svg',
          text:
            'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          link: '/clienttools',
        },
        {
          name: 'TELECOMS',
          image: 'telecoms6.svg',
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

// .card {
//   min-height: 330px;
// }

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
    min-height: 100px;
  }
}

.box {
  background-color: transparent;
  border-radius: 3px;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 300px;
  transform-style: preserve-3d;
  perspective: 2000px;
  transition: 0.4s;
  text-align: center;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    border-top: 20px solid #fff;
    border-left: 20px solid #fff;
    box-sizing: border-box;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 20px solid #fff;
    border-right: 20px solid #fff;
    box-sizing: border-box;
  }
  .fas {
    font-size: 25px;
    height: 50px;
    width: 50px;
    line-height: 50px !important;
    background-color: #fff;
    color: #2c3a47;
  }
  .fa2 {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
  }
  .text {
    position: absolute;
    top: 30px;
    left: -30px;
    width: calc(100% + 60px);
    height: calc(100% - 60px);
    background-color: #2c3a47;
    border-radius: 3px;
    transition: 0.4s;
    .fa1 {
      position: absolute;
      top: 0;
      left: 0;
    }
    div {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      text-align: center;
      width: 100%;
      padding: 30px 60px;
      line-height: 1.5;
      box-sizing: border-box;
      h3 {
        font-size: 30px;
        margin-bottom: 5px;
      }
      p {
        font-size: 15px;
      }
    }
  }
  &:hover {
    .text {
      transform: rotateY(20deg) skewY(-3deg);
    }
    transform: translate(-50%, -50%) rotateY(-20deg) skewY(3deg);
  }
}
</style>
