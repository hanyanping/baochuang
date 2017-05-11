<!-- 就诊记录 -->
<style scoped lang="scss">
  .circle-left {
    left: 0;
    top: 40px;
  }

  .circle-right {
    right: 0;
    top: 40px;
  }

  .clinic-check-label {
    width: 36px;
    height: 18px;
    border-radius: 18px;
    border: 1px solid #60ac9c;
    line-height: 18px;
    text-align: center;
    margin-left: 2px;
    padding: 0 4px;
    display: inline-block;
    color: #60a39c;
  }

  .clinic-list-box {
    /*width: 88%;*/
    padding: 15px 6%;

  .clinic-item-list {
    width: 100%;
    border-left: 2px solid #60a39c;
    height: 55px;
    line-height: 55px;

  .list-style {
    margin-left: -8px;
  }

  }
  }
</style>

<template>
  <div class="device-height bg-grey over-hidden">
    <div class="parent-width parent-margin box-shade circular-bead pos-relate bg-white">
      <span class="half-circle-left pos-absolute bg-grey circle-left"></span>
      <span class="half-circle-right pos-absolute bg-grey circle-right"></span>
      <ul class="clinic-list-box fs16 color-black">
        <li class="clinic-item-list" v-for="item in treatmentRecordList">
          <span class="circle-shaft bg-cure list-style"></span>
          <span>{{item.createDate}}</span>
          <span class="fr">
              <em class="clinic-check-label" v-if="item.jianyan == true">门诊</em>
              <em class="clinic-check-label" v-if="item.jiancha == true">检查</em>
              <em class="clinic-check-label" v-if="item.chufang == true">处方</em>
            </span>
        </li>
      </ul>
      <!-- 空白页面 -->
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
  export default{
    beforeRouteEnter (to, from, next) {
      // 调用接口 返回是否直接查询就诊记录
      var params = {
        authentication: auth
      }
      netWrokUtils.post('/wx/baochuan_p/getuseridcard', params, (result) => {
        var idCard = result.data.content.idCard;
        _idCard = idCard;
        var is_show_his = result.data.content.isShowHis;
        if (is_show_his == 1) {
          next(true);
        } else {
          next(vm=> {
            vm.$router.push({path: 'testReportIdentityCard'}) //跳转填写身份证页面
            return false;
          });
        }
      }, (error_result) => {
        Toast(error_result.data.msg);
      })
    },
    data(){
      return {
        treatmentRecordList: ''
      }
    },
    mounted() {
      this.getTreatmentRecord();
    },
    created(){
    },
    destroyed () {
      eventBus.$emit('page_flag', comConstant.flag_clinicRecord);
    },
    methods: {
      getTreatmentRecord(){
        let that = this;
        var params = {
          authentication: auth
        }
        netWrokUtils.post('/wx/baochuan_p/treatmentrecord', params, (result) => {
          that.treatmentRecordList = result.data.content;
        }, (error_result) => {
          Toast(error_result.data.msg);
        })
      }
    }
  }
</script>
