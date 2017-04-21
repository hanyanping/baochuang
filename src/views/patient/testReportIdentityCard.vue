<!--检查报告-输入身份证页-->
<template>
  <div class="test-report-identity-card">
    <div class="testreportidentitycard-box">
      <h2 class="testreportidentitycard-head-box">请输入患者身份号:</h2>
      <div class="testreportidentitycard-input-box">
        <input placeholder="请输入身份证" class="testreportidentitycard-input"/>
        <div class="testreportidentitycard-line"></div>
      </div>
      <div class="testreportidentitycard-bottom-box">
        <p class="testreportidentitycard-bottom-txt">请输入身份证号,获取您在保定市传染病医院的检查报告</p>
        <button class="toInfo">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
    .test-report-identity-card {
      min-height: 100vh;
      width: 100%;
      background-image: url(../../assets/img/bgPerfectInfo.png);
      background-size: 100% 100%;
      position: fixed;

    .testreportidentitycard-box{
      padding-left: 40px;
      padding-right: 40px;

      .testreportidentitycard-head-box {
        color: #ffffff;
        padding-top: 30px;
      }

      .testreportidentitycard-input-box {
          width: 100%;
          padding-top:30px;

        .testreportidentitycard-input {
          outline: none;
          background: rgba(0, 0, 0, 0);
        }

        .testreportidentitycard-line {
          height: 1px;
          width: 80%;
          background: #ffffff;
          margin-top: 10px;
        }
      }

      .testreportidentitycard-bottom-box {
          line-height: 30px;
          width: 100%;

          .testreportidentitycard-bottom-txt {
            color: #fff;
            padding-top: 60px;
          }

          .toInfo {
            display: block;
            width: 100%;
            height: 45px;
            margin: auto;
            background: rgba(0, 0, 0, 0);
            color: #ffffff;
            border: 1px solid #fff;
            border-radius: 22px;
            margin-top: 25px;
            outline: none;
            font-size: 18px;
          }
        }

      }

    }

</style>
