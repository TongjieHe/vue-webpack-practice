<template>
  <div>
      <h1>
          子组件 MyComp
      </h1>
       <router-link to="/mycomp/mycomp1">MyComp1</router-link>
       <router-link to="/mycomp/mycomp2">MyComp2</router-link>
       <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>