<!--完善信息页-->
<template>
    <div class="completeInfo">
      <div class="completeInfo-box">
        <p class="completeInfo-name">姓名</p>
        <div class="completeInfo-input-box">
          <input placeholder="请输入身份证" class="completeInfo-input"/>
          <div class="completeInfo-input-line"></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss">

  .completeInfo{
    height:100vh;
    width:100%;
    background-image:url(../../assets/img/bgPerfectInfo.png);
    background-size:100% 100%;
    position: fixed;

    .completeInfo-box{
      padding-left: 40px;
      padding-right: 40px;
      padding-top: 40px;

      .completeInfo-name{
        color: #fff;
        float:left;
      }
      .completeInfo-input-box{
        width: 100%;

        .completeInfo-input{
          outline: none;
          margin-left: 20px;
          background: rgba(0, 0, 0, 0);
        }

        .completeInfo-input-line{
          height: 1px;
          width: 60%;
          background: #ffffff;
          margin-top: 10px;
        }



      }

    }
  }


</style>
