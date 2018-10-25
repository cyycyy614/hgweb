import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/views/list/index'
import wel from '@/views/list/wel'
import iso from '@/views/list/iso'
import findlist from '@/views/list/findlist'
import channel from '@/views/list/channel'
import user from '@/views/user/index'
import movielist from '@/views/list/movielist'
import xieyi from '@/views/user/xieyi'
import notice from '@/views/user/notice'

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
    },
    {
      path: '/channel',
      name: 'channel',
      component: channel
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/movielist',
      name: 'movielist',
      component: movielist
    },
    {
      path: '/xieyi',
      name: 'xieyi',
      component: xieyi
    },
    {
      path: '/notice',
      name: 'notice',
      component: notice
    }
  ]
})
