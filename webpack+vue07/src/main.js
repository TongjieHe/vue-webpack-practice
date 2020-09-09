import Vue from "vue"
//step 1
import Vuex from "vuex"
//导入vue单文件组件
import App from  "./App.vue"

Vue.use(Vuex)

//step2
const store = new Vuex.Store({
   state:{
       count:100
   },
   mutations:{
    increment(state){
         state.count++
    },
    substract(state,obj){
        state.count-=(obj.a+obj.b)
    }
   },
   getters:{
       //getter只负责对外提供数据，不负责修改数据
       optCount:function(state){
           return  "当前ｃｏｕｎｔ为"+ state.count
       }
   }
})

var vm = new Vue({
    el:"#app",
     data:{
         msg:"App组件"
     },methods: {
        
     },
    render:c=>c(App),
    //step3
    store
 })