<template>
  <section>
    <!-- <v-container> -->
    <v-row fillheight no-gutters align="center" justify="center">
      <v-col v-hover class="column" cols="12" md="6">
        <v-card class="mx-2 mb-5" max-width="400">
          <v-img contain src="hurricane-4.png" height="100px"></v-img>
          <v-card-title>FIBRE INSTALLATION</v-card-title>
          <!-- <v-card-subtitle>This is the product</v-card-subtitle> -->
          <v-card-actions>
            <v-btn x-large
              ><nuxt-link class="category" exact to="/fibreinstallation"
                >View</nuxt-link
              ></v-btn
            >
            <v-spacer></v-spacer>
            <v-btn icon @click="showFI = !showFI">
              <v-icon>{{
                showFI ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showFI">
              <v-divider></v-divider>

              <v-card-text
                >heloobefjbjf hfkehfHkhfhjhFKH HIHFHFHHF HIHDHHDH</v-card-text
              >
            </div>
          </v-expand-transition>
        </v-card>
        <v-card class="mx-2 mb-5" max-width="400">
          <v-img contain src="klein-tools.png" height="100px"></v-img>
          <v-card-title>KLEIN TOOLS</v-card-title>
          <!-- <v-card-subtitle>This is the product</v-card-subtitle> -->
          <v-card-actions>
            <v-btn x-large
              ><nuxt-link class="category" exact to="/kleintools"
                >View</nuxt-link
              ></v-btn
            >
            <v-spacer></v-spacer>
            <v-btn icon @click="showKT = !showKT">
              <v-icon>{{
                showKT ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showKT">
              <v-divider></v-divider>

              <v-card-text
                >heloobefjbjf hfkehfHkhfhjhFKH HIHFHFHHF HIHDHHDH</v-card-text
              >
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col v-hover class="column" cols="12" md="6">
        <v-card class="mx-2 mb-5" max-width="400">
          <v-img contain src="running-out-blocks.png" height="100px"></v-img>
          <v-card-title>OVERHEAD LINE</v-card-title>
          <!-- <v-card-subtitle>This is the product</v-card-subtitle> -->
          <v-card-actions>
            <v-btn x-large
              ><nuxt-link class="category" exact to="/overheadline"
                >View</nuxt-link
              ></v-btn
            >
            <v-spacer></v-spacer>
            <v-btn icon @click="showOL = !showOL">
              <v-icon>{{
                showOL ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showOL">
              <v-divider></v-divider>

              <v-card-text
                >heloobefjbjf hfkehfHkhfhjhFKH HIHFHFHHF HIHDHHDH</v-card-text
              >
            </div>
          </v-expand-transition>
        </v-card>
        <v-card class="mx-2 mb-5" max-width="400">
          <v-img contain src="winch-2.png" height="100px"></v-img>
          <v-card-title>WINCHES AND TRAILERS</v-card-title>
          <!-- <v-card-subtitle>This is the product</v-card-subtitle> -->
          <v-card-actions>
            <v-btn x-large
              ><nuxt-link class="category" exact to="/winchesandtrailers"
                >View</nuxt-link
              ></v-btn
            >
            <v-spacer></v-spacer>
            <v-btn icon @click="showWT = !showWT">
              <v-icon>{{
                showWT ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showWT">
              <v-divider></v-divider>

              <v-card-text
                >heloobefjbjf hfkehfHkhfhjhFKH HIHFHFHHF HIHDHHDH</v-card-text
              >
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
    <!-- </v-container> -->
  </section>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: () => 'rgb(255, 0, 0, 0)',
    },
    text: {
      type: String,
      default: () => 'text-uppercase black--text',
    },
  },
  data() {
    return {
      showFI: false,
      showKT: false,
      showOL: false,
      showWT: false,
      axiosCards: '',
      cards: [
        {
          name: 'OVERHEAD LINE',
          image: 'running-out-blocks.png',
          link: '/overheadline',
          margin: '5',
        },
        {
          name: 'FIBRE INSTALLATION',
          image: 'hurricane-4.png',
          link: '/fibreinstallation',
          margin: '5',
        },
        {
          name: 'KLEIN TOOLS',
          image: 'klein-tools.png',
          link: '/kleintools',
          margin: '10',
        },
        {
          name: 'WINCHES AND TRAILERS',
          image: 'winch-2.png',
          link: '/winchesandtrailers',
          margin: '0',
        },
      ],
    }
  },
  // async fetch() {
  //   try {
  //     const result = await axios.get(
  //       'https://tranquil-basin-55259.herokuapp.com/main-categories',
  //       {}
  //     )
  //     this.axiosCards = result.data
  //     return this.axiosCards
  //   } catch (error) {
  //     this.axiosCards = this.cards
  //   }
  // },
  created() {},
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

@media screen and (min-width: 1500px) {
  h3 {
    font-size: 18px;
  }
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
