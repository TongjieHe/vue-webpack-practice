import Vue from "vue"
import VueRouter from "vue-router"
//导入vue单文件组件
import App from  "./App.vue"
import MyComp1 from "./components/MyComp1.vue"
import MyComp2 from "./components/MyComp2.vue"

//设置路由规则
const router = new VueRouter({
    routes:[
        {path:"/mycomp1",component:MyComp1},
        {path:"/mycomp2",component:MyComp2}
    ]
})

Vue.use(VueRouter)

var vm = new Vue({
    el:"#app",
     data:{
         msg:"App组件"
     },methods: {
        
     },
    render:c=>c(App),
    router
 })