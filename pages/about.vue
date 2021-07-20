<template>
  <section :style="{ background: $vuetify.theme.themes['dark'].accent }">
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" />
        <v-container>
          <v-row class="py-5">
            <v-col cols="12">
              <h2
                class="text-h4 text-md-h4 text-center yellow--text text--darken-2 font-weight-black mt-10 mb-5"
              >
                WHO ARE WE?
              </h2>
              <v-divider
                inset
                width="50"
                class="text-center yellow--text"
              ></v-divider>
            </v-col>
            <v-col cols="12" md="6" class="white--text">
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
              <blockquote
                class="text-h4 pa-5 my-4 font-weight-thin yellow--text"
              >
                CBS has become the partner of choice in a number of high
                profile, international fibre optic cable projects around the
                globe
              </blockquote>
            </v-col>
            <v-col cols="12" md="6" class="white--text">
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
        <!-- <v-row no-gutters class="flex-row-reverse">
          <v-col cols="12" md="6" align-self="center">
            <v-img
              max-height="800"
              src="Duct-Rods.jpeg"
              lazy-src="pexels-rfstudio-3810792.jpg"
            >
            </v-img>
          </v-col>
          <v-col cols="12" md="6" align-self="center">
            <div class="pa-lg-16 pa-md-10 px-4 py-16">
              <h2 class="text-h3 text-center white--text font-weight-black">
                Our Mission
              </h2>
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
        </v-row> -->
        <h2
          class="text-h4 text-md-h4 text-center yellow--text text--darken-2 font-weight-black mt-10 mb-5"
        >
          OUR JOURNEY
        </h2>
        <SectionsTimeline />
        <h2
          class="text-h4 text-md-h4 text-center yellow--text text--darken-2 font-weight-black mt-10 mb-5"
        >
          MEET THE TEAM
        </h2>
        <SectionsTeam :our-team="ourTeam" class="mb-10" />
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
          src: 'DSC_0850-2.jpeg',
          heading: ' About Us ',
        },
      ],
      ourTeam: [
        {
          name: 'Andy Sibun',
          position: 'Technical Manager',
          phone: 'Tel: +44 (0) 1572 898515',
          email: 'andy.sibun@cbsproducts.com',
          photo: '',
        },
        {
          name: 'Carolyn Winn',
          position: 'Logistics Manager',
          phone: 'Tel: +44 (0) 1572 898512',
          email: 'carolyn.winn@cbsproducts.com',
          photo: '',
        },
        {
          name: 'Lawrence Green',
          position: 'Production Manager',
          phone: 'Tel: +44 (0) 1572 898513',
          email: 'lawrence.green@cbsproducts.com',
          photo: '',
        },
        {
          name: 'Robert Davidson',
          position: 'Managing Director',
          phone: 'Tel: +44 (0) 1572 898501',
          email: 'robert.davidson@cbsproducts.com',
          photo: '',
        },
        {
          name: 'Mike Turney',
          position: 'Finance Director',
          phone: 'Tel: +44 (0) 1572 898522',
          email: 'mike.turney@cbsproducts.com',
          photo: '',
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
