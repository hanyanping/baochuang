<!-- 查化验单页-选择框 -->
<template>
    <div class="selectTestReportCheck">
      <div class="selectTestReportCheck-titlebg-box"></div>
      <div class="selectTestReportCheck-list-box pos-relate">
          <div class="selectTestReportCheck-listheader-box border-bot-dash">
            <span class="selectTestReportCheck-listtitle-text">您的化验单,点击看详情:</span>
          </div>
          <span class="bg-grey half-circle-left circleleft pos-absolute"></span>
          <span class="bg-grey half-circle-right circleright pos-absolute"></span>

          <div class="selectTestReportCheck-listcontent-box">
            <i class="iconfont selectTestReportCheck-listcontent-yuan icon-yuan fl"></i>
            <span class="selectTestReportCheck-listitem-left-text fl fs14">HCV基因分型</span>
            <div class="selectTestReportCheck-listitem-right-box fr">
              <span class="selectTestReportCheck-listitem-right-text fs14">{{visitTime}}</span>
              <i class="iconfont selectTestReportCheck-listitem-right-icon icon-jiantou"></i>
            </div>
          </div>

      </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          visitTime: '2017-01-01',
        }
      }
    }
</script>

<style lang="scss">

  .selectTestReportCheck{
    height:100vh;
    width:100%;
    background: #f4f4f4;

    .selectTestReportCheck-titlebg-box{
      background: url(../../assets/img/selectTestReportCheck_bg.png) no-repeat center/cover;
      height:30vh;
    }

    .selectTestReportCheck-list-box{
      margin-left: 10px;
      margin-right: 10px;
      margin-top: -48px;
      background: #fff;
      border-radius: 5px;
      -webkit-box-shadow:0 0 50px #dbe5e4;
      -moz-box-shadow:0 0 50px #dbe5e4;
      box-shadow:0 0 50px #dbe5e4;
      padding-left : 10px;
      padding-right : 10px;

      .selectTestReportCheck-listheader-box{
         padding : 15px;
        .selectTestReportCheck-listtitle-text{
          color: #232323;
          font-size: 16px;
        }
      }

      .circleleft{
        top:40px;
        left:0;
        display:block;
      }

      .circleright{
        top:40px;
        right:0;
        display:block;
      }

      .selectTestReportCheck-listcontent-box{
        padding : 15px 10px;
        overflow:hidden;

        .selectTestReportCheck-listcontent-yuan{
          margin-top: 1px;
        }

        .selectTestReportCheck-listitem-left-text{
          color: #232323;
          font-size: 15px;
          margin-top: 2px;
          margin-left: 5px;
        }

        .selectTestReportCheck-listitem-right-box{
          .selectTestReportCheck-listitem-right-text{
            color: #999999;
            font-size: 15px;
          }
          .selectTestReportCheck-listitem-right-icon{
            margin-left: 5px;
            color: #b2b1b1;
          }
        }
      }
    }

  }

</style>
