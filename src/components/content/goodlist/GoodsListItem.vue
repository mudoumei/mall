<template>
  <div class="good-item" @click="itemClick">
    <img :src="showImage" alt="" @load="imageLoad">
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
    computed:{
      showImage:function(){
        return  this.GoodsListItem.image || this.GoodsListItem.show.img
      }
    },
    methods:{
      imageLoad(){
        if(this.$route.path.indexOf('/home')!==-1){
          this.$bus.$emit('homeItemImageLoad')
        }else if(this.$route.path.indexOf('/detail')!==-1){
          this.$bus.$emit('detailItemImageLoad')
        }
      },
      itemClick(){
        this.$router.push('/detail/'+this.GoodsListItem.iid);
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