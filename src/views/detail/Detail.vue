<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick" ref="navbar"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probeType='3' @contentScroll="contentScroll">
    <detail-swiper :topImages="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop :shop="shop"></detail-shop>
    <detail-info :detailInfo="detailInfo" @DetailImageLoad="DetailImageLoad"></detail-info>
    <detail-param-info ref="params" :paramInfo="paramInfo"></detail-param-info>
    <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
    <good-list ref="recommend" :goodsList="recommendInfo"></good-list>
    </scroll>
    <detail-bottom-bar class="bottom-bar" @addToCart="addToCart"></detail-bottom-bar>
    <back-top v-show="isShowBackTop" @click.native="backClick"></back-top> 
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar';
import DetailSwiper from './childComps/DetailSwiper';
import DetailBaseInfo from './childComps/DetailBaseInfo';
import DetailShop from './childComps/DetailShop';
import DetailInfo from './childComps/DetailInfo';
import DetailParamInfo from './childComps/DetailParamInfo';
import DetailCommentInfo from './childComps/DetailCommentInfo';
import DetailBottomBar from './childComps/DetailBottomBar';

import {getDetailData, getRecommend, Goods, GoodsParam, Shop} from 'network/detail'
import {formatDate} from 'common/utils'
import {debounce} from 'common/utils'
import {backTopMixin} from 'common/mixin'
import Scroll from 'components/common/scroll/Scroll';
import GoodList from 'components/content/goodlist/GoodList';



  export default {
    name:'Detail',
    data(){
      return{
        id:null,
        topImages:[],
        goods:{},
        shop:{},
        goodsParams:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommendInfo:[],
        themeTopYs:[],
        titleindex:0,
      }
    },
    mixins:[backTopMixin],
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        Scroll,
        DetailShop,
        DetailInfo,
        DetailParamInfo,
        DetailCommentInfo,
        GoodList,
        DetailBottomBar,      
    },
    created() {
      this.id=this.$route.params.id;
      getDetailData(this.id).then(res=>{
        const data=res.result;
        this.topImages=data.itemInfo.topImages;
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        this.shop=new Shop(data.shopInfo)
        this.detailInfo=data.detailInfo
        this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
        if(data.rate.cRate !== 0){
          this.commentInfo=data.rate.list[0]
        }
     
      }),
      getRecommend().then(res=>{
        this.recommendInfo = res.data.list;
      })
    },
    mounted(){
        const refresh = debounce(this.$refs.scroll.refresh,500);
        const getThemetopYs =debounce(()=>{
          this.themeTopYs.push(0);
          this.themeTopYs.push(this.$refs.params.$el.offsetTop-44)
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop-44)
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-44)
        },500)
        this.$bus.$on('detailItemImageLoad',()=>{
        refresh();
        getThemetopYs()
      })
    },
    methods:{
      DetailImageLoad(){
        this.$refs.scroll.refresh();  
      },
      titleClick(index){
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],500)
    },
      contentScroll(position){
        const positiony=-position.y
        if(this.themeTopYs.length>0){
           if(this.titleindex!==0 &&positiony<this.themeTopYs[this.titleindex]){
          this.titleindex--;
          this.$refs.navbar.currentIndex=this.titleindex;
          console.log(this.titleindex);
        }else if(positiony>this.themeTopYs[this.titleindex+1]){
          this.titleindex++;
          this.$refs.navbar.currentIndex=this.titleindex;
          console.log(this.titleindex);
        }
      }
       this.listenShowBackTop(position)
    },
       addToCart(){
        const obj = {}
        obj.id = this.id;
        obj.imgURL = this.topImages[0]
        obj.title = this.goods.title
        obj.desc = this.goods.desc;
        obj.newPrice = this.goods.realPrice;
        this.$store.dispatch('addCart', obj);
       }
    },
   
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
  .bottom-bar{
    
    background-color: #fff;
  }
</style>