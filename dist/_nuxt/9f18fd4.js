(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{389:function(t,e,o){"use strict";o.d(e,"a",(function(){return c})),o.d(e,"b",(function(){return d}));var n=o(390),r=o(0),c=Object(r.e)("v-card__actions"),v=Object(r.e)("v-card__subtitle"),d=Object(r.e)("v-card__text"),l=Object(r.e)("v-card__title");n.a},414:function(t,e,o){"use strict";o.r(e);o(29),o(36);var n=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],r={props:{movieId:{type:String,required:!0}},data:function(){return{isLogined:!1}},computed:{movie:function(){var t=this.$store.getters["movies/byId"](this.movieId),e=t.start.toDate(),o=t.end.toDate();return t.date="".concat(e.getFullYear(),"/").concat(e.getMonth()+1,"/").concat(e.getDate(),"/(").concat(n[e.getDay()],")"),t.time="".concat(e.getHours(),":").concat(("00"+e.getMinutes()).slice(-2),"~").concat(o.getHours(),":").concat(("00"+o.getMinutes()).slice(-2)),t},rooms:function(){return this.$store.getters["rooms/byMovie"](this.movieId)},audience:function(){return this.$store.getters["rooms/countAudience"](this.movieId)}},created:function(){var t=this;this.$fire.auth.onAuthStateChanged((function(e){t.isLogined=!!e}))}},c=o(61),v=o(67),d=o.n(v),l=o(392),m=o(390),_=o(389),h=o(258),f=o(407),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"my-10",attrs:{width:"450px"}},[o("v-img",{attrs:{src:t.movie.thumbnail2,height:"635px"}},[o("div",{staticClass:"pa-3 text-h5",staticStyle:{position:"absolute",bottom:"0","background-color":"rgba(107, 107, 107, 0.5)"}},[o("span",{staticClass:"primary--text"},[t._v("●")]),t._v(" "),o("strong",[t._v(" "+t._s(t.rooms.length)+" Rooms/ ")]),t._v(" "),o("strong",[t._v(" "+t._s(t.audience)+" Audience ")])])]),t._v(" "),o("v-card-text",{staticClass:"text-center"},[o("h2",[t._v(t._s(t.movie.date))]),t._v(" "),o("h2",[t._v(t._s(t.movie.time))])]),t._v(" "),o("v-card-actions",{staticClass:"flex-column",staticStyle:{height:"100px"}},[o("v-btn",{staticStyle:{"text-transform":"none"},attrs:{block:"",color:"primary flex-grow-0",nuxt:"",to:"/movies/"+t.movie.id}},[t._v("Check Audio Room")]),t._v(" "),o("v-spacer"),t._v(" "),t.isLogined?o("v-btn",{staticStyle:{"text-transform":"none"},attrs:{block:"",color:"secondary flex-grow-0",nuxt:"",to:"/movies/"+t.movie.id+"/createRoom"}},[t._v("+Create Room")]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:l.a,VCard:m.a,VCardActions:_.a,VCardText:_.b,VImg:h.a,VSpacer:f.a})}}]);