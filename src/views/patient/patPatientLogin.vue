<!-- 登录页, 检查报告验证码页-->
<style scoped>
  html {
    height: 100%;
    width: 100%;
  }

  #loginBox {
    height: 100vh;
    width: 100%;
    background-image: url(../../assets/img/bacLogin.png);
    background-size: 100% 100%;
    position: fixed;
  }

  .lineBox {
    height: 1px;
    width: 100%;
    background: #529D98;
  }

  .lineBox .line {
    height: 1px;
    width: 90%;
    margin: 0 auto;
    background: #86B8B8;
  }

  #loginBox .fontBox {
    line-height: 50px;
    color: #9BD3D0;
    background: #529D98;
  }

  #loginBox input {
    outline: none;
    border: none;
    font-size: 16px;
    color: #9BD3D0;
    -webkit-appearance: none;
    padding-left: 10px;
    background: #529D98;

  }

  input::-webkit-input-placeholder {
    color: #D7E7E2;
    font-size: 16px;
  }

  .codeBox {
    width: 100%;
    padding: 0 5%;
    background: #529D98;
  }

  .codeInput {
    height: 50px;
    line-height: 50px;
  }

  .docPhone {
    position: relative;
    display: flex;
    flex: 1;
    width: 100%;
    padding: 40px 5% 0;
    text-align: center;
    background: #529D98;
  }

  .docCode {
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
  }

  .docCodeFont {
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    color: #D7E7E2;
    background: #529D98;
    max-width: 65%;
    min-width: 65%;
  }

  .getCode {
    padding-left: 5px;
    line-height: 50px;
    font-size: 15px;
    color: #D7E7E2;
    border: none;
    background: #529D98;
    outline: none;
  }

  #loginBox .icon-shouji, .icon-anquan {
    font-size: 22px;
    color: #fff;
  }

  .codeClose {
    height: 18px;
    font-size: 16px;
    display: inline-block;
    margin-left: -30%;
    color: #CAE1DF;
  }

  .getCode.active {
    background: #529D98;
  }

  .toInfo {
    display: block;
    width: 90%;
    height: 45px;
    margin: 25px auto;
    background: #529D98;
    color: #ffffff;
    border: 1px solid #86B8B8;
    border-radius: 22px;
    outline: none;
    font-size: 18px;
  }

  .toInfo.isButton {
    background: rgba(82, 157, 152, 0.1);
    border: 1px solid #86B8B8;
    /*background:#7e8c8d;*/
    -webkit-box-shadow: 0 0 10px #fff;
    -moz-box-shadow: 0 0 10px #fff;
    box-shadow: 0 0 10px #fff;
  }

</style>

<template>
  <div id="loginBox">
    <div class="docPhone inputBox">
      <div class="fontBox">
        <i class="icon iconfont icon-shouji"></i>
      </div>
      <input v-if="requestJson.isCompile == true" type="tel" maxlength="11" v-model="requestJson.phone" @focus="chn"
             placeholder="请输入手机号"/>
      <input v-else type="tel" maxlength="11" v-model="requestJson.tempPhone" placeholder="无手机号可用"
             readonly="readonly"/>
    </div>
    <div class="lineBox">
      <div class="line"></div>
    </div>
    <div class="codeBox">
      <div class="docCode ">
        <div class="fontBox docCodeFont">
          <i class="icon iconfont  icon-anquan"></i>
          <input type="tel" maxlength="6" class="codeInput" v-model="requestJson.code" placeholder="请输入验证码"/>
          <i class="codeClose iconfont icon-close2" @click="closeCode"></i>
        </div>
        <button class="getCode" :class="{active: isCode}" @click="getCodes($event)">{{getCode}}</button>
      </div>
    </div>
    <div class="lineBox">
      <div class="line"></div>
    </div>
    <button v-show="requestJson.isCompile == true" class="toInfo" :class="{'isButton': active}" @click="login">
      <label class="mint-button-text">{{button_name}}</label>
    </button>
    <button v-show="requestJson.isCompile == false" class="toInfo" :class="{'isButton': active}"
            @click="checkhismobile">
      <label class="mint-button-text">{{button_name}}</label>
    </button>
    <div v-show="requestJson.isCompile == true" style="margin-top:10px;margin-left:5%;">
      <p class="loginXie">
        <a href="#" class="loginXiyi" style="color:#46FDE4;font-size:14px; padding-left:5px;">
          <span style="color:#D7E7E2;">点击登录即代表同意</span>
          《用户签约协议》
        </a>
      </p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import {Toast} from 'mint-ui';
  import netWrokUtils from '../../components/NetWrokUtils'
  import moment from 'moment/moment.js';
  import comConstant from '../../components/comConstant.js';

  export default {
    data () {
      return {
        getCode: "获取验证码",
        time: 180,
        isCode: false,
        active: false,
        code: '',
        authentication: auth,
        flag_testReportIdentityCard: false,
        requestJson: {
          phone: '',
          code: '',
          isCompile: true, // 是否可以编辑
          tempPhone: ''
        },
        button_name: '登  录',
        page_flag: ''
      }
    },
    created(){
      eventBus.$on('page_flag', (thing) => {
        this.page_flag = thing;
        if (comConstant.flag_testReportIdentityCard == thing || comConstant.flag_clinicRecord == thing) {
          // 从检查报告,从就诊记录  到输入身份证页来的
          this.button_name = '身份核实';
          this.requestJson.isCompile = false;
        }
      })
      eventBus.$on('mobile', (thing) => {
        var temp_1 = thing.substring(0, 3);
        var temp_2 = thing.substring(7, 11);
        var new_mobile = temp_1 + "****" + temp_2;
        this.requestJson.phone = thing;
        this.requestJson.tempPhone = new_mobile;
      })
    },
    mounted() {
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
      //  获取验证码
      getCodes(el) {
        if (!(/^1[34578]\d{9}$/.test(this.requestJson.phone)) && this.requestJson.isCompile) {
          Toast('请输入正确手机号！');
          return false
        } else {
          let _that = this;
          if (this.time >= 0 && this.isCode) {
            return false
          } else {
            this.isCode = true;
            var params = {
              mobile: this.requestJson.phone
            }
            netWrokUtils.post('/wx/mobile/sendcode', params, (result) => {
              Toast(result.data.msg);
            }, (error_result) => {
              Toast(error_result.data.msg);
            })

            clearInterval(t);       //停止计时器
            var t = setInterval(function () {
              if (_that.time >= 0) {
                _that.time--;
                el.target.innerHTML = _that.time + '（s）'
              }
              if (_that.time === 0) {
                _that.time = 180;
                _that.isCode = false;
                clearInterval(t);       //停止计时器
                el.target.innerHTML = '重获验证码'
              }
            }, 1000)
          }
        }
      },

      //  验证登录
      login() {
        if (this.requestJson.code == '' || this.requestJson.code.length != 6) {
          Toast('请输入正确验证码！');
          return false
        } else {
          let _this = this;
          var params = {
            authentication: auth,
            mobile: _this.requestJson.phone,
            code: _this.requestJson.code
          }
          netWrokUtils.post('/wx/baochuan_p/checkmobilecode', params, (result) => {
            Toast(result.data.msg);
            this.$router.push({path: 'completeInfo'}) //跳转完善信息页面
          }, (error_result) => {
            Toast(error_result.data.msg);
          })
        }
      },

      //  删除验证码
      closeCode() {
        this.requestJson.code = ''
      },

      //清空已有手机号
      chn() {
        this.requestJson.phone = ''
      },

      // 验证手机号和身份证号去拿His数据
      checkhismobile(){
        let that = this;
        var params = {
          authentication: auth,
          idcard: that.idCard,
          mobile: that.requestJson.phone,
          vercode: that.requestJson.code
        }
        netWrokUtils.post('/wx/baochuan_p/checkhismobile', params, (result) => {
          if (this.page_flag == comConstant.flag_testReportIdentityCard) {
            this.$router.push({path: 'selectTestReport'}) //跳转检查报告页面
          } else if (this.page_flag == comConstant.flag_clinicRecord) {
            this.$router.push({path: 'clinicRecord'}) //跳转就诊记录页面
          }
          Toast(result.data.msg);
        }, (error_result) => {
          Toast(error_result.data.msg);
        })
      }
    }
  }
</script>

