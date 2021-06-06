<template>
  <div>
    <nav-bar>
      <span slot="left" @click="clickBack">&lt;</span>
      <div slot="center" class="title-nav">
        <span v-for="(item,index) in titles" :key="index" :class="{active:index===currentIndex}" @click="itemClick(index)"> {{item}} </span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
  export default {
    data(){
      return{
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    components: { NavBar },
    methods:{
      itemClick(index){
        this.currentIndex=index;
        this.$emit('titleClick',index)
      },
      clickBack(){
        this.$router.back();
      }
    }
    }
    
</script>

<style  scoped>
  .title-nav{
    display: flex;
    text-align: center;
    font-size: 13px;
  }
  .title-nav span{
    flex:1;
  }
  .active{
    color: var(--color-high-text);
  }
</style>