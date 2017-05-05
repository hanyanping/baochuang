<!--我的医生列表-->
<style lang="scss" scoped>
  .mydoctorlist-empty-box{
    text-align: center;
    img{
      height:60px;
      width: 60px;
      margin-top: 40vh;
    }
    .mydoctorlist-empty-to{
      width: 100px;
      height:30px;
      margin: 20px auto;
      background: #5ac4b2;
      border-radius: 10px;
      padding:2px 8px;
      line-height: 30px;
      color: white;
      font-size: 16px;
    }
  }
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

  <div class="device-height over-hidden">
    <mt-loadmore
      :top-method="loadTop" ref="loadmore"
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      :autoFill="false">
    <div v-show="myDoctorList.length == 0">
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
    <div class="mydoctorlist-empty-box" v-show="myDoctorList.length > 0">
      <img src="../../assets/img/phone.png">
      <p class="mydoctorlist-empty-to">选择医生</p>
    </div>
  </div>
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


