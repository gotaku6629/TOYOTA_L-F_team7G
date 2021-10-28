<template>
  <v-container>
    
    <v-row>
      <v-col cols="6" sm="3">
        <v-btn outlined nuxt to="/"
          ><v-icon left> mdi-chevron-left </v-icon>Back List</v-btn
        >
      </v-col>
    </v-row>

    <v-col class="text-center">
        <h1> STATION A: OUT-BOUND </h1>
    </v-col>

    <p></p>
    <h2> TASK QUEUE </h2>
    <p></p>
    <v-data-table
        :headers="headers"
        :items="tasks"
        :items-per-page="10"
        class="elevation-1"
        @click:row="clickRow"
    >
    </v-data-table>

  </v-container>
</template>    


<script>
  export default {
    methods: {
        clickRow (row) {
        // console.log('clickRow', row['number'])
        this.$router.push('/tasks/' + row['number']) // this.$router.push("/movies/" + this.movie_id)
        }
    },

    data () {
      return {          
        headers: [
          {
            text: 'No',
            align: 'start',
            sortable: false,
            value: 'number',
          },
          { text: 'Location', value: 'location' },
          { text: 'Package Code', value: 'pack_code' },
          { text: 'Box', value: 'box' },
          { text: 'UID', value: 'uid' },
          { text: 'Product Code', value: 'prod_code' },
        ],
        
        tasks: this.$store.getters['tasks/all'],
      }
    },
  }
</script>
<style></style>

<!--
        tasks: [
          {
            name: 'Frozen Yogurt',
            calories: 'AE2',
            fat: 'S2930s2a3',
            carbs: 12,
            protein: 4,
            iron: 'C1-001-SP081821',
          },
          {
            name: 'Ice cream sandwich',
            calories: 'AD1',
            fat: 'T9USu12s8',
            carbs: 37,
            protein: 2,
            iron: 'C3-002-SP082198',
          },
          {
            name: 'Eclair',
            calories: 'AG3',
            fat: 'Oajm239Kn',
            carbs: 23,
            protein: 6,
            iron: 'C2-019-SP091239',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
-->