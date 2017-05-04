<style lang="scss" scoped>
    .doc-parent-info{
      width:100%;
      height:60px;
      display:flex;
      align-items:center;
        .doc-icon{
          width:50px;
          height:50px;
          border-radius: 50%;
        }
        .doc-info{
          width: 80%;
          padding-top:6px;
          padding-left:6px;
          line-height:22px;
        }
    }
    .parent-info{
      min-height:50px;
      line-height:50px;
    }
    .inner-info{
      width:92%;
      padding:0 4%;
      min-height:50px;
      .record-instruct{
        padding:8px 0;
        line-height:24px;
        .input-checkbox{
          width:16px;
          height:16px;
          margin-right:4px;
        }
      }
      .menu-box{
        width:92%;
        margin:0 4%;
        padding-top: 35px;
        line-height:22px;
        .btn-pay{
          width:100%;
          height:45px;
          border-radius: 20px;
          outline:none;
          border:none;
          margin-bottom:10px;
        }
      }
    }

</style>

<template>
    <div class="device-height bg-grey">
        <div class="doc-parent-info bg-white">
          <div class="inner-info">
            <img src="../../assets/img/second.png" class="doc-icon fl" alt="">
            <div class="doc-info fl fs16">
              <span>王大帅 <em class="fs15 color-profession">主任医师</em></span><br>
              <span class="color-profession">保定市传染病医院 肝病二科</span>
            </div>
          </div>
        </div>
        <div class="parent-info bg-white marginT10 fs16">
          <div class="inner-info">
            就诊时间： 2017-03-22 周三 上午
          </div>
        </div>
        <div class="parent-info bg-white marginT10 fs16">
          <div class="inner-info">
            <span>预约服务费</span>
            <span class="fr">￥6.00</span>
          </div>
        </div>
        <div class="parent-info bg-white marginT10 fs16">
          <div class="inner-info">
            <span>患者姓名</span>
            <span class="fr">王倩</span>
          </div>
        </div>
        <div class="parent-info bg-white marginT10 fs16">
          <div class="inner-info">
            <div class="record-instruct border-bot">
              <input type="checkbox" class="input-checkbox"/>使用积分(您现有10000，可用100抵￥1.00)
              <i class="iconfont icon-wenhao1 color-grey"></i>
            </div>
            <div>
              <span>应付款</span>
              <span class="fr color-warn">￥4.00</span>
            </div>
            <div class="menu-box">
              <button class="btn-pay bg-button color-white fs18">微信支付</button><br>
              <span class="fs14 color-grey paddingB10">若订单失败，服务费会原路返回退还给您</span>
            </div>
          </div>
        </div>

    </div>
</template>

<script>
    export default{
        data(){
            return {}
        }
    }
</script>
