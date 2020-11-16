<template>
  <div>
    <router-view></router-view>
    <MainTatbar/>
  </div>
</template>

<script>
import MainTatbar from 'components/content/MainTabBar/MainTabBar.vue'
  export default {
    name:'App',
    components:{
      MainTatbar
    }
  }
</script>

<style scoped>
@import url(~assets/css/base.css);
</style>