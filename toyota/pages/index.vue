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
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
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
    }
  },
}
</script>