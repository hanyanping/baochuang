// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import rootRouter from './router/router-index';

//引入插件与第三方库
import 'mint-ui/lib/style.css';
import MintUI from 'mint-ui';
import util from 'components/util';


//实例化方法
Vue.config.productionTip = false;
Vue.use(MintUI);
Vue.prototype.util = util;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: rootRouter,
  template: '<App/>',
  components: { App }
})
