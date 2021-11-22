<template>
  <section id="hero">
    <v-container class="containerstyle">
      <v-row align="center" justify="center" style="margin-top: 3%">
        <v-col cols="12" md="6" sm="12">
          <div
            class="mainfonttitle grey--text text--lighten-4 font-weight-black"
            style="
              border-bottom: 2px solid #fde36d;
              box-shadow: 0 4px 6px -6px #222;
              line-height: 1;
            "
          >
            {{ carouselsData[0].heading.toUpperCase() }}
          </div>

          <p
            style="font-size: 17px; font-weight: bold; margin-top: 5%"
            class="grey--text text--lighten-4"
          >
            {{ carouselsData[0].subHeading }}
          </p>
          <v-btn
            :x-large="$vuetify.breakpoint.smAndUp"
            class="yellow darken-1 text-center bold"
            >With a new battery powered range</v-btn
          >
        </v-col>
        <!-- </v-row>
      <v-row style="margin-bottom: 2%"> -->
        <v-col cols="12" md="6" sm="12" class="right black--text">
          <div>
            <categories />
          </div>
        </v-col>
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
@media screen and (min-width: 1000px) {
  .mainfonttitle {
    font-size: 3.6rem;
    max-width: 16ch;
    margin-bottom: 1%;
  }
  .containerstyle {
    width: 100vw;
    height: 100vh;
  }
}

@media screen and (min-width: 1300px) {
  .containerstyle {
    height: 72vh;
  }
}

@media screen and (min-width: 1900px) {
  .mainfonttitle {
    font-size: 4.5rem;
    /* max-width: 16ch; */
    margin-bottom: 1%;
  }
}

@media screen and (max-width: 1000px) {
  .mainfonttitle {
    font-size: 3rem;
    margin-bottom: 5%;
    max-width: 30ch;
    margin-bottom: 5%;
  }

  /* .containerstyle {
    height: 100%;
  } */
}

@media screen and (max-width: 700px) {
  .mainfonttitle {
    font-size: 3rem;
    /* max-width: 15ch; */
    margin-bottom: 5%;
    margin-top: 7%;
  }
}
</style>
