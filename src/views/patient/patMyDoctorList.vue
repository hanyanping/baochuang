<!--我的医生列表-->
<style lang="scss" scoped>

  .mydoctorlist-empty-box {
    text-align: center;

  img {
    height: 60px;
    width: 60px;
    margin-top: 40vh;
  }

  .mydoctorlist-empty-to {
    width: 100px;
    height: 30px;
    margin: 20px auto;
    background: #5ac4b2;
    border-radius: 10px;
    padding: 2px 8px;
    line-height: 30px;
    color: white;
    font-size: 16px;
  }

  }

  .list-item {
    height: 203px;
    background-position: center center;
    background-size: cover;

  .bg-doctor-logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    right: 10px;
    top: 10px;
  }

  .doctor-info {
    padding-top: 50px;
    padding-left: 10%;
    line-height: 24px;

  .doctor-name {
    font-weight: bold;
    padding-bottom: 8px;
  }

  span {
    display: inline-block;
  }

  }
  .btn-menu {
    padding-left: 10%;
    padding-top: 20px;

  a {
    height: 36px;
    line-height: 36px;
    text-align: center;
    width: 40%;
    display: inline-block;
    border-radius: 20px;
  }

  .btn-consult {
    background: #75cab9;
    margin-right: 10%;
  }

  .btn-consult_disable {

    margin-right: 10%;
  }

  .btn-reserve {
    background: #13c5da;
  }

  .btn-reserve_disable {
    background: #cccccc;
  }

  }
  }

  .mint-msgbox-message {
    text-align: left;
  }

</style>

<template>

  <div class="device-height over-hidden ">
    <mt-loadmore
      :top-method="loadTop" ref="loadmore"
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      :autoFill="false">
      <div class="mydoctorlist-message-box">
        <div v-show="myDoctorList.length > 0">
          <div class="parent-width marginL15 marginR15 marginT15 marginB15" style="text-align: left"
               @click="showMessageBox">
            <i class="iconfont icon-wenhao1 color-grey fs20 paddingL10"></i>
            <span class="color-grey fs16">什么是主管医生</span>
          </div>
          <div @click="goDoctorInfo(item.id)" class="list-item pos-relate parent-width parent-margin circular-bead box-shade"
               v-for="item in myDoctorList" :style="{backgroundImage: 'url(' + item.doctor_img + ')'}">
            <!--<div class="list-item pos-relate parent-width parent-margin circular-bead box-shade"-->
            <!--v-for="item in myDoctorList" :style="{backgroundImage: 'url('+aa+')'}">-->

            <img class="pos-absolute bg-doctor-logo" src="../../assets/img/main-doctor.png"
                 v-show="item.relation == 2"/>
            <img class="pos-absolute bg-doctor-logo" src="../../assets/img/guarantee-doctor.png"
                 v-show="item.relation == 1"/>
            <div class="doctor-info">
              <span class="color-black fs22 doctor-name">{{item.name}}</span><br>
              <span class="color-grey">{{item.grade}}</span><br>
              <span class="color-grey">医院：{{item.name}}</span>
            </div>
            <div class="btn-menu">
              <a @click="toSendMsg()"
                 :class="{'btn-consult':consult_active, 'btn-consult_disable':!consult_active} "
                 class="color-white">发消息
              </a>
              <a @click="toSubscribe(item.id)"
                 :class="{'btn-reserve':subscribe_active, 'btn-reserve_disable':!subscribe_active} "
                 class="color-white">预约
              </a>
            </div>
          </div>
        </div>
      </div>
    </mt-loadmore>
    <div class="mydoctorlist-empty-box" v-show="myDoctorList.length <= 0">
      <img src="../../assets/img/phone.png">
      <p class="mydoctorlist-empty-to" @click="toSelectDoc()">选择医生</p>
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

  export default {
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
        doctor_id: ''
      }
    },
    mounted() {
      this.getMyDoctorList();
    },
    created(){
    },
    destroyed () {
      eventBus.$emit('doctor_id', this.doctor_id);
    },
    methods: {
      showMessageBox(){
        var str = '<div>签约医生在慢病管理期间，一对一为您提供检查报告解读、复诊提醒、咨询和预约服务。</div>';
        MessageBox({
          title: '',
          message: str,
          confirmButtonText: '我知道了'
        });
      },
      toSelectDoc(){
        this.$router.push({path: 'visitRecord'}) //跳转选择医生
      },
      toSendMsg(doctor_id){ //发送消息
        if (this.isPerfect) {
          this.$router.push({path: 'visitRecord'}) //跳转咨询列表
        } else {
          this.$router.push({path: 'completeInfo'}) //跳转完善信息
        }
      },
      toSubscribe(doctor_id){ //预约
        if (this.isPerfect) {
          console.log('doctor_id====' + doctor_id);
          this.doctor_id = doctor_id;
          this.$router.push({path: 'subscribeList'}) //跳转预约列表
        } else {
          this.$router.push({path: 'completeInfo'}) //跳转完善信息
        }
      },
      getMyDoctorList(){
        let that = this;
        var params = {
          authentication: that.authentication
        }
        netWrokUtils.post('/wx/baochuan_p/mydoctor', params, (result) => {
          that.myDoctorList = result.data.content.list;
          that.isPerfect = result.data.content.isPerfect;
          for (var i in that.myDoctorList) {
            if (that.myDoctorList[i].open_consult == 0) {
              that.consult_active = false;
            } else (that.myDoctorList[i].open_consult == 1)
            {
              that.consult_active = true;
            }
            if (that.myDoctorList[i].open_subscribe == 0) {
              that.subscribe_active = false;
            } else (that.myDoctorList[i].open_subscribe == 1)
            {
              that.subscribe_active = true;
            }
          }
        }, (error_result) => {
          Toast(error_result.data.msg);
        })
      },
      loadTop()
      {
      },
      loadBottom()
      {
      },
      goDoctorInfo(doctorId){
          alert(1);
          wx.closeWindow();
//          this.$router.push('doctorInfo/'+doctorId);
      }

    }
  }
</script>


