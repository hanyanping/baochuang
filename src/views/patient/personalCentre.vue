<!--个人中心页面-->
<template>
  <div class="personalCentre">
    <div class="personalCentre-box">
      <div class="personalCentre-header-box">
        <div style="display:inline-block;height:100%;line-height: 50px;">
          <img class="personalCentre-header-bg fl" src="../../assets/img/second.png">
          <span class="personalCentre-header-text fl">士应该---{{auth}}</span>
        </div>
        <div style="display:inline-block">
          <span class="personalCentre-headerright-text">完善信息</span>
          <i class="iconfont personalCentre-header-icon icon-jiantou"></i>
        </div>
      </div>
    </div>

    <div class="personalCentre-menu-box pos-relate">
        <div class="personalCentre-menu-line-box border-bot-dash ">
          <span class="personalCentre-menu-text">复诊记录</span>
          <i class="iconfont icon-jiantou personalCentre-menu-icon"></i>
        </div>

        <span class="bg-grey half-circle-left circleleft pos-absolute"></span>
        <span class="bg-grey half-circle-right circleright pos-absolute"></span>

        <div class="personalCentre-menu-line-box border-bot-dash "  >
          <span class="personalCentre-menu-text">预约记录</span>
          <i class="iconfont icon-jiantou personalCentre-menu-icon"></i>
        </div>

        <div class="personalCentre-menu-line-box border-bot-dash">
          <span class="personalCentre-menu-text">就诊记录</span>
          <i class="iconfont icon-jiantou personalCentre-menu-icon"></i>
        </div>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        auth: localStorage.getItem('auth')
      }
    }
  }
</script>

<style lang="scss">

  .personalCentre{
    background: url('../../assets/img/personalCentre_bg.png') no-repeat center/cover;
    height:30vh;

    .personalCentre-box{
      padding-top: 30px;
      padding-left: 20px;
      padding-right: 20px;

      .personalCentre-header-box{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height:50px;
        line-height:50px;

        .personalCentre-header-bg{
          width: 50px;
          height:50px;
          border-radius: 50%;
          display:inline-block;
        }

        .personalCentre-header-text{
          color: white;
          font-size: 16px;
          margin-left:4px;
        }

        .personalCentre-headerright-text{
          color: #e4f0ef;
          font-size: 16px;
          margin-left:4px;
        }

        .personalCentre-header-icon{
          color: white;
        }
      }

    }

    .personalCentre-menu-box{
      border-radius: 5px;
      background: white;
      margin-left: 20px;
      margin-right: 20px;
      margin-top: 10vh;
      -webkit-box-shadow:0 0 50px #dbe5e4;
      -moz-box-shadow:0 0 50px #dbe5e4;
      box-shadow:0 0 50px #dbe5e4;

      .personalCentre-menu-line-box{
        height: 2vh;
        display: flex;
        flex-direction: row;
        padding: 20px;
        margin-right: 10px;
        margin-left: 10px;
        justify-content: space-between;

        .personalCentre-menu-text{
          color: #232323;
          font-size: 16px;
        }

        .personalCentre-menu-icon{
          color: #cecece;
        }
      }

      .circleleft{
        top:46px;
        left:0;
        display:block;
      }

      .circleright{
        top:46px;
        right:0;
        display:block;
      }

    }
  }

</style>
