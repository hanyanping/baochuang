<!-- 预约列表页 -->
<template>
  <div class="subscribeList bg-grey">
    <div class="subscribeList-box">
      <div class="subscribeList-header-box">
        <img src="../../assets/img/second.png" class="subscribeList-title-img fl">
        <div class="doctor-icon-info fl">
          <div class="doctor-profession">
            <span class="fs16">王医生</span>
            <span class="fs14">主治医生</span>
          </div>
          <p class="">
            <span class="fs14">保定市传染病医院</span>
            <span class="fs14">传染科</span>
          </p>
        </div>
      </div>
    </div>

    <div class="subscribeList-list-box">
      <div class="subscribeList-listitem-line"></div>
      <div class="subscribeList-listitem-row">
        <i class="iconfont icon-shijian"></i>
        <span class="fs14">2017-05-01</span>
      </div>
      <div class="subscribeList-listitem-row">
        <span class="fs14">星期一下午</span>
        <span class="fs14">余号6人</span>
      </div>
      <i class="iconfont icon-jiantou subscribeList-listitem-icon"></i>
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

  .subscribeList {
    height: 100vh;
    width: 100%;
    overflow:hidden;

    .subscribeList-box{
      width:92%;
      margin: 15px 4%;
      background: white;
      border-radius: 5px;

      .subscribeList-header-box{
        padding : 10px;
        overflow:hidden;
        .subscribeList-title-img{
          border-radius: 50%;
        }
        .doctor-icon-info{
          margin-left:5px;margin-top:6px;
          .doctor-profession{
            margin-bottom:4px;
          }
        }
      }
    }

    .subscribeList-list-box{
      width: 92%;
      height: 60px;
      margin: 10px 4%;
      background: white;

      .subscribeList-listitem-line{
        width: 10px;
        height: 100%;
        float: left;
        background: #06b80a;
      }

      .subscribeList-listitem-row{
        padding: 5px 10px;
        width: 70%;
        float: left;
      }

      .subscribeList-listitem-icon{
        float: right;
        margin-top: -5px;
        margin-right: 10px;
      }
    }

  }

</style>
