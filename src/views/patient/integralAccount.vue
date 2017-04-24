<!-- 积分账户 -->
<template>
    <div class="integralAccount">
      <div class="integralAccount-titlebg-box">
        <div class="visitRrecord-titletop-box">
          <span class="visitRrecord-title-text">积分余额</span>
          <i class="iconfont icon-wenhao1 visitRrecord-title-icon"></i>
        </div>
        <span class="visitRrecord-money-text" >{{money}}</span>
      </div>

      <div class="integralAccount-list-box pos-relate">
          <div class="integralAccount-listheader-box border-bot-dash">
            <span class="integralAccount-listtitle-text">积分明细</span>
          </div>
          <span class="bg-grey half-circle-left circleleft pos-absolute"></span>
          <span class="bg-grey half-circle-right circleright pos-absolute"></span>

          <div class="integralAccount-listcontent-box">
            <div class="fl" style="width:70%;line-height: 22px;">
              <span class="integralAccount-listitem-left-text  fs14" style="display:inline-block;">咨询王明医生</span><br>
              <span class="integralAccount-listitem-left-text fs14" style="display:inline-block;">2017-09-12 09:10:00</span>
            </div>
            <span class="integralAccount-listitem-right-text fr fs14" style="margin-top:14px;">+100</span>
          </div>

      </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          visitTime: '2017-01-01',
          money : '690'
        }
      }
    }
</script>

<style lang="scss">

  .integralAccount{
    height:100vh;
    width:100%;
    background: #f4f4f4;

    .integralAccount-titlebg-box{
      background: #06b80a;
      height:24vh;
      text-align: center;
      padding-top:30px;

      .visitRrecord-titletop-box{

        .visitRrecord-title-icon{
          color: white;
        }
      }

      .visitRrecord-title-text{
        color: white;
        font-size: 14px;
        display: inline-block;
        line-height: 30px;
      }

      .visitRrecord-money-text{
        color: white;
        font-size: 30px;
        display: inline-block;
        line-height: 30px;
      }
    }

    .integralAccount-list-box{
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

      .integralAccount-listheader-box{
         padding : 20px;
        .integralAccount-listtitle-text{
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

      .integralAccount-listcontent-box{
        padding : 20px;
        overflow:hidden;
        .integralAccount-listitem-left-text{
          color: #000;
        }

        .integralAccount-listitem-right-text{
          color: #000;
        }
      }
    }

  }

</style>
