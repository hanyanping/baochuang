/**
 * Created by admin on 2017/4/18.
 */
import Vue from 'vue'
import Router from 'vue-router'

// 路由
import router_index from '../views/router_index'
import baochuan_d_rootRouter from '../components/doctorIndex'
import baochuan_p_rootRouter from '../components/patientIndex'
import payCommon from '../components/payCommon.vue'

// 具体页面
// 公共页面

// 患者端页面
import patientMenu from '../views/patient/patPatientMenu';
import userSignDeal from '../views/patient/patUserSignDeal'; // 用户签约协议
import myDoctorList from '../views/patient/patMyDoctorList';  //我的医生列表
import testReportIdentityCard from '../views/patient/patTestReportIdentityCard'; // 检查报告输入身份证页面
import settingVisitTime from '../views/patient/patSettingVisitTime'; // 设置复诊时间页面
import reserveList from  '../views/patient/patReserveList';  //预约订单列表
import completeInfo from '../views/patient/patCompleteInfo'; // 完善信息页面
import visitRecord from '../views/patient/patVisitRecord';  // 复诊记录页面
import personalCenter from '../views/patient/patPersonalCenter';  // 个人中心页面
import selectTestReport from '../views/patient/patSelectTestReport'; // 检查化验单列表页
import integralAccount from '../views/patient/patIntegralAccount'; // 积分账户
import subscribeList from '../views/patient/patSubscribeList';  // 预约列表页面
import hospitalInfo from '../views/patient/patHospitalInfo'; // 医院信息页面
import doctorInfo from '../views/patient/patDoctorInfo'; // 医生主页
import selectTestReportCheck from '../views/patient/patSelectTestReportCheck'; // 检查报告选择页面
import checkRecord from '../views/patient/patCheckRecord'; // 就诊详情
import clinicRecord from '../views/patient/patClinicRecord'; // 就诊记录页面
import changeMainDoctor from '../views/patient/patChangeMainDoctor'; // 更好主管医生页面
import payConfirm from '../views/patient/patPayConfirm'; // 订单确认页面
import patientLogin from '../views/patient/patPatientLogin';  //登录页, 检查报告验证码页
import patEmptyForMenu from '../views/patient/patEmptyForMenu';
import patSelectTestReportDetail from '../views/patient/patSelectTestReportDetail'; // 检查报告详情页
import patConsultOrderList from '../views/patient/patConsultOrderList'; // 咨询订单页


// 医生端页面
import doctorMain from '../views/doctor/doctorMain'
import docLogin from '../views/doctor/docLogin'//登录
import docMoney from '../views/doctor/docMoney'//我的钱包
import docPatient from '../views/doctor/docPatient'//我的患者
import docConsult from '../views/doctor/docConsult'//咨询 聊天室
import doctorPerfectInfo from '../views/doctor/doctorPerfectInfo'//完善个人信息
import doctorMenu from '../views/doctor/doctorMenu'//菜单
import docInfo from '../views/doctor/docInfo'//我的信息
import docReservation from '../views/doctor/docReservation'//预约列表
import docToBeiZhu from '../views/doctor/docToBeiZhu'//填写备注信息
import docMyInfo from '../views/doctor/docMyInfo'//个人信息
import docReservationDetail from '../views/doctor/docReservationDetail'//预约详情
import docCancelReason from '../views/doctor/docCancelReason'//预约取消理由
import docApplyForCash from '../views/doctor/docApplyForCash'//申请提现
import docAddBankCard from '../views/doctor/docAddBankCard'//添加银行卡
import docConsultSetting from '../views/doctor/docConsultSetting'//咨询设置
import docFaTongzhi from '../views/doctor/docFaTongzhi'//发送通知
import docChoosePatient from '../views/doctor/docChoosePatient'//选择患者
import docReportDetail from '../views/doctor/docReportDetail'//化验单详情
import docWorkHome from '../views/doctor/docWorkHome'//工作室
import docAppointmentSetting from '../views/doctor/docAppointmentSetting'//预约设置
import docVisitInfo from '../views/doctor/docVisitInfo'//复诊信息
import docVisitDetail from '../views/doctor/docVisitDetail'//就诊信息
import docErweima from '../views/doctor/docErweima'//医生二维码


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: router_index,
    },
    {
      path: '/common_p/payment',
      component: payCommon,
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
        {path: 'payConfirm/:type', component: payConfirm},
        {path: 'patientLogin', component: patientLogin},
        {path: 'patEmptyForMenu', component: patEmptyForMenu},
        {path: 'patSelectTestReportDetail', component: patSelectTestReportDetail},
        {path: 'patConsultOrderList', component: patConsultOrderList}
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
