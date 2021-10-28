<template>
  <v-container>
    <v-row
        no-gutters
        style="height: 70px;">
      <v-col cols="6" sm="3">
        <v-btn outlined nuxt to="/"
          ><v-icon left> mdi-chevron-left </v-icon>Back List</v-btn
        >
      </v-col>
    </v-row>

    <h2> ORDER LIST </h2>
    <p></p>
    <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        class="elevation-1"
        @click:row="clickRow"
    ></v-data-table>

  </v-container>
</template>


<script>
  export default {

    methods: {
        clickRow (row) {
        // console.log('clickRow', row['number'])
        this.$router.push('/orders/' + row['number']) // this.$router.push("/movies/" + this.movie_id)
        },

    },

    data () {
      return {
        headers: [
          {
            text: 'Order No. (100g serving)',
            align: 'start',
            sortable: false,
            value: 'number',
          },
          { text: 'Product', value: 'product' },
          { text: 'Date Ordered', value: 'date_ordered' },
          { text: 'Expected Arriving date', value: 'date_arriving' },
          { text: 'Tracking Status', value: 'status' },
          { text: 'Remarks', value: 'remarks' },
        ],

        desserts: this.$store.getters['rooms/all'],
      }
    },
  }
</script>


<!--
        desserts: [
          {
            number: '20-07732-35261',
            product: 'SAO-Application Lycories',
            date_ordered: '15 Oct 2021',
            date_arriving: '16 Oct 2021',
            status: 'Shipped',
            iron: '1 Attached file',
          },
          {
            number: '20-07732-35262',
            product: 'ATE-Application Lycories',
            date_ordered: '21 Nov 2021',
            date_arriving: '23 Nov 2021',
            status: 'Delivered',
            iron: '',
          },
          {
            number: '20-07732-35263',
            product: 'AG3-Service Logistics',
            date_ordered: '22 Nov 2021',
            date_arriving: '23 Nov 2021',
            status: 'Paid',
            iron: '2 Attached file',
          },
          {
            number: '20-07732-35264',
            product: 'SAD-Application Products',
            date_ordered: '22 Nov 2021',
            date_arriving: '23 Nov 2021',
            status: 'Delivered',
            iron: '8%',
          },
          {
            number: '20-07732-35265',
            product: 'AG3-Product-HandsOn',
            date_ordered: '30 Nov 2021',
            date_arriving: '1 Dec 2021',
            status: 'Delivered',
            iron: '16%',
          },
          {
            number: '20-07732-35266',
            product: 'RX3-MotherBoards',
            date_ordered: '1 Dec 2021',
            date_arriving: '3 Dec 2021',
            status: 'None',
            iron: '0%',
          },
          {
            number: '20-07732-35267',
            product: 'USJ-Mikey-Mouse',
            date_ordered: '3 Dec 2021',
            date_arriving: '4 Dec 2021',
            status: 'Paid',
            iron: '2%',
          },
          {
            number: '20-07732-35268',
            product: 'TKG-TAMAGOKAKE-gohan',
            date_ordered: '3 Dec 2021',
            date_arriving: '4 Dec 2021',
            status: 'None',
            iron: '45%',
          },
          {
            number: '20-07732-35269',
            product: 'SKE-48Goods-UCHIWA',
            date_ordered: '4 Dec 2021',
            date_arriving: '5 Dec 2021',
            status: 'None',
            iron: '22%',
          },
          {
            number: '20-07732-35270',
            product: 'NIT-Institute-Technology',
            date_ordered: '5 Dec 2021',
            date_arriving: '6 Dec 2021',
            status: 'None',
            iron: '6%',
          },
        ],

-->