<template>
  <div>
    <div v-for="(item,index) in cartList" :key="index">{{item}}</div>
  </div>
</template>

<script>
 import {mapGetters} from 'vuex'
  export default {
    computed:{
      ...mapGetters(['cartLength','cartList'])
    }
  }
</script>

<style lang="scss" scoped>

</style>