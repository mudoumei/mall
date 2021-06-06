<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index" @load="imageLoad">
        <a :href="item.link">
          <img :src="item.image" alt="" />　
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  data() {
    return {
      isLoad: false,
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imageLoad() {
      if (!this.isLoad){
        this.$emit("homeSwiperImgLoad");
        this.isLoad = true;
        console.log(111);
      } 
    },
  },
};
</script>

<style lang="scss" scoped>
</style>