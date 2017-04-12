// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routerPatient from './router/patient_index'
// import routerDoctor from './router/doctor_index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: routerPatient,
  // router: routerDoctor,
  template: '<App/>',
  components: { App }
})
