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
        <!--<i class="iconfont selectTestReport-listcontent-yuan icon-yuan fl"></i>-->
        <span class="selectTestReport-listitem-left-text fl fs14">HCV基因分型</span>
        <div class="selectTestReport-listitem-right-box fr">
          <span class="selectTestReport-listitem-right-text fs14">{{visitTime}}</span>
          <i class="iconfont selectTestReport-listitem-right-icon icon-jiantou"></i>
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

  .selectTestReport{
    height:100vh;
    width:100%;
    background: #f4f4f4;

  .selectTestReport-titlebg-box{
    background: url(../../assets/img/selectTestReportCheck_bg.png) no-repeat center/cover;
    height:30vh;
  }

  .selectTestReport-list-box{
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

  .selectTestReport-listheader-box{
    padding : 15px;
  .selectTestReport-listtitle-text{
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

  .selectTestReport-listcontent-box{
    padding : 15px 10px;
    overflow:hidden;

  .selectTestReport-listcontent-yuan{
    margin-top: 1px;
  }

  .selectTestReport-listitem-left-text{
    color: #232323;
    font-size: 15px;
    margin-top: 2px;
    margin-left: 5px;
  }

  .selectTestReport-listitem-right-box{
  .selectTestReport-listitem-right-text{
    color: #999999;
    font-size: 15px;
  }
  .selectTestReport-listitem-right-icon{
    margin-left: 5px;
    color: #b2b1b1;
  }
  }
  }
  }

  }

</style>
