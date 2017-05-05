<!--我的医生列表-->
<style lang="scss" scoped>
  .list-item{
    background:url(../../assets/img/selectTestReportCheck_bg.png) no-repeat center/cover;
    height:203px;
    .bg-doctor-logo{
      width:40px;
      height:40px;
      border-radius: 50%;
      right:10px;
      top:10px;
    }
    .doctor-info{
      padding-top:50px;
      padding-left:10%;
      line-height: 24px;
    .doctor-name{
      font-weight:bold;
      padding-bottom:8px;
    }
      span{
        display:inline-block;
      }
    }
  .btn-menu{
    padding-left:10%;
    padding-top:20px;
    a{
      height:36px;
      line-height:36px;
      text-align: center;
      width: 40%;
      display:inline-block;
      border-radius: 20px;
    }
    .btn-consult{
      background: #75cab9;
      margin-right:10%;
    }
    .btn-reserve{
      background: #13c5da;
    }
  }
  }
</style>

<template>
  <mt-loadmore
    :top-method="loadTop" ref="loadmore"
    :bottom-method="loadBottom"
    :bottom-all-loaded="allLoaded"
    :autoFill="false">
  <div class="device-height over-hidden">
    <div class="parent-width marginL15 marginR15 marginT15 marginB15">
      <i class="iconfont icon-wenhao1 color-grey fs20 paddingL10"></i>
      <span class="color-grey fs16">什么是主管医生</span>
    </div>
    <div class="list-item pos-relate parent-width parent-margin circular-bead box-shade" v-for="item in myDoctorList">
      <img class="pos-absolute bg-doctor-logo" src="../../assets/img/main-doctor.png"/>
      <div class="doctor-info">
        <span class="color-black fs22 doctor-name">{{item.name}}</span><br>
        <span class="color-grey">{{item.grade}}</span><br>
        <span class="color-grey">医院：{{item.name}}</span>
      </div>
      <div class="btn-menu">
        <router-link to="" class="btn-consult color-white">发消息</router-link>
        <router-link to="" class="btn-reserve color-white">预约</router-link>
      </div>
    </div>
  </div>
  </mt-loadmore>

</template>

<script>

  import axios from 'axios';
  import {Toast} from 'mint-ui';
  import {Indicator} from 'mint-ui';
  import netWrokUtils from '../../components/NetWrokUtils'
  import moment from 'moment/moment.js';

  export default {
    data () {
      return {
        myDoctorList: [],
        allLoaded: false,
        nowPage: 1,
        isShow: false,
        authentication : '4d89652b270cc60c30365868b229ca15'

      }
    },
    mounted() {
      this.getMyDoctorList();
    },
    created(){
//      console.log('authentication===' + this.postData.authentication);
    },
    methods: {
      getMyDoctorList(){
        let that = this;
        var params = {
          authentication: that.authentication
        }
        netWrokUtils.post('/api/wx/baochuan_p/mydoctor', params, (result) => {
          that.myDoctorList = result.data.content.list;
        }, (error_result) => {
          Toast(error_result.data.msg);
        })
      },
      loadTop()
      {
      },
      loadBottom()
      {
      }
    }
  }
</script>


