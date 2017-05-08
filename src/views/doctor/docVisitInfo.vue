<!-- 复诊信息 -->
<template>
  <div class="doc-visi-container-box device-height">

    <div class="doc-visi-header-box pos-relate">
      <span v-show="isSetting === true" class="doc-visi-title">下次复诊时间</span>
      <span v-show="isSetting === true" class="doc-visi-title">2014-02-02</span>
      <i v-show="isSetting === true" class="iconfont icon-jiantou pos-absolute color-white doc-visi-youjiantou"></i>

      <span v-show="isSetting === false" class="doc-visit-noset-title">还未设置下次复诊时间</span>
      <button v-show="isSetting === false" class="doc-visit-noset-button">设置</button>
    </div>

    <div class="doc-visi-list-box">
      <div class="doc-visi-list-title-box">
        <i class="iconfont icon-jilu"></i>
        <span class="fs17">复诊记录</span>
      </div>
      <b></b>
      <b></b>

      <div class="doc-visi-list-cell" v-for="item in items">
        <span class="fl fs16">第一次复诊</span>
        <span class="fr fs16">2017.3.11</span>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'docVisitInfo',
    data () {
      return {
        items: [1,2,3],
        isSetting: true,
      }
    }
  }
</script>

<style lang="scss">
  .doc-visi-container-box {
    overflow: hidden;
    background: #f4f4f4;
    .doc-visi-header-box {
      margin: 20px 20px 0;
      font-size: 15px;
      display: flex;
      flex-direction: column;
      background: #5da096;
      height: 80px;
      border-radius: 7px;
      .doc-visi-title {
        padding-top: 15px;
        text-align: center;
        color: #ffffff;
      }
      .doc-visi-youjiantou {
        right: 10px;
        line-height:80px;
      }
      .doc-visit-noset-title {
        padding-top: 15px;
        text-align: center;
        color: rgba(255,255,255,0.5);
      }
      .doc-visit-noset-button {
        border:1px solid #ffffff;
        border-radius:20px;
        font-size: 14px;
        color: #ffffff;
        width: 86px;
        margin: auto;
        -webkit-appearance:none;
        background-color:transparent;
        outline: none;
      }
    }
    .doc-visi-list-box {
      margin: 15px 20px 0;
      border-radius:5px;
      background:#ffffff;
      position: relative;
      -webkit-box-shadow:0 0 19px #d4dadc;
      -moz-box-shadow:0 0 19px #d4dadc;
      box-shadow:0 0 25px #d4dadc;
      .doc-visi-list-title-box {
        padding: 15px 20px;
        border-bottom:1px dashed #62a39c;
      }
      .doc-visi-list-cell {
        padding: 20px 20px 35px;
        color: #666666;
      }
      b {
        position: absolute;
        top: 40px;
        width: 7px;
        height: 14px;
        border: 1px solid #f4f4f4;
        z-index: 33;
        background:#f4f4f4;
        FILTER: alpha(opacity=0); /*androd*/
        appearance:none;  /*下拉框去掉右侧图标*/
        -moz-appearance:none;
        -webkit-appearance:none;
      }
      b:nth-of-type(1){
        left: 0px;
        border-radius: 0 14px 14px 0;
      }
      b:nth-of-type(2){
        right: 0px;
        border-radius: 14px 0 0 14px;
      }
    }
  }
</style>
