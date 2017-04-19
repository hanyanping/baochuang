// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
import { Loadmore } from 'mint-ui';
import rootRouter from './router/router-index'

Vue.config.productionTip = false
Vue.use(vueResource)
Vue.http.options.emulateJSON = true;
Vue.use(MintUI)
Vue.component(Loadmore.name, Loadmore);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: rootRouter,
  template: '<App/>',
  components: { App }
})
