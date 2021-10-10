<template>
  <section id="hero">
    <v-container>
      <v-row align="center" justify="center" align-center>
        <!-- <v-col cols="12" md="12" sm="12"> -->
        <v-col cols="12" md="6" sm="12" class="mb-10 pb-10">
          <v-container class="mb-10 pb-10">
            <v-carousel
              height="60vh"
              cycle
              show-arrows-on-hover
              draggable="true"
              hide-delimiter-background
            >
              <v-carousel-item
                v-for="(carousel, carindex) in carouselsData"
                :key="carindex"
              >
                <v-container fill-height>
                  <v-row align-center>
                    <v-col>
                      <!-- <v-container> -->
                      <div
                        class="white--text carousel-title text-md-h2 text-sm-h3 text-h6 font-weight-black"
                      >
                        {{ carousel.heading.toUpperCase() }}
                      </div>
                      <p style="font-size: 17px" class="white--text">
                        {{ carousel.subHeading }}
                      </p>
                      <v-btn
                        :x-large="$vuetify.breakpoint.smAndUp"
                        class="my-3 yellow darken-1"
                        >With a new battery powered range</v-btn
                      >
                      <span class="mx-2 my-4"></span>
                      <!-- <v-btn
                      :x-large="$vuetify.breakpoint.smAndUp"
                      text
                      class="my-3"
                      outlined
                      white
                      ><v-icon left large color="primary">mdi-play</v-icon
                      ><nuxt-link
                        exact
                        to="/about"
                        class="learn black--text mb-20"
                        >Learn More</nuxt-link
                      ></v-btn
                    > -->
                      <!-- </v-container> -->
                    </v-col>
                  </v-row>
                </v-container>
              </v-carousel-item>
            </v-carousel>
          </v-container>
        </v-col>
        <v-col cols="12" md="6" sm="12" class="white--text">
          <v-container>
            <v-row align="center" justify="center" align-center>
              <categories height="100vh" class="categories" />
            </v-row>
          </v-container>
        </v-col>
        <!-- </v-col> -->
      </v-row>
    </v-container>
  </section>
</template>

<script>
import Categories from './Intro.vue'
export default {
  components: {
    Categories,
  },
  data() {
    return {
      carouselsData: [
        {
          src: 'orangewireheader.jpg',
          heading: 'LEADERS IN ADVANCED CABLE INSTALLATION',
          subHeading:
            'CBS Products is at the forefront of cabling technology, the design and manufacture of installation equipment for HV Transmission towers, LV Distribution lines, Railway Tracksides and underground CATV / Telecommunication networks, including the handling of Fibre Optic Cables, for projects around the world. We also offer a comprehensive range of standard equipment.',
        },
        {
          src: 'DSC_1491-1.jpeg',
          heading: 'CELEBRATING 50 YEARS OF CBS',
          subHeading:
            "CBS Products has been going for 50 years - and what a ride it's been! Visit the About section to view more about our incredible team and it's history.",
        },
        {
          src: 'cable-image.jpg',
          heading: 'WITH A MULTITUDE OF PRODUCTS AND SERVICES',
          subHeading:
            'CBS Products currently offers a large selection of services. These include Fibre Blowing, Telecoms, Client Tools and Utilities. Scroll down or visit the Products tab to view more information.',
        },
        {
          src: 'sigmund-rVRvR9VUIoQ-unsplash.jpg',
          heading: 'INTRODUCING BATTERY POWERED PRODUCTS',
          subHeading:
            'This year is not only exciting for our anniversary, it is also the year we reveal our latest product addition - and it is battery powered!',
        },
      ],
    }
  },
}
</script>

<style>
/* /* .gradient-fill .v-responsive__content {
  background: rgb(5, 5, 5);
  background: linear-gradient(
    to right,
    rgba(15, 14, 14, 0.7),
    rgba(0, 0, 0, 0.7)
  );
  color: white;
  text-decoration: none;
} */

.learn {
  color: black;
  text-decoration: none;
}
/*
.apple {
  margin-top: 3%;
} */

/* @media screen and (max-width: 800px) {
  .apple {
    margin-top: 10%;
  }

  .spin {
    height: calc(100vh - 250px);
  }
} */
/*
@media screen and (max-width: 600px) {
  .apple {
    margin-top: 30%;
  }
  .spin {
    height: calc(100vh - 250px);
  }
} */

/* @media screen and (min-width: 1500px) {
  .apple {
    margin-top: 8%;
  }

  .spin {
    height: calc(100vh - 250px);
  }
} */

/* .spin {
  height: calc(100vh - 50px);
} */

@media screen and (min-width: 1500px) {
  .categories,
  .carousel-title {
    margin-top: 10%;
    padding-top: 5%;
  }
}
</style>
