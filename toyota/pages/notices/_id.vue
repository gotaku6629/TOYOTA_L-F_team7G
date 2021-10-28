<template>
  <v-container>

    <v-row         
        no-gutters
        style="height: 70px;">

      <v-col cols="6" sm="3">
        <v-btn outlined nuxt to="/notice"
          ><v-icon left> mdi-chevron-left </v-icon>Back List</v-btn
        >
      </v-col>
      <v-col class="text-center">
        <h1>{{ notice.title }}</h1>
      </v-col>
      <v-col class="text-left">
        <h1>{{ notice.date }}</h1>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row v-if="notice" justify="center">
      <v-col v-if="notice.label === '1'">        
        <img src="/logo/hito_blue.png" height="height"> <!-- height="300px" -->
        <h1>{{ notice.userId }}</h1>
      </v-col>
      <v-col v-else-if="notice.label === '2'">        
        <img src="/logo/hito_yellow.png" height="height">
        <h1>{{ notice.userId }}</h1>
      </v-col>
      <v-col v-else-if="notice.label === '3'">        
        <img src="/logo/hito_red.png" height="height">
        <h1>{{ notice.userId }}</h1>
      </v-col>
      <v-col v-else-if="notice.label === '4'">        
        <img src="/logo/hito_green.png" height="height">
        <h1>{{ notice.userId }}</h1>
      </v-col>        
      <v-col class="text-left">
        <h2> To: Jane Emily</h2>
        <h1> {{ notice.detail }} </h1>
      </v-col>
    </v-row>


    <v-row>
        <h2>1 Attachment </h2>
    </v-row> 

    <v-row>
        <img src="/top/happybirthday.png" height="300px">
    </v-row>

  </v-container>
</template>

<script>
export default {
    computed: {
        notice() {
            const notice = this.$store.getters['movies/byId'](this.$route.params.id)      
        return notice
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
    }
}

</script>