/**
 * Created by lihao on 2017-4-20.
 */
//封装自定义方法

import axios from 'axios';



//将json转换成请求式字符串
function formatPara(info){
  let str = '';
  for(let i in info){
    str += i + '=' + info[i] + '&';
  }
  str = str.substr(0,str.length -1);
  return str;
}

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//创建axios请求对象,规定基本参数
const request =  axios.create({
  baseURL: 'http://testaiganneo.aiganyisheng.cn/',
  timeout: 5000,
  header:{"content-type":'application/x-www-form-urlencoded'},
});


//导出自定义函数和对象
export default {
  formatPara,
  request,
}
