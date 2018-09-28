<template>
  <transition name="slide-fade">
    <div class="menu-wrapper" v-show="$store.state.isopenmenu">
      <div class="userinfo">
        <div class="adver">
          <img v-lazy="$store.state.adver" :data-srcset="$store.state.adver">
        </div>
        <div class="username">{{$store.state.username}}</div>
      </div>
      <el-menu :default-active="active"   background-color="#22262a" @select="handleOpen" @close="handleClose">
        <template v-for="item in menus">
        <router-link :to="{path:item.menu}">
          <el-menu-item :index="item.index" :key="item.index">
            <!--<router-link :to="{path:item.menu}">-->
            <i class="menuicon" :class="item.icon"></i>
            <span class="menutitle">{{item.name}}</span>
            <!--</router-link>-->
          </el-menu-item>
        </router-link>
        </template>
      </el-menu>
    </div>
  </transition>

</template>

<script scoped>
  export default{
    name: 'mymenu',
    data(){
      return {
        active:'wel',
        menus:[
          {
            index: "wel",
            icon: 'el-icon-goods',
            name: '福利',
            menu:'/wel'
          },
          {
            index: "2",
            icon: 'el-icon-sold-out',
            name: '推荐',
            menu:'/recommand'
          },
          {
            index: '3',
            icon: 'el-icon-news',
            name: 'App',
            menu:'/app'
          },
          {
            index: 'iso',
            icon: 'el-icon-date',
            name: 'ISO',
            menu:'/iso'
          },
          {
            index: '5',
            icon: 'el-icon-message',
            name: 'Web',
            menu:'/web'
          },
          {
            index: '6',
            icon: 'el-icon-tickets',
            name: '关于',
            menu:'/about'
          }
        ]
      }
    },
    methods:{
      handleOpen(key, keyPath) {
        console.log('点击menunav1')
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log('点击menunav2')
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss">
  .slide-fade-enter-active{
    transition: all 0.5s ease;
  }
  .slide-fade-leave-active{
    transition: all 0.5s ease;
  }
  .slide-fade-enter{
    /* .slide-fade-leave-active for below version 2.1.8 */
    transform: translateX(-200px);
    /*opacity: 0;*/
  }
  .slide-fade-leave-to{
    /* .slide-fade-leave-active for below version 2.1.8 */
    transform: translateX(-200px);
  }
  .el-menu-item .menuicon{
    color: #ffffff;
    font-size: 14px;
  }
  .menutitle{
    font-size: 14px;
    /*color: #ffffff;*/
    text-decoration: none;
  }
  .el-menu-item *{
    text-decoration: none;
  }
  .el-menu{
    border-right: 0 none;
  }
  .el-menu a{
    color: #ffffff;
  }
  .router-link-active>li{
    color: #ffd04b;
  }
  .el-menu>a>li{
    color: #ffffff;
  }
  .menu-wrapper{
    position: fixed;
    top:0;
    left: 0;
    width: 200px;
    background:#22262a ;
    color: #ffffff;
    z-index: 10;
    height: 100%;
  }
  .el-menu-item{
    font-size: 12px;
  }
  .userinfo{
  .adver{text-align: center;padding-top: 20px}
    .adver{
      img{
        width: 100px;
        height: 100px;
        -webkit-border-radius:100%;
        -moz-border-radius:100%;
        border-radius:100%;
      }
    }
    .username{
      font-size: 14px;
      text-align: center;
      overflow: hidden;
      text-overflow:ellipsis;white-space: nowrap;
      padding:0 30px;
    }
  }
</style>