<template>
  <div class="docBox">
    <div class="myPatientBox">
      <mt-search>
      </mt-search>
    </div>
    <div class="myPatientContent">
      <div class="qianyueBox">
        <div class="qianyue float-box" @click="qianyue">签约患者 （34）<span ref="qianyueSpan" class="iconfont fr" :class="{'icon-zhankai': active, 'icon-shouqi': unActive}"></span></div>
        <div class="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'myPatient',
    data () {
      return {
        active: false,
        unActive: true,
        value:"1"
      }
    },
    created() {
      document.getElementsByTagName('title')[0].innerHTML = '我的患者'
    },
    methods: {
      qianyue() {
        if(this.unActive){
          console.log(1)
        }
//          this.$refs.qianyueSpan.className = 'iconfont icon-shouqi'
        this.active = !this.active
        this.unActive = !this.unActive

      }
    }
  }
</script>

<style lang="scss">

  .docBox{
    background:#fff;
    .myPatientContent{
      width:100%;
      height: auto;
      .qianyue {
        height: 44px;
        line-height: 44px;
        padding-left: 16px;
        background: #f4f4f4;
        .iconfont{
          font-size:16px;
          padding-right:16px;
        }
      }
    }
    .myPatientBox {
      height: 60px;
      .mint-searchbar{
        background:#fff !important;
        .mint-searchbar-inner{
          background:#ECECEC !important;
          .mintui-search{
            text-align: center;
          }
          .mint-searchbar-cancel{
            color:#bbb!important;
          }
          .mint-searchbar-core{
            background:#ECECEC;
          }
          input::-webkit-input-placeholder{
            color:#D2D2D2;
            text-align: center;
          }
          input{
            color:#232323;
          }
        }
      }
    }
  }

</style>
