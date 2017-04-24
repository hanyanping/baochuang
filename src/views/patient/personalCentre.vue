<!--个人中心页面-->
<template>
  <div class="personalCentre">
    <div class="personalCentre-box">
      <div class="personalCentre-header-box">
        <div>
          <span class="personalCentre-header-text">士应该</span>
        </div>
        <div>
          <span class="personalCentre-header-text">完善信息</span>
          <i class="iconfont personalCentre-header-icon icon-jiantou"></i>
        </div>
      </div>
    </div>

    <div class="personalCentre-menu-box pos-relate">
        <div class="personalCentre-menu-line-box border-bot-dash ">
          <span class="personalCentre-menu-text">复诊记录</span>
          <i class="iconfont icon-jiantou"></i>
        </div>

        <span class="bg-grey half-circle-left circleleft pos-absolute"></span>
        <span class="bg-grey half-circle-right circleright pos-absolute"></span>

        <div class="personalCentre-menu-line-box border-bot-dash "  >
          <span class="personalCentre-menu-text">预约记录</span>
          <i class="iconfont icon-jiantou"></i>
        </div>

        <div class="personalCentre-menu-line-box border-bot-dash">
          <span class="personalCentre-menu-text">就诊记录</span>
          <i class="iconfont icon-jiantou"></i>
        </div>
    </div>

  </div>
</template>

<script>
  export default {



  }
</script>

<style lang="scss">

  .personalCentre{
    background: #5da096;
    height:30vh;

    .personalCentre-box{
      padding-top: 50px;
      padding-left: 20px;
      padding-right: 20px;

      .personalCentre-header-box{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .personalCentre-header-text{
          color: white;
          font-size: 16px;
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
      margin-top: 45px;
      -webkit-box-shadow:0 0 50px #dbe5e4;
      -moz-box-shadow:0 0 50px #dbe5e4;
      box-shadow:0 0 50px #dbe5e4;

      .personalCentre-menu-line-box{
        display: flex;
        flex-direction: row;
        padding: 20px;
        margin-right: 10px;
        margin-left: 10px;
        justify-content: space-between;

        .personalCentre-menu-text{
          color: #000;
          font-size: 14px;
        }
      }

      .circleleft{
        top:50px;
        left:0;
        display:block;
      }

      .circleright{
        top:50px;
        right:0;
        display:block;
      }

    }
  }

</style>
