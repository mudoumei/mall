<template>
  <div id="category">
    <nav-bar class="category-nav">
      <h2 slot="center">分类</h2>
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

<style  scoped>
  .category-nav{
  background-color: var(--color-tint);
  color:#fff;
}
</style>