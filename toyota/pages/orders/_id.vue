<template>
  <v-container>
    <v-row         
        no-gutters
        style="height: 70px;">
      <v-col cols="6" sm="3">
        <v-btn outlined nuxt to="/page1"
          ><v-icon left> mdi-chevron-left </v-icon>Back List
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
        <v-col cols="6" sm="3">
            <h1>Order Infomation </h1>
        </v-col>
        <v-col cols="6" sm="3">
            <h1>Order ID </h1>
            <h1>Time Ordered </h1>
            <h1>Total Cost </h1>
            <h1>Sold by+ </h1>
        </v-col>
        <v-col cols="6" sm="3">
            <h1>No. {{ order['number'] }} </h1>
            <h1>{{ order['date_ordered'] }} </h1>
            <h1> {{ order['cost'] }} </h1>
            <h1> {{ order['userId'] }} </h1>
        </v-col>        
    </v-row>

    <v-row>
        <v-col cols="6" sm="3">
            <h1>Delivery Infomation </h1>
        </v-col>
        <v-col cols="6" sm="3">            
            <h1>Time Arriving </h1>
            <h1>Status</h1>
            <v-timeline v-if="order.status === 'Paid'">
                <v-timeline-item color="pink">
                    Paid ( {{ order.date_ordered}} )
                </v-timeline-item>
                <v-timeline-item class="text-right">
                    Shipped
                </v-timeline-item>
                <v-timeline-item>
                    Delivered
                </v-timeline-item>
            </v-timeline>
            <v-timeline v-else-if="order.status === 'Shipped'">
                <v-timeline-item color="pink">
                    Paid ( {{ order.date_ordered}} )
                </v-timeline-item>
                <v-timeline-item color="pink" class="text-right">
                    Shipped
                </v-timeline-item>
                <v-timeline-item>
                    Delivered
                </v-timeline-item>
            </v-timeline>
            <v-timeline v-else-if="order.status === 'Delivered'">
                <v-timeline-item color="pink">
                    Paid ( {{ order.date_ordered}} )
                </v-timeline-item>
                <v-timeline-item color="pink" class="text-right">
                    Shipped
                </v-timeline-item>
                <v-timeline-item color="pink" >
                    Delivered (Finished)
                </v-timeline-item>
            </v-timeline>            
        </v-col>        
        <v-col cols="6" sm="3">            
            <h1> {{ order['date_arriving'] }} </h1>
            <h1> {{ order['status'] }} </h1>      
        </v-col> 
    </v-row>

  </v-container>
</template>


<script>
export default {
    computed: {
        order() {
            const order = this.$store.getters['rooms/byNumber'](this.$route.params.id)
            // const order = this.$store.getters['rooms/all']  
        return order
        },
    }
}
</script>