<!-- 我的信息 -->
<template>
  <div class="doc-myinfo-container-box">
    <div class="doc-myinfo-top-box">
      <div class="doc-myinfo-top-name-box">
        <span>姓名</span>
        <label class="doc-myinfo-top-name-right">王鲲鹏</label>
      </div>
      <div class="doc-myinfo-top-name-box">
        <span>医院</span>
        <label class="doc-myinfo-top-name-right">保定市传染病医院</label>
      </div>
      <div class="doc-myinfo-top-name-box">
        <span>科室</span>
        <label class="doc-myinfo-top-name-right">肝病二科A组</label>
      </div>
      <div class="doc-myinfo-top-name-box">
        <span>职称</span>
        <label class="doc-myinfo-top-name-right">主任医师</label>
      </div>
    </div>

    <footer class="doc-myinfo-bottom">
      <p>修改请联系您的医生助手</p>
      <p>或拨打客服电话400-7991-122</p>
    </footer>
  </div>
</template>

<script>
  export default {
    name : 'docMyInfo',
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss">
  .doc-myinfo-container-box {
    position: fixed; /* 固定 */
    height: 100vh;
    width: 100%;
    background-image: url('../../assets/img/bgPerfectInfo.png');
    background-size: 100% 100%;

    .doc-myinfo-top-box {
      color: #fff;
      font-size: 16px;
      margin: 0px 10px 0;

      .doc-myinfo-top-name-box {
        padding-top: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #bad6d3;

        .doc-myinfo-top-name-right {
          float: right;
          font-size: 14px;
        }
      }
    }
    .doc-myinfo-bottom {
      color: #d4d4d4;
      font-size: 14px;
      /*clear: both;*/
      /*display: block;*/
      text-align: center;
      /*margin: 0px auto;*/
      position: absolute;
      bottom: 30px;
      width:100%;
    }
  }
</style>
