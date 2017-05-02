// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import rootRouter from './router/router-index'

//引入插件与第三方库
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
import util from './components/util'



//实例化方法
Vue.config.productionTip = false;
Vue.use(MintUI);

Vue.prototype.util = util;

rootRouter.beforeEach(function (to, from, next) {
  // 从localStorage中获取auth
  // var auth = localStorage.getItem('auth');
  var auth = 'fff'; // 测试使用
  // localStorage.clear();
  // alert('auth==='+auth);
  if (auth == null || auth == '' || auth == undefined) {
    // alert('从URL中获取auth , 对URL进行解析');
    // 从URL中获取auth , 对URL进行解析
    auth = getParameterByName('authentication');
    if (auth == null || auth == '' || auth == undefined) {
      console.log('未登录!');
      // alert('未登录!');
      window.location.href = "http://testaiganneo.aiganyisheng.com/wx/baochuan_p/login"
    } else {
      console.log('已经登录!');
      // alert('url+已经登录!')
      localStorage.setItem('auth', auth);
      next();
    }
  } else {
    console.log('已经登录!');
    // alert('已经登录!');
    next();
  }
});

function getParameterByName(name) {
  var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

function getParameterByIndexOf() {
  var url = location.search; //获取url中"?"符后的字串
  // var theRequest = new Object();
  console.log('url===' + url);
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    var strs = str.split("&");
    // for (var i = 0; i < strs.length; i++) {
    //   theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    // }
    auth = str.replace('auth=', '');
    console.log('auth===' + auth);
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: rootRouter,
  template: '<App/>',
  components: {App}
})










