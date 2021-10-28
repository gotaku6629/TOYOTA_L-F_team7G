<template>
  <v-container>
    <v-row
        no-gutters
        style="height: 70px;">
      <v-col cols="6" sm="3">
        <v-btn outlined nuxt to="/page4"
          ><v-icon left> mdi-chevron-left </v-icon>Back List</v-btn
        >
      </v-col>
    </v-row>

    <v-row>
        <v-col cols="6" sm="3">
            <img src="/top/qr.PNG" height="335px" />
        </v-col>
        <v-col cols="6" sm="3">
            <h1> product code </h1>
            <h1> location </h1>
            <h1> box </h1>
        </v-col>
        <v-col cols="6" sm="3">
            <h1> {{ task.prod_code }} </h1>
            <h1> {{ task.location }} </h1>
            <h1> {{ task.box }} </h1>
        </v-col>        
    </v-row>

    <v-row justify="end" class="mb-4">
      <v-col cols="12" sm="2" offset-sm="2">
        <!--<img src="/top/alert.png" height="100px" />
        <v-btn color="orange" @click="add_order"
        >Add Order</v-btn>
        -->
      </v-col>
    </v-row>    

  </v-container>
</template>


<script>
export default {
    computed: {
      task() {
          const task = this.$store.getters['tasks/byNumber'](this.$route.params.id)
          // const order = this.$store.getters['rooms/all']  
      return task
      },
  },
}
</script>

<!--
<script>
export default {
  
  data(){
    return {
      number: '',
      prod_code: 'C1-001-SP081821'
    }
  },
  computed: {
      task() {
          const task = this.$store.getters['tasks/byNumber'](this.$route.params.id)
          // const order = this.$store.getters['rooms/all']  
      return task
      },
  },
  method:{
    ...mapActions({ update: 'tasks/update' }),

    add_order(){
      this.number = this.$route.params.id
      this.update(this.number, this.prod_code)
      this.$router.push("/page4")
    }
  }
}
</script>
-->