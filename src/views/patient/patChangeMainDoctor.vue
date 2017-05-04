<style lang="scss" scoped>
  .box-left{
    width:59%;
    padding: 3vh 0 3vh 11px;
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
    padding: 3vh 12px 3vh 0;
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
    height: 100%;
    line-height:16vh;
    .radio-doctor{
      width: 22px;
      height: 22px;
      line-height:24px;
      text-align: center;
      margin-left:15px;
      border:1px solid #dedede;
      display:inline-block;
      border-radius: 50%;
      font-family: "iconfont" !important;
    }
    .radio-doctor:before{
      content: '\e674';
      color: #fff;
    }
    .doctor-radio{
      left:-9999px;
      opacity: 0;
    }
  }
  .doctor-list-height{
    height:16vh;
  }
</style>

<template>
    <div class="device-height bg-grey over-hidden">
      <div class="doctor-list-height parent-width parent-margin circular-bead box-shade bg-white over-hidden">
        <div class="box-left fl">
          <img src="../../assets/img/second.png" class="head-logo fl" alt="加载中">
          <span class="fl fs15 color-black">张大帅</span><br>
          <p class="fs15 fl">肝病移库 主任医师</p>
        </div>
        <div class="box-right fr">
          <span class="heart pos-absolute bg-button">
            <i class="iconfont icon-aixin color-white fs14"></i>
          </span>
          <span class="main-tip fs14 bg-button color-white">现签约医生</span>
        </div>
      </div>
      <div class="doctor-list-height parent-width parent-margin circular-bead box-shade bg-white over-hidden">
        <div class="check-box fl pos-relate">
          <label for="111"  class="radio-doctor bg-button"></label>
          <!--<input type="radio" name="doctor" id="111" class="doctor-radio pos-absolute">-->
        </div>
        <div class="box-left fl">
          <img src="../../assets/img/second.png" class="head-logo fl" alt="加载中">
          <span class="fl fs15 color-black">张大帅</span><br>
          <p class="fs15 fl">肝病移库 主任医师</p>
        </div>
      </div>
      <div class="doctor-list-height parent-width parent-margin circular-bead box-shade bg-white over-hidden">
        <div class="check-box fl pos-relate">
          <label for="doctorId" class="radio-doctor"></label>
          <!--<input type="radio" name="doctor" id="doctorId" class="doctor-radio pos-absolute">-->
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
        data() {
            return {
              isActive: false,
            }
        },
        methods: {

        }
    }
</script>
