<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" />
        <v-container>
          <v-row class="py-16">
            <v-col cols="12">
              <h2
                class="text-h4 text-md-h3 text-center font-weight-black text-capitalize"
              >
                Who we are?
              </h2>
            </v-col>
            <v-col cols="12" md="6">
              <p>
                CBS Products (KT), Ltd. is a leading provider of specialised
                equipment solutions for the construction of power transmission
                lines and telecommunications networks around the world.
                Established in 1971 in Oakham, Rutland, England, the company
                began to design and manufacture cable jointing equipment and
                gradually diversified into winching equipment for the power
                transmission industry. With the de-regulation of the electricity
                industry, power companies entered the field of
                telecommunications, installing fibre optic cables along
                transmission line networks. CBS seized this opportunity to
                develop and build a line of pullers, tensioners and running out
                blocks for high production cable placing.
              </p>
              <blockquote class="text-h4 pa-5 my-4 font-weight-thin">
                CBS has become the partner of choice in a number of high
                profile, international fibre optic cable projects around the
                globe
              </blockquote>
            </v-col>
            <v-col cols="12" md="6">
              <p>
                Our success in the UK telecoms market meant that the company’s
                expertise and know-how rapidly came to the attention of the
                major players in the realm of fibre optic cable. Consequently,
                CBS has become the partner of choice in a number of high
                profile, international fibre optic cable projects around the
                globe in which our company has demonstrated its prowess in
                developing innovative solutions capable of withstanding extreme
                conditions, both of climate and terrain. Towards the end of the
                90’s the company’s continuing quest for new horizons was
                promoted by achieving the internationally recognised Quality
                Standard, BS EN ISO 9001. The development of the Tornado series
                of fibre optic cable blowing machines proved highly successful
                both in the UK and global telecom markets. In the UK, the
                Tornado out-performed its competition in a most demanding
                evaluation, enabling CBS to win a highly coveted contract as
                exclusive suppliers of cable blowing equipment to British
                Telecommunications (BT).
              </p>
              <p>
                In 2004, CBS joined forces with GMP Tools USA to further enhance
                the global reach and breadth of our outside plant equipment
                capabilities. As of June 2017 the business of GMP Tools and CBS
                Products were acquired by Klein Tools of the USA. Renamed CBS
                Products (KT), Ltd., we are the successors to the same
                engineering talent and innovative solution providers as ever.
                Empowered with the financial and engineering resources of Klein
                Tools USA, CBS Products has what it takes to keep your project
                running smoothly and on schedule whether you’re in telecoms,
                CATV or power transmission line construction; which brings us to
                the most compelling reason to consider CBS Products when
                planning your next cable deployment project: your bottom line.
              </p>
            </v-col>
          </v-row>
        </v-container>
        <SectionsTeam :our-team="ourTeam" />

        <v-row no-gutters>
          <v-col cols="12" md="6" align-self="center">
            <v-img
              max-height="800"
              src="pexels-canva-studio-3277806.jpg"
              lazy-src="pexels-canva-studio-3277806.jpg"
            >
            </v-img>
          </v-col>
          <v-col cols="12" md="6" align-self="center">
            <div class="pa-lg-16 pa-md-10 px-4 py-16">
              <h2 class="text-h3 text-center font-weight-black">Our Vision</h2>
              <h3
                class="text-h5 text-uppercase font-weight-thin text-center my-8"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium. Doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row no-gutters class="flex-row-reverse">
          <v-col cols="12" md="6" align-self="center">
            <v-img
              max-height="800"
              src="pexels-rfstudio-3810792.jpg"
              lazy-src="pexels-rfstudio-3810792.jpg"
            >
            </v-img>
          </v-col>
          <v-col cols="12" md="6" align-self="center">
            <div class="pa-lg-16 pa-md-10 px-4 py-16">
              <h2 class="text-h3 text-center font-weight-black">Our Mission</h2>
              <h3
                class="text-h5 text-uppercase font-weight-thin text-center my-8"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </h3>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum. Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium. Doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. emo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                quia consequuntur magni dolores eos
              </p>
            </div>
          </v-col>
        </v-row>

        <SectionsTimeline />
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      heroAlt: [
        {
          src: 'pexels-moose-photos-1036641.jpg',
          heading: ' About Us ',
        },
      ],
      ourTeam: [
        {
          name: 'John Churchill',
          position: 'Marketing Director',
          phone: '+1 (987) 1625346',
          email: 'john@example.com',
          photo: 'person-1.jpg',
        },
        {
          name: 'Fiona	Ross',
          position: 'Project Manager',
          phone: '+1 (987) 5894684',
          email: 'fiona@example.com',
          photo: 'person-2.jpg',
        },
        {
          name: 'Justin	Rees',
          position: 'VP Marketing',
          phone: '+1 (987) 6982456',
          email: 'justin@example.com',
          photo: 'person-3.jpg',
        },
        {
          name: 'Amelia	Ogden',
          position: 'Communication Manager',
          phone: '+1 (987) 6982456',
          email: 'amelia@example.com',
          photo: 'person-4.jpg',
        },
        {
          name: 'Sebastian Bailey',
          position: 'Advertising Director',
          phone: '+1 (987) 6982456',
          email: 'sebastian@example.com',
          photo: 'person-5.jpg',
        },
        {
          name: 'Eric Sutton',
          position: 'Advertising Executive',
          phone: '+1 (987) 6982456',
          email: 'audrey@example.com',
          photo: 'person-6.jpg',
        },
        {
          name: 'Xia Yen',
          position: 'Advertising Manager',
          phone: '+1 (987) 6982456',
          email: 'christian@example.com',
          photo: 'person-7.jpg',
        },
        {
          name: 'Bernadette	Springer',
          position: 'Employee Relations Manager',
          phone: '+1 (987) 6982456',
          email: 'bernadette@example.com',
          photo: 'person-8.jpg',
        },
        {
          name: 'Elizabeth Newman',
          position: 'Project Manager',
          phone: '+1 (987) 6982456',
          email: 'elizabeth@example.com',
          photo: 'person-9.jpg',
        },
      ],
    }
  },
  head() {
    return {
      title: 'About Us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem',
        },
      ],
    }
  },
}
</script>
