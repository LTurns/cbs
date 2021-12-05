<template>
  <v-form>
    <v-text-field label="Name" dense outlined></v-text-field>
    <v-text-field label="Email" dense outlined></v-text-field>
    <v-text-field label="Subject" dense outlined></v-text-field>
    <v-textarea
      dense
      label="Your Message"
      auto-grow
      outlined
      rows="8"
      row-height="20"
    ></v-textarea>
    <v-btn outlined block color="primary" @click="sendEmail"
      >SEND MESSAGE</v-btn
    >
  </v-form>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    async sendEmail() {
      // const sgMail = require('@sendgrid/mail')
      // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
      // const msg = {
      //   to: 'test@example.com', // Change to your recipient
      //   from: 'test@example.com', // Change to your verified sender
      //   subject: 'Sending with SendGrid is Fun',
      //   text: 'and easy to do anywhere, even with Node.js',
      //   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      // }
      // sgMail
      //   .send(msg)
      //   .then(() => {
      //     console.log('Email sent')
      //   })
      //   .catch((error) => {
      //     console.error(error)
      //   })
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const data = {
        name: 'heyyy',
        email: 'lizzieturney@gmail.com',
        phone: '01234',
        message: 'yesss',
      }
      try {
        await axios.post(
          'https://cbsbackend.herokuapp.com/api/email/enquiry',
          data,
          config
        )
        return 'message successfully sent'
      } catch (error) {
        throw new Error(error)
      }
    },
  },
}
</script>
