import VueRouter from "vue-router"
import MyComp from "../components/MyComp.vue"
import MyComp1 from "../components/MyComp1.vue"
import MyComp2 from "../components/MyComp2.vue"

//设置路由规则
const router = new VueRouter({
    routes:[
        {path:"/",redirect:"/mycomp"},
        {
            path:"/mycomp",
            component:MyComp,
            children:[
                {path:"",component:MyComp1},
                {path:"mycomp1",component:MyComp1},
                {path:"mycomp2",component:MyComp2}
            ]
            
        },
       
    ]
})
export default router