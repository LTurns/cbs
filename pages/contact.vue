<template>
  <section :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'">
    <v-row>
      <v-col cols="12">
        <SectionsHeroAlt
          :hero-alt="heroAlt"
          :class="$vuetify.theme.dark ? 'grey darken-4' : 'white'"
        />
        <v-responsive
          :class="$vuetify.theme.dark ? 'grey darken-4' : 'yellow darken-1'"
          class="max-auto mx-auto text-center"
        >
          <div class="hero-text" style="margin-top: 5px; margin-bottom: 5px">
            <v-row>
              <v-col cols="12" md="6">
                <blockquote>
                  <a class="email black--text" href="tel:01572723665"
                    >Tel: +44 (0) 1572 723 665</a
                  >
                </blockquote>
              </v-col>
              <v-col cols="12" md="6">
                <blockquote>
                  <a
                    class="email black--text"
                    href="mailto: sales@cbsproducts.com"
                    >Email: sales@cbsproducts.com</a
                  >
                </blockquote>
              </v-col>
            </v-row>
          </div>
        </v-responsive>
        <v-container>
          <v-row class="py-16 ml-20">
            <v-col md="9" cols="12">
              <v-btn
                :x-large="$vuetify.breakpoint.smAndUp"
                text
                class="my-3 ml-20 mr-20"
                outlined
                white
                ><v-icon left large color="primary">mdi-play</v-icon
                ><nuxt-link exact to="/careers" class="learn black--text"
                  >Careers</nuxt-link
                ></v-btn
              >
              <v-btn
                :x-large="$vuetify.breakpoint.smAndUp"
                text
                class="my-3"
                outlined
                white
                ><v-icon left large color="primary">mdi-play</v-icon
                ><nuxt-link exact to="/repairs" class="learn black--text"
                  >Repairs</nuxt-link
                ></v-btn
              >
              <p class="mb-10 ml-20 mr-20">
                Please do not hesitate to get in touch. One of our team members
                will get back to you shortly with your enquiry.
              </p>
              <contactForm />
            </v-col>
            <v-col md="3" cols="12">
              <div>
                <h3
                  class="text-h6 text-center font-weight-light mb-xs-4 mb-5"
                  style="
                    border-bottom: 2px solid #fde36d;
                    box-shadow: 0 4px 6px -6px #222;
                  "
                >
                  Chat to a Consultant:
                </h3>
                <SectionsTeam :our-team="ourTeam" class="mb-10" />
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="9" cols="12">
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
            <v-col md="3" cols="12">
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
                      ><a
                        class="email black--text"
                        href="mailto: sales@cbsproducts.com"
                        >sales@cbsproducts.com</a
                      ></v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary"> mdi-phone </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>PHONE</v-list-item-title>
                    <v-list-item-subtitle>
                      <a class="email black--text" href="tel:01572723665"
                        >+44 (0) 1572 723 665</a
                      ></v-list-item-subtitle
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
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import contactForm from '~/components/sections/contactForm.vue'
export default {
  transition: 'contact',
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
          phone: '01572898515',
          email: 'andy.sibun@cbsproducts.com',
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

.contact-enter-active,
.contact-leave-active {
  transition: opacity 0.5s;
}
.contact-enter,
.contact-leave-active {
  opacity: 0;
}

blockquote {
  font-size: 15px;
  width: 80%;
  margin: 10px auto;
  font-style: italic;
  position: relative;
  border-bottom: 2px solid orange;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  text-indent: 15px;
  color: rgb(61, 60, 60);
  border-bottom: 2px solid #f3e38a;
  box-shadow: 0 4px 6px -6px #222;
}
</style>
