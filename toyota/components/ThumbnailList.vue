<template>
  <v-card class="d-flex justify-space-around flex-wrap" style="min-height: 90vh">
    <Thumbnail v-for="movie in movies" :key="movie.id" :movie-id="movie.id" />
  </v-card>
</template>
<script>
export default {
  props: {
    category: {
      type: String,
      default: '',
      required: false,
    },
  },
  computed: {
    movies() {
      return this.$store.getters['movies/byCategory'](this.category)
    },
  },
}
</script>