(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{469:function(t,e,r){"use strict";r.r(e);r(29);var n={props:{category:{type:String,default:"",required:!1}},computed:{movies:function(){return this.$store.getters["movies/byCategory"](this.category)},height:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 220;case"sm":return 400;case"md":return 500;case"lg":return 600;case"xl":return 800}}}},o=r(62),c=r(68),l=r.n(c),v=r(405),h=r(403),m=r(402),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"d-flex justify-space-around flex-wrap",staticStyle:{"min-height":"52vh"}},[r("v-card-actions",{staticClass:"flex-column",attrs:{height:"height"}},[r("img",{attrs:{src:"/top/top1v2.png",height:"435px",weight:"200px"}}),t._v(" "),r("v-btn",{staticStyle:{"text-transform":"none"},attrs:{block:"",color:"error",nuxt:"",to:"/page1"}},[t._v("Click This!")])],1),t._v(" "),r("v-card-actions",{staticClass:"flex-column",attrs:{height:"height"}},[r("img",{attrs:{src:"/top/top4v2.png",height:"435px",weight:"200px"}}),t._v(" "),r("v-btn",{staticStyle:{"text-transform":"none"},attrs:{block:"",color:"warning",nuxt:"",to:"/page4"}},[t._v("Click This!")])],1),t._v(" "),r("v-card-actions",{staticClass:"flex-column",attrs:{height:"height"}},[r("img",{attrs:{src:"/top/top2v3.png",height:"435px",weight:"200px"}}),t._v(" "),r("v-btn",{staticStyle:{"text-transform":"none"},attrs:{block:"",color:"primary",nuxt:"",to:"/page2"}},[t._v("Click This!")])],1),t._v(" "),r("v-card-actions",{staticClass:"flex-column",attrs:{height:"height"}},[r("img",{attrs:{src:"/top/top3v2.png",height:"435px",weight:"200px"}}),t._v(" "),r("v-btn",{staticStyle:{"text-transform":"none"},attrs:{block:"",color:"success",nuxt:"",to:"/page3"}},[t._v("Click This!")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:v.a,VCard:h.a,VCardActions:m.a})},544:function(t,e,r){"use strict";r.r(e);r(29),r(13);var n=r(128),o=r.n(n),c={data:function(){return{tab:[],categories:["Lebel1: Operator","Lebel2: Supervisor","Lebel3: PlantManager"],user:null}},head:function(){return{title:"OSWALD",user_id:null,item_id:9,result:null,message:null,snackbar:!1}},created:function(){var t=this;this.$fire.auth.onAuthStateChanged((function(e){e?(t.user=e,"sample"===t.user.photoURL&&(t.user.photoURL=null)):t.user=null}))},computed:{height:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 220;case"sm":return 400;case"md":return 500;case"lg":return 600;case"xl":return 800}}},methods:{post:function(){var t=this;o.a.create({baseURL:"https://t1vgygnuvd.execute-api.ap-northeast-1.amazonaws.com"}).post("/dev/postv2",{user_id:this.user,item_id:this.item_id}).then((function(e){t.result=e.data.body,t.message="送信が完了しました"})).catch((function(e){t.result=e,t.message="送信が失敗しました。もう一度お試しください。"})).finally((function(){t.loading=!1,t.snackbar=!0}))}}},l=r(62),v=r(68),h=r.n(v),m=r(405),f=r(523),d=r(270),x=r(524),_=r(525),y=r(550),w=r(546),k=r(521),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",[r("v-row",{staticClass:"mb-5",attrs:{justify:"center"}},[r("v-tabs-items",{staticStyle:{width:"50%"},attrs:{height:"height"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab-item",[r("v-img",{attrs:{src:"top/image.png"}})],1),t._v(" "),r("v-tab-item",[r("v-img",{attrs:{src:"top/warehouse.PNG"}})],1),t._v(" "),r("v-tab-item",[r("v-img",{attrs:{src:"top/floatingboard.PNG"}})],1)],1),t._v(" "),r("v-tabs",{attrs:{"fixed-tabs":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab",[t._v("OSWALD")]),t._v(" "),r("v-tab",[t._v("WareHouse")]),t._v(" "),r("v-tab",[t._v("Drone and Board")])],1)],1),t._v(" "),r("v-row",{staticClass:"mb-4",attrs:{justify:"end"}},[r("v-col",{attrs:{cols:"12",sm:"2","offset-sm":"2"}},[r("img",{attrs:{src:"/top/alert.png",height:"100px"}}),t._v(" "),r("v-btn",{staticStyle:{"text-transform":"none"},attrs:{block:"",color:"secondary",nuxt:"",to:"/notice"}},[t._v("Notification")])],1)],1),t._v(" "),r("v-row",[r("v-tabs",{attrs:{"center-active":"","fixed-tabs":""}},[t._l(t.categories,(function(e){return r("v-tab",{key:e},[r("v-btn",{attrs:{color:"primary","x-large":""}},[t._v(t._s(e))])],1)})),t._v(" "),t._l(t.categories,(function(t){return r("v-tab-item",{key:t},[r("ThumbnailList",{attrs:{category:t}})],1)}))],2)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{ThumbnailList:r(469).default}),h()(component,{VBtn:m.a,VCol:f.a,VImg:d.a,VRow:x.a,VTab:_.a,VTabItem:y.a,VTabs:w.a,VTabsItems:k.a})}}]);