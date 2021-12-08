<template>
  <v-form role="form" method="POST" :name="email" @submit.prevent="sendEmail">
    <v-text-field
      v-model="name"
      label="Name"
      type="name"
      dense
      outlined
    ></v-text-field>
    <v-text-field
      v-model="email"
      label="Email"
      type="email"
      dense
      outlined
    ></v-text-field>
    <v-text-field
      v-model="subject"
      label="Subject"
      type="subject"
      dense
      outlined
    ></v-text-field>
    <v-textarea
      v-model="message"
      dense
      label="Your Message"
      auto-grow
      outlined
      rows="8"
      row-height="20"
    ></v-textarea>
    <v-btn outlined block color="primary" type="submit">SEND MESSAGE</v-btn>
    <!-- <form>
      <label>
        Your email:
        <input type="email" name="_replyto" />
      </label>
      <label>
        Your message:
        <textarea name="message"></textarea>
      </label>
      your other form fields go here
      <button type="submit">Send</button>
    </form> -->
  </v-form>
</template>

<script>
import axios from 'axios'
// import dotenv from 'dotenv'

// dotenv.config()
export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  },
  methods: {
    sendEmail() {
      //     this.loadingTxt = true
      //     axios
      //       .post('https://formspree.io/mknyngqa', {
      //         name: this.name,
      //         from: this.email,
      //         _subject: `${this.name} | Friendly Message from Github Page`,
      //         message: this.subject,
      //       })
      //       .then((response) => {
      //         this.name = ''
      //         this.email = ''
      //         this.subject = ''
      //         // i redirect my app to '/success' route once payload completed.
      //         this.$router.push({ path: '/home' })
      //       })
      //       .catch((error) => {
      //         if (error.response) {
      //         }
      //       })
      //   },
      // },
      try {
        axios
          .post('https://getform.io/f/cee9fb5b-06de-41ac-a982-5103f16311ce', {
            email: this.email,
            name: this.name,
            message: this.message,
            image: 'https://cbs-images.s3.amazonaws.com/ductrodpusher1.jpeg',
            product: 'Duct Rod Pusher',
          })
          .then((response) => response)
        // this.getAllMusics()
      } catch (err) {
        throw new Error('Error sending email')
      }
      // const config = {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Access-Control-Allow-Origin': 'https://sendgrid.com',
      //   },
      // }

      // const data = {
      //   name: 'heyyy',
      //   email: 'lizzieturney@gmail.com',
      //   phone: '01234',
      //   message: 'yesss',
      // }
      // try {
      //   await axios.post(
      //     // 'http://localhost:8080/api/email/enquiry',
      //     'https://cbsbackend.herokuapp.com/api/email/enquiry',
      //     data,
      //     config
      //   )
      //   return 'message successfully sent'
      // } catch (error) {
      //   throw new Error(error)
      // }
    },
  },
}
</script>
