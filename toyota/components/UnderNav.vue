<template>
  <div class="overflow-hidden">
    <div class="text-center mb-8">
      <!-- TODO toggle ボタンをいい感じのデザインにする -->
      <v-btn
        color="dark"
        @click="drawer = !drawer"
      >
        Toggle Navigation
      </v-btn>
    </div>
    <v-bottom-navigation
      :input-value="drawer"
      color="primary"
      height="600"
    >
      <RoomList :movie-uid="movieUid" />
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 1,
      drawer: true,
    }
  },
  computed: {
    movieUid() {
      return this.$route.params.movieId
    }
  },
}
</script>