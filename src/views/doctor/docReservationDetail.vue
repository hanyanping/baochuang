<!-- 预约详情 -->
<template>
  <div class="doc-rev-detail-container-box">
    <div class="doc-rev-detail-top-box">
      <div class="doc-rev-detail-top-status-box">
        <span>服务状态</span>
        <span class="doc-rev-detail-top-status-span">待确认</span>
      </div>

      <div class="doc-rev-detail-top-patientinfo-box">
        <div>
          <span>患者信息</span>
        </div>
        <div>
          <span>张小帅</span>
          <span>男</span>
          <span>28岁</span>
          <span>丙肝</span>
        </div>
      </div>

      <div class="doc-rev-detail-top-revtime-box">
        <div>
          <span>预约时间</span>
        </div>
        <div>
          <span>2017-02-22</span>
          <span>周三</span>
          <span>上午</span>
        </div>
      </div>
    </div>

    <div class="doc-rev-detail-mid-box">
      <div class="doc-rev-detail-mid-title">
        <span class="iconfont icon-laba"></span>
        <span>就诊前一天22点失效,无法确认</span>
      </div>
    </div>

    <button class="doc-rev-detail-bottom-button">确认接收</button>
    <a class="fr doc-rev-detail-bottom-nobutton">暂不接收</a>
  </div>
</template>

<script>
  export default {
    name : 'docReservationDetail',
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss">
  .doc-rev-detail-container-box {
    background-color: #f4f4f4;
    position: fixed; /* 固定 */
    height: 100vh;
    width: 100%;

    .doc-rev-detail-top-box {
      font-size: 14px;
      margin: 20px 20px 0;
      background-color: #fff;
      box-shadow:0px 0px 10px #7e8c8d; /* 边框阴影效果 */
      border-radius: 3px;

      .doc-rev-detail-top-status-box {
        padding: 25px 0px;
        margin: 5px 10px;
        padding-bottom: 20px;
        border-bottom: 1px dashed #06b80a;

        .doc-rev-detail-top-status-span {
          color: #ff0000;
          float: right;
        }
      }
      .doc-rev-detail-top-patientinfo-box {
        padding: 20px 0px;
        margin: 5px 10px;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        padding-bottom: 20px;
        border-bottom: 1px dashed #06b80a;
      }

      .doc-rev-detail-top-revtime-box {
        padding: 20px 0px;
        margin: 5px 10px;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
      }
    }
    .doc-rev-detail-mid-box {
      font-size: 14px;
      margin: 20px 20px 0;
      background-color: #fff;
      box-shadow:0px 0px 10px #7e8c8d; /* 边框阴影效果 */
      border-radius: 3px;

      .doc-rev-detail-mid-title {
        padding: 15px 0px;
        margin: 0px 5px;

        .icon-laba {
          color: #e1bd2f;
        }
      }
    }
    .doc-rev-detail-bottom-button {
      display: block;
      width: 90%;
      height:45px;
      margin: auto;
      background:#62a39c;
      border:1px solid #86B8B8;
      border-radius:22px;
      margin-top:70px;
      outline: none;
      font-size: 16px;
      color: #fff;
    }
    .doc-rev-detail-bottom-nobutton {
      color: #60A39B;
      padding-top: 30px;
      padding-right: 30px;
      font-size: 14px;
    }
  }
</style>
