<template>
  <v-container>
    
    <v-row>
      <v-col cols="6" sm="3">
        <v-btn outlined nuxt to="/"
          ><v-icon left> mdi-chevron-left </v-icon>Back List</v-btn
        >
      </v-col>
    </v-row>
    <!--
    <h2> notices </h2>
    <h2>{{ notices }}</h2>
    -->
    <v-row v-for="notice in notices" :key="notice.id" justify="center">
      <v-col cols="12" sm="10">
        <v-card-actions>

          <v-list-item class="grow">
            <v-list-item-avatar v-if="notice.label === '1'" color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                src="/logo/hito_blue.png"
              ></v-img>
            </v-list-item-avatar>
            <v-list-item-avatar v-else-if="notice.label === '2'" color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                src="/logo/hito_yellow.png"
              ></v-img>
            </v-list-item-avatar>
            <v-list-item-avatar v-else-if="notice.label === '3'" color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                src="/logo/hito_red.png"
              ></v-img>
            </v-list-item-avatar>
            <v-list-item-avatar v-else-if="notice.label === '4'" color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                src="/logo/hito_green.png"
              ></v-img>
            </v-list-item-avatar>                           

            <v-list-item-content>
              <v-list-item-title> {{ notice.userId }} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        
        </v-card-actions>

        <v-card outlined tile class="py-5">          
          <v-card-title> {{ notice.title }} </v-card-title>
          <v-subheader> From: {{ notice.userId }} </v-subheader>
          <v-subheader> Date: {{ notice.date }} </v-subheader>
          <v-card-text>{{ notice.detail }}</v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              nuxt
              :to="`/notices/${notice.id}`"
              style="text-transform: none"
              >Check This Notice</v-btn
            >
          </v-card-actions>
        </v-card>

      </v-col>
    </v-row>

  </v-container>
</template>


<script>
export default {
  // FireStoreからデータを取ってくる
  computed: {
    // notices() {
    //  const question = this.$store.getters['movies/byId'](this.$route.params.id)      
    //  return question
    // },
    notices() {
        const notice = this.$store.getters['movies/all']
        return notice
    },    
  }  
}
</script>

<style></style>