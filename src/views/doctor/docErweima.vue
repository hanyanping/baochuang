<template>
  <div class="docErweima" >
    <div class="erweima-info">
      <div class="docInfo">
        <div class="docImg">
          <img :src="docContent.doctorImg"/>
        </div>
        <div class="docInfo-detail">
          <p style="font-size:16px;color:#232323;">{{docContent.doctorName}} {{docContent.doctorName}}</p>
          <p style="font-size:15px;color:#bbb;padding-top:8px;">{{docContent.hospitalName}} {{docContent.hospitalDepartmentName}}</p>
        </div>
      </div>
      <div class="docEeweima-img">
        <img v-bind:src="docContent.qrcodeUrl"/>
        <p>微信扫一扫，和我保持联系</p>
      </div>
      <b></b>
      <b></b>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import { Toast } from 'mint-ui';
  import netWrokUtils from '../../components/NetWrokUtils'
  export default {
    name: 'docInfo',
    data () {
      return {
        authentication: '9abada2c209a05e2ebd462f7bf68c5cf',
        doctorId: 26,
        erweima:'',
        docContent:[ ]
      }
    },
    mounted() {
      this.getDocInfo();
    },
    created() {
      document.getElementsByTagName('title')[0].innerHTML = '我的随访二维码'

    },
    methods: {
      // 获取个人信息
      getDocInfo() {
          var that = this;
          var params = {
              authentication: this.authentication,
              doctorId: that.doctorId
          }
        netWrokUtils.post('/wx/baochuan_p/doctorqrcode', params, function (result) {
          that.docContent = result.data.content;
          console.log(result.data.content.qrcodeUrl);
        }, function (error_result) {
//          Indicator.close();
          Toast(error_result);
        })
      }
    }
  }
</script>

<style lang="scss">
.docErweima{
  height:100vh;
  background:#529D98;
  padding:20px 10px;
  .erweima-info{
    background:#fff;
    position:relative;
    border-radius:5px;
    .docEeweima-img{
      padding:10px 10px 20px;
      text-align: center;
      img{
        height:230px;
        width:230px;
      }
      p{
        color:#bbb;
        font-size:16px;
        padding-top:20px;
      }
    }
    .docInfo{
      padding:25px 16px;
      display: flex;
      .docImg{
      padding-right:5px;
        img{
          height:65px;
          width:65px;
        }
      }
      .docInfo-detail{
        padding-top:15px;
      }
    }
    b:nth-of-type(1){
      left: -1px;
      border-radius: 0 14px 14px 0;
    }
    b:nth-of-type(2){
      right: -1px;
      border-radius: 14px 0 0 14px;
    }
    b{
      position: absolute;
      width: 5px;
      height: 10px;
      top: 40px;
      border: 1px solid #529D98;
      z-index: 33;
      background:#529D98;
      FILTER: alpha(opacity=0); /*androd*/
      appearance:none;  /*下拉框去掉右侧图标*/
      -moz-appearance:none;
      -webkit-appearance:none;
    }
  }
}
</style>
