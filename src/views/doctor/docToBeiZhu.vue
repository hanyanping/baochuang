<!--备注信息-->
<template>
  <div class="doc-beizhu-box">
    <div class="beizhu-box">
      <textarea name="" v-model="textNumber" id="disease-status" @onkeyup="countLength()" maxlength="150" class="zhengzhuang" placeholder="请输入备注信息">
      </textarea>
      <div class="beizhu-num" >
        <span class='two'><span id="textNum" >0</span>/150</span>
      </div>
      <button v-if="active" class="button-box" @click="sureBeizhu" >确定</button>
      <button v-else  class="nobutton-box" disabled>确定</button>
      <!--<button v-if="active == false" class="button-box " disabled>确定</button>-->
      <!--<button v-else  class="button-box isButton" @click="sureBeizhu">确定</button>-->
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import netWrokUtils from '../../components/NetWrokUtils'
  export default {
    data () {
      return {
        textNumber : '',
        active:false,
        authentication:'9abada2c209a05e2ebd462f7bf68c5cf',
        patientId:'',
        patientName:''
      }
    },
    created() {
      var that = this;
      this.patientId = window.localStorage.getItem('patientId')
    },
    watch: {
      'textNumber' () {
          var a = this.textNumber.length;
        document.getElementById('textNum').innerHTML = a;
        if(this.textNumber){
            this.active = true
        }else{
            this.active = false
        }
      }
    },
    methods: {
      sureBeizhu() {
        var that = this
        var params ={
          authentication: this.authentication,
          patientId: this.patientId,
          remark: this.textNumber
        }
        netWrokUtils.post('/wx/baochuan_d/patientremark', params, (result) => {
          this.$router.push({ path:"/baochuan_d/docConsult"});
        }, (error_result) => {
          Toast(error_result.data.msg);
        })
      }
    }
  }
</script>
<style lang="scss">
.doc-beizhu-box{
  .beizhu-box{
    width:90%;
    margin:30px auto;
    .zhengzhuang{
      width: 100%;
      height: 200px;
      border: 1px solid #dedede;
      border-radius: 5px;
      text-indent: 5px;
      padding: 5px;
      line-height: 20px;
      font-size: 14px;
      color: #666;
      outline: none;
      box-sizing: border-box;
      -webkit-appearance: none;
      -webkit-box-shadow:0 0 5px 5px #E5EBED;
      -moz-box-shadow:0 0 5px 5px #E5EBED;
      box-shadow:0 0 5px 5px #E5EBED;
    }
    .beizhu-num{
      position:absolute;
      top:200px;
      left:75%;
      color:#bbb;
      font-size:15px;
    }
  }
}
</style>
