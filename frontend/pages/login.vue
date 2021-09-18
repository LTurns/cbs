<template>
  <section class="section">
    <!-- <v-app id="inspire"> -->
    <v-container fill-height>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="5" class="pr-10 pl-10">
          <v-form
            ref="form"
            v-model="valid"
            style="margin-top: 30%; margin-bottom: 30%"
            lazy-validation
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Email"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Password"
              required
            ></v-text-field>

            <nuxt-link :to="redirect">
              <v-btn
                :disabled="!valid"
                color="yellow"
                class="my-20"
                @click="validate"
              >
                Log In</v-btn
              >
            </nuxt-link>

            <v-btn class="mr-4" @click="reset">Reset Form</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  middleware: 'auth',
  data: () => ({
    valid: true,
    email: '',
    redirect: '/login',
    emailRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 40) || 'Name must be less than 10 characters',
    ],
    password: '',
    passwordRules: [(v) => !!v || 'E-mail is required'],
  }),
  methods: {
    validate() {
      this.$refs.form.validate()

      this.postUserInfo()
    },
    reset() {
      this.$refs.form.reset()
    },
    async postUserInfo() {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      }
      const data = {
        email: this.email,
        password: this.password,
      }

      let result

      try {
        await this.$axios.post(
          'http://localhost:5001/api/users/login',
          data,
          config
        )
        result = true
      } catch (err) {
        throw new Error('Login details are incorrect')
      }

      return result ? (this.redirect = '/data') : '/login'
    },
  },
}
</script>
