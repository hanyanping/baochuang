import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import doctorMain from '../views/doctor/doctorMain'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/doctor',
      name: 'doctorMain',
      component: doctorMain
    }
  ]
})
