<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
  <div class="info-title">{{goods.title}}</div>
  <div class="info-price">
    <span class="new-price">{{goods.newPrice}}</span>
    <span v-if="goods.oldPrice" class="old-price">{{goods.oldPrice}}</span>
    <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
  </div>
  <div class="info-other">
    <span>{{goods.columns[0]}}</span>
    <span>{{goods.columns[1]}}</span>
    <span>{{goods.services[goods.services.length-1].name}}</span>
  </div>
  <div class="info-service">
    <span v-for="(item,index) in goods.services" :key="index" class="info-service-item">
      <img v-if="item.icon" :src="item.icon">
      <span>{{item.name}}</span>
    </span>
  </div>
  </div>
</template>

<script>
  export default {
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style  scoped>
  .base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-title{  
    color: #222
  }
  .info-price{
    margin-top:10px;
  }
  .new-price{
    color: var(--color-high-text);
    font-weight: 700;
    font-size: 24px;
  }
  .old-price{
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .discount{
    font-size: 12px;
    margin-left: 5px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    position: relative;
    top: -8px;
  }
  .info-other{
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    line-height: 30px;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .info-service {
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    height: 60px;
  }
  .info-service-item{
    margin: 0 8px;
  }
  .info-service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
    margin-right: 2px;
  }
  .info-service-item span {
    font-size: 13px;
    color: #333;
  }
</style>