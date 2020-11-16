<template>
  <div class="tab-bar-item" @click="itemClick" :style="activeStyle">
    <slot name='icon'></slot>
    <slot name='title'></slot>
    </div>
</template>

<script>
  // import $ from 'jquery'
  export default {
    props:{
      path:String,
      ActiveColor:{
        type:String,
        default:'salmon'
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path);
        // $(this.$el).addClass('active');
        // $(this.$el).siblings().removeClass('active'); 
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive? {color: this.ActiveColor} : {}
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex:1;
    text-align: center;
    height: 49px;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .tab-bar-item .iconfont{
    font-size: 20px;
  }
  .tab-bar-item .title{
    font-size: 14px;
  }
</style>