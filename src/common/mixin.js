import BackTop from 'components/common/backtop/BackTop';
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop:false
    }
  },
  methods: {
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    listenShowBackTop(position){
      this.isShowBackTop= -position.y >1000
    }
  }
}