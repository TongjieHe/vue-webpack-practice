<template>
  <div>
      <h1>App组件</h1>
      <hr>
      <counter></counter>
      <hr>
      <amount></amount>
  </div>
</template>
 
<script>
import counter from "./components/counter.vue"
import amount from "./components/amount.vue"
export default {
  data() {
  },
  methods: {
  },
  components:{
    counter,
    amount
  }

}
</script>

<style>

</style>