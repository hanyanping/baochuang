<template>
  <div class="perfectInfoContainer">
    <div class="perfectInfoNameBox">
      <span>姓名</span>
      <input class="perfectInfoInput" placeholder="请输入姓名" maxlength="8">
    </div>
    <div class="perfectInfoLine">
      <div class="perfectInfoLineThis"></div>
    </div>
    <div class="perfectInfoDepartmentBox">
      <span>科室</span>
      <select class="perfectInfoSelect">
        <option>主治医师</option>
        <option>主任</option>
        <option>副主任</option>
      </select>
    </div>
    <div class="perfectInfoLine">
      <div class="perfectInfoLineThis"></div>
    </div>
    <div class="perfectInfoDepartmentBox">
      <span>职称</span>
      <select class="perfectInfoSelect">
        <option>主治医师</option>
        <option>主任</option>
        <option>副主任</option>
      </select>
    </div>
    <div class="perfectInfoLine">
      <div class="perfectInfoLineThis"></div>
    </div>
    <div>
      <button class="toInfo">
        <label class="mint-button-text">确认</label>
      </button>
    </div>
  </div>

</template>

<script>

</script>

<style lang="scss">

  .perfectInfoContainer {
    height: 100vh;
    width: 100%;
    background-image: url('../../assets/img/bginfo.png');
    background-size: 100% 100%;

    .perfectInfoNameBox {
      line-height: 50px;
      color: #ffffff;
      padding-top: 50px;
      padding-left: 50px;
      font-size: 15px;

      .perfectInfoInput {
        padding-left: 30px;
        text-align: center;
        /*filter:alpha(opacity:30); opacity:0.3;  -moz-opacity:0.3;-khtml-opacity: 0.3*/
        background-color:transparent;
        color:#fff;
        FILTER: alpha(opacity=0); /*androd*/
        appearance:none;  /*下拉框去掉右侧图标*/
        -moz-appearance:none;
        -webkit-appearance:none;
      }
    }

  /* 下划线 */
  .perfectInfoLine {
    width:100%;
    .perfectInfoLineThis {
      height:1px;
      width:50%;
      margin:0 35% 0;
      background:#ffffff;

    }
  }
  .perfectInfoDepartmentBox {
    line-height: 50px;
    color: #ffffff;
    padding-top: 30px;
    padding-left: 50px;

    .perfectInfoSelect {
      color: #ffffff;
      margin-left: 85px;
    }
  }
  }
</style>
