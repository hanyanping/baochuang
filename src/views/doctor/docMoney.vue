<template>
  <div class="bodyBox">
    <div class="docMoneyBox">
      <div class="moneyHeader">
        <div class="balance">余额 (元)</div>
        <div class="moneyTail">
          <div class="moneyNum">{{moneyInfo.balance}}</div>
          <div class="goTixian" @click="applyForCash">提现</div>
        </div>
        <div class="moneyAvailable">可提现金额 : {{moneyInfo.getmoney}}</div>
      </div>
      <div v-if="moneyList.length!='0'"  class="moneyContainer">
        <div class="mingxinDetail">
          <div class="detailName">明细</div>
          <div class="detailList" v-for="item in moneyList">
            <div class="tixianBox">
              <div class="tixinaMoney">
                <div class="tixianWenzi">{{item.name}}
                  <span class="patientName" v-show="item.name!='提现'">
                    患者：
                    <span>{{item.patientName}}</span>
                  </span>
                </div>
                <div :class="{'xiaofeiJine':showRed,'tixianJine':!showRed}">{{item.money}} 元</div>
              </div>
              <div class="tixianTime">{{item.time}}</div>
            </div>
            <!--<div class="yuyueBox tixianBox">-->
              <!--<div class="tixinaMoney">-->
                <!--<div class="tixianWenzi">咨询服务费 </div>-->
                <!--<div class=""  :class="{'xiaofeiJine':showRed,'tixianJine':!showRed}">+10.00元</div>-->
              <!--</div>-->
              <!--<div class="tixianTime">2017-03-23  <span>12:45:23</span></div>-->
            <!--</div>-->
            <!--<div class="yuyueBox"></div>-->
            <!--<div class="zixunBox"></div>-->
          </div>
        </div>
        <b></b>
        <b></b>
        <!--<i></i>-->
      </div>
      <div v-else class="nodata">
        <img class="nodataImg" src="../../assets/img/nodatatips.png"/>
      </div>
    </div>
  </div>

</template>
<script>
  import {Toast, Field, Indicator} from 'mint-ui';
  import netWrokUtils from '../../components/NetWrokUtils'
  export default {
    name: 'docMoney',
    data () {
      return {
        authentication: '9abada2c209a05e2ebd462f7bf68c5cf',
        moneyInfo: {},
        moneyList: [],
        showRed: ''
      }
    },
    created() {
      document.getElementsByTagName('title')[0].innerHTML = '我的钱包'
    },
    mounted() {
      this.getDocInfo();
    },
    methods: {
      // 获取我的钱包信息
      getDocInfo() {
        Indicator.open();
        let that = this;
        var params = {
          authentication: that.authentication
        };
        netWrokUtils.post('/wx/baochuan_d/wallet', params, (success) => {
          console.log(success);
          that.moneyInfo = success.data.content;
          that.moneyList = success.data.content.list;
        }), (failure) => {
          console.log(failure);
        };
      },

      applyForCash () {
        this.$router.push({ path:"/baochuan_d/docAddBankCard"});
      }

    },
  }
</script>

<style>
  .bodyBox{
    background:#FCFCFC;
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
    height:33vh;
    color:#BDE4DD;
    padding:0 16px;
  }
  .docMoneyBox .moneyHeader .moneyTail{
    display:flex;
    justify-content: space-between;
    padding-top:30px;
  }
  .docMoneyBox .moneyHeader .balance{
    padding-top:15px;
  }
  .docMoneyBox .moneyHeader .moneyTail .moneyNum{
    font-size:24px;
    color:#fff;
  }
   .moneyAvailable, .balance{
    font-size:14px;
     padding-top:15px;
  }
  .goTixian{
    font-size:16px;
    border: 1px solid #BDE4DD;
    padding:1px 10px 1px;
    border-radius:5px;
    line-height: 18px;
    vertical-align: middle;
  }
  .docMoneyBox .moneyContainer{
    position: relative;
    margin:-66px 16px;
    background:#fff;
    border-radius:5px;
    box-shadow: 0 6px 25px -5px #9cb8b5;
  }
  .docMoneyBox .moneyContainer b:nth-of-type(1){
    left: -1px;
    border-left: 1px solid #529D98;
    border-radius: 0 14px 14px 0;
  }
  .docMoneyBox .moneyContainer b:nth-of-type(2){
    right: -1px;
    border-right: 1px solid #529D98;
    border-radius: 14px 0 0 14px;
  }
  .docMoneyBox .moneyContainer b{
    position: absolute;
    width: 7px;
    height: 14px;
    top: 40px;
    border: 1px solid #f1f1f1;
    z-index: 33;
    background:#529D98;
    FILTER: alpha(opacity=0); /*androd*/
    appearance:none;  /*下拉框去掉右侧图标*/
    -moz-appearance:none;
    -webkit-appearance:none;

  }
  .docMoneyBox .moneyContainer i{
    position: absolute;
    top: 45px;
    border-bottom: 1px dashed #dfdfdf;
    width: 90%;
    left: 5%;
  }
  .docMoneyBox .moneyContainer .mingxinDetail{
    padding:0px 16px;
  }
  .docMoneyBox .moneyContainer .mingxinDetail .detailName{
    padding:15px 0;
  }
  .moneyContainer .mingxinDetail .detailList {
    border-top: 1px dashed #86B8B8;
  }

  .docMoneyBox .moneyContainer .detailList .tixinaMoney{
    display:flex;
    justify-content: space-between;
  }
  .docMoneyBox .moneyContainer .detailList .tixianBox{
    border-bottom:1px dashed #dfdfdf;
    padding:15px 0;
  }
  .moneyContainer .detailList .tixianBox .patientName{
    color:#bbb;
    font-size:15px;
  }
  .docMoneyBox .moneyContainer .detailList .tixianBox:nth-last-child(1){
    border:none;
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
  .docMoneyBox .xiaofeiJine{
    color:#bbb;
    font-size:15px;
}

</style>
