<!-- 预约详情 -->
<template>
  <div class="doc-rev-detail-container-box">
    <div class="doc-rev-detail-top-box">
      <div class="doc-rev-detail-top-status-box">
        <span>服务状态</span>
        <span class="doc-rev-detail-top-status-span" style="color: #d50202" v-if="content.status_value=='待确认'">{{content.status_value}}</span>
        <span class="doc-rev-detail-top-status-span" style="color: #63a910" v-else-if="content.status_value=='已确认'">{{content.status_value}}</span>
        <span class="doc-rev-detail-top-status-span" style="color: #666666" v-else>{{content.status_value}}</span>
      </div>

      <div class="doc-rev-detail-top-patientinfo-box">
        <div>
          <span>患者信息</span>
        </div>
        <div>
          <span>{{content.patient_name}}</span>
          <span v-if="content.sex==1">男</span>
          <span v-else>女</span>
          <span>{{content.age}}岁</span>
          <span>{{content.disease_name}}</span>
        </div>
      </div>

      <!--<div class="doc-rev-detail-top-patientinfo-box">-->
        <!--<div>-->
          <!--<span>预约目的</span>-->
        <!--</div>-->
        <!--<div>-->
          <!--<span>开药</span>-->
        <!--</div>-->
      <!--</div>-->

      <div class="doc-rev-detail-top-revtime-box">
        <div>
          <span>预约时间</span>
        </div>
        <div>
          <span>{{content.appointment_date}}</span>
          <span>{{content.week}}</span>
          <span v-if="content.am_or_pm==0">上午</span>
          <span v-else>下午</span>
        </div>
      </div>
    </div>

    <div class="doc-rev-detail-mid-box">
      <div class="doc-rev-detail-mid-title">
        <span class="iconfont icon-laba"></span>
        <span>就诊前一天22点失效，无法确认</span>
      </div>
    </div>

    <button class="doc-rev-detail-bottom-button" @click="confirmReceive" :class="{'no-show':!show}">确认接收</button>
    <a class="fr doc-rev-detail-bottom-nobutton" @click="pushCancelReason" :class="{'no-show':!show}">暂不接收</a>
  </div>
</template>

<script>
  import axios from 'axios'
  import netWrokUtils from '../../components/NetWrokUtils'
  import {Indicator} from 'mint-ui';
  import {Toast} from 'mint-ui';

  export default {
    name : 'docReservationDetail',
    data () {
      return {
        authentication: '9abada2c209a05e2ebd462f7bf68c5cf',
        order_id: '',
        content: {},
        show: ''
      }
    },

    created () {
//      eventBus.$on('some', (thing) => this.order_id = thing)
//      console.log(this.order_id);

//      eventBus.$on('some', function(val) {
//        console.log(val);
//      })
//      eventBus.$on('some', (thing) => {
//        this.order_id = thing;
//      })
      document.getElementsByTagName('title')[0].innerHTML = '预约详情';
    },

    mounted () {
      this.getReservationDetail();
    },


    methods: {
      // 获取预约详情数据
      getReservationDetail () {
        Indicator.open();
        let that = this;
        var params = {
          authentication: that.authentication,
          order_id: window.localStorage.getItem('order_id')
        };
        netWrokUtils.post('/wx/baochuan_d/getappointmentdetail', params, function (success) {
          Indicator.close();
          console.log(success);
          that.content = success.data.content;
          if (that.content.status_value == '待确认') {
            that.show = true;
          }
        }, function (failure) {
          Indicator.close();
          console.log(failure);
          Toast('网络异常,请稍后再试');
        });
      },

      // 确认接收
      confirmReceive () {
        console.log('1111');
        Indicator.open();
        let that = this;
        var params = {
          authentication: that.authentication,
          orderId: window.localStorage.getItem('order_id')
        };
        netWrokUtils.post('/wx/baochuan_d/confirmappointment', params, (success) => {
          Indicator.close();
          console.log(success);
          this.$router.push({ path: "/baochuan_d/docReservation"});

        }), (failure) => {
          Indicator.close();
          console.log(failure);
        };
      },

      // 跳转取消预约
      pushCancelReason () {
        this.$router.push({ path: "/baochuan_d/docCancelReason"});
      }

    }
  }
</script>

<style lang="scss">
  .doc-rev-detail-container-box {
    background-color: #f4f4f4;
    overflow: hidden; /* 解决高度塌陷问题(背景色不能充满屏幕,有空白)*/
    height: 100vh;
    width: 100%;

    .doc-rev-detail-top-box {
      font-size: 14px;
      margin: 20px 15px 0;
      background-color: #fff;
      box-shadow:0px 0px 10px #7e8c8d; /* 边框阴影效果 */
      border-radius: 3px;

      .doc-rev-detail-top-status-box {
        padding: 22px 0px;
        margin: 5px 10px;
        padding-bottom: 20px;
        border-bottom: 1px dashed #06b80a;

        .doc-rev-detail-top-status-span {
          float: right;
        }
      }
      .doc-rev-detail-top-patientinfo-box {
        padding: 22px 0px;
        margin: 5px 10px;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        padding-bottom: 20px;
        border-bottom: 1px dashed #06b80a;
      }

      .doc-rev-detail-top-revtime-box {
        padding: 22px 0px;
        margin: 5px 10px;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
      }
    }
    .doc-rev-detail-mid-box {
      font-size: 14px;
      margin: 12px 15px 0;
      background-color: #fff;
      box-shadow:0px 0px 10px #7e8c8d; /* 边框阴影效果 */
      border-radius: 3px;

      .doc-rev-detail-mid-title {
        padding: 18px 0px;
        margin: 0px 8px;

        .icon-laba {
          color: #e1bd2f;
        }
      }
    }
    .doc-rev-detail-bottom-button {
      display: block;
      width: 90%;
      height:45px;
      margin: auto;
      background:#62a39c;
      border:1px solid #86B8B8;
      border-radius:22px;
      margin-top:85px;
      outline: none;
      font-size: 16px;
      color: #fff;
    }
    .doc-rev-detail-bottom-nobutton {
      color: #60A39B;
      padding-top: 35px;
      padding-right: 28px;
      font-size: 17px;
    }
    .no-show {
      display: none;
    }
  }
</style>
