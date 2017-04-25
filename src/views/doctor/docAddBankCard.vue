<!-- 添加银行卡 -->
<template>
  <div class="doc-addBankCard-container-box">
    <div class="doc-addBankCard-header-box">
      <div class="doc-addBankCard-header-left-box">
        <span>选择银行</span>
      </div>
      <div class="doc-addBankCard-header-right-box">
        <div class="doc-addBankCard-header-right-smallbox">
          <select class="doc-addBankCard-header-right-select">
            <option value="0">请选择银行</option>
            <option>工商银行</option>
            <option>建设银行</option>
            <option>招商银行</option>
          </select>
        </div>
        <div class="iconfont icon-jiantou doc-addBankCard-header-right-jiantou">
        </div>
      </div>
    </div>

    <div class="doc-addBankCard-header-box">
      <div class="doc-addBankCard-header-left-box">
        <span>开户人姓名</span>
      </div>
      <div class="doc-addBankCard-header-right-name-box">
        <label>王鲲鹏</label>
      </div>
    </div>

    <div class="doc-addBankCard-header-box">
      <div class="doc-addBankCard-header-left-box">
        <span>银行卡号</span>
      </div>
      <div class="doc-addBankCard-header-right-name-box doc-addBankCard-header-right-input-box">
        <input type="number" class="doc-addBankCard-header-right-input" placeholder="请填写银行卡号">
      </div>
    </div>

    <div class="doc-addBankCard-header-box">
      <div class="doc-addBankCard-header-left-box">
        <span>身份证号</span>
      </div>
      <div class="doc-addBankCard-header-right-name-box doc-addBankCard-header-right-input-box">
        <input type="number" class="doc-addBankCard-header-right-input" placeholder="请填写正确身份证号">
      </div>
    </div>

    <p class="doc-addBankCard-tip">您需要完善以上信息，方可申请提现</p>

    <button class="doc-addBankCard-bottom-button">提交</button>

  </div>

</template>

<script>
  export default {
    name: 'docAddBankCard',
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss">
  .doc-addBankCard-container-box {
    position: fixed; /* 固定 */
    height: 100vh;
    width: 100%;
    background-image: url('../../assets/img/bgPerfectInfo.png');
    background-size: 100% 100%;

    .doc-addBankCard-header-box {
      margin: 30px 15px 10px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #bad6d3;
      padding-bottom: 20px;
      flex-wrap: nowrap;

      .doc-addBankCard-header-left-box {
        color: #ffffff;
        font-size: 16px;
      }
      .doc-addBankCard-header-right-name-box {
        font-size: 14px;
        color: #ffffff;

        .doc-addBankCard-header-right-input {
          background-color:transparent;
          color:#fff;
          FILTER: alpha(opacity=0); /*androd*/
          appearance:none;  /*下拉框去掉右侧图标*/
          -moz-appearance:none;
          -webkit-appearance:none;
          text-align: right;
          outline: none;
          width: 100%;
        }
      }
      .doc-addBankCard-header-right-input-box {
        width: 70%;
      }

      .doc-addBankCard-header-right-box {
        display: flex;
        .doc-addBankCard-header-right-smallbox {
          padding-right: 5px;

          .doc-addBankCard-header-right-select {
            direction: rtl;
            font-size: 16px;
            -webkit-appearance: none;
            border: 0;
            outline: none;
            background-color:transparent;
            color: #ffffff;
          }
        }

        .doc-addBankCard-header-right-jiantou {
          font-size: 20px;
          color: #ffffff;
        }
      }
    }
    .doc-addBankCard-bottom-button {
      display: block;
      width: 90%;
      height:45px;
      margin: auto;
      border:1px solid #86B8B8;
      border-radius:22px;
      margin-top:15px;
      outline: none;
      font-size: 16px;
      color: #fff;
      background-color:transparent;
    }
    .doc-addBankCard-tip {
      color: #f8f8f8;
      padding-top: 60px;
      font-size: 14px;
      text-align: center;
    }
  }
</style>
