import Vue from "vue"
import VueRouter from "vue-router"
//导入vue单文件组件
import App from  "./App.vue"

Vue.use(VueRouter)

import router from "./script/router.js"

var vm = new Vue({
    el:"#app",
     data:{
         msg:"App组件"
     },methods: {
        
     },
    render:c=>c(App),
    router
 })