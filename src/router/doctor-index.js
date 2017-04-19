/**
 * Created by zheha on 2017/4/12.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import doctorMain from '../views/doctor/doctorMain'
import docLogin from '../views/doctor/doc-login'
import docPerfectInfo from '../views/doctor/doctorPerfectInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'docLogin',
      component: docLogin
    },
    {
      path: '/doctor',
      name: 'doctorMain',
      component: doctorMain
    },
    {
      path: '/docPerfectInfo',
      name: 'docPerfectInfo',
      component: docPerfectInfo
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
