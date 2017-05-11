<!-- 查化验单页 -->
<template>
  <div class="selectTestReport">
    <div class="selectTestReport-titlebg-box"></div>
    <div class="selectTestReport-list-box pos-relate">
      <div class="selectTestReport-listheader-box border-bot-dash">
        <span class="selectTestReport-listtitle-text">您的化验单,点击看详情:</span>
      </div>
      <span class="bg-grey half-circle-left circleleft pos-absolute"></span>
      <span class="bg-grey half-circle-right circleright pos-absolute"></span>

      <!--<mt-loadmore-->
      <!--:top-method="loadTop" ref="loadmore"-->
      <!--:bottom-method="loadBottom"-->
      <!--:bottom-all-loaded="allLoaded"-->
      <!--:autoFill="false">-->
      <div class="selectTestReport-listcontent-box" v-for="item in reportList" @click="toReportDetail(item)">
        <span class="selectTestReport-listitem-left-text fl fs14">{{item.reportTitle}}</span>
        <div class="selectTestReport-listitem-right-box fr">
          <span class="selectTestReport-listitem-right-text fs14">{{item.reportDate}}</span>
          <i class="iconfont selectTestReport-listitem-right-icon icon-jiantou"></i>
        </div>
      </div>
      <!--</mt-loadmore>-->

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
      // 调用接口 返回是否直接查询检查报告
      var params = {
        authentication: auth
      }
      netWrokUtils.post('/wx/baochuan_p/getuseridcard', params, (result) => {
        var idCard = result.data.content.idCard;
        _idCard = idCard;
        var is_show_his = result.data.content.isShowHis;
        // is_show_his == 1 是可以直接查询
        if (is_show_his == 1) {
          next(true);
        } else {
          next(vm=> {
            vm.$router.push({path: 'testReportIdentityCard'}) //跳转填写身份证页面
            return false;
          });
//          next('/baochuan_p/testReportIdentityCard');
        }
      }, (error_result) => {
        Toast(error_result.data.msg);
      })
    },
    data () {
      return {
        reportList: [],
        allLoaded: false,
        item: ''
      }
    },
    mounted() {
      this.getReportList();
    },
    created(){
    },
    destroyed () {
      eventBus.$emit('page_flag', comConstant.flag_testReportIdentityCard);
      eventBus.$emit('report_item', this.item);
    },
    methods: {
      getReportList(){
        let that = this;
        var params = {
          authentication: auth
        }
        netWrokUtils.post('/wx/baochuan_p/reportlist', params, (result) => {
          that.reportList = result.data.content;
        }, (error_result) => {
          Toast(error_result.data.msg);
        })
      },
      toReportDetail(item){
        this.item = item;
        this.$router.push({path: 'patSelectTestReportDetail'}) //跳转预约列表
      },
      loadTop()
      {
      },
      loadBottom()
      {
      },
    }
  }
</script>

<style lang="scss">

  .selectTestReport {
    height: 100vh;
    width: 100%;
    background: #f4f4f4;

  .selectTestReport-titlebg-box {
    background: url(../../assets/img/selectTestReportCheck_bg.png) no-repeat center/cover;
    height: 30vh;
  }

  .selectTestReport-list-box {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: -48px;
    background: #fff;
    border-radius: 5px;
    -webkit-box-shadow: 0 0 50px #dbe5e4;
    -moz-box-shadow: 0 0 50px #dbe5e4;
    box-shadow: 0 0 50px #dbe5e4;
    padding-left: 10px;
    padding-right: 10px;

  .selectTestReport-listheader-box {
    padding: 15px;

  .selectTestReport-listtitle-text {
    color: #232323;
    font-size: 16px;
  }

  }

  .circleleft {
    top: 40px;
    left: 0;
    display: block;
  }

  .circleright {
    top: 40px;
    right: 0;
    display: block;
  }

  .selectTestReport-listcontent-box {
    padding: 15px 10px;
    overflow: hidden;

  .selectTestReport-listcontent-yuan {
    margin-top: 1px;
  }

  .selectTestReport-listitem-left-text {
    color: #232323;
    font-size: 15px;
    margin-top: 2px;
    margin-left: 5px;
  }

  .selectTestReport-listitem-right-box {

  .selectTestReport-listitem-right-text {
    color: #999999;
    font-size: 15px;
  }

  .selectTestReport-listitem-right-icon {
    margin-left: 5px;
    color: #b2b1b1;
  }

  }
  }
  }

  }

</style>
