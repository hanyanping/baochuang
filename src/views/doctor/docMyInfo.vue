<!-- 我的信息 -->
<template>
  <div class="doc-myinfo-container-box">
    <div class="doc-myinfo-top-box">
      <div class="doc-myinfo-top-name-box">
        <span>姓名</span>
        <label class="doc-myinfo-top-name-right">{{data.content.doctor_name}}</label>
      </div>
      <div class="doc-myinfo-top-name-box">
        <span>医院</span>
        <label class="doc-myinfo-top-name-right">{{data.content.hospital}}</label>
      </div>
      <div class="doc-myinfo-top-name-box">
        <span>科室</span>
        <label class="doc-myinfo-top-name-right">{{data.content.department}}</label>
      </div>
      <div class="doc-myinfo-top-name-box">
        <span>职称</span>
        <label class="doc-myinfo-top-name-right">{{data.content.grade}}</label>
      </div>
    </div>

    <footer class="doc-myinfo-bottom">
      <p>修改请联系您的医生助手</p>
      <p>或拨打客服电话400-7991-122</p>
    </footer>
  </div>
</template>

<script>
  import util from '../../components/util';
  import axios from 'axios'
  import { Toast } from 'mint-ui';
  import {Indicator} from 'mint-ui';

  export default {
    name: 'docMyInfo',
    data () {
      return {
        authentication: '9abada2c209a05e2ebd462f7bf68c5cf',
        data: [],
      }
    },
    mounted() {
      this.getDocInfo();
    },

    methods: {
      // 获取医生信息
      getDocInfo() {
        Indicator.open();
        axios.post('/api/wx/baochuan_d/myinfo', {
          authentication: this.authentication
        }).then((result) => {
          Indicator.close();
          this.data = result.data;
        }).catch((error) => {
          Indicator.close();
          Toast('网络不给力 ! 请稍后再试');
        })
      }
    }
  }
</script>

<style lang="scss">
  .doc-myinfo-container-box {
    position: fixed; /* 固定 */
    height: 100vh;
    width: 100%;
    background-image: url('../../assets/img/bgPerfectInfo.png');
    background-size: 100% 100%;

    .doc-myinfo-top-box {
      color: #fff;
      font-size: 16px;
      margin: 10px 15px 0;

      .doc-myinfo-top-name-box {
        padding-top: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #bad6d3;

        .doc-myinfo-top-name-right {
          float: right;
          font-size: 14px;
        }
      }
    }
    .doc-myinfo-bottom {
      color: #d4d4d4;
      font-size: 14px;
      /*clear: both;*/
      /*display: block;*/
      text-align: center;
      /*margin: 0px auto;*/
      position: absolute;
      bottom: 20px;
      width:100%;
    }
  }
</style>
