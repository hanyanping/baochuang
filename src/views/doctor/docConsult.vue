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
              <span>查看更多 <i class="iconfont icon-jiantou"></i></span>
            </div>
            <b></b>
            <b></b>
          </div>
          <div class="remark-info">
            <a class="personal-info-flex">
              <div>备注信息</div>
              <div class="iconfont icon-jiantou"></div>
            </a>
            <div class="beizhu-info">
              <span>重点关注，有高血压，糖尿病伴随疾病，有家族遗传史（母亲有乙肝）</span>
            </div>
            <b></b>
            <b></b>
          </div>
          <div class="futher-info">
            <a class="personal-info-flex">
              <div>复诊信息</div>
              <div class="iconfont icon-jiantou"></div>
            </a>
            <div class="beizhu-info">
              <span>下次复诊：2017年5月21日</span>
            </div>
            <b></b>
            <b></b>
          </div>
          <div class="visit-info">
            <a class="personal-info-flex">
              <div>就诊记录</div>
              <div class="iconfont icon-jiantou"></div>
            </a>
            <div class="visit-box">
              <div class="visit-detail">
                <div class="visit-core">
                  <div style="padding-left:16px;">23333</div>
                </div>
              </div>
              <div class="visit-detail">
                <div class="visit-core">
                  <div style="padding-left:16px;">23333</div>
                </div>
              </div>
            </div>

          </div>
            <b></b>
            <b></b>
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
    .mint-navbar{
      border-bottom: 1px solid #f4f4f4;
    }
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
      margin:22px 16px;
      .personal-info, .remark-info, .futher-info, .visit-info{
        position: relative;
        margin-bottom:15px;
        background:#fff;
        border-radius:5px;
        -webkit-box-shadow:0 0 19px #E5EBED;
        -moz-box-shadow:0 0 19px #E5EBED;
        box-shadow:0 0 25px #E5EBED;
        /*box-shadow: 10px 10px 5px #EBEFF0; !*底边阴影*!*/
        .visit-box{
          margin-top:10px;
          .visit-detail{
            position:relative;
            height:60px;
            width:3px;
            background:#42b983;
            margin:0 16px;
          .visit-core{
            position:absolute;
            height:8px;
            width:8px;
            border-radius:50%;
            background:#42b983;
            left:-5px;
            top:24px;
            border:2px solid #fff;
          }
  }
        }

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
        .more{
          padding:16px;
          text-align: center;
          font-size:15px;
          color:#bbb;
        }
        .beizhu-info{
          padding:12px 16px;
          font-size:15px;
          color:#bbb;
          line-height:20px;

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
