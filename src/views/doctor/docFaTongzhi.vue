<template>
  <div class="docFaTongzhi">
    <div class="xuanze-patient float-box" >
      发送至：
      <span class="patient-name" v-for="item in patientName">{{item}} ,</span>
      <span class="patient-num">({{patientNumber}}) 人</span>
      <span class="to-xuanze fr  iconfont icon-jiahao"  @click="toChoose"></span>
    </div>
    <div class="beizhu-box">
      <textarea name="" v-model="notify" id="disease-status" @onkeyup="countLength()" maxlength="150" class="zhengzhuang" placeholder="请输入备注信息">
      </textarea>
      <div class="beizhu-num" >
        <span class='two'><span id="textNum" >0</span>/500</span>
      </div>
    </div>
      <button v-if="active" class="button-box" @click="sendMessage">发送</button>
      <button v-else  class="nobutton-box" disabled>发送</button>
  </div>
</template>
<script>
  import axios from 'axios'
  import { Toast, MessageBox, Indicator, DatetimePicker } from 'mint-ui';
  import netWrokUtils from '../../components/NetWrokUtils'
  export default {
    name: 'docFaTongzhi',
    data () {
      return {
        authentication:'9abada2c209a05e2ebd462f7bf68c5cf',
        notify: '',
        active: false,
        patientNumber: '0',
        patientName: [],
        patientIdList:[]
      }
    },
    created() {
      document.getElementsByTagName('title')[0].innerHTML = '发送通知'
      this.patientName = window.localStorage.getItem('patientName').split(',');
      this.patientIdList = window.localStorage.getItem('patientId').split(',');
      for (let i in this.patientName) {
        if (this.patientName[i].length > 8) {
          this.patientName[i] = this.patientName[i].substring(0, 8) + '...'
        }
      }
      this.patientNumber = this.patientName.length;
    },
    watch: {
      'notify' () {
        this.notify = this.notify.replace(/(^\s+)|(\s+$)/g, "")
        var numberLength = this.notify.length;
        document.getElementById('textNum').innerHTML = numberLength;
        if (this.notify) {
          this.active = true
        } else {
          this.active = false
        }
      }
    },
    methods: {
      toChoose() {
        this.$router.push({path: '/baochuan_d/docChoosePatient'})
      },
      sendMessage() {
        var that = this;
        var params = {
          authentication: this.authentication,
          patientIdList: this.patientIdList,
          notify: this.notify
        }
        netWrokUtils.post('/wx/baochuan_d/sendnotice', params, (result) => {
          localStorage.removeItem('patientName');
          localStorage.removeItem('patientId');
      }, (error_result) => {
          Toast(error_result.data.msg);
        })
      }
    }
  }
</script>

<style lang="scss">
.docFaTongzhi{
  min-height:100vh;
  background: #FCFCFC;
  width:100%;
  padding-top:15px;
  .xuanze-patient{
    width:85%;
    margin:16px auto;
    padding:5px;
    background:#fff;
    border-radius:5px;
    -webkit-box-shadow:0 0 5px 5px #E5EBED;
    -moz-box-shadow:0 0 5px 5px #E5EBED;
    box-shadow:0 0 5px 5px #E5EBED;
    font-size:16px;
    color:#232323;
    line-height:38px;
    .patient-name,.patient-num{
      font-size:14px;
      color:#bbb;
    }
    .icon-jiahao{
      font-size:28px;
      color:#bbb;
    }
  }
  .beizhu-box{
    width:90%;
    margin:30px auto;
    .zhengzhuang{
      width: 100%;
      height: 200px;
      border: 1px solid #dedede;
      border-radius: 5px;
      text-indent: 5px;
      padding: 5px;
      line-height: 20px;
      font-size: 14px;
      color: #666;
      outline: none;
      box-sizing: border-box;
      -webkit-appearance: none;
      -webkit-box-shadow:0 0 5px 5px #E5EBED;
      -moz-box-shadow:0 0 5px 5px #E5EBED;
      box-shadow:0 0 5px 5px #E5EBED;
    }
    .beizhu-num{
      position:absolute;
      top:280px;
      left:75%;
      color:#bbb;
      font-size:15px;
    }
  }
}
</style>
