<!-- 预约设置 -->
<template>
  <div class="docVisitDetail-box">
    <div class="personal-box">
      <div class="personal-info">
        <div class="personal-info-box">
          <div>就诊时间</div>
          <div class="detail">2017-03-23</div>
        </div>
      </div>
      <div class="remark-info">
        <div class="personal-info-flex">
          检查报告
        </div>
        <div class="beizhu-info">
          <!--<span>重点关注，有高血压，糖尿病伴随疾病，有家族遗传史（母亲有乙肝）</span>-->
          <span class="no-visit">暂无记录 </span>
        </div>
        <b></b>
        <b></b>
      </div>
      <div class="futher-info">
          <div class="personal-info-flex">影像报告</div>
        <div class="beizhu-info">
          <span class="no-visit">暂无记录 </span>
          <!--<span>下次复诊：2017年5月21日</span>-->
        </div>
        <b></b>
        <b></b>
      </div>
      <div class="visit-info">
          <div class="personal-info-flex">处方信息</div>
        <div class="visit-box-info">
          <span class="no-visit">暂无记录</span>
        </div>
        <b></b>
        <b></b>
      </div>

    </div>
  </div>

</template>

<style lang="scss">
.docVisitDetail-box{
  padding-top:22px;
  background:#f4f4f4;
  min-height:100vh;
  .personal-box{
    margin:0 16px;
    .personal-info, .remark-info, .futher-info, .visit-info{
      position: relative;
      margin-bottom:15px;
      background:#fff;
      border-radius:5px;
      -webkit-box-shadow:0 0 19px #E5EBED;
      -moz-box-shadow:0 0 19px #E5EBED;
      box-shadow:0 0 25px #E5EBED;
      .visit-box-info{
        padding:12px 16px;
        font-size:15px;
        color:#bbb;
        line-height:20px;
        .no-visit{
          color:#bbb;
          font-size:15px;
        }
      }
      b:nth-of-type(1){
        left: 0px;
        border-radius: 0 14px 14px 0;
      }
      b:nth-of-type(2){
        right: 0px;
        border-radius: 14px 0 0 14px;
      }
      b{
        position: absolute;
        width: 7px;
        height: 14px;
        top: 40px;
        z-index: 33;
        background:#f4f4f4;
        FILTER: alpha(opacity=0); /*androd*/
        appearance:none;  /*下拉框去掉右侧图标*/
        -moz-appearance:none;
        -webkit-appearance:none;
      }
      .personal-info-box{
        display:flex;
        justify-content: space-between;
        padding:15px 16px;
        .detail{
          color:#bbb;
          font-size:15px;
        }
        }
      .personal-info-flex{
        padding:15px 16px;
        border-bottom:1px dashed #f4f4f4;
      }
      .beizhu-info{
        padding:12px 16px;
        font-size:15px;
        color:#bbb;
        line-height:20px;
      }
    }
  }
}
</style>

<script>
  export default {
    name: 'docVisitDetail',
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>
