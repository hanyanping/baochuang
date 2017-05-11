<!--检查报告-输入身份证页-->
<template>
  <div class="testReportIdentityCard">
    <div class="testReportIdentityCard-box">
      <h2 class="testReportIdentityCard-head-box">请输入患者身份号:</h2>
      <div class="testReportIdentityCard-input-box">
        <input placeholder="请输入身份证" v-model="idCard" class="testReportIdentityCard-input"/>
        <div class="testReportIdentityCard-line"></div>
      </div>
      <div class="testReportIdentityCard-bottom-box">
        <p class="testReportIdentityCard-bottom-txt">请输入身份证号,获取您在保定市传染病医院的检查报告</p>
        <button v-if="isClick == true" @click="setReportIdentityCard()" class="toInfo">确 定</button>
        <button v-else disabled class="un-toInfo" style="">确 定</button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import {Toast} from 'mint-ui';
  import {MessageBox} from 'mint-ui';
  import {Indicator} from 'mint-ui';
  import netWrokUtils from '../../components/NetWrokUtils'
  import moment from 'moment/moment.js';
  import comConstant from '../../components/comConstant.js';


  var _idCard;
  export default {
    beforeRouteEnter (to, from, next) {
      // 调用接口 返回是否首次查询检查报告
      var params = {
        authentication: auth
      }
      netWrokUtils.post('/wx/baochuan_p/getuseridcard', params, (result) => {
        var idCard = result.data.content.idCard;
        _idCard = idCard;
        var is_show_his = result.data.content.isShowHis;
        if (is_show_his == 0) {
          next(true);
        } else {
//          this.$router.push({path: 'selectTestReportCheck'}) //跳转检查报告列表页面
//          next(vm=> {
//            vm.$router.push({path: 'selectTestReportCheck'}) //跳转检查报告列表页面
//            return false;
//          });
          next('/baochuan_p/selectTestReport')
        }
      }, (error_result) => {
        Toast(error_result.data.msg);
      })

//      let isLocation = false;
//      console.log('----', auth)
//      if (isLocation)
//        next(vm=> {
//          vm.$router.push('/');
//          return false;
//        });
//      else
//        next(true);
    },
    data () {
      return {
        myDoctorList: [],
        allLoaded: false,
        nowPage: 1,
        isShow: false,
        consult_active: false,
        subscribe_active: false,
        isPerfect: false,
        authentication: auth,
        doctor_id: '',
        isFirstSelect: false,
        idCard: _idCard,
        isClick: false,
        mobile: ''
      }
    },
    created(){
//      eventBus.$on('idCard', (thing) => {
//        this.idCard = thing;
//      })
    },
    mounted() {
    },
    destroyed () {
      eventBus.$emit('page_flag', comConstant.flag_testReportIdentityCard);
      eventBus.$emit('mobile', this.mobile);
    },
    methods: {
      setReportIdentityCard(){
        let that = this;
        var params = {
          authentication: auth,
          idcard: that.idCard
        }
        netWrokUtils.post('/wx/baochuan_p/gethismobile', params, (result) => {
          this.mobile = result.data.content.mobile;
          this.$router.push({path: 'patientLogin'}) //跳转填写手机验证码页面
          Toast(result.data.msg);
        }, (error_result) => {
          Toast(error_result.data.msg);
        })
      }
    },
    watch: {
      // 监控isClick的变化，并自动执行下面的函数
      'idCard' () {
        if (this.idCard != '') {
          this.isClick = true;
        } else {
          this.isClick = false;
        }
      }
    }
  }
</script>

<style lang="scss">
  .testReportIdentityCard {
    height: 100vh;
    width: 100%;
    background-image: url(../../assets/img/bgPerfectInfo.png);
    background-size: 100% 100%;
    position: fixed;

  .testReportIdentityCard-box {
    padding-left: 20px;
    padding-right: 20px;

  .testReportIdentityCard-head-box {
    color: #ffffff;
    margin-top: 70px;
  }

  .testReportIdentityCard-input-box {
    width: 100%;
    padding-top: 40px;

  .testReportIdentityCard-input {
    outline: none;
    font-size: 15px;
    color: white;
    background: rgba(0, 0, 0, 0);
  }

  .testReportIdentityCard-line {
    height: 1px;
    width: 100%;
    background: #ffffff;
    margin-top: 10px;
  }

  }

  .testReportIdentityCard-bottom-box {
    line-height: 20px;
    width: 100%;
    position: fixed;
    bottom: 50px;

  .testReportIdentityCard-bottom-txt {
    color: #fff;
    width: 90%;
    font-size: 15px;
  }

  .toInfo {
    display: inline-block;
    width: 88%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    background: rgba(82, 157, 152, 0.1);
    border: 1px solid #86B8B8;
    color: #ffffff;
    border-radius: 22px;
    margin-top: 15px;
    outline: none;
    font-size: 18px;
    box-shadow: 0 0 10px #fff;
  }

  .un-toInfo {
    display: inline-block;
    width: 88%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    background: rgba(82, 157, 152, 0.1);
    border: 1px solid #86B8B8;
    color: #ffffff;
    border-radius: 22px;
    margin-top: 15px;
    outline: none;
    font-size: 18px;
  }

  }
  }
  }

</style>
