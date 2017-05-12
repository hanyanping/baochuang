/**
 * Created by admin on 2017/5/2.
 */

import axios from 'axios';
import {Toast} from 'mint-ui';
import {Indicator} from 'mint-ui';


/**
 * post 请求, 带 Indicator
 * @param url
 * @param params
 * @param success
 * @param error
 */
function post(url, params, success, error) {
  if (url[0] == '/')
    url = process.env.API_HOST + url;

  Indicator.open();
  axios.post(url, params).then(function (result) {
    Indicator.close();
    // console.log(result)
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
};

/**
 * 去除Indicator post
 * @param url
 * @param params
 * @param success
 * @param error
 */
function postConsult(url, params, success, error) {
  if (url[0] == '/')
    url = process.env.API_HOST + url;

  axios.post(url, params).then(function (result) {
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
};

/**
 * post 请求  直接返回数据是 html页面
 * @param url
 * @param params
 * @param success
 * @param error
 */
function postHtml(url, params, success, error) {
  if (url[0] == '/')
    url = process.env.API_HOST + url;

  Indicator.open();
  axios.post(url, params).then(function (result) {
    Indicator.close();
    console.log(result)
    success(result);
  }).catch(function (network_error) {
    Indicator.close();
    console.log(network_error);
    Toast('网络不给力 ! 请稍后再试!' + network_error);
  })
};

/**
 * get 请求 带Indicator
 * @param url
 * @param params
 * @param success
 * @param error
 */
function get(url, params, success, error) {
  if (url[0] == '/')
    url = process.env.API_HOST + url;

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

/**
 * 设置auth
 */
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
  get,
  postConsult,
  postHtml
}


