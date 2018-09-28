<template>
  <div class="lists">
    <list class=""></list>
  </div>
</template>

<script>
  import list from '@/components/showlist'
  export default{
    name: 'iso',
    components:{list},
    data(){
      return {
        list:[
        ]
      }
    },
    created(){
      this.$store.commit('updateTitle','ISO页面')
      this.$store.commit('updateListType','iso')
      this.$store.dispatch('updateMenuIndex','iso')
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