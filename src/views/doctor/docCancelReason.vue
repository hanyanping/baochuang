<!-- 取消预约填写原因 -->
<template>
  <div>
    <div class="doc-cancelreason-top-box">
      <mt-radio
        title="请选择取消原因"
        v-model="value"
        :options="['门诊时间调整', '临时工作安排，不能出诊', '外出开会，暂停出诊', '其他']">
      </mt-radio>

      <div class="beizhu-box">
      <textarea name="" v-model="textNumber" maxlength="200" minlength="5"
                class="zhengzhuang" placeholder="请输入取消原因（至少5个字）">
      </textarea>
      </div>
    </div>

    <button class="doc-rev-detail-bottom-button">保存</button>
  </div>
</template>

<script>
  export default {
    name: 'docCancelReason',
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss">
  .doc-cancelreason-top-box {
    margin: 30px 15px;

    .mint-radiolist-title {
      font-size: 18px;
      color: #000;
    }
    .mint-cell-wrapper{
      background:#fff;
    }

    .beizhu-box {
      width:100%;
      margin:20px auto;

      .zhengzhuang {
        width: 100%;
        height: 150px;
        border: 1px solid #dedede;
        border-radius: 5px;
        text-indent: 0px;
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
    }
  }
  .doc-rev-detail-bottom-button {
    display: block;
    width: 90%;
    height:45px;
    margin: auto;
    background:#62a39c;
    border:1px solid #86B8B8;
    border-radius:22px;
    margin-top:50px;
    outline: none;
    font-size: 16px;
    color: #fff;
  }
</style>
