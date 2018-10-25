<template>
    <div class="user-wrapper">
        <div class="user-top">
            <div class="userinfo">
                <div class="n-title">{{data.title}}</div>
                <div class="n-content">{{data.content}}</div>
            </div>
        </div>
    </div>
</template>

<script scoped>
    import * as api from '../../../api';
    export default{
        data(){
            return {
                data:{
                    "title":"",
                    "content":""
                },
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
                var token = this.$route.query.token;
                var noticeid = this.$route.query.noticeid;
                api.demo.getNoticeDetailData_get({
                    params: {
                        token:token,noticeid:noticeid
                    }
                }).then((res) => {
                    this.loading = false;
                this.data = res.data.data
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
   .n-title{
       text-align: center;
       color: #dcb482;
       font-size: 14px;
       margin-bottom: 10px;
   }
    .n-content{
        line-height: 30px;
    }
    .userinfo{
        padding: 10px;
    }

</style>