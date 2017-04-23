<template>
  <div class="doc-beizhu-box">
    <div class="beizhu-box">
      <textarea name="" v-model="textNumber" id="disease-status" @onkeyup="countLength()" maxlength="150" class="zhengzhuang" placeholder="请输入备注信息">
      </textarea>
      <div class="beizhu-num" >
        <span class='two'><span id="textNum" >0</span>/150</span>
      </div>
      <button class="button-box" :class="{isButton: active}" >确定</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        textNumber : '',
        active:false
      }
    },
    watch: {
      'textNumber' () {
          var a=this.textNumber.length;
        document.getElementById('textNum').innerHTML = a;
        if(this.textNumber){
            this.active = true
        }else{
            this.active = false
        }
      }
    },
    methods: {

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
