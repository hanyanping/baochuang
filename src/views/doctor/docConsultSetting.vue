<!-- 咨询设置 -->
<template>
  <div class="doc-ConsultSetting-Container-box">
    <div class="doc-ConsultSetting-Header-box">
      <div class="doc-ConsultSetting-Header-one-box">
        <div class="doc-ConsultSetting-Header-one-font">
          <span>咨询设置</span>
        </div>
        <div>
          <mt-switch v-model="value"></mt-switch>
        </div>
      </div>

      <div class="doc-ConsultSetting-Header-two-box">
        <div class="doc-ConsultSetting-Header-two-font">
          <span>咨询功能关闭后，患者将不能向您发起咨询。</span>
        </div>
      </div>
      <b></b>
      <b></b>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'docConsultSetting',
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss">
  .doc-ConsultSetting-Container-box {

    .doc-ConsultSetting-Header-box {
      margin: 22px 16px 0;
      border-radius:5px;
      background:#ffffff;
      position: relative;
      -webkit-box-shadow:0 0 19px #d4dadc;
      -moz-box-shadow:0 0 19px #d4dadc;
      box-shadow:0 0 19px #d4dadc;

      .doc-ConsultSetting-Header-one-box {
        padding-top: 15px;
        padding-bottom: 15px;
        margin: 0px 10px 0;
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
        padding-top: 15px;
        padding-bottom: 15px;
        margin: 0px 10px 0;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        line-height: 32px;

        .doc-ConsultSetting-Header-two-font {
          font-size: 16px;
          color: #a0a0a0;
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
        top: 55px;
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
