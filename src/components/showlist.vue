<template>
  <div>
    <div class="list-w"   v-infinite-scroll="loadMore" immediate-check="false" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <el-row name="myrow" :gutter="0">
        <el-col :xs="24"  :sm="24" :md="24" :ls="24" v-for="item in list" :key="item.id">
          <el-card class="list-row">
            <img v-lazy="item.cover" :data-srcset="item.cover">
            <span class="moviename">{{item.name}}</span>
            <div class="subtitle">
              <span>{{item.likenum}}次播放</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="loading"  v-loading="loading" element-loading-text="拼命加载中"></div>
  </div>

</template>

<script scoped>
  import * as api from '../../api';
  export default{
    data(){
      return {
        list:[
        ],
        busy: false,
        end: false,
        loading:false,
        pageSize: 3,
        pageIndex: 0
      }
    },
    created(){
//      this.busy = true;
//      this.loading = true
//      this.getList()
//      console.log('第一次加载')
    },
    methods:{
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
        if(!!this.end){
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

<style lang="scss">
  .lists{
    margin-top:40px;
  }
 .list-row{
   position: relative;
   img{
      width: 100%;
      max-height: 170px;
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
   .subtitle{
     padding: 10px;
     /*word-break: break-all;*/
     /*overflow: hidden;*/
     /*display: -webkit-box;*/
     /*-webkit-line-clamp: 2;*/
     /*-webkit-box-orient: vertical;*/
     /*text-overflow: ellipsis;*/
   }
  .el-card__body {
    padding: 0px;
   }
 }
  .loading{
    height: 60px;
    width: 100%;
  }
</style>