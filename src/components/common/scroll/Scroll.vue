<template>
  <div class="swapper" ref="swapper">
    <div class='content'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
  data(){
      return{
        scroll:null,
      }
    },
    props:{
      probeType:{
        type:Number,
        default(){
          return 0
        }
      },
      pullUpLoad:{
        type:Boolean,
        default(){
          return false
        }
      }
    },
  mounted(){
    this.scroll = new BScroll(this.$refs.swapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
    if(this.probeType===2 || this.probeType===3)
    this.scroll.on('scroll',(position)=>{
        this.$emit("contentScroll",position)
    })
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',()=>{
      this.$emit('pullUpLoad');
      this.scroll.finishPullUp();
    })}
    },
    
  // updated(){
  //   this.scroll.refresh();
  //   console.log(111);
    
  // },
  methods:{
    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x,y,time);
    },
    refresh(){
      this.scroll.refresh();
    }
  }
  }
</script>
<style scoped>
</style>