<!-- 查化验单页 -->
<template>
  <div class="selectTestReportDetail">

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
        report_item: ''
      }
    },
    mounted() {
      this.getReportDetail();
    },
    created(){
      eventBus.$on('report_item', (thing) => {
        this.report_item = thing;
      })
    },
    destroyed () {
    },
    methods: {
      getReportDetail(){
        let that = this;
        var params = {
          authentication: auth,
          keyno: this.report_item.keyno,
          reportTitle: this.report_item.reportTitle,
          reportDate: this.report_item.reportDate
        }
        netWrokUtils.post('/wx/baochuan_p/reportinfo', params, (result) => {
//          that.reportList = result.data.content;
          console.log('result===', result)
        }, (error_result) => {
//          Toast(error_result.data.msg);
        })
      },
      toReportDetail(item){
        this.$router.push({path: 'subscribeList'}) //跳转预约列表
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

  .selectTestReportDetail {
    height: 100vh;
    width: 100%;
    background: #f4f4f4;

  }

</style>
