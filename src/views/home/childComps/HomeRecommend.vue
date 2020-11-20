<template>
  <div class="recommend-box">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
        <div>{{item.title}}</div>
      </div>
  </div>
</template>

<script>
  export default {
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend-box{
    display: flex;
    font-size: 14px;
    text-align: center;
    padding: 5px 5px 15px 5px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item{
    flex:1;
    padding: 5px;
  }
  .recommend-item a{
    display: block;
  }
  .recommend-item img{
    width: 100%;
  }
</style>