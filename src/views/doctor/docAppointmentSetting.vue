<!-- 预约设置 -->
<template>
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
        <div>
          <span>每次就诊可约的患者人数</span>
        </div>
        <div class="doc-appoint-three-input-box">
          <div class="doc-appoint-three-input-smallbox">
            <input class="doc-appoint-three-input" placeholder="0" type="number">
          </div>
          <div class="doc-appoint-three-jiantou">
            <span>人</span>
          </div>
        </div>

        <b class="header-three-nth header-three-nth-of-type-one"></b>
        <b class="header-three-nth header-three-nth-of-type-two"></b>
      </div>


    </div>
  </div>

</template>

<style lang="scss">
  .doc-appoint-container-box {
    background:#ffffff;
    .doc-appoint-header-box {
      margin: 25px 15px 0;
      border-radius:5px;
      background:#ffffff;
      position: relative;
      -webkit-box-shadow:0 0 19px #d4dadc;
      -moz-box-shadow:0 0 19px #d4dadc;
      box-shadow:0 0 19px #d4dadc;
      .doc-appoint-header-one-box {
        margin: 0px 15px 0;
        padding-top: 22px;
        padding-bottom: 16.5px;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        border-bottom:1px dashed #62a39c;
        line-height: 32px;
        font-size: 16px;
      }
      .doc-appoint-header-two-box {
        margin: 0px 15px 0;
        padding-bottom: 19px;
        padding-top: 22px;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        line-height: 32px;
        font-size: 16px;

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
          left: -1px;
          border-radius: 0 14px 14px 0;
        }
        .header-two-nth-of-type-two{
          right: -1px;
          border-radius: 14px 0 0 14px;
        }
        .header-two-nth{
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
      .doc-appoint-header-three-box {
        margin: 0px 15px 0;
        padding-bottom: 17.5px;
        padding-top: 22px;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        line-height: 32px;
        font-size: 16px;
        border-top:1px dashed #62a39c;

        .doc-appoint-three-input-box {
          display: flex;
          .doc-appoint-three-input-smallbox {
            padding-right: 10px;
            width: 75px;

            .doc-appoint-three-input {
              float: right;
              /*direction: rtl;*/
              text-align: center;
              font-size: 16px;
              -webkit-appearance: none;
              border: 0;
              outline: none;
              /*background-color:black;*/
              /*color: #ffffff;*/
              border: 1px solid #d6d5d5;
              border-radius: 8px;
              width: 75%;
              height: 29px;
            }
          }
          .doc-appoint-three-jiantou {
            font-size: 16px;
            color: #000000;
          }
        }
        .header-three-nth-of-type-one{
          left: -1px;
          border-radius: 0 14px 14px 0;
        }
        .header-three-nth-of-type-two{
          right: -1px;
          border-radius: 14px 0 0 14px;
        }
       .header-three-nth{
          position: absolute;
          width: 7px;
          height: 14px;
          top: 140px;
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
