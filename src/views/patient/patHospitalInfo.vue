<style lang="scss" scoped>
  .bg-hospital{
    background: url(../../assets/img/bg-hospital-info.png)no-repeat 0px center/cover;
    overflow: hidden;
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
  .hospital-intro{
    text-indent: 1em;
    line-height: 22px;
    padding: 20px 22px;
    display: inline-block;
  }
  .hospital-address{
    width: 100%;
    height:52px;
    line-height:50px;
    margin-top: 20px;
    box-shadow: 0 0 8px #d2e0e0;
    background: url(../../assets/img/hospital-map.png)no-repeat center/cover;
  }
  .address-logo{
    padding-left:15px;
  }
</style>

<template>
    <div class="bg-hospital">
      <div class="hospital-info box-shade  circular-bead">
        <div class="bg-white pos-relate">
          <span class="info-header border-bot-dash fs15">服务内容</span>
          <span class="half-circle-left circle-left pos-absolute bg-grey"></span>
          <span class="half-circle-right circle-right pos-absolute bg-grey"></span>
        </div>
        <div class="disease-label">
          <span class="item-box">
            <router-link to="javascript:void(0)" class="disease-item marginB15 bg-button">查化验单</router-link>
            <router-link to="javascript:void(0)" class="disease-item bg-disable">咨询医生</router-link>
          </span>
          <div class="item-box">
            <router-link to="javascript:void(0)" class="disease-item marginB15 bg-disable">预约医生</router-link>
            <router-link to="javascript:void(0)" class="disease-item bg-disable">电话咨询</router-link>
          </div>
          <div class="item-box">
            <router-link to="javascript:void(0)" class="disease-item marginB15 bg-disable">复诊提醒</router-link>
            <router-link to="javascript:void(0)" class="disease-item bg-disable">就诊记录</router-link>
          </div>
        </div>
        <div class="bg-white pos-relate">
          <span class="header-nopadding border-bot-dash fs15 color-base">医院简介</span>
          <span class="half-circle-left circle-left-second pos-absolute bg-grey"></span>
          <span class="half-circle-right circle-right-second pos-absolute bg-grey"></span>
        </div>
        <div class="bg-white">
          <span class="fs15 hospital-intro ">保定市传染病医院占地面积53360平米，可开放床位350张。医院是“全国著名传染病专家会诊基地”、“市肝病研究所”、河北省传染病医疗集团成员单位、北京佑安医院联盟成员、市医保及新农合定点医院。</span>
        </div>
        <div class="hospital-address fs15">
          <i class="iconfont icon-icon fs30 color-warn address-logo"></i>
          <span>医院地址：河北省保定市南市区卫生路11号</span>
        </div>
      </div>
    </div>
</template>


<script>
    export default{
        data(){
            return {

            }
        }
    }
</script>
