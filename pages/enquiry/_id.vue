<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" />
        <v-container>
          <v-row class="py-16">
            <v-col md="5" cols="12">
              <v-list two-line class="transparent">
                <v-img
                  max-height="300"
                  :src="`/${product.mainImg}`"
                  max-width="300"
                  class="mx-auto"
                  :lazy-src="`/${product.mainImg}`"
                />
              </v-list>
              <div class="text-h6 font-weight-bold mt-12 mb-10">
                Contact our Team
              </div>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon> mdi-email </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>EMAIL</v-list-item-title>
                  <v-list-item-subtitle
                    >sales@cbsproducts.com</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon> mdi-phone </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>PHONE</v-list-item-title>
                  <v-list-item-subtitle>
                    +44 (0) 1572 723 665</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <!-- <SectionsTeam :our-team="ourTeam" /> -->
            </v-col>

            <v-col md="7" cols="12">
              <div class="text-h4 font-weight-black mb-8">
                {{ product.name }}
              </div>
              <p class="mb-10">
                Please do not hesitate to get in touch. One of our team members
                will get back to you shortly with your enquiry.
              </p>
              <v-form>
                <v-row class="mb-n6">
                  <v-col
                    ><v-text-field label="Name" dense outlined></v-text-field
                  ></v-col>
                  <v-col
                    ><v-text-field label="Email" dense outlined></v-text-field
                  ></v-col>
                </v-row>

                <v-row class="mb-n6">
                  <v-col
                    ><v-text-field label="Subject" dense outlined></v-text-field
                  ></v-col>
                </v-row>
                <v-row class="mb-n6">
                  <v-col>
                    <v-textarea
                      dense
                      label="Your Message"
                      auto-grow
                      outlined
                      rows="8"
                      row-height="20"
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    ><v-btn class="my-2" color="primary">SEND MESSAGE</v-btn
                    ><v-btn class="my-2 ml-3">clear</v-btn></v-col
                  >
                </v-row>
              </v-form>
            </v-col>
          </v-row>
        </v-container>
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
import { mapState } from 'vuex'

export default {
  components: {},
  data() {
    return {
      heroAlt: [
        {
          src: '../tornado.jpg',
          heading: ' Enquire Now',
        },
      ],
      id: this.$route.params.id,
      item: '',
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
      ],
    }
  },
  computed: {
    ...mapState(['productItems']),
    product() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.item = this.productItems.find((el) => el.id === this.id)

      return this.item
    },
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
