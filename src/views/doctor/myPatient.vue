<template>
  <div class="docBox">
    <div class="myPatientBox">
      <mt-search>

      </mt-search>
    </div>
    <div class="myPatientContent">
      <div class="qianyueBox">
        <div class="qianyue" @click="qianyue">签约患者 （34）<span ref="qianyueSpan" class="iconfont" :class="{'icon-zhankai': active, 'icon-shouqi': unActive}"></span></div>
        <div class="">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Toast,Search } from 'mint-ui'
  export default {
    name: 'myPatient',
    data () {
      return {
        active: false,
        unActive: true
      }
    },
    created() {
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

<style>

  .docBox{
    background:#fff;
  }
  .myPatientBox {
    height: 60px;
  }
  .myPatientContent{
    width:100%;
    height: auto;
  }
  .docBox .mint-search{
  }
  .docBox input::-webkit-input-placeholder{
    color:#D2D2D2;
    text-align: center;
  }
  .docBox input{
    color:#232323;
  }
  .docBox .mint-searchbar-cancel{
    color:#bbb!important;
  }
  .docBox .mint-searchbar-core{
    background:#ECECEC;
  }
  .docBox .mint-searchbar{
    background:#fff !important;
  }
  .docBox .mint-searchbar-inner{
    background:#ECECEC !important;
  }
  .docBox .mint-searchbar-inner .mintui-search{
    padding-top:5px;
    padding-right:5px;
  }
  .qianyue {
    height: 44px;
    line-height: 44px;
    padding-left: 16px;
    background: #f4f4f4;
  }
  .myPatientContent .icon-zhankai-copy{
    font-size:16px;
  }
</style>
