<!-- 复诊信息 -->
<template>
  <div class="doc-visi-container-box device-height">

    <div class="doc-visi-header-box pos-relate" @click="openPicker">

      <i v-show="content.revisit_time != ''" class="iconfont icon-jiantou pos-absolute color-white doc-visi-youjiantou"></i>
      <span v-show="content.revisit_time != ''" class="doc-visi-title">下次复诊时间</span>
      <span v-show="content.revisit_time != ''" class="doc-visi-title">{{content.revisit_time}}</span>

      <span v-show="content.revisit_time === ''" class="doc-visit-noset-title">还未设置下次复诊时间</span>
      <button v-show="content.revisit_time === ''" class="doc-visit-noset-button">设置</button>

    </div>

    <mt-datetime-picker
      v-model="pickerValue"
      type="date"
      ref="datePicker"
      @confirm="handleChange"
      :startDate="now"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日">
    </mt-datetime-picker>

    <div class="doc-visi-list-box" v-if="time_list.length !=0 ">
      <div class="doc-visi-list-title-box">
        <i class="iconfont icon-jilu"></i>
        <span class="fs17">复诊记录</span>
      </div>

      <div class="doc-visi-list-cell" v-for="item in time_list">
        <span class="fl fs16">{{item.desc}}</span>
        <span class="fr fs16">{{item.date}}</span>
      </div>

      <b></b>
      <b></b>
    </div>

    <div v-else style="text-align: center">
      <img src="../../assets/img/nodatatips.png" style="margin-top: 25vh; width: 150px; height: 180px; line-height: 50%">
      <p style="color: #939393">暂无记录</p>
    </div>


  </div>
</template>

<script>
  import {Indicator,Toast, DatetimePicker} from 'mint-ui';
  import netWrokUtils from '../../components/NetWrokUtils';
  import moment from 'moment/moment.js';

  export default {
    name: 'docVisitInfo',
    data () {
      return {
        authentication: '9abada2c209a05e2ebd462f7bf68c5cf',
        patientId: 2,
        content: {},
        time_list: [],
        pickerValue: '',
//        startDateValue: new Date('2017-05-01'),
        now: new Date('')
      }
    },

    created () {
      eventBus.$on('some', (thing) => {
        this.patientId = thing;
      })
    },

    mounted () {
      this.getVisitInfo();
    },

    methods: {
      // 获取复诊记录列表数据
      getVisitInfo () {
        Indicator.open();
        let that = this;
        var params = {
          authentication: that.authentication,
          patientId: that.patientId
        };
        netWrokUtils.post('/wx/baochuan_d/showrevisit', params, (success) => {
          console.log(success);
          that.content = success.data.content;
          that.time_list = success.data.content.time_list;
          that.now = new Date(success.data.content.now);
        }), (failure) => {
          console.log(failure);
        };
      },

      // 弹出时间选择器
      openPicker() {
        this.$refs.datePicker.open();
      },

      // 选择完成
      handleChange(value) {
        console.log('value===' + moment(value).format('YYYY-MM-DD'));
        this.settingVisitTime(moment(value).format('YYYY-MM-DD'));
      },

      // 设置复诊信息
      settingVisitTime(timeValue) {
        Indicator.open();
        let that = this;
        var params = {
          authentication: that.authentication,
          patientId: that.patientId,
          revisitTime: timeValue
        };
        netWrokUtils.post('/wx/baochuan_d/setrevisit', params, (success) => {
          Indicator.close();
          console.log(success);
          that.getVisitInfo();
        }), (failure) => {
          Indicator.close();
          console.log(failure);
        };
      },

    }
  }
</script>

<style lang="scss">
  .doc-visi-container-box {
    overflow: hidden;
    background: #f4f4f4;
    .doc-visi-header-box {
      margin: 20px 20px 0;
      font-size: 15px;
      display: flex;
      flex-direction: column;
      background: #5da096;
      height: 80px;
      border-radius: 7px;
      .doc-visi-title {
        padding-top: 15px;
        text-align: center;
        color: #ffffff;
      }
      .doc-visi-youjiantou {
        right: 10px;
        line-height:80px;
      }
      .doc-visit-noset-title {
        padding-top: 15px;
        text-align: center;
        color: rgba(255,255,255,0.5);
      }
      .doc-visit-noset-button {
        border:1px solid #ffffff;
        border-radius:20px;
        font-size: 14px;
        color: #ffffff;
        width: 86px;
        margin: auto;
        -webkit-appearance:none;
        background-color:transparent;
        outline: none;
      }
    }
    .doc-visi-list-box {
      margin: 15px 20px 0;
      border-radius:5px;
      background:#ffffff;
      position: relative;
      -webkit-box-shadow:0 0 19px #d4dadc;
      -moz-box-shadow:0 0 19px #d4dadc;
      box-shadow:0 0 25px #d4dadc;
      .doc-visi-list-title-box {
        padding: 15px 20px;
        border-bottom:1px dashed #62a39c;
      }
      .doc-visi-list-cell {
        padding: 20px 20px 35px;
        color: #666666;
      }
      b {
        position: absolute;
        top: 40px;
        width: 7px;
        height: 14px;
        border: 1px solid #f4f4f4;
        z-index: 33;
        background:#f4f4f4;
        FILTER: alpha(opacity=0); /*androd*/
        appearance:none;  /*下拉框去掉右侧图标*/
        -moz-appearance:none;
        -webkit-appearance:none;
      }
      b:nth-of-type(1){
        left: 0px;
        border-radius: 0 14px 14px 0;
      }
      b:nth-of-type(2){
        right: 0px;
        border-radius: 14px 0 0 14px;
      }
    }
  }
</style>
