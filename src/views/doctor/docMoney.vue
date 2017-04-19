<template>
  <div class="bodyBox">
    <div class="docMoneyBox">
      <div class="moneyHeader">
        <div class="balance">余额 (元)</div>
        <div class="moneyTail">
          <div class="moneyNum">789.00</div>
          <div class="goTixian">提现</div>
        </div>
        <div class="moneyAvailable">可提现金额 : 600.00</div>
      </div>
      <div class="moneyContainer">
        <div class="mingxinDetail">
          <div class="detailName">明细</div>
          <div class="detailList">
            <div class="tixianBox">
              <div class="tixinaMoney">
                <div class="tixianWenzi">提现</div>
                <div class="tixianJine">-600.00元</div>
              </div>
              <div class="tixianTime">2017-03-23  <span>12:45:23</span></div>
            </div>
            <div class="yuyueBox tixianBox">
              <div class="tixinaMoney">
                <div class="tixianWenzi">咨询服务费 <span class="patientName">患者：<span>王小二</span></span></div>
                <div class="xiaofeiJine">+10.00元</div>
              </div>
              <div class="tixianTime">2017-03-23  <span>12:45:23</span></div>
            </div>
            <!--<div class="yuyueBox"></div>-->
            <!--<div class="zixunBox"></div>-->
          </div>
        </div>
        <b></b>
        <b></b>
        <i></i>
      </div>
    </div>
  </div>

</template>
<script>
  import { Toast,Field } from 'mint-ui';
  export default {
    name: 'docMoney',
    data () {
      return {
      }
    },
    created() {
      document.getElementsByTagName('title')[0].innerHTML = '我的钱包'
    }
  }
</script>

<style>
  .bodyBox{
    background:#f4f4f4;
    height:100vh;
    width:100%;

  }

  html{
    height:100%;
    width:100%;
  }
.docMoneyBox{
  width:100%;

}
  .docMoneyBox .moneyHeader{
    background:#529D98;
    height:25vh;
    color:#BDE4DD;
    padding:0 16px;
  }
  .docMoneyBox .moneyHeader .moneyTail{
    display:flex;
    justify-content: space-between;
    padding-top:10px;
  }
  .docMoneyBox .moneyHeader .balance{
    padding-top:10px;
  }
  .docMoneyBox .moneyHeader .moneyTail .moneyNum{
    font-size:24px;
    color:#fff;
  }
   .moneyAvailable, .balance{
    font-size:14px;
  }
  .goTixian{
    font-size:16px;
    border: 1px solid #BDE4DD;
    padding:1px 10px 0;
    border-radius:5px;
  }
  .docMoneyBox .moneyContainer{
    position: relative;
    margin:-40px 16px;
    background:#fff;
    border-radius:5px;
  }
  .docMoneyBox .moneyContainer b:nth-of-type(1){
    left: 0px;
    border-left: 1px solid #f1f1f1;
    border-radius: 0 14px 14px 0;
  }
  .docMoneyBox .moneyContainer b:nth-of-type(2){
    right: 0px;
    border-right: 1px solid #f1f1f1;
    border-radius: 14px 0 0 14px;
  }
  .docMoneyBox .moneyContainer b{
    position: absolute;
    width: 7px;
    height: 14px;
    top: 30px;
    border: 1px solid #f1f1f1;
    z-index: 33;
    background:linear-gradient(#529D98, #FFF);
    background: #f1f1f1;
    FILTER: alpha(opacity=0); /*androd*/
    appearance:none;  /*下拉框去掉右侧图标*/
    -moz-appearance:none;
    -webkit-appearance:none;

  }
  .docMoneyBox .moneyContainer i{
    position: absolute;
    top: 37px;
    border-bottom: 1px dashed #dfdfdf;
    width: 90%;
    left: 5%;
  }
  .docMoneyBox .moneyContainer .mingxinDetail{
    padding:5px 16px;
  }
  .docMoneyBox .moneyContainer .detailList{
    margin-top:15px;
  }
  .docMoneyBox .moneyContainer .detailList .tixinaMoney{
       display:flex;
       justify-content: space-between;
     }
  .docMoneyBox .moneyContainer .detailList .tixianBox{
    border-bottom:1px dashed #dfdfdf;
    padding:10px 0;
  }
  .docMoneyBox .moneyContainer .detailList .tixianJine{
    color:#f00;
    font-size:15px;
  }
  .docMoneyBox .moneyContainer .detailList .tixianTime{
    color:#bbb;
    padding-top:5px;
    font-size:15px;
  }
  .docMoneyBox .moneyContainer .detailList .tixianWenzi{
    color:#232323;
  }
  .docMoneyBox .xiaofeiJine, .yuyueBox .patientName{
    color:#bbb;
    font-size:15px;
}

</style>
