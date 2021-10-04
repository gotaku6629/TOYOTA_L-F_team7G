(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{414:function(t,e,r){"use strict";r.r(e);r(29),r(36);var o=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],n={props:{movieId:{type:String,required:!0}},data:function(){return{isLogined:!1}},computed:{movie:function(){var t=this.$store.getters["movies/byId"](this.movieId),e=t.start.toDate(),r=t.end.toDate();return t.date="".concat(e.getFullYear(),"/").concat(e.getMonth()+1,"/").concat(e.getDate(),"/(").concat(o[e.getDay()],")"),t.time="".concat(e.getHours(),":").concat(("00"+e.getMinutes()).slice(-2),"~").concat(r.getHours(),":").concat(("00"+r.getMinutes()).slice(-2)),t},rooms:function(){return this.$store.getters["rooms/byMovie"](this.movieId)},audience:function(){return this.$store.getters["rooms/countAudience"](this.movieId)}},created:function(){var t=this;this.$fire.auth.onAuthStateChanged((function(e){t.isLogined=!!e}))}},c=r(61),l=r(67),v=r.n(l),m=r(392),d=r(390),h=r(389),_=r(258),f=r(407),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"my-10",attrs:{width:"450px"}},[r("v-img",{attrs:{src:t.movie.thumbnail2,height:"635px"}},[r("div",{staticClass:"pa-3 text-h5",staticStyle:{position:"absolute",bottom:"0","background-color":"rgba(107, 107, 107, 0.5)"}},[r("span",{staticClass:"primary--text"},[t._v("●")]),t._v(" "),r("strong",[t._v(" "+t._s(t.rooms.length)+" Rooms/ ")]),t._v(" "),r("strong",[t._v(" "+t._s(t.audience)+" Audience ")])])]),t._v(" "),r("v-card-text",{staticClass:"text-center"},[r("h2",[t._v(t._s(t.movie.date))]),t._v(" "),r("h2",[t._v(t._s(t.movie.time))])]),t._v(" "),r("v-card-actions",{staticClass:"flex-column",staticStyle:{height:"100px"}},[r("v-btn",{staticStyle:{"text-transform":"none"},attrs:{block:"",color:"primary flex-grow-0",nuxt:"",to:"/movies/"+t.movie.id}},[t._v("Check Audio Room")]),t._v(" "),r("v-spacer"),t._v(" "),t.isLogined?r("v-btn",{staticStyle:{"text-transform":"none"},attrs:{block:"",color:"secondary flex-grow-0",nuxt:"",to:"/movies/"+t.movie.id+"/createRoom"}},[t._v("+Create Room")]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:m.a,VCard:d.a,VCardActions:h.a,VCardText:h.b,VImg:_.a,VSpacer:f.a})},437:function(t,e,r){"use strict";r.r(e);var o={props:{category:{type:String,default:"",required:!1}},computed:{movies:function(){return this.$store.getters["movies/byCategory"](this.category)}}},n=r(61),c=r(67),l=r.n(c),v=r(390),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"d-flex justify-space-around flex-wrap",staticStyle:{"min-height":"90vh"}},t._l(t.movies,(function(t){return r("Thumbnail",{key:t.id,attrs:{"movie-id":t.id}})})),1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{Thumbnail:r(414).default}),l()(component,{VCard:v.a})},461:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{tab:[],categories:["Animation","Action","Comedy","Artist","Fiction","Japan","Kids"]}},head:function(){return{title:"トップページ"}}},n=r(61),c=r(67),l=r.n(c),v=r(392),m=r(456),d=r(258),h=r(457),_=r(458),f=r(470),y=r(462),x=r(455),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",[r("v-row",{staticClass:"mb-5"},[r("v-tabs-items",{staticStyle:{width:"100%",height:"80vh"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab-item",[r("v-img",{attrs:{src:"https://lh3.googleusercontent.com/proxy/yzQD0eY2ciL3ZpjT94DQE576w4OwfT4k-kj1tIASzakbDr_F5GUNQMSxkCSECLn6Y93I8otLZPambuXV0BGBfRSn9Iv_cBVtb2HY1gWUtszzd1mhltDb16avi1lrt82IlCMItg"}})],1),t._v(" "),r("v-tab-item",[r("v-img",{attrs:{src:"https://img.hmv.co.jp/image/jacket/400/91/8/2/340.jpg"}})],1),t._v(" "),r("v-tab-item",[r("v-img",{attrs:{src:"https://www.hikaritv.net/resources_v2/hikari/all/sp/parasite/images/im_main_sp.jpg"}})],1)],1),t._v(" "),r("v-tabs",{attrs:{"fixed-tabs":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab",[t._v("Trends")]),t._v(" "),r("v-tab",[t._v("Popular")]),t._v(" "),r("v-tab",[t._v("Recently Added")])],1)],1),t._v(" "),r("v-row",[r("v-tabs",{attrs:{"center-active":"","fixed-tabs":""}},[t._l(t.categories,(function(e){return r("v-tab",{key:e},[r("v-btn",{attrs:{color:"primary","x-large":""}},[t._v(t._s(e))])],1)})),t._v(" "),t._l(t.categories,(function(t){return r("v-tab-item",{key:t},[r("ThumbnailList",{attrs:{category:t}})],1)}))],2)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{ThumbnailList:r(437).default}),l()(component,{VBtn:v.a,VCol:m.a,VImg:d.a,VRow:h.a,VTab:_.a,VTabItem:f.a,VTabs:y.a,VTabsItems:x.a})}}]);