<template>
  <v-card class="d-flex justify-space-around flex-wrap" style="min-height: 52vh">
    
    <!-- 1. check orders -->
    <!-- <v-card-actions class="flex-column" style="height: 100px"> -->
    <v-card-actions class="flex-column" height="height">
      <img src="/top/top1v2.png" height="435px" weight="200px" />
      <v-btn
        block
        color="error"
        nuxt
        :to="`/page1`"
        style="text-transform: none"
        >Click This!</v-btn
      >
    </v-card-actions>
    
    <!-- 4. manage inventory -->
    <v-card-actions class="flex-column" height="height">
      <img src="/top/top4v2.png" height="435px" weight="200px"/>
      <v-btn
        block
        color="warning"
        nuxt
        :to="`/page4`"
        style="text-transform: none"
        >Click This!</v-btn
      >
    </v-card-actions>    

    <!-- 2. inventory count -->
    <v-card-actions class="flex-column" height="height">
      <img src="/top/top2v3.png" height="435px" weight="200px" />
      <v-btn
        block
        color="primary"
        nuxt
        :to="`/page2`"
        style="text-transform: none"
        >Click This!</v-btn
      >
    </v-card-actions>

    <!-- 3. view subscription plan -->
    <v-card-actions class="flex-column" height="height">
      <img src="/top/top3v2.png" height="435px" weight="200px" />
      <v-btn
        block
        color="success"
        nuxt
        :to="`/page3`"
        style="text-transform: none"
        >Click This!</v-btn
      >
    </v-card-actions>    
    
    <!--
    <Thumbnail v-for="movie in movies" :key="movie.id" :movie-id="movie.id" />
    -->

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
    height () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 220
        case 'sm': return 400
        case 'md': return 500
        case 'lg': return 600
        case 'xl': return 800
      }
    },    
  },
}
</script>