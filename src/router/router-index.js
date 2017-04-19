/**
 * Created by admin on 2017/4/18.
 */
import Vue from 'vue'
import Router from 'vue-router'

// 路由
import router_index from '../views/router_index'
import baochuan_d_rootRouter from '../components/doctorIndex'
import baochuan_p_rootRouter from '../components/patientIndex'

// 具体页面
import docLogin from '../views/doctor/doc-login'
import patientMain from '../views/patient/patientMain'
import doctorMain from '../views/doctor/doctorMain'
import patientMenu from '../views/patient/patientMenu'
import doctorMenu from '../views/doctor/doctorMenu'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: router_index,
    },
    {
      path: '/baochuan_p',
      component: baochuan_p_rootRouter,
      children: [
        {path: 'patientMain', component: patientMain},
        {path: 'patientMenu', component: patientMenu},
      ],
    },
    {
      path: '/baochuan_d',
      component: baochuan_d_rootRouter,
      children: [
        {path: 'doctorMain', component: doctorMain},
        {path: 'doctorMenu', component: doctorMenu},
        {path: 'docLogin',  component: docLogin},
      ],
    },
  ]
})
