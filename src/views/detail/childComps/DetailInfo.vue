<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class='end'></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :src="item" alt="" :key="index" @load="imageLoad">
  </div>
  </div>
</template>

<script>
  export default {
    props:{
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return{
        imageCount:0,
        Count:0
      }
    },
    methods:{
      imageLoad(){
        if(++this.Count===this.imageCount){
          this.$emit("DetailImageLoad");
        }   
      }
    },
    watch:{
      detailInfo:function(){
        this.imageCount=this.detailInfo.detailImage[0].list.length;
      }
    }
  }
</script>

<style scoped>
  .start,.end{
    position: relative;
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
  }
  .end{
    float: right;
  }
  .desc{
    font-size: 14px;
    padding:15px 0;
  }
  .start::before,.end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    top: -5px;
  }
  .end::after {
    right: 0;
  }
  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }
  .info-list img{
    width: 100%;
  }
   .goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }
</style>