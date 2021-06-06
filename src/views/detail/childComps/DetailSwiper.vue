<template>
  <div>
    <swiper class="detail-swiper">
      <swiper-item v-for="(item,index) in topImages" :key="index" class="detail-image-item">
          <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
  export default {
    components: { 
      Swiper,
      SwiperItem 
    },
    props:{
      topImages:{
        type:Array,
        default(){
          return []
        }
      }
    },
    method:{
    
    }
  }
</script>

<style  scoped>
  .detail-image-item{
    position: relative;
    height:300px;
    overflow: hidden;
  }
  .detail-image-item img{
    position: absolute;
    top:-80px;
  }
</style>