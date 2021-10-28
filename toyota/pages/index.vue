<template>
  <v-row justify="center" align="center">
    <v-col>
      <v-row class="mb-5" justify="center">

        <!-- 1.images -->        
        <!-- <v-tabs-items v-model="tab" style="width: 50%; height: 50vh"> -->
        <v-tabs-items v-model="tab" style="width: 50%" height= "height">
          <v-tab-item>
            <v-img 
              src="top/image.png"
            ></v-img>
          </v-tab-item>
          <v-tab-item>
            <v-img
              src="top/warehouse.PNG"
            ></v-img>
          </v-tab-item>
          <v-tab-item>
            <v-img
              src="top/floatingboard.PNG"
            ></v-img>
          </v-tab-item>
        </v-tabs-items>

        <!-- 2.trends -->
        <v-tabs v-model="tab" fixed-tabs>
          <v-tab>OSWALD</v-tab>
          <v-tab>WareHouse</v-tab>
          <v-tab>Drone and Board</v-tab>
        </v-tabs>
      </v-row>

      <v-row justify="end" class="mb-4">
        <v-col cols="12" sm="2" offset-sm="2">
          <img src="/top/alert.png" height="100px" />
          <v-btn
            block
            color="secondary"
            nuxt
            :to="`/notice`"
            style="text-transform: none"
            >Notification</v-btn
          >
        </v-col>
      </v-row>

      <v-row>
        <v-tabs center-active fixed-tabs>
          <!-- 3.category -->
          <v-tab v-for="category in categories" :key="category">
            <v-btn color="primary" x-large>{{ category }}</v-btn>
          </v-tab>

          <!-- 4.task_list -->
          <v-tab-item v-for="category in categories" :key="category">
            <ThumbnailList :category="category" />
          </v-tab-item>
        </v-tabs>

      </v-row>
    </v-col>
  </v-row>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      tab: [],
      categories: [
        'Lebel1: Operator',
        'Lebel2: Supervisor',
        'Lebel3: PlantManager',
      ],
      user: null,
    }),

    head() {
      return {
        title: 'OSWALD',
        user_id: null,
        item_id: 9, // null
        result: null,
        message: null,
        snackbar: false
      }
    },

    created() {
      this.$fire.auth.onAuthStateChanged((user) => {
        if (user) {
          this.user = user
          if (this.user.photoURL === "sample") {
            this.user.photoURL = null
          }
        } else {
          this.user = null
        }
      })
    },

    computed: {
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
  
    methods: {
      post() {
        const instance = axios.create({
          baseURL: 'https://t1vgygnuvd.execute-api.ap-northeast-1.amazonaws.com'
          // baseURL: 'https://t1vgygnuvd.execute-api.ap-northeast-1.amazonaws.com/dev/postv2'
        })
        instance.post('/dev/postv2', {
          user_id: this.user, // "gotaku"
          item_id: this.item_id  // "9"
        }).then((response) => {
          this.result = response.data.body
          this.message = '送信が完了しました'
        }).catch((error) => {
          this.result = error
          this.message = '送信が失敗しました。もう一度お試しください。'
        }).finally(() => {
          this.loading = false
          this.snackbar = true
        })
      }
    }

}
</script>