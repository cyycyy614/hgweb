<template>
  <div class="index-wrapper">
    <div class="mask" v-show="$store.state.ismask" @click="toggleMenu"></div>
    <myheader></myheader>
    <mymenu></mymenu>
    <router-view></router-view>
  </div>
</template>

<script>
  import myheader from '@/components/header'
  import mymenu from '@/components/menu'
  export default{
    name: 'index',
    components:{myheader, mymenu},
    data(){
      return {
      }
    },
    methods:{
      toggleMenu(){
        this.$store.dispatch('toggleMenu')
      }
    }
  }
</script>

<style lang="scss">
  .mask{
    position: fixed;
    top:0;
    z-index: 7;
    background: rgba(0,0,0,0.7);
    width: 100%;
    height: 100%;
  }
</style>