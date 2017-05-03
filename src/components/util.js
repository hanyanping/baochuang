/**
 * Created by lihao on 2017-4-20.
 */
//封装自定义方法

import axios from 'axios';
import Toast from 'mint-ui'

const _phppost = ((url,data) => {
  request.post(url, {
    params: data
  }).then((result) => {
    if(result.code == 200){
      return result;
    }
  }).catch((error) => {
    Toast('网络不给力');
  })
});

const request = axios.create({
  baseURL: 'http://testaiganneo.aiganyisheng.com',
  timeout: 5000,
})


export default {
  _phppost,
}

//
// //将json转换成请求式字符串
// function formatPara(info){
//   let str = '';
//   for(let i in info){
//     str += i + '=' + info[i] + '&';
//   }
//   str = str.substr(0,str.length -1);
//   return str;
// }
//
// // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// //创建axios请求对象,规定基本参数
// const request =  axios.create({
//   baseURL: 'http://testaiganneo.aiganyisheng.com',
//   timeout: 5000,
//   header:{"content-type":'application/x-www-form-urlencoded'},
// });
//
//
// //导出自定义函数和对象
// export default {
//   formatPara,
//   request,
// }
