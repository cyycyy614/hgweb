<template>
  <div class="user-wrapper">
    <div class="user-top">
      <img class="user-bg"  v-lazy="bgimg" :data-srcset="bgimg">
      <img class="user-settinglog"  v-lazy="settinglogo">
      <div class="userinfo">
        <img class="user-avatar"  v-lazy="list.userinfo.avatar" :data-srcset="list.userinfo.avatar">
        <div class="user-mobile">{{list.userinfo.mobile}}</div>
        <div class="user-tip">看广告、推广可以增加观看次数哦</div>
        <div class="box">
           <div class="firstbox">
             <div class="views">{{list.userinfo.viewmum}}/{{list.userinfo.viewmum}}</div>
             <div>今日剩余观影次数</div>
           </div>
          <div class="secondbox">
            <div class="levels"><img class="user-level"  v-lazy="level"></div>
            <div>下一等级还差一人</div>
          </div>
        </div>
      </div>

      <div class="user-buttons">
        <el-row name="myrow" :gutter="0">
          <el-col :xs="6"  :sm="6" :md="6" :ls="6" v-for="item in buttonlist" :key="item.id">
            <el-card class="list-row list-row-c">
              <img class="re-cover"  v-lazy="item.icon" >
              <div class="subtitle">
                <span class="n-center">{{item.name}}</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>

     <div class="user-bottom">
       <div class="user-history-w user-box">
         <img class="user-box-icon"  v-lazy="historylogo" >
         <div class="user-box-right">
           <p class="title">历史记录</p>
           <p class="nums">目前历史观看过{{list.userinfo.viewnum}}部</p>
         </div>
       </div>
       <div class="user-story-w user-box">
         <img class="user-box-icon"  v-lazy="storylogo" >
         <div class="user-box-right">
           <p class="title">我的缓存</p>
           <p class="nums">目前本地大片有{{list.userinfo.viewnum}}部</p>
         </div>
       </div>
       <div class="user-like-w user-box">
         <img class="user-box-icon"  v-lazy="likelogo" >
         <div class="user-box-right">
           <p class="title">我的喜欢</p>
           <p class="nums">目前已有喜欢{{list.userinfo.viewnum}}部</p>
         </div>
       </div>
     </div>
    </div>
  </div>
</template>

<script scoped>
  import * as api from '../../../api';
  export default{
    data(){
      return {
        list:{
          userinfo:{
            avatar:""
          }
        },
        buttonlist:[
          {
            id:1,
            icon:require('../../assets/images/tuiguang.png'),
            name:"我要推广"
          },
          {
            id:2,
            icon:require('../../assets/images/fankui.png'),
            name:"意见反馈"
          },
          {
            id:3,
            icon:require('../../assets/images/tongzhi.png'),
            name:"通知"
          },
          {
            id:4,
            icon:require('../../assets/images/jiaoliuqun.png'),
            name:"火爆交流群"
          }
        ],
        bgimg:require('../../assets/images/me_log.png'),
        level:require('../../assets/images/dengji1.png'),
        historylogo:require('../../assets/images/lishijilu.png'),
        likelogo:require('../../assets/images/wodexihuan.png'),
        storylogo:require('../../assets/images/wodehuancun.png'),
        settinglogo:require('../../assets/images/shezhi.png'),
        busy: false,
        loading:false
      }
    },
    created(){
      this.busy = true;
      this.loading = true
      this.getList()
//      console.log('第一次加载')
    },
    methods:{
      getList(flag){
        api.demo.getUserIndexData_get({
          params: {
            token:'f1406ad365391d3fedbbf810f2315575'
          }
        }).then((res) => {
          this.loading = false;
        this.list = res.data.data
        console.log('busy:' + this.busy)
        console.log(this.list)
      })
      }
    },
    watch:{
      '$router'(to,from){
        console.log('watch router,to:' + to)
        if(to === '/wel'){
          this.type = 'wel'
        } else if(to === '/iso'){
          this.type = 'iso'
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  body{
    background: #f4f4f4;
    margin:0;
    padding:0;
  }
</style>
<style lang="scss">
  .user-wrapper{
  .user-top{position: relative}
  .user-bg{
    width: 100%;
    height: 100px;
  }
  .user-settinglog{
    width: 16px;
    height: 16px;
    position: absolute;
    top:10px;
    right: 10px;
  }
  .userinfo{
    position: relative;
    background: #ffffff;
    padding-top:40px;
    margin: 0 10px;
    border-radius: 4px;
    top:-10px;
  }
  .user-avatar{
    position: absolute;
    top:-30px;
    left: 50%;
    margin-left: -30px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    margin-bottom: 20px;
  }
  .user-mobile{
    text-align: center;
    color: #dcb482;
    font-size: 18px;
  }
  .user-tip{
    margin-top:10px;
    text-align: center;
    color: #8e8d8d;
    font-size: 12px;
    border-bottom: 1px solid #ededed;
    padding-bottom: 10px;
  }
  .box{
     font-size:0;
     color:#8e8d8d;
    .firstbox,.secondbox{
      display: inline-block;
      text-align: center;
      width: 49%;
      box-sizing: border-box;
      padding: 20px 20px;
      font-size: 12px;
    }
  .firstbox{
    border-right: 1px solid #ededed;
  }
    .levels{
      font-size: 20px;
      color: #b6b6b6;
    }
    .views{
      font-size: 20px;
      color: #dcb482;
      margin-bottom: 10px;
    }
    .user-level{
      width: 21px;
      height: 30px;
    }
  }

  .user-buttons,.user-bottom{
    margin: 0 10px;
    background: #ffffff;
  }

  .user-bottom{margin-top:10px;  margin-bottom: 50px;}
  .list-row{
    position: relative;

  &.el-card{
     border:0 none;
     box-shadow: none;
     -webkit-box-shadow: none;
   }
  img{
    width: 60px;
    height: 60px;
  }
  .n-center{
    display: inline-block;
    max-width: 60px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #333333;
    margin-top:10px;
  }
  .el-card__body {
    text-align: center;
    padding:10px;
  }
  }
.user-box{
  padding:10px;
  border-bottom: 1px solid #ededed;
}
  .user-box-icon{
    width: 60px;
    height: 60px;
    margin-right: 10px;
    float: left;
  }
.user-box-right{
  margin-left: 80px;
  .title{
    font-size: 14px;
    color:#333333;
  }
  .nums{
    margin-top:10px;
    font-size: 12px;
    color:#8e8d8d;
  }
}
  }

</style>