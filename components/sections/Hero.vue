<template>
  <section id="hero">
    <v-carousel
      height="calc(100vh - 64px)"
      cycle
      show-arrows-on-hover
      draggable="true"
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="(carousel, carindex) in carouselsData"
        :key="carindex"
        :src="carousel.src"
        class="gradient-fill"
      >
        <v-container fill-height>
          <div style="max-width: 600px">
            <div class="text-md-h2 mb-3 text-sm-h3 text-h5 font-weight-black">
              {{ carousel.heading.toUpperCase() }}
            </div>
            <p class="mb-5">{{ carousel.subHeading }}</p>
            <v-btn :x-large="$vuetify.breakpoint.smAndUp" class="my-3 primary"
              >With a new battery powered range</v-btn
            >
            <span class="mx-2 my-4"></span>
            <v-btn
              :x-large="$vuetify.breakpoint.smAndUp"
              text
              class="my-3"
              outlined
              white
              ><v-icon left large color="primary">mdi-play</v-icon
              ><nuxt-link exact to="/about" class="learn"
                >Learn More</nuxt-link
              ></v-btn
            >
          </div>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      carouselsData: [
        {
          src: 'wires.jpeg',
          heading: 'LEADERS IN ADVANCED CABLE INSTALLATION',
          subHeading:
            'CBS Products is at the forefront of cabling technology, the design and manufacture of installation equipment for HV Transmission towers, LV Distribution lines, Railway Tracksides and underground CATV / Telecommunication networks, including the handling of Fibre Optic Cables, for projects around the world. We also offer a comprehensive range of standard equipment.',
        },
        {
          src: 'DSC_1491-1.jpeg',
          heading: 'CELEBRATING OUR 50TH ANNIVERSARY THIS YEAR',
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
.gradient-fill .v-responsive__content {
  background: rgb(5, 5, 5);
  background: linear-gradient(
    to right,
    rgba(15, 14, 14, 0.7),
    rgba(0, 0, 0, 0.7)
  );
  color: white;
  text-decoration: none;
}

.learn {
  color: white;
  text-decoration: none;
}
</style>
