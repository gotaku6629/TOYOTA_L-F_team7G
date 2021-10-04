<template>
  <v-app dark>
    <v-app-bar app>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <UnderNav />
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      title: 'toyota l&f',
    }
  },
  created() {
    this.bindMovies()
    this.bindRooms()
  },
  methods: {
    ...mapActions({ bindMovies: 'movies/bind', bindRooms: 'rooms/bind' }),
  },
}
</script>
