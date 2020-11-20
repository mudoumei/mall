<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <h2 slot="center">购物车</h2>
    </nav-bar>
  </div>
</template>

<script>
 import NavBar from 'components/common/navbar/NavBar'
  export default {
    components:{
      NavBar
    }
  }
</script>

<style scoped>
  .cart-nav{
  background-color: var(--color-tint);
  color:#fff;
}

</style>