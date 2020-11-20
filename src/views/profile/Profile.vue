<template>
  <div id="profile">
    <nav-bar class="profile-nav">
      <h2 slot="center">我的</h2>
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
  .profile-nav{
  background-color: var(--color-tint);
  color:#fff;
}
</style>