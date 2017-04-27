<style lang="scss" scoped>
  .doctorIcon{
    height: 195px;
    overflow: hidden;
    background: url(../../assets/img/bg-doctorInfo-icon.png)no-repeat center/cover;
    img{
      width:60px;
      height: 60px;
      border-radius: 50%;
      border:2px solid #fff;
      margin:40px auto 0;
      display:block;
    }
    .logo-signed{
      width:70px;
      height:30px;
      line-height:30px;
      text-align: center;
      border-radius: 15px 0 0 15px;
      background:rgba(0,0,0,0.3);
      right:0;
      top:30px;
    }
    .doctor-profession{
      width:100%;
      padding:28px 0;
      text-align:center;
    }
  }
    .instruction-title{
      display:flex;
      justify-content: space-between;
      border-bottom:1px solid #dedede;
      .inner-title{
        padding-top: 16px;
        padding-bottom:16px;
      }
      .up-forward{
        line-height:50px;
      }
    }
    .instruction-content{
      padding:15px;
      line-height:22px;
      /*word-spacing: 0.5em;*/

    }
  .visit-content{
    table{
      padding-bottom: 30px;
      box-sizing: border-box;
      display:inline-block;
      width:100%;
    }
    table td{
      width: 1%;
      border:1px solid #dedede;
      height:40px;
      line-height:40px;
      text-align:center;
    }
  }
  .btn-option{
    width:50%;
    height:55px;
    display:inline-block;
    line-height:55px;
    text-align:center;
  }

.title-badge{
  width:2px;
  height:15px;
  display:inline-block;
  padding-right:5px;
}



</style>

<template>
    <div class="device-height bg-grey">
      <div class="doctorIcon pos-relate">
        <img src="../../assets/img/second.png" alt="">
        <span class="logo-signed pos-absolute color-white fs14">签约医生</span>
        <p class="doctor-profession">
          <span class="color-white fs17">张大帅</span>
          <span class="color-white fs17 paddingL10">副主任医师</span>
        </p>
      </div>
      <div class="doctor-instruction bg-white">
        <div class="instruction-title paddingL15 paddingR15">
          <div class="inner-title ">
            <span class="title-badge bg-cure"></span>
            <span class="fs18">医生介绍</span>
          </div>
          <i class="up-forward iconfont icon-zhankai1 "></i>
        </div>
        <div class="instruction-content fs16 color-shallow">
          从事传染病工作30年，撰写了多篇论文发表在国际、国家级、省级核心期刊，参加第二节国际消化学大会，
          美国科尔比科学文化信息文化中心授予优秀医药学整数，保定市撒菊花菊花进步一等奖。
        </div>
      </div>
      <div class="doctor-visit bg-white marginT10">
        <div class="instruction-title paddingL15 paddingR15">
          <div class="inner-title ">
            <span class="title-badge bg-cure"></span>
            <span class="fs18">医生门诊</span>
          </div>
        </div>
      </div>
      <div class="visit-content bg-white">
        <table class="paddingL15 paddingR15 paddingT15 paddingB15">
          <tr>
            <td></td>
            <td>上午</td>
            <td>下午</td>
          </tr>
          <tr>
            <td>星期一</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>星期二</td>
            <td class="bg-selected">
              <i class="iconfont icon-duihao1 fs22 color-selected"></i>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>星期三</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>星期四</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>星期五</td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div class="btn-menu">
        <router-link to="javascript:void(0)" class=" btn-option bg-button color-white fl">发消息</router-link>
        <router-link to="javascript:void(0)" class=" btn-option bg-disable color-white fl">预约（未开启）</router-link>
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
