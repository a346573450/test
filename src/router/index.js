import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import SysConfig from '@/components/SysConfig'
import desk from '../components/desk'
import management from '../components/management'
import usermanagement from '../components/usermanagement'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/desk',
          component: desk,
          meta: {
           requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
          path: '/SysConfig',
          component: SysConfig,
          meta: {
            requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
          },
        },
        {
        path: '/management',
        component: management,
        meta: {
          requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
         },
        },
        {
          path: '/usermanagement',
          component: usermanagement,
          meta: {
            requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
           },
        }
      ]
    },

  ]
})
