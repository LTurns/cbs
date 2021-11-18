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
export default {
  methods: {
    async sendEmail() {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE',
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
        await this.$axios.post(
          'https://cbsbackend.herokuapp.com/api/email',
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
