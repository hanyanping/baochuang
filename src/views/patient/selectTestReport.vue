<!-- 查化验单页 -->
<template>
    <div class="selectTestReport">
      <div class="selectTestReport-titlebg-box"></div>
      <div class="selectTestReport-list-box pos-relate">
          <div class="selectTestReport-listheader-box border-bot-dash">
            <span class="selectTestReport-listtitle-text">您的化验单,点击看详情:</span>
          </div>
          <span class="bg-grey half-circle-left circleleft pos-absolute"></span>
          <span class="bg-grey half-circle-right circleright pos-absolute"></span>

          <div class="selectTestReport-listcontent-box">
            <span class="selectTestReport-listitem-left-text fl fs14">HCV基因分型</span>
            <div class="selectTestReport-listitem-right-text fr">
              <span class="fs14">{{visitTime}}</span>
              <i class="iconfont icon-jiantou"></i>
            </div>
          </div>

      </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          visitTime: '2017-01-01'
        }
      }
    }
</script>

<style lang="scss">

  .selectTestReport{
    height:100vh;
    width:100%;
    background: #f4f4f4;

    .selectTestReport-titlebg-box{
      background: #06b80a;
      height:30vh;
    }

    .selectTestReport-list-box{
      margin-left: 10px;
      margin-right: 10px;
      margin-top: -55px;
      background: #fff;
      border-radius: 5px;
      -webkit-box-shadow:0 0 50px #dbe5e4;
      -moz-box-shadow:0 0 50px #dbe5e4;
      box-shadow:0 0 50px #dbe5e4;
      padding-left : 10px;
      padding-right : 10px;

      .selectTestReport-listheader-box{
         padding : 20px;
        .selectTestReport-listtitle-text{
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

      .selectTestReport-listcontent-box{
        padding : 20px;
        overflow:hidden;
        .selectTestReport-listitem-left-text{
          color: #000;
        }

        .selectTestReport-listitem-right-text{
          color: #000;
        }
      }
    }

  }

</style>
