<template>
  <el-header class="header-flex" v-bind:class="{left:$store.state.isLeft}" style="height: 40px;background: #03a9f4">
    <i class="el-icon-menu header-left-i" @click="operaMenu"></i>
    <div class="header-title">{{$store.state.title}}</div>
    <i class="el-icon-search header-right-i"></i>
  </el-header>
</template>

<script>
  export default {
    name: 'myheader',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods:{
      operaMenu(){
        this.$store.dispatch('toggleMenu')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header-flex{
    display: flex;
    -webkit-display:flex;
    color: #ffffff;
    position: fixed;
    top:0;
    width: 100%;
    z-index: 10;
    font-size: 14px;
    transition: all 0.5s ease;
  }
  .header-flex.left{
    transform: translate(200px,0);
    transition: all 0.5s ease;
  }
  .header-left-i{
    width: 40px;
    line-height: 40px;
    vertical-align: middle;
  }
  .header-right-i{
    width: 40px;
    line-height: 40px;
    vertical-align: middle;
  }
  .header-title{
    width: 100%;
    line-height: 40px;
    text-align: center;
    vertical-align: middle;
  }
</style>
