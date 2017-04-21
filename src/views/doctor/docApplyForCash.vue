<template>
  <div class="personal-box">
    <div class="personal-info">
      <div class="personal-info-flex">
        <div>姓名</div>
        <div class="detail">王倩</div>
      </div>
      <div class="personal-info-flex">
        <div>性别</div>
        <div class="detail">女</div>
      </div>
      <div class="personal-info-flex">
        <div>年龄</div>
        <div class="detail">22</div>
      </div>
      <div class="personal-info-flex">
        <div>主疾病</div>
        <div>脂肪肝</div>
      </div>

      <b></b>
      <b></b>
    </div>
  </div>
</template>

<style lang="scss">
  .personal-box{
    margin:22px 16px;
  .personal-info, .remark-info, .futher-info, .visit-info{
    position: relative;
    margin-bottom:15px;
    background:#fff;
    border-radius:5px;
    -webkit-box-shadow:0 0 19px #E5EBED;
    -moz-box-shadow:0 0 19px #E5EBED;
    box-shadow:0 0 25px #E5EBED;
  b:nth-of-type(1){
    left: -1px;
    border-radius: 0 14px 14px 0;
  }
  b:nth-of-type(2){
    right: -1px;
    border-radius: 14px 0 0 14px;
  }
  b{
    position: absolute;
    width: 7px;
    height: 14px;
    top: 40px;
    border: 1px solid #f4f4f4;
    z-index: 33;
    background:#f4f4f4;
    FILTER: alpha(opacity=0); /*androd*/
    appearance:none;  /*下拉框去掉右侧图标*/
    -moz-appearance:none;
    -webkit-appearance:none;
  }
  .personal-info-flex{
    display:flex;
    justify-content: space-between;
    padding:15px 16px;
    border-bottom:1px dashed #f4f4f4;
  .detail{
    color:#bbb;
  }
  }
  }
  }
</style>
