<!-- 个人中心 -->
<template>
  <div class="doc-info-box">
    <div class="infoHeader">
      <div class="headerBox" @click="pushMyInfo">
        <div class="headerLeft">
          <img class="infoImg" :src="data.content.doctor_img">
          <div class="headerInfo">
            <div class="docName">{{data.content.doctor_name}}
              <span class="docZhicheng">{{data.content.grade}}</span>
            </div>
            <div class="docHosipital">{{data.content.hospital}}</div>
          </div>
        </div>
        <div class="headerRight iconfont icon-jiantou"></div>
      </div>
    </div>
    <div class="info-container">
      <div class="info-box">
        <div class="info-set" @click="pushConsultSett">
          <div class="consult-set">咨询设置</div>
          <div class="consult-right">
            <span style="font-size:15px;" v-if="consult_status === 1">已开启</span>
            <span style="font-size:15px;" v-else="">未开启</span>
            <i class="iconfont icon-jiantou"></i>
          </div>
        </div>
        <div class="info-set" @click="pushAppointSett">
          <div class="consult-set">预约设置</div>
          <div class="consult-right">
            <span style="font-size:15px;" v-if="subscribe_status === 1">已开启</span>
            <span style="font-size:15px;" v-else="">未开启</span>
            <i class="iconfont icon-jiantou"></i>
          </div>
        </div>
        <div class="phone-set">
          <div class="info-set">
            <div style="font-size: 16px">电话咨询</div>
            <mt-switch v-model="value" @change="change(value)"></mt-switch>
          </div>
          <div class="phone-wenan">
            开启后，您管理的患者可以主动你电话咨询您
          </div>
        </div>
      </div>
      <b></b>
      <b></b>
      <!--<i class="docInfoI"></i>-->
    </div>
  </div>
</template>
<script>
  //  department :"内科"
  //  doctor_id :27
  //  doctor_img :""
  //  doctor_name :"LHG"
  //  grade :"副主任医师"
  //  hospital :"保定传染病医院"
  //  open_consult :0
  //  open_subscribe :1
  //  open_telephone_counseling :0

  import axios from 'axios'
  import {Toast} from 'mint-ui';
  import {Indicator} from 'mint-ui';
  import netWrokUtils from '../../components/NetWrokUtils';

  export default {
    name: 'docInfo',
    data () {
      return {
        selected: '1',
        value: '',
        authentication: '9abada2c209a05e2ebd462f7bf68c5cf',
        data: [],
        consult_status: '',
        subscribe_status: '',
      }
    },

    mounted () {
      this.getDocInfo ();
    },

    created () {
      document.getElementsByTagName('title')[0].innerHTML = '我的信息'
    },

    destroyed () {
      eventBus.$emit('value', this.consult_status);
    },

    methods: {

      // 获取个人信息
      getDocInfo () {
        Indicator.open();
        let that = this;
        var params = {
          authentication: that.authentication
        };
        netWrokUtils.post('/wx/baochuan_d/myinfo', params, (success) => {
          Indicator.close();
          console.log(success);
          this.data = success.data;
          this.consult_status = success.data.content.open_consult;
          this.subscribe_status = success.data.content.open_subscribe;
          if (success.data.content.open_telephone_counseling == 0) {
            this.value = false;
          } else {
            this.value = true;
          }
        }), (failure) => {
          Indicator.close();
          console.log(failure);
        }
      },

      change (value) {
        console.log(value);
        if (value == false) { // 电话咨询关
          this.teleConsultDown();
        } else { // 电话咨询开
          this.teleConsultOpen();
        }
      },

      // 电话咨询开
      teleConsultOpen () {
        Indicator.open();
        let that = this;
        var params = {
          authentication: that.authentication,
          open_telephone_counseling: 1
        };
        netWrokUtils.post('/wx/baochuan_d/mobileonoff', params, (success) => {
          Indicator.close();
          console.log(success);
        }), (failure) => {
          Indicator.close();
          console.log(failure);
        }
      },
      // 电话咨询关
      teleConsultDown () {
        Indicator.open();
        let that = this;
        var params = {
          authentication: that.authentication,
          open_telephone_counseling: 0
        };
        netWrokUtils.post('/wx/baochuan_d/mobileonoff', params, (success) => {
          Indicator.close();
          console.log(success);
        }), (failure) => {
          Indicator.close();
          console.log(failure);
        }
      },


      // 跳转咨询设置页
      pushConsultSett () {
        this.$router.push({ path:"/baochuan_d/docConsultSetting"});
//        window.location.href="docConsultSetting";
      },
      // 跳转预约设置页
      pushAppointSett () {
        this.$router.push({ path:"/baochuan_d/docAppointmentSetting"});
//        window.location.href="docAppointmentSetting";
      },
      // 跳转我的信息页面
      pushMyInfo () {
        this.$router.push({ path:"/baochuan_d/docMyInfo"});
      }

    }
  }

</script>

<style lang="scss">
  .doc-info-box {
    height: 100vh;
    background: #f4f4f4;

    .infoHeader {
      height: 30vh;
      width: 100%;
      background-image: url('../../assets/img/docInfo.png');
      background-size: 100% 100%;

      .headerBox {
        padding: 30px 16px 0;
        display: flex;
        justify-content: space-between;

        .headerLeft {
          display: flex;
          justify-content: flex-start;

          .infoImg {
            border-radius: 50%;
            height: 60px;
            width: 60px;
            /*background: url(../../assets/img/second.png);*/
            background-size: 100% 100%;
            padding-right: 5px;
          }

          .headerInfo {
            padding-top: 10px;

            .docName {
              color: #fff;
              font-size: 16px;
            }

            .docHosipital {
              color: #C5EFED;
              font-size: 14px;
              padding-top: 10px;
            }

          }
        }
        .icon-jiantou {
          font-size: 18px;
          color: #fff;
          line-height: 60px;
        }

      }
    }
    .info-container {
      position: relative;
      margin: -65px 16px;
      background: #fff;
      box-shadow: 0 12px 5px -2px #EBEFF0; /*底边阴影*/
      border-radius: 5px;

    .info-box {

      .info-set {
        display: flex;
        justify-content: space-between;
        padding: 15px 16px;
        border-bottom: 1px dashed #f4f4f4;

        .consult-set {
          font-size: 16px;
          color: #232323;
        }

        .consult-right {
          color: #bbb;

          .icon-jiantou {
            font-size: 14px;
          }

        }

          .mint-switch-core {
            height: 22px;
            width: 40px;
          }

          .mint-switch-core::after {
            width: 22px;
            height: 22px;
            top: -1.5px;
            background-color: #fff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
          }

          .mint-switch-core::before {
            width: 22px;
            height: 22px;
            background-color: #f4f4f4;
          }

          .mint-switch-input:checked + .mint-switch-core {
            border-color: #66B2AA;
            background-color: #66B2AA;
          }

      }
      .phone-set {

        .info-set {
          border: none;
          padding-bottom: 5px;
        }

        .phone-wenan {
          color: #bbb;
          font-size: 14px;
          padding: 10px 16px 15px;
        }

        .showtext {
          display: none;
        }

      }
    }
  b:nth-of-type(1) {
    left: -1px;
    border-radius: 0 14px 14px 0;
  }

  b:nth-of-type(2) {
    right: 0px;
    border-radius: 14px 0 0 14px;
  }

  b {
    position: absolute;
    width: 7px;
    height: 14px;
    top: 40px;
    border: 1px solid #66B2AA;
    z-index: 33;
    background: #66B2AA;
    FILTER: alpha(opacity=0); /*androd*/
    appearance: none; /*下拉框去掉右侧图标*/
    -moz-appearance: none;
    -webkit-appearance: none;

  }

    }
  }

</style>
