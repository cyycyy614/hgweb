import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/views/list/index'
import wel from '@/views/list/wel'
import iso from '@/views/list/iso'
import findlist from '@/views/list/findlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'index',
      component: index,
      children:[
        {
          path: '/wel',
          name: 'wel',
          component: wel
        },
        {
          path: '/iso',
          name: 'iso',
          component: iso
        }
      ]
    },
    {
      path: '/findlist',
      name: 'findlist',
      component: findlist
    }
  ]
})
