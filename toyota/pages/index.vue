<template>
  <v-row justify="center" align="center">
    <v-col>
      <v-row class="mb-5">
        <v-tabs-items v-model="tab" style="width: 100%; height: 80vh">
          <v-tab-item>
            <v-img
              src="https://lh3.googleusercontent.com/proxy/yzQD0eY2ciL3ZpjT94DQE576w4OwfT4k-kj1tIASzakbDr_F5GUNQMSxkCSECLn6Y93I8otLZPambuXV0BGBfRSn9Iv_cBVtb2HY1gWUtszzd1mhltDb16avi1lrt82IlCMItg"
            ></v-img>
          </v-tab-item>
          <v-tab-item>
            <v-img
              src="https://img.hmv.co.jp/image/jacket/400/91/8/2/340.jpg"
            ></v-img>
          </v-tab-item>
          <v-tab-item>
            <v-img
              src="https://www.hikaritv.net/resources_v2/hikari/all/sp/parasite/images/im_main_sp.jpg"
            ></v-img>
          </v-tab-item>
        </v-tabs-items>
        <v-tabs v-model="tab" fixed-tabs>
          <v-tab>Trends</v-tab>
          <v-tab>Popular</v-tab>
          <v-tab>Recently Added</v-tab>
        </v-tabs>
      </v-row>
      <v-row>
        <v-tabs center-active fixed-tabs>
          <v-tab v-for="category in categories" :key="category">
            <v-btn color="primary" x-large>{{ category }}</v-btn>
          </v-tab>
          <v-tab-item v-for="category in categories" :key="category">
            <ThumbnailList :category="category" />
          </v-tab-item>
        </v-tabs>
        <v-btn
          class="success float-right"
          @click="post(); dialog = false"
        >
          送信
        </v-btn>        
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
        'Animation',
        'Action',
        'Comedy',
        'Artist',
        'Fiction',
        'Japan',
        'Kids',
      ],
    }),

    head() {
      return {
        title: 'トップページ',
        user_id: null,
        item_id: null,
        result: null,
        message: null,
        snackbar: false
      }
    },
  

    methods: {
      post() {
        const instance = axios.create({
          baseURL: 'https://t1vgygnuvd.execute-api.ap-northeast-1.amazonaws.com/dev/post'
        })
        instance.post('/dev/post', {
          user_id: "gotaku100",
          item_id: "9"
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