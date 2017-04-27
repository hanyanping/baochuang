<!--检查报告-输入身份证页-->
<template>
  <div class="testReportIdentityCard">
    <div class="testReportIdentityCard-box">
      <h2 class="testReportIdentityCard-head-box">请输入患者身份号:</h2>
      <div class="testReportIdentityCard-input-box">
        <input placeholder="请输入身份证" class="testReportIdentityCard-input"/>
        <div class="testReportIdentityCard-line"></div>
      </div>
      <div class="testReportIdentityCard-bottom-box">
        <p class="testReportIdentityCard-bottom-txt">请输入身份证号,获取您在保定市传染病医院的检查报告</p>
        <router-link to="javascrpit:void(0)" class="toInfo">确定</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
    .testReportIdentityCard {
      height: 100vh;
      width: 100%;
      background-image: url(../../assets/img/bgPerfectInfo.png);
      background-size: 100% 100%;
      position: fixed;

    .testReportIdentityCard-box{
      padding-left: 20px;
      padding-right: 20px;

      .testReportIdentityCard-head-box {
        color: #ffffff;
        margin-top: 50px;
      }

      .testReportIdentityCard-input-box {
          width: 100%;
          padding-top:30px;

        .testReportIdentityCard-input {
          outline: none;
          font-size: 15px;
          background: rgba(0, 0, 0, 0);
        }

        .testReportIdentityCard-line {
          height: 1px;
          width: 100%;
          background: #ffffff;
          margin-top: 10px;
        }
      }

      .testReportIdentityCard-bottom-box {
          line-height: 20px;
          width: 100%;
          position: fixed;
          bottom: 14px;

          .testReportIdentityCard-bottom-txt {
            color: #fff;
            width: 90%;
            font-size: 15px;
          }

          .toInfo {
            display: inline-block;
            width: 88%;
            height: 45px;
            line-height: 45px;
            text-align: center;
            background: rgba(0, 0, 0, 0);
            color: #ffffff;
            border: 1px solid #fff;
            border-radius: 22px;
            margin-top: 15px;
            outline: none;
            font-size: 18px;
          }
        }
      }
    }

</style>
