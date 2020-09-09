<template>
  <div>
      <h1>{{msg}}</h1>
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