<!--完善信息页-->
<style lang="scss" scoped>
  .bg-complete{
    background: url(../../assets/img/bgPerfectInfo.png) no-repeat center/cover;
    .inner-box{
      width: 70%;
      margin: 0 15%;
      color: white;
    .item-mes{
        width:100%;
        height: 50px;
        line-height:50px;
        display:flex;
        justify-content: space-between;
      .name{
        width:65%;
        background: rgba(0,0,0,0);
        color: white;
        border-bottom:1px solid #fff;
        padding-bottom:6px;
        input::-webkit-input-placeholder {
          color:white;
        }
        input:-moz-placeholder {
          color:white;
        }
      }
      select{
        width:65%;
        background: rgba(0,0,0,0);
        color: white;
        outline: none;
        border:none;
        border-bottom:1px solid #fff;
        font-size:16px;
      }
      }
      .bot-menu{
        padding-top:50vh;
        width:100%;
        text-align:center;
        color: #c4d5d8;
        .submit-btn{
          margin-top:20px;
          display:inline-block;
          width:100%;
          height:40px;
          line-height: 40px;
          text-align: center;
          border-radius: 30px;
          border: 1px solid #fff;
          color:#fff;
          box-shadow: 0 0 4px #f5f5f5;
        }
      }
    }
  }

</style>

<template>
    <div class="device-height bg-complete">
      <div class="inner-box">
        <div class="item-mes paddingT10">
          <label for="name">姓名</label>
          <input type="text" id="name" placeholder="请输入姓名" class="name">
        </div>
        <div class="item-mes paddingT10">
          <label class="">性别</label>
          <div>
            <i class="iconfont icon-iconfontiocnnan color-white fs18 paddingR10"></i>
            <em>男</em>
            <i class="iconfont icon-xingbienv color-white fs22"></i>
            <em>女</em>
          </div>
        </div>
        <div class="item-mes paddingT10">
          <label for="birth">出生年份</label>
          <select name="" id="birth">
            <option value="">1990</option>
            <option value="">1991</option>
            <option value="">1992</option>
            <option value="">1993</option>
            <option value="">1994</option>
            <option value="">1995</option>
          </select>
        </div>
        <div class="item-mes paddingT10">
          <label for="disease">所患疾病</label>
          <select name="" id="disease">
            <option value="">脂肪肝</option>
            <option value="">乙肝</option>
            <option value="">丙肝</option>
            <option value="">肝癌</option>
          </select>
        </div>
        <div class="bot-menu">
          <span class="fs16">完善信息，以便医生更好地为您服务</span>
          <router-link to="javascript:void(0)" class="submit-btn">提交</router-link>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        }
    }
</script>

