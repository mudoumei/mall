<template>
  <div>
    <keep-alive exclude="Detail">
     <router-view></router-view> 
    </keep-alive>
    <MainTatbar v-show="isshow"/>
  </div>
</template>

<script>
import MainTatbar from 'components/content/MainTabBar/MainTabBar.vue'
  export default {
    data(){
      return{
        isshow:true
      }
    },
    name:'App',
    components:{
      MainTatbar
    },
    updated(){
      if(this.$route.path.indexOf('detail')!==-1){
        this.isshow= false
      }else{
        this.isshow = true
      }
    }
  }
</script>

<style scoped>
@import url(~assets/css/base.css);
</style>