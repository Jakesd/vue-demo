import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Login from '@/components/login/Login'

Vue.use(Router,ElementUI)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
})
