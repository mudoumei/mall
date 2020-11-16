<template>
  <div>
    <tab-bar>
      <tab-bar-item path='/home' activeColor='salmon'>
        <span slot="icon" class="iconfont icon-shouye"></span>
        <span slot="title">首页</span>
      </tab-bar-item>
      <tab-bar-item path='/catagory' activeColor='salmon'>
        <span slot="icon" class="iconfont icon-fenlei"></span>
        <span slot="title">分类</span>
      </tab-bar-item>
      <tab-bar-item path='/cart' activeColor='salmon'>
        <span slot="icon" class="iconfont icon-gouwuche"></span>
        <span slot="title">购物车</span>
      </tab-bar-item>
      <tab-bar-item path='/profile' activeColor='salmon'>
        <span slot="icon" class="iconfont icon-wode"></span>
        <span slot="title">我的</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem';
  export default {
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style lang="scss" scoped>

</style>