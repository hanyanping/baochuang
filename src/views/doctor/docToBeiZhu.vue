<!--备注信息-->
<template>
  <div class="doc-beizhu-box">
    <div class="beizhu-box">
      <textarea name="" v-model="textNumber" id="disease-status" @onkeyup="countLength()" maxlength="150" class="zhengzhuang" placeholder="请输入备注信息">
      </textarea>
      <div class="beizhu-num" >
        <span class='two'><span id="textNum" >0</span>/150</span>
      </div>
      <button v-if="active == false" class="button-box " disabled>确定</button>
      <button v-else  class="button-box isButton" @click="sureBeizhu">确定</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        textNumber : '',
        active:false,
        authentication:'d1126e11b0392a446acaf724ba9e36c7',
        patient_id:'',
        patient_name:''
      }
    },
    created() {
      this.patient_id = this.$route.params.patientId
      this.patient_name = this.$route.params.patientName
      document.getElementsByTagName('title')[0].innerHTML = this.patient_name
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
        axios.get('/api/wx/baochuan_d/patientremark',{ params: {
          authentication: this.authentication,
          patientId: this.patient_id,
          remark: this.textNumber
        }
        }).then((result) => {
          this.$router.push({ path:"/baochuan_d/docConsult/" +this.patient_id});
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
    .button-box{
      display: block;
      width: 100%;
      height:45px;
      margin:45px auto;
      background:#86B8B8;
      color: #ffffff;
      border:1px solid #86B8B8;
      border-radius:22px;
      outline:none;
      font-size:18px;
    }
    .button-box.isButton {
      background:#529D98;
      border:1px solid #f4f4f4;
      -webkit-box-shadow:0 0 10px #f4f4f4;
      -moz-box-shadow:0 0 10px #f4f4f4;
      box-shadow:0 0 10px #f4f4f4;
    }
  }

}
</style>
