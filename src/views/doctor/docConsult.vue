<template>
  <div class="docConsult">
    <mt-navbar v-model="selected">
      <mt-tab-item id="personal">个人资料</mt-tab-item>
      <mt-tab-item id="talk">患者聊天</mt-tab-item>
      <mt-tab-item id="report">检查报告</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="personal">
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
            <div class="more">
              <a>查看更多 <i class="iconfont icon-jiantou"></i></a>
            </div>
            <b></b>
            <b></b>
          </div>
          <div class="remark-info">
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
          </div>
          <div class="futher-info"></div>
          <div class="visit-info"></div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="talk">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="report">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>
<script>
//  import { Navbar, TabItem } from 'mint-ui';
//  Vue.component(Navbar.name, Navbar);
//  Vue.component(TabItem.name, TabItem);

  export default {
    name: 'docConsult',
    data () {
      return {
        selected:'personal'
      }
    },
    created() {
      document.getElementsByTagName('title')[0].innerHTML = '王倩'
    }
  }

</script>

<style  lang="scss">
  .docConsult{
    height:100vh;
    .mint-navbar .mint-tab-item.is-selected {
      border-bottom: 3px solid #66B2AA;
      color: #66B2AA;
      margin-bottom: 0px;
      .mint-tab-item-label{
        font-size:16px;
        color:#66B2AA;
      }
    }
    .mint-tab-item{
      .mint-tab-item-label{
        font-size:16px;
        color:#232323;
      }
    }
    .personal-box{
      margin:30px 16px;
      position: relative;
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
      .personal-info, .remark-info{
        margin-bottom:15px;
        background:#fff;
        border-radius:5px;
        -webkit-box-shadow:0 0 19px #E5EBED;
        -moz-box-shadow:0 0 19px #E5EBED;
        box-shadow:0 0 25px #E5EBED;
        /*box-shadow: 10px 10px 5px #EBEFF0; !*底边阴影*!*/
        .personal-info-flex{
          display:flex;
          justify-content: space-between;
          padding:15px 16px;
          border-bottom:1px dashed #f4f4f4;
          .detail{
            color:#bbb;
          }
        }
        .more{
          padding:16px;
          text-align: center;
          font-size:15px;
        }
      }
      .remark-info{

      }
      .futher-info{

      }
      .visit-info{

      }
    }
  }
</style>
