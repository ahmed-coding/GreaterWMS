(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[55],{"04a2":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[a("q-table",{staticClass:"my-sticky-header-table shadow-24",attrs:{data:e.table_list,"row-key":"id",separator:e.separator,loading:e.loading,columns:e.columns,"hide-bottom":"",pagination:e.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:e.height},flat:"",bordered:""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:e.$t("refresh"),icon:"refresh"},on:{click:function(t){return e.reFresh()}}})],1),a("q-space"),a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{color:"purple",label:e.$t("stock.view_stocklist.cyclecountresult")},on:{click:function(t){return e.ConfirmCount()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n              "+e._s(e.$t("stock.view_stocklist.cyclecountresulttip"))+"\n            ")])],1)],1)]},proxy:!0},{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t}},[a("q-td",{key:"bin_name",class:{"scan-background":""!==e.bin_scan&&e.bin_scan===t.row.bin_name},attrs:{props:t}},[e._v("\n            "+e._s(t.row.bin_name)+"\n          ")]),a("q-td",{key:"goods_code",attrs:{props:t}},[e._v("\n            "+e._s(t.row.goods_code)+"\n          ")]),a("q-td",{key:"physical_inventory",attrs:{props:t}},[e._v("\n            "+e._s(t.row.physical_inventory)+"\n          ")]),a("q-td",{key:"action",staticStyle:{width:"50px"},attrs:{props:t}},[a("q-btn",{attrs:{round:"",flat:"",push:"",color:"purple",icon:"repeat"},on:{click:function(e){t.row.physical_inventory=0}}})],1)],1)]}}])})],1),[a("div",{staticClass:"q-pa-lg flex cordova-footer"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.barscan,expression:"barscan"}],attrs:{id:"scannedBarcodes",type:"text",readonly:"",disabled:""},domProps:{value:e.barscan},on:{input:[function(t){t.target.composing||(e.barscan=t.target.value)},function(t){return e.datachange()}]}})])]],2)},o=[],s=a("3004"),i=a("3a34"),r=a.n(i),c=a("18d6");new r.a;var d="false";function l(e,t){var a={};a[e]=t,a.SEND_RESULT=d,window.plugins.intentShim.sendBroadcast({action:"com.symbol.datawedge.api.ACTION",extras:a},(function(){}),(function(){}))}function u(){window.plugins.intentShim.unregisterBroadcastReceiver()}function _(e){}function g(e){for(var t=0;t<e.length;t++)e[t].SCANNER_NAME,t<e.length-1&&", "}function p(e){}function m(e,t){var a=e.extras["com.symbol.datawedge.data_string"];document.getElementById("scannedBarcodes").value="",document.getElementById("scannedBarcodes").value=a,document.getElementById("scannedBarcodes").dispatchEvent(new Event("input"))}var E={name:"Pagezebra_cyclecount",data(){return{openid:"",login_name:"",authin:"0",pathname:"cyclecount/",separator:"cell",loading:!1,height:"",table_list:[],columns:[{name:"bin_name",required:!0,label:this.$t("warehouse.view_binset.bin_name"),align:"left",field:"bin_name"},{name:"goods_code",label:this.$t("stock.view_stocklist.goods_code"),field:"goods_code",align:"center"},{name:"physical_inventory",label:this.$t("stock.view_stocklist.physical_inventory"),field:"physical_inventory",align:"center"},{name:"action",label:this.$t("action"),align:"right"}],filter:"",pagination:{page:1,rowsPerPage:"10000"},screenq:this.$q.screen,IMEI:window.device,batteryStatus:"determining...",barscan:"",bin_scan:"",goods_scan:""}},methods:{datachange(){var e=this;e.$q.localStorage.has("auth")&&Object(s["e"])("scanner/?bar_code="+e.barscan,{}).then((t=>{e.barscan=t.results[0].code,"BINSET"===t.results[0].mode?(e.bin_scan=t.results[0].code,e.goods_scan=""):"GOODS"===t.results[0].mode&&(e.goods_scan=t.results[0].code,e.countAdd(e.goods_scan))})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},countAdd(e){var t=this;t.table_list.filter((function(a,n,o){a.bin_name===t.bin_scan&&a.goods_code===e&&(t.table_list[n].physical_inventory+=1)}))},getList(){var e=this;e.$q.localStorage.has("auth")&&Object(s["e"])(e.pathname,{}).then((t=>{e.table_list=t.results})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},reFresh(){var e=this;e.barscan="",e.bin_scan="",e.goods_scan="",e.getList()},ConfirmCount(){var e=this;c["a"].has("auth")&&Object(s["i"])(e.pathname,e.table_list).then((t=>{e.$q.notify({message:"Success Confirm Cycle Count",icon:"check",color:"green"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},updateBatteryStatus(e){var t=this;t.batteryStatus=`Level: ${e.level}, plugged: ${e.isPlugged}`},scanEvents(){var e=this;document.addEventListener("deviceready",e.onDeviceReady,!1)},onDeviceReady(){var e=this;e.receivedEvent("deviceready"),e.registerBroadcastReceiver(),e.determineVersion()},onPause:function(){u()},onResume(){var e=this;e.registerBroadcastReceiver()},receivedEvent(e){},startSoftTrigger(){l("com.symbol.datawedge.api.SOFT_SCAN_TRIGGER","START_SCANNING")},stopSoftTrigger(){l("com.symbol.datawedge.api.SOFT_SCAN_TRIGGER","STOP_SCANNING")},determineVersion(){l("com.symbol.datawedge.api.GET_VERSION_INFO","")},setDecoders(){var e={PROFILE_NAME:"wms",PROFILE_ENABLED:"true",CONFIG_MODE:"UPDATE",PLUGIN_CONFIG:{PLUGIN_NAME:"BARCODE",PARAM_LIST:{scanner_selection:"auto"}}};l("com.symbol.datawedge.api.SET_CONFIG",e)},registerBroadcastReceiver(){window.plugins.intentShim.registerBroadcastReceiver({filterActions:["com.greaterwms.app.ACTION","com.symbol.datawedge.api.RESULT_ACTION"],filterCategories:["android.intent.category.DEFAULT"]},(function(e){if(e.extras.hasOwnProperty("RESULT_INFO")){var t=e.extras.RESULT+" ("+e.extras.COMMAND.substring(e.extras.COMMAND.lastIndexOf(".")+1,e.extras.COMMAND.length)+")";_(t.toLowerCase())}if(e.extras.hasOwnProperty("com.symbol.datawedge.api.RESULT_GET_VERSION_INFO")){var a=e.extras["com.symbol.datawedge.api.RESULT_GET_VERSION_INFO"],n=a.DATAWEDGE;if(n>="6.3"&&(l("com.symbol.datawedge.api.CREATE_PROFILE","wms"),l("com.symbol.datawedge.api.GET_ACTIVE_PROFILE",""),l("com.symbol.datawedge.api.ENUMERATE_SCANNERS","")),n>="6.4"){var o={PROFILE_NAME:"wms",PROFILE_ENABLED:"true",CONFIG_MODE:"UPDATE",PLUGIN_CONFIG:{PLUGIN_NAME:"BARCODE",RESET_CONFIG:"true",PARAM_LIST:{}},APP_LIST:[{PACKAGE_NAME:"com.greaterwms.app",ACTIVITY_LIST:["*"]}]};l("com.symbol.datawedge.api.SET_CONFIG",o);var s={PROFILE_NAME:"wms",PROFILE_ENABLED:"true",CONFIG_MODE:"UPDATE",PLUGIN_CONFIG:{PLUGIN_NAME:"INTENT",RESET_CONFIG:"true",PARAM_LIST:{intent_output_enabled:"true",intent_action:"com.greaterwms.app.ACTION",intent_delivery:"2"}}};l("com.symbol.datawedge.api.SET_CONFIG",s),setTimeout((function(){l("com.symbol.datawedge.api.GET_ACTIVE_PROFILE","")}),1e3)}n>="6.5"&&(d="true")}else if(e.extras.hasOwnProperty("com.symbol.datawedge.api.RESULT_ENUMERATE_SCANNERS")){var i=e.extras["com.symbol.datawedge.api.RESULT_ENUMERATE_SCANNERS"];g(i)}else if(e.extras.hasOwnProperty("com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE")){var r=e.extras["com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE"];p(r)}else e.extras.hasOwnProperty("RESULT_INFO")||m(e,(new Date).toLocaleString())}))}},created(){var e=this;e.$q.localStorage.has("openid")?e.openid=e.$q.localStorage.getItem("openid"):(e.openid="",e.$q.localStorage.set("openid","")),e.$q.localStorage.has("login_name")?e.login_name=e.$q.localStorage.getItem("login_name"):(e.login_name="",e.$q.localStorage.set("login_name","")),e.$q.localStorage.has("auth")?e.authin="1":e.authin="0"},mounted(){var e=this;window.addEventListener("batterystatus",e.updateBatteryStatus,!1),e.height=this.$q.screen.height-175+"px",e.barscan="",e.bin_scan="",e.goods_scan="",e.getList(),e.scanEvents()},updated(){},beforeDestroy(){var e=this;window.removeEventListener("batterystatus",e.updateBatteryStatus,!1),window.removeEventListener("deviceready",e.onDeviceReady,!1)},destroyed(){}},b=E,h=a("42e1"),v=a("8354"),y=a("eaac"),f=a("e7a9"),w=a("9c40"),N=a("2c91"),I=a("05c0"),S=a("bd08"),T=a("db86"),O=a("eebe"),A=a.n(O),R=Object(h["a"])(b,n,o,!1,null,null,null);"function"===typeof v["default"]&&Object(v["default"])(R);t["default"]=R.exports;A()(R,"components",{QTable:y["a"],QBtnGroup:f["a"],QBtn:w["a"],QSpace:N["a"],QTooltip:I["a"],QTr:S["a"],QTd:T["a"]})},8354:function(e,t,a){"use strict";var n=a("ff55"),o=a.n(n);t["default"]=o.a},ff55:function(e,t){}}]);