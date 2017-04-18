<template>
  <div id="loginBox">
    <div class="docPhone inputBox">
      <!--<img :src='phone'/>-->
      <div class="iconFonts">
        <i class="icon iconfont icon-phone"></i>
      </div>
      <input type="tel"  maxlength="11" v-model="requestJson.phone" @focus="chn" placeholder="请输入手机号"/>
    </div >
    <div class="lineBox">
      <div class="line"></div>
    </div>
    <div class="codeBox">
      <div class="docCode ">
        <div class="iconFonts docCodeFont">
          <i class="icon iconfont  icon-anquan"></i>
          <input type="tel"  maxlength="6" class="codeInput" v-model="requestJson.code" placeholder="请输入验证码"/>
        </div>
        <a class="codeClose iconfont icon-close" @click="closeCode"></a>
        <div class="getCode" :class="{active: isCode}" @click="getCodes($event)">{{getCode}}</div>
      </div>
    </div>

    <div class="lineBox">
      <div class="line"></div>
    </div>
    <button class="toInfo" :class="{isButton: active}" @click="login">
      <label class="mint-button-text">登录</label>
    </button>
    <div class="" style="margin-bottom:10px;">
      <p class="loginXie" style="text-align:center;">
        <a href="#" class="loginXiyi" style="color:#009fe9;font-size:13px; padding-left:5px;">
          <span  style="color:#bbb;">点击登录即表示同意</span>
          《用户签约协议》
        </a>
      </p>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    name: 'docLogin',
    data () {
      return {
        phone:'../../assets/img/phone.png',
        code:'../../assets/img/phone.png',
        getCode:"获取验证码",
        time: 5,
        isCode: false,
        active: true,
        requestJson: {
            phone: '',
            code: ''
        }
      }
    },
    watch: {
        'requestJson.phone' () {
            if (this.requestJson.phone) {
              this.active = false
            } else {
              this.active = true
            }
        },
        'requestJson.code' () {
          if (this.requestJson.code) {
            this.active = false
          } else {
            this.active = true
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
            if (this.requestJson.phone && this.requestJson.code) {
              Toast('必填字段不能为空！')
            } else {
                let _this = this
                this.$http.post('http://testapi.aiganyisheng.net/public/patient_login',this.requestJson)
                  .then((result) => {
                      console.log(result)
                      Toast('登录成功！')
                      setTimeout(function () {
                        _this.$router.push('/doctor')
                      }, 2000)
                  }, (err) => {
                      console.log(err)
                  })
            }
        },
        //  获取验证码
      getCodes(el) {
            var t = setInterval(() => {
                if (this.time >= 0) {
                    this.time--
                    el.target.innerHTML = this.time + '后刷新'
                    this.isCode = true
                }
                if (this.time === 0) {
                    clearInterval(t)
                    this.time = 5
                    el.target.innerHTML = '重获验证码'
                    this.isCode = false
                }
            }, 1000)
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
    width:90%;
    background:#fff;
    margin:0 auto;
  }
  #loginBox .iconFonts{
    line-height:50px;
    color:#9BD3D0;
    background:#529D98;
  }
  #loginBox input{
    border:none;
    font-size:16px;
    color:#9BD3D0;
    -webkit-appearance:none;
    padding-left:10px;
    background:#529D98;
  }
  .codeBox{
    width:100%;
    padding:0 16px;
    background:#529D98;
  }
  .codeInput{
    height:50px;
   line-height:50px;
  }
  input::-webkit-input-placeholder{
    color:#9BD3D0;
  }
  .inputBox{
    position: relative;
    display:flex;
    flex:1;
    height:50px;
    width:100%;
    padding:0 16px;
    text-align: center;
    background:#529D98;
  }
  .docCode{
    display:flex;
    justify-content: space-between;

  }
  .getCode{
    line-height:50px;
    font-size:15px;
    color:#9BD3D0;
  }
 #loginBox .icon-phone, .icon-anquan{
   font-size:24px;
 }
  .icon-close {
    position: absolute;
    background: #CADCE1;
    border-radius: 50%;
    top: 10%;
    left: 50%;

  }
  .getCode.active {
    background: #000;
  }
  .toInfo{
    display: block;
    width: 90%;
    height:45px;
    margin: auto;
    background:#529D98;
    color: #ffffff;
    border:1px solid #64AAA8;
    border-radius:22px;
    margin-top:25px;
  }
  .toInfo.isButton {
    background:#555555;
  }

</style>
