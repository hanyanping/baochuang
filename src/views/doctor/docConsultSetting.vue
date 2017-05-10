<!-- 咨询设置 -->
<template>
  <div class="doc-ConsultSetting-Container-box">
    <div class="doc-ConsultSetting-Header-box">
      <div class="doc-ConsultSetting-Header-one-box">
        <div class="doc-ConsultSetting-Header-one-font">
          <span>咨询设置</span>
        </div>
        <div>
          <mt-switch v-model="value" @change="change(value)"></mt-switch>
        </div>
      </div>

      <div class="doc-ConsultSetting-Header-two-box">
        <!-- 咨询关闭 显示此标签 -->
        <div v-show="value === false" class="doc-ConsultSetting-Header-two-font">
          <span>咨询功能关闭后，患者将不能向您发起咨询。</span>
        </div>
        <!-- 咨询开启 显示此标签 -->
        <div v-show="value === true">
          <span>服务费用</span>
        </div>

        <div v-show="value === true" class="doc-ConsultSetting-two-select-box">
          <div class="doc-ConsultSetting-two-select-smallbox">
            <input v-model="inputText" type="tel" style="text-align: right; width: 100px" placeholder="0">
          </div>
          <div style="display: flex">
            <span style="flex: 1">元</span>
            <div class="iconfont icon-jiantou doc-ConsultSetting-two-jiantou"></div>
          </div>
        </div>
      </div>

      <b></b>
      <b></b>
    </div>

    <!-- 咨询开启或关闭 界面显示切换 -->
    <button class="doc-ConsultSetting-button" @click="commitSett" :class="{'isClose':!value}">保存</button>
    <footer class="doc-ConsultSetting-tip" :class="{'isClose':!value}">
      <p>1、咨询功能开启后，患者将会向您发起咨询，每次咨询费用将按照您的设置进行付费。</p>
      <p>2、每次咨询有效期为24小时，如您未按时回复，服务费用将自动退回给患者句号</p>
    </footer>

  </div>
</template>

<script>
  import {Indicator, MessageBox, Toast} from 'mint-ui';
  import netWrokUtils from '../../components/NetWrokUtils';

  export default {
    name: 'docConsultSetting',
    data () {
      return {
        value: '',
        authentication: '9abada2c209a05e2ebd462f7bf68c5cf',
        inputText: '',
        content: {}
      }
    },

    mounted () {
      // 获取咨询设置信息
      this.getConsultInfo();
    },

    created () {
      document.getElementsByTagName('title')[0].innerHTML = '咨询设置';
//      // 获取上个页面传递过来的值,是否开启了咨询设置
//      eventBus.$on('value', (thing) => {
//        console.log(thing);
//        if (thing == 1) {
//          this.value = true;
//        } else {
//          this.value = false;
//        }
//      });
    },

//    beforeDestroy () {
//      eventBus.$off('value');
//    },

    methods: {
      // 获取咨询设置信息
      getConsultInfo () {
        Indicator.open();
        let that = this;
        var params = {
          authentication: that.authentication
        };
        netWrokUtils.post('/wx/baochuan_d/getconsultsettinginfo', params, (success) => {
          console.log(success);
          Indicator.close();
          that.content = success.data.content;
          if (that.content.open_consult == 1) { // 咨询开
            that.value = true;
          } else { // 咨询关
            that.value = false;
          }
          that.inputText = that.content.consult_cost;
        }), (failure) => {
          console.log(failure);
          Indicator.close();
        };
      },

      change (value) {
        if (value == false) { // 咨询关
          Indicator.open();
          let that = this;
          var params;
          params = {
            authentication: that.authentication,
            openConsult: 0,
            consultCost: 0
          };
          netWrokUtils.post('/wx/baochuan_d/setthread', params, (success) => {
            Indicator.close();
            var str = '<div style="text-align: center">咨询设置成功!</div>'
            MessageBox.alert(str, ' ').then(action => {
            this.$router.push({ path:"/baochuan_d/docInfo"});
            });
          }), (failure) => {
            Indicator.close();
            console.log(failure);
          };
        }
      },

      // 提交咨询设置
      commitSett () {
        let that = this;
        if (parseInt(that.inputText) < 0) {
          Toast('服务费不能小于0元');
          return;
        }
        if (parseInt(that.inputText) > 200) {
          Toast('服务费不能大于200元');
          return;
        }

        if (that.value == true) {
          Indicator.open();
          var params = {
            authentication: that.authentication,
            openConsult: 1,
            consultCost: that.inputText
          };
          netWrokUtils.post('/wx/baochuan_d/setthread', params, (success) => {
            Indicator.close();
            var str = '<div style="text-align: center">咨询设置成功</div>'
            MessageBox.alert(str, ' ').then(action => {
            this.$router.push({ path:"/baochuan_d/docInfo"});
            });
          }), (failure) => {
            Indicator.close();
            console.log(failure);
          };
        }
      }

    }
  }
</script>

<style lang="scss">
  .doc-ConsultSetting-Container-box {

    .doc-ConsultSetting-Header-box {
      margin: 25px 15px 0;
      border-radius:5px;
      background:#ffffff;
      position: relative;
      -webkit-box-shadow:0 0 19px #d4dadc;
      -moz-box-shadow:0 0 19px #d4dadc;
      box-shadow:0 0 19px #d4dadc;

      .doc-ConsultSetting-Header-one-box {
        padding-top: 22px;
        padding-bottom: 16.5px;
        margin: 0px 15px 0;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        border-bottom:1px dashed #62a39c;
        line-height: 32px;

        .doc-ConsultSetting-Header-one-font {
          font-size: 16px;
        }
      }
      .doc-ConsultSetting-Header-two-box {
        padding-top: 22px;
        padding-bottom: 16.5px;
        margin: 0px 15px 0;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        font-size: 16px;
        line-height: 32px;

        .doc-ConsultSetting-Header-two-font {
          color: #a0a0a0;
        }
        /* 选择服务费样式 */
        .doc-ConsultSetting-two-select-box {
          display: flex;
           .doc-ConsultSetting-two-select-smallbox {
             padding-right: 5px;
             .doc-ConsultSetting-two-select {
               direction: rtl;
               font-size: 16px;
               -webkit-appearance: none;
               border: 0;
               outline: none;
               background-color:transparent;
               /*color: #ffffff;*/
             }
           }
           .doc-ConsultSetting-two-jiantou {
             font-size: 20px;
             color: #cccccc;
           }
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
        width: 7px;
        height: 14px;
        top: 63px;
        border: 1px solid #f4f4f4;
        z-index: 33;
        background:#f4f4f4;
        FILTER: alpha(opacity=0); /*androd*/
        appearance:none;  /*下拉框去掉右侧图标*/
        -moz-appearance:none;
        -webkit-appearance:none;
      }
    }

    .doc-ConsultSetting-button {
      display: block;
      width: 90%;
      height:45px;
      margin: auto;
      background:#62a39c;
      border:1px solid #86B8B8;
      border-radius:22px;
      margin-top:50px;
      outline: none;
      font-size: 16px;
      color: #fff;
    }
    .doc-ConsultSetting-tip {
      color: #6b6b6c;
      font-size: 14px;
      clear: both;
      display: block;
      /*text-align: center;*/
      margin: 27.5px 20px 0;
      position: absolute;
      /*bottom: 30px;*/
      /*width:100%;*/
      line-height: 25px;
    }
    .isClose {
       display: none;
     }
  }
</style>
