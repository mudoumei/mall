<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <h2 slot="center">购物车({{cartLength}})</h2>
    </nav-bar>
    <scroll class="content">
    <cart-list></cart-list>
    </scroll>
  </div>
</template>

<script>
 import NavBar from 'components/common/navbar/NavBar'
 //辅助函数，将store中的getters映射到局部计算属性中
 import {mapGetters} from 'vuex'
 import Scroll from 'components/common/scroll/Scroll';
 import CartList from './ChildComps/CartList.vue'
  export default {
    computed:{
      //导入$store里的计算属性
     ...mapGetters(['cartLength','cartList'])
    },
    components:{
      NavBar,
      Scroll,
      CartList,

    }
  }
</script>

<style scoped>
  .content {
    overflow: hidden;
    height: calc(100vh - 93px);
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .cart-nav{
  background-color: var(--color-tint);
  color:#fff;
}

</style>