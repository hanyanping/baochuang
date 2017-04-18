// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import doctorRouter from './router/doctor-index'
import vueResource from 'vue-resource'
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
// import patientRouter from './router/patient-index'/

Vue.config.productionTip = false
Vue.use(vueResource)
Vue.http.options.emulateJSON = true;
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: doctorRouter,
  template: '<App/>',
  components: { App }
})
