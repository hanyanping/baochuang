<!--检查报告-输入身份证页-->
<template>
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
        isFirstSelect: false,
        idCard: '',
        is_show_his: -1
      }
    },
    beforeCreate(){
      // 调用接口 返回是否首次查询检查报告
      var params = {
        authentication: auth
      }
      netWrokUtils.post('/wx/baochuan_p/getuseridcard', params, (result) => {
        this.idCard = result.data.content.idCard;
        this.isShowHis = result.data.content.isShowHis;
        console.log('isShowHis====' + this.isShowHis);
        if (this.isShowHis == 0) {
          this.$router.push({path: 'testReportIdentityCard'}) //跳转检查报告身份证页面
        } else {
          this.$router.push({path: 'selectTestReport'}) //跳转完善信息
        }
      }, (error_result) => {
        Toast(error_result.data.msg);
      })
    },
    destroyed () {
      eventBus.$emit('idCard', this.idCard);
    }
  }
</script>

<style lang="scss">
</style>
