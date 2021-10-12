<template>
  <v-footer class="grey lighten-3">
    <v-container>
      <v-divider class="mb-5"></v-divider>
      <v-row>
        <v-col cols="12" md="12"
          ><div class="d-flex">
            <div v-if="$auth.loggedIn">
              <v-btn text @click="logout()">Logout</v-btn>
              <v-btn text to="/data">Dashboard</v-btn>
            </div>
            <div v-else>
              <v-btn text to="/login">Login</v-btn>
            </div>
          </div></v-col
        >
        <v-col class="text--secondary text-center text-md-right">
          {{ new Date().getFullYear() }} ©
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    logout() {
      return (
        this.$auth.logout() &&
        this.$auth.strategies.local.options.endpoints.user
      )
    },
  },
}
</script>

<style>
.site-footer a {
  text-decoration: none;
}
</style>
