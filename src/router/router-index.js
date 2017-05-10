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

// 患者端页面
import patientMenu from '../views/patient/patPatientMenu';
import userSignDeal from '../views/patient/patUserSignDeal';
import myDoctorList from '../views/patient/patMyDoctorList';
import testReportIdentityCard from '../views/patient/patTestReportIdentityCard';
import settingVisitTime from '../views/patient/patSettingVisitTime';
import reserveList from  '../views/patient/patReserveList';
import completeInfo from '../views/patient/patCompleteInfo';
import visitRecord from '../views/patient/patVisitRecord';
import personalCenter from '../views/patient/patPersonalCenter';
import selectTestReport from '../views/patient/patSelectTestReport';
import integralAccount from '../views/patient/patIntegralAccount';
import subscribeList from '../views/patient/patSubscribeList';
import hospitalInfo from '../views/patient/patHospitalInfo';
import doctorInfo from '../views/patient/patDoctorInfo';
import selectTestReportCheck from '../views/patient/patSelectTestReportCheck';
import checkRecord from '../views/patient/patCheckRecord';
import clinicRecord from '../views/patient/patClinicRecord';
import changeMainDoctor from '../views/patient/patChangeMainDoctor';
import payConfirm from '../views/patient/patPayConfirm';
import patientLogin from '../views/patient/patPatientLogin';
import patEmptyForMenu from '../views/patient/patEmptyForMenu';


// 医生端页面
import doctorMain from '../views/doctor/doctorMain'
import docLogin from '../views/doctor/docLogin'
import docMoney from '../views/doctor/docMoney'
import docPatient from '../views/doctor/docPatient'
import docConsult from '../views/doctor/docConsult'
import doctorPerfectInfo from '../views/doctor/doctorPerfectInfo'
import doctorMenu from '../views/doctor/doctorMenu'
import docInfo from '../views/doctor/docInfo'
import docReservation from '../views/doctor/docReservation'
import docToBeiZhu from '../views/doctor/docToBeiZhu'
import docMyInfo from '../views/doctor/docMyInfo'
import docReservationDetail from '../views/doctor/docReservationDetail'
import docCancelReason from '../views/doctor/docCancelReason'
import docApplyForCash from '../views/doctor/docApplyForCash'
import docAddBankCard from '../views/doctor/docAddBankCard'
import docConsultSetting from '../views/doctor/docConsultSetting'
import docFaTongzhi from '../views/doctor/docFaTongzhi'
import docChoosePatient from '../views/doctor/docChoosePatient'
import docReportDetail from '../views/doctor/docReportDetail'
import docWorkHome from '../views/doctor/docWorkHome'
import docAppointmentSetting from '../views/doctor/docAppointmentSetting'
import docVisitInfo from '../views/doctor/docVisitInfo'
import docVisitDetail from '../views/doctor/docVisitDetail'
import docErweima from '../views/doctor/docErweima'


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
        {path: 'patientMenu', component: patientMenu},
        {path: 'userSignDeal', component: userSignDeal},
        {path: 'myDoctorList', component: myDoctorList},
        {path: 'settingVisitTime', component: settingVisitTime},
        {path: 'testReportIdentityCard', component: testReportIdentityCard},
        {path: 'reserveList', component: reserveList},
        {path: 'completeInfo', component: completeInfo},
        {path: 'visitRecord', component: visitRecord},
        {path: 'personalCenter', component: personalCenter},
        {path: 'selectTestReport', component: selectTestReport},
        {path: 'integralAccount', component: integralAccount},
        {path: 'subscribeList', component: subscribeList},
        {path: 'hospitalInfo', component: hospitalInfo},
        {path: 'doctorInfo/:id', component: doctorInfo},
        {path: 'selectTestReportCheck', component: selectTestReportCheck},
        {path: 'checkRecord', component: checkRecord},
        {path: 'clinicRecord', component: clinicRecord},
        {path: 'changeMainDoctor', component: changeMainDoctor},
        {path: 'payConfirm', component: payConfirm},
        {path: 'patientLogin', component: patientLogin},
        {path: 'patEmptyForMenu', component: patEmptyForMenu}
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
          path: 'docPatient',
          name: 'docPatient',
          component: docPatient
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
        },
        {
          path: 'docMyInfo',
          name: 'docMyInfo',
          component: docMyInfo
        },
        {
          path: 'docReservationDetail',
          name: 'docReservationDetail',
          component: docReservationDetail
        },
        {
          path: 'docToBeiZhu',
          name: 'docToBeiZhu',
          component: docToBeiZhu
        },
        {
          path: 'docCancelReason',
          name: 'docCancelReason',
          component: docCancelReason
        },
        {
          path: 'docFaTongzhi',
          name: 'docFaTongzhi',
          component: docFaTongzhi
        },
        {
          path: 'docChoosePatient',
            name: 'docChoosePatient',
          component: docChoosePatient
        },
        {
          path: 'docApplyForCash',
          name: 'docApplyForCash',
          component: docApplyForCash
        },
        {
          path: 'docAddBankCard',
          name: 'docAddBankCard',
          component: docAddBankCard
        },
        {
          path: 'docConsultSetting',
          name: 'docConsultSetting',
          component: docConsultSetting
        },
        {
          path: 'docReportDetail',
          name: 'docReportDetail',
          component: docReportDetail
        },
        {
          path: 'docWorkHome',
          name: 'docWorkHome',
          component: docWorkHome
        },
        {
          path: 'docAppointmentSetting',
          name: 'docAppointmentSetting',
          component: docAppointmentSetting
        },
        {
          path: 'docVisitDetail',
          name: 'docVisitDetail',
          component: docVisitDetail
        },
        {
          path: 'docVisitInfo',
          name: 'docVisitInfo',
          component: docVisitInfo
        },
        {
          path: 'docErweima',
          name: 'docErweima',
          component: docErweima
        }
      ],
    },
  ]
})
