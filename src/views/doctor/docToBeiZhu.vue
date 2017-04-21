<template>
  <div class="doc-beizhu-box">
    <div class="beizhu-box">
      <textarea name="" id="disease-status" onkeyup="countLength()" maxlength="150" class="zhengzhuang" placeholder="">
      </textarea>
      <div class="beizhu-num" >
        <span class='two'><span id="textNum">0</span>/100</span>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    data () {
      return {

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
      height: 150px;
      border: 1px solid #dedede;
      border-radius: 5px;
      text-shadow: 0 0 1px #ccc;
      text-indent: 3px;
      padding: 5px;
      line-height: 14px;
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
      top:150px;
      left:80%;
      color:#bbb;
      font-size:15px;
    }
  }

}
</style>
