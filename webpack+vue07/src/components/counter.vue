<template>
  <div>
     <input type="button" value="增加" @click="add">
     <input type="button" value="减少" @click="minus">
     <br>
     <input type="text" name="" id="" v-model="$store.state.count">
  </div>
</template>

<script>
export default {
  data(){

  },methods: {
    add(){
      this.$store.commit("increment")
    },
    minus(){
      this.$store.commit("substract",{a:3,b:1})
    }
  },  
}
</script>

<style>

</style>