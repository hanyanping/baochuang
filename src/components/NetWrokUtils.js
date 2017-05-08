/**
 * Created by admin on 2017/5/2.
 */

import axios from 'axios';
import {Toast} from 'mint-ui';
import {Indicator} from 'mint-ui';


// post 请求
function post(url, params, success, error) {
  if (url[0]=='/')
    url = process.env.API_HOST + url;
    // console.log('---',url);

  Indicator.open();
  axios.post(url, params).then(function (result) {
    Indicator.close();
    console.log(result)
    if (result.data.code == 0) {
      success(result);
    }
    else if (result.data.code == 2) { // 参数错误
      error(result);
    }
    else if (result.data.code == -1) {
      error(result);
      setAuthForNull(); // 清空当前公众号auth
    } else {
      error(result);
    }
  }).catch(function (network_error) {
    Indicator.close();
    console.log(network_error);
    Toast('网络不给力 ! 请稍后再试!' + network_error);
  })
}

function get(url, params, success, error) {
  Indicator.open();
  axios.get(url, params).then(function (result) {
    Indicator.close();
    if (result.data.code == 0) {
      success(result);
    }
    else if (result.data.code == -1) {
      error(result);
      setAuthForNull(); // 清空当前公众号auth
    } else {
      error(result);
    }
  }).catch(function (network_error) {
    Indicator.close();
    console.log(network_error);
    Toast('网络不给力 ! 请稍后再试!' + network_error);
  })
}

function setAuthForNull() {
  var path = window.location.href;
  if (path.indexOf('baochuan_p') != -1) {
    localStorage.setItem('baochuan_p_auth', '');
  } else if (path.indexOf('baochuan_d') != -1) {
    localStorage.setItem('baochuan_d_auth', '');
  }
}

//导出自定义函数和对象
export default {
  post,
  get
}


