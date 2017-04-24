<!-- 申请提现 -->
<template>
  <div class="doc-ApplyForCash-Container-box">

    <div class="doc-ApplyForCash-Header-Box">
      <div class="doc-ApplyForCash-Header-left">
        <span>工商银行</span>
        <span>6217220100001859988</span>
        <i style="float: right" class="iconfont icon-jiantou"></i>
      </div>
    </div>

    <div class="doc-applyforcash-mid-box">
      <div class="doc-applyforcash-mid-header-box">
        <span>明细</span>
      </div>
      <div class="doc-applyforcash-mid-mid-box">
        <p style="color: #a8a8a8">可提现金额</p>
        <p class="doc-applyforcash-mid-money">¥600.00</p>
      </div>
      <div class="doc-applyforcash-bottom-box">
        <span style="color: #a8a8a8; font-size: 15px">申请提款后会在3个工作日内给您的账户打款，节假日延后。到款日根据不同的银行会有1~3天的差异。</span>
      </div>
      <b></b>
      <b></b>
    </div>

    <button class="doc-rev-detail-bottom-button">申请提现</button>

  </div>
</template>

<script>
  export default {
    name: 'docApplyForCash',
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss">
  .doc-ApplyForCash-Container-box {


    .doc-ApplyForCash-Header-Box {
      margin: 22px 16px 0;
      border-radius:5px;
      background:#ffffff;
      position: relative;
      -webkit-box-shadow:0 0 19px #d4dadc;
      -moz-box-shadow:0 0 19px #d4dadc;
      box-shadow:0 0 25px #d4dadc;

      .doc-ApplyForCash-Header-left {
        padding: 15px 15px 15px;
      }
  }
    .doc-applyforcash-mid-box {
      margin: 22px 16px 0;
      border-radius:5px;
      background:#ffffff;
      position: relative;
      margin-bottom:15px;
      -webkit-box-shadow:0 0 19px #d4dadc;
      -moz-box-shadow:0 0 19px #d4dadc;
      box-shadow:0 0 25px #d4dadc;

      .doc-applyforcash-mid-header-box {
        margin: 15px 15px 15px;
        border-bottom:1px dashed #62a39c;
        padding: 15px 0px 15px;
      }

      .doc-applyforcash-mid-mid-box {
        margin: 15px 15px 15px;
        padding: 15px 0px 15px;
        border-bottom:1px dashed #62a39c;

        .doc-applyforcash-mid-money {
          padding: 30px 0 0;
          color: #5da096;
          font-size: 30px;
        }
      }

      .doc-applyforcash-bottom-box {
        margin: 15px 15px 15px;
        padding: 5px 0px 20px;
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
        width: 7px;
        height: 14px;
        top: 40px;
        border: 1px solid #f4f4f4;
        z-index: 33;
        background:#f4f4f4;
        FILTER: alpha(opacity=0); /*androd*/
        appearance:none;  /*下拉框去掉右侧图标*/
        -moz-appearance:none;
        -webkit-appearance:none;
      }
    }
  }
</style>
