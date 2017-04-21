<!-- 就诊记录页 -->
<template>
    <div class="visitRrecord">
      <div class="visitRrecord-title-box">
          <span class="visitRrecord-title-text">下次复诊时间</span>
          <span class="visitRrecord-title-text">{{visitTime}}</span>
      </div>
      <div class="visitRrecord-cue-box">
        <span class="visitRrecord-cue-text">..医生设置的复诊时间</span>
      </div>
      <div class="visitRrecord-list-box pos-relate">
          <div class="visitRrecord-listheader-box border-bot-dash">
            <i class="iconfont icon-jilu"></i>
            <span class="visitRrecord-listtitle-text">复诊时间</span>
          </div>
          <span class="bg-grey half-circle-left circleleft pos-absolute"></span>
          <span class="bg-grey half-circle-right circleright pos-absolute"></span>

          <div class="visitRrecord-listcontent-box">
            <span class="visitRrecord-listitem-left-text fl fs14">第一次复诊</span>
            <span class="visitRrecord-listitem-right-text fr fs14">2017.3.1</span>
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

  .visitRrecord{
    height:100vh;
    width:100%;
    background: #f4f4f4;

    .visitRrecord-title-box{
      margin: 20px;
      background: #5da096;
      height:120px;
      border-radius: 5px;
      text-align: center;
      display: flex;
      flex-direction:column;
      justify-content:center;

      .visitRrecord-title-text{
        color: #fff;
        font-size: 18px;
        display: inline-block;
        line-height: 42px;
      }
    }

    .visitRrecord-cue-box{
      width:100%;
      margin-left: 20px;
      margin-right: 20px;
      margin-top: -10px;
      .visitRrecord-cue-text{
        color: #000;
        font-size: 14px;
      }
    }

    .visitRrecord-list-box{
      margin: 10px;
      background: #fff;
      border-radius: 5px;
      -webkit-box-shadow:0 0 50px #dbe5e4;
      -moz-box-shadow:0 0 50px #dbe5e4;
      box-shadow:0 0 50px #dbe5e4;

      .visitRrecord-listheader-box{
         padding : 20px;
        .visitRrecord-listtitle-text{
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

      .visitRrecord-listcontent-box{
        padding : 20px;
        overflow:hidden;
        .visitRrecord-listitem-left-text{
          color: #000;
        }

        .visitRrecord-listitem-right-text{
          color: #000;
        }
      }
    }

  }

</style>
