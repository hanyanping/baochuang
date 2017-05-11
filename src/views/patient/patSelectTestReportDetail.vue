<!-- 查化验单页 -->
<template>
  <div v-html="detailHtml"></div>
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
        report_item: '',
//        detailHtml: '<div><header><div><h4><p>检查项目：浓缩集菌抗酸菌检测（液基夹层杯法）</p></h4>' +
//        '<h4><p>检查时间：2016-03-21</p></h4></div></header></div>'
        detailHtml: ''
      }
    },
    mounted() {
      this.getReportDetail();
    },
    created(){
      eventBus.$on('report_item', (thing) => {
        this.report_item = thing;
        console.log('this.report_item==', this.report_item);
      })
    },
    destroyed () {
    },
    methods: {
      getReportDetail(){
        let that = this;
        var params = {
          authentication: auth,
          keyNo: this.report_item.keyno,
          reportTitle: this.report_item.reportTitle,
          reportDate: this.report_item.reportDate
        }
        netWrokUtils.post('/wx/baochuan_p/reportinfo', params, (result) => {
          that.detailHtml = result.data;
        }, (error_result) => {
        })
      }
    }
  }
</script>

<style lang="scss">

</style>
