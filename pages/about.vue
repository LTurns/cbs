<template>
  <section class="white">
    <v-row>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" class="grey lighten-4" />
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <div
                class="fonttitle black--text text--lighten-4 font-weight-black"
                align="center"
                style="
                  border-bottom: 2px solid #fde36d;
                  box-shadow: 0 4px 6px -6px #222;
                  line-height: 1;
                  padding: 3%;
                  margin-left: 1%;
                  margin-right: 1%;
                  margin-top: 3%;
                "
              >
                WHO ARE WE?
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <a href="#team" class="learn black--text">
                <v-btn
                  :x-large="$vuetify.breakpoint.smAndUp"
                  text
                  class="my-3 mb-xs-4 mt-10 mb-5"
                  outlined
                  white
                  ><v-icon left large color="primary">mdi-play</v-icon>Meet The
                  Team</v-btn
                ></a
              >
            </v-col>
            <v-col
              cols="12"
              md="6"
              class="black--text"
              style="line-height: 30px; font-size: 15px; margin-bottom: 20px"
            >
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
              <div class="text-h4 pa-5 my-4 font-weight-thin black--text">
                CBS has become the partner of choice in a number of high
                profile, international fibre optic cable projects around the
                globe.
              </div>
            </v-col>
            <v-col
              cols="12"
              md="6"
              class="black--text"
              style="line-height: 30px; font-size: 15px; margin-bottom: 20px"
            >
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
            <div
              class="fonttitle black--text text--lighten-4 font-weight-black"
              align="center"
              style="
                border-bottom: 2px solid #fde36d;
                box-shadow: 0 4px 6px -6px #222;
                line-height: 1;
                padding: 3%;
                margin-left: 1%;
                margin-right: 1%;
                margin-top: 3%;
              "
            >
              OUR JOURNEY
            </div>
            <SectionsTimeline />
            <div
              class="fonttitle black--text text--lighten-4 font-weight-black"
              align="center"
              style="
                border-bottom: 2px solid #fde36d;
                box-shadow: 0 4px 6px -6px #222;
                line-height: 1;
                padding: 3%;
                margin-left: 1%;
                margin-right: 1%;
                margin-top: 3%;
                margin-bottom: 2%;
              "
            >
              MEET THE TEAM
            </div>
            <SectionsTeam :our-team="ourTeam" class="mb-10" />
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  transition: 'about',
  data() {
    return {
      heroAlt: [
        {
          src: '',
          heading: ' About Us ',
          icon: 'mdi-account',
        },
      ],
      ourTeam: [
        {
          name: 'Andy Sibun',
          position: 'Technical Manager',
          phone: '01572 898515',
          email: 'andy.sibun@cbsproducts.com',
          photo: '',
        },
        {
          name: 'Robert Davidson',
          position: 'Managing Director',
          phone: '01572 898501',
          email: 'robert.davidson@cbsproducts.com',
          photo: '',
        },
        {
          name: 'Mike Turney',
          position: 'Finance Director',
          phone: '01572 898522',
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

<style>
.about-enter-active,
.about-leave-active {
  transition: opacity 0.5s;
}
.about-enter,
.about-leave-active {
  opacity: 0;
}
</style>
