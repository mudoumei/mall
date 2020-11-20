<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" class="tab-control-item" :class="{active:index===currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        currentIndex:0
      }
    },
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex=index;
        this.$emit('tabClick',index);
      }
    }
  }
</script>

<style scoped>
.tab-control{
  display: flex;
  justify-content: space-around;
  box-shadow: 0 1px 2px rgba(100,100,100,0.1);
  background: #fff;
  /* position: sticky; */
  top:44px;
}
.tab-control-item{
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
}
.active{
  color: var(--color-high-text);
  border-bottom:2px solid var(--color-tint);
}
</style>