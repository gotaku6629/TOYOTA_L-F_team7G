(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{542:function(t,e,o){"use strict";o.r(e);o(29);var n={computed:{notice:function(){var t=this.$store.getters["movies/byId"](this.$route.params.id);return t},height:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 220;case"sm":return 400;case"md":return 500;case"lg":return 600;case"xl":return 800}}}},r=o(62),c=o(68),l=o.n(c),v=o(405),h=o(523),_=o(422),d=o(407),m=o(185),w=o(524),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{staticStyle:{height:"70px"},attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"6",sm:"3"}},[o("v-btn",{attrs:{outlined:"",nuxt:"",to:"/notice"}},[o("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),t._v("Back List")],1)],1),t._v(" "),o("v-col",{staticClass:"text-center"},[o("h1",[t._v(t._s(t.notice.title))])]),t._v(" "),o("v-col",{staticClass:"text-left"},[o("h1",[t._v(t._s(t.notice.date))])])],1),t._v(" "),o("v-divider"),t._v(" "),t.notice?o("v-row",{attrs:{justify:"center"}},["1"===t.notice.label?o("v-col",[o("img",{attrs:{src:"/logo/hito_blue.png",height:"height"}}),t._v(" "),o("h1",[t._v(t._s(t.notice.userId))])]):"2"===t.notice.label?o("v-col",[o("img",{attrs:{src:"/logo/hito_yellow.png",height:"height"}}),t._v(" "),o("h1",[t._v(t._s(t.notice.userId))])]):"3"===t.notice.label?o("v-col",[o("img",{attrs:{src:"/logo/hito_red.png",height:"height"}}),t._v(" "),o("h1",[t._v(t._s(t.notice.userId))])]):"4"===t.notice.label?o("v-col",[o("img",{attrs:{src:"/logo/hito_green.png",height:"height"}}),t._v(" "),o("h1",[t._v(t._s(t.notice.userId))])]):t._e(),t._v(" "),o("v-col",{staticClass:"text-left"},[o("h2",[t._v(" To: Jane Emily")]),t._v(" "),o("h1",[t._v(" "+t._s(t.notice.detail)+" ")])])],1):t._e(),t._v(" "),o("v-row",[o("h2",[t._v("1 Attachment ")])]),t._v(" "),o("v-row",[o("img",{attrs:{src:"/top/happybirthday.png",height:"300px"}})])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:v.a,VCol:h.a,VContainer:_.a,VDivider:d.a,VIcon:m.a,VRow:w.a})}}]);