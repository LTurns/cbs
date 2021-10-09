<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Login</h1>

        <SectionsUserAuthForm button-text="Login" :submit-form="loginUser" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LoginPage',
  middleware: ['auth-login'],
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async loginUser(loginInfo) {
      try {
        await this.$auth.loginWith('local', {
          data: loginInfo,
        })
        // this.$router.push('/data')
      } catch (error) {
        throw new Error(error)
        // this.$store.dispatch('snackbar/setSnackbar', {
        //   color: 'red',
        //   text: 'There was an issue signing in.  Please try again.',
        // })
      }
    },
  },
}
</script>

<style></style>
