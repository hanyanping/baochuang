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
// 公共页面
import Hello from '../components/Hello'
//患者端页面
import patientMain from '../views/patient/patientMain'
import patientMenu from '../views/patient/patientMenu'
import userSignDeal from '../views/patient/userSignDeal'
import myDoctorList from '../views/patient/myDoctorList'
import settingVisitTime from '../views/patient/settingVisitTime'
//医生端页面
import doctorMain from '../views/doctor/doctorMain'
import docLogin from '../views/doctor/docLogin'
import docMoney from '../views/doctor/docMoney'
import myPatient from '../views/doctor/myPatient'
import docConsult from '../views/doctor/docConsult'
import doctorPerfectInfo from '../views/doctor/doctorPerfectInfo'
import doctorMenu from '../views/doctor/doctorMenu'
import docInfo from '../views/doctor/docInfo'
import docReservation from '../views/doctor/docReservation'

Vue.use(Router)

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
        {path: 'userSignDeal', component: userSignDeal},
        {path: 'myDoctorList', component: myDoctorList},
        {path: 'settingVisitTime', component: settingVisitTime},
        {path: 'hello', component: Hello}
      ],
    },
    {
      path: '/baochuan_d',
      component: baochuan_d_rootRouter,
      children: [
        {path: 'doctorMain', component: doctorMain},
        {path: 'doctorMenu', component: doctorMenu},
        {path: 'docLogin', component: docLogin},
        {
          path: 'doctor',
          name: 'doctorMain',
          component: doctorMain
        },
        {
          path: 'docMoney',
          name: 'docMoney',
          component: docMoney
        },
        {
          path: 'doctorPerfectInfo',
          name: 'doctorPerfectInfo',
          component: doctorPerfectInfo
        },
        {
          path: 'myPatient',
          name: 'myPatient',
          component: myPatient
        },

        {
          path: 'docConsult',
          name: 'docConsult',
          component: docConsult
        },
        {
          path: 'docInfo',
          name: 'docInfo',
          component: docInfo
        },
        {
          path: 'docReservation',
          name: 'docReservation',
          component: docReservation
        }

      ],
    },
  ]
})
