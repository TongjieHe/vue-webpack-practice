<template>
  <div>
      <h1>{{msg}}</h1>
      <router-link to="/mycomp1">MyComp1</router-link>
      <router-link to="/mycomp2">MyComp2</router-link>
      <router-view></router-view>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      msg:"App组件的使用"
    }
  },
  methods: {
    show(){
      console.log("show is called")
    }
  },
}
</script>

<style>

</style>