<template>
  <div>
    <div class="list-filter">
      <div class="cat1">
        <span  v-for="(item,index) in cate1list" :key="item.id" :class="{selected:item.selected}" @click="selectStyle(item, index) ">最多播放</span>
      </div>
      <div class="catlist">
        <span v-for="(item,index) in catelist" :key="item.id"  :class="{selected:item.selected}" @click="selectStyle(item, index) ">
           {{item.name}}
        </span>
      </div>
    </div>
    <div class="list-movie"   v-infinite-scroll="loadMore" immediate-check="false" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <el-row name="myrow" :gutter="0">
        <el-col :xs="12"  :sm="12" :md="12" :ls="12" v-for="(item,index) in list" :key="index">
          <el-card class="list-row" shadow="never">
            <img v-lazy="item.cover" :data-srcset="item.cover">
            <div class="subtitle">
              <span>{{item.name}}</span>
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
        list:[],
        cate1list:[
          {
            "id":1000,
            "name":"最多播放",
            "selected":false
          },
          {
            "id":1001,
            "name":"最近更新",
            "selected":false
          },
          {
            "id":1002,
            "name":"最多喜欢",
            "selected":false
          }
        ],
        catelist:[
          {
            "id": "8",
            "name": "全部",
            "icon": "all.png",
            "sequence": null,
            "cover": "http:\/\/s.amazeui.org\/media\/i\/demos\/bing-1.jpg",
            "ishot": "0",
            "selected":false,
            "isdeleted": "0"
          }
        ],
        busy: false,
        end: false,
        loading:false,
        pageSize: 6,
        pageIndex: 0,
        categoryId:-1
      }
    },
    created(){
      this.busy = true;
      //this.loading = true
      this.getCateList();
      this.getList()
//      console.log('第一次加载')
    },
    methods:{
      selectStyle(item,index){
        this.$nextTick(function () {
          //Vue.set(item,'selected',item.selected);
          item.selected = !item.selected;
          console.log('item.selcted:'+item.selected);
        });
      },
      getList(flag){
        api.demo.getfindmovielist_get({
          params: {
            token:'xxx',
            type:this.$store.state.type,
            pageSize: this.pageSize,
            pageIndex:this.pageIndex
          }
        }).then((res) => {
          console.log('第' + this.pageIndex + '次获取数据:' + this.busy)
        if(flag === true){//第二次及以后加载
          this.list = this.list.concat(res.data.data)
          console.log('busy:' + this.busy)
          console.log(this.list)
          if(res.data.data.length == 0){
            this.busy = true;
            this.end = true;
          } else {
            this.busy = false;
          }
          this.loading = false
        } else {
          this.list = res.data.data
          if(res.data.data.length == 0){
            this.end = true;
          }
          this.busy = false;
          this.loading = false
        }
      })
    },
    loadMore(){
      if (!!this.end) {
        this.loading = false;
        console.log('不加载')
        return;
      }
      console.log('触发loadMore')
      this.busy = true
      this.loading = true
      setTimeout(() => {
        if(!!this.end){
        this.loading = false
        return;
      }
      this.getList(true)
      this.pageIndex++
       }, 1000)
     },
      getCateList(flag){
        api.demo.getMovieCategoryList_get({
          params: {
            token:'xxx'
          }
        }).then((res) => {
        res.data.data.forEach(function(item, index) {
          item.selected = false;
        })
        this.catelist = res.data.data
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
    background: #ffffff;
  }
</style>
<style lang="scss">
  .list-filter{
    margin-bottom: 20px;
    .cat1,.catlist{
      margin: 10px;
      white-space: nowrap;
      overflow-x: auto;
    }
    span{
      display: inline-block;
      padding: 5px 10px;
      min-width: 30px;
      margin-right: 20px;
      /*margin-bottom: 10px;*/
      text-align:center;
    &.selected{
       color: #cbac7f;
       background: #fceedb;
       border-radius: 40%;
       -webkit-border-radius: 40%;
       -moz-border-radius: 40%;
     }
    }
  }
  .list-movie{
  .list-row{
    position: relative;
    border-radius: 0;
    border:0 none;
  img{
    width: 100%;
    height: 120px;
  }
  .moviename{
    position: absolute;
    top: 20px;
    left: 20px;
    display: inline-block;
    width: 200px;
    color: #ffffff;
    font-size: 16px;
  }
  .el-card__body{
    padding:0;

  }
  .subtitle{
    padding: 10px;
    text-align: center;
    /*word-break: break-all;*/
    overflow: hidden;
    /*display: -webkit-box;*/
    /*-webkit-line-clamp: 2;*/
    /*-webkit-box-orient: vertical;*/
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .el-card__body {
    padding: 0px;
  }
  }
  }

  .loading{
    height: 60px;
    width: 100%;
  }
</style>