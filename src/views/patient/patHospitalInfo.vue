<style lang="scss" scoped>
  .hospital{
    background-size: 100%;
    background-image: url(../../assets/img/bg-hospital-info.png);
    background-repeat: no-repeat;
  }
  .hospital-info {
    width: 92%;
    margin: 165px auto 0;
    overflow: hidden;
  }
  .circle-left{
    top: 40px;
    left: 0;
  }
  .circle-right{
    top: 40px;
    right: 0;
  }
  .info-header{
    display: inline-block;
    width: 92%;
    margin: 0 4%;
    padding: 15px 0;
    box-sizing: border-box;
  }
  .disease-label{
    background: #fff;
    width: 100%;
    padding: 20px 0;
    display: flex;
    justify-content: space-around;
  }
  .item-box{
    max-width: 90px;
  }
  .disease-item{
    padding: 8px 14px;
    display: inline-block;
    color: #fff;
    border-radius: 15px;
    font-size: 15px;
  }
  .header-nopadding{
    padding-bottom: 15px;
    display: inline-block;
    width: 92%;
    margin:0 4%;
  }
  .circle-left-second{
    top: 26px;
    left: 0;
  }
  .circle-right-second{
    top: 26px;
    right: 0;
  }
  .hospitalIntro{
    text-indent: 1em;
    height:138px;
    overflow: hidden;
    line-height: 22px;
    padding: 20px 22px;
    display: inline-block;
    border-radius: 0 0 8px 8px;
  }
  .showAll{
    min-height:138px;
    height:auto;
    text-indent: 1em;
    line-height: 22px;
    padding: 20px 22px;
  }
  .hospital-address{
    height:52px;
    line-height:50px;
    margin-top: 20px;
    box-shadow: 0 0 8px #d2e0e0;
    background: url(../../assets/img/hospital-map.png)no-repeat center/cover;
  }
  .address-logo{
    padding-left:15px;
  }
  .open:before{
    content: "\e602";
  }
  .close:before{
    content: "\e633";
  }
  .getMore{
    text-align:center;
    width:100%;
  }
  .getMore i{
    width:100%;
    padding:4px 0;
  }
</style>

<template>
    <div class="hospital device-height bg-grey over-hidden">
      <div class="hospital-info box-shade  circular-bead">
        <div class="bg-white pos-relate">
          <span class="info-header border-bot-dash fs15">服务内容</span>
          <span class="half-circle-left circle-left pos-absolute bg-grey"></span>
          <span class="half-circle-right circle-right pos-absolute bg-grey"></span>
        </div>
        <div class="disease-label">
          <span class="item-box">
            <a class="disease-item marginB15 bg-disable">查化验单</a>
            <a class="disease-item bg-disable">咨询医生</a>
          </span>
          <div class="item-box">
            <a class="disease-item marginB15 bg-disable">预约医生</a>
            <a class="disease-item bg-disable">电话咨询</a>
          </div>
          <div class="item-box">
            <a class="disease-item marginB15 bg-disable">复诊提醒</a>
            <a class="disease-item bg-disable">就诊记录</a>
          </div>
        </div>
        <div class="bg-white pos-relate">
          <span class="header-nopadding border-bot-dash fs15 color-base">医院简介</span>
          <span class="half-circle-left circle-left-second pos-absolute bg-grey"></span>
          <span class="half-circle-right circle-right-second pos-absolute bg-grey"></span>
        </div>
        <div class="bg-white">
          <div class="fs15" :class="{hospitalIntro: showAll==false, showAll: showAll==true}" v-html="hospitalInfo.intro"></div>
        </div>
        <div class="getMore bg-white">
          <i @click="openOrClose" class="iconfont fs22" :class="{open: isActive==true, 'close': isActive == false}"></i>
        </div>
      </div>
      <div class="hospital-address fs15 parent-margin parent-width circular-bead">
        <i class="iconfont icon-icon fs30 color-warn address-logo"></i>
        <span>医院地址：{{hospitalInfo.address}}</span>
      </div>
    </div>
</template>


<script>
  import NewWorkUtil from '../../components/NetWrokUtils';
  import {Toast} from 'mint-ui';
    export default{
      data(){
          return {
              params: '',
              hospitalInfo : '',
              isActive: true,
              showAll: false
          }
      },
      mounted(){
        this.getHospitalInfo();
      },
      methods: {
        getHospitalInfo(){
            console.log(1);
            NewWorkUtil.post('/wx/baochuan_p/hospitalinfo', this.params, (resp)=>{
                console.log(resp);
                this.hospitalInfo = resp.data.content;
                console.log(this.hospitalInfo.intro);
            }, (error)=>{
                Toast('网络不给力');
            })
        },
        openOrClose(){
            this.isActive = !this.isActive;
            this.showAll  = !this.showAll;
        }
      }
    }
</script>
