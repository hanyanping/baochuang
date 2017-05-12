<!-- 添加银行卡 -->
<template>
  <div class="doc-addBankCard-container-box">
    <div class="doc-addBankCard-header-box">
      <div class="doc-addBankCard-header-left-box">
        <span>选择银行</span>
      </div>
      <div class="doc-addBankCard-header-right-box">
        <div class="doc-addBankCard-header-right-smallbox">
          <select class="doc-addBankCard-header-right-select" v-model="selectedBank">
            <option value="">请选择银行</option>
            <option v-for="(bank, index) in content.support_bank_list" :value="bank.bank_name">{{bank.bank_name}}</option>
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
        <label>{{content.user_name}}</label>
      </div>
    </div>

    <div class="doc-addBankCard-header-box">
      <div class="doc-addBankCard-header-left-box">
        <span>银行卡号</span>
      </div>
      <div class="doc-addBankCard-header-right-name-box doc-addBankCard-header-right-input-box">
        <input class="doc-addBankCard-header-right-input" v-model="bankCode" type="tel" placeholder="请填写银行卡号（借记卡）" maxlength="19">
      </div>
    </div>

    <div class="doc-addBankCard-header-box">
      <div class="doc-addBankCard-header-left-box">
        <span>身份证号</span>
      </div>
      <div class="doc-addBankCard-header-right-name-box doc-addBankCard-header-right-input-box">
        <input class="doc-addBankCard-header-right-input" v-model="idCard" type="tel" placeholder="请填写正确身份证号" maxlength="18">
      </div>
    </div>

    <p class="doc-addBankCard-tip">您需要完善以上信息，方可申请提现</p>

    <button class="doc-addBankCard-bottom-button" @click="commitAddBank">提交</button>

  </div>

</template>

<script>
  import {Toast, Field, Indicator} from 'mint-ui';
  import netWrokUtils from '../../components/NetWrokUtils'

  export default {
    name: 'docAddBankCard',
    data () {
      return {
        authentication: '9abada2c209a05e2ebd462f7bf68c5cf',
        content: {},
        selectedBank: '',
        support_bank_list: [],
        bank_card: {},
        bankCode: '',
        idCard: '',
        bank_code:''
      }
    },

    created () {
    },

    mounted () {
      this.getBankInfo();
    },

    methods: {
      // 获取银行卡信息
      getBankInfo () {
        let that = this;
        var params = {
          authentication: that.authentication
        };
        netWrokUtils.post('/wx/baochuan_d/bankcard', params, (success) => {
          that.content = success.data.content;
          if (success.data.content.bank_card != '') {
            that.bank_card = success.data.bank_card;
//            that.bankCode = success.data.content.bank_card.bank_card;
          }
          that.support_bank_list = success.data.content.support_bank_list;
        }), (failure) => {
          console.log(failure);
        };
      },

      // 提交信息
      commitAddBank () {
        let that = this;
        console.log('that.selectedBank == '+ that.selectedBank);
        console.log(that.support_bank_list[that.selectedBank - 1]);
        for(let i in that.support_bank_list){
            if(that.selectedBank == that.support_bank_list[i].bank_name){
              that.bank_code = that.support_bank_list[i].bank_code ;
            }
        }
        if (!that.selectedBank) {
          Toast('请选择银行 !');
        }
        else if (!that.bankCode || !/^(\d{16}|\d{19})$/.test(that.bankCode)) {
          Toast('请输入正确的银行卡号 !');
          return;
        }
        else if (!that.idCard || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(that.idCard)) {
          Toast('身份证号格式不正确 !');
          return;
        }
        else {
          // 添加银行
          var params = {
            authentication: that.authentication,
            bank_code: that.bank_code,
            bank_name: that.selectedBank,
            bank_card: that.bankCode,
            id_card: that.idCard
          };
          netWrokUtils.post('/wx/baochuan_d/save_bankcard', params, (success) => {
            this.$router.push({ path:"/baochuan_d/docApplyForCash"});
          }), (failure) => {
          };
        }
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
            line-height: 16px;
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
