<template>
  <div id="home">
    <nav-bar class="home-nav">
      <h2 slot="center">购物街</h2>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" class='tab-fixed' v-show="isTabFixed"></tab-control>
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @contentScroll="contentScroll" @pullUpLoad="loadMore">
    <home-swiper class="home-swiper" :banners="banners" @homeSwiperImgLoad="SwiperImgLoad"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl" ></tab-control>
    <good-list :goodsList="showGoods"></good-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
 import NavBar from 'components/common/navbar/NavBar'
 import TabControl from 'components/content/tabcontrol/TabControl'
 import GoodList from 'components/content/goodlist/GoodList'
 import Scroll from 'components/common/scroll/Scroll'
 import BackTop from 'components/common/backtop/BackTop'

 import {getHomeMultidata,getHomeGoods} from 'network/home'

 import HomeSwiper from './childComps/HomeSwiper'
 import HomeRecommend from './childComps/HomeRecommend'
 import {debounce} from 'common/utils'
  export default {
    name:'Home',
    data(){
      return{
          banners:[],
          recommends:[],
          goods:{
            'pop':{page:0,list:[]},
            'new':{page:0,list:[]},
            'sell':{page:0,list:[]}
          },
          currentType:'pop',
          isShowBackTop:false,
          tabOffsetTop:339,
          isTabFixed:false
        }
      },
    created(){
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    mounted(){
      const refresh = debounce(this.$refs.scroll.refresh,500);
      this.$bus.$on('itemImageLoad',()=>{
        refresh()
      })
    },
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommend,
      TabControl,
      GoodList,
      Scroll,
      BackTop
    },
    methods:{
     
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
        this.banners=res.data.banner.list;
        this.recommends=res.data.recommend.list
      })
      },
      getHomeGoods(type){
        const page=this.goods[type].page+1;
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1
          console.log(page);
        })
      },
      loadMore(){
        this.getHomeGoods(this.currentType);
      },
      tabClick(index){
      switch(index){
          case 0: 
          this.currentType='pop'
          break;
          case 1: 
          this.currentType='new'
          break;
          case 2: 
          this.currentType='sell'
          break;   
        }
      },
      backClick(){
       this.$refs.scroll.scrollTo(0,0,500);
      },
      contentScroll(position){
       this.isShowBackTop= Math.abs(position.y) > 1000;
       this.isTabFixed=Math.abs(position.y)>this.tabOffsetTop
      },
      SwiperImgLoad(){
        console.log(this.$refs.tabControl.$el.offsetTop);
      }
    },
     computed:{
       showGoods:function(){
      return this.goods[this.currentType].list;
    },
    }
  }
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color:#fff;
  /* 在sroll滚动区域外不需要fixed */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-fixed{
  background-color: #fff;
  position:fixed;
  left: 0;
  right: 0;
  z-index: 9;
}
</style>