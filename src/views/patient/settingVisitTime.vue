<!--设置复诊时间-->
<template>
  <div class="settingVisitTime">
    <h2 class="setting-visit-time-head-box">设置下一次复诊时间</h2>
    <div class="setting-visit-time-select-box">
      <div class="setting-visit-time-selectbg-box">
            <i class="iconfont icon-rili1" ></i>
            <span class="setting-visit-time-select-txt">2016</span>
            <i class="iconfont icon-zhankai2"></i>
      </div>
    </div>
    <div class="setting-visit-time-bottom-box">
      <p class="setting-visit-time-bottom-txt">按时复诊,为您恢复健康保驾护航;坚持复诊,疾病痊愈的关键!</p>
      <button class="toInfo" >提交</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'settingVisitTime'
      }
    }
  }
</script>

<style lang="scss">

  .settingVisitTime {
    height:100vh;
    width:100%;
    background-image:url(../../assets/img/bgPerfectInfo.png);
    background-size:100% 100%;
    position: fixed;

    .setting-visit-time-head-box{
      color:#ffffff;
      padding: 30px 40px;
    }

    .setting-visit-time-select-box{
      padding: 0px 40px;

      .setting-visit-time-selectbg-box{
        height: 30px;
        border: 1px solid #fff;
        border-radius: 5px;

        .icon-rili1{
          color: #fff;
          line-height: 30px;
          padding-left: 10px;
        }

        .setting-visit-time-select-txt{
          color: #fff;
        }

        .icon-zhankai2{
          color: #fff;
          text-align:right;
        }
      }
    }

    .setting-visit-time-bottom-box{
      line-height: 30px;
      width:100%;

      .setting-visit-time-bottom-txt{
        color: #fff;
        padding-top: 60px ;
        padding-left: 40px;
        padding-right: 40px;
      }
      .toInfo{
        display: block;
        width: 90%;
        height:45px;
        margin: auto;
        background: rgba(0,0,0,0);
        color: #ffffff;
        border:1px solid #fff;
        border-radius:22px;
        margin-top:25px;
        outline: none;
        font-size: 18px;
      }
    }

  }

</style>
