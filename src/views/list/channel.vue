<template>
  <div class="list-channel">
    <div class="list-chan" >
      <div class="list-title">推荐</div>
      <el-row name="myrow" :gutter="0">
        <el-col :xs="6"  :sm="6" :md="6" :ls="6" v-for="(item,index) in list.clist" :key="index">
          <el-card class="list-row list-row-c">
            <img class="re-cover"  v-lazy="item.cover" :data-srcset="item.cover">
            <div class="subtitle">
              <span class="n-center">{{item.name}}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <el-carousel :interval="4000" type="card" height="130px">
      <el-carousel-item v-for="(item,index) in list.blist" :key="index">
        <h3><img class="re-cover"  v-lazy="item.url" :data-srcset="item.url"></h3>
      </el-carousel-item>
    </el-carousel>
    <div class="list-w list-t" >
      <div class="list-title">热门标签</div>
      <el-row name="myrow" :gutter="0">
        <el-col :xs="6"  :sm="6" :md="6" :ls="6" v-for="(item,index) in list.tlist" :key="index">
          <el-card class="list-row list-row-t">
            <img class="re-cover"  v-lazy="item.cover" :data-srcset="item.cover">
            <div class="subtitle">
              <span class="n-center">{{item.tagname}}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="list-w list-l" >
      <div class="list-title">猜你喜欢</div>
      <el-row name="myrow" :gutter="0">
        <el-col :xs="6"  :sm="6" :md="6" :ls="6" v-for="(item,index) in list.llist" :key="index">
          <el-card class="list-row list-row-l">
            <img class="re-cover"  v-lazy="item.cover" :data-srcset="item.cover">
            <div class="subtitle">
              <span class="n-center">{{item.tagname}}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="loading"  v-loading="loading" element-loading-text="拼命加载中"></div>
  </div>

</template>

<script scoped>
  import * as api from '../../../api';
  export default{
    data(){
      return {
        list:[
        ],
        busy: false,
        loading:false
      }
    },
    beforeCreate () {
      document.querySelector('body').setAttribute('style', 'background-color:#252627')
    },

    beforeDestroy () {
      document.querySelector('body').removeAttribute('style')
    },
    created(){
      this.busy = true;
      this.loading = true
      this.getList()
//      console.log('第一次加载')
    },
    methods:{
      getList(flag){
        api.demo.getChannelData_get({
          params: {
            token:'xxx'
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
    background-color: #252627;
  }
</style>

<style lang="scss" >

  .list-channel{
    .list-title{
      color: #ffffff;
      font-size: 14px;
      margin-bottom: 10px;
    }
    .list-row{
      position: relative;
    &.el-card{
       background-color: #252627;
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
       color: #b5afaf;
       margin-top:10px;
     }
    .el-card__body {
      text-align: center;
      padding:10px;
    }
    }

    .list-t,.list-l{
      img{
        border-radius: 50%;
        -webkit-border-radius: 50%;
         -moz-border-radius: 50%;
      }
    }
    .loading{
      height: 60px;
      width: 100%;
    }
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 130px;
      margin: 0;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .el-carousel__indicators--outside{
      display: none;
    }
    .el-carousel{
      margin-top:10px;
    }
    .el-carousel__mask, .el-cascader-menu, .el-cascader-menu__item.is-disabled:hover, .el-collapse-item__header, .el-collapse-item__wrap{
      background-color: transparent;
    }
  }
</style>