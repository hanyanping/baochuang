<style lang="scss" scoped>
    .instruction-title{
      width: 92%;
      margin: 15px 4%;
      .inner-title,.instruction-content{
        width: 92%;
        padding: 0 4%;
        line-height:50px;
        .look-result{
          width:84px;
          height:30px;
          border-radius: 15px;
          line-height:30px;
          text-align: center;
          margin-top:10px;
        }
      }
    }
    .circle-left{display:block;left:0;top:42px;}
    .circle-right{display:block;right:0;top:42px;}

</style>

<template>
    <div class="device-height bg-grey over-hidden">
      <div class="instruction-title bg-white circular-bead pos-relate box-shade">
        <div class="inner-title border-bot-dash item-height fs18 color-black">医生介绍</div>
        <div class="instruction-content fs17">暂无记录</div>
        <span class="half-circle-left bg-grey circle-left pos-absolute"></span>
        <span class="half-circle-right bg-grey circle-right pos-absolute"></span>
      </div>
      <div class="instruction-title bg-white circular-bead pos-relate box-shade">
        <div class="inner-title border-bot-dash item-height fs18 color-black">检查报告</div>
        <div class="instruction-box paddingT10 paddingB10">
          <div class="instruction-content fs17">
            <span>生化检验</span>
            <router-link to="javascript:void(0)" class="look-result fr color-white bg-button fs16">查看报告</router-link>
          </div>
          <div class="instruction-content fs17">
            <span>血凝检查</span>
            <router-link to="javascript:void(0)" class="look-result fr color-white bg-button fs16">查看报告</router-link>
          </div>
          <div class="instruction-content fs17">
            <span>血液检验</span>
            <router-link to="javascript:void(0)" class="look-result fr color-white bg-button fs16">查看报告</router-link>
          </div>
        </div>
        <span class="half-circle-left bg-grey circle-left pos-absolute"></span>
        <span class="half-circle-right bg-grey circle-right pos-absolute"></span>
      </div>
      <div class="instruction-title bg-white circular-bead pos-relate box-shade">
        <div class="inner-title border-bot-dash item-height fs18 color-black">处方</div>
        <span class="half-circle-left bg-grey circle-left pos-absolute"></span>
        <span class="half-circle-right bg-grey circle-right pos-absolute"></span>
        <div class="instruction-box">
          <div class="instruction-content fs17">
            <span>生化检验</span>
            <router-link to="javascript:void(0)" class="look-result fr color-white bg-button fs16">查看报告</router-link>
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
