<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  
  export default {
    name:'',
    props:[''],
    data () {
      return {

      };
    },

    components: {
     
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style scoped>
  @import '~assets/iconfont/iconfont.css';
   #tab-bar{
    display: flex;
    background-color: #f6f6f6;
    position:fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -2px 5px 1px rgba(100, 100, 100, 0.1);
  }
</style>