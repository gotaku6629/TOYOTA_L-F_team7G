<template>
  <v-card width="450px" class="my-10">

    <!-- 1.image -->
    <v-img :src="movie.thumbnail2" height="635px">
      <div class="pa-3 text-h5" style="position: absolute; bottom: 0; background-color: rgba(107, 107, 107, 0.5);">
        <span class="primary--text">&#9679;</span>
        <strong> {{ rooms.length }} Rooms/ </strong>
        <strong> {{ audience }} Audience </strong>
      </div>
    </v-img>
    
    <!-- 2.date -->
    <v-card-text class="text-center"
      ><h2>{{ movie.date }}</h2>
      <h2>{{ movie.time }}</h2>
    </v-card-text>

    <!-- 3.botton -->
    <v-card-actions class="flex-column" style="height: 100px">
      <v-btn
        block
        color="primary flex-grow-0"
        nuxt
        :to="`/movies/${movie.id}`"
        style="text-transform: none"
        >Check Audio Room</v-btn
      >
      <v-spacer></v-spacer>
      <v-btn
        v-if="isLogined"
        block
        color="secondary flex-grow-0"
        nuxt
        :to="`/movies/${movie.id}/createRoom`"
        style="text-transform: none"
        >+Create Room</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default {
  props: {
    movieId: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    isLogined: false,
  }),
  computed: {
    movie() {
      const movie = this.$store.getters['movies/byId'](this.movieId)
      const start = movie.start.toDate()
      const end = movie.end.toDate()
      movie.date = `${start.getFullYear()}/${
        start.getMonth() + 1
      }/${start.getDate()}/(${weekday[start.getDay()]})`
      movie.time = `${start.getHours()}:${('00' + start.getMinutes()).slice(
        -2
      )}~${end.getHours()}:${('00' + end.getMinutes()).slice(-2)}`

      return movie
    },
    rooms() {
      return this.$store.getters['rooms/byMovie'](this.movieId)
    },
    audience() {
      return this.$store.getters['rooms/countAudience'](this.movieId)
    }
  },
  created() {
    this.$fire.auth.onAuthStateChanged((user) => {
      this.isLogined = !!user
    })
  },
}
</script>