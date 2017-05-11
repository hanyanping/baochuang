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
        Indicator.open();
        axios.post('/wx/baochuan_p/reportinfo', params).then(function (result) {
          Indicator.close();
          console.log(result)
          that.detailHtml = result.data;
        }).catch(function (network_error) {
          Indicator.close();
          console.log(network_error);
          Toast('网络不给力 ! 请稍后再试!' + network_error);
        })


      }
    }
  }
</script>

<style lang="scss">

</style>
