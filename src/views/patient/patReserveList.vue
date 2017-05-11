<!--预约订单列表-->
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

  .reservelist-listitem-empty-box {
    width: 100%;
    text-align: center;
    line-height: 40px;

  .reservelist-listitem-empty-img {
    padding-top: 30vh;
    width: 70px;
    height: 70px;
  }

  .reservelist-listitem-empty-text {
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
        <dl class="order-reserve-item box-shade bg-white fs16" v-for="item in message">
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
            <div ></div>
          </dd>
        </dl>

        <!--<div slot="top" class="mint-loadmore-top">-->
        <!--<span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>-->
        <!--<mt-spinner type="snake"></mt-spinner>-->
        <!--<span v-show="topStatus === 'loading'">正在刷新</span>-->
        <!--</div>-->
        <!--<div slot="bottom" class="mint-loadmore-bottom">-->
        <!--<span v-show="bottomStatus !== 'loading'" :class="{ 'rotate': bottomStatus === 'pull' }">加载更多</span>-->
        <!--<mt-spinner type="snake"></mt-spinner>-->
        <!--<span v-show="bottomStatus === 'loading'">正在加载</span>-->
        <!--</div>-->
      </mt-loadmore>
      <div class="reservelist-listitem-empty-box" v-show="message.length <= 0">
        <img src="../../assets/img/recode_icon.png" class="reservelist-listitem-empty-img">
        <br/>
        <span class="reservelist-listitem-empty-text">暂无预约订单记录</span>
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
        message: [],
      }
    },
    mounted() {
      this.getReserveList();
    },
    methods: {
      getReserveList() {
        let that = this;
        var params = {
          authentication: auth
        }
        netWrokUtils.post('/wx/baochuan_p/getappointmentrecord', params, (result) => {
          that.message = result.data.content;
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
//      loadTop() {
//        console.log(2);
//        this.getReserveList();
//      },
//      loadBottom() {
//        console.log(1);
//        let _this = this;
//        _this.nowPage++;
//        _this.util.request.post('/product/app/getBuyProductServiceByPatientIdPage.htm?' + _this.util.formatPara(_this.postData) + '&page=' + _this.nowPage)
//          .then((resp) => {
//            console.log(resp);
//            if (_this.nowPage * _this.postData.rows >= resp.data.total) {
//              _this.allLoaded = true;
//            } else {
//              _this.message = _this.message.concat(resp.data.data.rows);
//            }
//            _this.$refs.loadmore.onBottomLoaded();
//          }).catch((error) => {
//          console.log(error);
//        });
//      }
    }

  }
</script>

