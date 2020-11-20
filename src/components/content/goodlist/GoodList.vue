<template>
  <div class="good-list">
    <goods-list-item v-for="item in goodsList" :key="item.show.n" :GoodsListItem="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
  export default {
  components: { GoodsListItem },
    props:{
      goodsList:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .good-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 4px;
    }

</style>