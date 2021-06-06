<template>
  <div id="home">
    <nav-bar class="home-nav">
      <h2 slot="center">购物街</h2>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" class='tab-fixed' v-show="isTabFixed" ref="tabControl2"></tab-control>
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @contentScroll="contentScroll" @pullUpLoad="loadMore">
    <home-swiper class="home-swiper" :banners="banners" @homeSwiperImgLoad="SwiperImgLoad"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1" ></tab-control>
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

 import {getHomeMultidata,getHomeGoods} from 'network/home'

 import HomeSwiper from './childComps/HomeSwiper'
 import HomeRecommend from './childComps/HomeRecommend'
 import {debounce} from 'common/utils'
 import {backTopMixin} from 'common/mixin'
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
          tabOffsetTop:339,
          isTabFixed:false,
          saveY:0
        }
      },
      mixins:[backTopMixin],
    created(){
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    mounted(){
      const refresh = debounce(this.$refs.scroll.refresh,500);
      this.$bus.$on('homeItemImageLoad',()=>{
        refresh()
      })
    },
    activated(){
      this.$refs.scroll.scrollTo(0,this.saveY,0);
      this.$refs.scroll.refresh()
    },
    deactivated(){
      this.saveY=this.$refs.scroll.getScrollY();
    },
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommend,
      TabControl,
      GoodList,
      Scroll,
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
        this.$refs.tabControl1.currentIndex=index;
        this.$refs.tabControl2.currentIndex=index;
        
      },
      contentScroll(position){
       this.listenShowBackTop(position);
       this.isTabFixed=Math.abs(position.y)>this.tabOffsetTop;
       
      },
      SwiperImgLoad(){
        console.log(this.$refs.tabControl1.$el.offsetTop);
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