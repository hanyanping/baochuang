<!-- 完善信息 -->
<template>
  <div class="perfectInfoContainer">
    <div class="perfectInfoTopBox">
      <div class="perfectInfoTopName">
        <span class="perfectInfoTopNameSpan">姓名</span>
        <input class="perfectInfoTopNameInput" placeholder="请输入姓名" maxlength="6">
      </div>

      <div class="perfectInfoTopDepartment">
        <span class="perfectInfoTopDepartmentSpan">科室</span>
        <select class="perfectInfoTopDepartmentSelect">
          <option value="0">请选择科室</option>
          <option>肝病科</option>
          <option>肝病科23室</option>
          <option>精神科78室</option>
        </select>
      </div>

      <div class="perfectInfoTopTitle">
        <span class="perfectInfoTopTitleSpan">职称</span>
        <select class="perfectInfoTopTitleSelect">
          <option value="0">请选择职称</option>
          <option>主治医师</option>
          <option>主任</option>
          <option>副主任</option>
        </select>
      </div>
    </div>

    <button class="perfectInfoBottomButton">确 认</button>
  </div>
</template>

<script>
  export default {
    name: 'doctorPerfectInfo',
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss">

  .perfectInfoContainer {
    position: fixed; /* 固定 */
    height: 100vh;
    width: 100%;
    background-image: url('../../assets/img/bgPerfectInfo.png');
    background-size: 100% 100%;

    .perfectInfoTopBox {
      margin: 50px auto;
      width: 70%;

      .perfectInfoTopName {

        .perfectInfoTopNameSpan {
          color: #ffffff;
        }
        .perfectInfoTopNameInput {
          background-color:transparent;
          color:#fff;
          FILTER: alpha(opacity=0); /*androd*/
          appearance:none;  /*下拉框去掉右侧图标*/
          -moz-appearance:none;
          -webkit-appearance:none;
          float: right;
          outline: none;
          text-align: center;
          width: 80%;
          border-bottom: 1px solid #fff;
          padding-bottom: 10px;
        }
      }

      .perfectInfoTopDepartment {
        padding-top: 70px;
        .perfectInfoTopDepartmentSpan {
          color: #ffffff;
        }
        .perfectInfoTopDepartmentSelect {
          float: right;
          color: #ffffff;
          width: 80%;
          border: none;
          border-bottom: 1px solid #ffffff;
          padding-bottom: 10px;
          padding-left: 25%;
          outline: none;
          /*background: rgba(255,255,255,0);*/
          background-color:transparent;
          -webkit-appearance:none;
          -webkit-border-radius: 0px;
          font-size: 15px;
        }
      }

      .perfectInfoTopTitle {
        padding-top: 70px;
        .perfectInfoTopTitleSpan {
          color: #ffffff;
        }
        .perfectInfoTopTitleSelect {
          float: right;
          color: #ffffff;
          width: 80%;
          border: none;
          border-bottom: 1px solid #ffffff;
          padding-bottom: 10px;
          padding-left: 25%;
          outline: none;
          /*background: rgba(255,255,255,0);*/
          background-color:transparent;
          -webkit-appearance:none;
          -webkit-border-radius: 0px;
          font-size: 15px;
        }
      }
    }

    .perfectInfoBottomButton {
      display: block;
      width: 90%;
      height:45px;
      margin: auto;
      /*background:#529D98;*/
      background: rgba(0,0,0,0);
      color: #ffffff;
      border:1px solid #86B8B8;
      border-radius:22px;
      margin-top:160px;
      outline: none;
      font-size: 16px;
    }
  }
</style>
