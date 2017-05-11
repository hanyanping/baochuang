<!--咨询订单列表-->
<style scoped lang="scss">
  .order-reserve-item {
    width: 92%;
    margin: 4% 4% 0;
    border-radius: 3px;
  }

  .item-header, .item-content {
    width: 92%;
    padding: 15px 0;
    margin: 0 4%;
    overflow: hidden;
  }

  .item-content {
    padding: 0;
  }

  .doc-info {
    display: block;
    overflow: hidden;
    padding: 10px 0;
  }

  .doc-info img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .doc-info-tip {
    width: 78%;
    margin: 6px 0 0 6px;
    line-height: 22px;
    flex-direction: column;

  }

  .doc-info-tip .doc-hospital {
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .item-tips {
    padding: 14px 0;
    display: inline-block;
    line-height: 20px;
  }

  .consultorderlist-listitem-empty-box {
    width: 100%;
    text-align: center;
    line-height: 40px;

  .consultorderlist-listitem-empty-img {
    padding-top: 30vh;
    width: 70px;
    height: 70px;
  }

  .consultorderlist-listitem-empty-text {
    display: inline-block;
    font-size: 16px;
    color: #d7d7d7;
  }

  }
</style>

<template>
  <div class="bg-grey device-height">
    <div class="page-loadmore">
      <mt-loadmore
        :top-method="loadTop" ref="loadmore"
        :bottom-method="loadBottom"
        :bottom-all-loaded="allLoaded"
        :autoFill="false">
        <dl class="order-reserve-item box-shade bg-white fs16" v-for="item in consultOrderList">
          <dt class="item-header border-bot">
            <span class="fl">就诊时间：{{item.appointment_date}} {{item.week}} {{item.am_or_pm}}</span>
            <span class="fr" style="color: #ff0000;" v-if="item.status == 3">{{item.status_value}}</span>
            <span class="fr" style="color: #04b809;" v-if="item.status == 4">{{item.status_value}}</span>
            <span class="fr" style="color: #232323;" v-if="item.status == 5">{{item.status_value}}</span>
          </dt>
          <dd class="item-content">
            <span class="doc-info">
              <img class="fl" :src="item.doctor_img" alt="正在加载">
              <span class="doc-info-tip fl">
                <em>{{item.doctor_name}} {{item.doctor_grade}}</em>
                <p class="doc-hospital color-disable fs16">{{item.hospital_name}}</p>
              </span>
            </span>
            <span class="item-tips border-top" v-if="item.status == 4">建议您在{{item.suggest_time}}到达医院就诊</span>
            <div></div>
          </dd>
        </dl>
      </mt-loadmore>
      <div class="consultorderlist-listitem-empty-box" v-show="consultOrderList.length <= 0">
        <img src="../../assets/img/recode_icon.png" class="consultorderlist-listitem-empty-img">
        <br/>
        <span class="consultorderlist-listitem-empty-text">暂无咨询订单记录</span>
      </div>
    </div>
  </div>
</template>


<script>
  import util from '../../components/util';
  import _ from 'lodash';
  import {Toast} from 'mint-ui';
  import {Indicator} from 'mint-ui';
  import netWrokUtils from '../../components/NetWrokUtils'
  import moment from 'moment/moment.js';

  export default {
    data() {
      return {
        allLoaded: false,
        nowPage: 1,
        consultOrderList: [],
      }
    },
    mounted() {
      this.getConsultOrderList();
    },
    methods: {
      getConsultOrderList() {
        let that = this;
        var params = {
          authentication: auth
        }
        netWrokUtils.post('/wx/baochuan_p/getappointmentrecord', params, (result) => {
          that.consultOrderList = result.data.content;
        }, (error_result) => {
          Toast(error_result.data.msg);
        })
      },
      loadTop()
      {
      }
      ,
      loadBottom()
      {
      }
    }
  }
</script>

