<template>
  <div class="lists">
    <list class=""></list>
  </div>
</template>

<script>
  import list from '@/components/showlist'
  export default{
    name: 'wel',
    components:{list},
    data(){
      return {
        list:[
          {
            "id":1,
            "url": 'http://img.gank.io/5ecd1b9e-ec88-4ce3-a700-8b7dc31cde8c?imageView2/0/w/200',
            "mrul":"http://img.gank.io/ff89a354-c2a3-4085-aa85-63592697b71c?imageView2/0/w/200",
            "title":'纯纯粹粹1'
          },
          {
            "id":2,
            "url": 'http://img.gank.io/5ecd1b9e-ec88-4ce3-a700-8b7dc31cde8c?imageView2/0/w/200',
            "mrul":"http://img.gank.io/ff89a354-c2a3-4085-aa85-63592697b71c?imageView2/0/w/200",
            "title":'纯纯粹粹2'
          },
          {
            "id":3,
            "url": 'http://img.gank.io/5ecd1b9e-ec88-4ce3-a700-8b7dc31cde8c?imageView2/0/w/200',
            "mrul":"http://img.gank.io/ff89a354-c2a3-4085-aa85-63592697b71c?imageView2/0/w/200",
            "title":'纯纯粹粹3'
          },
          {
            "id":4,
            "url": 'http://img.gank.io/5ecd1b9e-ec88-4ce3-a700-8b7dc31cde8c?imageView2/0/w/200',
            "mrul":"http://img.gank.io/ff89a354-c2a3-4085-aa85-63592697b71c?imageView2/0/w/200",
            "title":'纯纯粹粹4'
          }
        ]
      }
    },
    created(){
      this.$store.commit('updateTitle','福利页面')
      this.$store.commit('updateListType','wel')
      this.$store.dispatch('updateMenuIndex','wel')
      console.log('menuindex:' + this.$store.state.menuindex)
      this.getList()
    },
    methods:{
      getList(){

      }
    }
  }
</script>

<style>
  body{
    margin: 0
  }
</style>