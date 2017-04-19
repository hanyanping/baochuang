<template>
  <div class="docInfo">
    <div class="infoHeader">
      <div class="headerBox">
        <div class="headerLeft">
          <div class="infoImg"></div>
          <div class="headerInfo">
            <div class="docName">石晶晶<span class="docZhicheng">主任医生</span></div>
            <div class="docHosipital">保定传染病医院</div>
          </div>
        </div>
        <div class="headerRight iconfont icon-jiantou"></div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'docInfo',
    data () {
      return {
        selected:'1'
      }
    },
    created() {
      document.getElementsByTagName('title')[0].innerHTML = '我的信息'
    }
  }

</script>

<style lang="scss">
  .docInfo{
    height:100vh;
    .infoHeader{
      height:30vh;
      width:100%;
      background-size:100% 100%;
      background:url(../../assets/img/docInfo.png);
      .headerBox{
        padding:30px 16px 0;
        display:flex;
        justify-content: space-between;

        .headerLeft{
          display:flex;
          justify-content: flex-start;
          .infoImg{
            border-radius:50%;
            height:60px;
            width:60px;
            background:url(../../assets/img/second.png);
            background-size:100% 100%;
            padding-right:5px;
          }
          .headerInfo{
             padding-top:10px;

              .docName{
                color:#fff;
                font-size:16px;
              }
              .docHosipital{
                color:#C5EFED;
                font-size:14px;
                padding-top:8px;
              }
          }
        }
        .icon-jiantou{
          font-size:18px;
          color:#fff;
          line-height:60px;
        }
      }
    }
  }

</style>
