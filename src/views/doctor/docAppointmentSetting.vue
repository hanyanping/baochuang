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
            <mt-switch v-model="value"></mt-switch>
          </div>
        </div>

        <div class="doc-appoint-header-two-box">
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
              <select class="doc-appoint-two-select">
                <option value="0">0元/次</option>
                <option>5元/次</option>
                <option>10元/次</option>
                <option>15元/次</option>
                <option>20元/次</option>
                <option>25元/次</option>
                <option>30元/次</option>
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
            <input class="weui-input" type="tel">
            <span style="font-size:15px;color:#232323;">人</span>
          </div>
          <!--<div class="doc-appoint-three-input-box">-->
            <!--<div class="doc-appoint-three-input-smallbox">-->
              <!--<input class="doc-appoint-three-input" placeholder="0" type="number">-->
              <!--<span>人</span>-->
            <!--</div>-->
          <!--</div>-->

          <b class="header-three-nth header-three-nth-of-type-one"></b>
          <b class="header-three-nth header-three-nth-of-type-two"></b>
        </div>


      </div>
      <div class="appointment-time">
        <div class="appointment-text">
          <i class="iconfont  icon-jilu"></i>
          <span class="text-time">可预约时间</span>
        </div>
        <div class="weui-grids reserve-grids ">
          <div class="weui-grid">
            <p class="weui-grid__label" style="color:#232323;">星期一</p>
          </div>
          <a href="javascript:;" onclick="reserveToggleSubTime(this);" class="weui-grid">
            <p class="weui-grid__label" >上午</p>
          </a>
          <a href="javascript:;" onclick="reserveToggleSubTime(this);" class="weui-grid reserve-selected-grid">
            <p class="weui-grid__label">下午</p>
          </a>

          <div class="weui-grid">
            <p class="weui-grid__label" style="color:#232323;">星期二</p>
          </div>
          <a href="javascript:;" onclick="reserveToggleSubTime(this);" class="weui-grid">
            <p class="weui-grid__label">上午</p>
          </a>
          <a href="javascript:;" onclick="reserveToggleSubTime(this);" class="weui-grid reserve-selected-grid">
            <p class="weui-grid__label">下午</p>
          </a>

          <div class="weui-grid">
            <p class="weui-grid__label" style="color:#232323;">星期三</p>
          </div>
          <a href="javascript:;" onclick="reserveToggleSubTime(this);" class="weui-grid">
            <p class="weui-grid__label">上午</p>
          </a>
          <a href="javascript:;" onclick="reserveToggleSubTime(this);" class="weui-grid">
            <p class="weui-grid__label">下午</p>
          </a>

          <div class="weui-grid">
            <p class="weui-grid__label" style="color:#232323;">星期四</p>
          </div>
          <a href="javascript:;" onclick="reserveToggleSubTime(this);" class="weui-grid">
            <p class="weui-grid__label">上午</p>
          </a>
          <a href="javascript:;" onclick="reserveToggleSubTime(this);" class="weui-grid">
            <p class="weui-grid__label">下午</p>
          </a>
          <div class="weui-grid">
            <p class="weui-grid__label" style="color:#232323;">星期五</p>
          </div>
          <a href="javascript:;" onclick="reserveToggleSubTime(this);" class="weui-grid reserve-selected-grid">
            <p class="weui-grid__label">上午</p>
          </a>
          <a href="javascript:;" onclick="reserveToggleSubTime(this);" class="weui-grid">
            <p class="weui-grid__label">下午</p>
          </a>

          <div class="weui-grid">
            <p class="weui-grid__label" style="color:#232323;">星期六</p>
          </div>
          <a href="javascript:;" onclick="reserveToggleSubTime(this);" class="weui-grid">
            <p class="weui-grid__label">上午</p>
          </a>
          <a href="javascript:;" onclick="reserveToggleSubTime(this);" class="weui-grid reserve-selected-grid">
            <p class="weui-grid__label">下午</p>
          </a>
          <div class="weui-grid">
            <p class="weui-grid__label" style="color:#232323;">星期日</p>
          </div>
          <a href="javascript:;" onclick="reserveToggleSubTime(this);" class="weui-grid visit">
            <p class="weui-grid__label">上午</p>
          </a>
          <a href="javascript:;" onclick="reserveToggleSubTime(this);" class="weui-grid">

            <p class="weui-grid__label">下午</p>
          </a>
        </div>
      </div>
    </div>
  </div>


</template>

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
          box-sizing: border-box;
          .weui-grid__label{
            text-align: center;
            display: block;
            color: #232323;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 15px;
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
          background-color: #009FE9;
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
      .doc-appoint-header-three-box {
        display: flex;
        line-height: 53px;
        font-size: 16px;
        padding:10px 10px;
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
            height: 32px;
            margin-right: 6px;
            border-radius: 4px;
            text-align: center;
            outline: 0;
            -webkit-appearance: none;
          }
        }
        .doc-appoint-three-input-box {
          text-align: right;
          .doc-appoint-three-input-smallbox {
            width: 75px;
            .doc-appoint-three-input {
              border: 1px solid #ccc;
              width: 75px;
              height: 32px;
              margin-right: 6px;
              border-radius: 4px;
              text-align: center;
            }
          }
          .doc-appoint-three-jiantou {
            font-size: 16px;
            color: #000000;
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
  }
</style>

<script>
  export default {
    name: 'docAppointmentSetting',
    data () {
      return {
        value: true
      }
    }
  }
</script>
