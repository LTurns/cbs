<template>
  <section :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'">
    <v-row>
      <v-col cols="12">
        <SectionsHeroAlt
          :hero-alt="heroAlt"
          :class="$vuetify.theme.dark ? 'grey darken-4' : 'white'"
        />
        <v-container>
          <v-row class="py-16">
            <v-col md="5" cols="12">
              <div class="text-h6 font-weight-bold mb-5">Our Office</div>
              <v-list two-line class="transparent">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary"> mdi-map-marker </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>ADDRESS</v-list-item-title>
                    <v-list-item-subtitle
                      >CBS Products (KT),
                    </v-list-item-subtitle>
                    <v-list-item-subtitle> Pillings Road </v-list-item-subtitle>
                    <v-list-item-subtitle> Rutland </v-list-item-subtitle>
                    <v-list-item-subtitle>LE15 6QF</v-list-item-subtitle>
                    <v-list-item-subtitle>UK</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary"> mdi-email </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>EMAIL</v-list-item-title>
                    <v-list-item-subtitle
                      >sales@cbsproducts.com</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary"> mdi-phone </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>PHONE</v-list-item-title>
                    <v-list-item-subtitle
                      >+44 (0) 1572 723 665</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <div class="text-h6 font-weight-bold mt-12 mb-5">
                Business Hours
              </div>
              <v-list two-line class="transparent">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary"> mdi-clock </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>MONDAY to THURDAY </v-list-item-title>
                    <v-list-item-subtitle>8.30am to 5pm</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary"> mdi-clock </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>FRIDAY</v-list-item-title>
                    <v-list-item-subtitle
                      >8.30am to 3.45pm</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary"> mdi-clock </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>SATURDAY & SUNDAY</v-list-item-title>
                    <v-list-item-subtitle>CLOSED</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col md="7" cols="12">
              <div class="text mx-auto text-left mb-8">
                <div class="d-inline text-h4 font-weight-black">
                  Contact Us or
                </div>
                <div class="d-inline text-h4 font-weight-black">
                  <v-btn
                    :x-large="$vuetify.breakpoint.smAndUp"
                    text
                    class="my-3"
                    outlined
                    white
                    ><v-icon left large color="primary">mdi-play</v-icon
                    ><a href="#team" class="learn"
                      >Speak to the our team</a
                    ></v-btn
                  >
                </div>
              </div>
              <p class="mb-10">
                Please do not hesitate to get in touch. One of our team members
                will get back to you shortly with your enquiry.
              </p>
              <contactForm />
            </v-col>
          </v-row>
        </v-container>
        <SectionsTeam id="team" :our-team="ourTeam" class="mb-10" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2418.8700203174435!2d-0.7338425846941268!3d52.68038493208387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487780f4ac1c42a7%3A0xa65da3dcfdd6588d!2sC%20B%20S%20Products%20(KT)%20Ltd!5e0!3m2!1sen!2suk!4v1626176078725!5m2!1sen!2suk"
          width="100%"
          height="600"
          frameborder="0"
          style="border: 0; display: block"
          allowfullscreen="true"
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import contactForm from '~/components/sections/contactForm.vue'
export default {
  components: {
    contactForm,
  },
  data() {
    return {
      heroAlt: [
        {
          src: '',
          heading: ' Contact Us ',
          icon: 'mdi-contacts',
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
      title: 'Contact Us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Please do not hesitate to get in touch, either via this form or through phone or email. We will gladly assist with your enquiry.',
        },
      ],
    }
  },
}
</script>

<style scoped>
#footer-top {
  display: none !important;
}
</style>
