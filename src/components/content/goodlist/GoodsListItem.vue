<template>
  <div class="good-item">
    <img :src="GoodsListItem.show.img" alt="" @load="imageLoad">
    <div class='good-info'>
        <p>{{GoodsListItem.title}}</p>
        <span class="price">{{GoodsListItem.price}}</span>
        <span class="collect iconfont icon-wode">{{GoodsListItem.cfav}}</span>
    </div>
    
  </div>
</template>

<script>
  export default {
    props:{
      GoodsListItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imageLoad(){
        this.$bus.$emit('itemImageLoad')
      }
    }
  }
</script>

<style scoped>
  .good-item{
    width: 50%;
    padding: 0  2px 10px 2px;
    
  }
  .good-item img{
    width: 100%;
    border-radius: 4px;
  }
  .good-info{
    text-align: center;
    font-size: 12px;
  }
  .good-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .good-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .icon-wode{
    font-size: 12px;
  }
</style>