<style lang="scss" scoped>
  .box-left{
    width:59%;
    padding: 15px 0 15px 15px;
    span{
      padding-top:12px;
      padding-left:4px;
    }
    p{
      padding-top:8px;
      padding-left:4px;
      width:65%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .box-right{
    height:100%;
    padding: 18px 8px 15px 0;
    .heart{
      display:block;
      margin-top:-1px;
      width:24px;
      height:24px;
      line-height:22px;
      text-align:center;
      border-radius: 50%;
    }
    .main-tip{
      margin-left:19px;
      display:inline-block;
      border-radius: 4px;
      padding:3px 4px;
    }
  }

  .check-box{
    width: 40%;

  }
</style>

<template>
    <div class="device-height bg-grey over-hidden">
      <div class="parent-width parent-margin circular-bead box-shade bg-white over-hidden">
        <div class="box-left fl">
          <img src="../../assets/img/second.png" class="head-logo fl" alt="加载中">
          <span class="fl fs15 color-black">张大帅</span><br>
          <p class="fs15 fl">肝病移库 主任医师</p>
        </div>
        <div class="fr box-right ">
          <span class="heart pos-absolute bg-button">
            <i class="iconfont icon-aixin color-white fs14"></i>
          </span>
          <span class="main-tip fs14 bg-button color-white">现签约医生</span>
        </div>
      </div>
      <div class="parent-width parent-margin circular-bead box-shade bg-white over-hidden">
        <div class="check-box fl">
          <span class="radio"></span>
        </div>
        <div class="box-left fl">
          <img src="../../assets/img/second.png" class="head-logo fl" alt="加载中">
          <span class="fl fs15 color-black">张大帅</span><br>
          <p class="fs15 fl">肝病移库 主任医师</p>
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
