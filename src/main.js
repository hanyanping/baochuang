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

  var path = window.location.href;
  // 从localStorage中获取不同平台的auth
  var auth = getAuthFromLS(path);

  // var auth = '4d89652b270cc60c30365868b229ca15'; // 测试使用
  // localStorage.clear();
  // alert('auth==='+auth);

  if (auth == null || auth == '' || auth == undefined) {
    // 从URL中获取auth , 对URL进行解析
    auth = getParameterByName('authentication');
    if (auth == null || auth == '' || auth == undefined) {
      console.log('未授权!');
      alert('auth===未授权');
      toLine(path); // 跳转url
    } else {
      alert('auth===已经授权');
      console.log('已经授权!');
      setAuthForLS(path,auth);
      next();
    }
  } else {
    console.log('已经授权!');
    next();
  }
});

// 跳转不同的授权url
function toLine(path) {
  if (path.indexOf('baochuan_p') != -1) {
    window.location.href = "http://testaiganneo.aiganyisheng.com/wx/baochuan_p/login";
  } else if (path.indexOf('baochuan_d') != -1) {
    window.location.href = "http://testaiganneo.aiganyisheng.com/wx/baochuan_d/login";
  }
}

// 从localStorage中获取不同平台的auth
function getAuthFromLS(path) {
  alert('getAuthFromLS==path==' + path);
  if (path.indexOf('baochuan_p') != -1) {
    alert('baochuan_p_auth==' + localStorage.getItem('baochuan_p_auth'));
    return localStorage.getItem('baochuan_p_auth');
  } else if (path.indexOf('baochuan_d') != -1) {
    alert('dd');
    return localStorage.getItem('baochuan_d_auth');
  }
}

// 不同平台设置不同的auth值
function setAuthForLS(path,auth) {
  if (path.indexOf('baochuan_p') != -1) {
    localStorage.setItem('baochuan_p_auth', auth);
  } else if (path.indexOf('baochuan_d') != -1) {
    localStorage.setItem('baochuan_d_auth', auth);
  }
}

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
window.eventBus = new Vue({
  el: '#app',
  router: rootRouter,
  template: '<App/>',
  components: {App}
})










