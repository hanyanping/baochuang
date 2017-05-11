<!-- 预约设置 -->
<template>
  <div style="background:#f4f4f4;min-height:100vh;">
    <div class="doc-appoint-container-box">
      <div class="doc-appoint-header-box">
        <div class="doc-appoint-header-one-box">
          <div>
            <span>预约功能</span>
          </div>
          <div>
            <mt-switch v-model="value" @change="change(value)"></mt-switch>
          </div>
        </div>

        <div class="doc-appoint-header-two-box" :class="{'isShowLine':!value}">
          <!-- 预约关闭显示此标签 -->
          <div v-show="value === false" class="doc-appoint-header-two-font">
            <span>预约功能关闭后，患者将不能向您发起预约。</span>
          </div>
          <!-- 预约开启显示此标签 -->
          <div v-show="value === true">
            <span>服务费用</span>
          </div>
          <div v-show="value === true" class="doc-appoint-two-select-box">
            <div class="doc-appoint-two-select-smallbox">
              <select v-model="costContent" class="doc-appoint-two-select" >
                <option value="0">0元/次</option>
                <option value="1">5元/次</option>
                <option value="2">10元/次</option>
                <option value="3">15元/次</option>
                <option value="4">20元/次</option>
                <option value="5">25元/次</option>
                <option value="6">30元/次</option>
              </select>
            </div>
            <div class="iconfont icon-jiantou doc-appoint-two-jiantou">
            </div>
          </div>
          <b class="header-two-nth header-two-nth-of-type-one"></b>
          <b class="header-two-nth header-two-nth-of-type-two"></b>
        </div>
        <!-- 预约开启显示此标签 -->
        <div v-show="value === true" class="doc-appoint-header-three-box">
          <div class="doc-appoint-three-number">
            <span>每次就诊可约的患者人数</span>
          </div>
          <div class="weui-cell__ft">
            <input class="weui-input" v-model="inputText" type="tel" placeholder="0">
            <span style="font-size:15px;color:#232323;">人</span>
          </div>
          <b class="header-three-nth header-three-nth-of-type-one"></b>
          <b class="header-three-nth header-three-nth-of-type-two"></b>
        </div>
      </div>
      <!-- 预约开启显示此标签 -->
      <div v-show="value === true" class="appointment-time">
        <div class="appointment-text">
          <i class="iconfont  icon-jilu"></i>
          <span class="text-time">可预约时间</span>
        </div>

        <div class="weui-grids reserve-grids" v-for="item in clinic_list">

          <div class="weui-grid">
            <p class="weui-grid__label" style="color:#232323;">{{item.day_name}}</p>
          </div>
          <a href="javascript:;" @click="amClick($event, item.day_name, item.am)" :class="{'reserve-selected-grid':item.am == 1}"  class="weui-grid">
            <p class="weui-grid__label" :class="{'weui-grid__select-label':item.am == 1}">上午</p>
          </a>
          <a href="javascript:;" @click="pmClick($event, item.day_name, item.pm)" :class="{'reserve-selected-grid':item.pm == 1}" class="weui-grid">
            <p class="weui-grid__label" :class="{'weui-grid__select-label':item.pm == 1}">下午</p>
          </a>

        </div>

      </div>

      <button v-show="value === true" class="doc-appoint-bottom-button" @click="commitSetting">保存</button>
    </div>
  </div>


</template>

<script>
  import {Indicator, MessageBox, Toast} from 'mint-ui';
  import netWrokUtils from '../../components/NetWrokUtils';

  export default {
    name: 'docAppointmentSetting',
    data () {
      return {
        value: '',
        authentication: '9abada2c209a05e2ebd462f7bf68c5cf',
        content: {},
        inputText: '',
        costContent: 0,
        clinic_list: [],
        selectCost: '',
      }
    },

    mounted () {
      // 获取预约设置信息
      this.getAppointmentSett();
    },

    created () {
      document.getElementsByTagName('title')[0].innerHTML = '预约设置';
      // 获取上个页面传递过来的值,是否开启了预约设置
//      eventBus.$on('values', (thing) => {
//        console.log(thing);
//        if (thing == 1) {
//          this.value = true;
//        } else {
//          this.value = false;
//        }
//      });
    },

    beforeDestroy () {
//      eventBus.$off('values');
    },

    methods: {
      // 获取预约设置信息
      getAppointmentSett () {
        Indicator.open();
        let that = this;
        var params = {
          authentication: that.authentication
        };
        netWrokUtils.post('/wx/baochuan_d/getappointmentsettinginfo', params, (success) => {
          Indicator.close();
          that.content = success.data.content;
          that.clinic_list = success.data.content.clinic_list;

          if (that.content.open_subscribe == 1) { // 预约开
            that.value = true;
          } else { // 预约关
            that.value = false;
          }
          that.inputText = that.content.subscribe_limit;
          switch (that.content.subscribe_cost) {
            case 0:
              that.costContent = 0;
              break;
            case 5:
              that.costContent = 1;
              break;
            case 10:
              that.costContent = 2;
              break;
            case 15:
              that.costContent = 3;
              break;
            case 20:
              that.costContent = 4;
              break;
            case 25:
              that.costContent = 5;
              break;
            case 30:
              that.costContent = 6;
              break;
            default:
              break;
          }
        }), (failure) => {
          Indicator.close();
        };
      },

      change (value) {
        if (value == false) { // 预约关
          Indicator.open();
          let that = this;
          var params;
          params = {
            authentication: that.authentication,
            open_subscribe: 0,
          };
          netWrokUtils.post('/wx/baochuan_d/setappointment', params, (success) => {
            Indicator.close();
            var str = '<div style="text-align: center">预约设置成功!</div>'
            MessageBox.alert(str, ' ').then(action => {
              this.$router.push({ path:"/baochuan_d/docInfo"});
            });
          }), (failure) => {
            Indicator.close();
            console.log(failure);
          };
        } else { // 如果switch滑动到开的状态,从后台拉取数据模板,为v-for循环创建(因为时间表是根据clinic_list数据结构循环创建出来的),如果不拉取模板则创建不出来.
          Indicator.open();
          let that = this;
          var params = {
            authentication: that.authentication
          };
          netWrokUtils.post('/wx/baochuan_d/getappointmentsettinginfo', params, (success) => {
            Indicator.close();
            that.content = success.data.content;
            that.clinic_list = success.data.content.clinic_list;
            that.inputText = that.content.subscribe_limit;
            switch (that.content.subscribe_cost) {
              case 0:
                that.costContent = 0;
                break;
              case 5:
                that.costContent = 1;
                break;
              case 10:
                that.costContent = 2;
                break;
              case 15:
                that.costContent = 3;
                break;
              case 20:
                that.costContent = 4;
                break;
              case 25:
                that.costContent = 5;
                break;
              case 30:
                that.costContent = 6;
                break;
              default:
                break;
            }
          }), (failure) => {
            Indicator.close();
          };
        }
      },

      amClick (el, day, am) {
        var cln = el.currentTarget.className.indexOf('reserve-selected-grid');
        if (cln > 0) {
          el.currentTarget.className = 'weui-grid';
        } else {
          el.currentTarget.className = 'weui-grid reserve-selected-grid';
        }

        switch (day) {
          case '周一':
            if (am == 0) {
              this.clinic_list[0].am = 1;
            } else {
              this.clinic_list[0].am = 0;
            }
            break;

          case '周二':
            if (am == 0) {
              this.clinic_list[1].am = 1;
            } else {
              this.clinic_list[1].am = 0;
            }
            break;

          case '周三':
            if (am == 0) {
              this.clinic_list[2].am = 1;
            } else {
              this.clinic_list[2].am = 0;
            }
            break;

          case '周四':
            if (am == 0) {
              this.clinic_list[3].am = 1;
            } else {
              this.clinic_list[3].am = 0;
            }
            break;

          case '周五':
            if (am == 0) {
              this.clinic_list[4].am = 1;
            } else {
              this.clinic_list[4].am = 0;
            }
            break;

          case '周六':
            if (am == 0) {
              this.clinic_list[5].am = 1;
            } else {
              this.clinic_list[5].am = 0;
            }
            break;

          case '周日':
            if (am == 0) {
              this.clinic_list[6].am = 1;
            } else {
              this.clinic_list[6].am = 0;
            }
            break;
        };
      },

      pmClick (el, day, pm) {
        var cln = el.currentTarget.className.indexOf('reserve-selected-grid');
        if (cln > 0) {
          el.currentTarget.className = 'weui-grid';
        } else {
          el.currentTarget.className = 'weui-grid reserve-selected-grid';
        }

        switch (day) {
          case '周一':
            if (pm == 0) {
              this.clinic_list[0].pm = 1;
            } else {
              this.clinic_list[0].pm = 0;
            }
            break;

          case '周二':
            if (pm == 0) {
              this.clinic_list[1].pm = 1;
            } else {
              this.clinic_list[1].pm = 0;
            }
            break;

          case '周三':
            if (pm == 0) {
              this.clinic_list[2].pm = 1;
            } else {
              this.clinic_list[2].pm = 0;
            }
            break;

          case '周四':
            if (pm == 0) {
              this.clinic_list[3].pm = 1;
            } else {
              this.clinic_list[3].pm = 0;
            }
            break;

          case '周五':
            if (pm == 0) {
              this.clinic_list[4].pm = 1;
            } else {
              this.clinic_list[4].pm = 0;
            }
            break;

          case '周六':
            if (pm == 0) {
              this.clinic_list[5].pm = 1;
            } else {
              this.clinic_list[5].pm = 0;
            }
            break;

          case '周日':
            if (pm == 0) {
              this.clinic_list[6].pm = 1;
            } else {
              this.clinic_list[6].pm = 0;
            }
            break;
        };
      },

      // 保存设置
      commitSetting () {
        Indicator.open();
        let that = this;
        console.log(that.costContent);
        console.log(typeof that.costContent);

        if (that.costContent == 0) {
          that.selectCost = 0;
        } else if (that.costContent == 1) {
          that.selectCost = 5;
        } else if (that.costContent == 2) {
          that.selectCost = 10;
        } else if (that.costContent == 3) {
          that.selectCost = 15;
        } else if (that.costContent == 4) {
          that.selectCost = 20;
        } else if (that.costContent == 5) {
          that.selectCost = 25;
        } else if (that.costContent == 6) {
          that.selectCost = 30;
        }

        var params = {
          authentication: that.authentication,
          open_subscribe: 1,
          subscribe_cost: that.selectCost,
          subscribe_limit: that.inputText,
          z1: that.clinic_list[0].am + ',' + that.clinic_list[0].pm + ',' + that.clinic_list[0].night,
          z2: that.clinic_list[1].am + ',' + that.clinic_list[1].pm + ',' + that.clinic_list[1].night,
          z3: that.clinic_list[2].am + ',' + that.clinic_list[2].pm + ',' + that.clinic_list[2].night,
          z4: that.clinic_list[3].am + ',' + that.clinic_list[3].pm + ',' + that.clinic_list[3].night,
          z5: that.clinic_list[4].am + ',' + that.clinic_list[4].pm + ',' + that.clinic_list[4].night,
          z6: that.clinic_list[5].am + ',' + that.clinic_list[5].pm + ',' + that.clinic_list[5].night,
          z7: that.clinic_list[6].am + ',' + that.clinic_list[6].pm + ',' + that.clinic_list[6].night,
        };
        console.log(params);
        netWrokUtils.post('/wx/baochuan_d/setappointment', params, (success) => {
          Indicator.close();
          console.log(success);
          MessageBox.alert('预约设置成功!', ' ').then(action => {
            this.$router.push({ path:"/baochuan_d/docInfo"});
          });
        }), (failure) => {
          Indicator.close();
          console.log(failure);
        };
      }
    }
  }
</script>

<style lang="scss">
  .doc-appoint-container-box {
    padding-top:25px;
    .appointment-time{
      margin:22px 12px;
      .reserve-grids{
        background: #fff;
        position: relative;
        overflow: hidden;
        .weui-grid{
          padding: 13px 0;
          position: relative;
          float: left;
          width: 33.33333333%;
          text-decoration: none;
          box-sizing: border-box;
          .weui-grid__label{
            text-align: center;
            display: block;
            color: #666666;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 15px;
          }
          .weui-grid__select-label {
            color: #5ac4b2;
          }
        }
        .weui-grid:before {
          content: " ";
          position: absolute;
          right: 0;
          bottom: 0;
          color: #d9d9d9;
          top: 0;
          width: 1px;
          border-right: 1px solid #d9d9d9;
          -webkit-transform-origin: 100% 0;
          transform-origin: 100% 0;
          -webkit-transform: scaleX(.5);
          transform: scaleX(.5);
        }
        .weui-grid:after {
          left: 0;
          height: 1px;
          border-bottom: 1px solid #d9d9d9;
          -webkit-transform-origin: 0 100%;
          transform-origin: 0 100%;
          -webkit-transform: scaleY(.5);
          transform: scaleY(.5);
          content: " ";
          position: absolute;
          right: 0;
          bottom: 0;
          color: #d9d9d9;
        }
        .reserve-selected-grid{
          padding: 13px 0;
          background-color: #daf4fa;
        }
      }
      .weui-grids:before {
        right: 0;
        height: 1px;
        border-top: 1px solid #d9d9d9;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
      }
      .weui-grids:after {
        width: 1px;
        bottom: 0;
        border-left: 1px solid #d9d9d9;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleX(.5);
        transform: scaleX(.5);
      }
      .weui-grids:after, .weui-grids:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        color: #d9d9d9;
      }
      .appointment-text{
        margin-bottom:20px;
        .text-time{
          color:#232323;
          font-size:16px;
          padding-left:3px;
        }
        .icon-jilu{
          font-size:18px;
          color:#232323;
        }
      }
    }
    .doc-appoint-header-box {
      margin: 0 11px;
      border-radius:5px;
      background:#ffffff;
      position: relative;
      -webkit-box-shadow:0 0 19px #d4dadc;
      -moz-box-shadow:0 0 19px #d4dadc;
      box-shadow:0 0 19px #d4dadc;
      .doc-appoint-header-one-box {
        margin: 0px 10px 0;
        padding:10px 0;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        border-bottom:1px dashed #62a39c;
        line-height: 32px;
        font-size: 16px;
      }
      .doc-appoint-header-two-box {
        margin: 0px 10px 0;
        padding:10px 0;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        line-height: 32px;
        font-size: 16px;
        border-bottom:1px dashed #62a39c;

        .doc-appoint-header-two-font {
          color: #a0a0a0;
        }
        .doc-appoint-two-select-box {
          display: flex;
          .doc-appoint-two-select-smallbox {
            padding-right: 5px;
            .doc-appoint-two-select {
              direction: rtl;
              font-size: 16px;
              -webkit-appearance: none;
              border: 0;
              outline: none;
              background-color:transparent;
              /*color: #ffffff;*/
            }
          }
          .doc-appoint-two-jiantou {
            font-size: 20px;
            color: #cccccc;
          }
        }

        .header-two-nth-of-type-one{
          left: 0px;
          border-radius: 0 14px 14px 0;
        }
        .header-two-nth-of-type-two{
          right: 0px;
          border-radius: 14px 0 0 14px;
        }
        .header-two-nth{
          position: absolute;
          width: 7px;
          height: 14px;
          top: 45px;
          border: 1px solid #f4f4f4;
          z-index: 33;
          background:#f4f4f4;
          FILTER: alpha(opacity=0); /*androd*/
          appearance:none;  /*下拉框去掉右侧图标*/
          -moz-appearance:none;
          -webkit-appearance:none;
        }
      }
      .isShowLine {
        border-bottom: none;
      }
      .doc-appoint-header-three-box {
        display: flex;
        line-height: 53px;
        font-size: 16px;
        padding:0px 10px 0;
        .doc-appoint-three-number{
          flex:1;
          width:170px;
        }
        .weui-cell__ft{
          font-size: 15px;
          text-align: right;
          color: #999;
          input{
            border: 1px solid #ccc;
            width: 70px;
            height: 29px;
            margin-right: 6px;
            border-radius: 4px;
            text-align: center;
            outline: 0;
            -webkit-appearance: none;
          }
        }

        .header-three-nth-of-type-one{
          left: 0px;
          border-radius: 0 14px 14px 0;
        }
        .header-three-nth-of-type-two{
          right: 0px;
          border-radius: 14px 0 0 14px;
        }
       .header-three-nth{
          position: absolute;
          width: 7px;
          height: 14px;
          top: 98px;
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
    .doc-appoint-bottom-button {
      display: block;
      width: 90%;
      height:45px;
      margin: auto;
      background:#62a39c;
      border:1px solid #86B8B8;
      border-radius:22px;
      margin-top:36.5px;
      outline: none;
      font-size: 16px;
      color: #fff;
    }
  }
</style>
