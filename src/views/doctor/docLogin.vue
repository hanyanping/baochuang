<template>
  <div id="loginBox">
    <div class="docPhone inputBox">
      <div class="fontBox">
        <i class="icon iconfont icon-shouji"></i>
      </div>
      <input type="tel"  maxlength="11" v-model="requestJson.phone" @focus="chn" placeholder="请输入手机号"/>
    </div >
    <div class="lineBox">
      <div class="line"></div>
    </div>
    <div class="codeBox">
      <div class="docCode ">
        <div class="fontBox docCodeFont">
          <i class="icon iconfont  icon-anquan"></i>
          <input type="tel"  maxlength="6" class="codeInput" v-model="requestJson.code" placeholder="请输入验证码"/>
          <i class="codeClose iconfont icon-close2" @click="closeCode"></i>
        </div>
        <button class="getCode" :class="{active: isCode}" @click="getCodes($event)">{{getCode}}</button>
      </div>
    </div>
    <div class="lineBox">
      <div class="line"></div>
    </div>
    <button class="toInfo" :class="{'isButton': active}" @click="login">
      <label class="mint-button-text">登录</label>
    </button>
    <div class="" style="margin-top:10px;margin-left:5%;">
      <p class="loginXie" >
        <a href="#" class="loginXiyi" style="color:#46FDE4;font-size:14px; padding-left:5px;">
          <span  style="color:#D7E7E2;">点击登录即代表同意</span>
          《用户签约协议》
        </a>
      </p>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import axios from 'axios'

  export default {
    name: 'docLogin',
    data () {
      return {

        getCode:"获取验证码",
        time: 5,
        isCode: false,
        active: false,
        code: '',
        authentication:'3437d5824a079a48da95ef2d5ab419b3',
        requestJson: {
            phone: '',
            code: ''
        }
      }
    },
    created() {
      document.getElementsByTagName('title')[0].innerHTML = '验证手机';
      axios.get('/api/wx/baochuan_d/myinfo', {
        params: {
          authentication:this.authentication
      }
      }).then((result) => {
        console.log(result)
      })

    },
    watch: {
        'requestJson.phone' () {
            if (this.requestJson.phone) {
              this.active = true
            } else {
              this.active = false
            }
        },
        'requestJson.code' () {
          if (this.requestJson.code) {
            this.active = true
          } else {
            this.active = false
          }
        }
    },
    methods: {
        //  是否能够提交
        isLogin() {
          if (this.requestJson.phone && this.requestJson.code) {
              this.active = false
          }
        },
        //  登陸
        login() {
            if (this.requestJson.code != this.code) {
              Toast('必填字段不能为空！')
              return false
            } else {
                let _this = this
              axios.get('/wx/mobile/sendcode',{ params: {
                mobile: this.requestJson.phone
              }
              }).then((result) => {
                console.log(result)
            })
            }
        },
//                this.$http.post('http://testapi.aiganyisheng.net/public/patient_login',this.requestJson)
//                .then((result) => {
//                  console.log(result)
//                  Toast('登录成功！')
//                  setTimeout(function () {
//                    _this.$router.push('/docMoney')
//                  }, 2000)
//                }, (err) => {
//                  console.log(err)
//                })

        //  获取验证码
      getCodes(el) {
        if(!(/^1[34578]\d{9}$/.test(this.requestJson.phone))){
          Toast('请输入正确手机号！')
          return false
        }else{
            let _that = this
            if (this.time >= 0 && this.isCode) {
                return false
            } else {
              this.isCode = true
              axios.get('/api/wx/mobile/sendcode',{params: {
                mobile: this.requestJson.phone
              }
              }).then((result) => {
                console.log(result)
              })
              clearInterval(t);       //停止计时器
              var t = setInterval(function () {
                if (_that.time >= 0) {
                  _that.time--
                  el.target.innerHTML = _that.time + '后刷新'
                }
                if (_that.time === 0) {
                  _that.time = 5;
                  _that.isCode = false;
                  clearInterval(t);       //停止计时器
                  el.target.innerHTML = '重获验证码'
                }
              }, 1000)
            }
        }

      },
      //  删除验证码
      closeCode() {
            this.requestJson.code = ''
      },
      chn() {
            this.requestJson.phone = ''
      }
    }
  }
</script>

<style>
  html{
    height:100%;
    width:100%;
  }
  #loginBox{
  height:100vh;
  width:100%;
  background-image:url(../../assets/img/bacLogin.png);
  background-size:100% 100%;
   position: fixed;
}
  .lineBox{
    height:1px;
    width:100%;
    background:#529D98;
  }
  .lineBox .line{
    height:1px;
    width:90%;
    margin:0 auto;
    background:#86B8B8;
  }
  #loginBox .fontBox{
    line-height:50px;
    color:#9BD3D0;
    background:#529D98;
  }
  #loginBox input{
    outline: none;
    border:none;
    font-size:16px;
    color:#9BD3D0;
    -webkit-appearance:none;
    padding-left:10px;
    background:#529D98;

  }
  input::-webkit-input-placeholder {
    color:#D7E7E2;
    font-size:16px;
  }
  .codeBox{
    width:100%;
    padding:0 5%;
    background:#529D98;
  }
  .codeInput{
    height:50px;
   line-height:50px;
  }
  .docPhone{
    position: relative;
    display:flex;
    flex:1;
    width:100%;
    padding:40px 5% 0;
    text-align: center;
    background:#529D98;
  }
  .docCode{
    display:flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
  }
  .docCodeFont{
    display:flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    color: #D7E7E2;
    background: #529D98;
    max-width:65%;
    min-width:65%;
  }
  .getCode{
    padding-left:5px;
    line-height:50px;
    font-size:15px;
    color:#D7E7E2;
    border:none;
    background:#529D98;
    outline: none;
  }
 #loginBox .icon-shouji, .icon-anquan{
   font-size:22px;
   color:#fff;
 }
  .codeClose {
    height:18px;
    font-size:16px;
    display:inline-block;
    margin-left: -30%;
    color:#CAE1DF;
  }
  .getCode.active {
    background:#529D98;
  }
  .toInfo{
    display: block;
    width: 90%;
    height:45px;
    margin:25px auto;
    background:#529D98;
    color: #ffffff;
    border:1px solid #86B8B8;
    border-radius:22px;
    outline:none;
    font-size:18px;
  }
  .toInfo.isButton {
    background:rgba(82,157,152, 0.1);
    border:1px solid #86B8B8;
    /*background:#7e8c8d;*/
    -webkit-box-shadow:0 0 10px #fff;
    -moz-box-shadow:0 0 10px #fff;
    box-shadow:0 0 10px #fff;
  }

</style>
